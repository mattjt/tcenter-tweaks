// ==UserScript==
// @name         Big Backup
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Makes it easier to see if the user needs a data backup
// @author       ajzrcc
// @match        https://apps.rit.edu/~a-tcent/admin/ticket.php*
// @match        https://apps.rit.edu/tcenter/admin/ticket.php*
// @grant        none
// @require http://code.jquery.com/jquery-3.4.1.min.js
// ==/UserScript==
(function() {
    'use strict';
    var $ = window.jQuery;
    window.setTimeout(function(){
        $("<span id='backup'></span>").insertAfter("span.ticketName");
    }, 500);
    window.setInterval(function(){
        if($("#backup").length == 0){
            $("<span id='backup'></span>").insertAfter("span.ticketName");
        }
        var needsBackup = $("div.dataBackupView").text();
        if (needsBackup.includes("Yes")){
            $("#backup").text("Data Backup Requried").css("color", "#FF0000");
        }
        else{
            $("#backup").text("No Data Backup").css("color", "#00FF00");
        }
    }, 500);
})();
