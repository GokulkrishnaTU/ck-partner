import React, {useState, useEffect} from 'react'
import axios from 'axios';
import { AiOutlineClose } from 'react-icons/ai';
import { Div, Div6, Icon1,} from './ServiceEngineerStyle';
import { Icon4, ItemsName, ItemsName1, ModalDetailsDiv,  QuotationTable, TermsConditionsDiv, TermsConditionsHead, ModalContentHeaderQuotation, DetailsContent, Contents, FeedbackTableDiv, ConditionsDiv, Conditions,} from './ServiceDetailsStyle';
import { Modal, ModalContainer } from './ModalStyle';

 const QuotationDetails = (props) => {
    return (
        <Modal>
        <ModalContainer style={{width: '500px'}}>
            <ModalContentHeaderQuotation>
                <p>Quotation Details</p>
                <Icon1 onClick={() => props?.setQuotationDetailsModal(false)}><AiOutlineClose size={20} /></Icon1>
            </ModalContentHeaderQuotation>
            <ModalDetailsDiv>
                <Contents>
                    <ItemsName1>ID</ItemsName1>
                    <DetailsContent>
                        <Icon4>:</Icon4>
                        <ItemsName>{props?.quotationDetails?.id}</ItemsName>
                    </DetailsContent>
                </Contents>
                <Contents>
                    <ItemsName1>Ticket Number</ItemsName1>
                    <DetailsContent>
                        <Icon4>:</Icon4>
                        <ItemsName>{props?.quotationDetails?.ticket_no}</ItemsName>
                    </DetailsContent>
                </Contents>
                <Contents>
                    <ItemsName1>Quotation Number</ItemsName1>
                    <DetailsContent>
                        <Icon4>:</Icon4>
                        <ItemsName>{props?.quotationDetails?.quot_no}</ItemsName>
                    </DetailsContent>
                </Contents>
                <Contents>
                    <ItemsName1>Prepared By</ItemsName1>
                    <DetailsContent>
                        <Icon4>:</Icon4>
                        <ItemsName>{props?.quotationDetails?.prepared_by?.name}</ItemsName>
                    </DetailsContent>
                </Contents>
                <Contents>
                    <ItemsName1>Item Details</ItemsName1>
                    <DetailsContent>
                        <Icon4>:</Icon4>
                        <ItemsName></ItemsName>
                    </DetailsContent>
                </Contents>
            </ModalDetailsDiv>
            <FeedbackTableDiv>
                <QuotationTable>
                    <tr>
                        <th>No.</th>
                        <th>Items</th>
                        <th>Warranty</th>
                        <th>Unit Price</th>
                        <th>Quantity</th>
                        <th>Total Price</th>
                    </tr>
                    {props?.quotationDetails?.productArray?.map((data, i) => {
                        return (
                            <tr>
                                <td>{i + 1}</td>
                                <td>{data?.title}</td>
                                <td>{data?.warranty}</td>
                                <td>{data?.offer_price}</td>
                                <td>{data?.qnty}</td>
                                <td> {data?.offer_price * data?.qnty}</td>
                            </tr>
                        )
                    }
                    )}
                </QuotationTable>
            </FeedbackTableDiv>
            <TermsConditionsDiv>
                <TermsConditionsHead>Terms & Conditions</TermsConditionsHead>
                <ConditionsDiv>
                    <Conditions>1.</Conditions><Conditions>{props.quotationDetails?.terms_conditions}</Conditions>
                </ConditionsDiv>
                {/* {props?.quotationDetails?.terms_conditions?.map((item, index) => {
                    return(
                        <ConditionsDiv>
                    <Conditions>{index + 1}</Conditions><Conditions>{}</Conditions>
                </ConditionsDiv>
                    )
                })} */}

            </TermsConditionsDiv>
        </ModalContainer> 
        </Modal>
    )
}


export default QuotationDetails