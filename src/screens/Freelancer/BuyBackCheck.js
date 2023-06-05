import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { server_api } from '../../assests/consts/api'
import { COLORS } from '../../assests/Themes/Themes'
// import { ServiceDetailsDiv } from './ServiceDetailsStyle'
import { Div, DrawerSidebarDiv, ServiceEngineerDiv, ServiceEngineerHeaderDiv, ServiceEngMainDiv, Table, TableMainDiv } from '../service-partner/ServiceEngineerStyle'
// import ViewDetailModal from './ViewDetailModal'
import ViewDetailModal from '../service-partner/ViewDetailModal'
// import { AssignBtn, AssignDiv } from './ViewTicketsStyle'
import { AssignBtn,AssignDiv } from '../service-partner/ViewTicketsStyle'
import BuybackCheckModal from './BuybackCheckModal'

const BuyBackCheck = () => {
    const {user :freelancer} = useSelector((state) => state.user)
    console.log('freelancer: ', freelancer);
    const [data, setData] = useState([])
    const [items, setItems] = useState([])
    const [id, setId] = useState([])
    console.log('items: ', items);
    const [modal, setModal] = useState(false)
    const navigation = useNavigate()
    const getData = () => {
        axios.get(`${server_api}list_details?id=${freelancer?.id}`).then(resp => {
            console.log('resp: ', resp);
            setData(resp.data)
        })
    }
    useEffect(() => {
        getData()
    },[freelancer?.id])
  return (
    <Div>
        {modal && <ViewDetailModal setModal={setModal} items={items}/>}

        
        <ServiceEngineerDiv>
            <DrawerSidebarDiv>
            <ServiceEngineerHeaderDiv >
                                <p>Buy Back Check</p>
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
                                    {data.map((item, i) => {
                                        return(

                                            <tr key={i}>
                                        <td>{item?.id}</td>
                                        <td>{item?.customer_name}</td>
                                        <td>{item?.contact_number}</td>
                                        <td> {item?.status_report == 1 ? <a style={{color: COLORS.linkColor}} onClick={() => {setModal(true); setItems(item)}}>{item?.product_category_name}</a> : <a style={{color: COLORS.linkColor , opacity: '0.5'}} onClick={() => {setModal(true); setItems(item)}}>{item?.product_category_name}</a>}</td>
                                        <td>{JSON.parse(item?.complaint_id)[0].complaint ? JSON.parse(item?.complaint_id)[0]?.complaint : JSON.parse(item?.complaint_id)[0]?.name}</td>
                                        <td style={{width: "150px"}}>{item?.address}</td>
                                        <td> {item?.status == 1 ? <AssignDiv ><AssignBtn onClick={()=>{ navigation(`/${(item?.product_category_name).toLowerCase()}`, {state: item}) }}>Add Report</AssignBtn>
                                                    {/* <a onClick={() => setModal(true)}>View Details</a> */}
                                                </AssignDiv>: 'Report Added' }</td>
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

export default BuyBackCheck