
$(function () {
    //ページ内スクロール
    var navHeight = $(".gnav__list").outerHeight();

    $('a[href^="#"]').on("click", function () {
        var href = $(this).attr("href");
        var target = $(href == "#" || href == "" ? "html" : href);
        var position = target.offset().top - navHeight;
        $("html, body").animate({ scrollTop: position, }, 600, "swing");
        return false;
    });


    //アニメーションをつけるときはclassにfadeと動きを指示するクラスを付与する
    $(window).on('load scroll', function () {
        $('.fade').each(function () {
            var target = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var height = $(window).height();
            if (scroll > target - height) {
                $(this).addClass('active');
            }
        });
    });

    //TOP スライダー// 
    $("#js__top__slider").slick({
        centerMode: true,
        centerPadding: '14%',
        dots: true,
        appendDots: $('.top__slider__dots'),
        // autoplay: true,
        autoplaySpeed: 3000,
        speed: 1000,
        infinite: true,
        responsive: [
            {
                breakpoint: 800,
                settings: {
                    centerPadding: '11.5%',
                },

                breakpoint: 501,
                settings: {
                    centerPadding: '5%',
                },
            },
        ],
    });

    $('.js__about__slider').slick({
        autoplay: true,
        autoplaySpeed: 0,
        speed: 8000,
        cssEase: "linear",
        slidesToShow: 3,
        swipe: false,
        arrows: false,
        pauseOnFocus: false,
        pauseOnHover: false,
        centerPadding: '5%',
        responsive: [
            {
                breakpoint: 750,
                settings: {
                    slidesToShow: 2,
                }
            }
        ]
    });

    $(".regular").slick({
        autoplay: true,
        speed: 800,
        autoplaySpeed: 2000,
        dots: false,
    });
});

/* ハンバーガーメニュー */
const hamBtn = document.getElementById("hamBtn");
const hamburger__gnav = document.getElementsByClassName("hamburgerGnav")

//クリックすると、ハンバーガーメニューが表示
hamBtn.addEventListener('click', () => {
    document.querySelector('html').classList.toggle('open');
});

//アンカーメニュークリック後、ハンバーガメニュー非表示
$('#js_hamburger a[href]').on('click', function (event) {
    $('#hamBtn').trigger('click');
});

$('.gnav__logo a[href]').on('click', function (event) {
    document.querySelector('html').classList.remove('open');
});
