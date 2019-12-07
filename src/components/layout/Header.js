import React from 'react';
import LogoIcon from '../../svg/LogoIcon';
import Button from '../Button';

const Header = () => (
  <header className="sticky top-0 bg-white shadow">
    <div className="container flex items-center mx-auto py-4 px-8">
      <div className="flex items-center text-2xl">
        <div className="w-12 mr-3">
          <LogoIcon />
        </div>
        Logo
      </div>
      <div className="ml-12">Links</div>
      <div className="ml-auto">
        <Button className="text-sm">Start Free Trial</Button>
      </div>
    </div>
  </header>
);

export default Header;
