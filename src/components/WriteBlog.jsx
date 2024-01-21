import React from "react";

function WriteBlog() {
    return (
        <>
        <div className="bg-green-900 rounded-2xl w-full grid grid-cols-1 gap-5 p-5 md:grid-cols-3">
            <div className="col-span-2 grid grid-cols-2 gap-5">
                <input type="text" className="col-span-1 h-10"/>
                <input type="text" className="col-span-1 h-10"/>
                <textarea name="" id="" cols="30" rows="10" className="col-span-2"></textarea>
            </div>
            <div className="col-span-1 flex flex-col justify-center items-center">
                <input type="file" />
                <input type="submit" className="bg-slate-900 text-white p-5 m-5"/>
            </div>
        </div>
        </>
    );
}

export default WriteBlog;