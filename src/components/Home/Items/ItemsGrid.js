import React from 'react'
import ItemCard from './ItemCard';

function ItemsGrid({ items }) {

    return (
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 container mx-auto mt-5">
            {
                items.map(item => <ItemCard item={item} key={item._id} />) 
            }
        </div>
    )
}

export default ItemsGrid
