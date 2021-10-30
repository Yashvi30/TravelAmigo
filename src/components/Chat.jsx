import React from "react";
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import Login from "../pages/Login";
import { useAuthState } from "react-firebase-hooks/auth";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { useState, useEffect, useRef } from "react";
import "..styles/Chat.css";

import { signOut } from "@firebase/auth";
import { useAuth, useUser } from "reactfire";

firebase.initializeApp({
  apiKey: "AIzaSyCbpYejIvC4DJuripmwEc64CHEm8Z6dK60",
  authDomain: "travel-amigo-app.firebaseapp.com",
  projectId: "travel-amigo-app",
  storageBucket: "travel-amigo-app.appspot.com",
  messagingSenderId: "1078903719364",
  appId: "1:1078903719364:web:fdc6bca0d115abd8419091",
});
const auth = firebase.auth();
const firestore = firebase.firestore();

function Chat() {
  const [user] = useAuthState(auth);
  const { status, data: user } = useUser();
  return (
    <div className="App">
      <header>
        <h1>⚛️🔥💬</h1>
      </header>
      {status === "success"}
      <button onClick={() => signOut(auth)}>Sign out!</button>
      <section>{user ? <ChatRoom /> : <SignIn />}</section>
    </div>
  );
}

function ChatRoom() {
  const messagesRef = firestore.collection("messages");
  const query = messagesRef.orderBy("createdAt").limitToLast(25);

  const [messages] = useCollectionData(query, { idField: "id" });
  const [formValue, setFormValue] = useState("");

  const sendMessage = async (e) => {
    e.preventDefault();

    const { uid, photoURL } = auth.currentUser;
    const dummy = useRef();

    useEffect(() => {
      dummy.current.scrollIntoView({ behavior: "smooth" });
    }, [messages]);
    await messagesRef.add({
      text: formValue,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      uid,
      photoURL,
    });

    setFormValue("");
  };

  return (
    <>
      <main>
        {messages &&
          messages.map((msg) => <ChatMessage key={msg.id} message={msg} />)}
        <span ref={dummy}></span>
      </main>
      <form onSubmit={sendMessage}>
        <input
          value={formValue}
          onChange={(e) => setFormValue(e.target.value)}
          placeholder="say something nice"
        />

        <button type="submit" disabled={!formValue}>
          🕊️
        </button>
      </form>
    </>
  );
}

function ChatMessage(props) {
  const { text, uid, photoURL } = props.message;

  const messageClass = uid === auth.currentUser.uid ? "sent" : "received";

  return (
    <>
      <div className={`message ${messageClass}`}>
        <img src={photoURL} alt={user} />
        <p>{text}</p>
      </div>
    </>
  );
}
export default Chat;
