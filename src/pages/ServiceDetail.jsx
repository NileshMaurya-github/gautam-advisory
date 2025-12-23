import React, { useMemo, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaArrowLeft, FaCheckCircle } from 'react-icons/fa';
import { servicesData } from '../data/services';
import ContactForm from '../components/ContactForm';
import styles from './ServiceDetail.module.css';

const ServiceDetail = () => {
    const { id } = useParams();

    // Flatten data to find the service by ID
    const service = useMemo(() => {
        const allServices = [
            ...servicesData.CA.project,
            ...servicesData.CA.retainer,
            ...servicesData.CS.project,
            ...servicesData.CS.retainer
        ];
        return allServices.find(s => s.id === id);
    }, [id]);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    if (!service) {
        return (
            <div className={styles.notFound}>
                <h1>Service Not Found</h1>
                <Link to="/services" className={styles.backLink}>Back to Services</Link>
            </div>
        );
    }

    return (
        <div className={styles.page}>
            <div className={styles.hero}>
                <div className="container">
                    <Link to="/services" className={styles.backBtn}>
                        <FaArrowLeft /> Back to Services
                    </Link>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className={styles.title}
                    >
                        {service.title}
                    </motion.h1>
                    <p className={styles.description}>{service.description}</p>
                </div>
            </div>

            <div className={`container ${styles.contentContainer}`}>
                <div className={styles.mainContent}>
                    <section className={styles.section}>
                        <h2>Overview</h2>
                        <p>{service.details}</p>
                    </section>

                    <section className={styles.section}>
                        <h2>Our Process</h2>
                        <div className={styles.processList}>
                            {service.process?.map((step, index) => (
                                <motion.div
                                    className={styles.processItem}
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                >
                                    <div className={styles.stepNumber}>{index + 1}</div>
                                    <div className={styles.stepContent}>
                                        <p>{step}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </section>

                    <section className={styles.section}>
                        <h2>Why Choose Us?</h2>
                        <ul className={styles.benefitsList}>
                            <li><FaCheckCircle className={styles.checkIcon} /> <strong>Expert Execution:</strong> Handled by qualified CA/CS professionals.</li>
                            <li><FaCheckCircle className={styles.checkIcon} /> <strong>Compliance First:</strong> 100% adherence to latest laws and notifications.</li>
                            <li><FaCheckCircle className={styles.checkIcon} /> <strong>Timely Delivery:</strong> Adherence to strict SLAs for every milestone.</li>
                        </ul>
                    </section>
                </div>

                <div className={styles.sidebar}>
                    <div className={styles.stickyForm}>
                        <ContactForm serviceName={service.title} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetail;
