/*
  Sbanken.cpp - Library for accessing SBanken APIs.
  Created by Nikhil André Luthra, 2018.
  http://nikhil.luthra.no / http://indern.com
*/

#include <Arduino.h>
#include "Sbanken.h"
#include <ESP8266HTTPClient.h>

HTTPClient _SbankenHTTP;

Sbanken::Sbanken(String endpoint){
  _endpoint = endpoint;
}

String Sbanken::doRequest(String endpoint){

    _SbankenHTTP.begin(_endpoint + endpoint);
    int httpCode = _SbankenHTTP.GET();

    if (httpCode > 0) {
      String payload = _SbankenHTTP.getString();
      return payload;
    }

    _SbankenHTTP.end();
}

String Sbanken::getAccounts()
{
  return doRequest("/api/getAccounts");
}

String Sbanken::getAccount(String accountNumber)
{
  return doRequest("/api/account/" + accountNumber);
}

String Sbanken::getTransactions(String accountNumber)
{
  return doRequest("/api/transactions/" + accountNumber);
}

String Sbanken::getTransactions(String accountNumber, int limit)
{
  return doRequest("/api/transactions/" + accountNumber + "/" + limit);
}


