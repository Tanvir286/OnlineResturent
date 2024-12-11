import Image from 'next/image';
import React from 'react';

import Banner from "../app/components/section/Banner.jsx"
import Shop from "../app/components/section/Shop.jsx"
import Product from "../app/components/layout/Product.jsx"


export default function Home() {
  return (
    <div className=''>
       <Banner />
       <Shop/>
       <Product/>
    </div>
  );
}
 