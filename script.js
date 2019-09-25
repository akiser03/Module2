$(document).ready(function(){
    $("#dark").click(function(){
    $("#d").css("backgroundColor","#ffffff");
    });
    $("#light").click(function(){
    $("#d").css("backgroundColor","#000000");
    });
});

$(document).ready(function(){
   $(".title").mouseenter(function(){
      $("div#info").css("visibility","visible");
       alert("Click me to display my information!");
   });
});