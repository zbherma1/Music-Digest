var x = false;

$(document).ready(function () {
    // opens dropdown
    $(".music").click(function() {
        if (x == false) {
            $("#music").fadeIn();
            setTimeout(function() {
                x = true;
            }, 1000);
            dropdown.style.color = "#49B3E7";
        }
    });
    // closes dropdown
    $(".music").click(function() {
        if (x == true) {
            x = false;
            $("#music").fadeOut();
            dropdown.style.color = "white";
        }
    });
});