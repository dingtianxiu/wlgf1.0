/**
 * Created by dtx on 16/7/8.
 * description:侧边导航栏
 */


angular.module("app.directive.menu",[])
    .directive("menu",[function (menuData) {
        return{
            restrict: 'A',
            template: '<div>\
                    <ul>\
                        <li ng-repeat="d in data" ui-sref="d.children.sref">{{d.children.name}}</li>\
                    </ul>\
                </div>',
            replace: true,
            scope:{
                data: '=menuData'
            }
        }
    }]);