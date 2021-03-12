import React from 'react';
import { FaSearch } from 'react-icons/fa';

function Searchbar() {
    return (
    <div className="bg-light my-5 mx-auto" style={{width:'50%'}}>
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
