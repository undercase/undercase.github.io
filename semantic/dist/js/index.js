$(document).ready(function() {
  return $('.inner').hover(function() {
    $(this).find('h2').stop().hide();
    return $(this).find('p').transition('stop all').transition({
      animation: 'scale',
      duration: '200ms'
    });
  }, function() {
    return $(this).find('p').transition('stop all').transition({
      animate: 'scale out',
      duration: '100ms',
      onComplete: function() {
        return $(this).siblings('h2').stop().show();
      }
    });
  });
});
