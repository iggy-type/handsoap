'use strict';

{
  const anmelm = document.querySelectorAll('.scroll');

  window.addEventListener('scroll', checkPoint);

  function checkPoint() {
    const triggerBottom = window.innerHeight / 15 * 14;
    // console.log(triggerBottom);

    anmelm.forEach(Scroll => {
      const boxTop = Scroll.getBoundingClientRect().top;

      if(boxTop < triggerBottom) {
        Scroll.classList.add('show')
      }
    })
  }
}