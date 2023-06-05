import React, { useEffect, useState } from 'react'
import styled, { css } from 'styled-components'
import EngineerIcon from '../../assests/images/CarbonCloudServiceManagement 1.png'
import viewTicketsLogo from '../../assests/images/Vector.png'
import { FiEdit } from 'react-icons/fi'
import { RiDeleteBinLine } from 'react-icons/ri'
import { GiHamburgerMenu } from 'react-icons/gi'
import { AiOutlineClose } from 'react-icons/ai'
import { FaUserCircle } from 'react-icons/fa'
import { BiUser } from 'react-icons/bi'
import { IoIosLogOut } from 'react-icons/io'
import { IoMdArrowDropdown } from 'react-icons/io'
import ViewTickets from './ViewTickets'
import { COLORS } from '../../assests/Themes/Themes'
import { Button, CloseIcon, Div, Drawer, P1, P2, DrawerSidebarDiv, Icon, Icon1, InputField, InputFieldDiv, ItemContentDiv, LinkDiv, LinkDiv2, Logo, ModalContentHeader, ServiceEngineerDiv, ServiceEngineerHeaderDiv, Sidebar, SidebarContentHeader, SidebarDiv, SidebarHeadingDiv, SidebarItemDiv, SidebarItemDiv2, SidebarItemMainDiv, StatusDiv, StatusText, Table, TableMainDiv, Title, WelcomeDiv, InputField1, ServiceEngMainDiv, ProfileDiv, ProfileIcon, ProfileCont, Div6 } from './ServiceEngineerStyle'
import { deleteServiceEngineer, getServiceEngineer, insertServiceEngineer, updateServiceEngineer } from '../../api/Api'
import axios from 'axios'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import { User } from '../LogIn/UserContext'
import swal from 'sweetalert'
import {useSelector} from 'react-redux'
import { Modal, ModalContainer } from './ModalStyle'


const AddServiceEngineer = (props) => {
    // const { currentUser, getServicePartnterD } = User()
    const {user: currentUser} = useSelector((state) => state.user);
    console.log('current-----User: ', currentUser);

    const [values, setValues] = useState(Object.assign({
        name: '',
        email: '',
        contact: '',
        address: '',
        status: '',
        service_partner_id: currentUser?.id
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
            url: `${insertServiceEngineer}`,
            data: values
        }).then(resp => {
            if (resp.data) {
                props.getServiceEngineerData()
            }
        })
    }
    return (
        <Modal>
            <ModalContainer style={{width: '400px', marginBottom: '0'}}>
                
            <ModalContentHeader>
                <p>Add Service Engineer</p>
                <Icon1 onClick={() => props.closeModal()}><AiOutlineClose size={20} /></Icon1>
            </ModalContentHeader>
            <InputFieldDiv>
                <p>Name</p>
                <InputField name="name" type="text" value={values.name} onChange={(e) => { handleChange(e) }} />
            </InputFieldDiv>
            <InputFieldDiv>
                <p>Email Id</p>
                <InputField name="email" type="text" value={values.email} onChange={(e) => { handleChange(e) }} />
            </InputFieldDiv>
            <InputFieldDiv>
                <p>Contact Number</p>
                <InputField name="contact" type="text" value={values.contact} onChange={(e) => { handleChange(e) }} />
            </InputFieldDiv>
            <InputFieldDiv>
                <p>Address</p>
                <InputField name="address" type="text" value={values.address} onChange={(e) => { handleChange(e) }} />
            </InputFieldDiv>
            <StatusDiv>
                <StatusText><p>Status</p>
                    <p>:</p></StatusText>
                <StatusText>
                    <InputField1 type="radio" id="active" name="status" value="active" onChange={(e) => { handleChange(e) }} />
                    <label for="active">Active</label></StatusText>
                <StatusText>
                    <InputField1 type="radio" id="deactive" name="status" value="deactive" onChange={(e) => { handleChange(e) }} />
                    <label for="deactive">Deactive</label>
                </StatusText>
            </StatusDiv>
            <Button>
                <button onClick={() => {
                    handleSubmit()
                    props.closeModal();
                }}>Add</button>
            </Button>
      </ModalContainer>
      </Modal>
    )
}

const UpdateEngineerModal = (props) => {
    // const { currentUser, getServicePartnterD } = User()
    const {user: currentUser} = useSelector((state) => state.user)
    const [edit, setEdit] = useState({
        name: props.engineerData?.serviceEngineerName,
        id: props.engineerData?.serviceEngineerId,
        email: props.engineerData?.email,
        service_partner_id: currentUser?.id,
        contact: props.engineerData?.contact
    })
    console.log(edit, "valuesss")
    const editEngineer = (e) => {
        const { name, value } = e.target
        setEdit({
            ...edit,
            [name]: value
        })
    }

    const updateEngineer = () => {
        axios({
            method: 'post',
            url: `${updateServiceEngineer}`,
            data: edit,
        }).then(resp => {
            console.log(resp.data, "message")
            if (resp.data) {
                props.getServiceEngineerData()
            }
        })

    }
    return (
        <Modal>
            <ModalContainer style={{width: '400px' , marginBottom: '0'}}>
            <ModalContentHeader>
                <p>Edit Service Engineer</p>
                <Icon1 onClick={() => props.setUpdateModal(false)}><AiOutlineClose size={20} /></Icon1>
            </ModalContentHeader>
            <InputFieldDiv>
                <p>Name</p>

                <InputField name="name" type="text" value={edit.name} onChange={(e) => { editEngineer(e) }} />
            </InputFieldDiv>
            <InputFieldDiv>
                <p>Email Id</p>
                <InputField name="emailId" type="text" value={edit.email} onChange={(e) => { editEngineer(e) }} />
            </InputFieldDiv>
            <InputFieldDiv>
                <p>Contact Number</p>
                <InputField name="contact" type="text" value={edit.contact} onChange={(e) => { editEngineer(e) }} />
            </InputFieldDiv>
            <InputFieldDiv>
                <p>Address</p>
                <InputField name="address" type="text" value={edit.address} onChange={(e) => { editEngineer(e) }} />
            </InputFieldDiv>
            <StatusDiv>
                <StatusText><p>Status</p>
                    <p>:</p></StatusText>
                <StatusText>
                    <input type="radio" id="active" name="status" value="active" onChange={(e) => { editEngineer(e) }} />
                    <label for="active">Active</label></StatusText>
                <StatusText>
                    <InputField1 type="radio" id="deactive" name="status" value="deactive" onChange={(e) => { editEngineer(e) }} />
                    <label for="deactive">Deactive</label>
                </StatusText>
            </StatusDiv>
            <Button>
                <button onClick={() => {
                    updateEngineer()
                    props.setUpdateModal(false);

                }}>Add</button>
            </Button>

                </ModalContainer>
                </Modal>
    )
}

const ServiceEngineer = () => {
    // const { currentUser, getServicePartnterD } = User()
    const {user: currentUser} = useSelector((state) => state.user)
    console.log('current----User: ', currentUser);
    const location = useLocation()
    const [isOpen, setIsOpen] = useState(false)
    const [serviceEngineerData, setServiceEngineerData] = useState([])
    const [updateModal, setUpdateModal] = useState(false)
    const [serviceDetails, setServiceDetails] = useState(false)
    const [selectedItem, setSelectedItem] = useState("service-engineer")
    const [modalIsOpen, setModalIsOpen] = useState(false)
    const [data, setData] = useState({})

    const navigate = useNavigate()
    const closeModal = () => (
        setModalIsOpen(false)
    )
    const getServiceEngineerData = () => {
        fetch(`${getServiceEngineer}`)
            .then((resp) => resp.json())
            .then(response => {
                setServiceEngineerData(response)
            })
    }
    useEffect(() => {
        getServiceEngineerData()
        // getServicePartnterD()
    }, [])

    const deleteEngineer = (id) => {
        axios({
            method: 'get',
            url: `${deleteServiceEngineer}/${id}`,
        }).then(resp => {
            console.log(resp.data, "delete engineer")
        })
        getServiceEngineerData()
    }
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
    return (
        <Div>
            <ServiceEngineerDiv>
                {/* <SidebarDiv>
                    <SidebarHeadingDiv>
                        <ProfileDiv><P1>Hi {currentUser.name}</P1> <span onClick={() => Logout()}><IoIosLogOut size={30} /></span></ProfileDiv>
                        <P2>Welcome to clikekart</P2>
                    </SidebarHeadingDiv>
                    <SidebarItemDiv>
                        <LinkDiv selectedItem={selectedItem} onClick={() => { setSelectedItem("service-engineer"); setIsOpen(false) }}>
                            <ItemContentDiv ><Logo src={EngineerIcon} />
                                <Title >Service Engineers</Title></ItemContentDiv>
                        </LinkDiv>
                    </SidebarItemDiv>
                    <SidebarItemDiv2>
                        <LinkDiv2 selectedItem={selectedItem} onClick={() => { setSelectedItem("view-tickets"); setIsOpen(false); setServiceDetails(false) }}>
                            <ItemContentDiv><Logo src={viewTicketsLogo} />
                                <Title>View Tickets</Title></ItemContentDiv>
                        </LinkDiv2>
                    </SidebarItemDiv2>
                </SidebarDiv> */}
                {/* {selectedItem == "service-engineer" ? */}
                    <DrawerSidebarDiv>
                        {/* <Drawer>
                            <SidebarContentHeader>
                                <div onClick={() => setIsOpen(true)}>
                                    <Icon><GiHamburgerMenu size={30} /></Icon>
                                </div>
                                <WelcomeDiv isOpen={isOpen}>
                                    <ProfileDiv><P1>Hi {currentUser.name}</P1> <span onClick={() => Logout()}><IoIosLogOut size={30} /></span></ProfileDiv>
                                    <P2>Welcome to clikekart</P2>
                                </WelcomeDiv>
                            </SidebarContentHeader>
                            <Sidebar isOpen={isOpen}>
                                <CloseIcon onClick={() => setIsOpen(false)}><AiOutlineClose size={20} /></CloseIcon>
                                <SidebarItemMainDiv>
                                    <SidebarItemDiv >
                                        <LinkDiv style={{ backgroundColor: selectedItem == "service-engineer" ? `${COLORS.tableHeading}` : "white" }} selectedItem={selectedItem} onClick={() => { setSelectedItem("service-engineer"); setIsOpen(false) }}>
                                            <ItemContentDiv ><Logo src={EngineerIcon} />
                                                <Title >Service Engineers</Title></ItemContentDiv>
                                        </LinkDiv>
                                    </SidebarItemDiv>
                                    <SidebarItemDiv2>
                                        <LinkDiv2 selectedItem={selectedItem} onClick={() => { setSelectedItem("view-tickets"); setIsOpen(false) }}>
                                            <ItemContentDiv><Logo src={viewTicketsLogo} />
                                                <Title>View Tickets</Title></ItemContentDiv>
                                        </LinkDiv2 >
                                    </SidebarItemDiv2>

                                </SidebarItemMainDiv>
                            </Sidebar>
                        </Drawer> */}
                        <ServiceEngMainDiv drawerClose={isOpen}>
                            <ServiceEngineerHeaderDiv>
                                <p>Service Engineer</p>
                                <button onClick={() => setModalIsOpen(true)}>Add Service Engineer</button>
                            </ServiceEngineerHeaderDiv>
                            {/* <Modal
                                isOpen={modalIsOpen}
                                ariaHideApp={false}
                                // onRequestClose={closeModal}
                                style={customStyles}>
                                <div><AddServiceEngineer closeModal={closeModal} getServiceEngineerData={getServiceEngineerData} /></div>
                            </Modal> */}
                            {modalIsOpen && <AddServiceEngineer closeModal={closeModal} getServiceEngineerData={getServiceEngineerData} />}

                            {/* <Modal
                                isOpen={updateModal}
                                ariaHideApp={false}
                                // onRequestClose={closeModal}
                                style={customStyles}>
                                <div><UpdateEngineerModal setUpdateModal={setUpdateModal} getServiceEngineerData={getServiceEngineerData} engineerData={data} /></div>
                            </Modal> */}
                            <TableMainDiv>
                                {updateModal && <UpdateEngineerModal setUpdateModal={setUpdateModal} getServiceEngineerData={getServiceEngineerData} engineerData={data} /> }
                                <Table>
                                    <tr>
                                        <th>Service Engineer</th>
                                        <th>Service Engineer Name</th>
                                        <th>Email Id</th>
                                        <th>Contact Number</th>
                                        <th>Status</th>
                                        <th>Action</th>
                                    </tr>
                                    {serviceEngineerData ? serviceEngineerData.filter(data => data.service_partner_id == currentUser.id).map((item, index) => {
                                        return (
                                            <tr key={index}>
                                                <td>{item?.serviceEngineerId}</td>
                                                <td>{item?.serviceEngineerName}</td>
                                                <td>{item?.email}</td>
                                                <td>{item?.contact}</td>
                                                <td style={{ color: "#45B163", fontWeight: "500" }}>{item.status} </td>
                                                <td><Icon onClick={() => {
                                                    setData(item)
                                                    setUpdateModal(true)
                                                }}
                                                ><FiEdit size={20} /></Icon><Icon onClick={() => deleteEngineer(item?.serviceEngineerId)}>{<RiDeleteBinLine size={20} />}</Icon></td>
                                            </tr>
                                        )
                                    }) : null}

                                    {/* <tr>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td style={{ color: "#45B163", fontWeight: "500" }}>Active</td>
                                <td><Icon><FiEdit size={20} /></Icon><Icon>{<RiDeleteBinLine size={20} />}</Icon></td>
                            </tr> */}
                                </Table>
                            </TableMainDiv>
                        </ServiceEngMainDiv>
                    </DrawerSidebarDiv> 
                    {/* :
                    <ViewTickets isOpen={isOpen} selectedItem={selectedItem} setIsOpen={setIsOpen} setSelectedItem={setSelectedItem}
                        serviceDetails={serviceDetails} setServiceDetails={setServiceDetails} serviceEngineerData={serviceEngineerData} />} */}
            </ServiceEngineerDiv>
        </Div>
    )
}

export default ServiceEngineer


