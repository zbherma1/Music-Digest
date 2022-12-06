var page = 1;
var prev = document.getElementById("prev");
var next = document.getElementById("next");

var feat1 = document.getElementById("feat-1");
var feat2 = document.getElementById("feat-2");
var feat3 = document.getElementById("feat-3");
var feat4 = document.getElementById("feat-4");

function nextPage() {
    page++; 
    
    if (page == 2) {
        feat1.href = "#";
        feat2.href = "#";
        feat3.href = "#";
    } else if (page == 3) {
        feat1.href = "#";
        feat2.href = "#";
        feat3.href = "#";
    }
    
    if (page == 3) {
        next.style.display = "none";
    }
    if (page > 1) {
        prev.style.display = "inline";
    }
}

function prevPage() {
    page--;

    if (page == 1) {
        feat1.href = "sethconcert.html";
        feat2.href = "choirconcert21.html";
        feat3.href = "coffeehouse.html";
    } else if (page == 2) {
        feat1.href = "#";
        feat2.href = "#";
        feat3.href = "#";
    }

    if (page == 1) {
        prev.style.display = "none";
    }
    if (page < 3) {
        next.style.display = "inline";
    }
}