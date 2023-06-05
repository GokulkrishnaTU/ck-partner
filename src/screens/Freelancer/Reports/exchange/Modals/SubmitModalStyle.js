import styled from "styled-components";
// import { colors } from "../../../consts/themes";

export const ModalDiv = styled.div`
width: 400px;
display: flex;
flex-direction: column;
align-items: center;
padding: 2rem;
gap: 1rem;
img{
    width: 250px;
    height: 50px;
}
    
`
export const ThankDiv = styled.div`
        text-align: center;
          width: 100%;

    p{
        font-size: 16px;
        letter-spacing: 1px;
      
        
    }
    @media (max-width: 490px){
            width: 80%;
        }
         @media (max-width: 360px){
            width: 60%;
        }

`
export const ModalButton = styled.div`
    button{
        border: 0;
        background-color: ${colors.blue};
        color: white;
        padding: 10px 40px;
    border-radius: 10px;

    }
`