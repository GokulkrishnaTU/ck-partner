import React, { useEffect } from 'react'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { COLORS } from '../../assests/Themes/Themes'
import { ServiceDetailsDiv } from './ServiceDetailsStyle'
import { Div, DrawerSidebarDiv, ServiceEngineerDiv, ServiceEngineerHeaderDiv, ServiceEngMainDiv, Table, TableMainDiv } from './ServiceEngineerStyle'
import ViewDetailModal from './ViewDetailModal'
import { AssignBtn, AssignDiv } from './ViewTicketsStyle'

import axios from 'axios'
import { listDetails } from '../../api/Api'
import AssignModal from './AssignModal'
import ReportModal from './ReportModal'
const BuyBack = () => {
    const [modal, setModal] = useState(false)
    const [reportModal, setReportModal] = useState(false)
    const {user: currentUser} = useSelector((state) => state.user);
    console.log('currentUser: ', currentUser);
    const [isOpen, setIsOpen] =useState(false)



    const [isData,setIsData] = useState([]);
    const [items,setItems] = useState([]);
  
      const fetchData  =()=>{
        axios.get(`${listDetails}?id=${currentUser?.id}`).then(resp =>{
            console.log('resp: ', resp);
            setIsData(resp.data)
        })
      }


    useEffect(()=>{
        
        fetchData ()
        }, [currentUser?.id]);
    

  return (
    <Div>
        {modal && <ViewDetailModal setModal={setModal} items={items}/>}
        {reportModal && <ReportModal setModal={setReportModal} items={items}/>}
        {isOpen && <AssignModal closeModal = {setIsOpen} items={items}/>}
        <ServiceEngineerDiv>
            <DrawerSidebarDiv>
            <ServiceEngineerHeaderDiv >
                                <p>Buy Back</p>
                                {/* <button onClick={() => setModalIsOpen(true)}>Add Service Engineer</button> */}
                            </ServiceEngineerHeaderDiv>
                            <TableMainDiv>
                                <Table>
                                <tr>
                                        <th>ID</th>
                                        <th>Customer Name</th>
                                        <th>Contact Number</th>
                                        <th>Product Category</th>
                                        <th>Complaint</th>
                                        <th>Address</th>
                                        <th>Action</th>
                                    </tr>
                                    {isData?.map((item)=>{
                                        return(
                                            <tr>
                                            <td>{item?.id}</td>
                                            <td>{item?.customer_name}</td>
                                            <td>{item?.contact_number}</td>
                                            <td><a style={{color: COLORS.linkColor}} onClick={ () => {setModal(true); setItems(item)}}>{item?.product_category_name}</a></td>
                                            <td>{JSON.parse(item?.complaint_id)[0].complaint ? JSON.parse(item?.complaint_id)[0].complaint : JSON.parse(item?.complaint_id)[0].name}</td>
                                            <td style={{width: "150px"}}>{item.address}</td>
                                            <td><AssignDiv >{item?.service_engineer_id ? <AssignBtn style={{background: "#6e8cf9"}}>Assigned</AssignBtn> : <AssignBtn onClick={() => {setIsOpen(true); setItems(item)}}>Assign</AssignBtn>}
                                                       {item?.status_report == 1 ? <a onClick={() => {setReportModal(true); setItems(item)}}>View Details</a> : <a style={{opacity: '0.5'}}>View Details</a>}
                                                    </AssignDiv></td>
                                        </tr>
                                        
                                       
                                        )
                                    })}
                                            
                                           
                                    

                                </Table>
                            </TableMainDiv>
            </DrawerSidebarDiv>

        </ServiceEngineerDiv>
    </Div>
  )
}

export default BuyBack