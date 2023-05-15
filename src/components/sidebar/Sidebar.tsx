import React, { useEffect } from 'react'
import "./Sidebar.scss"
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AddIcon from '@mui/icons-material/Add';
import SidebarChannel from './SidebarChannel';
import MicIcon from '@mui/icons-material/Mic';
import HeadphonesIcon from '@mui/icons-material/Headphones';
import SettingsIcon from '@mui/icons-material/Settings';
import { auth } from '../../firebase';
import { useAppSelector } from '../../app/hooks';
import { collection, query, db } from 'firebase/firestore/lite';
import { onSnapshot } from "firebase/firestore";

const Sidebar = () => {

    const user = useAppSelector((state)=> state.user);
    const q = query(collection(db, "channels"));

    useEffect(()=>{
        onSnapshot(q,(querySnapshot)=>{
            const result = [];
            querySnapshot.docs.forEach((doc)=>{
                console.log(doc);
            })
    },[]); //空の引数は最初の一回のみが発火のタイミング

  return (
    <div className='sidebar'>
        {/* Sidebarleft*/ }
        <div className="sidebarLeft">
            <div className='severIcon'>
                <img src="./logo192.png" alt='logo'></img>
            </div>
            <div className='severIcon'>
                <img src="./logo192.png" alt='logo'></img>
            </div>
        </div>
        {/* SidebarRight*/ }
        <div className="sidebarRight">
            <div className="sidebarTop">
                <h3>Discord</h3>
                <ExpandMoreIcon />
            </div>
            {/* sidebarChannels*/ }
            <div className="sidebarChannels">
                <div className="sidebarChannelsHeader">
                    <div className="sidebarHeader">
                        <ExpandMoreIcon />
                        <h4>Here comes channels</h4>
                    </div>
                    <AddIcon className='sidebarAddIcon' />
                </div>
                <div className="sidebarChannelList">
                    <SidebarChannel />
                </div>
                <div className="sidebarFooter">
                    <div className="sidebarAccount">
                        <img src={user?.photo} alt="" onClick={()=>auth.signOut()} />
                        <div className="accountName">
                            <h4>{user?.displayName}</h4>
                            <span>#{user?.uid.substring(0,4)}</span>
                        </div>
                    </div>
                    <div className="sidebarVoice">
                        <MicIcon />
                        <HeadphonesIcon />
                        <SettingsIcon />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Sidebar
