/* Preview uploaded image */
function readURL(input) {
	if (input.files && input.files[0]) {
	    let reader = new FileReader(), file = input.files[0], imageType = /^image\//, img;
	    // test if uploaded file is an image
	    if ( !imageType.test(file.type) ) return
	    // create the image if not exists
		const inputId = "#" + input.id , inputIdPreview = "#" + input.id + "_preview", parentGroup=$(inputId).parentsUntil('.form-group');
		if ( !$( inputIdPreview ).length ){ 
			img = $("<img id='"+ input.id +"_preview' class='thumbnail thumbnail-lg' src='#' ></img>")
			$( parentGroup ).after( $("<p></p>").append( img ) )
		} else {
			img = $( inputIdPreview )
		}
		reader.onload = function(e){ img.attr('src', e.target.result); }
		reader.readAsDataURL( file )
	}
}

$( function(){
    /* Add image preview behaviour */
    $("#file").change( function(){ readURL( this ) });
});
