import React from 'react'

function Search(props) {

    return (
        <React.Fragment>
            
            <form onSubmit={props.onSubmit}>
                <input
                    type="text"
                    name="username"
                    placeholder="Username"
                    
                />

                <input
                    type="submit"
                    value="Search"
                />
            </form>
        </React.Fragment>
    );
}
export default Search;