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
            {/* Main Central Image */}
            <motion.div
                className={styles.heroImageContainer}
                initial={{ scale: 0.9, opacity: 0, y: 30, rotateX: 10 }}
                animate={{
                    scale: [1, 1.02, 1],
                    opacity: 1,
                    y: [0, -15, 0],
                    rotateX: [0, 3, 0],
                    rotateY: [-3, 3, -3]
                }}
                transition={{
                    scale: { duration: 8, repeat: Infinity, ease: "easeInOut" },
                    opacity: { duration: 1 },
                    y: { duration: 6, repeat: Infinity, ease: "easeInOut" },
                    rotateX: { duration: 7, repeat: Infinity, ease: "easeInOut" },
                    rotateY: { duration: 9, repeat: Infinity, ease: "easeInOut" }
                }}
            >
                <img
                    src="/IMG_20260106_182422.jpg"
                    alt="Trusted Advisory"
                    className={styles.heroImage}
                />
            </motion.div>


        </div>
    );
};

export default TrustVisual;
