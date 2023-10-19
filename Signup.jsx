import React, { useState } from 'react'
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

export const Signup = (props) => {
  const schema = yup.object().shape({
    userame: yup.string().required(),
    email: yup.string().email().required(),
    password: yup.string().min(4).max(8).required(),
    Confirmpassword: yup.string()
      .oneOf([yup.ref("password"), null], "Passwords must match")
      .required("Confirm Password is a required field"),
  });
   const [email, setEmail] = useState("");
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  const navigate = useNavigate();

  const onSubmit = (data) => {
    console.log(data);
    navigate('/login')
  };

  return (
    <div className="container">
      <div className="header">Sign Up</div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="Inputs-Signup">
          <h1><input className="Inputs" type="text" placeholder="Userame..." {...register("userame")} /></h1>
          {errors.Username && <p>{errors.Username.message}</p>}
          <input 
          className="Inputs" 
          type="email" 
          placeholder="Email..." 
          {...register("email")} />
          {errors.Email && <p>{errors.Email.message}</p>}
          <input className="Inputs" type="password" placeholder="Password..." {...register("password")} />
          {errors.password && <p>{errors.password.message}</p>}
          <input className="Inputs" type="password" placeholder="Confirm Password..." {...register("Confirmpassword")} />
          {errors.Confirmpassword && <p>{errors.Confirmpassword.message}</p>}
        </div>
        <div className="bannerbuttons">
          <h1><button type="submit" className='buttonapp'>Signup</button></h1>
          <Link to="https://myaccount.google.com/"><h1><button className='buttongmail'>Signup with Gmail</button></h1></Link>
        </div>
      </form>
    </div>
  );
};

export default Signup

