import React from "react";
import { graphql } from "gatsby";
import DefaultLayout from "./default-layout";
import SEO from "../seo";
import { FormatDateDay } from "../helpers/helper";
// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface Props {
  location: any;
  data: any;
  pageContext: any;
}

const EventLayout: React.FC<Props> = ({ pageContext, location, data }) => {
  const { markdownRemark } = data; // data.markdownRemark holds your post data
  const { frontmatter, html, timeToRead } = markdownRemark;
  const { time, locations, date } = frontmatter;

  return (
    <DefaultLayout pageContext={pageContext} location={location}>
      <>
        <SEO title={frontmatter.title} description={frontmatter.metaDesc} />
        <div className="au-body">
          <SEO
            title={frontmatter.title}
            canonical={frontmatter.canonical}
            description={frontmatter.metaDesc}
          />
          <div className="container-fluid" id="blog-content">
            <div className="row">
              <div className="col-md-3 col-md-push-9 blog-metadata">
                <dl>
                  <dt>Date</dt>
                  <dd>
                    <span>{FormatDateDay(date)}</span>
                  </dd>
                  <dt>Time</dt>
                  <dd>{time}</dd>
                  <dt>Location</dt>
                  <dd>{locations}</dd>
                </dl>
              </div>
              <div className="col-md-9 col-md-pull-3 blog-content">
                <h1 className="blog-heading">{frontmatter.title}</h1>
                <div dangerouslySetInnerHTML={{ __html: html }}></div>
              </div>
            </div>
          </div>
        </div>
      </>
    </DefaultLayout>
  );
};

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        author
        date
        time
        locations
        description
        metaDesc
        path
        title
      }
    }
  }
`;

export default EventLayout;
