import React from 'react'
import "./Sidebar.scss"
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AddIcon from '@mui/icons-material/Add';
import SidebarChannel from './SidebarChannel';

const Sidebar = () => {
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
            </div>
        </div>
    </div>
  )
}

export default Sidebar
