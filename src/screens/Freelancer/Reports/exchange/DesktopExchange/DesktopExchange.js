import React, { useEffect, useState } from "react";
import { BsUpload } from "react-icons/bs";
import Switch from "react-switch";
import OnOffSwitch from "../../Switch/Switch";
import Header from "../Header/Header";
import {
  ComponentDiv,
  ComponentHeading,
  Dropdown,
  DropdownDiv,
  DropdownDiv3,
  ExchangeContainer,
  ExchangeContents,
  Exchangediv,
  ExHeading,
  ItemName,
  ItemNameDiv,
  ItemsDiv,
  RadioDiv,
  SingleItem,
  SpecificationDiv,
  SubmitButtonDiv,
  SwitchDiv,
  SwitchDiv1,
  WorkingCondition,
} from "../LaptopExchange/LaptopExchangeStyle";
import axios from "axios";
import Multiselect from 'multiselect-react-dropdown';

import {getProcessors,listComplaint,getRams,getStorage,getGraphics,getBrandSize,getReason,insertExchangeform, insertservicereport} from '../../../../../api/Api'
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
// import SubmitModal from '../Modals/SubmitModal'

const DesktopExchange = () => {
  // const [isOpen, setIsOpen] = useState(false)
  const {user :freelancer} = useSelector((state) => state.user)
  const {state} = useLocation()
  console.log('state: ', state);

const [isOnProcessor,setIsOnProcessor] = useState(false)
const [isKeyMouse,setKeyMouse] = useState(false);
    const [isWifi,setIsWifi] = useState(false);
    const [isSpeaker,setIsSpeaker] = useState(false);
    const [isWebcam,setIsWebcam] = useState(false);
    const [processor, setProcessor] = useState([])
    const [complaints, setComplaints] = useState([])
    const [items, setItems] = useState([])
    const [ram, setRam] = useState([])

    const [storage, setStorage] = useState([])
    const [graphics, setGraphics] = useState([])
     
    const [brand,setBrand] = useState([])
    const [reason, setReason] = useState([])

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
    exchange_id: state?.exchange_id,
    processor : '',
    processor_status : '1',
    ram : '',
    storage : '',
    graphics : '',
    graphics_size : '',
    display : '',
    display_size : '',
    keyboard_working : '',
    keyboard_type : '',
    touchpad_working : '',
    touchpad_type : '',
    wifi_working : '1',
    wifi : '',
    speaker_working : '1',
    speaker : '',
    webcam_working : '1',
    webcam : '',
    usb_hdmi_working : '',
    usb_hdmi : '',
    battery_backup : '',
    carry_case : '',
    physical_condition : '',
    working_condition : '',
    charger_powercode_working : '',
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
   const options =

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
  listProcessor()
  console.log("hhhhhh")
  listComplaints()
  listRam ()
  listStorage()
  listGraphics()
  listBrand ()
  listReason()
},[])

  return (
    <>
    <Header/>
    <ExchangeContainer>
      {/* {isOpen && <SubmitModal setIsOpen = {setIsOpen}/>} */}
      <Exchangediv>
        <ExHeading>
          <div>
            <p style={{ marginBottom: "0" }}>DESKTOPS</p>
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
                <ItemName>PROCESSOR</ItemName>
              </ItemNameDiv>
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
              {/* <SwitchDiv>
                            <Switch backgroundColor= { {on: '#00a922', off: '#ee3333' }} borderColor ={{on: '#00a922', off: '#ee3333'}} />
                            </SwitchDiv> */}
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
              <SwitchDiv></SwitchDiv>
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
              <SwitchDiv></SwitchDiv>
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
              <SwitchDiv></SwitchDiv>
            </SingleItem>
            <SingleItem>
              <ItemNameDiv>
                <ItemName>MONITOR BRAND</ItemName>
              </ItemNameDiv>
              <DropdownDiv>
              <Dropdown name="monitor_brand" id="monitor_brand" onChange={(e) => setValues({
                                    ...values,
                                    monitor_brand: e.target.value
                                })}>
                                    <option>select</option>
                                    {brand.map((item) => {
                                        return (
                                            <option value={item?.monitor_brand}>{item?.monitor_brand}</option>
                                            
                                        )
                                        
                                    })}
                                    
                            </Dropdown>
              </DropdownDiv>
              <SwitchDiv></SwitchDiv>
            </SingleItem>
            <SingleItem>
              <ItemNameDiv>
                <ItemName>MONITOR SIZE</ItemName>
              </ItemNameDiv>
              <DropdownDiv>
              <Dropdown name="monitor-size" id="monitor-size" onChange={(e) => setValues({
                                    ...values,
                                    monitor_size: e.target.value
                                })}>
                                    <option>select</option>
                                    {brand.map((item) => {
                                        return (
                                            <option value={item?.monitor_size}>{item?.monitor_size}</option>
                                        )
                                    })}
                            </Dropdown>
              </DropdownDiv>
              <SwitchDiv>
                {/* <OnOffSwitch /> */}
              </SwitchDiv>
            </SingleItem>
            <SingleItem>
              <ItemNameDiv>
                <ItemName>KEYBOARD WITH MOUSE</ItemName>
              </ItemNameDiv>
              <DropdownDiv></DropdownDiv>
              <SwitchDiv>
              <Switch
                                    onChange={() => { setKeyMouse(!isKeyMouse); setValues({ ...values, processor_status: isKeyMouse ? '1' : '0' }) }}
                                    checked={isKeyMouse}
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
                                    onChange={() => { setIsWifi(!isWifi); setValues({ ...values, processor_status: isWifi ? '1' : '0' }) }}
                                    checked={isWifi}
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
                <ItemName>SPEAKERS</ItemName>
              </ItemNameDiv>
              <SwitchDiv1>
              <RadioDiv id="speaker" >
                                    <input type="radio" id="yes" name="speaker" value="0" onChange={(e) => handleChange(e)}/>
                                    <label for="Yes">Yes</label>
                                    <input type="radio" id="no" name="speaker" value="1" onChange={(e) => handleChange(e)}/>
                                    <label for="No">No</label></RadioDiv>
              </SwitchDiv1>

              <SwitchDiv>
              <Switch
                                    onChange={() => { setIsSpeaker(!isSpeaker); setValues({ ...values, processor_status: isSpeaker ? '1' : '0' }) }}
                                    checked={isSpeaker}
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
                                    onChange={() => { setIsWebcam(!isWebcam); setValues({ ...values,webcam_working: isWebcam ? '1' : '0' }) }}
                                    checked={isWebcam}
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
              <SwitchDiv></SwitchDiv>
            </SingleItem>
            <SingleItem>
              <ItemNameDiv>
                <ItemName>WORKING CONDITION</ItemName>
              </ItemNameDiv>
              <SwitchDiv1>
                <RadioDiv id="condition">
                <input type="radio" id="good" name="working_condition" value="0" onChange={(e) => handleChange(e)}/>
                                    <label for="good">Good</label>
                                    <input type="radio" id="fair" name="working_condition" value="1" onChange={(e) => handleChange(e)}/>
                                    <label for="fair">Fair</label>
                                    <input type="radio" id="excellent" name="working_condition" value="2" onChange={(e) => handleChange(e)}/>
                                    <label for="excellent">Excellent</label>
                </RadioDiv>
              </SwitchDiv1>
              <SwitchDiv></SwitchDiv>
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
              <SwitchDiv></SwitchDiv>
            </SingleItem>
            <SingleItem>
              <ItemNameDiv>
                <ItemName>COMPLAINT</ItemName>
              </ItemNameDiv>
              <DropdownDiv3>
                {/* <Dropdown>
                  <option>select</option>
                  <option>Not working</option>
                  <option>Not working</option>
                  <option>Not working</option>
                  <option>Not working</option>
                </Dropdown> */}
                <Multiselect
                                    options={options}
                                    selectedValues={items}
                                    onSelect={handleSelect}
                                    onRemove={handleRemove}
                                    displayValue="name"
                                />
              </DropdownDiv3>
              <SwitchDiv></SwitchDiv>
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

              <SwitchDiv></SwitchDiv>
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
                <input type="text"  name="contact" onChange={(e)=>handleChange(e)} />
              </DropdownDiv>
              <SwitchDiv></SwitchDiv>
            </SingleItem>
            <SingleItem>
              <ItemNameDiv>
                <ItemName>COMMENT</ItemName>
              </ItemNameDiv>
              <DropdownDiv>
                <textarea rows="10" type="text"  name="comment" onChange={(e)=>handleChange(e)}/>
              </DropdownDiv>
              <SwitchDiv></SwitchDiv>
            </SingleItem>
          </ItemsDiv>
        </ExchangeContents>
        <SubmitButtonDiv>
          <button
          // onClick={() => setIsOpen(true)}
          onClick={()=>handleSubmit()}
          >
            Submit
          </button>
        </SubmitButtonDiv>
      </Exchangediv>
    </ExchangeContainer>
    </>
  );
};

export default DesktopExchange;
