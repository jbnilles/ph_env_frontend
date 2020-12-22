import React from 'react'
import PropTypes from 'prop-types';

function Message(props) {





    var d = new Date(props.message.created_at)


    return (
        <div>
            <li>{props.message.sender_username} - {d.toDateString()+ ' ' + d.getHours() +':' +  d.getMinutes()}:</li>
            <p>{props.message.message}</p>
        </div>
    )

}




export default Message;