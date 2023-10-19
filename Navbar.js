import React from 'react'
import "./Navbar.css";
import {Link} from 'react-router-dom';

function Navbar() {
  return (
    <div className='navbar'>
        <img className='logo' src="https://banner2.cleanpng.com/20180417/yjq/kisspng-logo-royalty-free-falcon-5ad685e92ca4c4.9973054715240084251829.jpg" alt="Image logo" />
        <Link to="/"><img className='homepage' src="https://www.freepnglogos.com/uploads/logo-home-png/vector-brush-home-logo-download-vector-logos-6.png" alt="Home" /></Link>
        <Link to="/login"><img className='login' src="https://www.freeiconspng.com/thumbs/login-icon/login-icon-5.png" alt="login" /></Link>
        <Link to="/signup"><img className='signup' src="https://cdn-icons-png.flaticon.com/512/5599/5599504.png" alt="Sign up" /></Link>

    </div>
  )
}

export default Navbar