
import React from 'react';

import BillingInfo from "../../components/section/BillingInfo"


const CheckOutPage = () => {
    return (
        <div className='bg-banner-white-all'>
         
            {/* Image part */}
            <img 
             src='/images/category/checkout.png' 
             alt="Cart Icon"  
            />
            {/* Image part */}
            <BillingInfo/>

        </div>
    );
};

export default CheckOutPage;