import React from 'react'
import PropTypes from 'prop-types';

function ContactItem(props) {





    console.log(props)



    return (
        <li>
            <h6>{props.contact.username}</h6>
            <h6>{props.contact.email}</h6>


        </li>
    )

}




export default ContactItem;