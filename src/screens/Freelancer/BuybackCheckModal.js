import React from 'react'
import {Container, SubContainer,Icon,Content} from './BuybackModalStyled'
import { GrFormClose} from "react-icons/gr";
function BuybackCheckModal({setIsOpenModal}) {
  return (
    <Container>
      <SubContainer>
          <Icon>
            <GrFormClose size={20} onClick={()=>setIsOpenModal(false)}/>
            </Icon>
            <Content>
            <select>
            <option>Select service Engineer</option>
            <option>Select service Engineer</option>
            <option>Select service Engineer</option>
            </select>
            <button >Submit</button>
            </Content>
         
          
      </SubContainer>
    </Container>
  )
}

export default BuybackCheckModal
