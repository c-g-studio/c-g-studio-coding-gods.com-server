"use strict";
/**
 * project controller
 */
Object.defineProperty(exports, "__esModule", { value: true });
const strapi_1 = require("@strapi/strapi");
exports.default = strapi_1.factories.createCoreController('api::project.project', ({ strapi }) => ({
    async find(ctx) {
        // Добавляем стандартное populate, если его нет в запросе
        const defaultPopulate = {
            images: { populate: '*' },
            largeImages: { populate: '*' },
        };
        ctx.query = {
            ...ctx.query,
            populate: defaultPopulate,
        };
        // Вызываем стандартную реализацию find
        return await super.find(ctx);
    },
}));
