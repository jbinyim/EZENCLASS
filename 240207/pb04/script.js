$("nav a").click(function (e) {
  $.scrollTo(this.hash || 0, 1300);
  e.preventDefault();
});
