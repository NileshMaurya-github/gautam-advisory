import React from 'react';
import { motion } from 'framer-motion';
import { FaUserPlus, FaRupeeSign, FaAward, FaBuilding } from 'react-icons/fa';
import styles from './TrustMetrics.module.css';

const metrics = [
    { label: "Active Clients", value: "850+", icon: <FaUserPlus /> },
    { label: "Assets Valued", value: "₹500Cr+", icon: <FaRupeeSign /> },
    { label: "Years Experience", value: "12+", icon: <FaAward /> },
    { label: "Entities Formed", value: "200+", icon: <FaBuilding /> },
];

const caseStudies = [
    {
        title: "Structuring a ₹50Cr Merger",
        category: "Corporate Restructuring",
        result: "Seamless consolidation of 3 group entities with NCLT approval in record time.",
        metric: "100% Tax Neutral"
    },
    {
        title: "Scrutiny Shield for Manufacturing Unit",
        category: "Litigation & Tax",
        result: "Successfully defended a high-value GST notice, reducing liability to zero.",
        metric: "₹45L Saved"
    },
    {
        title: "Seed Funding for Tech Startup",
        category: "Startup Advisory",
        result: "End-to-end support from incorporation to valuation and term sheet negotiation.",
        metric: "₹3Cr Raised"
    }
];

const TrustMetrics = () => {
    return (
        <section className={styles.section}>
            {/* Stats Banner */}
            <div className={styles.banner}>
                <div className={`container ${styles.statsGrid}`}>
                    {metrics.map((m, i) => (
                        <motion.div
                            key={i}
                            className={styles.statItem}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: i * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <div className={styles.statIcon}>{m.icon}</div>
                            <div className={styles.statValue}>{m.value}</div>
                            <div className={styles.statLabel}>{m.label}</div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Case Studies */}
            <div className="container" style={{ marginTop: '5rem' }}>
                <div className={styles.header}>
                    <h2>Proven Results</h2>
                    <p>Real challenges. Strategic solutions. Measurable impact.</p>
                </div>

                <div className={styles.caseGrid}>
                    {caseStudies.map((caseStudy, index) => (
                        <motion.div
                            key={index}
                            className={styles.caseCard}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.2 }}
                            viewport={{ once: true }}
                        >
                            <span className={styles.category}>{caseStudy.category}</span>
                            <h3>{caseStudy.title}</h3>
                            <p className={styles.result}>{caseStudy.result}</p>
                            <div className={styles.metricBadge}>
                                <span className={styles.metricLabel}>Impact</span>
                                <span className={styles.metricValue}>{caseStudy.metric}</span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TrustMetrics;
