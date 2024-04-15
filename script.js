document.getElementById('light').addEventListener('click', function() {
    let light = document.getElementById('light');
    light.style.animation = 'slide-down 2s ease-in 0s normal forwards';
    sectionIn();
})

function sectionIn() {
    let section = document.getElementById('section');
    let works = document.getElementById('works');
    let contact = document.getElementById('contact');
    let shark = document.getElementById('shark')
    shark.classList.remove('hidden');
    section.classList.remove('hidden');
    works.classList.remove('hidden');
    contact.classList.remove('hidden');
};

  /*scroll animation*/
  var elScroll = document.querySelectorAll('.scroll'); 
document.onscroll = function() { 
  elScroll.forEach(elScroll => { 
  var positionEl = elScroll.getBoundingClientRect(); 
  var alturaEl = positionEl.top; 
  if(alturaEl < 200) { 
    elScroll.classList.add('scroll--show'); 
  }
 })
}

 /*whale movement*/

  document.getElementById('contact-title').addEventListener('click', function() {
    let whale = document.getElementById('whale');
    whale.classList.remove('hidden');
    whale.style.animation = 'slide-up 4s ease-in 0s normal forwards';
  })
