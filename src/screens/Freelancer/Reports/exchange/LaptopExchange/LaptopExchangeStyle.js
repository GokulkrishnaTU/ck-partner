import styled from "styled-components";
// import Colors from "../../../consts/Colors";
// import { colors } from "../../../consts/themes";
import { COLORS } from "../../../../../assests/Themes/Themes";

export const ExchangeContainer = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 80px;
`;
export const Exchangediv = styled.div`
  margin-left: 100px;
  padding-top: 20px;
  @media (max-width: 500px) {
    margin-left: 10px;
  }
`;
export const ExHeading = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 440px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 5px;
  }
  label {
    font-size: 12px;
    color: #000000;
    opacity: 0.5;
  }
`;
export const ExchangeContents = styled.div`
  /* display: flex; */
  padding-top: 20px;
  width: 60%;
  /* display: grid; */
  /* grid-template-columns: repeat(2, auto); */
  /* justify-content: space-between; */
  @media (max-width: 960px) {
    /* flex-wrap: wrap; */
    width: 80%;
  }
`;
export const WorkingCondition = styled.div`
  display: flex;
  flex-direction: column;
  h5 {
    margin: 0;
    font-size: 16px;
    font-weight: 500;
  }
`;
export const ItemName = styled.p`
  font-size: 13px;
`;
export const SpecificationDiv = styled.div`
  display: flex;
  flex-direction: column;
  h5 {
    margin: 0;
    font-size: 16px;
    font-weight: 500;
  }
`;
export const ComponentDiv = styled.div`
  display: flex;

  h5 {
    margin: 0;
    font-size: 16px;
    font-weight: 500;
  }
`;
export const SingleItem = styled.div`
  display: flex;
  justify-content: space-between;
  width: 850px;
  margin: 10px;
  @media (max-width: 1020px) {
    width: 700px;
  }

  @media (max-width: 960px) {
    flex-wrap: wrap;
    width: auto;
  }
  @media (max-width: 840px) {
    gap: 10px;
  }
`;
export const ComponentHeading = styled.div`
  display: flex;
  justify-content: space-between;
  width: 900px;
  @media (max-width: 1020px) {
    width: 700px;
  }
  @media (max-width: 960px) {
    /* flex-wrap: wrap; */
    width: auto;
  }
  @media (max-width: 740px) {
    display: none;
  }
`;
export const ItemsDiv = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 20px;
  gap: 10px;
`;
export const ItemsDiv1 = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 20px;
  gap: 15px;
`;
export const Dropdown = styled.select`
  width: 260px;
  border-radius: 9px;
  height: 40px;
  border: 1px solid gray;
  color: gray;
`;
export const SwitchDiv = styled.div`
  width: 80px;
`;
export const SwitchDiv1 = styled.div`
  width: 260px;
`;
export const RadioDiv = styled.div`
  display: flex;
  gap: 20px;
  /* width:60px; */
  label {
    font-size: 13px;
    color: gray;
  }
`;
export const ItemNameDiv = styled.div`
  width: 80px;
`;
export const DropdownDiv = styled.div`
  width: 260px;
  input {
    width: 260px;
    border-radius: 9px;
    /* height: 40px; */
    padding: 9px 5px;
    outline: none;
    border: 1px solid gray;
    color: gray;
  }
  textarea{
    width: 260px;
    border-radius: 9px;
    border: 1px solid gray;
    color: gray;
    resize: none;
    padding: 7px;
  }
  
`;
export const DropdownDiv3 = styled.div`
width: 260px;
/* height: 40px; */
`
export const SubmitButtonDiv = styled.div`
  button {
    width: 250px;
    height: 50px;
    background-color: ${COLORS.linkColor};
    border-radius: 10px;
    border: 0;
    margin: 20px 10px;
    color: white;
  }
`;
