import axios from "axios";

type MessageParams = {
  telegramMessage: string;
  to: string;
  token: string;
};
export const sendMessageToTelegram = async ({
  telegramMessage,
  to,
  token,
}: MessageParams): Promise<void> => {
  // Логика отправки сообщения
  await axios.post(`https://api.telegram.org/bot${token}/sendMessage`, {
    chat_id: to,
    text: telegramMessage,
    parse_mode: "HTML",
  });
};
