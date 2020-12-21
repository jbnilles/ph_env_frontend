import React from 'react'
import PropTypes from 'prop-types';
import ContactItem from './ContactItem'

function ContactList (props) {


    
    const handleClick = (e) => {
        console.log(e)
        props.onClick(e)
    }

    

   
        return (
            <div>
                <h1>Contacts</h1>
                {props.contacts.map((contact) =>
                    <ContactItem
                        onClick={handleClick}
                        contact={contact}
                    />
                )}

            </div>
        )
    
}

ContactList.propTypes = {
    contacts: PropTypes.array,
}


export default ContactList;