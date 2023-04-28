import React from 'react'
import "./Chat.scss"
import ChatHeader from './ChatHeader';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import GifIcon from '@mui/icons-material/Gif';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';

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
        <AddCircleOutlineIcon />
        <form action="">
          <input 
            type="text"
            placeholder='#Send message to Tomoko'
           />
          <button 
            type="submit"
            className='chatInputButton'  
          >Send</button>
        </form>
        <div className="chatInputIcons">
          <CardGiftcardIcon />
          <GifIcon />
          <SentimentSatisfiedAltIcon />
        </div>
      </div>
      Chat
    </div>
  )
}

export default Home
