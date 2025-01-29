"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const strapi_1 = require("@strapi/strapi");
require("dotenv/config");
const sendMail_1 = require("../../../utils/sendMail");
const sendMessageToTelegram_1 = require("../../../utils/sendMessageToTelegram");
const { FLAG_MAIL, TG_FLAG, TG_CHAT_ID, TG_BOT_TOKEN } = process.env;
exports.default = strapi_1.factories.createCoreController("api::order-request.order-request", () => ({
    async create(ctx) {
        console.log(ctx.request.body);
        const { name, email, phone } = ctx.request.body || {};
        ctx.request.body = {
            data: { name, email, phone },
        };
        const data = await super.create(ctx);
        if (FLAG_MAIL === "true") {
            const emailTemplate = {
                from: "testmentor@ukr.net",
                to: "coding.gods.studio@gmail.com",
                subject: "Заявка на звонок",
                html: `<h2>Информация про заявку</h2>
               <p>Имя: ${name}</p>
               <p>Номер телефона: ${phone}</p>
               <p>Почта: ${email}</p>
               <p>Набери этим засранцам</p>
               `,
            };
            try {
                await (0, sendMail_1.sendEmail)(emailTemplate);
            }
            catch (error) {
                ctx.throw(500, "Error sending: " + error.message);
            }
        }
        if (TG_FLAG === "true") {
            try {
                const telegramMessage = `
        Заявка на звонок:
        Имя: ${name}
        Номер телефона: ${phone}
        Почта: ${email}
      `;
                await (0, sendMessageToTelegram_1.sendMessageToTelegram)({
                    telegramMessage,
                    to: TG_CHAT_ID,
                    token: TG_BOT_TOKEN,
                });
            }
            catch (error) {
                ctx.throw(500, "Error sending: " + error.message);
            }
        }
        return {
            status: 201,
            message: "Order created",
            data,
        };
    },
}));
