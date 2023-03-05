"use strict";

/**
 * project service
 */

const { createCoreService } = require("@strapi/strapi").factories;

module.exports = createCoreService("api::project.project", {
  config: {
    update: {
      middlewares: ["plugin::keycloak.keycloak"],
    },
  },
});
