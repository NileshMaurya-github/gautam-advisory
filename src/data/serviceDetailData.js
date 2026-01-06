/* 
  Central Content Repository for Service Details.
  Keys match the route parameters (e.g., 'proprietorship' for /startup/proprietorship).
*/

export const serviceDetails = {
    // --- STARTUP / BUSINESS FORMATION ---
    "proprietorship": {
        title: "Sole Proprietorship Registration",
        tagline: "The simplest way to start your business in India. Quick, affordable, and compliant.",
        about: [
            "A sole proprietorship is one of the simplest and most popular business structures in India, owned, managed, and controlled by a single individual. With minimal compliance requirements and easy setup, it is ideal for solo entrepreneurs and small businesses looking for a cost-effective way to start their venture.",
            "Tax न्याय can assist you in registering a proprietorship firm online. With our expert guidance and streamlined process, you can start your proprietorship firm registration online quickly and hassle-free."
        ],
        keyFeature: "In a sole proprietorship, there is no legal distinction between the owner and the business. All profits, losses, and liabilities are borne directly by the proprietor.",
        advantages: [
            { title: "Easy to Start", description: "Starting a sole proprietorship is relatively inexpensive and involves fewer formalities compared to other business structures." },
            { title: "Complete Control", description: "The sole proprietor has full ownership and control, allowing for quick decision-making without requiring approval." },
            { title: "Tax Benefits", description: "Income is taxed as individual income, which can reduce overall tax liability. Proprietors may also qualify for specific deductions." },
            { title: "Direct Customer Relationships", description: "Operate closely with customers to build trust and address feedback promptly." }
        ],
        checklist: [
            "Choose a Business Name: Select a suitable and unique name.",
            "Open Bank Account: Open a current account in the business name.",
            "MSME Registration: Register under Udyam for government benefits.",
            "Required Licenses: FSSAI (food), Shop & Establishment, etc.",
            "GST Registration: Mandatory if turnover exceeds ₹20/40 Lakhs."
        ],
        documents: {
            "Personal ID": ["Aadhaar Card of the proprietor", "PAN Card", "Passport size photo", "Mobile & Email"],
            "Business Proof": ["Rental Agreement / NOC (if rented)", "Electricity Bill / Sale Deed (if owned)", "Bank Statement/Cancelled Cheque"]
        },
        fees: [
            { component: "GST Registration", fee: "Free (Govt Portal)", remarks: "Mandatory if > ₹40L turnover" },
            { component: "MSME (Udyam)", fee: "Free", remarks: "Optional, but beneficial" },
            { component: "Shop & Est. License", fee: "₹1,000 – ₹5,000", remarks: "Varies by state" },
            { component: "Professional Fees", fee: "₹1,000 – ₹3,000", remarks: "For expert assistance" }
        ],
        comparison: {
            headers: ["Particulars", "Sole Proprietorship", "LLP", "Partnership"],
            rows: [
                ["Establishment", "Simple, minimal paperwork", "Complex, MCA filing required", "Partnership deed"],
                ["Liability", "Unlimited Personal Liability", "Limited Liability", "Partners personally liable"],
                ["Taxation", "Owner's personal income", "Partnership rules", "Partners' personal returns"]
            ]
        }
    },
    // ... (Keep existing Partnership, LLP, Pvt Ltd data as in previous version, just updating GST below) ...
    // Note: Since multi_replace or full write destroys non-mentioned parts, I will write the FULL file to be safe, reusing previous data.
    "partnership": {
        title: "Partnership Firm Registration",
        tagline: "Join forces and grow together. Ideal for businesses with 2 or more owners.",
        about: [
            "A Partnership Firm is a popular business structure for small to medium-sized businesses owned by two or more individuals. It is governed by the Indian Partnership Act, 1932. Partners share profits, losses, and liabilities according to the partnership deed.",
            "Registration is optional but highly recommended to enforce legal rights."
        ],
        keyFeature: "Partners share collective ownership and management responsibilities, making it easier to pool capital and expertise.",
        advantages: [
            { title: "Shared Responsibility", description: "Workload and financial burden are shared among partners." },
            { title: "Easy Formation", description: "Can be formed easily with a Partnership Deed. Registration is optional but recommended." },
            { title: "More Capital", description: "Easier to raise funds compared to a proprietorship as partners pool resources." },
            { title: "Combined Expertise", description: "Partners bring different skills to the table, enhancing business growth." }
        ],
        checklist: [
            "Draft Partnership Deed: Define roles, profit ratio, etc.",
            "Choose Name: Ensure it's unique and not offensive.",
            "Apply for PAN: Partnership firm needs a separate PAN card.",
            "Register Deed: Submit to Registrar of Firms (Optional but recommended).",
            "Open Bank Account: Current account in firm's name."
        ],
        documents: {
            "Partners": ["PAN Card of all partners", "Aadhaar/Voter ID/Passport", "Photos"],
            "Firm": ["Partnership Deed", "Proof of registered office (Rent agreement/Electricity Bill)", "NOC from owner"]
        },
        fees: [
            { component: "Deed Drafting", fee: "₹2,000 - ₹5,000", remarks: "Stamp paper cost extra" },
            { component: "Registration Fees", fee: "varies by state", remarks: "Paid to Registrar of Firms" },
            { component: "PAN Card", fee: "₹110", remarks: "Govt Fee" }
        ],
        comparison: {
            headers: ["Particulars", "Partnership", "LLP", "Pvt Ltd"],
            rows: [
                ["Registration", "Optional", "Mandatory (MCA)", "Mandatory (MCA)"],
                ["Liability", "Unlimited (Joint & Several)", "Limited", "Limited"],
                ["Legal Status", "Not separate entity", "Separate Legal Entity", "Separate Legal Entity"]
            ]
        }
    },
    "llp": {
        title: "Limited Liability Partnership (LLP)",
        tagline: "Professional flexibility with limited liability protection.",
        about: [
            "LLP is a modern business structure that combines the benefits of a partnership with the limited liability status of a company. Governed by the LLP Act, 2008, it is a separate legal entity distinct from its partners.",
            "It is highly preferred by professionals like CAs, Lawyers, and Architects."
        ],
        keyFeature: "Partners are not personally liable for the debts of the LLP. One partner is not responsible for the misconduct of another.",
        advantages: [
            { title: "Limited Liability", description: "Personal assets of partners are protected from business debts." },
            { title: "Separate Legal Entity", description: "The LLP can own assets and sue/be sued in its own name." },
            { title: "No Audit Requirement", description: "Mandatory only if turnover > ₹40 Lakhs or Contribution > ₹25 Lakhs." },
            { title: "Perpetual Succession", description: "The LLP continues to exist even if partners change or leave." }
        ],
        checklist: [
            "Obtain DSC: Digital Signature for designated partners.",
            "Apply for DIN: Director Identification Number.",
            "Name Approval: Reserve unique name via RUN-LLP.",
            "Incorporation: File Form FiLLiP with MCA.",
            "File Agreement: Submit LLP Agreement within 30 days of incorporation."
        ],
        documents: {
            "Partners": ["PAN & Aadhaar", "Address Proof (Bank Stmt/Bill)", "Photo"],
            "Registered Office": ["Rent Agreement/NOC", "Utility Bill (Not older than 2 months)"]
        },
        fees: [
            { component: "DSC (2 Partners)", fee: "₹1,500 - ₹2,000", remarks: "Validity 2 years" },
            { component: "Govt Filing Fees", fee: "₹1,000 - ₹5,000", remarks: "Based on contribution" },
            { component: "Professional Fees", fee: "₹5,000 - ₹10,000", remarks: "Includes drafting agreement" }
        ]
    },
    "pvt-ltd": {
        title: "Private Limited Company (Pvt Ltd)",
        tagline: "The gold standard for startups looking to raise funding.",
        about: [
            "Private Limited Company is the most popular legal structure for businesses in India, offering a separate legal identity and limited liability protection. It is governed by the Companies Act, 2013.",
            "It is mandatory for startups looking to raise venture capital or distribute ESOPs."
        ],
        keyFeature: "Shares can be issued to investors, making it the ideal vehicle for high-growth startups.",
        advantages: [
            { title: "Funding Ready", description: "Preferred by VCs and Angels for investment." },
            { title: "Limited Liability", description: "Directors/Shareholders are not personally liable for company debts." },
            { title: "Credibility", description: "High trust factor among vendors, customers, and banks." },
            { title: "Easy Transferability", description: "Ownership can be transferred easily by transferring shares." }
        ],
        checklist: [
            "DSC & DIN: For all directors.",
            "Name Reservation: Apply via SPICe+ Part A.",
            "Incorporation: File SPICe+ Part B along with MOA/AOA.",
            "PAN & TAN: Auto-generated with incorporation.",
            "Bank Account: Open company bank account."
        ],
        documents: {
            "Directors": ["PAN, Aadhaar, Voter ID/Passport", "Bank Statement (Latest)"],
            "Office": ["Utility Bill", "NOC", "Rent Agreement"]
        },
        fees: [
            { component: "Govt Fees", fee: "₹0 (for small capital)", remarks: "Stamp duty applies" },
            { component: "DSC Fees", fee: "₹1,000/director", remarks: "~" },
            { component: "Professional Fees", fee: "₹6,000 - ₹15,000", remarks: "Depending on service provider" }
        ]
    },

    // --- GST ---
    "registration": { // Route: /gst/registration
        title: "Online GST Registration",
        tagline: "Get your GSTIN in 3-5 days. Seamless, Online & Paperless.",
        about: [
            "Goods and Services Tax (GST) is the biggest Indirect Tax reform in India. A GST number (GSTIN) is mandatory for businesses with annual turnover exceeding ₹40 Lakhs (for Goods) or ₹20 Lakhs (for Services), and also for those selling online (Amazon, Flipkart) or Interstate.",
            "Operating without a valid GSTIN when liable can attract heavy penalties (100% of tax due). We simplify the entire registration lifecycle for you."
        ],
        keyFeature: "Input Tax Credit (ITC) can only be claimed if you have a valid GSTIN. GST is also mandatory for listing on eCommerce portals.",
        advantages: [
            { title: "Input Tax Credit", description: "Claim refund on taxes paid on purchases, reducing effective cost." },
            { title: "Legal Recognition", description: "Legally operate as a supplier and issue Tax Invoices." },
            { title: "eCommerce Enabler", description: "Mandatory for selling on online marketplaces like Amazon/Flipkart." },
            { title: "Interstate Trade", description: "Required for selling goods to customers in other states." }
        ],
        // RICH PROCESS OBJECT
        processSteps: [
            { title: "Eligibility Check", desc: "Our CA verifies your turnover and business category to confirm GST liability." },
            { title: "Document Collection", desc: "We collect scanned copies of PAN, Aadhaar, Photo, and Business Address Proof." },
            { title: "Application Drafting", desc: "Filing of form GST REG-01 on the government portal with precise HSN/SAC codes." },
            { title: "Aadhaar Authentication", desc: "You receive an OTP link from the GST department for instant verification." },
            { title: "Department Processing", desc: "The tax officer reviews the application (approx 3-7 working days)." },
            { title: "Certificate Issuance", desc: "On approval, GST REG-06 Certificate is issued. We email it to you." }
        ],
        whoNeedsLike: [
            "Businesses with turnover > ₹40 Lakhs (Goods) / ₹20 Lakhs (Services)",
            "eCommerce Sellers (Amazon, Flipkart, Meesho)",
            "Interstate Suppliers (Selling from one state to another)",
            "Casual Taxable Persons (Exhibitions, Events)",
            "Agents of a Supplier"
        ],
        penalties: "100% of the tax due or ₹10,000 (whichever is higher) for not registering when liable.",
        documents: {
            "Individual / Proprietor": ["PAN Card", "Aadhaar Card", "Passport Photo"],
            "Business Address Proof": ["Electricity Bill / Water Bill (Latest)", "Rent Agreement (if rented)", "NOC from Owner (Format provided by us)"],
            "Bank Details": ["Cancelled Cheque", "Bank Statement (First page)"]
        },
        fees: [
            { component: "Professional Fee", fee: "₹1,499", remarks: "Application Filing & Follow-up" },
            { component: "Govt Fee", fee: "₹0", remarks: "No official fee for registration" },
            { component: "DSC (Optional)", fee: "₹1,500", remarks: "Only if Aadhaar not linked" }
        ],
        comparison: null
    }
    // ... (Keeping generic structure for others)
};

/* 
   REVISED STRUCTURE TO HANDLE NAMESPACE COLLISIONS 
*/
export const serviceDetailData = {
    "startup": {
        "proprietorship": {
            title: "Sole Proprietorship Registration",
            tagline: "The simplest business form for solo entrepreneurs. Zero compliance burden.",
            about: [
                "A Sole Proprietorship is an unregistered business entity that is owned, managed, and controlled by a single person. It is the most common form of business in India for unorganized sectors, local traders, and freelancers.",
                "Technically, a Proprietorship creates no legal distinction between the owner and the business. However, to open a current bank account and operate legally, you need at least two government registrations (like GST and MSME Udyam)."
            ],
            keyFeature: "Ideal for businesses with low initial risk and capital, such as local stores, home bakers, and freelancers.",
            advantages: [
                { title: "Minimal Compliance", description: "No annual filing with MCA. You only file your personal Income Tax Return." },
                { title: "Financial Privacy", description: "Unlike companies, your financial statements are not published on a public domain." },
                { title: "Complete Control", description: "You are the sole boss. Decision making is instant and requires no board resolutions." },
                { title: "Easy Closure", description: "Shutting down is as easy as surrendering your GST/Udyam. No winding up process." }
            ],
            processSteps: [
                { title: "Application Analysis", desc: "We evaluate which registration is best for you (GST vs Shop Act vs Udyam)." },
                { title: "MSME Udyam", desc: "We file for Udyam Registration to recognize you as a Micro Enterprise." },
                { title: "GST Registration", desc: "Mandatory if you want to sell online or if turnover > ₹40L. We handle the filing." },
                { title: "Bank Account", desc: "Using the Certificate, you can open a Current Bank Account in any bank." }
            ],
            whoNeedsLike: ["Freelancers & Consultants", "Local Retail Shop Owners", "Home-based Businesses", "Cloud Kitchens"],
            documents: {
                "Proprietor": ["PAN Card", "Aadhaar Card", "Passport Photo"],
                "Business Place": ["Electricity Bill/Water Bill", "Rent Agreement (if rented)", "NOC from Owner"]
            },
            fees: [
                { component: "Basic Registration", fee: "₹1,999", remarks: "MSME + GST Registration" },
                { component: "Shop & Est. License", fee: "State Wise", remarks: "Govt fees vary by state" }
            ],
            faqs: [
                { question: "Can I convert Proprietorship to Pvt Ltd later?", answer: "Yes, as your business grows, you can take over the proprietorship assets into a new Pvt Ltd Company." },
                { question: "Is the Proprietor liable for debts?", answer: "Yes, the liability is unlimited. Your personal assets (house, car) can be used to pay off business debts." }
            ],
            comparison: {
                headers: ["Feature", "Proprietorship", "LLP", "Pvt Ltd Company"],
                rows: [
                    ["Legal Status", "Not a separate entity", "Separate Legal Entity", "Separate Legal Entity"],
                    ["Liability", "Unlimited (Risky)", "Limited to Contribution", "Limited to Shares"],
                    ["Registration Cost", "Low (< ₹2000)", "Medium (~₹7000)", "High (~₹9000)"],
                    ["Compliance", "Minimal (ITR only)", "Moderate (Annual Filing)", "High (Audit + Annual Filing)"]
                ]
            }
        },
        "partnership": {
            title: "Partnership Firm Registration",
            tagline: "Formalize your business relationship. Register your Partnership Deed.",
            about: [
                "A Partnership Firm is a traditional business model where two or more people come together to carry out a business and share its profits. It is governed by the Indian Partnership Act, 1932.",
                "While registration is optional, an unregistered firm suffers from severe legal disabilities (cannot sue third parties). Hence, registering the Partnership Deed with the Registrar of Firms (ROF) is critical."
            ],
            keyFeature: "Partners share collective responsibility. The act of one partner binds the others.",
            advantages: [
                { title: "Shared Burden", description: "Capital, losses, and work responsibilities are shared among partners." },
                { title: "Flexible Operations", description: "You can define your own rules in the Deed regarding salary, interest on capital, and working hours." },
                { title: "Easy Dissolution", description: "Can be dissolved easily by a dissolution deed, unlike the complex closing of a company." }
            ],
            processSteps: [
                { title: "Deed Drafting", desc: "Our legal experts draft a Deed covering Profit Ratio, Capital Interest, etc." },
                { title: "Notary & Stamp", desc: "The Deed is printed on Stamp Paper of appropriate value and notarized." },
                { title: "PAN Card", desc: "We apply for a permanent account number (PAN) for the Firm." },
                { title: "ROF Registration", desc: "Submission of deed and docs to the Registrar of Firms (State Govt)." }
            ],
            whoNeedsLike: ["Family Businesses", "Small Retail Chains", "Law/CA Firms"],
            documents: {
                "Partners": ["PAN", "Aadhaar", "Photos"],
                "Office": ["Electricity Bill", "Rent Agreement", "NOC"]
            },
            fees: [
                { component: "Drafting & PAN", fee: "₹2,499", remarks: "Includes Professional Drafting" },
                { component: "ROF Registration", fee: "₹5,000+", remarks: "Govt Fee varies significantly by State" }
            ],
            faqs: [
                { question: "Is Partnership Deed mandatory?", answer: "Yes, to open a bank account and get a PAN, a notarized partnership deed is mandatory." },
                { question: "What is the tax rate?", answer: "Partnership firms are taxed at a flat rate of 30% on profits." }
            ]
        },
        "llp": {
            title: "Limited Liability Partnership (LLP)",
            tagline: "The modern upgrade to traditional partnership. Safe & Professional.",
            about: [
                "Limited Liability Partnership (LLP) is a corporate business vehicle that provides the benefits of limited liability while allowing its members the flexibility of organizing their internal structure as a partnership.",
                "It is regulated by the LLP Act, 2008 and is a separate legal entity distinct from its partners."
            ],
            keyFeature: "Partners are not responsible for the misconduct or negligence of other partners.",
            advantages: [
                { title: "Assets Protection", description: "In case of business loss, personal assets of partners are not attached." },
                { title: "No Mandatory Audit", description: "Audit is not required unless turnover exceeds ₹40 Lakhs or Contribution exceeds ₹25 Lakhs." },
                { title: "Dual Status", description: "Recognized as a Body Corporate but taxed like a Partnership." }
            ],
            processSteps: [
                { title: "Name Reservation", desc: "We file RUN-LLP to check and reserve your unique business name." },
                { title: "DSC & DIN", desc: "Obtaining Digital Signatures (DSC) for Designated Partners." },
                { title: "Incorporation", desc: "Filing form FiLLiP along with consent of partners." },
                { title: "LLP Agreement", desc: "Drafting and filing the LLP Agreement (Form 3) within 30 days of registration." }
            ],
            whoNeedsLike: ["Professional Service Providers", "Tech Startups (Bootstrapped)", "Small Businesses"],
            documents: {
                "Partners": ["PAN", "Aadhaar", "Bank Statement (Latest)", "Photo"],
                "Registered Office": ["Utility Bill (Power/Gas)", "NOC from Owner"]
            },
            fees: [
                { component: "Incorporation Pkg", fee: "₹6,999", remarks: "Includes Govt Fees (up to 1L Capital)" }
            ],
            faqs: [
                { question: "Can LLP raise Venture Capital?", answer: "VCs generally prefer Pvt Ltd companies. However, LLP is great for bootstrapped startups." },
                { question: "Is the LLP Agreement critical?", answer: "Yes! Failure to file Form 3 (Agreement) within 30 days attracts a penalty of ₹100 per day with no upper limit." }
            ]
        },
        "pvt-ltd": {
            title: "Private Limited Company",
            tagline: "The most trusted structure for scalable startups. Funding Ready.",
            about: [
                "A Private Limited Company is held by a few individuals privately. It is registered with the Ministry of Corporate Affairs (MCA) and is the most popular legal structure for businesses in India.",
                "It creates a separate legal identity, meaning the company can own assets, incur debts, and sue in its own name."
            ],
            keyFeature: "The only structure that allows you to issue Equity Shares to investors (VC/Angels) easily.",
            advantages: [
                { title: "Limited Liability", description: "Shareholders' liability is limited only to the unpaid amount on their shares." },
                { title: "Perpetual Succession", description: "The company continues to exist even if directors/shareholders die or leave." },
                { title: "Creditworthiness", description: "High trust factor for Bank Loans and Vendor Contracts." },
                { title: "ESOPs", description: "Option to offer Employee Stock Options to attract top talent." }
            ],
            processSteps: [
                { title: "Digital Signatures", desc: "We procure DSC for all Directors." },
                { title: "Name Approval", desc: "Checking name availability on MCA database." },
                { title: "Incorporation (SPICe+)", desc: "Filing MoA, AoA, and Incorporation forms." },
                { title: "PAN & TAN", desc: "Received simultaneously with the Certificate of Incorporation." },
                { title: "Bank Account", desc: "Opening of Current Account and depositing the capital." }
            ],
            whoNeedsLike: ["Startups seeking Investment", "E-commerce & Tech Companies", "Export Businesses"],
            documents: {
                "Directors": ["PAN", "Aadhaar", "Voter ID/Passport/DL", "Latest Bank Statement"],
                "Office": ["Electricity Bill", "Rent Agreement", "NOC"]
            },
            fees: [
                { component: "Startup Package", fee: "₹8,999", remarks: "All Inclusive (Govt Fees + Prof Fees)" }
            ],
            faqs: [
                { question: "Is physical presence required?", answer: "No, the entire process is 100% online." },
                { question: "What is the minimum capital?", answer: "There is no minimum capital requirement. You can start with ₹10,000." }
            ],
            comparison: {
                headers: ["Feature", "Pvt Ltd", "LLP"],
                rows: [
                    ["Investor Friendly", "High (Equity Shares)", "Low (Profit Share)"],
                    ["Compliance Cost", "Higher (Annual Audit Mandatory)", "Lower (Audit only if huge turnover)"],
                    ["Registration Time", "7-10 Days", "10-15 Days"],
                    ["Tax Rate", "25% (for new cos) + Cess", "30% + Cess"]
                ]
            }
        },
        "opc": {
            title: "One Person Company (OPC)",
            tagline: "Combines the solo control of Proprietorship with the safety of a Company.",
            about: [
                "The Companies Act, 2013 introduced the OPC concept to encourage solo entrepreneurs. It allows a single person to form a company.",
                "While it has all legal benefits of a Pvt Ltd (like limited liability), it is restrictive in nature (cannot issue ESOPs, only one member allowed)."
            ],
            keyFeature: "A Nominee is mandatory. This person takes over the company in case of the owner's death.",
            advantages: [
                { title: "Corporate Status", description: "Unlike proprietorship, OPC is a separate legal entity." },
                { title: "Limited Liability", description: "Your personal assets are safe from business risks." },
                { title: "Sole Control", description: "You hold 100% shares. No interference from other partners." }
            ],
            processSteps: [
                { title: "Nominee Consent", desc: "Obtain written consent from the Nominee." },
                { title: "DSC & Name", desc: "Apply for DSC and Name Reservation." },
                { title: "SPICe+ Filing", desc: "File incorporation documents with MCA." }
            ],
            whoNeedsLike: ["Solo Founders", "Consultants", "Artists"],
            documents: { "Owner": ["PAN", "Aadhaar", "Bank Stmt"], "Nominee": ["PAN", "Aadhaar"] },
            fees: [
                { component: "Incorporation", fee: "₹7,999", remarks: "All Inclusive" }
            ],
            faqs: [
                { question: "Does OPC need Audit?", answer: "Yes, statutory audit is mandatory for OPC just like Pvt Ltd." }
            ]
        },
        "section-8": {
            title: "Section 8 Company",
            tagline: "The NPO structure for Charities, Foundations, and Social Work.",
            about: [
                "A Section 8 Company is a company licensed under Section 8 of the Companies Act, 2013. It is established for promoting commerce, art, science, sports, education, research, social welfare, religion, charity, protection of environment, etc.",
                "It is similar to a Trust or Society but has better recognition and legal standing."
            ],
            keyFeature: "Profits/Donations cannot be taken out. They must be reinvested for the social cause.",
            advantages: [
                { title: "Donor Confidence", description: "Strict compliances make Section 8 trusted by Corporate Donors (CSR)." },
                { title: "Tax Holidays", description: "Eligible for 12A and 80G registration for tax-free income." },
                { title: "Membership", description: "Can be formed by individuals or even other companies." }
            ],
            processSteps: [
                { title: "DSC & DIN", desc: "Digital Signatures for Directors." },
                { title: "Name Approval", desc: "Name must show the social motive." },
                { title: "License (INC-12)", desc: "Applying for Central Govt License for Section 8 status." },
                { title: "Incorporation", desc: "Final registration with ROC." }
            ],
            whoNeedsLike: ["NGOs", "Research Institutes", "Charity Foundations"],
            documents: { "Directors": ["Identity Proofs"], "Project": ["Project Report (Estimated Income/Expense)"] },
            fees: [
                { component: "Full Registration", fee: "₹14,999", remarks: "Includes Govt License Fees" }
            ],
            faqs: [
                { question: "Is minimum capital required?", answer: "No, Section 8 companies do not need minimum paid-up capital." }
            ]
        },
        "trust": {
            title: "Trust Registration",
            tagline: "The traditional route for Family Trusts and Temples.",
            about: [
                "A Trust is an obligation annexed to the ownership of property. A 'Public Charitable Trust' is generally formed for the benefit of the public at large.",
                "Registration is done with the local Sub-Registrar / Charity Commissioner of the state."
            ],
            keyFeature: "Governed by the Indian Trusts Act, 1882. It is ideal for stationary assets like schools/hospitals.",
            advantages: [
                { title: "Easy Formation", description: "Process is relatively simpler than Section 8 company." },
                { title: "Family Control", description: "Often used for family succession planning (Private Trust)." },
                { title: "Permanence", description: "Once created, a public trust is generally irrevocable." }
            ],
            processSteps: [
                { title: "Drafting Deed", desc: "Detailed Trust Deed defining objects and trustees." },
                { title: "Stamp Duty", desc: "Buying Stamp Paper (value depends on property value)." },
                { title: "Registration", desc: "Physical presence of Trustees at Sub-Registrar office." }
            ],
            whoNeedsLike: ["Religious Bodies", "Educational Institutions", "Family Offices"],
            documents: { "Trustees": ["ID Proofs"], "Settlor": ["Property Papers"] },
            fees: [
                { component: "Professional Fee", fee: "₹11,999", remarks: "Excludes Stamp Duty" }
            ],
            faqs: [
                { question: "How many trustees?", answer: "At least two trustees are required to form a trust." }
            ]
        },
        "public-ltd": {
            title: "Public Limited Company",
            tagline: "Go Big. Raise Unlimited Capital from the Public.",
            about: [
                "A Public Limited Company is the highest form of corporate structure. It has no limit on the maximum number of members and can invite the public to subscribe to its shares (IPO).",
                "It operates under strict regulatory supervision to protect public interest."
            ],
            keyFeature: "Freely Transferable Shares. Shares can be bought/sold easily (if listed).",
            advantages: [
                { title: "Capital Access", description: "Can raise funds from the general public and banks easily." },
                { title: "Growth", description: "Ideal for massive expansion plans." },
                { title: "Prestige", description: "Highest level of corporate governance." }
            ],
            processSteps: [
                { title: "7 Members", desc: "Identify 7 shareholders and 3 directors." },
                { title: "DSC/DIN", desc: "Obtain digital signatures." },
                { title: "Name & Incorp", desc: "Similar to Pvt Ltd but with stricter MoA/AoA." },
                { title: "Commencement", desc: "Mandatory filing of INC-20A before starting business." }
            ],
            whoNeedsLike: ["Large Industries", "Infrastructure Companies"],
            documents: { "Directors": ["KYC"], "Shareholders": ["KYC"] },
            fees: [
                { component: "Incorporation", fee: "₹24,999", remarks: "Govt Fees dependent on Capital" }
            ],
            faqs: [
                { question: "Minimum members?", answer: "Min 7 members and 3 directors are mandatory." }
            ]
        },
        "producer": {
            title: "Producer Company",
            tagline: "The Corporate Face of Cooperative Societies.",
            about: [
                "A Producer Company is meant for farmers and agriculturists. It combines the goodness of a Cooperative Society with the professionalism of a Company.",
                "Members must be 'Primary Producers' (farmers, milk producers, weavers, etc.)."
            ],
            keyFeature: "It deals with the produce of its active members (processing, marketing, selling).",
            advantages: [
                { title: "Tax Benefits", description: "Huge tax deductions available for agricultural activities." },
                { title: "Loan Access", description: "NABARD and Banks have special schemes for Producer Cos." },
                { title: "Member Welfare", description: "Profits are shared as Patronage Bonus." }
            ],
            processSteps: [
                { title: "10 Members", desc: "Group of 10 individuals or 2 institutions." },
                { title: "Incorporation", desc: "Filing SPICe+ with Producer object clause." }
            ],
            whoNeedsLike: ["FPO (Farmer Producer Org)", "Dairy Unions", "Fisheries"],
            documents: { "Farmers": ["7/12 Extract or Farmer Certificate"] },
            fees: [
                { component: "Registration", fee: "₹19,999", remarks: "Includes Drafting" }
            ],
            faqs: [
                { question: "Can it be a public company?", answer: "A Producer Company is always a Private Limited Company by law." }
            ]
        },
        "indian-subsidiary": {
            title: "Indian Subsidiary",
            tagline: "Your Gateway to the Indian Market.",
            about: [
                "For foreign companies looking to do business in India, setting up a Wholly Owned Subsidiary (WOS) is the best route. It is an Indian Pvt Ltd company where 100% shares are held by the Foreign Parent Company.",
                "It is treated as a domestic company for tax purposes."
            ],
            keyFeature: "Allows 100% Foreign Direct Investment (FDI) under the Automatic Route for most sectors.",
            advantages: [
                { title: "Limited Liability", description: "Parent company liability is limited to share capital." },
                { title: "Control", description: "Parent company retains full control over operations." },
                { title: "Brand", description: "Use the global brand name in India." }
            ],
            processSteps: [
                { title: "Resident Director", desc: "Appoint at least one Director resident in India." },
                { title: "Legalization", desc: "Apostille/Notarize docs in home country." },
                { title: "Incorporation", desc: "File with MCA." },
                { title: "FDI Compliance", desc: "File FC-GPR with RBI after receiving funds." }
            ],
            whoNeedsLike: ["Foreign Brands", "Global IT Firms", "US/UK Startups"],
            documents: { "Foreign Parent": ["Certificate of Inc", "Charter Documents"], "Indian Director": ["PAN", "Aadhaar"] },
            fees: [
                { component: "Professional Fee", fee: "₹29,999", remarks: "Does not include RBI compliance" }
            ],
            faqs: [
                { question: "Can we repatriate profits?", answer: "Yes, profits can be sent back as dividends subject to Dividend Distribution Tax rules." }
            ]
        }
    },
    "registrations": {
        "startup-india": {
            title: "Startup India Registration (DPIIT)",
            tagline: "Unlock Tax Holidays, Patent Rebates & Government Tenders.",
            about: [
                "Startup India is a flagship initiative by the Govt of India to encourage innovation. Startups recognized by DPIIT can avail tax exemptions (80-IAC) and easier compliance norms.",
                "Only Private Limited Companies, LLPs, and Registered Partnerships are eligible relative to the age of the firm (< 10 years)."
            ],
            keyFeature: "Exemption from Angel Tax and 3 consecutive years of Income Tax holiday (post approval).",
            advantages: [
                { title: "Tax Exemption", description: "Apply for 3-year income tax exemption under 80-IAC." },
                { title: "IPR Benefits", description: "80% rebate on Patent fees & 50% on Trademark fees." },
                { title: "Govt Tenders", description: "Exemption from 'Prior Experience' and 'Turnover' criteria." },
                { title: "Easy Shut Down", description: "Fast track exit process within 90 days." }
            ],
            processSteps: [
                { title: "Eligibility Check", desc: "Verify if your entity fits the Innovation/Scalability criteria." },
                { title: "Profile Creation", desc: "Register on Startup India portal." },
                { title: "DPIIT Application", desc: "Submit detailed writeup of your 'Innovation' & Pitch Deck." },
                { title: "Recognition", desc: "Receive Certificate of Recognition." }
            ],
            whoNeedsLike: ["Tech Startups", "Innovative Brands", "Funded Companies"],
            documents: { "Entity": ["Incorporation Certificate", "Pan Card"], "Founder": ["Aadhaar", "Email/Mobile"], "Pitch": ["Pitch Deck", "Website Link"] },
            fees: [
                { component: "Consultancy", fee: "₹3,000", remarks: "Drafting & Application" }
            ],
            faqs: [
                { question: "Is Proprietorship eligible?", answer: "No, Proprietorship firms are NOT eligible. You must convert to LLP or Pvt Ltd." }
            ]
        },
        "udyam": {
            title: "Udyam Registration (MSME)",
            tagline: "The Government Identity for Small Businesses.",
            about: [
                "Udyam Registration is the official zero-cost registration for Micro, Small, and Medium Enterprises (MSME). It replaces the old Udyog Aadhaar.",
                "It is mandatory to avail government subsidies, low-interest loans, and protection against delayed payments."
            ],
            keyFeature: "Protection against delayed payments (Buyer must pay within 45 days).",
            advantages: [
                { title: "Subsidies", description: "Interest subsidy on bank loans & credit guarantee scheme." },
                { title: "Exclusive Tenders", description: "Access to tenders reserved only for MSMEs." },
                { title: "Concessions", description: "Discounts on electricity bills and patent registrations." }
            ],
            processSteps: [
                { title: "Aadhaar Auth", desc: "Validation via OTP linked to Proprietor's Aadhaar." },
                { title: "Data Entry", desc: "Filling turnover, investment, and NIC code details." },
                { title: "Certificate", desc: "Instant generation of Udyam Certificate." }
            ],
            whoNeedsLike: ["Every Business", "Traders", "Manufacturers", "Service Providers"],
            documents: { "Basic": ["Aadhaar Number", "PAN Number", "GSTIN (if available)"] },
            fees: [
                { component: "Professional Fee", fee: "₹499", remarks: "Processing Charge" },
                { component: "Govt Fee", fee: "₹0", remarks: "Free" }
            ],
            faqs: [
                { question: "Is GST mandatory for Udyam?", answer: "Not for all. However, recent rules suggest GSTIN is needed for turnover > 40L." }
            ]
        },
        "iec": {
            title: "Import Export Code (IEC)",
            tagline: "Your Passport to Global Trade.",
            about: [
                "IEC is a 10-digit code issued by the DGFT (Directorate General of Foreign Trade). It is mandatory for any Indian business to import goods/services or export them.",
                "It has lifetime validity and requires no annual maintenance (except a yearly KYC update)."
            ],
            keyFeature: "No specific compliance or monthly returns. Once taken, it stays valid forever.",
            advantages: [
                { title: "Global Market", description: "Legally ship products to international customers." },
                { title: "Customs Clearance", description: "Mandatory for clearing shipments at customs ports." },
                { title: "Bank Transfers", description: "Required for sending/receiving money in foreign currency." }
            ],
            processSteps: [
                { title: "Application", desc: "Online filing on DGFT portal." },
                { title: "Bank Validation", desc: "verification via Cancelled Cheque." },
                { title: "Issuance", desc: "IEC Certificate issued instantly or within 24 hours." }
            ],
            whoNeedsLike: ["Exporters", "Importers", "Freelancers with Foreign Clients"],
            documents: { "Entity": ["PAN", "Aadhaar", "Cancelled Cheque", "Address Proof"] },
            fees: [
                { component: "Govt Fee", fee: "₹500", remarks: "Paid to DGFT" },
                { component: "Prof Fee", fee: "₹1,999", remarks: "Filing" }
            ],
            faqs: [
                { question: "Is Digital Signature (DSC) needed?", answer: "Yes, DSC is mandatory for IEC application." }
            ]
        },
        "dsc": {
            title: "Digital Signature Certificate (DSC)",
            tagline: "Secure your online documents. Electronic Signing made easy.",
            about: [
                "A DSC is the digital equivalent of a physical signature. It is required for filing Income Tax returns, MCA filings (Company Reg), Tenders, and GST.",
                "We provide Class-3 DSC, which is the highest level of security."
            ],
            keyFeature: "Must for Directors, Auditors, and E-Tendering.",
            advantages: [
                { title: "High Security", description: "Encrypted token prevents tampering." },
                { title: "Paperless", description: "Sign PDFs and forms instantly." },
                { title: "Validity", description: "Available for 2 or 3 years." }
            ],
            processSteps: [
                { title: "KYC", desc: "Paperless verification via Aadhaar/Pan." },
                { title: "Video Record", desc: "20-second video verification by applicant." },
                { title: "Download", desc: "We download the DSC into a USB Crypto Token." },
                { title: "Dispatch", desc: "Token courier to your address." }
            ],
            whoNeedsLike: ["Directors", "Contractors (Tenders)", "CAs"],
            documents: { "Individual": ["PAN", "Aadhaar", "Phone/Email"] },
            fees: [
                { component: "Class 3 DSC", fee: "₹1,500", remarks: "Includes Token & 2 Yr Validity" }
            ],
            faqs: [
                { question: "Can someone else use my DSC?", answer: "Never share your DSC password. It has legal validity equal to your hand signature." }
            ]
        },
        "fcra": {
            title: "FCRA Registration",
            tagline: "Accept Foreign Contributions legally.",
            about: [
                "The Foreign Contribution Regulation Act (FCRA) registration is mandatory for NGOs, Societies, and Trusts to accept donations from foreign sources.",
                "It is regulated by the Ministry of Home Affairs (MHA) to ensure funds are not used against national interest."
            ],
            keyFeature: "Valid for 5 years. Renewal must be filed 6 months before expiry.",
            advantages: [
                { title: "Foreign Grants", description: "Receive funds from international donors." },
                { title: "Legitimacy", description: "High credibility for your NGO." }
            ],
            processSteps: [
                { title: "Darpan ID", desc: "Register on NITI Aayog." },
                { title: "SBI Account", desc: "Open FCRA account in SBI, New Delhi Main Branch." },
                { title: "Application", desc: "File Form FC-3A with MHA." },
                { title: "IB Verification", desc: "Intelligence Bureau verifies your antecedents." }
            ],
            whoNeedsLike: ["NGOs", "Charities", "Religious Trusts"],
            documents: { "NGO": ["Trust Deed", "PAN", "Activity Report (3 Yrs)"], "Chief": ["Affidavit"] },
            fees: [
                { component: "Govt Fee", fee: "₹10,000", remarks: "Application Fee" },
                { component: "Prof Fee", fee: "₹15,000+", remarks: "Consultancy" }
            ],
            faqs: [
                { question: "Can I receive foreign funds without FCRA?", answer: "Only with 'Prior Permission' for a specific donor, else No." }
            ]
        },
        "trade-license": {
            title: "Trade License",
            tagline: "Municipal permission to operate your trade.",
            about: [
                "A Trade License is a certificate issued by the Municipal Corporation allowing you to carry on a specific trade or business at a specific address.",
                "It ensures your business complies with city health and safety regulations."
            ],
            keyFeature: "Mandatory for physical shops, restaurants, and factories.",
            advantages: [
                { title: "Legal Safety", description: "Avoid sealing of your shop by municipality." },
                { title: "Credibility", description: "Local proof of business." }
            ],
            processSteps: [
                { title: "Application", desc: "Submit to local Municipal Corp." },
                { title: "Inspection", desc: "Health officer may inspect premises." },
                { title: "Fee Payment", desc: "Pay annual trade license fees." }
            ],
            whoNeedsLike: ["Retail Shops", "Restaurants", "Gyms"],
            documents: { "Premises": ["Property Tax Receipt", "Rent Agreement", "NOC"] },
            fees: [
                { component: "Govt Fee", fee: "Varies", remarks: "Based on Area & Trade Type" }
            ],
            faqs: [
                { question: "Is it same as Shop Act?", answer: "They are similar but Trade License focuses more on Health/Safety regulations." }
            ]
        },
        "fssai-reg": {
            title: "FSSAI Registration (Basic)",
            tagline: "Food Safety License for Small Businesses.",
            about: [
                "Mandatory for any food business (manufacturer, trader, restaurant) with annual turnover up to ₹12 Lakhs.",
                "It is a basic 14-digit registration number printed on food packages."
            ],
            keyFeature: "Ensures food quality and safety standards.",
            advantages: [
                { title: "Consumer Trust", description: "Display FSSAI logo to win customer confidence." },
                { title: "Legal Mandate", description: "Avoid fines up to ₹5 Lakhs." }
            ],
            processSteps: [
                { title: "Filing", desc: "Submit Form A on FoSCoS portal." },
                { title: "Processing", desc: "Auto-approval or Officer review." },
                { title: "Issuance", desc: "Certificate generated with QR code." }
            ],
            whoNeedsLike: ["Home Bakers", "Small Hawkers", "Kirana Stores"],
            documents: { "Owner": ["Photo", "ID Proof", "Address Proof"] },
            fees: [
                { component: "Govt Fee", fee: "₹100/yr", remarks: "Basic Fee" },
                { component: "Prof Fee", fee: "₹999", remarks: "Filing Service" }
            ],
            faqs: [
                { question: "Can I sell on Swiggy/Zomato?", answer: "Yes, FSSAI registration is mandatory for online food listing." }
            ]
        },
        "fssai-license": {
            title: "FSSAI State/Central License",
            tagline: "For High Turnover Food Businesses.",
            about: [
                "Required for food businesses with turnover > ₹12 Lakhs. 'State License' for turnover ₹12L - ₹20 Cr. 'Central License' for turnover > ₹20 Cr or Importers.",
                "Involves stricter scrutiny and food safety audits."
            ],
            keyFeature: "Mandatory for large manufacturers and importers.",
            advantages: [
                { title: "Expansion", description: "Operate on a larger scale." },
                { title: "Corporate Clients", description: "Necessary for supplying to corporates." }
            ],
            processSteps: [
                { title: "Form B", desc: "Detailed filing with technical details." },
                { title: "Inspection", desc: "Food Safety Officer (FSO) visits premises." },
                { title: "Approval", desc: "License issued for 1-5 years." }
            ],
            whoNeedsLike: ["Restaurants", "Hotels", "Food Factories", "Importers"],
            documents: { "Unit": ["Blueprint", "Machinery List", "Water Test Report"] },
            fees: [
                { component: "State License", fee: "₹2000-5000/yr", remarks: "Govt Fee" },
                { component: "Central License", fee: "₹7500/yr", remarks: "Govt Fee" }
            ],
            faqs: [
                { question: "Is water test report mandatory?", answer: "Yes, for manufacturers and restaurants, a water report is a must." }
            ]
        },
        "drug-license": {
            title: "Drug License",
            tagline: "Essential for Pharmacy & Medical Wholesaling.",
            about: [
                "To sell, stock, or manufacture medicines/drugs in India, a Drug License from the State Drug Control Organization is mandatory.",
                "Requires a registered pharmacist to be on payroll."
            ],
            keyFeature: "Strictly regulated. Operating without it is a non-bailable offense.",
            advantages: [
                { title: "Retail Pharmacy", description: "Open a Medical Store (Chemist Shop)." },
                { title: "Wholesale", description: "Distribute medicines to hospitals/retailers." }
            ],
            processSteps: [
                { title: "Application", desc: "File with State Drug Controller." },
                { title: "Inspection", desc: "Drug Inspector verifies the premises (Refrigeration etc)." },
                { title: "Interview", desc: "Competent person interview." }
            ],
            whoNeedsLike: ["Medical Stores", "Pharma Distributors"],
            documents: { "Pharmacist": ["Degree", "Reg Certificate"], "Shop": ["Blueprint", "Refrigerator Invoice"] },
            fees: [
                { component: "Govt Fee", fee: "₹3,000", remarks: "Approx (varies by state)" }
            ],
            faqs: [
                { question: "Is Fridge mandatory?", answer: "Yes, having a refrigerator is mandatory to store vaccines/insulin." }
            ]
        },
        "shop-act": {
            title: "Shop & Establishment Act",
            tagline: "State Registration for Offices & Shops.",
            about: [
                "Commonly known as 'Gumasta' in some states. It regulates the working conditions of employees (hours, leave, wages).",
                "Mandatory for every shop, commercial establishment, residential hotel, restaurant, theater, etc."
            ],
            keyFeature: "Often serves as the primary proof of business for bank account opening.",
            advantages: [
                { title: "Bank Account", description: "Main document for Current Account." },
                { title: "Legal Status", description: "Proof of commercial presence." }
            ],
            processSteps: [
                { title: "Online Filing", desc: "State Labour Dept portal." },
                { title: "Fee Payment", desc: "Challan payment." },
                { title: "Download", desc: "Instant or 2-day approval." }
            ],
            whoNeedsLike: ["Shops", "Offices", "Freelancers"],
            documents: { "Shop": ["Photo of Board (Marathi/Local Lang)"] },
            fees: [
                { component: "Govt Fee", fee: "₹250+", remarks: "Based on employee count" }
            ],
            faqs: [
                { question: "Is it required for home business?", answer: "Usually yes, if you are running a commercial activity." }
            ]
        },
        "fire-license": {
            title: "Fire License (NOC)",
            tagline: "Safety First. Compliance with Fire Dept.",
            about: [
                "A Fire NOC ensures that a building layout meets fire safety standards. Mandatory for factories, hotels, hospitals, and high-rises.",
                "Issued by the State Fire Department."
            ],
            keyFeature: "Critical for obtaining Building Completion Certificate.",
            advantages: [
                { title: "Safety", description: "Protects life and property." },
                { title: "Compliance", description: "Required for other licenses like Health/Trade." }
            ],
            processSteps: [
                { title: "Plan Review", desc: "Submission of building plans." },
                { title: "Installations", desc: "Installing extinguishers/hydrants." },
                { title: "Inspection", desc: "Fire officer visit." }
            ],
            whoNeedsLike: ["Hotels", "Hospitals", "Factories"],
            documents: { "Building": ["Architect Plan", "Ownership Proof"] },
            fees: [
                { component: "Fee", fee: "Area Based", remarks: "Calculated per sq. meter" }
            ],
            faqs: [
                { question: "Validity?", answer: "Typically valid for 1 year (renew annually)." }
            ]
        },
        "iso": {
            title: "ISO Certification",
            tagline: "International Standard for Quality & Trust.",
            about: [
                "ISO Certification (like ISO 9001:2015) proves that your products/services meet international quality standards.",
                "We provide IAF (International Accreditation Forum) active certificates which are globally recognized."
            ],
            keyFeature: "Greatly enhances brand image and eligibility for tenders.",
            advantages: [
                { title: "Credibility", description: "Global mark of quality." },
                { title: "Tenders", description: "Bonus points in Govt tenders." },
                { title: "Efficiency", description: "Standardizes internal processes." }
            ],
            processSteps: [
                { title: "Consultation", desc: "Choose standard (9001, 27001, etc)." },
                { title: "Audit", desc: "Review of your processes." },
                { title: "Certification", desc: "Issuance of ISO Certificate." }
            ],
            whoNeedsLike: ["Manufacturers", "Service Companies", "Exporters"],
            documents: { "Biz": ["GST", "Invoice Sample", "Letterhead"] },
            fees: [
                { component: "IAF ISO", fee: "₹2,500", remarks: "Starting Price" }
            ],
            faqs: [
                { question: "What is IAF vs Non-IAF?", answer: "IAF is globally accepted. Non-IAF is private/domestic. Always choose IAF for tenders." }
            ]
        },
        "halal": {
            title: "Halal Certification",
            tagline: "Mandatory for Export to Islamic Countries.",
            about: [
                "Halal Certification guarantees that the food is prepared according to Islamic law (unadulterated and permissible).",
                "It is a must for exporting meat or food products to Gulf countries."
            ],
            keyFeature: "Opens up the market to 1.8 Billion Muslim consumers globally.",
            advantages: [
                { title: "Export", description: "Gateway to Middle-East markets." },
                { title: "Trust", description: "Assurance of hygiene and purity." }
            ],
            processSteps: [
                { title: "Lab Test", desc: "Ingredients testing." },
                { title: "Audit", desc: "Site audit by Sharia Board." }
            ],
            whoNeedsLike: ["Meat Exporters", "Cosmetics Brands"],
            documents: { "Product": ["Ingredient List", "Lab Reports"] },
            fees: [
                { component: "Certification", fee: "Product Wise", remarks: "Varies" }
            ],
            faqs: [
                { question: "Is it only for meat?", answer: "No, cosmetics and pharmaceuticals also get Halal certified." }
            ]
        },
        "bis": {
            title: "BIS Registration (ISI Mark)",
            tagline: "Safety Standard for Electronics & Industrial Goods.",
            about: [
                "Bureau of Indian Standards (BIS) registration is compulsory for certain products like Electronics, Helmets, Toys, and Cement.",
                "It grants the license to use the ISI Mark."
            ],
            keyFeature: "Selling non-BIS certified mandatory goods is a punishable offense.",
            advantages: [
                { title: "Quality", description: "Benchmark of safety." },
                { title: "Market Access", description: "Mandatory for Indian market entry." }
            ],
            processSteps: [
                { title: "Testing", desc: "Product testing in BIS authorized lab." },
                { title: "Application", desc: "Submit test report + application." }
            ],
            whoNeedsLike: ["Electronics Brand", "LED Lights", "Power Adapters"],
            documents: { "Factory": ["Manufacturing Process", "Test Reports"] },
            fees: [
                { component: "Govt Fee", fee: "High", remarks: "Includes Lab charges" }
            ],
            faqs: [
                { question: "Is foreign factory registration possible?", answer: "Yes, via FMCS scheme." }
            ]
        },
        "barcode": {
            title: "Barcode Registration (GS1)",
            tagline: "Scanning success for Retail Products.",
            about: [
                "Barcodes (EAN-13) are scannable codes seen on products. To sell in modern retail (Big Bazaar, Reliance) or Amazon, you need a globally unique barcode.",
                "GS1 India is the only authorized body to issue unique codes."
            ],
            keyFeature: "Unique identification for inventory management and billing.",
            advantages: [
                { title: "Retail Ready", description: "Must for Supermarkets." },
                { title: "eCommerce", description: "Required for GTIN on Google/Amazon." }
            ],
            processSteps: [
                { title: "Registration", desc: "Apply with GS1 India." },
                { title: "Allotment", desc: "Get GTIN series (e.g. 100 codes)." }
            ],
            whoNeedsLike: ["FMCG Brands", "Retail Products"],
            documents: { "Biz": ["GST", "Balance Sheet", "Turnover Proof"] },
            fees: [
                { component: "Govt Fee", fee: "Variable", remarks: "Paid to GS1 India based on turnover" },
                { component: "Prof Fee", fee: "₹5,000", remarks: "Registration Assistance" }
            ],
            faqs: [
                { question: "Can I buy cheap barcodes online?", answer: "Caution: Cheap resale codes may cause issues on Amazon. Go for GS1." }
            ]
        },
        "pf": {
            title: "EPF Registration",
            tagline: "Employee Provident Fund. Social Security.",
            about: [
                "Mandatory for any establishment with 20 or more employees. It is a retirement savings scheme.",
                "Employer and Employee both contribute 12% of basic salary."
            ],
            keyFeature: "Tax-free savings for employees.",
            advantages: [
                { title: "Pension", description: "Includes EPS (Pension Scheme)." },
                { title: "Insurance", description: "Free EDLI Insurance cover." }
            ],
            processSteps: [
                { title: "Shram Suvidha", desc: "Apply on Common Portal." },
                { title: "DSC Sign", desc: "Sign with DSC." }
            ],
            whoNeedsLike: ["Companies with 20+ Staff"],
            documents: { "Staff": ["List of Employees"] },
            fees: [
                { component: "Prof Fee", fee: "₹2,500", remarks: "Initial Setup" }
            ],
            faqs: [
                { question: "Can I register voluntarily with < 20 staff?", answer: "Yes, voluntary registration is allowed." }
            ]
        },
        "esi": {
            title: "ESI Registration",
            tagline: "Health Insurance for Low-Wage Employees.",
            about: [
                "Employees' State Insurance (ESI) is mandatory for units with 10 or more employees where wages are less than ₹21,000.",
                "Provides full medical care to the employee and family."
            ],
            keyFeature: "Cash benefits for sickness, maternity, and disablement.",
            advantages: [
                { title: "Medical", description: "Free treatment in ESI hospitals." }
            ],
            processSteps: [
                { title: "Registration", desc: "Online application." },
                { title: "Code", desc: "Receive 17-digit code." }
            ],
            whoNeedsLike: ["Factories", "Shops with staff"],
            documents: { "Staff": ["Family Details", "Aadhaar"] },
            fees: [
                { component: "Prof Fee", fee: "₹2,500", remarks: "Initial Setup" }
            ],
            faqs: [
                { question: "Is contribution mandatory?", answer: "Yes, approx 4% total (Employer+Employee) of wages." }
            ]
        },
        "professional-tax": {
            title: "Professional Tax (P.Tax)",
            tagline: "State tax on Employment & Trade.",
            about: [
                "Professional Tax is levied by State Governments (like Maharashtra, Karnataka) on salaried employees and professionals.",
                "Employers must deduct it from salary and pay to the Govt."
            ],
            keyFeature: "Separate registrations for Individual (PTEC) and Employer (PTRC).",
            advantages: [
                { title: "Compliance", description: "Avoid penalties." }
            ],
            processSteps: [
                { title: "Registration", desc: "Apply with State Tax Dept." }
            ],
            whoNeedsLike: ["Employers", "Doctors", "Chartered Accountants"],
            documents: { "Biz": ["Address Proof", "Establishment Cert"] },
            fees: [
                { component: "Prof Fee", fee: "₹1,500", remarks: "PTEC+PTRC" }
            ],
            faqs: [
                { question: "Is it applicable in Delhi?", answer: "No, currently no Professional Tax in Delhi." }
            ]
        },
        "12a-80g": {
            title: "12A & 80G Registration (NGO)",
            tagline: "Tax Exemption for NGO & Donors.",
            about: [
                "12A Registration exempts the NGO's income from Income Tax.",
                "80G Registration allows donors to claim tax deduction on their donations."
            ],
            keyFeature: "Without this, an NGO pays tax like a normal company and attracts fewer donors.",
            advantages: [
                { title: "Tax Free", description: "Income applied to charity is tax free." },
                { title: "Fundraising", description: "Donors get 50% tax benefit." }
            ],
            processSteps: [
                { title: "Form 10A", desc: "File application with IT Commissioner." },
                { title: "Provisional", desc: "Get Provisional Cert for 3 years." }
            ],
            whoNeedsLike: ["NGOs, Trusts"],
            documents: { "Trust": ["Deed", "Activity Proof"] },
            fees: [
                { component: "Prof Fee", fee: "₹7,500", remarks: "Combined Application" }
            ],
            faqs: [
                { question: "Is it permanent?", answer: "Initially Provisional (3 yrs), then Regular (5 yrs)." }
            ]
        }
    },
    "trademark": {
        "registration": {
            title: "Trademark Registration",
            tagline: "Protect your Brand, Logo, and Slogan.",
            about: ["Trademark registration gives you exclusive rights to your brand name and logo, preventing others from copying it."],
            advantages: [{ title: "Brand Protection", description: "Legal right to sue infringers." }, { title: "Asset", description: "Intangible asset for valuation." }],
            checklist: ["TM Search", "Class Selection", "Application Filing"],
            fees: [{ component: "Govt Fee", fee: "₹4,500/class", remarks: "For MSME/Individual" }, { component: "Prof Fee", fee: "₹2,000", remarks: "Search & Filing" }]
        },
        "objection": { title: "Trademark Objection Reply", about: ["Response to examination report issued by TM Registry."], fees: [{ component: "Prof Fee", fee: "₹2,500", remarks: "Legal drafting" }] },
        "opposition": { title: "Trademark Opposition", about: ["Opposing a conflicting trademark published in the journal."] },
        "renewal": { title: "Trademark Renewal", about: ["Renewing your TM every 10 years to keep it active."] }
    },
    "mca": {
        "name-change": {
            title: "Company Name Change",
            tagline: "Rebrand your Business.",
            about: ["Changing a company name requires a Board Resolution, checking name availability (RUN), and filing MGT-14 & INC-24. It is a 2-step process involved Central Govt approval."],
            keyFeature: "New Certificate of Incorporation is issued.",
            advantages: [{ title: "Rebranding", description: "Align name with new vision." }],
            processSteps: [{ title: "RUN", desc: "Reserve new name." }, { title: "MGT-14", desc: "Pass Special Resolution." }, { title: "INC-24", desc: "Central Govt Approval." }],
            whoNeedsLike: ["Rebranding Startups"],
            documents: { "Legal": ["Board Resolution", "EGM Notice"] },
            fees: [{ component: "Professional Fee", fee: "₹5,000", remarks: "Excludes Govt Fees" }],
            faqs: [{ question: "Does PAN change?", answer: "Yes, Company PAN and TAN will change." }]
        },
        "office-change": {
            title: "Registered Office Change",
            tagline: "Shift your Business Address.",
            about: ["Shifting office within the same city is easy (INC-22). Shifting between states is complex and requires Central Govt approval."],
            keyFeature: "Must display new address on board outside office.",
            advantages: [{ title: "Flexibility", description: "Move to better location." }],
            processSteps: [{ title: "Board Res", desc: "Approve shift." }, { title: "INC-22", desc: "File within 30 days." }],
            whoNeedsLike: ["Relocating Businesses"],
            documents: { "New Address": ["Rent Agreement", "Utility Bill", "NOC"] },
            fees: [{ component: "Local Shift", fee: "₹2,500", remarks: "Within city" }],
            faqs: [{ question: "Can we use coworking space?", answer: "Yes, as long as they provide a utility bill and NOC." }]
        },
        "moa": {
            title: "MOA Amendment",
            tagline: "Change your Business Objective.",
            about: ["To change the main object clause of your company, you need to amend the Memorandum of Association (MOA) by filing MGT-14."],
            keyFeature: "Required when diversifying business.",
            advantages: [{ title: "Expansion", description: "Enter new sectors." }],
            documents: { "Legal": ["Special Resolution"] },
            fees: [{ component: "Filing Fee", fee: "₹3,999", remarks: "MGT-14" }]
        },
        "aoa": {
            title: "AOA Amendment",
            tagline: "Change Internal Rules.",
            about: ["Articles of Association (AOA) define the internal rules. Modifying them requires a Special Resolution and MGT-14 filing."],
            keyFeature: "Critical for adopting new Shareholders Agreement.",
            documents: { "Legal": ["Altered AOA"] },
            fees: [{ component: "Filing Fee", fee: "₹3,999", remarks: "MGT-14" }]
        },
        "increase-capital": {
            title: "Increase Authorized Capital",
            tagline: "Issue more shares for funding.",
            about: ["To issue new shares to investors, you must first increase the Authorized Capital by filing Form SH-7 and paying stamp duty."],
            keyFeature: "Pre-requisite for fundraising.",
            documents: { "Legal": ["Board Resolution", "Extraordinary General Meeting"] },
            fees: [{ component: "Prof Fee", fee: "₹2,500", remarks: "Excludes Stamp Duty" }]
        },
        "add-director": {
            title: "Add Director",
            tagline: "Expand your Board.",
            about: ["Appointing a new Director requires filing Form DIR-12 along with their consent (DIR-2) and declaration (DIR-8)."],
            keyFeature: "DIN is mandatory.",
            documents: { "director": ["PAN", "Aadhaar", "Photo", "DIN"] },
            fees: [{ component: "Filing Fee", fee: "₹1,999", remarks: "Per Director" }]
        },
        "remove-director": {
            title: "Remove Director",
            tagline: "Resignation or Removal.",
            about: ["A director can resign by giving notice (DIR-11) and the company accepts it via DIR-12. Removal is a complex process requiring special notice."],
            keyFeature: "Resignation effective from date of notice.",
            documents: { "Legal": ["Resignation Letter", "Board Resolution"] },
            fees: [{ component: "Filing Fee", fee: "₹1,999", remarks: "Per Director" }]
        },
        "din-ekyc": {
            title: "DIN eKYC (DIR-3 KYC)",
            tagline: "Start of Year Compliance for Directors.",
            about: ["Every Director with a DIN must file DIR-3 KYC annually before Sept 30th. Failure attracts a straight penalty of ₹5,000."],
            keyFeature: "Penalty ₹5,000 if missed.",
            documents: { "Personal": ["OTP of Mobile & Email"] },
            fees: [{ component: "Filing Fee", fee: "₹999", remarks: "Per Director" }]
        },
        "din-reactivation": {
            title: "DIN Reactivation",
            tagline: "Reactivate Disqualified DIN.",
            about: ["If your DIN is deactivated due to non-filing of KYC, you can reactivate it by paying the penalty of ₹5,000."],
            fees: [{ component: "Govt Penalty", fee: "₹5,000", remarks: "Mandatory" }]
        },
        "company-compliance": {
            title: "Annual Company Compliance",
            tagline: "Mandatory ROC Filing for Pvt Ltd.",
            about: ["Every Company must file Annual Returns (MGT-7) and Financial Statements (AOC-4). Non-compliance attracts daily penalties."],
            keyFeature: "Penalty ₹100/day.",
            documents: { "Financials": ["Audited BS/PL"] },
            fees: [{ component: "Package", fee: "₹10,000+", remarks: "Excludes Govt Fees" }]
        },
        "llp-compliance": {
            title: "LLP Annual Compliance",
            tagline: "Form 11 and Form 8 Filing.",
            about: ["LLPs must file Form 11 (Annual Return) and Form 8 (Solvency)."],
            keyFeature: "Compliance mandatory even for zero turnover.",
            fees: [{ component: "Package", fee: "₹5,000", remarks: "Both Forms" }]
        },
        "adt-1": {
            title: "ADT-1 Filing (Auditor Appointment)",
            tagline: "Appoint Statutory Auditor.",
            about: ["Every company must appoint an auditor for 5 years by filing ADT-1 within 15 days of AGM."],
            fees: [{ component: "Filing Fee", fee: "₹1,499", remarks: "One time" }]
        },
        "dpt-3": {
            title: "DPT-3 Filing",
            tagline: "Return of Deposits.",
            about: ["Mandatory return for companies having outstanding loans/money other than from banks. Due by Jun 30th."],
            fees: [{ component: "Filing Fee", fee: "₹1,999", remarks: "Annual" }]
        },
        "llp-11": {
            title: "LLP Form 11",
            tagline: "Annual Return for LLP.",
            about: ["Summary of partners and contribution. Due by May 30th."],
            fees: [{ component: "Filing Fee", fee: "₹1,500", remarks: "Excludes Govt Fee" }]
        },
        "inc-20a": {
            title: "INC-20A (Commencement of Business)",
            tagline: "Unlock your Bank Account.",
            about: ["Newly incorporated companies must file INC-20A within 180 days showing proof of capital deposit in bank."],
            keyFeature: "Cannot start business without this.",
            fees: [{ component: "Filing Fee", fee: "₹1,999", remarks: "One Time" }]
        },
        "winding-up-company": {
            title: "Winding Up (Company Closure)",
            tagline: "Legally Close your Company.",
            about: ["Strike Off (STK-2) is the fast track exit for defunct companies with zero assets/liabilities."],
            fees: [{ component: "Fee", fee: "₹15,000", remarks: "Includes Govt Fee" }]
        },
        "winding-up-llp": {
            title: "Winding Up (LLP Closure)",
            tagline: "Form 24 Filing.",
            about: ["Close your inactive LLP legally to avoid future penalties."],
            fees: [{ component: "Fee", fee: "₹10,000", remarks: "Processing" }]
        },
        "dormant": {
            title: "Dormant Status (MSC-1)",
            tagline: "Pause your Compliance.",
            about: ["Apply for Dormant Status if you are not doing business but want to keep the company alive for future."],
            fees: [{ component: "Filing Fee", fee: "₹5,000", remarks: "MSC-1" }]
        },
        "share-transfer": {
            title: "Share Transfer",
            tagline: "Transfer Equity.",
            about: ["Execute Share Transfer Deed (SH-4) and pay Stamp Duty to transfer shares."],
            fees: [{ component: "Service Fee", fee: "₹3,999", remarks: "Drafting" }]
        }
    },
    "compliance": {
        "proprietorship": {
            title: "Proprietorship Compliance",
            tagline: "ITR and GST Filing for Proprietors.",
            about: ["Complete annual compliance for sole proprietors including Income Tax and GST returns."],
            fees: [{ component: "Annual Package", fee: "₹5,000+", remarks: "Based on turnover" }]
        },
        "partnership": {
            title: "Partnership Compliance",
            tagline: "ITR-5 and GST.",
            about: ["End-to-end tax compliance for Partnership firms."],
            fees: [{ component: "Annual Package", fee: "₹7,000+", remarks: "Excludes Audit" }]
        },
        "pf-return": {
            title: "PF Return Filing",
            tagline: "Monthly ECR Filing.",
            about: ["Mandatory monthly filing for establishments with >20 employees."],
            fees: [{ component: "Monthly", fee: "₹999", remarks: "Up to 10 employees" }]
        },
        "esi-return": {
            title: "ESI Return Filing",
            tagline: "Employee State Insurance.",
            about: ["Monthly contribution filing for employees with salary < ₹21,000."],
            fees: [{ component: "Monthly", fee: "₹999", remarks: "Up to 10 employees" }]
        },
        "pt-return": {
            title: "Professional Tax Return",
            tagline: "State-wise Compliance.",
            about: ["Filing of PT returns for employees (PT-EC) and employer (PT-RC)."],
            fees: [{ component: "Monthly", fee: "₹500", remarks: "Per state" }]
        },
        "fdi": {
            title: "FDI Filing (RBI)",
            tagline: "Foreign Direct Investment Compliance.",
            about: ["Reporting FDI inflow in SMF-FIRMS portal via FC-GPR form."],
            fees: [{ component: "Filing Fee", fee: "₹10,000+", remarks: "RBI Liaison extra" }]
        },
        "fla": {
            title: "FLA Return",
            tagline: "Foreign Liabilities and Assets.",
            about: ["Annual return for companies having FDI or ODI. Due by July 15th."],
            fees: [{ component: "Filing Fee", fee: "₹4,000", remarks: "Annual" }]
        },
        "fssai-renewal": {
            title: "FSSAI Renewal",
            tagline: "Keep your Food License Active.",
            about: ["FSSAI license must be renewed before expiry to avoid penalties."],
            fees: [{ component: "Fee", fee: "₹1,500", remarks: "Plus Govt Fee" }]
        },
        "fssai-return": {
            title: "FSSAI Annual Return",
            tagline: "Mandatory for Manufacturers/Importers.",
            about: ["Filing Form D-1 annual return by May 31st."],
            fees: [{ component: "Filing Fee", fee: "₹2,500", remarks: "Per License" }]
        },
        "bookkeeping": {
            title: "Bookkeeping Services",
            tagline: "Outsourced Accounting.",
            about: ["Daily/Weekly recording of transactions in Tally/Zoho."],
            fees: [{ component: "Monthly", fee: "₹2,500+", remarks: "Volume based" }]
        },
        "payroll": {
            title: "Payroll Services",
            tagline: "Salary Processing.",
            about: ["Calculation of net salary, taxes, and generation of payslips."],
            fees: [{ component: "Per Employee", fee: "₹150", remarks: "Monthly" }]
        },
        "business-plan": {
            title: "Business Plan / DPR",
            tagline: "For Bank Loans and Investors.",
            about: ["Detailed Project Report (DPR) covering financial projections and business model."],
            fees: [{ component: "Drafting", fee: "₹10,000+", remarks: "Detailed Report" }]
        },
        "ca-support": {
            title: "On-Demand CA Support",
            tagline: "Expert Opinion.",
            about: ["Book a call with a Chartered Accountant for specific queries."],
            fees: [{ component: "Hourly", fee: "₹1,000", remarks: "Consultation" }]
        }
    },
    "legal": {
        "shareholders-agreement": {
            title: "Shareholders Agreement (SHA)",
            tagline: "Protect Investor Rights.",
            about: ["Defining relationship between company and shareholders."],
            fees: [{ component: "Drafting", fee: "₹5,000+", remarks: "Custom" }]
        },
        "founders-agreement": {
            title: "Founders Agreement",
            tagline: "Co-founder roles & equity.",
            about: ["Agreement to avoid disputes between co-founders."],
            fees: [{ component: "Drafting", fee: "₹4,000", remarks: "Standard" }]
        },
        "nda": {
            title: "Non-Disclosure Agreement (NDA)",
            tagline: "Confidentiality Contract.",
            about: ["Protect trade secrets when sharing info with others."],
            fees: [{ component: "Drafting", fee: "₹1,500", remarks: "Standard" }]
        },
        "employment-agreement": {
            title: "Employment Agreement",
            tagline: "HR Contracts.",
            about: ["Offer letters and employment contracts with non-compete clauses."],
            fees: [{ component: "Drafting", fee: "₹2,000", remarks: "Template" }]
        },
        "legal-notice": {
            title: "Legal Notice",
            tagline: "Formal Demand.",
            about: ["Sending a legal warning for disputes/recovery."],
            fees: [{ component: "Notice", fee: "₹2,000", remarks: "Drafting & Sending" }]
        },
        "cheque-bounce": {
            title: "Cheque Bounce Notice",
            tagline: "Section 138 Notice.",
            about: ["Notice for dishonour of cheque."],
            fees: [{ component: "Notice", fee: "₹2,500", remarks: "Urgent" }]
        },
        "consumer-complaint": {
            title: "Consumer Complaint",
            tagline: "Fight against unfair trade.",
            about: ["Drafting and filing complaint in Consumer Forum."],
            fees: [{ component: "Filing", fee: "₹5,000+", remarks: "Case based" }]
        },
        "ipr-infringement": {
            title: "IPR Infringement Suit",
            tagline: "Protect your IP.",
            about: ["Legal action against violation of Trademark/Copyright."],
            fees: [{ component: "Legal Fee", fee: "Custom", remarks: "Litigation" }]
        }
    },
    "global": {
        "usa-company": {
            title: "USA Company Incorporation",
            tagline: "Delaware C-Corp / Wyoming LLC.",
            about: ["Form a US entity to access global markets and payment gateways."],
            fees: [{ component: "Package", fee: "$500+", remarks: "State fees extra" }]
        },
        "uk-company": {
            title: "UK Limited Company",
            tagline: "European Presence.",
            about: ["Fastest incorporation in the world. Good for dropshipping."],
            fees: [{ component: "Fee", fee: "£150", remarks: "All inclusive" }]
        },
        "singapore-company": {
            title: "Singapore Pte Ltd",
            tagline: "Asian Hub.",
            about: [" incorporate in Singapore for tax efficiency and trust."],
            fees: [{ component: "Fee", fee: "SGD 2,000+", remarks: "Secretarial extra" }]
        },
        "uae-company": {
            title: "UAE Company Formation",
            tagline: "Dubai/Sharjah Free Zones.",
            about: ["Tax free business setup with residency visa options."],
            fees: [{ component: "Package", fee: "AED 12,500+", remarks: "Starts from" }]
        },
        "uae-ecommerce": {
            title: "UAE e-Commerce License",
            tagline: "Sell on Amazon.ae & Noon.",
            about: ["Specific license for e-commerce trading in UAE."],
            fees: [{ component: "License", fee: "AED 6,000+", remarks: "Annual" }]
        },
        "usa-trademark": {
            title: "USA Trademark (USPTO)",
            tagline: "Brand Protection in USA.",
            about: ["File for trademark in USPTO to protect brand in US market."],
            fees: [{ component: "Filing", fee: "$600+", remarks: "Per class" }]
        },
        "international-trademark": {
            title: "International Trademark",
            tagline: "Madrid Protocol.",
            about: ["Protect brand in multiple countries with one application."],
            fees: [{ component: "Fee", fee: "Custom", remarks: "Country based" }]
        },
        "ajman": {
            title: "Ajman Free Zone",
            tagline: "Cost Effective Setup.",
            about: ["Cheapest free zone for freelancers and trading."],
            fees: [{ component: "Package", fee: "AED 6,000", remarks: "No Visa" }]
        },
        "uaq": {
            title: "UAQ Free Zone",
            tagline: "Modern Industrial Free Zone.",
            about: ["Umm Al Quwain Free Trade Zone authority."],
            fees: [{ component: "Package", fee: "AED 8,000", remarks: "Consulting" }]
        },
        "uae-attestation": {
            title: "UAE Embassy Attestation",
            tagline: "Document Legalization.",
            about: ["Attestation of educational/marriage/birth certificates for UAE visa."],
            fees: [{ component: "Fee", fee: "₹4,000", remarks: "Per Document" }]
        }
    },
    "gst": {
        "registration": {
            title: "Online GST Registration (Official)",
            tagline: "Get your GSTIN in 3-5 days. Seamless, Online & Paperless.",
            about: [
                "Goods and Services Tax (GST) is the biggest Indirect Tax reform in India. A GST number (GSTIN) is mandatory for businesses with annual turnover exceeding ₹40 Lakhs (for Goods) or ₹20 Lakhs (for Services), and also for those selling online (Amazon, Flipkart) or Interstate.",
                "Operating without a valid GSTIN when liable can attract heavy penalties (100% of tax due). We simplify the entire registration lifecycle for you."
            ],
            keyFeature: "Input Tax Credit (ITC) can only be claimed if you have a valid GSTIN. GST is also mandatory for listing on eCommerce portals.",
            advantages: [
                { title: "Input Tax Credit", description: "Claim refund on taxes paid on purchases, reducing effective cost." },
                { title: "Legal Recognition", description: "Legally operate as a supplier and issue Tax Invoices." },
                { title: "eCommerce Enabler", description: "Mandatory for selling on online marketplaces like Amazon/Flipkart." },
                { title: "Interstate Trade", description: "Required for selling goods to customers in other states." }
            ],
            // RICH PROCESS OBJECT
            processSteps: [
                { title: "Eligibility Check", desc: "Our CA verifies your turnover and business category to confirm GST liability." },
                { title: "Document Collection", desc: "We collect scanned copies of PAN, Aadhaar, Photo, and Business Address Proof." },
                { title: "Application Drafting", desc: "Filing of form GST REG-01 on the government portal with precise HSN/SAC codes." },
                { title: "Aadhaar Authentication", desc: "You receive an OTP link from the GST department for instant verification." },
                { title: "Department Processing", desc: "The tax officer reviews the application (approx 3-7 working days)." },
                { title: "Certificate Issuance", desc: "On approval, GST REG-06 Certificate is issued. We email it to you." }
            ],
            whoNeedsLike: [
                "Businesses with turnover > ₹40 Lakhs (Goods) / ₹20 Lakhs (Services)",
                "eCommerce Sellers (Amazon, Flipkart, Meesho)",
                "Interstate Suppliers (Selling from one state to another)",
                "Casual Taxable Persons (Exhibitions, Events)",
                "Agents of a Supplier"
            ],
            penalties: "100% of the tax due or ₹10,000 (whichever is higher) for not registering when liable.",
            documents: {
                "Individual / Proprietor": ["PAN Card", "Aadhaar Card", "Passport Photo"],
                "Business Address Proof": ["Electricity Bill / Water Bill (Latest)", "Rent Agreement (if rented)", "NOC from Owner (Format provided by us)"],
                "Bank Details": ["Cancelled Cheque", "Bank Statement (First page)"]
            },
            fees: [
                { component: "Professional Fee", fee: "₹1,499", remarks: "Application Filing & Follow-up" },
                { component: "Govt Fee", fee: "₹0", remarks: "No official fee for registration" },
                { component: "DSC (Optional)", fee: "₹1,500", remarks: "Only if Aadhaar not linked" }
            ],
            faqs: [
                { question: "Is GST Registration mandatory for all businesses?", answer: "No. It is mandatory only if your turnover exceeds ₹40 Lakhs (Goods) or ₹20 Lakhs (Services), or if you sell online (eCommerce)/Interstate." },
                { question: "Can I register for GST voluntarily?", answer: "Yes, you can register voluntarily to claim Input Tax Credit and boost business credibility even if your turnover is below the limit." },
                { question: "How long does it take to get the GST Certificate?", answer: "Usually, it takes 3 to 7 working days after submitting the application, provided no queries are raised by the department." },
                { question: "Do I need a physical office for GST?", answer: "Yes, a proof of business address (Electricity Bill/Rent Agreement) is required. If you don't have one, we can help with a Virtual Office solution." },
                { question: "What happens if I don't file returns after registration?", answer: "Non-filing attracts a late fee of ₹50/day (Nil returns: ₹20/day) and can lead to cancellation of your GSTIN." }
            ],
            comparison: null
        },
        "return-filing": {
            title: "GST Return Filing (Monthly/Quarterly)",
            tagline: "Expert-assisted GSTR-1 & GSTR-3B filing. No errors, no notices.",
            about: [
                "Every registered business must file periodic returns (GSTR-1 for Sales, GSTR-3B for Summary) regardless of turnover.",
                "Our CA-led team ensures accurate ITC reconciliation (GSTR-2B) so you never pay extra tax."
            ],
            keyFeature: "We match your purchase invoices with GSTR-2B to ensure 100% Input Tax Credit claim.",
            advantages: [
                { title: "Avoid Late Fees", description: "Timely reminders and filing." },
                { title: "Max ITC Claim", description: "Smart reconciliation with Govt records." },
                { title: "Audit Ready", description: "Maintain clean books for future scrutiny." }
            ],
            processSteps: [
                { title: "Data Sharing", desc: "Share your Sales & Purchase invoices via Excel/WhatsApp." },
                { title: "Computation", desc: "Our experts compute Tax Liability and ITC availability." },
                { title: "Draft Approval", desc: "Review the computed figures." },
                { title: "Challan Generation", desc: "Pay any net tax liability to Govt." },
                { title: "Filing & Ack", desc: "Returns filed and Acknowledgment shared." }
            ],
            whoNeedsLike: ["All GST Registered Businesses"],
            penalties: "₹50 per day (₹20 for NIL) for delay. Interest @ 18% p.a. on tax dues.",
            documents: {
                "Monthly Data": ["Sales Register/Invoices", "Purchase Register/Invoices", "Bank Statement"]
            },
            fees: [
                { component: "Monthly Plan", fee: "₹999", remarks: "Up to 50 invoices" },
                { component: "Quarterly Plan", fee: "₹2,499", remarks: "Scheme for smaller businesses" }
            ],
            faqs: [
                { question: "What is the due date?", answer: "GSTR-1 is 11th, GSTR-3B is 20th of next month." },
                { question: "Do I need software?", answer: "No, we handle everything on our professional software." }
            ]
        },
        "nil-return": {
            title: "GST NIL Return Filing",
            tagline: "Zero Sales? Zero Purchase? File NIL Return in 2 minutes.",
            about: [
                "If you have no sales and no purchases in a month, you must file a NIL Return. Ignoring it attracts the same penalty as a regular return.",
                "We provide a super-affordable annual package for NIL filers."
            ],
            keyFeature: "Mandatory even if business is inactive.",
            advantages: [
                { title: "Peace of Mind", description: "Stay compliant at lowest cost." },
                { title: "Avoid Returns Backlog", description: "Keep GSTIN active." }
            ],
            processSteps: [
                { title: "Confirmation", desc: "Confirm zero transactions via Email/WhatsApp." },
                { title: "OTP Verification", desc: "Share Aadhaar OTP." },
                { title: "Instant Filing", desc: "Files in minutes using SMS facility." }
            ],
            whoNeedsLike: ["Inactive Businesses", "Startups in pre-revenue stage"],
            penalties: "₹20 per day for delay.",
            documents: { "Confirmation": ["Self-declaration of no business"] },
            fees: [{ component: "Yearly Package", fee: "₹2,999", remarks: "12 Months Filing" }],
            faqs: [{ question: "Can I file NIL if I have purchases?", answer: "No. If you have purchases (ITC), you must file a regular return to carry it forward." }]
        },
        "lut": {
            title: "GST LUT Filing (Letter of Undertaking)",
            tagline: "Export Goods/Services without paying IGST.",
            about: [
                "Exporters can export goods/services without paying IGST upfront by filing a Letter of Undertaking (LUT). It is valid for one financial year.",
                "Without LUT, you must pay IGST on exports and wait for a refund."
            ],
            keyFeature: "Crucial for cash flow management of Exporters.",
            advantages: [
                { title: "Zero Rated Supply", description: "Export without tax payment." },
                { title: "Save Working Capital", description: "No funds blocked in IGST." }
            ],
            processSteps: [
                { title: "Check Eligibility", desc: "Ensure no prosecution history." },
                { title: "File GST RFD-11", desc: "Submit LUT application online." },
                { title: "Approval", desc: "Instant ARN generation / Approval." }
            ],
            whoNeedsLike: ["Exporters of Goods", "Exporters of Services (IT/Freelancers)", "Suppliers to SEZ"],
            penalties: "Payment of IGST with interest if exports made without LUT.",
            documents: { "Details": ["Previous LUT (if any)", "Witness Details"] },
            fees: [{ component: "Professional Fee", fee: "₹999", remarks: "Valid for 1 Full Year" }],
            faqs: [{ question: "Is a Bond required?", answer: "Bond is required only if you have a history of tax evasion. For most, LUT is sufficient." }]
        },
        "annual-return": {
            title: "GSTR-9 Annual Return",
            tagline: "Consolidated Annual Reconciliation. Close your Books properly.",
            about: [
                "GSTR-9 is the annual return where you reconcile data filed in GSTR-1 and GSTR-3B with your audited financial statements.",
                "Errors made during the year can often be rectified or declared here."
            ],
            keyFeature: "Mandatory for turnover > ₹2 Crores.",
            advantages: [
                { title: "Final Correction", description: "Last chance to fix mismatch." },
                { title: "Avoid Notice", description: "Proper reconciliation prevents ASMT-10 notices." }
            ],
            processSteps: [
                { title: "Data Compilation", desc: "Aggregate 12 months GSTR-1/3B data." },
                { title: "Reconciliation", desc: "Match with Books of Accounts." },
                { title: "Drafting GSTR-9", desc: "Prepare the Annual Return." },
                { title: "Filing", desc: "Submit via DSC." }
            ],
            whoNeedsLike: ["Turnover > ₹2 Cr", "Voluntary filers for accuracy"],
            penalties: "₹200 per day delayed.",
            documents: { "Data": ["Financial Statements", "Ledgers"] },
            fees: [{ component: "Professional Fee", fee: "₹4,999+", remarks: "Based on Turnover" }],
            faqs: [{ question: "Is GSTR-9C required?", answer: "GSTR-9C (Reconciliation) is required if turnover > ₹5 Crores." }]
        },
        "gstr-10": {
            title: "GSTR-10 (Final Return)",
            tagline: "Formal closure after GST Cancellation.",
            about: ["Once your GST is cancelled, you must file a Final Return (GSTR-10) within 3 months. It declares the stock held and taxes paid on it."],
            keyFeature: "Often ignored, leading to huge penalties later.",
            advantages: [{ title: "Clean Default", description: "No future notices." }],
            processSteps: [{ title: "Stock Valuation", desc: "Assess closing stock." }, { title: "Filing", desc: "File GSTR-10." }],
            whoNeedsLike: ["Surrendered GSTIN", "Cancelled GSTIN"],
            penalties: "₹10,000 max late fee.",
            documents: { "Stock": ["Closing Stock Statement"] },
            fees: [{ component: "Fee", fee: "₹1,999", remarks: "One time" }],
            faqs: [{ question: "When to file?", answer: "Within 3 months of cancellation order." }]
        },
        "foreigners": {
            title: "GST Registration for Foreigners (NRTP)",
            tagline: "Start your business in India. Hassle-free GST for Non-Residents.",
            about: [
                "Foreign businesses supplying goods or services to Indian customers must register as a Non-Resident Taxable Person (NRTP). This registration is temporary and valid for 90 days (extendable).",
                "Unlike regular taxpayers, NRTPs do not need a permanent business address in India but must appoint an authorized signatory in India."
            ],
            keyFeature: "Advance Tax Deposit is mandatory. GST Registration is granted only after depositing the estimated tax liability.",
            advantages: [
                { title: "Legal Entry", description: "Legally supply goods/services to Indian consumers." },
                { title: "Claim Refund", description: "Claim refund of the balance tax deposit after expiry." },
                { title: "Input Tax Credit", description: "Pass on credit to your business buyers in India." }
            ],
            processSteps: [
                { title: "Appointment of Agent", desc: "Appoint an Indian Authorized Signatory." },
                { title: "Application (REG-09)", desc: "File GST REG-09 on the portal at least 5 days before starting business." },
                { title: "Advance Tax Payment", desc: "Deposit the estimated tax liability for the registration period." },
                { title: "ARN Generation", desc: "Receive Application Reference Number after payment." },
                { title: "Approval", desc: "GST Officer validates and issues the Certificate." }
            ],
            whoNeedsLike: [
                "Exhibitors in Trade Fairs in India",
                "Foreign Companies with one-time contracts",
                "Overseas Digital Service Providers (OIDAR)"
            ],
            penalties: "100% Tax Penalty + Confiscation of Goods for operating without NRTP registration.",
            documents: {
                "Foreign Entity": ["Tax ID of Home Country", "Incorporation Certificate", "Bank Details"],
                "Indian Signatory": ["PAN Card", "Aadhaar Card", "Authorization Letter"]
            },
            fees: [
                { component: "Professional Fee", fee: "₹4,999", remarks: "Complete Assistance" },
                { component: "Govt Deposit", fee: "Actuals", remarks: "Estimated Tax Liability" }
            ],
            faqs: [
                { question: "Is PAN mandatory for NRTP?", answer: "PAN is not mandatory for the foreign entity, but the Indian Authorized Signatory must have a PAN." },
                { question: "Can the registration be extended?", answer: "Yes, it can be extended for another 90 days by filing an application." }
            ]
        },
        "virtual-office": {
            title: "Virtual Office for GST Registration",
            tagline: "Get a Premium Business Address for GST. Low Cost, 100% Compliant.",
            about: [
                "Don't have a rented office? Use our Virtual Office solution to get a premium commercial address for your GST Registration.",
                "We provide all necessary documentation including Rent Agreement, NOC, and Electricity Bill to ensure your GST application is approved smoothly."
            ],
            keyFeature: "Lowest Cost solution for startups and freelancers who work from home but need a commercial GST address.",
            advantages: [
                { title: "Professional Address", description: "Use a prime location address on your visiting cards and website." },
                { title: "Document Handling", description: "We manage courier receiving and forwarding." },
                { title: "100% Approval", description: "Guaranteed documents for GST queries." }
            ],
            processSteps: [
                { title: "Select Location", desc: "Choose a prime address in Delhi, Mumbai, Bangalore, etc." },
                { title: "Agreement Signing", desc: "Sign the Virtual Office Agreement." },
                { title: "Document Handover", desc: "Receive NOC, Electricity Bill, and Rent Agreement." },
                { title: "GST Filing", desc: "We file your GST application using these proofs." },
                { title: "Verification Support", desc: "We handle physical verification queries if any." }
            ],
            whoNeedsLike: [
                "Freelancers working from home",
                "eCommerce Sellers (Amazon/Flipkart)",
                "Startups wanting to save office rent",
                "Companies expanding to a new state"
            ],
            penalties: "Rejection of GST Application if address proof is invalid.",
            documents: {
                "KYC": ["PAN of Directors", "Aadhaar Card", "Photos"],
                "Company": ["Incorporation Certificate", "MOA/AOA"]
            },
            fees: [
                { component: "Virtual Office (Yearly)", fee: "₹12,000", remarks: "Includes Rent Agreement & NOC" },
                { component: "GST Filing", fee: "FREE", remarks: "With Virtual Office Plan" }
            ],
            faqs: [
                { question: "Is Virtual Office legal for GST?", answer: "Yes, it is completely legal provided you have a valid Rent Agreement and NOC, which we provide." },
                { question: "Can I open a bank account?", answer: "Yes, the documents work for Bank Account opening as well." }
            ]
        },
        "amendment": {
            title: "GST Registration Amendment",
            tagline: "Update Address, Mobile, or Business Details effortlessly.",
            about: [
                "Businesses often need to change details like Principal Place of Business, Directors, Mobile Number, or Trade Name. These changes must be updated in the GST portal within 30 days.",
                "We handle both Core Field Amendments (requires approval) and Non-Core Amendments (auto-approved)."
            ],
            keyFeature: "Failure to update address can lead to GST Cancellation during physical verification.",
            advantages: [
                { title: "Stay Compliant", description: "Avoid notices for mismatched details." },
                { title: "Bank Sync", description: "Ensure GST details match Bank Records." },
                { title: "Add Branches", description: "Add Additional Places of Business (APOB) easily." }
            ],
            processSteps: [
                { title: "Data Collection", desc: "Submit the new details (e.g., new address proof)." },
                { title: "Drafting Application", desc: "Filing form GST REG-14." },
                { title: "Authentication", desc: "Verify using Aadhaar OTP / DSC." },
                { title: "Approval", desc: "Tax officer approves Core amendments in 15 days." }
            ],
            whoNeedsLike: [
                "Shifted Office Location",
                "Changed Mobile/Email",
                "Added/Removed Directors",
                "Changed Trade Name"
            ],
            penalties: "General Penalty up to ₹25,000 for non-updation of details.",
            documents: {
                "Address Change": ["New Rent Agreement", "Electricity Bill", "NOC"],
                "Director Change": ["Resignation Letter", "Appointment Letter"]
            },
            fees: [
                { component: "Non-Core Amendment", fee: "₹999", remarks: "Mobile, Email, etc." },
                { component: "Core Amendment", fee: "₹1,999", remarks: "Address, Name, Partners" }
            ],
            faqs: [
                { question: "How long does it take?", answer: "Non-Core changes are instant. Core changes take 15-30 days for approval." },
                { question: "Can I change the PAN?", answer: "No. GST is PAN-based. To change PAN, you must apply for a new GST Registration." }
            ]
        },
        "revocation": {
            title: "Revocation of Cancelled GST",
            tagline: "Restore your Cancelled GSTIN. Get back to business.",
            about: [
                "Has your GST been cancelled due to non-filing of returns? You can apply for Revocation of Cancellation within 30 days (extendable up to 90 days).",
                "We help you file pending returns, pay taxes, and draft a strong appeal to the officer to restore your GSTIN."
            ],
            keyFeature: "Restoring an old GSTIN is better than applying specifically if you have Input Tax Credit stuck in the old number.",
            advantages: [
                { title: "Save ITC", description: "Recover blocked Input Tax Credit." },
                { title: "Retain History", description: "Keep your business vintage and brand value." },
                { title: "Avoid Rejection", description: "New applications are often rejected if old dues are pending." }
            ],
            processSteps: [
                { title: "File Pending Returns", desc: "Clear all backlog Returns (GSTR-1 & 3B) with late fees." },
                { title: "Pay Tax Dues", desc: "Clear any outstanding tax liabilities." },
                { title: "File Revocation", desc: "File Form GST REG-21 with justification." },
                { title: "Officer Hearing", desc: "Reply to any notices (SCN) or attend personal hearing." },
                { title: "Restoration", desc: "GSTIN status changes to 'Active'." }
            ],
            whoNeedsLike: [
                "GST Cancelled Suo-Moto by Officer",
                "Non-filers (>6 months)",
                "Registration cancelled voluntarily by mistake"
            ],
            penalties: "Late fee of ₹10,000+ may apply for delayed filing of final return.",
            documents: {
                "Pending Returns": ["Sales & Purchase Data"],
                "Justification": ["Reason for delay/non-compliance (e.g. Health issues, financial crisis)"]
            },
            fees: [
                { component: "Professional Fee", fee: "₹2,999", remarks: "Revocation Filing Only" },
                { component: "Return Filing", fee: "Custom", remarks: "Based on pending months" }
            ],
            faqs: [
                { question: "Is there a time limit?", answer: "Ideally 30 days from cancellation order. Can be condoned up to 90 days by Commissioner." },
                { question: "What if I ignore it?", answer: "You cannot apply for a new GSTIN until old dues are cleared." }
            ]
        },
        "e-invoicing": {
            title: "GST E-Invoicing Setup",
            tagline: "Automate B2B Invoicing for compliance.",
            about: ["Businesses with turnover > ₹5 Cr must generate E-Invoices. We help setup the API integration or bulk generation tools."],
            keyFeature: "Mandatory for B2B supplies. Invoice invalid without QR code.",
            advantages: [{ title: "Auto E-Way Bill", description: "Generate E-Way bill along with invoice." }],
            processSteps: [{ title: "Registration", desc: "Register on E-Invoice portal." }, { title: "API Integration", desc: "Link ERP or use offline utility." }],
            whoNeedsLike: ["Turnover > ₹5 Cr"],
            documents: { "Entity": ["GSTIN", "Mobile Number linked"] },
            fees: [{ component: "Setup Fee", fee: "₹1,999", remarks: "One time setup" }],
            faqs: [{ question: "Is it applicable to B2C?", answer: "No, E-Invoicing is only for B2B and Export supplies." }]
        },
        "software": {
            title: "GST Filing Software",
            tagline: "Cloud-based GST Software for Accountants & Businesses.",
            about: ["Our premium GST software simplifies return filing, reconciliation, and billing. Designed for CAs and Tax Professionals."],
            keyFeature: "Fastest GSTR-2B Reconciliation engine.",
            advantages: [{ title: "Super Fast", description: "Handle 10k invoices in seconds." }, { title: "Cloud Based", description: "Access from anywhere." }],
            processSteps: [{ title: "Demo", desc: "Book a free demo." }, { title: "Subscription", desc: "Choose a plan." }, { title: "Onboarding", desc: "Import data and start." }],
            whoNeedsLike: ["Chartered Accountants", "Tax Practitioners", "Large Companies"],
            documents: {},
            fees: [{ component: "Annual License", fee: "₹5,999", remarks: "Single User" }],
            faqs: [{ question: "Is training included?", answer: "Yes, we provide full video training." }]
        },
        "notice": {
            title: "GST Notice Reply",
            tagline: "Receive a Tax Notice? We draft legally sound replies.",
            about: ["Received ASMT-10, GSTR-3A, or DRC-01? Do not ignore it. Our expert CAs draft point-to-point legal replies to drop the demand."],
            keyFeature: "Expert handling of Scrutiny Assessments.",
            advantages: [{ title: "Avoid Demand", description: "Legally contest incorrect tax demands." }, { title: "Time Extension", description: "Seek adjournment if more time needed." }],
            processSteps: [{ title: "Analyze Notice", desc: "Understand Section and Demand." }, { title: "Draft Reply", desc: "Prepare legal response." }, { title: "Submission", desc: "Upload on portal." }],
            whoNeedsLike: ["Received ASMT-10", "Mismatch in ITC", "Non-filers"],
            documents: { "Notice": ["Copy of Notice", "Relevant Invoices"] },
            fees: [{ component: "Drafting Fee", fee: "₹2,499+", remarks: "Depends on complexity" }],
            faqs: [{ question: "Can I reply myself?", answer: "You can, but legal terminology is important to avoid future litigation." }]
        }
    },
    "income-tax": {
        "efiling": {
            title: "Income Tax E-Filing (Salaried/Individual)",
            tagline: "Expert Assisted Filing. Maximize your Refund.",
            about: [
                "Filing Income Tax Return (ITR) is mandatory for individuals with income above the basic exemption limit (₹2.5L / ₹3L).",
                "Our CA-assisted filing ensures you claim all eligible deductions (HRA, 80C, 80D) and get your refund faster."
            ],
            keyFeature: "We review your Form 26AS and AIS to avoid tax notices.",
            advantages: [
                { title: "Max Refund", description: "Expert planning to reduce tax liability." },
                { title: "Loan Approval", description: "ITR is the primary document for Home/Car loans." },
                { title: "Visa Processing", description: "Mandatory for traveling abroad." }
            ],
            processSteps: [
                { title: "Upload Docs", desc: "Submit Form 16 and Bank Statement." },
                { title: "Drafting", desc: "Expert prepares computation." },
                { title: "Approval", desc: "You review and approve the draft." },
                { title: "Filing", desc: "We file ITR and send acknowledgement." }
            ],
            whoNeedsLike: ["Salaried Employees", "Freelancers", "House Property Owners"],
            documents: { "Income": ["Form 16", "Bank Statements"], "Deductions": ["LIC Receipt", "Tuition Fee Receipt"] },
            fees: [
                { component: "Basic Filing", fee: "₹799", remarks: "For Salaried < 10L" },
                { component: "Capital Gains", fee: "₹1,999", remarks: "Shares/Mutual Funds" }
            ],
            faqs: [
                { question: "Is it mandatory if income < 5 Lakhs?", answer: "Not mandatory if < 2.5L (< 3L New Regime), but highly recommended for loans and visa." }
            ]
        },
        "business": {
            title: "Business Tax Filing (Proprietorship)",
            tagline: "Presumptive Taxation for Small Businesses.",
            about: [
                "For Proprietors and Professionals, we use Presumptive Taxation (Sec 44AD/44ADA) to minimize compliance burden.",
                "You can declare a percentage of turnover as profit and avoid detailed bookkeeping."
            ],
            keyFeature: "No audit required if turnover < ₹2 Crores (conditions apply).",
            advantages: [
                { title: "Simplicity", description: "No need to maintain complex books of accounts." },
                { title: "Lower Tax", description: "Pay tax only on declared profit margin." }
            ],
            processSteps: [
                { title: "Analysis", desc: "Review of turnover and bank credits." },
                { title: "Computation", desc: "Calculating optimal profit ratio." },
                { title: "Filing", desc: "Filing ITR-3 or ITR-4." }
            ],
            whoNeedsLike: ["Shopkeepers", "Traders", "Contractors"],
            documents: { "Biz": ["GST Returns", "Bank Statement"], "Personal": ["PAN", "Aadhaar"] },
            fees: [
                { component: "Professional Fee", fee: "₹1,499", remarks: "Turnover < 20L" }
            ],
            faqs: [
                { question: "What is 44AD?", answer: "It allows declaring 6% or 8% of turnover as profit, saving you from audit costs." }
            ]
        },
        "partnership": {
            title: "Partnership / LLP ITR Filing",
            tagline: "Compliant Filing for Firm & Partners.",
            about: [
                "Partnership Firms and LLPs are taxed at a flat rate of 30%. Filing ITR-5 is mandatory even if there is a loss.",
                "Partners' salary and interest on capital are allowed as deductions to the firm."
            ],
            keyFeature: "Partners' Salary planning can save significant tax for the firm.",
            advantages: [
                { title: "Deductions", description: "Claim Interest on Capital & Remuneration." },
                { title: "Carry Forward", description: "Carry forward losses to future years." }
            ],
            processSteps: [
                { title: "P&L Review", desc: "Finalizing Profit & Loss A/c." },
                { title: "Drafting", desc: "Preparing Partner's individual computations." },
                { title: "Filing", desc: "Filing ITR-5." }
            ],
            whoNeedsLike: ["Partnership Firms", "LLPs"],
            documents: { "Firm": ["Balance Sheet", "P&L", "Partnership Deed"] },
            fees: [
                { component: "Filing Fee", fee: "₹2,499", remarks: "Without Audit" }
            ],
            faqs: [
                { question: "Is Audit mandatory?", answer: "Only if turnover exceeds ₹1 Crore (or ₹10 Cr if 95% digital transactions)." }
            ]
        },
        "company": {
            title: "Company ITR Filing (Pvt Ltd)",
            tagline: "Annual Compliance for Private Limited Companies.",
            about: [
                "Every Pvt Ltd Company must file ITR (Form ITR-6) strictly by Sep 30th (Audited cases).",
                "It requires a Digital Signature (DSC) and audited financial statements."
            ],
            keyFeature: "Flat 25% Tax rate for eligible startups/SMEs (turnover < 400 Cr).",
            advantages: [
                { title: "Compliance", description: "Avoid heavy penalties and prosecution." },
                { title: "Funding", description: "Investors require clean tax records." }
            ],
            processSteps: [
                { title: "Book Keeping", desc: "Closing of Accounts." },
                { title: "Audit", desc: "Statutory Audit by CA." },
                { title: "Filing", desc: "Filing ITR-6 with DSC." }
            ],
            whoNeedsLike: ["Pvt Ltd", "OPC", "Public Ltd"],
            documents: { "Financials": ["Signed Balance Sheet", "Audit Report"] },
            fees: [
                { component: "Filing Fee", fee: "₹4,999", remarks: "Excludes Audit Fee" }
            ],
            faqs: [
                { question: "We made a loss. Do we strictly need to file?", answer: "YES. Companies must file ITR regardless of profit or loss." }
            ]
        },
        "trust": {
            title: "Trust / NGO Tax Filing",
            tagline: "Claim Exemption under Section 11.",
            about: [
                "Trusts and NGOs registered under 12A must file ITR-7. If 85% of income is applied to charitable purposes, the surplus is tax-exempt.",
                "Form 10B (Audit Report) must be filed one month before the ITR due date."
            ],
            keyFeature: "Failure to file on time can result in cancellation of 12A registration.",
            advantages: [
                { title: "Tax Exemption", description: "Pay Zero tax on surplus income." }
            ],
            processSteps: [
                { title: "Audit", desc: "Audit by CA is mandatory." },
                { title: "Form 10B", desc: "Filing Audit Report." },
                { title: "ITR-7", desc: "Filing Income Tax Return." }
            ],
            whoNeedsLike: ["NGOs", "Societies", "Charitable Trusts"],
            documents: { "Audit": ["Donation Records", "Expense Vouchers"] },
            fees: [
                { component: "Filing Fee", fee: "₹5,000+", remarks: "Depends on volume" }
            ],
            faqs: [
                { question: "What if we don't spend 85%?", answer: "You have options to accumulate funds for 5 years by filing Form 10." }
            ]
        },
        "tds": {
            title: "TDS Return Filing",
            tagline: "Quarterly Compliance for Deductors.",
            about: [
                "Anyone deducting TDS (Employer, Tenant, Buyer) must file quarterly TDS returns (Form 24Q, 26Q).",
                "Late filing attracts a fee of ₹200 per day."
            ],
            keyFeature: "Mandatory to issue Form 16/16A to deductees after filing.",
            advantages: [
                { title: "Compliance", description: "Avoid interest and penalty." },
                { title: "Smooth Credit", description: "Deductees get credit in 26AS." }
            ],
            processSteps: [
                { title: "Calculation", desc: "Verify challan payments." },
                { title: "FVU Gen", desc: "Generate File Validation Utility file." },
                { title: "Uploading", desc: "Upload on Income Tax Portal." }
            ],
            whoNeedsLike: ["Companies", "Employers", "Property Buyers"],
            documents: { "Data": ["Deduction Details", "Challan Copies"] },
            fees: [
                { component: "Per Quarter", fee: "₹999", remarks: "For Nil/Small Returns" }
            ],
            faqs: [
                { question: "What is due date?", answer: "31st of month following the quarter (July, Oct, Jan, May)." }
            ]
        },
        "tan": {
            title: "TAN Registration",
            tagline: "Tax Deduction and Collection Account Number.",
            about: [
                "TAN is a 10-digit alphanumeric number required by all persons who are responsible for deducting or collecting tax.",
                "It is mandatory to quote TAN in all TDS returns, payments, and certificates."
            ],
            keyFeature: "Cannot dedut TDS without TAN.",
            advantages: [
                { title: "Legal Requirement", description: "Avoid penalty of ₹10,000." }
            ],
            processSteps: [
                { title: "Application", desc: "File Form 49B online." },
                { title: "Allotment", desc: "TAN allotted in 2-3 days." }
            ],
            whoNeedsLike: ["New Business", "Property Buyer"],
            documents: { "Entity": ["PAN", "Address Proof", "Director ID"] },
            fees: [
                { component: "All Inclusive", fee: "₹499", remarks: "One time" }
            ],
            faqs: [
                { question: "Can I use PAN instead of TAN?", answer: "No, except for Property Purchase > 50L (where PAN is allowed)." }
            ]
        },
        "15ca-15cb": {
            title: "15CA - 15CB Filing",
            tagline: "Compliance for Foreign Remittances.",
            about: [
                "Any payment made to a Non-Resident (Foreign Vendor/Entity) usually requires Form 15CA (Self Declaration) and Form 15CB (CA Certificate).",
                "Banks insist on these forms before processing SWIFT transfers."
            ],
            keyFeature: "Certifies that proper tax has been deducted before money leaves India.",
            advantages: [
                { title: "Smooth Transfer", description: "Bank clears payment immediately." }
            ],
            processSteps: [
                { title: "Assessment", desc: "Determine TDS Applicability (DTAA)." },
                { title: "15CB", desc: "CA issues Form 15CB." },
                { title: "15CA", desc: "Client files Form 15CA." }
            ],
            whoNeedsLike: ["Importers", "Software Companies", "Students (sometimes)"],
            documents: { "Transaction": ["Invoice", "Agreement", "TRC of Vendor"] },
            fees: [
                { component: "Per Certificate", fee: "₹2,500", remarks: "Depends on complexity" }
            ],
            faqs: [
                { question: "Is it required for import of goods?", answer: "Usually 15CA Part A is enough for goods. 15CB is for services/royalties." }
            ]
        },
        "notice": {
            title: "Income Tax Notice Management",
            tagline: "Expert Reply to Department Queries.",
            about: [
                "Received a notice? Don't panic. We handle notices under Section 143(1), 148, 142(1), and defective returns.",
                "Our experts draft legally sound responses to drop demands."
            ],
            keyFeature: "Prevent high-pitched assessments and bank attachments.",
            advantages: [
                { title: "Expertise", description: "CAs with scrutiny experience." },
                { title: "Peace of Mind", description: "We handle the department interaction." }
            ],
            processSteps: [
                { title: "Analysis", desc: "Understanding the reason for notice." },
                { title: "Drafting", desc: "Preparing point-wise reply." },
                { title: "Submission", desc: "Online submission on portal." }
            ],
            whoNeedsLike: ["Taxpayers with Discrepancy"],
            documents: { "Notice": ["Copy of Notice", "Bank Statements"] },
            fees: [
                { component: "Compliance Fee", fee: "₹1,999+", remarks: "Case to case basis" }
            ],
            faqs: [
                { question: "What if I ignore the notice?", answer: "The demand will be confirmed, and money may be deducted from your bank/refund." }
            ]
        },
        "revised": {
            title: "Revised ITR / ITR-U",
            tagline: "Correction of Errors or Omitted Income.",
            about: [
                "Made a mistake in filed ITR? File a 'Revised Return' before 31st Dec.",
                "Missed the deadline? File 'ITR-U' (Updated Return) within 24 months (with some additional tax)."
            ],
            keyFeature: "Last chance to come clean and avoid black money allegations.",
            advantages: [
                { title: "Rectification", description: "Correct wrong bank details or income." },
                { title: "Legitimacy", description: "Declare previously hidden income." }
            ],
            processSteps: [
                { title: "Review", desc: "Identify errors in original return." },
                { title: "Re-computation", desc: "Recalculate tax." },
                { title: "Filing", desc: "Submit Revised/Updated form." }
            ],
            whoNeedsLike: ["Late Filers", "Error Correction"],
            documents: { "Old ITR": ["Ack Number", "Original Json"] },
            fees: [
                { component: "Filing Fee", fee: "₹1,499", remarks: "Plus Penalty if any" }
            ],
            faqs: [
                { question: "Can I claim refund in ITR-U?", answer: "No, ITR-U is only for paying additional tax, not for claiming refunds." }
            ]
        }
    },
    "trademark": {
        "registration": {
            title: "Trademark Registration",
            tagline: "Protect your Brand Identity legally.",
            about: [
                "Trademark registration gives you the exclusive right to use your brand name, logo, or slogan. It protects your brand from being copied by competitors.",
                "You can start using the ™ symbol immediately after filing, and ® after registration."
            ],
            keyFeature: "Valid for 10 years and renewable indefinitely.",
            advantages: [
                { title: "Asset", description: "Your brand becomes an intangible asset affecting valuation." },
                { title: "Legal Protection", description: "Sue infringers for damages." },
                { title: "Trust", description: "Customers trust registered brands more." }
            ],
            processSteps: [
                { title: "Search", desc: "Checking availability of the name." },
                { title: "Class Selection", desc: "Choosing right class (1-45)." },
                { title: "Filing", desc: "Application filing (TM-A)." },
                { title: "Examination", desc: "Govt reviews the application." }
            ],
            whoNeedsLike: ["New Brands", "Startups", "Sellers on Amazon"],
            documents: { "Owner": ["Logo", "Name", "Class Details"], "Personal": ["PAN", "Aadhaar"] },
            fees: [
                { component: "Govt Fee", fee: "₹4,500", remarks: "For Individuals/Startups (MSME)" },
                { component: "Prof Fee", fee: "₹1,499", remarks: "Filing Charge" }
            ],
            faqs: [
                { question: "How long does it take?", answer: "Without objection, it takes 6-8 months. With objection, 12-18 months." }
            ]
        },
        "expedited": {
            title: "Expedited Trademark Registration",
            tagline: "Fast Track your Brand Registration.",
            about: [
                "Under Expedited processing, the Trademark Registry examines the application within 30 days instead of the usual 6-12 months.",
                "This is ideal if you have an ongoing legal case or urgent need."
            ],
            keyFeature: "Examination Report issued in weeks, not months.",
            advantages: [
                { title: "Speed", description: "Drastically reduced waiting time." }
            ],
            processSteps: [
                { title: "Reason", desc: "Submit valid reason for urgency." },
                { title: "Filing", desc: "File TM-A with extra fee." }
            ],
            whoNeedsLike: ["Urgent Cases", "Litigation"],
            documents: { "Proof": ["Affidavit for Expedited Processing"] },
            fees: [
                { component: "Govt Fee", fee: "₹20,000+", remarks: "Significantly higher" }
            ],
            faqs: [
                { question: "Is registration guaranteed?", answer: "No, only the 'Examination' is expedited. Opposition can still delay it." }
            ]
        },
        "protection": {
            title: "Trademark Protection (Watch)",
            tagline: "Monitoring against Copycats.",
            about: [
                "We monitor the trademark journal continuously to see if anyone is trying to register a similar brand name.",
                "If found, we alert you to file an opposition immediately."
            ],
            keyFeature: "Proactive defense of your brand.",
            advantages: [
                { title: "Safety", description: "Stop infringement at the root." }
            ],
            processSteps: [
                { title: "Monitoring", desc: "Weekly check of Journals." },
                { title: "Alert", desc: "Notify you of similar filings." }
            ],
            whoNeedsLike: ["Established Brands"],
            documents: { "Brand": ["TM Number"] },
            fees: [
                { component: "Annual Fee", fee: "₹5,000", remarks: "Monitoring Service" }
            ],
            faqs: [
                { question: "Why do I need this?", answer: "The Registry may miss similarities. You must protect your own territory." }
            ]
        },
        "objection": {
            title: "Trademark Objection Reply",
            tagline: "Resolve Registry Objections.",
            about: [
                "If the examiner finds your name similar to an existing one or descriptive, they issue an Examination Report.",
                "You must file a legal reply within 30 days, or the application will be abandoned."
            ],
            keyFeature: "Strict 30-day deadline. Missing it means loss of application fee.",
            advantages: [
                { title: "Revival", description: "Get your application back on track." }
            ],
            processSteps: [
                { title: "Analysis", desc: "Study the objection grounds." },
                { title: "Drafting", desc: "Legal arguments and case laws." },
                { title: "Filing", desc: "Submit reply online." }
            ],
            whoNeedsLike: ["Applicants with 'Objected' status"],
            documents: { "Evidence": ["Usage Proof", "Invoices"] },
            fees: [
                { component: "Drafting Fee", fee: "₹2,500", remarks: "Expert Legal Drafting" }
            ],
            faqs: [
                { question: "Is hearing included?", answer: "No, if reply is rejected, a hearing is scheduled separately." }
            ]
        },
        "opposition": {
            title: "Trademark Opposition",
            tagline: "Fight against Conflicting Brands.",
            about: [
                "If a third party opposes your trademark (or you oppose theirs), it becomes a legal case (TM-O).",
                "This involves filing counter-statements, evidence, and hearings."
            ],
            keyFeature: "It is a quasi-judicial process requiring legal representation.",
            advantages: [
                { title: "Defense", description: "Protect your market share." }
            ],
            processSteps: [
                { title: "Notice", desc: "Receive/Send Opposition Notice." },
                { title: "Counter", desc: "File Counter Statement within 2 months." },
                { title: "Evidence", desc: "Submit Affidavit of Evidence." }
            ],
            whoNeedsLike: ["Brands in conflict"],
            documents: { "Legal": ["Power of Attorney", "Evidence"] },
            fees: [
                { component: "Notice/Counter", fee: "₹5,000+", remarks: "Legal Fee" }
            ],
            faqs: [
                { question: "How long does it last?", answer: "Oppositions can take 2-5 years to resolve." }
            ]
        },
        "renewal": {
            title: "Trademark Renewal",
            tagline: "Renew your Brand for another 10 years.",
            about: [
                "A trademark is valid for 10 years. You must renew it within 6 months before expiry.",
                "Late renewal is possible with a surcharge, but risky."
            ],
            keyFeature: "Extends protection for another decade.",
            advantages: [
                { title: "Continuity", description: "Keep your brand rights alive." }
            ],
            processSteps: [
                { title: "Status Check", desc: "Verify expiry date." },
                { title: "Filing", desc: "File Form TM-R." },
                { title: "Validation", desc: "Certificate of Renewal." }
            ],
            whoNeedsLike: ["Owners of 10-year old marks"],
            documents: { "Old Cert": ["Registration Certificate"] },
            fees: [
                { component: "Govt Fee", fee: "₹9,000", remarks: "For 10 Years" },
                { component: "Prof Fee", fee: "₹1,999", remarks: "Filing" }
            ],
            faqs: [
                { question: "What if I missed the date?", answer: "You can restore it within 6 months to 1 year after expiry with extra penalty." }
            ]
        },
        "hearing": {
            title: "Trademark Hearing",
            tagline: "Legal Representation before the Registrar.",
            about: [
                "If your written reply to an objection is not accepted, a hearing is scheduled.",
                "Our attorneys represent your case physically or virtually to convince the Registrar."
            ],
            keyFeature: "Crucial stage for 'Objected' marks.",
            advantages: [
                { title: "Final Chance", description: "Avoid application refusal." }
            ],
            processSteps: [
                { title: "Appointment", desc: "Notice of Hearing received." },
                { title: "Appearance", desc: "Attorney argues your case." },
                { title: "Order", desc: "Allowed or Refused." }
            ],
            whoNeedsLike: ["Applicants with Hearing Notice"],
            documents: { "POA": [], "Additional Evidence": [] },
            fees: [
                { component: "Appearance Fee", fee: "₹4,999", remarks: "Per Hearing" }
            ],
            faqs: [
                { question: "Do I need to go?", answer: "No, your Attorney (us) will go on your behalf." }
            ]
        },
        "assignment": {
            title: "Trademark Assignment / Transfer",
            tagline: "Sell or Transfer your Brand.",
            about: [
                "You can legally sell or transfer ownership of a trademark to another person or company.",
                "This requires a Deed of Assignment and filing with the Registry."
            ],
            keyFeature: "Monetize your brand value.",
            advantages: [
                { title: "Liquidity", description: "Sell brand for cash." },
                { title: "Restructuring", description: "Move brand to new company." }
            ],
            processSteps: [
                { title: "Deed", desc: "Drafting Assignment Deed." },
                { title: "Filing", desc: "Form TM-P." },
                { title: "Update", desc: "Registry records new owner." }
            ],
            whoNeedsLike: ["Brand Sellers", "Business Buyers"],
            documents: { "Deed": ["Assignment Deed", "NOC"] },
            fees: [
                { component: "Govt Fee", fee: "₹9,000", remarks: "Per Class" },
                { component: "Prof Fee", fee: "₹5,000", remarks: "Drafting & Filing" }
            ],
            faqs: [
                { question: "Can I sell a pending mark?", answer: "Yes, pending trademarks can also be assigned." }
            ]
        },
        "transfer": {
            title: "Trademark Transfer",
            tagline: "Official Recording of New Owner.",
            about: ["Same as Trademark Assignment. It involves transferring rights from one entity to another via Form TM-P."],
            keyFeature: "Legal validity for the new owner.",
            advantages: [{ title: "Ownership", description: "Full legal rights transferred." }],
            processSteps: [{ title: "TM-P", desc: "Filing transfer request." }],
            whoNeedsLike: ["Merged Companies"],
            documents: { "Legal": ["Deed of Assignment"] },
            fees: [{ component: "Fee", fee: "₹9,000", remarks: "Govt Fee" }],
            faqs: [{ question: "Is it different from Assignment?", answer: "No, 'Transfer' typically refers to the result of an 'Assignment' process." }]
        },
        "rectification": {
            title: "Trademark Rectification",
            tagline: "Cancel or Correct a Registered Trademark.",
            about: [
                "Rectification is filed to cancel a registered trademark on grounds of non-use or bad faith, or to correct errors in your own register.",
                "It can be filed by an aggrieved party or the owner themselves."
            ],
            keyFeature: "Remove 'Dead' trademarks blocking your way.",
            advantages: [
                { title: "Market Access", description: "Clear path for your brand." },
                { title: "Correction", description: "Fix clerical errors." }
            ],
            processSteps: [
                { title: "Application", desc: "File Rectification petition." },
                { title: "Hearing", desc: "Argue before Registrar/IPAB." }
            ],
            whoNeedsLike: ["Competitors", "Brand Owners"],
            documents: { "Grounds": ["Evidence of Non-Use", "Error Proof"] },
            fees: [
                { component: "Filing Fee", fee: "₹3,000+", remarks: "Depends on nature" }
            ],
            faqs: [
                { question: "What is non-use cancellation?", answer: "If a mark is not used for 5 years, it can be removed from the register." }
            ]
        },
        "infringement": {
            title: "Trademark Infringement Notice",
            tagline: "Stop others from using your Brand.",
            about: [
                "If someone is using your registered brand name without permission, you can send a Legal Cease & Desist Notice.",
                "This is the first step before filing a lawsuit for damages."
            ],
            keyFeature: "Most infringers stop after receiving a strong legal notice.",
            advantages: [
                { title: "Brand Safety", description: "Stop dilution of goodwill." },
                { title: "Damages", description: "Claim compensation for loss." }
            ],
            processSteps: [
                { title: "Evidence", desc: "Collect proof of violation." },
                { title: "Drafting", desc: "Lawyer drafts strict notice." },
                { title: "Dispatch", desc: "Send via Regd Post/Email." }
            ],
            whoNeedsLike: ["Registered Owners"],
            documents: { "Proof": ["Photos of infringing product", "Website URL"] },
            fees: [
                { component: "Notice Fee", fee: "₹2,500", remarks: "Drafting & Sending" }
            ],
            faqs: [
                { question: "Do I need a registered TM?", answer: "Yes, for 'Infringement'. For unregistered marks, it's called 'Passing Off'." }
            ]
        },
        "certificate": {
            title: "Trademark Certificate Request",
            tagline: "Get your Official Registration Certificate.",
            about: [
                "Once your trademark is 'Registered', the Registry issues a digital Registration Certificate (Form O-2).",
                "We assist in ensuring it is generated and providing a certified copy if needed for legal use."
            ],
            keyFeature: "Valid proof of ownership for Amazon Brand Registry.",
            advantages: [
                { title: "Global Sales", description: "Unlock global marketplaces." },
                { title: "Legal Proof", description: "Primary evidence in court." }
            ],
            processSteps: [
                { title: "Status Check", desc: "Confirm 'Registered' status." },
                { title: "Download", desc: "Generate Soft Copy." },
                { title: "Certified Copy", desc: "Apply for physical certified copy (TM-M)." }
            ],
            whoNeedsLike: ["Amazon Sellers", "Exporters"],
            documents: { "App No": ["Application Number"] },
            fees: [
                { component: "Soft Copy", fee: "Free", remarks: "Included in our service" },
                { component: "Certified Copy", fee: "₹1,000", remarks: "Govt Fee Extra" }
            ],
            faqs: [
                { question: "Is hard copy sent by Govt?", answer: "No, they only issue digital certificates now. You must apply separately for a certified hard copy." }
            ]
        },
        "copyright": {
            title: "Copyright Registration",
            tagline: "Protect your Creative Work.",
            about: [
                "Copyright protects original literary, dramatic, musical, and artistic works. It gives the creator exclusive rights to reproduce and distribute the work.",
                "Ideal for Software, Books, Music, Videos, and Website content."
            ],
            keyFeature: "Valid for Lifetime of author + 60 Years.",
            advantages: [
                { title: "Ownership", description: "Public record of ownership." },
                { title: "Royalty", description: "Earn via licensing." }
            ],
            processSteps: [
                { title: "Filing", desc: "Form XIV application." },
                { title: "Diary No", desc: "Immediate provisional number." },
                { title: "Approval", desc: "Registration after 1 month mandatory wait." }
            ],
            whoNeedsLike: ["Authors", "Developers", "Artists", "Filmmakers"],
            documents: { "Work": ["Copies of work", "NOC from author"] },
            fees: [
                { component: "Govt Fee", fee: "₹500+", remarks: "Varies by work type" },
                { component: "Prof Fee", fee: "₹2,999", remarks: "Filing" }
            ],
            faqs: [
                { question: "Can I copyright an idea?", answer: "No, copyright protects the 'expression' of an idea, not the idea itself." }
            ]
        },
        "design": {
            title: "Design Registration",
            tagline: "Protect the Look & Shape of your Product.",
            about: [
                "Industrial Design Registration protects the aesthetic features (shape, pattern, configuration) of a product.",
                "It prevents others from making look-alike products (e.g., bottle shape, car design)."
            ],
            keyFeature: "Valid for 10 years, extendable by 5 years.",
            advantages: [
                { title: "Product USP", description: "Protect visual appeal." }
            ],
            processSteps: [
                { title: "Classification", desc: "Identify Locarno class." },
                { title: "Filing", desc: "Submit drawings/photos." },
                { title: "Examination", desc: "Govt checks novelty." }
            ],
            whoNeedsLike: ["Product Designers", "Manufacturers"],
            documents: { "Images": ["Different views (Front/Back/Side)"] },
            fees: [
                { component: "Govt Fee", fee: "₹1,000", remarks: "For MSME/Individual" },
                { component: "Prof Fee", fee: "₹3,500", remarks: "Filing" }
            ],
            faqs: [
                { question: "Is functionality protected?", answer: "No, functional aspects are protected by Patent, not Design." }
            ]
        },
        "patent": {
            title: "Patent Registration",
            tagline: "Protect your Invention.",
            about: [
                "A Patent grants exclusive rights to an inventor for a new, non-obvious, and useful invention.",
                "It gives you a monopoly for 20 years to stop others from making, using, or selling your invention."
            ],
            keyFeature: "The strongest form of Intellectual Property protection.",
            advantages: [
                { title: "Monopoly", description: "20 years market dominance." },
                { title: "Licensing", description: "High revenue potential." }
            ],
            processSteps: [
                { title: "Search", desc: "Patentability search." },
                { title: "Drafting", desc: "Writing claims and specifications." },
                { title: "Filing", desc: "Provisional/Complete specification." }
            ],
            whoNeedsLike: ["Inventors", "R&D Companies"],
            documents: { "Tech Info": ["Drawings", "Description", "Claims"] },
            fees: [
                { component: "Prof Fee", fee: "₹15,000+", remarks: "Drafting is complex" },
                { component: "Govt Fee", fee: "₹1,600", remarks: "For Individual" }
            ],
            faqs: [
                { question: "How long does it take?", answer: "It can take 3-5 years for grant, but 'Patent Pending' status starts immediately." }
            ]
        },
        "logo-design": {
            title: "Professional Logo Designing",
            tagline: "Brand Identity Creation.",
            about: [
                "Get a unique, trademark-able logo designed by our expert creative team.",
                "We ensure the design is original so you don't face trademark objections later."
            ],
            keyFeature: "Trademark-safe designs.",
            advantages: [
                { title: "Originality", description: "No clipart/copied elements." },
                { title: "Formats", description: "Vector files (AI/CDR) provided." }
            ],
            processSteps: [
                { title: "Brief", desc: "Understand your vision." },
                { title: "Concepts", desc: "3 Unique variations." },
                { title: "Finalize", desc: "Revisions and Delivery." }
            ],
            whoNeedsLike: ["New Startups", "Rebranding"],
            documents: { "Idea": ["Color preference", "Industry"] },
            fees: [
                { component: "Logo Package", fee: "₹2,500", remarks: "3 Concepts" }
            ],
            faqs: [
                { question: "Do you provide copyright?", answer: "Yes, we transfer full copyright to you upon payment." }
            ]
        }
    },
    "mca": {
        "name-change": {
            title: "Company Name Change",
            tagline: "Rebrand your Business Identity.",
            about: [
                "Changing a company name is a significant legal process that requires shareholder approval and government sanction.",
                "It involves checking name availability, passing a special resolution, and obtaining a new Certificate of Incorporation."
            ],
            keyFeature: "New Certificate of Incorporation is issued by ROC.",
            advantages: [
                { title: "Rebranding", description: "Align name with new business vision." },
                { title: "Pivot", description: "Reflect a change in business model." }
            ],
            processSteps: [
                { title: "Name Search", desc: "File RUN (Reserve Unique Name) for approval." },
                { title: "Resolution", desc: "Pass Special Resolution in EGM." },
                { title: "Filing", desc: "File MGT-14 and INC-24." },
                { title: "Certificate", desc: "Receive new COI from ROC." }
            ],
            whoNeedsLike: ["Startups Pivoting", "Merged Entities"],
            documents: { "Legal": ["Board Resolution", "EGM Notice", "Expl. Statement"] },
            fees: [
                { component: "Govt Fee (RUN)", fee: "₹1,000", remarks: "Name Approval" },
                { component: "Prof Fee", fee: "₹5,000", remarks: "Filing & Drafting" }
            ],
            faqs: [
                { question: "Does the PAN change?", answer: "Yes, Company PAN and TAN will change. GST also needs update." },
                { question: "How long does it take?", answer: "Typically 10-15 days depending on name availability." }
            ]
        },
        "office-change": {
            title: "Registered Office Change",
            tagline: "Relocate your Corporate Headquarters.",
            about: [
                "Companies can change their registered office within the same city, within the same state, or to a different state.",
                "Inter-state shifting is complex and involves Central Government approval."
            ],
            keyFeature: "Must display new address on board outside office within 15 days.",
            advantages: [
                { title: "Strategic", description: "Move to a business hub." },
                { title: "Operational", description: "Consolidate operations." }
            ],
            processSteps: [
                { title: "Board Res", desc: "Approve shift in Board Meeting." },
                { title: "Filing", desc: "File Form INC-22 within 30 days." },
                { title: "Approval", desc: "For state shift: RD Approval (INC-28)." }
            ],
            whoNeedsLike: ["Relocating Businesses"],
            documents: { "New Address": ["Rent Agreement", "Utility Bill (<2 months)", "NOC"] },
            fees: [
                { component: "Local Shift", fee: "₹2,500", remarks: "Within City" },
                { component: "Inter-State", fee: "₹25,000+", remarks: "Includes RD Petition" }
            ],
            faqs: [
                { question: "Can we use a virtual office?", answer: "Yes, as long as you have a utility bill and NOC from the provider." }
            ]
        },
        "moa": {
            title: "MOA Amendment",
            tagline: "Update your Business Objectives.",
            about: [
                "The Memorandum of Association (MOA) defines the company's scope (Main Objects). To enter a new business line, you must amend the Object Clause.",
                "This requires a Special Resolution by shareholders."
            ],
            keyFeature: "Mandatory when starting a business not listed in original MOA.",
            advantages: [
                { title: "Expansion", description: "Legally enter new sectors." },
                { title: "Compliance", description: "Avoid 'Ultra Vires' acts." }
            ],
            processSteps: [
                { title: "Board Meet", desc: "Approve agenda for EGM." },
                { title: "EGM", desc: "Pass Special Resolution." },
                { title: "MGT-14", desc: "File resolution with ROC." }
            ],
            whoNeedsLike: ["Diversifying Companies"],
            documents: { "Legal": ["Special Resolution", "Altered MOA"] },
            fees: [
                { component: "Filing Fee", fee: "₹3,999", remarks: "Includes MGT-14" }
            ],
            faqs: [
                { question: "Can we do any business?", answer: "No, you can only do business mentioned in your MOA Object Clause." }
            ]
        },
        "aoa": {
            title: "AOA Amendment",
            tagline: "Modify Internal Rules.",
            about: [
                "Articles of Association (AOA) contain the by-laws of the company. You may need to amend it to adopt a new Shareholders' Agreement or change board definitions.",
                "Requires Special Resolution and filing MGT-14."
            ],
            keyFeature: "Critical for enforcing Investor Rights.",
            advantages: [
                { title: "Governance", description: "Modernize company rules." }
            ],
            processSteps: [
                { title: "Drafting", desc: "Update AOA clauses." },
                { title: "Approval", desc: "Shareholder Special Resolution." },
                { title: "Filing", desc: "File MGT-14 within 30 days." }
            ],
            whoNeedsLike: ["Funded Startups"],
            documents: { "Legal": ["Altered AOA", "Resolution"] },
            fees: [
                { component: "Filing Fee", fee: "₹3,999", remarks: "Standard" }
            ],
            faqs: [
                { question: "Is it mandatory?", answer: "Only if you want to change the internal regulations governing the company." }
            ]
        },
        "increase-capital": {
            title: "Increase Authorized Capital",
            tagline: "Scale up your Investment Capacity.",
            about: [
                "To issue new shares to investors, a company must have enough 'Authorized Capital'. If not, you must increase it by paying stamp duty to the government.",
                "This is a pre-requisite for fundraising."
            ],
            keyFeature: " Enables issuance of new shares.",
            advantages: [
                { title: "Funding", description: "Room for new investment." },
                { title: "Growth", description: "Capital for expansion." }
            ],
            processSteps: [
                { title: "Board", desc: "Approve increase." },
                { title: "EGM", desc: "Shareholder approval." },
                { title: "SH-7", desc: "File with Stamp Duty." }
            ],
            whoNeedsLike: ["Startups raising funds"],
            documents: { "Legal": ["Board Resolution", "EGM Notice"] },
            fees: [
                { component: "Prof Fee", fee: "₹2,500", remarks: "Excludes Report & Stamp Duty" }
            ],
            faqs: [
                { question: "How much is Stamp Duty?", answer: "It varies by state and amount. Approx 0.1% to 0.5% of increased amount." }
            ]
        },
        "add-director": {
            title: "Add Director",
            tagline: "Appoint New Leadership.",
            about: [
                "You can appoint an Additional Director anytime via a Board Meeting. Their appointment must be regularized in the next AGM.",
                "The new Director must obtain a DIN (Director Identification Number) first."
            ],
            keyFeature: "Any individual >18 years can be a director.",
            advantages: [
                { title: "Expertise", description: "Add skills to the Board." },
                { title: "Liability", description: "Share responsibilities." }
            ],
            processSteps: [
                { title: "DIN", desc: "Apply for DIN if needed." },
                { title: "Consent", desc: "Get DIR-2 and DIR-8." },
                { title: "DIR-12", desc: "File appointment with ROC." }
            ],
            whoNeedsLike: ["Growing Boards"],
            documents: { "KYC": ["PAN", "Aadhaar", "Photo", "DSC"] },
            fees: [
                { component: "Filing Fee", fee: "₹1,999", remarks: "Per Director" }
            ],
            faqs: [
                { question: "Can a family member be director?", answer: "Yes, family members can be directors." }
            ]
        },
        "remove-director": {
            title: "Remove Director",
            tagline: "Resignation or Removal.",
            about: [
                "A director can resign by filing DIR-11. The company must then file DIR-12 to record it.",
                "Removal of a director by shareholders is a more complex process involving Special Notice."
            ],
            keyFeature: "Resignation is effective from the date of notice.",
            advantages: [
                { title: "Exit", description: "Formal exit from liability." }
            ],
            processSteps: [
                { title: "Notice", desc: "Director sends resignation." },
                { title: "Acknowledgement", desc: "Board accepts it." },
                { title: "Filing", desc: "Company files DIR-12." }
            ],
            whoNeedsLike: ["Directors Leaving"],
            documents: { "Legal": ["Resignation Letter", "Board Resolution"] },
            fees: [
                { component: "Filing Fee", fee: "₹1,999", remarks: "Per Director" }
            ],
            faqs: [
                { question: "Can we remove a director forcibly?", answer: "Yes, via an Ordinary Resolution, but they must be given a chance to be heard." }
            ]
        },
        "din-ekyc": {
            title: "DIN eKYC (DIR-3 KYC)",
            tagline: "Mandatory Annual Director Verification.",
            about: [
                "Every person holding a DIN (Director Identification Number) must file DIR-3 KYC annually before 30th September.",
                "Failure results in DIN deactivation and a flat penalty of ₹5,000."
            ],
            keyFeature: "Annual Requirement for ALL directors.",
            advantages: [
                { title: "Active DIN", description: "Continue being a director." }
            ],
            processSteps: [
                { title: "Check", desc: "Verify contact details." },
                { title: "OTP", desc: "Verify Mobile & Email." },
                { title: "File", desc: "Submit form." }
            ],
            whoNeedsLike: ["All Directors"],
            documents: { "Details": ["Unique Mobile", "Unique Email"] },
            fees: [
                { component: "Prof Fee", fee: "₹999", remarks: "Per DIN" },
                { component: "Govt Penalty", fee: "₹5,000", remarks: "If late" }
            ],
            faqs: [
                { question: "I have no company, but have DIN. Do I file?", answer: "Yes! DIN KYC is linked to the person, not the company. You must file." }
            ]
        },
        "din-reactivation": {
            title: "DIN Reactivation",
            tagline: "Restore Deactivated DIN.",
            about: [
                "If you missed the KYC deadline, your DIN is marked 'Deactivated'. You cannot sign any document.",
                "To reactivate, you must file DIR-3 KYC with a penalty of ₹5,000."
            ],
            keyFeature: "Immediate restoration upon payment.",
            advantages: [
                { title: "Compliance", description: "Avoid disqualification." }
            ],
            processSteps: [
                { title: "Payment", desc: "Pay ₹5,000 Govt Fee." },
                { title: "Filing", desc: "File KYC form." }
            ],
            whoNeedsLike: ["Non-Compliant Directors"],
            documents: { "KYC": ["Mobile", "Email", "Passport (for foreign)"] },
            fees: [
                { component: "Govt Penalty", fee: "₹5,000", remarks: "Mandatory" },
                { component: "Prof Fee", fee: "₹1,000", remarks: "Processing" }
            ],
            faqs: [
                { question: "Can I waive the penalty?", answer: "No, the ROC system does not allow filing without penalty payment." }
            ]
        },
        "company-compliance": {
            title: "Annual Company Compliance",
            tagline: "Keep your Pvt Ltd Active & Penalty Free.",
            about: [
                "Every Private Limited Company must file Annual Returns (MGT-7) and Financial Statements (AOC-4) with the ROC every year.",
                "Detailed compliance ensures your company remains 'Active' and avoids heavy penalties of ₹100/day."
            ],
            keyFeature: "Mandatory even for companies with Zero Turnover.",
            advantages: [
                { title: "Active Status", description: "Avoid strike-off." },
                { title: "Loans", description: "Banks require 3 years filings." }
            ],
            processSteps: [
                { title: "Accounting", desc: "Prepare Balance Sheet & P&L." },
                { title: "Audit", desc: "Statutory Auditor signs report." },
                { title: "AGM", desc: "Hold Annual General Meeting." },
                { title: "Filing", desc: "File AOC-4 and MGT-7." }
            ],
            whoNeedsLike: ["All Pvt Ltd Companies"],
            documents: { "Financials": ["Audited BS/PL", "Directors Report", "DSC"] },
            fees: [
                { component: "Professional Package", fee: "₹10,000+", remarks: "Based on turnover" }
            ],
            faqs: [
                { question: "What is the due date?", answer: "AOC-4: 30 days from AGM (Oct 30). MGT-7: 60 days from AGM (Nov 29)." }
            ]
        },
        "llp-compliance": {
            title: "LLP Annual Compliance",
            tagline: "Form 11 and Form 8 Filing.",
            about: [
                "LLPs have simpler compliance than companies but stricter penalties. You must file Form 11 (Annual Return) and Form 8 (Financial Statement).",
                "Penalty for delay is ₹100 per day per form, with NO upper limit."
            ],
            keyFeature: "Unlimited Penalty for delays.",
            advantages: [
                { title: "Simple", description: "No mandatory audit (mostly)." }
            ],
            processSteps: [
                { title: "Form 11", desc: "File by May 30th." },
                { title: "Form 8", desc: "File by Oct 30th." }
            ],
            whoNeedsLike: ["All LLPs"],
            documents: { "Data": ["Partners Details", "Financial Statements"] },
            fees: [
                { component: "Compliance Pkg", fee: "₹5,000", remarks: "Both Forms" }
            ],
            faqs: [
                { question: "My LLP has no business. Still file?", answer: "Yes, Nil return is mandatory. Delay will cost ₹100/day." }
            ]
        },
        "adt-1": {
            title: "ADT-1 Filing (Auditor Appointment)",
            tagline: "Appoint Statutory Auditor.",
            about: [
                "Every company must appoint a Statutory Auditor (CA) for a term of 5 years.",
                "Form ADT-1 is filed to inform the ROC about this appointment."
            ],
            keyFeature: "Must be filed within 15 days of AGM.",
            advantages: [
                { title: "Compliance", description: "Meet Companies Act req." }
            ],
            processSteps: [
                { title: "Consent", desc: "Get consent from CA." },
                { title: "Resolution", desc: "Appoint in AGM." },
                { title: "Filing", desc: "File ADT-1." }
            ],
            whoNeedsLike: ["New Companies", "Every 5 Years"],
            documents: { "CA": ["Consent Letter", "Resolution"] },
            fees: [
                { component: "Filing Fee", fee: "₹1,499", remarks: "Standard" }
            ],
            faqs: [
                { question: "What if we don't file?", answer: "The appointment is considered invalid and attracts penalty." }
            ]
        },
        "dpt-3": {
            title: "DPT-3 Filing",
            tagline: "Return of Deposits.",
            about: [
                "DPT-3 is a return of deposits or 'transactions not considered as deposits' (like loans from directors, banks).",
                "All companies having any outstanding money must file this annually by 30th June."
            ],
            keyFeature: "Disclosure of all company debts.",
            advantages: [
                { title: "Transparency", description: "Record of liabilities." }
            ],
            processSteps: [
                { title: "Calculation", desc: "Calculate outstanding amount as on Mar 31." },
                { title: "Certificate", desc: "Auditor Certificate (if needed)." },
                { title: "Filing", desc: "File DPT-3." }
            ],
            whoNeedsLike: ["Companies with Loans"],
            documents: { "Financials": ["Loan List", "Auditor Certificate"] },
            fees: [
                { component: "Filing Fee", fee: "₹1,999", remarks: "Annual" }
            ],
            faqs: [
                { question: "Is it mandatory for Nil?", answer: "No, if you have absolutely no outstanding money (except for trade payables), it may not be needed." }
            ]
        },
        "llp-11": {
            title: "LLP Form 11",
            tagline: "Annual Return for LLP.",
            about: [
                "Form 11 contains details of the partners and their contribution. It must be filed by 30th May every year.",
                "It is a summary of management, not financials."
            ],
            keyFeature: "First deadline of the financial year.",
            processSteps: [
                { title: "Update", desc: "Check partner details." },
                { title: "File", desc: "File Form 11." }
            ],
            documents: { "Info": ["Partner Contribution"] },
            fees: [
                { component: "Filing Fee", fee: "₹1,500", remarks: "Excludes Govt Fee" }
            ],
            faqs: [
                { question: "What is the late fee?", answer: "₹100 per day." }
            ]
        },
        "inc-20a": {
            title: "INC-20A (Commencement of Business)",
            tagline: "Activate your Bank Account.",
            about: [
                "Newly incorporated companies must file INC-20A within 180 days. It declares that shareholders have deposited their subscription money.",
                "You cannot start business or borrow money effectively without this."
            ],
            keyFeature: "Critical One-Time Filing.",
            advantages: [
                { title: "Safety", description: "Avoid strike-off." }
            ],
            processSteps: [
                { title: "Deposit", desc: "Shareholders deposit money in bank." },
                { title: "Statement", desc: "Get Bank Statement." },
                { title: "Filing", desc: "File INC-20A." }
            ],
            whoNeedsLike: ["New Companies (<6 months)"],
            documents: { "Bank": ["Bank Statement", "Photo of Office"] },
            fees: [
                { component: "Filing Fee", fee: "₹1,999", remarks: "One Time" }
            ],
            faqs: [
                { question: "What if I delay?", answer: "Heavy additional fees apply, and ROC may initiate strike-off." }
            ]
        },
        "winding-up-company": {
            title: "Winding Up (Company Closure)",
            tagline: "Fast Track Exit (STK-2).",
            about: [
                "If your company is defunct or inactive for 2 years, you can close it under Fast Track Exit (FTE) mode by filing Form STK-2.",
                "It is cheaper and faster than formal liquidation."
            ],
            keyFeature: "Company must have Zero Assets and Zero Liabilities.",
            advantages: [
                { title: "Peace of Mind", description: "Legal closure." },
                { title: "Cost", description: "Stop recurring compliance costs." }
            ],
            processSteps: [
                { title: "Accounts", desc: "Prepare Zero Statement." },
                { title: "Indemnity", desc: "Directors sign Indemnity Bond." },
                { title: "STK-2", desc: "File Closure form." }
            ],
            whoNeedsLike: ["Failed Startups", "Inactive Cos"],
            documents: { "Legal": ["STK-8 (Accounts)", "Indemnity Bond", "Affidavit"] },
            fees: [
                { component: "Govt Fee", fee: "₹10,000", remarks: "Form Fee" },
                { component: "Prof Fee", fee: "₹5,000", remarks: "Processing" }
            ],
            faqs: [
                { question: "Can I close if I have tax dues?", answer: "No, all tax dues and liabilities must be cleared first." }
            ]
        },
        "winding-up-llp": {
            title: "Winding Up (LLP Closure)",
            tagline: "Form 24 Closure.",
            about: [
                "LLPs that have been non-functional for 1 year can apply for strike off using Form 24.",
                "Similar to companies, the LLP must have no debts."
            ],
            keyFeature: "Closure required consent of all partners.",
            processSteps: [
                { title: "Consent", desc: "Partners agree to close." },
                { title: "Affidavit", desc: "No debt declaration." },
                { title: "Form 24", desc: "File application." }
            ],
            whoNeedsLike: ["Inactive LLPs"],
            documents: { "Legal": ["Statement of Assets (Zero)", "Consent"] },
            fees: [
                { component: "Fee", fee: "₹10,000", remarks: "Total" }
            ],
            faqs: [
                { question: "How long does it take?", answer: "Approx 3-6 months for the name to be struck off." }
            ]
        },
        "dormant": {
            title: "Dormant Status (MSC-1)",
            tagline: "Pause your Company Compliance.",
            about: [
                "If you are not doing business now but want to keep the company for a future project (or hold an IP/Asset), apply for 'Dormant Status'.",
                "Compliance burden is reduced significantly."
            ],
            keyFeature: "Retains company name and assets.",
            advantages: [
                { title: "Low Compliance", description: "File only MSC-3 annually." }
            ],
            processSteps: [
                { title: "Resolution", desc: "Board decides to go dormant." },
                { title: "MSC-1", desc: "File application." }
            ],
            whoNeedsLike: ["Asset Holding Cos", "Future Projects"],
            documents: { "Financials": ["Statement of Affairs"] },
            fees: [
                { component: "Govt Fee", fee: "₹1,000+", remarks: "Based on Capital" },
                { component: "Prof Fee", fee: "₹5,000", remarks: "Processing" }
            ],
            faqs: [
                { question: "Max period?", answer: "You can stay dormant for up to 5 years." }
            ]
        },
        "share-transfer": {
            title: "Share Transfer",
            tagline: "Transfer Equity Shares.",
            about: [
                "Shares in a private limited company are transferable subject to the Articles of Association.",
                "The process involves a Share Transfer Deed (Form SH-4) and payment of Stamp Duty."
            ],
            keyFeature: "Legal way to change ownership.",
            advantages: [
                { title: "Exit", description: "Sell your stake." },
                { title: "Entry", description: "Add new shareholders." }
            ],
            processSteps: [
                { title: "Form SH-4", desc: "Execute deed between Transferor and Transferee." },
                { title: "Stamp Duty", desc: "Pay 0.25% (typ) stamp duty." },
                { title: "Board Approval", desc: "Board approves transfer." }
            ],
            whoNeedsLike: ["Investors", "Co-founders"],
            documents: { "Deed": ["Original Share Certificate", "SH-4"] },
            fees: [
                { component: "Prof Fee", fee: "₹3,999", remarks: "Drafting & Guidance" }
            ],
            faqs: [
                { question: "Is physical share cert needed?", answer: "Yes, for unlisted Pvt Ltd companies." }
            ]
        }
    },
    "compliance": {
        "proprietorship": {
            title: "Proprietorship Annual Compliance",
            tagline: "Stress-free Tax Filings for Sole Proprietors.",
            about: [
                "Proprietorships are the simplest business form but still require annual tax filings. This primarily includes Filing of Income Tax Return (ITR-3 or ITR-4) and GST Annual Returns.",
                "Keeping your compliance up to date ensures easier loan processing and visa approvals."
            ],
            keyFeature: "ITR based on Presumptive Taxation or Audit.",
            advantages: [
                { title: "Loans", description: "ITR is proof of income for banks." },
                { title: "Refunds", description: "Claim TDS refunds." }
            ],
            processSteps: [
                { title: "Data Collection", desc: "Share Bank Statements and Sales figures." },
                { title: "Computation", desc: "CA calculates Profit and Tax." },
                { title: "Filing", desc: "File ITR and GST Return." }
            ],
            whoNeedsLike: ["Sole Proprietors", "Traders", "Freelancers"],
            documents: { "Tax": ["Form 26AS", "Bank Statements", "GST Returns"] },
            fees: [
                { component: "Basic Plan", fee: "₹5,000", remarks: "ITR only" },
                { component: "Pro Plan", fee: "₹10,000", remarks: "ITR + GST Annual" }
            ],
            faqs: [
                { question: "Is audit mandatory?", answer: "Only if turnover exceeds ₹1 Crore (or ₹50L for professionals), or if you declare lower profit than optional scheme." }
            ]
        },
        "partnership": {
            title: "Partnership Firm Compliance",
            tagline: "ITR-5 and Financial Statements.",
            about: [
                "Partnership firms are taxed at a flat rate of 30%. They must file ITR-5 annually.",
                "Unlike companies, they do not file with ROC, but Income Tax compliance is rigorous."
            ],
            keyFeature: "Partners' Salary and Interest are allowed expenses.",
            advantages: [
                { title: "Less Formal", description: "No AGM/Board Meetings mandatory." }
            ],
            processSteps: [
                { title: "Finalization", desc: "Prepare P&L and Balance Sheet." },
                { title: "Tax Calc", desc: "Compute Tax/Interest/Remuneration." },
                { title: "Filing", desc: "File ITR-5." }
            ],
            whoNeedsLike: ["Offline Businesses", "Family Firms"],
            documents: { "Firm": ["Partnership Deed", "Books of Accounts"] },
            fees: [
                { component: "Annual Fee", fee: "₹7,000+", remarks: "Based on transaction volume" }
            ],
            faqs: [
                { question: "Is Partnership Deed registration mandatory?", answer: "It is optional but highly recommended to file suits against third parties." }
            ]
        },
        "pf-return": {
            title: "PF Return Filing",
            tagline: "Monthly ECR Compliance.",
            about: [
                "Establishments registered under EPF must file the Electronic Challan cum Return (ECR) monthly by the 15th.",
                "It contains written details of employees' attendance and wage contribution."
            ],
            keyFeature: "Delay attracts interest and damages.",
            advantages: [
                { title: "Employee Welfare", description: "Statutory benefit." }
            ],
            processSteps: [
                { title: "Update", desc: "Update employee exit/joining." },
                { title: "Calculation", desc: "Compute PF Liability." },
                { title: "Filing", desc: "Upload ECR and Pay." }
            ],
            whoNeedsLike: ["Employers (>20 staff)"],
            documents: { "Data": ["Wage Register", "UAN Data"] },
            fees: [
                { component: "Monthly Retainership", fee: "₹999", remarks: "Up to 10 employees" }
            ],
            faqs: [
                { question: "What if I pay late?", answer: "You have to pay interest @ 12% p.a. and damages ranging from 5-25%." }
            ]
        },
        "esi-return": {
            title: "ESI Return Filing",
            tagline: "Employee State Insurance Compliance.",
            about: [
                "ESI is a self-financing social security and health insurance scheme. Returns must be filed monthly by the 15th.",
                "Covers employees earning less than ₹21,000 per month."
            ],
            keyFeature: "Medical benefits for employees from Day 1.",
            processSteps: [
                { title: "Calculation", desc: "0.75% (Emp) + 3.25% (Employer)." },
                { title: "Challan", desc: "Generate and Pay." }
            ],
            whoNeedsLike: ["Factories", "Shops"],
            documents: { "Data": ["Attendance Sheet", "Wages"] },
            fees: [
                { component: "Monthly Retainership", fee: "₹999", remarks: "Up to 10 employees" }
            ],
            faqs: [
                { question: "Is it half-yearly?", answer: "Contributions are monthly. Return of Contribution (RC) is filed semi-annually." }
            ]
        },
        "pt-return": {
            title: "Professional Tax Return",
            tagline: "State-level Employee Tax.",
            about: [
                "Professional Tax is levied by State Governments (e.g., Maharashtra, Karnataka). Employers must deduct it and file returns.",
                "There are two types: PT-EC (Enrollment as Employer) and PT-RC (Registration for Employees)."
            ],
            keyFeature: "Varies from state to state.",
            processSteps: [
                { title: "Deduction", desc: "Deduct from Salary (approx ₹200)." },
                { title: "Payment", desc: "Pay to State Tax Dept." },
                { title: "Return", desc: "File Periodical Return." }
            ],
            whoNeedsLike: ["Employers in Taxable States"],
            documents: { "Payroll": ["PTRC Number", "Salary Data"] },
            fees: [
                { component: "Monthly/Quarterly", fee: "₹500", remarks: "Per return" }
            ],
            faqs: [
                { question: "Which states have PT?", answer: "Maharashtra, Karnataka, Tamil Nadu, West Bengal, Gujarat, etc." }
            ]
        },
        "fdi": {
            title: "FDI Filing (RBI Compliance)",
            tagline: "Reporting Foreign Investment.",
            about: [
                "When an Indian company issues shares to a Foreign Resident (FDI), it must report to the RBI via the FIRMS (SMF) Portal.",
                "Form FC-GPR must be filed within 30 days of allotment."
            ],
            keyFeature: "Strict RBI Timelines.",
            advantages: [
                { title: "Compliance", description: "Avoid ED/FEMA notices." }
            ],
            processSteps: [
                { title: "EMF", desc: "Entity Master Filing." },
                { title: "FIRC", desc: "Get FIRC & KYC from Bank." },
                { title: "FC-GPR", desc: "File Form with Valuation Report." }
            ],
            whoNeedsLike: ["Funded Startups"],
            documents: { "RBI": ["FIRC", "KYC", "Valuation Report", "Board Resolution"] },
            fees: [
                { component: "Prof Fee", fee: "₹15,000+", remarks: "Excludes Valuation/Bank Charges" }
            ],
            faqs: [
                { question: "What is the penalty?", answer: "Late Submission Fee (LSF) is applicable, often starting from thousands to lakhs." }
            ]
        },
        "fla": {
            title: "FLA Return",
            tagline: "Annual Foreign Liabilities & Assets.",
            about: [
                "Annual return for all companies that have received FDI or made ODI (Overseas Investment).",
                "Due date is 15th July every year."
            ],
            keyFeature: "Must be filed even if no new investment came this year.",
            processSteps: [
                { title: "Login", desc: "FLAIR Portal Login." },
                { title: "Data", desc: "Submit Audited Financials Data." },
                { title: "Ack", desc: "Generate Acknowledgement." }
            ],
            whoNeedsLike: ["All FDI/ODI Companies"],
            documents: { "Audit": ["Audited Balance Sheet"] },
            fees: [
                { component: "Prof Fee", fee: "₹4,000", remarks: "Annual" }
            ],
            faqs: [
                { question: "Can we file without audit?", answer: "Yes, you can file with provisional accounts and revise later." }
            ]
        },
        "fssai-renewal": {
            title: "FSSAI License Renewal",
            tagline: "Extend your Food License Validity.",
            about: [
                "FSSAI license is valid for 1-5 years. You must apply for renewal at least 30 days before expiry.",
                "Applying late attracts a penalty of ₹100 per day."
            ],
            keyFeature: "Avoid restarting the whole process.",
            processSteps: [
                { title: "Application", desc: "File Renewal Form." },
                { title: "Fees", desc: "Pay Govt Fees." },
                { title: "License", desc: "Get renewed certificate." }
            ],
            whoNeedsLike: ["Restaurants", "Food Makers"],
            documents: { "Old": ["Existing License", "Turnover declaration"] },
            fees: [
                { component: "Prof Fee", fee: "₹1,500", remarks: "Plus Govt Fee" }
            ],
            faqs: [
                { question: "Can I renew after expiry?", answer: "No, if it expires, you must apply for a FRESH license." }
            ]
        },
        "fssai-return": {
            title: "FSSAI Annual Return (D-1)",
            tagline: "Mandatory for Manufacturers/Importers.",
            about: [
                "All Food Manufacturers and Importers must file Form D-1 (Annual Return) by 31st May.",
                "It details the quantity of food manufactured and sold."
            ],
            keyFeature: "Mandatory irrespective of turnover.",
            processSteps: [
                { title: "Data", desc: "Collate Production Data." },
                { title: "Filing", desc: "Online/Physical Submission." }
            ],
            whoNeedsLike: ["Manufacturers", "Importers"],
            documents: { "Biz": ["Sale/Purchase Data"] },
            fees: [
                { component: "Filing Fee", fee: "₹2,500", remarks: "Per License" }
            ],
            faqs: [
                { question: "Is it for traders?", answer: "No, standard traders/retailers are usually exempt (check local rules)." }
            ]
        },
        "bookkeeping": {
            title: "Bookkeeping & Accounting",
            tagline: "Your Outsourced Finance Team.",
            about: [
                "Maintain your books of accounts (Tally/Zoho/QuickBooks) with professional accountants.",
                "We handle vouchers, bank reconciliation, and monthly MIS reporting."
            ],
            keyFeature: "Compliance Ready Books.",
            advantages: [
                { title: "Cost", description: "Cheaper than full-time accountant." },
                { title: "Quality", description: "Verified by CAs." }
            ],
            processSteps: [
                { title: "Share", desc: "Send Bank Stmt & Invoices." },
                { title: "Entry", desc: "We record in software." },
                { title: "Report", desc: "Get P&L View." }
            ],
            whoNeedsLike: ["SMEs", "Startups"],
            documents: { "Biz": ["Bank Statements", "Invoices", "Expense Bills"] },
            fees: [
                { component: "Retainership", fee: "₹3,000+", remarks: "Monthly (Vol based)" }
            ],
            faqs: [
                { question: "Which software do you use?", answer: "We support Tally, Zoho Books, and QuickBooks." }
            ]
        },
        "payroll": {
            title: "HR & Payroll Processing",
            tagline: "Timely Salaries, Happy Employees.",
            about: [
                "Complete payroll management: form salary structuring to TDS deduction and payslip generation.",
                "We ensure you stay compliant with PF, ESI, and Labour laws."
            ],
            keyFeature: "Confidential and Accurate.",
            advantages: [
                { title: "Automation", description: "Email Payslips directly." }
            ],
            processSteps: [
                { title: "Inputs", desc: "Send attendance/leaves." },
                { title: "Process", desc: "Calc Net Pay & Taxes." },
                { title: "Output", desc: "Bank Transfer File & Payslips." }
            ],
            whoNeedsLike: ["Companies with Staff"],
            documents: { "HR": ["Employee Master", "Attendance"] },
            fees: [
                { component: "Per Employee", fee: "₹150", remarks: "Minimum ₹2000/mo" }
            ],
            faqs: [
                { question: "Do you handle Form 16?", answer: "Yes, we generate Form 16 at year-end for employees." }
            ]
        },
        "business-plan": {
            title: "Business Plan / DPR",
            tagline: "Funding-Ready Documentation.",
            about: [
                "A Detailed Project Report (DPR) or Pitch Deck validates your business model and financial viability.",
                "Crucial for Bank Loans (Mudra/Startup India) and VC Funding."
            ],
            keyFeature: "5-Year Financial Projections.",
            advantages: [
                { title: "Clarity", description: "Roadmap for growth." },
                { title: "Funding", description: "Bank requirement." }
            ],
            processSteps: [
                { title: "Discovery", desc: "Understand biz model." },
                { title: "Research", desc: "Market & Competitor analysis." },
                { title: "Modeling", desc: "Financial forecasting." },
                { title: "Drafting", desc: "Final Report." }
            ],
            whoNeedsLike: ["Startups", "Loan Applicants"],
            documents: { "Concept": ["Rough Idea", "Cost Estimates"] },
            fees: [
                { component: "Standard DPR", fee: "₹15,000+", remarks: "Bank Loan format" },
                { component: "Pitch Deck", fee: "₹25,000+", remarks: "Investor format" }
            ],
            faqs: [
                { question: "Is it a guarantee for loan?", answer: "No, but it is a mandatory document for the application to be considered." }
            ]
        },
        "ca-support": {
            title: "On-Demand CA Support",
            tagline: "Expert Advice, Anytime.",
            about: [
                "Stuck with a complex tax notice? Need advice on saving capital gains tax? Book a slot with our Chartered Accountants.",
                "Get verified, actionable professional advice."
            ],
            keyFeature: "Video Call / Phone Consultation.",
            processSteps: [
                { title: "Book", desc: "Pay and Schedule slot." },
                { title: "Consult", desc: "Discuss with Expert." },
                { title: "Action", desc: "Get written summary (optional)." }
            ],
            whoNeedsLike: ["Individuals", "Founders"],
            documents: { "Case": ["Notices", "Previous Returns"] },
            fees: [
                { component: "Consultation", fee: "₹1,000", remarks: "Per 30 Mins" }
            ],
            faqs: [
                { question: "Do you represent in scrutiny?", answer: "Yes, representation services are separate and can be discussed during consultation." }
            ]
        }
    },
    "legal": {
        "shareholders-agreement": {
            title: "Shareholders Agreement (SHA)",
            tagline: "Define Investor & Founder Rights.",
            about: [
                "A Shareholders Agreement (SHA) determines the relationship between the company and its shareholders. It is crucial when raising funds from investors.",
                "It covers Board rights, Veto matters, Exit clauses (Tag-along/Drag-along), and anti-dilution protections."
            ],
            keyFeature: "Supersedes Articles of Association (if specified).",
            advantages: [
                { title: "Clarity", description: "Avoids boardroom disputes." },
                { title: "Protection", description: "Protects minority interest." }
            ],
            processSteps: [
                { title: "Term Sheet", desc: "Agree on commercial terms." },
                { title: "Drafting", desc: "First draft of SHA." },
                { title: "Negotiation", desc: "Review by lawyers." },
                { title: "Execution", desc: "Signing and Stamping." }
            ],
            whoNeedsLike: ["Funded Startups", "Joint Ventures"],
            documents: { "Legal": ["Term Sheet", "Captable"] },
            fees: [
                { component: "Review", fee: "₹5,000+", remarks: "Basic Review" },
                { component: "Drafting", fee: "₹15,000+", remarks: "Comprehensive" }
            ],
            faqs: [
                { question: "Is it mandatory?", answer: "Not by law, but mandatory by Investors before transferring money." },
                { question: "Does it need to be stamped?", answer: "Yes, to be admissible in court, it must be stamped according to the state stamp act." }
            ]
        },
        "founders-agreement": {
            title: "Founders Agreement",
            tagline: "Pre-nuptial for Co-founders.",
            about: [
                "A Founders Agreement acts as a contract between co-founders. It details equity split, roles, vesting schedules, and exit procedures.",
                "It prevents disputes if one founder decides to leave the startup early."
            ],
            keyFeature: "Reverse Vesting Logic to protect equity.",
            advantages: [
                { title: "Vesting", description: "Earn equity over time." },
                { title: "IP Assignment", description: "IP belongs to Company." }
            ],
            processSteps: [
                { title: "Discussion", desc: "Decide equity/roles." },
                { title: "Drafting", desc: "Create agreement." },
                { title: "Signing", desc: "Execute on stamp paper." }
            ],
            whoNeedsLike: ["Early Stage Startups"],
            documents: { "Info": ["Roles", "Equity Split %"] },
            fees: [
                { component: "Drafting Fee", fee: "₹4,000", remarks: "Standard Template" }
            ],
            faqs: [
                { question: "What is a cliff period?", answer: "A period (usually 1 year) before which a founder earns NO equity if they leave." }
            ]
        },
        "nda": {
            title: "Non-Disclosure Agreement (NDA)",
            tagline: "Protect Confidential Info.",
            about: [
                "An NDA is a legal contract to keep shared information confidential. It is used when discussing ideas with employees, vendors, or potential investors.",
                "It defines what is 'Confidential' and the penalty for breach."
            ],
            keyFeature: "Legally binding confidentiality.",
            advantages: [
                { title: "IP Safety", description: "Protect trade secrets." }
            ],
            processSteps: [
                { title: "Draft", desc: "Prepare NDA." },
                { title: "Sign", desc: "Both parties sign." }
            ],
            whoNeedsLike: ["Startups", "Agencies"],
            documents: { "Details": ["Scope of Work"] },
            fees: [
                { component: "Drafting Fee", fee: "₹1,500", remarks: "Quick Draft" }
            ],
            faqs: [
                { question: "Is an email NDA valid?", answer: "Yes, digital contracts are valid under the IT Act, but physical stamping is safer for enforcement." }
            ]
        },
        "employment-agreement": {
            title: "Employment Agreement",
            tagline: "Professional HR Contracts.",
            about: [
                "A detailed employment contract covering Salary, Leaves, Notices, Non-Compete, and Intellectual Property assignment.",
                "Crucial for protecting the company's IP created by employees."
            ],
            keyFeature: "Includes Non-Compete and Non-Solicit clauses.",
            advantages: [
                { title: "Rights", description: "Clear role definition." },
                { title: "Safety", description: "Employee cannot steal clients." }
            ],
            processSteps: [
                { title: "Offer", desc: "Release Offer Letter." },
                { title: "Contract", desc: "Sign detailed agreement on joining." }
            ],
            whoNeedsLike: ["Growing Companies"],
            documents: { "Info": ["Salary Structure", "Role"] },
            fees: [
                { component: "Drafting Fee", fee: "₹2,500", remarks: "Customized" }
            ],
            faqs: [
                { question: "Can we enforce non-compete?", answer: "Non-compete after employment is hard to enforce in India, but confidentiality is strictly enforceable." }
            ]
        },
        "legal-notice": {
            title: "Legal Notice",
            tagline: "Formal Warning Letter.",
            about: [
                "A Legal Notice is a formal communication sent by a lawyer. It warns the other party to fulfill a demand (like payment, stopping infringement) or face legal action.",
                "It is the first step of litigation."
            ],
            keyFeature: "Drafted on Advocate's Letterhead.",
            advantages: [
                { title: "Resolution", description: "80% cases settle here." },
                { title: "Evidence", description: "Proof of demand." }
            ],
            processSteps: [
                { title: "Briefing", desc: "Share facts with lawyer." },
                { title: "Drafting", desc: "Advocate drafts notice." },
                { title: "Dispatch", desc: "Sent via Regd. Post/Speed Post." }
            ],
            whoNeedsLike: ["Vendors (Unpaid)", "Employees"],
            documents: { "Evidence": ["Invoices", "Emails", "Contract"] },
            fees: [
                { component: "Drafting & Sending", fee: "₹2,500", remarks: "Includes Postal" }
            ],
            faqs: [
                { question: "What is the time to reply?", answer: "Usually, we give 7 to 15 days time for the opposite party to respond." }
            ]
        },
        "cheque-bounce": {
            title: "Cheque Bounce Notice",
            tagline: "Section 138 NI Act Notice.",
            about: [
                "If a cheque bounces, you MUST send a legal notice within 30 days of the dishonour memo. Failure to do so bars you from filing a criminal case.",
                "It is a criminal offense punishable with jail time for the defaulter."
            ],
            keyFeature: "Mandatory 30-day timeline.",
            advantages: [
                { title: "Pressure", description: "Threat of Criminal Case." }
            ],
            processSteps: [
                { title: "Bounce", desc: "Get Return Memo from Bank." },
                { title: "Notice", desc: "Send Notice within 30 days." },
                { title: "Case", desc: "File case if no pay in 15 days." }
            ],
            whoNeedsLike: ["Creditors"],
            documents: { "Proof": ["Original Cheque", "Return Memo"] },
            fees: [
                { component: "Notice Fee", fee: "₹2,500", remarks: "Drafting & Post" }
            ],
            faqs: [
                { question: "What if I miss the 30 days?", answer: "You lose the right to file a criminal case under Sec 138. You can only file a civil recovery suit." }
            ]
        },
        "consumer-complaint": {
            title: "Consumer Complaint",
            tagline: "Fight against Defective Goods/Service.",
            about: [
                "If you have been cheated or served poorly by a brand/seller, you can file a complaint in the District Consumer Disputes Redressal Commission.",
                "It is a cost-effective and faster way to get justice."
            ],
            keyFeature: "Compensation for mental harassment allowed.",
            advantages: [
                { title: "Justice", description: "Get refund + damages." }
            ],
            processSteps: [
                { title: "Notice", desc: "Send Legal Notice first." },
                { title: "Drafting", desc: "Draft Consumer Complaint." },
                { title: "Filing", desc: "File in District Forum." }
            ],
            whoNeedsLike: ["Consumers"],
            documents: { "Proof": ["Bill/Invoice", "Communication"] },
            fees: [
                { component: "Professional Fee", fee: "₹5,000", remarks: "Drafting Only" }
            ],
            faqs: [
                { question: "Do I need a lawyer?", answer: "You can argue yourself, but a lawyer ensures proper procedure is followed." }
            ]
        },
        "ipr-infringement": {
            title: "IPR Infringement Notice",
            tagline: "Stop Copycats.",
            about: [
                "If someone copies your Trademark, Copyright, or Patent, you can send a Cease and Desist Notice demanding them to stop immediately.",
                "This protects your brand value."
            ],
            keyFeature: "Protect your Brand Registry.",
            advantages: [
                { title: "Stop Loss", description: "Prevent revenue leak." }
            ],
            processSteps: [
                { title: "Verify", desc: "Check infringement evidence." },
                { title: "Notice", desc: "Send Cease & Desist Notice." },
                { title: "Action", desc: "File Suit (if needed)." }
            ],
            whoNeedsLike: ["Brand Owners"],
            documents: { "IP": ["Registration Cert", "Proof of copy"] },
            fees: [
                { component: "Notice Fee", fee: "₹3,500", remarks: "Drafting & Sending" },
                { component: "Suit", fee: "Custom", remarks: "Litigation" }
            ],
            faqs: [
                { question: "Is notice mandatory?", answer: "It is good practice to show the court that you tried to settle amicably first." }
            ]
        }
    },
    "global": {
        "usa-company": {
            title: "USA Company Incorporation",
            tagline: "Launch your C-Corp in Delaware.",
            about: [
                "Setting up a US Company (C-Corp or LLC) is the first step for Indian founders targeting global markets or raising funds from US VCs.",
                "We specialize in Delaware C-Corps, the gold standard for startups."
            ],
            keyFeature: "Access to Stripe, Mercury Bank, and US VCs.",
            advantages: [
                { title: "Investment", description: "Preferred by YC & VCs." },
                { title: "Payments", description: "Seamless Stripe integration." }
            ],
            processSteps: [
                { title: "Name Check", desc: "Verify availability." },
                { title: "Filing", desc: "File Cert of Incorporation." },
                { title: "EIN", desc: "Obtain Tax ID (EIN) from IRS." },
                { title: "Bank", desc: "Open Mercury/Brex account." }
            ],
            whoNeedsLike: ["SaaS Founders", "Exporters"],
            documents: { "KYC": ["Passport", "Home Address Proof"] },
            fees: [
                { component: "Delaware C-Corp", fee: "$500", remarks: "Excludes State Franchise Tax" }
            ],
            faqs: [
                { question: "Do I need to visit US?", answer: "No, the entire process is 100% online." }
            ]
        },
        "uk-company": {
            title: "UK Limited Company",
            tagline: "Gateway to Europe.",
            about: [
                "A UK Limited Company (Ltd) is one of the fastest and cheapest entities to set up globally. It is ideal for dropshipping and digital services.",
                "There is no requirement for a resident director."
            ],
            keyFeature: "Incorporation in 24-48 Hours.",
            advantages: [
                { title: "Speed", description: "Fastest setup globally." },
                { title: "Cost", description: "Very low maintenance." }
            ],
            processSteps: [
                { title: "Form", desc: "Fill Companies House form." },
                { title: "Office", desc: "Get Regd Office in London." },
                { title: "Incorp", desc: "Receive Certificate." }
            ],
            whoNeedsLike: ["Freelancers", "Dropshippers"],
            documents: { "KYC": ["Passport", "Address Proof"] },
            fees: [
                { component: "Formation", fee: "£150", remarks: "All Inclusive" }
            ],
            faqs: [
                { question: "What about Tax?", answer: "UK Corp Tax applies on profits. VAT applies if turnover > £85k." }
            ]
        },
        "singapore-company": {
            title: "Singapore Pte Ltd",
            tagline: "The Asian Business Hub.",
            about: [
                "Singapore is the best jurisdiction for Asian HQs. It offers low taxes, strong IP protection, and high reputation.",
                "Mandatory to have a Local Resident Director (Nominee)."
            ],
            keyFeature: "0% Capital Gains Tax.",
            advantages: [
                { title: "Tax", description: "Flat 17% Corp Tax with exemptions." },
                { title: "Trust", description: "Highly trusted by investors." }
            ],
            processSteps: [
                { title: "KYC", desc: "Pass strict compliance checks." },
                { title: "Nominee", desc: "Appoint Local Director." },
                { title: "Filing", desc: "File with ACRA." }
            ],
            whoNeedsLike: ["Fintech", "Regional HQs"],
            documents: { "KYC": ["Passport", "Proof of Residence"] },
            fees: [
                { component: "Formation", fee: "SGD 2,500+", remarks: "Includes Nominee for 1 yr" }
            ],
            faqs: [
                { question: "Can I be the only director?", answer: "No, you need at least one ordinarily resident director in Singapore." }
            ]
        },
        "uae-company": {
            title: "UAE Company Formation",
            tagline: "Dubai & Sharjah Free Zones.",
            about: [
                "Setup your business in the UAE to enjoy 0% Personal Income Tax and 100% foreign ownership.",
                "We assist with Free Zone (IFZA, DMCC, SHAMS) and Mainland setups."
            ],
            keyFeature: "Includes Residence Visa options.",
            advantages: [
                { title: "Tax Free", description: "No personal tax." },
                { title: "Lifestyle", description: "World-class infrastructure." }
            ],
            processSteps: [
                { title: "Selection", desc: "Choose Free Zone." },
                { title: "License", desc: "Apply for Trade License." },
                { title: "Visa", desc: "Apply for Investor Visa." }
            ],
            whoNeedsLike: ["Consultants", "Traders"],
            documents: { "KYC": ["Passport Photo", "Entry Stamp"] },
            fees: [
                { component: "Visa Package", fee: "AED 12,500+", remarks: "Approx estimate" }
            ],
            faqs: [
                { question: "Is physical office required?", answer: "No, most Free Zones offer Flexi-Desk options." }
            ]
        },
        "uae-ecommerce": {
            title: "UAE e-Commerce License",
            tagline: "Sell on Amazon.ae & Noon.",
            about: [
                "Specific license package designed for e-commerce traders. It allows you to open a bank account and register on Amazon UAE.",
                "One of the most booming sectors in the Middle East."
            ],
            keyFeature: "100% Ownership.",
            processSteps: [
                { title: "Apply", desc: "Select e-trading activity." },
                { title: "Bank", desc: "Open Corp Bank A/c." }
            ],
            documents: { "KYC": ["Passport"] },
            fees: [
                { component: "License Fee", fee: "AED 6,000+", remarks: "Annual" }
            ],
            faqs: [
                { question: "Can I import goods?", answer: "Yes, you can obtain an Import Code." }
            ]
        },
        "usa-trademark": {
            title: "USA Trademark (USPTO)",
            tagline: "Protect Brand in USA.",
            about: [
                "Filing a trademark with the USPTO gives you exclusive rights to your brand in the United States.",
                "It is essential for Amazon Brand Registry in the US market."
            ],
            keyFeature: "Federal Protection across 50 states.",
            advantages: [
                { title: "Amazon", description: "Unlock Brand Registry." },
                { title: "Value", description: "Asset for the company." }
            ],
            processSteps: [
                { title: "Search", desc: "TESS Database Search." },
                { title: "Filing", desc: "File Application with USPTO." },
                { title: "Review", desc: "Examining Attorney review." }
            ],
            whoNeedsLike: ["Exporters", "Amazon Sellers"],
            documents: { "Brand": ["Logo", "Proof of Use (Specimen)"] },
            fees: [
                { component: "Filing Fee", fee: "$650", remarks: "Per Class (approx)" }
            ],
            faqs: [
                { question: "Is use required?", answer: "Yes, you must show 'Use in Commerce' or file an 'Intent to Use'." }
            ]
        },
        "international-trademark": {
            title: "International Trademark",
            tagline: "Madrid Protocol Filing.",
            about: [
                "Register your trademark in multiple countries through a single application using the Madrid System (WIPO).",
                "You must have a base application in India first."
            ],
            keyFeature: "Single Window System.",
            processSteps: [
                { title: "Base App", desc: "File in India." },
                { title: "WIPO", desc: "File International App." },
                { title: "Designation", desc: "Choose countries." }
            ],
            documents: { "Legal": ["Indian TM App"] },
            fees: [
                { component: "WIPO Fee", fee: "CHF 653+", remarks: "Plus Country Fees" }
            ],
            faqs: [
                { question: "Is it cheaper?", answer: "Yes, it saves legal fees of hiring lawyers in every single country." }
            ]
        },
        "ajman": {
            title: "Ajman Free Zone (AFZ)",
            tagline: "Cost-Effective Setup.",
            about: [
                "Ajman Media City and AFZ are known for the most affordable license packages in the UAE.",
                "Ideal for freelancers and digital marketers."
            ],
            keyFeature: "Lowest Cost Entry.",
            fees: [
                { component: "License", fee: "AED 6,000", remarks: "No Visa Pkg" }
            ]
        },
        "uaq": {
            title: "UAQ Free Zone",
            tagline: "Modern Industrial Zone.",
            about: [
                "Umm Al Quwain (UAQ) Free Trade Zone offers great flexibility and is close to Dubai.",
                "High acceptance for general trading activities."
            ],
            fees: [
                { component: "License", fee: "AED 8,000", remarks: "Consultancy" }
            ]
        },
        "uae-attestation": {
            title: "UAE Embassy Attestation",
            tagline: "Document Legalization.",
            about: [
                "To use Indian documents (Degree, Marriage Cert, Birth Cert) in UAE for visa purposes, they must be attested.",
                "Process: Notary -> Home Dept -> MEA -> UAE Embassy."
            ],
            keyFeature: "End-to-End Service.",
            processSteps: [
                { title: "Collection", desc: "We pick up documents." },
                { title: "Stamping", desc: "Get all 4 stamps." },
                { title: "Delivery", desc: "Deliver to you." }
            ],
            documents: { "Originals": ["Degree/Certificate", "Passport Copy"] },
            fees: [
                { component: "Per Doc", fee: "₹4,500", remarks: "MEA + Embassy" }
            ],
            faqs: [
                { question: "Time taken?", answer: "Usually 7-10 working days." }
            ]
        }
    },
    "ondemand": {
        "custom-contracts": {
            title: "Custom Contracts Drafting",
            tagline: "Tailor-made agreements for your specific business needs.",
            about: [
                "Every business relationship is unique, and standard templates often fail to capture specific nuances. Our team drafts custom contracts that protect your interests and prevent future disputes.",
                "We cover Vendor Agreements, Franchise Agreements, Licensing Deals, and Joint Ventures."
            ],
            keyFeature: "Bespoke legal drafting by experienced corporate lawyers.",
            advantages: [
                { title: "Risk Mitigation", description: "Clarity on roles, responsibilities, and liabilities." },
                { title: "Enforceability", description: "Drafted as per latest Indian laws." }
            ],
            processSteps: [
                { title: "Consultation", desc: "Understand requirements." },
                { title: "Drafting", desc: "First draft in 3-4 days." },
                { title: "Review", desc: "Revisions based on feedback." }
            ],
            whoNeedsLike: ["Startups", "Enterprises"],
            fees: [
                { component: "Drafting Fee", fee: "₹5,000+", remarks: "Depends on complexity" }
            ],
            faqs: [
                { question: "Do you use templates?", answer: "We start with a framework but customize 100% to your facts." }
            ]
        },
        "litigation-support": {
            title: "Litigation Support",
            tagline: "Legal backing for court disputes.",
            about: [
                "Facing a legal dispute can be daunting. We provide end-to-end litigation support, including drafting plaints, written statements, and finding the right counsel for representation.",
                "We assist in Civil Recovery, Cheque Bounce, and NCLT matters."
            ],
            keyFeature: "Strategic legal advice to handle disputes effectively.",
            fees: [
                { component: "Retainer", fee: "Custom Quote", remarks: "Case-to-case basis" }
            ]
        },
        "corporate-restructuring": {
            title: "Corporate Restructuring",
            tagline: "Reorganize for efficiency and growth.",
            about: [
                "Corporate restructuring involves changing the ownership or operational structure of a company to make it more profitable or better organized.",
                "Services include Slump Sale, Demergers, and Conversion of Firm to Company."
            ],
            keyFeature: "Tax-efficient restructuring solutions.",
            fees: [
                { component: "Advisory", fee: "₹25,000+", remarks: "Project basis" }
            ]
        },
        "business-valuation": {
            title: "Business Valuation",
            tagline: "Know your company's true worth.",
            about: [
                "Valuation is critical for fundraising, M&A, and regulatory compliance (FDI/Income Tax). Our Registered Valuers (IBBI) provide internationally accepted valuation reports.",
                "Methods used: DCF, NAV, Comparable Companies."
            ],
            keyFeature: "Reports signed by IBBI Registered Valuers.",
            processSteps: [
                { title: "Data Collection", desc: "Financials & Projections." },
                { title: "Model", desc: "Build Financial Model." },
                { title: "Report", desc: "Issue Reg. Valuer Report." }
            ],
            whoNeedsLike: ["Startups raising funds", "Investors"],
            fees: [
                { component: "Valuation Report", fee: "₹15,000+", remarks: "IBBI Certified" }
            ],
            faqs: [
                { question: "Is this valid for FDI?", answer: "Yes, we provide reports compliant with RBI/FEMA norms." }
            ]
        },
        "due-diligence": {
            title: "Due Diligence Report",
            tagline: "Uncover risks before investing.",
            about: [
                "Financial and Legal Due Diligence is essential before any acquisition or investment. We examine the target company's books, contracts, and compliances to identify red flags.",
                "We offer Limited Review as well as Comprehensive Due Diligence."
            ],
            keyFeature: "Detailed risk assessment report.",
            fees: [
                { component: "DD Report", fee: "₹30,000+", remarks: "Scope dependent" }
            ]
        },
        "mergers-acquisitions": {
            title: "Mergers & Acquisitions (M&A)",
            tagline: "Strategic deal advisory.",
            about: [
                "We assist in the entire M&A lifecycle: from target identification to deal structuring, valuation, and final documentation (Share Purchase Agreement).",
                "Our focus is on SME and Startup M&A deals."
            ],
            keyFeature: "End-to-End Deal Advisory.",
            fees: [
                { component: "Success Fee", fee: "1-3%", remarks: "Of deal value" }
            ]
        },
        "pitch-deck": {
            title: "Investment Pitch Deck",
            tagline: "Showcase your vision to investors.",
            about: [
                "A compelling pitch deck is the key to securing funding. We help you craft a narrative that highlights your problem-solution fit, market size, and traction.",
                "Services include Financial Modelling and Deck Design."
            ],
            keyFeature: "Investor-ready presentation.",
            fees: [
                { component: "Deck + Model", fee: "₹15,000+", remarks: "Custom package" }
            ]
        },
        "rbi-fema": {
            title: "RBI / FEMA Advisory",
            tagline: "Compliance for Cross-Border Transactions.",
            about: [
                "Foreign Direct Investment (FDI) and Overseas Direct Investment (ODI) are strictly regulated by FEMA. We ensure your cross-border transactions are compliant.",
                "Services: FCGPR Filing, FCTRS Filing, Compounding of Offences."
            ],
            keyFeature: "Expertise in RBI Liaisoning.",
            fees: [
                { component: "Consultation", fee: "₹5,000", remarks: "Per hour" }
            ]
        },
        "sebi-advisory": {
            title: "SEBI Advisory",
            tagline: "Capital Market Compliances.",
            about: [
                "For listed companies and intermediaries (AIFs, RIA, PMS), SEBI compliance is paramount. We provide advisory on AIF registration and ongoing compliances.",
                "We also assist in responding to SEBI Show Cause Notices."
            ],
            fees: [
                { component: "Retainer", fee: "Custom", remarks: "Monthly basis" }
            ]
        },
        "nclt-matters": {
            title: "NCLT Matters",
            tagline: "IBC and Company Law Tribunal.",
            about: [
                "We handle matters before the National Company Law Tribunal (NCLT) related to Insolvency (IBC), Oppression & Mismanagement, and Mergers.",
                "Our team includes experienced Insolvency Professionals."
            ],
            keyFeature: "Representation at NCLT Benches.",
            fees: [
                { component: "Filing Fee", fee: "₹25,000+", remarks: "Legal Professional Fee" }
            ]
        }
    },
    "global": {
        "cross-border-tax": {
            title: "Cross Border Taxation",
            tagline: "Expert advisory on international tax treaties and compliance.",
            about: [
                "Navigating the complexities of cross-border transactions requires in-depth knowledge of DTAA (Double Taxation Avoidance Agreements) and local laws.",
                "We assist businesses and individuals in optimizing their tax liabilities across jurisdictions."
            ],
            keyFeature: "DTAA Benefit Analysis & Filing"
        },
        "customs-trade": {
            title: "Customs & International Trade",
            tagline: "Seamless import-export compliance and duty optimization.",
            about: [
                "Our experts help you understand customs regulations, tariff classifications, and valuation rules.",
                "Ensure your international supply chain is compliant and cost-effective."
            ],
            keyFeature: "Import/Export Duty Planning"
        },
        "expatriate-services": {
            title: "Global Expatriate Services",
            tagline: "Tax planning for globally mobile employees.",
            about: [
                "We provide tax planning and compliance services for individuals working outside their home country.",
                "Services include tax equalization, social security planning, and filing returns in multiple countries."
            ],
            keyFeature: "Expat Tax Residency Planning"
        },
        "global-tax": {
            title: "Global Tax Services",
            tagline: "Comprehensive international tax solutions.",
            about: [
                "A holistic approach to managing your global tax footprint.",
                "We coordinate with local experts worldwide to ensure your global operations are compliant."
            ],
            keyFeature: "Integrated Global Tax Strategy"
        },
        "transfer-pricing": {
            title: "Transfer Pricing",
            tagline: "Arm's length pricing for inter-company transactions.",
            about: [
                "Documentation and planning to justify pricing between related parties across borders.",
                "Compliance with OECD guidelines and local transfer pricing regulations."
            ],
            keyFeature: "Transfer Pricing Audit Defense"
        },
        "transaction-tax": {
            title: "Transaction Tax",
            tagline: "Tax advisory for mergers, acquisitions, and restructuring.",
            about: [
                "Assess the tax implications of major business transactions.",
                "We help structure deals to minimize tax leakage and ensure regulatory approval."
            ],
            keyFeature: "M&A Tax Due Diligence"
        },
        "representation": {
            title: "Representation Services",
            tagline: "Representing your interests before foreign tax authorities.",
            about: [
                "If you face inquiries or audits from foreign tax bodies, our network of experts can represent you.",
                "Dispute resolution and litigation support for international tax matters."
            ],
            keyFeature: "International Tax Dispute Resolution"
        },
        "usa-federal-tax": {
            title: "USA Federal Tax",
            tagline: "IRS compliance for US entities and foreign investors.",
            about: [
                "Filing Form 1120 for C-Corps, 1065 for Partnerships, and 5472 for foreign-owned US corporations.",
                "Expert guidance on US federal tax laws and state nexus issues."
            ],
            keyFeature: "Form 5472 & 1120 Filing"
        },
        "eu-vat": {
            title: "EU VAT Compliance",
            tagline: "One-Stop-Shop (OSS) and IOSS registration for EU sales.",
            about: [
                "Selling to customers in the European Union requires strict VAT compliance.",
                "We assist with OSS registration to file a single VAT return for all EU sales."
            ],
            keyFeature: "OSS/IOSS Registration & Filing"
        },
        "ireland-corporate-tax": {
            title: "Ireland Corporate Tax",
            tagline: "Low corporate tax planning in Ireland.",
            about: [
                "Ireland offers one of the lowest corporate tax rates in Europe (12.5%).",
                "We handle CT1 filing and ensure compliance with Irish Revenue Commissioners."
            ],
            keyFeature: "12.5% Tax Rate Optimization"
        },
        "ireland-vat": {
            title: "Ireland VAT & Customs",
            tagline: "VAT registration and customs for Irish trade.",
            about: ["Assistance with Irish VAT registration for domestic and cross-border trade."],
            keyFeature: "Irish VAT Registration"
        },
        "cyprus-vat": {
            title: "Cyprus VAT",
            tagline: "VAT services for Cyprus entities.",
            about: ["Registration and quarterly VAT filing in Cyprus."],
            keyFeature: "Cyprus VAT Compliance"
        },
        "cyprus-cgt": {
            title: "Cyprus Capital Gains Tax",
            tagline: "Advisory on property and share disposals in Cyprus.",
            about: ["Specific rules apply to gains from immovable property in Cyprus."],
            keyFeature: "CGT Exemptions Analysis"
        },
        "singapore-gst": {
            title: "Singapore GST",
            tagline: "Goods & Services Tax compliance for Singapore businesses.",
            about: ["Mandatory if turnover exceeds SGD 1 million. We handle F5 return filing."],
            keyFeature: "Singapore GST Registration"
        },
        "singapore-corporate-tax": {
            title: "Singapore Corporate Tax",
            tagline: "Form C-S/C filing for Singapore companies.",
            about: ["Benefit from Singapore's tax incentives and startup exemptions."],
            keyFeature: "ECI & Form C-S Filing"
        },
        "australia-gst": {
            title: "Australia GST",
            tagline: "BAS Lodgment and GST registration.",
            about: ["GST applies to most goods and services in Australia. We assist with BAS filing."],
            keyFeature: "Business Activity Statement (BAS)"
        },
        "china-enterprise-tax": {
            title: "China Enterprise Income Tax",
            tagline: "Compliance for WFOEs and Representative Offices.",
            about: ["Navigating China's complex tax system for foreign enterprises."],
            keyFeature: "Quarterly EIT Filing"
        },
        "hong-kong-tax": {
            title: "Hong Kong Corporate Tax",
            tagline: "Profits Tax Return filing.",
            about: ["Hong Kong follows a territorial source principle of taxation."],
            keyFeature: "Offshore Tax Exemption Claim"
        },
        "australia-income-tax": {
            title: "Australia Income Tax",
            tagline: "Tax return filing for Australian entities.",
            about: ["Compliance with ATO regulations for companies and trusts."],
            keyFeature: "Comapny Tax Return"
        },
        "australia-fbt": {
            title: "Australia FBT",
            tagline: "Fringe Benefits Tax advisory.",
            about: ["Assessment and filing of FBT for employee benefits provided."],
            keyFeature: "FBT Return Filing"
        },
        "china-individual-tax": {
            title: "China Individual Income Tax",
            tagline: "IIT filing for expats in China.",
            about: ["Compliance with China's 183-day rule and global income taxation."],
            keyFeature: "Monthly IIT Filing"
        },
        "hong-kong-individual": {
            title: "Hong Kong Individual Tax",
            tagline: "Salaries Tax compliance.",
            about: ["Filing BIR60 for individuals working in Hong Kong."],
            keyFeature: "Salaries Tax Assessment"
        },
        "ireland-income-tax": {
            title: "Ireland Income Tax",
            tagline: "Form 11 filing for self-employed.",
            about: ["Personal tax compliance for residents and non-residents in Ireland."],
            keyFeature: "Preliminary Tax Calculation"
        },
        "ireland-cgt": {
            title: "Ireland Capital Gains Tax",
            tagline: "CGT payment and return filing.",
            about: ["Advisory on disposal of assets and available reliefs."],
            keyFeature: "CGT Payment Slips"
        },
        "ireland-cat": {
            title: "Ireland Capital Acquisition Tax",
            tagline: "Gift and Inheritance tax planning.",
            about: ["Planning for passing wealth to the next generation in Ireland."],
            keyFeature: "CAT Threshold Analysis"
        },

        "uk-vat": {
            title: "UK VAT Registration",
            tagline: "Expand your business to the United Kingdom. Mandatory for sellers exceeding the threshold.",
            about: [
                "Value Added Tax (VAT) in the UK is a tax on consumption. If you are a non-UK based seller selling goods to UK customers, or if your UK turnover exceeds £90,000, you must register for VAT with HMRC (Her Majesty's Revenue and Customs).",
                "We assist Indian businesses and e-commerce sellers in obtaining UK VAT registration smoothly."
            ],
            keyFeature: "Mandatory for Amazon/eBay sellers storing goods in UK warehouses.",
            advantages: [
                { title: "Compliance", description: "Avoid penalties and account suspension on marketplaces." },
                { title: "Reclaim VAT", description: "Claim back VAT paid on business expenses in the UK." },
                { title: "Trust", description: "Build credibility with UK customers and suppliers." }
            ],
            processSteps: [
                { title: "Assessment", desc: "Check if you meet the threshold for mandatory registration." },
                { title: "Application", desc: "Submit VAT1 form online to HMRC." },
                { title: "Vat Certificate", desc: "Receive VAT Registration Number (VRN) by post/online." }
            ],
            documents: { "Business": ["Certificate of Incorporation", "Passport of Director", "Address Proof"] },
            fees: [
                { component: "Registration Fee", fee: "£150", remarks: "Professional Fee" }
            ],
            faqs: [
                { question: "Do I need a UK bank account?", answer: "Not strictly necessary for registration, but recommended for paying taxes." }
            ]
        },
        "uae-vat": {
            title: "UAE VAT Registration",
            tagline: "Comply with UAE Tax Laws. Seamless Registration Process.",
            about: [
                "The UAE implemented VAT at a standard rate of 5% on 1st Jan 2018. Registration is mandatory if taxable supplies and imports exceed AED 375,000 per annum.",
                "Voluntary registration is possible if turnover exceeds AED 187,500."
            ],
            keyFeature: "Low 5% tax rate makes UAE an attractive business hub.",
            advantages: [
                { title: "Legal Requirement", description: "Mandatory for businesses above the threshold." },
                { title: "Refunds", description: "Claim refunds on excess input VAT paid." },
                { title: "Business Growth", description: "Required for large tenders and corporate contracts." }
            ],
            processSteps: [
                { title: "Portal Account", desc: "Create an account on the FTA (Federal Tax Authority) portal." },
                { title: "Form Filing", desc: "Fill online application with turnover details." },
                { title: "TRN Issuance", desc: "Receive Tax Registration Number (TRN) upon approval." }
            ],
            documents: { "Entity": ["Trade License", "Passport of Owners", "Bank Account Details"] },
            fees: [
                { component: "Professional Fee", fee: "AED 1,000", remarks: "Assistance & Filing" }
            ],
            faqs: [
                { question: "Is it mandatory for free zone companies?", answer: "Yes, VAT applies to Free Zone companies as well, with some specific exceptions." }
            ]
        },
        "uae-corporate-tax": {
            title: "UAE Corporate Tax",
            tagline: "New Tax Regime in UAE. 9% Corporate Tax on Profits.",
            about: [
                "The UAE has introduced Federal Corporate Tax with a headline rate of 9% for taxable income exceeding AED 375,000. It is effective for financial years starting on or after 1 June 2023.",
                "This marks a significant shift in the UAE's tax landscape, aiming to align with global standards."
            ],
            keyFeature: "0% Tax for income up to AED 375,000 to support small businesses.",
            advantages: [
                { title: "Global Standards", description: "Aligns UAE with international tax practices." },
                { title: "Free Zone Benefit", description: "0% tax may still apply to Qualifying Free Zone Persons." },
                { title: "Small Business Relief", description: "relief for revenue below AED 3 Million." }
            ],
            processSteps: [
                { title: "Registration", desc: "Register for Corporate Tax with FTA." },
                { title: "Accounting", desc: "Maintain proper books of accounts (Audited financials may be required)." },
                { title: "Filing", desc: "File annual Corporate Tax Return." }
            ],
            documents: { "Company": ["Trade License", "MOA", "Financial Statements"] },
            fees: [
                { component: "Registration", fee: "AED 1,500", remarks: "One-time registration" }
            ],
            faqs: [
                { question: "Are salaries taxed?", answer: "No, Corporate Tax is on business profits, not on individual salaries." }
            ]
        }
    }
};

// HELPER: Fallback function for missing services
export const getServiceData = (category, serviceId) => {
    const catData = serviceDetailData[category];
    if (catData && catData[serviceId]) {
        return catData[serviceId];
    }
    // Generic Fallback
    return {
        title: serviceId.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()),
        tagline: "Expert services for your business needs.",
        about: [
            "We provide professional assistance for this service. Our team of experts ensures complete compliance and hassle-free processing.",
            "Contact us today to know more about requirements, fees, and timelines."
        ],
        keyFeature: "Professional and timely service delivery.",
        advantages: [
            { title: "Expert Support", description: "Guided by CAs and CSs." },
            { title: "Online Process", description: "100% digital and paperless." }
        ],
        checklist: ["Contact us for a detailed checklist specific to your case."],
        documents: { "General": ["PAN Card", "Aadhaar Card", "Address Proof"] },
        fees: [{ component: "Consultation", fee: "Free", remarks: "Get a quote today" }],
        fallback: true
    };
};
