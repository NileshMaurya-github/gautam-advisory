import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronDown } from 'react-icons/fa';
import styles from './FAQSection.module.css';

const faqs = [
    {
        question: "How long does it take to incorporate a Private Limited Company?",
        answer: "Typically, the process takes 7-10 working days, subject to ROC approval and document readiness. This includes name reservation, DSC acquisition, and final incorporation certification."
    },
    {
        question: "Do I need a physical office for GST registration?",
        answer: "Yes, proof of business address (Electricity Bill/Rent Agreement) is mandatory for GST registration. However, virtual office solutions or a residential address (with NOC) can also be used."
    },
    {
        question: "What is the difference between Statutory Audit and Internal Audit?",
        answer: "Statutory Audit is mandatory by law to report to the government/shareholders on financial truthfulness. Internal Audit is a management tool to improve internal controls, efficiency, and risk management."
    },
    {
        question: "Can an NRI be a director in an Indian company?",
        answer: "Yes, an NRI can be a director. However, at least one director on the Board must be a Resident Indian (stayed in India for >182 days within the financial year)."
    },
    {
        question: "Why should I file my ITR if my income is below the taxable limit?",
        answer: "Filing ITR creates a financial history, which is crucial for loan approvals, visa applications, and claiming tax refunds on TDS deducted."
    }
];

const FAQSection = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section className={styles.section}>
            <div className="container">
                <div className={styles.heading}>
                    <h2 className={styles.sectionTitle}>Common Queries</h2>
                    <p className={styles.sectionSubtitle}>
                        Clarifying the complexities of compliance, taxation, and business law.
                    </p>
                </div>

                <div className={styles.faqContainer}>
                    {faqs.map((faq, index) => (
                        <div key={index} className={styles.faqItem}>
                            <button
                                className={styles.questionButton}
                                onClick={() => toggleFAQ(index)}
                                aria-expanded={activeIndex === index}
                            >
                                {faq.question}
                                <FaChevronDown className={`${styles.icon} ${activeIndex === index ? styles.rotate : ''}`} />
                            </button>
                            <AnimatePresence>
                                {activeIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                        className={styles.answerWrapper}
                                    >
                                        <div className={styles.answer}>
                                            {faq.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQSection;
