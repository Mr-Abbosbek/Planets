import React from 'react';

function MyButton(props) {
  return (
    <button {...props} className="btn-all shadow-none"></button>
  );
}

export default MyButton;