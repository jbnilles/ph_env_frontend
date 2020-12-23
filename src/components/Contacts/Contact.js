import React from 'react'
import { connect } from 'react-redux'
import { addContact, getContacts, searchUsers, getNotifications, clear_search } from '../../actions/ContactActions'
import ContactList from "./ContactList"
import Search from "./Search"
import SearchDetails from "./SearchDetails"
import SearchResultsList from "./SearchResultsList"
import Chat from "./../Chat/Chat"
//import { sendMessage, getMessagesFrom, getNewMessages } from '../../actions/ChatActions'



class Contact extends React.Component {
    
    state = {
        pollingCount: 0,
        delay: 1000,
        x: null,
        y: null
    };

    componentDidMount() {
        this.props.getContacts()

        this.interval = setInterval(this.tick, this.state.delay)

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
        this.props.getContacts()
        this.props.getNotifications() 
    }
     
    
    handleSearch = (e) => {
        e.preventDefault();
        this.props.searchUsers({ userName: e.target.username.value })
        this.props.getContacts() 

    }
    handleAddContact = (e) => {
        this.props.addContact({ userId: e.id, })
        this.props.getContacts()
        this.setState({x:''})
    }
    handleSearchClick = (e) => {
        this.setState({ x: (<SearchDetails onClick={ this.handleAddContact} result={e} />)})
        this.props.getContacts()

    }
    handleContactClick = (e) => {
        this.setState({ y: (<Chat result={e} />) })
        this.props.getContacts()

    }
    handleClearSearch = () => {
        this.props.clear_search()
    }
    
    

    render() {
        //this.props.getMessagesFrom({ userId: '5057c387-d535-4490-a268-97b1038ebb9b' }) 
    /*<h1>Polling Count: {this.state.pollingCount}</h1>*/
       
        return (
            <div className='display-full'>
                
                
                
                <Search
                    onSubmit={this.handleSearch} />
                <SearchResultsList
                    onClick={this.handleSearchClick}
                    results={this.props.contactReducer.searchResults}
                    clear={this.handleClearSearch} />
                
                <ContactList
                    onClick={this.handleContactClick}
                    contacts={this.props.contactReducer.contacts}
                    notifications={this.props.contactReducer.notifications}
                />
                
                {this.state.x}
                {this.state.y}





                
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
        getNotifications: () => dispatch(getNotifications()),
        clear_search: () => dispatch(clear_search())

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Contact)