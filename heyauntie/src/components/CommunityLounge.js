import React, { useRef, useState } from 'react';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import firebase from 'firebase/compat/app';


import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';

firebase.initializeApp = {
        apiKey: "AIzaSyCl3KAqI-QWvGcJWtE08Qufqci6QrQ2hVk",
        authDomain: "communitylounge-4151a.firebaseapp.com",
        databaseURL: "https://communitylounge-4151a-default-rtdb.firebaseio.com",
        projectId: "communitylounge-4151a",
        storageBucket: "communitylounge-4151a.appspot.com",
        messagingSenderId: "259143495904",
        appId: "1:259143495904:web:ede5ffba12569dd17be085",
        measurementId: "G-MDW6Y5CGB1"
};




const auth = firebase.auth();
const firestore = firebase.firestore();
;


function CommunityLounge() {

  const [user] = useAuthState(auth);

  return (
    <div className="Chat">
      <header>
        <h1>⚛️🔥💬</h1>
        <SignOut />
      </header>

      <section>
        {user ? <ChatRoom /> : <SignIn />}
      </section>

    </div>
  );
}

function SignIn() {

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
      {/* <img src={photoURL || 'https://api.adorable.io/avatars/23/abott@adorable.png'} /> */}
      <p>{text}</p>
    </div>
  </>)
}


export default CommunityLounge;