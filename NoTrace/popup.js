'use strict';

/*
Open new window

chrome.windows.create({
url: chrome.runtime.getURL("file"),
type: "popup"
}, function(win) {
 win represents the Window object from windows API
 Do something after opening
});




*/




// optimisation section button
document.addEventListener('DOMContentLoaded', function() {
    var link4 = document.getElementById('optimiseSafe');
    // onClick's logic below:
    link4.addEventListener('click', function() {
        optimiseSafe();
        chrome.windows.create({
    url: chrome.runtime.getURL("optimise.html"),
    type: "popup"
  }, function(win) {
    // win represents the Window object from windows API
    // Do something after opening
  });
    });
});



// listens for the click of the clear cookie button
document.addEventListener('DOMContentLoaded', function() {
    var link3 = document.getElementById('noCookie');
    // onClick's logic below:
    link3.addEventListener('click', function() {
        clearCookie();
        chrome.windows.create({
    url: chrome.runtime.getURL("cookieCleared.html"),
    type: "popup"
  }, function(win) {
    // win represents the Window object from windows API
    // Do something after opening
  });
    });
});

//listens for button click for see history
document.addEventListener('DOMContentLoaded', function() {
    var link2 = document.getElementById('gotoHistory');
    // onClick's logic below:
    link2.addEventListener('click', function() {
        gotoHistory();
    });
});

//see History
function gotoHistory() {
      chrome.tabs.create({url: "chrome://history"});
  }


// listens for button click

document.addEventListener('DOMContentLoaded', function() {
    var link = document.getElementById('noHistory');
    // onClick's logic below:
    link.addEventListener('click', function() {
        clear();
    });
});

// gets how long a week is

var millisecondsPerWeek = 1000 * 60 * 60 * 24 * 7;
var oneWeekAgo = (new Date()).getTime() - millisecondsPerWeek;
var callback = function () {

  };

      // clears history
      function clear () {
        var historyCleared = 0;
        chrome.browsingData.remove({
          "since": oneWeekAgo
        }, {
          "appcache": false,
          "cache": false,
          "cacheStorage": false,
          "cookies": false,
          "downloads": false,
          "fileSystems": false,
          "formData": false,
          "history": true,
          "indexedDB": false,
          "localStorage": false,
          "pluginData": false,
          "passwords": false,
          "serviceWorkers": false,
          "webSQL": false
        }, callback);

      }
//clear cookies
function clearCookie () {
  var historyCleared = 0;
  chrome.browsingData.remove({
    "since": oneWeekAgo
  }, {
    "appcache": false,
    "cache": false,
    "cacheStorage": false,
    "cookies": true,
    "downloads": false,
    "fileSystems": false,
    "formData": false,
    "history": false,
    "indexedDB": false,
    "localStorage": false,
    "pluginData": false,
    "passwords": false,
    "serviceWorkers": false,
    "webSQL": false
  }, callback);

}


// optimise browser
function optimiseSafe () {
  var historyCleared = 0;
  chrome.browsingData.remove({
    "since": oneWeekAgo
  }, {
    "appcache": true,
    "cache": true,
    "cacheStorage": true,
    "cookies": false,
    "downloads": false,
    "fileSystems": false,
    "formData": false,
    "history": true,
    "indexedDB": false,
    "localStorage": false,
    "pluginData": false,
    "passwords": false,
    "serviceWorkers": false,
    "webSQL": false
  }, callback);

}
