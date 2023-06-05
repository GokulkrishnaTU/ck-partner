import React, { useEffect, useState } from 'react'
import { ComponentDiv, ComponentHeading, Dropdown, DropdownDiv, DropdownDiv3, ExchangeContainer, ExchangeContents, Exchangediv, ExHeading, ItemName, ItemNameDiv, ItemsDiv, ItemsDiv1, RadioDiv, SingleItem, SpecificationDiv, SubmitButtonDiv, SwitchDiv, SwitchDiv1, WorkingCondition } from './LaptopExchangeStyle'
// import Switch from "react-switch";
import Switch from 'react-switch';
import { BsUpload } from 'react-icons/bs';
import SubmitModal from '../Modals/SubmitModal';
import Header from '../Header/Header';
import axios from 'axios';
import Multiselect from 'multiselect-react-dropdown';

import {getProcessors,listComplaint,getRams,getStorage,getGraphics,listDisplay,getBrandSize,getReason,insertExchangeform, insertservicereport} from '../../../../../api/Api'
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

const LaptopExchange = () => {
    const {user :freelancer} = useSelector((state) => state.user)
    const {state} = useLocation()
    const [isOnProcessor,setIsOnProcessor] = useState(false)
    const [processor, setProcessor] = useState([])
    const [isKeyMouse,setKeyMouse] = useState(false);
    const [isWifi,setIsWifi] = useState(false);
    const [isSpeaker,setIsSpeaker] = useState(false);
    const [isWebcam,setIsWebcam] = useState(false);
    // const [processor, setProcessor] = useState([])
    const [complaints, setComplaints] = useState([])
    const [items, setItems] = useState([])
    const [ram, setRam] = useState([])

    const [storage, setStorage] = useState([])
    const [graphics, setGraphics] = useState([])
    const [display, setDisplay] = useState([])
 
    const [brand,setBrand] = useState([])
    const [reason, setReason] = useState([])
    const [isOnDisplay,setIsOnDisplay] = useState(false);
    const [isOnKeyboard,setIsOnKeyboard] = useState(false);
    const [isOnTouchpad,setIsOnTouchpad] = useState(false);
    const [isOnWifi,setIsOnWifi] = useState (false);
    const [isOnSpeakers,setIsOnSpeakers] = useState(false);
    const [isOnWebcam,setIsOnWebcam] = useState(false);
    const [isOnUsb,setIsOnUsb] = useState (false);
    const [isOnCharger,setIsOnCharger] = useState(false);


    const currentYear = new Date().getFullYear();
    const startYear = currentYear - 8;
    const endYear = currentYear ;
    const years = [];

    for (let i = startYear; i<= endYear ; i++){
        years.push(i);

    }

    const [values,setValues] = useState({
    
        product_cat_id : state?.product_cat_id,
        freelancer_id : freelancer?.id,
        exchange_id : state?.exchange_id,
        processor : '',
        processor_status : '1',
        ram : '',
        storage : '',
        graphics : '',
        graphics_size : '',
        display : '1',
        display_size : '',
        keyboard_working : '1',
        keyboard_type : '',
        touchpad_working : '1',
        touchpad_type : '',
        wifi_working : '1',
        wifi : '',
        speaker_working : '1',
        speaker : '',
        webcam_working : '1',
        webcam : '',
        usb_hdmi_working : '1',
        usb_hdmi : '',
        battery_backup : '',
        carry_case : '',
        physical_condition : '',
        working_condition : '',
        charger_powercode_working : '1',
        charger_powercode : '',
        purchase_year : '',
        complaint_id : '',
        reason_for_exchange_id : '',
        monitor_brand : '',
        monitor_size : '',
        keyboard_with_mouse : '',
        screen_size : '',
        brand : '',
        camera_working : '',
        camera : '',
        load_capacity : '',
        battery_numbers : '',
        type : '',
        battery_built_working : '',
        battery_built : '',
        amphere : '',
        model : '',
        service_engineer_id : '',
        name : '',
        contact : '',
        comment : '',
        // address: 'thrissur aranattukara',
        // pincode: '67582'
    
      })
    
      console.log('values: ', values);
     
      const handleChange = (e) =>{

        const { name, value } = e.target
            setValues({
                ...values,
                [name]: value
            })
       }

      const options=
      complaints.map(item => {
        return (
            {
                name  : item?.complaint,
                id : item?.id
                
            }
        )
    })

    const handleSelect = (selectedList) => {
        setValues({
            ...values,
            complaint_id: JSON.stringify(selectedList)
        })
    };
  
    const handleRemove = (selectedList) => {
        setValues({
            ...values,
            complaint_id: JSON.stringify(selectedList)
        })
    };
  
     const listProcessor = () => {
      axios.get(`${getProcessors}?product_cat_id=${state?.id}`).then(resp => {
          setProcessor(resp.data)
          console.log(resp.data, 'proccessor')
      })
  }
  const listComplaints = () => {
    axios.get(`${listComplaint}?product_cat_id=${state?.id}`).then((resp) => {
        console.log(resp, 'resp222')
        setComplaints(resp.data)
    })
  }
  const listRam = () => {
    axios.get(`${getRams}?product_cat_id=${state?.id}`).then(resp => {
        setRam(resp.data)
    })
  }
  const listStorage = () => {
    axios.get(`${getStorage}?product_cat_id=${state?.id}`).then(resp => {
        setStorage(resp.data)
    })
  }
  const listGraphics = () => {
    axios.get(`${getGraphics}?product_cat_id=${state?.id}`).then(resp => {
        setGraphics(resp.data)
    })
  }
  const listBrand = () =>{
    axios.get(`${getBrandSize}?product_cat_id=${state?.id}`).then(resp => {
        setBrand(resp.data)
    })
  }
  const listReason = () => {
    axios.get(`${getReason}?product_cat_id=${state?.id}`).then(resp => {
        console.log('resp: 99 ', resp);
        setReason(resp.data)
    })
  }
  const listDisplays = () => {
    axios.get(`${listDisplay}?product_cat_id=${state?.id}`).then(resp => {
        console.log('resp: ', resp);
        setDisplay(resp.data)
    })
}
  const handleSubmit = () => {
    axios.post(insertservicereport, values).then(resp => {
        console.log(resp, "insertExchange")
        if(resp?.data.code == 200){
            alert(resp.data.message)
        }else{
            alert(resp.data.message)
        }
    })
  }


    useEffect (()=>{
        listProcessor ()
        listRam ()
        listStorage()
        listGraphics()
        listDisplays()
        listReason ()
        listComplaints()
    },[])
    const [isOpen, setIsOpen] = useState(false)
    return (
        <>
        <Header/>
        <ExchangeContainer>
            {isOpen && <SubmitModal setIsOpen = {setIsOpen}/>}
            <Exchangediv>
                <ExHeading>
                    <div>
                    <p style={{marginBottom: "0"}}>LAPTOPS</p>
                    <label>*only can exchange within the 7 years limit</label>
                    </div>
                    {/* <div>
                        <a style={{color: "blue", fontSize: "15px", marginRight: "20px"}}>Upload Invoice <BsUpload/></a>
                    </div> */}

                </ExHeading>
                <ExchangeContents>
                    <ComponentHeading>
                        <ComponentDiv>
                            <h5>Components</h5>
                         


                        </ComponentDiv>
                        <SpecificationDiv>
                            <h5>Specifications</h5>
                            
                            

                        </SpecificationDiv>
                        <WorkingCondition>
                            <h5>Working condition (Yes/No)</h5>
                            

                        </WorkingCondition>
                   </ComponentHeading>

                    <ItemsDiv>
                        <SingleItem>
                            <ItemNameDiv>
                            <ItemName>PROCESSOR</ItemName></ItemNameDiv>
                            <DropdownDiv>
                            <Dropdown name="processor" id="processor" onChange={(e) => setValues({
                                    ...values,
                                    processor: e.target.value
                                })}>
                                    <option>select processor</option>

                                    {processor.map((item) => {
                                        return (
                                            <option value={item?.processor_type}>{item?.processor_type}</option>
                                        )
                                    })}
                            </Dropdown>
                            </DropdownDiv>
                            <SwitchDiv>
                            <Switch
                                    onChange={() => { setIsOnProcessor(!isOnProcessor); setValues({ ...values, processor_status: isOnProcessor ? '1' : '0' }) }}
                                    checked={isOnProcessor}
                                    height={25}
                                    width={45}
                                    handleDiameter={20}
                                    offColor="#ff0000"
                                    onColor="#4669E8"
                                    offHandleColor="#ffffff"
                                    onHandleColor="#ffffff"
                                />
                            
                            </SwitchDiv>


                        </SingleItem>
                        <SingleItem>
                            <ItemNameDiv>
                            <ItemName>RAM</ItemName>
                            </ItemNameDiv>
                            <DropdownDiv>
                            <Dropdown name="ram" id="ram" onChange={(e) => setValues({
                                    ...values,
                                    ram: e.target.value
                                })}>
                                <option>select</option>

                                {ram.map((item) => {
                                        return (
                                            <option value={item?.ram_type}>{item?.ram_type}</option>
                                        )
                                    })}
                            </Dropdown>
                            </DropdownDiv>
                            <SwitchDiv>
                                
                            </SwitchDiv>
                            


                        </SingleItem>
                        <SingleItem>
                            <ItemNameDiv>
                            <ItemName>STORAGE</ItemName>
                            </ItemNameDiv>
                            <DropdownDiv>
                            <Dropdown name="storage" id="storage" onChange={(e) => setValues({
                                    ...values,
                                    storage: e.target.value
                                })}>
                                    <option>select storage</option>
                                    {storage.map((item) => {
                                        return (
                                            <option value={item?.storage}>{item?.storage}</option>
                                        )
                                    })}
                                </Dropdown>
                            </DropdownDiv>
                            <SwitchDiv>
                                
                            </SwitchDiv>
                          


                        </SingleItem>
                        <SingleItem>
                            <ItemNameDiv>
                            <ItemName>GRAPHICS</ItemName>
                            </ItemNameDiv>
                            <SwitchDiv1>
                            <RadioDiv>
                                    <input type="radio" id="inbuilt" name="graphics" value="0" onChange={(e) => handleChange(e)} />
                                    <label for="html">Inbuilt</label>
                                    <input type="radio" id="dedicated" name="graphics" value="1" onChange={(e) => handleChange(e)} />
                                    <label for="css">Dedicated</label></RadioDiv>
                                <div style={{ paddingTop: "10px" }}>
                                    <select style={{ width: "100px", height: "40px", borderRadius: "10px", borderColor: "gray", color: "gray" }} name="graphics_size" id="graphics" onChange={(e) => setValues({
                                        ...values,
                                        graphics_size: e.target.value
                                    })}>
                                        <option>select</option>
                                        {graphics.map((item) => {
                                            return (
                                                <option value={item?.size}>{item?.size}</option>
                                            )
                                        })}
                                    </select>
                                </div>
                            </SwitchDiv1>
                            <SwitchDiv>
                                
                            </SwitchDiv>
                            


                        </SingleItem>
                            <SingleItem>
                                <ItemNameDiv>
                                <ItemName>DISPLAY</ItemName>
                                </ItemNameDiv>
                                <DropdownDiv>
                                <Dropdown name="display_size" id="display" onChange={(e) => setValues({
                                    ...values,
                                    display_size: e.target.value
                                })}>
                                    <option>select</option>
                                    {display.map((item) => {
                                        return (
                                            <option value={item?.size}>{item?.size}</option>
                                        )
                                    })}
                                </Dropdown>
                                </DropdownDiv>
                                <SwitchDiv>
                                <Switch
                                    onChange={() => { setIsOnDisplay(!isOnDisplay); setValues({ ...values, display: isOnDisplay ? '1' : '0' }) }}
                                    checked={isOnDisplay}
                                    height={25}
                                    width={45}
                                    handleDiameter={20}
                                    offColor="#ff0000"
                                    onColor="#4669E8"
                                    offHandleColor="#ffffff"
                                    onHandleColor="#ffffff"
                                />                                </SwitchDiv>
                            </SingleItem>
                        <SingleItem>
                            <ItemNameDiv>
                            <ItemName>KEYBOARD</ItemName>
                            </ItemNameDiv>
                            <SwitchDiv1>
                            <RadioDiv>
                                    <input type="radio" id="ordinary" name="keyboard_type" value="0" onChange={(e) => handleChange(e)} />
                                    <label for="html">Ordinary</label>
                                    <input type="radio" id="backlight" name="keyboard_type" value="1" onChange={(e) => handleChange(e)} />
                                    <label for="css">Backlight</label></RadioDiv>
                                    </SwitchDiv1>
                            <SwitchDiv>
                            <Switch
                                    onChange={() => { setIsOnKeyboard(!isOnKeyboard); setValues({ ...values, keyboard_working: isOnKeyboard ? '1' : '0' }) }}
                                    checked={isOnKeyboard}
                                    height={25}
                                    width={45}
                                    handleDiameter={20}
                                    offColor="#ff0000"
                                    onColor="#4669E8"
                                    offHandleColor="#ffffff"
                                    onHandleColor="#ffffff"
                                />                            </SwitchDiv>
                        </SingleItem>
                        <SingleItem>
                            <ItemNameDiv>
                                <ItemName>TOUCHPAD</ItemName>
                            </ItemNameDiv>
                            <SwitchDiv1>
                            <RadioDiv id="touchpad" >
                                    <input type="radio" id="single" name="touchpad_type" value="0" onChange={(e) => handleChange(e)}/>
                                    <label for="single">Single</label>
                                    <input type="radio" id="dual" name="touchpad_type" value="1" onChange={(e) => handleChange(e)}/>
                                    <label for="dual">Dual</label></RadioDiv>
                                
                            </SwitchDiv1>
                            <SwitchDiv>
                            <Switch
                                    onChange={() => { setIsOnTouchpad(!isOnTouchpad); setValues({ ...values, touchpad_working: isOnTouchpad ? '1' : '0' }) }}
                                    checked={isOnTouchpad}
                                    height={25}
                                    width={45}
                                    handleDiameter={20}
                                    offColor="#ff0000"
                                    onColor="#4669E8"
                                    offHandleColor="#ffffff"
                                    onHandleColor="#ffffff"
                                />                            </SwitchDiv>
                        </SingleItem>
                        <SingleItem>
                        <ItemNameDiv>
                            <ItemName>WIFI</ItemName>
                        </ItemNameDiv>
                            <SwitchDiv1>
                            <RadioDiv id="wifi" >
                                    <input type="radio" id="yes" name="wifi" value="0" onChange={(e) => handleChange(e)}/>
                                    <label for="Yes">Yes</label>
                                    <input type="radio" id="no" name="wifi" value="1" onChange={(e) => handleChange(e)}/>
                                    <label for="No">No</label></RadioDiv>
                            </SwitchDiv1>
                            <SwitchDiv>
                            <Switch
                                    onChange={() => { setIsOnWifi(!isOnWifi); setValues({ ...values, wifi_working: isOnWifi ? '1' : '0' }) }}
                                    checked={isOnWifi}
                                    height={25}
                                    width={45}
                                    handleDiameter={20}
                                    offColor="#ff0000"
                                    onColor="#4669E8"
                                    offHandleColor="#ffffff"
                                    onHandleColor="#ffffff"
                                />                            </SwitchDiv>

                        </SingleItem>
                        <SingleItem>
                        <ItemNameDiv>
                            <ItemName>SPEAKERS</ItemName>
                        </ItemNameDiv>
                        <SwitchDiv1>

                        <RadioDiv id="speakers" >
                                    <input type="radio" id="yes" name="speaker" value="0" onChange={(e) => handleChange(e)}/>
                                    <label for="Yes">Yes</label>
                                    <input type="radio" id="no" name="speaker" value="1" onChange={(e) => handleChange(e)}/>
                                    <label for="No">No</label></RadioDiv>
                        </SwitchDiv1>
                        
                        <SwitchDiv>
                        <Switch
                                    onChange={() => { setIsOnSpeakers(!isOnSpeakers); setValues({ ...values, speaker_working: isOnSpeakers ? '1' : '0' }) }}
                                    checked={isOnSpeakers}
                                    height={25}
                                    width={45}
                                    handleDiameter={20}
                                    offColor="#ff0000"
                                    onColor="#4669E8"
                                    offHandleColor="#ffffff"
                                    onHandleColor="#ffffff"
                                />                            </SwitchDiv>
                        </SingleItem>
                        <SingleItem>
                        <ItemNameDiv>
                            <ItemName>WEBCAM</ItemName>
                        </ItemNameDiv>
                        <SwitchDiv1>
                        <RadioDiv id="webcam" >
                                    <input type="radio" id="yes" name="webcam" value="0" onChange={(e) => handleChange(e)}/>
                                    <label for="Yes">Yes</label>
                                    <input type="radio" id="no" name="webcam" value="1" onChange={(e) => handleChange(e)}/>
                                    <label for="No">No</label></RadioDiv>
                        </SwitchDiv1>
                        <SwitchDiv>
                        <Switch
                                    onChange={() => { setIsOnWebcam(!isOnWebcam); setValues({ ...values, webcam_working: isOnWebcam ? '1' : '0' }) }}
                                    checked={isOnWebcam}
                                    height={25}
                                    width={45}
                                    handleDiameter={20}
                                    offColor="#ff0000"
                                    onColor="#4669E8"
                                    offHandleColor="#ffffff"
                                    onHandleColor="#ffffff"
                                />                            </SwitchDiv>
                        </SingleItem>
                        <SingleItem>
                        <ItemNameDiv>
                            <ItemName>USB/HDMI PORT</ItemName>
                        </ItemNameDiv>
                        <SwitchDiv1>
                        <RadioDiv id="usb" >
                                    <input type="radio" id="yes" name="usb_hdmi" value="0" onChange={(e) => handleChange(e)}/>
                                    <label for="Yes">Yes</label>
                                    <input type="radio" id="no" name="usb_hdmi" value="1" onChange={(e) => handleChange(e)}/>
                                    <label for="No">No</label></RadioDiv>
                        </SwitchDiv1>
                        <SwitchDiv>
                        <Switch
                                    onChange={() => { setIsOnUsb(!isOnUsb); setValues({ ...values, usb_hdmi_working: isOnUsb ? '1' : '0' }) }}
                                    checked={isOnUsb}
                                    height={25}
                                    width={45}
                                    handleDiameter={20}
                                    offColor="#ff0000"
                                    onColor="#4669E8"
                                    offHandleColor="#ffffff"
                                    onHandleColor="#ffffff"
                                />                            </SwitchDiv>
                        </SingleItem>
                        <SingleItem>
                        <ItemNameDiv>
                            <ItemName>BATTERYBACK UP</ItemName>
                        </ItemNameDiv>
                        <SwitchDiv1>
                        <RadioDiv id="backup" >
                                    <input type="radio" id="30" name="battery_backup" value="0" onChange={(e) => handleChange(e)}/>
                                    <label for="30mins">Below 30 mins</label>
                                    <input type="radio" id="1" name="battery_backup" value="1" onChange={(e) => handleChange(e)}/>
                                    <label for="onehour">Above 1 Hour</label></RadioDiv>
                                   
                        </SwitchDiv1>
                        <SwitchDiv>
                                
                            </SwitchDiv>
                       
                        </SingleItem>
                        <SingleItem>
                        <ItemNameDiv>
                            <ItemName>CHARGE + POWERCODE</ItemName>
                        </ItemNameDiv>
                        <SwitchDiv1>
                        <RadioDiv id="charger">
                                    <input type="radio" id="yes" name="charger_powercode" value="0" onChange={(e) => handleChange(e)}/>
                                    <label for="Yes">Yes</label>
                                    <input type="radio" id="no" name="charger_powercode" value="1" onChange={(e) => handleChange(e)}/>
                                    <label for="No">No</label>
                                </RadioDiv>
                        </SwitchDiv1>
                        
                        <SwitchDiv>
                        <Switch
                                    onChange={() => { setIsOnCharger(!isOnCharger); setValues({ ...values, charger_powercode_working: isOnCharger ? '1' : '0' }) }}
                                    checked={isOnCharger}
                                    height={25}
                                    width={45}
                                    handleDiameter={20}
                                    offColor="#ff0000"
                                    onColor="#4669E8"
                                    offHandleColor="#ffffff"
                                    onHandleColor="#ffffff"
                                />                            </SwitchDiv>
                        </SingleItem>
                        <SingleItem>
                        <ItemNameDiv>
                            <ItemName>CARRY CASE</ItemName>
                        </ItemNameDiv>
                        <SwitchDiv1>
                        <RadioDiv id="case" >
                                    <input type="radio" id="yes" name="carry_case" value="0" onChange={(e) => handleChange(e)}/>
                                    <label for="Yes">Yes</label>
                                    <input type="radio" id="no" name="carry_case" value="1" onChange={(e) => handleChange(e)}/>
                                    <label for="No">No</label></RadioDiv>
                        </SwitchDiv1>
                        <SwitchDiv>
                            </SwitchDiv>
                        </SingleItem>
                        <SingleItem>
                        <ItemNameDiv>
                            <ItemName>PHYSICAL CONDITION</ItemName>
                        </ItemNameDiv>
                        <SwitchDiv1>
                        <RadioDiv id="condition">
                                    <input type="radio" id="good" name="physical_condition" value="0" onChange={(e) => handleChange(e)}/>
                                    <label for="good">Good</label>
                                    <input type="radio" id="fair" name="physical_condition" value="1" onChange={(e) => handleChange(e)}/>
                                    <label for="fair">Fair</label>
                                    <input type="radio" id="excellent" name="physical_condition" value="2" onChange={(e) => handleChange(e)}/>
                                    <label for="excellent">Excellent</label></RadioDiv>
                        </SwitchDiv1>
                        <SwitchDiv>
                            </SwitchDiv>
                        </SingleItem>
                        <SingleItem>
                        <ItemNameDiv>
                            <ItemName>WORKING CONDITION</ItemName>
                        </ItemNameDiv>
                        <SwitchDiv1>
                        <RadioDiv id="condition" >
                                    <input type="radio" id="good" name="working_condition" value="0"  onChange={(e) => handleChange(e)}/>
                                    <label for="good">Good</label>
                                    <input type="radio" id="fair" name="working_condition" value="1" onChange={(e) => handleChange(e)} />
                                    <label for="fair">Fair</label>
                                    <input type="radio" id="excellent" name="working_condition" value="2" onChange={(e) => handleChange(e)} />
                                    <label for="excellent">Excellent</label></RadioDiv>
                        </SwitchDiv1>
                        <SwitchDiv>
                            </SwitchDiv>
                        </SingleItem>
                        <SingleItem>
                        <ItemNameDiv>
                            <ItemName>PURCHASE YEAR</ItemName>
                        </ItemNameDiv>
                        <DropdownDiv>
                            {/* <Dropdown>
                                <option>2022</option>
                                <option>2022</option>
                                <option>2022</option>
                                <option>2022</option>
                                <option>2022</option>
                            </Dropdown> */}
                            <Dropdown 
                            onChange={(e) => setValues({...values, purchase_year: e.target.value })}
                            >
                                <option >Select purchase year</option>
                            
                              {years.map((year) => {
                                  console.log('year: ', year)
                                return(
                                    <option  value={year}>
                                    
                                         {year}
                                </option>
                                    )
                      })}
                      </Dropdown>
                        </DropdownDiv>
                        <SwitchDiv>
                            </SwitchDiv>
                        </SingleItem>
                        <SingleItem>
                        <ItemNameDiv>
                            <ItemName>COMPLAINT</ItemName>
                        </ItemNameDiv>
                        <DropdownDiv3>
                        <Multiselect
                                    options={options}
                                    selectedValues={items}
                                    onSelect={handleSelect}
                                    onRemove={handleRemove}
                                    displayValue="name"
                                />
                        </DropdownDiv3>
                        <SwitchDiv>
                            </SwitchDiv>
                        </SingleItem>
                        <SingleItem>
                        <ItemNameDiv>
                            <ItemName>REASON OF EXCHANGE</ItemName>
                        </ItemNameDiv>
                        <DropdownDiv>
                        <Dropdown name="reason" id="reason" onChange={(e) => setValues({
                                    ...values,
                                    reason_for_exchange_id: e.target.value


                                })}>
                                    <option>select</option>
                                    {reason.map((item) => {
                                        return (
                                            <option value={item?.reason}>{item?.reason}</option>
                                        )
                                    })}

                                </Dropdown>
                        </DropdownDiv>
                        <SwitchDiv>
                            </SwitchDiv>
                        </SingleItem>
                        <SingleItem>
              <ItemNameDiv>
                <ItemName>YOUR NAME</ItemName>
              </ItemNameDiv>
              <DropdownDiv>
                <input type="text" name="name" onChange={(e)=>handleChange(e)} />
              </DropdownDiv>
              <SwitchDiv></SwitchDiv>
            </SingleItem>
            <SingleItem>
              <ItemNameDiv>
                <ItemName>PHONE NUMBER</ItemName>
              </ItemNameDiv>
              <DropdownDiv>
                <input type="text" name="contact" onChange={(e)=>handleChange(e)}  />
              </DropdownDiv>
              <SwitchDiv></SwitchDiv>
            </SingleItem>
            <SingleItem>
              <ItemNameDiv>
                <ItemName>COMMENT</ItemName>
              </ItemNameDiv>
              <DropdownDiv>
                <textarea rows="10" type="text" name="comment" onChange={(e)=>handleChange(e)} />
              </DropdownDiv>
              <SwitchDiv></SwitchDiv>
            </SingleItem>
                    </ItemsDiv>
                </ExchangeContents>
                <SubmitButtonDiv>
                <button onClick={()=>handleSubmit()}>Submit</button>
                </SubmitButtonDiv>

            </Exchangediv>

        </ExchangeContainer>
        </>
    )
}

export default LaptopExchange