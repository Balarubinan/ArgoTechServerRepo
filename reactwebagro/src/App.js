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
import backgroundImg from './images/dummyBackground.jpg'
import GalleryComp from './GalleryComp'
import PopupModalComp from './PopupModalComp'
// import Chart2 from "./ReChart"
function App(props) {
  let loggedIn=useState(true)
    return( 
      <>
      {/* <div style={{ backgroundImage:`url(${backgroundImg})` }}>  use when you find a good background*/}

      <ButtonAppBar m={10} />
      <Router>
        <Routes>
          <Route path="/ListTractors" element={<ListConComp/>}/>
          <Route path="/Home" element={<ProjectDetailsComp/>}/>
          <Route path="/viewTractor" element={<ChartApp/>}/>
          <Route path="/Contact" element={<ContactComp/>}/>
          <Route path="/" element={<ProjectDetailsComp/>}/>
          <Route path="/GatherContacts" element={<SavedContactComp/>}/>
          <Route path="/ViewContacts" element={<SavedContactComp/>}/>
          <Route path="/About" element={<AboutComp/>}/>
          <Route path="/timeestimate" element={<TimeEstimateComp/>}/>
          <Route path="/IndustryPartner" element={<IndustryPartnerComp/>}/>
          <Route path="/Profile" element={<ProfileComponent/>}/>
          {/* Profile wil be named as Admin Login */}
          <Route path="/Gallery" element={<GalleryComp/>}/>
          <Route path="/test2" element={<PopupModalComp/>}/>
        </Routes>
      </Router>
      {/* </div> */}
      </>
    )
}
// it doesn't matter under what name you Export it would still work 
//style={{ backgroundImage: "url(/image.png)"
export default App;


// JSX 
// props => passed down objects
// pure function => donot modify their parameters
// React components must act like pure functions
// Stateless and Stateful components
// Synthetic events



// fix contacts margin problem
// fix project details Text justify problem
// fix blue background problem
// refactor folder structure
// use Image BackDrop for background