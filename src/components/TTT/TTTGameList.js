import React from 'react'
import PropTypes from 'prop-types';
import TTTGameItem from './TTTGameItem'

function TTTGameList(props) {



    const handleClick = (e) => {
        console.log(e)
        props.onClick(e)
    }

 
    console.log(props)
    return (
        <div>
            <h1>Games</h1>
            <ul>
            {props.games.map((game) =>
                <TTTGameItem
                    onClick={handleClick}
                    game={game}
                />
                )}
            </ul>

        </div>
    )

}

TTTGameList.propTypes = {
    contacts: PropTypes.array,
}


export default TTTGameList;