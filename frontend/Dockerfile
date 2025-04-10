FROM node:20-alpine

# Рабочая директория
WORKDIR /app

# Копируем зависимости
COPY package*.json ./

# Устанавливаем зависимости
RUN npm install

# Копируем остальные файлы
COPY . .

# Указываем порт
EXPOSE 3000

# Запускаем приложение
CMD ["npm", "start"]
