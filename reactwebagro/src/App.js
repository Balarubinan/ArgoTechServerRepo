import './App.css';
import React from 'react';
import ChartApp from "./ChartComp"
import ListConComp from './ListConComp';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import {useNavigate } from 'react-router-dom'
import SideNavComp from './SideNavBar';
import ButtonAppBar from './TopNavBar';
import DummyComp from './DummyComp';
import TimeEstimateComp from './TimeEstimate';
import LoginComp from './LoginComp';
import ContactComp from './ProjectDetails';
// import Chart2 from "./ReChart"
function App(props) {
  return (
    <>
    <ButtonAppBar/>
    <Router>
      <Routes>
        <Route path="/ListTractors" element={<ListConComp/>}/>
        {/* /Ho */}
        <Route path="/viewTractor" element={<ChartApp/>}/>
        <Route path="/Contact" element={<ContactComp/>}/>
        <Route path="/Login" element={<LoginComp/>}/>
        <Route path="/timeestimate" element={<TimeEstimateComp/>}/>
      </Routes>
    </Router>
    </> 
  );
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