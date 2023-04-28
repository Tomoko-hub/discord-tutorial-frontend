import React from 'react'
import "./ChatMessage.scss"
import { Avatar } from '@mui/material';

const ChatMessage = () =>{
  return (
    <div className='message'>
        <Avatar />
        <div className="messageInfo">
            <h4>
                Yomohama Yoko
                <span className='messageTimeStamp'>28/4/2023</span>
            </h4>
            <p>Message</p>
        </div>
    </div>
  )
}

export default ChatMessage