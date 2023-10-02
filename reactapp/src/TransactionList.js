import React from 'react';

const TransactionList = ({ transactions, onDelete, onEdit }) => {
  return (
    <table width='100%' border={1}>
      <thead>
        <tr>
          <th>Amount</th>
          <th>Type</th>
          <th>Remark</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        {transactions.map((txn, ind) => {
          return (
            <tr key={ind} style={{ border: '1px solid black' }}>
              <td>{txn.amount}</td>
              <td>{txn.type}</td>
              <td>{txn.remark}</td>
              <td>
                <button onClick={() => onDelete(ind)}>Delete</button>
                <button onClick={() => onEdit(ind)}>Edit</button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default TransactionList;
