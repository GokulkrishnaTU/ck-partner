import React, {useState} from 'react'
import { Button, Div, InputField, InputFieldDiv } from '../service-partner/ServiceEngineerStyle'
import { ContactText, LoginDetails, LoginDiv, LoginHead, LoginHeading, OtpDiv, OTPHeading, OtpInpu, ResendOtp } from './LogInStyles'
import OtpInput from 'react18-input-otp';

const LoginOtp = () => {
    const [otp, setOtp] =useState('')
    const [values, setValues] = useState({
        
        otp: ""
    })
    console.log('values: ', values);
    const handleChange =  (e) => {
        const {name, value} = e.target
        setValues({
            ...values,
            [name]: value,
        })
    }
  return (
    <Div>
            <LoginDiv>
                <LoginHeading>
                    <LoginHead>Mobile Verification</LoginHead>
                </LoginHeading>
                <LoginDetails>
                <InputFieldDiv>
                        <OTPHeading>Please enter OTP to verify your account</OTPHeading>
                        <ContactText>Enter OTP sent to +91********93</ContactText>
                        <OtpDiv>
                        {/* <OtpInput  style = {{ height: "40px", width: "40px"}} value={otp} onChange={handleChangee} numInputs={6} separator={<span>-</span>} /> */}
                        <OtpInpu type= " text" name = "otp"  />
                        <OtpInpu type= " text" name = "otp1" />
                        <OtpInpu type= " text" name = "otp2" />
                        <OtpInpu type= " text" name = "otp3" />
                        <OtpInpu type= " text" name = "otp4" />
                        </OtpDiv>
                        <ResendOtp>Resend OTP</ResendOtp>
                    </InputFieldDiv>
                    <Button>
                        <button style={{cursor: 'pointer'}}>Continue</button>
                </Button>
                </LoginDetails>
            </LoginDiv>

        </Div>
  )
}

export default LoginOtp