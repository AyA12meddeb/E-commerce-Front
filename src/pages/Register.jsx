import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { RegisterUser } from '../redux/slices/userSlice';
import './Register.css'

const Register = () => {
  const { isAuth } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (isAuth) {
      navigate('/');
    }
  }, [isAuth, navigate]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    dispatch(RegisterUser(data));
  };

  return (
    <div className="boxR">

<div className="main">
  <input type="checkbox" id="chk" aria-hidden="true" />
  <div className="signup">
  <form onSubmit={handleSubmit(onSubmit)} className='form'>
      <label htmlFor="chk" aria-hidden="true">
        Sign up
      </label>
      <input className='input' style={{marginBottom:"20px"}} type="username" name="username" placeholder="username" required="" {...register ('username' ,{required:true})}  />
      <input className='input' style={{marginBottom:"20px"}} type="email" name="email" placeholder="Email" required="" {...register ('email' ,{required:true})}  />
      <input className='input' type="password" name="pswd" placeholder="Password" required="" {...register ('password' ,{required:true})}  />
      <button className='bot' type='submit'>Sign up</button>
    </form>
  </div>
  
</div>

    </div>
  

  );
};

export default Register;