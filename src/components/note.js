import React from "react";


const Note = (props) => { 
    return <div id={props.id} className='note'>
        <h1>{props.title}</h1>
        <p>{props.content}</p>
        <button onClick={()=>props.delete(props.id)}><i class="far fa-trash-alt"></i></button>
    </div>
}

export default Note