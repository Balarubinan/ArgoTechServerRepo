// implement a Contact collection form here
// and store it to the API

import React from 'react'
import "./ContactCollect.css"
import { useState } from 'react'
import axios from 'axios'
import {baseUrl} from './URLS'

function ContactCollect() {
    let [subStat, setsubStat] = useState('')
    let checkDetails=e=>{
        e.preventDefault()
        console.log("here")
        let phoneElem=document.getElementById('phone')
        let nameElem=document.getElementById('name')
        let emailElem=document.getElementById('email')
        let detailsElem=document.getElementById('details')
        console.log(emailElem.value,phoneElem.value,nameElem.value)
        if(emailElem.value.length==0||nameElem.value.length==0||phoneElem.value.length==0)
            setsubStat('Fill all fields!')
        else{
            console.log([nameElem.value,emailElem.value,emailElem.value,detailsElem.value])
            // storeContact(nameElem.value,emailElem.value,phoneElem.value,detailsElem.value)
            axios.post(`${baseUrl}/restApi/saveNewContact/${nameElem.value}/${emailElem.value}/${emailElem.value}/${detailsElem.value}`).then().catch(e=>console.log(e))
            setsubStat('Submit Success!')
        }

    }

    return(
    <div className="container-fluid rounded mt-10">
    <div className="row px-5">
    {/* <script src="
    https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js">
    </script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.bundle.min.js"/>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"/> */}

        <div className="col-sm-6">
            <div>
                <h3 className="text-white">Contact us</h3>
                <p className="text-secondary">Fill up the form and our Team will get back to you</p>
            </div>
            {/* <div className="links" id="bordering"> <a href="#" className="btn rounded text-white p-3"><i className="fa fa-phone icon text-primary pr-3"></i>+0123 4567 8910</a> <a href="#" className="btn rounded text-white p-3"><i className="fa fa-envelope icon text-primary pr-3"></i>hello@flowbase.com</a> <a href="#" className="btn rounded text-white p-3"><i className="fa fa-map-marker icon text-primary pr-3"></i>102 street 2714 Don</a> </div> */}
            {/* <div className="pt-lg-4 d-flex flex-row justify-content-start">
                <div className="pad-icon"> <a className="fa fa-facebook text-white" href="#"></a> </div>
                <div className="pad-icon"> <a className="fa fa-twitter text-white" href="#"></a> </div>
                <div className="pad-icon"> <a className="fa fa-instagram text-white" href="#"></a> </div>
            </div> */}
        </div>
        <div className="col-sm-6 pad">
            <form className="rounded msg-form">
                <div className="form-group"> <label for="name" className="h6">Your Name</label>
                    <div className="input-group border rounded">
                        <div className="input-group-addon pt-1">
                            <p className="fa fa-user-o text-primary"></p>
                        </div> <input type="text" className="form-control border-0" id="name"/>
                    </div>
                </div>
                <div className="form-group"> <label for="name" className="h6">Email</label>
                    <div className="input-group border rounded">
                        <div className="input-group-addon  pt-1"> <i className="fa fa-envelope text-primary"></i> </div> <input type="text" className="form-control border-0" id="email"/>
                    </div>
                </div>
                <div className="form-group"> <label for="name" className="h6">Phone</label>
                    <div className="input-group border rounded">
                        <div className="input-group-addon  pt-1"> <i className="fa fa-envelope text-primary"></i> </div> <input type="text" className="form-control border-0" id="phone"/>
                    </div>
                </div>
                <div className="form-group"> <label for="msg" className="h6">Your Queries</label> <textarea name="message" id="details" cols="10" rows="5" className="form-control bg-light" placeholder="Add purpose , organisation , or a general note"></textarea> </div>
                <div className="form-group d-flex justify-content-center mt-2">
                    <input type="button" className="btn btn-primary text-white" value="Submit details" onClick={e=>checkDetails(e)}/> 
                </div>
                <div className="form-group d-flex justify-content-center mt-2">
                    <div>{subStat}</div>
                </div>
            </form>
        </div>
    </div>
    </div>
    )
}

export default ContactCollect