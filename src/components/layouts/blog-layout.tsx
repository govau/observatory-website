import React from "react";
import { graphql } from "gatsby";
import DefaultLayout from "./default-layout";
import SEO from "../seo";
import { FormatDate } from "../helpers/helper";
import SubscribeNewsletterForm from "../forms/newsletter/subscribe-newsletter";
// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface Props {
  location: any;
  data: any;
  pageContext: any;
}

const BlogLayout: React.FC<Props> = ({ pageContext, location, data }) => {
  const { markdownRemark } = data; // data.markdownRemark holds your post data
  const { frontmatter, html, timeToRead } = markdownRemark;
  const date = FormatDate(frontmatter.date);

  return (
    <DefaultLayout pageContext={pageContext} location={location}>
      <div className="au-body">
        <SEO title={frontmatter.title} canonical={frontmatter.canonical} />
        <div className="container-fluid">
          <h1 className="blog-heading">{frontmatter.title}</h1>
          <p>
            {date} | {timeToRead} min read time
          </p>
          <p className="intro-text">{frontmatter.description}</p>
        </div>
        <div
          className="container-fluid"
          dangerouslySetInnerHTML={{ __html: html }}
        ></div>
        <div className="container-fluid">
          <br />
          <h3>Want the latest?</h3>
          <p>
            We regularly share what we are working on and things we learn in our
            journey. Subscribe so you don&apos;t miss out our updates!
          </p>
          <SubscribeNewsletterForm />
        </div>
      </div>
    </DefaultLayout>
  );
};

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      timeToRead
      frontmatter {
        path
        title
        description
        date
        author
        canonical
      }
    }
  }
`;

export default BlogLayout;
