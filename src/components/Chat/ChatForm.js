import React from 'react';

function ChatForm(props) {




    return (
        <React.Fragment>
            <h1>Chat Form</h1>
            <form onSubmit={props.onSubmit}>
                <input
                    type="text"
                    name="message"
                    placeholder="Message"
                />

                <input
                    type="submit"
                    value="Chat"
                />
            </form>
        </React.Fragment>
        )
}
export default ChatForm;

