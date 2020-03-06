function loadMyPhotos() {
    $.ajax({
        url: "http://localhost:3000/photo",
        method: "GET",
        headers: {
            token: localStorage.token
        }
    })
    .done(response => {
        // console.log(response);
        //array of photo
        $('.photo-item').remove()
        response.data.forEach(item => {
            let Item = PhotoCard.create(item)
            $('#container-posts').append(Item.cardContent);
        })
    })
    .fail(response => {
        console.log(response)
    })
    .always(() => {
        console.log("always");
    })
}