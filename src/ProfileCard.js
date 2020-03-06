class ProfileCard {
    constructor(user) {
        this.id = user.id;
        this.email = user.email;
        this.name = this.emailHead(user.email);
        this.avaURL = this.avaURL(user.photo_url);
        this._token = user.token;
    }
    emailHead(emailStr) {
        let name   = emailStr.substring(0, emailStr.lastIndexOf("@"));
        return name;
    }
    avaURL(imgurl) {
        if (!imgurl) {
            imgurl = 'https://api.adorable.io/avatars/150/Instamood@default.png';
        }
        return imgurl;
    }

    mailElement() {
        return `<h5 class="card-title">${this.email}</h5>`
    }
    nameElement() {
        return `<h3 class="card-title">${this.name}</h3>`
    }
    avaElement() {
        return `<img class="card-img" src="${this.avaURL}">`
    }
    cardBody() {
        return `<div class="card-body">
            ${this.mailElement()}
        </div>`
    }
    uploadButton() {
        return `<button type="button" class="btn btn-link" id="show-upload-form">Upload My Photos</button>`
    }
    userPhotosButton() {
        return `<button type="button" class="btn btn-link" id="get-user-photo">Show My Photos</button>`
    }
    discoverPhotoButton() {
        return `<button type="button" class="btn btn-link" id="get-all-photo">Discover</button>`
    }
    get cardContent() {
        return `<div class="card" style="width: 18rem; margin:auto;">
        ${this.nameElement()}
        ${this.avaElement()}
        ${this.cardBody()}
        ${this.uploadButton()}
        ${this.userPhotosButton()}
        ${this.discoverPhotoButton()}
        </div>`
    }

    static create(user) {
        return new ProfileCard(user);
    }
};

/*
<div class="card" style="width: 18rem; margin:auto;">
    <h3 class="card-title">Name</h3>
    <img class="card-img" src="...">
    <div class="card-body">
        <h5 class="card-title">Email</h5>
        <p class="card-text">lorem ipsum</p>
    </div>
    <button type="button" class="btn btn-link">Upload My Photos</button>
    <button type="button" class="btn btn-link">Show My Photos</button>
    <button type="button" class="btn btn-link">Discover</button>
</div>
*/