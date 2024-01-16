# nodeServiceShoppingList
A node.js service that fetches data from MySQL DB for user usage

Versions:
node: 18.17.1
npm: 9.6.7
IDE: Visual Studio Code

first step for running the procjet is to clone the repository from github:
open cmd from the desired folder you want to save to project to and run the command "git clone https://github.com/amirm363/nodeServiceShoppingList.git"

Then open the project in VSC.
you should first create a .env file at the root directory and populate it with this connection data so the server will be able to connect with the database:
PORT=4000
RDS_ENDPOINT=shoppinglist.coo8a2vfng65.us-east-1.rds.amazonaws.com
RDS_PORT=3306
DB_NAME=shoppingList
DB_USER=amirmeisner
DB_PASSWORD=amirm363

Next step is to run in the terminal "npm i" to install all the dpendencies.

To start the server run npm start, and you should see a console log saying:
'Server running on port 4000'.

Now the server is up and ready to get requests from the client.
