import React,{useState} from 'react'

const Register = (props) => {

    const [email,setemail] = useState('')
    const [password,setpassword] = useState('')
    const [fullname,setfullname] = useState('')

    const submithandller=(e)=> {
        e.preventDefault()
    }
  return (
    <div className='auto-form-container'>
        <h2>Register</h2>
      
      <form onSubmit={submithandller} className="register-form">
            <label htmlFor='email'>email</label>
            <input type='email' placeholder='youremail@gmail.com' id='email' name='email'value={email} onChange={(e)=>setemail(e.target.value)}></input>
            <label htmlFor='password'>password</label>
            <input type='password' placeholder='******' value={password} id='password' name='password' onChange={(e)=>setpassword(e.target.value)}></input>
            <label>fullname</label>
            <input id='fullname' name='fullname' type='text' placeholder='obi okoye'value={fullname} onChange={(e)=>setfullname(e.target.value)}></input>
            <button onClick={()=>props.handler('login')}>already have an account? sign up here</button>
        </form>
    </div>
  )
}

export default Register
