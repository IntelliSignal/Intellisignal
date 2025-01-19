document.addEventListener('DOMContentLoaded', function(){
    var menuIcon = document.getElementById("menu-icon");
    var menuLinks = document.getElementById("navigation-links");
    var crossIcon = document.getElementById("cross-icon");


    menuIcon.addEventListener('click', function(){
        menuLinks.style.display = 'block';
        // menuLinks.style.animation = TransformStream 0.3s;
        crossIcon.style.display = 'block';
        menuIcon.style.display = 'none';
    })

    crossIcon.addEventListener('click', function(){
        menuLinks.style.display = 'none';
        crossIcon.style.display = 'none';
        menuIcon.style.display = 'block';
    })

    // document.getElementById("hero-learn").onclick = function () {
    //     location.href = "about.html";
    // }
    // document.getElementById("hero-contact").onclick = function (){
    //     document.getElementById("contact").scrollIntoView({behavior: "smooth"});
    // }
})
