import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaCalculator, FaBuilding, FaFileInvoiceDollar, FaChartLine, FaRegistered, FaProjectDiagram, FaBalanceScale, FaSearchDollar } from 'react-icons/fa';
import styles from './FeaturedServices.module.css';

const services = [
    {
        icon: <FaFileInvoiceDollar />,
        title: "GST Compliance",
        description: "End-to-end GST retention: Monthly filings, reconciliation, and notices handling.",
        id: "ca-gst"
    },
    {
        icon: <FaBuilding />,
        title: "Company Incorporation",
        description: "Start right. Pvt Ltd, LLP, or OPC registration with complete MCA compliance.",
        id: "ca-incorp"
    },
    {
        icon: <FaCalculator />,
        title: "Income Tax Filing",
        description: "Tax planning and ITR filing for individuals and corporates to maximize savings.",
        id: "ca-itr"
    },
    {
        icon: <FaChartLine />,
        title: "Virtual CFO",
        description: "Strategic financial leadership for startups without the cost of a full-time CFO.",
        id: "ca-vcfo"
    },
    {
        icon: <FaRegistered />,
        title: "Trademark Registration",
        description: "Protect your brand identity. Search, filing, and objection handling.",
        id: "cs-ip"
    },
    {
        icon: <FaProjectDiagram />,
        title: "Project Funding",
        description: "Bank-ready Project Reports (CMA Data) to secure loans and investment.",
        id: "ca-proj-report"
    },
    {
        icon: <FaBalanceScale />,
        title: "Business Valuation",
        description: "Defensible valuation reports (DCF/NAV) for funding, M&A, and regulatory compliance.",
        id: "ca-valuation"
    },
    {
        icon: <FaSearchDollar />,
        title: "Due Diligence",
        description: "Uncover hidden risks. Comprehensive legal and financial checks for investors and acquirers.",
        id: "cs-dd"
    }
];

const FeaturedServices = () => {
    return (
        <section className={styles.section}>
            <div className="container">
                <div className={styles.header}>
                    <h2>Most Requested Services</h2>
                    <p>Expert solution for your most critical financial and compliance needs.</p>
                </div>

                <div className={styles.grid}>
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            className={styles.card}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <div className={styles.iconWrapper}>
                                {service.icon}
                            </div>
                            <h3>{service.title}</h3>
                            <p>{service.description}</p>
                            <Link to={`/services/${service.id}`} className={styles.link}>
                                View Details &rarr;
                            </Link>
                        </motion.div>
                    ))}
                </div>

                <div className={styles.viewMoreContainer}>
                    <Link to="/services" className={styles.viewMoreBtn}>
                        View All Services
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default FeaturedServices;
