import React from 'react'
import PropTypes from 'prop-types';
import TTTGameItem from './TTTGameItem'

function TTTGameList(props) {



    const handleClick = (e) => {
        console.log(e)
        props.onClick(e)
    }
    const handleCreate = (e) => {
        props.onCreateGame();
    }
    let x = 'There are no games to join. Create a new game';
    if (props.games.length != 0) {
      x = (  
            props.games.map((game) =>
                <TTTGameItem
                    onClick={handleClick}
                    game={game}
                />
            )
        )
    }
    
    return (
        <div className='card'>
            <h1>Find a Game</h1>
            <div className='list-group'>
                {x}
            </div>
            <button className='btn btn-outline-light' onClick={handleCreate}>Create Game</button>
            
        </div>
    )

}

TTTGameList.propTypes = {
    contacts: PropTypes.array,
}


export default TTTGameList;