import React from 'react';
import "./SidebarChats.css";
import SidebarChat from "./SidebarChat";
function SidebarChats() {
  return (
    <div className="sidebar_chats">
        <SidebarChat />
        <SidebarChat />
        <SidebarChat />
    </div>
  )
}

export default SidebarChats;