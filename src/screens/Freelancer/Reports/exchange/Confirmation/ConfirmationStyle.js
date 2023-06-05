import styled from 'styled-components';
import { colors } from '../../../consts/themes';

export const MainDiv = styled.section`
  padding-top: 120px;
  * {
    box-sizing: border-box;
  }
`;

export const ContentWrapper = styled.div`
  max-width: 1600px;
  margin: auto;
  padding: 0 15px;
`;
export const ID = styled.div`
  width: 130px;
  flex-shrink: 0;
`;

export const Product = styled.div`
  width: 330px;
  padding: 0 30px 0 0;
  flex-shrink: 0;
`;

export const Date = styled.div`
  width: 230px;
  flex-shrink: 0;
`;

export const Row = styled.div`
  border-bottom: 1px solid black;
  display: flex;
  padding-block: 20px;
`;

export const Status = styled.div`
  flex-shrink: 0;
`;

export const Pricing = styled.div`
  width: 425px;
  padding: 0 30px 0 0;
`;

export const ProductDesc = styled.p`
  color: rgba(0, 0, 0, 0.6);
`;
export const TextLight = styled.p`
  color: rgba(0, 0, 0, 0.6);
`;

export const Button = styled.button`
  border: none;
  border-radius: 10px;
  background-color: ${colors.blue};
  color: white;
  padding: 13px 65px;
  cursor: pointer;
`;

export const Buttons = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
`;

export const SelectReason = styled.select`
  border: 1px solid #000000;
  border-radius: 10px;
  width: 371px;
  height: 46px;
  outline: none;
  margin-top: 30px;
  padding: 0 10px;
  font-size: 17px;
`;

export const Reject = styled.button`
  background-color: rgba(256, 0, 0, 0.5);
  border: none;
  width: 178px;
  height: 46px;
  border-radius: 8px;
  margin-top: 25px;
  color: white;
  cursor: pointer;
  font-size: 17px;
`;

export const RedText = styled.p`
  color: ${colors.red};
`;
