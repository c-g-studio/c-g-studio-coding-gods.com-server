"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendMessageToTelegram = void 0;
require("dotenv/config");
const node_telegram_bot_api_1 = __importDefault(require("node-telegram-bot-api"));
const { TG_BOT_TOKEN, TG_CHAT_ID } = process.env;
const bot = new node_telegram_bot_api_1.default(TG_BOT_TOKEN, { polling: true });
const sendMessageToTelegram = async ({ telegramMessage, }) => {
    await bot.sendMessage(TG_CHAT_ID, telegramMessage, {
        parse_mode: "HTML",
    });
};
exports.sendMessageToTelegram = sendMessageToTelegram;
