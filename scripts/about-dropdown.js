var x = false;

$(document).ready(function () {
    // opens dropdown
    $(".about").click(function() {
        if (x == false) {
            $("#about").fadeIn();
            setTimeout(function() {
                x = true;
            }, 1000);
            dropdown.style.color = "#49B3E7";
        }
    });
    // closes dropdown
    $(".about").click(function() {
        if (x == true) {
            x = false;
            $("#about").fadeOut();
            dropdown.style.color = "white";
        }
    });
});