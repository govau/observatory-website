import React from "react";
import { AuLinkList } from "../components/helpers/auds";
import { PageContext } from "../components/helpers/types";
import DefaultLayout from "../components/layouts/default-layout";
import SEO from "../components/seo";

const NotFoundPage: React.FC<PageContext> = ({ pageContext, location }) => {
  return (
    <DefaultLayout location={location}>
      <div className="au-body container-fluid">
        <SEO title="404: Not found" />
        <h1>NOT FOUND</h1>
        <p>You just hit a route that doesn&#39;t exist... the sadness.</p>

        <h2 className="mt-2">From here, you can: </h2>
        <AuLinkList
          items={[
            {
              link: "/",
              text: "Go to the home page",
            },
            {
              link: "/blogs",
              text: "Check out our latest blogs",
            },
            {
              link: "/events",
              text: "See upcoming events",
            },
            {
              link: "/research",
              text: "Read our publications",
            },
          ]}
        />
      </div>
    </DefaultLayout>
  );
};

export default NotFoundPage;
