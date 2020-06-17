import React from "react";

import SEO from "../components/seo";
import DefaultLayout from "../components/layouts/default-layout";
import { PageContext } from "../components/helpers/types";

const NotFoundPage: React.FC<PageContext> = ({ pageContext, location }) => {
  return (
    <DefaultLayout location={location}>
      <div className="au-body container-fluid">
        <SEO title="404: Not found" />
        <h1>NOT FOUND</h1>
        <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      </div>
    </DefaultLayout>
  );
};

export default NotFoundPage;
