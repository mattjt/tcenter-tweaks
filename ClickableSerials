// ==UserScript==
// @name         ClickableSerials
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Lets you click Dell and Mac serial tags and sends them to Ultimate Mac Lookup or the Dell Support page respectively.
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
        var serialTag = $(".serial").text();
        var description = $("div.description").text();
        if(description.toUpperCase().includes("MAC")){
            $(".serial").html("<a href='https://everymac.com/ultimate-mac-lookup/?search_keywords=" + serialTag + "'>" + serialTag + "</a>");
        }
        else{
            $(".serial").html("<a href='https://www.dell.com/support/home/us/en/04/product-support/servicetag/" + serialTag + "' target='_blank'>" + serialTag + "</a>");
        }
    }, 500);
})();
