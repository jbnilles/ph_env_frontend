import React from 'react'
import PropTypes from 'prop-types';
import Message from './Message'

function ChatList(props) {


   
    



    return (
        <div className='card-body'>
            <ul className='chat-list-wrapper'>
            {props.messages.map((message) =>
                <Message
                    message={message}
                />
                )}
                </ul>

        </div>
    )

}

ChatList.propTypes = {
    messages: PropTypes.array,
}


export default ChatList;