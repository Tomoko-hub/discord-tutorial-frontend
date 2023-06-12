import React,{useState,useEffect} from 'react'
import "./Chat.scss"
import ChatHeader from './ChatHeader';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import GifIcon from '@mui/icons-material/Gif';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import ChatMessage from './ChatMessage';
import { useAppSelector } from '../../app/hooks';
import { CollectionReference, DocumentData, addDoc, collection, serverTimestamp, DocumentReference, onSnapshot, Timestamp } from 'firebase/firestore';
import { db } from '../../firebase';

interface Messages {
  timestamp:Timestamp;
  message:string;
  user:{
    uid: string;
        photo: string;
        email: string;
        displayName: string;
  };
}

const Chat = () => {
  const [inputText, setInputText ] = useState<string>("");
  const [messages, setMessages ] = useState<Messages[]>([]);
  const channelName = useAppSelector((state)=>state.channel.channelName);
  const channelId = useAppSelector((state)=>state.channel.channelId);
  const user = useAppSelector((state)=>state.user.user);

  useEffect(()=>{

    let collectionRef = collection(
      db,
      "channels", 
      String(channelId),
      "messages"
      );
      //firebaseリアルタイムでデータベースを更新するときはonSnapshot
    onSnapshot(collectionRef,(snapshot)=>{
      let results:Messages[]=[];
      snapshot.docs.forEach((doc)=>{
        results.push({
          message:doc.data().message,
          timestamp:doc.data().timestamp,
          user:doc.data().user,
        });
      });
      setMessages(results);
      console.log(results);
    });
  },[channelId]);

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

      console.log(docRef);
  }

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
            onChange={(event:React.ChangeEvent<HTMLInputElement>)=>setInputText(event.target.value)}
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
