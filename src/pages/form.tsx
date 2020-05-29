import React from "react";
import SEO from "../components/seo";
import DefaultLayout from "../components/layouts/default-layout";
import { PageContext } from "../components/helpers/types";
import GAform from "../components/forms/ga360";

const IndexPage: React.FC<PageContext> = ({ pageContext, location }) => {
  //get MD content

  return (
    <DefaultLayout pageContext={pageContext} location={location}>
      <div className="container-fluid au-body">
        <SEO title="Home" />
        <h1>Form</h1>
        <GAform></GAform>
      </div>
    </DefaultLayout>
  );
};

export default IndexPage;
