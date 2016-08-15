$(document).ready ->
  $('.inner').hover ->
    $(this).find('h2').stop().hide()
    $(this).find('p').transition('stop all').transition({
      animation: 'scale',
      duration: '200ms'
    })
  , ->
    $(this).find('p').transition('stop all').transition({
      animate: 'scale out',
      duration: '100ms',
      onComplete: ->
        $(this).siblings('h2').stop().show()
    })
