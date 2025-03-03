

$j(document).ready(function () {
    var basePath = "/2) MK/1) Personal-Practice"; // Your base path

    function getRelativePath(url) {
        return url.startsWith(basePath) ? url.replace(basePath, "") || "/" : "/";
    }

    function loadPage(url) {
        var relativePath = getRelativePath(url);

        if (relativePath === "/") {
            $j("#dynamic-page-holder").html("<h2>Home Page</h2>");
        } else if (relativePath === "/page-1") {
            $j("#dynamic-page-holder").html("<h2>Page 1</h2>");
        } else if (relativePath === "/page-2") {
            $j("#dynamic-page-holder").html("<h2>Page 2</h2>");
        } else if (relativePath === "/settings") {
            $j("#dynamic-page-holder").html("<h2>Settings Page</h2>");
        } else {
            $j("#dynamic-page-holder").html("<h2>404 - Page Not Found</h2>");
        }
    }

    function navigate(url) {
        var fullPath = basePath + url;
        history.pushState({ page: fullPath }, null, fullPath);
        loadPage(fullPath);
    }

    $j(window).on("popstate", function () {
        loadPage(window.location.pathname);
    });

    $j(".nav-btn").on("click", function (e) {
        e.preventDefault();
        var url = $j(this).attr("data-page");
        navigate(url);
    });

    // Ensure the correct page loads on refresh
    loadPage(window.location.pathname);
});


