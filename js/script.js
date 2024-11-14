// WoW
new WOW().init();

// Spinner Start
window.addEventListener("load", () => {
  document.querySelector(".lds-ring").style.display = "none"; 
});
// Spinner End

// Navbar Start
// $(window).scroll(function () {
//   if($(this).scrollTop() > 300) {
//     $('.navbar').fadeIn('slow').css('display', 'flex');
//   } else {
//     $('.navbar').fadeIn('slow').css('display', 'none');
//   }
// })

let menu = document.querySelector(".menu-icon");
        menu.addEventListener("click", function() {
            this.classList.toggle("show");
});

$(window).scroll(function () {
  if ($(this).scrollTop() > 300) {
      $('.navbar').fadeIn('slow').css('display', 'flex');
  } else {
      $('.navbar').fadeOut('slow').css('display', 'none');
  }
});

const sections = document.querySelectorAll("section[id]");

function scrollActive() {
  // Browser ကို Scroll ဆွဲလိုက်တဲ့အခါ Scroll ရောက်နေတဲ့ Height ကိုရရှိနေမှာဖြစ်ပါတယ်။
  const scrollY = window.pageYOffset;           // scroll height

  // forEach နဲ့ ရှိသမျှ section အကုန်လုံးကို loop လုပ်လိုက်တာဖြစ်ပါတယ်။
  // current.offsetHeight လက်ရှိရောက်နေတဲ့ section ရဲ့ Height ကို ရယူလိုက်တာပါ။
  // current.offsetTop - 58 လက်ရှိရောက်နေတဲ့ section ရဲ့ Top ကို ရယူလိုက်တာပါ။
  // current.getAttribute("id") လက်ရှိရောက်နေတဲ့ section ရဲ့ id ကို ရယူလိုက်တာပါ။
  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight, // get current height
      sectionTop = current.offsetTop - 58,      // get current section of height
      sectionId = current.getAttribute("id");   // get current section id

    // scrollyY သည် sectionTop ထက်ကြီးနေတယ်ဆိုရင် True အနေနဲ့ သတ်မှတ်မှာဖြစ်ပြီး
    // လက်ရှိရောက်နေတဲ့ section ရဲ့ Top နဲ့ လက်ရှိရောက်နေတဲ့ section ရဲ့ Height နှစ်ခုကိုပေါင်းပြီး
    // scrollyY သည် ငယ်နေတယ်(သို့) ညီနေတယ်ဆိုရင် True ကိုရရှိမှာပါ။
    // && သည် Comparsion Operator ဖြစ်ပြီး နှင်းယှဉ်ထားတဲ့ တန်ဖိုးနှစ်ခုလုံး True && True ဖြစ်မှသာ
    // if statement ကိုအလုပ်လုပ်မှာဖြစ်ပါတယ်။ နှိုင်းယှဉ်လိုက်တဲ့ တန်ဖိုးက false ဖြစ်နေလျှင် else ကို အလုပ်လုပ်သွားမှာဖြစ်ပါတယ်။
    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) { // <= Less than or equal to
      document
        .querySelector("a[href*=" + sectionId + "]").classList.add("active-link");
    } else {
      document
        .querySelector("a[href*=" + sectionId + "]").classList.remove("active-link");
    }
  });
}
// function သည် ကြေညာလိုက်ရုံနဲ့ အလုပ်မလုပ်ပါဘူး။
// သူ့ကို ပြန်ခေါ်သုံးမှသာ အလုပ်လုပ်တာဖြစ်ပါတယ်။
// ဒါကြောင့် Browser ကို Scroll လုပ်လိုက်လျှင် scrollActive ကို အလုပ်လုပ်ပေးပါလို့ပြောလိုက်ခြင်းဖြစ်ပါတယ်။
window.addEventListener("scroll", scrollActive);

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
if(localStorage.getItem("theme") == "dark") {
  setDarkMode();

      if(document.getElementById("changeTheme").checked) {
          localStorage.setItem("changeTheme", true)
      }
 }

 function setDarkMode() {
  let isDark = document.body.classList.toggle("darkMode");

      if(isDark) {
          setDarkMode.checked = true;
          localStorage.setItem("theme", "dark");
          document.getElementById("changeTheme").setAttribute("checked", "checked");
      } else {
          setDarkMode.checked = true;
          localStorage.removeItem("theme", "dark");
      }
 }
// Footer End

// Back to Top Start


// Back to Top End