// WoW
new WOW().init();

// Home Start
const typed = new Typed(".multiple-text", {
    strings: ["IT Engineer" , "Telecom Engineer" , "Web Development Engineer" , "Apps Designer"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true,
});
// Home End

// About Start
$('.counter').counterUp({
    delay: 10,
    time: 2000
});
// About End

// Skills Start
$('.skill').waypoint(function () {
    $('.progress .progress-bar').each(function () {
        $(this).css("width", $(this).attr("aria-valuenow") + '%');
    });
}, {offset: '80%'});
// Skills End

// Projects Start
var portfolioIsotope = $('.portfolio-container').isotope({
  itemSelector: '.portfolio-item',
  layoutMode: 'fitRows'
});
$('#portfolio-filters li').on('click', function () {
  $("#portfolio-filters li").removeClass('active');
  $(this).addClass('active');

  portfolioIsotope.isotope({filter: $(this).data('filter')});
});
// Project End

// Testimonial Start
$(".testimonial-carousel").owlCarousel({
  autoplay: true,
  smartSpeed: 1000,
  items: 1,
  dots: true,
  loop: true,
});
// Testimonial End