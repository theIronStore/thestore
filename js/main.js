// Make sure shim jQuery first
import $ from 'jquery';
import 'bootstrap-sass';

import moment from 'moment';

import angular from 'angular';
import 'angular-ui-router';
import 'angular-cookies';
import config from './config';
import HomeController from '../app/controllers/home.controller';
import sAuth from '../app/services/sauth';

angular
  .module('app', ['ui.router'])
  .config(config)
  .controller('HomeController', HomeController)
  .service('sAuth', sAuth)
  .run(['$rootScope', '$window', 'sAuth', 
  function($rootScope, $window, sAuth) {

    $rootScope.user = {};

    $window.fbAsyncInit = function() {
    // Executed when the SDK is loaded

    FB.init({ 

      /* 
       The app id of the web app;
       To register a new app visit Facebook App Dashboard
       ( https://developers.facebook.com/apps/ ) 
      */

      appId: '189347954746387', 

      /* 
       Adding a Channel File improves the performance 
       of the javascript SDK, by addressing issues 
       with cross-domain communication in certain browsers. 
      */

      channelUrl: 'app/channel.html', 

      /* 
       Set if you want to check the authentication status
       at the start up of the app 
      */

      status: true, 

      /* 
       Enable cookies to allow the server to access 
       the session 
      */

      cookie: true, 

      /* Parse XFBML */

      xfbml: true 
    });

    sAuth.watchAuthenticationStatusChange();

  };


    (function(d){
    // load the Facebook javascript SDK

    var js, 
    id = 'facebook-jssdk', 
    ref = d.getElementsByTagName('script')[0];

    if (d.getElementById(id)) {
      return;
    }

    js = d.createElement('script'); 
    js.id = id; 
    js.async = true;
    js.src = "//connect.facebook.net/en_US/all.js";

    ref.parentNode.insertBefore(js, ref);

  }(document));
  }]);