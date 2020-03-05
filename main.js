const access_token = localStorage.getItem('access_token')

// const access_token = 'jaiwubdiauw9y12u3hhiaudbaubu1'
// localStorage.setItem('access_token', access_token)

$(document).ready(function(){
    // localStorage.setItem(access_token)

    if(access_token){
        $('#landing-page').hide()
        $('#user-wall').show()

        //Fetch user's feed

    }else{
        $('#landing-page').show()
        $('#user-wall').hide()
    }

    // register method post
    $('#btn-reg').on('click', function(e){
        e.preventDefault()

        $('#btn-reg').html('<span class="spinner-border spinner-border-sm mr-2" role="status" aria-hidden="true"></span>Loading...').addClass('disabled');

        const email = $('#defaultRegisterFormEmail').val()
        const password = $('#defaultRegisterFormPassword').val() 

        $.ajax({
            method: 'POST',
                url: 'http://localhost:3000/register',
                data: {
                    email,
                    password
                }
        })
        .done(function(response){
            console.log(response);
            
        })
        .fail(function(error){
            console.log(error);
            
        })
    })

    // login method post
    $('#btn-login').on('click', function(e){
        e.preventDefault()
        
        const email = $('#defaultLoginFormEmail').val()
        const password = $('#defaultLoginFormPassword').val()

        $.ajax({
            method: 'POST',
            url: 'http://localhost:3000/login',
            data: {
                email,
                password
            }
        })
        .done(function(response){

            localStorage.setItem('access_token', response.access_token)
            //show hide page
            $('#user-wall').show()
            $('#landing-page').hide()
        })
        .fail(function(error){
            console.log(error);
            
        })    
    })

    $('#upload-photo').on('click', function(e){
        e.preventDefault()



    })






});