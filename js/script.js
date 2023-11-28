
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

    var headerHeight = $('header').outerHeight(); // ヘッダーについているID、クラス名など、余白を開けたい場合は + 10を追記する。
    var urlHash = location.hash; // ハッシュ値があればページ内スクロール
    if (urlHash) { // 外部リンクからのクリック時
        $('body,html').stop().scrollTop(0); // スクロールを0に戻す
        setTimeout(function () { // ロード時の処理を待ち、時間差でスクロール実行
            var target = $(urlHash);
            var position = target.offset().top - headerHeight;
            $('body,html').stop().animate({ scrollTop: position }, 500); // スクロール速度ミリ秒
        }, 100);
    }
    $('a[href^="#"]').click(function () { // 通常のクリック時
        var href = $(this).attr("href"); // ページ内リンク先を取得
        var target = $(href);
        var position = target.offset().top - headerHeight;
        $('body,html').stop().animate({ scrollTop: position }, 500); // スクロール速度ミリ秒
        return false; // #付与なし、付与したい場合は、true
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

    // アコーディオン
    $(".js-accordion_title").on("click", function () {
        // クリックした次の要素を開閉
        $(this).next().slideToggle(450);
        // タイトルにopenクラスを付け外しして矢印の向きを変更
        $(this).toggleClass("open", 450);
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

