const MAX_ITEMS = 4;

const itemButtons = document.querySelectorAll('.button');
let currentItemsNumber = 0;

// При клике на кнопку (i).
function onButtonClick(i) {
  return () => {
    // Если кнопка активна.
    if (itemButtons[i].classList.contains('button--active')) {
      // Снимаем класс активности.
      itemButtons[i].classList.remove('button--active');
      // Уменьшаем количество выбранных кнопок на 1.
      currentItemsNumber = currentItemsNumber - 1;
      // Если текущее количество выбранных кнопок меньше максимального - активируем все неактивные кнопки.
      if (currentItemsNumber < MAX_ITEMS) {
        itemButtons.forEach(item => {
          if (!item.classList.contains('button--active')) {
            item.removeAttribute('disabled');
          }
        })
      }



    // Если кнопка неактивна (нет класса активности).
    } else {


      // Добавляем класс активности текущей кнопке.
      itemButtons[i].classList.add('button--active');

      // Количество нажатых кнопок увеличиваем на 1.
      currentItemsNumber = currentItemsNumber + 1;

      // Если количество равно максимальному -> деактивируем все неактивные кнопки.
      if (currentItemsNumber === MAX_ITEMS) {
        itemButtons.forEach(item => {
          if (!item.classList.contains('button--active')) {
            item.setAttribute('disabled', '');
          }
        })
      }
    }
  }
}

// Навешиваем действие при клике на все кнопки.
for (let i = 0; i < itemButtons.length; i++) {
  itemButtons[i].addEventListener('click', onButtonClick(i));
}