export default class ImagesService {
    constructor( $http, $q, API_IMG) {
        this.$http = $http;
        this.$q = $q;
        this.API_IMG = API_IMG;
    }

    getAllImages() {
        let deferred = this.$q.defer();
        this.$http({
            method: 'GET',
            url: this.API_IMG + 'photos'
        })
            .then((response) => {
                deferred.resolve(response);
            }, (response) => {
                deferred.reject(response);
            });
        return deferred.promise;
    }

    getAlbums() {
        let deferred = this.$q.defer();
        this.$http({
            method: 'GET',
            url: this.API_IMG + 'albums'
        })
            .then((response) => {
                deferred.resolve(response);
            }, (response) => {
                deferred.reject(response);
            });
        return deferred.promise;
    }

    getImagesByAlbum(album_id) {
        let deferred = this.$q.defer();
        this.$http({
            method: 'GET',
            url: this.API_IMG + 'albums/' + album_id + '/photos'
        })
            .then((response) => {
                deferred.resolve(response);
            }, (response) => {
                deferred.reject(response);
            });
        return deferred.promise;
    }

    getImage(image_id) {
        let deferred = this.$q.defer();
        this.$http({
            method: 'GET',
            url: this.API_IMG + 'photos/' + image_id
        })
            .then((response) => {
                deferred.resolve(response);
            }, (response) => {
                deferred.reject(response);
            });
        return deferred.promise;
    }

}