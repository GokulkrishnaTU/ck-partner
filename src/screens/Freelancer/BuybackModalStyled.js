import styled from "styled-components";
import { COLORS } from "../../assests/Themes/Themes";
export const Container = styled.div`
 position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2000;
`
export const SubContainer = styled.div`
 width:350px;
 height:160px;
 background-color: white;
 display:flex;
 flex-direction: column;
 border-radius: 5px;
 padding-inline:20px;
 padding:5px;
 /* justify-content: center; */

 /* select{
    width: 200px;
 } */

 @media (min-width:360px) and (max-width:400px){
    width:290px;
 }
 @media (min-width:280px) and (max-width:359px){
    width:270px;
 }
 
`
export const Icon = styled.div`
   /* width:300px; */
   display:flex;
   justify-content: flex-end;
`
export const Content = styled.div`
   display:flex;
   flex-direction: column;
   justify-content: center;
   padding-top: 30px;
   align-items: center;
   select{
      height: 25px;
      width:250px;
      border-radius: 3px;
      background-color: ${COLORS.white};
      border:1px solid gray; 
      outline: none;
      color: gray;
      font-size: 12px;
   }
   
   button{
      margin-top: 20px;
      background-color: ${COLORS.linkColor};
      width:90px;
      height:25px;
      border:none;
      border-radius: 5px;
      color:${COLORS.white};
      font-size: 12px;
   }
`