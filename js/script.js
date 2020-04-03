/* Sidenav */
const sideNav = document.querySelectorAll('.sidenav');
M.Sidenav.init(sideNav);

/* Slider */
const sliDer = document.querySelectorAll('.slider');
M.Slider.init(sliDer, {
    indicators: false,
    transition: 600,
    interval: 3000
});

/* Parallax */
const paralLax = document.querySelectorAll('.parallax');
M.Parallax.init(paralLax);

/* Material Boxed */
const materialBox = document.querySelectorAll('.materialboxed');
M.Materialbox.init(materialBox);

/* Scrollspy */
const scrollSpy = document.querySelectorAll('.scrollspy');
M.ScrollSpy.init(scrollSpy, {
    scrollOffset: 50
});