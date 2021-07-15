$('.circle').on('click', function(){
    r = Math.round(Math.random()*255);
    g = Math.round(Math.random()*255);
    b = Math.round(Math.random()*255);
    $('.circle').animate({
        width: `${Math.round(Math.random() * 300)}`,
        height: `${Math.round(Math.random() * 300)}`,
        top: `${Math.round(Math.random() * (innerHeight - 300))}`,
        left: `${Math.round(Math.random() * (innerWidth-300))}`,
        backgroundColor: `rgb(${r}, ${g}, ${b})`
    }, 2000, 'easeInSine')
})