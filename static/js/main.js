$(document).ready(function() {
    
    // Initialize Materialize components
    M.AutoInit();
    
    // shade clicked tags
    $(".tag").on("click", function() {
    $(this).toggleClass("shaded") })

    // jQuery Ajax request
    // $.get('https://data.seattle.gov/resource/qc9h-bn8y.json').done(function(returnData) {
    //     console.log(returnData)
    // });
});