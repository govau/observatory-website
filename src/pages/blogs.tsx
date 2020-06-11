/* eslint-disable @typescript-eslint/no-non-null-assertion */
import React from "react";
import SEO from "../components/seo";
import DefaultLayout from "../components/layouts/default-layout";
import { useStaticQuery, graphql } from "gatsby";

import { PageContext, DtaBlogType } from "../components/helpers/types";
import { FormatDate, SortContent } from "../components/helpers/helper";
import PageAlert from "../components/blocks/page-alert";
import {
  AuCard,
  AuCardInner,
  AuCardTitle,
  AuCardLink,
  AuLinkList,
} from "../components/helpers/auds";
import SubscribeNewsletterForm from "../components/forms/newsletter/subscribe-newsletter";

const BlogsPage: React.FC<PageContext> = ({ pageContext, location }) => {
  //get MD content
  const { allMarkdownRemark, site } = useStaticQuery(
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
        site {
          siteMetadata {
            dtaBlogs {
              text
              link
            }
          }
        }
      }
    `
  );

  const BlogList = allMarkdownRemark.nodes;
  const DtaBlogList: Array<DtaBlogType> = site.siteMetadata.dtaBlogs;

  const SortedBlogs: Array<any> = BlogList.sort(SortContent);

  return (
    <DefaultLayout pageContext={pageContext} location={location}>
      <div className="container-fluid au-body">
        <SEO title="Blogs" />
        <h1>Blogs</h1>

        {SortedBlogs.length > 0 ? (
          <div className="row">
            <ul className="au-card-list au-card-list--matchheight">
              {SortedBlogs.map((blog: any, i: number) => {
                const {
                  imgUrl,
                  path,
                  title,
                  description,
                  date,
                } = blog.frontmatter;

                return (
                  <li className="col-md-4 col-sm-6 col-xs-12" key={i}>
                    <AuCard className="au-body" clickable shadow>
                      <img
                        className="au-responsive-media-img"
                        src={
                          imgUrl
                            ? imgUrl
                            : "https://designsystem.gov.au/assets/img/placeholder/600X260.png"
                        }
                        alt=""
                      />
                      <AuCardInner>
                        <AuCardTitle level="3" className="au-display-md">
                          <AuCardLink link={path} text={title} />
                        </AuCardTitle>
                        <p>{description.substring(0, 150)}</p>
                        <div className="card-footer">
                          <p className="card-footer__text">
                            {FormatDate(date)}
                          </p>
                        </div>
                        <span
                          className="au-card__icon"
                          aria-hidden="true"
                        ></span>
                      </AuCardInner>
                    </AuCard>
                  </li>
                );
              })}
            </ul>
          </div>
        ) : (
          <PageAlert type="info" className="max-42">
            <>
              <h3>No new blogs</h3>
              <p>
                We&apos;re working on it! In the mean time check out our blogs
                on the DTA website below.
              </p>
            </>
          </PageAlert>
        )}
        <h3>Blogs on the DTA website</h3>
        <div className="row">
          <div className="col-md-12">
            <AuLinkList items={DtaBlogList} />
          </div>
        </div>
        <h3>Want the latest?</h3>
        <p>
          We regularly share what we are working on and things we learn in our
          journey. Subscribe so you don&apos;t miss out our updates!
        </p>
        <SubscribeNewsletterForm />
      </div>
    </DefaultLayout>
  );
};

export default BlogsPage;
