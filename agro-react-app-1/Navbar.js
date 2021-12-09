import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import './Cryptocomp.css'
import React from 'react'
import { Link } from 'react-router-dom'


class Navbar extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div className="col">
                <div className="navbar navbar-expand-md navbar-dark ml-auto">
                    <Link to="/home" className="nav-link navItem">Home</Link>
                    <Link to="/" className="nav-link navItem">Login</Link>
                    <Link to="/allcryptos" className="nav-link navItem">Cryto Screen</Link>
                </div>
            </div>
        )
    }
}

export default Navbar;