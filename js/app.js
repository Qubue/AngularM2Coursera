(function() {
    'use strict';
    //definition for item list
    function item(name, quantity) {
        this.name = name;
        this.quantity = quantity;
    }
    var items = [];
    var item1 = new item("cookie", 10);
    items.push(item1);
    var item2 = new item("water bottle", 5);
    items.push(item2);
    var item3 = new item("powder", 1);
    items.push(item3);
    var item4 = new item("bread", 5);
    items.push(item4);
    var item5 = new item("ham", 10);
    items.push(item5);
    angular.module('myApp', [])
        .controller('toBuyListController', toBuyListController)
        .controller('boughtListController', boughtListController)
        .service('addToBoughtListService', addToBoughtListService);

    toBuyListController.$inject = ['addToBoughtListService'];

    function toBuyListController(addToBoughtListService) {
        var toBuyList = this;

        toBuyList.bought = addToBoughtListService.getItemList();

        toBuyList.addItemList = function(itemIndex) {
            addToBoughtListService.addItemList(itemIndex);
        };
        toBuyList.removeItem = function(itemIndex) {
            addToBoughtListService.addItemList(itemIndex);
            addToBoughtListService.removeItem(itemIndex);
        };
    }
    boughtListController.$inject = ['addToBoughtListService'];

    function boughtListController(addToBoughtListService) {
        var boughtList = this;
        boughtList.toBuy = addToBoughtListService.getBoughtList();
        boughtList.bought = addToBoughtListService.getItemList();
    }

    function addToBoughtListService() {
        var service = this;
        var bought = items;
        var toBuy = [];

        service.addItemList = function(itemIndex) {
            toBuy.push(bought[itemIndex]);
            console.log(toBuy);
        };

        service.getItemList = function() {
            return bought;
        };
        service.getBoughtList = function() {
            return toBuy;
        };

        service.removeItem = function(itemIndex) {
            bought.splice(itemIndex, 1);
        };
    }

})();
