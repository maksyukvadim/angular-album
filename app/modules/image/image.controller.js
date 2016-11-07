export default class ImageController {
    constructor($scope, imagesService, $state, $location) {
        this.imagesService = imagesService;
        this.$scope = $scope;
        this.$state = $state;
        this.$location = $location;
        this.init();
    }

    init() {
        this.getImage(this.getIdImgage());
    }

    getImage(idImg) {
        this.imagesService.getImage(idImg).then((response) => {
            this.$scope.image = response.data;
        }, (error) => {
            console.log(error);
        });

    }


    getIdImgage() {
        let url = this.$location.path();
        let index;
        for(let i = 0; i <url.length; i++) {
            if(url[i] == '/') {
                index = i+1;
            }
        }
        return  url.substr(index);
    }
}