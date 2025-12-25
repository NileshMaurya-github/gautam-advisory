import React from 'react';
import { motion } from 'framer-motion';
import { FaBalanceScale, FaChartLine, FaHandshake, FaUserShield } from 'react-icons/fa';
import styles from './About.module.css';

const About = () => {
    return (
        <div className={styles.page}>
            {/* Hero Section */}
            <section className={styles.hero}>
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className={styles.heroContent}
                    >
                        <h1>Architects of Financial Stability</h1>
                        <p>We are a premier advisory firm blending traditional expertise with modern financial intelligence.</p>
                    </motion.div>
                </div>
            </section>

            {/* Our Story */}
            <section className={styles.storySection}>
                <div className="container">
                    <div className={styles.storyGrid}>
                        <div className={styles.storyContent}>
                            <h2>Our Story</h2>
                            <p>Founded with a vision to simplify the complex regulatory landscape of India, Delhi Filings has grown from a boutique consultancy to a full-service advisory powerhouse.</p>
                            <p>We recognized early on that businesses don't just need a tax filer; they need a strategic partner who understands the intersection of law, finance, and growth.</p>
                        </div>
                        <div className={styles.storyVisual}>
                            <div className={styles.visualCard}>
                                <h3>10+</h3>
                                <p>Years of Excellence</p>
                            </div>
                            <div className={styles.visualCard}>
                                <h3>500+</h3>
                                <p>Clients Served</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Values */}
            <section className={styles.valueSection}>
                <div className="container">
                    <h2 className={styles.sectionTitle}>Why Choose Us</h2>
                    <div className={styles.valueGrid}>
                        <motion.div className={styles.valueCard} whileHover={{ y: -5 }}>
                            <FaUserShield className={styles.icon} />
                            <h3>Integrity First</h3>
                            <p>We believe in absolute transparency. No hidden fees, no ambiguous advice.</p>
                        </motion.div>
                        <motion.div className={styles.valueCard} whileHover={{ y: -5 }}>
                            <FaChartLine className={styles.icon} />
                            <h3>Growth Focus</h3>
                            <p>Our compliance strategies are designed to facilitate your business expansion, not just meet legal requirements.</p>
                        </motion.div>
                        <motion.div className={styles.valueCard} whileHover={{ y: -5 }}>
                            <FaBalanceScale className={styles.icon} />
                            <h3>Legal Precision</h3>
                            <p>With a team of CAs and CSs, we ensure every filing stands up to regulatory scrutiny.</p>
                        </motion.div>
                        <motion.div className={styles.valueCard} whileHover={{ y: -5 }}>
                            <FaHandshake className={styles.icon} />
                            <h3>Personalized Service</h3>
                            <p>You get a dedicated account manager who knows your business inside out.</p>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
