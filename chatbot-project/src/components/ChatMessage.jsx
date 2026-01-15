export function ChatMessage({message, sender}){
  return(
    <div className={sender==='user' ? 
      'chat-message-user' : 'chat-message-robot'
      }>
      {sender === 'bot' && <img src="./assets/robot.png" className="chat-message-profile"/>}
      <div className="chat-message-text">
        {message}
      </div>
      {message!=='' && sender==='user' && <img src="./assets/user.png" className="chat-message-profile"/>}
    </div>
  );
}