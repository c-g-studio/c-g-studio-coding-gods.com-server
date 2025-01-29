/**
 * project controller
 */

import { factories } from '@strapi/strapi';

export default factories.createCoreController('api::project.project', ({ strapi }) => ({
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
