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

  // Radio
  $('.form__radio input[type="radio"]:checked').parents('.form__radio').addClass("is-selected");

  $('.form__radio input[type="radio"]').on('click', function(){
    $('input:not(:checked)').parents('.form__radio').removeClass("is-selected");
    $('input:checked').parents('.form__radio').addClass("is-selected");
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

jQuery(function($){

  //slider
  function slider() {
      var slider = $('#client .slider'),
          text_box = slider.siblings('.text_box'),
          text_item = text_box.find('.item'),
          viewport = slider.find('.viewport'),
          items_container = slider.find('.items_container'),
          item = items_container.children('.item'),
          item_num = item.length,
          item_width = item.width(),
          slider_nav = slider.find('.nav_container'),
          left_nav = slider_nav.find('.left'),
          right_nav = slider_nav.find('.right'),
          dots_container = slider.find('.dots_container'),
          dot = function (index) {return '<li class="dot"><div class="highlight"></div><span>'+index+'</span></li>'},
          shift = 0,
          count = 0,
          true_count = 4,
          direction;

      console.log(item_width);

      items_container.css('width', item_num*item_width);
      item.each(function (index) {
          index++;
          dots_container.append(dot(index));
      });
      var dots = dots_container.find('.dot');
      dots.css('width', 100/item_num + '%');

      function setActive(count) {
          var eq = count;
          item.removeClass('active pre_active');
          item.eq(eq).addClass('active');
          item.eq(eq-1).addClass('pre_active');
          item.eq(eq+1).addClass('pre_active');
          text_item.removeClass('active');
          text_item.eq(eq).addClass('active');
      }
      setActive(count);

      function dots_magic(count, direction){
          var eq = count;
          dots.removeClass('active dir_left dir_right');
          if(direction == 'left'){
              dots.eq(eq+1).addClass('dir_left');
              dots.eq(eq).addClass('dir_right');
              dots.eq(eq-1).addClass('dir_right');
          }else if(direction == 'right'){
              dots.eq(eq-1).addClass('dir_right');
              dots.eq(eq).addClass('dir_left');
              dots.eq(eq+1).addClass('dir_left');
          }
          dots.eq(eq).addClass('active');
      }
      dots_magic(count);

      function unbin() {
          right_nav.off('click');
          left_nav.off('click');
      }
      function bin() {
          setTimeout(function () {
              if (count < item_num-1){
                  right_nav.on('click', function (e) {
                      if(e.hasOwnProperty('originalEvent')){
                          unbin();
                          right();
                      }
                  });
              }
              if (count > 0){
                  left_nav.on('click', function (e) {
                      if(e.hasOwnProperty('originalEvent')) {
                          unbin();
                          left();
                      }
                  });
              }
          }, 800);
      }
      function stage(count, direction) {
          shift = count*item_width;
          setActive(count);
          dots_magic(count, direction);
          items_container.css('left', -shift);
          bin();
      }
      function right() {
          count++;
          stage(count, 'right');
      }
      function left() {
          count--;
          stage(count, 'left');
      }
      bin();

  };
  slider();

})
