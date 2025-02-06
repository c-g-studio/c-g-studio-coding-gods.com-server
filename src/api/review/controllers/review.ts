/**
 * review controller
 */

/**
 * review controller
 */

import { factories } from "@strapi/strapi";

export default factories.createCoreController(
  "api::review.review",
  ({ strapi }) => ({
    async find(ctx) {
      if (!ctx.query.populate) {
        ctx.query.populate = {
          avatar: { fields: ["url", "mime", "name"] },
        };
      }

      return await super.find(ctx);
    },
  })
);
