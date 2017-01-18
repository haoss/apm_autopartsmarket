'use strict'

// Document ready
$(document).ready(function(){

  // SVG Fallback
  if(!Modernizr.svg) {
    $("img[src*='svg']").attr("src", function() {
      return $(this).attr("src").replace(".svg", ".png");
    });
  };

  // E-mail Ajax Send
  // Documentation & Example: https://github.com/agragregra/uniMail
  $("form").submit(function() { //Change
    var th = $(this);
    $.ajax({
      type: "POST",
      url: "mail.php", //Change
      data: th.serialize()
    }).done(function() {
      alert("Thank you!");
      setTimeout(function() {
        // Done Functions
        th.trigger("reset");
      }, 1000);
    });
    return false;
  });

  // Magnific popup gallery
  $('.gallery').each(function() {
    $(this).magnificPopup({
      delegate: '.gallery-item',
      type: 'image',
      gallery:{
        enabled:true
      },
      zoom: {
        enabled: true, // By default it's false, so don't forget to enable it

        duration: 300, // duration of the effect, in milliseconds
        easing: 'ease-in-out', // CSS transition easing function

        // The "opener" function should return the element from which popup will be zoomed in
        // and to which popup will be scaled down
        // By defailt it looks for an image tag:
        opener: function(openerElement) {
          // openerElement is the element on which popup was initialized, in this case its <a> tag
          // you don't need to add "opener" option if this code matches your needs, it's defailt one.
          return openerElement.is('img') ? openerElement : openerElement.find('img');
        }
      }
    });
  });

  // Magnific popup one image
  $('.image-popup').magnificPopup({
    type: 'image',
    closeOnContentClick: true,
    mainClass: 'mfp-img-mobile',
    image: {
    	verticalFit: true
    }
  });

  // Magnific popup video
  $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
    disableOn: 700,
    type: 'iframe',
    mainClass: 'mfp-fade',
    removalDelay: 160,
    preloader: false,
    fixedContentPos: false
  });

  // Chrome Smooth Scroll
  try {
    $.browserSelector();
    if($("html").hasClass("chrome")) {
        $.smoothScroll();
    }
  } catch(err) {

  };

  // Language
  $('.header__lang').hover(function(){
    $(this).toggleClass('is-active');
  });

  $('.header__lang ul li a').on('click', function(e){
    e.preventDefault();
    $('.header__lang ul li').removeClass('active');
    $(this).parent().addClass('active');
    $('.header__lang__head').text($(this).text());
    // console.log($(this).text());
  });

  // Header enter block
  $('.header__enter__button').on('click', function(e){
    e.preventDefault();
    $(this).parent().toggleClass('is-open');
    $('.header__menu').removeClass('is-open');
  });

  $('.header__button').on('click', function(e){
    e.preventDefault();
    $(this).parent().toggleClass('is-open');
    $('.header__enter').removeClass('is-open');
    $('.user__navigation').removeClass('is-active');
  });

  // anchor link
  $('a[href^="#"].anchor').on('click', function(e){
    e.preventDefault();
    var scrollId = $(this).attr('href');
    if (scrollId.length != 0) {
      $('html, body').animate({ scrollTop: $(scrollId).offset().top }, 500);
    }
  });

  $('.anchor__list li a').on('click', function(){
    $('.anchor__list li').removeClass('active');
    $(this).parent().addClass('active');
  });

  // Radio
  $('.form__radio input[type="radio"]:checked').parents('.form__radio').addClass("is-selected");
  $('.form__check input[type="checkbox"]:checked').parents('.form__check').addClass("is-selected");

  $('.form__radio input[type="radio"]').on('click', function(){
    $('input:not(:checked)').parents('.form__radio').removeClass("is-selected");
    $('input:checked').parents('.form__radio').addClass("is-selected");
  });

  $('.form__check input[type="checkbox"]').on('click', function(){
    $('input:not(:checked)').parents('.form__check').removeClass("is-selected");
    $('input:checked').parents('.form__check').addClass("is-selected");
  });

  // Registration
  $('#form__tab2').addClass('is-active');
  $('#form__radio__tab1').on('change', function(){
    $('#form__tab2').removeClass('is-active');
    $('#form__tab1').addClass('is-active');
  });
  $('#form__radio__tab2').on('change', function(){
    $('#form__tab1').removeClass('is-active');
    $('#form__tab2').addClass('is-active');
  });

  // Sumoselect
  $('.sumoselect').SumoSelect();

  // Nanoscroller
  $(".nano").nanoScroller({
    alwaysVisible: true,
    iOSNativeScrolling: true,
    preventPageScrolling: true
  });

  // Popup block
  $('.open-popup-link').magnificPopup({
    type:'inline',
    midClick: true // Allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source in href.
  });

  // Chat search
  $('.chat__search__button').on('click', function(){
    $(this).parent().toggleClass('is-active');
    $('.form-control--chat').focus();
  });

  // Popup btn cart
  $('.btn--test-popup').each(function(){
    var __this = $(this);
    // e.preventDefault();
    $(__this).on('click', function(e){
      e.preventDefault();
      $(__this).parent().toggleClass('is-active');

      setTimeout(function(){
        $(__this).parent().removeClass('is-active');
      }, 1500)
    });
  });
  $('.btn--edit-popup').each(function(){
    var __this = $(this);
    // e.preventDefault();
    $(__this).on('click', function(e){
      e.preventDefault();
      $(__this).parent().toggleClass('is-active');

      setTimeout(function(){
        $(__this).parent().removeClass('is-active');
      }, 5000)
    });
  });

  // .statistic
  $('.statistic__header').on('click', function(){
    $(this).parent().toggleClass('is-open');

    if ($(this).parent().hasClass('is-open')) {
      $(this).next('.statistic__body').slideDown();
    } else {
      $(this).next('.statistic__body').slideUp();
    }

  });

  // Datepicker
  $('#input-datepicker').data('datepicker')

  // simpleForm version 2015-09-23 14:30 GMT +2
  simpleForm('form.form-callback');
});

$(window).on('load', function() {
  // $(".loader_inner").fadeOut();
  $(".loader").delay(400).fadeOut("slow");
});

function mobileLogo() {
  var height = $(window).height();
  if (height < 700) {
    $('.mobile-logo').css({
      position: 'relative',
      bottom: 0
    })
  } else {
    $('.mobile-logo').css({
      position: 'absolute',
      bottom: '10px'
    })
  }
}
$(document).on('ready', mobileLogo);
$(window).on('resize', mobileLogo);

/*version 2015-09-23 14:30 GMT +2
*/
function simpleForm(form, callback) {
  $(document).on('submit', form, function(e){
    e.preventDefault();

    var formData = {};

    var hasFile = false;

    if ($(this).find('[type=file]').length < 1) {
      formData = $(this).serialize();
    }
    else {
      formData = new FormData();
      $(this).find('[name]').each(function(){

        switch($(this).prop('type')) {

          case 'file':
            if ($(this)[0]['files'].length > 0) {
              formData.append($(this).prop('name'), $(this)[0]['files'][0]);
              hasFile = true;
            }
            break;

          case 'radio':
          case 'checkbox':
            if (!$(this).prop('checked')) {
              break;
            }
            formData.append($(this).prop('name'), $(this).val().toString());
            break;

          default:
            formData.append($(this).prop('name'), $(this).val().toString());
            break;
        }
      });
    }

    $.ajax({
      url: $(this).prop('action'),
      data: formData,
      type: 'POST',
      contentType : hasFile ? 'multipart/form-data' : 'application/x-www-form-urlencoded',
      cache       : false,
      processData : false,
      success: function(response) {
        $(form).removeClass('ajax-waiting');
        $(form).html($(response).find(form).html());

        if (typeof callback === 'function') {
          callback(response);
        }
      }
    });

    $(form).addClass('ajax-waiting');

    return false;
  });
}

/*
	By Osvaldas Valutis, www.osvaldas.info
	Available for use under the MIT License
*/

'use strict';

;( function ( document, window, index )
{
	var inputs = document.querySelectorAll( '.inputfile' );
	Array.prototype.forEach.call( inputs, function( input )
	{
		var label	 = input.nextElementSibling,
			labelVal = label.innerHTML;

		input.addEventListener( 'change', function( e )
		{
			var fileName = '';
			if( this.files && this.files.length > 1 )
				fileName = ( this.getAttribute( 'data-multiple-caption' ) || '' ).replace( '{count}', this.files.length );
			else
				fileName = e.target.value.split( '\\' ).pop();

			if( fileName )
				label.querySelector( 'span' ).innerHTML = fileName;
			else
				label.innerHTML = labelVal;
		});

		// Firefox bug fix
		input.addEventListener( 'focus', function(){ input.classList.add( 'has-focus' ); });
		input.addEventListener( 'blur', function(){ input.classList.remove( 'has-focus' ); });
	});
}( document, window, 0 ));
