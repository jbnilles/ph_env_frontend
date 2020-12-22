import React from 'react';

function ChatForm(props) {




    return (
        <React.Fragment>
            <form onSubmit={props.onSubmit}>
                <input
                    type="text"
                    name="message"
                    placeholder="Message"
                    size='45'

                />

                <input className='btn btn-light'
                    type="submit"
                    value="Chat"
                />
            </form>
        </React.Fragment>
        )
}
export default ChatForm;

