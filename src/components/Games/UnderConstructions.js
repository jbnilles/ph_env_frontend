import React from 'react'
import underConstruction from './../../images/underConstruction.jpg'


function UnderConstruction(props) {

    return (
        <div>  <img src={underConstruction} />
            <button className='btn btn-outline-dark' onClick={props.goBack}>go back</button></div>
        )
}
export default UnderConstruction;