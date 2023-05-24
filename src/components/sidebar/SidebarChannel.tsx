import React from 'react'
import "./SidebarChannel.scss"
import { DocumentData } from 'firebase/firestore'

type ChannelProps = {
  id: string;
  channel: DocumentData;
}

const SidebarChannel=(props: ChannelProps)=>{
  const {id, channel}=props;
  return (
    <div className='sidebarChannel'>
      <h4>
        <span className='sidebarChannelHash'>#</span>
        {channel.channel.channelName}
      </h4>
    </div>
  )
}

export default SidebarChannel