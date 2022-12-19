import React from 'react'
import './searchbar.css'

function Searchbar({ value, onChange }) {
    return (
        <div className='searchBar'>
            <div className="searchCase">
                <label htmlFor="search">Search</label>
                <input type="text" id='search' name='search' placeholder='Search for a movie' value={value} onChange={onChange} />
            </div>
        </div>
    )
}

export default Searchbar