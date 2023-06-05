import React, { useEffect } from 'react'
import { IoIosLogOut } from 'react-icons/io'
import { useLocation, useNavigate } from 'react-router-dom'
import swal from 'sweetalert'
import viewTicketsLogo from '../../assests/images/Vector.png'
import { User } from '../LogIn/UserContext'
import { Div, ItemContentDiv, Logo, P1, P2, ProfileDiv, SidebarDiv, SidebarHeadingDiv, SidebarItemDiv2, Title } from '../service-partner/ServiceEngineerStyle'
import { FreelacerLinkDiv } from '../Freelancer/FreelancerStyles'
import { useSelector, useDispatch } from 'react-redux';
import { NavOption } from '../ServiceEngSidebar/ServiceEngSidebarStyle'
import BuyBackCkeckLogo from '../../assests/images/Transger.png'

const FreelancerSidebar = () => {
    // const { freelancer, getFreelancer } = User()
    const {user: freelancer} = useSelector((state) => state.user);
    const navigate = useNavigate()
    const location = useLocation()
    const { menuOpen } = useSelector((state) => state.user);
    const Logout = () => {
        swal({
            text: `Are you sure you want to logout?`,
            icon: "warning",
            buttons: true,
            dangerMode: true,
        }).then((logout) => {
            if(logout){
                localStorage.clear("user_id")
            localStorage.clear("userid")
            navigate('/login')
            }else{
                
            } 
        })
    }
    // useEffect(() => {
    //   getFreelancer()
    


    // }, [freelancer?.id])
    
  return (
    <Div>
                <SidebarDiv menuOpen ={menuOpen}>
                    <NavOption>
                    <SidebarHeadingDiv>
                        <ProfileDiv><P1>Hi, {freelancer?.name}</P1> 
                        {/* <span onClick={() => Logout()}><IoIosLogOut size={30} /></span> */}
                        </ProfileDiv>

                        <P2>Welcome to clikekart</P2>
                    </SidebarHeadingDiv>
                    <SidebarItemDiv2>
                        <FreelacerLinkDiv  selected = {location.pathname == '/freelancer/view-tickets' || location.pathname == '/freelancer/view-tickets/details' ? true : false} onClick={() => navigate('view-tickets')}>
                            <ItemContentDiv><Logo src={viewTicketsLogo} />
                                <Title>View Tickets</Title></ItemContentDiv>
                        </FreelacerLinkDiv>
                    </SidebarItemDiv2>
                    <SidebarItemDiv2>
                        <FreelacerLinkDiv  selected = {location.pathname == '/freelancer/buy-back-check' || location.pathname == '/freelancer/buy-back-check/details' ? true : false} onClick={() => navigate('buy-back-check')}>
                            <ItemContentDiv><Logo src={BuyBackCkeckLogo} />
                                <Title>Buy Back check</Title></ItemContentDiv>
                        </FreelacerLinkDiv>
                        
                    </SidebarItemDiv2>
                    </NavOption>
                </SidebarDiv>
    </Div>
  )
}

export default FreelancerSidebar