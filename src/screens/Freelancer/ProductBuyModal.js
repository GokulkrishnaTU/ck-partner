import React, { useState, useEffect } from 'react'
import { createPdt } from '../../api/Api'
import { Button, Div, Div6, Icon1, InputField1, InputFieldDiv, ModalContentHeader, ServiceEngineerHeaderDiv } from '../service-partner/ServiceEngineerStyle'
import { ButtonDiv, customStylesBuy, customStylesTaken, DetailsContent5, DropdownDiv1, DropdownTickets1, FreelancerDetailsMain } from './FreelancerDetailsStyles'
import { BiArrowBack } from 'react-icons/bi'
import { BackIcon, Conditions, ConditionsDate, ConditionsDiv, ContentDetails, Contents, ContentsFeed, CustomerDetailsDiv, CustomerFeedbackDiv, CustomerName, customStyles, customStylesComplaint, customStylesEngineer, customStylesFeedback, customStylesMobile, customStylesProduct, customStylesServ, Details, DetailsContent, DetailsContent1, DetailsContent2, DetailsContent3, DetailsDiv, DetailsHeading, DividerDiv, FeedbackCont, FeedbackDiv, FeedbackHeadingDiv, FeedbackLinkBtn, FeedbackTableDiv, FeedbackTextArea, Icon3, Icon4, ItemsName, ItemsName1, ModalContentHeaderQuotation, ModalDetailsDiv, ProductContents, ProductDetails, ProductDetailsDiv, ProductDiv, ProductPurchaseHeading, QuotationTable, ServiceFeedbackDiv, StarColor, StatusTextYs, TermsConditionsDiv, TermsConditionsHead, TicketNo } from '../service-partner/ServiceDetailsStyle'
import { AiOutlineClose } from 'react-icons/ai'
import { InputField3 } from '../service-partner/ViewTicketsStyle'
import axios from 'axios'
import { Modal, ModalContainer } from '../service-partner/ModalStyle'

const ProductBuyModal = (props) => {
    const [values, setValues] = useState(Object.assign({
        ticket_no: props?.ticketData?.ticket_no,
        product_details: "",
        qnty: "",
        brand: "",
    }))
    const handleChange = (e) => {
        const { name, value } = e.target
        setValues({
            ...values,
            [name]: value
        })
    }
    const handleSubmit = () => {
        axios({
            method: 'post',
            url: `${createPdt}`,
            data: values

        }).then(resp => {
            console.log(resp.data, "aaaaaa")

        })
    }
    return (
        <Modal>
            <ModalContainer style={{ width: '400px' , paddingBottom: '0' }}>
                <FeedbackHeadingDiv>
                    <p>Product Buy Request Needed</p>
                    <Icon1 onClick={() => props.setBuyModal(false)}><AiOutlineClose size={20} /></Icon1>
                </FeedbackHeadingDiv>
                <ContentsFeed>
                    <FeedbackCont>Ticket number</FeedbackCont>
                    <DetailsContent5>
                        <Icon4>:</Icon4>
                        <ItemsName>{props?.ticketData?.ticket_no}</ItemsName>
                    </DetailsContent5>
                </ContentsFeed>
                <ContentsFeed>
                    <FeedbackCont>Product details</FeedbackCont>
                    <DetailsContent5>
                        <Icon4>:</Icon4>
                        <InputField3 name="product_details" type="text" value={values.product_details} onChange={(e) => { handleChange(e) }} />
                    </DetailsContent5>
                </ContentsFeed>
                <ContentsFeed>
                    <FeedbackCont>Quantity</FeedbackCont>
                    <DetailsContent5>
                        <Icon4>:</Icon4>
                        <InputField3 name="qnty" type="text" value={values.qnty} onChange={(e) => { handleChange(e) }} />
                    </DetailsContent5>
                </ContentsFeed>
                <ContentsFeed>
                    <FeedbackCont>Brand</FeedbackCont>
                    <DetailsContent5>
                        <Icon4>:</Icon4>
                        <InputField3 name="brand" type="text" value={values.brand} onChange={(e) => { handleChange(e) }} />
                    </DetailsContent5>
                </ContentsFeed>
                <ButtonDiv>
                    <button onClick={() => {
                        handleSubmit()
                        props.setBuyModal(false)
                    }}>Save</button>
                    {/* <button >Update</button> */}
                </ButtonDiv>
            </ModalContainer>
        </Modal>
    )
}

export default ProductBuyModal