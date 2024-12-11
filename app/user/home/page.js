import React from 'react';
import Banner from "../../components/section/Banner.jsx"
import Shop from './../../components/section/Shop.jsx';
import Product from './../../components/layout/Product';


const page = () => {
    return (
        <div>
             <Banner />
             <Shop/>
             <Product/>
        </div>
    );
};

export default page;