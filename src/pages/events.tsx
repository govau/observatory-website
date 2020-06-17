/* eslint-disable @typescript-eslint/no-non-null-assertion */
import React from "react";
import SEO from "../components/seo";
import DefaultLayout from "../components/layouts/default-layout";
import { useStaticQuery, graphql } from "gatsby";

import { PageContext } from "../components/helpers/types";
import { SortContent, FormatDate } from "../components/helpers/helper";
import PageAlert from "../components/blocks/page-alert";
import SubscribeNewsletterForm from "../components/forms/newsletter/subscribe-newsletter";

const BlogsPage: React.FC<PageContext> = ({ pageContext, location }) => {
  //get MD content
  const { allMarkdownRemark } = useStaticQuery(
    graphql`
      query Events {
        allMarkdownRemark(filter: { frontmatter: { type: { eq: "event" } } }) {
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

  const EventList = allMarkdownRemark.nodes;
  const SortedEvents: Array<any> = EventList.sort(SortContent);

  return (
    <DefaultLayout pageContext={pageContext} location={location}>
      <div className="container-fluid au-body">
        <SEO title="Events" />
        <h1>Events</h1>
        {SortedEvents.length > 0 ? (
          SortedEvents.map((event: any, i: number) => {
            const {
              imgUrl,
              path,
              title,
              description,
              date,
            } = event.frontmatter;

            return (
              <div className="au-body event" key={i}>
                <h3>
                  <a href={path}>{title}</a>
                </h3>
                <p>{description}</p>
                <p>{FormatDate(date)}</p>
              </div>
            );
          })
        ) : (
          <PageAlert type="info">
            <>
              <h3>No upcoming events</h3>
              <p>
                Due to COVID-19 we are rethinking how we can deliver training.
                Please sign up to our mailing list to be notified of when
                training recommences.
              </p>
            </>
          </PageAlert>
        )}
        <p>
          To be notified about upcoming training, subscribe to our newsletter{" "}
        </p>
        <SubscribeNewsletterForm />
      </div>
    </DefaultLayout>
  );
};

export default BlogsPage;
