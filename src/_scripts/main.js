// Main javascript entry point
// Should handle bootstrapping/starting application

'use strict';
// ------------------------------
// Imports
// ------------------------------
import $ from 'jquery';
window.$ = $;

import pages from './../_data/pages.json';

// Modules

// Atoms
import Select from './../_modules/atoms/select/select';

// Molecules
import Menu from './../_modules/molecules/menu/menu';
import Search from './../_modules/molecules/search/search';

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
  let select = new Select();
  let search = new Search();
  // Home page scripts
  if (currentPage === 'home') {
    let menu = new Menu();
  }
});
