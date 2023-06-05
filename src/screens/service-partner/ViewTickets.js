import React, { useEffect, useState } from 'react';
import {
    DrawerSidebarDiv, SidebarItemDiv2, Drawer, SidebarContentHeader, Icon, WelcomeDiv, P1, P2, Sidebar, CloseIcon, SidebarItemMainDiv, SidebarItemDiv, LinkDiv, LinkDiv2, ItemContentDiv, Logo, TableMainDiv, ModalContentHeader, Icon1, Button, Title, ProfileDiv,
} from './ServiceEngineerStyle';
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineClose } from 'react-icons/ai';
import EngineerIcon from '../../assests/images/CarbonCloudServiceManagement 1.png';
import viewTicketsLogo from '../../assests/images/Vector.png';
import ServiceDetails from './ServiceDetails';
import { IoIosLogOut } from 'react-icons/io'
import { CallFieldDiv, Dropdown1, FieldDiv, InputField2, ModalDiv, InputField3, InputField4, ViewTicketsMainDiv, ViewTicketsDiv, AssignBtn, AssignDiv, TableTickets, Dropdown, DropdownDiv } from './ViewTicketsStyle';
import { getServiceEngineer, insertServicelist, listServiceid } from '../../api/Api';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { customStyles } from './ServiceDetailsStyle';
import { User } from '../LogIn/UserContext';
import swal from 'sweetalert';
import {useSelector} from 'react-redux'
import { Modal, ModalContainer } from './ModalStyle';



const TicketsAssign = (props) => {
    // const { currentUser, getServicePartnterD } = User()
    const currentUser = useSelector((state) => state.user)
    console.log('currentUser: ', currentUser);
    // console.log(props.ticketData,"ddddd")
    // console.log(props.serviceEngineerData, "eng data")
    const [engineerData, setEngineerData] = useState([])
    const [values, setValues] = useState(Object.assign({
        ticket_no: props?.ticketData?.ticket_no,
        call_received_time: props?.ticketData?.created_at,
        service_partner_id: currentUser?.user?.id,
        call_cordinator_id: props?.ticketData?.call_cordinator_id,
        call_finishing_date: "",
        call_finishing_time: "",
        service_engineer_id: ""
    }))
    console.log(values, "data")

    const handleChange = (e) => {
        const { name, value } = e.target
        setValues({
            ...values,
            [name]: value,
        })
    }
    const handleSubmit = () => {
        axios({
            method: 'post',
            url: `${insertServicelist}`,
            data: values
        }).then(resp => {
            console.log(resp)

            if (resp.data) {
                props.getListServiceData()
            }
        })
    }
    const getServiceEngineerData = () => {
        fetch(`${getServiceEngineer}`)
            .then((resp) => resp.json())
            .then(response => {
                console.log(response, "engineerwwweeefd4")
                setEngineerData(response)
            })
    }

    useEffect(() => {
        getServiceEngineerData()
        // getServicePartnterD()
    }, [])
    return (
        <Modal>
        <ModalContainer style={{width: '400px'}}>
            <ModalContentHeader>
                <p>Assign Service Engineer</p>
                <Icon1 onClick={() => props?.closeModal()}><AiOutlineClose size={20} /></Icon1>
            </ModalContentHeader>
            <FieldDiv>
                <p>Ticket number</p>
                <InputField2 name="ticket_no" type="text" value={props?.ticketData?.ticket_no} />
            </FieldDiv>
            <FieldDiv>
                <Dropdown1 name="service_engineer_id" id="tickets" onChange={(e) => setValues({
                    ...values,
                    service_engineer_id: e.target.value
                })}>
                    <option value="ticket-rised">Service Engineer Name </option>

                    {/* { engineerData?.map((item, index) => {
                        return (
                            <>
                            <option value={item?.serviceEngineerId}>{item?.serviceEngineerName}</option>
                            {console.log("878787878787",item?.serviceEngineerName)}</>
                        )
                    }) } */}

                    {console.log('llll', engineerData?.filter(i => i?.service_partner_id == 20))}
                    {engineerData?.filter(i => i?.service_partner_id == currentUser?.user?.id).map(item => {
                        return(
                            <option value={item?.serviceEngineerId}>{item?.serviceEngineerName}</option>
                        )
                    })}
                </Dropdown1>
            </FieldDiv>
            <FieldDiv>
                <p>Call Received Time</p>
                <InputField2 name="call_received_time" type="text" value={props.ticketData.call_received_time} />
            </FieldDiv>
            <FieldDiv>
                <p>Call Coordinator </p>
                <InputField2 name="call-coordinator" type="text" value={props.ticketData.CallCordinatorName} />
            </FieldDiv>
            <CallFieldDiv>
                <div><p>Call Finishing Date</p>
                    <InputField3 name="call_finishing_date" type="date" onChange={(e) => { handleChange(e) }} value={values.call_finishing_date} /></div>
                <div>
                    <p>Call Finishing Time</p>
                    <InputField4 name="call_finishing_time" type="time" onChange={(e) => { handleChange(e) }} value={values.call_finishing_time} />
                </div>
            </CallFieldDiv>
            {/* <CallFieldDiv>
                <div><p>Call Received Time</p>
                    <InputField3 name="call_received_time" type="time" onChange={ (e) =>{ handleChange(e)}} value= {values.call_received_time}/></div>
            </CallFieldDiv> */}

            <Button>
                <button onClick={() => {
                    handleSubmit();
                    props.closeModal()
                }}>Save</button>
            </Button>
      </ModalContainer>
      </Modal>
    )
}

const ViewTickets = (props) => {
    // const { currentUser, getServicePartnterD } = User()
    const {user: currentUser} = useSelector((state) => state.user)
    const [ticket, setTicket] = useState("all")
    const [ticketData, setTicketData] = useState([])
    const [ticketNumber, setTicketNumber] = useState([])
    console.log('ticketNumber: ', ticketNumber);
    const [listServiceData, setListServiceData] = useState([])
    const getListServiceData = () => {
        fetch(`${listServiceid}/${currentUser.id}`)
            .then((res) => res.json())
            .then((json) => {
                console.log(json, "data")
                setListServiceData(json)
            })
    }
    useEffect(() => {
        getListServiceData()
        // getServicePartnterD()
    }, [currentUser.id])

    const [modalIsOpen, setModalIsOpen] = useState(false)
    const closeModal = () => (
        setModalIsOpen(false)
    )
    const Logout = () => {
        swal({
            text: `Are you sure you want to logout?`,
            icon: "warning",
            buttons: true,
            dangerMode: true,
        }).then((logout) => {
            if(logout){
                localStorage.clear("user_id")
            localStorage.clear("userid")
            navigate('/login')
            }else{
                
            }
            
        })
    }
    const handleTicket = (e) => {
        setTicket(e.target.value)
    }
    const navigate = useNavigate()
    return (
        <DrawerSidebarDiv>
            {/* <Drawer >
                <SidebarContentHeader>
                    <div onClick={() => props.setIsOpen(true)}>
                        <Icon><GiHamburgerMenu size={30} /></Icon>
                    </div>
                    <WelcomeDiv isOpen={props.isOpen}>
                        <ProfileDiv><P1>Hi John'</P1> <span onClick={() => Logout()}><IoIosLogOut size={30} /></span></ProfileDiv>
                        <P2>Welcome to clikekart</P2>
                    </WelcomeDiv>
                </SidebarContentHeader>
                <Sidebar isOpen={props.isOpen}>
                    <CloseIcon onClick={() => props?.setIsOpen(false)}><AiOutlineClose size={20} /></CloseIcon>
                    <SidebarItemMainDiv>
                        <SidebarItemDiv >
                            <LinkDiv selectedItem={props.selectedItem} onClick={() => {
                                props?.setSelectedItem("service-engineer");
                                props?.setServiceDetails(false)
                                props?.setIsOpen(false)
                            }}>
                                <ItemContentDiv ><Logo src={EngineerIcon} />
                                    <Title >Service Engineers</Title></ItemContentDiv>
                            </LinkDiv>
                        </SidebarItemDiv>
                        <SidebarItemDiv2>
                            <LinkDiv2 selectedItem={props.selectedItem} onClick={() => {
                                props?.setSelectedItem("view-tickets");
                                props?.setIsOpen(false)
                                props?.setServiceDetails(false)
                            }}>
                                <ItemContentDiv><Logo src={viewTicketsLogo} />
                                    <Title>View Tickets</Title></ItemContentDiv>
                            </LinkDiv2>
                        </SidebarItemDiv2>
                    </SidebarItemMainDiv>
                </Sidebar>
            </Drawer> */}
            {/* {props?.serviceDetails ? <ServiceDetails ticketNumber={ticketNumber} sidebarIsOpen={props.isOpen} setServiceDetails={props.setServiceDetails} /> : */}
             <ViewTicketsMainDiv drawerClose={props.isOpen}>
                <ViewTicketsDiv>
                    <p>View Tickets</p>
                    <DropdownDiv>
                        <label>Filter</label>
                        <label>:</label>
                        <Dropdown name="tickets" id="tickets" onChange={(e) => handleTicket(e)}>
                        <option value="all">Ticket Status</option>
                            <option value="Raised">Raised</option>
                            <option value="Closed" >Closed</option>
                            <option value="Pick Up">Pick Up</option>
                            <option value="Accepted">Accepted</option>

                            
                        </Dropdown>
                    </DropdownDiv>
                </ViewTicketsDiv>
                <TableMainDiv>
                    {/* <Modal
                        isOpen={modalIsOpen}
                        ariaHideApp={false}
                        // onRequestClose={closeModal}
                        style={customStyles}>
                        <div><TicketsAssign ticketData={ticketData} closeModal={closeModal} serviceEngineerData={props.serviceEngineerData} getListServiceData={getListServiceData} /></div>
                    </Modal> */}
                    {modalIsOpen &&  <TicketsAssign ticketData={ticketData} closeModal={closeModal} serviceEngineerData={props.serviceEngineerData} getListServiceData={getListServiceData} />}
                    <TableTickets>
                        <tr>
                            <th>Ticket No.</th>
                            <th>Customer Name</th>
                            <th>Contact Number</th>
                            <th>Brand</th>
                            <th>Complaint</th>
                            <th>Service Engineer name</th>
                            <th>Call Received Time</th>
                            <th>Call Ended Time</th>
                            <th>Ticket Status</th>
                            <th>Action</th>
                        </tr>
                        {ticket == "all" ? listServiceData?.map((ticket, index) => {
                            return (

                                <tbody key={index}>
                                    <tr >
                                        <td>{ticket?.ticket_no}</td>
                                        <td>{ticket?.customerName}</td>
                                        <td>{ticket?.contactNumber}</td>
                                        <td>{ticket?.brand}</td>
                                        <td>{ticket?.complaint}</td>
                                        <td >{ticket?.ServiceEngineerName}</td>
                                        <td >{ticket?.call_received_time}</td>
                                        <td>{ticket?.call_ended_time}</td>
                                        <td>{ticket?.ticketStatus}</td>
                                        <td>{ticket?.ticketStatus == "Closed" ? <div><a onClick={() => {
                                            // props?.setServiceDetails(true)
                                            // props?.setIsOpen(false)
                                            setTicketNumber(ticket)
                                            navigate('service-details', {state: ticket})
                                        }}>View Details</a>
                                        </div>
                                            :
                                            <AssignDiv drawerClose={props.isOpen}>{ticket?.ServiceEngineerName ? <AssignBtn style={{background: '#7692f9'}}>Assigned</AssignBtn> :<AssignBtn onClick={() => { setModalIsOpen(true); setTicketData(ticket) }}>Assign</AssignBtn>}
                                                <a onClick={() => {
                                                    
                                                    setTicketNumber(ticket)
                                                    navigate('service-details' , {state: ticket})
                                                }}>View Details</a>
                                            </AssignDiv>}</td>
                                    </tr>
                                </tbody>
                            )
                        })
                            : listServiceData?.filter(item => item?.ticketStatus == ticket).map((ticket, index) => {
                                return (
                                    <tbody key={index}>
                                        <tr >
                                            <td>{ticket?.ticket_no}</td>
                                            <td>{ticket?.customerName}</td>
                                            <td>{ticket?.contactNumber}</td>
                                            <td>{ticket?.brand}</td>
                                            <td>{ticket?.complaint}</td>
                                            <td>{ticket?.ServiceEngineerName}</td>
                                            <td>{ticket?.call_received_time}</td>
                                            <td>{ticket?.call_ended_time}</td>
                                            <td>{ticket?.ticketStatus}</td>
                                            {console.log("ticketno. ======> ", ticket?.ticket_no)}
                                            <td>{ticket.ticketStatus == "Closed" ? <div><a onClick={() => {
                                                // props.setServiceDetails(true)
                                                // props.setIsOpen(false)
                                                setTicketNumber(ticket)
                                                navigate('service-details' , {state: ticket})
                                            }}>View Details</a>
                                            </div>
                                                :
                                                <AssignDiv drawerClose={props.isOpen}><AssignBtn onClick={() => { setModalIsOpen(true); setTicketData(ticket) }}>Assign</AssignBtn>
                                                    <a onClick={() => {
                                                        // props.setServiceDetails(true)
                                                        // props.setIsOpen(false)
                                                    navigate('service-details' , {state: ticket})
                                                        setTicketNumber(ticket)
                                                    }}>View Details</a>
                                                </AssignDiv>}</td>
                                        </tr>
                                    </tbody>
                                )
                            }) }                            
                    </TableTickets>
                </TableMainDiv>
            </ViewTicketsMainDiv>
        </DrawerSidebarDiv>
    )
}
export default ViewTickets

