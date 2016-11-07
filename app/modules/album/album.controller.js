export default class AlbumController {
    constructor($scope, imagesService, $location, $state) {
        this.imagesService = imagesService;
        this.$scope = $scope;
        this.$state = $state;
        this.$location = $location;
        this.init();
    }

    init() {
        this.getImagesByAlbum(this.getIdAlbum());
    }

    getImagesByAlbum(id_album) {
        this.imagesService.getImagesByAlbum(id_album).then((response) => {
            this.$scope.images = response.data;
        }, (error) => {
            console.log(error);
        });
    }

    getIdAlbum() {
        let url = this.$location.path();
        let index;
        for(let i = 0; i <url.length; i++) {
            if(url[i] == '/') {
                index = i+1;
            }
        }
        return  url.substr(index);
    }

    pickImage(idImage) {
        this.$state.go('main.image',{id: idImage});

    }
}