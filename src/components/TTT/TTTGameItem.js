import React from 'react'
import PropTypes from 'prop-types';

function TTTGameItem(props) {




    const handleClick = (e) => {
        props.onClick(props.game.id)
    }

    return (
        <li onClick={ handleClick}>
            <h6>Created By{props.game.creator_username} | created at {props.game.updated_at}</h6>
        </li>
    )

}




export default TTTGameItem;