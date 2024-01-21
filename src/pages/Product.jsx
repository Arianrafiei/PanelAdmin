import React from "react";
import "./pages style/Product.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faPen, faXmark } from '@fortawesome/free-solid-svg-icons'

import productImg from "../media/productImg.png"

function Product() {
    return ( 
        <>
        <div className="product">
            <h3>Product</h3>
            <div className="product-section">
                <div className="product-list">
                    <h6>All products</h6>
                    <div className="product-box">
                        <div className="product-info">
                            <img src={productImg} alt="" />
                            <h5>Boot nike</h5>
                        </div>
                        <div className="quic-edit">
                            <FontAwesomeIcon icon={faPen} />
                            <FontAwesomeIcon icon={faEye} />
                            <FontAwesomeIcon icon={faXmark} />
                        </div>
                    </div>
                    <div className="product-box">
                        <div className="product-info">
                            <img src={productImg} alt="" />
                            <h5>Boot nike</h5>
                        </div>
                        <div className="quic-edit">
                            <FontAwesomeIcon icon={faPen} />
                            <FontAwesomeIcon icon={faEye} />
                            <FontAwesomeIcon icon={faXmark} />
                        </div>
                    </div>
                    <div className="product-box">
                        <div className="product-info">
                            <img src={productImg} alt="" />
                            <h5>Boot nike</h5>
                        </div>
                        <div className="quic-edit">
                            <FontAwesomeIcon icon={faPen} />
                            <FontAwesomeIcon icon={faEye} />
                            <FontAwesomeIcon icon={faXmark} />
                        </div>
                    </div>
                    <div className="product-box">
                        <div className="product-info">
                            <img src={productImg} alt="" />
                            <h5>Boot nike</h5>
                        </div>
                        <div className="quic-edit">
                            <FontAwesomeIcon icon={faPen} />
                            <FontAwesomeIcon icon={faEye} />
                            <FontAwesomeIcon icon={faXmark} />
                        </div>
                    </div>
                    <div className="product-box">
                        <div className="product-info">
                            <img src={productImg} alt="" />
                            <h5>Boot nike</h5>
                        </div>
                        <div className="quic-edit">
                            <FontAwesomeIcon icon={faPen} />
                            <FontAwesomeIcon icon={faEye} />
                            <FontAwesomeIcon icon={faXmark} />
                        </div>
                    </div>
                    <div className="product-box">
                        <div className="product-info">
                            <img src={productImg} alt="" />
                            <h5>Boot nike</h5>
                        </div>
                        <div className="quic-edit">
                            <FontAwesomeIcon icon={faPen} />
                            <FontAwesomeIcon icon={faEye} />
                            <FontAwesomeIcon icon={faXmark} />
                        </div>
                    </div>
                    <div className="product-box">
                        <div className="product-info">
                            <img src={productImg} alt="" />
                            <h5>Boot nike</h5>
                        </div>
                        <div className="quic-edit">
                            <FontAwesomeIcon icon={faPen} />
                            <FontAwesomeIcon icon={faEye} />
                            <FontAwesomeIcon icon={faXmark} />
                        </div>
                    </div>
                </div>
            </div>
            <button className="new-product">New Product</button>
        </div>
        </>
     );
}

export default Product;