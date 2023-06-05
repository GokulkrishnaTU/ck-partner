import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { IoIosLogOut } from 'react-icons/io';
import { useLocation, useNavigate } from 'react-router-dom';
import swal from 'sweetalert';
import EngineerIcon from '../../assests/images/CarbonCloudServiceManagement 1.png';
import { User } from '../LogIn/UserContext';
import {
  Div,
  ItemContentDiv,
  LinkDiv,
  Logo,
  P1,
  P2,
  ProfileDiv,
  SidebarDiv,
  SidebarHeadingDiv,
  SidebarItemDiv,
  Title,
} from '../service-partner/ServiceEngineerStyle';
import { NavItems, NavOption } from './ServiceEngSidebarStyle';
import buyBackIcon from '../../assests/images/Transger.png';
import { useSelector, useDispatch } from 'react-redux';
import { toggleMenu } from '../features/userSlice/userSlice'; 
import viewTicketsLogo from '../../assests/images/Vector.png'

const ServiceEngSidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  console.log('location: ', location);
  const [isEngineer, setIsEngineer] = useState(false);
  // const { currentUser, getServicePartnterD } = User();
  const {user : currentUser} = useSelector((state) => state.user)
  const { menuOpen } = useSelector((state) => state.user);
  const dispatch = useDispatch()
  // const engineer = () => {
  //   setIsEngineer((isEngineer) => !isEngineer);
  // };
  // useEffect(() => {
  //   getServicePartnterD();
  // }, []);
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
    <Div>
      <SidebarDiv menuOpen={menuOpen}>
        <NavOption>
          <SidebarHeadingDiv>
            <ProfileDiv>
              <P1>Hi {currentUser.name}</P1>
              {/* <span onClick={() => Logout()}><IoIosLogOut size={30} /></span> */}
            </ProfileDiv>
            <P2>Welcome to clikekart</P2>
          </SidebarHeadingDiv>
          <NavItems>
            <SidebarItemDiv  onClick={() => {navigate('service-engineers') ; dispatch(toggleMenu(false))}}>
              <LinkDiv
                selectedItem={
                  location.pathname == '/service-partner/service-engineers'
                    ? true
                    : false
                }
                onClick={() => {navigate('service-engineers') ; dispatch(toggleMenu(false))}}

              >
                <ItemContentDiv onClick={() => {navigate('service-engineers') ; dispatch(toggleMenu(false))}}>
                  <Logo src={EngineerIcon} />
                  <Title>Service Engineers</Title>
                </ItemContentDiv>
              </LinkDiv>
            </SidebarItemDiv>
            <SidebarItemDiv onClick={() => {navigate('view-tickets'); dispatch(toggleMenu(false))}}
                >
              <LinkDiv
                selectedItem={
                  location.pathname == '/service-partner/view-tickets' ||
                  location.pathname ==
                    '/service-partner/view-tickets/service-details'
                    ? true
                    : false
                }
                onClick={() => {navigate('view-tickets'); dispatch(toggleMenu(false))}}
              >
                <ItemContentDiv onClick={() => {navigate('view-tickets'); dispatch(toggleMenu(false))}}>
                  <Logo src={viewTicketsLogo} />
                  <Title>View-Tickets</Title>
                </ItemContentDiv>
              </LinkDiv>
            </SidebarItemDiv>
            <SidebarItemDiv onClick={() => {navigate('buy-back'); dispatch(toggleMenu(false))}}
                >
              <LinkDiv
                selectedItem={
                  location.pathname == '/service-partner/buy-back'
                    ? true
                    : false
                }
                onClick={() => {navigate('buy-back'); dispatch(toggleMenu(false))}}
              >
                <ItemContentDiv  onClick={() => {navigate('buy-back'); dispatch(toggleMenu(false))}}>
                  <Logo src={buyBackIcon} />
                  <Title onClick={() => {navigate('buy-back'); dispatch(toggleMenu(false))}}>Buy-Back</Title>
                </ItemContentDiv>
              </LinkDiv>
            </SidebarItemDiv>
          </NavItems>
        </NavOption>
      </SidebarDiv>
    </Div>
  );
};

export default ServiceEngSidebar;
