import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import "./index.css";
import axios from "axios";
import  Home from './components/Home';
import { GeneralContextProvider } from "./components/GeneralContext";
const root = ReactDOM.createRoot(document.getElementById('root'));
const params = new URLSearchParams(window.location.search);
const token = params.get("token");
if (token) {
  localStorage.setItem("token", token);
  axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  window.history.replaceState({}, "", window.location.pathname); // cleans URL
}

// existing token check below this
const existingToken = localStorage.getItem("token");
if (existingToken) {
  axios.defaults.headers.common["Authorization"] = `Bearer ${existingToken}`;
}

root.render(
  <React.StrictMode>
  <GeneralContextProvider>
    <BrowserRouter>

    <Routes>
     
    <Route path="/*" element={<Home/>}/><Route/>
    </Routes>
    
    </BrowserRouter>
    </GeneralContextProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

