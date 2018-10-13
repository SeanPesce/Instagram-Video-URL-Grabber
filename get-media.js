// Author: Sean Pesce

// Attempt to get the direct URL of the video
function getVid() {
  const titleElements = document.getElementsByTagName('VIDEO');
  let url = '';
  
  if (titleElements.length > 0) {
      url = titleElements[0].src;
  }
  if (url.length > 0) {
    window.location.href = url;
  } else {
      console.log("[Instagram Video URL Grabber] Failed to locate media");
  }
}

getVid();
