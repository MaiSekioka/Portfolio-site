
$('.Burger-Btn').on('click', function(){
  $('.Header').toggleClass('is-drawerActive');
  $('html,body').toggleClass('No-Scroll');
});

$('.Nav-Menu-Bg').on('click', function(){
  $('.Header').toggleClass('is-drawerActive');
  $('html,body').toggleClass('No-Scroll');
});

$('.Header-Nav-List-Link').on('click', function(){
  if($('.Header').hasClass('is-drawerActive')) {
    $('.Header').removeClass('is-drawerActive');
    $('html,body').toggleClass('No-Scroll');
  }
});

$('.Header-Nav-List-Link').on('click', function(event) {
  event.preventDefault();

  const id = $(this).attr('href');
  const sectionHeight = $(id).offset().top;
  const heightAdjuster = 30;
  $('html, body').animate({scrollTop: sectionHeight - heightAdjuster}, 500, 'swing');
});

$('.MainVisual-Scroll-Btn').on('click', function(event) {
  event.preventDefault();

  const id = $(this).attr('href');
  const sectionHeight = $(id).offset().top;
  const heightAdjuster = 90;
  $('html, body').animate({scrollTop: sectionHeight - heightAdjuster}, 500, 'swing');
});

function fixedHeader() {
  let scroll = $(this).scrollTop();
  if(scroll < 30){
    $('.Header').removeClass('is-fixed');
  } else {
    $('.Header').addClass('is-fixed');
  };
};

function appearToTopBtn() {
  let scroll = $(this).scrollTop();
  if(scroll < 30){
    $('.ToTopBtn').removeClass('is-appear');
  } else {
    $('.ToTopBtn').addClass('is-appear');
  };
};

$(window).on('scroll',function(){
  fixedHeader();
  appearToTopBtn();
});

fixedHeader();
appearToTopBtn();


$('.ToTopBtn').on('click', function(){
  $('html,body').animate({
    'scrollTop': 0,
  },500);
});

new Vivus('MainVisual-Footprints',{
  duration: 50,
  type: 'oneByOne',
  start: 'inViewport'
},function(){
  $('#MainVisual-Footprint01').attr('class','done');
  $('#MainVisual-Footprint02').attr('class','done');
  $('#MainVisual-Footprint03').attr('class','done');
  $('#MainVisual-Footprint04').attr('class','done');
  $('#MainVisual-Footprint05').attr('class','done');
  $('#MainVisual-Footprint06').attr('class','done');
});

new Vivus('MainVisual-SP-Footprints',{
  duration: 50,
  type: 'oneByOne',
  start: 'inViewport'
},function(){
  $('#MainVisual-SP-Footprint01').attr('class','done');
  $('#MainVisual-SP-Footprint02').attr('class','done');
  $('#MainVisual-SP-Footprint03').attr('class','done');
  $('#MainVisual-SP-Footprint04').attr('class','done');
  $('#MainVisual-SP-Footprint05').attr('class','done');
  $('#MainVisual-SP-Footprint06').attr('class','done');
});

new Vivus('Ability-SP-Footprints',{
  duration: 20,
  type: 'delayed',
  start: 'inViewport',
  animTimingFunction: Vivus.EASE_IN
},function(){
  $('#Ability-SP-Footprint01').attr('class','done');
  $('#Ability-SP-Footprint02').attr('class','done');
  $('#Ability-SP-Footprint03').attr('class','done');
  $('#Ability-SP-Footprint04').attr('class','done');
  $('#Ability-SP-Footprint05').attr('class','done');
  $('#Ability-SP-Footprint06').attr('class','done');
});

new Vivus('Ability-Freeline',{
  duration: 150,
  type: 'oneByOne',
  start: 'inViewport'
},function(){
  $('#Footprint01').attr('class','done');
  $('#Footprint02').attr('class','done');
  $('#Footprint03').attr('class','done');
  $('#Footprint04').attr('class','done');
  $('#Footprint05').attr('class','done');
});

new Vivus('Ability-SP-Freeline',{
  duration: 100,
  type: 'delayed',
  start: 'inViewport',
  animTimingFunction: Vivus.EASE
},function(){
  ;
});

new Vivus('Footer-Footprints',{
  duration: 50,
  type: 'delayed',
  start: 'inViewport'
},function(){
  $('#Footer-Footprint01').attr('class','done');
  $('#Footer-Footprint02').attr('class','done');
  $('#Footer-Footprint03').attr('class','done');
  $('#Footer-Footprint04').attr('class','done');
  $('#Footer-Footprint05').attr('class','done');
  $('#Footer-Footprint06').attr('class','done');
  $('#Footer-Footprint07').attr('class','done');
  $('#Footer-Footprint08').attr('class','done');
  $('#Footer-Footprint09').attr('class','done');
  $('#Footer-Footprint10').attr('class','done');
  $('#Footer-Footprint11').attr('class','done');
  $('#Footer-Footprint12').attr('class','done');
  $('#Footer-Footprint13').attr('class','done');
  $('#Footer-Footprint14').attr('class','done');
});

new Vivus('Footer-SP-Footprints',{
  duration: 50,
  type: 'delayed',
  start: 'inViewport'
},function(){
  $('#Footer-SP-Footprint01').attr('class','done');
  $('#Footer-SP-Footprint02').attr('class','done');
  $('#Footer-SP-Footprint03').attr('class','done');
  $('#Footer-SP-Footprint04').attr('class','done');
  $('#Footer-SP-Footprint05').attr('class','done');
  $('#Footer-SP-Footprint06').attr('class','done');
  $('#Footer-SP-Footprint07').attr('class','done');
  $('#Footer-SP-Footprint08').attr('class','done');
  $('#Footer-SP-Footprint09').attr('class','done');
  $('#Footer-SP-Footprint10').attr('class','done');
  $('#Footer-SP-Footprint11').attr('class','done');
  $('#Footer-SP-Footprint12').attr('class','done');
  $('#Footer-SP-Footprint13').attr('class','done');
  $('#Footer-SP-Footprint14').attr('class','done');
  $('#Footer-SP-Footprint15').attr('class','done');
});