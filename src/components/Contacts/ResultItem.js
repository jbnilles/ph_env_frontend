import React from 'react'

function ResultItem(props) {





    
    const handleClick = (e) => {
        props.onClick(props.result)
    }


    return (
        <button className="list-group-item list-group-item-action green" onClick={handleClick }>
            <h6>{props.result.userName}</h6>
        </button>
    )

}




export default ResultItem;