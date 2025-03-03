function loadPage(page_container, hash) {
    if (!hash || hash === "#/" || hash === "#") {
        hash = "home"; // Default to home
    } else {
        hash = hash.replace("#/", ""); // Remove #/
    }

    append_to_container(page_container, hash);
}

function navigate(page_container, hash) {
    window.location.hash = "#/" + hash;
    loadPage(page_container, hash);
}

$j(window).on("hashchange", function () {
    var hash = window.location.hash;
    loadPage("#dynamic-page-holder", hash);
});

$j(".nav-btn").on("click", function (e) {
    e.preventDefault();
    console.log("nav btn clicked")
    var page_container = $j(this).attr("data-page-cont");
    var hash = $j(this).attr("data-page").replace("/", "");
    navigate(page_container, hash);
});

// Ensure correct page loads on refresh
loadPage("#dynamic-page-holder", window.location.hash);