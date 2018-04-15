/*
  Sbanken.h - Library for accessing SBanken APIs.
  Created by Nikhil André Luthra, 2018.
  http://nikhil.luthra.no / http://indern.com
*/
#ifndef Sbanken_h
#define Sbanken_h

#include "Arduino.h"

class Sbanken
{
  public:
    Sbanken(String endpoint);
    String getAccounts();
    String getAccount(String accountNumber);
    String getTransactions(String accountNumber);
    String getTransactions(String accountNumber, int limit);
  private:
    String _endpoint;
    String doRequest(String url);
};

#endif
