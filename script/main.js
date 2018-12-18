var app = angular.module("gameApp", []);
app.controller("gameCtrl", function($scope ,$http) {
    $http.get("https://demo7350053.mockable.io/hunt")
    .then(function(response){
        $scope.answers = response.data;
    });
    console.log($scope.answers);
    $scope.ans = "";
    $scope.le = 0;
    $scope.nextbu = "NEXT";
    $scope.textCheck = function() {
        $scope.hideLiked = false;
        // console.log($scope.ans, $scope.answers.length);
        // console.log($scope.answers[$scope.le].Q[1].length);
        $scope.lengthExceeded = "";
        $scope.nazdik = "";
        for (var i = 0, j = 0; i < $scope.answers[$scope.le].Q.length, j < 3; i++, j++) {

            if ($scope.ans == $scope.answers[$scope.le].Q[i]) {
                $scope.nazdik = "";
                $scope.lengthExceeded = "";
                $scope.hideLiked = true;
            } else if ($scope.ans.charAt(j) == $scope.answers[$scope.le].Q[i].charAt(j)) {
                $scope.nazdik = "";
                $scope.match = $scope.answers[$scope.le].Q[i];
                $scope.len = $scope.answers[$scope.le].Q[i].length;
                console.log($scope.len);
            } else if ($scope.ans.length > $scope.len) {
                $scope.lengthExceeded = "length exceeded";
            } else if ($scope.ans.length == $scope.len && $scope.ans.charAt(j) == $scope.match.charAt(j) && $scope.ans != $scope.match) {
                $scope.nazdik = "so close";
                console.log('test');
            } else {

            }
        }
    }
    $scope.nextq = function() {
        $scope.ans = "";
        $scope.le++;
        document.getElementById("1").focus();
        $scope.hideLiked = !$scope.hideLiked;
        if ($scope.le > 4) {
            $scope.hideGame = !$scope.hideGame;
            $scope.finish = "Game over"
        } else if ($scope.le >= 4) {
            $scope.nextbu = "FINISHED";
        }
    }
});