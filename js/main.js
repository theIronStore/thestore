// Make sure shim jQuery first
import $ from 'jquery';
import 'bootstrap-sass';

import moment from 'moment';

import angular from 'angular';
import 'angular-ui-router';
import 'angular-cookies';
import config from './config';

angular
  .module('app', ['ui.router'])
  .config(config);
