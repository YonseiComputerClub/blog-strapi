module.exports = ({ env }) => ({
  "strapi-plugin-keycloak": {
    enabled: true,
    config: {
      KEYCLOAK_SERVER_URL: process.env.KEYCLOAK_SERVER_URL,
      KEYCLOAK_REALM: process.env.KEYCLOAK_REALM,
      KEYCLOAK_CLIENT_ID: process.env.KEYCLOAK_CLIENT_ID,
      KEYCLOAK_CLIENT_SECRET: process.env.KEYCLOAK_CLIENT_SECRET,
      KEYCLOAK_REDIRECT_URL: `${process.env.PUBLIC_URL}/strapi-plugin-keycloak/keycloak/callback`,
    },
  },
});
