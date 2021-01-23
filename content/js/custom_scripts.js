$(document).ready(function () {
    $(window).scroll(function () {
        if (this.scrollY > 20) {
            $('.navbar').addClass("stickey");
        } else {
            $('.navbar').removeClass("stickey");
        }
        if (this.scrollY > 400) {
            $('.scroll-up-button').addClass("show");
        }
        else {
            $('.scroll-up-button').removeClass("show");
        }
    });

    // $(window).scrollbtn(function () {
    //     if (this.scrollY > 500) {
    //         $('.scroll-up-button').addClass("show");
    //     }
    //     else {
    //         $('.scroll-up-button').removeClass("show");
    //     }
    // });

    //slideup script
    $('.scroll-up-button').click(function () {
        $('html').animate({ scrollTop: 0 });
    });

    //typing animation script
    var typed = new Typed('.typing', {
        strings: ["Ui Developer", "Front-end Developer", "UI/Ux Designer", "Graphics Designer", "reactJS Ninja"],
        typeSpeed: 100,
        backSpeed: 40,
        loop: true
    });


    //typing animation script
    var typed = new Typed('.typing_2', {
        strings: ["Ui Developer", "Front-end Developer", "UI/Ux Designer", "Graphics Designer", "reactJS Ninja"],
        typeSpeed: 100,
        backSpeed: 100,
        loop: true
    });


    // toggle menu 
    $('.menu-btn').click(function () {
        $('.navbar .menu').toggleClass('active');
        $('.menu-btn i').toggleClass('active');
    });


    // owl script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoPlay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            600: {
                items: 2,
                nav: false
            },
            1000: {
                items: 3,
                nav: false
            }
        }
    });

});




