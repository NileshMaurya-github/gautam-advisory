import React from 'react';
import { motion } from 'framer-motion';
import { FaBuilding, FaUserTie, FaBriefcase, FaUserClock } from 'react-icons/fa';
import styles from './Quadrants.module.css';
import { Link } from 'react-router-dom';

const quadrants = [
    {
        icon: <FaBuilding />,
        title: "Corporate Services: Retainer",
        desc: "Long-term engagements: Statutory Audit, vCFO, GST, Secretarial compliance.",
        id: "corp-retainer",
        bg: "rgba(10, 25, 47, 0.7)"
    },
    {
        icon: <FaBriefcase />,
        title: "Corporate Services: Project",
        desc: "Transactional expertise: Exploration, M&A, Forensics, Valuation.",
        id: "corp-project",
        bg: "rgba(17, 34, 64, 0.7)"
    },
    {
        icon: <FaUserTie />,
        title: "Private Clients: Retainer",
        desc: "Family Office, Wealth Governance, NRI Taxation & Compliance.",
        id: "indiv-retainer",
        bg: "rgba(17, 34, 64, 0.7)"
    },
    {
        icon: <FaUserClock />,
        title: "Private Clients: Project",
        desc: "Advisory on demand: Visa Financials, Complex ITR, Loan Documentation.",
        id: "indiv-project",
        bg: "rgba(10, 25, 47, 0.7)"
    }
];

const Quadrants = () => {
    return (
        <section className={styles.section}>
            <div className="container">
                <div className={styles.header}>
                    <h2>Strategic Service Sectors</h2>
                    <p>Comprehensive expertise across four critical dimensions of financial governance.</p>
                </div>

                <div className={styles.grid}>
                    {quadrants.map((q, index) => (
                        <motion.div
                            key={index}
                            className={styles.card}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <div className={styles.icon}>{q.icon}</div>
                            <h3>{q.title}</h3>
                            <p>{q.desc}</p>
                            <Link to="/services" className={styles.link}>Learn More &rarr;</Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Quadrants;
