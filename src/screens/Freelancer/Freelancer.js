import React from 'react'
import { Button, CloseIcon, Div, Drawer, Icon, Icon1, ItemContentDiv, LinkDiv, LinkDiv2, Logo, ModalContentHeader, P1, P2, ProfileCont, ProfileDiv, ProfileIcon, Sidebar, SidebarContentHeader, SidebarDiv, SidebarHeadingDiv, SidebarItemDiv, SidebarItemDiv2, SidebarItemMainDiv, TableMainDiv, Title, WelcomeDiv } from '../service-partner/ServiceEngineerStyle'
import { customStylesAcceptModal, DropdownTickets, FreelacerLinkDiv, FreelancerContDiv, FreelancerContents, FreelancerDiv, SidebarFreelancer } from './FreelancerStyles'
import viewTicketsLogo from '../../assests/images/Vector.png'
import { GiHamburgerMenu } from 'react-icons/gi'
import { AiOutlineClose } from 'react-icons/ai'
import { useState } from 'react'
// import Modal from 'react-modal';
import { AssignBtn, AssignDiv, CallFieldDiv, DropdownDiv, FieldDiv, InputField2, InputField3, InputField4, ModalDiv, TableTickets, ViewTicketsDiv } from '../service-partner/ViewTicketsStyle'
import { FaUserCircle } from 'react-icons/fa'
import { BiUser } from 'react-icons/bi'
import { FiLogOut } from 'react-icons/fi'
import { IoMdArrowDropdown } from 'react-icons/io'
import { customStyles } from '../service-partner/ServiceDetailsStyle'
import axios from 'axios'
import { insertServiceEngineer, insertServicelist, listServiceid, updateServiceEngineer } from '../../api/Api'
import { IoIosLogOut } from 'react-icons/io'
import { useEffect } from 'react'
import FreelancerViewDetails from './FreelancerViewDetails'
import { useNavigate } from 'react-router-dom'
import swal from 'sweetalert'
import {  useSelector } from 'react-redux';
import { Modal, ModalContainer } from '../service-partner/ModalStyle'


const FreelancerAcceptModal = (props) => {
    const {user :freelancer} = useSelector((state) => state.user)
    const [values, setValues] = useState(Object.assign({
        
        ticket_no: props?.freelancerData?.ticket_no,
        call_received_time: props?.freelancerData?.created_at,
        service_partner_id: freelancer?.id,
        call_cordinator_id: props?.freelancerData?.call_cordinator_id,
        call_finishing_date: "",
        call_finishing_time: "",
        service_engineer_id: ""
    }))
    console.log('values: ', values);
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
            console.log(resp.data, "accept freelancer")
        })
    }


    return (
        <Modal>
            <ModalContainer style={{width: '400px' , paddingBottom: '0'}}>
            <ModalContentHeader>
                <p>Accept Tickets</p>
                <Icon1 onClick={() => props?.setAcceptModal(false)}><AiOutlineClose size={20} /></Icon1>
            </ModalContentHeader>
            <FieldDiv>
                <p>Ticket number</p>
                <InputField2 name="ticket_no" type="text" value={props.freelancerData.ticket_no} />
            </FieldDiv>
            <FieldDiv>
                <p>Call Received Time</p>
                <InputField2 name="call_received_time" type="text" value={props.freelancerData.call_received_time} />
            </FieldDiv>
            <FieldDiv>
                <p>Call Coordinator </p>
                <InputField2 name="call-coordinator" type="text" value={props.freelancerData.CallCordinatorName} />
            </FieldDiv>
            <CallFieldDiv>
                <div><p>Call Finishing Date</p>
                    <InputField3 name="call_finishing_date" type="date" onChange={(e) => { handleChange(e) }} value={values.call_finishing_date} /></div>
                <div>
                    <p>Call Finishing Time</p>
                    <InputField4 name="call_finishing_time" type="time" onChange={(e) => { handleChange(e) }} value={values.call_finishing_time} />
                </div>
            </CallFieldDiv>
            <Button>
                <button onClick = {() =>{ handleSubmit()
                props?.setAcceptModal(false)}}>Save</button>
            </Button>
        </ModalContainer>
        </Modal>
    )
}

const Freelancer = () => {
    const {user :freelancer} = useSelector((state) => state.user)
    console.log('freelancer ______>: ', freelancer);
    const [drawerIsOpen, setDrawerIsOpen] = useState(false)
    const [selected, setSelected] = useState("view-tickets")
    const [acceptModal, setAcceptModal] = useState(false)
    const [freelancerTickets, setFreelancerTickets] = useState([])
    const [freelancerData, setFreelancerData] = useState([])
    console.log('freelancerData: ', freelancerData);
    const [freelanceDetails, setFreelanceDetails] = useState(false)
    const [ticketData, setTicketData] = useState([])
    console.log('ticketData: ', ticketData);
    const [ticket, setTicket] = useState("all")
    const [loader, setLoader] = useState(false)


    const navigate = useNavigate()
    const getFreelancerTickets = () => {
        console.log(`${listServiceid}/${freelancer?.id}`)
        axios({
            method: 'get',
            url: `${listServiceid}/${freelancer?.id}`

        }).then(resp => {
            console.log('resp: ', resp);
            setFreelancerTickets(resp?.data)
        })
    }
    useEffect(() => {
        console.log("hiit")
        getFreelancerTickets()
        // getFreelancer()
    }, [])
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
    return (
        <Div>
            <FreelancerDiv>
                {/* <SidebarDiv>
                    <SidebarHeadingDiv>
                        <ProfileDiv><P1>Hi {freelancer.name}</P1> <span onClick={() => Logout()}><IoIosLogOut size={30} /></span></ProfileDiv>

                        <P2>Welcome to clikekart</P2>
                    </SidebarHeadingDiv>
                    <SidebarItemDiv2>
                        <FreelacerLinkDiv selected={selected} onClick={() => setFreelanceDetails(false)} >
                            <ItemContentDiv><Logo src={viewTicketsLogo} />
                                <Title>View Tickets</Title></ItemContentDiv>
                        </FreelacerLinkDiv>
                    </SidebarItemDiv2>
                </SidebarDiv> */}
                <FreelancerContDiv>
                    {/* <Drawer>
                        <SidebarContentHeader>
                            <div onClick={() => setDrawerIsOpen(true)}>
                                <Icon><GiHamburgerMenu size={30} /></Icon>
                            </div>
                            <WelcomeDiv drawerIsOpen={drawerIsOpen}>
                                <ProfileDiv><P1>Hi {freelancer.name}</P1> <span onClick={() => Logout()}><IoIosLogOut size={30} /></span></ProfileDiv>

                                <P2>Welcome to clikekart</P2>
                            </WelcomeDiv>
                        </SidebarContentHeader>
                        <SidebarFreelancer drawerIsOpen={drawerIsOpen}>
                            <CloseIcon onClick={() => setDrawerIsOpen(false)}><AiOutlineClose size={20} /></CloseIcon>
                            <SidebarItemMainDiv>
                                <SidebarItemDiv2>
                                    <FreelacerLinkDiv selected={selected} onClick={() => {
                                        setDrawerIsOpen(false)
                                    }}>
                                        <ItemContentDiv><Logo src={viewTicketsLogo} />
                                            <Title>View Tickets</Title></ItemContentDiv>
                                    </FreelacerLinkDiv >
                                </SidebarItemDiv2>
                                <SidebarItemDiv2>
                                    <FreelacerLinkDiv selected={selected} onClick={() => {
                                        setDrawerIsOpen(false)
                                    }}>
                                        <ItemContentDiv><Logo src={viewTicketsLogo} />
                                            <Title>View Tickets</Title></ItemContentDiv>
                                    </FreelacerLinkDiv >
                                </SidebarItemDiv2>
                            </SidebarItemMainDiv>
                        </SidebarFreelancer>
                    </Drawer> */}

                    {/* {freelanceDetails ? <FreelancerViewDetails drawerIsOpen={drawerIsOpen} setFreelanceDetails={setFreelanceDetails} ticketData={ticketData} ticketNumber = {ticketData}/> :  */}
                    <FreelancerContents drawerIsOpen={drawerIsOpen}>
                        <ViewTicketsDiv>
                            <p>View Tickets</p>
                            <DropdownDiv>
                                <label>Filter</label>
                                <label>:</label>
                                <DropdownTickets name="tickets" id="tickets" onChange={(e) => handleTicket(e)}>
                                    <option value="all">Ticket Status</option>
                                    <option value="Raised">Raised</option>
                                    <option value="Closed" >Closed</option>
                                    <option value="Pick Up">Pick Up</option>
                                    <option value="Accepted">Accepted</option>
                                </DropdownTickets>
                            </DropdownDiv>
                        </ViewTicketsDiv>
                        <TableMainDiv>
                            {/* <Modal
                                isOpen={acceptModal}
                                ariaHideApp={false}
                                // onRequestClose={closeModal}
                                style={customStylesAcceptModal}>
                                <div><FreelancerAcceptModal freelancerData={freelancerData} setAcceptModal={setAcceptModal} setFreelanceDetails={setFreelanceDetails} /></div>
                            </Modal> */}
                            {acceptModal && <FreelancerAcceptModal freelancerData={freelancerData} setAcceptModal={setAcceptModal} setFreelanceDetails={setFreelanceDetails} />}
                            <TableTickets>
                                <tr>
                                    <th>Ticket No.</th>
                                    <th>Customer Name</th>
                                    <th>Contact Number</th>
                                    <th>Brand</th>
                                    <th>Complaint</th>
                                    <th>Call Received Time</th>
                                    <th>Call Ended Time</th>
                                    <th>Ticket Status</th>
                                    <th>Action</th>
                                </tr>
                                {ticket == "all" ? freelancerTickets?.map((ticket, index) => {
                                    return (
                                        <tbody key={index}>
                                            <tr >
                                                <td>{ticket?.ticket_no}</td>
                                                <td>{ticket?.customerName}</td>
                                                <td>{ticket?.contactNumber}</td>
                                                <td>{ticket?.brand}</td>
                                                <td>{ticket?.complaint}</td>
                                                <td >{ticket?.call_received_time}</td>
                                                <td>{ticket?.call_ended_time}</td>
                                                <td>{ticket?.ticketStatus}</td>

                                                <td>{ticket?.ticketStatus == "Closed" ? <div><a onClick={() => {
                                                    // setFreelanceDetails(true)
                                                    navigate('details', {state: ticket})
                                                    setTicketData(ticket)
                                                }}>View Details</a></div> :
                                                    <AssignDiv><AssignBtn onClick={() => {
                                                        setAcceptModal(true)
                                                        setFreelancerData(ticket)
                                                    }}>Accept</AssignBtn>
                                                        <a onClick={() => {
                                                            // setFreelanceDetails(true)
                                                            setTicketData(ticket)
                                                            navigate('details', {state: ticket})
                                                        }}>View Details</a>
                                                    </AssignDiv>}
                                                </td>
                                            </tr>
                                        </tbody>
                                    )
                                })
                                    : freelancerTickets?.filter(item => item?.ticketStatus == ticket).map((ticket, index) => {
                                        return (
                                            <tbody key={index}>
                                                <tr >
                                                    <td>{ticket?.ticket_no}</td>
                                                    <td>{ticket?.customerName}</td>
                                                    <td>{ticket?.contactNumber}</td>
                                                    <td>{ticket?.brand}</td>
                                                    <td>{ticket?.complaint}</td>
                                                    <td >{ticket?.call_received_time}</td>
                                                    <td>{ticket?.call_ended_time}</td>
                                                    <td>{ticket?.ticketStatus}</td>

                                                    <td>{ticket?.ticketStatus == "Closed" ? <div><a onClick={() => {
                                                        // setFreelanceDetails(true)
                                                        navigate('details', {state: ticket})
                                                        setTicketData(ticket)
                                                    }}>View Details</a></div> :
                                                        <AssignDiv><AssignBtn onClick={() => {
                                                            setAcceptModal(true)
                                                            setFreelancerData(ticket)
                                                        }}>Accept</AssignBtn>
                                                            <a onClick={() => {
                                                                // setFreelanceDetails(true)
                                                                setTicketData(ticket)
                                                                navigate('details', {state: ticket})

                                                            }}>View Details</a>
                                                        </AssignDiv>}
                                                    </td>
                                                </tr>
                                            </tbody>
                                        )
                                    }
                                    )}
                            </TableTickets>
                        </TableMainDiv>
                    </FreelancerContents>
                    {/* } */}
                </FreelancerContDiv>
            </FreelancerDiv>
        </Div>
    )
}

export default Freelancer