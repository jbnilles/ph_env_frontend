import React from 'react'
import { connect } from 'react-redux'
import { addContact, getContacts } from '../../actions/ContactActions'

class Contact extends React.Component {


    componentDidMount() {
        this.props.getContacts()
    }



    onSubmit = (e) => {
        e.preventDefault()
        this.props.addContact({
            contact_id: '5057c387-d535-4490-a268-97b1038ebb9b',
        })
    }

    render() {
        //this.props.getMessagesFrom({ userId: '5057c387-d535-4490-a268-97b1038ebb9b' }) 
        console.log(this.props)
        return (
            <div>
                <h1>Add Contact form</h1>
                <form onSubmit={this.onSubmit}>
                    <input
                        type="text"
                        name="contact"
                        placeholder="contact"
                        
                    />

                    <input
                        type="submit"
                        value="Contact"
                    />
                </form>
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        contactReducer: state.contactReducer
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addContact: (contactId) => dispatch(addContact(contactId)),
        getContacts: () => dispatch(getContacts())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Contact)