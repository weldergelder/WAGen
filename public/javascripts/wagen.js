var app = angular.module('WAGen', ['ngResource']);

app.factory('taskService', function($http, $resource){
    return $resource('/tasks');
});

app.factory('backupService', function($http, $resource){
    return $resource('/backup');
});

app.factory('avService', function($http, $resource){
    return $resource('/antivirus');
});

app.factory('payService', function($http, $resource){
    return $resource('/payment');
});

app.factory('itemService', function($http, $resource){
    return $resource('/payment/item');
});

app.controller('mainController', function($scope, $http, taskService, backupService, avService, payService, itemService){
    //These are prepopulated from the DB
    $scope.taskList = taskService.query();
    $scope.backupList = backupService.query();
    $scope.avList = avService.query();
    $scope.paymentList = payService.query();
    $scope.itemList = itemService.query();
    $scope.etaFrom = 2;
    $scope.etaTo = 5;


    //These are the selected options
    $scope.usedTasks = [];
    $scope.usedBackup = [];
    $scope.usedPayment = [];
    $scope.usedAV = [];
    $scope.usedItems = [];

    //These are the result textboxes
    $scope.sop = "";
    $scope.rec = "";

});