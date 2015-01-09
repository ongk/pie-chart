(function () {
  'use strict';

  function DashboardCtrl($scope) {

    $scope.instances = {
      title: 'Total Instances',
      data: [
        { label: 'Current', slice: 1, showKey: true },
        { label: 'Applied', slice: 1, showKey: true },
        { label: 'Available', slice: 6 }
      ],
      colors: [ '#1f83c6', '#81c1e7', '#d1d3d4' ]
    };

    $scope.vcpus = {
      data: [
        { label: 'Current', slice: 1 },
        { label: 'Applied', slice: 1 },
        { label: 'Available', slice: 6 }
      ],
      colors: [ '#1f83c6', '#81c1e7', '#d1d3d4' ],
      text: "30%"
    };

    $scope.ram = {
      data: [
        { label: 'Current', slice: 2048 },
        { label: 'Applied', slice: 1024 },
        { label: 'Available', slice: 10240 }
      ],
      colors: [ '#1f83c6', '#81c1e7', '#d1d3d4' ],
      unicodeText: "f1b2"
    };

    $scope.randomizeChart = function() {

      $scope.instances = {
        data: [
          { label: 'Current', slice: Math.floor(Math.random() * 10) + 2 },
          { label: 'Applied', slice: Math.floor(Math.random() * 10) + 2 },
          { label: 'Available', slice: Math.floor(Math.random() * 10) + 2 }
        ],
        colors: [ '#1f83c6', '#81c1e7', '#74c476' ]
      };

      $scope.vcpus = {
        data: [
          { label: 'Current', slice: Math.floor(Math.random() * 10240) + 1024 },
          { label: 'Applied', slice: Math.floor(Math.random() * 10240) + 1024 },
          { label: 'Available', slice: Math.floor(Math.random() * 10240) + 1024 }
        ],
        colors: [ '#1f83c6', '#81c1e7', '#d1d3d4' ],
        text: (Math.floor(Math.random() * 90) + 5) + "%"
      };
    };
  }

  angular.module('hz.app.dashboard').controller('DashboardCtrl', [ '$scope', DashboardCtrl ]);

})();