        var phone = document.querySelector('.header__phone');
        var openPopupButton = document.querySelector('.header__phone_button');

        openPopupButton.addEventListener('click', function(evt) {
            evt.preventDefault();
            phone.classList.toggle('header__phone_abled');
        });