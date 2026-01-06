import React from 'react';
import { motion } from 'framer-motion';
import { FaCheckCircle, FaExclamationTriangle, FaFileAlt, FaInfoCircle, FaRupeeSign } from 'react-icons/fa';
import ContactForm from '../components/ContactForm';
import styles from './Proprietorship.module.css';

const Proprietorship = () => {
    return (
        <div className={styles.pageContainer}>
            {/* Hero Section */}
            <header className={styles.hero}>
                <div className="container">
                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        Sole Proprietorship Registration
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        The simplest way to start your business in India. Quick, affordable, and compliant.
                    </motion.p>
                </div>
            </header>

            <div className={styles.contentContainer}>
                {/* Introduction */}
                <section className={styles.section}>
                    <h2>About Sole Proprietorship</h2>
                    <p>
                        A sole proprietorship is one of the simplest and most popular business structures in India, owned, managed, and controlled by a single individual. With minimal compliance requirements and easy setup, it is ideal for solo entrepreneurs and small businesses looking for a cost-effective way to start their venture.
                    </p>
                    <p>
                        Tax न्याय can assist you in registering a proprietorship firm online. With our expert guidance and streamlined process, you can start your proprietorship firm registration online quickly and hassle-free.
                    </p>
                    <div className={styles.highlightBox}>
                        <h3><FaInfoCircle /> Key Feature</h3>
                        <p>
                            In a sole proprietorship, there is no legal distinction between the owner and the business. All profits, losses, and liabilities are borne directly by the proprietor.
                        </p>
                    </div>
                </section>

                {/* Advantages */}
                <section className={styles.section}>
                    <h2>Advantages of Sole Proprietorship Registration</h2>
                    <div className={styles.grid}>
                        <div className={styles.card}>
                            <h3>1. Easy to Start</h3>
                            <p>Starting a sole proprietorship is relatively inexpensive and involves fewer formalities compared to other business structures such as corporations or LLPs.</p>
                        </div>
                        <div className={styles.card}>
                            <h3>2. Complete Control</h3>
                            <p>The sole proprietor has full ownership and control, allowing for quick decision-making without requiring approval from partners or a board.</p>
                        </div>
                        <div className={styles.card}>
                            <h3>3. Tax Benefits</h3>
                            <p>Income is taxed as individual income, which can reduce overall tax liability. Proprietors may also qualify for specific deductions.</p>
                        </div>
                        <div className={styles.card}>
                            <h3>4. Direct Customer Relationships</h3>
                            <p>Operate closely with customers to build trust and address feedback promptly, strengthening client relationships.</p>
                        </div>
                    </div>
                </section>

                {/* Checklist */}
                <section className={styles.section}>
                    <h2>Checklist for Registration</h2>
                    <ul className={styles.checklist}>
                        <li><FaCheckCircle /> <strong>Choose a Business Name:</strong> Select a suitable and unique name.</li>
                        <li><FaCheckCircle /> <strong>Open Bank Account:</strong> Open a current account in the business name.</li>
                        <li><FaCheckCircle /> <strong>MSME Registration:</strong> Register under Udyam for government benefits.</li>
                        <li><FaCheckCircle /> <strong>Required Licenses:</strong> FSSAI (food), Shop & Establishment, etc.</li>
                        <li><FaCheckCircle /> <strong>GST Registration:</strong> Mandatory if turnover exceeds ₹20/40 Lakhs.</li>
                    </ul>
                </section>

                {/* Documents Required */}
                <section className={styles.section}>
                    <h2>Documents Required</h2>
                    <div className={styles.twoColumn}>
                        <div>
                            <h3>Personal ID</h3>
                            <ul>
                                <li>Aadhaar Card of the proprietor</li>
                                <li>PAN Card</li>
                                <li>Passport size photo</li>
                            </ul>
                        </div>
                        <div>
                            <h3>Business Proof</h3>
                            <ul>
                                <li>Rental Agreement / NOC (if rented)</li>
                                <li>Electricity Bill / Sale Deed (if owned)</li>
                                <li>Bank Statement/Cancelled Cheque</li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Fees Table */}
                <section className={styles.section}>
                    <h2>Registration Fees (Approximate)</h2>
                    <div className={styles.tableWrapper}>
                        <table className={styles.table}>
                            <thead>
                                <tr>
                                    <th>Component</th>
                                    <th>Approximate Fees (INR)</th>
                                    <th>Remarks</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>GST Registration</td>
                                    <td>Free (Govt Portal)</td>
                                    <td>Mandatory if turnover &gt; ₹40L</td>
                                </tr>
                                <tr>
                                    <td>MSME (Udyam)</td>
                                    <td>Free</td>
                                    <td>Optional, but beneficial</td>
                                </tr>
                                <tr>
                                    <td>Shop & Est. License</td>
                                    <td>₹1,000 – ₹5,000</td>
                                    <td>Varies by state</td>
                                </tr>
                                <tr>
                                    <td>Professional Fees</td>
                                    <td>₹1,000 – ₹3,000</td>
                                    <td>For expert assistance</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </section>

                {/* Comparison Table */}
                <section className={styles.section}>
                    <h2>Sole Proprietorship vs. Others</h2>
                    <div className={styles.tableWrapper}>
                        <table className={styles.table}>
                            <thead>
                                <tr>
                                    <th>Particulars</th>
                                    <th>Sole Proprietorship</th>
                                    <th>LLP</th>
                                    <th>Partnership</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><strong>Establishment</strong></td>
                                    <td>Simple, minimal paperwork</td>
                                    <td>Complex, MCA filing required</td>
                                    <td>Partnership deed registration</td>
                                </tr>
                                <tr>
                                    <td><strong>Liability</strong></td>
                                    <td>Unlimited Personal Liability</td>
                                    <td>Limited Liability</td>
                                    <td>Partners personally liable</td>
                                </tr>
                                <tr>
                                    <td><strong>Taxation</strong></td>
                                    <td>Owner's personal income tax</td>
                                    <td>Partnership taxation rules</td>
                                    <td>Partners' personal returns</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </section>

                {/* Procedure */}
                <section className={styles.stepSection}>
                    <h2>Registration Procedure with Tax न्याय</h2>
                    <div className={styles.steps}>
                        <div className={styles.step}>
                            <span>1</span>
                            <h4>Sign Up on LEDGERS</h4>
                            <p>Login to track progress and access accounting tools.</p>
                        </div>
                        <div className={styles.step}>
                            <span>2</span>
                            <h4>Select Service</h4>
                            <p>Choose Proprietorship Engagement to start.</p>
                        </div>
                        <div className={styles.step}>
                            <span>3</span>
                            <h4>Upload Documents</h4>
                            <p>Submit PAN, Aadhaar, and address proof.</p>
                        </div>
                        <div className={styles.step}>
                            <span>4</span>
                            <h4>Processing</h4>
                            <p>Our experts file GST, Udyam, and other applications.</p>
                        </div>
                        <div className={styles.step}>
                            <span>5</span>
                            <h4>Completion</h4>
                            <p>Receive your registration certificates and start business.</p>
                        </div>
                    </div>
                </section>

                {/* Contact Form for Lead Gen */}
                <section id="contact" className={styles.formSection}>
                    <h2>Start Your Proprietorship Today</h2>
                    <p>Get expert assistance for a hassle-free registration.</p>
                    <div className={styles.formWrapper}>
                        <ContactForm />
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Proprietorship;
