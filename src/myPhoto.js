function loadMyPhotos() {
    access_token = localStorage.getItem('access_token');
    $('.photo-item').hide()
    console.log("photo yeh2", access_token)
    $.ajax({
        url: "http://localhost:3000/photo/user",
        method: "GET",
        headers: {
            access_token: access_token
        }
    })
    .done(response => {
        // console.log(response);
        //array of photo
        $('#photo-container').empty()
        if (response.data.length > 0) {
            response.data.forEach(item => {
                let Item = PhotoCard.create(item)
                $('#container-posts').append(Item.cardContent);
            })
            showPhoto()
        } else {
            showUpload()
            //show upload form
        }
    })
    .fail(response => {
        console.log(response)
    })
}