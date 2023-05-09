let field = document.querySelector('#field');
let message = document.querySelector('#message');
let cities = [];
let allCities = ['Москва', 'Воронеж', 'Новосибирск', 'Казань', 'Нижний Новгород', 'Дубай', 'Йоханнесбург'];
field.addEventListener('keypress', func)
function func(event) {
  if (event.key === 'Enter') {
    let city = field.value;
    if (cities.length === 0 || city.charAt(0).toUpperCase() === cities[cities.length - 1].charAt(cities[cities.length - 1].length - 1).toUpperCase()) {
      if (allCities.includes(city)) {
        if (!cities.includes(city)) {
          cities.push(city);
          let lastChar = city.charAt(city.length - 1).toUpperCase();
          let nextCity = '';
          for (let i = 0; i < allCities.length; i++) {
            if (allCities[i].charAt(0).toUpperCase() === lastChar && !cities.includes(allCities[i])) {
              nextCity = allCities[i];
              break;
            }
          }
          if (nextCity === '') {
            message.textContent = 'Я не знаю города на букву "' + lastChar.toLowerCase() + '". Ты выиграл!';
            field.disabled = true;
          } else {
            cities.push(nextCity);
            message.textContent = 'Мой город - "' + nextCity + '". Твой ход.';
            field.value = '';
          }
        } else {
          message.textContent = 'Этот город уже был назван. Попробуй еще раз.';
          field.value = '';
        }
      } else {
        message.textContent = 'Я не знаю такого города. Попробуй еще раз.';
        field.value = '';
      }
    } else {
      message.textContent = 'Ты должен назвать город на букву "' + cities[cities.length - 1].charAt(cities[cities.length - 1].length - 1).toLowerCase() + '". Попробуй еще раз.';
      field.value = '';
    }
  }
}