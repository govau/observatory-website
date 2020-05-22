/* eslint-disable @typescript-eslint/no-non-null-assertion */
import React from "react";
import SEO from "../components/seo";
import DefaultLayout from "../components/layouts/default-layout";
import { useStaticQuery, graphql } from "gatsby";
import AUcard, {
  AUcardInner,
  AUcardTitle,
  AUcardLink,
} from "../auds/react/card";
import { PageContext } from "../components/helpers/types";

const AuCard: any = AUcard;
const AuCardInner: any = AUcardInner;
const AuCardTitle: any = AUcardTitle;
const AuCardLink: any = AUcardLink;

const BlogsPage: React.FC<PageContext> = ({ pageContext, location }) => {
  //get MD content
  const { allMarkdownRemark } = useStaticQuery(
    graphql`
      query Blogs {
        allMarkdownRemark(filter: { frontmatter: { type: { eq: "blog" } } }) {
          nodes {
            html
            frontmatter {
              title
              path
              description
              date
              imgUrl
            }
          }
        }
      }
    `
  );

  const BlogList = allMarkdownRemark.nodes;

  return (
    <DefaultLayout pageContext={pageContext} location={location}>
      <div className="container-fluid au-body">
        <SEO title="Blogs" />
        <h1>Blogs</h1>

        <div className="row">
          <ul className="au-card-list au-card-list--matchheight">
            {BlogList.map((blog: any, i: number) => {
              return (
                <li className="col-sm-4 col-xs-6" key={i}>
                  <AuCard className="au-body" clickable shadow>
                    <img
                      className="au-responsive-media-img"
                      src={
                        blog.frontmatter.imgUrl
                          ? blog.frontmatter.imgUrl
                          : "https://designsystem.gov.au/assets/img/placeholder/600X260.png"
                      }
                      alt=""
                    />
                    <AuCardInner>
                      <AuCardTitle level="3" className="au-display-md">
                        <AuCardLink
                          link={blog.frontmatter.path}
                          text={blog.frontmatter.title}
                        />
                      </AuCardTitle>
                      <p>{blog.frontmatter.description}</p>
                      <p>{blog.frontmatter.date}</p>
                      <span className="au-card__icon" aria-hidden="true"></span>
                    </AuCardInner>
                  </AuCard>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default BlogsPage;
