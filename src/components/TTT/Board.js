import React from 'react';
import Square from './Square';

function Board (props) {


    const handleClick = (e) => {
        props.onClick(e)
        e.target.value = 'X'
    }
    
    console.log((props.gameState))
        return (
            <div>
                {props.gameState.map((x ,j) => 
                    <div>{x.map((y, k) => <button name={j.toString() + '_' + k.toString() } onClick={handleClick}>{y}</button>)}</div>)}
            </div>
        );
    
}



export default Board;