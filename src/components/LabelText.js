import React from 'react';

const LabelText = ({ children, className = '' }) => (
  <p className={`uppercase tracking-wider ${className}`}>{children}</p>
);

export default LabelText;
