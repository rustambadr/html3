$(window).on('scroll load', function(event){
  const offset = $(window).scrollTop() + $(window).height();

  if( offset > $('.block-2 p.title').offset().top ) {
    $('.block-2 p.title').addClass('animated fadeInUp');
  }
  if( offset > $('.block-2 .rows').offset().top ) {
    $('.block-2 .rows .left').addClass('animated slideInLeft');
    $('.block-2 .rows .right').addClass('animated slideInRight');
  }
  if( offset > $('.block-3 .title').offset().top ) {
    $('.block-3 p.title').addClass('animated fadeInUp');
    $('.block-3 p.title2').addClass('animated fadeInUp');
  }
  if( offset > $('.block-3 .rows').offset().top ) {
    $('.block-3 .rows .left-text').addClass('animated slideInLeft');
    $('.block-3 .rows .right-img').addClass('animated slideInRight');
  }
  if( offset > $('.block-4 .right-text').offset().top ) {
    $('.block-4 .right-text').addClass('animated fadeInUp');
  }
  if( offset > $('.block-4 .catalog-img').offset().top ) {
    $('.block-4 .catalog-img').addClass('animated slideInLeft');
  }
  if( offset > $('.block-4 .app-img').offset().top ) {
    $('.block-4 .app-img').addClass('animated slideInRight');
  }
  if( offset > $('footer .title').offset().top ) {
    $('footer .title').addClass('animated fadeInUp');
  }
  if( offset > $('footer .title2').offset().top ) {
    $('footer .title2').addClass('animated fadeInUp');
  }
  if( offset > $('footer .form').offset().top ) {
    $('footer .form').addClass('animated fadeIn');
  }
});
