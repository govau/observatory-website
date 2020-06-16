/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import Header from "../navigation/header";
import Footer from "../navigation/footer";
import "../../sass/main.scss";
import { useStaticQuery, graphql } from "gatsby";
import MainNav from "../navigation/main-nav";
import SEO from "../seo";
import { Location } from "@reach/router";
import Breadcrumbs from "../navigation/breadcrumb";
import { Breadcrumb } from "gatsby-plugin-breadcrumb";

interface Props {
  children: React.ReactElement;
  pageContext: any;
  location: any;
}

const DefaultLayout: React.FC<Props> = ({
  pageContext,
  location,
  children,
}) => {
  const {
    breadcrumb: { crumbs },
  } = pageContext && pageContext;

  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <>
      {/* <AlphaHeader /> */}
      <SEO title={data.site.siteMetadata.title} />
      <div className="header-wrapper">
        <Header siteTitle={data.site.siteMetadata.title} />
        <Location>
          {({ navigate, location }) => <MainNav path={location.pathname} />}
        </Location>
      </div>
      <main>
        {crumbs && crumbs.length > 2 && (
          <div className="container-fluid">
            <Breadcrumbs crumbs={crumbs} />
          </div>
        )}
        {children}
      </main>
      <Footer />
    </>
  );
};

export default DefaultLayout;
