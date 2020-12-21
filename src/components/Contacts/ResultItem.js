import React from 'react'
import PropTypes from 'prop-types';

function ResultItem(props) {





    
    const handleClick = (e) => {
        console.log(props.result)
        props.onClick(props.result)
    }


    return (
        <li onClick={handleClick }>
            <h6>{props.result.userName}</h6>
        </li>
    )

}




export default ResultItem;