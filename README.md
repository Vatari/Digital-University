# My Angular Project for Softuni exam - 18.12.2022

ENG-version

Simple website for creating paid learning courses and modules.  
It uses own REST server and MongoDB Atlas as database for the backend.

Supported functionality: login, register, logout, create, delete, like
Authorization for users in session uses JWT token. Passwords for users are stored hashed in database using Bcrypt.

package.json for client installs Angular client

package.json for server install Express and some other libraries nedeed

Live demo here: http://85.130.7.156:2210

Local installation:

1. Download zipped folder
2. Unzip and open terminal in this folder
3. Enter server folder and run npm i
4. Run: npm start / in the same folder (this will start REST service)
5. Go back to root directory folder in terminal.
6. Run: npm i (this will install Angular client)
7. Run: ng s (this will start Angular client) and wait a bit until it loads
8. Open browser at http://localhost:4200 or http://127.0.0.1:4200
9. REST server is running on port 4000 (be sure the port is not used by some other application)
10. Enjoy

Author: Petar Zhelev

---

# Angular Проект за изпит на Софтуни 18.12.2022г.

БГ-версия

Обикновен уебсайт за създаване на платени курсове и модули.
Използва собствен REST сървър и отдалечена база данни (MongoDB Atlas)

Поддържат се следните функционалности: автентикация, регистрация, изход, създаване, изтриване, харесване.
За автентикация на потребителите в сесията се използва JWT токен. Паролите се съхраняват в хеширан вид със Bcrypt

package.json за клиента инсталира Angular клиента

package.json за сървъра инсталира Express и някой други нужни библиотеки

Демо на сайта може да откриете тук: http://85.130.7.156:2210

Локална инсталация

1. Свалете цялата папка в ZIP
2. Разархивирайте и отворете терминал в тази папка
3. Влезте в папка server и стартирайте: npm i
4. Стартирайте: npm start / в същата папка (това ще стартира REST услугата)
5. Върнете се назад до главната папка през терминала.
6. Стартирайте: npm i (това ще инсталира Angular клиента)
7. Стартирайте: ng s (това ще стартира Angular клиента) и изчакайте малко докато зареди
8. Отворете браузъра на следния адрес: http://localhost:4200 или http://127.0.0.1:4200
9. REST сървъра използва порт 4000 (уверете се, че порта е свободен и не се ползва от някое друго приложение)
10. Забавлявайте се

Автор: Петър Желев
