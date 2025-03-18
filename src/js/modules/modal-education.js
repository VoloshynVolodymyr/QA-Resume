function modal_education() {
  document.addEventListener("DOMContentLoaded", function() {
    var cardLinks = document.querySelectorAll('[id^="card"]');
    var modal = document.getElementById("myModal");

    cardLinks.forEach(function(link) {
      link.addEventListener("click", function(event) {
        var linkId = this.getAttribute("id");
        var imgNumber = linkId.replace("card", "");
        var imagePath = "img/education/education-" + imgNumber + ".jpg";

        //При клікові на елемент слайдера відкриваємо модальне вікно
        var modalImage = document.getElementById("modalImage");
        modalImage.setAttribute("src", imagePath);
        modal.classList.add("show");

        // Закриваємо модальне вікно Education, натискаючи кнопку Close
        const btnClose = document.querySelector(".btn-close");
        btnClose.addEventListener("click", function() {
          modal.classList.remove("show");
        });

        // Закриваємо модальне вікно Education, клікаючи поза картинкою
        modal.addEventListener("click", function(event) {
          if (event.target !== modalImage) {
            modal.classList.remove("show");
          }
        });

        // Закриваємо модальне вікно Education, натискаючи Esc на клавіатурі
        document.addEventListener("keydown", function(event) {
          if (event.key === "Escape") {
            modal.classList.remove("show");
          }
        });

        event.preventDefault();
      });
    });
  });
}

export default modal_education;
