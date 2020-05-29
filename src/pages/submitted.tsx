import React from "react";
import SEO from "../components/seo";
import DefaultLayout from "../components/layouts/default-layout";
import { PageContext } from "../components/helpers/types";
import PageAlert from "../components/blocks/page-alert";

const IndexPage: React.FC<PageContext> = ({ pageContext, location }) => {
  //get MD content

  return (
    <DefaultLayout pageContext={pageContext} location={location}>
      <div className="container-fluid au-body">
        <SEO title="Submitted" />
        <PageAlert type="success" className="max-42">
          <>
            <h3>Form submitted successfully</h3>
            <p>Thank you we have received your details</p>
          </>
        </PageAlert>
      </div>
    </DefaultLayout>
  );
};

export default IndexPage;
