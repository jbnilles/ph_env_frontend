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

                <button className='btn btn-light'
                    type="submit"
                    value="Search"
                >Search</button>
                
            </form>
        </React.Fragment>
    );
}
export default Search;