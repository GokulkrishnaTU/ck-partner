
import axios from 'axios'
import React from 'react'
import { createContext } from 'react'
import { useEffect } from 'react'
import { useContext } from 'react'
import { useState } from 'react'
import { AiFillHome } from 'react-icons/ai'
import { FaGlassWhiskey } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import { Navigate, useNavigate } from 'react-router-dom'
import swal from 'sweetalert'
import { servicePartnerLogin } from '../../api/Api'
import { setUser } from '../features/userSlice/userSlice'
import { Button, Div, InputField, InputField1, InputFieldDiv, StatusDiv, StatusText } from '../service-partner/ServiceEngineerStyle'
import { ErrorMsgDiv, HomeDiv, LoginDetails, LoginDiv, LoginField, LoginHeading } from './LogInStyles'



const LogIn = () => {
    const Role = localStorage.getItem('Role')
    const navigate = useNavigate()
    const dispatch = useDispatch();
    const { user } = useSelector((state) => state.user);
    // useEffect(() => {
        
    //     if(Role == 'freelancer'){
    //         navigate('/freelancer/view-tickets')
    //     }else if (Role == 'service-partner'){
    //         navigate('/service-partner/service-engineers')
    //     }
    // }, [])

    const [values, setValues] = useState({
        contact: ""
    })
    const [errors, setErrors] = useState([])
    const [data, setData] = useState([])
    const handleChange = (e) => {
        const { name, value } = e.target
        setValues({
            ...values,
            [name]: value,
        })
    }
    
    const handleSubmit = (e) => {
        e.preventDefault()
        let contact = ''
        if (values.contact == '') {
            contact = "Invalid Mobile Number!"
        }
        setErrors({
            contact,
        })

        if (contact == '') {

            axios({
                method: 'get',
                url: `${servicePartnerLogin}/${values.contact}`
            }).then(resp => {
                console.log(resp.data)
                setData(resp?.data)
                // localStorage.setItem("user_id", resp?.data?.user?.user_id)
                if (resp?.data?.code == 200) {
                    if (resp?.data?.user?.freelancer == 1) {
                        // console.log("hitttttt")
                        localStorage.setItem("user_id", resp?.data?.user?.user_id)
                        localStorage.setItem('Role', 'service-partner')
                        dispatch(setUser(resp.data.user))
                        swal({ text: resp?.data?.message, icon: "success" }).then(() => navigate('/freelancer/view-tickets'));

                    }
                    if (resp?.data?.user?.freelancer == 0) {
                        localStorage.setItem("userid", resp?.data?.user?.user_id)
                        localStorage.setItem('Role', 'freelancer')
                        dispatch(setUser(resp.data.user))
                        swal({ text: resp?.data?.message, icon: "success" }).then(() => navigate('/service-partner/service-engineers'));
                    }
                }
                else {
                    swal({ text: resp?.data?.message, icon: "error" }).then(() => navigate('/login'));
                }

            })
        }
    }
    return (

        <Div>
            <LoginDiv>
                <LoginHeading>
                    <p>Login</p>
                </LoginHeading>
                <LoginDetails>
                    <form onSubmit={handleSubmit}>
                        <InputFieldDiv>
                            <p>Mobile</p>

                            <InputField name="contact" type="text" value={values.contact} onChange={(e) => { handleChange(e) }} autoComplete="off" />

                            <ErrorMsgDiv >
                                {errors.contact ? <label style={{ color: 'red', fontSize: '12px' }}>{errors.contact}</label> : null}
                            </ErrorMsgDiv>
                        </InputFieldDiv>
                        <Button>
                            <button style={{ cursor: 'pointer' }} type = {'submit'}>Login</button>
                        </Button>
                    </form>
                    <HomeDiv>
                        <label onClick={() => navigate('/')}><span><AiFillHome size={20} /></span>Home</label>
                    </HomeDiv>
                </LoginDetails>
            </LoginDiv>

        </Div>
    )
}


export default LogIn
