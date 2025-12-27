import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import styles from './WhatsAppWidget.module.css';

const WhatsAppWidget = () => {
    const phoneNumber = "919266730027"; // User provided number
    const message = "Hi SKY Filings, I would like to inquire about your services.";

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    return (
        <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.widget}
            aria-label="Chat on WhatsApp"
        >
            <FaWhatsapp className={styles.icon} />
            <span className={styles.tooltip}>Chat with us</span>
        </a>
    );
};

export default WhatsAppWidget;
