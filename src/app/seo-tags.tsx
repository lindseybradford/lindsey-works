import { Helmet } from 'react-helmet-async';

type SEOTagsProps = {
  title: string;
  description: string;
  ogType: string;
  twitterHandle: string;
  siteName: string;
  firstLastName: string;
  canonicalUrl: string;
  twitterProfile: string;
  linkedInProfile: string;
  jobTitle: string;
  currentEmployer: string;
};

export const SEOTags = (props: SEOTagsProps) => {
  return (
    <Helmet
      script={[
        {
          type: 'application/ld+json',
          innerHTML: `{
            "@context": "https://schema.org/",
            "@type": "Person",
            "name": "${props.firstLastName}",
            "url": "${props.canonicalUrl}",
            "image": "",
            "sameAs": [
                "${props.twitterProfile}",
                "${props.linkedInProfile}"
            ],
            "jobTitle": "${props.jobTitle}",
            "worksFor": {
                "@type": "Organization",
                "name": "${props.currentEmployer}"
            }
          }`,
        },
      ]}
    >
      <title>{props.title}</title>
      <meta name="description" content={props.description} />
      <meta name="robots" content="index,follow" />
      <meta name="theme-color" content="#161616" />

      <meta property="og:url" content={props.canonicalUrl} />
      <meta property="og:type" content={props.ogType} />
      <meta property="og:title" content={props.title} />
      <meta
        property="og:image"
        content="https://lindsey.work/projectionist.webp"
      />
      <meta property="og:description" content={props.description} />
      <meta property="og:site_name" content={props.siteName} />

      <meta name="twitter:creator" content={props.twitterHandle} />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={props.title} />
      <meta name="twitter:description" content={props.description} />
    </Helmet>
  );
};
