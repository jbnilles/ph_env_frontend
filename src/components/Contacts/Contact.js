import React from 'react'
import { connect } from 'react-redux'
import { addContact, getContacts, searchUsers, getNotifications } from '../../actions/ContactActions'
import ContactList from "./ContactList"
import Search from "./Search"
import SearchDetails from "./SearchDetails"
import SearchResultsList from "./SearchResultsList"
import Chat from "./../Chat/Chat"
//import { sendMessage, getMessagesFrom, getNewMessages } from '../../actions/ChatActions'



class Contact extends React.Component {
    
    state = {
        pollingCount: 0,
        delay: 10000,
        x: null
    };

    componentDidMount() {
        this.interval = setInterval(this.tick, this.state.delay)
        this.props.getContacts()

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
        console.log(this.props)
        this.props.getContacts()
        this.props.getNotifications() 
    }
     
    
    handleSearch = (e) => {
        e.preventDefault();
        this.props.searchUsers({userName: e.target.username.value})
        console.log(this.props)
    }
    handleAddContact = (e) => {
        this.props.addContact({ userId: e.id, })
        this.props.getContacts()
    }
    handleSearchClick = (e) => {
        this.setState({ x: (<SearchDetails onClick={ this.handleAddContact} result={e} />)})
         
    }
    handleContactClick = (e) => {
        this.setState({ x: (<Chat result={e} />) })
    }
    

    

    render() {
        //this.props.getMessagesFrom({ userId: '5057c387-d535-4490-a268-97b1038ebb9b' }) 
        this.props.getContacts()
        return (
            <div>
                <h1>Polling Count: {this.state.pollingCount}</h1>
                {this.state.x}
                <h1>Search</h1>
                <Search
                    onSubmit={this.handleSearch} />
                <SearchResultsList
                    onClick={this.handleSearchClick}
                    results={this.props.contactReducer.searchResults}/>

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
                <ContactList
                    onClick={this.handleContactClick}
                    contacts={this.props.contactReducer.contacts}
                />
                
                
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        contactReducer: state.contactReducer,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addContact: (contactId) => dispatch(addContact(contactId)),
        getContacts: () => dispatch(getContacts()),
        searchUsers: (contactId) => dispatch(searchUsers(contactId)),
        getNotifications: () => dispatch(getNotifications())

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Contact)