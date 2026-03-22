import { Helmet } from 'react-helmet-async';

interface SEOProps {
    title?: string;
    description?: string;
    keywords?: string;
    canonical?: string;
    ogImage?: string;
}



import { useTranslation } from 'react-i18next';

export default function SEO({
    title,
    description,
    keywords,
    canonical,
    ogImage
}: SEOProps) {
    const { t, i18n } = useTranslation();
    const isRTL = i18n.language === 'ar';

    const defaultTitle = t('meta.default.title');
    const defaultDescription = t('meta.default.description');
    const defaultKeywords = t('meta.default.keywords');
    const siteUrl = 'https://sustivance.com';
    const defaultOgImage = 'https://sustivance.com/og-image.jpg';

    const pageTitle = title
        ? `${title} | ${t('brand.name')}`
        : defaultTitle;
    const pageDescription = description || defaultDescription;
    const pageKeywords = keywords || defaultKeywords;
    const pageOgImage = ogImage || defaultOgImage;
    const pageUrl = canonical ? `${siteUrl}${canonical}` : siteUrl;

    return (
        <Helmet
            htmlAttributes={{
                lang: i18n.language,
                dir: isRTL ? 'rtl' : 'ltr'
            }}
        >
            <title>{pageTitle}</title>
            <meta name="description" content={pageDescription} />
            <meta name="keywords" content={pageKeywords} />
            <link rel="canonical" href={pageUrl} />

            {/* Open Graph */}
            <meta property="og:title" content={pageTitle} />
            <meta property="og:description" content={pageDescription} />
            <meta property="og:url" content={pageUrl} />
            <meta property="og:image" content={pageOgImage} />
            <meta property="og:locale" content={i18n.language === 'ar' ? 'ar_SA' : 'en_US'} />

            {/* Twitter */}
            <meta name="twitter:title" content={pageTitle} />
            <meta name="twitter:description" content={pageDescription} />
            <meta name="twitter:image" content={pageOgImage} />
        </Helmet>
    );
}
