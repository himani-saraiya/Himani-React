import React, { useState } from 'react';
import TransactionForm from './TransactionForm';
import TransactionList from './TransactionList';
import TransactionSummary from './TransactionSummary';

const Todo = () => {
  const [transactions, setTransactions] = useState([]);

  const addTransaction = (newTransaction) => {
    setTransactions([...transactions, newTransaction]);
  };

  const handleDeleteBtn = (ind) => {
    const updatedTransactions = [...transactions];
    updatedTransactions.splice(ind, 1);
    setTransactions(updatedTransactions);
  };

  const handleEdit = (txnId) => {
    const editData = transactions.find((el, index) => index === txnId);
    console.log(editData);
  };

  return (
    <>
      <TransactionForm onAddTransaction={addTransaction} />
      <TransactionList
        transactions={transactions}
        onDelete={handleDeleteBtn}
        onEdit={handleEdit}
      />
      <TransactionSummary transactions={transactions} />
    </>
  );
};

export default Todo;
