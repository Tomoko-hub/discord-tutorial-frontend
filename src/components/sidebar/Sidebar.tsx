import React from 'react'
import "./Sidebar.scss"
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

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
            
        </div>
    </div>
  )
}

export default Sidebar
