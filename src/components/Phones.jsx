// import React from 'react';

import { Link, useLoaderData } from "react-router-dom";

const Phones = () => {
    const data =useLoaderData()
    // console.log(data)
    return (
        <div>
            <h2>All Phones here:{data.length} </h2>
            {
                data.map(phone=><li key={phone.id}><Link to={`/phones/${phone.id}`}>{phone.name}</Link></li>)
            }
        </div>
    );
};

export default Phones;