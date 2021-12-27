import React,{useState} from 'react'

function Modal(props) {
    const [user,setUser] = useState('')
    return (
        <div className='modal'>
            <form onSubmit={(user)=>props.onAdd(user)}>
                <label for='name' >your name: </label>
                <input value={user} onChange={(e)=>setUser(e.target.value)}
                id="name"></input>
                <button type='submit' ></button>
                
            </form>
            <div className="overlay"></div>
        </div>
    )
}

export default Modal
