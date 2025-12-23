import React from 'react';
import styles from './ContactForm.module.css';

const ContactForm = ({ serviceName = '' }) => {
    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);

        const data = {
            name: formData.get('name'),
            email: formData.get('email'),
            mobile: formData.get('mobile'),
            service: formData.get('service'),
            message: formData.get('message')
        };

        const whatsappMessage = `*New Inquiry from Website*
        
*Name:* ${data.name}
*Email:* ${data.email}
*Mobile:* ${data.mobile}
*Service Interest:* ${data.service}
*Message:* ${data.message}`;

        const phoneNumber = "919266730027";
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`;

        window.open(whatsappUrl, '_blank');
        e.target.reset();
    };

    return (
        <div className={styles.formContainer}>
            <form className={styles.form} onSubmit={handleSubmit}>
                <h2>{serviceName ? `Inquire about ${serviceName}` : 'Send us a Message'}</h2>
                <div className={styles.group}>
                    <label>Name</label>
                    <input name="name" type="text" placeholder="Your Name" required />
                </div>
                <div className={styles.group}>
                    <label>Email</label>
                    <input name="email" type="email" placeholder="Your Email" required />
                </div>
                <div className={styles.group}>
                    <label>Mobile Number</label>
                    <input name="mobile" type="tel" placeholder="Your Mobile Number" required pattern="[0-9]{10}" title="Please enter a valid 10-digit mobile number" />
                </div>
                <div className={styles.group}>
                    <label>Service Interest</label>
                    <select name="service" defaultValue={serviceName || "General Inquiry"}>
                        <option>General Inquiry</option>
                        <option>Corporate Retainer</option>
                        <option>Project / Transaction</option>
                        <option>Individual / NRI Services</option>
                        {serviceName && <option value={serviceName}>{serviceName}</option>}
                    </select>
                </div>
                <div className={styles.group}>
                    <label>Message</label>
                    <textarea
                        name="message"
                        rows="4"
                        placeholder={serviceName ? `Hi, I'm interested in ${serviceName}...` : "How can we help you?"}
                        required
                    ></textarea>
                </div>
                <button type="submit" className={styles.submitBtn}>Send via WhatsApp</button>
            </form>
        </div>
    );
};

export default ContactForm;
