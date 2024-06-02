const monthNames = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];
const weekDays = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];

function showDate() {
    let out = document.getElementById('current-date');
    let today = new Date();
    out.innerHTML = `Дата и время для русской локали: ${today.toLocaleString('ru-RU')}<br>
                    Дата и время для корейской локали: ${today.toLocaleString('ko-KR')}<br>                                 
                    Дата и время для французской локали: ${today.toLocaleString('fr-LU')}<br>         
                    Дата и время для испанской локали: ${today.toLocaleString('es-CL')}<br>
                    Дата и время для австралийской локали: ${today.toLocaleString('en-AU')}<br>
                    Дата и время для американской локали: ${today.toLocaleString('en-US')}<br>
                    Дата и время для немецской локали: ${today.toLocaleString('de-DE')}<br>`;

    let date = document.getElementById('date');
    date.innerHTML = `Текущий день: ${today.getDate()}<br>
                    Текущий месяц: ${monthNames[today.getMonth()]}<br>
                    Текущий год: ${today.getFullYear()}<br>
                    Текущий день недели: ${weekDays[today.getDay()]}`;
}

function getWeekDay() {
    let day = document.getElementById('day').value;
    let month = document.getElementById('month').value - 1;
    let year = document.getElementById('year').value;
    if (!isValidNumber(day, 1, 31) || !isValidNumber(month, 0, 11) || !isValidNumber(year, 1699, 2024)) {
        document.getElementById('getWeekDay').innerText = "Некорректные данные, день от 1 до 31, месяц от 1 до 12 и год от 1699г";
        return;
    }

    let date = new Date(year, month, day);
    let getDay = date.getDay();
    document.getElementById('getWeekDay').textContent = `День недели: ${weekDays[getDay]}`;
}

function isValidNumber(value, min, max) {
    return !isNaN(value) && value >= min && value <= max;
}