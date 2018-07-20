$(document).ready(function() {

    // Initialize Materialize components
    M.AutoInit();

    // shade clicked tags
    $(".tag").on("click", function() {
    $(this).toggleClass("shaded") })
});
