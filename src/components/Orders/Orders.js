import { faCreditCard } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import useProducts from '../Hooks/UseProducts';
import useCart from '../Hooks/useCart';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';
import { removeFromDb } from '../../utilities/fakedb';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



const Orders = () => {
    const [products, setProducts] = useProducts();
    const [cart, setCart] = useCart(products);

        const handleRemove = product =>{
           const rest = cart.filter(pd => pd.id !== product.id)
           setCart(rest);
           removeFromDb(product.id);
            // console.log(product);
        }

    return(
        <div className='shop-container'>
            <div className="products-review-item">
                {
                    cart.map(product => 
                    <ReviewItem 
                        key={product.id}
                        product={product}
                        handleRemove = {handleRemove}
                        >
                    </ReviewItem>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}>
                   <Link to="/inventory">
                       <button> Proceed Checkout  <FontAwesomeIcon icon={faCreditCard}></FontAwesomeIcon> </button>
                   </Link>
                </Cart>
            </div>
        </div>
    )
}

export default Orders;
