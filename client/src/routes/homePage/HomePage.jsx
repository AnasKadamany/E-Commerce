import React from 'react';
import { Divider } from '@mui/material';
import './homepage.scss';

const HomePage = () => {
  return (
    <div className="homePageContainer">
      <div className="categoryHeaderContainer">
        <div className="CategoryHeader">
          <p>Woman’s Fashion</p>
          <p>Men’s Fashion</p>
          <p>Electronics</p>
          <p>Home & Lifestyle</p>
          <p>Medicine</p>
          <p>Sports & Outdoor</p>
          <p>Baby’s & Toys</p>
          <p>Groceries & Pets</p>
          <p>Health & Beauty</p>
        </div>
        {/* Material-UI Divider */}
        <Divider
        orientation="vertical"
        flexItem
        sx={{ borderColor: 'gray', borderWidth: '1px', margin: '0 16px' }}
        />
        <div className="heroImgContainer">
          <img src="/homepage/Frame.png" alt="Hero" />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
