import React, { useRef } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { AiFillCaretDown } from 'react-icons/ai';
import { BiUser, BiUserCircle } from 'react-icons/bi';
import { IoMdArrowDropdown, IoMdArrowDropup } from 'react-icons/io';
import { COLORS } from '../../assests/Themes/Themes';
import { User } from '../LogIn/UserContext';
import { Div } from '../service-partner/ServiceEngineerStyle';
import { AccountDiv, DrawerIcon, HeaderDiv, HeaderHead, PopUpMenu, PopUpMenu1, UserDiv } from './HeaderStyle';
import Logo from '../../assests/images/logo.png';
import '../../App.css';
import { useDispatch, useSelector } from 'react-redux';
import { toggleMenu } from '../features/userSlice/userSlice';
import { useNavigate } from 'react-router-dom';
import swal from 'sweetalert';
import { FiLogOut } from 'react-icons/fi';

const Header = () => {
  const role = localStorage.getItem('role');
  const { menuOpen } = useSelector((state) => state.user);
//   const { currentUser, freelancer, getFreelancer, getServicePartnterD } =
//     User();
const {user} = useSelector((state) => state.user);
    const navigate = useNavigate()
    const closeRef = useRef(false);
    const profileRef = useRef(false)
  const dispatch = useDispatch();
  const handleClickOutside = (e) => {
    if (closeRef.current && !closeRef.current.contains(e.target)) {
        // toggleDrawer()
        dispatch(toggleMenu(true));
      }
     else if(profileRef.current && !profileRef.current.contains(e.target)){
      profileRef(true)
     }
  }
  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  },[])
//   useEffect(() => {
    
//     if (role == 1) {
//       getFreelancer();
//     } else {
//       getServicePartnterD();
//     }
//   }, [role]);

  const [popUp, setPopUp] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [menu , setMenu] = useState(false)

  const Logout = () => {
    swal({
      text: `Are you sure you want to logout?`,
      icon: 'warning',
      buttons: true,
      dangerMode: true,
    }).then((logout) => {
      if (logout) {
        localStorage.clear('user_id');
        localStorage.clear('userid');
        navigate('/login');
      } else {
      }
    });
  };
  return (
    <HeaderDiv>
      <DrawerIcon ref = {closeRef}>
        <div>
          <div
            class={`hamburger  ${menuOpen ? '' : 'is-active'}`}
            id='hamburger-3'
            onClick={() => dispatch(toggleMenu())}
          >
            <span class='line'></span>
            <span class='line'></span>
            <span class='line'></span>
          </div>
        </div>
        {/* <img src={HamburgerMenu} onClick={toggleDrawer} alt='' width={30} /> */}
      </DrawerIcon>
      <HeaderHead>
        <img src={Logo} />
        <AccountDiv>
        <span>
          <BiUserCircle size={30} />{' '}
          <label onClick={() => setPopUp(!popUp)}>
            {user?.name}
            {!popUp ? <IoMdArrowDropdown /> : <IoMdArrowDropup />}{' '}
          </label>
        </span>
        </AccountDiv>
        <UserDiv onClick={() => setMenu(!menu)}>
            <span style={{paddingRight: '5px'}}><BiUserCircle size={30} /></span>
            {!menu ? <IoMdArrowDropdown /> : <IoMdArrowDropup />}
        </UserDiv>
        {menu && <PopUpMenu1  ref={profileRef}>
            <label> <BiUser/>{user?.name}</label>
            <label onClick={() => Logout()}> <FiLogOut/>Logout </label>
            </PopUpMenu1>}

        {popUp && (
          <PopUpMenu ref={profileRef}>
            <label onClick={() => Logout()}><FiLogOut/>Logout</label>
          </PopUpMenu>
        )}
      </HeaderHead>
      
    </HeaderDiv>
  );
};

export default Header;
