// Carousel cycle

$(document).ready(function() {
    $("#myCarousel").carousel("cycle");
})

// collapsible
var coll = document.getElementById("button");
var content = document.getElementById("profil-lengkap")
coll.addEventListener("click", function(){
    if(content.style.display === "block"){
        content.style.display = "none";
        coll.innerHTML = "Lihat Selengkapnya...";
    } else {
        content.style.display = "block";
        coll.innerHTML = "Kembali";
    }
});
