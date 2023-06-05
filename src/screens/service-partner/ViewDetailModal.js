import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { server_api } from '../../assests/consts/api';
import {
    ItemDiv,
    Modal,
    ModalContainer,
    ModalContent,
    ModalHeader,
    Pdiv,
    SpecDiv,
} from './ModalStyle';

const ViewDetailModal = ({ setModal, items }) => {
    console.log('items: ', items);
    const [allDetails, setAllDetails] = useState([])
    console.log('allDetails: ', allDetails);
    const [complaint, setComplaint] = useState('')

    const sendReq = () => {
        axios.get(`${server_api}getviewdetails_pdt?product_cat_id=${items?.product_cat_id}&user_id=${items?.user_id}&exchange_id=${items?.exchange_id}`)
          .then((res) => {
            console.log("res=>",res);
            setAllDetails(res?.data[0])
            setComplaint(JSON.parse(res?.data[0].complaint_id)[0].complaint)
          })
      }
      useEffect(() => {
        sendReq()
      }, [])
    return (
        <Modal>
            
            {items?.product_category_name == 'Laptop' &&
                <ModalContainer>
                    <ModalHeader>
                        <p>LAPTOP</p>
                        <span onClick={() => setModal(false)}>
                            <AiOutlineClose size={20} />
                        </span>
                    </ModalHeader>
                    <ModalContent>
                        <SpecDiv>
                            <ItemDiv border={allDetails?.processor_status === 1 ? true : false}>
                                <Pdiv>
                                    {' '}
                                    <p>PROCESSOR : </p>
                                    <label>{allDetails?.processor}</label>
                                </Pdiv>
                                <Pdiv>
                                    {' '}
                                    <p>WORKING CONDITION : </p>
                                    <label>{allDetails?.processor_status == 0 ? 'YES' : allDetails?.processor_status == 1 ? 'NO' : ''}</label>
                                </Pdiv>
                            </ItemDiv>

                            <ItemDiv>
                                <Pdiv>
                                    {' '}
                                    <p>RAM : </p>
                                    <label>{allDetails?.ram}</label>
                                </Pdiv>
                            </ItemDiv>
                            <ItemDiv>
                                <Pdiv>
                                    {' '}
                                    <p>STORAGE : </p>
                                    <label>{allDetails?.storage}</label>
                                   {/* { console.log('JSON.parse(allDetails.complaint_id)[0].complaint: ', (allDetai))} */}
                                </Pdiv>
                            </ItemDiv>
                            <ItemDiv border={allDetails?.speaker_working === 1 ? true : false}>
                                <Pdiv>
                                    {' '}
                                    <p>SPEAKERS : </p>
                                    <label>{allDetails?.speaker == 1 ? 'NO' : allDetails?.speaker  == 0 ? 'YES' : '' }</label>
                                </Pdiv>
                                <Pdiv>
                                    {' '}
                                    <p>WORKING CONDITION : </p>
                                    <label>{allDetails?.speaker_working == 0 ? 'YES' : allDetails?.speaker_working == 1 ? 'NO' : ''}</label>
                                </Pdiv>
                            </ItemDiv>
                            <ItemDiv>
                                <Pdiv>
                                    {' '}
                                    <p>DISPLAY : </p>
                                    <label>{allDetails?.display}</label>
                                </Pdiv>
                            </ItemDiv>
                            <ItemDiv>
                                <Pdiv>
                                    {' '}
                                    <p>KEYBOARD : </p>
                                    <label>{allDetails?.keyboard_type == 0 ? 'ORDINARY' : allDetails?.keyboard_type == 1 ? 'BACKLIGHT' : ''}</label>
                                </Pdiv>
                            </ItemDiv>
                            <ItemDiv border={allDetails?.webcam_working === 1 ? true : false}>
                                <Pdiv>
                                    {' '}
                                    <p>WEBCAM : </p>
                                    <label>{allDetails?.webcam == 0 ? 'YES' : allDetails?.webcam == 1 ? 'NO' :''}</label>
                                </Pdiv>
                                <Pdiv>
                                    {' '}
                                    <p>WORKING CONDITION : </p>
                                    <label>{allDetails?.webcam_working == 0 ? 'YES' : allDetails?.webcam_working == 1 ? 'NO' : ''}</label>
                                </Pdiv>
                            </ItemDiv>
                            <ItemDiv>
                                <Pdiv>
                                    {' '}
                                    <p>TOUCHPAD : </p>
                                    <label>{allDetails?.touchpad_type == 0 ? 'SINGLE' : allDetails?.touchpad_type == 1 ? 'DUAL' : ''}</label>
                                </Pdiv>
                            </ItemDiv>
                            <ItemDiv>
                                <Pdiv>
                                    {' '}
                                    <p>GRAPHICS : </p>
                                    <label>{allDetails?.graphics == 0 ? 'INBUILT' : allDetails?.graphics == 1 ? 'DEDICATED' : ''}</label>
                                </Pdiv>
                            </ItemDiv>
                            <ItemDiv border={allDetails?.charger_powercode_working === 1 ? true : false}>
                                <Pdiv>
                                    {' '}
                                    <p>CHARGER+POWERCODE: </p>
                                    <label>{allDetails?.charger_powercode == 1 ? 'NO' : allDetails?.charger_powercode == 0 ? 'YES' : ''}</label>
                                </Pdiv>
                                <Pdiv>
                                    {' '}
                                    <p>WORKING CONDITION : </p>
                                    <label>{allDetails?.charger_powercode_working == 1 ? 'NO' : allDetails?.charger_powercode_working == 0 ? 'YES' : ''}</label>
                                </Pdiv>
                            </ItemDiv>
                            <ItemDiv>
                                <Pdiv
                                    style={{
                                        flexDirection: 'column',
                                        gap: '10px',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                    }}
                                >
                                    {' '}
                                    <p>BATTERY BACKUP : </p>
                                    <label>{allDetails?.battery_backup == 1 ? 'Above 1 Hour' : allDetails?.battery_backup == 0 ? 'Below 30 mins' : ''}</label>
                                </Pdiv>
                            </ItemDiv>
                            <ItemDiv border={allDetails?.usb_hdmi_working === 1 ? true : false}>
                                <Pdiv>
                                    {' '}
                                    <p>USB/HDMI PORTS : </p>
                                    <label>{allDetails?.usb_hdmi == 1 ? 'NO' : allDetails?.usb_hdmi == 0 ? 'YES' : '' }</label>
                                </Pdiv>
                                <Pdiv>
                                    {' '}
                                    <p>WORKING CONDITION : </p>
                                    <label>{allDetails?.usb_hdmi_working == 1 ? 'NO' : allDetails?.udb_hdmi_working == 0 ?  'YES' : ''}</label>
                                </Pdiv>
                            </ItemDiv>
                            <ItemDiv border={allDetails?.wifi_working === 1 ? true : false}>
                                <Pdiv>
                                    {' '}
                                    <p>WIFI : </p>
                                    <label>{allDetails?.wifi == 1 ? 'NO' : allDetails?.wifi == 0 ? 'YES' : ''}</label>
                                </Pdiv>
                                <Pdiv>
                                    {' '}
                                    <p>WORKING CONDITION : </p> 
                                    <label>{allDetails?.wifi_working == 1 ? 'NO' : allDetails?.wifi_working == 0 ? 'YES' : ''}</label>
                                </Pdiv>
                            </ItemDiv>
                            <ItemDiv >
                                <Pdiv>
                                    {' '}
                                    <p>CARRYCASE : </p>
                                    <label>{allDetails?.carry_case == 1 ? 'NO' : allDetails?.carry_case == 0 ? 'YES' : ''}</label>
                                </Pdiv>
                            </ItemDiv>
                            <ItemDiv>
                                <Pdiv>
                                    {' '}
                                    <p>COMPLAINT : </p>
                                    <label>{complaint}</label>
                                </Pdiv>
                            </ItemDiv>
                            <ItemDiv>
                                <Pdiv>
                                    {' '}
                                    <p>REASON FOR EXCHANGE: </p>
                                    <label>{allDetails?.reason_for_exchange_id}</label>
                                </Pdiv>
                            </ItemDiv>
                        </SpecDiv>
                    </ModalContent>
                </ModalContainer>
            }

            {
                items?.product_category_name == 'Desktop' &&
                <ModalContainer>
                    <ModalHeader>
                        <p>DESKTOP</p>
                        <span onClick={() => setModal(false)}>
                            <AiOutlineClose size={20} />
                        </span>
                    </ModalHeader>
                    <ModalContent>
                        <SpecDiv>
                            <ItemDiv border={allDetails?.processor_status === 1 ? true : false}>
                                <Pdiv>
                                    {' '}
                                    <p>PROCESSOR : </p>
                                    <label>{allDetails?.processor}</label>
                                </Pdiv>
                                <Pdiv>
                                    {' '}
                                    <p>WORKING CONDITION : </p>
                                    <label>{allDetails?.processor_status === 1 ? 'NO' : allDetails?.processor_status === 0 ? 'YES' : ''}</label>
                                </Pdiv>
                            </ItemDiv>

                            <ItemDiv>
                                <Pdiv>
                                    {' '}
                                    <p>RAM : </p>
                                    <label>{allDetails?.ram}</label>
                                </Pdiv>
                            </ItemDiv>
                            <ItemDiv>
                                <Pdiv>
                                    {' '}
                                    <p>STORAGE : </p>
                                    <label>{allDetails?.storage}</label>
                                </Pdiv>
                            </ItemDiv>
                            <ItemDiv>
                                <Pdiv>
                                    {' '}
                                    <p>GRAPHICS : </p>
                                    <label>{allDetails?.graphics == 0 ? 'INBUILT' : allDetails?.graphics == 1 ? 'DEDICATED' : '' }</label>
                                </Pdiv>
                            </ItemDiv>
                            <ItemDiv>
                                <Pdiv>
                                    {' '}
                                    <p>MONITOR BRAND : </p>
                                    <label>{allDetails?.monitor_brand}</label>
                                </Pdiv>
                            </ItemDiv>
                            <ItemDiv>
                                <Pdiv>
                                    {' '}
                                    <p>MONITOR SIZE : </p>
                                    <label>{allDetails?.monitor_size}</label>
                                </Pdiv>
                            </ItemDiv>
                            <ItemDiv border={allDetails?.keyboard_working === 1 ? true : false}>
                                <Pdiv>
                                    {' '}
                                    <p>KEYBOARD WITH MOUSE : </p>
                                    <label>{allDetails?.keyboard_with_mouse}</label>
                                </Pdiv>
                                <Pdiv>
                                    {' '}
                                    <p>WORKING CONDITION : </p>
                                    <label>{allDetails?.keyboard_working === 1 ? 'NO' : allDetails?.keyboard_working === 0 ? 'YES' : ''}</label>
                                </Pdiv>
                            </ItemDiv>
                            <ItemDiv border={allDetails?.wifi_working === 1 ? true : false}>
                                <Pdiv>
                                    {' '}
                                    <p>WIFI : </p>
                                    <label>{allDetails?.wifi === 1 ? 'NO' : allDetails?.wifi == 0 ? 'YES' : ''}</label>
                                </Pdiv>
                                <Pdiv>
                                    {' '}
                                    <p>WORKING CONDITION : </p>
                                    <label>{allDetails?.wifi_working === 1 ? 'NO' : allDetails?.wifi_working === 0 ? 'YES' : ''}</label>
                                </Pdiv>
                            </ItemDiv>
                            <ItemDiv border={allDetails?.speaker_working === 1 ? true : false}>
                                <Pdiv>
                                    {' '}
                                    <p>SPEAKERS : </p>
                                    <label>{allDetails?.speaker === 1 ? 'NO' : allDetails?.speaker == 0 ? 'YES' : ''}</label>
                                </Pdiv>
                                <Pdiv>
                                    {' '}
                                    <p>WORKING CONDITION : </p>
                                    <label>{allDetails?.speaker_working === 1 ? 'NO' : allDetails?.speaker_working === 0 ? 'YES' : ''}</label>
                                </Pdiv>
                            </ItemDiv>
                            <ItemDiv border={allDetails?.webcam_working === 1 ? true : false}>
                                <Pdiv>
                                    {' '}
                                    <p>WEBCAM : </p>
                                    <label>{allDetails?.webcam === 1 ? 'NO' : allDetails?.webcam == 0 ? 'YES' : ''}</label>
                                </Pdiv>
                                <Pdiv>
                                    {' '}
                                    <p>WORKING CONDITION : </p>
                                    <label>{allDetails?.webcam_working === 1 ? 'NO' : allDetails?.webcam_working === 0 ? 'YES' : ''}</label>
                                </Pdiv>
                            </ItemDiv>
                            <ItemDiv style={{ border: '1px solid red' }}>
                                <Pdiv>
                                    {' '}
                                    <p>PHYSICAL CONDITION : </p>
                                    <label>{allDetails?.physical_condition===0 ? 'GOOD' : allDetails?.physical_condition===1 ? 'FAIR' : allDetails?.physical_condition===2 ? 'EXCELLENT' : ''}</label>
                                </Pdiv>
                                <Pdiv>
                                    {' '}
                                    <p>WORKING CONDITION : </p>
                                    <label>{allDetails?.working_condition===0 ? 'GOOD' : allDetails?.working_condition===1 ? 'FAIR' : allDetails?.working_condition===2 ?  'EXCELLENT': ''}</label>
                                </Pdiv>
                            </ItemDiv>
                            <ItemDiv>
                                <Pdiv>
                                    {' '}
                                    <p>PURCHASE YEAR : </p>
                                    <label>{allDetails?.purchase_year}</label>
                                </Pdiv>
                            </ItemDiv>
                            <ItemDiv>
                                <Pdiv>
                                    {' '}
                                    <p>COMPLAINT : </p>
                                    <label>{complaint}</label>
                                </Pdiv>
                            </ItemDiv>
                            <ItemDiv>
                                <Pdiv>
                                    {' '}
                                    <p>REASON FOR EXCHANGE: </p>
                                    <label>{allDetails?.reason_for_exchange_id}</label>
                                </Pdiv>
                            </ItemDiv>
                        </SpecDiv>
                    </ModalContent>
                </ModalContainer>
            }
            {
                items?.product_category_name == 'Mobiles' &&
                <ModalContainer>
                    <ModalHeader>
                        <p>MOBILES</p>
                        <span onClick={() => setModal(false)}>
                            <AiOutlineClose size={20} />
                        </span>
                    </ModalHeader>
                    <ModalContent>
                        <SpecDiv>
                            <ItemDiv border={allDetails?.processor_status === 1 ? true : false}>
                            <Pdiv>
                                    {' '}
                                    <p>PROCESSOR : </p>
                                    <label>{allDetails?.processor}</label>
                                </Pdiv>
                                <Pdiv>
                                    {' '}
                                    <p>WORKING CONDITION : </p>
                                    <label>{allDetails?.processor_status === 1 ? 'NO' : allDetails?.processor_status === 0 ? 'YES' : ''}</label>
                                </Pdiv>
                            </ItemDiv>

                            <ItemDiv>
                                <Pdiv>
                                    {' '}
                                    <p>RAM : </p>
                                    <label>{allDetails?.ram}</label>
                                </Pdiv>
                            </ItemDiv>
                            <ItemDiv>
                                <Pdiv>
                                    {' '}
                                    <p>STORAGE : </p>
                                    <label>{allDetails?.storage}</label>
                                </Pdiv>
                            </ItemDiv>
                            <ItemDiv>
                                <Pdiv>
                                    {' '}
                                    <p>SCREEN SIZE : </p>
                                    <label>{allDetails?.screen_size}</label>
                                </Pdiv>
                            </ItemDiv>
                            <ItemDiv>
                                <Pdiv>
                                    {' '}
                                    <p>BRAND : </p>
                                    <label>{allDetails?.brand}</label>
                                </Pdiv>
                            </ItemDiv>
                            <ItemDiv border={allDetails?.wifi_working === 1 ? true : false}>
                            <Pdiv>
                                    {' '}
                                    <p>WIFI : </p>
                                    <label>{allDetails?.wifi === 1 ? 'NO' : 'YES'}</label>
                                </Pdiv>
                                <Pdiv>
                                    {' '}
                                    <p>WORKING CONDITION : </p>
                                    <label>{allDetails?.wifi_working === 1 ? 'NO' : allDetails?.wifi_working === 0 ? 'YES' : ''}</label>
                                </Pdiv>
                            </ItemDiv>
                            <ItemDiv border={allDetails?.speaker_working === 1 ? true : false}>
                            <Pdiv>
                                    {' '}
                                    <p>SPEAKERS : </p>
                                    <label>{allDetails?.speaker === 1 ? 'NO' : allDetails?.speaker ==1 ? 'YES' : ''}</label>
                                </Pdiv>
                                <Pdiv>
                                    {' '}
                                    <p>WORKING CONDITION : </p>
                                    <label>{allDetails?.speaker_working === 1 ? 'NO' : allDetails?.speaker_working === 0 ? 'YES' : ''}</label>
                                </Pdiv>
                            </ItemDiv>
                            <ItemDiv border={allDetails?.camera_working === 1 ? true : false}>
                            <Pdiv>
                                    {' '}
                                    <p>CAMERA : </p>
                                    <label>{allDetails?.camera === 1 ? 'NO' : allDetails?.camera == 0 ? 'YES' : ''}</label>
                                </Pdiv>
                                <Pdiv>
                                    {' '}
                                    <p>WORKING CONDITION : </p>
                                    <label>{allDetails?.battery_built_working === 1 ? 'NO' : allDetails?.battery_built_working === 0 ? 'YES' : ''}</label>
                                </Pdiv>
                            </ItemDiv>
                            <ItemDiv>
                                <Pdiv>
                                    {' '}
                                    <p>PHYSICAL CONDITION : </p>
                                    <label>{allDetails?.physical_condition===0 ? 'GOOD' : allDetails?.physical_condition===1 ? 'FAIR' : allDetails?.physical_condition===2 ? 'EXCELLENT' : ''}</label>
                                </Pdiv>
                            </ItemDiv>
                            <ItemDiv>
                                <Pdiv>
                                    {' '}
                                    <p>WORKING CONDITION : </p>
                                    <label>{allDetails?.working_condition===0 ? 'GOOD' : allDetails?.working_condition===1 ? 'FAIR' : allDetails?.working_condition===2 ?  'EXCELLENT': ''}</label>
                                </Pdiv>
                            </ItemDiv>
                            <ItemDiv>
                                <Pdiv>
                                    {' '}
                                    <p>PURCHASE YEAR : </p>
                                    <label>{allDetails?.purchase_year}</label>
                                </Pdiv>
                            </ItemDiv>
                            <ItemDiv>
                                <Pdiv>
                                    {' '}
                                    <p>COMPLAINT : </p>
                                    <label>{complaint}</label>
                                </Pdiv>
                            </ItemDiv>
                            <ItemDiv>
                                <Pdiv>
                                    {' '}
                                    <p>REASON FOR EXCHANGE: </p>
                                    <label>{allDetails?.reason_for_exchange_id}</label>
                                </Pdiv>
                            </ItemDiv>
                        </SpecDiv>
                    </ModalContent>
                </ModalContainer>
            }
            {items?.product_category_name == 'Battery' &&

                <ModalContainer>
                    <ModalHeader>
                        <p>BATTERY</p>
                        <span onClick={() => setModal(false)}>
                            <AiOutlineClose size={20} />
                        </span>
                    </ModalHeader>
                    <ModalContent>
                        <SpecDiv>
                            <ItemDiv>
                                <Pdiv>
                                    {' '}
                                    <p>AMPHERE : </p>
                                    <label>{allDetails?.amphere}</label>
                                </Pdiv>
                            </ItemDiv>

                            <ItemDiv>
                                <Pdiv>
                                    {' '}
                                    <p>MODEL : </p>
                                    <label>{allDetails?.model}</label>
                                </Pdiv>
                            </ItemDiv>
                            <ItemDiv>
                                <Pdiv>
                                    {' '}
                                    <p>BRAND : </p>
                                    <label>{allDetails?.brand}</label>
                                </Pdiv>
                                {/* <Pdiv>
                                    {' '}
                                    <p>WORKING CONDITION : </p>
                                    <label>YES</label>
                                </Pdiv> */}
                            </ItemDiv>
                            <ItemDiv>
                                <Pdiv>
                                    {' '}
                                    <p>PHYSICAL CONDITION : </p>
                                    <label>{allDetails?.physical_condition===0 ? 'GOOD' : allDetails?.physical_condition===1 ? 'FAIR' : allDetails?.physical_condition===2 ? 'EXCELLENT' : ''}</label>
                                </Pdiv>
                            </ItemDiv>
                            <ItemDiv>
                                <Pdiv>
                                    {' '}
                                    <p>WORKING CONDITION : </p>
                                    <label>{allDetails?.working_condition===0 ? 'GOOD' : allDetails?.working_condition===1 ? 'FAIR' : allDetails?.working_condition===2 ? 'EXCELLENT' : ''}</label>
                                </Pdiv>
                            </ItemDiv>
                            <ItemDiv>
                                <Pdiv>
                                    {' '}
                                    <p>PURCHASE YEAR : </p>
                                    <label>{allDetails?.purchase_year}</label>
                                </Pdiv>
                            </ItemDiv>
                            <ItemDiv>
                                <Pdiv>
                                    {' '}
                                    <p>COMPLAINT : </p>
                                    <label>{complaint}</label>
                                </Pdiv>
                            </ItemDiv>
                            <ItemDiv>
                            <Pdiv>
                                    {' '}
                                    <p>REASON FOR EXCHANGE: </p>
                                    <label>{allDetails?.reason_for_exchange_id}</label>
                                </Pdiv>
                            </ItemDiv>
                        </SpecDiv>
                    </ModalContent>
                </ModalContainer>
            }

            {items?.product_category_name == 'Monitors' &&
                <ModalContainer>
                    <ModalHeader>
                        <p>MONITORS</p>
                        <span onClick={() => setModal(false)}>
                            <AiOutlineClose size={20} />
                        </span>
                    </ModalHeader>
                    <ModalContent>
                        <SpecDiv>
                            <ItemDiv>
                                <Pdiv>
                                    {' '}
                                    <p>SCREEN SIZE : </p>
                                    <label>{allDetails?.screen_size}</label>
                                </Pdiv>
                            </ItemDiv>

                            <ItemDiv>
                                <Pdiv>
                                    {' '}
                                    <p>BRAND : </p>
                                    <label>{allDetails?.brand}</label>
                                </Pdiv>
                            </ItemDiv>
                            <ItemDiv border={allDetails?.speaker_working === 1 ? true : false}>
                            <Pdiv>
                                    {' '}
                                    <p>SPEAKERS : </p>
                                    <label>{allDetails?.speaker === 1 ? 'NO' : allDetails?.speaker == 1 ? 'YES' : ''}</label>
                                </Pdiv>
                                <Pdiv>
                                    {' '}
                                    <p>WORKING CONDITION : </p>
                                    <label>{allDetails?.speaker_working === 1 ? 'NO' : allDetails?.speaker_working === 0 ? 'YES' : ''}</label>
                                </Pdiv>
                            </ItemDiv>
                            <ItemDiv border={allDetails?.camera_working === 1 ? true : false}>
                            <Pdiv>
                                    {' '}
                                    <p>CAMERA : </p>
                                    <label>{allDetails?.camera === 1 ? 'NO' : allDetails?.camera == 0 ? 'YES' : ''}</label>
                                </Pdiv>
                                <Pdiv>
                                    {' '}
                                    <p>WORKING CONDITION : </p>
                                    <label>{allDetails?.camera_working === 1 ? 'NO' : allDetails?.webcam_working === 0 ? 'YES' : ''}</label>
                                </Pdiv>
                            </ItemDiv>
                            <ItemDiv>
                                <Pdiv>
                                    {' '}
                                    <p>PHYSICAL CONDITION : </p>
                                    <label>{allDetails?.physical_condition===0 ? 'GOOD' : allDetails?.physical_condition===1 ? 'FAIR' : allDetails?.physical_condition===2 ? 'EXCELLENT' : ''}</label>
                                </Pdiv>
                            </ItemDiv>
                            <ItemDiv>
                                <Pdiv>
                                    {' '}
                                    <p>WORKING CONDITION : </p>
                                    <label>{allDetails?.working_condition===0 ? 'GOOD' : allDetails?.working_condition===1 ? 'FAIR' : allDetails?.working_condition===2 ? 'EXCELLENT' : ''}</label>
                                </Pdiv>
                            </ItemDiv>
                            <ItemDiv>
                                <Pdiv>
                                    {' '}
                                    <p>PURCHASE YEAR : </p>
                                    <label>{allDetails?.purchase_year}</label>
                                </Pdiv>
                            </ItemDiv>
                            <ItemDiv>
                                <Pdiv>
                                    {' '}
                                    <p>COMPLAINT : </p>
                                    <label>{complaint}</label>
                                </Pdiv>
                            </ItemDiv>
                            <ItemDiv>
                                <Pdiv>
                                    {' '}
                                    <p>REASON FOR EXCHANGE: </p>
                                    <label>{allDetails?.reason_for_exchange_id}</label>
                                </Pdiv>
                            </ItemDiv>
                        </SpecDiv>
                    </ModalContent>
                </ModalContainer>
            }
            {
                items?.product_category_name == 'UPS/Inverter' &&
                <ModalContainer>
                    <ModalHeader>
                        <p>UPS</p>
                        <span onClick={() => setModal(false)}>
                            <AiOutlineClose size={20} />
                        </span>
                    </ModalHeader>
                    <ModalContent>
                        <SpecDiv>
                            <ItemDiv>
                                <Pdiv>
                                    {' '}
                                    <p>LOAD CAPACITY : </p>
                                    <label>{allDetails?.load_capacity}</label>
                                </Pdiv>
                            </ItemDiv>

                            <ItemDiv>
                                <Pdiv>
                                    {' '}
                                    <p>BATTERY NUMBERS : </p>
                                    <label>{allDetails?.battery_numbers}</label>
                                </Pdiv>
                            </ItemDiv>
                            <ItemDiv>
                                <Pdiv>
                                    {' '}
                                    <p>TYPE : </p>
                                    <label>{allDetails?.type}</label>
                                </Pdiv>
                            </ItemDiv>
                            <ItemDiv border={allDetails?.battery_built_working === 1 ? true : false}>
                                <Pdiv>
                                    {' '}
                                    <p>BATTERY BUILT : </p>
                                    <label>{allDetails?.battery_built === 1 ? 'INBUILT' : allDetails?.battery_built == 0 ? 'EXTERNAL' : ''}</label>
                                </Pdiv>
                                <Pdiv>
                                    {' '}
                                    <p>WORKING CONDITION : </p>
                                    <label>{allDetails?.camera_working === 1 ? 'NO' : allDetails?.webcam_working === 0 ? 'YES' : ''}</label>
                                </Pdiv>
                            </ItemDiv>
                            <ItemDiv>
                                <Pdiv>
                                    {' '}
                                    <p>PHYSICAL CONDITION : </p>
                                    <label>{allDetails?.physical_condition===0 ? 'GOOD' : allDetails?.physical_condition===1 ? 'FAIR' : allDetails?.physical_condition===2 ? 'EXCELLENT' : ''}</label>
                                </Pdiv>
                            </ItemDiv>
                            <ItemDiv>
                                <Pdiv>
                                    {' '}
                                    <p>WORKING CONDITION : </p>
                                    <label>{allDetails?.working_condition===0 ? 'GOOD' : allDetails?.working_condition===1 ? 'FAIR' : allDetails?.working_condition===2 ? 'EXCELLENT' : ''}</label>
                                </Pdiv>
                            </ItemDiv>
                            <ItemDiv>
                                <Pdiv>
                                    {' '}
                                    <p>PURCHASE YEAR : </p>
                                    <label>{allDetails?.purchase_year}</label>
                                </Pdiv>
                            </ItemDiv>
                            <ItemDiv>
                                <Pdiv>
                                    {' '}
                                    <p>COMPLAINT : </p>
                                    <label>{complaint}</label>
                                </Pdiv>
                            </ItemDiv>
                            <ItemDiv>
                                <Pdiv>
                                    {' '}
                                    <p>REASON FOR EXCHANGE: </p>
                                    <label>{allDetails?.reason_for_exchange_id}</label>
                                </Pdiv>
                            </ItemDiv>
                        </SpecDiv>
                    </ModalContent>
                </ModalContainer>
            }


        </Modal>
    );
};

export default ViewDetailModal;