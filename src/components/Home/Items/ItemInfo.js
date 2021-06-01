import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import StarRating from '../StarRating'

function ItemInfo() {

    const { id } = useParams();
    
    const [item, setItem] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        axios(`https://gp-super-store-api.herokuapp.com/item/${id}`)
        .then(res => {
            setItem(res.data);
            setIsLoaded(true);
        })
        .catch(err => console.log(err))
    }, [id])

    if(!isLoaded) {
        return <p className="text-center">Loading...</p>
    } else {
        return (
            <div className="container-md row mx-auto mt-5">
        
                <div className="col col-12 col-md-6 p-0">
                    <img
                        src={item.imageUrl} 
                        alt={item.name} 
                        className="mx-auto d-block" 
                        style={{width:'auto', maxWidth: '100%', height: '15rem'}} 
                    />
                </div>
        
                <div className="col col-12 col-md-6 p-0">
                    <h4>{item.name}</h4>
                    <StarRating item={item} />
                    <hr className="w-50 mx-0" />
                    <p className="w-75 text-center text-sm-left">
                        {item.description}
                    </p>
                    <h5>${item.price}</h5>
                    <label className="d-block" htmlFor="quantity">
                        Quantity: 
                        <input type="number"/>
                    </label>
                    <button className="btn btn-warning">
                        Add to cart    
                    </button>                    
                </div>
                
            </div>
        )

    }

}

export default ItemInfo
