import React from 'react'
import ThemeImage from "./AgriTheme image.jpg"
import axios from 'axios'
import {useNavigate} from 'react-router-dom'

function LoginComp() {
    const navig=useNavigate()
    const submitHandler=(event)=>{
        event.preventDefault()
        console.log(Object.entries(new FormData(event.target)))
        let formData=new FormData(event.target)
        let data={}
        for(let entry of formData.entries())
        data[entry[0]]=entry[1]
        console.log(data)
        axios.get(`http://localhost:5000/restApi/isValid/${data.username}/${data.password}`).then(d=>{
            if(d.data.status==true){console.log("i navig")
                navig("/Home")}
        },d=>console.log(d))
        
        // axios.get("https://argo-server-1.herokuapp.com/restApi/isValid/IIPC/IIPCa")
        axios.get(`https://argo-server-1.herokuapp.com/restApi/isValid/${data.username}/${data.password}`).then(d=>{
            if(d.data.status==true){console.log("i navig")
                navig("/Home")}
        },d=>console.log(d))
    }
    return (
<div className="container">
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous"/>
<script src="https://code.jquery.com/jquery-3.4.1.slim.min.js" integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>
  <div className="row justify-content-center">
    <div className="col-md-9 col-lg-12 col-xl-10">
      <div className="card shadow-lg o-hidden border-0 my-5">
        <div className="card-body p-0">
          <div className="row">
            <div className="col-lg-6 d-none d-lg-flex">
              <div
                className="flex-grow-1 bg-login-image"
                style={{ backgroundImage: `url('${ThemeImage}')`}}
              />
              {/* <img src={ThemeImage}/> */}
              
            </div>
            <div className="col-lg-6">
              <div className="p-5">
                <div className="text-center">
                  <h4 className="text-dark mb-4">ArgoTech Login</h4>
                </div>
                <form className="user" onSubmit={e=>submitHandler(e)}>
                  <div className="form-group">
                    <input
                      className="form-control form-control-user"
                      type="text"
                      id="exampleInputEmail"
                      aria-describedby="emailHelp"
                      placeholder="Enter Email Address..."
                      name="username"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      className="form-control form-control-user"
                      type="password"
                      id="exampleInputPassword"
                      placeholder="Password"
                      name="password"
                    />
                  </div>
                  <button
                    className="btn btn-primary btn-block text-white btn-user"
                    type="submit"
                  >
                    Login
                  </button>
                  <hr />
                </form>
                <div className="text-center">
                  <a className="small" href="forgot-password.html">
                    Forgot Password?
                  </a>
                </div>
                <div className="text-center">
                  <a className="small" href="register.html">
                    Create an Account!
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

    )
}

export default LoginComp
