
app.factory("PortfolioService", ['$http', function ($http) {
  return {
    message: function (message) {
      console.log(message, 'message ready');
      $http.post('https://api.sendgrid.com/api/mail.send.json',
      {
        api_user: SENDGRID_USERNAME,
        api_key: SENDGRID_PASSWORD,
        to: TO,
        toname: 'Claire',
        subject: message.subject,
        text: 'notsure',
        from: message.email
      }
    }
  }
}])
