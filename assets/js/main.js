(function ($) {
    "use strict";
    if ($('.preloader').length) {
        $('.preloader').fadeOut();
    }
    jQuery(document).on('ready', function () {
        jQuery(window).on('scroll', function (event) {
            var scroll = jQuery(window).scrollTop();
            if (scroll < 180) {
                jQuery(".header-sticky").removeClass("sticky");
            } else {
                jQuery(".header-sticky").addClass("sticky");
            }
        });
        $('.canvas_open').on('click', function () {
            $('.offcanvas_menu_wrapper,.off_canvars_overlay').addClass('active')
        });

        $('.canvas_close,.off_canvars_overlay').on('click', function () {
            $('.offcanvas_menu_wrapper,.off_canvars_overlay').removeClass('active')
        });
        var $offcanvasNav = $('.offcanvas_main_menu'),
            $offcanvasNavSubMenu = $offcanvasNav.find('.sub-menu');
        $offcanvasNavSubMenu.parent().prepend('<span class="menu-expand"><i class="fa fa-angle-down"></i></span>');

        $offcanvasNavSubMenu.slideUp();

        $offcanvasNav.on('click', 'li a, li .menu-expand', function (e) {
            var $this = $(this);
            if (($this.parent().attr('class').match(/\b(menu-item-has-children|has-children|has-sub-menu)\b/)) && ($this.attr('href') === '#' || $this.hasClass('menu-expand'))) {
                e.preventDefault();
                if ($this.siblings('ul:visible').length) {
                    $this.siblings('ul').slideUp('slow');
                } else {
                    $this.closest('li').siblings('li').find('ul:visible').slideUp('slow');
                    $this.siblings('ul').slideDown('slow');
                }
            }
            if ($this.is('a') || $this.is('span') || $this.attr('clas').match(/\b(menu-expand)\b/)) {
                $this.parent().toggleClass('menu-open');
            } else if ($this.is('li') && $this.attr('class').match(/\b('menu-item-has-children')\b/)) {
                $this.toggleClass('menu-open');
            }
        });

        if ($('.counter').length) {
            $('.counter').counterUp({
                delay: 10,
                time: 3000
            });
        }

        function mainSlider() {
            var BasicSlider = $('.infetech-banner-slide');
            var BasicSlider2 = $('.infetech-banner-area-layout-2');
            BasicSlider.on('init', function (e, slick) {
                var $firstAnimatingElements = $('.infetech-banner-slide-active:first-child').find('[data-animation]');
                doAnimations($firstAnimatingElements);
            });
            BasicSlider2.on('init', function (e, slick) {
                var $firstAnimatingElements = $('.infetech-banner-slide-item:first-child').find('[data-animation]');
                doAnimations($firstAnimatingElements);
            });

            BasicSlider.on('beforeChange', function (e, slick, currentSlide, nextSlide) {
                var $animatingElements = $('.infetech-banner-slide-active[data-slick-index="' + nextSlide + '"]').find('[data-animation]');
                doAnimations($animatingElements);
            });


            BasicSlider2.on('beforeChange', function (e, slick, currentSlide, nextSlide) {
                var $animatingElements = $('.infetech-banner-slide-item[data-slick-index="' + nextSlide + '"]').find('[data-animation]');
                doAnimations($animatingElements);
            });

            BasicSlider.slick({
                autoplay: true,
                autoplaySpeed: 10000,
                dots: false,
                fade: true,
                arrows: true,
                prevArrow: '<span class="prev"><i class="fal fa-long-arrow-left"></i></span>',
                nextArrow: '<span class="next"><i class="fal fa-long-arrow-right"></i></span>',
                responsive: [
                    {
                        breakpoint: 768,
                        settings: {
                            arrows: false
                        }
                    }
                ]
            });

            BasicSlider2.slick({
                autoplay: true,
                autoplaySpeed: 10000,
                dots: false,
                fade: true,
                arrows: true,
                prevArrow: '<span class="prev"><i class="fal fa-long-arrow-left"></i></span>',
                nextArrow: '<span class="next"><i class="fal fa-long-arrow-right"></i></span>',
                responsive: [
                    {
                        breakpoint: 768,
                        settings: {
                            arrows: false
                        }
                    }
                ]
            });


            function doAnimations(elements) {
                var animationEndEvents = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
                elements.each(function () {
                    var $this = $(this);
                    var $animationDelay = $this.data('delay');
                    var $animationType = 'animated ' + $this.data('animation');
                    $this.css({
                        'animation-delay': $animationDelay,
                        '-webkit-animation-delay': $animationDelay
                    });
                    $this.addClass($animationType).one(animationEndEvents, function () {
                        $this.removeClass($animationType);
                    });
                });
            }
        }
        mainSlider();

        $('.infetech-feature-slide').slick({
            arrows: false,
            dots: false,
            infinite: true,
            slidesToShow: 5,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000,
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 4,
                    }
                },

                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 3,
                    }
                },

                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 2,
                        dots: false,
                    }
                },

                {
                    breakpoint: 576,
                    settings: {
                        slidesToShow: 1,
                        dots: false,
                    }
                }
            ]
        });

        $('.infetech-project-slide').slick({
            arrows: false,
            dots: true,
            infinite: true,
            slidesToShow: 4,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000,
            responsive: [
                {
                    breakpoint: 1600,
                    settings: {
                        slidesToShow: 3,
                    }
                }, {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 3,
                    }
                },
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 2,
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 2,
                        dots: false,
                    }
                },
                {
                    breakpoint: 576,
                    settings: {
                        slidesToShow: 1,
                        dots: false,
                    }
                }
            ]
        });
        $('.infetech-project-slide-2').slick({
            arrows: false,
            dots: true,
            infinite: true,
            slidesToShow: 2,
            slidesToScroll: 1,
            autoplay: false,
            autoplaySpeed: 2000,
            centerPadding: '350px',
            centerMode: true,
            responsive: [
                {
                    breakpoint: 1600,
                    settings: {
                        slidesToShow: 2,
                        centerPadding: '250px',
                    }
                }, {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 1,
                        centerPadding: '250px',
                    }
                },
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 1,
                        centerPadding: '250px',
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1,
                        dots: false,
                        centerPadding: '100px',
                    }
                },
                {
                    breakpoint: 576,
                    settings: {
                        slidesToShow: 1,
                        dots: false,
                        centerPadding: '0px',
                    }
                }
            ]
        });
        $('.infetech-sponser-slide').slick({
            arrows: false,
            dots: false,
            infinite: true,
            slidesToShow: 5,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000,
            responsive: [
                {
                    breakpoint: 1600,
                    settings: {
                        slidesToShow: 5,
                    }
                }, {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 4,
                    }
                },
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 4,
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 3,
                        dots: false,
                    }
                },
                {
                    breakpoint: 576,
                    settings: {
                        slidesToShow: 2,
                        dots: false,
                    }
                }
            ]
        });
        $('.infetech-testimonial-slide').slick({
            arrows: false,
            dots: true,
            infinite: true,
            slidesToShow: 2,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000,
            responsive: [
                {
                    breakpoint: 1600,
                    settings: {
                        slidesToShow: 2,
                    }
                }, {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 2,
                    }
                },
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 1,
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1,
                        dots: false,
                    }
                },
                {
                    breakpoint: 576,
                    settings: {
                        slidesToShow: 1,
                        dots: false,
                    }
                }
            ]
        });
        $('.project-slider-active').slick({
            arrows: false,
            dots: true,
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000,
            responsive: [
                {
                    breakpoint: 1600,
                    settings: {
                        slidesToShow: 3,
                    }
                }, {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 2,
                    }
                },
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 2,
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1,
                        dots: false,
                    }
                }
            ]
        });
        $('.infetech-blog-slide-active').slick({
            arrows: false,
            prevArrow: '<span class="prev"><i class="fal fa-long-arrow-left"></i></span>',
            nextArrow: '<span class="next"><i class="fal fa-long-arrow-right"></i></span>',
            dots: false,
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000,
            responsive: [
                {
                    breakpoint: 1600,
                    settings: {
                        slidesToShow: 2,
                    }
                }, {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 1,
                    }
                },
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 2,
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1,
                        dots: false,
                    }
                }
            ]
        });
        $('.infetech-sponser-slide-3').slick({
            arrows: false,
            prevArrow: '<span class="prev"><i class="fal fa-long-arrow-left"></i></span>',
            nextArrow: '<span class="next"><i class="fal fa-long-arrow-right"></i></span>',
            dots: false,
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000,
            responsive: [
                {
                    breakpoint: 1800,
                    settings: {
                        slidesToShow: 2,
                    }
                }, {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 1,
                    }
                }
            ]
        });
        $('.testimonial-slider-active-4').slick({
            arrows: true,
            prevArrow: '<span class="prev"><i class="fal fa-long-arrow-left"></i></span>',
            nextArrow: '<span class="next"><i class="fal fa-long-arrow-right"></i></span>',
            dots: false,
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000,
            fade: true,
            asNavFor: '.testimonial-thumb-list',
            responsive: [
                {
                    breakpoint: 576,
                    settings: {
                        arrows: false,
                    }
                }
            ]
        });
        $('.testimonial-thumb-list').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            asNavFor: '.testimonial-slider-active-4',
            dots: false,
            arrows: false,
            focusOnSelect: true,
            vertical: true,
            verticalSwiping: true,
            responsive: [
                {
                    breakpoint: 992,
                    settings: {
                        vertical: false,
                        verticalSwiping: false,
                    }
                }
            ]
        });
        $('.serving-slider-active').slick({
            arrows: false,
            dots: false,
            infinite: true,
            slidesToShow: 5,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000,
            responsive: [
                {
                    breakpoint: 1600,
                    settings: {
                        slidesToShow: 4,
                    }
                }, {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 3,
                    }
                }, {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 2,
                    }
                }, {
                    breakpoint: 576,
                    settings: {
                        slidesToShow: 1,
                    }
                }
            ]
        });
        $('.testimonial-slide-active-5').slick({
            arrows: false,
            dots: true,
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000,
        });
        if ($('.search-box-btn').length) {
            $('.search-box-btn').on('click', function () {
                $('body').addClass('search-active');
            });
            $('.close-search').on('click', function () {
                $('body').removeClass('search-active');
            });
        }



        if ($('.wow').length) {
            var wow = new WOW({
                boxClass: 'wow',
                animateClass: 'animated', 
                offset: 150, 
                mobile: true, 
                live: true
            });
            wow.init();
        }

        $('.video-popup').magnificPopup({
            type: 'iframe'
        });


        $('.image-popup').magnificPopup({
            type: 'image',
            gallery: {
                enabled: true
            }
        });


        $('.second.circle').circleProgress({
            value: 0.6
        }).on('circle-animation-progress', function (event, progress) {
            $(this).find('strong').html(parseInt(80 * progress) + '<i>%</i>');
        });

        $(window).on('scroll', function () {
            var scrolled = $(window).scrollTop();
            if (scrolled > 300) $('.go-top').addClass('active');
            if (scrolled < 300) $('.go-top').removeClass('active');
        });

        $('.go-top').on('click', function () {
            $("html, body").animate({
                scrollTop: "0"
            }, 0);
        });

    });

})(jQuery);
