"use strict";
/**
 * review controller
 */
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * review controller
 */
const strapi_1 = require("@strapi/strapi");
exports.default = strapi_1.factories.createCoreController("api::review.review", ({ strapi }) => ({
    async find(ctx) {
        if (!ctx.query.populate) {
            ctx.query.populate = {
                avatar: { fields: ["url", "mime", "name"] },
            };
        }
        return await super.find(ctx);
    },
}));
