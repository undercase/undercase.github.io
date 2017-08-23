$(document).ready(() => {
  var img = $('#splash');
  new Aquarelle(img, 'img/mask.png', {
      autoplay: true,
      loop: true
  });
});
