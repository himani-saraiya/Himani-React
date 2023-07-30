import React, { useState } from 'react';

const TransactionForm = ({ onAddTransaction }) => {
  const [amount, setAmount] = useState('');
  const [type, setType] = useState('');
  const [remark, setRemark] = useState('');

  const addTransaction = () => {
    if (amount !== '' && type !== '' && remark !== '') {
      onAddTransaction({ amount, type, remark });
      setType('');
      setAmount('');
      setRemark('');
    }
    
  };

  return (
    <>
      <input
        type='number'
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <select value={type} onChange={(e) => setType(e.target.value)}>
        <option value=''>Choose type</option>
        <option value='income'>Income</option>
        <option value='expense'>Expense</option>
      </select>
      <input
        type='text'
        value={remark}
        onChange={(e) => setRemark(e.target.value)}
      />
      <button
        onClick={addTransaction}
        disabled={amount === '' || type === '' || remark === ''}
      >
        Save
      </button>
    </>
  );
};

export default TransactionForm;
