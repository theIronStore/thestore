// Make sure shim jQuery first
import $ from 'jquery';
import 'bootstrap-sass';

import moment from 'moment';

import angular from 'angular';
import 'angular-ui-router';
import 'angular-cookies';
import config from './config';

import PostController from './postItemController';
import PostService from './postItemService';

angular
  .module('app', ['ui.router', 'ngCookies'])
  .controller('PostController', PostController)
  .service('PostService', PostService)
  .config(config);

