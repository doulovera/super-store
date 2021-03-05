import React, { useEffect, useState } from 'react'
import axios from 'axios';
import ItemCard from './ItemCard';

function ItemsGrid({showOnSale}) {
    
    const [items, setItems] = useState([]);

    useEffect(() => {
        axios('https://gp-super-store-api.herokuapp.com/item/list')
        .then(res => setItems(res.data.items))
        .catch(err => console.log(err))
    }, [])

    return (
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 container mx-auto mt-5">
            {
                showOnSale ? 
                items
                    .filter(item => item.isOnSale === true)
                    .map(item => (
                        item ? 
                        <ItemCard item={item} key={item._id} /> 
                        : 
                        <h1>Sorry, there are no sale items at this time.</h1> 
                        )) 
                : 
                items
                    .map(item => <ItemCard item={item} key={item._id} />) 
            }
        </div>
    )
}

export default ItemsGrid
