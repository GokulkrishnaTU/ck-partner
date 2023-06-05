import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Freelancer from '../Freelancer/Freelancer'
import FreelancerSidebar from '../FreelancerSidebar/FreelancerSidebar'
import FreelancerViewDetails from '../Freelancer/FreelancerViewDetails'
import BuyBackCheck from '../Freelancer/BuyBackCheck'
import BatteryExchange from '../Freelancer/Reports/exchange/BatteryExchange/BatteryExchange'
import UpsExchange from '../Freelancer/Reports/exchange/UpsExchange/UpsExchange'
import DesktopExchange from '../Freelancer/Reports/exchange/DesktopExchange/DesktopExchange'
import MobileExchange from '../Freelancer/Reports/exchange/MobileExchange/MobileExchange'
import MonitorExchagne from '../Freelancer/Reports/exchange/MonitorExchange/MonitorExchagne'
import LaptopExchange from '../Freelancer/Reports/exchange/LaptopExchange/LaptopExchange'

const FreelancerDashBoard = () => {
  return (
    <>
      <FreelancerSidebar/>
      <Routes>
        <Route path = 'view-tickets' element = {<Freelancer/>}/>
        <Route path ='view-tickets/details' element={<FreelancerViewDetails/>}/>
        <Route path='buy-back-check' element = {<BuyBackCheck/>}/>
       
       
      </Routes>

    </>
  )
}

export default FreelancerDashBoard