import React from "react";
import "./pages style/Sidebar.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse , faChartPie ,faBasketShopping ,faNoteSticky ,faWallet,faGear,faCircleQuestion,faArrowRightFromBracket} from '@fortawesome/free-solid-svg-icons'
import {NavLink} from "react-router-dom";
import { useEffect } from "react";


export function sidebarActive(id) {
    document.getElementById('dasbord').classList.remove('active');    
    document.getElementById('sales-statistic').classList.remove('active');    
    document.getElementById('product').classList.remove('active');    
    document.getElementById('order-history').classList.remove('active');    
    document.getElementById('wallet').classList.remove('active');    
    document.getElementById(id).classList.add('active');
}

function Sidebar() {

    useEffect(()=>{
        let cookies = document.cookie
        .split(';')
        .map(cookie => cookie.split('='))
        .reduce((accumulator,[key,value])=>({...accumulator,[key.trim()]: decodeURIComponent(value)}))[1];
        
        console.log(cookies); //! testing

        if(cookies === undefined){
            // in start doesn't have cookise so by this conditional we fixed it.
        }else{
            document.getElementById('dasbord').classList.remove('active');    
            document.getElementById('sales-statistic').classList.remove('active');    
            document.getElementById('product').classList.remove('active');    
            document.getElementById('order-history').classList.remove('active');    
            document.getElementById('wallet').classList.remove('active');    
            document.getElementById(cookies).classList.add('active');
        }
    })

    return ( 
        <>
            <div className="navigation">
                <ul>
                    <li className="list active" id="dasbord" onClick={()=>{sidebarActive("dasbord"); document.cookie = 'sidebarSelected = dasbord';}}>
                        <b></b>
                        <b></b>
                        <NavLink to='/'>
                            <span className="icon"><FontAwesomeIcon icon={faHouse} /></span>
                            <span className="title">Dasbord</span>
                        </NavLink>
                    </li>
                    <li className="list" id="sales-statistic" onClick={()=>{sidebarActive("sales-statistic"); document.cookie = 'sidebarSelected = sales-statistic';}}>
                        <b></b>
                        <b></b>
                        <NavLink to='SalesStatistic'>
                            <span className="icon"><FontAwesomeIcon icon={faChartPie} /></span>
                            <span className="title">Sales Statistic</span>
                        </NavLink>
                    </li>
                    <li className="list" id="product" onClick={()=>{sidebarActive("product"); document.cookie = 'sidebarSelected = product';}}>
                        <b></b>
                        <b></b>
                        <NavLink to='Product'>
                            <span className="icon"><FontAwesomeIcon icon={faBasketShopping} /></span>
                            <span className="title">Product</span>
                        </NavLink>
                    </li>
                    <li className="list" id="order-history" onClick={()=>{sidebarActive("order-history"); document.cookie = 'sidebarSelected = order-history';}}>
                        <b></b>
                        <b></b>
                        <NavLink to='OrderHistory'>
                            <span className="icon"><FontAwesomeIcon icon={faNoteSticky} /></span>
                            <span className="title">Order History</span>
                        </NavLink>
                    </li>
                    <li className="list" id="wallet" onClick={()=>{sidebarActive("wallet"); document.cookie = 'sidebarSelected = wallet';}}>
                        <b></b>
                        <b></b>
                        <NavLink to='Wallet'>
                            <span className="icon"><span className="icon"><FontAwesomeIcon icon={faWallet} /></span></span>
                            <span className="title">Wallet</span>
                        </NavLink>
                    </li>
                </ul>
            </div>
        </>
     );
}

export default Sidebar;