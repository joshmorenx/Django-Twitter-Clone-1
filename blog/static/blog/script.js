var objeto = {'background-color':'rgb(255 240 240','color':'black','font-family':'Ubuntu'}
var botones = {'color':'black !important','width':'75%', 'padding-left':'15%'}
var secciones = {'border':'1px solid gray','color':'black'}
var algunosDivs = {'width':'100%','border':'1px solid gray','border-radius':'10rem','background-color':'white'}
var sticky = {'overflow':'hidden','background-color':'#333','position':'-webkit-sticky','z-index':'100','position':'sticky','top':'0px'}

var src = document.querySelector('#busqueda')
var nav = document.body.querySelector('.navbar').appendChild(src)
$('.hovered-tweet a').css('color','black')
$('label').css('color','white')
$('body, .search').css(objeto)
$('.profile-section, .t-section').css('background-color','#a3a3a3c2')
$('.btn-outline-primary').css(botones)
$('.btn-outline-secondary').css('color','black')
$('.media, .profile-section').css(secciones)
$('.media:hover').css('background-color','black')
$('div>.search').css(algunosDivs)
$('.fa-search, .search-container input').css('color','black')
$('a[href^="/about/"]').hide()
$('p').css('color','black')
$('h2').css('color','orange')
$('header').css(sticky)