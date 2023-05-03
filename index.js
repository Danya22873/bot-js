const TelegramBot = require('node-telegram-bot-api'); // подключаем node-telegram-bot-api
const token = '5247399152:AAF0TiC8uCodQQ61DCFk_RWhYbQHQa3F85Q'; // тут токен кторый мы получили от botFather
const {
    front0,
    js,
    html,
    css,
    ideF,
    stagesF,
} = require('./front')

const {
    back0,
    back1,
} = require('./back')


const {

    android0,
} = require('./android')

const {

    ios0,
} = require('./ios')

const bot = new TelegramBot(token, {
    polling: true
});

bot.onText(/\/start/, (msg) => {
    const chatId = msg.chat.id;
    // если равен, отправляем сообщение с клавиатурой
    bot.sendMessage(chatId, 'Привет! Я - бот, который поможет вам войти в IT сферу.\nЕсли вы хотите ' +
        'научиться создавать веб-сайты или разрабатывать мобильные приложения, то' +
        'вы попали в нужное место! У нас есть широкий выбор курсов, которые помогут вам достичь ваших целей и стать опытным разработчиком..' +
        'Не теряйте время и начните свой путь к успеху прямо сейчас!', {
        reply_markup: {
            keyboard:[
                ["💻Стать программистом!💻"]
            ],resize_keyboard: true
        }
    });

});

bot.on('message', (msg)=>{
    const chatId = msg.chat.id;
    const messageText = msg.text; // получаем текст сообщения
    if (messageText==="💻Стать программистом!💻"){
        bot.sendMessage(chatId, "В сфере IT существует множество направлений, но два из них являются основными: web-разработка и разработка мобильных приложений.\n" +
            "\n" +
            "Web-разработка занимается созданием сайтов и веб-приложений. Она включает в себя различные технологии, такие как HTML, CSS, JavaScript, PHP" +
            " и многие другие. С помощью веб-разработки вы можете создавать сайты любой сложности: от простого одностраничного сайта до масштабных веб-порталов и интернет-магазинов.\n" +
            "\n" +
            "Разработка мобильных приложений, в свою очередь, занимается созданием приложений для мобильных устройств, таких как смартфоны и планшеты." +
            " Здесь используются различные технологии и платформы, такие как Android и iOS. Разработка мобильных приложений позволяет создавать разнообразные приложения: от игр и развлекательных приложений до приложений для бизнеса и образования.\n" +
            "\n" +
            "Какое направление вам более интересно?",
            {
            reply_markup: {
                keyboard:[
                    ["💻Web-разработка💻"],
                    ["📱Мобильная разработка📱"]
                ],resize_keyboard: true
            }
        })
    }else if(messageText==="💻Web-разработка💻") {
        bot.sendMessage(chatId, "В веб-разработке выделяются два основных направления: Front-end и Back-end.\n" +
            "\n" +
            "Front-end занимается разработкой клиентской части веб-сайта или приложения, которую видит пользователь. Это включает в себя создание красивого и удобного интерфейса, а также взаимодействие с пользователем. Для этого используются языки программирования HTML, CSS и JavaScript.\n" +
            "\n" +
            "Back-end, в свою очередь, занимается разработкой серверной части веб-сайта или приложения. Здесь используются различные языки программирования и технологии, такие как PHP, Python, Ruby, Node.js " +
            "и многие другие. Back-end-разработка включает в себя создание баз данных, обработку запросов и другие задачи, которые не видны пользователю.\n" +
            "\n" +
            "Какое направление интересно вам?", {
            reply_markup: {
                keyboard: [
                    ["🌚Front-end🌚"],
                    ["🌝Back-end🌝"]
                ], resize_keyboard: true
            }
        });

    }
    //Ветка фронта
    else if(messageText==="🌚Front-end🌚"){
        front0(chatId,bot)
    }else if(messageText==="JS"){
        js(chatId,bot)
    }else if(messageText==="HTML"){
        html(chatId,bot)
    }else if(messageText==="CSS"){
        css(chatId,bot)
    }else if(messageText==="Как установить среду разработки"){
        ideF(chatId,bot)
    }else if(messageText==="Этапы развития"){
        stagesF(chatId,bot)
    }
    //Ветка фронта



    //Ветка бэка
    else if(messageText==="🌝Back-end🌝"){
        back0(chatId,bot)
    }
    else if(messageText==="Начать изучение Back-end"){
        back1(chatId,bot)
    }
    //Ветка бэка



    //Ветка мобильной разработки
    else if(messageText==="📱Мобильная разработка📱"){
        bot.sendMessage(chatId, "Мобильная разработка делится на два основных направления - Android и IOS разработку." +
            " Программисты этого направления создают приложения как для общего потребления, так и под специфичные задачи" +
            " для бизнеса и промышленности. Конечно Android намного популярнее среди мобильных устройств в России и за рубежом," +
            " но у него есть существенный минус - большое количество разных устройств, с разными характеристиками, в отличии от IOS.\n" +
            "\n" +
            "Android - разработчики этого направления создают приложения разного уровня сложности для операционной системы" +
            " google. Данная операционная система используется не только на телефонах, но также интегрируется и в часы, телевизоры," +
            " авто и специальные устройства для бизнеса. Из плюсов этого направления можно выделить большое сообщество разработчиков" +
            " и материалов для обучения. Для разработки под Android подойдёт устройство на Windows/MacOS/Linux. Зарплаты" +
            " android-разработчиков начинаются от 60 тыс. рублей в месяц и могут доходить до 300 тыс. и даже 500 тыс. рублей." +
            " Время обучения от 6 месяцев.\n" +
            "\n" +
            "IOS - разработчикам этого направления приходится сталкиваться только с телефонами Apple. Также для разработки " +
            "под IOS требуется устройство на операционной системе MacOS, но разработка на Windows/Linux также возможна, с" +
            " помощью некоторых лайфхаков, про которые ты узнаешь, если выберешь это направление. Из плюсов этого направления" +
            " можно выделить обратный андроиду факт, в IOS разработке меньше людей из-за чего меньше и конкуренция. Зарплаты" +
            " IOS-разработчиков также начинаются от 60 тыс. рублей в месяц и могут доходить до 300 тыс. и даже 500 тыс. рублей." +
            " Время обучения также не отличается от андроида - от 6 месяцев.", {
            reply_markup: {
                keyboard: [
                    ["🤖Android🤖"],
                    ["🍎iOS🍎"]
                ], resize_keyboard: true
            }
        });
    }
    else if(messageText==="🤖Android🤖"){
        android0(chatId, bot)
    }else if(messageText==="🍎iOS🍎"){
        ios0(chatId,bot)
    }
    //Ветка мобильной разработки
})
