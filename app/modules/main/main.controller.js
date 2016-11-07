export default class MainController {
    constructor($scope,$window, imagesService, $state) {
        this.imagesService = imagesService;
        this.$scope = $scope;
        this.$state = $state;
        this.$window = $window;
        this.getImg();
        this.count = 20;
        this.$scope.imagesView = [];
        this.scroll();
    }
    getImg() {
        this.imagesService.getAllImages().then((response) => {
            this.$scope.allImages = response.data;
            this.addImg();
        }, (error) => {
            console.log(error);
        });
    }

    addImg() {
        this.$scope.imagesView = this.$scope.allImages.slice(0, this.count);
        this.count+=20;
    }


    scroll() {
        angular.element(this.$window).bind("scroll", (e) => {
            if(window.scrollY + document.documentElement.clientHeight >= document.body.clientHeight) {
                this.$scope.$apply(() => {
                    this.addImg();
                });
            }
        })

    }

    pickImage(idImage) {
        this.$state.go('main.image',{id: idImage});

    }


}