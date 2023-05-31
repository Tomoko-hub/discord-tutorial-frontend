import React from 'react'
import "./Chat.scss"
import ChatHeader from './ChatHeader';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import GifIcon from '@mui/icons-material/Gif';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import ChatMessage from './ChatMessage';
import { useAppSelector } from '../../app/hooks';

const Home = () => {
  const channelName = useAppSelector((state)=>state.channel.channelName);
  //console.log(channelName);

  return (
    <div className='chat'>
      {/* ChatHeader */ }
      <ChatHeader channelName={channelName} />
      {/* ChatMessage */ }
      <div className="chatMessage">
        <ChatMessage />
        <ChatMessage />
        <ChatMessage />
        <ChatMessage />
        <ChatMessage />
        <ChatMessage />
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
    </div>
  )
}

export default Home
