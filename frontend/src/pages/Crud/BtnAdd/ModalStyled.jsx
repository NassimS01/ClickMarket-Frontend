import styled from "styled-components";

export const ModalStyled = styled.div`
    border: 2px solid red;
    position: absolute;
    top: 2em;
    right: 2em;
    font-weight: 500;
    background-color: ghostwhite;
    border-radius: 10px;
    width: 365px;
    height: 325px;

    h3{
        text-align: center;
        padding: 5px 0px 5px 0px;
    }

    form{
        border-radius: 9px;
        background-color: ghostwhite;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        height: 280px;

        & div{
            padding: 0em 2em;
            display: flex;
            flex-direction: row;
            justify-content: space-evenly;

            & input[type="text"]{
            width: 50%;
            outline: none;
           }

           & input[type="number"]{
            width: 50%;
            outline: none;
           }

           & textarea{
            outline: none;
           }

           & select{
            width: 50%;
           }
        }

        & .content-btn{
            & button{
              padding: 0.3em 1em;  
            }
        }
    }

`;