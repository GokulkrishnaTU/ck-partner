import styled from "styled-components";
import { COLORS } from "../../assests/Themes/Themes";

export const FreelancerDetailsMain = styled.div`
    width: 100%;
    padding-left: 300px;
    padding-top: 50px;
    /* pointer-events: ${props => props.drawerIsOpen == false ?  'all' : 'none'};  */
    @media (max-width: 768px){
        padding-left: 20px;
    }
`
export const ButtonDiv = styled.div`
    padding: 1rem;
    display: flex;
    gap: 10px;
    button{
        padding: 1rem;
        background-color: #4669E8;
        color: white;
        border: 0px;
        padding: 10px;
        border-radius: 10px;
        width: 100%;
        font-size: 12px;
    }
`
export const DropdownDiv1 = styled.div`
    display: flex;
    padding: 10px 20px;
    justify-content: space-between;
    align-items: center;
    p {
        padding-inline: 0px;
        color: ${COLORS.dropDown};
    }
`
export const DropdownTickets1 = styled.select`
    color: ${COLORS.dropDown};
    border: 1px solid ${COLORS.dropDown};
    font-size:12px ;
    padding: 10px ;
    max-width: 40%;
    width: 100%;
    border-radius: 5px;
`
export const customStylesTaken = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        transform: 'translate(-50%, -50%)',
        height: 'auto',
        minHeight: '300px',
        borderRadius: '8px',
        width: '30%',
        minWidth: '320px',
        fontSize: '70%',
        padding: '0',
    },
};
export const customStylesBuy= {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        transform: 'translate(-50%, -50%)',
        height: 'auto',
        minHeight: '300px',
        borderRadius: '8px',
        width: '30%',
        minWidth: '320px',
        fontSize: '70%',
        padding: '0',
    },
};
export const DetailsContent5 = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    max-width: 50%;
    width: 100%;
    padding: 10px;
`