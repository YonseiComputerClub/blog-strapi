module.exports = ({ env }) => ({
  "strapi-plugin-keycloak": {
    enabled: true,
    config: {
      KEYCLOAK_SERVER_URL: env("KEYCLOAK_SERVER_URL"),
      KEYCLOAK_REALM: env("KEYCLOAK_REALM"),
      KEYCLOAK_CLIENT_ID: env("KEYCLOAK_CLIENT_ID"),
      KEYCLOAK_CLIENT_SECRET: env("KEYCLOAK_CLIENT_SECRET"),
      KEYCLOAK_REDIRECT_URL: `${env(
        "STRAPI_URL",
        "http://localhost:1337"
      )}/strapi-plugin-keycloak/keycloak/callback`,
    },
  },
  keycloak: {
    enabled: true,
  },
});
