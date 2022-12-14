import React, { useState } from "react";
import Toolbar from "./Navbar";

function LoginView() {
  // React States

  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // User Login info
  const database = [
    {
      username: "Auntie",
      password: "Today2!"
    },
    {
      username: "Auntee",
      password: "Hello1!"
    }
  ];

  const errors = {
    uname: "invalid username",
    pass: "invalid password"
  };

  const handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();

    var { uname, pass } = document.forms[0];

    // Find user login info
    const userData = database.find((user) => user.username === uname.value);

    // Compare user info
    if (userData) {
      if (userData.password !== pass.value) {
        // Invalid password
        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        setIsSubmitted(true);
      }
    } else {
      // Username not found
      setErrorMessages({ name: "uname", message: errors.uname });
    }
  };

  // Generate JSX code for error message
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  // JSX code for login form
  const renderForm = (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label>Username </label>
          <input type="text" name="uname" required />
          {renderErrorMessage("uname")}
        </div>
        <div className="input-container">
          <label>Password </label>
          <input type="password" name="pass" required />
          {renderErrorMessage("pass")}
        </div>
        <div className="button-container">
          <input type="submit" />
        </div>
      </form>
    </div>
  
  );

  return (
    <div className="app login-bg">
      <Toolbar/>
      <div></div>
      <div className="login-form">
        <div className="title login-title">Login</div>
        {isSubmitted ? <div>You've successfully logged in</div> : renderForm}
      </div>
    </div>
    
  );
}

export default LoginView;

// import React from 'react';
// import firebaseConfig from 'firebase/app';

// class LoginView extends React.Component {

//   login() {
//     const email = document.querySelector('#email').value;
//     const password = document.querySelector('#password').value;
//       firebase.auth().signInWithEmailAndPassword(email, password)
//       .then((u) => {
//         console.log('Successfully Logged In');
//       })
//       .catch((err) => {
//         console.log('Error: ' + err.toString());
//       })
//   }

//   render() {
//     return (
//       <div style={{ textAlign: 'center' }}>
//         <div>
//           <div>Email</div>
//           <input id="email" placeholder="Enter Email.." type="text"/>
//         </div>
//         <div>
//           <div>Password</div>
//           <input id="password" placeholder="Enter Password.." type="text"/>
//         </div>
//         <button style={{margin: '10px'}} onClick={this.login}>Login</button>
//         <button style={{margin: '10px'}} onClick={this.signUp}>Sign Up</button>
//       </div>
//     )
//   }
// }

// export default LoginView;