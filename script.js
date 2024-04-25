var tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".page2",
    start: "0% 80%",
    end: "50% 70%",
    scrub: 4,
  },
});
tl.from("#center", {
  top: "100%",
})
  .from(
    "#left1,#right1",
    {
      top: "100%",
    },
    "scroll1"
  )
  .from(
    "#left2,#right2",
    {
      top: "100%",
    },
    "scroll2"
  );

var lastscrollTop = 0;
var nav = document.querySelector("#nav");
window.addEventListener("scroll", function () {
  var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  if (scrollTop > lastscrollTop) {
    nav.style.top = "-30vh";
  } else {
    nav.style.top = "0";
  }
  lastscrollTop = scrollTop;
});

var t2 = gsap.timeline({
  scrollTrigger: {
    trigger: "#page6",
    start: "50% 50%",
    end: "170% 70%",
    pin: true,
    scrub: 2,
  },
});
if (window.innerWidth <= 650) {
  t2.to(".text1", {
    bottom: "70vh",
  })
    .to(
      ".text1",
      {
        opacity: 0,
      },
      "a"
    )
    .to(
      ".text2",
      {
        opacity: 1,
      },
      "a"
    )
    .to(
      "#img1",
      {
        x: "-40vw",
      },
      "a"
    )
    .to(
      "#img2",
      {
        x: "-33vw",
      },
      "a"
    )
    .to(".text2", {
      bottom: "70vh",
    })
    .to(
      ".text2",
      {
        opacity: 0,
      },
      "b"
    )
    .to(
      ".text3",
      {
        opacity: 1,
      },
      "b"
    )
    .to(
      "#img2",
      {
        x: "-80vw",
      },
      "b"
    )
    .to(
      "#img3",
      {
        x: "-66vw",
      },
      "b"
    )
    .to(".text3", {
      bottom: "70vh",
    })
    .to(
      ".text3",
      {
        opacity: 0,
      },
      "c"
    )
    .to(
      ".text4",
      {
        opacity: 1,
      },
      "c"
    )
    .to(
      "#img3",
      {
        x: "-120vw",
      },
      "c"
    )
    .to(
      "#img4",
      {
        x: "-100vw",
      },
      "c"
    );
} else {
  t2.to(".text1", {
    bottom: "70vh",
  })
    .to(
      ".text1",
      {
        opacity: 0,
      },
      "a"
    )
    .to(
      ".text2",
      {
        opacity: 1,
      },
      "a"
    )
    .to(
      "#img1",
      {
        x: "-25vw",
      },
      "a"
    )
    .to(
      "#img2",
      {
        x: "-20vw",
      },
      "a"
    )
    .to(".text2", {
      bottom: "70vh",
    })
    .to(
      ".text2",
      {
        opacity: 0,
      },
      "b"
    )
    .to(
      ".text3",
      {
        opacity: 1,
      },
      "b"
    )
    .to(
      "#img2",
      {
        x: "-50vw",
      },
      "b"
    )
    .to(
      "#img3",
      {
        x: "-42vw",
      },
      "b"
    )
    .to(".text3", {
      bottom: "70vh",
    })
    .to(
      ".text3",
      {
        opacity: 0,
      },
      "c"
    )
    .to(
      ".text4",
      {
        opacity: 1,
      },
      "c"
    )
    .to(
      "#img3",
      {
        x: "-70vw",
      },
      "c"
    )
    .to(
      "#img4",
      {
        x: "-62vw",
      },
      "c"
    );
}
var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

document.addEventListener("DOMContentLoaded", function () {
  const headings = document.querySelectorAll(".footer-heading");

  function toggleTagList() {
    if (window.innerWidth <= 650) {
      const tagList = this.nextElementSibling;
      tagList.style.display =
        tagList.style.display === "block" ? "none" : "block";
    }
  }

  headings.forEach((heading) => {
    heading.addEventListener("click", toggleTagList);
  });

  // Run the code initially if the window width is less than or equal to 650px
  if (window.innerWidth <= 650) {
    headings.forEach((heading) => {
      const tagList = heading.nextElementSibling;
      tagList.style.display = "none";
    });
  }

  // Listen for window resize events
  window.addEventListener("resize", function () {
    // If the window width becomes larger than 650px, hide all tag lists
    if (window.innerWidth > 650) {
      headings.forEach((heading) => {
        const tagList = heading.nextElementSibling;
        tagList.style.display = "none";
      });
    }
  });
});
