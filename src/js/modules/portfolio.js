import Splide from "@splidejs/splide";
import "@splidejs/splide/css";

function portfolio() {
  var splide = new Splide(".splide", {
    type: "loop",
	  perPage: 1,
	  focus    : 'center',
    autoWidth: true,
    // autoplay: true,
    breakpoints: {
      1200: {height: "33rem"},
      1000: { height: "30rem" },
      800: {height: "26rem"},
      640 : {height: "21rem"},
  },
  });

  splide.mount();
}

export default portfolio;
