import React from 'react'
import PropTypes from 'prop-types';

function Message(props) {





    


    return (
        <li>
            <h6>{props.message.sender_username}</h6>
            <h6>{props.message.message}</h6>
            <h6>{props.message.created_at}</h6>
        </li>
    )

}




export default Message;