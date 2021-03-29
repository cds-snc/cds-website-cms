# CDS Website CMS

CMS for content hosted on the [CDS website](https://digital.canada.ca). Powered by [strapi](https://strapi.io/).

## Running locally

1. Clone the repo
2. Run `npm install`
3. Run `npm run develop` or `npm run start`. Note: `npm run start` does not allow for collection schema changes.
4. If necessary, set up a Postgres DB based on the default info in config > database.js

Note: Local databases will not be synced with the production one, so feel free to make test data entries.

---------------------------------------------------------------------

# SGC (CMS) pour le site Web du SNC

Système de gestion de contenu (CMS) pour le contenu du [site Web du SNC](https://numerique.canada.ca/), développé par [Strapi](https://strapi.io/).

## Exécution locale

1. Clonez le dépôt.
2. Exécutez `npm install`.
3. Exécutez `npm run develop` ou `npm run start`. Remarque : `npm run start` ne permet pas d’apporter des changements à un schéma de collection.
4. Si nécessaire, configurez une base de données Postgres sur la base des informations par défaut dans config > database.js

Remarque : Les bases de données locales ne seront pas synchronisées avec celles de l’environnement de production, donc n’hésitez pas à créer des entrées de données d’essai.
