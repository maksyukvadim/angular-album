import MainController from './main.controller';
import ImagesService from './images.service';

angular.module('app.main', [] )
.controller('mainController', MainController)
.service('imagesService', ImagesService)
.constant('API_IMG', 'http://jsonplaceholder.typicode.com/');


