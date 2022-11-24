# My Angular Project for Softuni exam

Simple website for creating learning courses and modules.  
It uses own REST server and MongoDB Atlas as database for the backend.

Supported functionality: login, register, logout, create, delete, like
Authorization for users uses JWT token. Passwords for users are stored hashed in database using Bcrypt.

package.json for client installs Angular client

package.json for server install express and some other libraries nedeed

live demo: http://85.130.7.156:2210

Local installation:

1. Download zipped folder
2. open server folder and run npm i
3. run: npm start / in the same folder (this will start REST service)
4. go back to root directory folder in terminal.
5. run: npm i (this will install Angular client)
6. run: ng s (this will start Angular client)
7. open browser at http://localhost:4200 or http://127.0.0.1:4200
8. REST server is running on port 4000 (be sure the port is not used by some other application)
9. enjoy
