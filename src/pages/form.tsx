import React from "react";
import SEO from "../components/seo";
import DefaultLayout from "../components/layouts/default-layout";
import { PageContext } from "../components/helpers/types";
import GAform from "../components/forms/ga360";
import { AuHintText } from "../components/helpers/auds";

const IndexPage: React.FC<PageContext> = ({ pageContext, location }) => {
  //get MD content

  return (
    <DefaultLayout pageContext={pageContext} location={location}>
      <div className="container-fluid au-body">
        <SEO title="Home" />
        <h1>DTA Terms of Service - Google Analytics 360</h1>
        <AuHintText
          text={`This subscription only extends to Public Governance, Performance and
          Accountability (PGPA) Act entities. Completion of this form does not
          guarantee or instantly begin subscription - you will be notified via
          email once your information has been checked and your accounts
          connected.`}
        ></AuHintText>
        <br /> <br></br>
        <GAform></GAform>
      </div>
    </DefaultLayout>
  );
};

export default IndexPage;
