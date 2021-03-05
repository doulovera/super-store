import React from 'react'
import ItemsGrid from '../Home/ItemsGrid';

function Deals() {
    return (
        <div className="text-center">
            <ItemsGrid showOnSale={true} />
        </div>
    )
}

export default Deals
