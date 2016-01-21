exports.config = {

  directConnect: true,

  specs: [
    'api.spec.js'
  ],

  capabilities: {

    'browserName': 'chrome'

  },

  baseUrl: 'http://angular.github.io/',

  onPrepare: function() {

    browser.driver.manage().window().maximize();

  }

};
