import React, { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { LoginUser } from '../redux/slices/userSlice';
import './Register.css'


const Login = () => {
const {isAuth}= useSelector((state)=> state.user)
const navigate = useNavigate()
useEffect(()=>{
  if(isAuth){
   navigate('/')
  }
},[isAuth,navigate])
const dispatch= useDispatch()

const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {dispatch(LoginUser(data))};
    console.log(errors);
  return (
    <div className="boxR">

<div className="main">
  <input type="checkbox" id="chk" aria-hidden="true" />
  <div className="signup">
  <form onSubmit={handleSubmit(onSubmit)} className='form'>
      <label htmlFor="chk" aria-hidden="true">
        Sign In
      </label>
      <input className='input' style={{marginBottom:"20px"}} type="email" name="email" placeholder="Email" required="" {...register ('email' ,{required:true})}  /> 
      <input className='input' type="password" name="pswd" placeholder="Password" required="" {...register ('password' ,{required:true})}  />
      <button className="bot" type="submit">Sign In</button>
    </form>
  </div>
  
</div>

    </div>
  )
}

export default Login