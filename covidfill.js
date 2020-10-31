// ==UserScript==
// @name         covid form id auto fill
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  auto fill covid form id fields
// @author       You
// @match        https://media.interieur.gouv.fr/deplacement-covid-19/
// @grant        none
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