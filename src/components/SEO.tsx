import { Helmet } from 'react-helmet-async';

interface SEOProps {
    title?: string;
    description?: string;
    keywords?: string;
    canonical?: string;
    ogImage?: string;
}

const defaultMeta = {
    title: 'Sustivance Consulting | Strategy & Policy Advisory in Saudi Arabia',
    description: 'Expert consulting for businesses, governments & institutions in Saudi Arabia. Strategy, policy, sustainability & data analytics aligned with Vision 2030.',
    keywords: 'Saudi Arabia consulting, GCC advisory, Vision 2030 consultant, policy consulting Riyadh, business strategy Saudi, sustainability consulting KSA',
    ogImage: 'https://sustivance.com/og-image.jpg',
    siteUrl: 'https://sustivance.com',
};

export default function SEO({
    title,
    description,
    keywords,
    canonical,
    ogImage
}: SEOProps) {
    const pageTitle = title
        ? `${title} | Sustivance Consulting`
        : defaultMeta.title;
    const pageDescription = description || defaultMeta.description;
    const pageKeywords = keywords || defaultMeta.keywords;
    const pageOgImage = ogImage || defaultMeta.ogImage;
    const pageUrl = canonical ? `${defaultMeta.siteUrl}${canonical}` : defaultMeta.siteUrl;

    return (
        <Helmet>
            <title>{pageTitle}</title>
            <meta name="description" content={pageDescription} />
            <meta name="keywords" content={pageKeywords} />
            <link rel="canonical" href={pageUrl} />

            {/* Open Graph */}
            <meta property="og:title" content={pageTitle} />
            <meta property="og:description" content={pageDescription} />
            <meta property="og:url" content={pageUrl} />
            <meta property="og:image" content={pageOgImage} />

            {/* Twitter */}
            <meta name="twitter:title" content={pageTitle} />
            <meta name="twitter:description" content={pageDescription} />
            <meta name="twitter:image" content={pageOgImage} />
        </Helmet>
    );
}
