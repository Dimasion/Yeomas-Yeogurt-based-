// Main javascript entry point
// Should handle bootstrapping/starting application

'use strict';
// ------------------------------
// Imports
// ------------------------------
import $ from 'jquery';
window.$ = $;
// import pages from './../_data/pages.json';
require('waypoints/lib/noframework.waypoints.js');
// Modules

// Atoms
import Select from './../_modules/atoms/select/select';
import Range from './../_modules/atoms/range/range';

// Molecules
import Menu from './../_modules/molecules/menu/menu';
import Search from './../_modules/molecules/search/search';
import Item from './../_modules/molecules/item/item';
import Up from './../_modules/molecules/up/up';

// Organisms
import Filter from './../_modules/organisms/filter/filter';
import Partners from './../_modules/organisms/partners/partners';
// ------------------------------
// Additional functionality
// ------------------------------

// Crossbrowser plugin for icons
import svg4everybody from 'svg4everybody/dist/svg4everybody.legacy.js';
svg4everybody();

// Data pages
let currentPage = $('body').data('page');

// ------------------------------
// Initialization modules
// ------------------------------

$(() => {
  // Common scripts
  new Select();
  new Search();
  new Item();
  new Up();
  new Partners();

  // rangeTabs.init();
  new Filter();

  let range = new Range();
});
