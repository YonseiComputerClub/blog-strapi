"use strict";

/**
 * project router
 */

const { createCoreRouter } = require("@strapi/strapi").factories;

module.exports = createCoreRouter("api::project.project", {
  config: {
    update: {
      middlewares: ["plugin::keycloak.keycloak"],
    },
  },
});
