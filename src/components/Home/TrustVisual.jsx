import React from 'react';
import { motion } from 'framer-motion';
import { FaShieldAlt, FaChartLine, FaUsers, FaCheckCircle } from 'react-icons/fa';
import styles from './TrustVisual.module.css';

const StatCard = ({ icon, label, value, delay }) => (
    <motion.div
        className={styles.statCard}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: delay, duration: 0.5 }}
    >
        <div className={styles.iconCircle}>{icon}</div>
        <div className={styles.statContent}>
            <h3>{value}</h3>
            <p>{label}</p>
        </div>
    </motion.div>
);

const TrustVisual = () => {
    return (
        <div className={styles.visualContainer}>
            {/* Main Central Card */}
            <motion.div
                className={styles.mainCard}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8 }}
            >
                <div className={styles.pulseRing}></div>
                <FaShieldAlt className={styles.shieldIcon} />
                <h2>Trusted Advisory</h2>
                <div className={styles.verifiedBadge}>
                    <FaCheckCircle /> 100% Compliant
                </div>
            </motion.div>

            {/* Floating Stats */}
            <div className={styles.statsGrid}>
                <StatCard
                    icon={<FaUsers />}
                    value="500+"
                    label="Active Clients"
                    delay={0.2}
                />
                <StatCard
                    icon={<FaChartLine />}
                    value="98%"
                    label="Success Rate"
                    delay={0.4}
                />
            </div>

            {/* Background Abstract Shapes */}
            <motion.div
                className={styles.orbitCircle}
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            />
        </div>
    );
};

export default TrustVisual;
