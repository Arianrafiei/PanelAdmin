import React, { PureComponent } from 'react';
import { LineChart, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend, Line } from 'recharts';
import {NavLink} from "react-router-dom";
import {sidebarActive} from "../pages/Sidebar";

const data = [
  {name: 'Jan', wallet: 200},
  {name: 'Feb', wallet: 200},
  {name: 'Mar', wallet: 100},
  {name: 'Apr', wallet: 300},
  {name: 'May', wallet: 200},
  {name: 'Jun', wallet: 200},
  {name: 'Jul', wallet: 100},
  {name: 'Aug', wallet: 300},
  {name: 'Sep', wallet: 200},
  {name: 'Oct', wallet: 200},
  {name: 'Nov', wallet: 100},
  {name: 'Dec', wallet: 300},
];

function ReviewTheWallet() {
  return (
    <div className="review-the-wallet">
      <h3>Review the wallet</h3>
      <h4 className="price-in-wallet">
        $11,548.50
        <span>+25%</span>
        <NavLink to='SalesStatistic' id='links' onClick={()=>{sidebarActive("sales-statistic"); document.cookie = 'sidebarSelected = sales-statistic'}}>
          See more
        </NavLink>
      </h4>
      <div style={{ width: '100%', height: 300 }}>
        <ResponsiveContainer>
          <LineChart
            data={data}
            margin={{
              top: 15,
              right: 20,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="wallet" stroke="#8884d8" activeDot={{ r: 8 }} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default ReviewTheWallet;

// used in Dashbord.jsx