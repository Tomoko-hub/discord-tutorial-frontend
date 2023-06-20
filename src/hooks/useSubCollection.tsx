import React,{useState, useEffect} from 'react'
import { 
    onSnapshot,
    collection,query,
    orderBy,
    Timestamp
} from "firebase/firestore";
import { db } from '../firebase';
import { useAppSelector } from '../app/hooks';

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

const useSubCollection = (
    collectionName:string,
    subCollectionName:string
    ) => {
    const channelId = useAppSelector((state)=>state.channel.channelId);
    const [subDocuments, setSubDocuments]=useState<Messages[]>([]);

    useEffect(()=>{

        let collectionRef = collection(
          db,
          collectionName, 
          String(channelId),
          subCollectionName
          );
    
        const collectionRefOrderBy = query(collectionRef, orderBy("timestamp","desc"));
    
          //firebaseリアルタイムでデータベースを更新するときはonSnapshot
        onSnapshot(collectionRefOrderBy,(snapshot)=>{
          let results:Messages[]=[];
          snapshot.docs.forEach((doc)=>{
            results.push({
              message:doc.data().message,
              timestamp:doc.data().timestamp,
              user:doc.data().user,
            });
          });
          setSubDocuments(results);
        });
      },[channelId]);
  return (
      {subDocuments}
  )
}

export default useSubCollection
