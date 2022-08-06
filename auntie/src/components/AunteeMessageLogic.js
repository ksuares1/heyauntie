// import Toolbar from './Navbar';
import React, { useRef, useState } from 'react';
import 'firebase/compat/firestore';
import firebase from 'firebase/compat/app';
import 'firebase/auth';


firebase.initializeApp({
    apiKey: "AIzaSyCN1i_GNHrOwhPdyEDEdZlrMIobsoMAINI",
    authDomain: "aunteechat.firebaseapp.com",
    projectId: "aunteechat",
    storageBucket: "aunteechat.appspot.com",
    messagingSenderId: "593776508015",
    appId: "1:593776508015:web:774e0384dffc9509d2e19a",
    measurementId: "G-YLCMXCY3NL"
  })
  
  
const auth = firebase.auth();
const firestore = firebase.firestore();

const AunteeMessageLogic=() => {

    const signInWithGoogle = () => {
      const provider = new firebase.auth.GoogleAuthProvider();
      auth.signInWithPopup(provider);
    }
  
    return (
      <>
        <button className="sign-in" onClick={signInWithGoogle}>Sign in with Google</button>
        <p>Do not violate the community guidelines or you will be banned for life!</p>
      </>
    )
  
  }
  
  function SignOut() {
    return auth.currentUser && (
      <button className="sign-out" onClick={() => auth.signOut()}>Sign Out</button>
    )
  }
  
  
  function ChatRoom() {
    const dummy = useRef();
    const messagesRef = firestore.collection('messages');
    const query = messagesRef.orderBy('createdAt').limit(25);
  
    const [messages] = useCollectionData(query, { idField: 'id' });
  
    const [formValue, setFormValue] = useState('');
  
  
    const sendMessage = async (e) => {
      e.preventDefault();
  
      const { uid, photoURL } = auth.currentUser;
  
      await messagesRef.add({
        text: formValue,
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
        uid,
        photoURL
      })
  
      setFormValue('');
      dummy.current.scrollIntoView({ behavior: 'smooth' });
    }
  
    return (<>
      <main>
  
        {messages && messages.map(msg => <ChatMessage key={msg.id} message={msg} />)}
  
        <span ref={dummy}></span>
  
      </main>
  
      <form onSubmit={sendMessage}>
  
        <input value={formValue} onChange={(e) => setFormValue(e.target.value)} placeholder="say something nice" />
  
        <button type="submit" disabled={!formValue}>🕊️</button>
  
      </form>
    </>)
  }
  
  
  function ChatMessage(props) {
    const { text, uid } = props.message;
  
    const messageClass = uid === auth.currentUser.uid ? 'sent' : 'received';
  
    return (<>
      <div className={`message ${messageClass}`}>
        <p>{text}</p>
      </div>
    </>)
  }

  
  export default AunteeMessageLogic ;