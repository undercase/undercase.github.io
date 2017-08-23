$(document).ready(() => {
  var img = document.getElementsByTagName('img')[0];
  var aquarelle = new Aquarelle(img, 'img/mask.png', {
      autoplay: true,
      loop: true
  });
});
