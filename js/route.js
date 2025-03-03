$j(document).ready(function () {
    function loadPage(hash) {
        if (!hash || hash === "#/") {
            $j("#dynamic-page-holder").html("<h2>Home Page</h2>");
        } else if (hash === "#/page-1") {
            $j("#dynamic-page-holder").html("<h2>Page 1</h2>");
        } else if (hash === "#/page-2") {
            $j("#dynamic-page-holder").html("<h2>Page 2</h2>");
        } else {
            $j("#dynamic-page-holder").html("<h2>404 - Page Not Found</h2>");
        }
    }

    function navigate(hash) {
        window.location.hash = hash;
        loadPage(hash);
    }

    $j(window).on("hashchange", function () {
        loadPage(window.location.hash);
    });

    $j(".nav-btn").on("click", function (e) {
        e.preventDefault();
        var hash = "#/" + $j(this).attr("data-page").replace("/", "");
        navigate(hash);
    });

    loadPage(window.location.hash);
});

