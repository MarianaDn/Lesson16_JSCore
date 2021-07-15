$(document).ready(function () {
    let colorBox;
    let topPos, leftPos;
    let elementIndex;
    $('.box').each(function (index, element) {
        $(element).click(function () {
            topPos = this.offsetTop;
            leftPos = this.offsetLeft;
            elementIndex = index;
            console.log(leftPos)
            colorBox = $(this).css('background-color');
            $(this).css('background-color', '#fff')
            $('.modalBlock').css({
                backgroundColor: 'rgba(0, 0, 0, 0.765)',
                zIndex: 3
            })
            $('.modal').css({
                backgroundColor: colorBox,
                top: topPos,
                left: leftPos
            })
            $('.modal').animate({
                width: '350px',
                height: '350px',
                top: `${topPos + 50}`,
                left: `${window.innerWidth/2 - 175}`
            }, 2000, 'easeInSine');
        })
    });
    $('.modal').on('click', function () {
        $('.modal').animate({
            width: '150px',
            height: '150px',
            top: `${topPos}`,
            left: `${leftPos}`
        }, 2000, 'easeOutSine', function () {
            $('.modalBlock').css({
                backgroundColor: '#fff',
                zIndex: -1
            });
            $('.modal').css('background-color','#fff');
            $(`.box:eq(${elementIndex})`).css('background-color', `${colorBox}`)
        });
    });
});
