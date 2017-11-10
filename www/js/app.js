// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('mimizik', ['ionic', 'videos.controllers','mimizik.constants','artistes.controllers'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider,$httpProvider) {
    
//    var auth = $base64.encode("mimizik_front:mimizik_api971");
//    $httpProvider.defaults.headers.common.Authorization = auth;
    $httpProvider.defaults.headers.common['Authorization'] = 'Basic bWltaXppa19mcm9udDptaW1pemlrX2FwaTk3MQ==';

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  // setup an abstract state for the tabs directive
    .state('tab', {
    url: '/',
    abstract: true,
    templateUrl: 'templates/tabs.html'
  })

  // Each tab has its own nav history stack:

//  .state('tab.dash', {
//    url: '/dash',
//    views: {
//      'tab-dash': {
//        templateUrl: 'templates/tab-dash.html',
//        controller: 'DashCtrl'
//      }
//    }
//  })
//
//  .state('tab.chats', {
//      url: '/chats',
//      views: {
//        'tab-chats': {
//          templateUrl: 'templates/tab-chats.html',
//          controller: 'ChatsCtrl'
//        }
//      }
//    })
//    .state('tab.chat-detail', {
//      url: '/chats/:chatId',
//      views: {
//        'tab-chats': {
//          templateUrl: 'templates/chat-detail.html',
//          controller: 'ChatDetailCtrl'
//        }
//      }
//    })
//
//  .state('tab.account', {
//    url: '/account',
//    views: {
//      'tab-account': {
//        templateUrl: 'templates/tab-account.html',
//        controller: 'AccountCtrl'
//      }
//    }
//  })
  .state('tab.videoslist',{
      url: 'videos',
      views: {
         'tab-videosList': {
            templateUrl: 'templates/videos/list.html',
            controller: 'VideosListCtrl'
          } 
      }
  })
  
  .state('tab.artisteslist',{
      url: 'artistes',
      views: {
         'tab-artistesList': {
            templateUrl: 'templates/artistes/list.html',
            controller: 'ArtistesListCtrl'
          } 
      }
  })
  ;

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/videos');

});
