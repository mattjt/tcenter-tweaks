// ==UserScript==
// @name         Distraction Free Homepage
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  make tcenter less bad
// @author       mjtrcc
// @match        https://apps.rit.edu/~a-tcent/admin/ticketList.php
// @match        https://apps.rit.edu/tcenter/admin/ticketList.php
// @grant        none
// @require http://code.jquery.com/jquery-3.4.1.min.js
// ==/UserScript==
(function() {
    'use strict';
    var $ = window.jQuery;
    window.setInterval(function(){
        $('.glyphicon-alert').hide();
        $( "span:contains('Overdue')" ).hide();
        $('#needsAttn').hide();
        $('.waitTime').text("");
        $( "span:contains('F&A Cascade')" ).hide();
        $( "span:contains('Ind. Cascade')" ).hide();
        $( "span:contains('Due')" ).hide();
    }, 500);
})();
