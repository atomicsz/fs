import React, { useState, useEffect } from 'react';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

import * as S from "./styles";

const schema = yup
    .object({
        email: yup
            .string()
            .email("Digite um email válido")
            .required("O email é obrigatório"),
    })
    .required();

export default function Payment() {
    const [productsOnCart, setProductsOnCart] = useState([])

    useEffect(() => {
        const listaProducts = localStorage.getItem('products')
        setProductsOnCart(JSON.parse(listaProducts) || [])
    }, [productsOnCart])

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    });

    function onSubmit(userData) {
        console.log(userData);
    }

    return (
        <>
            <S.Breadcrumb>
                <a href='/'>Home</a>
                <span>/</span>
                <p>Pagamento</p>
            </S.Breadcrumb>

            <S.ContainerMain>
                <S.ContainerLeft onSubmit={handleSubmit(onSubmit)}>
                    <div>
                        <S.Form>
                            <h3>DADOS DE CONTATO</h3>
                            <label>
                                <input
                                    className='inputEmail'
                                    type="email"
                                    placeholder="Email"
                                    {...register("name", { required: true })}
                                />
                                {errors.email && <span>{errors.email?.message}</span>}
                            </label>
                            <input id='check' type="checkbox" />
                            <label for='check' className='labelCheck'> Quero receber ofertas e novidades por email</label>
                        </S.Form>
                    </div>
                    <S.DivMid>
                        <h3>ENTREGA</h3>
                        <select disabled>
                            <option>Brasil</option>
                        </select>
                        <input type="text" placeholder="CEP" />
                        <a target="blank" href='https://buscacepinter.correios.com.br/app/endereco/index.php'><span>Não sei meu CEP</span></a>
                    </S.DivMid>
                    <S.DivButton>
                        <button>Continuar</button>
                    </S.DivButton>
                </S.ContainerLeft>
                <S.ContainerRight>
                    {productsOnCart.map(item => (
                        <S.Product>
                            <img src={item.image} alt={item.title} />
                            <p>{item.title} x {item.quantity}</p>
                            <span>R${item.price}</span>
                        </S.Product>
                    ))}
                    <S.Total>
                        {productsOnCart.length === 0 ? (
                            <p>Sem produtos no carrinho.</p>
                        ) : (
                            <>
                                <span>Total:</span>
                                <span>R$ 234,90</span> 
                            </> )}
                </S.Total>
                </S.ContainerRight>
            </S.ContainerMain>

        </>)
}