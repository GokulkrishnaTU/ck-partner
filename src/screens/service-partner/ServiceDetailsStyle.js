import styled from "styled-components"
import { COLORS } from "../../assests/Themes/Themes"

export const ServiceDetailsDiv = styled.div`
    width: 100%;
    /* pointer-events: ${props => props.sidebarIsOpen == false ?  'all' : 'none'};  */
    padding-left: 280px;
    padding-top: 50px;
    @media (max-width: 768px){    
        width: 100%;
        padding-left: 40px;
    } 
    
`
export const IconDiv = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    p{
        padding-inline: 25px;
    }
    
`
export const BackIcon = styled.span`
    color: ${COLORS.blackColor};
    font-weight: 100;
    cursor: pointer;
`

export const DetailsDiv = styled.div`
    box-shadow: 0px 7px 30px ${COLORS.boxShadow};
    padding: 10px;
    width: 100%;
    max-width: 425px;
    margin-top: 20px;
    @media (max-width: 460px){
        width: 350px;
    } 
    @media (max-width: 360px){
        width: 300px;
        
    } 

    a{
        font-size: 12px;
        color: ${COLORS.linkColor};
        cursor: pointer;
        display: flex;

        
    }
`
export const Details = styled.div`
    display: flex;
    font-family: "Poppins", sans-serif;
    padding: 3rem;
    justify-content: space-around;
    align-items: center;
    @media (max-width: 1400px){
        display: flex;
        flex-direction: column;
        padding-top: 1rem;
    } 

`
export const DetailsHeading = styled.h3`
    font-weight: 300;
    font-size: 18px;
    text-align: center;
    padding-bottom: 20px;

`
export const DetailsContent = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    max-width: 40%;
    width: 100%;
`
export const ItemsName = styled.p`
    font-size: 12px;
        color: ${COLORS.blackColor};
        word-wrap: break-word;
// min-width: -3px;
max-width: 127px;
`
export const ItemsName1 = styled.p`
    color: ${COLORS.dropDown};
    font-size: 12px;
`
export const Contents = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`
export const Icon3 = styled.span`
    color: ${COLORS.linkColor};
    padding: 2px;
`
export const Icon4 = styled.span`
    color: ${COLORS.blackColor};
    padding: 10px;
`
export const DividerDiv = styled.div`
    height: 1px;
    width: 100%;
    background-color:${COLORS.boxShadow} ;
    width: auto;
    margin-inline: 2rem;
    margin-top: 1rem;
    margin-bottom: 1rem;
`

export const ContentDetails = styled.div`
    width: 100%;
    
`
export const ModalDetailsDiv = styled.div`
    width: 100%;
    padding: 1rem;
`

export const ProductDiv = styled.div`
    width: 100%;
    padding-bottom: 20px;

`
export const ProductDetailsDiv = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    img{
        height: 150px;
        width: 150px;
    }
    @media (max-width: 1240px){
        display: flex;
        flex-direction: column;
    }
    
`
export const CustomerDetailsDiv = styled.div`
    display: flex;
    flex-direction: column;
`
export const ProductPurchaseHeading = styled.a`
    text-decoration: none;
    padding-bottom: 15px;
    cursor: pointer;
    color: ${COLORS.linkColor};
`
export const ProductContents = styled.div`
    display: -webkit-box;
`

export const CustomerName = styled.p`
    display: flex;
    align-items: center;
    color: ${COLORS.dropDown};

font-size: 12px;
`
export const ProductDetails = styled.div`
    padding-right: 2rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
`
export const FeedbackDiv = styled.div`
    
`
export const FeedbackHeadingDiv = styled.div`
    position: sticky;
    top: 0;
    width: 100%;
    display: flex;
    justify-content: space-between;
    background-color: hsl(232deg 88% 90%);
    p{
        padding: 10px;
        display: flex;
        font-size: 0.8rem;
        font-weight: 500;
        align-items: center;
    }
`
export const FeedbackLinkBtn = styled.button`
    color: ${COLORS.whiteColor};
    background-color: ${COLORS.linkColor};
    font-size: 12px;
    cursor: pointer;
    padding: 10px;
    
    
`

export const CustomerFeedbackDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    @media (max-width: 600px){
        display: flex;
        flex-direction: column;
    }
    p{
        font-size: 1.2rem;
        @media (max-width: 380px){
            padding: 10px;
        }
    }
    
`
export const SuggestionInputField = styled.input`
    /* border: 1px solid ${COLORS.dropDown}; */
    border: 0px;
    color: ${COLORS.blackColor};
    /* width: 100%;    */
    padding: 10px;
    border-radius: 4px;
    p{
        color: ${COLORS.dropDown};
    }
`
export const TicketNo = styled.p`
    padding-inline: 2rem;
    font-size: 12px;
    color: ${COLORS.dropDown};
`
export const SuggestionFieldDiv = styled.div`
    padding: 10px 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    p{
        font-size: 12px;
        
    }
`
export const SuggestionButton = styled.div`
    padding: 10px 30px;
    button{
        background-color: ${COLORS.linkColor};
        color: white;
        border: 0px;
        padding: 10px;
        border-radius:5px;
        width: 100%;
    }
`
export const  SuggestionDetailsDiv = styled.div`
    display: flex;
    align-items: center;
`
export const ServiceFeedbackDiv = styled.div`
    display: flex;
    gap: 10px;
        @media (max-width: 920px){
            flex-direction: column;
        }
`
export const FeedbackTextArea = styled.textarea`
    width: 100%;
    border: 1px solid ${COLORS.dropDown};
    padding: 25px;
`
export const QuotationTable = styled.table`
     width: 100%;
    font-family: "Poppins", sans-serif;
    font-weight: 100;   
    border-collapse: collapse;
    border: 1px solid;
    
    th{
        font-family: "Poppins", sans-serif;
        font-weight: 300;
        font-size: 0.8rem;
        color: ${COLORS.dropDown};
        height: 20px;
        border: 1px solid ${COLORS.dropDown};
       
    }
    td{
        text-align: center;
        font-size: 0.8rem;
        padding: 20px;
        border: 1px solid ${COLORS.dropDown};
        font-weight: 300;
        
        a{
            cursor: pointer;
        }
    }
    tr{
        height: 30px;
        border: 0px;
    :hover{
        background-color: hsl(232deg 100% 98%);
    }
    }
`
export const FeedbackTableDiv = styled.div`
    padding: 10px;
    overflow-y: scroll;

`
export const TermsConditionsDiv = styled.div`
    width: 100%;
    padding: 10px;
`
export const TermsConditionsHead = styled.p`
    font-size: 16px;
`
export const Conditions = styled.p `
    font-size: 12px;
    padding: 8px;
`
export const ConditionsDiv = styled.div`
    display: flex;
    color: ${COLORS.dropDown};
`
export const customStylesFeedback = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        transform: 'translate(-50%, -50%)',
        height: '70%',
        minHeight: '320px',
        borderRadius: '8px',
        width: '40%',
        minWidth: '320px',
        fontSize: '70%',
        padding: '0',
    },
};
export const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        transform: 'translate(-50%, -50%)',
        height: '56%',
        minHeight: '320px',
        borderRadius: '8px',
        width: '32%',
        minWidth: '320px',
        fontSize: '70%',
        padding: '0',
    },
};

export const customStylesProduct = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        transform: 'translate(-50%, -50%)',
        height: 'auto',
        // minHeight: '320px',
        borderRadius: '8px',
        width: '25%',
        minWidth: '320px',
        fontSize: '70%',
        padding: '0',
    },
};
export const customStylesComplaint = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        transform: 'translate(-50%, -50%)',
        height: '52%',
        minHeight: '320px',
        borderRadius: '8px',
        width: '30%',
        minWidth: '320px',
        fontSize: '70%',
        padding: '0',
    },
};
export const customStylesEngineer = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        transform: 'translate(-50%, -50%)',
        height: 'auto',
        minHeight: '320px',
        borderRadius: '8px',
        width: '25%',
        minWidth: '320px',
        fontSize: '70%',
        padding: '0',
    },
};

export const customStylesServ = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        transform: 'translate(-50%, -50%)',
        height: 'auto',
        width: '38%',
        minWidth: '320px',
        fontSize: '70%',
        padding: '0',
    },

};
export const customStylesMobile = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        transform: 'translate(-50%, -50%)',
        height: 'auto',
        minHeight: '220px',
        width: '30%',
        minWidth: '320px',
        fontSize: '70%',
        padding: '0',
    },

};
export const customStylesMobiles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        transform: 'translate(-50%, -50%)',
        height: 'auto',
        minHeight: '255px',
        width: '30%',
        minWidth: '320px',
        fontSize: '70%',
        padding: '0',
    },

};


export const ModalContentHeaderQuotation  = styled.div`
    position: sticky;
    top: 0;
    width: 100%;
    display: flex;
    justify-content: space-between;
    background-color: hsl(232deg 88% 90%);
    p{
        padding: 10px;
        display: flex;
        font-size: 0.8rem;
        font-weight: 500;
        align-items: center;
    }
`

export const ItemStarRated = styled.span`
    color: #5b4f41;
    
`
export const StarColor =styled.span`
    color: ${COLORS.starColor};
`
export const StatusTextYs = styled.div`
    display: flex;
    justify-content: space-around;
    label{
        padding-inline: 5px;
        font-size: 12px;
    }
`
export const InputFieldAtn = styled.input`
    color: ${COLORS.dropDown};
    border: 1px solid ${COLORS.dropDown}; 
    width: 100%;   
    padding: 10px 20px;
    border-radius: 5px;
`
export const InputFieldDate = styled.div`
    color: ${COLORS.dropDown};
    border: 1px solid ${COLORS.dropDown}; 
    width: 100%;   
    padding: 10px 20px;
    border-radius: 5px;
`
export const FeedbackCont = styled.p`
    padding-inline: 20px;
    font-size: 12px !important;
`
export const StatusTextFeedback = styled.div`
    display: flex;
    align-items: center;
`
export const FieldDivfeedbk = styled.div`

`
export const DropdwnBtn = styled.button`
    background-color: ${COLORS.linkColor};
    color:${COLORS.whiteColor}
`
export const ContentsFeed = styled.div`
    color: ${COLORS.dropDown};
    display: flex;
    align-items: center;
    justify-content: space-between;
    p{color: ${COLORS.dropDown};
    }
`
export const InputFieldUpdts = styled.div`
    color: ${COLORS.blackColor};
    border: 1px solid ${COLORS.dropDown};
    width: 100%;
    padding: 10px 20px;

`
export const ConditionsDate = styled.p `
    font-size: 12px;
    padding: 8px;
    color: ${COLORS.dropDown};
`
export const DetailsContent1 = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
`
export const DetailsContent2 = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    max-width: 40%;
    width: 100%;
    padding: 10px;
`
export const DetailsContent3 = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    max-width: 40%;
    width: 100%;
    padding: 10px;
`