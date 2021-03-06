// ==UserScript==
// @author tehmang
// @name         covid form id auto fill
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  auto fill covid form id fields
// @author       Me
// @icon         https://avatars3.githubusercontent.com/u/22746543?s=60&v=4
// @match        https://media.interieur.gouv.fr/deplacement-covid-19/
// @grant        none
// @copyright    none
// @licence      none
// @updateURL    https://openuserjs.org/meta/tehmang/My_Script.meta.js
// @homepageURL  https://github.com/tehmang/covid-fill
// @supportURL   https://github.com/tehmang/covid-fill
// @contributionURL https://github.com/tehmang/covid-fill
// ==/UserScript==

(function() {
    'use strict';
    function generate(name)
    {
        for(var key in data[name])
        {
            var value = data[name][key];
            document.getElementById(key).value = value;
        }
    }
    function addButton(label)
    {
        var btn = document.createElement("BUTTON");
        btn.innerHTML = label;
        btn.addEventListener('click', function() {
           generate(label);
        }, false);
        document.getElementById("form-profile").insertBefore(btn, document.body.getElementsByClassName("form-group")[0]);
    }
    var data= {
        "ButtonLabel":
        {
            "field-firstname": "YourFirstName",
            "field-lastname": "YourLastNam",
            "field-birthday": "01/10/1970",
            "field-placeofbirth": "YourPlaceOfBirth",
            "field-address": "YourStreet",
            "field-city":"YourCity",
            "field-zipcode":"YourZipCode"
        }
    }
    for(var label in data)
    {
        addButton(label);
    }
})();