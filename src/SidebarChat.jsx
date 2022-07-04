import React from 'react'
import "./SidebarChat.css";
import { Avatar } from '@mui/material';
function SidebarChat() {
  return (
    <div className="sidebar_chat">
        <Avatar src="" />
        <div className="sidebar_chat_info">
            <h2>Room Name</h2>
            <p>Last message</p>
        </div>
    </div>
  )
}

export default SidebarChat