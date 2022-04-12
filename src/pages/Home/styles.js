import styled from 'styled-components'
import theme from "../../styles/theme"

export const SeeProductsCards = styled.div`
    max-width: 90vw;

    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin: 2rem auto 0 auto;
    gap: 1rem;

`

export const ProductCard = styled.div`
    width: 320px;
    height: 300px;
    flex: none;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: ${theme.black};
    cursor: pointer;

    img {
        width: 100%;
        height: 100%;
        opacity: 0.7;
        object-fit: cover;
        transition: 0.5s;
    }

    &:hover img {
        opacity: 0.5;
    }
`

export const ContentProductCard = styled.div`
    position: absolute;
    color: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;

    h1 {
        font-size: 1.7rem;
    }

    p {
        margin-top: 10px;
    }

    a {
        color: ${theme.white};
        font-weight: ${theme.fonts.weight.boldest};
        text-transform: uppercase;
        background: #FF7D1B;
        padding: 7px 10px;
        margin-top: 10px;
        border-radius: 1px;
    }
`

export const TitleProducts = styled.div`
    margin: 2.5rem auto 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h1 {
        text-transform: uppercase;
        font-size: 1.5rem;
        color: ${theme.gray2};
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
        
    }

    p {
        margin-top: 10px;
    }
`

export const SomeProducts = styled.div`
    display: flex;
    width: 80vw;
    margin: 3rem auto 0 auto;
    height: 100%;

    ul {
        display: flex;
        width: 100%;
        flex-wrap: wrap;
        justify-content: center;
        gap: 5rem;

        li {
            width: 225px;
            height: 400px;
            position: relative;

            img {
                width: 100%;
                height: 60%;
            }

            div {
                margin: 0 auto;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                margin-top: 10px;
                
                p {
                    text-align: center;
                    font-size: 0.9rem;
                    text-transform: uppercase;
                    font-weight: 500;
                }

                span {
                    margin-top: 10px;
                    font-weight: ${theme.fonts.weight.boldest};
                    font-size: 1.3rem;
                }
            }
        }
    }
`

export const ButtonSeeAllProducts = styled.div`
    display: flex;
     a {
        color: #fff;
        text-transform: uppercase;
        font-weight: ${theme.fonts.weight.boldest};
        display: flex;
        justify-content: center;
        align-items: center;
        width: 350px;
        height: 40px;
        background: #FF7D1B;
        margin: 1rem auto 10rem auto;
}
`

export const InstagramFooter = styled.div`
    width: 90%;
    justify-content: center;
    margin: 0 auto;
    display: flex;
    align-items: center;
    color: ${theme.gray2};

    svg {
        font-size: 4rem;
    }
`

export const InstagramText = styled.div`
    margin-left: 0.5rem;
    h1 {
        font-size: 0.8rem;
        text-transform: uppercase;
        font-weight: ${theme.fonts.weight.bold};
    }
    span {
        font-size: 1.4rem;
        font-weight: ${theme.fonts.weight.boldest};
    }
`
