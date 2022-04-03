
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

animateSvg();

function animateSvg(){
  const elements = document.querySelectorAll('.js-animation');

  const options = {
    threshold: 0.5
  };

  const observer = new IntersectionObserver(showElement,options);

  elements.forEach(element => {
    observer.observe(element);
  });

  function showElement(entries){
    entries.forEach(entry => {
      if(entry.isIntersecting){
        let children = entry.target.children;
        window.setTimeout(function(){
            for(i = 0; i < children.length; i++){
              children[i].classList.add('done');
            } 
          },800);
      }
    })
  }
}