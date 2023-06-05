import styled from "styled-components";
import { COLORS } from "../../assests/Themes/Themes";

export const LoginDiv =styled.div`
    width: 25%;
    min-width:320px;
    height: auto;
    padding: 20px;
    position: absolute;
    padding-bottom: 15px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 20px;
    box-shadow: 0px 7px 30px ${COLORS.boxShadow};
`
export const LoginHeading = styled.div`
    p{
        font-size: 25px;
        color: ${COLORS.blackColor};
        text-align: center;
        padding-top: 10px;}
`
export const LoginHead = styled.p`
    font-size: 25px;
        color: ${COLORS.blackColor};
        text-align: center;
        padding-top: 10px;
`
export const LoginDetails = styled.div`

`
export const LoginField = styled.input`
    padding: 10px 20px;
`
export const FreeleancerCont = styled.p`
    padding-inline: 20px;
    color: ${COLORS.dropDown};
`
export const OTPHeading = styled.label`
    color: ${COLORS.blackColor};
    display: flex;
    font-size: 12px;
    padding: 10px;
    justify-content: center;
`
export const ContactText = styled.p`
    color: ${COLORS.dropDown};
    text-align: center;
`
export const OtpDiv = styled.div`
    text-align: center;
    display: flex;
    justify-content: center;
    gap: 20px;
`
export const ResendOtp = styled.label`
    text-decoration: underline;
    color: ${COLORS.linkColor};
    font-size: 12px;
    display: flex;
    justify-content: end;
    padding-right: 10px;
    padding-top: 10px;
    cursor: pointer;
`
export const OtpInpu = styled.input`
    padding: 10px 15px;
    max-width: 20px;
    border-radius: 5px;
    border: 1px solid ${COLORS.blackColor};
`
export const HomeDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    
    label{
        text-decoration: underline;
        gap: 5px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 12px;
        cursor: pointer;
        color: ${COLORS.linkColor};
    }
    span{
    }
`
export const ErrorMsgDiv = styled.div`
    display: flex;
    text-align: center;
    justify-content: center;
    padding-top: 10px;
`