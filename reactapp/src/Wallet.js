import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Wallet = () => {
  // console.log("this function is executed || component re-rendered")
  const [amount, setAmount] = useState("")
  const [type, setType] = useState("")
  const [remark, setRemark] = useState("")

  const [editId, setEditId] = useState(null)

  const [transactions, setTransactions] = useState([])

  const notify = (msg) => toast.error(msg);


  const saveTxn = () => {

    if (amount == "" || type == "" || remark == "") return

    const { income, expense } = getSummary()
    const balance = income - expense

    if (type === "expense" && amount > balance) {
      notify("invalid transaction")
      return
    }

    if (editId != null) {
      const newTxn = transactions.map(el => {
        if (el.id === editId) {
          return { ...el, remark, amount, type }
        }

        return el
      })

      setTransactions(newTxn)
      setEditId(null)
      setAmount("")
      setRemark("")
      setType("")

      return
    }

    const newTxn = {
      amount: amount,
      type: type,
      remark: remark,
      id: uuidv4()
    }

    setTransactions([...transactions, newTxn])
    setAmount("")
    setRemark("")
    setType("")

    console.log(transactions)
  }

  const handleDelete = (txnId) => {
    const newArr = transactions.filter((el, fInd) => el.id != txnId)
    setTransactions([...newArr])
  }

  const handleEdit = (txnId) => {
    const editData = transactions.find(el => el.id === txnId)
    console.log(editData)
    const { amount, type, remark, id } = editData

    setEditId(id)
    setAmount(amount)
    setType(type)
    setRemark(remark)
  }

  const getSummary = () => {
    const summary = {
      income: 0,
      expense: 0
    }

    transactions.forEach((el) => {
      const { amount } = el
      if (el.type === "income") {
        summary.income += parseInt(amount)
      } else {
        summary.expense += parseInt(amount)
      }
    })

    return summary
  }

  // console.log(getSummary())

  return (
    <div>
      <ToastContainer
        position="bottom-center"
      />
      
      <input
        type="number"
        value={amount}
        onChange={e => setAmount(e.target.value)}
      ></input>

      <select
        value={type}
        onChange={e => setType(e.target.value)}>
        <option value={""}>select type</option>
        <option >expense</option>
        <option >income</option>
      </select>

      <input type={"text"}
        value={remark}
        onChange={e => setRemark(e.target.value)}></input>

      <button onClick={saveTxn} disabled={amount == "" || type == "" || remark == ""}>
       {editId === null ? " Save Transaction" : "Update Transaction"}
        </button>

      <br />

      <table width={"100%"} border={1}>
        <thead>
          <tr>
            <th>Amount</th>
            <th>Type</th>
            <th>Remark</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {transactions.map((txn, ind) => {
            return (
              <tr key={ind}>
                <td>{txn.amount}</td>
                <td>{txn.type}</td>
                <td>{txn.remark}</td>
                <td>
                  <button onClick={() => handleDelete(txn.id)}>Delete</button>
                  <button onClick={() => handleEdit(txn.id)}>Edit</button>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>

      <p>Total Income : {getSummary().income} </p>
      <p>Total Expense : {getSummary().expense}</p>
      <p>Balance : {getSummary().income - getSummary().expense}</p>
    </div>
  )
}

export default Wallet


{/* <Form>
  <TxnTable></TxnTable>
  <Summary/> 
*/}


// Refactoring :: Splitting code into smallert pieces according to functionality