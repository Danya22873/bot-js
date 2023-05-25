
function android0(chatId, bot,){
    bot.sendMessage(chatId,"Ну что ж теперь, когда ты определился с направлением приступим к первому шагу," +
        " для программирования на одном из двух основных языках для Android тебе потребуется среда разработки." +
        " К счастью существует универсальная среда для 2-х этих языков - это IntelliJ IDEA. На данный момент она" +
        " является одной из самых популярных сред программирования в мире.\n" +
        "\n" +
        "Вот ссылка откуда можно скачать IntelliJ IDEA: https://www.jetbrains.com/idea/download/#section=windows",{
        reply_markup: {
            keyboard:[
                ["Среда разработки установлeнa!"],
            ],resize_keyboard: true
        }
    })
}
function android1(chatId, bot,){
    bot.sendMessage(chatId,
        "Круто! Теперь тебе предстоит выбрать язык программирования, который изучишь первым. Принципиальной разницы с чего начать" +
        " нету, но вот тебе краткая информация, чтобы определиться с языком.\n" +
        "\n" +
        "Java - это объектно-ориентированный язык программирования, разработанный компанией Sun Microsystems в " +
        "1990-х годах (позже купленной Oracle). Java находится под влиянием C и C++, поэтому она имеет много общего с этими языками (и C#). Одним из больших преимуществ Java является то, что он «платформенно-независимый». Это означает, что код, который ты пишешь на одной платформе, можно легко запустить на другой.\n" +
        "Стоит отметить, что Java появилась раньше Kotlin и большая часть кода в android до сих пор написана на ней.\n" +
        "\n" +
        "Kotlin - это относительно молодой язык от российской компании JetBrains. Появился он в 2011 году. На конференции Google I/O 2017 команда разработчиков Android сообщила, что Kotlin получил официальную поддержку для разработки Android-приложений. Как и Java, C и C++, Kotlin — это статически типизированный язык. Программы написанные на Kotlin компилируются в байткод JVM или в JavaScript. Kotlin проще для изучения чем Java, но это как выбирать на чём учиться водить - Java здесь \"механика\", а Kotlin - \"автомат\".\n",{
        reply_markup: {
            keyboard:[
                ["☕️Java☕️"],
                ["💜Kotlin💜"]
            ],resize_keyboard: true
        }
    })
}
function android2(chatId, bot,){
    bot.sendMessage(chatId,
        "Ура, ты определился с языком, теперь тебе предстоит нелёгкий путь в его изучении, но перед этим нужно установить компилятор, который будет превращать твой код в понятные для компьютера команды.\n" +
        "\n" +
        "Установить последнюю версию компилятора можно по этой ссылке: https://www.oracle.com/java/technologies/downloads/",{
        reply_markup: {
            keyboard:[
                ["Компилятор установлeн!"]
            ],resize_keyboard: true
        }
    })
}


function android3(chatId, bot,){
    bot.sendMessage(chatId,
        "Переходим к изучению языка программирования Java.\n" +
        "\n" +
        "Вот ссылка на плейлист, который поможет ознакомиться с Java на базовом уровне: https://youtube.com/playlist?list=PLAma_mKffTOSUkXp26rgdnC0PicnmnDak\n" +
        "\n" +
        "Для практики рекомендуется переписывать код из видео и периодически решать задачи с этого сайта: https://www.codewars.com/kata/java",{
            reply_markup: {
                keyboard:[
                    ["Гoтoв идти дaльше!"]
                ],resize_keyboard: true
            }
        })
}
function android4(chatId, bot,){
    bot.sendMessage(chatId,
        "Идём дальше. Теперь пришло время изучить более углубленные темы Java.\n" +
        "\n" +
        "Вот ссылка на плейлист, в котором разбираются эти темы: https://youtube.com/playlist?list=PLBGT3C0os7PqAPKBq5R49oJemXDjBQF2y\n" +
        "\n" +
        "Для практики рекомендуется переписывать код из видео и периодически решать задачи с того же сайта: https://www.codewars.com/kata/java",{
            reply_markup: {
                keyboard:[
                    ["К следующему шагу!"]
                ],resize_keyboard: true
            }
        })
}
function android5(chatId, bot,){
    bot.sendMessage(chatId,
        "Что же наконец-то пришло время познакомиться с самим Android. Но перед этим необходимо установить специальную среду для разработки Android приложений - Android Studio, в ней также будет эмулятор для тестирования этих приложений.\n" +
        "\n" +
        "Вот ссылка на Android Studio: https://developer.android.com/studio",{
            reply_markup: {
                keyboard:[
                    ["Идём дальше!"]
                ],resize_keyboard: true
            }
        })
}

function android6(chatId, bot,){
    bot.sendMessage(chatId,
        "Приступим к изучению Android.\n" +
        "\n" +
        "Вот ссылка на плейлист, благодаря которому ты уже сможешь создать свои первые приложения на Android: https://youtube.com/playlist?list=PLrCZzMib1e9ptI7bPXFG8X5xEiCBt5qYE\n" +
        "\n" +
        "Для практики рекомендуется копировать приложения из видео, а после просмотра всего плейлиста стоит попробовать сделать свой pet-проект, подробнее о том, что это, узнаешь на следующем шаге.",{
            reply_markup: {
                keyboard:[
                    ["Pet-проект"]
                ],resize_keyboard: true
            }
        })
}

function android7(chatId, bot,){
    bot.sendMessage(chatId,
        "Pet-проект - это индивидуальный проект, который ты делаешь ради себя, он создается дома вне остальной деятельности, характеризующийся как исключительно личный фаворит программиста.\n" +
        "\n" +
        "Подробнее о том, что такое pet-проект и как его сделать можешь посмотреть здесь:\n" +
        "https://www.youtube.com/watch?v=fNNQEmA1JD0\n" +
        "https://www.youtube.com/watch?v=e-bgQSjflps",{
            reply_markup: {
                keyboard:[
                    ["Да здравствует фриланс и первые заказы!"]
                ],resize_keyboard: true
            }
        })
}
function android8(chatId, bot,){
    bot.sendMessage(chatId,
        "Поздравляю на данном этапе ты можешь попробовать выполнить первые заказы на фрилансе для этого тебе потребуется:\n" +
        "1) Зарегистрироваться на бирже:\n" +
        "fl.ru: https://www.fl.ru\n" +
        "kwork: https://kwork.ru/\n" +
        "weblancer: https://www.weblancer.net/\n" +
        "2) Отфильтровать предложения о работе по своему направлению\n" +
        "3) Откликаться на предложения о работе, не используя шаблонное письмо, сообщение должно отражать то, что ты понимаешь суть задачи и знаешь как её решить. Также используй pet-проекты, как демонстрацию твоих навыков.\n" +
        "\n" +
        "Если удалось получить первый заказ, обязательно после его выполнения собери отзыв заказчика, так тебе будет проще находить следующие заказы.\n" +
        "\n" +
        "После пары десятков заказов на фрилансе можно пробовать устраиваться в IT компании, т.к. у тебя будет накоплен тот самый опыт, который многие не знают откуда взять.",{
            reply_markup: {
                keyboard:[
                    ["Устраиваемся в IT компанию"]
                ],resize_keyboard: true
            }
        })
}
function android9(chatId, bot,){
    bot.sendMessage(chatId,
        "Что же на заключительном этапе, перед тем, как идти на собеседования в IT компании желательно посмотреть примеры интервью по твоему направлению.\n" +
        "\n" +
        "Также вот лайфхаки, которые возможно помогут тебе во время прохождения интервью:\n" +
        "1) Узнавай про компанию, в которую идёшь собеседоваться (их проекты, используемые технологии и т.п.)\n" +
        "2) На техническом интервью не уходи в дебри, отвечай только на то, что тебя спрашивают\n" +
        "3) Если не знаешь точного ответа на вопрос, пробуй размышлять, рекрутёры уделяют много внимания ходу мыслей человека\n" +
        "Вернуться в самое начало поможет кнопка ниже!",{
            reply_markup: {keyboard:[["/start"]],resize_keyboard:true}
        })
}

function android10(chatId, bot,){
    bot.sendMessage(chatId,
        "Ура, ты определился с языком, писать код ты можешь прямо в IntelliJ IDEA, ничего дополнительно устанавливать не нужно, т.к. компилятор, который будет превращать твой код в понятные для компьютера команды, встроен в данную среду.\n" +
        "\n" +
        "Вот ссылка на плейлист, который поможет ознакомиться с Java на базовом уровне: https://youtube.com/playlist?list=PLgPRahgE-Gcu4s-I9mrHUrKUp9dY6QcJC\n" +
        "\n" +
        "Для практики рекомендуется переписывать код из видео и периодически решать задачи с этого сайта: https://www.codewars.com/kata/kotlin",{
            reply_markup: {
                keyboard:[
                    ["Готoв идти дальше!"]
                ],resize_keyboard: true
            }
        })
}
function android11(chatId, bot,){
    bot.sendMessage(chatId,
        "Пришло время познакомиться с самим Android. Но перед этим необходимо установить специальную среду для разработки Android приложений - Android Studio, в ней также будет эмулятор для тестирования этих приложений.\n" +
        "\n" +
        "Вот ссылка на Android Studio: https://developer.android.com/studio",{
            reply_markup: {
                keyboard:[
                    ["К следующему шaгу!"]
                ],resize_keyboard: true
            }
        })
}
function android12(chatId, bot,){
    bot.sendMessage(chatId,
        "Идём дальше. Теперь пришло время изучить разработку под Android на Kotlin.\n" +
        "\n" +
        "Вот ссылка на плейлист, который поможет тебе в этом: https://youtube.com/playlist?list=PLyfVjOYzujuj20Y-3kVhT3Zro9CrMNgNS\n" +
        "\n" +
        "Для практики рекомендуется копировать приложения из видео, а после просмотра всего плейлиста стоит попробовать сделать свой pet-проект, подробнее о том, что это, узнаешь на следующем шаге.",{
            reply_markup: {
                keyboard:[
                    ["Идём дальше!"]
                ],resize_keyboard: true
            }
        })
}


module.exports = {
    android0:android0,
    android1:android1,
    android2:android2,
    android3:android3,
    android4:android4,
    android5:android5,
    android6:android6,
    android7:android7,
    android8:android8,
    android9:android9,
    android10:android10,
    android11:android11,
    android12:android12,

}
