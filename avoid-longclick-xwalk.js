'use strict';

/**
 * @ngdoc directive
 * @name clientApp.directive:avoidLongClick
 * @description
 * # avoidLongClick
 */
angular.module('avoid-longclick-xwalk', []).
  .directive('avoidLongClick', function ($window, $timeout, $ionicGesture) {

     var isCrosswalk = $window.ionic.Platform.ua.match(/Mobile Crosswalk/i);
     
    return {
        restrict: 'A',
        link: function doTheBind(scope, element) {

            if (isCrosswalk && element[0].tagName.toUpperCase() === 'INPUT') {

                $ionicGesture.on('hold', function(event) {
                    (function(theElement) {
                        var curValue = theElement.value;
                        theElement.value = '';
                        $timeout(function() {
                            theElement.value = curValue;
                        },550);
                    })(event.target);
                }, element);
            }
        }
    };

  });
