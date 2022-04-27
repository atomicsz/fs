import React, { useState } from 'react';
import { PayPalButtons } from '@paypal/react-paypal-js'

import ModalPix from '../../components/ModalPix'

import pix from '../../assets/pix-106.svg'
import Swal from 'sweetalert2'

import donateSvg from '../../assets/creditcard.svg'

import * as S from "./styles";

export default function Donate() {
    const [showModal, setShowModal] =  useState(false)


    return (
        <>
            <S.Breadcrumb>
                <a href='/'>Início</a>
                <span>/</span>
                <p>Doação</p>
            </S.Breadcrumb>

            <S.ContainerMain>
                <img src={donateSvg} />
                <div>
                    <h1>
                        O DevShop não possui fins lucrativos, o projeto  foi desenvolvido apenas para estudo e futuras aplicações.
                    </h1>
                    <p>No entanto você pode apoiar o projeto, contribua com <span>R$ 1,00</span>.</p>
                    <button onClick={() => setShowModal(true)}> <img src={pix} alt="Icone Pix" /> </button>
                    <PayPalButtons createOrder={ (data, actions) => {
                        return actions.order.create({
                            purchase_units: [{ 
                                amount:{
                                    value: '1'
                                }
                            }]
                        })
                    }} 
                    onApprove={(data, actions) => {
                        return actions.order.capture().then( details => {
                            Swal.fire(
                                'Você apoiou o nosso projeto.',
                                'Agradecemos pelo apoio!',
                                'success'
                              )
                        })
                    }} />
                </div>
            </S.ContainerMain>

            {showModal && <ModalPix onClick={() => setShowModal(false)} active={showModal} />}
        </>
    )
}
