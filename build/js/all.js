angular.module("app",["ui.router","app.testData","app.config","app.directive","app.public","app.dataManagement","app.library"]).controller("appController",["USER","TESTDATA",function(a,p){}]);
var config=angular.module("app.config",[]);config.constant("menuData",{dataManagement:{state:"",icon:"",name:"元数据管理",children:[{sref:"dataManagement.dataSituation",name:"数据概况"},{sref:"dataManagement.myData",name:"我的元数据"},{sref:"dataManagement.search",name:"全局索引"},{sref:"dataManagement.categoryConfig",name:"类目配置"}]},tabManagement:{},visualizing:{},library:{state:"",icon:"",name:"知识库",children:[{sref:"library.projectManagement",name:"项目管理"},{sref:"library.projectClassification",name:"项目行业类目"}]},tabData:{arrData:[{name:"元数据管理",sref:"dataManagement.dataSituation"},{name:"标签管理",sref:"tabManagement"},{name:"可视化组件",sref:"visualizing"},{name:"知识库",sref:"library.projectManagement"}]}});
angular.module("app.testData",[]).constant("TESTDATA",[{name:"ruby",createTime:"哪天啊",physicsStore:"8TB",live:"8天",usable:!0,collection:!0,effectiveness:!0},{name:"ruby1",createTime:"哪天啊",physicsStore:"8TB",live:"8天",usable:!0,collection:!1,effectiveness:!0},{name:"ruby2",createTime:"哪天啊",physicsStore:"8TB",live:"8天",usable:!0,collection:!0,effectiveness:!0},{name:"ruby3",createTime:"哪天啊",physicsStore:"8TB",live:"8天",usable:!0,collection:!1,effectiveness:!0},{name:"ruby4",createTime:"哪天啊",physicsStore:"8TB",live:"8天",usable:!1,collection:!0,effectiveness:!0},{name:"ruby5",createTime:"哪天啊",physicsStore:"8TB",live:"8天",usable:!1,collection:!0,effectiveness:!0},{name:"ruby6",createTime:"哪天啊",physicsStore:"8TB",live:"8天",usable:!1,collection:!0,effectiveness:!0},{name:"ruby7",createTime:"哪天啊",physicsStore:"8TB",live:"8天",usable:!0,collection:!1,effectiveness:!0},{name:"ruby8",createTime:"哪天啊",physicsStore:"8TB",live:"8天",usable:!0,collection:!1,effectiveness:!0},{name:"ruby9",createTime:"哪天啊",physicsStore:"8TB",live:"8天",usable:!1,collection:!0,effectiveness:!1}]).value("USER",{userName:"ruby",passWord:"123",name:"ruby",department:"大前端",sex:"男",email:"ruby@adtime.com",mobile:"110",isLogin:"true"});
angular.module("app.dataManagement",["app.dataManagement.dataSituation","app.dataManagement.controller","app.dataManagement.myData","app.dataManagement.search","app.dataManagement.categoryConfig"]).config(["$stateProvider","$urlRouterProvider",function(a,t){a.state("dataManagement",{url:"/dataManagement","abstract":!0,views:{center:{templateUrl:"./dataManagement/list.html",controller:"dataManagementCtrl"},head:{templateUrl:"./public/head.html",controller:"headCtrl"},"content@dataManagement":{templateUrl:"./dataManagement/dataSituation/dataSituation.html",controller:"dataSituationCtrl"},"foot@dataManagement":{templateUrl:""}}})}]);
angular.module("app.library",["app.library.controller","app.library.projectManagement","app.library.projectClassification"]).config(["$stateProvider","$urlRouterProvider",function(r,t){r.state("library",{url:"/library",abstrack:!0,views:{center:{templateUrl:"./dataManagement/list.html",controller:"libraryCtrl"},"content@library":{templateUrl:"./library/projectManagement/views/projectManagement.html",controller:"projectManagementCtrl"},head:{templateUrl:"./public/head.html",controller:"headCtrl"},"foot@library":{templateUrl:""}}})}]);
angular.module("app.public",["app.public.login","app.public.headController"]).config(["$stateProvider","$urlRouterProvider",function(l,e){e.when("","/login"),l.state("login",{url:"/login",views:{center:{templateUrl:"./public/auth/login/login.html",controller:"loginCtrl"},head:{templateUrl:"./public/head.html",controller:"headCtrl"},foot:{templateUrl:"./public/foot.html"}}}).state("home",{url:"/home",views:{center:{templateUrl:"./public/center_home.html"},head:{templateUrl:"./public/head.html",controller:"headCtrl"},foot:{templateUrl:""}}})}]);
angular.module("app.directive",["app.directive.menu"]);
angular.module("app.dataManagement.controller",[]).controller("dataManagementCtrl",["menuData","$scope",function(e,a){a.menuData=e.dataManagement;var t=document.body.clientHeight;document.getElementsByClassName("menu")[0].style.height=t-86+"px"}]);
angular.module("app.dataManagement.categoryConfig",["app.dataManagement.categoryConfig.controller"]).config(["$stateProvider","$urlRouterProvider",function(a,t){a.state("dataManagement.categoryConfig",{url:"/categoryConfig",views:{"center@":{templateUrl:"./dataManagement/list.html",controller:"dataManagementCtrl"},"content@dataManagement.categoryConfig":{templateUrl:"./dataManagement/categoryConfig/views/categoryConfig.html",controller:"categoryConfigCtrl"}}})}]);
angular.module("app.dataManagement.dataSituation",["app.dataManagement.dataSituation.controller"]).config(["$stateProvider","$urlRouterProvider",function(a,t){a.state("dataManagement.dataSituation",{url:"/dataSituation",views:{"center@":{templateUrl:"./dataManagement/list.html",controller:"dataManagementCtrl"},"content@dataManagement.dataSituation":{templateUrl:"./dataManagement/dataSituation/dataSituation.html",controller:"dataSituationCtrl"}}})}]);
angular.module("app.dataManagement.myData",["app.dataManagement.myData.controller"]).config(["$stateProvider","$urlRouterProvider",function(a,t){a.state("dataManagement.myData",{url:"/myData",views:{"center@":{templateUrl:"./dataManagement/list.html",controller:"dataManagementCtrl"},"content@dataManagement.myData":{templateUrl:"./dataManagement/myData/views/myData.html",controller:"myDataCtrl"}}})}]);
angular.module("app.dataManagement.search",["app.dataManagement.search.controller"]).config(["$stateProvider","$urlRouterProvider",function(a,e){a.state("dataManagement.search",{url:"/search",views:{"center@":{templateUrl:"./dataManagement/list.html",controller:"dataManagementCtrl"},"content@dataManagement.search":{templateUrl:"./dataManagement/search/views/search.html",controller:"searchCtrl"}}})}]);
angular.module("app.library.controller",[]).controller("libraryCtrl",["menuData","$scope",function(e,t){t.menuData=e.library;var n=document.body.clientHeight;document.getElementsByClassName("menu")[0].style.height=n-86+"px",window.onresize=function(){n=document.body.clientHeight,document.getElementsByClassName("menu")[0].style.height=n-86+"px"}}]);
angular.module("app.library.projectClassification",["app.library.projectClassification.controller"]).config(["$stateProvider","$urlRouterProvider",function(r,t){r.state("library.projectClassification",{url:"/projectClassification",views:{"center@":{templateUrl:"./dataManagement/list.html",controller:"libraryCtrl"},"content@library.projectClassification":{templateUrl:"./library/projectClassification/views/projectClassification.html",controller:"projectClassificationCtrl"}}})}]);
angular.module("app.library.projectManagement",["app.library.projectManagement.controller"]).config(["$stateProvider","$urlRouterProvider",function(e,r){e.state("library.projectManagement",{url:"/projectManagement",views:{"center@":{templateUrl:"./dataManagement/list.html",controller:"libraryCtrl"},"content@library.projectManagement":{templateUrl:"./library/projectManagement/views/projectManagement.html",controller:"projectManagementCtrl"}}})}]);
angular.module("app.public.headController",[]).controller("headCtrl",["$scope","menuData","$state","$location",function(a,o,t,n){a.tabData=o.tabData.arrData,a.selectTab=function(o){t.go(a.tabData[o].sref).then(function(t){a.index=o,console.log(a.index),console.log(t)})},a.out=function(){t.go("login")}}]);
angular.module("app.directive.form",[]).directive("form",[function(){return{restrict:"A",template:"<div><table><tr><th ng-repeat='fhd in formHeadData'>{{fhd.name}}</th></tr><tr ng-repeat='fcd in formContentData'><td></td></tr></table></div>",replace:!0,scope:{formHeadData:"=",formContentData:"="}}}]);
angular.module("app.directive.menu",[]).directive("menu",[function(){return{restrict:"A",template:'<ul><li>{{data.name}}</li><li ng-repeat="d in data.children" ui-sref="{{d.sref}}">{{d.name}}</li></ul>',scope:{data:"="}}}]);
angular.module("app.dataManagement.categoryConfig.controller",[]).controller("categoryConfigCtrl",[function(){}]);
angular.module("app.dataManagement.dataSituation.controller",[]).controller("dataSituationCtrl",[function(){var t=document.body.clientWidth;document.getElementsByClassName("dataSituation")[0].style.width=t-201+"px",window.onresize=function(){t=document.body.scrollWidth,document.getElementsByClassName("dataSituation")[0].style.width=t-201+"px",height=document.body.clientHeight,document.getElementsByClassName("menu")[0].style.height=height-86+"px"}}]);
angular.module("app.dataManagement.myData.controller",[]).controller("myDataCtrl",["$scope",function(e){var n=document.body.clientWidth;document.getElementsByClassName("myData")[0].style.width=n-201+"px",window.onresize=function(){n=document.body.scrollWidth,document.getElementsByClassName("myData")[0].style.width=n-201+"px"},e.enabled=!0,e.collection=!1,e.management=!1,e.selectEnabled=function(){e.enabled=!0,e.collection=!1,e.management=!1},e.selectCollection=function(){e.enabled=!1,e.collection=!0,e.management=!1},e.selectManagement=function(){e.enabled=!1,e.collection=!1,e.management=!0}}]);

angular.module("app.dataManagement.search.controller",[]).controller("searchCtrl",[function(){}]);
angular.module("app.library.projectClassification.controller",[]).controller("projectClassificationCtrl",[function(){}]);
angular.module("app.library.projectManagement.controller",[]).controller("projectManagementCtrl",[function(){}]);
angular.module("app.public.login",["app.public.login.controller"]);
angular.module("app.public.login.controller",[]).controller("loginCtrl",["$rootScope","$scope","USER","$state",function(e,o,t,n){var l=document.body.clientHeight;document.getElementsByClassName("login")[0].style.height=l-80+"px",window.onresize=function(){l=document.body.clientHeight,document.getElementsByClassName("login")[0].style.height=l-80+"px"},e.isLogin=!1,e.USER=t,o.goLogin=function(){o.auth?o.auth.userName==t.userName&&o.auth.password==t.passWord?(n.go("home"),e.isLogin=!0):alert("请输入正确用户名及密码"):alert("请输入用户名及密码")}}]);