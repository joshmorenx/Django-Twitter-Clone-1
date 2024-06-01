$('#filtre').click(function(){
    $('.wrapped-content').show()
})
// $('#filtre').mouseout(function(){
//     $('.wrapped-content').hide()
// })
$('.wrapped-content').click(function(){
    $(this).show()
})

$(document).click((event) => {
    if (!$(event.target).closest('#filtre, .popup-filter').length) {
      // the click occured outside '#element'
      $('.wrapped-content').hide()
    }        
})
// $('.wrapped-content').mouseout(function(){
//     $(this).hide()
// })
$('#mopt').click(function(){
    $('#post_sys').slideDown("smooth")
    $(this).slideUp("smooth")
    $('#go').slideUp("smooth")
})
$('#lopt').click(function(){
    $('#mopt').slideDown("smooth")
    $('#go').slideDown("smooth")
    $('#post_sys').slideUp("smooth")
})