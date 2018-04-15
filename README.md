# sbanken-library

Sbanken library is built while playing with the sbanken API. 

THIS IS WORK IN PROGRESS / PROOF OF CONCEPT!!

Warning: Only HTTP for now! So use at your own risk.

Right now you get all JSON data provided by api returned to your MCU. You should probably adapt the API so it only returns the data you actually need.

###Install:

Install library by adding the folder sbanken-esp8266 to your Arduino library folder.

You should be able to see it on Arduino IDE --> Sketch --> Include Library --> sbanken-library


###Use:

Run API (sbanken-node-api) which you library will use by doing this:
1. Edit service/credentials.js and supply your client credentials + userid
2. npm install
3. npm run start

This API is based on node example from official examples here: https://github.com/Sbanken/api-examples.  

I choose to build upon the node api-examples, either running it locally or deploying it to DigitalOcean or some other service like that.

Initialize library in Arduino sketch with URL to API. 

Sbanken sbanken("http://192.168.1.112:3001"); ` Remember to add protocol!


Again: this library does not communicate directly with Sbanken. You need to setup and run sbanken-api. Look into Sbanken GitHub or use modified api in this repo.


#####Endpoints

`sbanken.getAccounts()`

`sbanken.getAccount(String accountNumber)`

`sbanken.getTransactions(String accountNumber)`

`sbanken.getTransactions(String accountNumber, int limit)`
