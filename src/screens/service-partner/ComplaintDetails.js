import React, {useState, useEffect} from 'react'
import axios from 'axios';
import { AiOutlineClose } from 'react-icons/ai';
import { Button, Div, Div6, Icon1, ModalContentHeader,  } from './ServiceEngineerStyle';
import {  Icon4, ItemsName, ItemsName1, ModalDetailsDiv, ProductContents, ProductDetails, ProductDetailsDiv, ProductDiv, ProductPurchaseHeading, CustomerDetailsDiv, CustomerName, DetailsContent,} from './ServiceDetailsStyle';

import { InputField3 } from './ViewTicketsStyle';
import { Modal, ModalContainer } from './ModalStyle';

const ComplaintDetails = (props) => {
    console.log('props: ', props.complaintDetails);
    return (
        <Modal>
        <ModalContainer style={{width: '500px'}}>
            <ModalContentHeader>
                <p>Complaint Details</p>
                <Icon1 onClick={() => props.closeModal()}><AiOutlineClose size={20} /></Icon1>
            </ModalContentHeader>
            <ModalDetailsDiv>
                <ProductDiv>
                    <ProductDetailsDiv>
                        {props?.productCateList?.filter(item =>  item?.id == props?.complaintDetails?.product_category_id).map(i => {
                            return(
                                <img src={i?.product_category_image} />
                            )
                        } )}
                        <CustomerDetailsDiv>
                            <ProductPurchaseHeading>Product Purchase from Clikekart</ProductPurchaseHeading>
                            <ProductContents>
                                <CustomerName>Customer Name</CustomerName>
                                <DetailsContent>
                                    <Icon4>:</Icon4>
                                    <ItemsName>{props?.complaintDetails?.customerName}</ItemsName>
                                </DetailsContent>
                            </ProductContents>
                            <ProductContents>
                                <CustomerName>Contact Number</CustomerName>
                                <DetailsContent>
                                    <Icon4>:</Icon4>
                                    <ItemsName>{props?.complaintDetails?.customerContact}</ItemsName>
                                </DetailsContent>
                            </ProductContents>
                        </CustomerDetailsDiv>

                    </ProductDetailsDiv>
                </ProductDiv>

                <ProductDetails>
                    <ItemsName1>Product Category</ItemsName1>
                    <DetailsContent>
                        <Icon4>:</Icon4>
                        <ItemsName>{props?.complaintDetails?.product_category_name}</ItemsName>
                    </DetailsContent>
                </ProductDetails>
                <ProductDetails>
                    <ItemsName1>Brand</ItemsName1>
                    <DetailsContent>
                        <Icon4>:</Icon4>
                        <ItemsName>{props?.complaintDetails?.brand}</ItemsName>
                    </DetailsContent>
                </ProductDetails>
                <ProductDetails>
                    <ItemsName1>Serial Number</ItemsName1>
                    <DetailsContent>
                        <Icon4>:</Icon4>
                        <ItemsName>{props?.complaintDetails?.slno}</ItemsName>
                    </DetailsContent>
                </ProductDetails>
                <ProductDetails>
                    <ItemsName1>Year of purchase</ItemsName1>
                    <DetailsContent>
                        <Icon4>:</Icon4>
                        <ItemsName>{props?.complaintDetails?.yearOfPurchase}</ItemsName>
                    </DetailsContent>
                </ProductDetails>
                <ProductDetails>
                    <ItemsName1>Warranty expiry date</ItemsName1>
                    <DetailsContent>
                        <Icon4>:</Icon4>
                        <ItemsName>{props?.complaintDetails?.warrantyExpiryDate}</ItemsName>
                    </DetailsContent>
                </ProductDetails>
                {/* <ProductDetails>
                    <ItemsName1>Service pack date</ItemsName1>
                    <DetailsContent>
                        <Icon4>:</Icon4>
                        <ItemsName>{props.complaintDetails[0].servicePackDate}</ItemsName>
                    </DetailsContent>
                </ProductDetails>
                <ProductDetails>
                    <ItemsName1>Service pack expiry date</ItemsName1>
                    <DetailsContent>
                        <Icon4>:</Icon4>
                        <ItemsName>{props.complaintDetails[0].servicePackExpDate}</ItemsName>
                    </DetailsContent>
                </ProductDetails> */}
                <ProductDetails>
                    <ItemsName1>Advance Payment</ItemsName1>
                    <DetailsContent>
                        <Icon4>:</Icon4>
                        <ItemsName>{props?.complaintDetails?.advance_payment}</ItemsName>
                    </DetailsContent>
                </ProductDetails>
                <ProductDetails>
                    <ItemsName1>Discribe the problem</ItemsName1>
                    <DetailsContent>
                        <Icon4>:</Icon4>
                        <ItemsName>{props?.complaintDetails?.complaint}</ItemsName>
                    </DetailsContent>
                </ProductDetails>
            </ModalDetailsDiv>
       </ModalContainer>
       </Modal>
    )
}

export default ComplaintDetails