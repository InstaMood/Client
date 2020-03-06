let access_token = localStorage.getItem('access_token')

$(document).ready(function(){
    // localStorage.setItem(access_token)

    if(access_token){
        $('#landing-page').hide()
        $('#user-wall').show()
        console.log("login");
        loadLoginPage()
        //Fetch user's feed

    }else{
        $('#landing-page').show()
        $('#user-wall').hide()
    }

    // register method post
    $('#btn-reg').on('click', function(e){
        e.preventDefault()

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
            // console.log(response);
            $('#info-message').append(`
            <div class="alert alert-success" role="alert">
                Your account has been successfully created!. You can now <b>login</b>.
            </div>
            `)
            
            $(".alert").fadeTo(2000, 2000).slideUp(500, function(){
                $(".alert").alert('close');
            });

            $('#user-wall').hide()
            $('#landing-page').show()
            
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
        console.log("login");
        $.ajax({
            method: 'POST',
            url: 'http://localhost:3000/login',
            data: {
                email,
                password
            }
        })
        .done(function(response){
            localStorage.setItem('access_token', response)
            console.log(response, "token user here")

            $('#user-wall').show()
            $('#landing-page').hide()
            $('#modalLoginForm').modal('hide')
            loadLoginPage()
        })
        .fail(function(error){
            console.log(error);
            
        })    
    })

    $('#btn-logout').on('click', function(e){
        e.preventDefault()
        localStorage.removeItem('access_token')
        $('#landing-page').show()
        $('#user-wall').hide()
        var auth2 = gapi.auth2.getAuthInstance();
            auth2.signOut().then(function () {
            console.log('User signed out.');
        });
    })

    $('#upload-photo').on('click', function(e){
        e.preventDefault()



    })






});