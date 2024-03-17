$(document).ready(function() {
    // Fetch the navbar content from navbar.html
    $.get("navbar.html", function(data) {
        // Insert the navbar content into the elements with class 'navbar-placeholder'
        $(".navbar-placeholder").replaceWith(data);
    });
});


function toggleQuintria() {
    var quintria = document.querySelector('.Quintria');
    quintria.classList.toggle('active');
  }