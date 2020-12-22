import React from 'react'
import ResultItem from './ResultItem'

function SearchResultsList(props) {


    const handleClick = (e) => {
        props.onClick(e)
    }
    const handleClearClick = (e) => {
        props.clear(e)
    }
    let x =''
    if (props.results.length > 0) {
       x = ( <button className='btn btn-outline-dark'
            type="button"
            value="clear"
            onClick={handleClearClick}
        >clear</button>)
    }
    return (
        <React.Fragment>

            <div className='list-group' >
                {props.results.map((result) =>
                    <ResultItem
                        onClick={handleClick}
                        result={result}
                    />
                )}
                { x}
            </div>
        </React.Fragment>
    );
}
export default SearchResultsList;