import React from 'react'
import PropTypes from 'prop-types';
import ContactItem from './ContactItem'

function ContactList (props) {


    
    const handleClick = (e) => {
        console.log(e)
        props.onClick(e)
    }

    var msgDict = {};
    
        props.notifications.map((notification) => 
             ((msgDict[notification.sender_id] == null) ?
                msgDict[notification.sender_id] = 1 : msgDict[notification.sender_id]++))
            
        
            console.log(msgDict)
        
    
    
    console.log(props)
   
        return (
            <div>
                <h1>Contacts</h1>
                {props.contacts.map((contact) =>
                    <ContactItem
                        onClick={handleClick}
                        contact={contact}
                        notifications={msgDict}
                    />
                )}

            </div>
        )
    
}

ContactList.propTypes = {
    contacts: PropTypes.array,
} 


export default ContactList;