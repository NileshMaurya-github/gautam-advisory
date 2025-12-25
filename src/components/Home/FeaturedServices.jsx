import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaRocket, FaTrademark, FaFileInvoiceDollar, FaCalculator, FaBalanceScale, FaUserTie, FaBuilding, FaGlobe, FaUtensils, FaShip, FaIndustry } from 'react-icons/fa';
import styles from './FeaturedServices.module.css';

const services = [
    {
        icon: <FaBuilding />,
        title: "Pvt Ltd Company",
        description: "Register your Private Limited Company with complete documents.",
        id: "pvt-ltd",
        link: "/startup/pvt-ltd"
    },
    {
        icon: <FaFileInvoiceDollar />,
        title: "GST Registration",
        description: "Get your GSTIN in 3-7 days with expert assistance.",
        id: "gst-reg",
        link: "/gst/registration"
    },
    {
        icon: <FaTrademark />,
        title: "Trademark",
        description: "Secure your brand name and logo with TM registration.",
        id: "trademark-reg",
        link: "/trademark/registration"
    },
    {
        icon: <FaCalculator />,
        title: "Income Tax Filing",
        description: "Expert assisted ITR filing for individuals and businesses.",
        id: "itr",
        link: "/income-tax/efiling"
    },
    {
        icon: <FaUserTie />,
        title: "LLP Registration",
        description: "Register your Limited Liability Partnership efficiently.",
        id: "llp",
        link: "/startup/llp"
    },
    {
        icon: <FaUtensils />,
        title: "FSSAI License",
        description: "Food license registration for restaurants and food businesses.",
        id: "fssai",
        link: "/registrations/fssai-reg"
    },
    {
        icon: <FaShip />,
        title: "Import Export Code",
        description: "Mandatory IEC for doing international trade.",
        id: "iec",
        link: "/registrations/iec"
    },
    {
        icon: <FaIndustry />,
        title: "Udyam Registration",
        description: "MSME registration to avail government benefits.",
        id: "udyam",
        link: "/registrations/udyam"
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
