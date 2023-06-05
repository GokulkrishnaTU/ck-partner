import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import BuyBack from '../service-partner/BuyBack';
import ServiceDetails from '../service-partner/ServiceDetails';
import ServiceEngineer from '../service-partner/ServiceEngineer';
import ViewTickets from '../service-partner/ViewTickets';
import ServiceEngSidebar from '../ServiceEngSidebar/ServiceEngSidebar';

const ServiceEngDashboard = () => {
  return (
    <>
      <ServiceEngSidebar />
      <Routes>
        <Route path='service-engineers' element={<ServiceEngineer />} />
        <Route path='view-tickets' element={<ViewTickets />} />
        <Route path='buy-back' element={<BuyBack />} />
        <Route
          path='view-tickets/service-details'
          element={<ServiceDetails />}
        />
      </Routes>
    </>
  );
};

export default ServiceEngDashboard;
