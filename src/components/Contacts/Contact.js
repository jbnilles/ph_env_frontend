import React from 'react'
import { connect } from 'react-redux'
import { addContact, getContacts, searchUsers } from '../../actions/ContactActions'
import ContactList from "./ContactList"
import Search from "./Search"
import SearchDetails from "./SearchDetails"
import SearchResultsList from "./SearchResultsList"

class Contact extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            x: null
        }
    }
     
    componentDidMount() {
        this.props.getContacts()
        console.log(this.props)

    }
    handleSearch = (e) => {
        e.preventDefault();
        console.log(e.target.username)
        this.props.searchUsers({userName: e.target.username.value})
        console.log(this.props)
    }
    handleSearchClick = (e) => {
        console.log(e)
        this.setState({x : (<SearchDetails result={e} />)})
         
    }
    

    onSubmit = (e) => {
        e.preventDefault()
        this.props.addContact({ userId: '5057c387-d535-4490-a268-97b1038ebb9b', })
    }

    render() {
        //this.props.getMessagesFrom({ userId: '5057c387-d535-4490-a268-97b1038ebb9b' }) 
        console.log(this.props.contactReducer.contacts)
        console.log(this.props)
        return (
            <div>
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
                    test={"hji"}
                    contacts={this.props.contactReducer.contacts}
                />
                
                
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
        getContacts: () => dispatch(getContacts()),
        searchUsers: (contactId) => dispatch(searchUsers(contactId)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Contact)