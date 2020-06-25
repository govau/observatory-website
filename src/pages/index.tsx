/* eslint-disable @typescript-eslint/no-non-null-assertion */
import React from "react";
import SEO from "../components/seo";
import DefaultLayout from "../components/layouts/default-layout";
import { useStaticQuery, graphql } from "gatsby";
import Section from "../components/layouts/section";
import Hero from "../components/layouts/hero";
import { PageContext } from "../components/helpers/types";
import WhatWeDoBlock from "../components/blocks/what-we-do";
import SubscribeBlock from "../components/blocks/subscribe-newsletter-block";

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
          <>
            <h2>What we do</h2>
            <div className="row mt-1">
              <div className="col-md-6">
                <WhatWeDoBlock
                  heading="We create products"
                  body="For agencies and their analysts, content teams, researchers and leaders in all steps of their journeys"
                  ctaText="See products"
                  ctaLink="/get-started"
                />
              </div>
              <div className="col-md-6">
                <WhatWeDoBlock
                  heading="We make Tools"
                  body="Enhance your data practice and impact with these useful tools."
                  ctaText="Browse tools"
                  ctaLink="/tools"
                />
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <WhatWeDoBlock
                  heading="We foster Community"
                  body="Connect and learn with other data practitioners at social events and training opportunities."
                  ctaText="Get involved"
                  ctaLink="/events"
                />
              </div>
              <div className="col-md-6">
                <WhatWeDoBlock
                  heading="We conduct Research"
                  body="Get access to resources and insights from our own primary investigations in the field."
                  ctaText="Learn more"
                  ctaLink="/research"
                />
              </div>
            </div>
          </>
        </Section>
        <Hero
          imgAlt={insights.frontmatter.imgAlt}
          imgUrl={insights.frontmatter.imgUrl}
          swapOrder={insights.frontmatter.swapOrder}
        >
          <div dangerouslySetInnerHTML={{ __html: insights.html! }} />
        </Hero>
        <Section className="yellow-pink-lg">
          <div dangerouslySetInnerHTML={{ __html: tech.html }} />
        </Section>
        <Section>
          <>
            <SubscribeBlock
              heading="Monthly newsletter"
              body="We interview smart people, organise great events, preview new
            tools, and deliver it all straight into your inbox!"
            />
          </>
        </Section>
      </>
    </DefaultLayout>
  );
};

export default IndexPage;
