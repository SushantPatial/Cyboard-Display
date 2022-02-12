/* Toggle .header-scrolled class to #header when page is scrolled */
$(window).on('scroll', function() {
  if (window.scrollY > 100) {
    $('#navbar').addClass('navbar-scrolled');
    $('#navbar .logo img').attr('src', 'assets/media/logo.png');
  } else {
    $('#navbar').removeClass('navbar-scrolled');
    $('#navbar .logo img').attr('src', 'assets/media/logo-white.png');
  }
})
  
$('.form-input input').on('click', function() {
 
  $('.form-input input').parent().css('border', '1px solid transparent');
  if ($(this).is(":focus")) {
    $(this).parent().css('border', '1px solid var(--color-2)');
  } 
})

AOS.init({
  duration: 1000,
  easing: 'ease-in-out',
  once: true,
  mirror: false
})

const glightbox = GLightbox({
  selector: '.glightbox'
});

let preloader = $('#preloader');
if (preloader) {
  window.addEventListener('load', () => {
    preloader.remove()
  });
}