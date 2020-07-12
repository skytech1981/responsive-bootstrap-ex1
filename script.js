$(document).ready(function() {


    $('#btnToggle').click(function () {
      $('#collapsibleNavbar').toggle(500);
    });

   
    $("#index").click(function() {
     $("#main").load("index.html");
       })

    $("#about").click(function() {
     $("#main").load("about.html");
       })

    $("#contact").click(function() {
     $("#main").load("contact.html");
          })
      
        });
   


