import React from 'react';


function Header(props) {
    const handleClick = () =>
    {
        props.onLogOut()
    }
    return ( 

        <div className="header " id='header'>
            <h1 classsName=''>Welcome {props.userReducer.user.userName}{props.userReducer.loggedIn ? <button className='btn btn-outline-light setRight' onClick={handleClick}>Logout</button> : ""}</h1>
            
        </div>
        )
}
export default Header;