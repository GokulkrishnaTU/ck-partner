import React, { useEffect, useState } from 'react'
import { AiOutlineClose } from 'react-icons/ai';
import { BiArrowBack } from 'react-icons/bi'
import { IoIosArrowForward } from 'react-icons/io'
import { AiFillStar } from 'react-icons/ai'
import ProductLogo from '../../assests/images/Rectangle24.png'
// import Modal from 'react-modal'
import { Button, Div, Div6, Icon1, InputField, InputField1, InputFieldDiv, ServiceEngineerHeaderDiv, StatusDiv, StatusText, } from './ServiceEngineerStyle';
import { BackIcon, Conditions, ConditionsDiv, ContentDetails, Contents, CustomerFeedbackDiv, customStyles, customStylesMobile, Details, DetailsContent, DetailsDiv, DetailsHeading, DividerDiv, FeedbackDiv, FeedbackHeadingDiv, FeedbackTableDiv, FeedbackTextArea, Icon3, Icon4, IconDiv, ItemsName, ItemsName1, ServiceDetailsDiv, ServiceFeedbackDiv, TicketNo, FeedbackLinkBtn, StarColor, customStylesComplaint, customStylesEngineer, customStylesProduct, customStylesServ, customStylesMobiles } from './ServiceDetailsStyle';
import { getAllTicketDetails, getFeedback, getProductDetailedDisplay, getServiceEngineer, getServiceUpdates, insertServiceUpdates, insertServiceUpdatesEng } from '../../api/Api';
import axios from 'axios';
import { InputField3 } from './ViewTicketsStyle';
import ServEngineerFeedback from './ServEngineerFeedback';
import ServiceEngineerFeedback from './ServiceEngineerFeedback';
import ComplaintDetails from './ComplaintDetails';
import ProductBuyDetails from './ProductBuyDetails';
import QuotationDetails from './QuotationDetails';
import swal from 'sweetalert';
import { useLocation, useNavigate } from 'react-router-dom';
import { Modal, ModalContainer } from './ModalStyle';


export const CustomerFeedback = (props) => {
    console.log(props.ticketNumber, "ticketnumber")
    const [feedbackData, setFeedbackData] = useState([])
    console.log(feedbackData, "data")

    // const getFeedbackData = () => {
    //     axios({
    //         method: 'get',
    //         url: `${getFeedback}`,
    //     }).then(resp => {
    //         setFeedbackData(resp.data)
    //     })

    // }
    // useEffect(() => {
    //     getFeedbackData()
    // }, [])
    return (
        <Modal>
        <ModalContainer style={{width: '400px'}}>
            <FeedbackHeadingDiv>
                <p>Customer Feedback</p>
                <Icon1 onClick={() => props?.setFeedbackModal(false)}><AiOutlineClose size={20} /></Icon1>
            </FeedbackHeadingDiv>
                
                    <FeedbackDiv >

                        <Contents>
                            <TicketNo>Ticket No</TicketNo>
                            <DetailsContent>
                                <Icon4>:</Icon4>
                                <ItemsName>{props?.custmrFeedback?.ticket_no}</ItemsName>
                            </DetailsContent>
                        </Contents>
                        <Contents>
                            <TicketNo>Service Rating</TicketNo>
                            <DetailsContent>
                                <Icon4>:</Icon4>
                                {props?.custmrFeedback?.ck_service_rating == 5 ? <StarColor><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /></StarColor> :
                                    props?.custmrFeedback?.ck_service_rating == 4 ? <div><StarColor><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /></StarColor><AiFillStar /></div> :
                                    props?.custmrFeedback?.ck_service_rating == 3 ? <div><StarColor><AiFillStar /><AiFillStar /><AiFillStar /></StarColor> <AiFillStar /><AiFillStar /></div> :
                                    props?.custmrFeedback?.ck_service_rating == 2 ? <div><StarColor><AiFillStar /><AiFillStar /></StarColor><AiFillStar /><AiFillStar /><AiFillStar /></div> :
                                    props?.custmrFeedback?.ck_service_rating == 1 ? <div><StarColor><AiFillStar /></StarColor><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /></div> :
                                    props?.custmrFeedback?.ck_service_rating == 0 ? <div><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /></div> : null}

                            </DetailsContent>
                        </Contents>
                        <Contents>
                            <TicketNo>Service Engineer Rating</TicketNo>
                            <DetailsContent>
                                <Icon4>:</Icon4>
                                {props?.custmrFeedback?.ck_service_engineer_rating == 5 ? <StarColor><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /></StarColor> :
                                    props?.custmrFeedback?.ck_service_engineer_rating == 4 ? <div><StarColor><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /></StarColor><AiFillStar /></div> :
                                    props?.custmrFeedback?.ck_service_engineer_rating == 3 ? <div><StarColor><AiFillStar /><AiFillStar /><AiFillStar /></StarColor> <AiFillStar /><AiFillStar /></div> :
                                    props?.custmrFeedback?.ck_service_engineer_rating == 2 ? <div><StarColor><AiFillStar /><AiFillStar /></StarColor><AiFillStar /><AiFillStar /><AiFillStar /></div> :
                                    props?.custmrFeedback?.ck_service_engineer_rating == 1 ? <div><StarColor><AiFillStar /></StarColor><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /></div> :
                                    props?.custmrFeedback?.ck_service_engineer_rating == 0 ? <div><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /></div> : null}
                            </DetailsContent>
                        </Contents>
                        <Contents>
                            <TicketNo>Suggestion</TicketNo>
                            <DetailsContent>
                                <Icon4>:</Icon4>
                                <ItemsName>{props?.custmrFeedback?.suggestion}</ItemsName>
                            </DetailsContent>
                        </Contents>
                    </FeedbackDiv>
        </ModalContainer>
        </Modal>
    )
}
export const ServiceFeedback = (props) => {
    // console.log('service update: ', props.serviceUpdate);
    const [values, setValues] = useState(Object.assign({
        service_update_id: props?.serviceUpdate?.id,
        ticket_no: props?.ticketNumber?.ticket_no,
        update: ""
    }))
    console.log('values: ', values);
    const handleChange = (e) => {
        const { name, value } = e.target
        setValues({
            ...values,
            [name]: value,
        })
    }
    const handleSubmit = () => {
        axios({
            method: 'post',
            url: `${insertServiceUpdates}`,
            value: values,
        }).then(resp => {
            console.log(resp.data, "sssss")
        })
    }
    return (
        <Modal>
        <ModalContainer style={{width: '400px', paddingBottom: '0'}}>
                <FeedbackHeadingDiv>
                    <p>Servcie Feedback</p>
                    <Icon1 onClick={() => props.setAddFeedbackModal(false)}><AiOutlineClose size={20} /></Icon1>
                </FeedbackHeadingDiv>
                <InputFieldDiv>
                    <ItemsName1 style={{paddingInline: '5px'}}>Enter your Feedback</ItemsName1>
                    <FeedbackTextArea id="service_feedback" name="update" value={values.update} onChange={(e) => { handleChange(e) }} />
                </InputFieldDiv>
                <Button>
                    <button onClick={() => { handleSubmit(); props.setAddFeedbackModal(false) }}>Add</button>
                </Button>
          </ModalContainer>
          </Modal>
    )
}

const ServiceDetails = (props) => {
    const navigate = useNavigate()
    const { state } = useLocation();
    console.log('state: ', state);
    // console.log('serviceUpdate: ', props.serviceUpdate);
    const [feedbackModal, setFeedbackModal] = useState(false)
    const [serviceFeedbackModal, setServiceFeedbackModal] = useState(false)
    const [quotationDetailsModal, setQuotationDetailsModal] = useState(false)
    const [allTicketDetails, setAllTicketDetails] = useState([])
    const [productDetails, setProductDetails] = useState([])
    const [serviceDetails, setServiceDetails] = useState([])
    const [itemDetails, setItemDetails] = useState([])
    const [custmrFeedback, setCustmrFeedback] = useState([])
    const [serviceUpdate, setServiceUpdate] = useState([])
    console.log('serviceUpdate: ', serviceUpdate);
    // console.log('serviceUpdate: ', serviceUpdate);
    const [serviceUpdateDetail, setServiceUpdateDetails] = useState([])
    const [productCateList, setProductCateList] = useState([])
    // console.log('productCateList: ', productCateList);

    // console.log('serviceDetails: ', serviceDetails);
    const [quotationDetailss, setQuotationDetailss] = useState([])
    // console.log('quotationDetailss: ', quotationDetailss);

    const [modalIsOpen, setModalIsOpen] = useState(false)
    const [addFeedbackModal, setAddFeedbackModal] = useState(false)
    const closeModal = () => (
        setModalIsOpen(false)
    )
    const [complaintDetailsModal, setComplaintDetailsModal] = useState(false)
    const closeModalComplaintDetails = () => (
        setComplaintDetailsModal(false)
    )
    const [isOpen, setIsOpen] = useState(false)
    const closeModal1 = () => (
        setIsOpen(false)
    )
    const [updatesData, setUpdatesData] = useState([])
    const getEngineerUpdates = () => {
        axios({
            method: 'get',
            url: `${getServiceUpdates}`
        }).then(resp => {
            // console.log(resp.data, "updates")
            setUpdatesData(resp.data)
        })
    }
    const getAllTicketDetail = () => {
        axios({
            method: 'get',
            url: `${getAllTicketDetails}/${state?.ticket_no}`
        }).then(resp => {
            console.log(resp.data, "details")
            setAllTicketDetails(resp.data)
            setProductDetails(resp?.data?.productBuyRequests)
            setServiceDetails(resp?.data?.ServiceRegDetails[0])
            setQuotationDetailss(resp?.data?.QuoteDetails[0])
            setItemDetails(resp?.data?.QuoteDetails[0])
            setCustmrFeedback(resp?.data?.customerFeedback[0])
            setServiceUpdate(resp?.data?.ServiceUpdatesDetails[0])
            setServiceUpdateDetails(resp?.data?.ServiceUpdates)
            setProductCateList(resp?.data?.productCategoryList)
        })
    }
    useEffect(() => {
        getEngineerUpdates()
        getAllTicketDetail()
        // getQutnDetails()
    }, [])
    // const [qutnData, setQutnData] = useState([])
    // console.log('qutnData: ', qutnData);


    // const getQutnDetails = () => {
    //     axios({
    //         method: 'post',
    //         url: `${getProductDetailedDisplay}`,
    //         data: { "id": 72 }
    //     }).then(resp => {
    //         // console.log(resp.data)
    //         setQutnData(resp.data)

    //     })
    // }
    return (

        <ServiceDetailsDiv sidebarIsOpen={props.sidebarIsOpen}>
            <ServiceEngineerHeaderDiv style={{width: '96%'}}>
                <IconDiv>
                    <BackIcon onClick={() => navigate(-1)}><BiArrowBack size={30} /></BackIcon>
                    <CustomerFeedbackDiv>
                        <p>Service Details</p>
                        <ServiceFeedbackDiv>
                            <FeedbackLinkBtn onClick={() => custmrFeedback?.ticket_no ? setFeedbackModal(true): swal({text: "No customer feedbacks"}) }>Customer Feedback</FeedbackLinkBtn>
                            <FeedbackLinkBtn onClick={() => serviceUpdate?.attended_date ? swal ({text: "Service Engineer already given the feedback."}) : setServiceFeedbackModal(true) }>Service Engineer Feedback</FeedbackLinkBtn>
                            <FeedbackLinkBtn onClick={() => setAddFeedbackModal(true)}>Service Feedback</FeedbackLinkBtn>
                        </ServiceFeedbackDiv>
                    </CustomerFeedbackDiv>
                    {/* <Modal
                        isOpen={serviceFeedbackModal}
                        ariaHideApp={false}
                        // onRequestClose={closeModal}
                        style={customStylesServ}>
                        <div><ServEngineerFeedback getAllTicketDetail = {getAllTicketDetail} ticketNumber={state} setServiceFeedbackModal={setServiceFeedbackModal} serviceUpdate={serviceUpdate} /></div>
                    </Modal> */}
                    {serviceFeedbackModal && <ServEngineerFeedback getAllTicketDetail = {getAllTicketDetail} ticketNumber={state} setServiceFeedbackModal={setServiceFeedbackModal} serviceUpdate={serviceUpdate} />}
                    
                    {/* <Modal
                        isOpen={feedbackModal}
                        ariaHideApp={false}
                        // onRequestClose={closeModal}
                        style={customStylesMobile}>
                        <div><CustomerFeedback ticketNumber={state} setFeedbackModal={setFeedbackModal} custmrFeedback={custmrFeedback} /></div>
                    </Modal> */}
                    {feedbackModal && <CustomerFeedback ticketNumber={state} setFeedbackModal={setFeedbackModal} custmrFeedback={custmrFeedback} />}
                    {/* <Modal
                        isOpen={addFeedbackModal}
                        ariaHideApp={false}
                        // onRequestClose={closeModal}
                        style={customStylesMobiles}>
                        <div><ServiceFeedback ticketNumber={state} setAddFeedbackModal={setAddFeedbackModal} serviceUpdate={serviceUpdate} /></div>
                    </Modal> */}
                    {addFeedbackModal && <ServiceFeedback ticketNumber={state} setAddFeedbackModal={setAddFeedbackModal} serviceUpdate={serviceUpdate} />}
                </IconDiv>

            </ServiceEngineerHeaderDiv>
            <Div6>
                <ContentDetails>
                    <Details>
                        <DetailsDiv>
                            <DetailsHeading>Complaint Details</DetailsHeading>
                            <Contents>
                                <ItemsName1>Product Category</ItemsName1>
                                <DetailsContent>
                                    <Icon4>:</Icon4>
                                    <ItemsName>{serviceDetails?.product_category_name}</ItemsName>
                                </DetailsContent>
                            </Contents>
                            <Contents>
                                <ItemsName1>Serial number</ItemsName1>
                                <DetailsContent>
                                    <Icon4>:</Icon4>
                                    <ItemsName>{serviceDetails?.slno}</ItemsName>
                                </DetailsContent>
                            </Contents>
                            <Contents>
                                <ItemsName1>Warranty expiry date</ItemsName1>
                                <DetailsContent>
                                    <Icon4>:</Icon4>
                                    <ItemsName>{serviceDetails?.warrantyExpiryDate}</ItemsName>
                                </DetailsContent>
                            </Contents>
                            <Contents>
                                <ItemsName1>Service pack expiry date</ItemsName1>
                                <DetailsContent>
                                    <Icon4>:</Icon4>
                                    <ItemsName>{serviceDetails?.servicePackExpDate}</ItemsName>
                                </DetailsContent>
                            </Contents>
                            {/* <Modal
                                isOpen={complaintDetailsModal}
                                ariaHideApp={false}
                                // onRequestClose={closeModal}
                                style={customStylesComplaint}>
                                <div><ComplaintDetails productCateList={productCateList} closeModal={closeModalComplaintDetails} complaintDetails={serviceDetails} /></div>
                            </Modal> */}
                            {complaintDetailsModal && <ComplaintDetails productCateList={productCateList} closeModal={closeModalComplaintDetails} complaintDetails={serviceDetails} />}
                            <a onClick={() => serviceDetails?.product_category_name ? setComplaintDetailsModal(true) : swal({text : "No complaint Details"})}>View Details <Icon3><IoIosArrowForward /></Icon3></a>
                        </DetailsDiv>
                        <DetailsDiv>
                            <div>
                                <DetailsHeading>Service Engineer Feedback</DetailsHeading>
                                <Contents>
                                    <ItemsName1>Attended date</ItemsName1>
                                    <DetailsContent>
                                        <Icon4>:</Icon4>
                                        <ItemsName>{serviceUpdate?.attended_date}</ItemsName>
                                    </DetailsContent>
                                </Contents>
                                <Contents>
                                    <ItemsName1>Attended time</ItemsName1>
                                    <DetailsContent>
                                        <Icon4>:</Icon4>
                                        <ItemsName>{serviceUpdate?.attended_time}</ItemsName>
                                    </DetailsContent>
                                </Contents>
                                <Contents>
                                    <ItemsName1>Complaint Details</ItemsName1>
                                    <DetailsContent>
                                        <Icon4>:</Icon4>
                                        <ItemsName>{serviceUpdate?.complaint_details}</ItemsName>
                                    </DetailsContent>
                                </Contents>
                                <Contents>
                                    <ItemsName1>Any changes in logged complaints?</ItemsName1>
                                    <DetailsContent>
                                        <Icon4>:</Icon4>
                                        <ItemsName>{serviceUpdate?.complaint_changes == 1 ? "Yes" :serviceUpdate?.complaint_changes == 0 ? "No" : null}</ItemsName>
                                    </DetailsContent>
                                </Contents>
                                <a onClick={() => {serviceUpdate?.attended_date ? setIsOpen(true) : swal({text : "No feedbacks."})
                                    ;
                                }} >View Details <Icon3><IoIosArrowForward /></Icon3></a>
                                {/* <Modal
                                    isOpen={isOpen}
                                    ariaHideApp={false}
                                    // onRequestClose={closeModal}
                                    style={customStylesEngineer}>
                                    <div><ServiceEngineerFeedback serviceUpdateDetail={serviceUpdateDetail} closeModal={closeModal1} updatesData={updatesData} serviceDetails={serviceDetails} serviceUpdate={serviceUpdate} /></div>
                                </Modal> */}
                                {isOpen && <ServiceEngineerFeedback serviceUpdateDetail={serviceUpdateDetail} closeModal={closeModal1} updatesData={updatesData} serviceDetails={serviceDetails} serviceUpdate={serviceUpdate} />}
                            </div>
                        </DetailsDiv>
                    </Details>
                    <DividerDiv />
                    <Details>
                        <DetailsDiv>
                            <DetailsHeading>Product Buy Details</DetailsHeading>
                            <Contents>
                                <ItemsName1>Ticket No</ItemsName1>
                                <DetailsContent>
                                    <Icon4>:</Icon4>
                                    <ItemsName>{productDetails[0]?.ticket_no}</ItemsName>
                                </DetailsContent>
                            </Contents>
                            <Contents>
                                <ItemsName1>Date</ItemsName1>
                                <DetailsContent>
                                    <Icon4>:</Icon4>
                                    <ItemsName>{productDetails[0]?.created_at}</ItemsName>
                                </DetailsContent>
                            </Contents>
                            <Contents>
                                <ItemsName1>Product Details</ItemsName1>
                                <DetailsContent>
                                    <Icon4>:</Icon4>
                                    <ItemsName>{productDetails[0]?.product_details}</ItemsName>
                                </DetailsContent>
                            </Contents>
                            <Contents>
                                <ItemsName1>Quantity</ItemsName1>
                                <DetailsContent>
                                    <Icon4>:</Icon4>
                                    <ItemsName>{productDetails[0]?.qnty}</ItemsName>
                                </DetailsContent>
                            </Contents>
                            {/* <Modal
                                isOpen={modalIsOpen}
                                ariaHideApp={false}
                                // onRequestClose={closeModal}
                                style={customStylesProduct}>
                                <div><ProductBuyDetails closeModal={closeModal} productDetails={productDetails} /></div>
                            </Modal> */}
                            {modalIsOpen && <ProductBuyDetails closeModal={closeModal} productDetails={productDetails} />}
                            <a onClick={() => productDetails[0]?.ticket_no ? setModalIsOpen(true) : swal({text : "No product Details."})}>View Details <Icon3><IoIosArrowForward /></Icon3></a>
                        </DetailsDiv>
                        <DetailsDiv>
                            <DetailsHeading>Quotation Details</DetailsHeading>
                            <Contents>
                                <ItemsName1>Id</ItemsName1>
                                <DetailsContent>
                                    <Icon4>:</Icon4>
                                    <ItemsName>{quotationDetailss?.id}</ItemsName>
                                </DetailsContent>
                            </Contents>
                            <Contents>
                                <ItemsName1>Ticket number</ItemsName1>
                                <DetailsContent>
                                    <Icon4>:</Icon4>
                                    <ItemsName>{quotationDetailss?.ticket_no}</ItemsName>
                                </DetailsContent>
                            </Contents>
                            <Contents>
                                <ItemsName1>Quotation number</ItemsName1>
                                <DetailsContent>
                                    <Icon4>:</Icon4>
                                    <ItemsName>{quotationDetailss?.quot_no}</ItemsName>
                                </DetailsContent>
                            </Contents>
                            <Contents>
                                <ItemsName1>Terms conditions</ItemsName1>
                                <DetailsContent>
                                    <Icon4>:</Icon4>
                                    <ItemsName>{quotationDetailss?.terms_conditions}</ItemsName>
                                </DetailsContent>
                            </Contents>
                            {/* <Modal
                                isOpen={quotationDetailsModal}
                                ariaHideApp={false}
                                // onRequestClose={closeModal}
                                style={customStyles}>
                                <div><QuotationDetails setQuotationDetailsModal={setQuotationDetailsModal} quotationDetails={itemDetails} /></div>
                            </Modal> */}
                            {quotationDetailsModal && <QuotationDetails setQuotationDetailsModal={setQuotationDetailsModal} quotationDetails={itemDetails} />}
                            <a onClick={() => { quotationDetailss?.ticket_no ? setQuotationDetailsModal(true) : swal({ text : "No Quotation Details"}) }}>View Details <Icon3><IoIosArrowForward /></Icon3></a>
                        </DetailsDiv>
                    </Details>
                </ContentDetails>
            </Div6>
        </ServiceDetailsDiv>
    )
}

export default ServiceDetails


