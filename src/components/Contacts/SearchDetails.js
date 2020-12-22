import React from 'react'
import PropTypes from 'prop-types';

function SearchDetails(props) {


    const handleClick = (e) => {
        props.onClick(props.result)
    }





    return (
        <React.Fragment><div className='card'>
            <h1 className='card-body'>{props.result.userName} <button className='btn btn-outline-light' onClick={handleClick}>Add Friend</button></h1>
            
        </div>
        </React.Fragment>
    )

}




export default SearchDetails;