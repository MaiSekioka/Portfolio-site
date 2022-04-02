new Vivus('More-Footprints',{
  duration: 50,
  type: 'oneByOne',
  start: 'inViewport'
},function(){
  $('#More-Footprint01').attr('class','done');
  $('#More-Footprint02').attr('class','done');
  $('#More-Footprint03').attr('class','done');
  $('#More-Footprint04').attr('class','done');
  $('#More-Footprint05').attr('class','done');
  $('#More-Footprint06').attr('class','done');
});

$('.More-Scroll-Btn').on('click', function(event) {
  event.preventDefault();
  const id = $(this).attr('href');
  const sectionHeight = $(id).offset().top;
  $('html, body').animate({scrollTop: sectionHeight}, 500, 'swing');
});