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
              imgCaption
            }
          }
        }
      }
    `
  );

  const tech = allMarkdownRemark.nodes.find(
    (page: any) => page.frontmatter.id === "tech"
  );

  const hero = allMarkdownRemark.nodes.find(
    (page: any) => page.frontmatter.id === "hero"
  );

  return (
    <DefaultLayout pageContext={pageContext} location={location}>
      <>
        <SEO title="Home" />
        <Hero
          alt={hero.frontmatter.alt}
          imgAlt={hero.frontmatter.imgAlt}
          imgUrl={hero.frontmatter.imgUrl}
          imgCaption={hero.frontmatter.imgCaption}
        >
          <div dangerouslySetInnerHTML={{ __html: hero.html! }} />
        </Hero>
        <div className="container-fluid au-body">
          <Section alt={tech.frontmatter.alt}>
            <div dangerouslySetInnerHTML={{ __html: tech.html }} />
          </Section>
          <SubscribeNewsletterForm />
        </div>
      </>
    </DefaultLayout>
  );
};

export default IndexPage;
