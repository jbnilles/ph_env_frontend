import React from 'react'
import PropTypes from 'prop-types';

function ContactItem(props) {





    console.log(props)
    const handleClick = (e) => {
        console.log(props.contact)
        props.onClick(props.contact)
    }


    return (
        <li onClick={ handleClick}>
            <h6>{props.contact.username}</h6>
            <h6>{props.contact.email}</h6>
        </li>
    )

}




export default ContactItem;