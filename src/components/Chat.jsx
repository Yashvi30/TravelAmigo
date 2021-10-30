import { useState } from "react";
import "../styles/Chat.css";

import { signOut } from "@firebase/auth";
import {
  addDoc,
  collection,
  limitToLast,
  orderBy,
  query,
  serverTimestamp,
} from "@firebase/firestore";
import {
  useAuth,
  useFirestore,
  useFirestoreCollectionData,
  useSigninCheck,
  useUser,
} from "reactfire";
import { Redirect } from "react-router";
import Loader from "./Loader";

// export { auth, database };
function Chat() {
  const auth = useAuth();
  const { data: signedIn } = useSigninCheck();

  return (
    <div className="App">
      <header>
        <h1>Chat💬</h1>
      </header>
      {/* {status === "success"} */}
      <button onClick={() => signOut(auth)}>Sign out!</button>
      <section>
        {signedIn.signedIn ? <ChatRoom /> : <Redirect to="/login" />}
      </section>
    </div>
  );
}

function ChatRoom() {
  const firestore = useFirestore();
  const ref = collection(firestore, "messages");
  const messageQuery = query(ref, orderBy("createdAt"), limitToLast(25));

  const { status, data: messages } = useFirestoreCollectionData(messageQuery);
  const [formValue, setFormValue] = useState("");
  const { status: userStatus, data: user } = useUser();

  if (status === "loading" || userStatus === "loading") {
    return <Loader />;
  }

  if (status === "error" || userStatus === "error" || !messages) {
    return <div>No message found!</div>;
  }

  if (!user) {
    return <Redirect to="/login" />;
  }

  const sendMessage = async (e) => {
    e.preventDefault();

    await addDoc(ref, {
      text: formValue,
      createdAt: serverTimestamp(),
      uid: user.uid,
      photoURL: user.photoURL,
    });

    setFormValue("");
  };

  return (
    <>
      <main>
        {messages &&
          messages.map((msg) => <ChatMessage key={msg.id} message={msg} />)}
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
  const auth = useAuth();
  const { text, uid, photoURL } = props.message;
  const messageClass = uid === auth.currentUser.uid ? "sent" : "received";
  return (
    <>
      <div className={`message ${messageClass}`}>
        <img src={photoURL} alt={auth.currentUser.displayName} />
        <p>{text}</p>
      </div>
    </>
  );
}

export default Chat;
