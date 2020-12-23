import React from 'react';
import Board from './Board';


function TTTBoard(props) {



    const handleClick = (e) => {
        props.onClick(e)
    }







    return (
        <div className="game">
            <div className="game-board">
                <Board
                    gameState={JSON.parse(props.currentGame.game_state)}
                    onClick={handleClick}
                />
            </div>
            <div className="game-info">
                {props.currentGame.status === 2 ? "" : <h2>Current Turn: {props.currentGame.current_turn_username}</h2>}
            </div>
        </div>
    );
}

export default TTTBoard;