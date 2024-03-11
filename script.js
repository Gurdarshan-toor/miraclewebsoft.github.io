// logo carousel
// <script>
// var copy = document.querySelector(".logos-slide").cloneNode(true);
// document.querySelector(".logos").appendChild(copy);
// </script>

$('.right_slider').slick({
    dots: true,
    autoplay: true,
    autoplaySpeed: 2000,
    infinite: true,
    speed: 1200,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: '<div class="slick_batn slick_prv"><img src="left.png"></div>',
    nextArrow: '<div class="slick_batn slick_nxt"><img src="right.png"></div>',
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});

