import React from "react";
import { graphql } from "gatsby";
import DefaultLayout from "./default-layout";
import SEO from "../seo";
import Breadcrumbs from "../navigation/breadcrumb";
import { FormatDate } from "../helpers/helper";
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
      <>
        <SEO title={frontmatter.title} />
        <div className="container-fluid au-body">
          <h1 className="blog-heading">{frontmatter.title}</h1>
          <p>
            {date} - {timeToRead} mins read
          </p>
          <p className="intro-text">{frontmatter.description}</p>
        </div>
        <div
          className="container-fluid au-body"
          dangerouslySetInnerHTML={{ __html: html }}
        ></div>
      </>
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
      }
    }
  }
`;

export default BlogLayout;
