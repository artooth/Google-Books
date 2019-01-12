import React from 'react';

// import App from './App';

const SearchArea = (props) => {
    return (
        <div className="search-area">
            <form onSubmit={props.searchBook} action="">
                <input onChange={props.handleSearch} type="text" />
                <button type="submit">Search Library
                </button>
            </form>
        </div>
    )
}

export default SearchArea;