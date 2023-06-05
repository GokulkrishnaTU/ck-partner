import React, {useState, useEffect} from 'react'
import axios from 'axios';
import { AiOutlineClose } from 'react-icons/ai';
import { Button, Div, Div6, Icon1, ModalContentHeader, } from './ServiceEngineerStyle';
import {  Icon4, ItemsName, ItemsName1, ModalDetailsDiv, DetailsContent, Contents,} from './ServiceDetailsStyle';
import { Modal, ModalContainer } from './ModalStyle';


const ProductBuyDetails = (props) => {
    return (
        <Modal>
        <ModalContainer style={{width: '400px'}}>
            <ModalContentHeader>
                <p>Product Buy Details</p>
                <Icon1 onClick={() => props?.closeModal()}><AiOutlineClose size={20} /></Icon1>
            </ModalContentHeader>
            {props?.productDetails?.map((item) => {
                return(
                    <ModalDetailsDiv>
                <Contents>
                    <ItemsName1>Ticket No</ItemsName1>
                    <DetailsContent>
                        <Icon4>:</Icon4>
                        <ItemsName>{item?.ticket_no}</ItemsName>
                    </DetailsContent>
                </Contents>
                <Contents>
                    <ItemsName1>Date</ItemsName1>
                    <DetailsContent>
                        <Icon4>:</Icon4>
                        <ItemsName>{item?.created_at}</ItemsName>
                    </DetailsContent>
                </Contents>
                <Contents>
                    <ItemsName1>Product Details</ItemsName1>
                    <DetailsContent>
                        <Icon4>:</Icon4>
                        <ItemsName>{item?.product_details}</ItemsName>
                    </DetailsContent>
                </Contents>
                <Contents>
                    <ItemsName1>Quantity</ItemsName1>
                    <DetailsContent>
                        <Icon4>:</Icon4>
                        <ItemsName>{item?.qnty}</ItemsName>
                    </DetailsContent>
                </Contents>
            </ModalDetailsDiv>
                )
            }) }
        </ModalContainer>
        </Modal>
    )
}

export default ProductBuyDetails