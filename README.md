# My Angular Project for Softuni (https://softuni.bg/) exam - 18.12.2022

EN-version

Simple website for creating paid learning courses and modules.  
It uses own REST server and MongoDB Atlas as database for the backend.

Supported functionality: login, register, logout, create, delete, like. There is one test user which you can use to explore the app functionality
without registration: test / test1234. Only the creator can delete it's own module and logged users can like module (only once).
Authorization for users in session uses JWT token. Passwords for users are stored hashed in database using Bcrypt.

package.json for client installs Angular client

package.json for server install Express and some other libraries nedeed

Required version of NodeJS: 16.18.0

Live demo here: http://b8e00a7b5ca8.sn.mynetname.net:11180

Local installation:

1. Download zipped folder
2. Install Angular/cli globally: npm install -g @angular/cli@latest
3. Unzip and open terminal in this folder
4. Enter server folder and run npm i
5. Run: npm start / in the same folder (this will start REST service)
6. Open new terminal in root directory.
7. Run: npm i (this will install Angular client)
8. Run: ng s (this will start Angular client) and wait a bit until it loads
9. Open browser at http://localhost:4200 or http://127.0.0.1:4200
10. REST server is running on port 4000 (ensure the port is not used by some other application)
11. Enjoy

Author: Petar Zhelev

---

# Angular Проект за изпит на Софтуни (https://softuni.bg/) - 18.12.2022г.

БГ-версия

Обикновен уебсайт за създаване на платени курсове и модули.
Използва собствен REST сървър и отдалечена база данни (MongoDB Atlas)

Поддържат се следните функционалности: автентикация, регистрация, изход, създаване, изтриване, харесване. Има един тестов потребител,
който може да използвате за да разгледате функционалността на приложението без регистрация: test / test1234. Само създателя на модул може да изтрива неговите модули.
Потребителите, които са логнати могат да харесват модул (само веднъж).
За автентикация на потребителите в сесията се използва JWT токен. Паролите се съхраняват в хеширан вид с Bcrypt

Версия на NodeJS: 16.18.0

package.json за клиента инсталира Angular клиента

package.json за сървъра инсталира Express и някои други нужни библиотеки

Демо на сайта може да откриете тук: http://b8e00a7b5ca8.sn.mynetname.net:11180

Локална инсталация

1. Свалете цялата папка в ZIP
2. Инсталирайте Angular/cli глобално: npm install -g @angular/cli@latest
3. Разархивирайте и отворете терминал в тази папка
4. Влезте в папка server и стартирайте: npm i
5. Стартирайте: npm start / в същата папка (това ще стартира REST услугата)
6. Върнете се в главната папка с нов терминал.
7. Стартирайте: npm i (това ще инсталира Angular клиента)
8. Стартирайте: ng s (това ще стартира Angular клиента) и изчакайте малко докато зареди
9. Отворете браузъра на следния адрес: http://localhost:4200 или http://127.0.0.1:4200
10. REST сървъра използва порт 4000 (уверете се, че порта е свободен и не се ползва от някое друго приложение)
11. Забавлявайте се

Автор: Петър Желев
