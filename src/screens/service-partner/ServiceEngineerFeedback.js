import React from 'react'
import { BackIcon, Conditions, ConditionsDiv, ContentDetails, Contents, CustomerDetailsDiv, CustomerFeedbackDiv, CustomerName, customStylesFeedback, customStyles, customStylesMobile, Details, DetailsContent, DetailsDiv, DetailsHeading, DividerDiv, FeedbackDiv, FeedbackHeadingDiv, FeedbackLink, FeedbackLinkDiv, FeedbackTableDiv, FeedbackTextArea, Icon3, Icon4, IconDiv, ItemsName, ItemsName1, ModalDetailsDiv, ProductContents, ProductDetails, ProductDetailsDiv, ProductDiv, ProductPurchaseHeading, QuotationTable, ServiceDetailsDiv, ServiceFeedbackDiv, SuggestionButton, SuggestionDetailsDiv, SuggestionFieldDiv, SuggestionInputField, TermsConditionsDiv, TermsConditionsHead, TicketNo, TicketNoInputField, FeedbackLinkBtn, ModalContentHeaderQuotation, ItemStar, ItemStarRated, StarColor, StatusTextYs, InputFieldAtn, InputFieldDate, StatusTextFeedback, FieldDivfeedbk, DropdwnBtn, FeedbackCont, ContentsFeed, customStylesComplaint, customStylesEngineer, customStylesProduct, ConditionsDate, DetailsContent1, DetailsContent2, DetailsContent3, customStylesServ } from './ServiceDetailsStyle';
import { Button, Div, Div6, Icon1, InputField, InputField1, InputFieldDiv, ModalContentHeader, ServiceEngineerHeaderDiv, StatusDiv, StatusText, } from './ServiceEngineerStyle';
import { AiOutlineClose } from 'react-icons/ai';
import { Modal, ModalContainer } from './ModalStyle';


const ServiceEngineerFeedback = (props) => {

    // console.log('props: ', props.serviceUpdate);
    // const [data, setData] = useState([])
    // const getServiceEngineerData = () => {
    //     fetch(`${getServiceEngineer}`)
    //         .then((resp) => resp.json())
    //         .then(response => {
    //             console.log(response, "engineer")
    //             setData(response)
    //         })
    // }
    // useEffect(() => {
    //     getServiceEngineerData()
    // }, [])

    return (
        <Modal>
        <ModalContainer style={{width: '450px'}}>
                <ModalContentHeader>
                    <p>Service Engineer Feedback</p>
                    <Icon1 onClick={() => props?.closeModal()}><AiOutlineClose size={20} /></Icon1>
                </ModalContentHeader>
                <ModalDetailsDiv>
                    <Contents>
                        <ItemsName1>Service Partner ID</ItemsName1>
                        <DetailsContent>
                            <Icon4>:</Icon4>
                            <ItemsName>20</ItemsName>
                        </DetailsContent>
                    </Contents>
                    <Contents>
                        <ItemsName1>Service Engineer ID</ItemsName1>
                        <DetailsContent>
                            <Icon4>:</Icon4>
                            <ItemsName>{props?.serviceUpdate?.service_engineer_id}</ItemsName>
                        </DetailsContent>
                    </Contents>
                    <Contents>
                        <ItemsName1>Service Engineer Name</ItemsName1>
                        <DetailsContent>
                            <Icon4>:</Icon4>
                            <ItemsName>{props?.serviceUpdate?.serviceEngineerName}</ItemsName>
                        </DetailsContent>
                    </Contents>
                   
                    

                    <Contents>
                        <ItemsName1>Ticker Number</ItemsName1>
                        <DetailsContent>
                            <Icon4>:</Icon4>
                            <ItemsName>{props?.serviceUpdate?.ticket_no}</ItemsName>
                        </DetailsContent>
                    </Contents>
                    <Contents>
                        <ItemsName1>Attended Date</ItemsName1>
                        <DetailsContent>
                            <Icon4>:</Icon4>
                            <ItemsName>{props?.serviceUpdate?.attended_date}</ItemsName>
                        </DetailsContent>
                    </Contents>
                    <Contents>
                        <ItemsName1>Attended Time</ItemsName1>
                        <DetailsContent>
                            <Icon4>:</Icon4>
                            <ItemsName>{props?.serviceUpdate?.attended_time}</ItemsName>
                        </DetailsContent>
                    </Contents>
                    <Contents>
                        <ItemsName1>Any changes in logged complaints?</ItemsName1>
                        <DetailsContent>
                            <Icon4>:</Icon4>
                            <ItemsName>{props?.serviceUpdate?.complaint_changes == 1 ? "Yes" : props?.serviceUpdate?.complaint_changes == 0 ? "No" : null}</ItemsName>
                        </DetailsContent>
                    </Contents>
                    <Contents>
                        <ItemsName1>Complaint Details</ItemsName1>
                        <DetailsContent>
                            <Icon4>:</Icon4>
                            <ItemsName>{props?.serviceUpdate?.complaint_details}</ItemsName>
                        </DetailsContent>
                    </Contents>
                    <Contents>
                        <ItemsName1>Service Charge</ItemsName1>
                        <DetailsContent>
                            <Icon4>:</Icon4>
                            <ItemsName>{props?.serviceUpdate?.service_charge}</ItemsName>
                        </DetailsContent>
                    </Contents>
                    <Contents>
                        <ItemsName1>Closing Date</ItemsName1>
                        <DetailsContent>
                            <Icon4>:</Icon4>
                            <ItemsName>{props?.serviceUpdate?.closing_time}</ItemsName>
                        </DetailsContent>
                    </Contents>
                    <Contents>
                        <ItemsName1>Expected Invoice Amount</ItemsName1>
                        <DetailsContent>
                            <Icon4>:</Icon4>
                            <ItemsName>{props?.serviceUpdate?.invoice_amount}</ItemsName>
                        </DetailsContent>
                    </Contents>
                    <ItemsName1>Updates</ItemsName1>
                    {props?.serviceUpdateDetail?.map((item, index) => {
                        return(
                        <Contents key = {index}>
                                <DetailsContent1>
                                <ConditionsDate>{item.created_at}</ConditionsDate>
                                <Icon4>:</Icon4>
                                    <ItemsName>{item.update}</ItemsName>
                                </DetailsContent1>
                            </Contents> 
                        )
                    })}
                    {/* <Contents>
                                <ItemsName1>Updates</ItemsName1>
                                <DetailsContent>
                                    <Icon4>:</Icon4>
                                    <ItemsName>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</ItemsName>
                                </DetailsContent>
                            </Contents> */}

                </ModalDetailsDiv>
            </ModalContainer>
            </Modal>
    )
}

export default ServiceEngineerFeedback