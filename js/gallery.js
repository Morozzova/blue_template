        var photos = [
            'images/gallery1-big.jpg',
            'images/gallery2-big.jpg',
            'images/gallery3-big.jpg',
            'images/gallery4-big.jpg'
        ];

        var thumbnails = document.querySelectorAll('.gallery__item');
        var fullPhoto = document.querySelector('.gallery__image');

        var addThumbnailClickHandler = function(thumbnail, photo) {
            thumbnail.addEventListener('click', function() {
                fullPhoto.src = photo;
            });
        };

        for (var i = 0; i < thumbnails.length; i++) {
            addThumbnailClickHandler(thumbnails[i], photos[i]);
        }