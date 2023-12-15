import { useState } from 'react';
import axios from 'axios';
import '../styles/Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [formErrors, setFormErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const sendEmail = async () => {
        const API_KEY = '34800f41ff0b4061beaa2c91cbad3f9f';
        const API_URL = 'https://email.abstractapi.com/v1/';

        try {
            const response = await axios.post(API_URL, {
                api_key: API_KEY,
                from: 'your.email@example.com',
                to: formData.email,
                subject: `New message from ${formData.name}`,
                body: formData.message
            });
            console.log('Email sent successfully', response.data);
            // Add any post-email sending actions here (like showing a success message)
        } catch (error) {
            console.error('Error sending email', error);
            // Handle email sending errors here
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const errors = validateForm();
        if (Object.keys(errors).length === 0) {
            sendEmail(); // Send email using the API
        } else {
            setFormErrors(errors);
        }
    };

    const validateForm = () => {
        let errors = {};
        if (!formData.name) errors.name = 'Name is required';
        if (!formData.email) {
            errors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            errors.email = 'Email address is invalid';
        }
        if (!formData.message) errors.message = 'Message is required';
        return errors;
    };

    return (
        <div className="contact-form">
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input 
                        type="text" 
                        id="name" 
                        name="name" 
                        value={formData.name} 
                        onChange={handleChange} 
                        onBlur={() => setFormErrors(validateForm())}
                    />
                    {formErrors.name && <p className="error">{formErrors.name}</p>}
                </div>

                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input 
                        type="email" 
                        id="email" 
                        name="email" 
                        value={formData.email} 
                        onChange={handleChange} 
                        onBlur={() => setFormErrors(validateForm())}
                    />
                    {formErrors.email && <p className="error">{formErrors.email}</p>}
                </div>

                <div className="form-group">
                    <label htmlFor="message">Message:</label>
                    <textarea 
                        id="message" 
                        name="message" 
                        value={formData.message} 
                        onChange={handleChange} 
                        onBlur={() => setFormErrors(validateForm())}
                    ></textarea>
                    {formErrors.message && <p className="error">{formErrors.message}</p>}
                </div>

                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default Contact;

