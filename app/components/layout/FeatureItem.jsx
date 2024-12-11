import React from 'react';

const FeatureItem = ({ imageSrc, title, description }) => {
    return (
        <div className="flex gap-x-2 mt-5 xl:mt-0">
            <img src={imageSrc} alt={title} className="w-10" />
            <div>
                <h6 className="font-inter font-normal text-base text-secondary-black">{title}</h6>
                <p className="font-dmSans font-normal text-sm text-third-black">{description}</p>
            </div>
        </div>
    );
};

export default FeatureItem;
