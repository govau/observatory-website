/* eslint-disable @typescript-eslint/no-non-null-assertion */
import React from "react";
import SEO from "../components/seo";
import DefaultLayout from "../components/layouts/default-layout";
import { useStaticQuery, graphql } from "gatsby";
import Section from "../components/layouts/section";
import Hero from "../components/layouts/hero";
import { PageContext } from "../components/helpers/types";
import SubscribeNewsletterForm from "../components/forms/newsletter/subscribe-newsletter";

const IndexPage: React.FC<PageContext> = ({ pageContext, location }) => {
  //get MD content
  const { allMarkdownRemark } = useStaticQuery(
    graphql`
      query MyQuery {
        allMarkdownRemark(
          filter: { fileAbsolutePath: { regex: "/.*/content/index/*.*.md/" } }
        ) {
          nodes {
            html
            frontmatter {
              id
              alt
              imgUrl
              imgAlt
              swapOrder
            }
          }
        }
      }
    `
  );

  const tech = allMarkdownRemark.nodes.find(
    (page: any) => page.frontmatter.id === "tech"
  );

  const insights = allMarkdownRemark.nodes.find(
    (page: any) => page.frontmatter.id === "insights"
  );

  const hero = allMarkdownRemark.nodes.find(
    (page: any) => page.frontmatter.id === "hero"
  );

  return (
    <DefaultLayout pageContext={pageContext} location={location}>
      <>
        <SEO title="Home" />
        <Hero imgAlt={hero.frontmatter.imgAlt} imgUrl={hero.frontmatter.imgUrl}>
          <div dangerouslySetInnerHTML={{ __html: hero.html! }} />
        </Hero>
        <Section className="yellow-pink-lg">
          <div dangerouslySetInnerHTML={{ __html: tech.html }} />
        </Section>
        <Hero
          imgAlt={insights.frontmatter.imgAlt}
          imgUrl={insights.frontmatter.imgUrl}
          swapOrder={insights.frontmatter.swapOrder}
        >
          <div dangerouslySetInnerHTML={{ __html: insights.html! }} />
        </Hero>
        <Section alt={true}>
          <>
            <div className="row">
              <div className="col-md-6">
                <h3>Monthly newsletter</h3>
                <p>
                  We interview smart people, organise great events, preview new
                  tools, and deliver it all straight into your inbox!
                </p>
              </div>
              <div className="col-md-6">
                <SubscribeNewsletterForm dark={true} />
              </div>
            </div>
          </>
        </Section>
      </>
    </DefaultLayout>
  );
};

export default IndexPage;
