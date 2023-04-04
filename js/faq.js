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


    var faqs = document.querySelectorAll('.faq');

    faqs.forEach((faq, index) => {
        var contents = faq.querySelectorAll('.faq-content');
        var chevrondown = faq.querySelector('.fa-chevron-down');
        var times = faq.querySelector('.fa-times');

        faq.addEventListener('click', () => {
            contents.forEach(content => {
                if (content.classList.contains('hide')) {
                    content.classList.remove('hide');
                    chevrondown.classList.add('hide');
                    times.classList.remove('hide');
                } else {
                    content.classList.add('hide');
                    chevrondown.classList.remove('hide');
                    times.classList.add('hide');
                }
            });
        });
    });



}