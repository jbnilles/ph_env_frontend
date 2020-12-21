import React from 'react'
import ResultItem from './ResultItem'

function SearchResultsList(props) {


    const handleClick = (e) => {
        props.onClick(e)
    }


    return (
        <React.Fragment>

            <ul>
                {props.results.map((result) =>
                    <ResultItem
                        onClick={handleClick}
                        result={result}
                    />
                )}
            </ul>
        </React.Fragment>
    );
}
export default SearchResultsList;