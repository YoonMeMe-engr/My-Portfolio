// WoW
new WOW().init();

// Spinner Start
window.addEventListener("load", () => {
  document.querySelector(".lds-ring").style.display = "none"; 
})
// Spinner End

// Navbar Start
$(window).scroll(function () {
  if($(this).scrollTop() > 300) {
    $('.navbar').fadeIn('slow').css('display', 'flex');
  } else {
    $('.navbar').fadeIn('slow').css('display', 'none');
  }
})
// Navbar End

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

// Let's Work Together Start

// Let's Work Together End

// Footer Start
const changeTheme = document.getElementById("changeTheme");

changeTheme.addEventListener("change", () => {
  const theme = localStorage.getItem("data-theme");
  if (theme === "dark") {
    changeToLight();
  } else {
    changeToDark();
  }
});

const theme = localStorage.getItem("data-theme");
if (theme === "dark") {
  changeToDark();
} else {
  changeToLight();
}

const changeToDark = () => {
  document.documentElement.setAttribute("data-theme", "dark");
  localStorage.setItem("data-theme", "dark")
}

const changeToLight = () => {
  document.documentElement.setAttribute("data-theme", "light");
  localStorage.setItem("data-theme", "light")
}
// Footer End

// Back to Top Start


// Back to Top End