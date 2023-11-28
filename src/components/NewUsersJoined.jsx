import './components style/NewUsersJoined.css';
import userProfile from '../media/userProfile.png'
import { NavLink } from 'react-router-dom';


function NewUsersJoined() {
    return ( 
        <div className="new-users-joined">
            <h3>New users joined</h3>
            <p>See more</p>
            <div className="users-list">
                <NavLink className="user-container" id='links'>
                    <img src={userProfile} alt="" />                    
                    <div>
                        <h5>Arsham Tehrani</h5>
                        <p>@arsham123</p>
                    </div>
                </NavLink>
                <NavLink className="user-container" id='links'>
                    <img src={userProfile} alt="" />                    
                    <div>
                        <h5>Arsham Tehrani</h5>
                        <p>@arsham123</p>
                    </div>
                </NavLink>
                <NavLink className="user-container" id='links'>
                    <img src={userProfile} alt="" />                    
                    <div>
                        <h5>Arsham Tehrani</h5>
                        <p>@arsham123</p>
                    </div>
                </NavLink>
                <NavLink className="user-container" id='links'>
                    <img src={userProfile} alt="" />                    
                    <div>
                        <h5>Arsham Tehrani</h5>
                        <p>@arsham123</p>
                    </div>
                </NavLink>
            </div>
        </div>
     );
}

export default NewUsersJoined;