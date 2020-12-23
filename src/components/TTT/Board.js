import React from 'react';

function Board (props) {


    const handleClick = (e) => {
        props.onClick(e)
        e.target.value = 'X'
    }

    const getClassName = (j, k) => {
        let cn = ""
        if (j === 1) {
            cn+= " hori "
        }
        if (k === 1) {
            cn+= ' vert '
        }
        return cn
    }

        return (
            <div>
                <table>
                    {props.gameState.map((x ,j) => 
                        <tr>{x.map((y, k) => <td className={getClassName(j,k) }><button className='square' name={j.toString() + '_' + k.toString()} onClick={handleClick}>{y}</button></td>)}</tr>)}
                </table>
            </div>
        );
    
}



export default Board;