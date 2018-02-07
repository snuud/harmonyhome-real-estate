angular.module('app').controller('NavController', NavController);

function NavController(){
    var vm = this;

    vm.isActiveTab = function(url){
        var currentPath = $location.path().split('/')[1];
        return (url === currentPath ? 'active' : '');
    }

    $(document).on('click', function(event){
        var $clickedOn = $(event.target),
            $collapsableItems = $('.collapse'),
            isToggleButton = ($clickedOn.closest('.navbar-toggle').length == 1),
            isLink = ($clickedOn.closest('a').length == 1),
            isOutsideNavbar = ($clickedOn.parents('.navbar').length == 0);

        if( (!isToggleButton && isLink) || isOutsideNavbar ){
            $collapsableItems.each(function(){
                $(this).collapse('hide');
            });
        }
    });
};