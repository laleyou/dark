for (var i=0; i<document.getElementsByTagName("*").length; i++) {
  var element = document.getElementsByTagName("*")[i] 
  var css = "background-color:black; color:red"
  element = element.setAttribute("style", element.getAttribute("style")===null ? css : element.getAttribute("style")+"; "+css);
}
