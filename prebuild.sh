#!/bin/bash

if [ "$CIRCLE_BRANCH" = "master" ]
then
    export GATSBY_API_URL="https://analytics.service.gov.au/api"
else
    export GATSBY_API_URL="https://ursa-major-front-end.apps.y.cld.gov.au/api"
fi