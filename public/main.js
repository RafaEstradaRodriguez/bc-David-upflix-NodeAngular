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
        /*https://api.themoviedb.org/3/discover/tv?api_key=8d1ff0fd31d021c4902d57908c87f3fc*/
        this.url_img_base = 'https://image.tmdb.org/t/p/w300';
        this.apikey = '8d1ff0fd31d021c4902d57908c87f3fc';
    }
    ApiMoviesService.prototype.getElemsMult = function (url) {
        var _this = this;
        var elemsMult = [];
        this.http.get(url)
            .subscribe(function (datos) {
            for (var _i = 0, _a = datos['results']; _i < _a.length; _i++) {
                var elem = _a[_i];
                if (elem.name !== undefined) {
                    elemsMult.push(new _models_ElemMultimedia__WEBPACK_IMPORTED_MODULE_2__["ElemMultimedia"](elem.id, elem.name, _this.url_img_base + elem.backdrop_path + '?api_key=' + _this.apikey, elem.overview, elem.first_air_date, elem.vote_average));
                }
                else {
                    elemsMult.push(new _models_ElemMultimedia__WEBPACK_IMPORTED_MODULE_2__["ElemMultimedia"](elem.id, elem.title, _this.url_img_base + elem.backdrop_path + '?api_key=' + _this.apikey, elem.overview, elem.release_date, elem.vote_average));
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
        * peticiones a la api de omdb.*/
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
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] },
    { path: 'peliculas', component: _peliculas_peliculas_component__WEBPACK_IMPORTED_MODULE_3__["PeliculasComponent"] },
    { path: 'series', component: _series_series_component__WEBPACK_IMPORTED_MODULE_4__["SeriesComponent"] },
    { path: '**', redirectTo: 'home', pathMatch: 'full' },
    { path: 'detail/:id', component: _detail_detail_component__WEBPACK_IMPORTED_MODULE_5__["DetailComponent"] }
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
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _search_form_search_form_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./search-form/search-form.component */ "./src/app/search-form/search-form.component.ts");
/* harmony import */ var _carrousel_carrousel_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./carrousel/carrousel.component */ "./src/app/carrousel/carrousel.component.ts");
/* harmony import */ var _peliculas_peliculas_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./peliculas/peliculas.component */ "./src/app/peliculas/peliculas.component.ts");
/* harmony import */ var _series_series_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./series/series.component */ "./src/app/series/series.component.ts");
/* harmony import */ var _detail_detail_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./detail/detail.component */ "./src/app/detail/detail.component.ts");
/* harmony import */ var _api_movies_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./api-movies.service */ "./src/app/api-movies.service.ts");
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
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_7__["FooterComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"],
                _search_form_search_form_component__WEBPACK_IMPORTED_MODULE_9__["SearchFormComponent"],
                _carrousel_carrousel_component__WEBPACK_IMPORTED_MODULE_10__["CarrouselComponent"],
                _peliculas_peliculas_component__WEBPACK_IMPORTED_MODULE_11__["PeliculasComponent"],
                _series_series_component__WEBPACK_IMPORTED_MODULE_12__["SeriesComponent"],
                _detail_detail_component__WEBPACK_IMPORTED_MODULE_13__["DetailComponent"]
            ],
            imports: [
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"]
            ],
            providers: [
                _api_movies_service__WEBPACK_IMPORTED_MODULE_14__["ApiMoviesService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
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

module.exports = "/* Escojo el div grande con 20 columnas, que son las que recibo de la api */\r\ndiv {\r\n    margin: 1rem 0 2rem 0;\r\n    display: grid;\r\n    grid-template-columns: repeat(20,-webkit-min-content);\r\n    grid-template-columns: repeat(20,min-content);\r\n    gap: 2px;\r\n    position: relative;\r\n    left: -185px;\r\n    z-index: 1;\r\n}\r\n/* Aquí trato el comportamiento con el hover */\r\nsection img{\r\n    transition-duration: .5s;\r\n    width: 230px;\r\n    height: 130px;\r\n}\r\n/*\r\nsection img:hover {\r\n    width: 500px;\r\n    height: 282px;\r\n    z-index: 5;\r\n    transform: translate(-135px,-76px);\r\n    !*transform: translate(0,-76px);*!\r\n    transition-duration: .4s;\r\n    !*transform: translate3d(0px,0px,0px);\r\n    transition-timing-function: cubic-bezier(0.5, 0, 0.1, 0);*!\r\n    transition-delay: 0.4s;\r\n}\r\nsection:hover ~ section {\r\n    transform: translateX(-135px);\r\n    transition-delay: 0.4s;\r\n    transition-duration: 0.4s;\r\n    !*transition-timing-function: cubic-bezier(0.1, 0, 0.5, 0);*!\r\n}\r\nsection:hover::before {\r\n    transform: translateX(-135px);\r\n}*/\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2Fycm91c2VsL2NhcnJvdXNlbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDRFQUE0RTtBQUM1RTtJQUNJLHNCQUFzQjtJQUN0QixjQUFjO0lBQ2Qsc0RBQThDO0lBQTlDLDhDQUE4QztJQUM5QyxTQUFTO0lBQ1QsbUJBQW1CO0lBQ25CLGFBQWE7SUFDYixXQUFXO0NBQ2Q7QUFDRCwrQ0FBK0M7QUFDL0M7SUFDSSx5QkFBeUI7SUFDekIsYUFBYTtJQUNiLGNBQWM7Q0FDakI7QUFDRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FvQkciLCJmaWxlIjoic3JjL2FwcC9jYXJyb3VzZWwvY2Fycm91c2VsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBFc2Nvam8gZWwgZGl2IGdyYW5kZSBjb24gMjAgY29sdW1uYXMsIHF1ZSBzb24gbGFzIHF1ZSByZWNpYm8gZGUgbGEgYXBpICovXHJcbmRpdiB7XHJcbiAgICBtYXJnaW46IDFyZW0gMCAycmVtIDA7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMjAsbWluLWNvbnRlbnQpO1xyXG4gICAgZ2FwOiAycHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBsZWZ0OiAtMTg1cHg7XHJcbiAgICB6LWluZGV4OiAxO1xyXG59XHJcbi8qIEFxdcOtIHRyYXRvIGVsIGNvbXBvcnRhbWllbnRvIGNvbiBlbCBob3ZlciAqL1xyXG5zZWN0aW9uIGltZ3tcclxuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IC41cztcclxuICAgIHdpZHRoOiAyMzBweDtcclxuICAgIGhlaWdodDogMTMwcHg7XHJcbn1cclxuLypcclxuc2VjdGlvbiBpbWc6aG92ZXIge1xyXG4gICAgd2lkdGg6IDUwMHB4O1xyXG4gICAgaGVpZ2h0OiAyODJweDtcclxuICAgIHotaW5kZXg6IDU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMTM1cHgsLTc2cHgpO1xyXG4gICAgISp0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLC03NnB4KTsqIVxyXG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogLjRzO1xyXG4gICAgISp0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDBweCwwcHgsMHB4KTtcclxuICAgIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC41LCAwLCAwLjEsIDApOyohXHJcbiAgICB0cmFuc2l0aW9uLWRlbGF5OiAwLjRzO1xyXG59XHJcbnNlY3Rpb246aG92ZXIgfiBzZWN0aW9uIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTM1cHgpO1xyXG4gICAgdHJhbnNpdGlvbi1kZWxheTogMC40cztcclxuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuNHM7XHJcbiAgICAhKnRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4xLCAwLCAwLjUsIDApOyohXHJcbn1cclxuc2VjdGlvbjpob3Zlcjo6YmVmb3JlIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTM1cHgpO1xyXG59Ki9cclxuIl19 */"

/***/ }),

/***/ "./src/app/carrousel/carrousel.component.html":
/*!****************************************************!*\
  !*** ./src/app/carrousel/carrousel.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"carrousel\">\n  <section *ngFor=\"let movie of elementosAMostrar\">\n    <img alt=\"{{movie.name}}\"\n         src=\"{{movie.img_url}}\"\n        >\n  </section>\n</div>\n"

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
    }
    CarrouselComponent.prototype.ngOnInit = function () {
        /*console.log(this.elementosAMostrar);*/
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

module.exports = "<header>\n    <nav class=\"UpFlix_nav\">\n        <div>\n            <a routerLink=\"home\" routerLinkActive=\"active\">\n                <img height=\"32px\" alt=\"UpFlix\" src=\"assets/logo_dark_bg.svg\">\n            </a>\n        </div>\n        <ul>\n            <li><a routerLink=\"home\" routerLinkActive=\"active\">Inicio</a></li>\n            <li><a routerLink=\"series\" routerLinkActive=\"active\">Series</a></li>\n            <li><a routerLink=\"peliculas\" routerLinkActive=\"active\">Pel&iacute;culas</a></li>\n            <li><a routerLink=\"home\" routerLinkActive=\"active\">A&ntilde;adido recientemente</a></li>\n            <li><a routerLink=\"home\" routerLinkActive=\"active\">Mi lista</a></li>\n        </ul>\n    </nav>\n    <app-search-form></app-search-form>\n</header>\n"

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

module.exports = "main {\r\n    margin: 3rem;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0NBQ2hCIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYWluIHtcclxuICAgIG1hcmdpbjogM3JlbTtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main>\n  <h2>Pel&iacute;culas populares en Upflix</h2>\n  <app-carrousel-netflix [elementosAMostrar]=\"popularMovies\"></app-carrousel-netflix>\n  <h2>Tendencias hoy</h2>\n  <app-carrousel-netflix [elementosAMostrar]=\"trendingToday\"></app-carrousel-netflix>\n  <h2>Películas japonesas</h2>\n  <app-carrousel-netflix [elementosAMostrar]=\"japMovies\"></app-carrousel-netflix>\n  <h2>Series populares en Upflix</h2>\n  <app-carrousel-netflix [elementosAMostrar]=\"popularSeries\"></app-carrousel-netflix>\n  <h2>Series japonesas</h2>\n  <app-carrousel-netflix [elementosAMostrar]=\"japSeries\"></app-carrousel-netflix>\n</main>\n"

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
        this.trendingToday = this.apiMoviesService.getElemsMult('/api/series');
        /*this.apiMoviesService.getElemsMult
        ('https://api.themoviedb.org/3/trending/all/day?api_key=8d1ff0fd31d021c4902d57908c87f3fc');*/
        /*console.log('trendingToday');
        console.log(this.trendingToday);*/
        this.popularMovies = this.apiMoviesService.getElemsMult('/api/movies/popularity');
        /*this.apiMoviesService.getElemsMult
        ('https://api.themoviedb.org/3/discover/movie?api_key=8d1ff0fd31d021c4902d57908c87f3fc');*/
        /*console.log('popularMovies');
        console.log(this.popularMovies);*/
        this.popularSeries = this.apiMoviesService.getElemsMult('/api/series/popularity');
        /*this.apiMoviesService.getElemsMult
        ('https://api.themoviedb.org/3/discover/tv?api_key=8d1ff0fd31d021c4902d57908c87f3fc');*/
        /*console.log('popularSeries');
        console.log(this.popularSeries);*/
        this.popularMoviesToday = this.apiMoviesService.getElemsMult('/api/movies');
        /*this.apiMoviesService.getElemsMult
        ('https://api.themoviedb.org/3/trending/movie/day?api_key=8d1ff0fd31d021c4902d57908c87f3fc');*/
        /*console.log('popularMoviesToday');
        console.log(this.popularMoviesToday);*/
        this.japMovies = this.apiMoviesService.getElemsMult('/api/movies/jap');
        /*this.apiMoviesService.getElemsMult
        ('https://api.themoviedb.org/3/discover/movie?api_key=8d1ff0fd31d021c4902d57908c87f3fc&with_original_language=ja');*/
        /*this.jap =
            this.apiMoviesService.getElemsMult
            ('https://api.themoviedb.org/3/discover/movie?api_key=8d1ff0fd31d021c4902d57908c87f3fc&with_original_language=ja');*/
        this.japSeries = this.apiMoviesService.getElemsMult('/api/series/jap');
        /*this.apiMoviesService.getElemsMult
        ('https://api.themoviedb.org/3/discover/tv?api_key=8d1ff0fd31d021c4902d57908c87f3fc&with_original_language=ja');*/
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
    function ElemMultimedia(id, name, img_url, bio, releaseDate, valoration) {
        this.id = id;
        this.name = name;
        this.img_url = img_url;
        this.bio = bio;
        this.releaseDate = releaseDate;
        this.valoration = valoration;
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

/***/ "./src/app/search-form/search-form.component.css":
/*!*******************************************************!*\
  !*** ./src/app/search-form/search-form.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlYXJjaC1mb3JtL3NlYXJjaC1mb3JtLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/search-form/search-form.component.html":
/*!********************************************************!*\
  !*** ./src/app/search-form/search-form.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  search-form works!\n</p>\n"

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
    function SearchFormComponent() {
    }
    SearchFormComponent.prototype.ngOnInit = function () {
    };
    SearchFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-search-form',
            template: __webpack_require__(/*! ./search-form.component.html */ "./src/app/search-form/search-form.component.html"),
            styles: [__webpack_require__(/*! ./search-form.component.css */ "./src/app/search-form/search-form.component.css")]
        }),
        __metadata("design:paramtypes", [])
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