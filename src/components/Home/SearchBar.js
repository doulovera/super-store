import React from 'react';
import { FaSearch } from 'react-icons/fa';

function Searchbar() {
    return (
        <div className="bg-light search-bar my-5 mx-auto">
            <div className="input-group">
                <input type="search" className="form-control" placeholder="Search" />
                <div className="input-group-append">
                    <span className="input-group-text"><FaSearch /></span>
                </div>
            </div>
        </div>
    )
}

export default Searchbar
