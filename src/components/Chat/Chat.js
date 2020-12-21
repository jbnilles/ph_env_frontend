import React from 'react'
import { connect } from 'react-redux'
import { sendMessage, getMessagesFrom } from '../../actions/ChatActions'
import ChatForm from './ChatForm'
import ChatList from './ChatList'

class Chat extends React.Component {
    state = {
        pollingCount: 0,
        delay: 1000,
    };

    componentDidMount() {
        this.props.getMessagesFrom({ userId: this.props.result.contact_id, })
        
        this.interval = setInterval(this.tick,this.state.delay)
        
    }

    componentDidUpdate(prevProps, prevState) {

        if (prevState.delay !== this.state.delay) {
            clearInterval(this.interval);
            this.interval = setInterval(this.tick, this.state.delay);
        }
        

    }
    componentWillUnmount() {

        clearInterval(this.interval);
    }
   
    tick = () => {
        this.setState({
            pollingCount: this.state.pollingCount + 1
        });
        this.props.getMessagesFrom({ userId: this.props.result.contact_id, })
        console.log(this.props)
    }
    onSubmit = (e) => {
        e.preventDefault()
        this.props.sendMessage({
            receiver_id: this.props.result.contact_id,
            message: e.target.message.value
        })
        e.target.message.value = ""
        this.props.getMessagesFrom({ userId: this.props.result.contact_id, }) 
    }

    render() {
        //this.props.getMessagesFrom({ userId: '5057c387-d535-4490-a268-97b1038ebb9b' }) 
        //this.props.getMessagesFrom({ userId: this.props.result.contact_id, }) 
        
            /*< h1 > Polling Count: { this.state.pollingCount }</h1 >*/
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
        getMessagesFrom: (userId) => dispatch(getMessagesFrom(userId)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Chat)