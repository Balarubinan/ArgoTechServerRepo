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
import IntermediateHome from './IntermediateHome';
import ProfileComponent from "./ProfileComponent"
import JunkComp from './JunkComp';
import SavedContactComp from './SavedContactComp'
import ContactCollect from './ContactCollect';
// import Chart2 from "./ReChart"
function App(props) {
  let loggedIn=useState(true)
    return( <>
      <ButtonAppBar m={10}/>
      <Router>
        <Routes>
          <Route path="/ListTractors" element={<ListConComp/>}/>
          <Route path="/Home" element={<ProjectDetailsComp/>}/>
          <Route path="/viewTractor" element={<ChartApp/>}/>
          <Route path="/Contact" element={<ContactComp/>}/>
          <Route path="/" element={<LoginComp/>}/>
          <Route path="/GatherContacts" element={<SavedContactComp/>}/>
          <Route path="/12" element={<ContactCollect/>}/>
          <Route path="/About" element={<AboutComp/>}/>
          <Route path="/timeestimate" element={<TimeEstimateComp/>}/>
          <Route path="/IndustryPartner" element={<IndustryPartnerComp/>}/>
          <Route path="/Profile" element={<ProfileComponent/>}/>
          <Route path="/Junk" element={<JunkComp/>}/>
        </Routes>
      </Router>
      </>)
}
// it doesn't matter under what name you Export it would still work
export default App;


// JSX 
// props => passed down objects
// pure function => donot modify their parameters
// React components must act like pure functions
// Stateless and Stateful components
// Synthetic events

//  First project is a Form creation application!!

// fix contacts margin problem
// fix project details Text justify problem