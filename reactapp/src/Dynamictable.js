import React, { useState } from 'react';

const Dynamictable = () => {
  const [formFields, setFormFields] = useState([
    { name: 'name', value: '', type: 'text', placeholder: 'Name', error: '' },
    { name: 'email', value: '', type: 'email', placeholder: 'Email', error: '' },
    { name: 'password', value: '', type: 'password', placeholder: 'Password', error: '' },
    // Add more fields as needed
  ]);

  // Handle form field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormFields((prevFormFields) =>
      prevFormFields.map((field) =>
        field.name === name ? { ...field, value } : field
      )
    );
  };

  // Form validation function
  const validateForm = () => {
    let valid = true;
    const newFormFields = formFields.map((field) => {
      const newField = { ...field, error: '' };
      // Validate name
      if (field.name === 'name' && field.value.trim() === '') {
        newField.error = 'Name is required';
        valid = false;
      }

      // Validate email
      if (field.name === 'email' && !field.value.match(/^\S+@\S+\.\S+$/)) {
        newField.error = 'Invalid email format';
        valid = false;
      }

      if (field.name === 'password' && field.value.length < 6) {
        newField.error = 'Password must be at least 6 characters long';
        valid = false;
      }

      return newField;
    });

    setFormFields(newFormFields);
    return valid;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log(formFields);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <table>
        <tbody>
          {formFields.map((field) => (
            <tr key={field.name}>
              <td>
                <label htmlFor={field.name}>{field.placeholder}</label>
              </td>
              <td>
                <input
                  type={field.type}
                  id={field.name}
                  name={field.name}
                  value={field.value}
                  onChange={handleChange}
                />
                {field.error && <span>{field.error}</span>}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button type="submit">Submit</button>
    </form>
  );
};

export default Dynamictable;
