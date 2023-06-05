import styled from "styled-components"
import { COLORS } from "../../assests/Themes/Themes"

export const DropdownDiv = styled.div`
    gap: 10px;
    display: flex;
    
`

export const Dropdown = styled.select`
    color: black;
    border: 1px solid ${COLORS.dropDown};
    border-radius: 5px;
    font-size:12px ;
`
export const AssignBtn = styled.button`
        padding: 1rem;
        background-color: #4669E8;
        color: white;
        border: 0px;
        padding: 10px 18px;
        border-radius: 4px;
        font-size: 12px;
        cursor: pointer;
`
export const TableTickets = styled.table`
    width: 100%;
    font-family: "Poppins", sans-serif;
    font-weight: 100;   
    border-collapse: collapse;
    th{
        font-family: "Poppins", sans-serif;
        font-weight: 300;
        font-size: 0.8rem;
        background-color: rgba(70, 105, 232, 0.25);;
        height: 50px;
    }
    td{
        text-align: center;
        font-size: 0.8rem;
        padding: 10px;
        font-weight: 300;
        a{
            cursor: pointer;
            color: ${COLORS.linkColor};
            text-decoration: underline;
        }
    }
    tr{
        border: 1px solid;
        height: 50px;
    :hover{
        background-color: hsl(232deg 100% 98%);
    }
    }

`
export const AssignDiv = styled.div`
    display: flex;
    flex-direction: column;
    
    a{
        padding-top: 10px;
        text-decoration: underline;
        color: ${COLORS.linkColor};
        /* pointer-events: ${props => props.isOpen == false ?  'all' : 'none'}; */  
    }

`
export const CallFieldDiv = styled.div`
    display: flex;
    justify-content: space-around;
    div{
        padding: 1rem;
    }
    @media (max-width: 1330px){
        display: flex;
        flex-direction: column;
    }

    p{
        font-size: 12px;
    }
`
export const Dropdown1 = styled.select`
    border: 1px solid ${COLORS.dropDown};
    border-radius: 4px;
    width: 100%;
    padding: 10px;
    color: ${COLORS.dropDown};

`
export const InputField2 = styled.input`
    border: 1px solid ${COLORS.dropDown};
    color: ${COLORS.blackColor};
    width: 100%;   
    padding: 10px 28px;
    border-radius: 4px;
    p{
        color: ${COLORS.dropDown};
    }
`
export const FieldDiv = styled.div`
    padding: 1rem;
    p{
        font-size: 12px;
        
    }
`

export const ModalDiv = styled.div`
    width: 100%;
    height:100%;
    font-family: "Poppins", sans-serif;
`

export const InputField3 = styled.input`
    border: 1px solid ${COLORS.dropDown};
    color: ${COLORS.blackColor};
    width: 100%;   
    padding: 10px 28px;
    border-radius: 4px;
    p{
        color: ${COLORS.dropDown};
    }
    @media (max-width: 600px){
        border: 1px solid ${COLORS.dropDown};
    color: ${COLORS.blackColor};
    width: 100%;   
   
    border-radius: 4px;
    }
`
export const InputField4 = styled.input`
    border: 1px solid ${COLORS.dropDown};
    color: ${COLORS.blackColor};
    width: 100%;   
    padding: 10px 28px;
    border-radius: 4px;
    p{
        color: ${COLORS.dropDown};
    }
`
export const ViewTicketsDiv = styled.div`
    width: 100%;
    padding: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-shadow: 0px 7px 30px rgba(70, 105, 232, 0.12);
    border-radius: 10px;
    button{
        background-color: #4669E8;
        color: white;
        border: 0px;
        padding: 15px;
        border-radius: 10px;
    }
    p{
        font-family: "Poppins",sans-serif;
        font-size: 1.2rem;
        @media (max-width: 600px){
            padding: 10px;
        }
    }
    label{
        font-size: 12px;
        color: #c4c4c4;
    }
    @media (max-width: 600px) {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    @media (max-width: 234px){    
        min-width: 155px;
        width: 100%;
    }
`
export const ViewTicketsMainDiv = styled.div`

    width: 100%;
     /* pointer-events: ${props => props.drawerClose == false ?  'all' : 'none'};  */
     @media (max-width: 768px){
            padding-left: 10px;
        }
`