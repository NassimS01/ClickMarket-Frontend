import styled from "styled-components";

export const ModalStyled = styled.div`
    border: 2px solid red;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-weight: 500;
    background-color: ghostwhite;
    border-radius: 10px;
    width: 100%;
    height: 70%;
    padding: 20px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease-in-out;
    z-index: 999;

    @media (min-width: 768px) {
        width: 50%;
    }

    h3 {
        text-align: center;
        padding: 5px 0;
        margin-bottom: 10px;
    }

    form {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 100%;

        .image-container{
            width: 100%;
            display:flex;
            align-items:center;
        }

        .product-image{
            height: 120px;
            width: 120px;
            object-fit: cover;
            margin: 1rem;
        }

        .hidden{
            display:none;
        }

        .image-icon{
            margin-top: 1.2rem;
        }

        .name-price-container{
            display: flex;
        }

        .product-name-price{
        display: flex;
        }

        .category-state-container{
            display: flex;
        }


            .price-icon{
                position:absolute;
                left: 0;
                top: 30%;
            }

            label {
                margin-bottom: 5px;
            }

            input,
            textarea,
            select {
                padding: 8px;
                border: 1px solid #ccc;
                border-radius: 4px;
                outline: none;
            }
        }

        .content-btn {
            display: flex;
            justify-content: center;
            align-items: center;

            button {
                padding: 10px 20px;
                background-color: #007bff;
                color: #fff;
                border: none;
                border-radius: 5px;
                cursor: pointer;
                outline: none;

                &:hover {
                    background-color: #0056b3;
                }
            }
        }
`;