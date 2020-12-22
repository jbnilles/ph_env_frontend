import React from 'react'
import PropTypes from 'prop-types';

function Message(props) {





    var d = new Date(props.message.created_at)


    return (
        <div>
            <li><span className='make-large'>{props.message.sender_username}</span> <span className='make-small'>{d.toDateString()+ ' ' + d.getHours() +':' +  d.getMinutes()}</span></li>
            <p>{props.message.message}</p>
        </div>
    )

}




export default Message;