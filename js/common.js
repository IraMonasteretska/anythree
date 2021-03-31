var mouse = { x: 0, y: 0 };
window.addEventListener('mousemove', function (e) {
    mouse.x = e.x;
    mouse.y = e.y;
    $(".mouse-pointer-small").css({ "left": mouse.x, "top": mouse.y });
});

$(document).ready(function () {
    $("a, input, textarea, button").hover(function () {
        $(".mouse-pointer-small").addClass("link-hover");
    }, function () {
        $(".mouse-pointer-small").removeClass("link-hover");
    });
})



$(document).ready(function () {
    $(".mousepicwrapp").on("click", "a", function (event) {
        event.preventDefault();

        var id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({
            scrollTop: top
        }, 1500);
    });


    $(function () {
        $("#toup").bind('click', function (e) {
            e.preventDefault();
            $('body,html').animate({
                scrollTop: 0
            }, 2000);
        });
    });

    // burger menu
    $('.burgerbtn').click(function () {
        $('.header .col-lg-5').addClass('showm');
    });

    $(document).click(function (event) {
        let $target = $(event.target);
        if (!$target.closest('.header .col-lg-5 nav').length && !$target.closest('.burgerbtn').length) {
            $('.header .col-lg-5').removeClass('showm');
        }
    });

    $('.closemenu').click(function () {
        $('.header .col-lg-5').removeClass('showm');
    });

    // SLIDER
    if ($(".teamslider").length) {
        $(".teamslider__sl").slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            arrows: false,
            centerMode: true,
            focusOnSelect: true,
            dots: true,

            responsive: [{

                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                }

            }, {

                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                }

            }]
        });
    }
    $('#blog_search_select').niceSelect();

    
    function openMoreText(){
      

        // comments
        
        $('.comment-item__more .expand').on('click',function(e){
            e.preventDefault();
            var commentList = $(this).closest('.comment-list');
            var hc = commentList.prop('scrollHeight') ;
            
            commentList.animate({'maxHeight':hc},function () {
                $(this).addClass('comment-list--open')
            });
            commentList.find('.expand').toggle()
            commentList.find('.collapse').toggle()
        });

        $('.comment-item__more .collapse').on('click',function(e){
            e.preventDefault();
            var commentList = $(this).closest('.comment-list');
            var hc = 880;
            commentList.animate({'maxHeight':hc},function () {
                $(this).removeClass('comment-list--open')
            });
            commentList.find('.expand').toggle()
            commentList.find('.collapse').toggle()
        });
    }
    openMoreText()

    $('.show-tags-list').on('click', function(){
        $('.blog-search__tags-list').slideToggle()
    })
});