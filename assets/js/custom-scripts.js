document.querySelectorAll('#color-picker button').forEach(btn => {
  btn.addEventListener('click', () => {
    const theme = btn.dataset.theme;
    let color = "";

    switch (theme) {
      case "blue": color = "#00afef"; break;
      case "yellowbrown": color = "#b57c00"; break;
      case "green": color = "#004d40"; break;
      case "red": color = "#f01313"; break;
    }

    document.documentElement.style.setProperty("--theme-color", color);
  });
});

document.querySelector("#color-picker .spin").onclick = function () {
  this.parentElement.classList.toggle("active");
}

// Color Picker End

  const currentPage = location.pathname.split('/').pop() || 'index.html';

  document.querySelectorAll('.nav-menu a').forEach(link => {
    if (link.getAttribute('href') === currentPage) {
      link.classList.add('active');
      link.closest('.nav-list').classList.add('active');
    }
  });


$(document).ready(function() {
  $('[data-fancybox="oneTaraGallery1"]').fancybox({
    arrows: true,
    loop: true
  });
});

const tooltip = document.getElementById('svg-tooltip');
const paths = document.querySelectorAll('svg path');

paths.forEach(path => {
  path.addEventListener('mousemove', e => {
    const title = path.getAttribute('data-title');
    tooltip.textContent = title;
    tooltip.style.left = (e.pageX + 10) + 'px';
    tooltip.style.top = (e.pageY + 10) + 'px';
    tooltip.style.display = 'block';
  });

  path.addEventListener('mouseleave', () => {
    tooltip.style.display = 'none';
  });
});

// Show popup when a state is selected from dropdown
document.getElementById('state-select').addEventListener('change', function () {
  document.querySelectorAll('#content-group .collapse.show').forEach(function (el) {
  var collapse = bootstrap.Collapse.getInstance(el) || new bootstrap.Collapse(el);
    collapse.hide();
  });

  var state = this.value;
  if (state) {
    var popup = document.getElementById(state.charAt(0).toLowerCase() + state.slice(1));
    if (popup) {
      var collapse = bootstrap.Collapse.getOrCreateInstance(popup);
      collapse.show();
    }
  }
});


document.addEventListener('DOMContentLoaded', () => {
  const counters = document.querySelectorAll('.counter');
  let started = false;

  function startCounter(counter) {
    const target = +counter.getAttribute('data-target');
    const duration = 2000;
    const startTime = performance.now();

    function update(currentTime) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const value = Math.floor(progress * target);
      counter.textContent = value.toLocaleString('en-US');
      
      if (progress < 1) {
        requestAnimationFrame(update)
      }
      else {
        counter.textContent = target.toLocaleString('en-US');
      }
    }
    requestAnimationFrame(update);
  }

  function checkSectionVisible() {


    const section = document.querySelector('#counterSection');
    

    const rect = section.getBoundingClientRect();
    const inView = rect.top < window.innerHeight && rect.bottom > 0;
    if (inView && !started) {
      counters.forEach(counter => startCounter(counter));
      started = true;
    }
  }
  window.addEventListener('scroll', checkSectionVisible);

  checkSectionVisible();
})

$('.heroSlider').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    dots:true,
    autoplay: true,
    animateIn: 'fadeIn',
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})