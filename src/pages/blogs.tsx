/* eslint-disable @typescript-eslint/no-non-null-assertion */
import React from "react";
import SEO from "../components/seo";
import DefaultLayout from "../components/layouts/default-layout";
import { useStaticQuery, graphql } from "gatsby";
import AUcard, {
  AUcardInner,
  AUcardTitle,
  AUcardLink,
  AUcardFooter,
} from "../auds/react/card";
import { PageContext } from "../components/helpers/types";
import { FormatDate, SortBlog } from "../components/helpers/helper";

const AuCard: any = AUcard;
const AuCardInner: any = AUcardInner;
const AuCardTitle: any = AUcardTitle;
const AuCardLink: any = AUcardLink;
const AuCardFooter: any = AUcardFooter;

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

  const SortedBlogs: Array<any> = BlogList.sort(SortBlog);

  return (
    <DefaultLayout pageContext={pageContext} location={location}>
      <div className="container-fluid au-body">
        <SEO title="Blogs" />
        <h1>Blogs</h1>

        <div className="row">
          <ul className="au-card-list au-card-list--matchheight">
            {SortedBlogs.map((blog: any, i: number) => {
              return (
                <li className="col-md-4 col-sm-6 col-xs-12" key={i}>
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
                      <p>{blog.frontmatter.description.substring(0, 150)}...</p>
                      <div className="card-footer">
                        <p className="card-footer__text">
                          {FormatDate(blog.frontmatter.date)}
                        </p>
                      </div>
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
