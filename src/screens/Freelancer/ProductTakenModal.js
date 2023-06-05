import React from 'react'
import { Button, Div, Div6, Icon1, InputField1, InputFieldDiv, ModalContentHeader, ServiceEngineerHeaderDiv } from '../service-partner/ServiceEngineerStyle'
import { ButtonDiv, customStylesBuy, customStylesTaken, DetailsContent5, DropdownDiv1, DropdownTickets1, FreelancerDetailsMain } from './FreelancerDetailsStyles'
import { BiArrowBack } from 'react-icons/bi'
import { BackIcon, Conditions, ConditionsDate, ConditionsDiv, ContentDetails, Contents, ContentsFeed, CustomerDetailsDiv, CustomerFeedbackDiv, CustomerName, customStyles, customStylesComplaint, customStylesEngineer, customStylesFeedback, customStylesMobile, customStylesProduct, customStylesServ, Details, DetailsContent, DetailsContent1, DetailsContent2, DetailsContent3, DetailsDiv, DetailsHeading, DividerDiv, FeedbackCont, FeedbackDiv, FeedbackHeadingDiv, FeedbackLinkBtn, FeedbackTableDiv, FeedbackTextArea, Icon3, Icon4, ItemsName, ItemsName1, ModalContentHeaderQuotation, ModalDetailsDiv, ProductContents, ProductDetails, ProductDetailsDiv, ProductDiv, ProductPurchaseHeading, QuotationTable, ServiceFeedbackDiv, StarColor, StatusTextYs, TermsConditionsDiv, TermsConditionsHead, TicketNo } from '../service-partner/ServiceDetailsStyle'
import { AiOutlineClose } from 'react-icons/ai'
import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react'
import { getVendor, saveProductTaken } from '../../api/Api'
import { InputField3 } from '../service-partner/ViewTicketsStyle'
import { Modal, ModalContainer } from '../service-partner/ModalStyle'


const ProductTakenModal = (props) => {

    const [values, setValues] = useState(Object.assign({
        ticket_no: props?.ticketData?.ticket_no,
        service_reg_id: props?.ticketData?.service_reg_id,
        warranty_status: "",
        vendor_caseId: "",
        secondary_service_partner_id: "",
        product_condition: "",
        reason_of_taking: "",
        approx_cost: "",
        warranty_vendor_id: "",
        customer_approval: "",
        Return_assured_date: "",
        service_engineer_id: "",
    }))


    console.log('values: ', values);
    const handleChange = (e) => {
        const { name, value } = e.target
        setValues({
            ...values,
            [name]: value
        })
    }
    const [vendorData, setVendorData] = useState([])
    const getVendorData = () => {
        axios({
            method: 'get',
            url: `${getVendor}`
        }).then(resp => {
            console.log(resp.data, "vendor data")
            setVendorData(resp.data)
        })
    }
    useEffect(() => {
        getVendorData()
    }, [])
    const handleSubmit = () => {
        axios({
            method: 'post',
            url: `${saveProductTaken}`,
            data: values,
        }).then(resp => {
            console.log(resp.data)
        })
    }



    return (
        <Modal>
        <ModalContainer style={{width: '450px' ,paddingBottom: '0'}}>
            <FeedbackHeadingDiv>
                <p>Product Taken Acknowledgement</p>
                <Icon1 onClick={() => props.setTakenModal(false)}><AiOutlineClose size={20} /></Icon1>
            </FeedbackHeadingDiv>

            <ContentsFeed>
                <FeedbackCont>Ticket number</FeedbackCont>
                <DetailsContent5>
                    <Icon4>:</Icon4>
                    <ItemsName>{props?.ticketData?.ticket_no}</ItemsName>
                </DetailsContent5>
            </ContentsFeed>
            <ContentsFeed>
                <FeedbackCont>Service reg id</FeedbackCont>
                <DetailsContent5>
                    <Icon4>:</Icon4>
                    <ItemsName>{props?.ticketData?.service_reg_id}</ItemsName>
                </DetailsContent5>
            </ContentsFeed>
            <ContentsFeed>
                <FeedbackCont>Warranty status</FeedbackCont>
                {/* <Icon4>:</Icon4> */}
                        <span>:</span>
                <DetailsContent3>
                    <StatusTextYs>
                        <InputField1 type="radio" id="warranty_status" name="warranty_status" value="1" onChange={(e) => { handleChange(e) }} />
                        <label for="1">Yes</label></StatusTextYs>
                    <StatusTextYs>
                        <InputField1 type="radio" id="warranty_status" name="warranty_status" value="0" onChange={(e) => { handleChange(e) }} />
                        <label for="0">No</label>
                    </StatusTextYs>
                </DetailsContent3>
            </ContentsFeed>
            {values?.warranty_status == "1" ? <div><DropdownDiv1>
                <FeedbackCont>Warranty vendor id</FeedbackCont>
                <DropdownTickets1 name="vendor_id" id="vendor_id" onChange={(e) => setValues({
                    ...values,
                    warranty_vendor_id: e.target.value
                })}>
                    <option value="service_partner_id" >Warranty vendor id</option>
                    {vendorData?.filter(item => item?.warranty == 1).map(i => {
                        return (
                            <option value={i.id} onChange={(e) => { handleChange(e) }}>{i.vendor_name}</option>
                        )
                    })

                    }
                </DropdownTickets1>
            </DropdownDiv1>
                <ContentsFeed>
                    <FeedbackCont>Vendor caseId</FeedbackCont>
                    <DetailsContent5>
                        <Icon4>:</Icon4>
                        <InputField3 name="vendor_caseId" type="text" value={values.vendor_caseId} onChange={(e) => { handleChange(e) }} />
                    </DetailsContent5>
                </ContentsFeed> </div> :values?.warranty_status == "0" ? <div><DropdownDiv1>
                    <FeedbackCont>Secondary partner id</FeedbackCont>
                    <DropdownTickets1 name="vendor_id" id="vendor_id" onChange={(e) => setValues({
                        ...values,
                        secondary_service_partner_id: e.target.value
                    })}>
                        <option value= "" >Service partner id</option>
                        {vendorData?.filter(item => item?.warranty == 0).map(i => {
                            return (
                                <option value={i.id} >{i.vendor_name}</option>
                            )
                        })
                        }
                    </DropdownTickets1>
                </DropdownDiv1>
            </div> : null }
            <ContentsFeed>
                <FeedbackCont>Product condition</FeedbackCont>
                <DetailsContent5>
                    <Icon4>:</Icon4>
                    <InputField3 name="product_condition" type="text" value={values?.product_condition} onChange={(e) => { handleChange(e) }} />
                </DetailsContent5>
            </ContentsFeed>
            <ContentsFeed>
                <FeedbackCont>Reason of taking</FeedbackCont>
                <DetailsContent5>
                    <Icon4>:</Icon4>
                    <InputField3 name="reason_of_taking" type="text" value={values?.reason_of_taking} onChange={(e) => { handleChange(e) }} />
                </DetailsContent5>
            </ContentsFeed>
            <ContentsFeed>
                <FeedbackCont>Approx cost</FeedbackCont>
                <DetailsContent5>
                    <Icon4>:</Icon4>
                    <InputField3 name="approx_cost" type="text" value={values?.approx_cost} onChange={(e) => { handleChange(e) }} />
                </DetailsContent5>
            </ContentsFeed>
            <ContentsFeed>
                <FeedbackCont>Customer approval</FeedbackCont>
                {/* <Icon4>:</Icon4> */}
                <DetailsContent3>
                    <StatusTextYs>
                        <InputField1 type="radio" id="customer_approval" name="customer_approval" value="1" onChange={(e) => { handleChange(e) }} />
                        <label for="1">Yes</label></StatusTextYs>
                    <StatusTextYs>
                        <InputField1 type="radio" id="customer_approval" name="customer_approval" value="0" onChange={(e) => { handleChange(e) }} />
                        <label for="0">No</label>
                    </StatusTextYs>
                </DetailsContent3>
            </ContentsFeed>
            <ContentsFeed>
                <FeedbackCont>Return assured date</FeedbackCont>
                <DetailsContent5>
                    <Icon4>:</Icon4>
                    <InputField3 name="Return_assured_date" type="date" value={values?.Return_assured_date} onChange={(e) => { handleChange(e) }} />
                </DetailsContent5>
            </ContentsFeed>

            <ButtonDiv>
                <button onClick={() => {
                    handleSubmit()
                }}>Save</button>
            </ButtonDiv>
                </ModalContainer>
                </Modal>
    )
}

export default ProductTakenModal