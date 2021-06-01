import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';
import ItemsGrid from './Items/ItemsGrid';

function Home() {

    const [isLoaded, setIsLoaded] = useState(false)
    const [items, setItems] = useState([]);

    useEffect(() => {
        axios('https://gp-super-store-api.herokuapp.com/item/list')
        .then(res => {
            setItems(res.data.items);
            setIsLoaded(true);
        })
        .catch(err => console.log(err))
    }, [])

    return (
        <div className="Home text-center">

            <SearchBar />

            { isLoaded ? '' : <h3>Loading...</h3> }
            <ItemsGrid items={items} />
            
        </div>
    )
}

export default Home
