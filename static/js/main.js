$(document).ready(function() {
    
    // Initialize Materialize components
    M.AutoInit();
    
    // shade clicked tags
    $(".tag").on("click", function() {
    $(this).toggleClass("shaded") })

    // DELETE a specific comment from the database
  	$(".login").on('submit', function() {
	    var userName = $("input:text").val();
	    var userEmail = $("input:email").val();
  	});
});