import React,{useState} from 'react'

const SignUp = (props) => {
    const [email,setemail] = useState('')
    const [password,setpassword] = useState('')


    const submithandller=(e)=> {
        e.preventDefault()
    }
  return (
    <div className='auto-form-container'>
        <h1>Signup</h1>
        <form onSubmit={submithandller} className="login-form">
            <label htmlFor='email'>email</label>
            <input type='email' placeholder='youremail@gmail.com' id='email' name='email'value={email} onChange={(e)=>setemail(e.target.value)}></input>
            <label htmlFor='password'>password</label>
            <input type='password' placeholder='******' value={password} id='password' name='password' onChange={(e)=>setpassword(e.target.value)}></input>
            <button>Login</button>
        </form>
        <button onClick={()=>props.handler('register')} className="link-btn">dont have an account? regisster here</button>
    </div>
  )
}

export default SignUp
