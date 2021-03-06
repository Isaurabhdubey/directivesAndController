(function () {
  'use strict';

  angular
    .module('home.welcome')
    .controller('WelcomeCtrl', WelcomeCtrl);

  function WelcomeCtrl($timeout, webDevTec, toastr, _) {
    console.log('hello');
    var vm = this;
    vm.awesomeThings = [];
    vm.classAnimation = '';
    vm.creationDate = 1543037066227;
    vm.showToastr = showToastr;
    vm.actionClicked = actionClicked;

    activate();

    function activate() {
      getWebDevTec();
      $timeout(function () {
        vm.classAnimation = 'rubberBand';
      }, 4000);
    }

    function showToastr() {
      toastr.info('Fork <a href="https://github.com/Swiip/generator-gulp-angular" target="_blank"><b>generator-gulp-angular</b></a>');
      vm.classAnimation = '';
    }

    function getWebDevTec() {
      vm.awesomeThings = webDevTec.getTec();

      angular.forEach(vm.awesomeThings, function (awesomeThing) {
        awesomeThing.rank = Math.random();
      });
    }

    //this function triggered when action clicked on directives
    function actionClicked(item) {
      vm.awesomeThings = _.remove(vm.awesomeThings, function (n) {
        if (n.title == item.title) {
          return;
        } else {
          return n;
        }
      });

    }
  }
})();
