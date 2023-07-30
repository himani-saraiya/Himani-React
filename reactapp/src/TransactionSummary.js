import React from 'react';

const TransactionSummary = ({ transactions }) => {
  const getSummary = () => {
    const summary = {
      expense: 0,
      income: 0,
    };

    transactions.forEach((el) => {
      const { amount } = el;

      if (el.type === 'income') {
        summary.income += parseInt(amount);
      } else {
        summary.expense += parseInt(amount);
      }
    });

    return summary;
  };

  return (
    <>
      <p>Total Income: {getSummary().income}</p>
      <p>Total Expense: {getSummary().expense}</p>
      <p>Balance: {getSummary().income - getSummary().expense}</p>
    </>
  );
};

export default TransactionSummary;
