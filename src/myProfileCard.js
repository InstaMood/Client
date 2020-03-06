function myProfileCard() {
    $('#sidebar').empty()
    let profil = {
        token : localStorage.access_token,
        email : localStorage.access_token.substring(0, 10)+'@test.bang.com'
    }
    let Profile = ProfileCard.create(profil);
    $('#sidebar').append(Profile.cardContent);
}