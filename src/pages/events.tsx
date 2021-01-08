/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import PageAlert from "../components/blocks/page-alert";
import SubscribeBlock from "../components/blocks/subscribe-newsletter-block";
import {
  FormatDateDay,
  SortContentReverse,
} from "../components/helpers/helper";
import { PageContext } from "../components/helpers/types";
import DefaultLayout from "../components/layouts/default-layout";
import Section from "../components/layouts/section";
import SEO from "../components/seo";

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
              tags
              path
              description
              date
              time
              imgUrl
            }
          }
        }
      }
    `
  );

  const EventList = allMarkdownRemark.nodes;
  const SortedEvents: Array<any> = EventList.sort(SortContentReverse);

  return (
    <DefaultLayout pageContext={pageContext} location={location}>
      <>
        <div className="container-fluid au-body">
          <SEO
            title="Events"
            description="Check out the latest service analytics events, training and webinars. Run by the Observatory team"
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
                tags,
                time,
              } = event.frontmatter;

              return (
                <div className="au-body event" key={i}>
                  <h3>
                    <a href={path}>{title}</a>
                  </h3>
                  <p>{description}</p>
                  <p>
                    <strong>When: </strong>
                    {FormatDateDay(date)}: {time}
                  </p>
                  <strong>Tags: </strong>
                  {
                    // <AuTagList
                    //   className="inline ml-1"
                    //   tags={tags.map((tag: string) => ({
                    //     text: tag,
                    //   }))}
                    // />
                    tags.map((tag: string) => (
                      <span>
                        {tag}
                        {tag === tags[tags.length - 1] ? "" : ", "}{" "}
                      </span>
                    ))
                  }
                </div>
              );
            })
          ) : (
            <PageAlert type="info">
              <>
                <h3>No upcoming events</h3>
                <p>
                  Due to COVID-19 we are rethinking how we deliver training.
                  <br />
                  Sign up to our mailing list to be notified when new events are
                  available.
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
      </>
    </DefaultLayout>
  );
};

export default BlogsPage;
