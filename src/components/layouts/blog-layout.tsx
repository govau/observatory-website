import React from "react";
import { graphql } from "gatsby";
import DefaultLayout from "./default-layout";
import SEO from "../seo";
import { FormatDate } from "../helpers/helper";
import SubscribeNewsletterForm from "../forms/newsletter/subscribe-newsletter";
import Section from "./section";
import SubscribeBlock from "../blocks/subscribe-newsletter-block";
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

  const returnAttachment = () => {
    if (!frontmatter.attachments) {
      return "";
    }

    return (
      <>
        <dt>Attachments</dt>
        {frontmatter.attachments.map((attachment: any, i: number) => (
          <dd key={i}>
            <a href={attachment.src}>{attachment.attachmentTitle}</a>
          </dd>
        ))}
      </>
    );
  };

  return (
    <DefaultLayout pageContext={pageContext} location={location}>
      <>
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
                  <dt>
                    <strong>Time to read</strong>
                  </dt>
                  <dd>
                    <span>{timeToRead} mins</span>
                  </dd>
                  <dt>Date</dt>
                  <dd>
                    <span>{date}</span>
                  </dd>
                  <dt>Author</dt>
                  <dd>{frontmatter.author}</dd>
                  {returnAttachment()}
                </dl>
              </div>
              <div className="col-md-9 col-md-pull-3 blog-content">
                <h1 className="blog-heading">{frontmatter.title}</h1>
                <p className="intro-text">{frontmatter.description}</p>
                <div dangerouslySetInnerHTML={{ __html: html }}></div>
              </div>
            </div>
          </div>
        </div>
        <Section alt={true}>
          <SubscribeBlock
            heading="Want the latest?"
            body="We regularly share what we are working on and things we learn in our
            journey. Subscribe so you don't miss out our updates!"
            darkTextInput={true}
          />
        </Section>
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
        author
        canonical
        description
        date
        metaDesc
        path
        title
        attachments {
          src
          attachmentTitle
        }
      }
    }
  }
`;

export default BlogLayout;
