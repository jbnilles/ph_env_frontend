import React from 'react'
import PropTypes from 'prop-types';
import Message from './Message'

function ChatList(props) {


   
    



    return (
        <div>
            {props.messages.map((message) =>
                <Message
                   
                    message={message}
                />
            )}

        </div>
    )

}

ChatList.propTypes = {
    messages: PropTypes.array,
}


export default ChatList;