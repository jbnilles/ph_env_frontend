import React from 'react'
import PropTypes from 'prop-types';

function SearchDetails(props) {


    const handleClick = (e) => {
        props.onClick(props.result)
    }





    return (
        <React.Fragment>
        <h1>{props.result.userName}</h1>
        <button onClick={handleClick}>Add Friend</button>
        </React.Fragment>
    )

}




export default SearchDetails;