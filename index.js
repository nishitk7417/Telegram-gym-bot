const TelegramBot = require('node-telegram-bot-api');
const dotenv = require('dotenv');

dotenv.config();
// console.log(process.env.TELEGRAM_BOT_TOKEN);

const token = process.env.TELEGRAM_BOT_TOKEN;
const bot = new TelegramBot(token, { polling: true });

const exercises = {
    Monday: [
               "CHEST",
        "1. Inclined Bench x4🏋️",
        "2. Barbell Flat Bench Press x3🏋️",
        "3. Dumbbell Flat Bench Press x3🏋️",
        "4. Dumbell  Fly Flat Bench x3🏋️",
        "5. Cable Crossover x3🏋️",
        "6. Butterfly x3🏋️",
        "4. Push-ups x3🏋️"
    ],
    Tuesday: [
                "BACK",
        "1. Front Pulley x4🏋️",
        "2. Seat Rowing x3🏋️",
        "3. One Arm Rowing x3🏋️",
        "4. Close grip Pulldown x3🏋️",
        "5. Reverse Butterfly x3🏋️",
        "6. Back Pulley x3🏋️"
    ],
    Wednesday: [
                "SHOULDER",
        "1. Side Lateral Raise x3🏋️",
        "2. Front Raise x3🏋️",
        "3. Rod Press x3🏋️",
        "4. Dumbell Press x3🏋️",
        "5. Reverse Butterfly x3🏋️",
        "6. Shrugs x3🏋️"
    ],
    Thursday: [
                "BICEPS",
        "1. Curling (Plane Rod) x4🏋️",
        "2. Hammer x4🏋️",
        "3. Both Arm Dumbell x3🏋️",
        "4. 723 x3🏋️",
        "5. Cable Curl x3🏋️"
    ],
    Friday: [
                "TRICEPS",
        "1. Laying Triceps x4🏋️",
        "2. Push Down x4🏋️",
        "3. OverHead x3🏋️",
        "4. Reverse Push Down x3🏋️",
        "5. One Arm Extension x3🏋️"
    ],
    Saturday: [
                "LEGS",
        "1. Leg Extension x4🏋️",
        "2. Squad x3🏋️",
        "3. Leg Press x3🏋️",
        "4. Leg Extension Back x3🏋️"
    ],
    Sunday: [
        "1. Rest day! Relax and recover.🛌",
        "2. Hydrate well and stretch if needed.🛌"
    ]
};

// Respond with exercise suggestions based on the day
bot.onText(/\/exercises (.+)/, (msg, match) => {
    const chatId = msg.chat.id;
    const day = match[1].trim().toLowerCase();
    
    const dayName = day.charAt(0).toUpperCase() + day.slice(1); // Capitalize first letter

    if (exercises[dayName]) {
        bot.sendMessage(chatId, `Exercises for ${dayName}:\n\n${exercises[dayName].join("\n")}`);
    } else {
        bot.sendMessage(chatId, "Sorry, I don't have an exercise plan for that day. Please try again with a valid day of the week.");
    }
});

// Start command
bot.onText(/\/start/, (msg) => {
    const chatId = msg.chat.id;
    bot.sendMessage(chatId, "Welcome to the GymBot! Type /exercises <day> to get exercises for a specific day (e.g., /exercises Monday).");
});
