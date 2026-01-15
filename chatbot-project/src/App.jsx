import { useState } from 'react'
import { ChatMessages } from './components/ChatMessages'
import { ChatInput } from './components/ChatInput'
import './App.css'

export function App(){ 
  const [chatMessages, setChatMessages] = useState([{
    message:'',
    sender:'',
    id:''
  }])

  return (
    <div className="app-container">
      <ChatMessages
        chatMessages = {chatMessages}
      />
      <ChatInput 
        chatMessages={chatMessages}
        setChatMessages={setChatMessages}
      />
    </div>
)};