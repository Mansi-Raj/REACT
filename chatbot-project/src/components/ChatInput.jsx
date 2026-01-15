import { useState } from 'react'
import { Chatbot } from 'supersimpledev'

export function ChatInput({chatMessages, setChatMessages}){
  const [inputText, setInputText] = useState('');

  function saveInputText(){
    setInputText(event.target.value);
  }

  function sendMessage(){
    const newChatMessage = 
    [
      ...chatMessages,
      {
        message: inputText,
        sender: 'user',
        id: crypto.randomUUID()
    }];

    setChatMessages(newChatMessage);
          
    setInputText('');

    if(inputText === ''){
      alert('Input a valid message.')
    }else{
      const response = Chatbot.getResponse(inputText);
      setChatMessages([
        ...newChatMessage,
        {
          message: response,
          sender: 'bot',
          id: crypto.randomUUID()
        }
      ]);
    }
  }

  return (
    <div className="chat-input-container">
      <input 
        placeholder="Send a message to a Chatbot"
        onChange ={saveInputText}
        value={inputText}
        className="chat-input"
      />
      <button onClick={sendMessage} className="send-button">Send</button>
    </div>
  );
}