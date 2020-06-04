import React from "react";
import SEO from "../components/seo";
import DefaultLayout from "../components/layouts/default-layout";
import { PageContext } from "../components/helpers/types";
import PageAlert from "../components/blocks/page-alert";
import { Redirect } from "@reach/router";

const IndexPage: React.FC<PageContext> = ({ pageContext, location }) => {
  //get MD content

  const renderPage = () => {
    // if (location.state === null) return <Redirect to="sign-up" />;

    // if (!email) {
    //   return <Redirect to="sign-up" noThrow />;
    // }

    const email =
      location.state && location.state.email ? location.state.email : "false";

    return (
      <DefaultLayout pageContext={pageContext} location={location}>
        <div className="container-fluid au-body">
          <SEO title="Submitted" />
          <PageAlert type="success" className="max-42">
            <>
              <h3>Sign up submitted</h3>
              <p>
                An email has been sent to {email} with further instructions.
              </p>
            </>
          </PageAlert>
        </div>
      </DefaultLayout>
    );
  };

  return renderPage();
};

export default IndexPage;
