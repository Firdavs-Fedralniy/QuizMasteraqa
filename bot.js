import TelegramBot from "node-telegram-bot-api";

const bot = new TelegramBot("7717958664:AAHMwP1aOMCN-W6Q_NFpniDRddhvWYqb-Uc", { polling: true });

bot.onText(/\/start/, (msg) => {
  bot.sendMessage(msg.chat.id, "Открывай епта", {
    reply_markup: {
      inline_keyboard: [
        [
          {
            text: "Открыть игру",
            web_app: { url: "https://second-chance-taupe.vercel.app/" },
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
