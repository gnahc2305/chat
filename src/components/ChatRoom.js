import React, { useRef, useState } from "react";
import SignOut from "./SignOut";
import ChatMessage from "./ChatMessage";

import { auth } from "../firebase";
import firebase from "firebase/compat/app";

import { useCollectionData } from "react-firebase-hooks/firestore";
import { firestore } from "../firebase";

function ChatRoom() {
  const dummy = useRef();
  const messagesRef = firestore.collection("messages");
  const query = messagesRef.orderBy("createdAt").limit(25);

  const [messages] = useCollectionData(query, { idField: "id" });

  const [formValue, setFormValue] = useState("");

  const sendMessage = async (e) => {
    e.preventDefault();

    const { uid, photoURL } = auth.currentUser;

    await messagesRef.add({
      text: formValue,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      uid,
      photoURL,
    });

    setFormValue("");
    dummy.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <main>
        {messages && messages.map(msg => <ChatMessage key={msg.createdAt} message={msg} />)}

        <div ref={dummy}></div>
      </main>

      <form onSubmit={sendMessage}>
        <input
          value={formValue}
          onChange={(e) => setFormValue(e.target.value)}
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default ChatRoom;
