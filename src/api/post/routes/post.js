"use strict";

/**
 * post router
 */

const { createCoreRouter } = require("@strapi/strapi").factories;

module.exports = createCoreRouter("api::post.post", {
  config: {
    create: {
      middlewares: ["plugin::keycloak.keycloak"],
    },
    update: {
      middlewares: ["plugin::keycloak.keycloak"],
    },
    delete: {
      middlewares: ["plugin::keycloak.keycloak"],
    },
  },
});
