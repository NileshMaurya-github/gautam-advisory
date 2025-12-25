import React from 'react';
import styles from './HeroContactForm.module.css';
import { FaPaperPlane } from 'react-icons/fa';

const HeroContactForm = ({ serviceName = 'General Inquiry' }) => {
    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);

        const data = {
            name: formData.get('name'),
            mobile: formData.get('mobile'),
            service: serviceName
        };

        const whatsappMessage = `*New Inquiry via Website Form*
        
*Name:* ${data.name}
*Mobile:* ${data.mobile}
*Service:* ${data.service}`;

        const phoneNumber = "919266730027";
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`;

        console.log("Opening WhatsApp:", whatsappUrl); // Debug log
        window.open(whatsappUrl, '_blank');
        e.target.reset();
    };

    return (
        <div className={styles.formCard}>
            <h3>Get a Call Back</h3>
            <p>Fill form and get expert advice.</p>
            <form onSubmit={handleSubmit}>
                <div className={styles.inputGroup}>
                    <input name="name" type="text" placeholder="Your Name" required />
                </div>
                <div className={styles.inputGroup}>
                    <input name="mobile" type="tel" placeholder="Mobile Number (+91)" required pattern="[0-9]{10}" />
                </div>
                <button type="submit" className={styles.submitBtn}>
                    <FaPaperPlane style={{ marginRight: '8px' }} /> Request Callback
                </button>
            </form>
        </div>
    );
};

export default HeroContactForm;
