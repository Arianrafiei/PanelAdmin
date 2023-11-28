import FastProduct from '../components/FastProduct';
import ReviewTheWallet from '../components/ReviewTheWallet';
import './pages style/Dashbord.css';
import '../components/components style/ReviewTheWallet.css';
import NewUsersJoined from '../components/NewUsersJoined';
import MostViewProduct from '../components/MostViewProduct';

function Dashbord() {
    return ( 
        <>
        <div className='dashbord'>
            <div className='dashbord-section'>
                <h1>Dashbord</h1>
                <div className="dashbord-grid">
                    <FastProduct/>
                    <NewUsersJoined/>
                    <ReviewTheWallet/>
                    <MostViewProduct/>
                </div>
            </div>
        </div>
        </>
     );
}

export default Dashbord;