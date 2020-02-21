// ==UserScript==
// @name         TicketOpened
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Replaces the "Customer Needs to be Contacted" text with the ticket opened date
// @author       ajzrcc
// @match        https://apps.rit.edu/~a-tcent/admin/ticket.php*
// @match        https://apps.rit.edu/tcenter/admin/ticket.php*
// @grant        none
// @require http://code.jquery.com/jquery-3.4.1.min.js
// ==/UserScript==
(function() {
    'use strict';
    var $ = window.jQuery;
    window.setInterval(function(){
        var creationDate = $("div.col-xs-8:contains(':')").text();
        $("#contactAlert").text("Ticket Opened: " + creationDate);
    }, 500);
})();
