import styled from "styled-components";
import { COLORS } from "../../assests/Themes/Themes";

export const HeaderDiv = styled.div`
    width: 100%;
    height: 80px;
    background-color: white;
    position: fixed;
    top: 0;
    z-index: 999;
    box-shadow: 1px 2px 7px 3px rgb(70 105 232 / 12%);
  display: flex;
  align-items: center;

`
export const DrawerIcon = styled.div`
margin-left: 20px;
  @media screen and (min-width: 768px) {
    display: none;
  }
`;
export const HeaderHead = styled.div`
display: flex;
justify-content: space-between;
padding: 20px;
    width: 100%;
    p{
font-size: 24px;
    }
    span{
        display: flex;
        gap: 10px;
        align-items: center;
        padding-right: 30px;
         /* display: none; */
      
    }
    img{
        padding-left: 5px;
        width: 150px;
    }
    label{
      /* @media (max-width: 768px){
        display: none;
      } */
    }
    
`
export const AccountDiv = styled.div`
  @media (max-width: 768px){
        display: none;
      }
`
export const UserDiv = styled.div`
 display: flex;
 align-items: center;
        @media screen and (min-width: 768px) {
    display: none;
  }
`
export const PopUpMenu = styled.div`
    position: absolute;
  display: flex;
  flex-direction: column;
  /* right: 0; */
  background-color: #ffffff;
     right: 32px;
    top: 55px;
  border-radius: 2px;
      box-shadow: 2px 0px 4px 1px ${COLORS.boxShadow};
  label{
    display: flex;
    align-items: center;
    gap: 5px;
    cursor: pointer;
    padding: 10px 20px;
    border-bottom: 1px solid ${COLORS.boxShadow };
  }
   @media (max-width: 768px) {
    display: none;
  }
`
export const PopUpMenu1 = styled.div`
    position: absolute;
  display: flex;
  flex-direction: column;
  /* right: 0; */
  background-color: #ffffff;
     right: 10px;
    top: 55px;
  border-radius: 2px;
  box-shadow: 2px 2px 7px ${COLORS.boxShadow};
  label{
    display: flex;
    align-items: center;
    gap: 5px;
    cursor: pointer;
    padding: 10px 20px;
    border-bottom: 1px solid ${COLORS.boxShadow };
  }
  @media (min-width: 768px) {
    display: none;
  }
`