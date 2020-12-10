import React from 'react'
import './SideBarOption.css';


function SideBarOption({active ,text , Icon ,src2}) {
    return (
        <div className={`sidebarOption ${active && 'sidebarOption-active'}`}>
            
            <Icon src={src2}/>
            <h2>{text}</h2>
        </div>
    )
}

export default SideBarOption;
