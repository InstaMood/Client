$('#show-upload-form').on('click', (event) => {
    event.preventDefault();
    $('.photo-item').hide();
    $('#upload-form').show();
})

function showPhoto() {
    $('.photo-item').show()
    $('#upload-form').hide()
}