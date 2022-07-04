import React from 'react'
import "./Sidebar.css"
import SidebarHeader from "./SidebarHeader";
import SidebarChats from "./SidebarChats";
import Searchbox from "./Searchbox";
function Sidebar() {
  return (
    <div className="sidebar">
        <SidebarHeader />
        <Searchbox /> 
        <SidebarChats />
    </div>
  )
}

export default Sidebar;