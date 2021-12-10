// import logo from './logo.svg';
import './App.css';
import React from 'react';
// import ReactDom from 'react-dom';
// import Button from '@mui/material/Button'
// import NewApp from './NewApp'
import ChartApp from "./ChartComp"
import ListConComp from './ListConComp';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import {useNavigate } from 'react-router-dom'
// import Chart2 from "./ReChart"
function App(props) {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ListConComp/>}/>
        <Route path="/viewTractor" element={<ChartApp/>}/>
      </Routes>
    </Router>
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