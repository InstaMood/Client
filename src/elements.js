$('#form-container').on('submit', (event) => {
    // console.log(event);
    event.preventDefault();
    access_token = localStorage.getItem('access_token');
    let form = $('#upload')[0];
    let data = new FormData(form);
    $.ajax({
        type: "POST",
        enctype: 'multipart/form-data',
        url: "http://localhost:3000/photo",
        data: data,
        headers: { access_token: access_token },
        processData: false,
        contentType: false
    })
    .done(() =>{
        loadMyPhotos()
    })
    .always(() =>{
        loadMyPhotos()
    })
})