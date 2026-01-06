import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({ title, description, keywords, url, image, type = 'website' }) => {
    const siteTitle = "Tax Nyay";
    const defaultDescription = "India's Most trusted platform for Income Tax Filing, GST Registration, Company Incorporation, and Legal Compliance Services. Fast, Affordable & Expert Assisted.";
    const defaultKeywords = "Tax Nyay, ITR Filing, GST Registration, Company Registration, Startup India, Trademark Registration, Legal Services India";
    const siteUrl = "https://taxnyay.com";
    const defaultImage = `${siteUrl}/IMG_20260106_182955.jpg`; // Using the logo/image found in public

    const finalTitle = title ? `${title} | ${siteTitle}` : `${siteTitle} - Business Registration & Compliance`;
    const finalDescription = description || defaultDescription;
    const finalUrl = url ? `${siteUrl}${url}` : siteUrl;
    const finalImage = image ? (image.startsWith('http') ? image : `${siteUrl}${image}`) : defaultImage;

    return (
        <Helmet>
            {/* Standard Metadata */}
            <title>{finalTitle}</title>
            <meta name="description" content={finalDescription} />
            <meta name="keywords" content={keywords || defaultKeywords} />
            <link rel="canonical" href={finalUrl} />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content={type} />
            <meta property="og:title" content={finalTitle} />
            <meta property="og:description" content={finalDescription} />
            <meta property="og:url" content={finalUrl} />
            <meta property="og:image" content={finalImage} />
            <meta property="og:site_name" content={siteTitle} />

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:creator" content="@taxnyay" />
            <meta name="twitter:title" content={finalTitle} />
            <meta name="twitter:description" content={finalDescription} />
            <meta name="twitter:image" content={finalImage} />
        </Helmet>
    );
};

export default SEO;
