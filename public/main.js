(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/api-movies.service.ts":
/*!***************************************!*\
  !*** ./src/app/api-movies.service.ts ***!
  \***************************************/
/*! exports provided: ApiMoviesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiMoviesService", function() { return ApiMoviesService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _models_ElemMultimedia__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./models/ElemMultimedia */ "./src/app/models/ElemMultimedia.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ApiMoviesService = /** @class */ (function () {
    function ApiMoviesService(http) {
        this.http = http;
        this.url_img_base = 'https://image.tmdb.org/t/p/w300';
        this.url_video_base = 'https://api.themoviedb.org/3/movie/';
        this.apikey = '8d1ff0fd31d021c4902d57908c87f3fc';
    }
    ApiMoviesService.prototype.getElemsMult = function (url) {
        var _this = this;
        var elemsMult = [];
        this.http.get(url)
            .subscribe(function (data) {
            for (var _i = 0, _a = data['results']; _i < _a.length; _i++) {
                var elem = _a[_i];
                if (elem.name !== undefined) {
                    elemsMult.push(new _models_ElemMultimedia__WEBPACK_IMPORTED_MODULE_2__["ElemMultimedia"](elem.id, elem.name, "" + _this.url_img_base + elem.backdrop_path + "?api_key=" + _this.apikey, elem.overview, elem.first_air_date, elem.vote_average, "https://www.youtube.com/embed/" + elem.trailerKey + "?autoplay=1&controls=0&fs=0&disablekb=1&mute=1&loop=1"));
                }
                else {
                    elemsMult.push(new _models_ElemMultimedia__WEBPACK_IMPORTED_MODULE_2__["ElemMultimedia"](elem.id, elem.title, _this.url_img_base + elem.backdrop_path + '?api_key=' + _this.apikey, elem.overview, elem.release_date, elem.vote_average, "https://www.youtube.com/embed/" + elem.trailerKey + "?autoplay=1&controls=0&fs=0&disablekb=1&mute=1&loop=1"));
                }
            }
        });
        return elemsMult;
    };
    ApiMoviesService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        })
        /* Este servicio de momento tiene una unica funcion que hace
        * peticiones a mi API.*/
        ,
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ApiMoviesService);
    return ApiMoviesService;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _peliculas_peliculas_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./peliculas/peliculas.component */ "./src/app/peliculas/peliculas.component.ts");
/* harmony import */ var _series_series_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./series/series.component */ "./src/app/series/series.component.ts");
/* harmony import */ var _detail_detail_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./detail/detail.component */ "./src/app/detail/detail.component.ts");
/* harmony import */ var _disp_search_disp_search_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./disp-search/disp-search.component */ "./src/app/disp-search/disp-search.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] },
    { path: 'movies', component: _peliculas_peliculas_component__WEBPACK_IMPORTED_MODULE_3__["PeliculasComponent"] },
    { path: 'series', component: _series_series_component__WEBPACK_IMPORTED_MODULE_4__["SeriesComponent"] },
    { path: '**', redirectTo: 'home', pathMatch: 'full' },
    { path: 'detail/:id', component: _detail_detail_component__WEBPACK_IMPORTED_MODULE_5__["DetailComponent"] },
    { path: 'search/:id', component: _disp_search_disp_search_component__WEBPACK_IMPORTED_MODULE_6__["DispSearchComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<router-outlet></router-outlet>\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Up-Flix';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _search_form_search_form_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./search-form/search-form.component */ "./src/app/search-form/search-form.component.ts");
/* harmony import */ var _carrousel_carrousel_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./carrousel/carrousel.component */ "./src/app/carrousel/carrousel.component.ts");
/* harmony import */ var _peliculas_peliculas_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./peliculas/peliculas.component */ "./src/app/peliculas/peliculas.component.ts");
/* harmony import */ var _series_series_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./series/series.component */ "./src/app/series/series.component.ts");
/* harmony import */ var _detail_detail_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./detail/detail.component */ "./src/app/detail/detail.component.ts");
/* harmony import */ var _api_movies_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./api-movies.service */ "./src/app/api-movies.service.ts");
/* harmony import */ var _disp_search_disp_search_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./disp-search/disp-search.component */ "./src/app/disp-search/disp-search.component.ts");
/* harmony import */ var _sanitize_pipe__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./sanitize.pipe */ "./src/app/sanitize.pipe.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_7__["HeaderComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_8__["FooterComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_9__["HomeComponent"],
                _search_form_search_form_component__WEBPACK_IMPORTED_MODULE_10__["SearchFormComponent"],
                _carrousel_carrousel_component__WEBPACK_IMPORTED_MODULE_11__["CarrouselComponent"],
                _peliculas_peliculas_component__WEBPACK_IMPORTED_MODULE_12__["PeliculasComponent"],
                _series_series_component__WEBPACK_IMPORTED_MODULE_13__["SeriesComponent"],
                _detail_detail_component__WEBPACK_IMPORTED_MODULE_14__["DetailComponent"],
                _disp_search_disp_search_component__WEBPACK_IMPORTED_MODULE_16__["DispSearchComponent"],
                _sanitize_pipe__WEBPACK_IMPORTED_MODULE_17__["SanitizePipe"]
            ],
            imports: [
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"]
            ],
            providers: [
                _api_movies_service__WEBPACK_IMPORTED_MODULE_15__["ApiMoviesService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/carrousel/carrousel.component.css":
/*!***************************************************!*\
  !*** ./src/app/carrousel/carrousel.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*div {\r\n    margin: 1rem 0 2rem 0;\r\n    display: grid;\r\n    grid-template-columns: repeat(20,min-content);\r\n    gap: 2px;\r\n    position: relative;\r\n    left: -185px;\r\n    z-index: 1;\r\n}\r\n!* Aquí trato el comportamiento con el hover *!\r\nsection img{\r\n    transition-duration: .5s;\r\n    width: 230px;\r\n    height: 130px;\r\n}\r\nsection img:hover {\r\n    width: 500px;\r\n    height: 282px;\r\n    z-index: 5;\r\n    transform: translate(-135px,-76px);\r\n    !*transform: translate(0,-76px);*!\r\n    transition-duration: .4s;\r\n    !*transform: translate3d(0px,0px,0px);\r\n    transition-timing-function: cubic-bezier(0.5, 0, 0.1, 0);*!\r\n    transition-delay: 0.4s;\r\n}\r\nsection:hover ~ section {\r\n    transform: translateX(-135px);\r\n    transition-delay: 0.4s;\r\n    transition-duration: 0.4s;\r\n    !*transition-timing-function: cubic-bezier(0.1, 0, 0.5, 0);*!\r\n}\r\nsection:hover::before {\r\n    transform: translateX(-135px);\r\n}*/\r\n:root {\r\n\r\n    /* Tile Dimensions */\r\n    --carousel-tile-spacing: 10px;\r\n    --carousel-tile-width:   250px;\r\n    --carousel-tile-height:  calc(var(--carousel-tile-width) / (16 / 9));\r\n\r\n    /* Growth Factor */\r\n    --carousel-growth-factor: 1.5;\r\n\r\n    /* Fade to Opacity */\r\n    --carousel-fade-opacity:   0.25;\r\n    --carousel-normal-opacity: 1;\r\n\r\n    /* Automatic Offsets - DO NOT ALTER */\r\n    --carousel-offset-left:  calc(-1 * (var(--carousel-tile-width) * (var(--carousel-growth-factor) - 1) / 2));\r\n    --carousel-offset-right: calc(var(--carousel-tile-width) * (var(--carousel-growth-factor) - 1));\r\n\r\n    /* Transition Speeds */\r\n    --carousel-transition-1: 1s;\r\n    --carousel-transition-2: 0.5s;\r\n    --carousel-transition-3: 0.3s;\r\n\r\n}\r\n/* Carousel Container */\r\n.carousel {\r\n    margin: 0;\r\n    box-sizing: border-box;\r\n    width: 100%;\r\n    overflow-x: hidden;\r\n    overflow-y: hidden;\r\n    position: relative;\r\n}\r\n/* Carousel Row */\r\n.carousel-row {\r\n    white-space: nowrap;\r\n    margin-top: calc((var(--carousel-tile-height) * (var(--carousel-growth-factor) - 1)) / 2);\r\n    margin-bottom: calc((var(--carousel-tile-height) * (var(--carousel-growth-factor) - 1)) / 2);\r\n    margin-left: calc((var(--carousel-tile-width) * (var(--carousel-growth-factor) - 1)) / 2);\r\n    margin-right: calc((var(--carousel-tile-width) * (var(--carousel-growth-factor) - 1)) / 2);\r\n    transition: var(--carousel-transition-2);\r\n}\r\n/* Content Tile */\r\n.carousel-tile {\r\n    position: relative;\r\n    display: inline-block;\r\n    width: var(--carousel-tile-width);\r\n    height: var(--carousel-tile-height);\r\n    margin-right: var(--carousel-tile-spacing);\r\n    transition: var(--carousel-transition-2);\r\n    -webkit-transform-origin: center left;\r\n    transform-origin: center left;\r\n    cursor: hand;\r\n\r\n}\r\n/* Add Extra Margin to Last Carousel Tile */\r\n.carousel-tile:last-of-type {\r\n    margin-right: calc(var(--carousel-tile-width)/2);\r\n}\r\n/* Ensure All Elements Inside Tile are Block */\r\n.carousel-tile * {\r\n    display: block;\r\n}\r\n/* Carousel Row on Hover */\r\n.carousel-row:hover {\r\n    -webkit-transform: translate3d(var(--carousel-offset-left), 0, 0);\r\n    transform: translate3d(var(--carousel-offset-left), 0, 0);\r\n}\r\n/* Content Tile on Carousel Row Hover */\r\n.carousel-row:hover .carousel-tile {\r\n    opacity: var(--carousel-fade-opacity);\r\n}\r\n/* Content Tile on Hover on Carousel Row Hover */\r\n.carousel-row:hover .carousel-tile:hover {\r\n    -webkit-transform: scale(var(--carousel-growth-factor));\r\n    transform: scale(var(--carousel-growth-factor));\r\n    opacity: var(--carousel-normal-opacity);\r\n}\r\n/* Content Tile on Hover */\r\n.carousel-tile:hover ~ .carousel-tile {\r\n    -webkit-transform: translate3d(var(--carousel-offset-right), 0, 0);\r\n    transform: translate3d(var(--carousel-offset-right), 0, 0);\r\n}\r\niframe {\r\n    border:0;\r\n}\r\n.slider-left {\r\n    position: absolute;\r\n    top: 35px ;\r\n    height: 141px;\r\n    width: 10vw;\r\n    background-color: rgba(28,28,28,0.4);\r\n    color: rgb(182,182,182);\r\n    left: 0;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    font-size: 100px;\r\n    cursor: pointer;\r\n}\r\n.slider-right {\r\n    position: absolute;\r\n    top: 35px ;\r\n    height: 141px;\r\n    width: 10vw;\r\n    background-color: rgba(28,28,28,0.1);\r\n    color: rgba(182,182,182, 0.2);\r\n    left: 90%;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    font-size: 100px;\r\n    cursor: pointer;\r\n}\r\n.slider-right:hover {\r\n    background-color: rgba(28,28,28,0.6);\r\n    color: rgba(182,182,182, 0.6);\r\n}\r\n.slider-left:hover {\r\n    background-color: rgba(28,28,28,0.6);\r\n    color: rgba(182,182,182, 0.6);\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2Fycm91c2VsL2NhcnJvdXNlbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBa0NHO0FBQ0g7O0lBRUkscUJBQXFCO0lBQ3JCLDhCQUE4QjtJQUM5QiwrQkFBK0I7SUFDL0IscUVBQXFFOztJQUVyRSxtQkFBbUI7SUFDbkIsOEJBQThCOztJQUU5QixxQkFBcUI7SUFDckIsZ0NBQWdDO0lBQ2hDLDZCQUE2Qjs7SUFFN0Isc0NBQXNDO0lBQ3RDLDJHQUEyRztJQUMzRyxnR0FBZ0c7O0lBRWhHLHVCQUF1QjtJQUN2Qiw0QkFBNEI7SUFDNUIsOEJBQThCO0lBQzlCLDhCQUE4Qjs7Q0FFakM7QUFFRCx3QkFBd0I7QUFDeEI7SUFDSSxVQUFVO0lBQ1YsdUJBQXVCO0lBQ3ZCLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLG1CQUFtQjtDQUN0QjtBQUVELGtCQUFrQjtBQUNsQjtJQUNJLG9CQUFvQjtJQUNwQiwwRkFBMEY7SUFDMUYsNkZBQTZGO0lBQzdGLDBGQUEwRjtJQUMxRiwyRkFBMkY7SUFDM0YseUNBQXlDO0NBQzVDO0FBRUQsa0JBQWtCO0FBQ2xCO0lBQ0ksbUJBQW1CO0lBQ25CLHNCQUFzQjtJQUN0QixrQ0FBa0M7SUFDbEMsb0NBQW9DO0lBQ3BDLDJDQUEyQztJQUMzQyx5Q0FBeUM7SUFDekMsc0NBQXNDO0lBQ3RDLDhCQUE4QjtJQUM5QixhQUFhOztDQUVoQjtBQUVELDRDQUE0QztBQUM1QztJQUNJLGlEQUFpRDtDQUNwRDtBQUVELCtDQUErQztBQUMvQztJQUNJLGVBQWU7Q0FDbEI7QUFFRCwyQkFBMkI7QUFDM0I7SUFDSSxrRUFBa0U7SUFDbEUsMERBQTBEO0NBQzdEO0FBRUQsd0NBQXdDO0FBQ3hDO0lBQ0ksc0NBQXNDO0NBQ3pDO0FBRUQsaURBQWlEO0FBQ2pEO0lBQ0ksd0RBQXdEO0lBQ3hELGdEQUFnRDtJQUNoRCx3Q0FBd0M7Q0FDM0M7QUFFRCwyQkFBMkI7QUFDM0I7SUFDSSxtRUFBbUU7SUFDbkUsMkRBQTJEO0NBQzlEO0FBQ0Q7SUFDSSxTQUFTO0NBQ1o7QUFDRDtJQUNJLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsY0FBYztJQUNkLFlBQVk7SUFDWixxQ0FBcUM7SUFDckMsd0JBQXdCO0lBQ3hCLFFBQVE7SUFDUixjQUFjO0lBQ2Qsb0JBQW9CO0lBQ3BCLHdCQUF3QjtJQUN4QixpQkFBaUI7SUFDakIsZ0JBQWdCO0NBQ25CO0FBQ0Q7SUFDSSxtQkFBbUI7SUFDbkIsV0FBVztJQUNYLGNBQWM7SUFDZCxZQUFZO0lBQ1oscUNBQXFDO0lBQ3JDLDhCQUE4QjtJQUM5QixVQUFVO0lBQ1YsY0FBYztJQUNkLG9CQUFvQjtJQUNwQix3QkFBd0I7SUFDeEIsaUJBQWlCO0lBQ2pCLGdCQUFnQjtDQUNuQjtBQUNEO0lBQ0kscUNBQXFDO0lBQ3JDLDhCQUE4QjtDQUNqQztBQUNEO0lBQ0kscUNBQXFDO0lBQ3JDLDhCQUE4QjtDQUNqQyIsImZpbGUiOiJzcmMvYXBwL2NhcnJvdXNlbC9jYXJyb3VzZWwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qZGl2IHtcclxuICAgIG1hcmdpbjogMXJlbSAwIDJyZW0gMDtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyMCxtaW4tY29udGVudCk7XHJcbiAgICBnYXA6IDJweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGxlZnQ6IC0xODVweDtcclxuICAgIHotaW5kZXg6IDE7XHJcbn1cclxuISogQXF1w60gdHJhdG8gZWwgY29tcG9ydGFtaWVudG8gY29uIGVsIGhvdmVyICohXHJcbnNlY3Rpb24gaW1ne1xyXG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogLjVzO1xyXG4gICAgd2lkdGg6IDIzMHB4O1xyXG4gICAgaGVpZ2h0OiAxMzBweDtcclxufVxyXG5zZWN0aW9uIGltZzpob3ZlciB7XHJcbiAgICB3aWR0aDogNTAwcHg7XHJcbiAgICBoZWlnaHQ6IDI4MnB4O1xyXG4gICAgei1pbmRleDogNTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC0xMzVweCwtNzZweCk7XHJcbiAgICAhKnRyYW5zZm9ybTogdHJhbnNsYXRlKDAsLTc2cHgpOyohXHJcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAuNHM7XHJcbiAgICAhKnRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMHB4LDBweCwwcHgpO1xyXG4gICAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjUsIDAsIDAuMSwgMCk7KiFcclxuICAgIHRyYW5zaXRpb24tZGVsYXk6IDAuNHM7XHJcbn1cclxuc2VjdGlvbjpob3ZlciB+IHNlY3Rpb24ge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMzVweCk7XHJcbiAgICB0cmFuc2l0aW9uLWRlbGF5OiAwLjRzO1xyXG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC40cztcclxuICAgICEqdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjEsIDAsIDAuNSwgMCk7KiFcclxufVxyXG5zZWN0aW9uOmhvdmVyOjpiZWZvcmUge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMzVweCk7XHJcbn0qL1xyXG46cm9vdCB7XHJcblxyXG4gICAgLyogVGlsZSBEaW1lbnNpb25zICovXHJcbiAgICAtLWNhcm91c2VsLXRpbGUtc3BhY2luZzogMTBweDtcclxuICAgIC0tY2Fyb3VzZWwtdGlsZS13aWR0aDogICAyNTBweDtcclxuICAgIC0tY2Fyb3VzZWwtdGlsZS1oZWlnaHQ6ICBjYWxjKHZhcigtLWNhcm91c2VsLXRpbGUtd2lkdGgpIC8gKDE2IC8gOSkpO1xyXG5cclxuICAgIC8qIEdyb3d0aCBGYWN0b3IgKi9cclxuICAgIC0tY2Fyb3VzZWwtZ3Jvd3RoLWZhY3RvcjogMS41O1xyXG5cclxuICAgIC8qIEZhZGUgdG8gT3BhY2l0eSAqL1xyXG4gICAgLS1jYXJvdXNlbC1mYWRlLW9wYWNpdHk6ICAgMC4yNTtcclxuICAgIC0tY2Fyb3VzZWwtbm9ybWFsLW9wYWNpdHk6IDE7XHJcblxyXG4gICAgLyogQXV0b21hdGljIE9mZnNldHMgLSBETyBOT1QgQUxURVIgKi9cclxuICAgIC0tY2Fyb3VzZWwtb2Zmc2V0LWxlZnQ6ICBjYWxjKC0xICogKHZhcigtLWNhcm91c2VsLXRpbGUtd2lkdGgpICogKHZhcigtLWNhcm91c2VsLWdyb3d0aC1mYWN0b3IpIC0gMSkgLyAyKSk7XHJcbiAgICAtLWNhcm91c2VsLW9mZnNldC1yaWdodDogY2FsYyh2YXIoLS1jYXJvdXNlbC10aWxlLXdpZHRoKSAqICh2YXIoLS1jYXJvdXNlbC1ncm93dGgtZmFjdG9yKSAtIDEpKTtcclxuXHJcbiAgICAvKiBUcmFuc2l0aW9uIFNwZWVkcyAqL1xyXG4gICAgLS1jYXJvdXNlbC10cmFuc2l0aW9uLTE6IDFzO1xyXG4gICAgLS1jYXJvdXNlbC10cmFuc2l0aW9uLTI6IDAuNXM7XHJcbiAgICAtLWNhcm91c2VsLXRyYW5zaXRpb24tMzogMC4zcztcclxuXHJcbn1cclxuXHJcbi8qIENhcm91c2VsIENvbnRhaW5lciAqL1xyXG4uY2Fyb3VzZWwge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xyXG4gICAgb3ZlcmZsb3cteTogaGlkZGVuO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4vKiBDYXJvdXNlbCBSb3cgKi9cclxuLmNhcm91c2VsLXJvdyB7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgbWFyZ2luLXRvcDogY2FsYygodmFyKC0tY2Fyb3VzZWwtdGlsZS1oZWlnaHQpICogKHZhcigtLWNhcm91c2VsLWdyb3d0aC1mYWN0b3IpIC0gMSkpIC8gMik7XHJcbiAgICBtYXJnaW4tYm90dG9tOiBjYWxjKCh2YXIoLS1jYXJvdXNlbC10aWxlLWhlaWdodCkgKiAodmFyKC0tY2Fyb3VzZWwtZ3Jvd3RoLWZhY3RvcikgLSAxKSkgLyAyKTtcclxuICAgIG1hcmdpbi1sZWZ0OiBjYWxjKCh2YXIoLS1jYXJvdXNlbC10aWxlLXdpZHRoKSAqICh2YXIoLS1jYXJvdXNlbC1ncm93dGgtZmFjdG9yKSAtIDEpKSAvIDIpO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBjYWxjKCh2YXIoLS1jYXJvdXNlbC10aWxlLXdpZHRoKSAqICh2YXIoLS1jYXJvdXNlbC1ncm93dGgtZmFjdG9yKSAtIDEpKSAvIDIpO1xyXG4gICAgdHJhbnNpdGlvbjogdmFyKC0tY2Fyb3VzZWwtdHJhbnNpdGlvbi0yKTtcclxufVxyXG5cclxuLyogQ29udGVudCBUaWxlICovXHJcbi5jYXJvdXNlbC10aWxlIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHdpZHRoOiB2YXIoLS1jYXJvdXNlbC10aWxlLXdpZHRoKTtcclxuICAgIGhlaWdodDogdmFyKC0tY2Fyb3VzZWwtdGlsZS1oZWlnaHQpO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiB2YXIoLS1jYXJvdXNlbC10aWxlLXNwYWNpbmcpO1xyXG4gICAgdHJhbnNpdGlvbjogdmFyKC0tY2Fyb3VzZWwtdHJhbnNpdGlvbi0yKTtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyIGxlZnQ7XHJcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXIgbGVmdDtcclxuICAgIGN1cnNvcjogaGFuZDtcclxuXHJcbn1cclxuXHJcbi8qIEFkZCBFeHRyYSBNYXJnaW4gdG8gTGFzdCBDYXJvdXNlbCBUaWxlICovXHJcbi5jYXJvdXNlbC10aWxlOmxhc3Qtb2YtdHlwZSB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGNhbGModmFyKC0tY2Fyb3VzZWwtdGlsZS13aWR0aCkvMik7XHJcbn1cclxuXHJcbi8qIEVuc3VyZSBBbGwgRWxlbWVudHMgSW5zaWRlIFRpbGUgYXJlIEJsb2NrICovXHJcbi5jYXJvdXNlbC10aWxlICoge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbi8qIENhcm91c2VsIFJvdyBvbiBIb3ZlciAqL1xyXG4uY2Fyb3VzZWwtcm93OmhvdmVyIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCh2YXIoLS1jYXJvdXNlbC1vZmZzZXQtbGVmdCksIDAsIDApO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCh2YXIoLS1jYXJvdXNlbC1vZmZzZXQtbGVmdCksIDAsIDApO1xyXG59XHJcblxyXG4vKiBDb250ZW50IFRpbGUgb24gQ2Fyb3VzZWwgUm93IEhvdmVyICovXHJcbi5jYXJvdXNlbC1yb3c6aG92ZXIgLmNhcm91c2VsLXRpbGUge1xyXG4gICAgb3BhY2l0eTogdmFyKC0tY2Fyb3VzZWwtZmFkZS1vcGFjaXR5KTtcclxufVxyXG5cclxuLyogQ29udGVudCBUaWxlIG9uIEhvdmVyIG9uIENhcm91c2VsIFJvdyBIb3ZlciAqL1xyXG4uY2Fyb3VzZWwtcm93OmhvdmVyIC5jYXJvdXNlbC10aWxlOmhvdmVyIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSh2YXIoLS1jYXJvdXNlbC1ncm93dGgtZmFjdG9yKSk7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKHZhcigtLWNhcm91c2VsLWdyb3d0aC1mYWN0b3IpKTtcclxuICAgIG9wYWNpdHk6IHZhcigtLWNhcm91c2VsLW5vcm1hbC1vcGFjaXR5KTtcclxufVxyXG5cclxuLyogQ29udGVudCBUaWxlIG9uIEhvdmVyICovXHJcbi5jYXJvdXNlbC10aWxlOmhvdmVyIH4gLmNhcm91c2VsLXRpbGUge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKHZhcigtLWNhcm91c2VsLW9mZnNldC1yaWdodCksIDAsIDApO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCh2YXIoLS1jYXJvdXNlbC1vZmZzZXQtcmlnaHQpLCAwLCAwKTtcclxufVxyXG5pZnJhbWUge1xyXG4gICAgYm9yZGVyOjA7XHJcbn1cclxuLnNsaWRlci1sZWZ0IHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMzVweCA7XHJcbiAgICBoZWlnaHQ6IDE0MXB4O1xyXG4gICAgd2lkdGg6IDEwdnc7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI4LDI4LDI4LDAuNCk7XHJcbiAgICBjb2xvcjogcmdiKDE4MiwxODIsMTgyKTtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAxMDBweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4uc2xpZGVyLXJpZ2h0IHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMzVweCA7XHJcbiAgICBoZWlnaHQ6IDE0MXB4O1xyXG4gICAgd2lkdGg6IDEwdnc7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI4LDI4LDI4LDAuMSk7XHJcbiAgICBjb2xvcjogcmdiYSgxODIsMTgyLDE4MiwgMC4yKTtcclxuICAgIGxlZnQ6IDkwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDEwMHB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbi5zbGlkZXItcmlnaHQ6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyOCwyOCwyOCwwLjYpO1xyXG4gICAgY29sb3I6IHJnYmEoMTgyLDE4MiwxODIsIDAuNik7XHJcbn1cclxuLnNsaWRlci1sZWZ0OmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjgsMjgsMjgsMC42KTtcclxuICAgIGNvbG9yOiByZ2JhKDE4MiwxODIsMTgyLCAwLjYpO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/carrousel/carrousel.component.html":
/*!****************************************************!*\
  !*** ./src/app/carrousel/carrousel.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"carousel\">\n    <div class=\"carousel-row\"\n         [@slideNext]='{value: state, params: {tras: tras*firstItem}}'\n         (@slideNext.done)=\"cambiaEstado()\">\n        <div  ngClass=\"carousel-tile\"\n              *ngFor=\"let elem of elementosAMostrar,let i = index\"\n              (mouseenter)=\"mouseEnter(i)\"\n              (mouseleave)=\"mouseLeave(i)\">\n            <div *ngIf=\"!hovered[i]\">\n                <img alt=\"{{elem.name}}\"\n                [src]=\"elem.img_url\" width=\"250px\"\n                >\n            </div>\n            <div *ngIf=\"hovered[i]\">\n            <iframe width=\"248\"\n                    [src]=\"elem.trailerKey | sanitize\">\n            </iframe>\n            </div>\n        </div>\n    </div>\n    <div *ngIf=\"firstItem!=0\" class=\"slider-left\" (click)=\"slideToPreviousItem()\">\n        <i id=\"slider-left\" class=\"fas fa-angle-left\"></i>\n    </div>\n    <div *ngIf=\"firstItem!=15\" class=\"slider-right\" (click)=\"slideToNextItem()\">\n        <i id=\"slider-right\" class=\"fas fa-angle-right\"></i>\n    </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/carrousel/carrousel.component.ts":
/*!**************************************************!*\
  !*** ./src/app/carrousel/carrousel.component.ts ***!
  \**************************************************/
/*! exports provided: CarrouselComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarrouselComponent", function() { return CarrouselComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// Esto es para las animaciones
// import { state, style, animate, trigger, transition} from '@angular/animations';
var CarrouselComponent = /** @class */ (function () {
    function CarrouselComponent() {
        this.hovered = [false, false, false, false, false, false, false, false];
        this.state = 'origen';
        this.isAnimating = false;
        this.firstItem = 0;
        this.tras = -16.25;
    }
    CarrouselComponent.prototype.ngOnInit = function () { };
    CarrouselComponent.prototype.slideToNextItem = function () {
        if (!this.isAnimating) {
            this.isAnimating = true;
            this.state = 'destino';
            if (this.firstItem !== 15) {
                this.firstItem += 5;
            }
        }
    };
    CarrouselComponent.prototype.slideToPreviousItem = function () {
        if (!this.isAnimating) {
            this.isAnimating = true;
            this.state = 'destino';
            if (this.firstItem !== 0) {
                this.firstItem -= 5;
            }
        }
    };
    CarrouselComponent.prototype.cambiaEstado = function () {
        this.state = 'origen';
        this.isAnimating = false;
    };
    CarrouselComponent.prototype.mouseEnter = function (i) {
        var _this = this;
        this.timeOut = setTimeout(function () { return _this.hovered[i] = true; }, 1000);
    };
    CarrouselComponent.prototype.mouseLeave = function (i) {
        clearTimeout(this.timeOut);
        this.hovered[i] = false;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], CarrouselComponent.prototype, "elementosAMostrar", void 0);
    CarrouselComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-carrousel-netflix',
            template: __webpack_require__(/*! ./carrousel.component.html */ "./src/app/carrousel/carrousel.component.html"),
            styles: [__webpack_require__(/*! ./carrousel.component.css */ "./src/app/carrousel/carrousel.component.css")],
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('slideNext', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('destino', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateX({{tras}}rem)' }), { params: { tras: '20rem' } }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('* => *', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('400ms')),
                ]),
            ]
        }),
        __metadata("design:paramtypes", [])
    ], CarrouselComponent);
    return CarrouselComponent;
}());



/***/ }),

/***/ "./src/app/detail/detail.component.css":
/*!*********************************************!*\
  !*** ./src/app/detail/detail.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RldGFpbC9kZXRhaWwuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/detail/detail.component.html":
/*!**********************************************!*\
  !*** ./src/app/detail/detail.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  detail works!\n</p>\n"

/***/ }),

/***/ "./src/app/detail/detail.component.ts":
/*!********************************************!*\
  !*** ./src/app/detail/detail.component.ts ***!
  \********************************************/
/*! exports provided: DetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailComponent", function() { return DetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DetailComponent = /** @class */ (function () {
    function DetailComponent() {
    }
    DetailComponent.prototype.ngOnInit = function () {
    };
    DetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-detail',
            template: __webpack_require__(/*! ./detail.component.html */ "./src/app/detail/detail.component.html"),
            styles: [__webpack_require__(/*! ./detail.component.css */ "./src/app/detail/detail.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DetailComponent);
    return DetailComponent;
}());



/***/ }),

/***/ "./src/app/disp-search/disp-search.component.css":
/*!*******************************************************!*\
  !*** ./src/app/disp-search/disp-search.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rpc3Atc2VhcmNoL2Rpc3Atc2VhcmNoLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/disp-search/disp-search.component.html":
/*!********************************************************!*\
  !*** ./src/app/disp-search/disp-search.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>Buscando: {{elemToSearch}}</h2>\n<div class=\"dispSearch\">\n  <div *ngFor=\"let elem of multElems\">\n    <img alt=\"{{elem.name}}\"\n         src=\"{{elem.img_url}}\"\n    >\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/disp-search/disp-search.component.ts":
/*!******************************************************!*\
  !*** ./src/app/disp-search/disp-search.component.ts ***!
  \******************************************************/
/*! exports provided: DispSearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DispSearchComponent", function() { return DispSearchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _api_movies_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../api-movies.service */ "./src/app/api-movies.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DispSearchComponent = /** @class */ (function () {
    function DispSearchComponent(apiService, activatedRoute) {
        var _this = this;
        this.apiService = apiService;
        this.activatedRoute = activatedRoute;
        this.multElems = [];
        this.activatedRoute.params.subscribe(function (params) {
            _this.elemToSearch = params['elem'];
            _this.search(_this.elemToSearch);
        });
    }
    DispSearchComponent.prototype.ngOnInit = function () {
    };
    DispSearchComponent.prototype.search = function (id) {
        if (id.length > 2) {
            this.multElems = this.apiService.getElemsMult("/api/search?" + id);
        }
    };
    DispSearchComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-disp-search',
            template: __webpack_require__(/*! ./disp-search.component.html */ "./src/app/disp-search/disp-search.component.html"),
            styles: [__webpack_require__(/*! ./disp-search.component.css */ "./src/app/disp-search/disp-search.component.css")]
        }),
        __metadata("design:paramtypes", [_api_movies_service__WEBPACK_IMPORTED_MODULE_1__["ApiMoviesService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], DispSearchComponent);
    return DispSearchComponent;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.css":
/*!*********************************************!*\
  !*** ./src/app/footer/footer.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "footer {\r\n    margin: 100px auto 0 auto;\r\n    max-width: 700px;\r\n}\r\n\r\n.footer__icons {\r\n    list-style-type: none;\r\n}\r\n\r\n.footer__icons i {\r\n    font-size: 1.8rem;\r\n    color: grey;\r\n}\r\n\r\n.footer__icons li {\r\n    display: inline-block;\r\n    margin-right: 2rem;\r\n}\r\n\r\n.footer__table {\r\n    display: flex;\r\n    align-content: space-between;\r\n    list-style-type: none;;\r\n    flex-wrap: wrap;\r\n}\r\n\r\n.footer__table li {\r\n    width: 10rem;\r\n}\r\n\r\n.footer__box {\r\n    border: 1px solid grey;\r\n    padding: 3px;\r\n    width: -webkit-fit-content;\r\n    width: -moz-fit-content;\r\n    width: fit-content;\r\n    margin: 2rem 0;\r\n}\r\n\r\na:hover {\r\n    text-decoration: underline;\r\n}\r\n\r\na:link {\r\n    color: grey;\r\n    text-decoration: none;\r\n}\r\n\r\na:visited {\r\n    text-decoration: none;\r\n    color: grey;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksMEJBQTBCO0lBQzFCLGlCQUFpQjtDQUNwQjs7QUFFRDtJQUNJLHNCQUFzQjtDQUN6Qjs7QUFDRDtJQUNJLGtCQUFrQjtJQUNsQixZQUFZO0NBQ2Y7O0FBQ0Q7SUFDSSxzQkFBc0I7SUFDdEIsbUJBQW1CO0NBQ3RCOztBQUVEO0lBQ0ksY0FBYztJQUNkLDZCQUE2QjtJQUM3QixzQkFBc0I7SUFDdEIsZ0JBQWdCO0NBQ25COztBQUNEO0lBQ0ksYUFBYTtDQUNoQjs7QUFFRDtJQUNJLHVCQUF1QjtJQUN2QixhQUFhO0lBQ2IsMkJBQW1CO0lBQW5CLHdCQUFtQjtJQUFuQixtQkFBbUI7SUFDbkIsZUFBZTtDQUNsQjs7QUFFRDtJQUNJLDJCQUEyQjtDQUM5Qjs7QUFDRDtJQUNJLFlBQVk7SUFDWixzQkFBc0I7Q0FDekI7O0FBQ0Q7SUFDSSxzQkFBc0I7SUFDdEIsWUFBWTtDQUNmIiwiZmlsZSI6InNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZm9vdGVyIHtcclxuICAgIG1hcmdpbjogMTAwcHggYXV0byAwIGF1dG87XHJcbiAgICBtYXgtd2lkdGg6IDcwMHB4O1xyXG59XHJcblxyXG4uZm9vdGVyX19pY29ucyB7XHJcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbn1cclxuLmZvb3Rlcl9faWNvbnMgaSB7XHJcbiAgICBmb250LXNpemU6IDEuOHJlbTtcclxuICAgIGNvbG9yOiBncmV5O1xyXG59XHJcbi5mb290ZXJfX2ljb25zIGxpIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIG1hcmdpbi1yaWdodDogMnJlbTtcclxufVxyXG5cclxuLmZvb3Rlcl9fdGFibGUge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7O1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG59XHJcbi5mb290ZXJfX3RhYmxlIGxpIHtcclxuICAgIHdpZHRoOiAxMHJlbTtcclxufVxyXG5cclxuLmZvb3Rlcl9fYm94IHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGdyZXk7XHJcbiAgICBwYWRkaW5nOiAzcHg7XHJcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XHJcbiAgICBtYXJnaW46IDJyZW0gMDtcclxufVxyXG5cclxuYTpob3ZlciB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxufVxyXG5hOmxpbmsge1xyXG4gICAgY29sb3I6IGdyZXk7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuYTp2aXNpdGVkIHtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGNvbG9yOiBncmV5O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/footer/footer.component.html":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer>\n  <nav>\n    <ul class=\"footer__icons\">\n      <li><a href=\"http://www.facebook.com\"><i class=\"fab fa-facebook\"></i></a></li>\n      <li><a href=\"http://www.instagram.com\"><img height=\"25px\" src=\"assets/img/icon-instagram.png\"></a></li>\n      <li><a href=\"http://www.twitter.com\"><img height=\"25px\" src=\"assets/img/icon-twitter.png\"></a></li>\n      <li><a href=\"http://www.youtube.com\"><img height=\"25px\" src=\"assets/img/icon-youtube.png\"></a></li>\n    </ul>\n    <ul class=\"footer__table\">\n      <li><a href=\"#\">Audio y subt&iacute;tulos</a></li>\n      <li><a href=\"#\">Descripci&oacute;n</a></li>\n      <li><a href=\"#\">Centro de ayuda</a></li>\n      <li><a href=\"#\">Tarjetas regalo</a></li>\n      <li><a href=\"#\">Zona de prensa</a></li>\n      <li><a href=\"#\">Inversores</a></li>\n      <li><a href=\"#\">Empleo</a></li>\n      <li><a href=\"#\">T&eacute;rminos de uso</a></li>\n      <li><a href=\"#\">Privacidad</a></li>\n      <li><a href=\"#\">Avisos legales</a></li>\n      <li><a href=\"#\">Preferencia de cookies</a></li>\n      <li><a href=\"#\">Informaci&oacute;n corporativa</a></li>\n      <li><a href=\"#\">Cont&aacute;ctanos</a></li>\n    </ul>\n    <p class=\"footer__box\"><a href=\"#\">C&oacute;digo de servicio</a></p>\n  </nav>\n  <p>&copy; 2018-2018 Appflix, Inc.</p>\n</footer>"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "header {\r\n    display: flex;\r\n    justify-content: space-between;\r\n}\r\nnav {\r\n    display: flex;\r\n    justify-content: space-around;\r\n}\r\nli {\r\n    font-size: 1rem;\r\n    font-weight: bold;\r\n    list-style-type: none;\r\n    display: inline-block;\r\n    margin: 1rem;\r\n}\r\nnav div {\r\n    align-self: center;\r\n    margin-left: 3rem;\r\n}\r\napp-search-form {\r\n    align-self: center;\r\n}\r\na:link {\r\n    text-decoration: none;\r\n    color: rgb(182,182,182);\r\n}\r\na:hover {\r\n    color: rgb(229,229,229);\r\n}\r\na:visited {\r\n    text-decoration: none;\r\n    color: rgb(182,182,182);\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksY0FBYztJQUNkLCtCQUErQjtDQUNsQztBQUNEO0lBQ0ksY0FBYztJQUNkLDhCQUE4QjtDQUNqQztBQUNEO0lBQ0ksZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixzQkFBc0I7SUFDdEIsc0JBQXNCO0lBQ3RCLGFBQWE7Q0FDaEI7QUFDRDtJQUNJLG1CQUFtQjtJQUNuQixrQkFBa0I7Q0FDckI7QUFDRDtJQUNJLG1CQUFtQjtDQUN0QjtBQUNEO0lBQ0ksc0JBQXNCO0lBQ3RCLHdCQUF3QjtDQUMzQjtBQUNEO0lBQ0ksd0JBQXdCO0NBQzNCO0FBQ0Q7SUFDSSxzQkFBc0I7SUFDdEIsd0JBQXdCO0NBQzNCIiwiZmlsZSI6InNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaGVhZGVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbn1cclxubmF2IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxufVxyXG5saSB7XHJcbiAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIG1hcmdpbjogMXJlbTtcclxufVxyXG5uYXYgZGl2IHtcclxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICAgIG1hcmdpbi1sZWZ0OiAzcmVtO1xyXG59XHJcbmFwcC1zZWFyY2gtZm9ybSB7XHJcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbn1cclxuYTpsaW5rIHtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGNvbG9yOiByZ2IoMTgyLDE4MiwxODIpO1xyXG59XHJcbmE6aG92ZXIge1xyXG4gICAgY29sb3I6IHJnYigyMjksMjI5LDIyOSk7XHJcbn1cclxuYTp2aXNpdGVkIHtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGNvbG9yOiByZ2IoMTgyLDE4MiwxODIpO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header>\n    <nav class=\"UpFlix_nav\">\n        <div>\n            <a routerLink=\"home\" routerLinkActive=\"active\">\n                <img height=\"32px\" alt=\"UpFlix\" src=\"assets/logo_dark_bg.svg\">\n            </a>\n        </div>\n        <ul>\n            <li><a routerLink=\"home\" routerLinkActive=\"active\">Inicio</a></li>\n            <li><a routerLink=\"series\" routerLinkActive=\"active\">Series</a></li>\n            <li><a routerLink=\"movies\" routerLinkActive=\"active\">Pel&iacute;culas</a></li>\n            <li><a routerLink=\"home\" routerLinkActive=\"active\">A&ntilde;adido recientemente</a></li>\n            <li><a routerLink=\"home\" routerLinkActive=\"active\">Mi lista</a></li>\n        </ul>\n    </nav>\n    <app-search-form></app-search-form>\n</header>\n"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h2 {\r\n    margin-left: 3.9rem;\r\n}\r\nmain {\r\n    margin-top: 2rem;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxvQkFBb0I7Q0FDdkI7QUFDRDtJQUNJLGlCQUFpQjtDQUNwQiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDIge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDMuOXJlbTtcclxufVxyXG5tYWluIHtcclxuICAgIG1hcmdpbi10b3A6IDJyZW07XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main>\n  <h2>Pel&iacute;culas populares en Upflix</h2>\n  <app-carrousel-netflix [elementosAMostrar]=\"popularMovies\"></app-carrousel-netflix>\n  <h2>Tendencias hoy</h2>\n  <app-carrousel-netflix [elementosAMostrar]=\"trendingToday\"></app-carrousel-netflix>\n  <h2>Series populares en Upflix</h2>\n  <app-carrousel-netflix [elementosAMostrar]=\"popularSeries\"></app-carrousel-netflix>\n  <h2>Series japonesas</h2>\n  <app-carrousel-netflix [elementosAMostrar]=\"japSeries\"></app-carrousel-netflix>\n</main>\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _api_movies_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../api-movies.service */ "./src/app/api-movies.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = /** @class */ (function () {
    function HomeComponent(apiMoviesService) {
        this.apiMoviesService = apiMoviesService;
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.getMultimedia();
    };
    /* Hace todas las peticiones que despues va a pasar al carrousel
     pasandole al servicio directamente la url. Es un poco sucio
     pero el plan es cambiar t odo el funcionamiento cuando implemente
     mi propia api para hacere peticiones a la base de datos*/
    HomeComponent.prototype.getMultimedia = function () {
        this.trendingToday = this.apiMoviesService.getElemsMult('/api/discover/series');
        this.popularMovies = this.apiMoviesService.getElemsMult('/api/discover/movies/popularity');
        this.popularSeries = this.apiMoviesService.getElemsMult('/api/discover/series/popularity');
        this.popularMoviesToday = this.apiMoviesService.getElemsMult('/api/discover/movies');
        this.japMovies = this.apiMoviesService.getElemsMult('/api/discover/movies?original_language=ja');
        this.japSeries = this.apiMoviesService.getElemsMult('/api/discover/series?original_language=ja');
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        })
        /* Es este componente el que ahora esta haciendo las peticiones
       al servicio y le pasa al carrousel el array de peliculas
        que corresponda */
        ,
        __metadata("design:paramtypes", [_api_movies_service__WEBPACK_IMPORTED_MODULE_1__["ApiMoviesService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/models/ElemMultimedia.ts":
/*!******************************************!*\
  !*** ./src/app/models/ElemMultimedia.ts ***!
  \******************************************/
/*! exports provided: ElemMultimedia */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ElemMultimedia", function() { return ElemMultimedia; });
var ElemMultimedia = /** @class */ (function () {
    function ElemMultimedia(id, name, img_url, bio, releaseDate, valoration, trailerKey) {
        this.id = id;
        this.name = name;
        this.img_url = img_url;
        this.bio = bio;
        this.releaseDate = releaseDate;
        this.valoration = valoration;
        this.trailerKey = trailerKey;
    }
    return ElemMultimedia;
}());



/***/ }),

/***/ "./src/app/peliculas/peliculas.component.css":
/*!***************************************************!*\
  !*** ./src/app/peliculas/peliculas.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BlbGljdWxhcy9wZWxpY3VsYXMuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/peliculas/peliculas.component.html":
/*!****************************************************!*\
  !*** ./src/app/peliculas/peliculas.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main>\n  <h2>Tendencias hoy en Upflix</h2>\n  <app-carrousel-netflix [elementosAMostrar]=\"popularMoviesToday\"></app-carrousel-netflix>\n</main>"

/***/ }),

/***/ "./src/app/peliculas/peliculas.component.ts":
/*!**************************************************!*\
  !*** ./src/app/peliculas/peliculas.component.ts ***!
  \**************************************************/
/*! exports provided: PeliculasComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PeliculasComponent", function() { return PeliculasComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _api_movies_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../api-movies.service */ "./src/app/api-movies.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PeliculasComponent = /** @class */ (function () {
    function PeliculasComponent(apiMoviesService) {
        this.apiMoviesService = apiMoviesService;
    }
    PeliculasComponent.prototype.ngOnInit = function () {
        this.getMulti();
    };
    PeliculasComponent.prototype.getMulti = function () {
        this.trendingToday =
            this.apiMoviesService.getElemsMult('https://api.themoviedb.org/3/trending/all/day?api_key=8d1ff0fd31d021c4902d57908c87f3fc');
        this.popularMovies =
            this.apiMoviesService.getElemsMult('https://api.themoviedb.org/3/discover/movie?api_key=8d1ff0fd31d021c4902d57908c87f3fc');
        this.popularSeries =
            this.apiMoviesService.getElemsMult('https://api.themoviedb.org/3/discover/tv?api_key=8d1ff0fd31d021c4902d57908c87f3fc');
        this.popularMoviesToday =
            this.apiMoviesService.getElemsMult('https://api.themoviedb.org/3/trending/movie/day?api_key=8d1ff0fd31d021c4902d57908c87f3fc');
        this.japMovies =
            this.apiMoviesService.getElemsMult('https://api.themoviedb.org/3/discover/movie?api_key=8d1ff0fd31d021c4902d57908c87f3fc&with_original_language=ja');
        this.jap =
            this.apiMoviesService.getElemsMult('https://api.themoviedb.org/3/discover?api_key=8d1ff0fd31d021c4902d57908c87f3fc&with_original_language=ja');
        this.japSeries =
            this.apiMoviesService.getElemsMult('https://api.themoviedb.org/3/discover/tv?api_key=8d1ff0fd31d021c4902d57908c87f3fc&with_original_language=ja');
    };
    PeliculasComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-peliculas',
            template: __webpack_require__(/*! ./peliculas.component.html */ "./src/app/peliculas/peliculas.component.html"),
            styles: [__webpack_require__(/*! ./peliculas.component.css */ "./src/app/peliculas/peliculas.component.css")]
        }),
        __metadata("design:paramtypes", [_api_movies_service__WEBPACK_IMPORTED_MODULE_1__["ApiMoviesService"]])
    ], PeliculasComponent);
    return PeliculasComponent;
}());

/*setElemMultimedia(posicion = 0) {
    /!*console.log('2');
    console.log(this.arrayElemMultimedia);
    console.log(posicion);
    console.log(this.arrayElemMultimedia.slice(0, 7));
    this.elementosAMostrar = this.arrayElemMultimedia.slice(posicion, posicion + 7);
    console.log('3');
    console.log(this.arrayElemMultimedia.slice(0, 7));*!/
    this.elementosAMostrar = this.arrayElemMultimedia;
}*/


/***/ }),

/***/ "./src/app/sanitize.pipe.ts":
/*!**********************************!*\
  !*** ./src/app/sanitize.pipe.ts ***!
  \**********************************/
/*! exports provided: SanitizePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SanitizePipe", function() { return SanitizePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SanitizePipe = /** @class */ (function () {
    function SanitizePipe(sanitizer) {
        this.sanitizer = sanitizer;
    }
    SanitizePipe.prototype.transform = function (value, args) {
        return this.sanitizer.bypassSecurityTrustResourceUrl(value);
    };
    SanitizePipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'sanitize'
        }),
        __metadata("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"]])
    ], SanitizePipe);
    return SanitizePipe;
}());



/***/ }),

/***/ "./src/app/search-form/search-form.component.css":
/*!*******************************************************!*\
  !*** ./src/app/search-form/search-form.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "form {\r\n    margin-left: 2rem;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VhcmNoLWZvcm0vc2VhcmNoLWZvcm0uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtDQUNyQiIsImZpbGUiOiJzcmMvYXBwL3NlYXJjaC1mb3JtL3NlYXJjaC1mb3JtLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJmb3JtIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAycmVtO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/search-form/search-form.component.html":
/*!********************************************************!*\
  !*** ./src/app/search-form/search-form.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form (keyup)=\"search(searchForm)\"\n      (ngSubmit)=\"search(searchForm)\"\n      #searchForm=\"ngForm\">\n  <input class=\"form-control\"\n         type=\"text\"\n         name=\"peli\"\n         ngModel/>\n</form>"

/***/ }),

/***/ "./src/app/search-form/search-form.component.ts":
/*!******************************************************!*\
  !*** ./src/app/search-form/search-form.component.ts ***!
  \******************************************************/
/*! exports provided: SearchFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchFormComponent", function() { return SearchFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SearchFormComponent = /** @class */ (function () {
    function SearchFormComponent(router) {
        this.router = router;
    }
    SearchFormComponent.prototype.ngOnInit = function () {
    };
    SearchFormComponent.prototype.search = function (searchForm) {
        this.router.navigate(['/search', searchForm.value.peli]);
    };
    SearchFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-search-form',
            template: __webpack_require__(/*! ./search-form.component.html */ "./src/app/search-form/search-form.component.html"),
            styles: [__webpack_require__(/*! ./search-form.component.css */ "./src/app/search-form/search-form.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], SearchFormComponent);
    return SearchFormComponent;
}());



/***/ }),

/***/ "./src/app/series/series.component.css":
/*!*********************************************!*\
  !*** ./src/app/series/series.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Nlcmllcy9zZXJpZXMuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/series/series.component.html":
/*!**********************************************!*\
  !*** ./src/app/series/series.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main>\n  <h2>Populares en UpFlix</h2>\n  <app-carrousel-netflix [elementosAMostrar]=\"'seriesPopular'\"></app-carrousel-netflix>\n  <h2>Tendencias ahora</h2>\n  <app-carrousel-netflix [elementosAMostrar]=\"'seriesTendencias'\"></app-carrousel-netflix>\n  <h2>Ciencia ficción y fantasticas en EE UU</h2>\n  <app-carrousel-netflix [elementosAMostrar]=\"'seriesSFFantasiaEEUU'\"></app-carrousel-netflix>\n</main>"

/***/ }),

/***/ "./src/app/series/series.component.ts":
/*!********************************************!*\
  !*** ./src/app/series/series.component.ts ***!
  \********************************************/
/*! exports provided: SeriesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SeriesComponent", function() { return SeriesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SeriesComponent = /** @class */ (function () {
    function SeriesComponent() {
    }
    SeriesComponent.prototype.ngOnInit = function () {
    };
    SeriesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-series',
            template: __webpack_require__(/*! ./series.component.html */ "./src/app/series/series.component.html"),
            styles: [__webpack_require__(/*! ./series.component.css */ "./src/app/series/series.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SeriesComponent);
    return SeriesComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\xampp\htdocs\Upgradehub\Modulo_Node\Up-Flix\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map