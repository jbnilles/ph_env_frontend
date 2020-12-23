import React from 'react'
import PropTypes from 'prop-types';

function TTTGameItem(props) {



    const handleClick = (e) => {
        props.onClick(props.game.id)

    }
    var d = new Date(props.game.updated_at)

    
    return (
        <button className="list-group-item list-group-item-action green" onClick={ handleClick}>
            <h6>Created By {props.game.creator_username} | at {d.toDateString() + ' ' + d.getHours() + ':' + d.getMinutes()}</h6>
        </button>
    )

}




export default TTTGameItem;