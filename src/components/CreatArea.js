import React,{useState} from 'react'

function CreatArea(props) {
    
    return (
        <div>
            <form onSubmit={(e)=>props.onSubmit(e)}className='form'>
                <input name='title' placeHolder='title' value={props.title} onChange={(e)=> props.onChange(e)}/>
                <textarea name='text' placeholder='take a note' row='3'value={props.text} onChange={(e)=> props.onChange(e)}/>
                <button type="submit">+</button>
            </form>
        </div>
    )
}

export default CreatArea
