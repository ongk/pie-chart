# charts

This directive generates a simple donut chart using D3. Any changes to chart-data will fire an update to the chart. Key title and labels are generated by default. To exclude a key label from being shown, set `showKey` to false in your data object. To show title, set `title` in your data object.

### Markup
```
<div ng-app="hz.app" ng-controller="MyCtrl">
  <donut-chart chart-data="data" chart-text="25%"&gt;&lt;/donut-chart>
</div>
```

### Controller Usage
```
angular.module('app').controller('MyCtrl', [ '$scope', function($scope) {
  $scope.instances = {
    title: "Total Instances",
    data: [
        { label: 'Current', slice: 1 },
        { label: 'Applied', slice: 1 },
        { label: 'Available', slice: 6, showKey: false }
      ],
    colors: [ '#1f83c6', '#81c1e7', '#d1d3d4' ],
    text: "25%"
  };

  // Change the data (optional)
  $scope.randomizeChart = function() {
    $scope.instances = {
      title: "Total Instances",
      data: [
        { label: 'Current', slice: 1 },
        { label: 'Applied', slice: 7 }
      ],
      colors: [ '#1f83c6', '#ff0000' ],
      text: "100%"
    };
  };
}]);
```

### Directive Attributes
- chart-data (required) - attribute name of data defined in `$scope`
- chart-diameter - diameter of donut chart in pixels, default: 70
- chart-thickness - thickness of donut in pixels, default: 10
- chart-show-key - show title and key labels, default: true
- title-font-size - title font size in pixels, default: 13
- key-font-size - key label font size in pixels, default: 12
- any attributes for `<text>` element such as font-size, font-family, fill, etc...


