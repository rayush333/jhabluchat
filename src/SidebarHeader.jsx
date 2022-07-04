import React from 'react'
import "./SidebarHeader.css";
import { Avatar, IconButton} from '@mui/material';
import ChatIcon from '@mui/icons-material/Chat';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import DonutLargeOutlinedIcon from '@mui/icons-material/DonutLargeOutlined';
function SidebarHeader() {
  return (
    <div className="sidebar_header">
        <div className='sidebar_header_left'>
        <IconButton><Avatar /></IconButton>
        </div>
        <div className='sidebar_header_right'>
            <IconButton><ChatIcon /></IconButton>
            <IconButton><MoreVertIcon /></IconButton>
            <IconButton><DonutLargeOutlinedIcon /></IconButton>
        </div>
    </div>
  )
}

export default SidebarHeader