import React from 'react';
import { motion } from 'framer-motion';
import { FaHeadset, FaFileUpload, FaCogs, FaCheckCircle } from 'react-icons/fa';
import styles from './ProcessFlow.module.css';

const steps = [
    {
        icon: <FaHeadset />,
        title: "1. Consult",
        description: "Book a call with our experts to understand your compliance needs."
    },
    {
        icon: <FaFileUpload />,
        title: "2. Submit",
        description: "Upload your documents securely via our encrypted portal."
    },
    {
        icon: <FaCogs />,
        title: "3. Process",
        description: "We handle the drafting, filing, and liaison with authorities."
    },
    {
        icon: <FaCheckCircle />,
        title: "4. Deliver",
        description: "Receive your license, registration, or certificate instantly."
    }
];

const ProcessFlow = () => {
    return (
        <section className={styles.section}>
            <div className="container">
                <div className={styles.header}>
                    <h2>How We Work</h2>
                    <p>Simplified compliance in 4 easy steps.</p>
                </div>

                <div className={styles.stepsContainer}>
                    <div className={styles.connectingLine}></div>
                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            className={styles.stepCard}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.2 }}
                            viewport={{ once: true }}
                        >
                            <div className={styles.iconCircle}>
                                {step.icon}
                            </div>
                            <h3>{step.title}</h3>
                            <p>{step.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProcessFlow;
