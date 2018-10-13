/*
    Author: Sean Pesce
    
    References:
        https://developer.chrome.com/extensions/getstarted
        https://developer.chrome.com/extensions/examples/tutorials/get_started/background.js
        
    License:
        https://github.com/chromium/chromium/blob/master/LICENSE
*/

'use strict';

chrome.runtime.onInstalled.addListener(function() {

  chrome.storage.sync.set({color: '#3aa757'}, function() {
    console.log('\n  +--------------------------+\n  | Instagram Video URL Grabber |\n  |    Author: Sean Pesce    |\n  +--------------------------+\n\n');
  });

  chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
    chrome.declarativeContent.onPageChanged.addRules([{
      conditions: [new chrome.declarativeContent.PageStateMatcher({
        pageUrl: {hostEquals: 'www.instagram.com'},
      })
      ],
          actions: [new chrome.declarativeContent.ShowPageAction()]
      }]);
    });

});
