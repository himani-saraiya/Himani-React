import React, { useState } from 'react';

const Forminputs = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
    });

    const [errors, setErrors] = useState({
        name: '',
        email: '',
        password: '',
    });

    // Handle form field changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        // Perform validation before submitting
        if (validateForm()) {
            // Do something with the form data, like submitting to a server
            console.log(formData);
        }
    };

    // Form validation function
    const validateForm = () => {
        let valid = true;
        const newErrors = {
            name: '',
            email: '',
            password: '',
        };

        // Validate name
        if (formData.name.trim() === '') {
            newErrors.name = 'Name is required';
            valid = false;
        }

        // Validate email
        if (!formData.email.match(/^\S+@\S+\.\S+$/)) {
            newErrors.email = 'Invalid email format';
            valid = false;
        }

        // Validate password
        if (formData.password.length < 6) {
            newErrors.password = 'Password must be at least 6 characters long';
            valid = false;
        }

        // Set the new validation errors
        setErrors(newErrors);
        return valid;
    };

    return (
        <form onSubmit={handleSubmit}>
            {/* Input fields */}
            <div>
                <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Name"
                />
                {errors.name && <span>{errors.name}</span>}
            </div>
            <div>
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email"
                />
                {errors.email && <span>{errors.email}</span>}
            </div>
            <div>
                <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Password"
                />
                {errors.password && <span>{errors.password}</span>}
            </div>

            {/* Add more fields as needed */}

            {/* Submit button */}
            <button type="submit">Submit</button>
        </form>
    );
};

export default Forminputs;
