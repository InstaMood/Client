function showPhoto() {
    $('#photo-container').show()
    $('#form-container').hide()
}

function showUpload() {
    $('#photo-container').hide()
    $('#form-container').show()
}

$('#show-upload-form').on('click', (event) => {
    event.preventDefault();
    showUpload()
})