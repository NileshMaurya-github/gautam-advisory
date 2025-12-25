/*
    Menu Data Structure
    Defines the navigation hierarchy for the Mega Menu.
*/

export const menuData = [
    {
        title: "GST",
        path: "/gst",
        submenu: [
            {
                category: "GST Registration",
                items: [
                    { label: "GST Registration", path: "/gst/registration" },
                    { label: "GST for Foreigners", path: "/gst/foreigners" },
                    { label: "Virtual Office + GSTIN", path: "/gst/virtual-office" },
                    { label: "GST Amendment", path: "/gst/amendment" },
                    { label: "GST Revocation", path: "/gst/revocation" }
                ]
            },
            {
                category: "GST Filing",
                items: [
                    { label: "GST Return Filing", path: "/gst/return-filing" },
                    { label: "GST NIL Return", path: "/gst/nil-return" },
                    { label: "GST Annual Return (GSTR-9)", path: "/gst/annual-return" },
                    { label: "GST LUT Form", path: "/gst/lut" },
                    { label: "GSTR-10", path: "/gst/gstr-10" }
                ]
            },
            {
                category: "Software & Tools",
                items: [
                    { label: "GST E-Invoicing", path: "/gst/e-invoicing" },
                    { label: "GST Software (Accountants)", path: "/gst/software" },
                    { label: "GST Notice", path: "/gst/notice" }
                ]
            }
        ]
    },
    {
        title: "Startup",
        path: "/startup",
        submenu: [
            {
                category: "Business Formation",
                items: [
                    { label: "Proprietorship", path: "/startup/proprietorship" },
                    { label: "Partnership", path: "/startup/partnership" },
                    { label: "One Person Company", path: "/startup/opc" },
                    { label: "Limited Liability Partnership", path: "/startup/llp" },
                    { label: "Private Limited Company", path: "/startup/pvt-ltd" },
                    { label: "Section 8 Company", path: "/startup/section-8" }
                ]
            },
            {
                category: "Other Structures",
                items: [
                    { label: "Trust Registration", path: "/startup/trust" },
                    { label: "Public Limited Company", path: "/startup/public-ltd" },
                    { label: "Producer Company", path: "/startup/producer" },
                    { label: "Indian Subsidiary", path: "/startup/indian-subsidiary" }
                ]
            }
        ]
    },
    {
        title: "Registrations",
        path: "/registrations",
        submenu: [
            {
                category: "Government Registrations",
                items: [
                    { label: "Startup India", path: "/registrations/startup-india" },
                    { label: "Udyam Registration", path: "/registrations/udyam" },
                    { label: "Import Export Code", path: "/registrations/iec" },
                    { label: "Digital Signature", path: "/registrations/dsc" },
                    { label: "FCRA Registration", path: "/registrations/fcra" }
                ]
            },
            {
                category: "Licenses & Approvals",
                items: [
                    { label: "Trade License", path: "/registrations/trade-license" },
                    { label: "FSSAI Registration", path: "/registrations/fssai-reg" },
                    { label: "FSSAI License", path: "/registrations/fssai-license" },
                    { label: "Drug License", path: "/registrations/drug-license" },
                    { label: "Shop Act Registration", path: "/registrations/shop-act" },
                    { label: "Fire License", path: "/registrations/fire-license" }
                ]
            },
            {
                category: "Certifications",
                items: [
                    { label: "ISO Registration", path: "/registrations/iso" },
                    { label: "Halal License", path: "/registrations/halal" },
                    { label: "BIS Registration", path: "/registrations/bis" },
                    { label: "Barcode Registration", path: "/registrations/barcode" }
                ]
            },
            {
                category: "Tax & Labour",
                items: [
                    { label: "PF Registration", path: "/registrations/pf" },
                    { label: "ESI Registration", path: "/registrations/esi" },
                    { label: "Professional Tax", path: "/registrations/prof-tax" },
                    { label: "12A & 80G", path: "/registrations/12a-80g" }
                ]
            }
        ]
    },
    {
        title: "Income Tax",
        path: "/income-tax",
        submenu: [
            {
                category: "Personal & Business",
                items: [
                    { label: "Income Tax E-Filing", path: "/income-tax/efiling" },
                    { label: "Business Tax Filing", path: "/income-tax/business" },
                    { label: "Partnership/LLP ITR", path: "/income-tax/partnership" },
                    { label: "Company ITR", path: "/income-tax/company" },
                    { label: "Trust/NGO Tax Filing", path: "/income-tax/trust" }
                ]
            },
            {
                category: "TDS & Compliance",
                items: [
                    { label: "TDS Return Filing", path: "/income-tax/tds" },
                    { label: "TAN Registration", path: "/income-tax/tan" },
                    { label: "15CA - 15CB Filing", path: "/income-tax/15ca-15cb" },
                    { label: "Income Tax Notice", path: "/income-tax/notice" },
                    { label: "Revised ITR (ITR-U)", path: "/income-tax/revised" }
                ]
            }
        ]
    },
    {
        title: "Trademark",
        path: "/trademark",
        submenu: [
            {
                category: "Registration",
                items: [
                    { label: "Trademark Registration", path: "/trademark/registration" },
                    { label: "Expedited TM Registration", path: "/trademark/expedited" },
                    { label: "Start Trademark Protection", path: "/trademark/protection" }
                ]
            },
            {
                category: "Objection & Opposition",
                items: [
                    { label: "Trademark Objection", path: "/trademark/objection" },
                    { label: "Trademark Opposition", path: "/trademark/opposition" },
                    { label: "Trademark Hearing", path: "/trademark/hearing" },
                    { label: "Trademark Rectification", path: "/trademark/rectification" }
                ]
            },
            {
                category: "Management",
                items: [
                    { label: "Trademark Renewal", path: "/trademark/renewal" },
                    { label: "Trademark Transfer", path: "/trademark/transfer" },
                    { label: "TM Infringement Notice", path: "/trademark/infringement" },
                    { label: "Trademark Certificate", path: "/trademark/certificate" }
                ]
            },
            {
                category: "Other IP",
                items: [
                    { label: "Copyright Registration", path: "/trademark/copyright" },
                    { label: "Design Registration", path: "/trademark/design" },
                    { label: "Patent Registration", path: "/trademark/patent" },
                    { label: "Logo Designing", path: "/trademark/logo-design" }
                ]
            }
        ]
    },
    {
        title: "MCA",
        path: "/mca",
        submenu: [
            {
                category: "Company Changes",
                items: [
                    { label: "Name Change", path: "/mca/name-change" },
                    { label: "Reg. Office Change", path: "/mca/office-change" },
                    { label: "MOA Amendment", path: "/mca/moa" },
                    { label: "AOA Amendment", path: "/mca/aoa" },
                    { label: "Increase Capital", path: "/mca/increase-capital" }
                ]
            },
            {
                category: "Director Services",
                items: [
                    { label: "Add Director", path: "/mca/add-director" },
                    { label: "Remove Director", path: "/mca/remove-director" },
                    { label: "DIN eKYC", path: "/mca/din-ekyc" },
                    { label: "DIN Reactivation", path: "/mca/din-reactivation" }
                ]
            },
            {
                category: "Compliance Filings",
                items: [
                    { label: "Company Compliance", path: "/mca/company-compliance" },
                    { label: "LLP Compliance", path: "/mca/llp-compliance" },
                    { label: "ADT-1 Filing", path: "/mca/adt-1" },
                    { label: "DPT-3 Filing", path: "/mca/dpt-3" },
                    { label: "LLP Form 11", path: "/mca/llp-11" },
                    { label: "Commencement (INC-20A)", path: "/mca/inc-20a" }
                ]
            },
            {
                category: "Closure",
                items: [
                    { label: "Winding Up (Company)", path: "/mca/winding-up-company" },
                    { label: "Winding Up (LLP)", path: "/mca/winding-up-llp" },
                    { label: "Dormant Status", path: "/mca/dormant" },
                    { label: "Share Transfer", path: "/mca/share-transfer" }
                ]
            }
        ]
    },
    {
        title: "Compliance",
        path: "/compliance",
        submenu: [
            {
                category: "Annual Filings",
                items: [
                    { label: "Proprietorship Compliance", path: "/compliance/proprietorship" },
                    { label: "Partnership Compliance", path: "/compliance/partnership" },
                    { label: "PF Return Filing", path: "/compliance/pf-return" },
                    { label: "ESI Return Filing", path: "/compliance/esi-return" },
                    { label: "Prof. Tax Return", path: "/compliance/pt-return" }
                ]
            },
            {
                category: "Specialized",
                items: [
                    { label: "FDI Filing (RBI)", path: "/compliance/fdi" },
                    { label: "FLA Return", path: "/compliance/fla" },
                    { label: "FSSAI Renewal", path: "/compliance/fssai-renewal" },
                    { label: "FSSAI Return", path: "/compliance/fssai-return" }
                ]
            },
            {
                category: "Business Support",
                items: [
                    { label: "Bookkeeping", path: "/compliance/bookkeeping" },
                    { label: "HR & Payroll", path: "/compliance/payroll" },
                    { label: "Business Plan", path: "/compliance/business-plan" },
                    { label: "CA Support", path: "/compliance/ca-support" }
                ]
            }
        ]
    },
    {
        title: "Legal",
        path: "/legal",
        submenu: [
            {
                category: "Agreements",
                items: [
                    { label: "Shareholders Agreement", path: "/legal/shareholders-agreement" },
                    { label: "Founders Agreement", path: "/legal/founders-agreement" },
                    { label: "NDA", path: "/legal/nda" },
                    { label: "Employment Agreement", path: "/legal/employment-agreement" }
                ]
            },
            {
                category: "Notices & Disputes",
                items: [
                    { label: "Legal Notice", path: "/legal/legal-notice" },
                    { label: "Cheque Bounce Notice", path: "/legal/cheque-bounce" },
                    { label: "Consumer Complaint", path: "/legal/consumer-complaint" },
                    { label: "IPR Infringement", path: "/legal/ipr-infringement" }
                ]
            }
        ]
    },
    {
        title: "Global",
        path: "/global",
        submenu: [
            {
                category: "Company Formation",
                items: [
                    { label: "USA Company", path: "/global/usa-company" },
                    { label: "UK Company", path: "/global/uk-company" },
                    { label: "Singapore Company", path: "/global/singapore-company" },
                    { label: "UAE Company", path: "/global/uae-company" },
                    { label: "UAE eCommerce", path: "/global/uae-ecommerce" }
                ]
            },
            {
                category: "Global Tax Advisory",
                items: [
                    { label: "Cross Border Taxation", path: "/global/cross-border-tax" },
                    { label: "Customs & Int. Trade", path: "/global/customs-trade" },
                    { label: "Global Expatriate Services", path: "/global/expatriate-services" },
                    { label: "Global Tax Services", path: "/global/global-tax" },
                    { label: "Transfer Pricing", path: "/global/transfer-pricing" },
                    { label: "Transaction Tax", path: "/global/transaction-tax" },
                    { label: "Representation Services", path: "/global/representation" }
                ]
            },
            {
                category: "Americas & Europe Tax",
                items: [
                    { label: "USA Federal Tax", path: "/global/usa-federal-tax" },
                    { label: "UK VAT", path: "/global/uk-vat" },
                    { label: "EU VAT", path: "/global/eu-vat" },
                    { label: "Ireland Corporate Tax", path: "/global/ireland-corporate-tax" },
                    { label: "Ireland VAT & Customs", path: "/global/ireland-vat" },
                    { label: "Cyprus VAT", path: "/global/cyprus-vat" },
                    { label: "Cyprus Capital Gain", path: "/global/cyprus-cgt" }
                ]
            },
            {
                category: "Middle East & APAC Tax",
                items: [
                    { label: "UAE VAT", path: "/global/uae-vat" },
                    { label: "UAE Corporate Tax", path: "/global/uae-corporate-tax" },
                    { label: "Singapore GST", path: "/global/singapore-gst" },
                    { label: "Singapore Corp Tax", path: "/global/singapore-corporate-tax" },
                    { label: "Australia GST", path: "/global/australia-gst" },
                    { label: "China Enterprise Tax", path: "/global/china-enterprise-tax" },
                    { label: "Hong Kong Corp Tax", path: "/global/hong-kong-tax" }
                ]
            },
            {
                category: "Detailed Country Tax",
                items: [
                    { label: "Australia Income Tax", path: "/global/australia-income-tax" },
                    { label: "Australia FBT", path: "/global/australia-fbt" },
                    { label: "China Individual Tax", path: "/global/china-individual-tax" },
                    { label: "Hong Kong Individual", path: "/global/hong-kong-individual" },
                    { label: "Ireland Income Tax", path: "/global/ireland-income-tax" },
                    { label: "Ireland Capital Gains", path: "/global/ireland-cgt" },
                    { label: "Ireland Cap. Acquisition", path: "/global/ireland-cat" }
                ]
            },
            {
                category: "Free Zones & Others",
                items: [
                    { label: "Ajman Free Zone", path: "/global/ajman" },
                    { label: "UAQ Free Zone", path: "/global/uaq" },
                    { label: "International Trademark", path: "/global/international-trademark" },
                    { label: "USA Trademark", path: "/global/usa-trademark" }
                ]
            }
        ]
    },
    {
        title: "OnDemand",
        path: "/ondemand",
        submenu: [
            {
                category: "Custom Legal Solutions",
                items: [
                    { label: "Custom Contracts Drafting", path: "/ondemand/custom-contracts" },
                    { label: "Litigation Support", path: "/ondemand/litigation-support" },
                    { label: "Corporate Restructuring", path: "/ondemand/corporate-restructuring" }
                ]
            },
            {
                category: "High-End Advisory",
                items: [
                    { label: "Business Valuation", path: "/ondemand/business-valuation" },
                    { label: "Due Diligence Report", path: "/ondemand/due-diligence" },
                    { label: "Mergers & Acquisitions", path: "/ondemand/mergers-acquisitions" },
                    { label: "Investment Pitch Deck", path: "/ondemand/pitch-deck" }
                ]
            },
            {
                category: "Regulatory & Approvals",
                items: [
                    { label: "RBI/FEMA Advisory", path: "/ondemand/rbi-fema" },
                    { label: "SEBI Advisory", path: "/ondemand/sebi-advisory" },
                    { label: "NCLT Matters", path: "/ondemand/nclt-matters" }
                ]
            }
        ]
    }
];
