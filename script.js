window.addEventListener('scroll', function () {
  let nav = document.querySelector('.header_nav');
  let windowHeight = window.innerHeight;
  let scrollPosition = document.documentElement.scrollTop;

  if (scrollPosition >= windowHeight / 8) {
    nav.style.visibility = 'hidden';
  } else {
    nav.style.visibility = 'visible';
  }
});

window.addEventListener('scroll', function () {
  let backToTop = document.getElementById('back-to-top-btn');
  let logo = document.getElementById('header_logo');
  let about = document.getElementById('about');
  let resume = document.getElementById('resume');
  let contact = document.getElementById('contact');

  let aboutTop = about.offsetTop;
  let resumeTop = resume.offsetTop;
  let contactTop = contact.offsetTop;
  let scrollPosition = document.documentElement.scrollTop;

  if (scrollPosition >= aboutTop && scrollPosition < resumeTop || scrollPosition >= contactTop) {
    backToTop.style.color = '#EE3250';
    logo.style.backgroundColor = '#EE3250';
    logo.style.color = 'white';
  } else {
    backToTop.style.color = 'white';
    logo.style.backgroundColor = 'white';
    logo.style.color = '#EE3250';
  }
});

const photo = document.querySelector('.photo');

photo.addEventListener('mouseover', function () {
  photo.style.zIndex = '9997';
});

photo.addEventListener('mouseout', function () {
  photo.style.zIndex = '0';
});