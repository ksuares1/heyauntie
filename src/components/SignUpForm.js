import React, {useState} from 'react';
import Toolbar from './Navbar';
import {database} from './Firebase';
import {ref,push,child,update} from "firebase/database";
import TermsConditions from './Terms-Conditions';



function RegistrationForm() {
    
    const [firstName, setFirstName] = useState(null);
    const [lastName, setLastName] = useState(null);
    const [email, setEmail] = useState(null);
    const [password,setPassword] = useState(null);
    const [confirmPassword,setConfirmPassword] = useState(null);

    const handleInputChange = (e) => {
        const {id , value} = e.target;
        if(id === "firstName"){
            setFirstName(value);
        }
        if(id === "lastName"){
            setLastName(value);
        }
        if(id === "email"){
            setEmail(value);
        }
        if(id === "password"){
            setPassword(value);
        }
        if(id === "confirmPassword"){
            setConfirmPassword(value);
        }

    }

    const handleSubmit  = () => {
        let obj = {
            firstName : firstName,
            lastName:lastName,
            email:email,
            password:password,
            confirmPassword:confirmPassword,
        }       
    const newPostKey = push(child(ref(database), 'posts')).key;
    const updates = {};
    updates['/' + newPostKey] = obj
    return update(ref(database), updates);
    }
        // console.log(firstName,lastName,email,password,confirmPassword);
    

    return(
        <div class="nav-bg">
        <Toolbar/>
        
        <div className="form">
            
            <div className="form-body">
                <div>
                    <h1 class="register-name">Create an Account</h1>
                </div>
                <br/>
                <div className="username">
                    <label className="form__label" for="firstName">First Name: </label>
                    <input className="form__input" type="text" value={firstName} onChange = {(e) => handleInputChange(e)} id="firstName" placeholder="First Name"/>
                </div>
                <div className="lastname">
                    <label className="form__label" for="lastName">Last Name: </label>
                    <input  type="text" name="" id="lastName" value={lastName}  className="form__input" onChange = {(e) => handleInputChange(e)} placeholder="LastName"/>
                </div>
                <div className="email">
                    <label className="form__label" for="email">Email: </label>
                    <input  type="email" id="email" className="form__input" value={email} onChange = {(e) => handleInputChange(e)} placeholder="Email"/>
                </div>
                <div className="password">
                    <label className="form__label" for="password">Password: </label>
                    <input className="form__input" type="password"  id="password" value={password} onChange = {(e) => handleInputChange(e)} placeholder="Password"/>
                </div>
                <div className="confirm-password">
                    <label className="form__label" for="confirmPassword">Confirm Password: </label>
                    <input className="form__input" type="password" id="confirmPassword" value={confirmPassword} onChange = {(e) => handleInputChange(e)} placeholder="Confirm Password"/>
                </div>
                <div>
                    <br/>
                <TermsConditions/>
                </div>
            
            </div>
           
            <br/>
            <div class="footer">
                <a href="/dashboard">
           
                <button onClick={()=>handleSubmit()} type="submit" class="register-btn">Register</button>
                </a>
            </div>

        </div>
        </div>
       
    )       
}

export default RegistrationForm