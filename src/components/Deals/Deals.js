import React, { useState, useEffect } from 'react'
import axios from 'axios';
import SearchBar from '../Home/SearchBar';
import ItemsGrid from '../Home/ItemsGrid';

function Deals() {

    const [isLoaded, setIsLoaded] = useState(false)
    const [items, setItems] = useState([]);

    useEffect(() => {
        axios('https://gp-super-store-api.herokuapp.com/item/list?sortDir=asc&isOnSale=true')
        .then(res => {
            setItems(res.data.items);
            setIsLoaded(true);
        })
        .catch(err => console.log(err))
    }, [])

    return (
        <div className="text-center">

            <SearchBar />

            { !isLoaded && <h3>Loading...</h3> }
            <ItemsGrid items={items} />
        </div>
    )
}

export default Deals
