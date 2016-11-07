import angular from 'angular';
import uiRouter from 'angular-ui-router';
import './modules/main/main.module';
import './modules/menu/menu.module';
import './modules/footer/footer.module';
import './modules/albums/albums.module';
import './modules/image/image.module';
import './modules/album/album.module';



import {routerConfig} from './app.router';

angular.module('myApp', [uiRouter, 'app.main', 'app.menu', 'app.footer', 'app.albums', 'app.image', 'app.album'])
.config(routerConfig)
;
