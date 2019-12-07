import React from 'react';

const CustomerCard = ({ customer }) => (
  <div
    className="p-12 rounded-lg"
    style={{
      boxShadow: '0 10px 28px rgba(0,0,0,.08)'
    }}
  >
    <p className="text-xl font-semibold">{customer.title}</p>
    <p className="mt-6">{customer.content}</p>
    <div className="flex items-center mt-8">
      <img
        className="w-12 h-12 mr-4 rounded-full"
        src={customer.customerImage}
        alt={customer.customerName}
      />
      <div>
        <p>{customer.customerName}</p>
        <p className="text-sm text-gray-600">{customer.customerTitle}</p>
      </div>
    </div>
  </div>
);

export default CustomerCard;
