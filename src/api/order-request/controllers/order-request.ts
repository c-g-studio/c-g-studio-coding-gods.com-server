import { factories } from "@strapi/strapi";
import "dotenv/config";
import { sendEmail } from "../../../utils/sendMail";
import { sendMessageToTelegram } from "../../../utils/sendMessageToTelegram";

const { FLAG_MAIL, TG_FLAG, TG_CHAT_ID, TG_BOT_TOKEN } = process.env;

export default factories.createCoreController(
  "api::order-request.order-request",
  () => ({
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
          await sendEmail(emailTemplate);
        } catch (error) {
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
          await sendMessageToTelegram({
            telegramMessage,
            to: TG_CHAT_ID,
            token: TG_BOT_TOKEN,
          });
        } catch (error) {
          ctx.throw(500, "Error sending: " + error.message);
        }
      }

      return {
        status: 201,
        message: "Order created",
        data,
      };
    },
  })
);
