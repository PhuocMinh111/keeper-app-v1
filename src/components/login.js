import React,{useState} from 'react'

function Login(props) {
    const [user,setUser] = useState('')
    return (
        <div className="login">
            <form onSubmit={()=>props.onSubmit(user)}className='form'>
                <input name='title' placeHolder='your name ' value={user} onChange={(e)=>setUser(e.target.value)}/>
                <button type="submit">Enter</button>
            </form>
        </div>
    )
}

export default Login
