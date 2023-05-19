

function ios0(chatId, bot,){
    bot.sendMessage(chatId,"Ну что ж теперь, когда ты определился с направлением приступим к первому шагу - выбору языка. Принципиальной разницы с чего начать нету, но вот тебе краткая информация, чтобы определиться с языком.\n" +
        "\n" +
        "Objective-C - это язык общего назначения, который разработан поверх языка программирования C путем добавления функций языка программирования Small Talk, что делает его объектно-ориентированным языком. Он в основном используется при разработке операционных систем iOS и Mac OS X, а также его приложений. Стоит отметить, что Objective-C появился раньше Swift и большая часть кода в IOS до сих пор написана на ней. (На Objective-C можно программировать только с операционной системой MacOS)\n" +
        "\n" +
        "Swift - это надёжный и интуитивно понятный язык программирования от Apple, при помощи которого можно создавать приложения для iOS, Mac, Apple TV и Apple Watch. Он предоставляет разработчикам небывалую свободу творчества. Благодаря этому простому и удобному языку с открытым кодом вам достаточно просто интересной идеи, чтобы создать нечто невероятное. Swift проще для изучения чем Objective-C, но это как выбирать на чём учиться водить - Objective-C здесь \"механика\", а Swift - \"автомат\".",{
        reply_markup: {
            keyboard:[
                ["🐦Swift🐦"],
                ["🍎Objective-C🍎"]
            ],resize_keyboard: true
        }
    })
}
function ios1(chatId, bot,){
    bot.sendMessage(chatId,"Ура, ты определился с языком, теперь тебе предстоит нелёгкий путь в его изучении, но перед этим нужно установить текстовый редактор для кода и компилятор.\n" +
        "\n" +
        "Установить текстовый редактор для кода можно по этой ссылке: https://www.softportal.com/software-43592-atom.html\n" +
        "\n" +
        "Установить последнюю версию компилятора можно по этой ссылке: https://www.swift.org/download/",{
        reply_markup: {
            keyboard:[
                ["Среда разработки и компилятор установлены!"]
            ],resize_keyboard: true
        }
    })
}
function ios2(chatId, bot,){
    bot.sendMessage(chatId,"Переходим к изучению языка программирования Swift.\n" +
        "\n" +
        "Вот ссылка на плейлист, который поможет ознакомиться с Swift: https://youtube.com/playlist?list=PLRJuPW6BGThue5qX6AkARnqc8o_80fbQA\n" +
        "\n" +
        "Для практики рекомендуется переписывать код из видео и периодически решать задачи с этого сайта: https://www.codewars.com/kata/swift",{
        reply_markup: {
            keyboard:[
                ["Готoв идти дaльше!"]
            ],resize_keyboard: true
        }
    })
}
function ios3(chatId, bot,){
    bot.sendMessage(chatId,"Приступим к изучению IOS.\n" +
        "\n" +
        "Вот ссылка на плейлист, благодаря которому ты уже сможешь создать свои первые приложения на IOS: https://youtube.com/playlist?list=PLUsw2ThPACGjBfe_-yR3_JPbt4oBHA6qs\n" +
        "\n" +
        "Для практики рекомендуется копировать приложения из видео, а после просмотра всего плейлиста стоит попробовать сделать свой pet-проект, подробнее о том, что это, узнаешь на следующем шаге.",{
        reply_markup: {
            keyboard:[
                ["Pet-проект"]
            ],resize_keyboard: true
        }
    })
}
function ios4(chatId, bot,){
    bot.sendMessage(chatId,"Ура, ты определился с языком, теперь тебе предстоит нелёгкий путь в его изучении, но перед этим нужно установить среду разработки.\n" +
        "\n" +
        "Установить среду разработки можно по этой ссылке: https://developer.apple.com/xcode/resources/\n",{
        reply_markup: {
            keyboard:[
                ["Срeдa разработки устанoвленa!"]
            ],resize_keyboard: true
        }
    })
}
function ios5(chatId, bot,){
    bot.sendMessage(chatId,"Переходим к изучению языка программирования Objective-C.\n" +
        "\n" +
        "Вот ссылка на плейлист, который поможет ознакомиться с Objective-C:\n" +
        "https://youtube.com/playlist?list=PLDrmKwRSNx7Kf7dGK0sm92BDvMLwe_SBs\n" +
        "\n" +
        "Для практики рекомендуется переписывать код из видео и периодически решать задачи с этого сайта: https://www.codewars.com/kata/objc\n",{
        reply_markup: {
            keyboard:[
                ["Гoтoв идти дальшe!"]
            ],resize_keyboard: true
        }
    })
}
function ios6(chatId, bot,){
    bot.sendMessage(chatId,"Приступим к изучению IOS.\n" +
        "\n" +
        "Вот ссылка на плейлист, благодаря которому ты уже сможешь создать свои первые приложения на IOS: https://youtube.com/playlist?list=PLmRNNqEA7JoMv0d1WGSb9Lz9hexlb092p\n" +
        "\n" +
        "Для практики рекомендуется переписать приложение из видео, а после просмотра всего плейлиста стоит попробовать сделать свой pet-проект, подробнее о том, что это, узнаешь на следующем шаге.",{
        reply_markup: {
            keyboard:[
                ["Pet-проект"]
            ],resize_keyboard: true
        }
    })
}




module.exports = {
    ios0:ios0,
    ios1:ios1,
    ios2:ios2,
    ios3:ios3,
    ios4:ios4,
    ios5:ios5,
    ios6:ios6
}
