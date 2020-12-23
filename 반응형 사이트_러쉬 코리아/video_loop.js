$(document).ready(function(){
    
    var $video1 = document.getElementById("video1");
    var $video2 = document.getElementById("video2");
    var $video3 = document.getElementById("video3");
    var $video4 = document.getElementById("video4");
    var $video5 = document.getElementById("video5");
    
   if($(window).width() <= 768){
       $video1.pause();
       $video2.pause();
       $video3.pause();
       $video4.pause();
       $video5.pause();
   } return false;
    
});