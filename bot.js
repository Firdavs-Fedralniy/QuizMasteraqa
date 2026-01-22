import TelegramBot from "node-telegram-bot-api";
import dotenv from "dotenv";

dotenv.config();

const bot = new TelegramBot(process.env.BOT_TOKEN, { polling: true });

// 🔥 КНОПКА ВВЕРХУ ЧАТА
bot.setChatMenuButton({
  menu_button: {
    type: "web_app",
    text: "🎮 MasterQuiz",
    web_app: {
      url: "https://second-chance-taupe.vercel.app/",
    },
  },
});

// /start
bot.onText(/\/start/, (msg) => {
  bot.sendMessage(msg.chat.id, "Готово 👆 Жми кнопку сверху");
});
