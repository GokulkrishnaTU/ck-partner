import React, { useEffect,useState } from 'react'
import { BsUpload } from 'react-icons/bs'
import Switch from 'react-switch'
import Header from '../Header/Header'
import { ComponentDiv, ComponentHeading, Dropdown, DropdownDiv, DropdownDiv3, ExchangeContainer, ExchangeContents, Exchangediv, ExHeading, ItemName, ItemNameDiv, ItemsDiv, RadioDiv, SingleItem, SpecificationDiv, SubmitButtonDiv, SwitchDiv, SwitchDiv1, WorkingCondition } from '../LaptopExchange/LaptopExchangeStyle'
import { InputField } from '../MobileExchange/MobileExchangeStyle'
import SubmitModal from '../Modals/SubmitModal'
import axios from 'axios'
import Multiselect from 'multiselect-react-dropdown';
import { listComplaint,getReason,insertExchangeform, insertservicereport} from '../../../../../api/Api'
import { useSelector } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom'

const UpsExchange = () => {
    const {state} = useLocation()
    const navigate = useNavigate()
    console.log('state: ', state);
    const {user :freelancer} = useSelector((state) => state.user)
    console.log('freelancer: ', freelancer);
    const [reason, setReason] = useState([])
    const [items, setItems] = useState([])
    const [complaints, setComplaints] = useState([])
    const [isBarretyBuilt,setIsBarretyBuilt] = useState(false);


    const currentYear = new Date().getFullYear();
    const startYear = currentYear - 8;
    const endYear = currentYear ;
    const years = [];

    for (let i = startYear; i<= endYear ; i++){
        years.push(i);

    }
    // const [selectYear,setSelectYear] = useState ('');



    const [values,setValues] = useState({

        product_cat_id : state?.product_cat_id,
        freelancer_id : freelancer.id,
        exchange_id: state?.exchange_id,
        processor : '',
        processor_status : '',
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
        wifi_working : '',
        wifi : '',
        speaker_working : '',
        speaker : '',
        webcam_working : '',
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
        battery_built_working : '1',
        battery_built : '',
        amphere : '',
        model : '',
        service_engineer_id : '',
        name : '',
        contact : '',
        comment : '',
        // address: 'thrissur',
        // pincode: '670582'
     
    
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
        console.log('options: ', options);
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

    const listComplaints = () => {
        axios.get(`${listComplaint}?product_cat_id=${state?.id}`).then((resp) => {
            console.log(resp, 'resp')
            setComplaints(resp.data)
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
                navigate(-1)
            }else{
                alert(resp.data.message)
            }
        })
      }


  useEffect (()=>{
    listComplaints()
    listReason ()
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
                        <p style={{marginBottom: "0"}}>UPS</p>
                        <label>*only can exchange within the 7 years limit</label>
                    </div>
                    {/* <div>
                        <a style={{ color: "blue", fontSize: "5px", marginRight: "20px" }}>Upload Invoice <BsUpload /></a>
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
                                <ItemName>LOAD CAPACITY</ItemName></ItemNameDiv>
                            <DropdownDiv>
                                <InputField type="text" name="load_capacity" onChange={(e)=>handleChange(e)}/>
                            </DropdownDiv>
                            <SwitchDiv>
                            </SwitchDiv>
                        </SingleItem>
                        <SingleItem>
                            <ItemNameDiv>
                                <ItemName>BATTERY NUMBERS</ItemName></ItemNameDiv>
                            <DropdownDiv>
                                <InputField type="text" name="battery_numbers" onChange={(e)=>handleChange(e)}/>
                            </DropdownDiv>
                            <SwitchDiv>
                            </SwitchDiv>
                        </SingleItem>
                        <SingleItem>
                            <ItemNameDiv>
                            <ItemName>TYPE</ItemName>
                            </ItemNameDiv>
                            <SwitchDiv1>
                            <RadioDiv>
                                    <input type="radio" id="online" name="type" value="0" onChange={(e) => handleChange(e)} />
                                    <label for="online">Online</label>
                                    <input type="radio" id="offline" name="type" value="1" onChange={(e) => handleChange(e)} />
                                    <label for="offline">Offline</label></RadioDiv>
                                    </SwitchDiv1>
                            <SwitchDiv>
                            </SwitchDiv>
                        </SingleItem>
                        <SingleItem>
                            <ItemNameDiv>
                            <ItemName>BATTERY BUILT</ItemName>
                            </ItemNameDiv>
                            <SwitchDiv1>
                            <RadioDiv>
                                    <input type="radio" id="inbuilt" name="built" value="0" onChange={(e) => handleChange(e)} />
                                    <label for="Inbuilt">Inbuilt</label>
                                    <input type="radio" id="external" name="built" value="1" onChange={(e) => handleChange(e)} />
                                    <label for="Offline">External</label></RadioDiv>
                                    </SwitchDiv1>
                            <SwitchDiv>
                            <Switch
                                    onChange={() => { setIsBarretyBuilt(!isBarretyBuilt); setValues({ ...values,battery_built_working : isBarretyBuilt ? '1' : '0' }) }}
                                    checked={isBarretyBuilt}
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
                        <RadioDiv id="condition">
                                    <input type="radio" id="good" name="working_condition" value="0" onChange={(e) => handleChange(e)}/>
                                    <label for="good">Good</label>
                                    <input type="radio" id="fair" name="working_condition" value="1" onChange={(e) => handleChange(e)}/>
                                    <label for="fair">Fair</label>
                                    <input type="radio" id="excellent" name="working_condition" value="2" onChange={(e) => handleChange(e)}/>
                                    <label for="excellent">Excellent</label>
                </RadioDiv>
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
                       { options && <Multiselect
                                    options={options}
                                    selectedValues={items}
                                    onSelect={handleSelect}
                                    onRemove={handleRemove}
                                    displayValue="name"
                                />}
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
                    </ItemsDiv>
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
          {/* </ItemsDiv> */}
                </ExchangeContents>
                <SubmitButtonDiv>
                <button onClick={() =>handleSubmit()}>Submit</button>
                </SubmitButtonDiv>

            </Exchangediv>
        </ExchangeContainer>
        </>
    )
}

export default UpsExchange