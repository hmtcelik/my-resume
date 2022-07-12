(function(document) {
    var metas = document.getElementsByTagName('meta'),
        changeViewportContent = function(content) {
            for (var i = 0; i < metas.length; i++) {
                if (metas[i].name == "viewport") {
                    metas[i].content = content;
                }
            }
        },
        initialize = function() {
            changeViewportContent("width=device-width, minimum-scale=1.0, maximum-scale=1.0");
        },
        gestureStart = function() {
            changeViewportContent("width=device-width, minimum-scale=0.25, maximum-scale=1.6");
        },
        gestureEnd = function() {
            initialize();
        };


    if (navigator.userAgent.match(/iPhone/i)) {
        initialize();

        document.addEventListener("touchstart", gestureStart, false);
        document.addEventListener("touchend", gestureEnd, false);
    }
})(document);

// color changers
function defaultcolor(){
  var arr = document.getElementsByClassName("changecolor");
  for (var x=0; x<arr.length; x++){
    arr[x].style.color='#069'
  }
}
function red(){
  var arr = document.getElementsByClassName("changecolor");
  for (var x=0; x<arr.length; x++){
    arr[x].style.color='#FF6F61'; 
  }
}
function green(){
  var arr = document.getElementsByClassName("changecolor");
  for (var x=0; x<arr.length; x++){
    arr[x].style.color='#88B04B';
  }
}
function pink(){
  var arr = document.getElementsByClassName("changecolor");
  for (var x=0; x<arr.length; x++){ 
    arr[x].style.color='#9c32a2';
  }
}
function maroon(){
  var arr = document.getElementsByClassName("changecolor");
  for (var x=0; x<arr.length; x++){
    arr[x].style.color='#85144b';
  }
}
function navy(){
  var arr = document.getElementsByClassName("changecolor");
  for (var x=0; x<arr.length; x++){
    arr[x].style.color='#001f3f';
  }
}

// side bar
function openNav(){
  document.getElementById("mySidenav").style.width = "250px";

}
function closeNav(){
document.getElementById("mySidenav").style.width = "0";
}
