import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { render } from "react-dom";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import Organize from './event/organize';
import Find from './event/find';
import reportWebVitals from './reportWebVitals';
import Content from './content/content';
import Login from './login/login';
import Signup from './login/Signup';
import ForgetPassword from './forgetPassword/Forgetpassword';
import ContactUs from './Contactus/contactus';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
  <Routes>
    <Route path="/" element={<App />} />
    <Route path="organize" element={<Organize />} />
    <Route path="find" element={<Find />} />
    <Route path="content" element={<Content/>} /> 
    <Route path="login" element={<Login/>}/>
    <Route path="signup" element={<Signup/>}/>
    <Route path="forgetPassword" element={<ForgetPassword/>}/>
    <Route path="contactus" element={<ContactUs/>}/>
  </Routes>
</Router>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
