let state = false;

chrome.browserAction.onClicked.addListener(function(tab) {
  if (!state) {
    chrome.tabs.onUpdated.addListener() {
	for (var i=0; i<document.getElementsByTagName("*").length; i++) document.getElementsByTagName("*")[i] = document.getElementsByTagName("*")[i].setAttribute("style","background-color:black; color:red");
    }
    state = !state;
    return;
  }
});
