---
path: /blogs/using-raw-data-meet-user-needs-during-covid-19
title: Using raw data to meet user needs during COVID-19
type: blog
description:
  During COVID-19, gov.au Observatory use raw data to help Ministers, senior
  officials and agencies understand the community’s information needs.
metaDesc:
  During COVID-19, gov.au Observatory use raw data to help Ministers, senior
  officials and agencies understand the community’s information needs.
date: "2020-07-14"
author: The Observatory Team
imgUrl: ../../bq-img.png
canonical: https://www.dta.gov.au/blogs/using-raw-data-meet-user-needs-during-covid-19
---

<figure>
<img class="au-responsive-media img-shadow" src="../../bq-img.png" alt="A black screen with green and red computer code"/>
</figure>

## Raw insights during COVID-19

We need to collect and analyse traffic data to make sure websites and other
digital services meet user needs. Standard analytics services are a great way to
explore data, but as portfolios of services grow, and questions become more
complex, these services may not provide all the answers. Using the raw data that
powers these services resolves this problem and provides a rich source of
information.

The
[Digital Service Standard](https://www.dta.gov.au/help-and-advice/digital-service-standard/digital-service-standard-criteria/11-measure-performance)
for example, measures performance to understand how users engage with digital
services. The information gathered from this type of data is crucial to maintain
and improve products and services. Services like Google Analytics provide a
simple way to explore this data, however they generally focus on single services
with pre-set insights. This can make it difficult to understand cross-service
behaviour and find the specific answers needed.

During times of peak traffic and high volume, analytics services can also sample
website traffic data. This makes it difficult to provide up-to-date and accurate
statistics.

Working with raw analytics data removes these constraints. As the Observatory
uses Google Analytics for its services, we have connected our subscribers’
Google Analytics 360-enabled profiles to
[Big Query](https://cloud.google.com/bigquery). This allows us and our
subscribers to bring unsampled, raw data into a data warehouse for storage and
processing.

Big Query integrates with other cloud data infrastructure to provide a flexible
and cost-effective way to manage this resource. Using a cloud-based data
warehouse allows you to focus on data engineering and science, rather than
managing the infrastructure.

<div class="au-callout max-42">
<h2>The difference between traditional and cloud data warehouses</h2>

Traditional data warehouses:

- are optimised for business intelligence reporting
- are restricted to select users
- are optimised for batch data
- processing have complex data extraction, transformation, and loading processes
- require continuous patching

Cloud data warehouses:

- are integrated for artificial intelligence and machine learning
- provide easy sharing of insights
- use real-time insights
- automate data ingestion processes

</div>

These environments allow quick access to accurate information during a crisis.
We use tools such as SQL and scheduling products such as
[Airflow](https://airflow.apache.org/) to automate report production in
[Google Datastudio](https://datastudio.google.com/u/0/). This frees up time to
focus on richer insights, not just page hits and bounce rate. The infrastructure
can also collect data from other services, such as Facebook’s WhatsApp and
Google’s Firebase.

Our coronavirus response services, australia.gov.au, the
[Coronavirus Australia app](https://www.health.gov.au/resources/apps-and-tools/coronavirus-australia-app),
[WhatsApp channel](https://www.health.gov.au/resources/apps-and-tools/australian-government-whatsapp-channel-for-covid-19)
and the
[COVIDSafe](https://www.health.gov.au/resources/apps-and-tools/australian-government-whatsapp-channel-for-covid-19)
contact-tracing app provide simplified access to Commonwealth and state and
territory information and support our contact tracers. A holistic view of these
services make sure they continue to meet the community’s needs so that
Ministers, senior officials and organisations know the community’s concerns.

## Answering key questions

In creating a deeper understanding of the community’s engagement with your
services, you need to go beyond page hits and bounce rates. Key questions many
decision-makers have are ‘What information are people interested in?’ and ‘Did
people read this?’ You can set up specific events and structure your analytics
in tools such as Google Tag Manager so they answer these questions.

The two events we used to answer these questions were URL clicks and scroll
depth. The data these tags create may seem hard to understand, but data
visualisation tools can combine this data to provide the answers we need. We
used [regular expressions](https://en.wikipedia.org/wiki/Regular_expression) to
aggregate URLs into their policy groupings, such as traffic to the
jurisdictions, health, welfare and community messaging, which is easier to
understand.

Raw data makes multi-channel analysis possible by combining the same metric
across different sites or technologies. We used these techniques to understand
how the community uses departmental websites such as the Department of Health,
Services Australia, the Department of Industry, Science, Energy and Resources,
and Home Affairs. We can then compare this information to traffic leaving
Australia.gov.au to confirm we are connecting the community to the information
it is looking for.

To develop a strategic approach to emergency communications you need accurate
and up-to-date insights about how the community is accessing information.

If you want to use some of the scripts we have developed, you can find them at
our [GitHub repository](https://github.com/govau/GAlileo).
