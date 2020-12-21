import React from 'react'
import PropTypes from 'prop-types';

function ContactItem(props) {


    console.log(props)


    const handleClick = (e) => {
        props.onClick(props.contact)
    }


    return (
        <li onClick={ handleClick}>
            <h6>{props.contact.username} {props.notifications[props.contact.contact_id] }</h6>
            <h6>{props.contact.email}</h6>
        </li>
    )

}




export default ContactItem;