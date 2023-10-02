import React, { useState } from 'react';

const FormDis = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");

  const handleInputChange = (e) => {
    if (e.target.name === "username") {
      setUsername(e.target.value);
    } else if (e.target.name === "email") {
      setEmail(e.target.value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your submission logic here
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="username"
        value={username}
        onChange={handleInputChange}
        placeholder="Username"
      />
      <input
        type="email"
        name="email"
        value={email}
        onChange={handleInputChange}
        placeholder="Email"
      />
      <button type="submit" disabled={username === "" || email === ""}>
        Submit
      </button>
    </form>
  );
};

export default FormDis;
