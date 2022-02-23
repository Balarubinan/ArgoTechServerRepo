import './App.css';
import React , {useState} from 'react';
import ChartApp from "./ChartComp"
import ListConComp from './ListConComp';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";

import {useNavigate } from 'react-router-dom'
import SideNavComp from './SideNavBar';
import ButtonAppBar from './TopNavBar';
import DummyComp from './DummyComp';
import TimeEstimateComp from './TimeEstimate';
import LoginComp from './LoginComp';
import ContactComp from './ContactComp';
import ProjectDetailsComp from './ProjectDetails';
import IndustryPartnerComp from './IndustryPartner';
import AboutComp from './About';
import { Redirect } from 'react-router'
import ContactCollect from './ContactCollect';
function IntermediateHome() {
    return (
        <>
    <ButtonAppBar/>
    <Router>
      <Routes>
        <Route path="/ListTractors" element={<ListConComp/>}/>
        <Route path="/Home" element={<ProjectDetailsComp/>}/>
        <Route path="/viewTractor" element={<ChartApp/>}/>
        <Route path="/Contact" element={<ContactComp/>}/>
        <Route path="/Login" element={<LoginComp/>}/>
        <Route path="/12" element={<ContactCollect/>}/>
        <Route path="/About" element={<AboutComp/>}/>
        <Route path="/timeestimate" element={<TimeEstimateComp/>}/>
        <Route path="/IndustryPartner" element={<IndustryPartnerComp/>}/>
      </Routes>
    </Router>
    </> 
    )
}

export default IntermediateHome
