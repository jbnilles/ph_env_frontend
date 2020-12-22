import React from 'react'
import PropTypes from 'prop-types';

function ContactItem(props) {


    console.log(props)


    const handleClick = (e) => {
        props.onClick(props.contact)
    }


    return (
        <button className="list-group-item d-flex justify-content-between align-items-center green" onClick={ handleClick}>
            <h6>{props.contact.username} <span className="badge badge-danger badge-pill">{props.notifications[props.contact.contact_id] }</span></h6>
        </button>
    )

}




export default ContactItem;