// timer.js
// (Это пример таймера, который работает в браузере)

// Функция для обновления таймера
function updateTimer() {
  // Получаем текущую дату и время
  const now = new Date();
  // Получаем время, прошедшее с начала таймера
  const elapsedTime = now - startDate;
  
  // Вычисляем компоненты таймера 
  const years = Math.floor(elapsedTime / (1000 * 60 * 60 * 24 * 365));
  const months = years * 12 + Math.floor((elapsedTime % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30)); // Приблизительное значение
  const weeks = Math.floor(elapsedTime / (1000 * 60 * 60 * 24 * 7));
  const days = Math.floor(elapsedTime / (1000 * 60 * 60 * 24));
  const hours = Math.floor(elapsedTime / (1000 * 60 * 60));
  const minutes = Math.floor(elapsedTime / (1000 * 60));
  const seconds = Math.floor(elapsedTime / 1000);

  // Обновляем текст элемента таймера
  timerElement.innerHTML = 
    years + " год" + (years > 1 ? 'а' : '') + "<br>" + 
    "Это " + months + " месяцев" + (months > 1 ? '' : '') + "<br>" +
    "Это " + weeks + " недель" + (weeks > 1 ? '' : '') + "<br>" +
    "Это " + days + " дней" + (days > 1 ? ' ' : '') + "<br>" + 
    "Это " + hours + " час" + (hours > 1 ? 'а' : '') + "<br>" +
    "Это " + minutes + " минут" + (minutes > 1 ? 'ы' : '') + "<br>" +
    "Это " + seconds + " секунд" + (seconds > 1 ? 'ы' : '');
}

// Создаем элемент таймера
const timerElement = document.createElement('div');
timerElement.id = 'timer';

// Устанавливаем начальную дату таймера
const startDate = new Date(2022, 5, 14); // Месяц в JavaScript нумеруется с 0 (Январь = 0, Июнь = 5)

// Добавляем элемент таймера на страницу
document.body.appendChild(timerElement);

// Запускаем обновление таймера каждую секунду
setInterval(updateTimer, 1000);