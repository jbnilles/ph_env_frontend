import React from 'react'
import { connect } from 'react-redux'
import { sendMessage, getMessagesFrom } from '../../actions/ChatActions'

class Chat extends React.Component {
   

    componentDidMount() {
        this.props.getMessagesFrom({ userId: '5057c387-d535-4490-a268-97b1038ebb9b', }) 
    }

   

    onSubmit = (e) => {
        e.preventDefault()
        this.props.sendMessage({
            receiver_id: '5057c387-d535-4490-a268-97b1038ebb9b',
            message: e.target.message.value
        })
    }

    render() {
        //this.props.getMessagesFrom({ userId: '5057c387-d535-4490-a268-97b1038ebb9b' }) 
        console.log(this.props)
        return (
            <div>
                <h1>Chat Form</h1>
                <form onSubmit={this.onSubmit}>
                    <input
                        type="text"
                        name="message"
                        placeholder="Message"
                        onChange={this.handleOnChange}
                    />
                    
                    <input
                        type="submit"
                        value="Login"
                    />
                </form>
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
       chatReducer: state.chatReducer
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: (messageModel) => dispatch(sendMessage(messageModel)),
        getMessagesFrom: (userId) => dispatch(getMessagesFrom(userId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Chat)