import React,{useState} from "react";

function Header(props){
    
    return <header >
        <h1>Keeper App</h1>
        {(props.checkLogin) && <h2 className='header-name' >Hello {props.userName} !</h2>}
    </header>
}
export default Header