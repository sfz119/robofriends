import React from 'react';

function SearchBox({searchChange}) {
    return (
        <div>
            <input 
                className="pa3 br3 ba b--black bg-dark-gray white mb4 tc"
                type="search" 
                placeholder="Search Robots Here..." 
                onChange={searchChange}
            />
        </div>
    )
}

export default SearchBox;
