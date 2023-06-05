import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import UserContext from './screens/LogIn/UserContext';
import { Provider } from 'react-redux';
import { store } from './screens/store/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    {/* <UserContext> */}
      <Router>
        <App />
      </Router>
    {/* </UserContext> */}
  </Provider>
);
