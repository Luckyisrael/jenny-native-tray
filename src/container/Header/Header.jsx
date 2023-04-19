import React from 'react';
import { images } from '../../constants';
import { SubHeading } from '../../components';
import './Header.css';

const Header = () => (
  <div className='app__header app__wrapper section__padding' id='home'>
    <div className="app__wrapper_info">
      <SubHeading title="Jenny's Native Tray" />
      <h2 className="app__header-h1">We are PHC Home Meal Plug</h2>
      <p className="p__opensans" style={{ margin: '2rem 0'}}>

      </p>
      <button type='button' className='custom__button'>Explore Menu</button>
    </div>

    <div className="app__wrapper_img">
      <img src={images.welcome} alt='header img' />
    </div>
  </div>
);

export default Header;
