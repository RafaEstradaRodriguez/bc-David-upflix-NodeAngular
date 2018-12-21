(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["styles"],{

/***/ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./src/styles.css":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src??embedded!./src/styles.css ***!
  \*****************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = [[module.i, "\n@import url('https://fonts.googleapis.com/css?family=Hind');\n/* You can add global styles to this file, and also import other style files */\n/*div {\r\n    margin: 1rem 0 2rem 0;\r\n    display: grid;\r\n    grid-template-columns: repeat(20,min-content);\r\n    gap: 2px;\r\n    position: relative;\r\n    left: -185px;\r\n    z-index: 1;\r\n}\r\n!* Aquí trato el comportamiento con el hover *!\r\nsection img{\r\n    transition-duration: .5s;\r\n    width: 230px;\r\n    height: 130px;\r\n}\r\nsection img:hover {\r\n    width: 500px;\r\n    height: 282px;\r\n    z-index: 5;\r\n    transform: translate(-135px,-76px);\r\n    !*transform: translate(0,-76px);*!\r\n    transition-duration: .4s;\r\n    !*transform: translate3d(0px,0px,0px);\r\n    transition-timing-function: cubic-bezier(0.5, 0, 0.1, 0);*!\r\n    transition-delay: 0.4s;\r\n}\r\nsection:hover ~ section {\r\n    transform: translateX(-135px);\r\n    transition-delay: 0.4s;\r\n    transition-duration: 0.4s;\r\n    !*transition-timing-function: cubic-bezier(0.1, 0, 0.5, 0);*!\r\n}\r\nsection:hover::before {\r\n    transform: translateX(-135px);\r\n}*/\n:root {\r\n\r\n    /* Tile Dimensions */\r\n    --carousel-tile-spacing: 10px;\r\n    --carousel-tile-width:   250px;\r\n    --carousel-tile-height:  calc(var(--carousel-tile-width) / (16 / 9));\r\n\r\n    /* Growth Factor */\r\n    --carousel-growth-factor: 1.5;\r\n\r\n    /* Fade to Opacity */\r\n    --carousel-fade-opacity:   0.25;\r\n    --carousel-normal-opacity: 1;\r\n\r\n    /* Automatic Offsets - DO NOT ALTER */\r\n    --carousel-offset-left:  calc(-1 * (var(--carousel-tile-width) * (var(--carousel-growth-factor) - 1) / 2));\r\n    --carousel-offset-right: calc(var(--carousel-tile-width) * (var(--carousel-growth-factor) - 1));\r\n\r\n    /* Transition Speeds */\r\n    --carousel-transition-1: 1s;\r\n    --carousel-transition-2: 0.5s;\r\n    --carousel-transition-3: 0.3s;\r\n\r\n}\n/* Carousel Container */\n.carousel {\r\n    margin: 0;\r\n    box-sizing: border-box;\r\n    width: 100%;\r\n    overflow-x: hidden;\r\n    overflow-y: hidden;\r\n    position: relative;\r\n}\n/* Carousel Row */\n.carousel-row {\r\n    white-space: nowrap;\r\n    margin-top: calc((var(--carousel-tile-height) * (var(--carousel-growth-factor) - 1)) / 2);\r\n    margin-bottom: calc((var(--carousel-tile-height) * (var(--carousel-growth-factor) - 1)) / 2);\r\n    margin-left: calc((var(--carousel-tile-width) * (var(--carousel-growth-factor) - 1)) / 2);\r\n    margin-right: calc((var(--carousel-tile-width) * (var(--carousel-growth-factor) - 1)) / 2);\r\n    transition: var(--carousel-transition-2);\r\n}\n/* Content Tile */\n.carousel-tile {\r\n    position: relative;\r\n    display: inline-block;\r\n    width: var(--carousel-tile-width);\r\n    height: var(--carousel-tile-height);\r\n    margin-right: var(--carousel-tile-spacing);\r\n    transition: var(--carousel-transition-2);\r\n    -webkit-transform-origin: center left;\r\n    transform-origin: center left;\r\n    cursor: hand;\r\n\r\n}\n/* Add Extra Margin to Last Carousel Tile */\n.carousel-tile:last-of-type {\r\n    margin-right: calc(var(--carousel-tile-width)/2);\r\n}\n/* Ensure All Elements Inside Tile are Block */\n.carousel-tile * {\r\n    display: block;\r\n}\n/* Carousel Row on Hover */\n.carousel-row:hover {\r\n    -webkit-transform: translate3d(var(--carousel-offset-left), 0, 0);\r\n    transform: translate3d(var(--carousel-offset-left), 0, 0);\r\n}\n/* Content Tile on Carousel Row Hover */\n.carousel-row:hover .carousel-tile {\r\n    opacity: var(--carousel-fade-opacity);\r\n}\n/* Content Tile on Hover on Carousel Row Hover */\n.carousel-row:hover .carousel-tile:hover {\r\n    -webkit-transform: scale(var(--carousel-growth-factor));\r\n    transform: scale(var(--carousel-growth-factor));\r\n    opacity: var(--carousel-normal-opacity);\r\n}\n/* Content Tile on Hover */\n.carousel-tile:hover ~ .carousel-tile {\r\n    -webkit-transform: translate3d(var(--carousel-offset-right), 0, 0);\r\n    transform: translate3d(var(--carousel-offset-right), 0, 0);\r\n}\niframe {\r\n    border:0;\r\n}\n.slider-left {\r\n    position: absolute;\r\n    top: 35px ;\r\n    height: 141px;\r\n    width: 10vw;\r\n    background-color: rgba(28,28,28,0.4);\r\n    color: rgb(182,182,182);\r\n    left: 0;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    font-size: 100px;\r\n    cursor: pointer;\r\n}\n.slider-right {\r\n    position: absolute;\r\n    top: 35px ;\r\n    height: 141px;\r\n    width: 10vw;\r\n    background-color: rgba(28,28,28,0.1);\r\n    color: rgba(182,182,182, 0.2);\r\n    left: 90%;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    font-size: 100px;\r\n    cursor: pointer;\r\n}\n.slider-right:hover {\r\n    background-color: rgba(28,28,28,0.6);\r\n    color: rgba(182,182,182, 0.6);\r\n}\n.slider-left:hover {\r\n    background-color: rgba(28,28,28,0.6);\r\n    color: rgba(182,182,182, 0.6);\r\n}\n* {\n    margin: 0;\n    padding: 0;\n}\nhtml {\n    box-sizing: border-box;\n}\nbody {\n    background-color: #141414;\n    color: rgb(182,182,182);\n    font-family: 'Hind', sans-serif;\n    font-size: small;\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9zdHlsZXMuY3NzIiwic3JjL2FwcC9jYXJyb3VzZWwvY2Fycm91c2VsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLDREQUE0RDtBQUQ1RCwrRUFBK0U7QUNBL0U7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FrQ0c7QUFDSDs7SUFFSSxxQkFBcUI7SUFDckIsOEJBQThCO0lBQzlCLCtCQUErQjtJQUMvQixxRUFBcUU7O0lBRXJFLG1CQUFtQjtJQUNuQiw4QkFBOEI7O0lBRTlCLHFCQUFxQjtJQUNyQixnQ0FBZ0M7SUFDaEMsNkJBQTZCOztJQUU3QixzQ0FBc0M7SUFDdEMsMkdBQTJHO0lBQzNHLGdHQUFnRzs7SUFFaEcsdUJBQXVCO0lBQ3ZCLDRCQUE0QjtJQUM1Qiw4QkFBOEI7SUFDOUIsOEJBQThCOztDQUVqQztBQUVELHdCQUF3QjtBQUN4QjtJQUNJLFVBQVU7SUFDVix1QkFBdUI7SUFDdkIsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIsbUJBQW1CO0NBQ3RCO0FBRUQsa0JBQWtCO0FBQ2xCO0lBQ0ksb0JBQW9CO0lBQ3BCLDBGQUEwRjtJQUMxRiw2RkFBNkY7SUFDN0YsMEZBQTBGO0lBQzFGLDJGQUEyRjtJQUMzRix5Q0FBeUM7Q0FDNUM7QUFFRCxrQkFBa0I7QUFDbEI7SUFDSSxtQkFBbUI7SUFDbkIsc0JBQXNCO0lBQ3RCLGtDQUFrQztJQUNsQyxvQ0FBb0M7SUFDcEMsMkNBQTJDO0lBQzNDLHlDQUF5QztJQUN6QyxzQ0FBc0M7SUFDdEMsOEJBQThCO0lBQzlCLGFBQWE7O0NBRWhCO0FBRUQsNENBQTRDO0FBQzVDO0lBQ0ksaURBQWlEO0NBQ3BEO0FBRUQsK0NBQStDO0FBQy9DO0lBQ0ksZUFBZTtDQUNsQjtBQUVELDJCQUEyQjtBQUMzQjtJQUNJLGtFQUFrRTtJQUNsRSwwREFBMEQ7Q0FDN0Q7QUFFRCx3Q0FBd0M7QUFDeEM7SUFDSSxzQ0FBc0M7Q0FDekM7QUFFRCxpREFBaUQ7QUFDakQ7SUFDSSx3REFBd0Q7SUFDeEQsZ0RBQWdEO0lBQ2hELHdDQUF3QztDQUMzQztBQUVELDJCQUEyQjtBQUMzQjtJQUNJLG1FQUFtRTtJQUNuRSwyREFBMkQ7Q0FDOUQ7QUFDRDtJQUNJLFNBQVM7Q0FDWjtBQUNEO0lBQ0ksbUJBQW1CO0lBQ25CLFdBQVc7SUFDWCxjQUFjO0lBQ2QsWUFBWTtJQUNaLHFDQUFxQztJQUNyQyx3QkFBd0I7SUFDeEIsUUFBUTtJQUNSLGNBQWM7SUFDZCxvQkFBb0I7SUFDcEIsd0JBQXdCO0lBQ3hCLGlCQUFpQjtJQUNqQixnQkFBZ0I7Q0FDbkI7QUFDRDtJQUNJLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsY0FBYztJQUNkLFlBQVk7SUFDWixxQ0FBcUM7SUFDckMsOEJBQThCO0lBQzlCLFVBQVU7SUFDVixjQUFjO0lBQ2Qsb0JBQW9CO0lBQ3BCLHdCQUF3QjtJQUN4QixpQkFBaUI7SUFDakIsZ0JBQWdCO0NBQ25CO0FBQ0Q7SUFDSSxxQ0FBcUM7SUFDckMsOEJBQThCO0NBQ2pDO0FBQ0Q7SUFDSSxxQ0FBcUM7SUFDckMsOEJBQThCO0NBQ2pDO0FEbEtEO0lBQ0ksVUFBVTtJQUNWLFdBQVc7Q0FDZDtBQUNEO0lBQ0ksdUJBQXVCO0NBQzFCO0FBQ0Q7SUFDSSwwQkFBMEI7SUFDMUIsd0JBQXdCO0lBQ3hCLGdDQUFnQztJQUNoQyxpQkFBaUI7Q0FDcEIiLCJmaWxlIjoic3JjL3N0eWxlcy5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBZb3UgY2FuIGFkZCBnbG9iYWwgc3R5bGVzIHRvIHRoaXMgZmlsZSwgYW5kIGFsc28gaW1wb3J0IG90aGVyIHN0eWxlIGZpbGVzICovXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PUhpbmQnKTtcbkBpbXBvcnQgdXJsKCcuL2FwcC9jYXJyb3VzZWwvY2Fycm91c2VsLmNvbXBvbmVudC5jc3MnKTtcbioge1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xufVxuaHRtbCB7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cbmJvZHkge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMxNDE0MTQ7XG4gICAgY29sb3I6IHJnYigxODIsMTgyLDE4Mik7XG4gICAgZm9udC1mYW1pbHk6ICdIaW5kJywgc2Fucy1zZXJpZjtcbiAgICBmb250LXNpemU6IHNtYWxsO1xufSIsIi8qZGl2IHtcclxuICAgIG1hcmdpbjogMXJlbSAwIDJyZW0gMDtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyMCxtaW4tY29udGVudCk7XHJcbiAgICBnYXA6IDJweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGxlZnQ6IC0xODVweDtcclxuICAgIHotaW5kZXg6IDE7XHJcbn1cclxuISogQXF1w60gdHJhdG8gZWwgY29tcG9ydGFtaWVudG8gY29uIGVsIGhvdmVyICohXHJcbnNlY3Rpb24gaW1ne1xyXG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogLjVzO1xyXG4gICAgd2lkdGg6IDIzMHB4O1xyXG4gICAgaGVpZ2h0OiAxMzBweDtcclxufVxyXG5zZWN0aW9uIGltZzpob3ZlciB7XHJcbiAgICB3aWR0aDogNTAwcHg7XHJcbiAgICBoZWlnaHQ6IDI4MnB4O1xyXG4gICAgei1pbmRleDogNTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC0xMzVweCwtNzZweCk7XHJcbiAgICAhKnRyYW5zZm9ybTogdHJhbnNsYXRlKDAsLTc2cHgpOyohXHJcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAuNHM7XHJcbiAgICAhKnRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMHB4LDBweCwwcHgpO1xyXG4gICAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjUsIDAsIDAuMSwgMCk7KiFcclxuICAgIHRyYW5zaXRpb24tZGVsYXk6IDAuNHM7XHJcbn1cclxuc2VjdGlvbjpob3ZlciB+IHNlY3Rpb24ge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMzVweCk7XHJcbiAgICB0cmFuc2l0aW9uLWRlbGF5OiAwLjRzO1xyXG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC40cztcclxuICAgICEqdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjEsIDAsIDAuNSwgMCk7KiFcclxufVxyXG5zZWN0aW9uOmhvdmVyOjpiZWZvcmUge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMzVweCk7XHJcbn0qL1xyXG46cm9vdCB7XHJcblxyXG4gICAgLyogVGlsZSBEaW1lbnNpb25zICovXHJcbiAgICAtLWNhcm91c2VsLXRpbGUtc3BhY2luZzogMTBweDtcclxuICAgIC0tY2Fyb3VzZWwtdGlsZS13aWR0aDogICAyNTBweDtcclxuICAgIC0tY2Fyb3VzZWwtdGlsZS1oZWlnaHQ6ICBjYWxjKHZhcigtLWNhcm91c2VsLXRpbGUtd2lkdGgpIC8gKDE2IC8gOSkpO1xyXG5cclxuICAgIC8qIEdyb3d0aCBGYWN0b3IgKi9cclxuICAgIC0tY2Fyb3VzZWwtZ3Jvd3RoLWZhY3RvcjogMS41O1xyXG5cclxuICAgIC8qIEZhZGUgdG8gT3BhY2l0eSAqL1xyXG4gICAgLS1jYXJvdXNlbC1mYWRlLW9wYWNpdHk6ICAgMC4yNTtcclxuICAgIC0tY2Fyb3VzZWwtbm9ybWFsLW9wYWNpdHk6IDE7XHJcblxyXG4gICAgLyogQXV0b21hdGljIE9mZnNldHMgLSBETyBOT1QgQUxURVIgKi9cclxuICAgIC0tY2Fyb3VzZWwtb2Zmc2V0LWxlZnQ6ICBjYWxjKC0xICogKHZhcigtLWNhcm91c2VsLXRpbGUtd2lkdGgpICogKHZhcigtLWNhcm91c2VsLWdyb3d0aC1mYWN0b3IpIC0gMSkgLyAyKSk7XHJcbiAgICAtLWNhcm91c2VsLW9mZnNldC1yaWdodDogY2FsYyh2YXIoLS1jYXJvdXNlbC10aWxlLXdpZHRoKSAqICh2YXIoLS1jYXJvdXNlbC1ncm93dGgtZmFjdG9yKSAtIDEpKTtcclxuXHJcbiAgICAvKiBUcmFuc2l0aW9uIFNwZWVkcyAqL1xyXG4gICAgLS1jYXJvdXNlbC10cmFuc2l0aW9uLTE6IDFzO1xyXG4gICAgLS1jYXJvdXNlbC10cmFuc2l0aW9uLTI6IDAuNXM7XHJcbiAgICAtLWNhcm91c2VsLXRyYW5zaXRpb24tMzogMC4zcztcclxuXHJcbn1cclxuXHJcbi8qIENhcm91c2VsIENvbnRhaW5lciAqL1xyXG4uY2Fyb3VzZWwge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xyXG4gICAgb3ZlcmZsb3cteTogaGlkZGVuO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4vKiBDYXJvdXNlbCBSb3cgKi9cclxuLmNhcm91c2VsLXJvdyB7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgbWFyZ2luLXRvcDogY2FsYygodmFyKC0tY2Fyb3VzZWwtdGlsZS1oZWlnaHQpICogKHZhcigtLWNhcm91c2VsLWdyb3d0aC1mYWN0b3IpIC0gMSkpIC8gMik7XHJcbiAgICBtYXJnaW4tYm90dG9tOiBjYWxjKCh2YXIoLS1jYXJvdXNlbC10aWxlLWhlaWdodCkgKiAodmFyKC0tY2Fyb3VzZWwtZ3Jvd3RoLWZhY3RvcikgLSAxKSkgLyAyKTtcclxuICAgIG1hcmdpbi1sZWZ0OiBjYWxjKCh2YXIoLS1jYXJvdXNlbC10aWxlLXdpZHRoKSAqICh2YXIoLS1jYXJvdXNlbC1ncm93dGgtZmFjdG9yKSAtIDEpKSAvIDIpO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBjYWxjKCh2YXIoLS1jYXJvdXNlbC10aWxlLXdpZHRoKSAqICh2YXIoLS1jYXJvdXNlbC1ncm93dGgtZmFjdG9yKSAtIDEpKSAvIDIpO1xyXG4gICAgdHJhbnNpdGlvbjogdmFyKC0tY2Fyb3VzZWwtdHJhbnNpdGlvbi0yKTtcclxufVxyXG5cclxuLyogQ29udGVudCBUaWxlICovXHJcbi5jYXJvdXNlbC10aWxlIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHdpZHRoOiB2YXIoLS1jYXJvdXNlbC10aWxlLXdpZHRoKTtcclxuICAgIGhlaWdodDogdmFyKC0tY2Fyb3VzZWwtdGlsZS1oZWlnaHQpO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiB2YXIoLS1jYXJvdXNlbC10aWxlLXNwYWNpbmcpO1xyXG4gICAgdHJhbnNpdGlvbjogdmFyKC0tY2Fyb3VzZWwtdHJhbnNpdGlvbi0yKTtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyIGxlZnQ7XHJcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXIgbGVmdDtcclxuICAgIGN1cnNvcjogaGFuZDtcclxuXHJcbn1cclxuXHJcbi8qIEFkZCBFeHRyYSBNYXJnaW4gdG8gTGFzdCBDYXJvdXNlbCBUaWxlICovXHJcbi5jYXJvdXNlbC10aWxlOmxhc3Qtb2YtdHlwZSB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGNhbGModmFyKC0tY2Fyb3VzZWwtdGlsZS13aWR0aCkvMik7XHJcbn1cclxuXHJcbi8qIEVuc3VyZSBBbGwgRWxlbWVudHMgSW5zaWRlIFRpbGUgYXJlIEJsb2NrICovXHJcbi5jYXJvdXNlbC10aWxlICoge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbi8qIENhcm91c2VsIFJvdyBvbiBIb3ZlciAqL1xyXG4uY2Fyb3VzZWwtcm93OmhvdmVyIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCh2YXIoLS1jYXJvdXNlbC1vZmZzZXQtbGVmdCksIDAsIDApO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCh2YXIoLS1jYXJvdXNlbC1vZmZzZXQtbGVmdCksIDAsIDApO1xyXG59XHJcblxyXG4vKiBDb250ZW50IFRpbGUgb24gQ2Fyb3VzZWwgUm93IEhvdmVyICovXHJcbi5jYXJvdXNlbC1yb3c6aG92ZXIgLmNhcm91c2VsLXRpbGUge1xyXG4gICAgb3BhY2l0eTogdmFyKC0tY2Fyb3VzZWwtZmFkZS1vcGFjaXR5KTtcclxufVxyXG5cclxuLyogQ29udGVudCBUaWxlIG9uIEhvdmVyIG9uIENhcm91c2VsIFJvdyBIb3ZlciAqL1xyXG4uY2Fyb3VzZWwtcm93OmhvdmVyIC5jYXJvdXNlbC10aWxlOmhvdmVyIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSh2YXIoLS1jYXJvdXNlbC1ncm93dGgtZmFjdG9yKSk7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKHZhcigtLWNhcm91c2VsLWdyb3d0aC1mYWN0b3IpKTtcclxuICAgIG9wYWNpdHk6IHZhcigtLWNhcm91c2VsLW5vcm1hbC1vcGFjaXR5KTtcclxufVxyXG5cclxuLyogQ29udGVudCBUaWxlIG9uIEhvdmVyICovXHJcbi5jYXJvdXNlbC10aWxlOmhvdmVyIH4gLmNhcm91c2VsLXRpbGUge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKHZhcigtLWNhcm91c2VsLW9mZnNldC1yaWdodCksIDAsIDApO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCh2YXIoLS1jYXJvdXNlbC1vZmZzZXQtcmlnaHQpLCAwLCAwKTtcclxufVxyXG5pZnJhbWUge1xyXG4gICAgYm9yZGVyOjA7XHJcbn1cclxuLnNsaWRlci1sZWZ0IHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMzVweCA7XHJcbiAgICBoZWlnaHQ6IDE0MXB4O1xyXG4gICAgd2lkdGg6IDEwdnc7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI4LDI4LDI4LDAuNCk7XHJcbiAgICBjb2xvcjogcmdiKDE4MiwxODIsMTgyKTtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAxMDBweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4uc2xpZGVyLXJpZ2h0IHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMzVweCA7XHJcbiAgICBoZWlnaHQ6IDE0MXB4O1xyXG4gICAgd2lkdGg6IDEwdnc7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI4LDI4LDI4LDAuMSk7XHJcbiAgICBjb2xvcjogcmdiYSgxODIsMTgyLDE4MiwgMC4yKTtcclxuICAgIGxlZnQ6IDkwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDEwMHB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbi5zbGlkZXItcmlnaHQ6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyOCwyOCwyOCwwLjYpO1xyXG4gICAgY29sb3I6IHJnYmEoMTgyLDE4MiwxODIsIDAuNik7XHJcbn1cclxuLnNsaWRlci1sZWZ0OmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjgsMjgsMjgsMC42KTtcclxuICAgIGNvbG9yOiByZ2JhKDE4MiwxODIsMTgyLCAwLjYpO1xyXG59Il19 */", '', '']]

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!../node_modules/postcss-loader/src??embedded!./styles.css */ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./src/styles.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ 2:
/*!******************************!*\
  !*** multi ./src/styles.css ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\xampp\htdocs\Upgradehub\Modulo_Node\Up-Flix\src\styles.css */"./src/styles.css");


/***/ })

},[[2,"runtime"]]]);
//# sourceMappingURL=styles.js.map