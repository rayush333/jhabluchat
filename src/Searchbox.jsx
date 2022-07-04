import React from 'react'
import "./Searchbox.css";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
function Searchbox() {
  return (
    <div className="searchbox">
        <div className='search_container'>
        <SearchOutlinedIcon />
    <input type="text" placeholder="Search or start a new chat" />
    </div></div>
  )
}

export default Searchbox