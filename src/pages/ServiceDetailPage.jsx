import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaCheckCircle, FaInfoCircle, FaHome, FaAngleRight, FaFileAlt, FaRupeeSign } from 'react-icons/fa';
import HeroContactForm from '../components/HeroContactForm';
import { getServiceData } from '../data/serviceDetailData.js';
import styles from './ServiceDetail.module.css';

const ServiceDetailPage = () => {
    const { category, serviceId } = useParams();
    const data = getServiceData(category, serviceId);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [category, serviceId, data]);

    if (!data) {
        return <div className={styles.pageContainer}><div className="container" style={{ padding: '50px' }}>Service Not Found</div></div>;
    }

    return (
        <div className={styles.pageContainer}>
            {/* Breadcrumb Removed as per user request to move Hero upward */}

            {/* Hero Section */}
            <header className={styles.hero}>
                <div className={styles.heroContent}>
                    <div className={styles.heroText}>
                        <motion.h1
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            {data.title}
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            {data.tagline}
                        </motion.p>
                    </div>
                    <div className={styles.heroFormWrapper}>
                        <HeroContactForm serviceName={data.title} />
                    </div>
                </div>
                {/* Bottom CTA and FAQ moved to end of Main Content */}
            </header>

            {/* Main Content Layout */}
            <div className={styles.contentWrapper}>
                <div className={styles.mainContent}>

                    {/* Introduction */}
                    <section className={styles.section}>
                        <h2>Overview</h2>
                        {data.about && data.about.map((paragraph, index) => (
                            <p key={index}>{paragraph}</p>
                        ))}

                        {data.keyFeature && (
                            <div className={styles.highlightBox}>
                                <h3><FaInfoCircle /> Key Insight</h3>
                                <p>{data.keyFeature}</p>
                            </div>
                        )}
                    </section>

                    {/* Advantages */}
                    {data.advantages && (
                        <section className={styles.section}>
                            <h2>Why {data.title}?</h2>
                            <div className={styles.grid}>
                                {data.advantages.map((adv, index) => (
                                    <div key={index} className={styles.card}>
                                        <h3>{adv.title}</h3>
                                        <p>{adv.description}</p>
                                    </div>
                                ))}
                            </div>
                        </section>
                    )}

                    {/* Documents Required */}
                    {data.documents && (
                        <section className={styles.section}>
                            <h2><FaFileAlt style={{ marginRight: '10px', color: '#007bff' }} />Documents Required</h2>
                            <p>To initiate the process, the following documents are usually required:</p>
                            <div className={styles.docGrid}>
                                {Object.entries(data.documents).map(([key, value], index) => (
                                    <div key={index} className={styles.docGroup}>
                                        <h3>{key}</h3>
                                        <ul className={styles.docList}>
                                            {Array.isArray(value) && value.map((doc, i) => (
                                                <li key={i}>{doc}</li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        </section>
                    )}

                    {/* Fees Table */}
                    {data.fees && (
                        <section className={styles.section}>
                            <h2><FaRupeeSign style={{ marginRight: '10px', color: '#28a745' }} />Pricing & Fees</h2>
                            <div className={styles.tableWrapper}>
                                <table className={styles.table}>
                                    <thead>
                                        <tr>
                                            <th>Component</th>
                                            <th>Approximate Fees</th>
                                            <th>Description</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {data.fees.map((row, index) => (
                                            <tr key={index}>
                                                <td>{row.component}</td>
                                                <td>{row.fee}</td>
                                                <td>{row.remarks}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </section>
                    )}

                    {/* Who Needs This (New Section) */}
                    {data.whoNeedsLike && data.whoNeedsLike.length > 0 && (
                        <section className={styles.section}>
                            <h2>Who needs {data.title}?</h2>
                            <ul className={styles.whoList}>
                                {data.whoNeedsLike.map((item, index) => (
                                    <li key={index}>{item}</li>
                                ))}
                            </ul>

                            {data.penalties && (
                                <div className={styles.penaltyBox}>
                                    <FaInfoCircle className={styles.penaltyIcon} />
                                    <div>
                                        <strong>Penalty for Non-Compliance:</strong>
                                        <p>{data.penalties}</p>
                                    </div>
                                </div>
                            )}
                        </section>
                    )}

                    {/* Process (Rich Timeline or Simple Checklist) */}
                    {(data.processSteps || data.checklist) && (
                        <section className={styles.section}>
                            <h2>Registration Process</h2>

                            {data.processSteps ? (
                                <div className={styles.timeline}>
                                    {data.processSteps.map((step, index) => (
                                        <div key={index} className={styles.timelineItem}>
                                            <div className={styles.timelineNumber}>{index + 1}</div>
                                            <h3>{step.title}</h3>
                                            <p>{step.desc}</p>
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <ul className={styles.docList}>
                                    {data.checklist.map((item, index) => (
                                        <li key={index}>{item}</li>
                                    ))}
                                </ul>
                            )}
                        </section>
                    )}

                    {/* Bottom CTA Section */}
                    <section className={styles.section} style={{ textAlign: 'center', background: 'linear-gradient(to right, #f8fafc, #edf2f7)' }}>
                        <h2 style={{ borderBottom: 'none', marginBottom: '10px' }}>Still have questions?</h2>
                        <p style={{ marginBottom: '30px', fontSize: '1.1rem' }}>Talk to our experts and get clear guidance on {data.title}.</p>
                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                            <HeroContactForm serviceName={data.title} />
                        </div>
                    </section>

                    {/* FAQ Section */}
                    {data.faqs && (
                        <section className={styles.section}>
                            <h2>Frequently Asked Questions</h2>
                            <div className={styles.faqList}>
                                {data.faqs.map((faq, index) => (
                                    <details key={index} className={styles.faqItem}>
                                        <summary className={styles.faqQuestion}>
                                            {faq.question}
                                            <FaAngleRight className={styles.faqIcon} />
                                        </summary>
                                        <p className={styles.faqAnswer}>{faq.answer}</p>
                                    </details>
                                ))}
                            </div>
                        </section>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ServiceDetailPage;
