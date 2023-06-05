import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import LogIn from './screens/LogIn/LogIn';
import LoginOtp from './screens/LogIn/LoginOtp';
import ServiceDetails from './screens/service-partner/ServiceDetails';
import ServiceEngineer from './screens/service-partner/ServiceEngineer';
import ViewTickets from './screens/service-partner/ViewTickets';
import Home from './screens/Home/Home';
import Freelancer from './screens/Freelancer/Freelancer';
import { User } from './screens/LogIn/UserContext';
import PrivateRoute, { ProtectedRoute } from './screens/LogIn/PrivateRoute';
import ServiceEngDashboard from './screens/dashboard/ServiceEngDashboard';
import FreelancerDashBoard from './screens/dashboard/FreelancerDashBoard.';
import Header from './screens/Header/Header';
import axios from 'axios';
import { getServicePartner } from './api/Api';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setUser } from './screens/features/userSlice/userSlice';
import DesktopExchange from './screens/Freelancer/Reports/exchange/DesktopExchange/DesktopExchange';
import LaptopExchange from './screens/Freelancer/Reports/exchange/LaptopExchange/LaptopExchange';
import MobileExchange from './screens/Freelancer/Reports/exchange/MobileExchange/MobileExchange';
import MonitorExchagne from './screens/Freelancer/Reports/exchange/MonitorExchange/MonitorExchagne';
import UpsExchange from './screens/Freelancer/Reports/exchange/UpsExchange/UpsExchange';
import BatteryExchange from './screens/Freelancer/Reports/exchange/BatteryExchange/BatteryExchange';

const App = () => {
  // const { currentUser } = User();
  const user_id = localStorage.getItem('user_id');
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);
  console.log(user, 'akr');
  const getServicePartnterD = () => {
    axios({
      method: 'get',
      url: `${getServicePartner}/${localStorage.getItem('userid')}`,
    }).then((resp) => {
      if (resp.data) {
        dispatch(setUser(resp.data));
      }
    });
  };
  const getFreelancer = () => {
    axios({
      method: 'get',
      url: `${getServicePartner}/${localStorage.getItem('user_id')}`,
    }).then((resp) => {
      if (resp.data) {
        dispatch(setUser(resp.data));
      }
    });
  };
  useEffect(() => {
    getFreelancer();
    getServicePartnterD();
  }, []);

  return (
    <Routes>
      <Route
        path='/service-partner/*'
        element={
          <ProtectedRoute>
            <Header />
            <ServiceEngDashboard />
          </ProtectedRoute>
        }
      >
        {/* <Route path = '/service-partner/view-tickets' element = {<ViewTickets/>}/>
          <Route path = '/service-partner/view-tickets/service-details' element = {<ServiceDetails/>}/> */}
      </Route>
      <Route
        path='/freelancer/*'
        element={
          <PrivateRoute>
            <Header />
            <FreelancerDashBoard />
          </PrivateRoute>
        }
      />
      <Route path='/login' element={<LogIn />} />
      {/* <Route path='/desktop-exchange' element ={<DesktopExchange/>}/> */}
      {/* <Route path='/laptop-exchange' element = {<LaptopExchange/>}/> */}
      <Route path='/monitor-exchange' element = {<MonitorExchagne/>}/>
      {/* <Route path='/ups-exchange' element = {<UpsExchange/>}/> */}
      <Route path='laptop' element = {<LaptopExchange/>}/>
        <Route path='monitors' element = {<MonitorExchagne/>}/>
        <Route path='mobiles' element = {<MobileExchange/>}/>
        <Route path='desktop' element = {<DesktopExchange/>}/>
        <Route path='ups/inverter' element = {<UpsExchange/>}/>
        <Route path='battery' element = {<BatteryExchange/>}/>

      <Route path='/otp' element={<LoginOtp />} />
      <Route path='/' element={<Home />} />
    </Routes>
  );
};

export default App;
