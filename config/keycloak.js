module.exports = ({ env }) => ({
  clientId: env("KEYCLOAK_CLIENT_ID"),
  clientSecret: env("KEYCLOAK_CLIENT_SECRET"),
  authEndpoint: `${env("KEYCLOAK_SERVER_URL")}/realms/${env(
    "KEYCLOAK_REALM"
  )}/protocol/openid-connect/auth`,
  tokenEndpoint: `${env("KEYCLOAK_SERVER_URL")}/realms/${env(
    "KEYCLOAK_REALM"
  )}/protocol/openid-connect/token`,
  userinfoEndpoint: `${env("KEYCLOAK_SERVER_URL")}/realms/${env(
    "KEYCLOAK_REALM"
  )}/protocol/openid-connect/userinfo`,
  logoutEndpoint: `${env("KEYCLOAK_SERVER_URL")}/realms/${env(
    "KEYCLOAK_REALM"
  )}/protocol/openid-connect/logout`,
  redirectUri: `${env(
    "STRAPI_URL",
    "http://localhost:1337"
  )}/keycloak/callback`,
  redirectToUrlAfterLogin: "/",
  redirectToUrlAfterLogout: "/",
});
