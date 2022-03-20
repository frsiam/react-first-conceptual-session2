import React from 'react';
import ReactModal from '../ReactModal/ReactModal';
import './SingleProduct.css'

const SingleProduct = ({product,setCartCount}) => {
    return (
        <div 
        data-aos="flip-left"
        data-aos-easing="linear"
        data-aos-duration="1500" 
        className='col-md-4 my-3'
        >
            <div className="card p-3 border">
                <img className='w-50 m-auto' src={product.image} alt="" />
                <h4>{product.title.slice(0,10)}</h4>
                <div className="d-flex justify-content-around">
                    <button onClick={setCartCount} className='btn btn-success'>Add to cart</button>
                    <button className='btn btn-danger'>Delete</button>
                    <ReactModal product={product}></ReactModal>
                </div>
            </div>
        </div>
    );
};

export default SingleProduct;