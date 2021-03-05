import React from 'react';
import '../../styles/Home.css'
import SearchBar from './SearchBar';
import ItemsGrid from './ItemsGrid';

function Home() {

    return (
        <div className="Home text-center">

            <SearchBar />

            <ItemsGrid showOnSale={false} />
            
        </div>
    )
}

export default Home
