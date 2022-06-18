import React from 'react';

export const Spinner = ({ text = '', size = '5em' }) => (
  <div className="spinner">
    {text ? <h4>{text}</h4> : null}
    <div className="loader" style={{ height: size, width: size }} />
  </div>
);
