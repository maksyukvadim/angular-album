
export function routerConfig($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('main', {
      url: '/',
      views: {
        'container@' : {
            templateUrl: 'views/main/main.view.html',
            controller: 'mainController',
            controllerAs: 'vm',
          },
          'menu@': {
              templateUrl: 'views/menu/menu.view.html',
              controller: 'menuController',
              controllerAs: 'vm',
          },

          'footer@' : {
              templateUrl: 'views/footer/footer.view.html',
              controller: 'footerController',
              controllerAs: 'vm',
          }
      }
    })
      .state('main.albums', {
          url: 'albums',
          views: {
              'container@' : {
                  templateUrl: 'views/albums/albums.view.html',
                  controller: 'albumsController',
                  controllerAs: 'vm',
              }
          }
      })
      .state('main.albums.album', {
          url: '/album/:id',
          views: {
              'container@' : {
                  templateUrl: 'views/album/album.view.html',
                  controller: 'albumController',
                  controllerAs: 'vm',
              }
          }
      })
      .state('main.image', {
          url: 'image/:id',
          views: {
              'container@' : {
                  templateUrl: 'views/image/image.view.html',
                  controller: 'imageController',
                  controllerAs: 'vm',
              }
          }
      });

    $urlRouterProvider.otherwise('/');
}
