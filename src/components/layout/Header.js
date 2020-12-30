import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import LogoIcon from '../../svg/LogoIcon';
import Button from '../Button';
import Logo from '../../svg/logo.svg';

const Header = () => (
  <header className="sticky top-0 bg-white shadow">
    <div className="container flex flex-col sm:flex-row justify-between items-center mx-auto py-4 px-8">
      <div className="flex items-center text-2xl">
        <div className="w-12 mr-3">
          <img src={Logo} />
        </div>
        Chelsea PDX Construction
      </div>
      <div className="flex mt-4 sm:mt-0">
        <AnchorLink className="px-4 text-gray-600" href="#features">
          Features
        </AnchorLink>
        <AnchorLink className="px-4 text-gray-600" href="#services">
          Services
        </AnchorLink>
        <AnchorLink className="px-4 text-gray-600" href="#stats">
          Stats
        </AnchorLink>
        <AnchorLink className="px-4 text-gray-600" href="#testimonials">
          Testimonials
        </AnchorLink>
      </div>
    </div>
  </header>
);

export default Header;
