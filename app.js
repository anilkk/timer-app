// Code goes here
(function() {
    angular
        .module('app', [])
        .controller('timerapp', function($scope) {
            var vm = this;
            vm.title = 'Timer app';
            vm.runningTimerId = 0,
                vm.timerTimeValue = 0;

            vm.runningTimerValue = '00:00';

            vm.startTimer = function() {
                //vm.animationDuration = "{'animation-duration':'" + Math.floor(vm.timerTimeValue*60) + "s'}" ;
                vm.animationDuration = Math.floor(vm.timerTimeValue * 60) + 's';

                vm.showAnimation = true;
                var timerValue = vm.timerTimeValue * 60 * 1000;
                vm.runningTimerValue = Math.floor(timerValue / 60000) + ' ' + JSON.stringify(timerValue % 60000).substring(0, 2);
                clearInterval(vm.runningTimerId);
                vm.runningTimerId = setInterval(function() {
                    if (timerValue > 1000) {
                        timerValue = timerValue - 1000;
                    } else {
                        clearInterval(vm.runningTimerId);
                        vm.showAnimation = false;
                    }

                    console.log('data running', '"' + Math.floor(timerValue / 60000) + '" "' + JSON.stringify(timerValue % 60000).substring(0, 2) + '"');

                    vm.runningTimerValue = Math.floor(timerValue / 60000) + ' ' + JSON.stringify(timerValue % 60000).substring(0, 2);
                    $scope.$apply()
                }, 1000);
            };
            vm.stopTimer = () => {
                clearInterval(vm.runningTimerId);
                vm.runningTimerValue = '00:00';
            };

            vm.updateimer = (timer) => {
                console.log('timer', timer);
                vm.timerTimeValue = timer;
                vm.startTimer();
            };

            var getDisplayValue = (timerVlaue) => {
                return Math.floor(timerValue / 60000) + '" "' + timerValue % 60000;
            };
        });
})();