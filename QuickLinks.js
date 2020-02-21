// ==UserScript==
// @name         Quick Links
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Add more options to the quick links area
// @author       mjtrcc
// @match        https://apps.rit.edu/~a-tcent/admin/ticket.php*
// @match        https://apps.rit.edu/tcenter/admin/ticket.php*
// @grant        none
// @require http://code.jquery.com/jquery-3.4.1.min.js
// ==/UserScript==
(function() {
    'use strict';
    var $ = window.jQuery;
    window.setInterval(function(){
        $(".technet-link").replaceWith("<span id='quickLinks' class='pull-right'></span>");
        let quickLinks = $("#quickLinks");
        if (quickLinks.children().length === 0) {
            quickLinks.append("<a href='https://docs.google.com/spreadsheets/d/1n_rkkzqx47_lH4uUVz_b3JEkAMR0zbUAlmEdHJJscjY/edit?usp=sharing' target='_blank'>App. ADM Access</a>");
            quickLinks.append("<span>&nbsp;-&nbsp;</span>");
            quickLinks.append("<a href='https://adsccm01.ad.rit.edu/Reports/Pages/Report.aspx?ItemPath=%2fConfigMgr_AD1%2fInformation+and+Technology+Services%2fLocal+administrators+on+a+specific+computer&ViewMode=Detail' target='_blank'>LADM</a>");
            quickLinks.append("<span>&nbsp;-&nbsp;</span>");
            quickLinks.append("<a href='https://adsccm01.ad.rit.edu/Reports/Pages/Report.aspx?ItemPath=%2fConfigMgr_AD1%2fInformation+and+Technology+Services%2fLocal+administrators+on+a+specific+computer&ViewMode=Detail' target='_blank'>SP Software</a>");
        }
    }, 500);
})();
