import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import styles from './Hero.module.css';
import TrustVisual from './TrustVisual';

const Hero = () => {
    return (
        <section className={styles.hero}>
            <div className={styles.container}>
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className={styles.content}
                >
                    <div className={styles.ticker}>
                        <span className={styles.pulse}></span> Tax Filing Deadline: July 31st
                    </div>
                    <span className={styles.tagline}>Corporate Excellence</span>
                    <h1 className={styles.title}>
                        Advisory for the <br />
                        <span className={styles.highlight}>Modern Era</span>
                    </h1>
                    <p className={styles.subtitle}>
                        Navigate complex financial landscapes with strategic precision.
                        We blend traditional CA/CS expertise with next-gen financial intelligence.
                    </p>
                    <div className={styles.actions}>
                        <Link to="/services" className={styles.primaryBtn}>Our Solutions</Link>
                        <Link to="/contact" className={styles.secondaryBtn}>Schedule Consult</Link>
                    </div>
                </motion.div>

                <motion.div
                    className={styles.visual}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, delay: 0.2 }}
                >
                    <TrustVisual />
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
