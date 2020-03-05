const access_token = localStorage.getItem('access_token')


$(document).ready(function(){

    if(access_token){
        $('#landing-page').hide()
        $('#user-wall').show()
    }else{
        $('#landing-page').show()
        $('#user-wall').hide()
    }

});