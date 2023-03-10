module.exports = ({ env }) => ({
  host: env("STRAPI_HOST", "0.0.0.0"),
  port: env.int("STRAPI_PORT", 1337),
  url: env("STRAPI_URL", "http://localhost:1337"),
  proxy: true,
  app: {
    keys: env.array("STRAPI_KEYS"),
  },
  webhooks: {
    populateRelations: env.bool("WEBHOOKS_POPULATE_RELATIONS", false),
  },
});
