window.onload = () => {
  const bgCount = 5;
  const randomNumber = Math.ceil(Math.random() * bgCount);
  document.body.style.background = `url(img/bg-${randomNumber}.jpg)`;
};
