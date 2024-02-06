// jQuery 구현

// $(".stars .fas").click(function () {
//   $(this).addClass("active");
//   $(this).prevAll().addClass("active");
//   $(this).nextAll().removeClass("active");

//   const num = $(this).index();
//   const starRate = num + 1;
//   $(".print").text(starRate);
//   if (starRate === 1) {
//     $(".print").html('<img src="./img/star-lv1.png" />' + "별로에요!");
//   } else if (starRate === 2) {
//     $(".print").html('<img src="./img/star-lv2.png"/>' + "보통이에요!");
//   } else if (starRate === 3) {
//     $(".print").html('<img src="./img/star-lv3.png"/>' + "그냥 그래요!");
//   } else if (starRate === 4) {
//     $(".print").html('<img src="./img/star-lv4.png"/>' + "마음에 들어요!");
//   } else if (starRate === 5) {
//     $(".print").html('<img src="./img/star-lv5.png"/>' + "아주좋아요!");
//   }
// });

// JavaScript
const stars = document.querySelectorAll(".stars .fas");
const print = document.querySelector(".print");
const imgs = [
  "./img/star-lv1.png",
  "./img/star-lv2.png",
  "./img/star-lv3.png",
  "./img/star-lv4.png",
  "./img/star-lv5.png",
];

Element.prototype.previousElementSiblingAll = function () {
  let siblings = [];
  let current = this.previousElementSibling;
  while (current != null) {
    siblings.push(current);
    current = current.previousElementSibling;
  }
  return siblings;
};

stars.forEach((star) => {
  star.addEventListener("click", function () {
    stars.forEach(function (e) {
      e.classList.remove("active");
    });
    this.classList.add("active");

    const preStars = Array.from(this.previousElementSiblingAll());
    preStars.forEach(function (preStar) {
      preStar.classList.add("active");
    });

    const num = Array.from(stars).indexOf(this);
    const starRate = num + 1;
    if (starRate === 1) {
      print.innerHtml = '"별로에요!" <img src=${imgs[0]}>';
    } else if (starRate === 2) {
      print.innerHtml = `"별로에요!" <img src=${imgs[1]}>`;
    }
  });
});
