import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaRocket, FaTrademark, FaFileInvoiceDollar, FaCalculator, FaBalanceScale, FaUserTie, FaBuilding, FaGlobe } from 'react-icons/fa';
import styles from './FeaturedServices.module.css';

const services = [
    {
        icon: <FaRocket />,
        title: "Startup India",
        description: "Registration, recognition, and tax benefits for new businesses.",
        id: "startup",
        link: "/startup"
    },
    {
        icon: <FaTrademark />,
        title: "Trademark",
        description: "Protect your brand with trademark registration and objection handling.",
        id: "trademark",
        link: "/trademark"
    },
    {
        icon: <FaFileInvoiceDollar />,
        title: "GST Services",
        description: "Seamless GST registration, return filing, and compliance management.",
        id: "gst",
        link: "/gst"
    },
    {
        icon: <FaCalculator />,
        title: "Income Tax",
        description: "Expert assistance for personal and corporate income tax filing.",
        id: "income-tax",
        link: "/income-tax"
    },
    {
        icon: <FaBalanceScale />,
        title: "Legal Compliance",
        description: "Company annual filings, MCA compliance, and regulatory adherence.",
        id: "compliance",
        link: "/compliance"
    },
    {
        icon: <FaUserTie />,
        title: "Virtual CFO",
        description: "Strategic financial leadership to grow your business sustainably.",
        id: "vcfo",
        link: "/services/vcfo" // Assuming a specific page or generic service page
    },
    {
        icon: <FaBuilding />,
        title: "Company Incorp",
        description: "PVT LTD, LLP, and OPC registration with end-to-end support.",
        id: "incorporation",
        link: "/startup/pvt-ltd"
    },
    {
        icon: <FaGlobe />,
        title: "Global Business",
        description: "Expand your business globally with Import Export Code (IEC) & more.",
        id: "global",
        link: "/startup/iec"
    }
];

const FeaturedServices = () => {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <h2>Cloud-based Services for your Business</h2>
                    <p>India’s most trusted platform for legal, tax, and compliance services.</p>
                </div>

                <div className={styles.grid}>
                    {services.map((service, index) => (
                        <Link to={service.link} key={index} className={styles.cardLink}>
                            <motion.div
                                className={styles.card}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.05 }}
                                viewport={{ once: true }}
                            >
                                <div className={styles.iconWrapper}>
                                    {service.icon}
                                </div>
                                <h3>{service.title}</h3>
                                <p>{service.description}</p>
                            </motion.div>
                        </Link>
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
