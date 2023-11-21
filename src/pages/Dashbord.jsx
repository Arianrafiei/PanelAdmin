import './pages style/Dashbord.css'
import basket from '../media/basket.png'

function Dashbord() {
    return ( 
        <>
        <div className='dashbord'>
            <div className='dashbord-section'>
                <h1>Dashbord</h1>
                <div className="dashbord-grid">
                    <div className='fast-product'>
                        <div className="content-fast-product">
                            <h3> Get new product fastly in product page.</h3>
                            <p>Make new product or edite them.</p>
                            <button>Fast Product</button>
                        </div>
                        <img src={basket} alt="" />
                    </div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        </div>
        </>
     );
}

export default Dashbord;