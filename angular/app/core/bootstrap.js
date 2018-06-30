/*jshint browser:true */
'use strict';  
require('angular');
require('angular-route');
require('angular-animate');
require('../index.css');
require('../css/navbar.css');
require('../css/common.css');
var appModule = require('../index'); 
angular.element(document).ready(function () {  
  angular.bootstrap(document, [appModule.name], {
      
  });
});