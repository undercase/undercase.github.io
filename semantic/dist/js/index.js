$(document).ready(function() {
  return $('.inner').hover(function() {
    return $(this).find('p').transition('stop all').transition({
      animation: 'scale',
      duration: '200ms'
    });
  }, function() {
    return $(this).find('p').transition('stop all').transition({
      animate: 'fade out',
      duration: '200ms'
    });
  });
});
