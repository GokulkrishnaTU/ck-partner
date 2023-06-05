import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { AiOutlineClose } from 'react-icons/ai';
import { Button, Div, Div6, Icon1, InputField, InputField1, InputFieldDiv, ModalContentHeader, ServiceEngineerHeaderDiv, StatusDiv, StatusText, } from './ServiceEngineerStyle';
import { FeedbackHeadingDiv, FeedbackTextArea, Icon4, ItemsName, ItemsName1, ModalDetailsDiv, ProductContents, ProductDetails, ProductDetailsDiv, ProductDiv, ProductPurchaseHeading, QuotationTable, ServiceDetailsDiv, ServiceFeedbackDiv, SuggestionButton, SuggestionDetailsDiv, SuggestionFieldDiv, SuggestionInputField, TermsConditionsDiv, TermsConditionsHead, TicketNo, TicketNoInputField, FeedbackLinkBtn, ModalContentHeaderQuotation, ItemStar, ItemStarRated, StarColor, StatusTextYs, InputFieldAtn, InputFieldDate, StatusTextFeedback, FieldDivfeedbk, DropdwnBtn, FeedbackCont, ContentsFeed, customStylesComplaint, customStylesEngineer, customStylesProduct, ConditionsDate, DetailsContent1, DetailsContent2, DetailsContent3, } from './ServiceDetailsStyle';
import { getServiceEngineer, insertServiceUpdatesEng } from '../../api/Api';
import { InputField3 } from './ViewTicketsStyle';
import { Modal, ModalContainer } from './ModalStyle';

const ServEngineerFeedback = (props) => {
    console.log('props: ', props);
    // const [values, setValues] = useState(Object.assign({

    //     ticket_no:props?.serviceUpdate?.ticket_no,
    //     attended_date:props?.serviceUpdate?.attended_date,
    //     attended_time: props?.serviceUpdate?.attended_time,
    //     complaint_changes:props?.serviceUpdate?.complaint_changes,
    //     complaint_details:props?.serviceUpdate?.complaint_details,
    //     service_charge:props?.serviceUpdate?.service_charge,
    //     action:props?.serviceUpdate?.action,
    //     closing_date:props?.serviceUpdate?.closing_date,
    //     closing_time: props?.serviceUpdate?.closing_time,
    //     invoice_amount:props?.serviceUpdate?.invoice_amount,
    //     service_engineer_id:props?.serviceUpdate?.service_engineer_id,
    //     secondary_service_partner_id:props?.serviceUpdate?.secondary_service_partner_id,
    // }))
    const [engineerData, setEngineerData] = useState([]);


    const getServiceEngineerData = () => {
        fetch(`${getServiceEngineer}`)
            .then((resp) => resp.json())
            .then(response => {
                console.log(response, "engineerwwwe78148")
                console.log(engineerData, "999978148")
                setEngineerData(response)
            })
    }

    useEffect(() => {
        getServiceEngineerData()
    }, [])
    const [data, setData] = useState(Object.assign({

        ticket_no: props?.ticketNumber?.ticket_no,
        attended_date: "",
        attended_time: "",
        complaint_changes: "",
        complaint_details: "",
        service_charge: "",
        action: "",
        closing_date: "",
        closing_time: "",
        invoice_amount: "",
        service_engineer_id: props?.ticketNumber?.id,
        secondary_service_partner_id: "",
    }))
    console.log('data: ', data);
    // const handleSubmit = () => {
    //     axios({
    //         method: 'post', 
    //         url:`${insertServiceUpdatesEng}`,
    //         data: values
    //     }).then(resp => {
    //         console.log(resp.data)
    //     })
    // }
    const insertUpdate = () => {
        axios({
            method: 'post',
            url: `${insertServiceUpdatesEng}`,
            data: data
        }).then(resp => {
            console.log(resp.data)
        })
    }
    const handleChange = (e) => {
        const { name, value } = e.target
        setData({
            ...data,
            [name]: value,
        })
    }
    return (
        <Modal>
        <ModalContainer style={{width: '500px'}}>
                <FeedbackHeadingDiv>
                    <p>Service Engineer Feedback</p>
                    <Icon1 onClick={() => props.setServiceFeedbackModal(false)}><AiOutlineClose size={20} /></Icon1>
                </FeedbackHeadingDiv>
                <ContentsFeed>
                    <FeedbackCont>Attended Date</FeedbackCont>
                    <DetailsContent2>
                        <Icon4>:</Icon4>
                        <InputField3 name="attended_date" type="date" value={data.attended_date} onChange={(e) => { handleChange(e) }} />
                    </DetailsContent2>
                </ContentsFeed>
                <ContentsFeed>
                    <FeedbackCont>Attended Time</FeedbackCont>
                    <DetailsContent2>
                        <Icon4>:</Icon4>
                        <InputField3 name="attended_time" type="time" value={data.attended_time} onChange={(e) => { handleChange(e) }} />
                    </DetailsContent2>
                </ContentsFeed>
                <ContentsFeed>
                    <FeedbackCont>Any changes in logged in complaints?</FeedbackCont>
                    <Icon4>:</Icon4>
                    <DetailsContent3>
                        <StatusTextYs>
                            <InputField1 type="radio" id="yes" name="complaint_changes" value="1" onChange={(e) => { handleChange(e) }} />
                            <label for="1">Yes</label></StatusTextYs>
                        <StatusTextYs>
                            <InputField1 type="radio" id="no" name="complaint_changes" value="0" onChange={(e) => { handleChange(e) }} />
                            <label for="0">No</label>
                        </StatusTextYs>
                    </DetailsContent3>
                </ContentsFeed>
                <ContentsFeed>
                    <FeedbackCont>Service Charge</FeedbackCont>
                    <DetailsContent2>
                        <Icon4>:</Icon4>
                        <InputField3 name="service_charge" type="text" value={data.service_charge} onChange={(e) => { handleChange(e) }} />
                    </DetailsContent2>
                </ContentsFeed>

                <ContentsFeed>
                    <FeedbackCont>Closing Date</FeedbackCont>
                    <DetailsContent2>
                        <Icon4>:</Icon4>
                        <InputField3 name="closing_date" type="date" value={data.closing_date} onChange={(e) => { handleChange(e) }} />
                    </DetailsContent2>
                </ContentsFeed>
                <ContentsFeed>
                    <FeedbackCont>Closing Time</FeedbackCont>
                    <DetailsContent2>
                        <Icon4>:</Icon4>
                        <InputField3 name="closing_time" type="time" value={data.closing_time} onChange={(e) => { handleChange(e) }} />
                    </DetailsContent2>
                </ContentsFeed>
                <ContentsFeed>
                    <FeedbackCont>Invoice Amount</FeedbackCont>
                    <DetailsContent2>
                        <Icon4>:</Icon4>
                        <InputField3 name="invoice_amount" type="text" value={data.invoice_amount} onChange={(e) => { handleChange(e) }} />
                    </DetailsContent2>
                </ContentsFeed>
                <InputFieldDiv>
                    <FeedbackTextArea id="service_engineer_feedback" name="action" placeholder='Action' value={data.action} onChange={(e) => { handleChange(e) }} />
                </InputFieldDiv>
                <InputFieldDiv>
                    <FeedbackTextArea id="service_engineer_feedback" name="complaint_details" placeholder='Complaint Details' value={data.complaint_details} onChange={(e) => { handleChange(e) }} />
                </InputFieldDiv>
                <Button>
                    <button onClick={() => {
                        insertUpdate()
                        props?.setServiceFeedbackModal(false)
                        props?.getAllTicketDetail();
                    }}>Add</button>
                </Button>
           </ModalContainer>
           </Modal>
    )
}

export default ServEngineerFeedback