/*
    Data for Category Landing Pages
    Rich content for authentic and informative pages.
*/

export const categoryData = {
    "startup": {
        title: "Startup Services",
        subtitle: "Launch your dream business with India's most trusted partner.",
        heroGradient: "linear-gradient(135deg, #007bff 0%, #00d2ff 100%)",
        intro: [
            "Starting a business is an exciting journey, but the legal formalities can be overwhelming. At Tax न्याय, we simplify the incorporation process, ensuring that your startup is legally compliant from day one.",
            "Whether you are a solo entrepreneur or a team of co-founders, we guide you in choosing the right business structure—Proprietorship, LLP, or Private Limited Company—tailored to your funding and scalability needs."
        ],
        benefits: [
            { title: "Expert Guidance", desc: "Consultation with CAs and CSs to choose the right legal structure." },
            { title: "Fast Incorporation", desc: "We file your documents within 24 hours of receiving them." },
            { title: "Funding Ready", desc: "We structure your entity (like Pvt Ltd) to be investment-ready for VCs." },
            { title: "End-to-End Support", desc: "From name approval to PAN, TAN, and Bank Account opening." }
        ],
        process: ["Consultation & Planning", "Document Collection", "Name Reservation", "Incorporation Filing", "Certificate Issuance"],
        faqs: [
            { q: "What is the best entity for a startup raising funds?", a: "Private Limited Company is the global standard for venture capital funding due to equity sharing capabilities." },
            { q: "Can I register a company alone?", a: "Yes, you can register a One Person Company (OPC) or a Sole Proprietorship." }
        ],
        services: [
            { id: "proprietorship", icon: "FaUser", title: "Proprietorship", desc: "For solo founders." },
            { id: "partnership", icon: "FaUserFriends", title: "Partnership", desc: "For 2+ partners." },
            { id: "llp", icon: "FaHandshake", title: "LLP Registration", desc: "Limited liability, low compliance." },
            { id: "pvt-ltd", icon: "FaBuilding", title: "Pvt Ltd Company", desc: "For raising funds." },
            { id: "opc", icon: "FaUserTie", title: "One Person Company", desc: "Solo corporate entity." },
            { id: "section-8", icon: "FaDove", title: "NGO / Section 8", desc: "For non-profits." }
        ]
    },
    "registrations": {
        title: "Government Registrations",
        subtitle: "Get all necessary licenses to operate legally in India.",
        heroGradient: "linear-gradient(135deg, #28a745 0%, #85d697 100%)",
        intro: [
            "Every business in India requires specific government registrations depending on its nature of work. Operating without valid licenses can lead to heavy penalties and legal hurdles.",
            "From MSME Udyam registration for subsidies to FSSAI for food businesses and Import Export Code (IEC) for trading, we handle all your licensing needs swiftly and accurately."
        ],
        benefits: [
            { title: "100% Online Process", desc: "No need to visit government offices. We handle it digitally." },
            { title: "Timely Approvals", desc: "Our experts ensure error-free applications for faster processing." },
            { title: "Lifetime Validity", desc: "Many registrations like IEC and Udyam have lifetime validity." }
        ],
        process: ["Eligibility Check", "Document Submission", "Application Filing", "Govt Verification", "License Delivery"],
        faqs: [
            { q: "Is GST mandatory for all businesses?", a: "GST is mandatory if turnover exceeds ₹40 Lakhs (Goods) or ₹20 Lakhs (Services)." },
            { q: "What is Udyam Registration?", a: "It is a government registration for MSMEs to avail subsidies and collateral-free loans." }
        ],
        services: [
            { id: "startup-india", icon: "FaRocket", title: "Startup India", desc: "Tax benefits & recognition." },
            { id: "udyam", icon: "FaIdCard", title: "MSME / Udyam", desc: "Subsidies for small biz." },
            { id: "fssai-reg", icon: "FaUtensils", title: "FSSAI Registration", desc: "For food businesses." },
            { id: "iec", icon: "FaGlobe", title: "Import Export Code", desc: "For global trade." },
            { id: "dsc", icon: "FaKey", title: "Digital Signature", desc: "For online filings." }
        ]
    },
    "trademark": {
        title: "Trademark Protection",
        subtitle: "Secure your brand identity and intellectual property.",
        heroGradient: "linear-gradient(135deg, #6610f2 0%, #a46bf5 100%)",
        intro: [
            "Your brand name, logo, and slogan are your most valuable assets. Registering a trademark gives you legal ownership and prevents copycats from stealing your identity.",
            "Tax न्याय provides comprehensive IP services, including Trademark Search, Filing, Objection Handling, and Renewal, ensuring complete protection for your brand."
        ],
        benefits: [
            { title: "Legal Protection", desc: "Right to sue anyone misusing your brand name." },
            { title: "Brand Value", desc: "Registered TM increases your company's valuation." },
            { title: "Global Recognition", desc: "Step towards international trademark registration." }
        ],
        process: ["Trademark Search", "Class Selection", "Application Filing (TM-A)", "Examination Report", "Registration"],
        faqs: [
            { q: "How long is a Trademark valid?", a: "A registered trademark is valid for 10 years and can be renewed indefinitely." },
            { q: "What is the ™ vs ® symbol?", a: "™ is used after applying, while ® is used only after registration is granted." }
        ],
        services: [
            { id: "registration", icon: "FaRegistered", title: "Trademark Reg", desc: "Protect your brand name." },
            { id: "objection", icon: "FaGavel", title: "TM Objection", desc: "Reply to registry queries." },
            { id: "renewal", icon: "FaRedo", title: "TM Renewal", desc: "Extend validity." },
            { id: "copyright", icon: "FaCopyright", title: "Copyright", desc: "Protect creative works." }
        ]
    },
    "gst": {
        title: "GST Services",
        subtitle: "Seamless GST registration and return filing.",
        heroGradient: "linear-gradient(135deg, #fd7e14 0%, #ffbf85 100%)",
        intro: [
            "GST compliance is the backbone of any business in India. Incorrect filings or missed deadlines can result in notices and penalties.",
            "We offer end-to-end GST support, from getting your unique GSTIN to filing monthly GSTR-1 & 3B returns and handling annual reconciliations."
        ],
        benefits: [
            { title: "Error-Free Filing", desc: "Reconciliation of purchase and sales data." },
            { title: "Input Tax Credit", desc: "Maximize your ITC claims with proper filing." },
            { title: "Notice Handling", desc: "Expert drafting of replies to GST notices." }
        ],
        process: ["Data Collection", "Computation", "Draft Verification", "Filing on Portal", "Acknowledgment"],
        faqs: [
            { q: "Can I file GST returns myself?", a: "Yes, but errors can block your Input Tax Credit. Professional help is recommended." },
            { q: "What is the due date for GSTR-1?", a: "Usually the 11th of every month." }
        ],
        services: [
            { id: "registration", icon: "FaFileInvoiceDollar", title: "GST Registration", desc: "Get your GSTIN." },
            { id: "return-filing", icon: "FaRegFileAlt", title: "Return Filing", desc: "GSTR-1 & 3B filing." },
            { id: "lut", icon: "FaPlane", title: "LUT Filing", desc: "For exporters." },
            { id: "annual-return", icon: "FaListAlt", title: "Annual Return", desc: "GSTR-9 filing." }
        ]
    },
    "income-tax": {
        title: "Income Tax Support",
        subtitle: "Expert tax planning and ITR filing services.",
        heroGradient: "linear-gradient(135deg, #17a2b8 0%, #7ee0ea 100%)",
        intro: [
            "Income Tax filing is not just about compliance; it's about smart planning to save taxes legally. Whether you are a salaried individual, a freelancer, or a company, we help you optimize your taxes.",
            "Our CAs handle everything from ITR-1 to ITR-6, ensuring that you claim all eligible deductions under 80C, 80D, and more."
        ],
        benefits: [
            { title: "Tax Saving", desc: "Advice on investments to lower tax liability." },
            { title: "Compliance", desc: "Avoid penalties for non-filing." },
            { title: "Loan Approval", desc: "ITR is a mandatory document for bank loans." }
        ],
        process: ["Document Gathering", "Tax Computation", "Deduction Optimization", "E-Filing", "Verification"],
        faqs: [
            { q: "Who needs to file ITR?", a: "Anyone with income above the basic exemption limit (₹2.5L/₹3L)." },
            { q: "What is the penalty for late filing?", a: "Up to ₹5,000 for late filing." }
        ],
        services: [
            { id: "efiling", icon: "FaCalculator", title: "ITR Filing", desc: "For individuals & business." },
            { id: "tds", icon: "FaPercentage", title: "TDS Returns", desc: "Quarterly filing." },
            { id: "notice", icon: "FaExclamationCircle", title: "Notice Reply", desc: "Expert assessment help." }
        ]
    },
    "mca": {
        title: "MCA & Corporate Services",
        subtitle: "Corporate compliance and company law matters.",
        heroGradient: "linear-gradient(135deg, #e83e8c 0%, #f79cc0 100%)",
        intro: [
            "Companies and LLPs are strictly regulated by the Ministry of Corporate Affairs (MCA). Non-compliance can lead to heavy fines and disqualification of directors.",
            "We handle all secretarial compliances including Annual Returns (AOC-4, MGT-7), Director KYC, and changes in company structure."
        ],
        benefits: [
            { title: "Avoid Penalties", desc: "Late fees for MCA forms can be ₹100 per day." },
            { title: "Clean Status", desc: "Maintain 'Active' status on MCA portal." },
            { title: "Secretarial Support", desc: "Drafting of minutes, resolutions for board meetings." }
        ],
        process: ["Due Diligence", "Form Preparation", "DSC Affixing", "MCA Filing", "Approval"],
        faqs: [
            { q: "What is DIR-3 KYC?", a: "Annual KYC for all directors holding a DIN." },
            { q: "When is the AGM due date?", a: "Within 6 months from the end of the financial year (Sept 30)." }
        ],
        services: [
            { id: "company-compliance", icon: "FaClipboardCheck", title: "Annual Compliance", desc: "AOC-4 & MGT-7." },
            { id: "director-change", icon: "FaUserEdit", title: "Director Change", desc: "Add or remove directors." },
            { id: "name-change", icon: "FaTag", title: "Name Change", desc: "Rebranding services." },
            { id: "winding-up-company", icon: "FaTimesCircle", title: "Winding Up", desc: "Close your company." }
        ]
    },
    "compliance": {
        title: "Business Compliance",
        subtitle: "HR, Payroll, and Accounting solutions.",
        heroGradient: "linear-gradient(135deg, #20c997 0%, #90f1d5 100%)",
        intro: [
            "Running a business involves more than just core operations. You need to manage payroll, bookkeeping, and labor law compliances.",
            "Tax न्याय acts as your virtual CFO and HR department, handling PF/ESI returns, generating payslips, and maintaining your books of accounts."
        ],
        benefits: [
            { title: "Focus on Core Biz", desc: "Outsource the headache of compliance to us." },
            { title: "Accurate Payroll", desc: "Timely salary processing and tax deduction." },
            { title: "Audit Ready", desc: "Clean books of accounts for stress-free audits." }
        ],
        process: ["Data Setup", "Monthly Processing", "Challan Generation", "Return Filing", "Reporting"],
        faqs: [
            { q: "Is PF mandatory?", a: "Yes, if you have 20 or more employees." },
            { q: "Why is bookkeeping important?", a: "It tracks financial health and is needed for tax filing." }
        ],
        services: [
            { id: "payroll", icon: "FaMoneyBillWave", title: "Payroll", desc: "Salary processing." },
            { id: "bookkeeping", icon: "FaBook", title: "Bookkeeping", desc: "Maintain accounts." },
            { id: "pf-return", icon: "FaPiggyBank", title: "PF Returns", desc: "Provident fund compliance." }
        ]
    },
    "legal": {
        title: "Legal Services",
        subtitle: "Expert drafting and legal advisory for your business.",
        heroGradient: "linear-gradient(135deg, #6f42c1 0%, #a885e3 100%)",
        intro: [
            "Strong contracts and agreements are the foundation of a secure business. Verbal agreements often lead to disputes.",
            "Our legal team specializes in drafting watertight contracts like Shareholders Agreements, NDAs, and Employment Contracts. We also assist in sending Legal Notices for recovery and disputes."
        ],
        benefits: [
            { title: "Risk Mitigation", desc: "Contracts designed to protect your interests." },
            { title: "Dispute Resolution", desc: "Formal legal notices often resolve issues without court." },
            { title: "Custom Drafting", desc: "Tailored agreements, not just generic templates." }
        ],
        process: ["Requirement Analysis", "Drafting", "Review & Edit", "Finalization", "Execution"],
        faqs: [
            { q: "Why do I need a Shareholders Agreement?", a: "To clearly define exit clauses and decision-making powers." },
            { q: "Is an NDA legally binding?", a: "Yes, it protects your trade secrets from being leaked." }
        ],
        services: [
            { id: "shareholders-agreement", icon: "FaHandshake", title: "Shareholders Agmt", desc: "Define equity rules." },
            { id: "legal-notice", icon: "FaGavel", title: "Legal Notice", desc: "Formal legal communication." },
            { id: "nda", icon: "FaUserSecret", title: "NDA", desc: "Protect confidentiality." },
            { id: "cheque-bounce", icon: "FaMoneyBillAlt", title: "Cheque Bounce", desc: "Section 138 notice." }
        ]
    },
    "global": {
        title: "Go Global",
        subtitle: "Expand your business to USA, UAE, and beyond.",
        heroGradient: "linear-gradient(135deg, #343a40 0%, #6c757d 100%)",
        intro: [
            "The world is your market. Why limit your business to one country? We assist Indian founders in setting up entities in the USA (Delaware C-Corp), UAE (Freezones), and Singapore.",
            "Access global customers, payment gateways like Stripe, and international investors by incorporating a global entity."
        ],
        benefits: [
            { title: "Global Payments", desc: "Accept USD/EUR payments easily." },
            { title: "Tax Efficiency", desc: "Zero tax benefits in UAE Freezones." },
            { title: "Brand Prestige", desc: "Enhance credibility with a US/UK address." }
        ],
        process: ["Jurisdiction Selection", "KYC Submission", "Incorporation Filing", "Bank Account Opening", "Visa (if applicable)"],
        faqs: [
            { q: "Do I need to visit the USA/UAE?", a: "No, the entire process is 100% remote." },
            { q: "Can I open a US bank account?", a: "Yes, we assist with Mercury/Brex setup." }
        ],
        services: [
            { id: "usa-company", icon: "FaFlagUsa", title: "USA Incorporation", desc: "Delaware C-Corp/LLC." },
            { id: "uae-company", icon: "FaBuilding", title: "UAE Company", desc: "Dubai Freezone setup." },
            { id: "singapore-company", icon: "FaGlobeAsia", title: "Singapore Company", desc: "Asian hub setup." }
        ]
    }
};

// Fallback for new pages
export const getCategoryData = (catId) => {
    return categoryData[catId] || {
        title: catId.toUpperCase(),
        subtitle: "Professional Services",
        heroGradient: "linear-gradient(135deg, #6c757d 0%, #adb5bd 100%)",
        intro: ["We offer professional services to help your business grow."],
        services: []
    };
};
