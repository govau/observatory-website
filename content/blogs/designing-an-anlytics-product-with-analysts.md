---
path: /blogs/designing-an-anlytics-product-with-analysts
title: Designing an analytics product with analysts at the heart of it
type: blog
description:
  The gov.au Observatory team have researched and designed a custom web
  analytics tool. Informed by Discovery stage research, the tool has evolved
  through a series of user interviews and prototype testing.
metaDesc:
  The gov.au Observatory team have researched and designed a custom web
  analytics tool. Informed by Discovery stage research, the tool has evolved
  through a series of user interviews and prototype testing.
date: "2020-10-21"
author: The Observatory Team
imgUrl: ../../designing-an-analytics-product-with-analysts.png
canonical: https://www.dta.gov.au/blogs/designing-analytics-product-analysts-heart-it
---

<figure>
<img class="au-responsive-media img-shadow" src="../../designing-an-analytics-product-with-analysts.png"/>
</figure>

## How insights shaped the concept direction

From our Discovery research and
[co-design sessions with analysts](https://observatory.service.gov.au/blogs/generating-data-and-ideas-analysts)
the following priorities emerged:

- providing access to simplified analytics
- helping non-analysts understand what questions to ask about websites
- reducing the time analysts spent answering simple questions
- enabling people without analytics capabilities to gain insights into user
  interaction.

One of the most challenging priorities for analysts are the demands that agency
staff have for fast data reporting of ‘surface metrics’ such as pageviews and
number of users. Although this information is readily available if you know
where and how to look, agency staff are not always given opportunities to
incorporate Google Analytics into their toolkits.

As a result, a large amount of analysts’ time is spent responding to requests of
this kind. This prevents them from finding deeper insights about user behaviour,
which could add unique value to their organisations.

## The concept

As administrators of the whole-of-government Google Analytics 360 subscription,
the gov.au Observatory has established a data asset that can generate unique
insights into how people use government services. We developed a hypothesis to
test: would a self-service tool for agency staff help free up analysts to do
deeper analyses, and deliver greater value to their teams?

## The first iteration

Our tool is designed to save analysts time by making it easy for their
stakeholders to self-serve and find basic web analytics data. The first
iteration of the concept was like a simplified version of Google Analytics, but
with features designed for use in government – Google Analytics is primarily for
e-commerce websites, so many components are unnecessary for government users.

The initial design for our tool recreated the essential functions of Google
Analytics, but with a set of metrics likely to be used in government.

## Insights from usability testing

After speaking to people who did not interact with analytics regularly, we
discovered Google Analytics terminology is often difficult to understand, and
non-analysts were not engaging with it. By creating an interface which was more
minimalistic and government-oriented, we hadn’t addressed the comprehension
issues that are a barrier for beginner users.

We also learned that actionable interpretations of analytics are highly
contextual. Identical data could mean that one webpage is successful and another
unsuccessful depending on the purpose of the page.

For example, a high bounce rate is the number of users who enter a site and exit
without any further interaction. This might seem like a bad thing but it also
might show that users are able to get what they need from the page without
further navigation. A single benchmarking number cannot convey this distinction,
and the risk is that data will be misinterpreted and decisions may be made based
on this.

## Asking questions with data

A common issue for agencies is the communication barriers between analysts and
the stakeholders who require their services. Stakeholders don’t always have
knowledge about how web analytics can be used. Without advanced analytics
knowledge it is hard to know what questions can be asked and answered with
analytics. To create a tool which will allow agency staff to self-serve their
analytics needs, it would need to facilitate the asking of better data
questions.

When data practitioners used analytics to understand user behaviours and improve
a website, the questions they asked to guide the data stretched across different
nested levels, which are:

- objectives – these are the broad guiding principles which the website is
  designed to achieve.
- abstract questions – questions that can give insight into whether the website
  is achieving its objectives.
- specific questions – sub-questions about specific features of a website or
  user activities which are necessary components to answer abstract questions.
- individual metrics – the micro-level data which can give insight into specific
  questions.

Analysts were using individual metrics, such as pageviews and time on page, to
answer more abstract questions, and this allowed them to measure whether their
website was achieving business objectives.

By asking for specific metrics, or asking specific questions, agency staff were
in fact limiting the potential of analysts to help solve larger strategic
objectives. We incorporated this insight into a question framework for the
prototype by changing the way users make queries, from the individual metric
level ‘How many page views does my page have?’ to abstract, action-oriented
questions ‘Are users able to achieve what they came to the website for?’.

The design, reminiscent of a Frequently Asked Questions format, answers
strategic questions important for service improvement by breaking them down into
smaller questions, and those questions down to metrics. By starting the query at
a higher level of abstraction, resulting answers provide richer insight into
strategic objectives, and allow the tool’s users to make more impactful change.

## What’s next?

The current iteration of the prototype is scheduled for a private Beta release
in November 2020. We will conduct thorough testing with a smaller user group, in
preparation for release to a wider APS audience. To know more, email
[observatory@dta.gov.au](mailto:observatory@dta.gov.au)
