import React from "react";
import { graphql } from "gatsby";
import DefaultLayout from "./default-layout";
import SEO from "../seo";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface Props {}

const PageLayout: React.FC<Props> = (props: any) => {
  const { markdownRemark } = props.data; // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark;
  return (
    <DefaultLayout>
      <>
        <SEO title={frontmatter.title} />
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
      frontmatter {
        path
        title
      }
    }
  }
`;

export default PageLayout;
