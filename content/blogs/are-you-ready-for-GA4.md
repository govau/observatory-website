---
path: /blogs/are-you-ready-for-GA4
title: Are you ready for Google Analytics 4?
type: blog
description:
  In October 2020, Google released the latest version of its Analytics platform,
  Google Analytics 4 (GA4). To help our subscribers adapt to this new platform,
  we looked under GA4’s hood to find out what has changed.
metaDesc:
  In October 2020, Google released the latest version of its Analytics platform,
  Google Analytics 4 (GA4). To help our subscribers adapt to this new platform,
  we looked under GA4’s hood to find out what has changed.
date: "2021-04-21"
author: The Observatory Team
imgUrl: ../../service-analytics.png
canonical: https://www.dta.gov.au/blogs/are-you-ready-google-analytics-4
---

<br />

<figure>
<img class="au-responsive-media img-shadow" src="../../service-analytics.png" alt="The Observatory Team is now offering Service Analytics through GA 4"/>
</figure>

Key to the new version is the change in our online behaviour. Mobile phones are
now the main way that we connect online. New ways of going online require new
ways of measuring our online engagement. Established metrics, such as ‘pageview’
or a ‘user session’, might show a website’s use, but it may not accurately
measure all the different ways we can access that service.

## How is it different from Google Analytics 3?

GA4 is built on Google’s App + Web property, which automatically brings together
data from your connected mobile apps, web apps and websites. It also shifts how
it measures user engagement from ‘hits & sessions’ to ‘events’.

In Google Analytics 360 (GA360), hits on pages, or from ecommerce activities and
social media referrals were grouped into a ‘session’. These sessions became a
simple way of describing the popularity of a website. However, if you wanted to
know how your users engaged with specific links or artefacts, you needed to
manually configure events. If these artefacts are available on multiple
services, GA3 could not automatically connect the analytics for your website
with the analytics for your app.

The ‘event’ based model in GA4 provides a flexible way to consistently track
user engagement across your service portfolio. For example, with GA4 you can see
how many people view a video on your website and its corresponding mobile app.

At the heart of this new analytics environment is a revised data layout. GA4’s
data layout has significantly less variables than GA360. Some removed variables,
such as ‘hits.LatencyTracking’ and ‘Hits.Publisher’, were very frequently null
or empty fields. Other fields have been
'[nested](https://firebase.google.com/docs/firestore/manage-data/structure-data)'.
GA4 will only populate these nested data fields when a user has interacted with
the service in a way that creates a data point. To help analysts understand the
new layout and analyse the raw data, the Observatory has a script in our
[Github repository](https://github.com/govau/GAlileo/blob/master/scripts/bqscript_ga4_schema_parse.sql).

More technical support can be found on the
[Google support page](https://support.google.com/analytics/answer/3437719?hl=en).

## Privacy updates

The Australian community is becoming increasingly concerned about the data
created about them. GA4 gives website owners tools to control how they collect
data about their users and where they store it. For example, GA4 now mandates
[IP anonymisation](https://support.google.com/analytics/answer/2763052?hl=en),
which makes it harder to locate a website’s users. It has also removed permanent
data storage, now setting a maximum of 50 months of Google Analytics servers.
After this period the data is permanently deleted from the Google Analytics
servers. If there is a need to store that data for longer, it can be imported
into a datastore such as Big Query. Using Google Tag Manager, product owners can
easily manage what data is collected and whether that data is stored on Google
Analytics’ servers or elsewhere.

With all these changes, you cannot just lift and shift your current analytics
configuration to GA4. GA360’s custom dimensions and metrics have been replaced
with event parameters. Additionally, built in features from GA360, such as
'hits.page.pagePath', have been removed or have had their names changed. This
may require manual re-mapping to their new names. Some custom events that you
previously used, such as ‘scroll depth’, may now be available as a default
setting.

## How can I get started?

To assist users transition to their new version, Google has developed
preconfigured events that are easy to use. However, these events tend to focus
on ecommerce needs, which may not be useful for government users. To help our
subscribers understand the new version and ease the transition, the Observatory
has developed a pilot Google Tag Manager Base Container. This container is
preconfigured with events that focus on a government user’s need. It also
generates analytics data in both GA360 and GA4 format, helping you understand
how your reporting may change.

<section class="au-callout max-42">
<p>If you want to find out more or get help on implementing the new analytics, contact us at <a href="mailto:observatory@dta.gov.au">observatory@dta.gov.au</a>.</p>
</section>
