import React,{useState} from 'react'
import "./Chat.scss"
import ChatHeader from './ChatHeader';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import GifIcon from '@mui/icons-material/Gif';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import ChatMessage from './ChatMessage';
import { useAppSelector } from '../../app/hooks';
import { 
  CollectionReference, 
  DocumentData, 
  addDoc, 
  collection, 
  serverTimestamp, 
  DocumentReference, 
 } from 'firebase/firestore';
import { db } from '../../firebase';
import useSubCollection from '../../hooks/useSubCollection';

const Chat = () => {
  const [inputText, setInputText ] = useState<string>("");
  const channelId = useAppSelector((state)=>state.channel.channelId);
  const channelName = useAppSelector((state)=>state.channel.channelName);
  const user = useAppSelector((state)=>state.user.user);
  const {subDocuments:messages}=useSubCollection("channels","messages");

  const sendMessage = async(event:React.MouseEvent<HTMLButtonElement, MouseEvent>)=>{
    event.preventDefault();
    //firebase data
    const collectionRef:CollectionReference<DocumentData>= collection(
      db, 
      "channels", 
      String(channelId), 
      "messages");

    const docRef:DocumentReference<DocumentData>=await addDoc(collectionRef, {
      message: inputText,
      timestamp: serverTimestamp(),
      user: user,
    });

    setInputText("");
  }

  return (
    <div className='chat'>
      {/* ChatHeader */ }
      <ChatHeader channelName={channelName} />
      {/* ChatMessage */ }
      <div className="chatMessage">
        {messages.map((message, index)=>(
          <ChatMessage
            key={index}
            message={message.message}
            timestamp={message.timestamp}
            user={message.user}
           />
        ))}
      </div>
      {/* chatInput */ }
      <div className="chatInput">
        <AddCircleOutlineIcon />
        <form>
          <input 
            type="text"
            placeholder='#Send message to Tomoko'
            onChange={(event:React.ChangeEvent<HTMLInputElement>)=>setInputText(event.target.value)}
            value={inputText}
          />
          <button 
            type="submit"
            className='chatInputButton'
            onClick={(event:React.MouseEvent<HTMLButtonElement, MouseEvent>)=>{
              sendMessage(event)
            }}
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

export default Chat
