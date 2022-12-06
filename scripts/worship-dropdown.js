var x = false;

$(document).ready(function () {
    // opens dropdown
    $(".worship").click(function() {
        if (x == false) {
            $("#worship").fadeIn();
            setTimeout(function() {
                x = true;
            }, 1000);
            dropdown.style.color = "#49B3E7";
        }
    });
    // closes dropdown
    $(".worship").click(function() {
        if (x == true) {
            x = false;
            $("#worship").fadeOut();
            dropdown.style.color = "white";
        }
    });
});