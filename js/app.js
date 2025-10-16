(() => {
    "use strict";
    function isWebp() {
        function testWebP(callback) {
            let webP = new Image;
            webP.onload = webP.onerror = function() {
                callback(webP.height == 2);
            };
            webP.src = "data:image/webp;";
        }
        testWebP((function(support) {
            let className = support === true ? "webp" : "no-webp";
            document.documentElement.classList.add(className);
        }));
    }
    let addWindowScrollEvent = false;
    setTimeout((() => {
        if (addWindowScrollEvent) {
            let windowScroll = new Event("windowScroll");
            window.addEventListener("scroll", (function(e) {
                document.dispatchEvent(windowScroll);
            }));
        }
    }), 0);
    document.addEventListener("DOMContentLoaded", (function() {
        const menuItems = document.querySelectorAll(".menu__dropdown-items");
        menuItems.forEach((item => {
            const submenu = item.querySelector(".menu__dropdown");
            if (submenu) item.addEventListener("click", (function(e) {
                e.stopPropagation();
                submenu.classList.toggle("show");
            }));
        }));
        document.addEventListener("mouseout", (function() {
            document.querySelectorAll(".menu__dropdown").forEach((submenu => {
                submenu.classList.remove("show");
            }));
        }));
    }));
    const menuBurger = document.querySelector(".icon-menu");
    const menuNav = document.querySelector(".header__column");
    const menuBody = document.querySelector("body");
    if (menuBurger) menuBurger.addEventListener("click", (function(e) {
        menuBurger.classList.toggle("menu-open");
        menuNav.classList.toggle("active");
        menuBody.classList.toggle("lock");
        if (menuNav) menuNav.addEventListener("click", (function(e) {
            menuBurger.classList.remove("menu-open");
            menuNav.classList.remove("active");
            menuBody.classList.remove("lock");
        }));
    }));
    document.querySelectorAll(".all").forEach((item => {
        item.addEventListener("click", (() => {
            const parent = item.parentNode;
            const initialText = "Свернуть";
            parent.classList.toggle("list-active");
            item.classList.toggle("active");
            if (item.textContent.toLowerCase().includes(initialText.toLowerCase())) item.textContent = "Развернуть"; else item.textContent = initialText;
        }));
    }));
    document.querySelectorAll(".all").forEach((el => el.addEventListener("click", (() => {
        let list = el.previousElementSibling;
        if (list.style.maxHeight === list.scrollHeight + "px") list.style.maxHeight = null; else list.style.maxHeight = list.scrollHeight + "px";
    }))));
    document.querySelectorAll("#radio-no, #radio-no-me").forEach((item => {
        item.addEventListener("click", (() => {
            document.querySelectorAll(".form").forEach((e => {
                e.classList.add("form-active");
            }));
        }));
    }));
    document.querySelectorAll("#radio-yes, #radio-yes-me").forEach((item => {
        item.addEventListener("click", (() => {
            document.querySelectorAll(".form").forEach((e => {
                e.classList.remove("form-active");
            }));
        }));
    }));
    function initSliders() {
        if (document.querySelector(".advantages__slider")) new Swiper(".advantages__slider", {
            slidesPerView: 1,
            spaceBetween: 12,
            autoHeight: true,
            grabCursor: true,
            scrollbar: {
                el: ".advantages-scrollbar",
                draggable: true,
                dragSize: 194
            },
            navigation: {
                prevEl: ".advantages-button-prev",
                nextEl: ".advantages-button-next"
            },
            breakpoints: {
                320: {
                    slidesPerView: 1,
                    spaceBetween: 12,
                    scrollbar: {
                        dragSize: 65
                    }
                },
                768: {
                    slidesPerView: 1.6,
                    spaceBetween: 20,
                    scrollbar: {
                        dragSize: 130
                    }
                },
                992: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                    scrollbar: {
                        dragSize: 194
                    }
                }
            }
        });
        if (document.querySelector(".reviews__slider")) new Swiper(".reviews__slider", {
            slidesPerView: 1.01,
            grabCursor: true,
            scrollbar: {
                el: ".reviews-scrollbar",
                draggable: true,
                dragSize: 194
            },
            navigation: {
                prevEl: ".reviews-button-prev",
                nextEl: ".reviews-button-next"
            },
            breakpoints: {
                320: {
                    slidesPerView: 1.01,
                    scrollbar: {
                        dragSize: 65
                    }
                },
                768: {
                    slidesPerView: 2,
                    scrollbar: {
                        dragSize: 130
                    }
                },
                1100: {
                    slidesPerView: 3,
                    scrollbar: {
                        dragSize: 194
                    }
                }
            }
        });
        if (document.querySelector(".gallery__slider")) new Swiper(".gallery__slider", {
            slidesPerView: 1.01,
            grabCursor: true,
            spaceBetween: 12,
            scrollbar: {
                el: ".gallery-scrollbar",
                draggable: true,
                dragSize: 194
            },
            navigation: {
                prevEl: ".gallery-button-prev",
                nextEl: ".gallery-button-next"
            },
            breakpoints: {
                320: {
                    spaceBetween: 12,
                    slidesPerView: 1.01,
                    scrollbar: {
                        dragSize: 65
                    }
                },
                550: {
                    spaceBetween: 20,
                    slidesPerView: 2,
                    scrollbar: {
                        dragSize: 130
                    }
                },
                850: {
                    spaceBetween: 20,
                    slidesPerView: 3,
                    scrollbar: {
                        dragSize: 194
                    }
                }
            }
        });
        if (document.querySelector(".types-fish__slider")) new Swiper(".types-fish__slider", {
            slidesPerView: 1.01,
            grabCursor: true,
            spaceBetween: 12,
            navigation: {
                prevEl: ".types-fish-button-prev",
                nextEl: ".types-fish-button-next"
            },
            breakpoints: {
                320: {
                    slidesPerView: 1.01
                },
                450: {
                    spaceBetween: 12,
                    slidesPerView: 1.3
                },
                650: {
                    spaceBetween: 20,
                    slidesPerView: 2
                },
                991: {
                    spaceBetween: 20,
                    slidesPerView: 1.5
                },
                1200: {
                    spaceBetween: 20,
                    slidesPerView: 2
                }
            }
        });
    }
    window.addEventListener("load", (function(e) {
        initSliders();
    }));
    document.querySelectorAll(".video-wrapper").forEach((el => el.addEventListener("click", (() => {
        let wrapperVideo = el.firstElementChild;
        let btnStop = el.lastElementChild;
        if (btnStop) btnStop.classList.add("btn-play_active");
        if (wrapperVideo) wrapperVideo.controls = "controls";
        if (/Firefox|Mac68K|MacPPC|MacIntel|Macintosh|macOS|iPhone|iPad|iPod|Android/i.test(navigator.userAgent)) wrapperVideo.play();
    }))));
    var videoPlaying = null;
    const onPlay = function() {
        if (videoPlaying && videoPlaying != this) videoPlaying.pause();
        videoPlaying = this;
    };
    const videos = document.getElementsByClassName("video-content");
    for (let i = 0; i < videos.length; i++) videos[i].addEventListener("play", onPlay);
    window.addEventListener("load", (function() {
        baguetteBox.run(".gallery__wrapper", {
            animation: "fadeIn"
        });
    }));
    const popups = document.querySelectorAll(".popup");
    const popupButton = document.querySelectorAll(".button");
    const body = document.body;
    const popupWrapper = document.querySelectorAll(".popup__wrapper");
    const fixBlock = document.querySelectorAll(".fix-block");
    let paddingOffset = window.innerWidth - document.body.offsetWidth + "px";
    let marginOffset = document.body.offsetWidth - window.innerWidth + "px";
    function openPopup(elem) {
        elem.classList.add("popup-open");
        body.classList.add("lock");
        document.body.style.paddingRight = paddingOffset;
        fixBlock.forEach((el => {
            el.style.paddingRight = paddingOffset;
        }));
        popupWrapper.forEach((el => {
            el.style.marginLeft = marginOffset;
        }));
    }
    function closePopup(e) {
        if (e.target.classList.contains("popup__close") || e.target.closest(".popup__close") || e.target.classList.contains("popup__wrapper")) {
            e.target.closest(".popup").classList.remove("popup-open");
            body.classList.remove("lock");
            document.body.style.paddingRight = "0px";
            fixBlock.forEach((el => {
                el.style.paddingRight = "0px";
            }));
            popupWrapper.forEach((el => {
                el.style.marginLeft = "auto";
            }));
        }
        if (e.target.classList.contains("popup__close") || e.target.closest(".popup__close") || e.target.classList.contains("popup__wrapper")) {
            e.target.closest(".popup").classList.remove("popup-open");
            body.classList.remove("lock");
            document.body.style.paddingRight = "0px";
            fixBlock.forEach((el => {
                el.style.paddingRight = "0px";
            }));
            popupWrapper.forEach((el => {
                el.style.marginLeft = "auto";
            }));
        }
    }
    popupButton.forEach((btn => {
        btn.addEventListener("click", (e => {
            let data = e.target.dataset.popupOpen;
            popups.forEach((popup => {
                if (popup.dataset.popup == data || popup.dataset.popup == e.target.closest(".button").dataset.popupOpen) openPopup(popup);
            }));
        }));
    }));
    popups.forEach((popup => {
        popup.addEventListener("click", (e => closePopup(e)));
    }));
    window["FLS"] = true;
    isWebp();
})();