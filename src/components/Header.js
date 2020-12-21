import React from 'react';
import './Header.css';


function Header(props) {
    console.log(props)
    const handleClick = () =>
    {
        props.onLogOut()
    }
    return (

        <div className="header">
            <h1>Welcome {props.userReducer.user.userName}</h1>
            {props.userReducer.loggedIn ? <button onClick={handleClick}>Logout</button> : ""}
        </div>
        )
}
export default Header;