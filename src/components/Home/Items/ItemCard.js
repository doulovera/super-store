import React from 'react'
import StarsRating from '../StarRating'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function ItemCard({ item }) {

    return (
        <div className="col mb-4">
            <div className="card text-left">
                <img src={item.imageUrl} className="card-img-top mx-auto" alt={item.name} style={{width:'auto', maxWidth: '100%', height: '10em'}} />
                <div className="card-body border-top">
                    <h5 className="card-title">{item.name}</h5>
                    <StarsRating item={item} /> ({item.avgRating})
                    <h6>${item.price} {item.isOnSale ? <span className="badge badge-pill badge-danger">On Sale</span> : ''}</h6>
                    <div className="text-center mt-4">
                        <Link to={'/items/'+item._id} className="text-center btn btn-warning">View Item</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

ItemCard.propTypes = {
    item: PropTypes.shape({
        _id: PropTypes.string.isRequired,
        avgRating: PropTypes.number.isRequired,
        description: PropTypes.string.isRequired,
        imageUrl: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        isOnSale: PropTypes.bool.isRequired,
        stockCount: PropTypes.number.isRequired
    })
}

export default ItemCard
