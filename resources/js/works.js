$(function(){
  $('.More-Scroll-Btn').on('click', function(event) {
    event.preventDefault();
    const id = $(this).attr('href');
    const sectionHeight = $(id).offset().top;
    $('html, body').animate({scrollTop: sectionHeight}, 500, 'swing');
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
})