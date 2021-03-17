# CDS Website CMS

CMS for content hosted on the [CDS website](https://digital.canada.ca). Powered by [strapi](https://strapi.io/).

## Running locally

1. Clone the repo
2. Run `npm install`
3. Run `npm run develop` or `npm run start`. Note: `npm run start` does not allow for collection schema changes.
4. If necessary, set up a Postgres DB based on the default info in config > database.js

Note: Local databases will not be synced with the production one, so feel free to make test data entries.
