import React from "react";

import PriceViget from "./PriceViget";
import WriteBlog from "./WriteBlog";

function Home() {
    return ( 
        <div className="h-full mx-5 w-full">
            <div className="h-fit mb-5 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
                <PriceViget symbol='bitcoin'/>
                <PriceViget symbol='dogecoin'/>
                <PriceViget symbol='ethereum'/>
            </div>
            <WriteBlog/>
        </div>
     );
}

export default Home;