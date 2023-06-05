// import React from 'react';
// import { useContext } from 'react';
// import { useState, useEffect } from 'react';
// import axios from 'axios';
// import { getServicePartner, servicePartnerLogin } from '../../api/Api';
// import { createContext } from 'react';

// export const CurrentUserContext = createContext({});
// const UserContext = ({ children }) => {
//   const [currentUser, setCurrentUser] = useState([]);
//   console.log('currentUser=======>: ', currentUser);
//   const [freelancer, setFreelancer] = useState([]);
//   console.log('freelancer=====>: ', freelancer);
//   const getServicePartnterD = () => {
//     axios({
//       method: 'get',
//       url: `${getServicePartner}/${localStorage.getItem('userid')}`,
//     }).then((resp) => {
//       setCurrentUser(resp?.data);
//     });
//   };

//   const getFreelancer = () => {
//     axios({
//       method: 'get',
//       url: `${getServicePartner}/${localStorage.getItem('user_id')}`,
//     }).then((resp) => {
//       setFreelancer(resp?.data, 'freelancer user');
//       localStorage.setItem('role', resp?.data?.freelancer);
//     });
//   };
//   useEffect(() => {
//     getServicePartnterD();
//     getFreelancer();
//   }, []);
//   return (
//     <CurrentUserContext.Provider
//       value={{
//         currentUser,
//         setCurrentUser,
//         freelancer,
//         setFreelancer,
//         getFreelancer,
//         getServicePartnterD,
//       }}
//     >
//       {children}
//     </CurrentUserContext.Provider>
//   );
// };

// export default UserContext;
// export const User = () => useContext(CurrentUserContext);
