for (var i=0; i<document.getElementsByTagName("*").length; i++) {
  var element = document.getElementsByTagName("*")[i] 
  element = element.setAttribute("style", element.getAttribute("style")===null?"":element.getAttribute("style") + "; background-color:black; color:red");
}
