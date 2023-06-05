import styled from "styled-components";
import { COLORS } from "../../assests/Themes/Themes";

export const Modal = styled.div`
  display: flex;
  position: fixed;
  justify-content: center;
  align-items: center;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 111112;
  background-color: rgba(0,0,0, 0.6);
`
export const ModalContainer = styled.div`
      /* width: 660px; */
    height: auto;
    display: flex;
    flex-direction: column;
    /* padding: 1.1rem; */
    margin: 20px;
    /* padding-bottom: 20px; */
    min-width: 300px;
    background: white;
    border: 1px solid grey;
    /* overflow: scroll; */
    @media (max-width: 768px){
        /* width: 500px; */
        /* height: 400px; */
    }
    @media (max-width: 490px){
        width: 300px;
    }
`
export const ModalHeader = styled.div`
  display: flex;
  position: sticky;
  top: 0;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  border-bottom: 1px solid gray;
  margin-bottom: 1rem;
  background-color: white;
  h1{
    font-size: 20px;
    font-weight: 400;
  }
  span{
    cursor: pointer;
  }
`
export const ModalContent = styled.div`
/* width: 100%; */
  /* height: auto; */
  display: flex;
  justify-content: center;
  overflow-y: auto;
      flex-direction: column;

  @media (max-height: 540px){
    height: 280px;
    /* overflow-y: auto; */
    ::-webkit-scrollbar{
    display: none;
  }
  }
  
`
export const SpecDiv = styled.div`
    display: grid;
    grid-template-columns: repeat(3, auto);
        gap: 10px;
        padding: 20px;
        @media (max-width: 768px) {
             grid-template-columns: repeat(2, auto);
             justify-content: center;
        }
        @media (max-width: 490px) {
            grid-template-columns: repeat(1, auto);
             justify-content: center;
        }
`
export const Pdiv = styled.div`
    display:flex;
`
export const ItemDiv = styled.div`
    width: 200px;
    height: 60px;
    background-color: rgba(0,0,0,0.03);
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    border: ${(props) => props.border ? `1px solid red` : 'none'};
    gap: 5px;
    p{
        font-size: 12px;
    }
    label{
        font-size: 12px;
        padding-left: 10px;
        font-weight: 200;
    }

`
export const FooterDiv = styled.div`
  display: flex;
  width: 100%;
  padding: 20px;
`
export const CommentCard = styled.div`
  display: flex;
  font-size: 12px;
  background-color: rgba(0,0,0,0.03);
  /* border-radius: 5px; */
  padding: 20px;
  width: auto;
`;
export const NameDiv = styled.div`
  display: flex;
  font-size: 12px;
  width: 100%;
  justify-content: flex-end;
`;