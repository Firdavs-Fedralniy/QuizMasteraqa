import TelegramBot from "node-telegram-bot-api";

const bot = new TelegramBot("BOT_TOKEN", { polling: true });

bot.onText(/\/start/, (msg) => {
  bot.sendMessage(msg.chat.id, "Открыть MasterQuiz 👇", {
    reply_markup: {
      inline_keyboard: [
        [
          {
            text: "Открыть игру",
            web_app: { url: "https://твой-домен.vercel.app" },
          },
        ],
      ],
    },
  });
});

bot.on("web_app_data", (msg) => {
  const data = JSON.parse(msg.web_app_data.data);
  bot.sendMessage(
    msg.chat.id,
    `Результат: ${data.left} - ${data.right}`
  );
});
