import React from 'react';

const cellStyles = {
  backgroundColor: 'white',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

export const Cell = ({ value, onToggle, index }) => {
  return (
    <button onClick={() => onToggle(index)} style={cellStyles}>
      {value}
    </button>
  );
};
