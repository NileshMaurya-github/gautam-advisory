import React from 'react';
import { FaPhone, FaMapMarkerAlt, FaEnvelope, FaUserTie } from 'react-icons/fa';
import styles from './Contact.module.css';
import ContactForm from '../components/ContactForm';

const Contact = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Thank you for reaching out. We will get back to you shortly.');
    };

    return (
        <div className={styles.page}>
            <div className={`${styles.container} container`}>
                <div className={styles.grid}>
                    <div className={styles.info}>
                        <h1 className={styles.title}>Get in Touch</h1>
                        <p className={styles.subtitle}>
                            Ready to elevate your financial strategy? Contact us for a consultation.
                        </p>

                        <div className={styles.details}>
                            <div className={styles.item}>
                                <div className={styles.icon}><FaUserTie /></div>
                                <div>
                                    <h3>Gautam Mauya</h3>
                                    <p>Chartered Accountant & Company Secretary</p>
                                </div>
                            </div>

                            <div className={styles.item}>
                                <div className={styles.icon}><FaPhone /></div>
                                <div>
                                    <h3>Phone / WhatsApp</h3>
                                    <p><a href="tel:919266730027">+91 92667 30027</a></p>
                                </div>
                            </div>

                            <div className={styles.item}>
                                <div className={styles.icon}><FaMapMarkerAlt /></div>
                                <div>
                                    <h3>Office</h3>
                                    <p>Delhi, India</p>
                                </div>
                            </div>

                            <div className={styles.item}>
                                <div className={styles.icon}><FaEnvelope /></div>
                                <div>
                                    <h3>Email</h3>
                                    <p><a href="mailto:info@taxnyay.com">info@taxnyay.com</a></p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={styles.formContainer}>
                        {/* We use the reusable ContactForm here to ensure WhatsApp integration is consistent */}
                        <form className={styles.form} onSubmit={(e) => {
                            e.preventDefault();
                            const formData = new FormData(e.target);

                            const data = {
                                name: formData.get('name'),
                                email: formData.get('email'),
                                service: formData.get('service'),
                                message: formData.get('message')
                            };

                            const whatsappMessage = `*New Inquiry from Website*
                            
*Name:* ${data.name}
*Email:* ${data.email}
*Service Interest:* ${data.service}
*Message:* ${data.message}`;

                            const phoneNumber = "919266730027";
                            const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`;

                            window.open(whatsappUrl, '_blank');
                            e.target.reset();
                        }}>
                            <h2>Send us a Message</h2>
                            <div className={styles.group}>
                                <label>Name</label>
                                <input name="name" type="text" placeholder="Your Name" required />
                            </div>
                            <div className={styles.group}>
                                <label>Email</label>
                                <input name="email" type="email" placeholder="Your Email" required />
                            </div>
                            <div className={styles.group}>
                                <label>Service Interest</label>
                                <select name="service">
                                    <option>General Inquiry</option>
                                    <option>Corporate Retainer</option>
                                    <option>Project / Transaction</option>
                                    <option>Individual / NRI Services</option>
                                </select>
                            </div>
                            <div className={styles.group}>
                                <label>Message</label>
                                <textarea name="message" rows="4" placeholder="How can we help you?" required></textarea>
                            </div>
                            <button type="submit" className={styles.submitBtn}>Send via WhatsApp</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
