/* eslint-disable @typescript-eslint/no-non-null-assertion */
import React from "react";
import SEO from "../components/seo";
import DefaultLayout from "../components/layouts/default-layout";
import { useStaticQuery, graphql } from "gatsby";

import { PageContext } from "../components/helpers/types";
import { SortContent, FormatDate } from "../components/helpers/helper";
import PageAlert from "../components/blocks/page-alert";
import SubscribeNewsletterForm from "../components/forms/newsletter/subscribe-newsletter";
import SubscribeBlock from "../components/blocks/subscribe-newsletter-block";
import Section from "../components/layouts/section";

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
        <SEO
          title="Events"
          description="Check out the latest whole of government analytics events, training and webinars. Run by the Observatory team"
        />
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
      </div>
      <Section alt={true}>
        <SubscribeBlock
          heading="Interested in events?"
          body="To be notified about upcoming training, subscribe to our mailing list"
          darkTextInput={true}
        />
      </Section>
    </DefaultLayout>
  );
};

export default BlogsPage;
