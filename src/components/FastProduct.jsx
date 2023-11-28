import basket from '../media/basket.png'
import {sidebarActive} from "../pages/Sidebar";
import {NavLink} from "react-router-dom";
import './components style/FastProduct.css';

function FastProduct() {
    return ( 
        <>
        <div className='fast-product'>
            <div className="content-fast-product">
                <h3> Get new product fastly in product page.</h3>
                <p>Make new product or edite them.</p>
                <NavLink to='Product' className='fast-product-btn' onClick={()=>{sidebarActive("product"); document.cookie = 'sidebarSelected = product'}}>Fast Product</NavLink>
            </div>
            <img src={basket} alt="" />
        </div>
        </>
     );
}

export default FastProduct;

// used in Dashbord.jsx