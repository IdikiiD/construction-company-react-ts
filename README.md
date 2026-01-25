# 🏗️ Construction Company Website

Современный веб-сайт строительной компании с формами обратной связи и галереей работ.

[![Deployed on GitHub Pages](https://img.shields.io/badge/Deployed-GitHub%20Pages-blue)](https://idikiid.github.io/construction-company-react-ts/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-blue)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-19.2-61dafb)](https://reactjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38bdf8)](https://tailwindcss.com/)

## 🚀 Демо

[**Посмотреть сайт →**](https://idikiid.github.io/construction-company-react-ts/)

## ✨ Возможности

- 🎨 Современный дизайн с Tailwind CSS
- 📱 Полностью адаптивная верстка
- 🖼️ Галерея выполненных работ
- 📝 Форма обратной связи
- 🔒 Валидация форм с react-hook-form
- ⚡ Быстрая загрузка и оптимизация
- 🌐 SEO-оптимизация

## 🛠️ Технологии

### Frontend
- **React 19.2** - UI библиотека
- **TypeScript 5.9** - типизация
- **Tailwind CSS 3.4** - стилизация
- **Vite 7** - сборщик
- **React Hook Form** - управление формами
- **Lucide React** - иконки

### Backend
- **Node.js** - серверная платформа
- **Express 5** - веб-фреймворк
- **TypeScript** - типизация сервера
- **CORS** - кросс-доменные запросы

## 📦 Установка и запуск

### Предварительные требования

- Node.js >= 18
- npm или yarn

### Клонирование репозитория
```bash
git clone https://github.com/idikiid/construction-company-react-ts.git
cd construction-company-react-ts
```

### Установка зависимостей
```bash
npm install
```

### Запуск в режиме разработки

**Frontend:**
```bash
npm run dev
```
Откроется на `http://localhost:5173`

**Backend (опционально):**
```bash
npm run dev-server
```
API будет доступно на `http://localhost:3000`

### Сборка для production
```bash
npm run build
```

Результат сборки будет в папке `dist/`

### Предварительный просмотр production сборки
```bash
npm run preview
```

## 🚀 Деплой

### GitHub Pages
```bash
npm run deploy
```

Сайт автоматически опубликуется на GitHub Pages.

### Другие платформы

**Vercel:**
```bash
npm i -g vercel
vercel
```

**Netlify:**
```bash
npm i -g netlify-cli
netlify deploy --prod
```

## 📁 Структура проекта
```
construction-company-react-ts/
├── public/              # Статические файлы
│   └── img/            # Изображения
├── src/
│   ├── api/            # API клиенты
│   ├── app/            # Главный компонент приложения
│   ├── assets/         # Ассеты (SVG и т.д.)
│   ├── components/     # Переиспользуемые компоненты
│   ├── data/           # Данные и константы
│   ├── hooks/          # Кастомные React хуки
│   ├── img/            # Изображения компонентов
│   ├── pages/          # Страницы приложения
│   ├── sections/       # Секции страниц
│   ├── server/         # Backend сервер
│   └── main.tsx        # Точка входа
├── types/              # TypeScript типы
├── .gitignore
├── package.json
├── tsconfig.json       # Конфигурация TypeScript
├── vite.config.ts      # Конфигурация Vite
└── tailwind.config.js  # Конфигурация Tailwind
```

## 🔧 Конфигурация

### Переменные окружения

Создайте `.env.production` для production:
```env
VITE_API_URL=https://your-api-url.com
```

### Vite конфигурация

Настройки находятся в `vite.config.ts`:
- Path aliasing (`@/` указывает на `src/`)
- Proxy для API запросов в dev режиме
- Base URL для GitHub Pages

## 📝 Скрипты

| Команда | Описание |
|---------|----------|
| `npm run dev` | Запуск dev сервера |
| `npm run build` | Сборка для production |
| `npm run preview` | Предпросмотр production сборки |
| `npm run deploy` | Деплой на GitHub Pages |
| `npm run dev-server` | Запуск backend сервера |
| `npm run lint` | Проверка кода ESLint |

## 🤝 Контрибуция

1. Форкните репозиторий
2. Создайте ветку для фичи (`git checkout -b feature/AmazingFeature`)
3. Закоммитьте изменения (`git commit -m 'Add some AmazingFeature'`)
4. Запушьте в ветку (`git push origin feature/AmazingFeature`)
5. Откройте Pull Request

## 📄 Лицензия

Этот проект лицензирован под MIT License.

## 👤 Автор

**idikiid**

- GitHub: [@idikiid](https://github.com/idikiid)
- Website: [https://idikiid.github.io/construction-company-react-ts/](https://idikiid.github.io/construction-company-react-ts/)

## 🙏 Благодарности

- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Lucide Icons](https://lucide.dev/)

---

⭐ Если проект вам понравился, поставьте звезду!
