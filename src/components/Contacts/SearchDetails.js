import React from 'react'
import PropTypes from 'prop-types';

function SearchDetails(props) {


    const handleClick = (e) => {
        console.log(props)
        props.onClick(props.result)
    }


    console.log(props)



    return (
        <React.Fragment>
        <h1>{props.result.userName}</h1>
        <button onClick={handleClick}>Add Friend</button>
        </React.Fragment>
    )

}




export default SearchDetails;