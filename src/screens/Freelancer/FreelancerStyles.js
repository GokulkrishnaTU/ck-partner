import styled from "styled-components";
import { COLORS } from "../../assests/Themes/Themes";

export const FreelancerDiv = styled.div`
     display: flex;
    width: 100%;
`
export const FreelancerContDiv =styled.div`
     padding: 40px;
    width: 100%;
    padding-left: 280px;
    @media (max-width: 768px){ 
        padding: 40px;
       width: 100%;
    } 
`
export const FreelacerLinkDiv = styled.div`
        display: flex;
        border-radius: 5px;
        text-align: center;
        padding: 5px;
        align-items: center;
        justify-content: start;
        width: 170px;
        /* max-width: 170px; */
        cursor: pointer;
        background-color:${props => props.selected ? 'rgba(70, 105, 232, 0.25)' : 'white'};
        box-shadow: ${props => props.selected ? 'none' : `0px 7px 30px ${COLORS.boxShadow}`};
    @media (max-width: 768px){
       
    } 
`
export const SidebarFreelancer = styled.div`
        display: none;
        transition: all .5s ease ;
        
     @media (max-width: 768px){   
        display : block;
        position: fixed;
        height: 100%;
        z-index: 99;
        left: 0;    
        top: 0;
        box-shadow: 0px 7px 30px ${COLORS.boxShadow};
        background-color: ${COLORS.whiteColor};
        transform:  ${props => props.drawerIsOpen ? 'translateX(0)' : 'translateX(-110%)'};
    } 
`
export const FreelancerContents =styled.div`
    width: 100%;
     pointer-events: ${props => props.drawerIsOpen == false ?  'all' : 'none'};
     @media (max-width : 768px) {
        padding-left: 10px;
     }
`
export const DropdownTickets = styled.select`
    color: ${COLORS.blackColor};
    border: 1px solid ${COLORS.dropDown};
    font-size:12px ;
    border-radius: 5px;
`
export const customStylesAcceptModal = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        transform: 'translate(-50%, -50%)',
        height: '50%',
        minHeight: '300px',
        width: '30%',
        minWidth: '320px',
        fontSize: '70%',
        padding: '0',
    },

};