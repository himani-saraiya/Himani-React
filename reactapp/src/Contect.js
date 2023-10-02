import React, { useState } from 'react';

const Contact = () => {
  const [number, setNumber] = useState("");
  const [name, setName] = useState("");
  const [contacts, setContacts] = useState([]);

  const add = () => {
    if (number !== "" && name !== "") {
      if (number.length !== 10) {
        alert("Please check once");
        return;
      }
      setContacts([...contacts, { name, number}]);
      setName("");
      setNumber("");
    }
  };

  const deleteContact = (ind) => {
    const updatedContacts = [...contacts];
    updatedContacts.splice(ind, 1);
    setContacts(updatedContacts);
  };  

  return (
    <>
      <input
        type='number'
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <input
        type='text'
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={add} disabled={number === "" || name === ""}>Save</button>

      <table width="100%" border={1}>
        <thead>
          <tr style={{ border: '1px solid black' }}>
            <th>Name</th>
            <th>Number</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody style={{ border: '1px solid black' }}>
          {contacts.map((contact, index) => (
            <tr key={index} style={{ border: '1px solid black' }}>
              <td>{contact.name}</td>
              <td>{contact.number}</td>
              <td><button onClick={() => deleteContact(index)}>Delete</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Contact;
