import React from 'react'
import { firestore } from '../firebase'

function ChatRoom() {
  const messageRef = firestore.collection('messages');


  return (
    <div>ChatRoom</div>
  )
}

export default ChatRoom