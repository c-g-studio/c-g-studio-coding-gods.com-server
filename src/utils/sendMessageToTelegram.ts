import "dotenv/config";
import TelegramBot from "node-telegram-bot-api";
const { TG_BOT_TOKEN, TG_CHAT_ID } = process.env;

type MessageParams = {
  telegramMessage: string;
};
const bot = new TelegramBot(TG_BOT_TOKEN, { polling: true });

export const sendMessageToTelegram = async ({
  telegramMessage,
}: MessageParams): Promise<void> => {
  await bot.sendMessage(TG_CHAT_ID, telegramMessage, {
    parse_mode: "HTML",
  });
};
