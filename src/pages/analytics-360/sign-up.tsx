import React from "react";
import SEO from "../../components/seo";
import DefaultLayout from "../../components/layouts/default-layout";
import { PageContext } from "../../components/helpers/types";
import GAform from "../../components/forms/ga-signup/ga360";
import { AuHintText } from "../../components/helpers/auds";

const IndexPage: React.FC<PageContext> = ({ pageContext, location }) => {
  //get MD content
  const terms = `By completing this form, your agency agrees to 
  subscribe to the Digital Transformation Agencies (DTA) whole of government contract 
  for Google Analytics 360. Please ensure that you have read our <a href="/analytics-360/terms-of-service">Terms of Service</a>
  `;

  return (
    <DefaultLayout pageContext={pageContext} location={location}>
      <div className="container-fluid au-body">
        <SEO
          title="Sign up | observatory"
          description="Get Google Analytics 360 now. Subscribe to the Digital Transformation Agencies whole of government contract."
        />
        <h1>DTA Terms of Service - Google Analytics 360</h1>
        <AuHintText dangerouslySetInnerHTML={{ __html: terms }}></AuHintText>

        <GAform></GAform>
      </div>
    </DefaultLayout>
  );
};

export default IndexPage;
