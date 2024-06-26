## Создание адаптивной страницы, содержащую шапку, контент и футер

Шаг 1: Создание HTML-структуры

Сначала создайте базовую структуру вашего HTML-документа. Используйте семантические элементы HTML5, такие как `<header>`, `<footer>`, `<main>` и `<article>`.
```html
<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Новостная страница</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
<header>
    <!-- Здесь будет шапка сайта -->
</header>

<main>
    <!-- Здесь будет основной контент сайта -->
</main>

<footer>
    <!-- Здесь будет футер сайта -->
</footer>
</body>
</html>
```

Шаг 2: Добавление содержимого в шапку

Внутри элемента `<header>`, добавьте логотип и навигационное меню.

```html
<header>
    <div class="logo">Логотип</div>
    <nav>
        <ul>
            <li><a href="#">Главная</a></li>
            <li><a href="#">Новости</a></li>
            <li><a href="#">Контакты</a></li>
        </ul>
    </nav>
</header>
```

Шаг 3: Добавление основного контента

Внутри элемента `<main>`, добавьте карточки новостей. Каждая карточка может быть структурирована с использованием элемента `<article>`.

```html
<main>
    <article class="news-card">
        <h2>Заголовок новости</h2>
        <p>Текст новости...</p>
    </article>

    <!-- Добавьте столько карточек новостей, сколько вам нужно -->
</main>
```

Шаг 4: Добавление футера

Внутри элемента `<footer>`, добавьте информацию о копирайте.

```html
<footer>
    <p>© 2024 Ваш сайт</p>
</footer>
```

Шаг 5: Создание CSS

Теперь, когда у вас есть структура HTML, начните стилизацию вашей страницы с использованием CSS. Создайте файл `styles.css` и подключите его к вашему HTML-документу с помощью тега `<link>` в `<head>`.
```css
/* обнуление стилей */
* {
    padding: 0;
    margin: 0;
}

/* контент на всю высоту экрана */
body {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    font-family: Arial, sans-serif;
}
```

1. Шапка (header):
```css
header {
    background-color: #f8f9fa;
    border-bottom: 1px solid #dee2e6;
    padding: 20px;
}

.logo {
    font-size: 1.5em;
    font-weight: bold;
}

nav ul {
    display: flex;
    gap: 20px;
}

nav a {
    text-decoration: none;
    color: #000;
}
```
2. Основной контент (main):
```css
main {
    flex: 1 0 auto; /* используем flexbox, чтобы основной контент занимал все доступное пространство */
    padding: 20px; /* добавляем отступы внутри основного контента */
    display: flex; /* используем flexbox для расположения карточек новостей в ряд */
    flex-wrap: wrap; /* разрешаем перенос элементов на новую строку, если они не помещаются */
    gap: 20px; /* добавляем промежутки между карточками новостей */
}

.news-card {
    flex: 1 0 200px; /* используем flexbox, чтобы карточки новостей занимали все доступное пространство, но были не меньше 200px */
    border: 1px solid #dee2e6; /* добавляем границу вокруг карточек новостей */
    padding: 20px; /* добавляем отступы внутри карточек новостей */
    box-shadow: 0 0 10px rgba(0,0,0,0.1); /* добавляем тень вокруг карточек новостей */
}

.news-card h2 {
    margin: 0 0 10px 0; /* добавляем отступ снизу у заголовков новостей */
}
```
3. Подвал (footer):
```css
footer {
    flex-shrink: 0; /* предотвращаем сжатие подвала, если контент занимает все пространство */
    background-color: #f8f9fa; /* задаем фоновый цвет подвала */
    border-top: 1px solid #dee2e6; /* добавляем границу сверху */
    padding: 20px 0; /* добавляем отступы внутри подвала */
    text-align: center; /* выравниваем текст по центру */
}
```
4. Адаптивность, если максимальная ширина экрана будет 600px, то с помощью кода ниже, вы можете переопределять стили
```css
@media (max-width: 600px) {
    h2 {
        font-size: 18px;
    }

    .news-card {
        flex: 1 0 100%;
    }
    
}
```


Задачка со свездочкой: Используя данный макет с фигмы, реализуйте страничку, используя HTML и CSS
https://www.figma.com/file/fG61Ja1ye0jtkKbuvt9OR0/%D0%9A%D0%BE%D0%BB%D0%BB%D0%B5%D0%BA%D1%86%D0%B8%D1%8F-%D0%BF%D1%80%D0%B8%D1%80%D0%BE%D0%B4%D0%BD%D1%8B%D1%85-%D0%B0%D1%80%D1%82%D0%B5%D1%84%D0%B0%D0%BA%D1%82%D0%BE%D0%B2?type=design&node-id=0-1&mode=design&t=zrR0jndxD90OLzVh-0
