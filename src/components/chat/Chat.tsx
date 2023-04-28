import React from 'react'
import "./Chat.scss"
import ChatHeader from './ChatHeader';


const Home = () => {
  return (
    <div className='chat'>
      {/* ChatHeader */ }
      <ChatHeader />
      {/* ChatMessage */ }
      <div className="chatMessage">
        chat message
      </div>
      {/* chatInput */ }
      <div className="chatInput">
        chat input
      </div>
      Chat
    </div>
  )
}

export default Home
