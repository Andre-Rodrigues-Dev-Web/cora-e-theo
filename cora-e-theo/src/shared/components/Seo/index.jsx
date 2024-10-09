import React from "react";
import {Helmet} from "react-helmet";
// import { useStaticQuery, graphql } from "gatsby";

const Seo = ({ titleSite, descriptionSite, imageSite, urlSite }) => {
  return (
    <Helmet>
      <meta charSet="utf-8" />
      <title>{titleSite}</title>
      <meta name="description" content={descriptionSite} />
      <meta name="image" content={imageSite} />
      {urlSite && <meta property="og:url" content={urlSite} />}
      <meta property="og:title" content={titleSite} />
      <meta property="og:description" content={descriptionSite} />
      <meta property="og:image" content={imageSite} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={titleSite} />
      <meta name="twitter:description" content={descriptionSite} />
      <meta name="twitter:image" content={imageSite} />
    </Helmet>
  );
};


export default Seo;
