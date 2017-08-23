$(document).ready(() => {
  var img = document.getElementsByTagName('img')[0];

  var aquarelle = new Aquarelle(img, 'img/mask.png', {
      autoplay: true
  });

  aquarelle.addEventListener('created', function() {
    var canvas = this.getCanvas();
    img.parentNode.insertBefore(canvas, img.nextSibling);
    img.parentNode.removeChild(img);
  });
});
