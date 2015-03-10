$(function () {
	$('a.item').click(function (){
		$('.item'),removeClass('active');
		$(this).addClass('active');
	})
});

$( document ).ready(function() {
	$('.basic.modal')
	  .modal('show')
});
