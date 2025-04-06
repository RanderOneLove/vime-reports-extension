// content.js

// Объект замен для эмодзи
// Большая часть конфига сгенерирована через GPT
// По возможности, обновляйте список
const emojiReplacements = {

    // Дефолтные
    "优": "\uD83D\uDE0E",
    "伙": "\u263A",
    "会": "\uD83D\uDE01",
    "伛": "\uD83D\uDE0A",
    "伜": "\uD83D\uDE1F",
    "伝": "\uD83D\uDE04",
    "伞": "\uD83D\uDE0D",
    "伟": "\uD83D\uDE33",
    "传": "\uD83D\uDE1C",
    "伡": "\uD83D\uDE2D",
    "伣": "\uD83E\uDD2C",
    "伤": "\uD83D\uDE10",
    "伥": "\uD83D\uDE09",
    "伽": "\uD83D\uDE1E",
    "伨": "\uD83D\uDE08",
    "伩": "\uD83E\uDD21",
    "伪": "\uD83D\uDC80",
    "伫": "\uD83D\uDE21",
    "伬": "\uD83E\uDD28",
    "伭": "\uD83D\uDE14",
    "伦": "\uD83D\uDC4D",
    "伻": "\uD83D\uDC4E",
    "似": "\uD83D\uDC4C",
    "伺": "\uD83E\uDDA1",
    "佁": "\uD83D\uDC9B",
    "佂": "\uD83D\uDC9C",
    "佃": "\uD83D\uDC99",
    "佄": "\uD83D\uDC9D",
    "佅": "\uD83D\uDC9A",
    "但": "\uD83D\uDC9A",
    
    //Подарки
    "俀": "\uD83C\uDF81",
    "俁": "\uD83C\uDF81",
    "係": "\uD83C\uDF81",
    "促": "\uD83C\uDF81",
    "俄": "\uD83C\uDF81",

    // Снеговики (статичный, грустный, веселый, таит)
    "俅": "\u2603\u200D", // снеговик
    "俆": "\uD83D\uDE22", // грустный снеговик
    "俇": "\uD83D\uDE01", // веселый снеговик
    "俈": "\uD83E\uDD2F", // снеговик с хитрой улыбкой

    // Подарок, медведь, снегурочка, Гринч
    "俉": "\uD83C\uDF81", // подарок
    "俊": "\uD83D\uDC3B", // медведь
    "俋": "\uD83E\uDD36", // снегурочка
    "俌": "\uD83E\uDD77", // Гринч

    // Мороженое (разные виды)
    "俍": "\uD83C\uDF66", // рожок
    "俎": "\uD83C\uDF68", // эскимо
    "俏": "\uD83C\uDF67", // щербет
    "俐": "\uD83C\uDF69", // мягкое мороженое

    // Олени (обычный, плачущий, умиленный, удивленный)
    "侲": "\uD83E\uDD8C", // олень
    "侳": "\uD83E\uDD8C\u200D\uD83D\uDE22", // плачущий олень
    "侴": "\uD83E\uDD8C\u200D\uD83D\uDE0D", // умиленный олень
    "侵": "\uD83E\uDD8C\u200D\uD83D\uDE32", // удивленный олень

    // Пингвины (влюблен, плачущий, радостный, хмурый)
    "侶": "\uD83D\uDC27\u200D\uD83D\uDE0D", // влюбленный пингвин
    "侷": "\uD83D\uDC27\u200D\uD83D\uDE22", // плачущий пингвин
    "侸": "\uD83D\uDC27\u200D\uD83D\uDE01", // радостный пингвин
    "侹": "\uD83D\uDC27\u200D\uD83D\uDE23", // хмурый пингвин

    // Лёд (нерадостный, перевернутый, в шоке, грустный, прищуренный, смотрит косо)
    "侺": "\uD83E\uDD76", // нерадостный
    "侻": "\uD83E\uDD74", // перевернутый
    "侼": "\uD83E\uDD2F", // в шоке
    "侽": "\uD83D\uDE14", // грустный
    "侾": "\uD83D\uDE11", // прищуренный
    "便": "\uD83D\uDE44", // смотрит косо

    // Дискошар (удивленный, нерадостный, крутой, влюбленный)
    "俑": "\uD83C\uDFA2\u200D\uD83D\uDE32", // удивленный
    "俒": "\uD83C\uDFA2\u200D\uD83D\uDE14", // нерадостный
    "俓": "\uD83C\uDFA2\u200D\uD83D\uDE0E", // крутой
    "俔": "\uD83C\uDFA2\u200D\uD83D\uDE0D", // влюбленный

    // Блины
    "俕": "\uD83E\uDD5E", // блин
    "俖": "\uD83C\uDF5E", // хлеб (блинчик)
    "俗": "\uD83C\uDF72", // горшок (блины)
    "俘": "\uD83C\uDF73", // яичница (блинчики)

    // Попугай, кошка, собака, рыбка
    "俙": "\uD83E\uDD9C", // попугай
    "俚": "\uD83D\uDC31", // кошка
    "俛": "\uD83D\uDC36", // собака
    "俜": "\uD83D\uDC1F", // рыбка

    // Пластинка, нота, звуковой ключ
    "保": "\uD83C\uDFB6", // пластинка
    "俞": "\uD83C\uDFB5", // нота
    "俟": "\uD83C\uDFB9", // звуковой ключ
    "俠": "\uD83C\uDFBA", // труба

    // Синтезатор, джойпад, микрофон, наушники
    "信": "\uD83C\uDFB4", // синтезатор
    "俢": "\uD83C\uDFAE", // джойпад
    "俣": "\uD83C\uDFA4", // микрофон
    "俤": "\uD83C\uDFA7", // наушники

    // Очки, звезда, танцующий, дрампад
    "俥": "\uD83D\uDC53", // очки
    "俦": "\u2B50", // звезда
    "俧": "\uD83D\uDD7A", // танцующий
    "俨": "\uD83C\uDFB8", // дрампад

    // Кассеты
    "俩": "\uD83C\uDFA7", // кассета (вариант)
    "俪": "\uD83C\uDFB2", // кассета (вариант)
    "俫": "\uD83C\uDFB3", // кассета (вариант)
    "俬": "\uD83C\uDFB7", // кассета (вариант)

    // Круг, треугольник, квадрат, черная маска
    "偤": "\u2B55", // круг
    "健": "\u25B6", // треугольник
    "偦": "\u25FC", // квадрат
    "偧": "\uD83D\uDE37", // черная маска

    // Плачущий, в шоке, умиленный, прозрачный
    "偋": "\uD83D\uDE22", // плачущий
    "偌": "\uD83D\uDE31", // в шоке
    "偍": "\uD83D\uDE0D", // умиленный
    "偎": "\uD83E\uDD76", // прозрачный (лед)

    // Луна с лицом, солнце с лицом, солнце, месяц
    "偏": "\uD83C\uDF19", // луна с лицом
    "偐": "\uD83C\uDF1E", // солнце с лицом
    "偑": "\u2600", // солнце
    "偒": "\uD83C\uDF13", // месяц

    // Дождь, гроза, волна, огонь
    "偓": "\uD83C\uDF27", // дождь
    "偔": "\u26C8", // гроза
    "偕": "\uD83C\uDF0A", // волна
    "偖": "\uD83D\uDD25", // огонь

    // Комета, ночное небо, звезда на фоне, звезды
    "偗": "\u2604", // комета
    "偘": "\uD83C\uDF03", // ночное небо
    "偙": "\uD83C\uDF1F", // звезда на фоне
    "做": "\u2728", // звезды

    // Золото, TNT, сундук, земля, AFK
    "偛": "\uD83D\uDCB0", // золото
    "停": "\uD83D\uDCA3", // TNT
    "偝": "\uD83E\uDDF1", // сундук
    "偞": "\uD83C\uDF0D", // земля
    "偟": "\uD83D\uDE34", // AFK

    // Ухмыленный, влюбленный, веселый, удивленный
    "倳": "\uD83D\uDE0F", // ухмыленный
    "倴": "\uD83D\uDE0D", // влюбленный
    "倵": "\uD83D\uDE01", // веселый
    "倶": "\uD83D\uDE32", // удивленный

    // Разные сладости
    "倷": "\uD83C\uDF6B", // шоколад
    "倸": "\uD83C\uDF6C", // леденец
    "倹": "\uD83C\uDF6D", // мармелад
    "债": "\uD83C\uDF6E", // мороженое

    // Фуга (мертвая, влюбленная, шокирована, плачущая)
    "傀": "\uD83D\uDC80", // мертвая
    "傁": "\uD83D\uDE0D", // влюбленная
    "偾": "\uD83D\uDE31", // шокирована
    "偿": "\uD83D\uDE22", // плачущая

    // Шок, недовольный, ухмылка, крутой
    "傂": "\uD83D\uDE31", // шок
    "傃": "\uD83D\uDE20", // недовольный
    "傄": "\uD83D\uDE0F", // ухмылка
    "傅": "\uD83D\uDE0E", // крутой

    // Яблоко, торт, печенье, зелье
    "偲": "\uD83C\uDF4E", // яблоко
    "偳": "\uD83C\uDF70", // торт
    "側": "\uD83C\uDF6A", // печенье
    "偵": "\uD83E\uDDEA", // зелье

    // Алмаз, изумруд, золото, звезда (одна)
    "偶": "\uD83D\uDC8E", // алмаз
    "偷": "\uD83D\uDC8D", // изумруд
    "偸": "\uD83D\uDCB0", // золото
    "偹": "\u2B50", // звезда

    // Плачущий, мертвый, влюбленный, обычный
    "偺": "\uD83D\uDE22", // плачущий
    "偻": "\uD83D\uDC80", // мертвый
    "偼": "\uD83D\uDE0D", // влюбленный
    "偽": "\uD83D\uDE10"  // обычный
};

    let lastValue = '';

    document.getElementById('mr_itime').addEventListener('blur', function() {
        const currentValue = this.value;
        if (currentValue !== lastValue) {
            const sum = calculateSum(currentValue);
            this.value = sum;
            lastValue = sum;
        }
    });

    function calculateSum(input) {
        // Удаляем все нечисловые символы и разбиваем строку по '+'
        const numbers = input.split('+').map(num => parseFloat(num.trim())).filter(num => !isNaN(num));
        return numbers.reduce((acc, num) => acc + num, 0); // Складываем все числа
    }

function convertText() {
    const elements = document.querySelectorAll('#mr_messages');
    elements.forEach(element => {
        element.childNodes.forEach(node => {
            if (node.nodeType === Node.TEXT_NODE) {
                let newText = node.textContent;

                // Конвертация HEX-кодов и сохранение пробелов
                newText = newText.replace(/&x([0-9A-Fa-f]{6})\s*([^\s&]+)/g, (match, hex, word) => {
                    return `<span style="color: #${hex};">${word}</span>`;
                });

                newText = newText.replace(/&x[0-9A-Fa-f]{6}/g, '');

                // Для эмодзи
                for (const [key, value] of Object.entries(emojiReplacements)) {
                    newText = newText.replace(new RegExp(key, 'g'), value);
                }

                newText = newText.replace(/\s+/g, ' ').trim();

                if (newText !== node.textContent) {
                    const newNode = document.createElement('span');
                    newNode.innerHTML = newText;
                    element.replaceChild(newNode, node);
                }
            }
        });
    });
}

// Функция для подсчета символов
function countCharacters() {
    const inputField = document.getElementById('textInput');
    const countButton = document.getElementById('countButton');
    const text = inputField.value;
    countButton.textContent = `Подсчитать (${text.length})`;
}

// Функция для замены английских букв на русские и наоборот
// Может работать некорректно, по словам некоторых хелперов и модераторов
function replaceEngRus() {
    const inputField = document.getElementById('textInput');
    const text = inputField.value;

    // Транслит словарь
    const translitMap = {
        'a': 'ф', 'b': 'и', 'c': 'с', 'd': 'в', 'e': 'у', 'f': 'а',
        'g': 'п', 'h': 'р', 'i': 'ш', 'j': 'о', 'k': 'л', 'l': 'д',
        'm': 'ь', 'n': 'т', 'o': 'щ', 'p': 'з', 'q': 'й', 'r': 'к',
        's': 'ы', 't': 'г', 'u': 'н', 'v': 'м', 'w': 'ц', 'x': 'ч',
        'y': 'я', 'z': 'ё',
        'A': 'Ф', 'B': 'И', 'C': 'С', 'D': 'В', 'E': 'У', 'F': 'А',
        'G': 'П', 'H': 'Р', 'I': 'Ш', 'J': 'О', 'K': 'Л', 'L': 'Д',
        'M': 'Ь', 'N': 'Т', 'O': 'Щ', 'P': 'З', 'Q': 'Й', 'R': 'К',
        'S': 'Ы', 'T': 'Г', 'U': 'Н', 'V': 'М', 'W': 'Ц', 'X': 'Ч',
        'Y': 'Я', 'Z': 'Ё'
    };

    const reverseTranslitMap = Object.fromEntries(
        Object.entries(translitMap).map(([key, value]) => [value, key])
    );

    // Заменяем каждую букву
    const replacedText = text.split('').map(char => {
        return translitMap[char] || reverseTranslitMap[char] || char;
    }).join('');

    inputField.value = replacedText;
}

function createInputField() {

	const inputContainer = document.createElement('div');
    inputContainer.style.marginTop = '10px';
    inputContainer.style.display = 'flex';
    inputContainer.style.alignItems = 'center';
    inputContainer.style.justifyContent = 'flex-start';

    const inputField = document.createElement('input');
    inputField.type = 'text';
    inputField.id = 'textInput';
    inputField.style.width = '309px';
    inputField.style.display = 'inline';
    inputField.className = 'form-control';
    inputField.placeholder = 'Введите текст...';

    const countButton = document.createElement('button');
    countButton.id = 'countButton';
    countButton.textContent = 'Подсчитать (0)';
    countButton.className = 'btn btn-success';
    countButton.style.marginLeft = '10px';
    countButton.onclick = countCharacters;

    const replaceButton = document.createElement('button');
    replaceButton.textContent = 'Eng - Rus';
    replaceButton.className = 'btn btn-info';
    replaceButton.style.marginLeft = '10px';
    replaceButton.onclick = replaceEngRus;

    inputContainer.appendChild(inputField);
    inputContainer.appendChild(countButton);
    inputContainer.appendChild(replaceButton);

    const modalFooter = document.querySelector('.modal-footer');
    if (modalFooter) {
        modalFooter.appendChild(inputContainer);
    }
}

function createConvertField() {
    const convertContainer = document.createElement('div');
    convertContainer.style.marginTop = '10px';
    convertContainer.style.display = 'flex';
    convertContainer.style.alignItems = 'center';

    const convertButton = document.createElement('button');
    convertButton.textContent = 'Конвертировать HEX и эмодзи';
    convertButton.className = 'btn btn-primary';
    convertButton.onclick = convertText;

    convertContainer.appendChild(convertButton);

    const modalFooter = document.querySelector('.modal-footer');
    if (modalFooter) {
        modalFooter.appendChild(convertContainer);
    }
}

// Загрузка на странице
window.onload = () => {
    createInputField();
    createConvertField();
    convertText();
};