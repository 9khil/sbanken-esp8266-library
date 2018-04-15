var express = require('express');
var router = express.Router();

var service = require('../service/sbankenapi');

router.get('/api/getAccounts', function(req, res, next) {
  service.getAccessToken().then(data => {
    console.log('Key: ', data);
    service.getAccountDetails(data.access_token).then(accountData => {
      console.log('Account data: ', accountData);
      res.json(accountData);
    }, error => {
      res.json({});
    });
  }, error => {
    res.json({});
  });
});

router.get('/api/account/:number', function(req, res, next) {
  service.getAccessToken().then(data => {
    console.log('Key: ', data);
    service.getAccountNumberDetails( req.params.number, data.access_token).then(accountDetails => {
      console.log('Account Details: ', accountDetails);
      res.json(accountDetails);
    }, error => {
      res.json({});
    });
  }, error => {
    res.json({});
  });
});

router.get('/api/transactions/:accountnumber', function(req, res, next) {
  service.getAccessToken().then(data => {
    console.log('Key: ', data);
    service.getAccountTransactions( req.params.accountnumber, data.access_token).then(transactions => {
      console.log('Account Transactions: ', transactions);
      res.json(transactions);
    }, error => {
      res.json({});
    });
  }, error => {
    res.json({});
  });
});

router.get('/api/transactions/:accountnumber/:limit', function(req, res, next) {
    service.getAccessToken().then(data => {
        console.log('Key: ', data);
    service.getAccountTransactions( req.params.accountnumber, data.access_token, req.params.limit).then(transactions => {
        console.log('Account Transactions: ', transactions);
    res.json(transactions);
}, error => {
        res.json({});
    });
}, error => {
        res.json({});
    });
});

function padLeft(nr, n, str){ //used to format values for 7-segment 8 digit display
    return Array(n-String(nr).length+1).join(str||'0')+nr;
}


module.exports = router;
