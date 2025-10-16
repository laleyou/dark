let state = false;

chrome.action.onClicked.addListener(tab => {
  if (!state) {
    chrome.scripting.onUpdated.addListener() {
	for (var i=0; i<document.getElementsByTagName("*").length; i++) document.getElementsByTagName("*")[i] = document.getElementsByTagName("*")[i].setAttribute("style","background-color:black; color:red");
    }
    state = !state;
    return;
  }
});
