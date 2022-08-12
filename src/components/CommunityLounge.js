import React from "react";
import { Navigate } from "react-router-dom";
import chat from "./Chat";
import Toolbar from "./Navbar";

class CommunityLogin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      isAuthenticated: false,
      user: null,
      isSubmitting: false,
      errorMessage: "",
    };
  }

  onSubmit = (e) => {
    e.preventDefault();
    if (this.state.username !== "") {
      this.login();
    }
  };

  login = () => {
    this.toggleIsSubmitting();
    chat
      .login(this.state.username)
      .then((user) => {
        this.setState({
          user,
          isAuthenticated: true,
        });
      })
      .catch((error) => {
        this.setState({
          errorMessage: "Please enter a valid username",
        });
        this.toggleIsSubmitting();
        console.log(error);
      });
  };

  toggleIsSubmitting = () => {
    this.setState((prevState) => ({
      isSubmitting: !prevState.isSubmitting,
    }));
  };

  handleInputChange = (e) => {
    this.setState({
      username: e.target.value,
    });
  };

  render() {
    if (this.state.isAuthenticated) {
      return (
        <Navigate
          to={{
            pathname: "/chat",
            state: { user: this.state.user },
          }}
        />
      );
    }

    return (
      <div class="community-bg">
        <div className="App">
          <Toolbar />
          <h1 class="community-header">Community Lounge</h1>
          <br />
          <p class="community-directions">
            Please let us know in the input field, if you're <b>auntee(type:superhero1) </b>or{" "}
            <b>auntie( type: superhero2)</b> based on your <em>survey</em> results.{" "}
          </p>

          <form className="form" onSubmit={this.onSubmit}>
            <span className="error">{this.state.errorMessage}</span>
            <input onChange={this.handleInputChange} type="text" />
            <input
              type="submit"
              disabled={this.state.username === ""}
              value="LOGIN"
            />
          </form>
        </div>
      </div>
    );
  }
}

export default CommunityLogin;

// import React, { useRef, useState } from 'react';
// import 'firebase/compat/firestore';
// import 'firebase/compat/auth';
// import firebase from 'firebase/compat/app';

// import { useAuthState } from 'react-firebase-hooks/auth';
// import { useCollectionData } from 'react-firebase-hooks/firestore';

// firebase.initializeApp = {
//         apiKey: "AIzaSyCl3KAqI-QWvGcJWtE08Qufqci6QrQ2hVk",
//         authDomain: "communitylounge-4151a.firebaseapp.com",
//         databaseURL: "https://communitylounge-4151a-default-rtdb.firebaseio.com",
//         projectId: "communitylounge-4151a",
//         storageBucket: "communitylounge-4151a.appspot.com",
//         messagingSenderId: "259143495904",
//         appId: "1:259143495904:web:ede5ffba12569dd17be085",
//         measurementId: "G-MDW6Y5CGB1"
// };

// const auth = firebase.auth();
// const firestore = firebase.firestore();
// ;

// function CommunityLounge() {

//   const [user] = useAuthState(auth);

//   return (
//     <div className="Chat">
//       <header>
//         <h1>⚛️🔥💬</h1>
//         <SignOut />
//       </header>

//       <section>
//         {user ? <ChatRoom /> : <SignIn />}
//       </section>

//     </div>
//   );
// }

// function SignIn() {

//   const signInWithGoogle = () => {
//     const provider = new firebase.auth.GoogleAuthProvider();
//     auth.signInWithPopup(provider);
//   }

//   return (
//     <>
//       <button className="sign-in" onClick={signInWithGoogle}>Sign in with Google</button>
//       <p>Do not violate the community guidelines or you will be banned for life!</p>
//     </>
//   )

// }

// function SignOut() {
//   return auth.currentUser && (
//     <button className="sign-out" onClick={() => auth.signOut()}>Sign Out</button>
//   )
// }

// function ChatRoom() {
//   const dummy = useRef();
//   const messagesRef = firestore.collection('messages');
//   const query = messagesRef.orderBy('createdAt').limit(25);

//   const [messages] = useCollectionData(query, { idField: 'id' });

//   const [formValue, setFormValue] = useState('');

//   const sendMessage = async (e) => {
//     e.preventDefault();

//     const { uid, photoURL } = auth.currentUser;

//     await messagesRef.add({
//       text: formValue,
//       createdAt: firebase.firestore.FieldValue.serverTimestamp(),
//       uid,
//       photoURL
//     })

//     setFormValue('');
//     dummy.current.scrollIntoView({ behavior: 'smooth' });
//   }

//   return (<>
//     <main>

//       {messages && messages.map(msg => <ChatMessage key={msg.id} message={msg} />)}

//       <span ref={dummy}></span>

//     </main>

//     <form onSubmit={sendMessage}>

//       <input value={formValue} onChange={(e) => setFormValue(e.target.value)} placeholder="say something nice" />

//       <button type="submit" disabled={!formValue}>🕊️</button>

//     </form>
//   </>)
// }

// function ChatMessage(props) {
//   const { text, uid } = props.message;

//   const messageClass = uid === auth.currentUser.uid ? 'sent' : 'received';

//   return (<>
//     <div className={`message ${messageClass}`}>
//       {/* <img src={photoURL || 'https://api.adorable.io/avatars/23/abott@adorable.png'} /> */}
//       <p>{text}</p>
//     </div>
//   </>)
// }

// export default CommunityLounge;
