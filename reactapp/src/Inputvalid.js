import React, { useState } from 'react';

const Inputvalid = () => {
  const [value, setValue] = useState('');
  const [valid, setValid] = useState(false);

  const handleBtn = (e) => {
    const inputValue = e.target.value;
    // Use regular expression to remove any non-digit characters from the input
    const numericValue = inputValue.replace(/\D/g, '');
    setValue(numericValue);
    setValid(numericValue.length === 10);
  };

  return (
    <input
      type='text' // Use type 'text' to handle the validation correctly
      maxLength={10}
      value={value}
      onChange={handleBtn}
      style={
        valid
          ? { border: '2px solid green' }
          : { border: '2px solid red' }
      }
    />
  );
};

export default Inputvalid;
