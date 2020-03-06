function loadMyPhotos() {
    access_token = localStorage.getItem('access_token');
    $('.photo-item').hide()
    console.log("photo yeh2", access_token)
    $.ajax({
        url: "http://localhost:3000/photo/",
        method: "GET",
        headers: {
            access_token: access_token
        }
    })
    .done(response => {
        // console.log(response);
        //array of photo
        $('#photo-container').empty()
        // console.log(response);
        if (response) {
            
            response.forEach(item => {
                let Item = PhotoCard.create(item)
                console.log(Item.cardContent);
                
                $('#photo-container').append(Item.cardContent);
            })
            showPhoto()
            showUpload()
        } else {
            showUpload()
            //show upload form
        }
    })
    .fail(response => {
        console.log(response)
    })
}