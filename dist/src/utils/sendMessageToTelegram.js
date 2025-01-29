"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendMessageToTelegram = void 0;
const axios_1 = __importDefault(require("axios"));
const sendMessageToTelegram = async ({ telegramMessage, to, token, }) => {
    // Логика отправки сообщения
    await axios_1.default.post(`https://api.telegram.org/bot${token}/sendMessage`, {
        chat_id: to,
        text: telegramMessage,
        parse_mode: "HTML",
    });
};
exports.sendMessageToTelegram = sendMessageToTelegram;
