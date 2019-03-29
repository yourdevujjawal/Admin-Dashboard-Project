$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip();
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var d = new Date();
    var today = d.getDate();
    var monthNumber = d.getMonth();
    var year = d.getFullYear();
    var currentDate = today + " " + months[monthNumber] + " , " + year;
    document.getElementById("calendar").innerHTML = currentDate;
    var h = d.getHours();
    var m = d.getMinutes();
    var t = h + " h " + " : " + m +" min";
    document.getElementById("time").innerHTML = t;
    
});

