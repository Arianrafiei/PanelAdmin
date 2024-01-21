import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPen } from '@fortawesome/free-solid-svg-icons';
import profile from "../media/profile.avif"
import { useState } from "react";



function SettingSide() {
    const changeProfileFunction = ()=>{
        const inputProfile = document.getElementById("changeProfile");
        setImgUrl(URL.createObjectURL(inputProfile.files[0]));
    }
    
    const changeUserNameFunction = (event)=>{
        setUserName(event.target.value);
    }

    const [imgUrl,setImgUrl] = useState(profile);
    const [userName,setUserName] = useState('Arian rafiei');

    return ( 
    <>
        <div className="sm:h-full bg-green-900 rounded-2xl sm:flex items-center justify-start flex-col w-0 duration-200 absolute sm:relative right-0 hidden" id="setting-side">
            <div><img src={imgUrl} alt="" className="rounded-full h-28 w-36" /></div>
            <div className="text-center hidden" id="profile-info">
                <h1 className="text-white mt-2 text-lg">{userName}</h1>
                <h2 className="text-white text-sm">@ArianRafiei</h2>
                <div className="text-white cursor-pointer" onClick={()=>document.getElementById('edit-profile').classList.toggle('hidden')}><FontAwesomeIcon icon={faPen} /></div>
            </div>
        </div>

        <div className="z-50 w-1/2 h-1/2 bg-green-900 p-5 rounded-3xl absolute mx-[25%] hidden" id="edit-profile">
            <div><img src={imgUrl} alt="" className="rounded-full h-28 w-28" /></div>
            <input type="file" id="changeProfile" onChange={changeProfileFunction}/>
            <div className="flex mt-20">
                <label htmlFor="UserName" className="text-white mr-2">Name:</label>
                <input type="text" name="UserName" id="changeUserName" onChange={changeUserNameFunction}/>
            </div>
        </div>
    </>
    );
}

export default SettingSide;