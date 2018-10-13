// Author: Sean Pesce

const authorWebsiteUrl = 'https://SeanPesce.github.io';
const buttonsDiv = document.getElementById('download_button');
const btMedia = document.getElementById('direct_media');
const noVidLbl = document.getElementById('no_media');
const authorWebsiteLink = document.getElementById('author_website');

authorWebsiteLink.onclick = function(element) {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.executeScript(
          tabs[0].id,
          {code: 'window.location.href = "' + authorWebsiteUrl + '";'});
    });
  };

btMedia.onclick = function(element) {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.executeScript(
          tabs[0].id,
          {file: 'get-media.js'});
    });
  };
