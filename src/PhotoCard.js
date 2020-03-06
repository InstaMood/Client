// https://www.pngrepo.com/png/5883/170/loading.png

class PhotoCard {
    constructor(obj, owner) {
        //atas bisa mood atau user
        //desc bisa mood atau description
        this.id = obj.id;
        this.imgURL = obj.link;//
        this.description = obj.description;//
        this.mood = obj.mood; //title
        this.recommended = obj.recommendFood;
        this.userId = obj.UserId;
    }
    titleElement() {
        return `<h5 class="card-title">${this.mood}</h5>`
    }
    descElement() {
        return `<p class="card-text">${this.description}</p>`
    }
    imgElement() {
        return `<img class="card-img" src="${this.imgURL}">`
    }
    cardBody() {
        return `<div class="card-body">${this.descElement()}</div>`
    }
    get cardContent() {
        return `<div class="row mb-5 photo-item">
        <div class="card mx-auto hoverable" style="width: 40rem;">
        ${this.titleElement()}
        ${this.imgElement()}
        ${this.cardBody()}
        </div>
        </div>`
    }
    static create(obj, owner = {}) {
        return new PhotoCard(obj, owner);
    };
};
/*
<div id="container-posts" class="col-12 col-md-8">
    <div class="row mb-5">
        <div class="card mx-auto hoverable" style="width: 40rem;">
            <h3 class="card-title">Username</h3>
            <img class="card-img" src="...">
            <div class="card-body">
                <h5 class="card-title"> Description</h5>
                <p class="card-text">lorem ipsum dolon si amet</p>
            </div>
        </div>
    </div>
</div>
*/