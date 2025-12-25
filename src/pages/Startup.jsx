import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaRocket, FaHandshake, FaChartLine } from 'react-icons/fa';
import ContactForm from '../components/ContactForm';
import styles from './Startup.module.css';

const Startup = () => {
    return (
        <div className={styles.pageContainer}>
            {/* Hero Section */}
            <section className={styles.hero}>
                <div className={styles.heroContent}>
                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        Launch Your Startup with Confidence
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        From incorporation to compliance, we handle the legalities so you can focus on growth.
                        India's most trusted platform for new ventures.
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        <Link to="#contact" className={styles.ctaButton}>Get Started Now</Link>
                    </motion.div>
                </div>
            </section>

            {/* Services Overview */}
            <section className={styles.servicesExample}>
                <div className="container">
                    <h2>Everything You Need to Start</h2>
                    <div className={styles.cardGrid}>
                        <div className={styles.card}>
                            <FaRocket className={styles.icon} />
                            <h3>Registration</h3>
                            <p>Proprietorship, Partnership, LLP, or Pvt Ltd - we guide you to the right choice.</p>
                            <Link to="/startup/proprietorship">Explore Options &rarr;</Link>
                        </div>
                        <div className={styles.card}>
                            <FaHandshake className={styles.icon} />
                            <h3>Compliance</h3>
                            <p>GST, MSME, and Shop Act registrations to keep you legally compliant from Day 1.</p>
                        </div>
                        <div className={styles.card}>
                            <FaChartLine className={styles.icon} />
                            <h3>Growth</h3>
                            <p>Pitch decks, business plans, and fundraising support for scaling up.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className={styles.contactSection}>
                <div className={styles.formContainer}>
                    <h2>Talk to a Startup Expert</h2>
                    <p>Fill out the form below and we'll call you back within 24 hours.</p>
                    <ContactForm />
                </div>
            </section>
        </div>
    );
};

export default Startup;
