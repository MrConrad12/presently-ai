import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import "./css/support_page.css";

const SupportPage = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleFormChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        emailjs.send('service_3e2916a', 'template_q84ph78', formData, 'JJuNx0Qy5oX3kee8a')
            .then((result) => {
                alert('Thank you for your message. Our support team will get back to you soon!');
                setFormData({
                    name: '',
                    email: '',
                    subject: '',
                    message: ''
                });
            }, (error) => {
                console.error('Error sending email:', error);
                alert('There was an error sending your message. Please try again later.');
            })
            .finally(() => {
                setIsSubmitting(false);
            });
    };



    return (
        <div>
            <header>
                <h1>Support Center</h1>
            </header>

            <div className="container">
                <h2>Get Help with Presently AI</h2>
                <div className="support-grid">
                    <div className="support-card">
                        <h3>Using Presently AI</h3>
                        <p>Get tips on utilizing Presently AI’s features, including content generation and presentation customization.</p>
                    </div>
                    <div className="support-card">
                        <h3>Technical Issues</h3>
                        <p>Solutions for common technical problems, system requirements, and troubleshooting tips.</p>
                    </div>
                </div>

                <h2>Contact Us</h2>
                <div className="contact-form">
                    <form id="support-form" onSubmit={handleFormSubmit}>
                        <div className="form-group">
                            <label htmlFor="name">Name:</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleFormChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email:</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleFormChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="subject">Subject:</label>
                            <input
                                type="text"
                                id="subject"
                                name="subject"
                                value={formData.subject}
                                onChange={handleFormChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Message:</label>
                            <textarea
                                id="message"
                                name="message"
                                rows="5"
                                value={formData.message}
                                onChange={handleFormChange}
                                required
                            ></textarea>
                        </div>
                        <button type="submit" disabled={isSubmitting}>
                            {isSubmitting ? 'Sending...' : 'Send Message'}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SupportPage;
