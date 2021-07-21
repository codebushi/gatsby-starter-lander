import React from 'react';

const Footer = () => (
  <footer className="container mx-auto py-16 px-3 mt-48 mb-8 text-gray-800">
    <div className="flex -mx-3">
      <div className="flex-1 px-3">
        <h2 className="text-lg font-semibold">About Us</h2>
        <p className="mt-5">
          <p>Tanmu Project Management Services is a consultancy based in Dubai, United Arab Emirates.</p>
          <small>Copyright &copy; 2021 Tanmu Project Management Services. All rights reserved</small>
        </p>
      </div>
      <div className="flex-1 px-3">
        <h2 className="text-lg font-semibold">Important Links</h2>
        <ul className="mt-4 leading-loose">
          <li>
            <a href="">Terms &amp; Conditions</a>
          </li>
          <li>
            <a href="">Privacy Policy</a>
          </li>
        </ul>
      </div>
      <div className="flex-1 px-3">
        <h2 className="text-lg font-semibold">Contact Information</h2>
        <ul className="mt-4 leading-loose">
          <li>
            Email: <a href="mailto:info@tanmupms.com?Subject=Business%20Enquiry" target="_top">info@tanmupms.com</a>
          </li>
          <li>
            Phone: <a href="tel:+971506520495">+971506520495</a>
          </li>
        </ul>
      </div>
    </div>
  </footer>
);

export default Footer;
