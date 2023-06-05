import React from 'react'
import { HeaderDiv, HeaderHead } from '../../../../Header/HeaderStyle'
import Logo from '../../../../../assests/images/whitelogo.png'

const Header = () => {
  return (
    <HeaderDiv style={{backgroundColor: '#282828', height: '60px'}}>
        <HeaderHead style={{paddingLeft: '50px'}}>
            <img src={Logo}/>
        </HeaderHead>

    </HeaderDiv>
  )
}

export default Header