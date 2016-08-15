$(document).ready ->
  $('.inner').hover ->
    $(this).find('p').transition('stop all').transition({
      animation: 'scale',
      duration: '200ms'
    })
  , ->
    $(this).find('p').transition('stop all').transition({
      animate: 'fade out',
      duration: '200ms'
    })
