import {Link, useNavigate} from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
export const Login = () => {
    const schema = yup.object().shape({
        Username: yup.string().required(),
        password: yup.string().required("Password is incorrect"),
        });
     const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
    });

    const navigate = useNavigate();

    const onSubmit = (data) =>{
        console.log(data); 
        navigate(`/loggedin?username=${data.Username}`);

    };

    return (
        <div className="container">
      <div className="header">Login</div>
        <form onSubmit={handleSubmit(onSubmit)}>
           <div className="Inputs-Login">
                <h1><input className="Inputs" type="text" placeholder="Enter Username" {...register("Username")}></input></h1>
                {errors.Username && <p>{errors.Username.message}</p>}
                <input className="Inputs" type="password" placeholder="Enter Password" {...register("password")}></input>
                {errors.password && <p>{errors.password.message}</p>}
           </div>
           <div className="bannerbuttonss">
                <h1><button type="submit" className='buttonapp'>Login</button></h1>
                <Link to="https://myaccount.google.com/"><h1><button className='buttongmail'>Login with Gmail</button></h1></Link>
           </div>
    
        </form>
        </div>
    );
};