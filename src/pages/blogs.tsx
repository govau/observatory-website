/* eslint-disable @typescript-eslint/no-non-null-assertion */
import React from "react";
import SEO from "../components/seo";
import DefaultLayout from "../components/layouts/default-layout";
import { useStaticQuery, graphql } from "gatsby";

import { PageContext } from "../components/helpers/types";
import { FormatDate, SortContent } from "../components/helpers/helper";
import {
  AuCard,
  AuCardInner,
  AuCardTitle,
  AuCardLink,
} from "../components/helpers/auds";

import SubscribeBlock from "../components/blocks/subscribe-newsletter-block";
import Section from "../components/layouts/section";

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

  const SortedBlogs: Array<any> = BlogList.sort(SortContent);

  return (
    <DefaultLayout pageContext={pageContext} location={location}>
      <div className="container-fluid au-body">
        <SEO
          title="Blogs"
          description="We regularly share what we are working on and things we learn in our journey on our blogs page."
        />
        <h1>Blogs</h1>

        {SortedBlogs.length > 0 && (
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

                const descLength: number = description.length;

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
                        <p>
                          {description.substring(0, 150)}
                          {descLength > 150 && <span>...</span>}
                        </p>
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
        )}
      </div>
      <Section alt={true}>
        <SubscribeBlock
          heading="Want the latest?"
          body="We regularly share what we are working on and things we learn in our
            journey. Subscribe so you don't miss out our updates!"
          darkTextInput={true}
        />
      </Section>
    </DefaultLayout>
  );
};

export default BlogsPage;
