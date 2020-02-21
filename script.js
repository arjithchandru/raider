 <script type='text/javascript'>
    
    $("#formoid").submit(function(event) {
       event.preventDefault();
		var formData = {
			'name' 				: $('input[name=name]').val(),
			'mail' 			: $('input[name=mail]').val(),
			'pwd' 	: $('input[name=pwd]').val()
		};
// AJAX Code To Submit Form.
$.ajax({
type: "POST",
url: "register1.php",
data: formData,
cache: false,
success: function(result){
}
});
return false;

</script>