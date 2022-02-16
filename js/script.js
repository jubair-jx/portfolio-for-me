$(window).scroll(function(){
    var scrl = $(window).scrollTop();
    if(scrl>1200){
        $('.icon').css({'opacity' : '1'})
    }
    else{
        $('.icon').css({'opacity' : '0'})
    }
});

$('.icon').on('click', function(){
    $('html').animate({'scrollTop' : '0'},1000)
});



