import { NavLink } from "react-router-dom";
import productImg from '../media/productImg.png'
import './components style/MostViewProduct.css'

function MostViewProduct() {
    return ( 
        <>
        <div className="most-view-product">
            <h3>New users joined</h3>
            <p>See more</p>
            <div className="products-list">
                <NavLink className="product-container" id='links'>
                    <img src={productImg} alt="" />                    
                    <div>
                        <h5>Niki shose</h5>
                        <p>5K views</p>
                    </div>
                </NavLink>
                <NavLink className="product-container" id='links'>
                    <img src={productImg} alt="" />                    
                    <div>
                        <h5>Niki shose</h5>
                        <p>5K views</p>
                    </div>
                </NavLink>
                <NavLink className="product-container" id='links'>
                    <img src={productImg} alt="" />                    
                    <div>
                        <h5>Niki shose</h5>
                        <p>5K views</p>
                    </div>
                </NavLink>
                <NavLink className="product-container" id='links'>
                    <img src={productImg} alt="" />                    
                    <div>
                        <h5>Niki shose</h5>
                        <p>5K views</p>
                    </div>
                </NavLink>
                <NavLink className="product-container" id='links'>
                    <img src={productImg} alt="" />                    
                    <div>
                        <h5>Niki shose</h5>
                        <p>5K views</p>
                    </div>
                </NavLink>
            </div>
        </div>
        </>
     );
}

export default MostViewProduct;