  $(document).ready(function() {
    M.updateTextFields();
  });
     
    $(document).ready(function(){
    $('select').formSelect();
  });



 (function($) {
 	$(function() {
 		$('ul.tabs_caption').on('click', 'li:not(.active)', function() {
 			$(this)
 			.addClass('active').siblings().removeClass('active')
 			.closest('div.wrap_tabs').find('div.tabs_content').removeClass('active').eq($(this).index()).addClass('active');
 		});
 	});
 })(jQuery);