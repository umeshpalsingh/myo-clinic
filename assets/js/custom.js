$(document).ready(function () {
  $(".play-btn").click(function () {
    $(".play-popup").addClass("show");
  });
  $(".close-popup").click(function () {
    $(".play-popup").removeClass("show");
  });
});

var swiper = new Swiper(".myTestimonial", {
  pagination: {
    el: ".swiper-pagination",
  },
  speed: 1000,
  loop: true,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  breakpoints: {
    300: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1401: {
      slidesPerView: 3,
      spaceBetween: 24,
    },
  },
});

$(document).ready(function () {
  $(".accordion-title").on("click", function (e) {
    e.preventDefault();

    // The content is the next sibling of the parent header
    var $content = $(this).parent().next(".content");

    if ($(this).hasClass("active")) {
      // Close the current item if it's already open
      $(this).removeClass("active");
      $content.slideUp(200);
    } else {
      // Close all other items
      $(".accordion-title").removeClass("active");
      $(".content").slideUp(200);

      // Open the clicked item
      $(this).addClass("active");
      $content.slideDown(200);
    }
  });
});

$(document).ready(function () {
  // Define the selector based on your path
  var radio1 =
    '.our-plan-grid .card-plan:nth-child(1) .card-header .custom-radio input[type="radio"]';
  var radio2 =
    '.our-plan-grid .card-plan:nth-child(2) .card-header .custom-radio input[type="radio"]';

  function checkRadioStatus() {
    if ($(radio2).is(":checked")) {
      // --- LOGIC FOR 2ND RADIO (Plan 2) ---
      $(".try-free").text("Ready to get the most out of it?");
      $(".trail-wrapper .universal-btn").text("JOIN NOW");

    } else if ($(radio1).is(":checked")) {
      // --- LOGIC FOR 1ST RADIO (Plan 1) ---
      $(".try-free").text("Try for Free. Cancel Anytime.");
      $(".trail-wrapper .universal-btn").text("START YOUR FREE TRIAL");
    }
  }

  // 3. Run on 'Change' (When user clicks)
  // We target a common parent to listen for changes on either input
  $(".our-plan-grid").on("change", 'input[type="radio"]', function () {
    checkRadioStatus();
  });

  // 4. Run on 'Load' (In case one is pre-checked by default)
  checkRadioStatus();
});


$(document).ready(function () {
    $(".open-modaldata").click(function () {
        $("#modalOverlay").fadeIn();
    });

    $(".close-icon, .continue-ebook").click(function () {
        $("#modalOverlay").fadeOut();
    });

    $("#modalOverlay").click(function (event) {
        if (!$(event.target).closest(".modal-box").length) {
            $("#modalOverlay").fadeOut();
        }
    });
});