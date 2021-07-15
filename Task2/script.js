$(document).ready(function () {
    setInterval(() => {
        r = Math.round(Math.random() * 255);
        g = Math.round(Math.random() * 255);
        b = Math.round(Math.random() * 255);
        $('.discoBall').animate({
            width: `${Math.round(Math.random() * 200)}`,
            height: `${Math.round(Math.random() * 200)}`,
            top: `${Math.round(Math.random() * (innerHeight - 200))}`,
            left: `${Math.round(Math.random() * (innerWidth - 200))}`,
            backgroundColor: `rgb(${r}, ${g}, ${b})`
        }, 1000, 'easeInSine', function(){
            $('.discoBall').css({
                border: `5px solid rgb(${r}, ${g}, ${b})`,
                boxShadow: `10px 20px 70px rgb(${r}, ${g}, ${b})`
            });
        });
    })
});