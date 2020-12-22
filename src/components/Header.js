import React from 'react';
import './Header.css';


function Header(props) {
    console.log(props)
    const handleClick = () =>
    {
        props.onLogOut()
    }
    return ( 

        <div className="header " id='header'>
            <h1 classsName=''>Welcome {props.userReducer.user.userName}{props.userReducer.loggedIn ? <button className='btn btn-outline-danger setRight' onClick={handleClick}>Logout</button> : ""}</h1>
            
        </div>
        )
}
export default Header;