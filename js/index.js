window.onload = function () {
    var btn = document.querySelector('.search-button');
    var input = document.querySelector('.search-input');
    var number = 1;
    btn.addEventListener('click', function () {
        if (number == 0) {
            input.style.opacity = 0;
            number = 1;
        }
        else if (number == 1) {
            input.style.opacity = 1;
            number = 0;
        }
    });
    var backToTopBtn = document.querySelector('.back-to-top');

    window.addEventListener('scroll', function () {
        if (window.pageYOffset > 400) {
            backToTopBtn.style.display = 'block';
        } else {
            backToTopBtn.style.display = 'none';
        }
    });

    backToTopBtn.addEventListener('click', function () {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

}