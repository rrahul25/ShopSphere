import React from 'react';
import HeroComponent from '../Hero/HeroComponent';
import PopularComponent from '../Popular/PopularComponent';
import OffersComponent from '../Offers/OffersComponent';
import NewCollectionsComponent from '../NewCollections/NewCollectionsComponent';
import NewsLetterComponent from '../NewsLetter/NewsLetterComponent'

const Shop = () => {
    return (
        <div className="shop">
            <HeroComponent />
            <PopularComponent />
            <OffersComponent />
            <NewCollectionsComponent />
            <NewsLetterComponent/>
        </div>
    );
};

export default Shop;
