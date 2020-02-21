// ==UserScript==
// @name         MyUpdates
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Change the color of updates that YOU made to make them easier to see
// @author       ajzrcc
// @author       mjtrcc
// @match        https://apps.rit.edu/~a-tcent/admin/ticket.php*
// @match        https://apps.rit.edu/tcenter/admin/ticket.php*
// @match        https://apps.rit.edu/~a-tcent/admin/ticketList.php
// @match        https://apps.rit.edu/tcenter/admin/ticketList.php
// @grant        none
// @require http://code.jquery.com/jquery-3.4.1.min.js
// ==/UserScript==
(function() {
    'use strict';
    var $ = window.jQuery;
    let pageUrl = window.location.pathname;
    var isTicket;
    if (pageUrl.includes("/ticket.php")) {
        isTicket = true;
    } else if (pageUrl.includes("/ticketList.php")) {
        isTicket = false;
    }
    window.setInterval(function(){
        if (isTicket){
            var username = $('div.statusBar:first').text().substring(29, 35);
            $(".panel-heading-sm:contains('" + username +"')").css("color", "white").css("background-color", "#282828");
        }
        else{
            $(".ticketField:contains('" + username +"')").css("color", "green");
            $(".ticketField:contains('" + username +"')").css("font-weight", "bold");
        }
    }, 500);
})();
