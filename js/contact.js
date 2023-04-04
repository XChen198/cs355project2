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

    var btn = document.querySelector('.send');

    btn.addEventListener('click', function () {
        saveFormData();
    })
    function saveFormData() {
        var name = document.querySelector('input[name="name"]').value;
        var email = document.querySelector('input[name="email"]').value;
        var tel = document.querySelector('input[name="tel"]').value;
        var textarea = document.querySelector('textarea').value;
        if (!name || !email || !tel || !textarea) {
            alert("Please fill in all required fields");
            return;
        }
        else {
            var data = `Name: ${name}\nEmail: ${email}\nTelephone:${tel}\nTextarea:${textarea}`;
            var file = new Blob([data], { type: 'text/plain' });
            var a = document.createElement('a');
            a.href = URL.createObjectURL(file);
            a.download = 'contact.txt';
            a.click();
        }

    }


}