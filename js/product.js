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

    var product = document.querySelector('.product');
    var split = product.querySelectorAll('.split');
    var splita = product.querySelectorAll('a');
    console.log(splita);
    split[0].addEventListener('mouseover', function () {
        split[0].style.width = '75%';
        split[1].style.width = '25%';
        splita[0].style.width = '200px';
        splita[0].style.height = '40px';
        splita[0].style.backgroundColor = '#333';
        splita[0].style.color = 'white';
    });
    split[0].addEventListener('mouseout', function () {
        split[0].style.width = '50%';
        split[1].style.width = '50%';
        splita[0].style.width = '100px';
        splita[0].style.height = '40px';
        splita[0].style.backgroundColor = 'white';
        splita[0].style.color = '#333';
    });
    split[1].addEventListener('mouseover', function () {
        split[1].style.width = '75%';
        split[0].style.width = '25%';
        splita[1].style.width = '200px';
        splita[1].style.height = '40px';
        splita[1].style.backgroundColor = '#333';
        splita[1].style.color = 'white';
    });
    split[1].addEventListener('mouseout', function () {
        split[1].style.width = '50%';
        split[0].style.width = '50%';
        splita[1].style.width = '100px';
        splita[1].style.height = '40px';
        splita[1].style.backgroundColor = 'white';
        splita[1].style.color = '#333';
    });

}