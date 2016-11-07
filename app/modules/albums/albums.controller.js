export default class AlbumsController {
    constructor($scope, imagesService, $state) {
        this.imagesService = imagesService;
        this.$scope = $scope;
        this.$state = $state;
        this.getAlbums();
    }

    getAlbums() {
        this.imagesService.getAlbums().then((response) => {
            console.log(response);
            this.$scope.albums = response.data;
        }, (error) => {
            console.log(error);
        });
    }

    pickAlbum(idAlbum) {
        this.$state.go('main.albums.album',{id: idAlbum});

    }

}