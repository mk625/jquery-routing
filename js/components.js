
function append_to_container(file_container, file_to_append) {
    $j.ajax({
        url: file_to_append + ".html",
        success: function(data) {
            $j(file_container).html(data);
        },
        error: function() {
            console.error('Error to fetching ' + file_to_append + ".html file");
        }
    });
}

