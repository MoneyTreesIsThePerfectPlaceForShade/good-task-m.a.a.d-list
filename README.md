# good task, m.A.A.d list

## Недоработки, о которых я знаю, но пока не могу решить
- варианты в селекте на мобильных браузерах работают не так, как на компьютере - но отображают цветом. Планирую написать свой дропдаун компонент и реализовать смену цвета задачи через кнопки
- нет тестов, проблема в абсолютных импортах, jest не понимает их, решать пробовал, но так ничего и не помогло. Пока оставлю эту задачу. Можно вернуть относительные импорты, отказавшись от абсолютных, но это в крайнем случае.

Это приложение позволяет:

- создавать задачи;
- удалять задачи;
- редактировать задачи;
- фильтровать их по сделано/не сделано;
- помечать их как сделано/не сделано.

В разработке приложения я использовал:

- React;
- Redux Toolkit;
- TypeScript;
- SCSS;
- А также несколько более мелких библиотек:
  - classnames (объединение SCSS классов в JSX/TSX разметке);
  - react-icons (иконки для React);
  - react-md-editor (отображение md разметки);
  - redux-persist (хранение состояния в localStorage);
  - nanoid (создание ID);
  - craco (чтобы работали абсолютные импорты);
  - jest (unit тестировани).

Придерживался DRY, KISS, функционального программирования и Feature-Sliced Design.

Функции, описанные выше, являются функциями первой версии приложения.
Это приложение можно расширить, добавив новую функциональность, например: смена светлой и темной темы, добавление подзадач с бесконечной вложенностью.
