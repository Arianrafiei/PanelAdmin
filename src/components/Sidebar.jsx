import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse , faBars , faEnvelope ,faCalendarDays , faMagnifyingGlass , faGear} from '@fortawesome/free-solid-svg-icons';
import { Link, NavLink } from "react-router-dom";


const menuActive = (ID)=>{
    document.getElementById('home').classList.remove('bg-slate-900');
    document.getElementById('email').classList.remove('bg-slate-900');
    document.getElementById('calendar').classList.remove('bg-slate-900');
    document.getElementById('search').classList.remove('bg-slate-900');
    document.getElementById(ID).classList.add('bg-slate-900');
}

const settingSide = ()=>{
    document.getElementById('setting-side').classList.toggle('hidden');
    document.getElementById('setting-side').classList.toggle('w-fit');
    document.getElementById('setting-side').classList.toggle('w-0');
    document.getElementById('setting-side').classList.toggle('p-5');
    document.getElementById('profile-info').classList.toggle('hidden');
}

function Sidebar() {
    return ( 
    <>
    <div className="text-3xl text-white absolute sm:hidden bg-green-900 w-12 h-12 flex justify-center items-center rounded-full" onClick={()=>document.getElementById('sidebar').classList.toggle('hidden')}><FontAwesomeIcon icon={faBars} /></div>
    <div className="w-28 sm:h-full bg-green-900 rounded-2xl sm:flex items-center justify-between flex-col hidden" id="sidebar">
        <div className="flex flex-col justify-center items-center">
            <NavLink to='/'><div className="text-white mt-10 text-3xl p-3 flex rounded-full cursor-pointer bg-slate-900" onClick={()=>menuActive('home')} id="home"><FontAwesomeIcon icon={faHouse} /></div></NavLink>
            <NavLink to='Email'><div className="text-white mt-10 text-3xl p-3 flex rounded-full cursor-pointer" onClick={()=>menuActive('email')} id="email"><FontAwesomeIcon icon={faEnvelope} /></div></NavLink>
            <NavLink to='Calendar'><div className="text-white mt-10 text-3xl p-3 flex rounded-full cursor-pointer" onClick={()=>menuActive('calendar')} id="calendar"><FontAwesomeIcon icon={faCalendarDays} /></div></NavLink>
            <NavLink to='Search'><div className="text-white mt-10 text-3xl p-3 flex rounded-full cursor-pointer" onClick={()=>menuActive('search')} id="search"><FontAwesomeIcon icon={faMagnifyingGlass} /></div></NavLink>
        </div>
        <div className="text-white py-10 px-10 text-3xl cursor-pointer" onClick={settingSide}><FontAwesomeIcon icon={faGear} /></div>
    </div>
    </>
    );
}

export default Sidebar;