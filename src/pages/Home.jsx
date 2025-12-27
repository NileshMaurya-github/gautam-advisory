import React from 'react';
import Hero from '../components/Home/Hero';
import FeaturedServices from '../components/Home/FeaturedServices';
import LatestInsights from '../components/Home/LatestInsights';
import FAQSection from '../components/Home/FAQSection';
import { motion } from 'framer-motion';
import { FaUserShield, FaChartLine, FaHandshake } from 'react-icons/fa';
import styles from './Home.module.css';
import ProcessFlow from '../components/Home/ProcessFlow';
import Testimonials from '../components/Home/Testimonials';

const Home = () => {
    return (
        <div>
            <Hero />

            <section className={styles.trustSection}>
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center"
                    >
                        <h2 className={styles.sectionTitle}>Why Trust SKY Filings?</h2>
                        <p className={styles.sectionSubtitle}>We don't just file forms; we architect financial stability.</p>
                    </motion.div>

                    <div className={styles.trustGrid}>
                        <motion.div
                            className={styles.trustCard}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                        >
                            <FaUserShield className={styles.trustIcon} />
                            <h3>Dual Expertise</h3>
                            <p>Rare combination of Chartered Accountant & Company Secretary qualifications under one roof, ensuring 360° compliance.</p>
                        </motion.div>

                        <motion.div
                            className={styles.trustCard}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                        >
                            <FaChartLine className={styles.trustIcon} />
                            <h3>Strategic Precision</h3>
                            <p>Our financial models and project reports are crafted to meet the rigorous standards of bank credit managers and investors.</p>
                        </motion.div>

                        <motion.div
                            className={styles.trustCard}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                        >
                            <FaHandshake className={styles.trustIcon} />
                            <h3>Owner-Led Attention</h3>
                            <p>Every critical file is reviewed by our experts personally. You get the expertise of a partner, not an intern.</p>
                        </motion.div>
                    </div>
                </div>
            </section>

            <FeaturedServices />
            <ProcessFlow />
            <Testimonials />
            <LatestInsights />
            <FAQSection />
        </div>
    );
};

export default Home;
