import React from 'react'
import { connect } from 'react-redux'
import { sendMessage, getMessagesFrom } from '../../actions/ChatActions'
import ChatForm from './ChatForm'
import ChatList from './ChatList'

class Chat extends React.Component {
   

    componentDidMount() {
        this.props.getMessagesFrom({ userId: this.props.result.contact_id, }) 
        console.log(this.props.result.contact_id)
    }

   

    onSubmit = (e) => {
        e.preventDefault()
        console.log(e)
        console.log(e.target.message)
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
                <ChatForm
                    onSubmit={this.onSubmit} />
                <ChatList
                    messages={this.props.chatReducer.messages} />
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