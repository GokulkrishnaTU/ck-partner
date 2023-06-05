import React, { useEffect, useState } from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import styled from 'styled-components'
import { ButtonDiv } from '../Freelancer/FreelancerDetailsStyles'
import { Modal, ModalContainer } from './ModalStyle'
import { Button, Icon1, ModalContentHeader } from './ServiceEngineerStyle'
import { getServiceEngineer,assignServiceEngineer } from '../../api/Api'
import { useSelector } from 'react-redux'
import axios from 'axios'

const AssignModal = (props) => {

    const {user: currentUser} = useSelector((state) => state.user)

    const [serviceEngineerData, setServiceEngineerData] = useState([])
    console.log('serviceEngineerData: ', serviceEngineerData);
    const [values,setValues] = useState({
        service_engineer_id : '',
        service_exchange_id : props.items?.exchange_id,
        id : props?.items?.id
        
    })
    console.log('values: ', values);
    const getServiceEngineerData = () => {
        fetch(`${getServiceEngineer}`)
            .then((resp) => resp.json())
            .then(response => {
                setServiceEngineerData(response)
            })
    }
    useEffect(() => {
        getServiceEngineerData()
    }, [])

    const handleSubmit = () =>{
        props.closeModal(false)
        axios.post(assignServiceEngineer,values).then(resp=>{
            console.log('resp: ', resp);
            if(resp.data.code==200){
                    
                }
            
            
        })
    }

  return (
    <Modal>
    <ModalContainer style={{width: '400px', marginBottom: '0'}}>
        
    <ModalContentHeader>
        <p>Choose Service Engineer</p>
        <Icon1 onClick={() => props.closeModal(false)}><AiOutlineClose size={20} /></Icon1>
    </ModalContentHeader>
    <ModalBody>
      
        <select name="servicePartner" id="servicePartner" onChange={(e) => setValues({...values, service_engineer_id: e.target.value})}>
            <option value="select" >select service engineer</option>
            {serviceEngineerData.filter(data=>data.service_partner_id == currentUser?.id).map((item,index)=>{

                return(
                    <>
          
          <option value={item?.serviceEngineerId}>{item?.serviceEngineerName}</option>
         
          </>
                )
            })}
          
        </select>
        </ModalBody>
        <ButtonDiv style={{ justifyContent: 'center',alignItems:'center'}}><button onClick={()=>handleSubmit()} style={{width: '120px'}}>Submit</button></ButtonDiv>
        
    </ModalContainer>
    </Modal>
  )
}

export default AssignModal

export const ModalBody = styled.div`
    padding: 20px 6px;
    display: flex;
    flex-direction: column;
    gap: 15px;
    /* width: 100%; */
    justify-content: center;
    align-items: center;
    padding-bottom: 30px;
    input, select{
        padding: 8px;
        border: 1px solid gray;
        border-radius: 5px;
        font-family: poppins;
        width: 60%;
    }
    label{
        font-size: 12px;
    }
`
