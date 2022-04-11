import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './ReviewItem.css';

const ReviewItem = (props) => {
    const {product, handleRemove} = props;
    const {name, img, price, shipping, } = product;
    return (
        <div className='review-Item'>
            <div className='product-img'>
                <img src={img} alt='' />
            </div>
            <div className='review-item-container'>
                <div className="review-item-detail">
                    <h6 className='product-name'>
                        {name.length > 20 ? name.slice(0, 20) + '...': name}
                    </h6>
                    <p><small> price: <span className='price'>${price}</span></small></p>
                    <p><small> Shipping Charge : <span className='shipping-charge'>${shipping}</span></small></p>
                </div>
                <div className="review-item-btn">
                    <button onClick={() => handleRemove(product)}>
                        <FontAwesomeIcon icon={faTrashAlt}></FontAwesomeIcon>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ReviewItem;