(function() {
  var app;

  app = angular.module("angular-animate", []);

  app.controller("animate-controller", function($scope, $timeout, $log) {
    $scope.activeAnimation = "animat0r";
    $scope.hello = false;
    $scope.lock = false;
    $scope.setActiveAnimation = function($animationName) {
      if ($scope.lock) {
        return;
      }
      $log.info($animationName);
      $scope.lock = true;
      $scope.activeAnimation = "";
      $scope.hello = false;
      $timeout((function() {
        return $scope.hello = true;
      }), 1000);
      return $timeout((function() {
        $scope.activeAnimation = $animationName;
        return $scope.lock = false;
      }), 2000);
    };
    $scope.isActiveAnimation = function($animationName) {
      return $scope.activeAnimation === $animationName;
    };
    $scope.isBye = function() {
      return !$scope.hello;
    };
    return $scope.isHello = function() {
      return $scope.hello;
    };
  });

}).call(this);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiPGFub255bW91cz4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQSxNQUFBOztFQUFBLEdBQUEsR0FBTSxPQUFPLENBQUMsTUFBUixDQUFlLGlCQUFmLEVBQWtDLEVBQWxDOztFQUVOLEdBQUcsQ0FBQyxVQUFKLENBQWUsb0JBQWYsRUFBcUMsUUFBQSxDQUFDLE1BQUQsRUFBUyxRQUFULEVBQW1CLElBQW5CLENBQUE7SUFDbkMsTUFBTSxDQUFDLGVBQVAsR0FBeUI7SUFDekIsTUFBTSxDQUFDLEtBQVAsR0FBZTtJQUNmLE1BQU0sQ0FBQyxJQUFQLEdBQWM7SUFDZCxNQUFNLENBQUMsa0JBQVAsR0FBNEIsUUFBQSxDQUFDLGNBQUQsQ0FBQTtNQUMxQixJQUFXLE1BQU0sQ0FBQyxJQUFsQjtBQUFBLGVBQUE7O01BQ0EsSUFBSSxDQUFDLElBQUwsQ0FBVSxjQUFWO01BQ0EsTUFBTSxDQUFDLElBQVAsR0FBYztNQUNkLE1BQU0sQ0FBQyxlQUFQLEdBQXlCO01BQ3pCLE1BQU0sQ0FBQyxLQUFQLEdBQWU7TUFDZixRQUFBLENBQVMsQ0FBQyxRQUFBLENBQUEsQ0FBQTtlQUNSLE1BQU0sQ0FBQyxLQUFQLEdBQWU7TUFEUCxDQUFELENBQVQsRUFFRyxJQUZIO2FBR0EsUUFBQSxDQUFTLENBQUMsUUFBQSxDQUFBLENBQUE7UUFDUixNQUFNLENBQUMsZUFBUCxHQUF5QjtlQUN6QixNQUFNLENBQUMsSUFBUCxHQUFjO01BRk4sQ0FBRCxDQUFULEVBR0csSUFISDtJQVQwQjtJQWM1QixNQUFNLENBQUMsaUJBQVAsR0FBMkIsUUFBQSxDQUFDLGNBQUQsQ0FBQTthQUN6QixNQUFNLENBQUMsZUFBUCxLQUEwQjtJQUREO0lBRzNCLE1BQU0sQ0FBQyxLQUFQLEdBQWUsUUFBQSxDQUFBLENBQUE7YUFDYixDQUFJLE1BQU0sQ0FBQztJQURFO1dBR2YsTUFBTSxDQUFDLE9BQVAsR0FBaUIsUUFBQSxDQUFBLENBQUE7YUFDZixNQUFNLENBQUM7SUFEUTtFQXhCa0IsQ0FBckM7QUFGQSIsInNvdXJjZXNDb250ZW50IjpbImFwcCA9IGFuZ3VsYXIubW9kdWxlKFwiYW5ndWxhci1hbmltYXRlXCIsIFtdKVxuXG5hcHAuY29udHJvbGxlciBcImFuaW1hdGUtY29udHJvbGxlclwiLCAoJHNjb3BlLCAkdGltZW91dCwgJGxvZykgLT5cbiAgJHNjb3BlLmFjdGl2ZUFuaW1hdGlvbiA9IFwiYW5pbWF0MHJcIlxuICAkc2NvcGUuaGVsbG8gPSBmYWxzZVxuICAkc2NvcGUubG9jayA9IGZhbHNlXG4gICRzY29wZS5zZXRBY3RpdmVBbmltYXRpb24gPSAoJGFuaW1hdGlvbk5hbWUpIC0+XG4gICAgcmV0dXJuICBpZiAkc2NvcGUubG9ja1xuICAgICRsb2cuaW5mbyAkYW5pbWF0aW9uTmFtZVxuICAgICRzY29wZS5sb2NrID0gdHJ1ZVxuICAgICRzY29wZS5hY3RpdmVBbmltYXRpb24gPSBcIlwiXG4gICAgJHNjb3BlLmhlbGxvID0gZmFsc2VcbiAgICAkdGltZW91dCAoLT5cbiAgICAgICRzY29wZS5oZWxsbyA9IHRydWVcbiAgICApLCAxMDAwXG4gICAgJHRpbWVvdXQgKC0+XG4gICAgICAkc2NvcGUuYWN0aXZlQW5pbWF0aW9uID0gJGFuaW1hdGlvbk5hbWVcbiAgICAgICRzY29wZS5sb2NrID0gZmFsc2VcbiAgICApLCAyMDAwXG5cbiAgJHNjb3BlLmlzQWN0aXZlQW5pbWF0aW9uID0gKCRhbmltYXRpb25OYW1lKSAtPlxuICAgICRzY29wZS5hY3RpdmVBbmltYXRpb24gaXMgJGFuaW1hdGlvbk5hbWVcblxuICAkc2NvcGUuaXNCeWUgPSAtPlxuICAgIG5vdCAkc2NvcGUuaGVsbG9cblxuICAkc2NvcGUuaXNIZWxsbyA9IC0+XG4gICAgJHNjb3BlLmhlbGxvXG4iXX0=
//# sourceURL=coffeescript