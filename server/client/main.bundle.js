webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div style=\"height:100%; margin:0;\">\r\n<router-outlet></router-outlet>\r\n</div>\r\n\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__sdk_services_custom_User__ = __webpack_require__("../../../../../src/sdk/services/custom/User.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sdk_services_core_error_service__ = __webpack_require__("../../../../../src/sdk/services/core/error.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sdk_services_custom_Timeline__ = __webpack_require__("../../../../../src/sdk/services/custom/Timeline.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__sdk_services_custom_Shift__ = __webpack_require__("../../../../../src/sdk/services/custom/Shift.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__sdk_services_custom_Customer__ = __webpack_require__("../../../../../src/sdk/services/custom/Customer.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__sdk_services_core_search_params__ = __webpack_require__("../../../../../src/sdk/services/core/search.params.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__sdk_storage_storage_swaps__ = __webpack_require__("../../../../../src/sdk/storage/storage.swaps.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__sdk_services_core_auth_service__ = __webpack_require__("../../../../../src/sdk/services/core/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__sdk_sockets_socket_driver__ = __webpack_require__("../../../../../src/sdk/sockets/socket.driver.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__sdk_sockets_socket_connections__ = __webpack_require__("../../../../../src/sdk/sockets/socket.connections.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__board_board_component__ = __webpack_require__("../../../../../src/app/board/board.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__service_main_service__ = __webpack_require__("../../../../../src/app/service/main.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__sdk_services_custom_Line__ = __webpack_require__("../../../../../src/sdk/services/custom/Line.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__sdk_index__ = __webpack_require__("../../../../../src/sdk/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






















/*const appRoutes: Routes = [
  { path: 'board', component: BoardComponent },
  { path: 'home', component: HomeComponent },
  { path: '', component: HomeComponent }
];*/
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_11__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_16__app_component__["a" /* AppComponent */], __WEBPACK_IMPORTED_MODULE_17__board_board_component__["a" /* BoardComponent */], __WEBPACK_IMPORTED_MODULE_18__home_home_component__["a" /* HomeComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_10__angular_platform_browser__["a" /* BrowserModule */], __WEBPACK_IMPORTED_MODULE_13__angular_common_http__["b" /* HttpClientModule */], __WEBPACK_IMPORTED_MODULE_12__angular_router__["b" /* RouterModule */].forRoot([
                    { path: 'board', component: __WEBPACK_IMPORTED_MODULE_17__board_board_component__["a" /* BoardComponent */] },
                    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_18__home_home_component__["a" /* HomeComponent */] },
                    { path: '', component: __WEBPACK_IMPORTED_MODULE_18__home_home_component__["a" /* HomeComponent */] }
                ]), __WEBPACK_IMPORTED_MODULE_14__angular_forms__["a" /* FormsModule */], __WEBPACK_IMPORTED_MODULE_15__angular_http__["c" /* HttpModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_19__service_main_service__["a" /* MainService */], __WEBPACK_IMPORTED_MODULE_9__sdk_sockets_socket_connections__["a" /* SocketConnection */], __WEBPACK_IMPORTED_MODULE_8__sdk_sockets_socket_driver__["a" /* SocketDriver */], __WEBPACK_IMPORTED_MODULE_21__sdk_index__["c" /* SDKModels */], __WEBPACK_IMPORTED_MODULE_7__sdk_services_core_auth_service__["a" /* LoopBackAuth */], __WEBPACK_IMPORTED_MODULE_6__sdk_storage_storage_swaps__["a" /* InternalStorage */], __WEBPACK_IMPORTED_MODULE_5__sdk_services_core_search_params__["a" /* JSONSearchParams */], __WEBPACK_IMPORTED_MODULE_1__sdk_services_core_error_service__["a" /* ErrorHandler */],
                __WEBPACK_IMPORTED_MODULE_20__sdk_services_custom_Line__["a" /* LineApi */], __WEBPACK_IMPORTED_MODULE_4__sdk_services_custom_Customer__["a" /* CustomerApi */], __WEBPACK_IMPORTED_MODULE_3__sdk_services_custom_Shift__["a" /* ShiftApi */], __WEBPACK_IMPORTED_MODULE_2__sdk_services_custom_Timeline__["a" /* TimelineApi */], __WEBPACK_IMPORTED_MODULE_0__sdk_services_custom_User__["a" /* UserApi */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_16__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/board/board.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "table{\r\n    table-layout: fixed;\r\n}\r\n\r\ntd{\r\n    word-wrap:break-word\r\n}\r\n\r\n.background{\r\n    width: 100%;\r\n    height: 100%;\r\n    background-color: rgb(0, 102, 204)  \r\n}\r\n\r\n.main,.head{\r\n    background-color: rgb(51, 153, 255);\r\n    height: 10%;\r\n}\r\n\r\n.week{\r\n    width: 15%;   \r\n}\r\n\r\n.date{\r\n    width: 20%;\r\n}\r\n\r\n.title{\r\n    width: 65%;\r\n}\r\n\r\n.head{\r\n    height: 8%;\r\n}\r\n\r\n.column1{\r\n    width: 15%;\r\n}\r\n\r\n.column2-6{\r\n    width: 10%;\r\n}\r\n\r\n\r\n.column7{\r\n    width: 15%;\r\n}\r\n\r\n.column8{\r\n    width: 20%;\r\n}\r\n\r\n.text-box{\r\n    background-color: rgb(255, 255, 255);\r\n    height: 8.2%;\r\n}\r\n\r\n.text-box-rowspan{\r\n    background-color: rgb(255, 255, 255);\r\n    color: rgb(0, 0, 0);\r\n    height: 16.4%;\r\n    font-size: 4vw;\r\n    font-family: Arial, Helvetica, sans-serif;\r\n    text-align: center;\r\n}\r\n\r\n.time{\r\n    width: 35%;\r\n}\r\n\r\n.footer{\r\n    height: 14%;\r\n}\r\n\r\n.text-head,.text-sub-head{\r\n    font-size: 3vw;\r\n    /* line-height: 1vw; */\r\n    /* width: 100%; */\r\n    /* height: 100%; */\r\n    font-family: Arial, Helvetica, sans-serif;\r\n    text-align: center;\r\n    color: white;\r\n    /* margin: 0; */\r\n}\r\n\r\n.text-sub-head{\r\n    font-size: 2vw;\r\n    padding: 3px;\r\n}\r\n\r\n.text-clock{\r\n    font-size: 7vw;\r\n    /* width: 100%; */\r\n    /* height: 100%; */\r\n    font-family: Arial, Helvetica, sans-serif;\r\n    text-align: center;\r\n    color: rgb(0, 102, 204) \r\n    /* line-height: 8vw; */\r\n    /* margin: 0; */\r\n}\r\n\r\n.text-main{\r\n    font-size: 5vw;\r\n    /* width: 100%; */\r\n    /* height: 100%; */\r\n    font-family: Arial, Helvetica, sans-serif;\r\n    text-align: center;\r\n    color: rgb(0, 0, 0);\r\n    /* line-height: 6vw; */\r\n    /* margin: 0; */\r\n}\r\n\r\n.text-fpy{\r\n    font-size: 4vw;\r\n    font-family: Arial, Helvetica, sans-serif;\r\n    text-align: center;\r\n    color: rgb(0, 0, 0);\r\n}\r\n\r\n.text-small{\r\n    font-size: 2vw;\r\n    font-family: Arial, Helvetica, sans-serif;\r\n    text-align: center;\r\n    color: rgb(0, 0, 0);\r\n}\r\n\r\n\r\n\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/board/board.component.html":
/***/ (function(module, exports) {

module.exports = "<table class=\"background\">\r\n        <tr>\r\n            <th class=\"week main text-head\">WK {{dateTime | date :'w'}}</th>\r\n            <th class=\"title main text-head\" colspan=\"6\">Production data</th>\r\n            <th class=\"date main text-head\">{{dateTime | date :'dd.MM.yyyy'}}</th>\r\n        </tr>\r\n        <tr>\r\n                <td class=\"head column1 text-sub-head\">Time/Model</td>\r\n                <td class=\"head column2-6 text-sub-head\">Target</td>\r\n                <td class=\"head column2-6 text-sub-head\">Plan</td>\r\n                <td class=\"head column2-6 text-sub-head\">Produced/Productivity</td>\r\n                <td class=\"head column2-6 text-sub-head\">Deviation of target</td>\r\n                <td class=\"head column2-6 text-sub-head\">Deviation of plan</td>\r\n                <td class=\"head column7 text-sub-head\">FPY, %</td>\r\n                <td class=\"head column8 text-sub-head\">Downtime description</td>\r\n        </tr>\r\n        <tr>\r\n                <td class=\"column1 text-small text-box\" style=\"font-size:2vw;\">{{line1time}}</td>\r\n                <td class=\"column2-6 text-box-rowspan\" rowspan=\"2\">{{line1target}}</td>\r\n                <td class=\"column2-6 text-box-rowspan\" rowspan=\"2\">{{line1plan}}</td>\r\n                <td id=\"produced1\" class=\"column2-6 text-small text-box\" style=\"font-size:3.9vw;\">{{line1produced}}</td>\r\n                <td id=\"devoftarget1\" class=\"column2-6 text-box-rowspan\" rowspan=\"2\"></td>\r\n                <td id=\"devofplan1\" class=\"column2-6 text-box-rowspan\" rowspan=\"2\"></td>\r\n                <td class=\"column7 text-box-rowspan\" rowspan=\"2\">{{line1fpy}}</td>\r\n                <td class=\"column8 text-small text-box-rowspan\" rowspan=\"2\">{{line1description}}</td>\r\n        </tr>\r\n        <tr>\r\n                <td class=\"column1 text-small text-box\" style=\"font-size:1.8vw;\">{{line1model}}</td>\r\n                <td id=\"productivity1\" class=\"column2-6 text-small text-box\" style=\"font-size:3.8vw; color:white;\"></td>\r\n        </tr>\r\n        <tr>\r\n                <td class=\"column1 text-small text-box\" style=\"font-size:2vw;\">{{line2time}}</td>\r\n                <td class=\"column2-6 text-box-rowspan\" rowspan=\"2\">{{line2target}}</td>\r\n                <td class=\"column2-6 text-box-rowspan\" rowspan=\"2\">{{line2plan}}</td>\r\n                <td class=\"column2-6 text-small text-box\" style=\"font-size:3.9vw;\">{{line2produced}}</td>\r\n                <td id=\"devoftarget2\" class=\"column2-6 text-box-rowspan\" rowspan=\"2\"></td>\r\n                <td id=\"devofplan2\" class=\"column2-6 text-box-rowspan\" rowspan=\"2\"></td>\r\n                <td class=\"column7 text-box-rowspan\" rowspan=\"2\">{{line2fpy}}</td>\r\n                <td class=\"column8 text-small text-box-rowspan\" rowspan=\"2\">{{line2description}}</td>\r\n        </tr>\r\n        <tr>\r\n                <td class=\"column1 text-small text-box\" style=\"font-size:1.8vw;\">{{line2model}}</td>\r\n                <td id=\"productivity2\" class=\"column2-6 text-small text-box\" style=\"font-size:3.8vw; color:white;\"></td>\r\n        </tr>\r\n        <tr>\r\n                <td class=\"column1 text-small text-box\" style=\"font-size:2vw;\">{{line3time}}</td>\r\n                <td class=\"column2-6 text-box-rowspan\" rowspan=\"2\">{{line3target}}</td>\r\n                <td class=\"column2-6 text-box-rowspan\" rowspan=\"2\">{{line3plan}}</td>\r\n                <td class=\"column2-6 text-small text-box\" style=\"font-size:3.9vw;\">{{line3produced}}</td>\r\n                <td id=\"devoftarget3\" class=\"column2-6 text-box-rowspan\" rowspan=\"2\"></td>\r\n                <td id=\"devofplan3\" class=\"column2-6 text-box-rowspan\" rowspan=\"2\"></td>\r\n                <td class=\"column7 text-box-rowspan\" rowspan=\"2\">{{line3fpy}}</td>\r\n                <td class=\"column8 text-small text-box-rowspan\" rowspan=\"2\">{{line3description}}</td>\r\n        </tr>\r\n        <tr>\r\n                <td class=\"column1 text-small text-box\" style=\"font-size:1.8vw;\">{{line3model}}</td>\r\n                <td id=\"productivity3\" class=\"column2-6 text-small text-box\" style=\"font-size:3.8vw; color:white;\"></td>\r\n        </tr>\r\n        <tr>\r\n                <td class=\"column1 text-small text-box\" style=\"font-size:2vw;\">{{line4time}}</td>\r\n                <td class=\"column2-6 text-box-rowspan\" rowspan=\"2\">{{line4target}}</td>\r\n                <td class=\"column2-6 text-box-rowspan\" rowspan=\"2\">{{line4plan}}</td>\r\n                <td class=\"column2-6 text-small text-box\" style=\"font-size:3.9vw;\">{{line4produced}}</td>\r\n                <td id=\"devoftarget4\" class=\"column2-6 text-box-rowspan\" rowspan=\"2\"></td>\r\n                <td id=\"devofplan4\" class=\"column2-6 text-box-rowspan\" rowspan=\"2\"></td>\r\n                <td class=\"column7 text-box-rowspan\" rowspan=\"2\">{{line4fpy}}</td>\r\n                <td class=\"column8 text-small text-box-rowspan\" rowspan=\"2\">{{line4description}}</td>\r\n        </tr>\r\n        <tr>\r\n                <td class=\"column1 text-small text-box\" style=\"font-size:1.8vw;\">{{line4model}}</td>\r\n                <td id=\"productivity4\" class=\"column2-6 text-small text-box\" style=\"font-size:3.8vw; color:white;\"></td>\r\n        </tr>\r\n        <tr>\r\n                <td class=\"column1 text-sub-head text-box footer text-clock\" colspan=\"3\">{{dateTime | date :'HH:mm:ss'}}</td>\r\n                <td class=\"column2-6 text-sub-head text-box footer text-main\">50</td>\r\n                <td class=\"column2-6 text-sub-head text-box footer text-main\">220</td>\r\n                <td class=\"column2-6 text-sub-head text-box footer text-main\">120</td>\r\n                <td class=\"column7 text-sub-head text-box footer text-fpy\">99.50</td>\r\n                <td class=\"column8 text-sub-head text-box footer text-small\"></td>\r\n        </tr>\r\n\r\n\r\n\r\n</table>\r\n\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/board/board.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BoardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_main_service__ = __webpack_require__("../../../../../src/app/service/main.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__sdk__ = __webpack_require__("../../../../../src/sdk/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// tslint:disable-next-line:import-blacklist



var BoardComponent = /** @class */ (function () {
    function BoardComponent(route, mainService, lineApi, customerApi, shiftApi) {
        var _this = this;
        this.route = route;
        this.mainService = mainService;
        this.lineApi = lineApi;
        this.customerApi = customerApi;
        this.shiftApi = shiftApi;
        this.timelineFromTime = new Date();
        this.timelineToTime = new Date();
        this.dateTime = new Date();
        this.index = 1;
        this.line1plan = 0;
        this.line1target = 0;
        this.line1produced = 0;
        this.line2plan = 0;
        this.line2target = 0;
        this.line2produced = 0;
        this.line3plan = 0;
        this.line3target = 0;
        this.line3produced = 0;
        this.line4plan = 0;
        this.line4target = 0;
        this.line4produced = 0;
        this.querySubscription = this.route.queryParams.subscribe(function (queryParam) {
            _this.line = queryParam['line'];
        });
        var timer = __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].timer(1000, 1000);
        timer.subscribe(function (x) {
            _this.dateTime = new Date();
        });
        lineApi.findOne({ where: { name: this.line } }, function (err, lines) { }).subscribe(function (line) {
            lineApi.getShifts(line.id, { where: { isEnable: true } }, function (err, shifts) { }).subscribe(function (shifts) {
                shifts.forEach(function (shift) {
                    shiftApi.getTimelines(shift.id, undefined, function (err, timelines) { }).subscribe(function (timelines) {
                        var i = 1;
                        // tslint:disable-next-line:max-line-length
                        timelines.sort(function (a, b) { return Date.parse(new Date().toDateString() + ' ' + a.from) - Date.parse(new Date().toDateString() + ' ' + b.from); })
                            .forEach(function (timeline) {
                            if (i === 1) {
                                _this.timelineFromTime.setTime(Date.parse(new Date().toDateString() + ' ' + timeline.from));
                            }
                            else {
                                _this.timelineToTime.setTime(Date.parse(new Date().toDateString() + ' ' + timeline.to));
                            }
                            i++;
                        });
                        // tslint:disable-next-line:max-line-length
                        if (_this.dateTime.getTime() >= _this.timelineFromTime.getTime() && _this.dateTime.getTime() <= _this.timelineToTime.getTime()) {
                            console.log('Current shift found ' + shift.name);
                            _this.currentShiftId = shift.id;
                            _this.fillBoard();
                        }
                    });
                });
            });
        });
    }
    BoardComponent.prototype.fillBoard = function () {
        var _this = this;
        if (this.currentShiftId !== undefined) {
            this.shiftApi.getTimelines(this.currentShiftId, undefined, function (err, timelines) { }).subscribe(function (timelines) {
                // tslint:disable-next-line:max-line-length
                timelines.sort(function (a, b) { return Date.parse(new Date().toDateString() + ' ' + a.from) - Date.parse(new Date().toDateString() + ' ' + b.from); })
                    .forEach(function (t) {
                    switch (_this.index) {
                        case 1: {
                            _this.line1time = t.from + ' - ' + t.to;
                            _this.line1model = t.model;
                            _this.line1plan = t.plan;
                            _this.line1target = t.target;
                            _this.line1produced = t.produced;
                            _this.line1fpy = t.fpy;
                            if (t.produced / t.target * 100 > 90) {
                                document.getElementById('productivity1').style.backgroundColor = 'green';
                            }
                            else {
                                document.getElementById('productivity1').style.backgroundColor = 'red';
                            }
                            if (t.produced / t.target * 100 > 99.99) {
                                document.getElementById('productivity1').innerText = (t.produced / t.target * 100).toFixed(1);
                            }
                            else {
                                document.getElementById('productivity1').innerText = (t.produced / t.target * 100).toFixed(2);
                            }
                            document.getElementById('devoftarget1').innerText = String(t.produced - t.target);
                            if (t.produced - t.target > 0) {
                                document.getElementById('devoftarget1').style.color = 'green';
                            }
                            else {
                                document.getElementById('devoftarget1').style.color = 'red';
                            }
                            document.getElementById('devofplan1').innerText = String(t.produced - t.plan);
                            if (t.produced - t.plan > 0) {
                                document.getElementById('devofplan1').style.color = 'green';
                            }
                            else {
                                document.getElementById('devofplan1').style.color = 'red';
                            }
                            _this.index++;
                            break;
                        }
                        case 2: {
                            _this.line2time = t.from + ' - ' + t.to;
                            _this.line2model = t.model;
                            _this.line2plan = t.plan;
                            _this.line2target = t.target;
                            _this.line2produced = t.produced;
                            _this.line2fpy = t.fpy;
                            _this.index++;
                            if (t.produced / t.target * 100 > 90) {
                                document.getElementById('productivity2').style.backgroundColor = 'green';
                            }
                            else {
                                document.getElementById('productivity2').style.backgroundColor = 'red';
                            }
                            if (t.produced / t.target * 100 > 99.99) {
                                document.getElementById('productivity2').innerText = (t.produced / t.target * 100).toFixed(1);
                            }
                            else {
                                document.getElementById('productivity2').innerText = (t.produced / t.target * 100).toFixed(2);
                            }
                            document.getElementById('devoftarget2').innerText = String(t.produced - t.target);
                            if (t.produced - t.target > 0) {
                                document.getElementById('devoftarget2').style.color = 'green';
                            }
                            else {
                                document.getElementById('devoftarget2').style.color = 'red';
                            }
                            document.getElementById('devofplan2').innerText = String(t.produced - t.plan);
                            if (t.produced - t.plan > 0) {
                                document.getElementById('devofplan2').style.color = 'green';
                            }
                            else {
                                document.getElementById('devofplan2').style.color = 'red';
                            }
                            break;
                        }
                        case 3: {
                            _this.line3time = t.from + ' - ' + t.to;
                            _this.line3model = t.model;
                            _this.line3plan = t.plan;
                            _this.line3target = t.target;
                            _this.line3produced = t.produced;
                            _this.line3fpy = t.fpy;
                            _this.index++;
                            if (t.produced / t.target * 100 > 90) {
                                document.getElementById('productivity3').style.backgroundColor = 'green';
                            }
                            else {
                                document.getElementById('productivity3').style.backgroundColor = 'red';
                            }
                            if (t.produced / t.target * 100 > 99.99) {
                                document.getElementById('productivity3').innerText = (t.produced / t.target * 100).toFixed(1);
                            }
                            else {
                                document.getElementById('productivity3').innerText = (t.produced / t.target * 100).toFixed(2);
                            }
                            document.getElementById('devoftarget3').innerText = String(t.produced - t.target);
                            if (t.produced - t.target > 0) {
                                document.getElementById('devoftarget3').style.color = 'green';
                            }
                            else {
                                document.getElementById('devoftarget3').style.color = 'red';
                            }
                            document.getElementById('devofplan3').innerText = String(t.produced - t.plan);
                            if (t.produced - t.plan > 0) {
                                document.getElementById('devofplan3').style.color = 'green';
                            }
                            else {
                                document.getElementById('devofplan3').style.color = 'red';
                            }
                            break;
                        }
                        case 4: {
                            _this.line4time = t.from + ' - ' + t.to;
                            _this.line4model = t.model;
                            _this.line4plan = t.plan;
                            _this.line4target = t.target;
                            _this.line4produced = t.produced;
                            _this.line4fpy = t.fpy;
                            _this.index++;
                            if (t.produced / t.target * 100 > 90) {
                                document.getElementById('productivity4').style.backgroundColor = 'green';
                            }
                            else {
                                document.getElementById('productivity4').style.backgroundColor = 'red';
                            }
                            if (t.produced / t.target * 100 > 99.99) {
                                document.getElementById('productivity4').innerText = (t.produced / t.target * 100).toFixed(1);
                            }
                            else {
                                document.getElementById('productivity4').innerText = (t.produced / t.target * 100).toFixed(2);
                            }
                            document.getElementById('devoftarget4').innerText = String(t.produced - t.target);
                            if (t.produced - t.target > 0) {
                                document.getElementById('devoftarget4').style.color = 'green';
                            }
                            else {
                                document.getElementById('devoftarget4').style.color = 'red';
                            }
                            document.getElementById('devofplan4').innerText = String(t.produced - t.plan);
                            if (t.produced - t.plan > 0) {
                                document.getElementById('devofplan4').style.color = 'green';
                            }
                            else {
                                document.getElementById('devofplan4').style.color = 'red';
                            }
                            break;
                        }
                    }
                });
            });
        }
    };
    BoardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-board',
            template: __webpack_require__("../../../../../src/app/board/board.component.html"),
            styles: [__webpack_require__("../../../../../src/app/board/board.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_1__service_main_service__["a" /* MainService */],
            __WEBPACK_IMPORTED_MODULE_4__sdk__["b" /* LineApi */],
            __WEBPACK_IMPORTED_MODULE_4__sdk__["a" /* CustomerApi */],
            __WEBPACK_IMPORTED_MODULE_4__sdk__["d" /* ShiftApi */]])
    ], BoardComponent);
    return BoardComponent;
}());



/***/ }),

/***/ "../../../../../src/app/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".home-layout{\r\n    height: 100%;\r\n    width: 100%;\r\n}\r\n\r\n.header{\r\n    width: 100%;\r\n    height: 50px;\r\n    background-color: rgb(0, 102, 204);\r\n    line-height: 50px;\r\n}\r\n\r\n.title{\r\n    color: white;\r\n    font-size: 32px;\r\n    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;\r\n    margin: 10px;\r\n}\r\n\r\nselect.soflow{\r\n    -webkit-appearance: button;\r\n    -webkit-border-radius: 2px;\r\n    -webkit-box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1);\r\n    -webkit-padding-end: 20px;\r\n    -webkit-padding-start: 2px;\r\n    -webkit-user-select: none;\r\n    background-position: 97% center;\r\n    background-repeat: no-repeat;\r\n    border: 1px solid #AAA;\r\n    color: rgb(43, 43, 43);\r\n    font-size: inherit;\r\n    overflow: hidden;\r\n    padding: 5px 10px;\r\n    text-overflow: ellipsis;\r\n    white-space: nowrap;\r\n    width: 200px;\r\n }\r\n\r\n #grid-controls{\r\n   display: -ms-grid;\r\n   display: grid;\r\n   -ms-grid-columns: 250px 250px 250px ;\r\n       grid-template-columns: 250px 250px 250px ; \r\n   -ms-grid-rows: 50px 50px; \r\n       grid-template-rows: 50px 50px; \r\n   font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;\r\n }\r\n\r\n #grid-editor{\r\n    display: -ms-grid;\r\n    display: grid;\r\n    -ms-grid-columns: 90px 90px 300px 100px 100px 100px 100px 300px ;\r\n        grid-template-columns: 90px 90px 300px 100px 100px 100px 100px 300px ; \r\n    -ms-grid-rows: 20px 45px 45px 45px 45px; \r\n        grid-template-rows: 20px 45px 45px 45px 45px; \r\n    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;\r\n  }\r\n\r\n .grid-item {\r\n    padding: .2em;\r\n  } \r\n\r\n  p {\r\nmargin-left: 5px;\r\nmargin-top: 0px;\r\nmargin-bottom: 1px;\r\ncolor: rgb(92, 92, 92);\r\n  }\r\n\r\n  input {\r\n      width: 100%;\r\n    font-size: 32px;\r\n    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;\r\n  }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"home-layout\">\n  <header class=\"header\">\n    <div class=\"header-row\">\n      <span class=\"title\">White Board Manager</span>\n    </div>\n  </header>\n  <main class=\"content\">\n    <div id=\"grid-controls\">\n      <div class=\"grid-item\">\n        <p>Customer:</p>\n        <select id=\"customer-select\" class=\"soflow\" (change)=\"onCustomerSelect($event.target.value)\">\n          <option value=\"\" selected disabled hidden></option>\n          <option *ngFor=\"let customer of Customers\" [value]=\"customer.id\">{{customer.name}}</option>\n        </select>\n      </div>\n      <div class=\"grid-item\">\n        <p>Line:</p>\n        <select id=\"line-select\" [(ngModel)]=\"lineSelector\" class=\"soflow\" (change)=\"onLineSelect($event.target.value)\">\n          <option value=\"\" selected disabled hidden></option>\n          <option *ngFor=\"let line of Lines\" [value]=\"line.id\">{{line.name}}</option>\n        </select>\n      </div>\n      <div class=\"grid-item\">\n        <p>Line:</p>\n        <select id=\"shift-select\" [(ngModel)]=\"shiftSelector\" class=\"soflow\" (change)=\"onShiftSelect($event.target.value)\">\n          <option value=\"\" selected disabled hidden></option>\n          <option *ngFor=\"let shift of Shifts\" [value]=\"shift.id\">{{shift.name}}</option>\n        </select>\n      </div>\n    </div>\n    <div id=\"grid-editor\">\n\n      <!-- header -->\n      <div class=\"grid-item\">\n        <p>From time</p>\n      </div>\n      <div class=\"grid-item\">\n        <p>To time</p>\n      </div>\n      <div class=\"grid-item\">\n        <p>Model</p>\n      </div>\n      <div class=\"grid-item\">\n        <p>Plan</p>\n      </div>\n      <div class=\"grid-item\">\n        <p>Target</p>\n      </div>\n      <div class=\"grid-item\">\n        <p>Produced</p>\n      </div>\n      <div class=\"grid-item\">\n        <p>FPY</p>\n      </div>\n      <div class=\"grid-item\">\n        <p>Description</p>\n      </div>\n\n      <!-- 1 timeline -->\n      <div class=\"grid-item\">\n        <input [(ngModel)]=\"from1\" type=\"text\" (input)=\"onFrom1input($event.target.value)\">\n      </div>\n      <div class=\"grid-item\">\n        <input type=\"text\" [(ngModel)]=\"to1\">\n      </div>\n      <div class=\"grid-item\">\n        <input [(ngModel)]=\"model1\" type=\"text\">\n      </div>\n      <div class=\"grid-item\">\n        <input [(ngModel)]=\"plan1\" type=\"text\">\n      </div>\n      <div class=\"grid-item\">\n        <input [(ngModel)]=\"target1\" type=\"text\">\n      </div>\n      <div class=\"grid-item\">\n        <input [(ngModel)]=\"produced1\" type=\"text\">\n      </div>\n      <div class=\"grid-item\">\n        <input [(ngModel)]=\"fpy1\" type=\"text\">\n      </div>\n      <div class=\"grid-item\">\n        <textarea [(ngModel)]=\"description1\" style=\"font-size:12px; height:37px; width:300px; resize: none;\"></textarea>\n      </div>\n\n      <!-- 2 timeline -->\n      <div class=\"grid-item\">\n        <input [(ngModel)]=\"from2\" type=\"text\">\n      </div>\n      <div class=\"grid-item\">\n        <input [(ngModel)]=\"to2\" type=\"text\">\n      </div>\n      <div class=\"grid-item\">\n        <input [(ngModel)]=\"model2\" type=\"text\">\n      </div>\n      <div class=\"grid-item\">\n        <input [(ngModel)]=\"plan2\" type=\"text\">\n      </div>\n      <div class=\"grid-item\">\n        <input [(ngModel)]=\"target2\" type=\"text\">\n      </div>\n      <div class=\"grid-item\">\n        <input [(ngModel)]=\"produced2\" type=\"text\">\n      </div>\n      <div class=\"grid-item\">\n        <input [(ngModel)]=\"fpy2\" type=\"text\">\n      </div>\n      <div class=\"grid-item\">\n          <textarea [(ngModel)]=\"description2\" style=\"font-size:12px; height:37px; width:300px; resize: none;\"></textarea>\n      </div>\n\n      <!-- 3 timeline -->\n      <div class=\"grid-item\">\n        <input [(ngModel)]=\"from3\" type=\"text\">\n      </div>\n      <div class=\"grid-item\">\n        <input [(ngModel)]=\"to3\" type=\"text\">\n      </div>\n      <div class=\"grid-item\">\n        <input [(ngModel)]=\"model3\" type=\"text\">\n      </div>\n      <div class=\"grid-item\">\n        <input [(ngModel)]=\"plan3\" type=\"text\">\n      </div>\n      <div class=\"grid-item\">\n        <input [(ngModel)]=\"target3\" type=\"text\">\n      </div>\n      <div class=\"grid-item\">\n        <input [(ngModel)]=\"produced3\" type=\"text\">\n      </div>\n      <div class=\"grid-item\">\n        <input [(ngModel)]=\"fpy3\" type=\"text\">\n      </div>\n      <div class=\"grid-item\">\n          <textarea [(ngModel)]=\"description3\" style=\"font-size:12px; height:37px; width:300px; resize: none;\"></textarea>\n      </div>\n\n      <!-- 4 timeline -->\n      <div class=\"grid-item\">\n        <input [(ngModel)]=\"from4\" type=\"text\">\n      </div>\n      <div class=\"grid-item\">\n        <input [(ngModel)]=\"to4\" type=\"text\">\n      </div>\n      <div class=\"grid-item\">\n        <input [(ngModel)]=\"model4\" type=\"text\">\n      </div>\n      <div class=\"grid-item\">\n        <input [(ngModel)]=\"plan4\" type=\"text\">\n      </div>\n      <div class=\"grid-item\">\n        <input [(ngModel)]=\"target4\" type=\"text\">\n      </div>\n      <div class=\"grid-item\">\n        <input [(ngModel)]=\"produced4\" type=\"text\">\n      </div>\n      <div class=\"grid-item\">\n        <input [(ngModel)]=\"fpy4\" type=\"text\">\n      </div>\n      <div class=\"grid-item\">\n          <textarea [(ngModel)]=\"description4\" style=\"font-size:12px; height:37px; width:300px; resize: none;\"></textarea>\n      </div>\n    </div>\n  </main>\n</div>"

/***/ }),

/***/ "../../../../../src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_main_service__ = __webpack_require__("../../../../../src/app/service/main.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sdk__ = __webpack_require__("../../../../../src/sdk/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__sdk_services_custom_Timeline__ = __webpack_require__("../../../../../src/sdk/services/custom/Timeline.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__sdk_models__ = __webpack_require__("../../../../../src/sdk/models/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var HomeComponent = /** @class */ (function () {
    function HomeComponent(mainService, customerApi, lineApi, shiftApi, timelineApi, userApi) {
        var _this = this;
        this.mainService = mainService;
        this.customerApi = customerApi;
        this.lineApi = lineApi;
        this.shiftApi = shiftApi;
        this.timelineApi = timelineApi;
        this.userApi = userApi;
        this.user = new __WEBPACK_IMPORTED_MODULE_4__sdk_models__["b" /* User */]();
        this.user.username = 'admin';
        this.user.password = 'admin';
        this.user.email = 'admin@admin.com';
        // this.signin();
        customerApi.find(undefined, function (err, customer) { }).subscribe(function (customers) {
            _this.Customers = customers;
        });
    }
    HomeComponent.prototype.signup = function () {
        var _this = this;
        this.userApi.create(this.user).subscribe(function (user) { return _this.signin(); });
    };
    HomeComponent.prototype.signin = function () {
        this.userApi.login(this.user, undefined, undefined, function (err, result) {
            console.log(result);
        }).subscribe(function (token) { return alert('Fake Redirect'); });
    };
    HomeComponent.prototype.onCustomerSelect = function (customerId) {
        var _this = this;
        this.clearEditor();
        if (this.Shifts !== undefined) {
            while (this.Shifts.length > 0) {
                this.Shifts.pop();
            }
        }
        if (this.Lines !== undefined) {
            while (this.Lines.length > 0) {
                this.Lines.pop();
            }
        }
        this.lineSelector = '';
        this.customerApi.getLines(customerId, undefined, function (err, line) { }).subscribe(function (lines) {
            _this.Lines = lines;
        });
    };
    HomeComponent.prototype.onLineSelect = function (lineId) {
        var _this = this;
        this.clearEditor();
        if (this.Shifts !== undefined) {
            while (this.Shifts.length > 0) {
                this.Shifts.pop();
            }
        }
        this.shiftSelector = '';
        this.lineApi.getShifts(lineId, undefined, function (err, shift) { }).subscribe(function (shifts) {
            _this.Shifts = shifts;
        });
    };
    HomeComponent.prototype.onShiftSelect = function (shiftId) {
        var _this = this;
        this.clearEditor();
        this.shiftApi.getTimelines(shiftId, undefined, function (err, timeline) { }).subscribe(function (timelines) {
            var i = 1;
            // tslint:disable-next-line:max-line-length
            timelines.sort(function (a, b) { return Date.parse(new Date().toDateString() + ' ' + a.from) - Date.parse(new Date().toDateString() + ' ' + b.from); })
                .forEach(function (t) {
                switch (i) {
                    case 1: {
                        _this.timeline1Id = t.id;
                        _this.from1 = t.from === null ? '' : t.from;
                        _this.to1 = t.to === null ? '' : t.to;
                        _this.model1 = t.model === null ? '' : t.model;
                        _this.plan1 = t.plan === null ? '0' : String(t.plan);
                        _this.target1 = t.target === null ? '0' : String(t.target);
                        _this.produced1 = t.produced === null ? '0' : String(t.produced);
                        _this.fpy1 = t.fpy === null ? '' : String(t.fpy);
                        _this.description1 = t.description.length === 0 ? '' : String(t.description);
                        i++;
                        break;
                    }
                    case 2: {
                        _this.timeline2Id = t.id;
                        _this.from2 = t.from === null ? '' : t.from;
                        _this.to2 = t.to === null ? '' : t.to;
                        _this.model2 = t.model === null ? '' : t.model;
                        _this.plan2 = t.plan === null ? '0' : String(t.plan);
                        _this.target2 = t.target === null ? '0' : String(t.target);
                        _this.produced2 = t.produced === null ? '0' : String(t.produced);
                        _this.fpy2 = t.fpy === null ? '' : String(t.fpy);
                        _this.description2 = t.description.length === 0 ? '' : String(t.description);
                        i++;
                        break;
                    }
                    case 3: {
                        _this.timeline3Id = t.id;
                        _this.from3 = t.from === null ? '' : t.from;
                        _this.to3 = t.to === null ? '' : t.to;
                        _this.model3 = t.model === null ? '' : t.model;
                        _this.plan3 = t.plan === null ? '0' : String(t.plan);
                        _this.target3 = t.target === null ? '0' : String(t.target);
                        _this.produced3 = t.produced === null ? '0' : String(t.produced);
                        _this.fpy3 = t.fpy === null ? '' : String(t.fpy);
                        _this.description3 = t.description.length === 0 ? '' : String(t.description);
                        i++;
                        break;
                    }
                    case 4: {
                        _this.timeline4Id = t.id;
                        _this.from4 = t.from === null ? '' : t.from;
                        _this.to4 = t.to === null ? '' : t.to;
                        _this.model4 = t.model === null ? '' : t.model;
                        _this.plan4 = t.plan === null ? '0' : String(t.plan);
                        _this.target4 = t.target === null ? '0' : String(t.target);
                        _this.produced4 = t.produced === null ? '0' : String(t.produced);
                        _this.fpy4 = t.fpy === null ? '' : String(t.fpy);
                        _this.description4 = t.description.length === 0 ? '' : String(t.description);
                        i++;
                        break;
                    }
                }
            });
        });
    };
    HomeComponent.prototype.onFrom1input = function (value) {
        var _this = this;
        this.timelineApi.findById(this.timeline1Id, undefined, function (err, result) { }).subscribe(function (t) {
            t.from = value;
            console.log(t.from);
            /*this.timelineApi.upsert(t, function(err, headers) { }).subscribe((timeline: Timeline) => {
             console.log('Done');
           });*/
            var request = new XMLHttpRequest();
            var url = 'http://10.152.5.93:3030/api/Users/login';
            if (request) {
                request.open('POST', url, true);
                // request.setRequestHeader('Content-type', 'application/json');
                // request.setRequestHeader('Access-Control-Allow-Origin', '*');
                request.withCredentials = true;
                // invocation.onreadystatechange = handler;
                request.send(_this.user);
            }
            /*this.timelineApi.updateAttributes(this.timeline1Id, t).subscribe((timeline: Timeline) => {
              console.log(timeline.from);
            });*/
        });
    };
    HomeComponent.prototype.clearEditor = function () {
        this.from1 = '';
        this.to1 = '';
        this.model1 = '';
        this.plan1 = '';
        this.target1 = '';
        this.produced1 = '';
        this.fpy1 = '';
        this.description1 = '';
        this.from2 = '';
        this.to2 = '';
        this.model2 = '';
        this.plan2 = '';
        this.target2 = '';
        this.produced2 = '';
        this.fpy2 = '';
        this.description2 = '';
        this.from3 = '';
        this.to3 = '';
        this.model3 = '';
        this.plan3 = '';
        this.target3 = '';
        this.produced3 = '';
        this.fpy3 = '';
        this.description3 = '';
        this.from4 = '';
        this.to4 = '';
        this.model4 = '';
        this.plan4 = '';
        this.target4 = '';
        this.produced4 = '';
        this.fpy4 = '';
        this.description4 = '';
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__("../../../../../src/app/home/home.component.html"),
            styles: [__webpack_require__("../../../../../src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__service_main_service__["a" /* MainService */],
            __WEBPACK_IMPORTED_MODULE_2__sdk__["a" /* CustomerApi */],
            __WEBPACK_IMPORTED_MODULE_2__sdk__["b" /* LineApi */],
            __WEBPACK_IMPORTED_MODULE_2__sdk__["d" /* ShiftApi */],
            __WEBPACK_IMPORTED_MODULE_3__sdk_services_custom_Timeline__["a" /* TimelineApi */], __WEBPACK_IMPORTED_MODULE_2__sdk__["e" /* UserApi */]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/service/main.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MainService = /** @class */ (function () {
    function MainService(httpClient) {
        this.httpClient = httpClient;
    }
    MainService.prototype.getCustomers = function () {
        return this.httpClient.get('http://10.152.5.93:3030/api/customer');
    };
    MainService.prototype.getLines = function (customerId) {
        if (customerId === undefined) {
            return this.httpClient.get('http://10.152.5.93:3030/api/line');
        }
        else {
            return this.httpClient.get('http://10.152.5.93:3030/api/customer/' + customerId + '/lines');
        }
    };
    MainService.prototype.getShifts = function (lineId) {
        return this.httpClient.get('http://10.152.5.93:3030/api/line/' + lineId + '/shifts');
    };
    MainService.prototype.getTimeLines = function (shiftID) {
        return this.httpClient.get('http://10.152.5.93:3030/api/shift/' + shiftID + '/timelines');
    };
    MainService.prototype.getTimeLine = function (timelineId) {
        return this.httpClient.get('http://10.152.5.93:3030/api/timeline/' + timelineId);
    };
    MainService.prototype.updateTimeline = function (timeline) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]();
        headers.append('Content-Type', 'application/json');
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        /*let timeline: Timeline;
        this.getTimeLine(timelineId).subscribe((t: Timeline) => {
          timeline = t;
        });*/
        return this.httpClient.post('http://10.152.5.93:3030/api/timeline', timeline, { headers: headers }).subscribe(function (data) {
            console.log(data.from);
        });
    };
    MainService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], MainService);
    return MainService;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ "../../../../../src/sdk/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export SDKBrowserModule */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_core_search_params__ = __webpack_require__("../../../../../src/sdk/services/core/search.params.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_core_error_service__ = __webpack_require__("../../../../../src/sdk/services/core/error.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_core_auth_service__ = __webpack_require__("../../../../../src/sdk/services/core/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_custom_logger_service__ = __webpack_require__("../../../../../src/sdk/services/custom/logger.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_custom_SDKModels__ = __webpack_require__("../../../../../src/sdk/services/custom/SDKModels.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__storage_storage_swaps__ = __webpack_require__("../../../../../src/sdk/storage/storage.swaps.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__storage_cookie_browser__ = __webpack_require__("../../../../../src/sdk/storage/cookie.browser.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__storage_storage_browser__ = __webpack_require__("../../../../../src/sdk/storage/storage.browser.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__sockets_socket_browser__ = __webpack_require__("../../../../../src/sdk/sockets/socket.browser.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__sockets_socket_driver__ = __webpack_require__("../../../../../src/sdk/sockets/socket.driver.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__sockets_socket_connections__ = __webpack_require__("../../../../../src/sdk/sockets/socket.connections.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__services_core_real_time__ = __webpack_require__("../../../../../src/sdk/services/core/real.time.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__services_custom_User__ = __webpack_require__("../../../../../src/sdk/services/custom/User.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__services_custom_AccessToken__ = __webpack_require__("../../../../../src/sdk/services/custom/AccessToken.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__services_custom_Line__ = __webpack_require__("../../../../../src/sdk/services/custom/Line.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__services_custom_Customer__ = __webpack_require__("../../../../../src/sdk/services/custom/Customer.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__services_custom_Shift__ = __webpack_require__("../../../../../src/sdk/services/custom/Shift.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__services_custom_Timeline__ = __webpack_require__("../../../../../src/sdk/services/custom/Timeline.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__services_custom_Family__ = __webpack_require__("../../../../../src/sdk/services/custom/Family.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__services_custom_TimeClean__ = __webpack_require__("../../../../../src/sdk/services/custom/TimeClean.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__models_index__ = __webpack_require__("../../../../../src/sdk/models/index.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__services_index__ = __webpack_require__("../../../../../src/sdk/services/index.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_24__services_index__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_24__services_index__["b"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_24__services_index__["c"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_24__services_index__["d"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_24__services_index__["e"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__lb_config__ = __webpack_require__("../../../../../src/sdk/lb.config.ts");
/* unused harmony namespace reexport */
/* unused harmony namespace reexport */
/* unused harmony reexport CookieBrowser */
/* unused harmony reexport StorageBrowser */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/* tslint:disable */
/**
* @module SDKModule
* @author Jonathan Casarrubias <t:@johncasarrubias> <gh:jonathan-casarrubias>
* @license MIT 2016 Jonathan Casarrubias
* @version 2.1.0
* @description
* The SDKModule is a generated Software Development Kit automatically built by
* the LoopBack SDK Builder open source module.
*
* The SDKModule provides Angular 2 >= RC.5 support, which means that NgModules
* can import this Software Development Kit as follows:
*
*
* APP Route Module Context
* ============================================================================
* import { NgModule }       from '@angular/core';
* import { BrowserModule }  from '@angular/platform-browser';
* // App Root
* import { AppComponent }   from './app.component';
* // Feature Modules
* import { SDK[Browser|Node|Native]Module } from './shared/sdk/sdk.module';
* // Import Routing
* import { routing }        from './app.routing';
* @NgModule({
*  imports: [
*    BrowserModule,
*    routing,
*    SDK[Browser|Node|Native]Module.forRoot()
*  ],
*  declarations: [ AppComponent ],
*  bootstrap:    [ AppComponent ]
* })
* export class AppModule { }
*
**/























/**
* @module SDKBrowserModule
* @description
* This module should be imported when building a Web Application in the following scenarios:
*
*  1.- Regular web application
*  2.- Angular universal application (Browser Portion)
*  3.- Progressive applications (Angular Mobile, Ionic, WebViews, etc)
**/
var SDKBrowserModule = /** @class */ (function () {
    function SDKBrowserModule() {
    }
    SDKBrowserModule_1 = SDKBrowserModule;
    SDKBrowserModule.forRoot = function (internalStorageProvider) {
        if (internalStorageProvider === void 0) { internalStorageProvider = {
            provide: __WEBPACK_IMPORTED_MODULE_5__storage_storage_swaps__["a" /* InternalStorage */],
            useClass: __WEBPACK_IMPORTED_MODULE_9__storage_cookie_browser__["a" /* CookieBrowser */]
        }; }
        return {
            ngModule: SDKBrowserModule_1,
            providers: [
                __WEBPACK_IMPORTED_MODULE_2__services_core_auth_service__["a" /* LoopBackAuth */],
                __WEBPACK_IMPORTED_MODULE_3__services_custom_logger_service__["a" /* LoggerService */],
                __WEBPACK_IMPORTED_MODULE_0__services_core_search_params__["a" /* JSONSearchParams */],
                __WEBPACK_IMPORTED_MODULE_4__services_custom_SDKModels__["a" /* SDKModels */],
                __WEBPACK_IMPORTED_MODULE_14__services_core_real_time__["a" /* RealTime */],
                __WEBPACK_IMPORTED_MODULE_15__services_custom_User__["a" /* UserApi */],
                __WEBPACK_IMPORTED_MODULE_16__services_custom_AccessToken__["a" /* AccessTokenApi */],
                __WEBPACK_IMPORTED_MODULE_17__services_custom_Line__["a" /* LineApi */],
                __WEBPACK_IMPORTED_MODULE_18__services_custom_Customer__["a" /* CustomerApi */],
                __WEBPACK_IMPORTED_MODULE_19__services_custom_Shift__["a" /* ShiftApi */],
                __WEBPACK_IMPORTED_MODULE_20__services_custom_Timeline__["a" /* TimelineApi */],
                __WEBPACK_IMPORTED_MODULE_21__services_custom_Family__["a" /* FamilyApi */],
                __WEBPACK_IMPORTED_MODULE_22__services_custom_TimeClean__["a" /* TimeCleanApi */],
                internalStorageProvider,
                { provide: __WEBPACK_IMPORTED_MODULE_5__storage_storage_swaps__["b" /* SDKStorage */], useClass: __WEBPACK_IMPORTED_MODULE_10__storage_storage_browser__["a" /* StorageBrowser */] },
                { provide: __WEBPACK_IMPORTED_MODULE_12__sockets_socket_driver__["a" /* SocketDriver */], useClass: __WEBPACK_IMPORTED_MODULE_11__sockets_socket_browser__["a" /* SocketBrowser */] }
            ]
        };
    };
    SDKBrowserModule = SDKBrowserModule_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_8__angular_core__["I" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_7__angular_common__["b" /* CommonModule */], __WEBPACK_IMPORTED_MODULE_6__angular_http__["c" /* HttpModule */]],
            declarations: [],
            exports: [],
            providers: [
                __WEBPACK_IMPORTED_MODULE_1__services_core_error_service__["a" /* ErrorHandler */],
                __WEBPACK_IMPORTED_MODULE_13__sockets_socket_connections__["a" /* SocketConnection */]
            ]
        })
    ], SDKBrowserModule);
    return SDKBrowserModule;
    var SDKBrowserModule_1;
}());

/**
* Have Fun!!!
* - Jon
**/








/***/ }),

/***/ "../../../../../src/sdk/lb.config.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoopBackConfig; });
/* tslint:disable */
/**
* @module LoopBackConfig
* @description
*
* The LoopBackConfig module help developers to externally
* configure the base url and api version for loopback.io
*
* Example
*
* import { LoopBackConfig } from './sdk';
*
* @Component() // No metadata needed for this module
*
* export class MyApp {
*   constructor() {
*     LoopBackConfig.setBaseURL('http://localhost:3000');
*     LoopBackConfig.setApiVersion('api');
*   }
* }
**/
var LoopBackConfig = /** @class */ (function () {
    function LoopBackConfig() {
    }
    LoopBackConfig.setApiVersion = function (version) {
        if (version === void 0) { version = 'api'; }
        LoopBackConfig.version = version;
    };
    LoopBackConfig.getApiVersion = function () {
        return LoopBackConfig.version;
    };
    LoopBackConfig.setBaseURL = function (url) {
        if (url === void 0) { url = '/'; }
        LoopBackConfig.path = url;
    };
    LoopBackConfig.getPath = function () {
        return LoopBackConfig.path;
    };
    LoopBackConfig.setAuthPrefix = function (authPrefix) {
        if (authPrefix === void 0) { authPrefix = ''; }
        LoopBackConfig.authPrefix = authPrefix;
    };
    LoopBackConfig.getAuthPrefix = function () {
        return LoopBackConfig.authPrefix;
    };
    LoopBackConfig.setDebugMode = function (isEnabled) {
        LoopBackConfig.debug = isEnabled;
    };
    LoopBackConfig.debuggable = function () {
        return LoopBackConfig.debug;
    };
    LoopBackConfig.filterOnUrl = function () {
        LoopBackConfig.filterOn = 'url';
    };
    LoopBackConfig.filterOnHeaders = function () {
        LoopBackConfig.filterOn = 'headers';
    };
    LoopBackConfig.isHeadersFilteringSet = function () {
        return (LoopBackConfig.filterOn === 'headers');
    };
    LoopBackConfig.setSecureWebSockets = function () {
        LoopBackConfig.secure = true;
    };
    LoopBackConfig.unsetSecureWebSockets = function () {
        LoopBackConfig.secure = false;
    };
    LoopBackConfig.isSecureWebSocketsSet = function () {
        return LoopBackConfig.secure;
    };
    LoopBackConfig.setRequestOptionsCredentials = function (withCredentials) {
        if (withCredentials === void 0) { withCredentials = false; }
        LoopBackConfig.withCredentials = withCredentials;
    };
    LoopBackConfig.getRequestOptionsCredentials = function () {
        return LoopBackConfig.withCredentials;
    };
    LoopBackConfig.path = 'http://10.152.5.93:3030';
    LoopBackConfig.version = 'api';
    LoopBackConfig.authPrefix = '';
    LoopBackConfig.debug = true;
    LoopBackConfig.filterOn = 'headers';
    LoopBackConfig.secure = false;
    LoopBackConfig.withCredentials = false;
    return LoopBackConfig;
}());



/***/ }),

/***/ "../../../../../src/sdk/models/AccessToken.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccessToken; });
var AccessToken = /** @class */ (function () {
    function AccessToken(data) {
        Object.assign(this, data);
    }
    /**
     * The name of the model represented by this $resource,
     * i.e. `AccessToken`.
     */
    AccessToken.getModelName = function () {
        return "AccessToken";
    };
    /**
    * @method factory
    * @author Jonathan Casarrubias
    * @license MIT
    * This method creates an instance of AccessToken for dynamic purposes.
    **/
    AccessToken.factory = function (data) {
        return new AccessToken(data);
    };
    /**
    * @method getModelDefinition
    * @author Julien Ledun
    * @license MIT
    * This method returns an object that represents some of the model
    * definitions.
    **/
    AccessToken.getModelDefinition = function () {
        return {
            name: 'AccessToken',
            plural: 'AccessTokens',
            path: 'AccessTokens',
            idName: 'id',
            properties: {
                "id": {
                    name: 'id',
                    type: 'string'
                },
                "ttl": {
                    name: 'ttl',
                    type: 'number',
                    default: 1209600
                },
                "scopes": {
                    name: 'scopes',
                    type: 'Array&lt;any&gt;'
                },
                "created": {
                    name: 'created',
                    type: 'Date'
                },
                "userId": {
                    name: 'userId',
                    type: 'any'
                },
            },
            relations: {
                user: {
                    name: 'user',
                    type: 'User',
                    model: 'User',
                    relationType: 'belongsTo',
                    keyFrom: 'userId',
                    keyTo: 'id'
                },
            }
        };
    };
    return AccessToken;
}());



/***/ }),

/***/ "../../../../../src/sdk/models/BaseModels.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SDKToken; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__AccessToken__ = __webpack_require__("../../../../../src/sdk/models/AccessToken.ts");
/* unused harmony namespace reexport */
/* tslint:disable */

var SDKToken = /** @class */ (function () {
    function SDKToken(data) {
        this.id = null;
        this.ttl = null;
        this.scopes = null;
        this.created = null;
        this.userId = null;
        this.user = null;
        this.rememberMe = null;
        Object.assign(this, data);
    }
    return SDKToken;
}());



/***/ }),

/***/ "../../../../../src/sdk/models/Customer.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Customer; });
var Customer = /** @class */ (function () {
    function Customer(data) {
        Object.assign(this, data);
    }
    /**
     * The name of the model represented by this $resource,
     * i.e. `Customer`.
     */
    Customer.getModelName = function () {
        return "Customer";
    };
    /**
    * @method factory
    * @author Jonathan Casarrubias
    * @license MIT
    * This method creates an instance of Customer for dynamic purposes.
    **/
    Customer.factory = function (data) {
        return new Customer(data);
    };
    /**
    * @method getModelDefinition
    * @author Julien Ledun
    * @license MIT
    * This method returns an object that represents some of the model
    * definitions.
    **/
    Customer.getModelDefinition = function () {
        return {
            name: 'Customer',
            plural: 'customer',
            path: 'customer',
            idName: 'id',
            properties: {
                "name": {
                    name: 'name',
                    type: 'string'
                },
                "id": {
                    name: 'id',
                    type: 'any'
                },
            },
            relations: {
                lines: {
                    name: 'lines',
                    type: 'Line[]',
                    model: 'Line',
                    relationType: 'hasMany',
                    keyFrom: 'id',
                    keyTo: 'customerId'
                },
            }
        };
    };
    return Customer;
}());



/***/ }),

/***/ "../../../../../src/sdk/models/Family.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Family; });
/* tslint:disable */
var Family = /** @class */ (function () {
    function Family(data) {
        Object.assign(this, data);
    }
    /**
     * The name of the model represented by this $resource,
     * i.e. `Family`.
     */
    Family.getModelName = function () {
        return "Family";
    };
    /**
    * @method factory
    * @author Jonathan Casarrubias
    * @license MIT
    * This method creates an instance of Family for dynamic purposes.
    **/
    Family.factory = function (data) {
        return new Family(data);
    };
    /**
    * @method getModelDefinition
    * @author Julien Ledun
    * @license MIT
    * This method returns an object that represents some of the model
    * definitions.
    **/
    Family.getModelDefinition = function () {
        return {
            name: 'Family',
            plural: 'family',
            path: 'family',
            idName: 'id',
            properties: {
                "name": {
                    name: 'name',
                    type: 'string'
                },
                "targerFPY": {
                    name: 'targerFPY',
                    type: 'number'
                },
                "id": {
                    name: 'id',
                    type: 'any'
                },
                "lineId": {
                    name: 'lineId',
                    type: 'any'
                },
            },
            relations: {}
        };
    };
    return Family;
}());



/***/ }),

/***/ "../../../../../src/sdk/models/FireLoop.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FireLoop; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index__ = __webpack_require__("../../../../../src/sdk/models/index.ts");
/* tslint:disable */

var FireLoop = /** @class */ (function () {
    function FireLoop(socket, models) {
        this.socket = socket;
        this.models = models;
        this.references = {};
    }
    FireLoop.prototype.ref = function (model) {
        var name = model.getModelName();
        model.models = this.models;
        this.references[name] = new __WEBPACK_IMPORTED_MODULE_0__index__["a" /* FireLoopRef */](model, this.socket);
        return this.references[name];
    };
    return FireLoop;
}());



/***/ }),

/***/ "../../../../../src/sdk/models/FireLoopRef.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FireLoopRef; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_observable_merge__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/merge.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__("../../../../rxjs/_esm5/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_merge__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/merge.js");
/* tslint:disable */




/**
 * @class FireLoopRef<T>
 * @author Jonathan Casarrubias <t: johncasarrubias, gh: mean-expert-official>
 * @license MIT
 * @description
 * This class allows to create FireLoop References which will be in sync with
 * Server. It also allows to create FireLoop Reference Childs, that allows to
 * persist data according the generic model relationships.
 **/
var FireLoopRef = /** @class */ (function () {
    /**
    * @method constructor
    * @param {any} model The model we want to create a reference
    * @param {SocketConnection} socket Socket connection to handle events
    * @param {FireLoopRef<any>} parent Parent FireLoop model reference
    * @param {string} relationship The defined model relationship
    * @description
    * The constructor will receive the required parameters and then will register this reference
    * into the server, needed to allow multiple references for the same model.
    * This ids are referenced into this specific client connection and won't have issues
    * with other client ids.
    **/
    function FireLoopRef(model, socket, parent, relationship) {
        if (parent === void 0) { parent = null; }
        if (relationship === void 0) { relationship = null; }
        this.model = model;
        this.socket = socket;
        this.parent = parent;
        this.relationship = relationship;
        // Reference ID
        this.id = this.buildId();
        // Model Childs
        this.childs = {};
        // Disposable Events
        this.disposable = {};
        this.socket.emit("Subscribe." + (!parent ? model.getModelName() : parent.model.getModelName()), { id: this.id, scope: model.getModelName(), relationship: relationship });
        return this;
    }
    /**
    * @method dispose
    * @return {void}
    * @description
    * This method is super important to avoid memory leaks in the server.
    * This method requires to be called on components destroy
    *
    * ngOnDestroy() {
    *  this.someRef.dispose()
    * }
    **/
    FireLoopRef.prototype.dispose = function () {
        var _this = this;
        var subscription = this.operation('dispose', {}).subscribe(function () {
            Object.keys(_this.disposable).forEach(function (channel) {
                _this.socket.removeListener(channel, _this.disposable[channel]);
                _this.socket.removeAllListeners(channel);
            });
            subscription.unsubscribe();
        });
    };
    /**
    * @method upsert
    * @param {T} data Persisted model instance
    * @return {Observable<T>}
    * @description
    * Operation wrapper for upsert function.
    **/
    FireLoopRef.prototype.upsert = function (data) {
        return this.operation('upsert', data);
    };
    /**
    * @method create
    * @param {T} data Persisted model instance
    * @return {Observable<T>}
    * @description
    * Operation wrapper for create function.
    **/
    FireLoopRef.prototype.create = function (data) {
        return this.operation('create', data);
    };
    /**
    * @method remove
    * @param {T} data Persisted model instance
    * @return {Observable<T>}
    * @description
    * Operation wrapper for remove function.
    **/
    FireLoopRef.prototype.remove = function (data) {
        return this.operation('remove', data);
    };
    /**
    * @method remote
    * @param {string} method Remote method name
    * @param {any[]=} params Parameters to be applied into the remote method
    * @param {boolean} broadcast Flag to define if the method results should be broadcasted
    * @return {Observable<any>}
    * @description
    * This method calls for any remote method. It is flexible enough to
    * allow you call either built-in or custom remote methods.
    *
    * FireLoop provides this interface to enable calling remote methods
    * but also to optionally send any defined accept params that will be
    * applied within the server.
    **/
    FireLoopRef.prototype.remote = function (method, params, broadcast) {
        if (broadcast === void 0) { broadcast = false; }
        return this.operation('remote', { method: method, params: params, broadcast: broadcast });
    };
    /**
    * @method onRemote
    * @param {string} method Remote method name
    * @return {Observable<any>}
    * @description
    * This method listen for public broadcasted remote method results. If the remote method
    * execution is not public only the owner will receive the result data.
    **/
    FireLoopRef.prototype.onRemote = function (method) {
        var event = 'remote';
        if (!this.relationship) {
            event = this.model.getModelName() + "." + event;
        }
        else {
            event = this.parent.model.getModelName() + "." + this.relationship + "." + event;
        }
        return this.broadcasts(event, {});
    };
    /**
    * @method on
    * @param {string} event Event name
    * @param {LoopBackFilter} filter LoopBack query filter
    * @return {Observable<T>}
    * @description
    * Listener for different type of events. Valid events are:
    *   - change (Triggers on any model change -create, update, remove-)
    *   - value (Triggers on new entries)
    *   - child_added (Triggers when a child is added)
    *   - child_updated (Triggers when a child is updated)
    *   - child_removed (Triggers when a child is removed)
    **/
    FireLoopRef.prototype.on = function (event, filter) {
        if (filter === void 0) { filter = { limit: 100, order: 'id DESC' }; }
        if (event === 'remote') {
            throw new Error('The "remote" event is not allowed using "on()" method, use "onRemote()" instead');
        }
        var request;
        if (!this.relationship) {
            event = this.model.getModelName() + "." + event;
            request = { filter: filter };
        }
        else {
            event = this.parent.model.getModelName() + "." + this.relationship + "." + event;
            request = { filter: filter, parent: this.parent.instance };
        }
        if (event.match(/(value|change|stats)/)) {
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].merge(this.pull(event, request), this.broadcasts(event, request));
        }
        else {
            return this.broadcasts(event, request);
        }
    };
    /**
    * @method stats
    * @param {LoopBackFilter=} filter LoopBack query filter
    * @return {Observable<T>}
    * @description
    * Listener for real-time statistics, will trigger on every
    * statistic modification.
    * TIP: You can improve performance by adding memcached to LoopBack models.
    **/
    FireLoopRef.prototype.stats = function (filter) {
        return this.on('stats', filter);
    };
    /**
    * @method make
    * @param {any} instance Persisted model instance reference
    * @return {Observable<T>}
    * @description
    * This method will set a model instance into this a new FireLoop Reference.
    * This allows to persiste parentship when creating related instances.
    *
    * It also allows to have multiple different persisted instance references to same model.
    * otherwise if using singleton will replace a previous instance for a new instance, when
    * we actually want to have more than 1 instance of same model.
    **/
    FireLoopRef.prototype.make = function (instance) {
        var reference = new FireLoopRef(this.model, this.socket);
        reference.instance = instance;
        return reference;
    };
    /**
    * @method child
    * @param {string} relationship A defined model relationship
    * @return {FireLoopRef<T>}
    * @description
    * This method creates child references, which will persist related model
    * instances. e.g. Room.messages, where messages belongs to a specific Room.
    **/
    FireLoopRef.prototype.child = function (relationship) {
        // Return singleton instance
        if (this.childs[relationship]) {
            return this.childs[relationship];
        }
        // Try to get relation settings from current model
        var settings = this.model.getModelDefinition().relations[relationship];
        // Verify the relationship actually exists
        if (!settings) {
            throw new Error("Invalid model relationship " + this.model.getModelName() + " <-> " + relationship + ", verify your model settings.");
        }
        // Verify if the relationship model is public
        if (settings.model === '') {
            throw new Error("Relationship model is private, cam't use " + relationship + " unless you set your model as public.");
        }
        // Lets get a model reference and add a reference for all of the models
        var model = this.model.models.get(settings.model);
        model.models = this.model.models;
        // If everything goes well, we will store a child reference and return it.
        this.childs[relationship] = new FireLoopRef(model, this.socket, this, relationship);
        return this.childs[relationship];
    };
    /**
    * @method pull
    * @param {string} event Event name
    * @param {any} request Type of request, can be LB-only filter or FL+LB filter
    * @return {Observable<T>}
    * @description
    * This method will pull initial data from server
    **/
    FireLoopRef.prototype.pull = function (event, request) {
        var sbj = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["a" /* Subject */]();
        var that = this;
        var nowEvent = event + ".pull.requested." + this.id;
        this.socket.emit(event + ".pull.request." + this.id, request);
        function pullNow(data) {
            if (that.socket.removeListener) {
                that.socket.removeListener(nowEvent, pullNow);
            }
            sbj.next(data);
        }
        ;
        this.socket.on(nowEvent, pullNow);
        return sbj.asObservable();
    };
    /**
    * @method broadcasts
    * @param {string} event Event name
    * @param {any} request Type of request, can be LB-only filter or FL+LB filter
    * @return {Observable<T>}
    * @description
    * This will listen for public broadcasts announces and then request
    * for data according a specific client request, not shared with other clients.
    **/
    FireLoopRef.prototype.broadcasts = function (event, request) {
        var sbj = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["a" /* Subject */]();
        var channels = {
            announce: event + ".broadcast.announce." + this.id,
            broadcast: event + ".broadcast." + this.id
        };
        var that = this;
        // Announces Handler
        this.disposable[channels.announce] = function (res) {
            that.socket.emit(event + ".broadcast.request." + that.id, request);
        };
        // Broadcasts Handler
        this.disposable[channels.broadcast] = function (data) {
            sbj.next(data);
        };
        this.socket.on(channels.announce, this.disposable[channels.announce]);
        this.socket.on(channels.broadcast, this.disposable[channels.broadcast]);
        return sbj.asObservable();
    };
    /**
    * @method operation
    * @param {string} event Event name
    * @param {any} data Any type of data sent to the server
    * @return {Observable<T>}
    * @description
    * This internal method will run operations depending on current context
    **/
    FireLoopRef.prototype.operation = function (event, data) {
        if (!this.relationship) {
            event = this.model.getModelName() + "." + event + "." + this.id;
        }
        else {
            event = this.parent.model.getModelName() + "." + this.relationship + "." + event + "." + this.id;
        }
        var subject = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["a" /* Subject */]();
        var config = {
            data: data,
            parent: this.parent && this.parent.instance ? this.parent.instance : null
        };
        this.socket.emit(event, config);
        var resultEvent = '';
        if (!this.relationship) {
            resultEvent = this.model.getModelName() + ".value.result." + this.id;
        }
        else {
            resultEvent = this.parent.model.getModelName() + "." + this.relationship + ".value.result." + this.id;
        }
        this.socket.on(resultEvent, function (res) {
            if (res.error) {
                subject.error(res);
            }
            else {
                subject.next(res);
            }
        });
        if (event.match('dispose')) {
            setTimeout(function () { return subject.next(); });
        }
        // This event listener will be wiped within socket.connections
        this.socket.sharedObservables.sharedOnDisconnect.subscribe(function () { return subject.complete(); });
        return subject.asObservable().catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].throw(error); });
    };
    /**
    * @method buildId
    * @return {number}
    * @description
    * This internal method build an ID for this reference, this allows to have
    * multiple references for the same model or relationships.
    **/
    FireLoopRef.prototype.buildId = function () {
        return Date.now() + Math.floor(Math.random() * 100800) *
            Math.floor(Math.random() * 100700) *
            Math.floor(Math.random() * 198500);
    };
    return FireLoopRef;
}());



/***/ }),

/***/ "../../../../../src/sdk/models/Line.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Line; });
var Line = /** @class */ (function () {
    function Line(data) {
        Object.assign(this, data);
    }
    /**
     * The name of the model represented by this $resource,
     * i.e. `Line`.
     */
    Line.getModelName = function () {
        return "Line";
    };
    /**
    * @method factory
    * @author Jonathan Casarrubias
    * @license MIT
    * This method creates an instance of Line for dynamic purposes.
    **/
    Line.factory = function (data) {
        return new Line(data);
    };
    /**
    * @method getModelDefinition
    * @author Julien Ledun
    * @license MIT
    * This method returns an object that represents some of the model
    * definitions.
    **/
    Line.getModelDefinition = function () {
        return {
            name: 'Line',
            plural: 'line',
            path: 'line',
            idName: 'id',
            properties: {
                "name": {
                    name: 'name',
                    type: 'string'
                },
                "isEnableClean": {
                    name: 'isEnableClean',
                    type: 'boolean',
                    default: false
                },
                "isCommonFPY": {
                    name: 'isCommonFPY',
                    type: 'boolean',
                    default: true
                },
                "messageClean": {
                    name: 'messageClean',
                    type: 'string'
                },
                "timeClean": {
                    name: 'timeClean',
                    type: 'string'
                },
                "targetFPY": {
                    name: 'targetFPY',
                    type: 'number'
                },
                "id": {
                    name: 'id',
                    type: 'any'
                },
                "customerId": {
                    name: 'customerId',
                    type: 'any'
                },
            },
            relations: {
                shifts: {
                    name: 'shifts',
                    type: 'Shift[]',
                    model: 'Shift',
                    relationType: 'hasMany',
                    keyFrom: 'id',
                    keyTo: 'lineId'
                },
                models: {
                    name: 'models',
                    type: 'Family[]',
                    model: 'Family',
                    relationType: 'hasMany',
                    keyFrom: 'id',
                    keyTo: 'lineId'
                },
                timeCleans: {
                    name: 'timeCleans',
                    type: 'TimeClean[]',
                    model: 'TimeClean',
                    relationType: 'hasMany',
                    keyFrom: 'id',
                    keyTo: 'lineId'
                },
            }
        };
    };
    return Line;
}());



/***/ }),

/***/ "../../../../../src/sdk/models/Shift.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Shift; });
var Shift = /** @class */ (function () {
    function Shift(data) {
        Object.assign(this, data);
    }
    /**
     * The name of the model represented by this $resource,
     * i.e. `Shift`.
     */
    Shift.getModelName = function () {
        return "Shift";
    };
    /**
    * @method factory
    * @author Jonathan Casarrubias
    * @license MIT
    * This method creates an instance of Shift for dynamic purposes.
    **/
    Shift.factory = function (data) {
        return new Shift(data);
    };
    /**
    * @method getModelDefinition
    * @author Julien Ledun
    * @license MIT
    * This method returns an object that represents some of the model
    * definitions.
    **/
    Shift.getModelDefinition = function () {
        return {
            name: 'Shift',
            plural: 'shift',
            path: 'shift',
            idName: 'id',
            properties: {
                "name": {
                    name: 'name',
                    type: 'string'
                },
                "nextShift": {
                    name: 'nextShift',
                    type: 'string'
                },
                "isEnable": {
                    name: 'isEnable',
                    type: 'boolean',
                    default: true
                },
                "id": {
                    name: 'id',
                    type: 'any'
                },
                "lineId": {
                    name: 'lineId',
                    type: 'any'
                },
            },
            relations: {
                timelines: {
                    name: 'timelines',
                    type: 'Timeline[]',
                    model: 'Timeline',
                    relationType: 'hasMany',
                    keyFrom: 'id',
                    keyTo: 'shiftId'
                },
            }
        };
    };
    return Shift;
}());



/***/ }),

/***/ "../../../../../src/sdk/models/TimeClean.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TimeClean; });
/* tslint:disable */
var TimeClean = /** @class */ (function () {
    function TimeClean(data) {
        Object.assign(this, data);
    }
    /**
     * The name of the model represented by this $resource,
     * i.e. `TimeClean`.
     */
    TimeClean.getModelName = function () {
        return "TimeClean";
    };
    /**
    * @method factory
    * @author Jonathan Casarrubias
    * @license MIT
    * This method creates an instance of TimeClean for dynamic purposes.
    **/
    TimeClean.factory = function (data) {
        return new TimeClean(data);
    };
    /**
    * @method getModelDefinition
    * @author Julien Ledun
    * @license MIT
    * This method returns an object that represents some of the model
    * definitions.
    **/
    TimeClean.getModelDefinition = function () {
        return {
            name: 'TimeClean',
            plural: 'timeClean',
            path: 'timeClean',
            idName: 'id',
            properties: {
                "time": {
                    name: 'time',
                    type: 'string'
                },
                "id": {
                    name: 'id',
                    type: 'any'
                },
                "lineId": {
                    name: 'lineId',
                    type: 'any'
                },
            },
            relations: {}
        };
    };
    return TimeClean;
}());



/***/ }),

/***/ "../../../../../src/sdk/models/Timeline.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Timeline; });
/* tslint:disable */
var Timeline = /** @class */ (function () {
    function Timeline(data) {
        Object.assign(this, data);
    }
    /**
     * The name of the model represented by this $resource,
     * i.e. `Timeline`.
     */
    Timeline.getModelName = function () {
        return "Timeline";
    };
    /**
    * @method factory
    * @author Jonathan Casarrubias
    * @license MIT
    * This method creates an instance of Timeline for dynamic purposes.
    **/
    Timeline.factory = function (data) {
        return new Timeline(data);
    };
    /**
    * @method getModelDefinition
    * @author Julien Ledun
    * @license MIT
    * This method returns an object that represents some of the model
    * definitions.
    **/
    Timeline.getModelDefinition = function () {
        return {
            name: 'Timeline',
            plural: 'timeline',
            path: 'timeline',
            idName: 'id',
            properties: {
                "from": {
                    name: 'from',
                    type: 'string'
                },
                "to": {
                    name: 'to',
                    type: 'string'
                },
                "plan": {
                    name: 'plan',
                    type: 'number'
                },
                "target": {
                    name: 'target',
                    type: 'number',
                    default: 0
                },
                "produced": {
                    name: 'produced',
                    type: 'number',
                    default: 0
                },
                "description": {
                    name: 'description',
                    type: 'string'
                },
                "fpy": {
                    name: 'fpy',
                    type: 'number',
                    default: 0
                },
                "model": {
                    name: 'model',
                    type: 'string'
                },
                "id": {
                    name: 'id',
                    type: 'any'
                },
                "shiftId": {
                    name: 'shiftId',
                    type: 'any'
                },
            },
            relations: {}
        };
    };
    return Timeline;
}());



/***/ }),

/***/ "../../../../../src/sdk/models/User.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
var User = /** @class */ (function () {
    function User(data) {
        Object.assign(this, data);
    }
    /**
     * The name of the model represented by this $resource,
     * i.e. `User`.
     */
    User.getModelName = function () {
        return "User";
    };
    /**
    * @method factory
    * @author Jonathan Casarrubias
    * @license MIT
    * This method creates an instance of User for dynamic purposes.
    **/
    User.factory = function (data) {
        return new User(data);
    };
    /**
    * @method getModelDefinition
    * @author Julien Ledun
    * @license MIT
    * This method returns an object that represents some of the model
    * definitions.
    **/
    User.getModelDefinition = function () {
        return {
            name: 'User',
            plural: 'Users',
            path: 'Users',
            idName: 'id',
            properties: {
                "realm": {
                    name: 'realm',
                    type: 'string'
                },
                "username": {
                    name: 'username',
                    type: 'string'
                },
                "email": {
                    name: 'email',
                    type: 'string'
                },
                "emailVerified": {
                    name: 'emailVerified',
                    type: 'boolean'
                },
                "id": {
                    name: 'id',
                    type: 'any'
                },
                "password": {
                    name: 'password',
                    type: 'string'
                },
            },
            relations: {
                accessTokens: {
                    name: 'accessTokens',
                    type: 'AccessToken[]',
                    model: 'AccessToken',
                    relationType: 'hasMany',
                    keyFrom: 'id',
                    keyTo: 'userId'
                },
            }
        };
    };
    return User;
}());



/***/ }),

/***/ "../../../../../src/sdk/models/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__User__ = __webpack_require__("../../../../../src/sdk/models/User.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__User__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__AccessToken__ = __webpack_require__("../../../../../src/sdk/models/AccessToken.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Line__ = __webpack_require__("../../../../../src/sdk/models/Line.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Customer__ = __webpack_require__("../../../../../src/sdk/models/Customer.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Shift__ = __webpack_require__("../../../../../src/sdk/models/Shift.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Timeline__ = __webpack_require__("../../../../../src/sdk/models/Timeline.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Family__ = __webpack_require__("../../../../../src/sdk/models/Family.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__TimeClean__ = __webpack_require__("../../../../../src/sdk/models/TimeClean.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__BaseModels__ = __webpack_require__("../../../../../src/sdk/models/BaseModels.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__FireLoopRef__ = __webpack_require__("../../../../../src/sdk/models/FireLoopRef.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_9__FireLoopRef__["a"]; });
/* tslint:disable */












/***/ }),

/***/ "../../../../../src/sdk/services/core/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoopBackAuth; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__storage_storage_swaps__ = __webpack_require__("../../../../../src/sdk/storage/storage.swaps.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_BaseModels__ = __webpack_require__("../../../../../src/sdk/models/BaseModels.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



/**
* @author Jonathan Casarrubias <twitter:@johncasarrubias> <github:@mean-expert-official>
* @module SocketConnection
* @license MIT
* @description
* This module handle socket connections and return singleton instances for each
* connection, it will use the SDK Socket Driver Available currently supporting
* Angular 2 for web, NativeScript 2 and Angular Universal.
**/
var LoopBackAuth = /** @class */ (function () {
    /**
     * @method constructor
     * @param {InternalStorage} storage Internal Storage Driver
     * @description
     * The constructor will initialize the token loading data from storage
     **/
    function LoopBackAuth(storage) {
        this.storage = storage;
        /**
         * @type {SDKToken}
         **/
        this.token = new __WEBPACK_IMPORTED_MODULE_2__models_BaseModels__["a" /* SDKToken */]();
        /**
         * @type {string}
         **/
        this.prefix = '$LoopBackSDK$';
        this.token.id = this.load('id');
        this.token.user = this.load('user');
        this.token.userId = this.load('userId');
        this.token.created = this.load('created');
        this.token.ttl = this.load('ttl');
        this.token.rememberMe = this.load('rememberMe');
    }
    /**
     * @method setRememberMe
     * @param {boolean} value Flag to remember credentials
     * @return {void}
     * @description
     * This method will set a flag in order to remember the current credentials
     **/
    LoopBackAuth.prototype.setRememberMe = function (value) {
        this.token.rememberMe = value;
    };
    /**
     * @method setUser
     * @param {any} user Any type of user model
     * @return {void}
     * @description
     * This method will update the user information and persist it if the
     * rememberMe flag is set.
     **/
    LoopBackAuth.prototype.setUser = function (user) {
        this.token.user = user;
        this.save();
    };
    /**
     * @method setToken
     * @param {SDKToken} token SDKToken or casted AccessToken instance
     * @return {void}
     * @description
     * This method will set a flag in order to remember the current credentials
     **/
    LoopBackAuth.prototype.setToken = function (token) {
        this.token = Object.assign({}, this.token, token);
        this.save();
    };
    /**
     * @method getToken
     * @return {void}
     * @description
     * This method will set a flag in order to remember the current credentials.
     **/
    LoopBackAuth.prototype.getToken = function () {
        return this.token;
    };
    /**
     * @method getAccessTokenId
     * @return {string}
     * @description
     * This method will return the actual token string, not the object instance.
     **/
    LoopBackAuth.prototype.getAccessTokenId = function () {
        return this.token.id;
    };
    /**
     * @method getCurrentUserId
     * @return {any}
     * @description
     * This method will return the current user id, it can be number or string.
     **/
    LoopBackAuth.prototype.getCurrentUserId = function () {
        return this.token.userId;
    };
    /**
     * @method getCurrentUserData
     * @return {any}
     * @description
     * This method will return the current user instance.
     **/
    LoopBackAuth.prototype.getCurrentUserData = function () {
        return (typeof this.token.user === 'string') ? JSON.parse(this.token.user) : this.token.user;
    };
    /**
     * @method save
     * @return {boolean} Whether or not the information was saved
     * @description
     * This method will save in either local storage or cookies the current credentials.
     * But only if rememberMe is enabled.
     **/
    LoopBackAuth.prototype.save = function () {
        var today = new Date();
        var expires = new Date(today.getTime() + (this.token.ttl * 1000));
        this.persist('id', this.token.id, expires);
        this.persist('user', this.token.user, expires);
        this.persist('userId', this.token.userId, expires);
        this.persist('created', this.token.created, expires);
        this.persist('ttl', this.token.ttl, expires);
        this.persist('rememberMe', this.token.rememberMe, expires);
        return true;
    };
    ;
    /**
     * @method load
     * @param {string} prop Property name
     * @return {any} Any information persisted in storage
     * @description
     * This method will load either from local storage or cookies the provided property.
     **/
    LoopBackAuth.prototype.load = function (prop) {
        return this.storage.get("" + this.prefix + prop);
    };
    /**
     * @method clear
     * @return {void}
     * @description
     * This method will clear cookies or the local storage.
     **/
    LoopBackAuth.prototype.clear = function () {
        var _this = this;
        Object.keys(this.token).forEach(function (prop) { return _this.storage.remove("" + _this.prefix + prop); });
        this.token = new __WEBPACK_IMPORTED_MODULE_2__models_BaseModels__["a" /* SDKToken */]();
    };
    /**
     * @method persist
     * @return {void}
     * @description
     * This method saves values to storage
     **/
    LoopBackAuth.prototype.persist = function (prop, value, expires) {
        try {
            this.storage.set("" + this.prefix + prop, (typeof value === 'object') ? JSON.stringify(value) : value, this.token.rememberMe ? expires : null);
        }
        catch (err) {
            console.error('Cannot access local/session storage:', err);
        }
    };
    LoopBackAuth = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__storage_storage_swaps__["a" /* InternalStorage */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__storage_storage_swaps__["a" /* InternalStorage */]])
    ], LoopBackAuth);
    return LoopBackAuth;
}());



/***/ }),

/***/ "../../../../../src/sdk/services/core/base.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BaseLoopBackApi; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__search_params__ = __webpack_require__("../../../../../src/sdk/services/core/search.params.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__error_service__ = __webpack_require__("../../../../../src/sdk/services/core/error.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__auth_service__ = __webpack_require__("../../../../../src/sdk/services/core/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__lb_config__ = __webpack_require__("../../../../../src/sdk/lb.config.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__custom_SDKModels__ = __webpack_require__("../../../../../src/sdk/services/custom/SDKModels.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_Subject__ = __webpack_require__("../../../../rxjs/_esm5/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__sockets_socket_connections__ = __webpack_require__("../../../../../src/sdk/sockets/socket.connections.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
/* tslint:disable */











/**
* @module BaseLoopBackApi
* @author Jonathan Casarrubias <@johncasarrubias> <github:jonathan-casarrubias>
* @author Nikolay Matiushenkov <https://github.com/mnvx>
* @license MIT
* @description
* Abstract class that will be implemented in every custom service automatically built
* by the sdk builder.
* It provides the core functionallity for every API call, either by HTTP Calls or by
* WebSockets.
**/
var BaseLoopBackApi = /** @class */ (function () {
    function BaseLoopBackApi(http, connection, models, auth, searchParams, errorHandler) {
        this.http = http;
        this.connection = connection;
        this.models = models;
        this.auth = auth;
        this.searchParams = searchParams;
        this.errorHandler = errorHandler;
        this.model = this.models.get(this.getModelName());
    }
    /**
     * @method request
     * @param {string}  method      Request method (GET, POST, PUT)
     * @param {string}  url         Request url (my-host/my-url/:id)
     * @param {any}     routeParams Values of url parameters
     * @param {any}     urlParams   Parameters for building url (filter and other)
     * @param {any}     postBody    Request postBody
     * @return {Observable<any>}
     * @description
     * This is a core method, every HTTP Call will be done from here, every API Service will
     * extend this class and use this method to get RESTful communication.
     **/
    BaseLoopBackApi.prototype.request = function (method, url, routeParams, urlParams, postBody, pubsub, customHeaders) {
        var _this = this;
        if (routeParams === void 0) { routeParams = {}; }
        if (urlParams === void 0) { urlParams = {}; }
        if (postBody === void 0) { postBody = {}; }
        if (pubsub === void 0) { pubsub = false; }
        // Transpile route variables to the actual request Values
        Object.keys(routeParams).forEach(function (key) {
            url = url.replace(new RegExp(":" + key + "(\/|$)", "g"), routeParams[key] + "$1");
        });
        if (pubsub) {
            if (url.match(/fk/)) {
                var arr = url.split('/');
                arr.pop();
                url = arr.join('/');
            }
            var event_1 = ("[" + method + "]" + url).replace(/\?/, '');
            var subject_1 = new __WEBPACK_IMPORTED_MODULE_7_rxjs_Subject__["a" /* Subject */]();
            this.connection.on(event_1, function (res) { return subject_1.next(res); });
            return subject_1.asObservable();
        }
        else {
            // Headers to be sent
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            headers.append('Content-Type', 'application/json');
            // headers.append('withCredentials', 'true');
            /*headers.append('Access-Control-Allow-Methods', 'DELETE, HEAD, GET, OPTIONS, POST, PUT');
            headers.append('Access-Control-Allow-Headers', 'Content-Type, Content-Range, Content-Disposition, Content-Description');*/
            // Authenticate request
            //this.authenticate(url, headers);
            // Body fix for built in remote methods using "data", "options" or "credentials
            // that are the actual body, Custom remote method properties are different and need
            // to be wrapped into a body object
            var body = void 0;
            var postBodyKeys = typeof postBody === 'object' ? Object.keys(postBody) : [];
            if (postBodyKeys.length === 1) {
                body = postBody[postBodyKeys.shift()];
            }
            else {
                body = postBody;
            }
            var filter = '';
            // Separate filter object from url params and add to search query
            if (urlParams.filter) {
                if (__WEBPACK_IMPORTED_MODULE_5__lb_config__["a" /* LoopBackConfig */].isHeadersFilteringSet()) {
                    headers.append('filter', JSON.stringify(urlParams.filter));
                }
                else {
                    filter = "?filter=" + encodeURIComponent(JSON.stringify(urlParams.filter));
                }
                delete urlParams.filter;
            }
            // Separate where object from url params and add to search query
            /**
            CODE BELOW WILL GENERATE THE FOLLOWING ISSUES:
            - https://github.com/mean-expert-official/loopback-sdk-builder/issues/356
            - https://github.com/mean-expert-official/loopback-sdk-builder/issues/328
            if (urlParams.where) {
              headers.append('where', JSON.stringify(urlParams.where));
              delete urlParams.where;
            }
            **/
            if (typeof customHeaders === 'function') {
                headers = customHeaders(headers);
            }
            this.searchParams.setJSON(urlParams);
            var request = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Request */](new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({
                headers: headers,
                method: method,
                url: "" + url + filter,
                search: Object.keys(urlParams).length > 0 ? this.searchParams.getURLSearchParams() : null,
                body: body ? JSON.stringify(body) : undefined,
                withCredentials: __WEBPACK_IMPORTED_MODULE_5__lb_config__["a" /* LoopBackConfig */].getRequestOptionsCredentials()
            }));
            return this.http.request(request)
                .map(function (res) { return (res.text() != "" ? res.json() : {}); })
                .catch(function (e) { return _this.errorHandler.handleError(e); });
        }
    };
    /**
     * @method authenticate
     * @author Jonathan Casarrubias <t: johncasarrubias, gh: mean-expert-official>
     * @license MIT
     * @param {string} url Server URL
     * @param {Headers} headers HTTP Headers
     * @return {void}
     * @description
     * This method will try to authenticate using either an access_token or basic http auth
     */
    BaseLoopBackApi.prototype.authenticate = function (url, headers) {
        if (this.auth.getAccessTokenId()) {
            headers.append('Authorization', __WEBPACK_IMPORTED_MODULE_5__lb_config__["a" /* LoopBackConfig */].getAuthPrefix() + this.auth.getAccessTokenId());
        }
    };
    /**
     * @method create
     * @author Jonathan Casarrubias <t: johncasarrubias, gh: mean-expert-official>
     * @license MIT
     * @param {T} data Generic data type
     * @return {Observable<T>}
     * @description
     * Generic create method
     */
    BaseLoopBackApi.prototype.create = function (data, customHeaders) {
        var _this = this;
        return this.request('POST', [
            __WEBPACK_IMPORTED_MODULE_5__lb_config__["a" /* LoopBackConfig */].getPath(),
            __WEBPACK_IMPORTED_MODULE_5__lb_config__["a" /* LoopBackConfig */].getApiVersion(),
            this.model.getModelDefinition().path
        ].join('/'), undefined, undefined, { data: data }, null, customHeaders).map(function (data) { return _this.model.factory(data); });
    };
    /**
     * @method onCreate
     * @author Jonathan Casarrubias <t: johncasarrubias, gh: mean-expert-official>
     * @license MIT
     * @param {T[]} data Generic data type array
     * @return {Observable<T[]>}
     * @description
     * Generic pubsub oncreate many method
     */
    BaseLoopBackApi.prototype.onCreate = function (data) {
        var _this = this;
        return this.request('POST', [
            __WEBPACK_IMPORTED_MODULE_5__lb_config__["a" /* LoopBackConfig */].getPath(),
            __WEBPACK_IMPORTED_MODULE_5__lb_config__["a" /* LoopBackConfig */].getApiVersion(),
            this.model.getModelDefinition().path
        ].join('/'), undefined, undefined, { data: data }, true)
            .map(function (datum) { return datum.map(function (data) { return _this.model.factory(data); }); });
    };
    /**
     * @method createMany
     * @author Jonathan Casarrubias <t: johncasarrubias, gh: mean-expert-official>
     * @license MIT
     * @param {T[]} data Generic data type array
     * @return {Observable<T[]>}
     * @description
     * Generic create many method
     */
    BaseLoopBackApi.prototype.createMany = function (data, customHeaders) {
        var _this = this;
        return this.request('POST', [
            __WEBPACK_IMPORTED_MODULE_5__lb_config__["a" /* LoopBackConfig */].getPath(),
            __WEBPACK_IMPORTED_MODULE_5__lb_config__["a" /* LoopBackConfig */].getApiVersion(),
            this.model.getModelDefinition().path
        ].join('/'), undefined, undefined, { data: data }, null, customHeaders)
            .map(function (datum) { return datum.map(function (data) { return _this.model.factory(data); }); });
    };
    /**
     * @method onCreateMany
     * @author Jonathan Casarrubias <t: johncasarrubias, gh: mean-expert-official>
     * @license MIT
     * @param {T[]} data Generic data type array
     * @return {Observable<T[]>}
     * @description
     * Generic create many method
     */
    BaseLoopBackApi.prototype.onCreateMany = function (data) {
        var _this = this;
        return this.request('POST', [
            __WEBPACK_IMPORTED_MODULE_5__lb_config__["a" /* LoopBackConfig */].getPath(),
            __WEBPACK_IMPORTED_MODULE_5__lb_config__["a" /* LoopBackConfig */].getApiVersion(),
            this.model.getModelDefinition().path
        ].join('/'), undefined, undefined, { data: data }, true)
            .map(function (datum) { return datum.map(function (data) { return _this.model.factory(data); }); });
    };
    /**
     * @method findById
     * @author Jonathan Casarrubias <t: johncasarrubias, gh: mean-expert-official>
     * @license MIT
     * @param {any} data Generic data type
     * @return {Observable<T>}
     * @description
     * Generic findById method
     */
    BaseLoopBackApi.prototype.findById = function (id, filter, customHeaders) {
        var _this = this;
        if (filter === void 0) { filter = {}; }
        var _urlParams = {};
        if (filter)
            _urlParams.filter = filter;
        return this.request('GET', [
            __WEBPACK_IMPORTED_MODULE_5__lb_config__["a" /* LoopBackConfig */].getPath(),
            __WEBPACK_IMPORTED_MODULE_5__lb_config__["a" /* LoopBackConfig */].getApiVersion(),
            this.model.getModelDefinition().path,
            ':id'
        ].join('/'), { id: id }, _urlParams, undefined, null, customHeaders)
            .map(function (data) { return _this.model.factory(data); });
    };
    /**
     * @method find
     * @author Jonathan Casarrubias <t: johncasarrubias, gh: mean-expert-official>
     * @license MIT
     * @return {Observable<T[+>}
     * @description
     * Generic find method
     */
    BaseLoopBackApi.prototype.find = function (filter, customHeaders) {
        var _this = this;
        if (filter === void 0) { filter = {}; }
        return this.request('GET', [
            __WEBPACK_IMPORTED_MODULE_5__lb_config__["a" /* LoopBackConfig */].getPath(),
            __WEBPACK_IMPORTED_MODULE_5__lb_config__["a" /* LoopBackConfig */].getApiVersion(),
            this.model.getModelDefinition().path
        ].join('/'), undefined, { filter: filter }, undefined, null, customHeaders)
            .map(function (datum) { return datum.map(function (data) { return _this.model.factory(data); }); });
    };
    /**
     * @method exists
     * @author Jonathan Casarrubias <t: johncasarrubias, gh: mean-expert-official>
     * @license MIT
     * @return {Observable<T[]>}
     * @description
     * Generic exists method
     */
    BaseLoopBackApi.prototype.exists = function (id, customHeaders) {
        return this.request('GET', [
            __WEBPACK_IMPORTED_MODULE_5__lb_config__["a" /* LoopBackConfig */].getPath(),
            __WEBPACK_IMPORTED_MODULE_5__lb_config__["a" /* LoopBackConfig */].getApiVersion(),
            this.model.getModelDefinition().path,
            ':id/exists'
        ].join('/'), { id: id }, undefined, undefined, null, customHeaders);
    };
    /**
     * @method findOne
     * @author Jonathan Casarrubias <t: johncasarrubias, gh: mean-expert-official>
     * @license MIT
     * @return {Observable<T>}
     * @description
     * Generic findOne method
     */
    BaseLoopBackApi.prototype.findOne = function (filter, customHeaders) {
        var _this = this;
        if (filter === void 0) { filter = {}; }
        return this.request('GET', [
            __WEBPACK_IMPORTED_MODULE_5__lb_config__["a" /* LoopBackConfig */].getPath(),
            __WEBPACK_IMPORTED_MODULE_5__lb_config__["a" /* LoopBackConfig */].getApiVersion(),
            this.model.getModelDefinition().path,
            'findOne'
        ].join('/'), undefined, { filter: filter }, undefined, null, customHeaders)
            .map(function (data) { return _this.model.factory(data); });
    };
    /**
     * @method updateAll
     * @author Jonathan Casarrubias <t: johncasarrubias, gh: mean-expert-official>
     * @license MIT
     * @return {Observable<T[]>}
     * @description
     * Generic updateAll method
     */
    BaseLoopBackApi.prototype.updateAll = function (where, data, customHeaders) {
        if (where === void 0) { where = {}; }
        var _urlParams = {};
        if (where)
            _urlParams.where = where;
        return this.request('POST', [
            __WEBPACK_IMPORTED_MODULE_5__lb_config__["a" /* LoopBackConfig */].getPath(),
            __WEBPACK_IMPORTED_MODULE_5__lb_config__["a" /* LoopBackConfig */].getApiVersion(),
            this.model.getModelDefinition().path,
            'update'
        ].join('/'), undefined, _urlParams, { data: data }, null, customHeaders);
    };
    /**
     * @method onUpdateAll
     * @author Jonathan Casarrubias <t: johncasarrubias, gh: mean-expert-official>
     * @license MIT
     * @return {Observable<T[]>}
     * @description
     * Generic pubsub onUpdateAll method
     */
    BaseLoopBackApi.prototype.onUpdateAll = function (where, data) {
        if (where === void 0) { where = {}; }
        var _urlParams = {};
        if (where)
            _urlParams.where = where;
        return this.request('POST', [
            __WEBPACK_IMPORTED_MODULE_5__lb_config__["a" /* LoopBackConfig */].getPath(),
            __WEBPACK_IMPORTED_MODULE_5__lb_config__["a" /* LoopBackConfig */].getApiVersion(),
            this.model.getModelDefinition().path,
            'update'
        ].join('/'), undefined, _urlParams, { data: data }, true);
    };
    /**
     * @method deleteById
     * @author Jonathan Casarrubias <t: johncasarrubias, gh: mean-expert-official>
     * @license MIT
     * @return {Observable<T>}
     * @description
     * Generic deleteById method
     */
    BaseLoopBackApi.prototype.deleteById = function (id, customHeaders) {
        var _this = this;
        return this.request('DELETE', [
            __WEBPACK_IMPORTED_MODULE_5__lb_config__["a" /* LoopBackConfig */].getPath(),
            __WEBPACK_IMPORTED_MODULE_5__lb_config__["a" /* LoopBackConfig */].getApiVersion(),
            this.model.getModelDefinition().path,
            ':id'
        ].join('/'), { id: id }, undefined, undefined, null, customHeaders)
            .map(function (data) { return _this.model.factory(data); });
    };
    /**
     * @method onDeleteById
     * @author Jonathan Casarrubias <t: johncasarrubias, gh: mean-expert-official>
     * @license MIT
     * @return {Observable<T>}
     * @description
     * Generic pubsub onDeleteById method
     */
    BaseLoopBackApi.prototype.onDeleteById = function (id) {
        var _this = this;
        return this.request('DELETE', [
            __WEBPACK_IMPORTED_MODULE_5__lb_config__["a" /* LoopBackConfig */].getPath(),
            __WEBPACK_IMPORTED_MODULE_5__lb_config__["a" /* LoopBackConfig */].getApiVersion(),
            this.model.getModelDefinition().path,
            ':id'
        ].join('/'), { id: id }, undefined, undefined, true).map(function (data) { return _this.model.factory(data); });
    };
    /**
     * @method count
     * @author Jonathan Casarrubias <t: johncasarrubias, gh: mean-expert-official>
     * @license MIT
     * @return {Observable<{ count: number }>}
     * @description
     * Generic count method
     */
    BaseLoopBackApi.prototype.count = function (where, customHeaders) {
        if (where === void 0) { where = {}; }
        var _urlParams = {};
        if (where)
            _urlParams.where = where;
        return this.request('GET', [
            __WEBPACK_IMPORTED_MODULE_5__lb_config__["a" /* LoopBackConfig */].getPath(),
            __WEBPACK_IMPORTED_MODULE_5__lb_config__["a" /* LoopBackConfig */].getApiVersion(),
            this.model.getModelDefinition().path,
            'count'
        ].join('/'), undefined, _urlParams, undefined, null, customHeaders);
    };
    /**
     * @method updateAttributes
     * @author Jonathan Casarrubias <t: johncasarrubias, gh: mean-expert-official>
     * @license MIT
     * @return {Observable<T>}
     * @description
     * Generic updateAttributes method
     */
    BaseLoopBackApi.prototype.updateAttributes = function (id, data, customHeaders) {
        var _this = this;
        return this.request('PUT', [
            __WEBPACK_IMPORTED_MODULE_5__lb_config__["a" /* LoopBackConfig */].getPath(),
            __WEBPACK_IMPORTED_MODULE_5__lb_config__["a" /* LoopBackConfig */].getApiVersion(),
            this.model.getModelDefinition().path,
            ':id'
        ].join('/'), { id: id }, undefined, { data: data }, null, customHeaders)
            .map(function (data) { return _this.model.factory(data); });
    };
    /**
     * @method onUpdateAttributes
     * @author Jonathan Casarrubias <t: johncasarrubias, gh: mean-expert-official>
     * @license MIT
     * @return {Observable<T>}
     * @description
     * Generic onUpdateAttributes method
     */
    BaseLoopBackApi.prototype.onUpdateAttributes = function (id, data) {
        var _this = this;
        return this.request('PUT', [
            __WEBPACK_IMPORTED_MODULE_5__lb_config__["a" /* LoopBackConfig */].getPath(),
            __WEBPACK_IMPORTED_MODULE_5__lb_config__["a" /* LoopBackConfig */].getApiVersion(),
            this.model.getModelDefinition().path,
            ':id'
        ].join('/'), { id: id }, undefined, { data: data }, true).map(function (data) { return _this.model.factory(data); });
    };
    /**
     * @method upsert
     * @author Jonathan Casarrubias <t: johncasarrubias, gh: mean-expert-official>
     * @license MIT
     * @return {Observable<T>}
     * @description
     * Generic upsert method
     */
    BaseLoopBackApi.prototype.upsert = function (data, customHeaders) {
        var _this = this;
        if (data === void 0) { data = {}; }
        return this.request('PUT', [
            __WEBPACK_IMPORTED_MODULE_5__lb_config__["a" /* LoopBackConfig */].getPath(),
            __WEBPACK_IMPORTED_MODULE_5__lb_config__["a" /* LoopBackConfig */].getApiVersion(),
            this.model.getModelDefinition().path,
        ].join('/'), undefined, undefined, { data: data }, null, customHeaders)
            .map(function (data) { return _this.model.factory(data); });
    };
    /**
     * @method onUpsert
     * @author Jonathan Casarrubias <t: johncasarrubias, gh: mean-expert-official>
     * @license MIT
     * @return {Observable<T>}
     * @description
     * Generic pubsub onUpsert method
     */
    BaseLoopBackApi.prototype.onUpsert = function (data) {
        var _this = this;
        if (data === void 0) { data = {}; }
        return this.request('PUT', [
            __WEBPACK_IMPORTED_MODULE_5__lb_config__["a" /* LoopBackConfig */].getPath(),
            __WEBPACK_IMPORTED_MODULE_5__lb_config__["a" /* LoopBackConfig */].getApiVersion(),
            this.model.getModelDefinition().path,
        ].join('/'), undefined, undefined, { data: data }, true).map(function (data) { return _this.model.factory(data); });
    };
    /**
     * @method upsertPatch
     * @author Jonathan Casarrubias <t: johncasarrubias, gh: mean-expert-official>
     * @license MIT
     * @return {Observable<T>}
     * @description
     * Generic upsert method using patch http method
     */
    BaseLoopBackApi.prototype.upsertPatch = function (data, customHeaders) {
        var _this = this;
        if (data === void 0) { data = {}; }
        return this.request('PATCH', [
            __WEBPACK_IMPORTED_MODULE_5__lb_config__["a" /* LoopBackConfig */].getPath(),
            __WEBPACK_IMPORTED_MODULE_5__lb_config__["a" /* LoopBackConfig */].getApiVersion(),
            this.model.getModelDefinition().path,
        ].join('/'), undefined, undefined, { data: data }, null, customHeaders)
            .map(function (data) { return _this.model.factory(data); });
    };
    /**
     * @method onUpsertPatch
     * @author Jonathan Casarrubias <t: johncasarrubias, gh: mean-expert-official>
     * @license MIT
     * @return {Observable<T>}
     * @description
     * Generic pubsub onUpsertPatch method using patch http method
     */
    BaseLoopBackApi.prototype.onUpsertPatch = function (data) {
        var _this = this;
        if (data === void 0) { data = {}; }
        return this.request('PATCH', [
            __WEBPACK_IMPORTED_MODULE_5__lb_config__["a" /* LoopBackConfig */].getPath(),
            __WEBPACK_IMPORTED_MODULE_5__lb_config__["a" /* LoopBackConfig */].getApiVersion(),
            this.model.getModelDefinition().path,
        ].join('/'), undefined, undefined, { data: data }, true).map(function (data) { return _this.model.factory(data); });
    };
    /**
     * @method upsertWithWhere
     * @author Jonathan Casarrubias <t: johncasarrubias, gh: mean-expert-official>
     * @license MIT
     * @return {Observable<T>}
     * @description
     * Generic upsertWithWhere method
     */
    BaseLoopBackApi.prototype.upsertWithWhere = function (where, data, customHeaders) {
        var _this = this;
        if (where === void 0) { where = {}; }
        if (data === void 0) { data = {}; }
        var _urlParams = {};
        if (where)
            _urlParams.where = where;
        return this.request('POST', [
            __WEBPACK_IMPORTED_MODULE_5__lb_config__["a" /* LoopBackConfig */].getPath(),
            __WEBPACK_IMPORTED_MODULE_5__lb_config__["a" /* LoopBackConfig */].getApiVersion(),
            this.model.getModelDefinition().path,
            'upsertWithWhere'
        ].join('/'), undefined, _urlParams, { data: data }, null, customHeaders)
            .map(function (data) { return _this.model.factory(data); });
    };
    /**
     * @method onUpsertWithWhere
     * @author Jonathan Casarrubias <t: johncasarrubias, gh: mean-expert-official>
     * @license MIT
     * @return {Observable<T>}
     * @description
     * Generic pubsub onUpsertWithWhere method
     */
    BaseLoopBackApi.prototype.onUpsertWithWhere = function (where, data) {
        var _this = this;
        if (where === void 0) { where = {}; }
        if (data === void 0) { data = {}; }
        var _urlParams = {};
        if (where)
            _urlParams.where = where;
        return this.request('POST', [
            __WEBPACK_IMPORTED_MODULE_5__lb_config__["a" /* LoopBackConfig */].getPath(),
            __WEBPACK_IMPORTED_MODULE_5__lb_config__["a" /* LoopBackConfig */].getApiVersion(),
            this.model.getModelDefinition().path,
            'upsertWithWhere'
        ].join('/'), undefined, _urlParams, { data: data }, true).map(function (data) { return _this.model.factory(data); });
    };
    /**
     * @method replaceOrCreate
     * @author Jonathan Casarrubias <t: johncasarrubias, gh: mean-expert-official>
     * @license MIT
     * @return {Observable<T>}
     * @description
     * Generic replaceOrCreate method
     */
    BaseLoopBackApi.prototype.replaceOrCreate = function (data, customHeaders) {
        var _this = this;
        if (data === void 0) { data = {}; }
        return this.request('POST', [
            __WEBPACK_IMPORTED_MODULE_5__lb_config__["a" /* LoopBackConfig */].getPath(),
            __WEBPACK_IMPORTED_MODULE_5__lb_config__["a" /* LoopBackConfig */].getApiVersion(),
            this.model.getModelDefinition().path,
            'replaceOrCreate'
        ].join('/'), undefined, undefined, { data: data }, null, customHeaders)
            .map(function (data) { return _this.model.factory(data); });
    };
    /**
     * @method onReplaceOrCreate
     * @author Jonathan Casarrubias <t: johncasarrubias, gh: mean-expert-official>
     * @license MIT
     * @return {Observable<T>}
     * @description
     * Generic onReplaceOrCreate method
     */
    BaseLoopBackApi.prototype.onReplaceOrCreate = function (data) {
        var _this = this;
        if (data === void 0) { data = {}; }
        return this.request('POST', [
            __WEBPACK_IMPORTED_MODULE_5__lb_config__["a" /* LoopBackConfig */].getPath(),
            __WEBPACK_IMPORTED_MODULE_5__lb_config__["a" /* LoopBackConfig */].getApiVersion(),
            this.model.getModelDefinition().path,
            'replaceOrCreate'
        ].join('/'), undefined, undefined, { data: data }, true).map(function (data) { return _this.model.factory(data); });
    };
    /**
     * @method replaceById
     * @author Jonathan Casarrubias <t: johncasarrubias, gh: mean-expert-official>
     * @license MIT
     * @return {Observable<T>}
     * @description
     * Generic replaceById method
     */
    BaseLoopBackApi.prototype.replaceById = function (id, data, customHeaders) {
        var _this = this;
        if (data === void 0) { data = {}; }
        return this.request('POST', [
            __WEBPACK_IMPORTED_MODULE_5__lb_config__["a" /* LoopBackConfig */].getPath(),
            __WEBPACK_IMPORTED_MODULE_5__lb_config__["a" /* LoopBackConfig */].getApiVersion(),
            this.model.getModelDefinition().path,
            ':id', 'replace'
        ].join('/'), { id: id }, undefined, { data: data }, null, customHeaders)
            .map(function (data) { return _this.model.factory(data); });
    };
    /**
     * @method onReplaceById
     * @author Jonathan Casarrubias <t: johncasarrubias, gh: mean-expert-official>
     * @license MIT
     * @return {Observable<T>}
     * @description
     * Generic onReplaceById method
     */
    BaseLoopBackApi.prototype.onReplaceById = function (id, data) {
        var _this = this;
        if (data === void 0) { data = {}; }
        return this.request('POST', [
            __WEBPACK_IMPORTED_MODULE_5__lb_config__["a" /* LoopBackConfig */].getPath(),
            __WEBPACK_IMPORTED_MODULE_5__lb_config__["a" /* LoopBackConfig */].getApiVersion(),
            this.model.getModelDefinition().path,
            ':id', 'replace'
        ].join('/'), { id: id }, undefined, { data: data }, true).map(function (data) { return _this.model.factory(data); });
    };
    /**
     * @method createChangeStream
     * @author Jonathan Casarrubias <t: johncasarrubias, gh: mean-expert-official>
     * @license MIT
     * @return {Observable<any>}
     * @description
     * Generic createChangeStream method
     */
    BaseLoopBackApi.prototype.createChangeStream = function () {
        var subject = new __WEBPACK_IMPORTED_MODULE_7_rxjs_Subject__["a" /* Subject */]();
        if (typeof EventSource !== 'undefined') {
            var emit = function (msg) { return subject.next(JSON.parse(msg.data)); };
            var source = new EventSource([
                __WEBPACK_IMPORTED_MODULE_5__lb_config__["a" /* LoopBackConfig */].getPath(),
                __WEBPACK_IMPORTED_MODULE_5__lb_config__["a" /* LoopBackConfig */].getApiVersion(),
                this.model.getModelDefinition().path,
                'change-stream'
            ].join('/'));
            source.addEventListener('data', emit);
            source.onerror = emit;
        }
        else {
            console.warn('SDK Builder: EventSource is not supported');
        }
        return subject.asObservable();
    };
    BaseLoopBackApi = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */])),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Inject */])(__WEBPACK_IMPORTED_MODULE_10__sockets_socket_connections__["a" /* SocketConnection */])),
        __param(2, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Inject */])(__WEBPACK_IMPORTED_MODULE_6__custom_SDKModels__["a" /* SDKModels */])),
        __param(3, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Inject */])(__WEBPACK_IMPORTED_MODULE_4__auth_service__["a" /* LoopBackAuth */])),
        __param(4, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Inject */])(__WEBPACK_IMPORTED_MODULE_2__search_params__["a" /* JSONSearchParams */])),
        __param(5, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Optional */])()), __param(5, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Inject */])(__WEBPACK_IMPORTED_MODULE_3__error_service__["a" /* ErrorHandler */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_10__sockets_socket_connections__["a" /* SocketConnection */],
            __WEBPACK_IMPORTED_MODULE_6__custom_SDKModels__["a" /* SDKModels */],
            __WEBPACK_IMPORTED_MODULE_4__auth_service__["a" /* LoopBackAuth */],
            __WEBPACK_IMPORTED_MODULE_2__search_params__["a" /* JSONSearchParams */],
            __WEBPACK_IMPORTED_MODULE_3__error_service__["a" /* ErrorHandler */]])
    ], BaseLoopBackApi);
    return BaseLoopBackApi;
}());



/***/ }),

/***/ "../../../../../src/sdk/services/core/error.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ErrorHandler; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_throw__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/throw.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/* tslint:disable */


//import { ErrorObservable } from 'rxjs/observable/ErrorObservable';

/**
 * Default error handler
 */
var ErrorHandler = /** @class */ (function () {
    function ErrorHandler() {
    }
    // ErrorObservable when rxjs version < rc.5
    // ErrorObservable<string> when rxjs version = rc.5
    // I'm leaving any for now to avoid breaking apps using both versions
    ErrorHandler.prototype.handleError = function (error) {
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["a" /* Observable */].throw(error.json().error || 'Server error');
    };
    ErrorHandler = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])()
    ], ErrorHandler);
    return ErrorHandler;
}());



/***/ }),

/***/ "../../../../../src/sdk/services/core/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__auth_service__ = __webpack_require__("../../../../../src/sdk/services/core/auth.service.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__error_service__ = __webpack_require__("../../../../../src/sdk/services/core/error.service.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__search_params__ = __webpack_require__("../../../../../src/sdk/services/core/search.params.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__base_service__ = __webpack_require__("../../../../../src/sdk/services/core/base.service.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__real_time__ = __webpack_require__("../../../../../src/sdk/services/core/real.time.ts");
/* unused harmony namespace reexport */
/* tslint:disable */







/***/ }),

/***/ "../../../../../src/sdk/services/core/io.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IO; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Subject__ = __webpack_require__("../../../../rxjs/_esm5/Subject.js");
/* tslint:disable */

var IO = /** @class */ (function () {
    function IO(socket) {
        this.observables = {};
        this.socket = socket;
    }
    IO.prototype.emit = function (event, data) {
        this.socket.emit('ME:RT:1://event', {
            event: event,
            data: data
        });
    };
    IO.prototype.on = function (event) {
        if (this.observables[event]) {
            return this.observables[event];
        }
        var subject = new __WEBPACK_IMPORTED_MODULE_0_rxjs_Subject__["a" /* Subject */]();
        this.socket.on(event, function (res) { return subject.next(res); });
        this.observables[event] = subject.asObservable();
        return this.observables[event];
    };
    return IO;
}());



/***/ }),

/***/ "../../../../../src/sdk/services/core/real.time.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RealTime; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_share__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/share.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__io_service__ = __webpack_require__("../../../../../src/sdk/services/core/io.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__auth_service__ = __webpack_require__("../../../../../src/sdk/services/core/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_FireLoop__ = __webpack_require__("../../../../../src/sdk/models/FireLoop.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__sockets_socket_connections__ = __webpack_require__("../../../../../src/sdk/sockets/socket.connections.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__custom_SDKModels__ = __webpack_require__("../../../../../src/sdk/services/custom/SDKModels.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_Subject__ = __webpack_require__("../../../../rxjs/_esm5/Subject.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
/* tslint:disable */









/**
* @author Jonathan Casarrubias <twitter:@johncasarrubias> <github:@johncasarrubias>
* @module RealTime
* @license MIT
* @description
* This module is a real-time interface for using socket connections, its main purpose
* is to make sure that when there is a valid connection, it will create instances
* of the different real-time functionalities like FireLoop, PubSub and IO.
**/
var RealTime = /** @class */ (function () {
    /**
    * @method constructor
    * @param {SocketConnection} connection WebSocket connection service
    * @param {SDKModels} models Model provider service
    * @param {LoopBackAuth} auth LoopBack authentication service
    * @description
    * It will intialize the shared on ready communication channel.
    **/
    function RealTime(connection, models, auth) {
        this.connection = connection;
        this.models = models;
        this.auth = auth;
        this.connecting = false;
        this.onReadySubject = new __WEBPACK_IMPORTED_MODULE_7_rxjs_Subject__["a" /* Subject */]();
        this.sharedOnReady = this.onReadySubject.asObservable().share();
        this.sharedOnReady.subscribe();
    }
    /**
    * @method onDisconnect
    * @return {Observable<any>}
    * @description
    * Will trigger when Real-Time Service is disconnected from server.
    **/
    RealTime.prototype.onDisconnect = function () {
        return this.connection.sharedObservables.sharedOnDisconnect;
    };
    /**
    * @method onAuthenticated
    * @return {Observable<any>}
    * @description
    * Will trigger when Real-Time Service is authenticated with the server.
    **/
    RealTime.prototype.onAuthenticated = function () {
        return this.connection.sharedObservables.sharedOnAuthenticated;
    };
    /**
    * @method onUnAuthorized
    * @return {Observable<any>}
    * @description
    * Will trigger when Real-Time Service is not authorized to connect with the server.
    **/
    RealTime.prototype.onUnAuthorized = function () {
        return this.connection.sharedObservables.sharedOnUnAuthorized;
    };
    /**
    * @method onReady
    * @return {Observable<any>}
    * @description
    * Will trigger when Real-Time Service is Ready for broadcasting.
    * and will register connection flow events to notify subscribers.
    **/
    RealTime.prototype.onReady = function () {
        var _this = this;
        // If there is a valid connection, then we just send back to the EventLoop
        // Or next will be executed before the actual subscription.
        if (this.connection.isConnected()) {
            var to_1 = setTimeout(function () {
                _this.onReadySubject.next('shared-connection');
                clearTimeout(to_1);
            });
            // Else if there is a current attempt of connection we wait for the prior
            // process that started the connection flow.
        }
        else if (this.connecting) {
            var ti_1 = setInterval(function () {
                if (_this.connection.isConnected()) {
                    _this.onReadySubject.next('shared-connection');
                    clearInterval(ti_1);
                }
            }, 500);
            // If there is not valid connection or attempt, then we start the connection flow
            // and make sure we notify all the onReady subscribers when done.
            // Also it will listen for desconnections so we unsubscribe and avoid both:
            // Memory leaks and duplicated triggered events.
        }
        else {
            this.connecting = true;
            this.connection.connect(this.auth.getToken());
            this.IO = new __WEBPACK_IMPORTED_MODULE_2__io_service__["a" /* IO */](this.connection);
            this.FireLoop = new __WEBPACK_IMPORTED_MODULE_4__models_FireLoop__["a" /* FireLoop */](this.connection, this.models);
            // Fire event for those subscribed 
            var s1_1 = this.connection.sharedObservables.sharedOnConnect.subscribe(function () {
                console.log('Real-Time connection has been established');
                _this.connecting = false;
                _this.onReadySubject.next('connected');
                var s2 = _this.connection.sharedObservables.sharedOnDisconnect.subscribe(function () {
                    s1_1.unsubscribe();
                    s2.unsubscribe();
                });
            });
        }
        return this.sharedOnReady;
    };
    RealTime = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["z" /* Inject */])(__WEBPACK_IMPORTED_MODULE_5__sockets_socket_connections__["a" /* SocketConnection */])),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["z" /* Inject */])(__WEBPACK_IMPORTED_MODULE_6__custom_SDKModels__["a" /* SDKModels */])),
        __param(2, Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["z" /* Inject */])(__WEBPACK_IMPORTED_MODULE_3__auth_service__["a" /* LoopBackAuth */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__sockets_socket_connections__["a" /* SocketConnection */],
            __WEBPACK_IMPORTED_MODULE_6__custom_SDKModels__["a" /* SDKModels */],
            __WEBPACK_IMPORTED_MODULE_3__auth_service__["a" /* LoopBackAuth */]])
    ], RealTime);
    return RealTime;
}());



/***/ }),

/***/ "../../../../../src/sdk/services/core/search.params.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JSONSearchParams; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/* tslint:disable */


/**
* @author Jonathan Casarrubias <twitter:@johncasarrubias> <github:@mean-expert-official>
* @module JSONSearchParams
* @license MIT
* @description
* JSON Parser and Wrapper for the Angular2 URLSearchParams
* This module correctly encodes a json object into a query string and then creates
* an instance of the URLSearchParams component for later use in HTTP Calls
**/
var JSONSearchParams = /** @class */ (function () {
    function JSONSearchParams() {
    }
    JSONSearchParams.prototype.setJSON = function (obj) {
        this._usp = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["f" /* URLSearchParams */](this._JSON2URL(obj, false));
    };
    JSONSearchParams.prototype.getURLSearchParams = function () {
        return this._usp;
    };
    JSONSearchParams.prototype._JSON2URL = function (obj, parent) {
        var parts = [];
        for (var key in obj)
            parts.push(this._parseParam(key, obj[key], parent));
        return parts.join('&');
    };
    JSONSearchParams.prototype._parseParam = function (key, value, parent) {
        var processedKey = parent ? parent + '[' + key + ']' : key;
        if (value && ((typeof value) === 'object' || Array.isArray(value))) {
            return this._JSON2URL(value, processedKey);
        }
        return processedKey + '=' + value;
    };
    JSONSearchParams = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])()
    ], JSONSearchParams);
    return JSONSearchParams;
}());



/***/ }),

/***/ "../../../../../src/sdk/services/custom/AccessToken.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccessTokenApi; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__SDKModels__ = __webpack_require__("../../../../../src/sdk/services/custom/SDKModels.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_base_service__ = __webpack_require__("../../../../../src/sdk/services/core/base.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__lb_config__ = __webpack_require__("../../../../../src/sdk/lb.config.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__core_auth_service__ = __webpack_require__("../../../../../src/sdk/services/core/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__core_search_params__ = __webpack_require__("../../../../../src/sdk/services/core/search.params.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__core_error_service__ = __webpack_require__("../../../../../src/sdk/services/core/error.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__sockets_socket_connections__ = __webpack_require__("../../../../../src/sdk/sockets/socket.connections.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
/* tslint:disable */









/**
 * Api services for the `AccessToken` model.
 */
var AccessTokenApi = /** @class */ (function (_super) {
    __extends(AccessTokenApi, _super);
    function AccessTokenApi(http, connection, models, auth, searchParams, errorHandler) {
        var _this = _super.call(this, http, connection, models, auth, searchParams, errorHandler) || this;
        _this.http = http;
        _this.connection = connection;
        _this.models = models;
        _this.auth = auth;
        _this.searchParams = searchParams;
        _this.errorHandler = errorHandler;
        return _this;
    }
    /**
     * Fetches belongsTo relation user.
     *
     * @param {any} id AccessToken id
     *
     * @param {boolean} refresh
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `AccessToken` object.)
     * </em>
     */
    AccessTokenApi.prototype.getUser = function (id, refresh, customHeaders) {
        if (refresh === void 0) { refresh = {}; }
        var _method = "GET";
        var _url = __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath() + "/" + __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion() +
            "/AccessTokens/:id/user";
        var _routeParams = {
            id: id
        };
        var _postBody = {};
        var _urlParams = {};
        if (typeof refresh !== 'undefined' && refresh !== null)
            _urlParams.refresh = refresh;
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Patch an existing model instance or insert a new one into the data source.
     *
     * @param {object} data Request data.
     *
     *  - `data` – `{object}` - Model instance data
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `AccessToken` object.)
     * </em>
     */
    AccessTokenApi.prototype.patchOrCreate = function (data, customHeaders) {
        if (data === void 0) { data = {}; }
        var _method = "PATCH";
        var _url = __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath() + "/" + __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion() +
            "/AccessTokens";
        var _routeParams = {};
        var _postBody = {
            data: data
        };
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Patch attributes for a model instance and persist it into the data source.
     *
     * @param {any} id AccessToken id
     *
     * @param {object} data Request data.
     *
     *  - `data` – `{object}` - An object of model property name/value pairs
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `AccessToken` object.)
     * </em>
     */
    AccessTokenApi.prototype.patchAttributes = function (id, data, customHeaders) {
        if (data === void 0) { data = {}; }
        var _method = "PATCH";
        var _url = __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath() + "/" + __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion() +
            "/AccessTokens/:id";
        var _routeParams = {
            id: id
        };
        var _postBody = {
            data: data
        };
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * The name of the model represented by this $resource,
     * i.e. `AccessToken`.
     */
    AccessTokenApi.prototype.getModelName = function () {
        return "AccessToken";
    };
    AccessTokenApi = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */])),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Inject */])(__WEBPACK_IMPORTED_MODULE_8__sockets_socket_connections__["a" /* SocketConnection */])),
        __param(2, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Inject */])(__WEBPACK_IMPORTED_MODULE_2__SDKModels__["a" /* SDKModels */])),
        __param(3, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Inject */])(__WEBPACK_IMPORTED_MODULE_5__core_auth_service__["a" /* LoopBackAuth */])),
        __param(4, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Inject */])(__WEBPACK_IMPORTED_MODULE_6__core_search_params__["a" /* JSONSearchParams */])),
        __param(5, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Optional */])()), __param(5, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Inject */])(__WEBPACK_IMPORTED_MODULE_7__core_error_service__["a" /* ErrorHandler */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_8__sockets_socket_connections__["a" /* SocketConnection */],
            __WEBPACK_IMPORTED_MODULE_2__SDKModels__["a" /* SDKModels */],
            __WEBPACK_IMPORTED_MODULE_5__core_auth_service__["a" /* LoopBackAuth */],
            __WEBPACK_IMPORTED_MODULE_6__core_search_params__["a" /* JSONSearchParams */],
            __WEBPACK_IMPORTED_MODULE_7__core_error_service__["a" /* ErrorHandler */]])
    ], AccessTokenApi);
    return AccessTokenApi;
}(__WEBPACK_IMPORTED_MODULE_3__core_base_service__["a" /* BaseLoopBackApi */]));



/***/ }),

/***/ "../../../../../src/sdk/services/custom/Customer.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomerApi; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__SDKModels__ = __webpack_require__("../../../../../src/sdk/services/custom/SDKModels.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_base_service__ = __webpack_require__("../../../../../src/sdk/services/core/base.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__lb_config__ = __webpack_require__("../../../../../src/sdk/lb.config.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__core_auth_service__ = __webpack_require__("../../../../../src/sdk/services/core/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__core_search_params__ = __webpack_require__("../../../../../src/sdk/services/core/search.params.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__core_error_service__ = __webpack_require__("../../../../../src/sdk/services/core/error.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__sockets_socket_connections__ = __webpack_require__("../../../../../src/sdk/sockets/socket.connections.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
/* tslint:disable */









/**
 * Api services for the `Customer` model.
 */
var CustomerApi = /** @class */ (function (_super) {
    __extends(CustomerApi, _super);
    function CustomerApi(http, connection, models, auth, searchParams, errorHandler) {
        var _this = _super.call(this, http, connection, models, auth, searchParams, errorHandler) || this;
        _this.http = http;
        _this.connection = connection;
        _this.models = models;
        _this.auth = auth;
        _this.searchParams = searchParams;
        _this.errorHandler = errorHandler;
        return _this;
    }
    /**
     * Find a related item by id for lines.
     *
     * @param {any} id Customer id
     *
     * @param {any} fk Foreign key for lines
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `Customer` object.)
     * </em>
     */
    CustomerApi.prototype.findByIdLines = function (id, fk, customHeaders) {
        var _method = "GET";
        var _url = __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath() + "/" + __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion() +
            "/customer/:id/lines/:fk";
        var _routeParams = {
            id: id,
            fk: fk
        };
        var _postBody = {};
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Delete a related item by id for lines.
     *
     * @param {any} id Customer id
     *
     * @param {any} fk Foreign key for lines
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * This method returns no data.
     */
    CustomerApi.prototype.destroyByIdLines = function (id, fk, customHeaders) {
        var _method = "DELETE";
        var _url = __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath() + "/" + __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion() +
            "/customer/:id/lines/:fk";
        var _routeParams = {
            id: id,
            fk: fk
        };
        var _postBody = {};
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Update a related item by id for lines.
     *
     * @param {any} id Customer id
     *
     * @param {any} fk Foreign key for lines
     *
     * @param {object} data Request data.
     *
     * This method expects a subset of model properties as request parameters.
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `Customer` object.)
     * </em>
     */
    CustomerApi.prototype.updateByIdLines = function (id, fk, data, customHeaders) {
        if (data === void 0) { data = {}; }
        var _method = "PUT";
        var _url = __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath() + "/" + __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion() +
            "/customer/:id/lines/:fk";
        var _routeParams = {
            id: id,
            fk: fk
        };
        var _postBody = {
            data: data
        };
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Queries lines of Customer.
     *
     * @param {any} id Customer id
     *
     * @param {object} filter
     *
     * @returns {object[]} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `Customer` object.)
     * </em>
     */
    CustomerApi.prototype.getLines = function (id, filter, customHeaders) {
        if (filter === void 0) { filter = {}; }
        var _method = "GET";
        var _url = __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath() + "/" + __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion() +
            "/customer/:id/lines";
        var _routeParams = {
            id: id
        };
        var _postBody = {};
        var _urlParams = {};
        if (typeof filter !== 'undefined' && filter !== null)
            _urlParams.filter = filter;
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Creates a new instance in lines of this model.
     *
     * @param {any} id Customer id
     *
     * @param {object} data Request data.
     *
     * This method expects a subset of model properties as request parameters.
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `Customer` object.)
     * </em>
     */
    CustomerApi.prototype.createLines = function (id, data, customHeaders) {
        if (data === void 0) { data = {}; }
        var _method = "POST";
        var _url = __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath() + "/" + __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion() +
            "/customer/:id/lines";
        var _routeParams = {
            id: id
        };
        var _postBody = {
            data: data
        };
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Deletes all lines of this model.
     *
     * @param {any} id Customer id
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * This method returns no data.
     */
    CustomerApi.prototype.deleteLines = function (id, customHeaders) {
        var _method = "DELETE";
        var _url = __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath() + "/" + __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion() +
            "/customer/:id/lines";
        var _routeParams = {
            id: id
        };
        var _postBody = {};
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Counts lines of Customer.
     *
     * @param {any} id Customer id
     *
     * @param {object} where Criteria to match model instances
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * Data properties:
     *
     *  - `count` – `{number}` -
     */
    CustomerApi.prototype.countLines = function (id, where, customHeaders) {
        if (where === void 0) { where = {}; }
        var _method = "GET";
        var _url = __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath() + "/" + __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion() +
            "/customer/:id/lines/count";
        var _routeParams = {
            id: id
        };
        var _postBody = {};
        var _urlParams = {};
        if (typeof where !== 'undefined' && where !== null)
            _urlParams.where = where;
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Patch an existing model instance or insert a new one into the data source.
     *
     * @param {object} data Request data.
     *
     *  - `data` – `{object}` - Model instance data
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `Customer` object.)
     * </em>
     */
    CustomerApi.prototype.patchOrCreate = function (data, customHeaders) {
        if (data === void 0) { data = {}; }
        var _method = "PATCH";
        var _url = __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath() + "/" + __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion() +
            "/customer";
        var _routeParams = {};
        var _postBody = {
            data: data
        };
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Patch attributes for a model instance and persist it into the data source.
     *
     * @param {any} id Customer id
     *
     * @param {object} data Request data.
     *
     *  - `data` – `{object}` - An object of model property name/value pairs
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `Customer` object.)
     * </em>
     */
    CustomerApi.prototype.patchAttributes = function (id, data, customHeaders) {
        if (data === void 0) { data = {}; }
        var _method = "PATCH";
        var _url = __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath() + "/" + __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion() +
            "/customer/:id";
        var _routeParams = {
            id: id
        };
        var _postBody = {
            data: data
        };
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Creates a new instance in lines of this model.
     *
     * @param {any} id Customer id
     *
     * @param {object} data Request data.
     *
     * This method expects a subset of model properties as request parameters.
     *
     * @returns {object[]} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `Customer` object.)
     * </em>
     */
    CustomerApi.prototype.createManyLines = function (id, data, customHeaders) {
        if (data === void 0) { data = []; }
        var _method = "POST";
        var _url = __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath() + "/" + __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion() +
            "/customer/:id/lines";
        var _routeParams = {
            id: id
        };
        var _postBody = {
            data: data
        };
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * The name of the model represented by this $resource,
     * i.e. `Customer`.
     */
    CustomerApi.prototype.getModelName = function () {
        return "Customer";
    };
    CustomerApi = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */])),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Inject */])(__WEBPACK_IMPORTED_MODULE_8__sockets_socket_connections__["a" /* SocketConnection */])),
        __param(2, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Inject */])(__WEBPACK_IMPORTED_MODULE_2__SDKModels__["a" /* SDKModels */])),
        __param(3, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Inject */])(__WEBPACK_IMPORTED_MODULE_5__core_auth_service__["a" /* LoopBackAuth */])),
        __param(4, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Inject */])(__WEBPACK_IMPORTED_MODULE_6__core_search_params__["a" /* JSONSearchParams */])),
        __param(5, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Optional */])()), __param(5, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Inject */])(__WEBPACK_IMPORTED_MODULE_7__core_error_service__["a" /* ErrorHandler */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_8__sockets_socket_connections__["a" /* SocketConnection */],
            __WEBPACK_IMPORTED_MODULE_2__SDKModels__["a" /* SDKModels */],
            __WEBPACK_IMPORTED_MODULE_5__core_auth_service__["a" /* LoopBackAuth */],
            __WEBPACK_IMPORTED_MODULE_6__core_search_params__["a" /* JSONSearchParams */],
            __WEBPACK_IMPORTED_MODULE_7__core_error_service__["a" /* ErrorHandler */]])
    ], CustomerApi);
    return CustomerApi;
}(__WEBPACK_IMPORTED_MODULE_3__core_base_service__["a" /* BaseLoopBackApi */]));



/***/ }),

/***/ "../../../../../src/sdk/services/custom/Family.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FamilyApi; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__SDKModels__ = __webpack_require__("../../../../../src/sdk/services/custom/SDKModels.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_base_service__ = __webpack_require__("../../../../../src/sdk/services/core/base.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__lb_config__ = __webpack_require__("../../../../../src/sdk/lb.config.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__core_auth_service__ = __webpack_require__("../../../../../src/sdk/services/core/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__core_search_params__ = __webpack_require__("../../../../../src/sdk/services/core/search.params.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__core_error_service__ = __webpack_require__("../../../../../src/sdk/services/core/error.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__sockets_socket_connections__ = __webpack_require__("../../../../../src/sdk/sockets/socket.connections.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
/* tslint:disable */









/**
 * Api services for the `Family` model.
 */
var FamilyApi = /** @class */ (function (_super) {
    __extends(FamilyApi, _super);
    function FamilyApi(http, connection, models, auth, searchParams, errorHandler) {
        var _this = _super.call(this, http, connection, models, auth, searchParams, errorHandler) || this;
        _this.http = http;
        _this.connection = connection;
        _this.models = models;
        _this.auth = auth;
        _this.searchParams = searchParams;
        _this.errorHandler = errorHandler;
        return _this;
    }
    /**
     * Patch an existing model instance or insert a new one into the data source.
     *
     * @param {object} data Request data.
     *
     *  - `data` – `{object}` - Model instance data
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `Family` object.)
     * </em>
     */
    FamilyApi.prototype.patchOrCreate = function (data, customHeaders) {
        if (data === void 0) { data = {}; }
        var _method = "PATCH";
        var _url = __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath() + "/" + __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion() +
            "/family";
        var _routeParams = {};
        var _postBody = {
            data: data
        };
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Patch attributes for a model instance and persist it into the data source.
     *
     * @param {any} id Family id
     *
     * @param {object} data Request data.
     *
     *  - `data` – `{object}` - An object of model property name/value pairs
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `Family` object.)
     * </em>
     */
    FamilyApi.prototype.patchAttributes = function (id, data, customHeaders) {
        if (data === void 0) { data = {}; }
        var _method = "PATCH";
        var _url = __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath() + "/" + __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion() +
            "/family/:id";
        var _routeParams = {
            id: id
        };
        var _postBody = {
            data: data
        };
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * The name of the model represented by this $resource,
     * i.e. `Family`.
     */
    FamilyApi.prototype.getModelName = function () {
        return "Family";
    };
    FamilyApi = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */])),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Inject */])(__WEBPACK_IMPORTED_MODULE_8__sockets_socket_connections__["a" /* SocketConnection */])),
        __param(2, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Inject */])(__WEBPACK_IMPORTED_MODULE_2__SDKModels__["a" /* SDKModels */])),
        __param(3, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Inject */])(__WEBPACK_IMPORTED_MODULE_5__core_auth_service__["a" /* LoopBackAuth */])),
        __param(4, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Inject */])(__WEBPACK_IMPORTED_MODULE_6__core_search_params__["a" /* JSONSearchParams */])),
        __param(5, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Optional */])()), __param(5, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Inject */])(__WEBPACK_IMPORTED_MODULE_7__core_error_service__["a" /* ErrorHandler */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_8__sockets_socket_connections__["a" /* SocketConnection */],
            __WEBPACK_IMPORTED_MODULE_2__SDKModels__["a" /* SDKModels */],
            __WEBPACK_IMPORTED_MODULE_5__core_auth_service__["a" /* LoopBackAuth */],
            __WEBPACK_IMPORTED_MODULE_6__core_search_params__["a" /* JSONSearchParams */],
            __WEBPACK_IMPORTED_MODULE_7__core_error_service__["a" /* ErrorHandler */]])
    ], FamilyApi);
    return FamilyApi;
}(__WEBPACK_IMPORTED_MODULE_3__core_base_service__["a" /* BaseLoopBackApi */]));



/***/ }),

/***/ "../../../../../src/sdk/services/custom/Line.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LineApi; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__SDKModels__ = __webpack_require__("../../../../../src/sdk/services/custom/SDKModels.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_base_service__ = __webpack_require__("../../../../../src/sdk/services/core/base.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__lb_config__ = __webpack_require__("../../../../../src/sdk/lb.config.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__core_auth_service__ = __webpack_require__("../../../../../src/sdk/services/core/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__core_search_params__ = __webpack_require__("../../../../../src/sdk/services/core/search.params.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__core_error_service__ = __webpack_require__("../../../../../src/sdk/services/core/error.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__sockets_socket_connections__ = __webpack_require__("../../../../../src/sdk/sockets/socket.connections.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
/* tslint:disable */









/**
 * Api services for the `Line` model.
 */
var LineApi = /** @class */ (function (_super) {
    __extends(LineApi, _super);
    function LineApi(http, connection, models, auth, searchParams, errorHandler) {
        var _this = _super.call(this, http, connection, models, auth, searchParams, errorHandler) || this;
        _this.http = http;
        _this.connection = connection;
        _this.models = models;
        _this.auth = auth;
        _this.searchParams = searchParams;
        _this.errorHandler = errorHandler;
        return _this;
    }
    /**
     * Find a related item by id for shifts.
     *
     * @param {any} id Line id
     *
     * @param {any} fk Foreign key for shifts
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `Line` object.)
     * </em>
     */
    LineApi.prototype.findByIdShifts = function (id, fk, customHeaders) {
        var _method = "GET";
        var _url = __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath() + "/" + __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion() +
            "/line/:id/shifts/:fk";
        var _routeParams = {
            id: id,
            fk: fk
        };
        var _postBody = {};
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Delete a related item by id for shifts.
     *
     * @param {any} id Line id
     *
     * @param {any} fk Foreign key for shifts
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * This method returns no data.
     */
    LineApi.prototype.destroyByIdShifts = function (id, fk, customHeaders) {
        var _method = "DELETE";
        var _url = __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath() + "/" + __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion() +
            "/line/:id/shifts/:fk";
        var _routeParams = {
            id: id,
            fk: fk
        };
        var _postBody = {};
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Update a related item by id for shifts.
     *
     * @param {any} id Line id
     *
     * @param {any} fk Foreign key for shifts
     *
     * @param {object} data Request data.
     *
     * This method expects a subset of model properties as request parameters.
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `Line` object.)
     * </em>
     */
    LineApi.prototype.updateByIdShifts = function (id, fk, data, customHeaders) {
        if (data === void 0) { data = {}; }
        var _method = "PUT";
        var _url = __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath() + "/" + __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion() +
            "/line/:id/shifts/:fk";
        var _routeParams = {
            id: id,
            fk: fk
        };
        var _postBody = {
            data: data
        };
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Find a related item by id for models.
     *
     * @param {any} id Line id
     *
     * @param {any} fk Foreign key for models
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `Line` object.)
     * </em>
     */
    LineApi.prototype.findByIdModels = function (id, fk, customHeaders) {
        var _method = "GET";
        var _url = __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath() + "/" + __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion() +
            "/line/:id/models/:fk";
        var _routeParams = {
            id: id,
            fk: fk
        };
        var _postBody = {};
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Delete a related item by id for models.
     *
     * @param {any} id Line id
     *
     * @param {any} fk Foreign key for models
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * This method returns no data.
     */
    LineApi.prototype.destroyByIdModels = function (id, fk, customHeaders) {
        var _method = "DELETE";
        var _url = __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath() + "/" + __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion() +
            "/line/:id/models/:fk";
        var _routeParams = {
            id: id,
            fk: fk
        };
        var _postBody = {};
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Update a related item by id for models.
     *
     * @param {any} id Line id
     *
     * @param {any} fk Foreign key for models
     *
     * @param {object} data Request data.
     *
     * This method expects a subset of model properties as request parameters.
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `Line` object.)
     * </em>
     */
    LineApi.prototype.updateByIdModels = function (id, fk, data, customHeaders) {
        if (data === void 0) { data = {}; }
        var _method = "PUT";
        var _url = __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath() + "/" + __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion() +
            "/line/:id/models/:fk";
        var _routeParams = {
            id: id,
            fk: fk
        };
        var _postBody = {
            data: data
        };
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Find a related item by id for timeCleans.
     *
     * @param {any} id Line id
     *
     * @param {any} fk Foreign key for timeCleans
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `Line` object.)
     * </em>
     */
    LineApi.prototype.findByIdTimeCleans = function (id, fk, customHeaders) {
        var _method = "GET";
        var _url = __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath() + "/" + __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion() +
            "/line/:id/timeCleans/:fk";
        var _routeParams = {
            id: id,
            fk: fk
        };
        var _postBody = {};
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Delete a related item by id for timeCleans.
     *
     * @param {any} id Line id
     *
     * @param {any} fk Foreign key for timeCleans
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * This method returns no data.
     */
    LineApi.prototype.destroyByIdTimeCleans = function (id, fk, customHeaders) {
        var _method = "DELETE";
        var _url = __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath() + "/" + __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion() +
            "/line/:id/timeCleans/:fk";
        var _routeParams = {
            id: id,
            fk: fk
        };
        var _postBody = {};
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Update a related item by id for timeCleans.
     *
     * @param {any} id Line id
     *
     * @param {any} fk Foreign key for timeCleans
     *
     * @param {object} data Request data.
     *
     * This method expects a subset of model properties as request parameters.
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `Line` object.)
     * </em>
     */
    LineApi.prototype.updateByIdTimeCleans = function (id, fk, data, customHeaders) {
        if (data === void 0) { data = {}; }
        var _method = "PUT";
        var _url = __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath() + "/" + __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion() +
            "/line/:id/timeCleans/:fk";
        var _routeParams = {
            id: id,
            fk: fk
        };
        var _postBody = {
            data: data
        };
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Queries shifts of Line.
     *
     * @param {any} id Line id
     *
     * @param {object} filter
     *
     * @returns {object[]} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `Line` object.)
     * </em>
     */
    LineApi.prototype.getShifts = function (id, filter, customHeaders) {
        if (filter === void 0) { filter = {}; }
        var _method = "GET";
        var _url = __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath() + "/" + __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion() +
            "/line/:id/shifts";
        var _routeParams = {
            id: id
        };
        var _postBody = {};
        var _urlParams = {};
        if (typeof filter !== 'undefined' && filter !== null)
            _urlParams.filter = filter;
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Creates a new instance in shifts of this model.
     *
     * @param {any} id Line id
     *
     * @param {object} data Request data.
     *
     * This method expects a subset of model properties as request parameters.
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `Line` object.)
     * </em>
     */
    LineApi.prototype.createShifts = function (id, data, customHeaders) {
        if (data === void 0) { data = {}; }
        var _method = "POST";
        var _url = __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath() + "/" + __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion() +
            "/line/:id/shifts";
        var _routeParams = {
            id: id
        };
        var _postBody = {
            data: data
        };
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Deletes all shifts of this model.
     *
     * @param {any} id Line id
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * This method returns no data.
     */
    LineApi.prototype.deleteShifts = function (id, customHeaders) {
        var _method = "DELETE";
        var _url = __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath() + "/" + __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion() +
            "/line/:id/shifts";
        var _routeParams = {
            id: id
        };
        var _postBody = {};
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Counts shifts of Line.
     *
     * @param {any} id Line id
     *
     * @param {object} where Criteria to match model instances
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * Data properties:
     *
     *  - `count` – `{number}` -
     */
    LineApi.prototype.countShifts = function (id, where, customHeaders) {
        if (where === void 0) { where = {}; }
        var _method = "GET";
        var _url = __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath() + "/" + __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion() +
            "/line/:id/shifts/count";
        var _routeParams = {
            id: id
        };
        var _postBody = {};
        var _urlParams = {};
        if (typeof where !== 'undefined' && where !== null)
            _urlParams.where = where;
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Queries models of Line.
     *
     * @param {any} id Line id
     *
     * @param {object} filter
     *
     * @returns {object[]} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `Line` object.)
     * </em>
     */
    LineApi.prototype.getModels = function (id, filter, customHeaders) {
        if (filter === void 0) { filter = {}; }
        var _method = "GET";
        var _url = __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath() + "/" + __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion() +
            "/line/:id/models";
        var _routeParams = {
            id: id
        };
        var _postBody = {};
        var _urlParams = {};
        if (typeof filter !== 'undefined' && filter !== null)
            _urlParams.filter = filter;
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Creates a new instance in models of this model.
     *
     * @param {any} id Line id
     *
     * @param {object} data Request data.
     *
     * This method expects a subset of model properties as request parameters.
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `Line` object.)
     * </em>
     */
    LineApi.prototype.createModels = function (id, data, customHeaders) {
        if (data === void 0) { data = {}; }
        var _method = "POST";
        var _url = __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath() + "/" + __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion() +
            "/line/:id/models";
        var _routeParams = {
            id: id
        };
        var _postBody = {
            data: data
        };
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Deletes all models of this model.
     *
     * @param {any} id Line id
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * This method returns no data.
     */
    LineApi.prototype.deleteModels = function (id, customHeaders) {
        var _method = "DELETE";
        var _url = __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath() + "/" + __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion() +
            "/line/:id/models";
        var _routeParams = {
            id: id
        };
        var _postBody = {};
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Counts models of Line.
     *
     * @param {any} id Line id
     *
     * @param {object} where Criteria to match model instances
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * Data properties:
     *
     *  - `count` – `{number}` -
     */
    LineApi.prototype.countModels = function (id, where, customHeaders) {
        if (where === void 0) { where = {}; }
        var _method = "GET";
        var _url = __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath() + "/" + __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion() +
            "/line/:id/models/count";
        var _routeParams = {
            id: id
        };
        var _postBody = {};
        var _urlParams = {};
        if (typeof where !== 'undefined' && where !== null)
            _urlParams.where = where;
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Queries timeCleans of Line.
     *
     * @param {any} id Line id
     *
     * @param {object} filter
     *
     * @returns {object[]} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `Line` object.)
     * </em>
     */
    LineApi.prototype.getTimeCleans = function (id, filter, customHeaders) {
        if (filter === void 0) { filter = {}; }
        var _method = "GET";
        var _url = __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath() + "/" + __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion() +
            "/line/:id/timeCleans";
        var _routeParams = {
            id: id
        };
        var _postBody = {};
        var _urlParams = {};
        if (typeof filter !== 'undefined' && filter !== null)
            _urlParams.filter = filter;
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Creates a new instance in timeCleans of this model.
     *
     * @param {any} id Line id
     *
     * @param {object} data Request data.
     *
     * This method expects a subset of model properties as request parameters.
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `Line` object.)
     * </em>
     */
    LineApi.prototype.createTimeCleans = function (id, data, customHeaders) {
        if (data === void 0) { data = {}; }
        var _method = "POST";
        var _url = __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath() + "/" + __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion() +
            "/line/:id/timeCleans";
        var _routeParams = {
            id: id
        };
        var _postBody = {
            data: data
        };
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Deletes all timeCleans of this model.
     *
     * @param {any} id Line id
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * This method returns no data.
     */
    LineApi.prototype.deleteTimeCleans = function (id, customHeaders) {
        var _method = "DELETE";
        var _url = __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath() + "/" + __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion() +
            "/line/:id/timeCleans";
        var _routeParams = {
            id: id
        };
        var _postBody = {};
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Counts timeCleans of Line.
     *
     * @param {any} id Line id
     *
     * @param {object} where Criteria to match model instances
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * Data properties:
     *
     *  - `count` – `{number}` -
     */
    LineApi.prototype.countTimeCleans = function (id, where, customHeaders) {
        if (where === void 0) { where = {}; }
        var _method = "GET";
        var _url = __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath() + "/" + __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion() +
            "/line/:id/timeCleans/count";
        var _routeParams = {
            id: id
        };
        var _postBody = {};
        var _urlParams = {};
        if (typeof where !== 'undefined' && where !== null)
            _urlParams.where = where;
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Patch an existing model instance or insert a new one into the data source.
     *
     * @param {object} data Request data.
     *
     *  - `data` – `{object}` - Model instance data
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `Line` object.)
     * </em>
     */
    LineApi.prototype.patchOrCreate = function (data, customHeaders) {
        if (data === void 0) { data = {}; }
        var _method = "PATCH";
        var _url = __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath() + "/" + __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion() +
            "/line";
        var _routeParams = {};
        var _postBody = {
            data: data
        };
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Patch attributes for a model instance and persist it into the data source.
     *
     * @param {any} id Line id
     *
     * @param {object} data Request data.
     *
     *  - `data` – `{object}` - An object of model property name/value pairs
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `Line` object.)
     * </em>
     */
    LineApi.prototype.patchAttributes = function (id, data, customHeaders) {
        if (data === void 0) { data = {}; }
        var _method = "PATCH";
        var _url = __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath() + "/" + __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion() +
            "/line/:id";
        var _routeParams = {
            id: id
        };
        var _postBody = {
            data: data
        };
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Creates a new instance in shifts of this model.
     *
     * @param {any} id Line id
     *
     * @param {object} data Request data.
     *
     * This method expects a subset of model properties as request parameters.
     *
     * @returns {object[]} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `Line` object.)
     * </em>
     */
    LineApi.prototype.createManyShifts = function (id, data, customHeaders) {
        if (data === void 0) { data = []; }
        var _method = "POST";
        var _url = __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath() + "/" + __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion() +
            "/line/:id/shifts";
        var _routeParams = {
            id: id
        };
        var _postBody = {
            data: data
        };
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Creates a new instance in models of this model.
     *
     * @param {any} id Line id
     *
     * @param {object} data Request data.
     *
     * This method expects a subset of model properties as request parameters.
     *
     * @returns {object[]} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `Line` object.)
     * </em>
     */
    LineApi.prototype.createManyModels = function (id, data, customHeaders) {
        if (data === void 0) { data = []; }
        var _method = "POST";
        var _url = __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath() + "/" + __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion() +
            "/line/:id/models";
        var _routeParams = {
            id: id
        };
        var _postBody = {
            data: data
        };
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Creates a new instance in timeCleans of this model.
     *
     * @param {any} id Line id
     *
     * @param {object} data Request data.
     *
     * This method expects a subset of model properties as request parameters.
     *
     * @returns {object[]} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `Line` object.)
     * </em>
     */
    LineApi.prototype.createManyTimeCleans = function (id, data, customHeaders) {
        if (data === void 0) { data = []; }
        var _method = "POST";
        var _url = __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath() + "/" + __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion() +
            "/line/:id/timeCleans";
        var _routeParams = {
            id: id
        };
        var _postBody = {
            data: data
        };
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * The name of the model represented by this $resource,
     * i.e. `Line`.
     */
    LineApi.prototype.getModelName = function () {
        return "Line";
    };
    LineApi = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */])),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Inject */])(__WEBPACK_IMPORTED_MODULE_8__sockets_socket_connections__["a" /* SocketConnection */])),
        __param(2, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Inject */])(__WEBPACK_IMPORTED_MODULE_2__SDKModels__["a" /* SDKModels */])),
        __param(3, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Inject */])(__WEBPACK_IMPORTED_MODULE_5__core_auth_service__["a" /* LoopBackAuth */])),
        __param(4, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Inject */])(__WEBPACK_IMPORTED_MODULE_6__core_search_params__["a" /* JSONSearchParams */])),
        __param(5, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Optional */])()), __param(5, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Inject */])(__WEBPACK_IMPORTED_MODULE_7__core_error_service__["a" /* ErrorHandler */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_8__sockets_socket_connections__["a" /* SocketConnection */],
            __WEBPACK_IMPORTED_MODULE_2__SDKModels__["a" /* SDKModels */],
            __WEBPACK_IMPORTED_MODULE_5__core_auth_service__["a" /* LoopBackAuth */],
            __WEBPACK_IMPORTED_MODULE_6__core_search_params__["a" /* JSONSearchParams */],
            __WEBPACK_IMPORTED_MODULE_7__core_error_service__["a" /* ErrorHandler */]])
    ], LineApi);
    return LineApi;
}(__WEBPACK_IMPORTED_MODULE_3__core_base_service__["a" /* BaseLoopBackApi */]));



/***/ }),

/***/ "../../../../../src/sdk/services/custom/SDKModels.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SDKModels; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_User__ = __webpack_require__("../../../../../src/sdk/models/User.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_AccessToken__ = __webpack_require__("../../../../../src/sdk/models/AccessToken.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_Line__ = __webpack_require__("../../../../../src/sdk/models/Line.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_Customer__ = __webpack_require__("../../../../../src/sdk/models/Customer.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__models_Shift__ = __webpack_require__("../../../../../src/sdk/models/Shift.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__models_Timeline__ = __webpack_require__("../../../../../src/sdk/models/Timeline.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__models_Family__ = __webpack_require__("../../../../../src/sdk/models/Family.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__models_TimeClean__ = __webpack_require__("../../../../../src/sdk/models/TimeClean.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/* tslint:disable */









var SDKModels = /** @class */ (function () {
    function SDKModels() {
        this.models = {
            User: __WEBPACK_IMPORTED_MODULE_1__models_User__["a" /* User */],
            AccessToken: __WEBPACK_IMPORTED_MODULE_2__models_AccessToken__["a" /* AccessToken */],
            Line: __WEBPACK_IMPORTED_MODULE_3__models_Line__["a" /* Line */],
            Customer: __WEBPACK_IMPORTED_MODULE_4__models_Customer__["a" /* Customer */],
            Shift: __WEBPACK_IMPORTED_MODULE_5__models_Shift__["a" /* Shift */],
            Timeline: __WEBPACK_IMPORTED_MODULE_6__models_Timeline__["a" /* Timeline */],
            Family: __WEBPACK_IMPORTED_MODULE_7__models_Family__["a" /* Family */],
            TimeClean: __WEBPACK_IMPORTED_MODULE_8__models_TimeClean__["a" /* TimeClean */],
        };
    }
    SDKModels.prototype.get = function (modelName) {
        return this.models[modelName];
    };
    SDKModels.prototype.getAll = function () {
        return this.models;
    };
    SDKModels.prototype.getModelNames = function () {
        return Object.keys(this.models);
    };
    SDKModels = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])()
    ], SDKModels);
    return SDKModels;
}());



/***/ }),

/***/ "../../../../../src/sdk/services/custom/Shift.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShiftApi; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__SDKModels__ = __webpack_require__("../../../../../src/sdk/services/custom/SDKModels.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_base_service__ = __webpack_require__("../../../../../src/sdk/services/core/base.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__lb_config__ = __webpack_require__("../../../../../src/sdk/lb.config.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__core_auth_service__ = __webpack_require__("../../../../../src/sdk/services/core/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__core_search_params__ = __webpack_require__("../../../../../src/sdk/services/core/search.params.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__core_error_service__ = __webpack_require__("../../../../../src/sdk/services/core/error.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__sockets_socket_connections__ = __webpack_require__("../../../../../src/sdk/sockets/socket.connections.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
/* tslint:disable */









/**
 * Api services for the `Shift` model.
 */
var ShiftApi = /** @class */ (function (_super) {
    __extends(ShiftApi, _super);
    function ShiftApi(http, connection, models, auth, searchParams, errorHandler) {
        var _this = _super.call(this, http, connection, models, auth, searchParams, errorHandler) || this;
        _this.http = http;
        _this.connection = connection;
        _this.models = models;
        _this.auth = auth;
        _this.searchParams = searchParams;
        _this.errorHandler = errorHandler;
        return _this;
    }
    /**
     * Find a related item by id for timelines.
     *
     * @param {any} id Shift id
     *
     * @param {any} fk Foreign key for timelines
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `Shift` object.)
     * </em>
     */
    ShiftApi.prototype.findByIdTimelines = function (id, fk, customHeaders) {
        var _method = "GET";
        var _url = __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath() + "/" + __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion() +
            "/shift/:id/timelines/:fk";
        var _routeParams = {
            id: id,
            fk: fk
        };
        var _postBody = {};
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Delete a related item by id for timelines.
     *
     * @param {any} id Shift id
     *
     * @param {any} fk Foreign key for timelines
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * This method returns no data.
     */
    ShiftApi.prototype.destroyByIdTimelines = function (id, fk, customHeaders) {
        var _method = "DELETE";
        var _url = __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath() + "/" + __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion() +
            "/shift/:id/timelines/:fk";
        var _routeParams = {
            id: id,
            fk: fk
        };
        var _postBody = {};
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Update a related item by id for timelines.
     *
     * @param {any} id Shift id
     *
     * @param {any} fk Foreign key for timelines
     *
     * @param {object} data Request data.
     *
     * This method expects a subset of model properties as request parameters.
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `Shift` object.)
     * </em>
     */
    ShiftApi.prototype.updateByIdTimelines = function (id, fk, data, customHeaders) {
        if (data === void 0) { data = {}; }
        var _method = "PUT";
        var _url = __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath() + "/" + __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion() +
            "/shift/:id/timelines/:fk";
        var _routeParams = {
            id: id,
            fk: fk
        };
        var _postBody = {
            data: data
        };
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Queries timelines of Shift.
     *
     * @param {any} id Shift id
     *
     * @param {object} filter
     *
     * @returns {object[]} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `Shift` object.)
     * </em>
     */
    ShiftApi.prototype.getTimelines = function (id, filter, customHeaders) {
        if (filter === void 0) { filter = {}; }
        var _method = "GET";
        var _url = __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath() + "/" + __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion() +
            "/shift/:id/timelines";
        var _routeParams = {
            id: id
        };
        var _postBody = {};
        var _urlParams = {};
        if (typeof filter !== 'undefined' && filter !== null)
            _urlParams.filter = filter;
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Creates a new instance in timelines of this model.
     *
     * @param {any} id Shift id
     *
     * @param {object} data Request data.
     *
     * This method expects a subset of model properties as request parameters.
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `Shift` object.)
     * </em>
     */
    ShiftApi.prototype.createTimelines = function (id, data, customHeaders) {
        if (data === void 0) { data = {}; }
        var _method = "POST";
        var _url = __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath() + "/" + __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion() +
            "/shift/:id/timelines";
        var _routeParams = {
            id: id
        };
        var _postBody = {
            data: data
        };
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Deletes all timelines of this model.
     *
     * @param {any} id Shift id
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * This method returns no data.
     */
    ShiftApi.prototype.deleteTimelines = function (id, customHeaders) {
        var _method = "DELETE";
        var _url = __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath() + "/" + __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion() +
            "/shift/:id/timelines";
        var _routeParams = {
            id: id
        };
        var _postBody = {};
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Counts timelines of Shift.
     *
     * @param {any} id Shift id
     *
     * @param {object} where Criteria to match model instances
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * Data properties:
     *
     *  - `count` – `{number}` -
     */
    ShiftApi.prototype.countTimelines = function (id, where, customHeaders) {
        if (where === void 0) { where = {}; }
        var _method = "GET";
        var _url = __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath() + "/" + __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion() +
            "/shift/:id/timelines/count";
        var _routeParams = {
            id: id
        };
        var _postBody = {};
        var _urlParams = {};
        if (typeof where !== 'undefined' && where !== null)
            _urlParams.where = where;
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Patch an existing model instance or insert a new one into the data source.
     *
     * @param {object} data Request data.
     *
     *  - `data` – `{object}` - Model instance data
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `Shift` object.)
     * </em>
     */
    ShiftApi.prototype.patchOrCreate = function (data, customHeaders) {
        if (data === void 0) { data = {}; }
        var _method = "PATCH";
        var _url = __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath() + "/" + __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion() +
            "/shift";
        var _routeParams = {};
        var _postBody = {
            data: data
        };
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Patch attributes for a model instance and persist it into the data source.
     *
     * @param {any} id Shift id
     *
     * @param {object} data Request data.
     *
     *  - `data` – `{object}` - An object of model property name/value pairs
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `Shift` object.)
     * </em>
     */
    ShiftApi.prototype.patchAttributes = function (id, data, customHeaders) {
        if (data === void 0) { data = {}; }
        var _method = "PATCH";
        var _url = __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath() + "/" + __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion() +
            "/shift/:id";
        var _routeParams = {
            id: id
        };
        var _postBody = {
            data: data
        };
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Creates a new instance in timelines of this model.
     *
     * @param {any} id Shift id
     *
     * @param {object} data Request data.
     *
     * This method expects a subset of model properties as request parameters.
     *
     * @returns {object[]} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `Shift` object.)
     * </em>
     */
    ShiftApi.prototype.createManyTimelines = function (id, data, customHeaders) {
        if (data === void 0) { data = []; }
        var _method = "POST";
        var _url = __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath() + "/" + __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion() +
            "/shift/:id/timelines";
        var _routeParams = {
            id: id
        };
        var _postBody = {
            data: data
        };
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * The name of the model represented by this $resource,
     * i.e. `Shift`.
     */
    ShiftApi.prototype.getModelName = function () {
        return "Shift";
    };
    ShiftApi = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */])),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Inject */])(__WEBPACK_IMPORTED_MODULE_8__sockets_socket_connections__["a" /* SocketConnection */])),
        __param(2, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Inject */])(__WEBPACK_IMPORTED_MODULE_2__SDKModels__["a" /* SDKModels */])),
        __param(3, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Inject */])(__WEBPACK_IMPORTED_MODULE_5__core_auth_service__["a" /* LoopBackAuth */])),
        __param(4, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Inject */])(__WEBPACK_IMPORTED_MODULE_6__core_search_params__["a" /* JSONSearchParams */])),
        __param(5, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Optional */])()), __param(5, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Inject */])(__WEBPACK_IMPORTED_MODULE_7__core_error_service__["a" /* ErrorHandler */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_8__sockets_socket_connections__["a" /* SocketConnection */],
            __WEBPACK_IMPORTED_MODULE_2__SDKModels__["a" /* SDKModels */],
            __WEBPACK_IMPORTED_MODULE_5__core_auth_service__["a" /* LoopBackAuth */],
            __WEBPACK_IMPORTED_MODULE_6__core_search_params__["a" /* JSONSearchParams */],
            __WEBPACK_IMPORTED_MODULE_7__core_error_service__["a" /* ErrorHandler */]])
    ], ShiftApi);
    return ShiftApi;
}(__WEBPACK_IMPORTED_MODULE_3__core_base_service__["a" /* BaseLoopBackApi */]));



/***/ }),

/***/ "../../../../../src/sdk/services/custom/TimeClean.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TimeCleanApi; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__SDKModels__ = __webpack_require__("../../../../../src/sdk/services/custom/SDKModels.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_base_service__ = __webpack_require__("../../../../../src/sdk/services/core/base.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__lb_config__ = __webpack_require__("../../../../../src/sdk/lb.config.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__core_auth_service__ = __webpack_require__("../../../../../src/sdk/services/core/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__core_search_params__ = __webpack_require__("../../../../../src/sdk/services/core/search.params.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__core_error_service__ = __webpack_require__("../../../../../src/sdk/services/core/error.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__sockets_socket_connections__ = __webpack_require__("../../../../../src/sdk/sockets/socket.connections.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
/* tslint:disable */









/**
 * Api services for the `TimeClean` model.
 */
var TimeCleanApi = /** @class */ (function (_super) {
    __extends(TimeCleanApi, _super);
    function TimeCleanApi(http, connection, models, auth, searchParams, errorHandler) {
        var _this = _super.call(this, http, connection, models, auth, searchParams, errorHandler) || this;
        _this.http = http;
        _this.connection = connection;
        _this.models = models;
        _this.auth = auth;
        _this.searchParams = searchParams;
        _this.errorHandler = errorHandler;
        return _this;
    }
    /**
     * Patch an existing model instance or insert a new one into the data source.
     *
     * @param {object} data Request data.
     *
     *  - `data` – `{object}` - Model instance data
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `TimeClean` object.)
     * </em>
     */
    TimeCleanApi.prototype.patchOrCreate = function (data, customHeaders) {
        if (data === void 0) { data = {}; }
        var _method = "PATCH";
        var _url = __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath() + "/" + __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion() +
            "/timeClean";
        var _routeParams = {};
        var _postBody = {
            data: data
        };
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Patch attributes for a model instance and persist it into the data source.
     *
     * @param {any} id TimeClean id
     *
     * @param {object} data Request data.
     *
     *  - `data` – `{object}` - An object of model property name/value pairs
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `TimeClean` object.)
     * </em>
     */
    TimeCleanApi.prototype.patchAttributes = function (id, data, customHeaders) {
        if (data === void 0) { data = {}; }
        var _method = "PATCH";
        var _url = __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath() + "/" + __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion() +
            "/timeClean/:id";
        var _routeParams = {
            id: id
        };
        var _postBody = {
            data: data
        };
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * The name of the model represented by this $resource,
     * i.e. `TimeClean`.
     */
    TimeCleanApi.prototype.getModelName = function () {
        return "TimeClean";
    };
    TimeCleanApi = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */])),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Inject */])(__WEBPACK_IMPORTED_MODULE_8__sockets_socket_connections__["a" /* SocketConnection */])),
        __param(2, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Inject */])(__WEBPACK_IMPORTED_MODULE_2__SDKModels__["a" /* SDKModels */])),
        __param(3, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Inject */])(__WEBPACK_IMPORTED_MODULE_5__core_auth_service__["a" /* LoopBackAuth */])),
        __param(4, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Inject */])(__WEBPACK_IMPORTED_MODULE_6__core_search_params__["a" /* JSONSearchParams */])),
        __param(5, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Optional */])()), __param(5, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Inject */])(__WEBPACK_IMPORTED_MODULE_7__core_error_service__["a" /* ErrorHandler */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_8__sockets_socket_connections__["a" /* SocketConnection */],
            __WEBPACK_IMPORTED_MODULE_2__SDKModels__["a" /* SDKModels */],
            __WEBPACK_IMPORTED_MODULE_5__core_auth_service__["a" /* LoopBackAuth */],
            __WEBPACK_IMPORTED_MODULE_6__core_search_params__["a" /* JSONSearchParams */],
            __WEBPACK_IMPORTED_MODULE_7__core_error_service__["a" /* ErrorHandler */]])
    ], TimeCleanApi);
    return TimeCleanApi;
}(__WEBPACK_IMPORTED_MODULE_3__core_base_service__["a" /* BaseLoopBackApi */]));



/***/ }),

/***/ "../../../../../src/sdk/services/custom/Timeline.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TimelineApi; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__SDKModels__ = __webpack_require__("../../../../../src/sdk/services/custom/SDKModels.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_base_service__ = __webpack_require__("../../../../../src/sdk/services/core/base.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__lb_config__ = __webpack_require__("../../../../../src/sdk/lb.config.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__core_auth_service__ = __webpack_require__("../../../../../src/sdk/services/core/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__core_search_params__ = __webpack_require__("../../../../../src/sdk/services/core/search.params.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__core_error_service__ = __webpack_require__("../../../../../src/sdk/services/core/error.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__sockets_socket_connections__ = __webpack_require__("../../../../../src/sdk/sockets/socket.connections.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
/* tslint:disable */









/**
 * Api services for the `Timeline` model.
 */
var TimelineApi = /** @class */ (function (_super) {
    __extends(TimelineApi, _super);
    function TimelineApi(http, connection, models, auth, searchParams, errorHandler) {
        var _this = _super.call(this, http, connection, models, auth, searchParams, errorHandler) || this;
        _this.http = http;
        _this.connection = connection;
        _this.models = models;
        _this.auth = auth;
        _this.searchParams = searchParams;
        _this.errorHandler = errorHandler;
        return _this;
    }
    /**
     * Patch an existing model instance or insert a new one into the data source.
     *
     * @param {object} data Request data.
     *
     *  - `data` – `{object}` - Model instance data
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `Timeline` object.)
     * </em>
     */
    TimelineApi.prototype.patchOrCreate = function (data, customHeaders) {
        if (data === void 0) { data = {}; }
        var _method = "PATCH";
        var _url = __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath() + "/" + __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion() +
            "/timeline";
        var _routeParams = {};
        var _postBody = {
            data: data
        };
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Patch attributes for a model instance and persist it into the data source.
     *
     * @param {any} id Timeline id
     *
     * @param {object} data Request data.
     *
     *  - `data` – `{object}` - An object of model property name/value pairs
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `Timeline` object.)
     * </em>
     */
    TimelineApi.prototype.patchAttributes = function (id, data, customHeaders) {
        if (data === void 0) { data = {}; }
        var _method = "PATCH";
        var _url = __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath() + "/" + __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion() +
            "/timeline/:id";
        var _routeParams = {
            id: id
        };
        var _postBody = {
            data: data
        };
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * The name of the model represented by this $resource,
     * i.e. `Timeline`.
     */
    TimelineApi.prototype.getModelName = function () {
        return "Timeline";
    };
    TimelineApi = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */])),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Inject */])(__WEBPACK_IMPORTED_MODULE_8__sockets_socket_connections__["a" /* SocketConnection */])),
        __param(2, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Inject */])(__WEBPACK_IMPORTED_MODULE_2__SDKModels__["a" /* SDKModels */])),
        __param(3, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Inject */])(__WEBPACK_IMPORTED_MODULE_5__core_auth_service__["a" /* LoopBackAuth */])),
        __param(4, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Inject */])(__WEBPACK_IMPORTED_MODULE_6__core_search_params__["a" /* JSONSearchParams */])),
        __param(5, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Optional */])()), __param(5, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Inject */])(__WEBPACK_IMPORTED_MODULE_7__core_error_service__["a" /* ErrorHandler */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_8__sockets_socket_connections__["a" /* SocketConnection */],
            __WEBPACK_IMPORTED_MODULE_2__SDKModels__["a" /* SDKModels */],
            __WEBPACK_IMPORTED_MODULE_5__core_auth_service__["a" /* LoopBackAuth */],
            __WEBPACK_IMPORTED_MODULE_6__core_search_params__["a" /* JSONSearchParams */],
            __WEBPACK_IMPORTED_MODULE_7__core_error_service__["a" /* ErrorHandler */]])
    ], TimelineApi);
    return TimelineApi;
}(__WEBPACK_IMPORTED_MODULE_3__core_base_service__["a" /* BaseLoopBackApi */]));



/***/ }),

/***/ "../../../../../src/sdk/services/custom/User.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserApi; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__SDKModels__ = __webpack_require__("../../../../../src/sdk/services/custom/SDKModels.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_base_service__ = __webpack_require__("../../../../../src/sdk/services/core/base.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__lb_config__ = __webpack_require__("../../../../../src/sdk/lb.config.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__core_auth_service__ = __webpack_require__("../../../../../src/sdk/services/core/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__core_search_params__ = __webpack_require__("../../../../../src/sdk/services/core/search.params.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__core_error_service__ = __webpack_require__("../../../../../src/sdk/services/core/error.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__sockets_socket_connections__ = __webpack_require__("../../../../../src/sdk/sockets/socket.connections.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
/* tslint:disable */









/**
 * Api services for the `User` model.
 */
var UserApi = /** @class */ (function (_super) {
    __extends(UserApi, _super);
    function UserApi(http, connection, models, auth, searchParams, errorHandler) {
        var _this = _super.call(this, http, connection, models, auth, searchParams, errorHandler) || this;
        _this.http = http;
        _this.connection = connection;
        _this.models = models;
        _this.auth = auth;
        _this.searchParams = searchParams;
        _this.errorHandler = errorHandler;
        return _this;
    }
    /**
     * Find a related item by id for accessTokens.
     *
     * @param {any} id User id
     *
     * @param {any} fk Foreign key for accessTokens
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `User` object.)
     * </em>
     */
    UserApi.prototype.findByIdAccessTokens = function (id, fk, customHeaders) {
        var _method = "GET";
        var _url = __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath() + "/" + __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion() +
            "/Users/:id/accessTokens/:fk";
        var _routeParams = {
            id: id,
            fk: fk
        };
        var _postBody = {};
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Delete a related item by id for accessTokens.
     *
     * @param {any} id User id
     *
     * @param {any} fk Foreign key for accessTokens
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * This method returns no data.
     */
    UserApi.prototype.destroyByIdAccessTokens = function (id, fk, customHeaders) {
        var _method = "DELETE";
        var _url = __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath() + "/" + __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion() +
            "/Users/:id/accessTokens/:fk";
        var _routeParams = {
            id: id,
            fk: fk
        };
        var _postBody = {};
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Update a related item by id for accessTokens.
     *
     * @param {any} id User id
     *
     * @param {any} fk Foreign key for accessTokens
     *
     * @param {object} data Request data.
     *
     * This method expects a subset of model properties as request parameters.
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `User` object.)
     * </em>
     */
    UserApi.prototype.updateByIdAccessTokens = function (id, fk, data, customHeaders) {
        if (data === void 0) { data = {}; }
        var _method = "PUT";
        var _url = __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath() + "/" + __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion() +
            "/Users/:id/accessTokens/:fk";
        var _routeParams = {
            id: id,
            fk: fk
        };
        var _postBody = {
            data: data
        };
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Queries accessTokens of User.
     *
     * @param {any} id User id
     *
     * @param {object} filter
     *
     * @returns {object[]} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `User` object.)
     * </em>
     */
    UserApi.prototype.getAccessTokens = function (id, filter, customHeaders) {
        if (filter === void 0) { filter = {}; }
        var _method = "GET";
        var _url = __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath() + "/" + __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion() +
            "/Users/:id/accessTokens";
        var _routeParams = {
            id: id
        };
        var _postBody = {};
        var _urlParams = {};
        if (typeof filter !== 'undefined' && filter !== null)
            _urlParams.filter = filter;
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Creates a new instance in accessTokens of this model.
     *
     * @param {any} id User id
     *
     * @param {object} data Request data.
     *
     * This method expects a subset of model properties as request parameters.
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `User` object.)
     * </em>
     */
    UserApi.prototype.createAccessTokens = function (id, data, customHeaders) {
        if (data === void 0) { data = {}; }
        var _method = "POST";
        var _url = __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath() + "/" + __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion() +
            "/Users/:id/accessTokens";
        var _routeParams = {
            id: id
        };
        var _postBody = {
            data: data
        };
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Deletes all accessTokens of this model.
     *
     * @param {any} id User id
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * This method returns no data.
     */
    UserApi.prototype.deleteAccessTokens = function (id, customHeaders) {
        var _method = "DELETE";
        var _url = __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath() + "/" + __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion() +
            "/Users/:id/accessTokens";
        var _routeParams = {
            id: id
        };
        var _postBody = {};
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Counts accessTokens of User.
     *
     * @param {any} id User id
     *
     * @param {object} where Criteria to match model instances
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * Data properties:
     *
     *  - `count` – `{number}` -
     */
    UserApi.prototype.countAccessTokens = function (id, where, customHeaders) {
        if (where === void 0) { where = {}; }
        var _method = "GET";
        var _url = __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath() + "/" + __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion() +
            "/Users/:id/accessTokens/count";
        var _routeParams = {
            id: id
        };
        var _postBody = {};
        var _urlParams = {};
        if (typeof where !== 'undefined' && where !== null)
            _urlParams.where = where;
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Patch an existing model instance or insert a new one into the data source.
     *
     * @param {object} data Request data.
     *
     *  - `data` – `{object}` - Model instance data
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `User` object.)
     * </em>
     */
    UserApi.prototype.patchOrCreate = function (data, customHeaders) {
        if (data === void 0) { data = {}; }
        var _method = "PATCH";
        var _url = __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath() + "/" + __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion() +
            "/Users";
        var _routeParams = {};
        var _postBody = {
            data: data
        };
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Patch attributes for a model instance and persist it into the data source.
     *
     * @param {any} id User id
     *
     * @param {object} data Request data.
     *
     *  - `data` – `{object}` - An object of model property name/value pairs
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `User` object.)
     * </em>
     */
    UserApi.prototype.patchAttributes = function (id, data, customHeaders) {
        if (data === void 0) { data = {}; }
        var _method = "PATCH";
        var _url = __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath() + "/" + __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion() +
            "/Users/:id";
        var _routeParams = {
            id: id
        };
        var _postBody = {
            data: data
        };
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Login a user with username/email and password.
     *
     * @param {string} include Related objects to include in the response. See the description of return value for more details.
     *   Default value: `user`.
     *
     *  - `rememberMe` - `boolean` - Whether the authentication credentials
     *     should be remembered in localStorage across app/browser restarts.
     *     Default: `true`.
     *
     * @param {object} data Request data.
     *
     * This method expects a subset of model properties as request parameters.
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * The response body contains properties of the AccessToken created on login.
     * Depending on the value of `include` parameter, the body may contain additional properties:
     *
     *   - `user` - `U+007BUserU+007D` - Data of the currently logged in user. (`include=user`)
     *
     *
     */
    UserApi.prototype.login = function (credentials, include, rememberMe, customHeaders) {
        var _this = this;
        if (include === void 0) { include = 'user'; }
        if (rememberMe === void 0) { rememberMe = true; }
        var _method = "POST";
        var _url = __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath() + "/" + __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion() +
            "/Users/login";
        var _routeParams = {};
        var _postBody = {
            credentials: credentials
        };
        var _urlParams = {};
        if (typeof include !== 'undefined' && include !== null)
            _urlParams.include = include;
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders)
            .map(function (response) {
            response.ttl = parseInt(response.ttl);
            response.rememberMe = rememberMe;
            _this.auth.setToken(response);
            return response;
        });
        return result;
    };
    /**
     * Logout a user with access token.
     *
     * @param {object} data Request data.
     *
     * This method does not accept any data. Supply an empty object.
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * This method returns no data.
     */
    UserApi.prototype.logout = function (customHeaders) {
        var _method = "POST";
        var _url = __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath() + "/" + __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion() +
            "/Users/logout";
        var _routeParams = {};
        var _postBody = {};
        var _urlParams = {};
        _urlParams.access_token = this.auth.getAccessTokenId();
        this.auth.clear();
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Trigger user's identity verification with configured verifyOptions
     *
     * @param {any} id User id
     *
     * @param {object} data Request data.
     *
     * This method does not accept any data. Supply an empty object.
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * This method returns no data.
     */
    UserApi.prototype.verify = function (id, customHeaders) {
        var _method = "POST";
        var _url = __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath() + "/" + __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion() +
            "/Users/:id/verify";
        var _routeParams = {
            id: id
        };
        var _postBody = {};
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Confirm a user registration with identity verification token.
     *
     * @param {string} uid
     *
     * @param {string} token
     *
     * @param {string} redirect
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * This method returns no data.
     */
    UserApi.prototype.confirm = function (uid, token, redirect, customHeaders) {
        if (redirect === void 0) { redirect = {}; }
        var _method = "GET";
        var _url = __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath() + "/" + __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion() +
            "/Users/confirm";
        var _routeParams = {};
        var _postBody = {};
        var _urlParams = {};
        if (typeof uid !== 'undefined' && uid !== null)
            _urlParams.uid = uid;
        if (typeof token !== 'undefined' && token !== null)
            _urlParams.token = token;
        if (typeof redirect !== 'undefined' && redirect !== null)
            _urlParams.redirect = redirect;
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Reset password for a user with email.
     *
     * @param {object} data Request data.
     *
     * This method expects a subset of model properties as request parameters.
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * This method returns no data.
     */
    UserApi.prototype.resetPassword = function (options, customHeaders) {
        var _method = "POST";
        var _url = __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath() + "/" + __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion() +
            "/Users/reset";
        var _routeParams = {};
        var _postBody = {
            options: options
        };
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Change a user's password.
     *
     * @param {object} data Request data.
     *
     *  - `oldPassword` – `{string}` -
     *
     *  - `newPassword` – `{string}` -
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * This method returns no data.
     */
    UserApi.prototype.changePassword = function (oldPassword, newPassword, customHeaders) {
        var _method = "POST";
        var _url = __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath() + "/" + __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion() +
            "/Users/change-password";
        var _routeParams = {};
        var _postBody = {
            data: {
                oldPassword: oldPassword,
                newPassword: newPassword
            }
        };
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Reset user's password via a password-reset token.
     *
     * @param {object} data Request data.
     *
     *  - `newPassword` – `{string}` -
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * This method returns no data.
     */
    UserApi.prototype.setPassword = function (newPassword, customHeaders) {
        var _method = "POST";
        var _url = __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath() + "/" + __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion() +
            "/Users/reset-password";
        var _routeParams = {};
        var _postBody = {
            data: {
                newPassword: newPassword
            }
        };
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Creates a new instance in accessTokens of this model.
     *
     * @param {any} id User id
     *
     * @param {object} data Request data.
     *
     * This method expects a subset of model properties as request parameters.
     *
     * @returns {object[]} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `User` object.)
     * </em>
     */
    UserApi.prototype.createManyAccessTokens = function (id, data, customHeaders) {
        if (data === void 0) { data = []; }
        var _method = "POST";
        var _url = __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath() + "/" + __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion() +
            "/Users/:id/accessTokens";
        var _routeParams = {
            id: id
        };
        var _postBody = {
            data: data
        };
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * @ngdoc method
     * @name sdk.User#getCurrent
     * @methodOf sdk.User
     *
     * @description
     *
     * Get data of the currently logged user. Fail with HTTP result 401
     * when there is no user logged in.
     *
     * @returns object An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     */
    UserApi.prototype.getCurrent = function (filter) {
        if (filter === void 0) { filter = {}; }
        var _method = "GET";
        var _url = __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath() + "/" + __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion() + "/Users" + "/:id";
        var id = this.auth.getCurrentUserId();
        if (id == null)
            id = '__anonymous__';
        var _routeParams = { id: id };
        var _urlParams = {};
        var _postBody = {};
        if (filter)
            _urlParams.filter = filter;
        return this.request(_method, _url, _routeParams, _urlParams, _postBody);
    };
    /**
     * Get data of the currently logged user that was returned by the last
     * call to {@link sdk.User#login} or
     * {@link sdk.User#getCurrent}. Return null when there
     * is no user logged in or the data of the current user were not fetched
     * yet.
     *
     * @returns object An Account instance.
     */
    UserApi.prototype.getCachedCurrent = function () {
        return this.auth.getCurrentUserData();
    };
    /**
     * Get data of the currently logged access tokern that was returned by the last
     * call to {@link sdk.User#login}
     *
     * @returns object An AccessToken instance.
     */
    UserApi.prototype.getCurrentToken = function () {
        return this.auth.getToken();
    };
    /**
     * @name sdk.User#isAuthenticated
     *
     * @returns {boolean} True if the current user is authenticated (logged in).
     */
    UserApi.prototype.isAuthenticated = function () {
        return !(this.getCurrentId() === '' || this.getCurrentId() == null || this.getCurrentId() == 'null');
    };
    /**
     * @name sdk.User#getCurrentId
     *
     * @returns object Id of the currently logged-in user or null.
     */
    UserApi.prototype.getCurrentId = function () {
        return this.auth.getCurrentUserId();
    };
    /**
     * The name of the model represented by this $resource,
     * i.e. `User`.
     */
    UserApi.prototype.getModelName = function () {
        return "User";
    };
    UserApi = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */])),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Inject */])(__WEBPACK_IMPORTED_MODULE_8__sockets_socket_connections__["a" /* SocketConnection */])),
        __param(2, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Inject */])(__WEBPACK_IMPORTED_MODULE_2__SDKModels__["a" /* SDKModels */])),
        __param(3, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Inject */])(__WEBPACK_IMPORTED_MODULE_5__core_auth_service__["a" /* LoopBackAuth */])),
        __param(4, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Inject */])(__WEBPACK_IMPORTED_MODULE_6__core_search_params__["a" /* JSONSearchParams */])),
        __param(5, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Optional */])()), __param(5, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Inject */])(__WEBPACK_IMPORTED_MODULE_7__core_error_service__["a" /* ErrorHandler */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_8__sockets_socket_connections__["a" /* SocketConnection */],
            __WEBPACK_IMPORTED_MODULE_2__SDKModels__["a" /* SDKModels */],
            __WEBPACK_IMPORTED_MODULE_5__core_auth_service__["a" /* LoopBackAuth */],
            __WEBPACK_IMPORTED_MODULE_6__core_search_params__["a" /* JSONSearchParams */],
            __WEBPACK_IMPORTED_MODULE_7__core_error_service__["a" /* ErrorHandler */]])
    ], UserApi);
    return UserApi;
}(__WEBPACK_IMPORTED_MODULE_3__core_base_service__["a" /* BaseLoopBackApi */]));



/***/ }),

/***/ "../../../../../src/sdk/services/custom/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__User__ = __webpack_require__("../../../../../src/sdk/services/custom/User.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_0__User__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__AccessToken__ = __webpack_require__("../../../../../src/sdk/services/custom/AccessToken.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Line__ = __webpack_require__("../../../../../src/sdk/services/custom/Line.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_2__Line__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Customer__ = __webpack_require__("../../../../../src/sdk/services/custom/Customer.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_3__Customer__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Shift__ = __webpack_require__("../../../../../src/sdk/services/custom/Shift.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_4__Shift__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Timeline__ = __webpack_require__("../../../../../src/sdk/services/custom/Timeline.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Family__ = __webpack_require__("../../../../../src/sdk/services/custom/Family.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__TimeClean__ = __webpack_require__("../../../../../src/sdk/services/custom/TimeClean.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__SDKModels__ = __webpack_require__("../../../../../src/sdk/services/custom/SDKModels.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_8__SDKModels__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__logger_service__ = __webpack_require__("../../../../../src/sdk/services/custom/logger.service.ts");
/* unused harmony namespace reexport */
/* tslint:disable */












/***/ }),

/***/ "../../../../../src/sdk/services/custom/logger.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoggerService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lb_config__ = __webpack_require__("../../../../../src/sdk/lb.config.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/* tslint:disable */


/**
* @author Jonathan Casarrubias <twitter:@johncasarrubias> <github:@johncasarrubias>
* @module LoggerService
* @license MIT
* @description
* Console Log wrapper that can be disabled in production mode
**/
var LoggerService = /** @class */ (function () {
    function LoggerService() {
    }
    LoggerService.prototype.log = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (__WEBPACK_IMPORTED_MODULE_1__lb_config__["a" /* LoopBackConfig */].debuggable())
            console.log.apply(console, args);
    };
    LoggerService.prototype.info = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (__WEBPACK_IMPORTED_MODULE_1__lb_config__["a" /* LoopBackConfig */].debuggable())
            console.info.apply(console, args);
    };
    LoggerService.prototype.error = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (__WEBPACK_IMPORTED_MODULE_1__lb_config__["a" /* LoopBackConfig */].debuggable())
            console.error.apply(console, args);
    };
    LoggerService.prototype.count = function (arg) {
        if (__WEBPACK_IMPORTED_MODULE_1__lb_config__["a" /* LoopBackConfig */].debuggable())
            console.count(arg);
    };
    LoggerService.prototype.group = function (arg) {
        if (__WEBPACK_IMPORTED_MODULE_1__lb_config__["a" /* LoopBackConfig */].debuggable())
            console.count(arg);
    };
    LoggerService.prototype.groupEnd = function () {
        if (__WEBPACK_IMPORTED_MODULE_1__lb_config__["a" /* LoopBackConfig */].debuggable())
            console.groupEnd();
    };
    LoggerService.prototype.profile = function (arg) {
        if (__WEBPACK_IMPORTED_MODULE_1__lb_config__["a" /* LoopBackConfig */].debuggable())
            console.count(arg);
    };
    LoggerService.prototype.profileEnd = function () {
        if (__WEBPACK_IMPORTED_MODULE_1__lb_config__["a" /* LoopBackConfig */].debuggable())
            console.profileEnd();
    };
    LoggerService.prototype.time = function (arg) {
        if (__WEBPACK_IMPORTED_MODULE_1__lb_config__["a" /* LoopBackConfig */].debuggable())
            console.time(arg);
    };
    LoggerService.prototype.timeEnd = function (arg) {
        if (__WEBPACK_IMPORTED_MODULE_1__lb_config__["a" /* LoopBackConfig */].debuggable())
            console.timeEnd(arg);
    };
    LoggerService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])()
    ], LoggerService);
    return LoggerService;
}());



/***/ }),

/***/ "../../../../../src/sdk/services/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__core_index__ = __webpack_require__("../../../../../src/sdk/services/core/index.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__custom_index__ = __webpack_require__("../../../../../src/sdk/services/custom/index.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__custom_index__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__custom_index__["b"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_1__custom_index__["c"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_1__custom_index__["d"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_1__custom_index__["e"]; });
/* tslint:disable */




/***/ }),

/***/ "../../../../../src/sdk/sockets/socket.browser.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SocketBrowser; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_socket_io_client__ = __webpack_require__("../../../../socket.io-client/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_socket_io_client___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_socket_io_client__);
/* tslint:disable */

/**
* @author Jonathan Casarrubias <twitter:@johncasarrubias> <github:@mean-expert-official>
* @module SocketBrowser
* @license MIT
* @description
* This module handle socket connections for web browsers, it will be DI Swapped
* depending on the platform environment.
* This module will be generated when the -d ng2web flag is set
**/
var SocketBrowser = /** @class */ (function () {
    function SocketBrowser() {
    }
    /**
     * @method connect
     * @param {string} url URL path to connect with the server.
     * @param {any} options Any socket.io v1 =< valid options
     * @return {any} Not currently a socket.io-client for web Typings implemented.
     * @description
     * This method will return a valid socket connection.
     **/
    SocketBrowser.prototype.connect = function (url, options) {
        return __WEBPACK_IMPORTED_MODULE_0_socket_io_client__(url, options);
    };
    return SocketBrowser;
}());



/***/ }),

/***/ "../../../../../src/sdk/sockets/socket.connections.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SocketConnection; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__socket_driver__ = __webpack_require__("../../../../../src/sdk/sockets/socket.driver.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__ = __webpack_require__("../../../../rxjs/_esm5/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_share__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/share.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__lb_config__ = __webpack_require__("../../../../../src/sdk/lb.config.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
/* tslint:disable */





/**
* @author Jonathan Casarrubias <twitter:@johncasarrubias> <github:@mean-expert-official>
* @module SocketConnection
* @license MIT
* @description
* This module handle socket connections and return singleton instances for each
* connection, it will use the SDK Socket Driver Available currently supporting
* Angular 2 for web, NativeScript 2 and Angular Universal.
**/
var SocketConnection = /** @class */ (function () {
    /**
     * @method constructor
     * @param {SocketDriver} driver Socket IO Driver
     * @param {NgZone} zone Angular 2 Zone
     * @description
     * The constructor will set references for the shared hot observables from
     * the class subjects. Then it will subscribe each of these observables
     * that will create a channel that later will be shared between subscribers.
     **/
    function SocketConnection(driver, zone) {
        this.driver = driver;
        this.zone = zone;
        this.subjects = {
            onConnect: new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["a" /* Subject */](),
            onDisconnect: new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["a" /* Subject */](),
            onAuthenticated: new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["a" /* Subject */](),
            onUnAuthorized: new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["a" /* Subject */]()
        };
        this.sharedObservables = {};
        this.authenticated = false;
        this.sharedObservables = {
            sharedOnConnect: this.subjects.onConnect.asObservable().share(),
            sharedOnDisconnect: this.subjects.onDisconnect.asObservable().share(),
            sharedOnAuthenticated: this.subjects.onAuthenticated.asObservable().share(),
            sharedOnUnAuthorized: this.subjects.onUnAuthorized.asObservable().share()
        };
        // This is needed to create the first channel, subsequents will share the connection
        // We are using Hot Observables to avoid duplicating connection status events.
        this.sharedObservables.sharedOnConnect.subscribe();
        this.sharedObservables.sharedOnDisconnect.subscribe();
        this.sharedObservables.sharedOnAuthenticated.subscribe();
        this.sharedObservables.sharedOnUnAuthorized.subscribe();
    }
    /**
     * @method connect
     * @param {AccessToken} token AccesToken instance
     * @return {void}
     * @description
     * This method will create a new socket connection when not previously established.
     * If there is a broken connection it will re-connect.
     **/
    SocketConnection.prototype.connect = function (token) {
        var _this = this;
        if (token === void 0) { token = null; }
        if (!this.socket) {
            console.info('Creating a new connection with: ', __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath());
            // Create new socket connection
            this.socket = this.driver.connect(__WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath(), {
                log: false,
                secure: __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].isSecureWebSocketsSet(),
                forceNew: true,
                forceWebsockets: true,
                transports: ['websocket']
            });
            // Listen for connection
            this.on('connect', function () {
                _this.subjects.onConnect.next('connected');
                // Authenticate or start heartbeat now    
                _this.emit('authentication', token);
            });
            // Listen for authentication
            this.on('authenticated', function () {
                _this.authenticated = true;
                _this.subjects.onAuthenticated.next();
                _this.heartbeater();
            });
            // Listen for authentication
            this.on('unauthorized', function (err) {
                _this.authenticated = false;
                _this.subjects.onUnAuthorized.next(err);
            });
            // Listen for disconnections
            this.on('disconnect', function (status) { return _this.subjects.onDisconnect.next(status); });
        }
        else if (this.socket && !this.socket.connected) {
            if (typeof this.socket.off === 'function') {
                this.socket.off();
            }
            if (typeof this.socket.destroy === 'function') {
                this.socket.destroy();
            }
            delete this.socket;
            this.connect(token);
        }
    };
    /**
     * @method isConnected
     * @return {boolean}
     * @description
     * This method will return true or false depending on established connections
     **/
    SocketConnection.prototype.isConnected = function () {
        return (this.socket && this.socket.connected);
    };
    /**
     * @method on
     * @param {string} event Event name
     * @param {Function} handler Event listener handler
     * @return {void}
     * @description
     * This method listen for server events from the current WebSocket connection.
     * This method is a facade that will wrap the original "on" method and run it
     * within the Angular Zone to avoid update issues.
     **/
    SocketConnection.prototype.on = function (event, handler) {
        var _this = this;
        this.socket.on(event, function (data) { return _this.zone.run(function () { return handler(data); }); });
    };
    /**
     * @method emit
     * @param {string} event Event name
     * @param {any=} data Any type of data
     * @return {void}
     * @description
     * This method will send any type of data to the server according the event set.
     **/
    SocketConnection.prototype.emit = function (event, data) {
        if (data) {
            this.socket.emit(event, data);
        }
        else {
            this.socket.emit(event);
        }
    };
    /**
     * @method removeListener
     * @param {string} event Event name
     * @param {Function} handler Event listener handler
     * @return {void}
     * @description
     * This method will wrap the original "on" method and run it within the Angular Zone
     * Note: off is being used since the nativescript socket io client does not provide
     * removeListener method, but only provides with off which is provided in any platform.
     **/
    SocketConnection.prototype.removeListener = function (event, handler) {
        if (typeof this.socket.off === 'function') {
            this.socket.off(event, handler);
        }
    };
    /**
     * @method removeAllListeners
     * @param {string} event Event name
     * @param {Function} handler Event listener handler
     * @return {void}
     * @description
     * This method will wrap the original "on" method and run it within the Angular Zone
     * Note: off is being used since the nativescript socket io client does not provide
     * removeListener method, but only provides with off which is provided in any platform.
     **/
    SocketConnection.prototype.removeAllListeners = function (event) {
        if (typeof this.socket.removeAllListeners === 'function') {
            this.socket.removeAllListeners(event);
        }
    };
    /**
     * @method disconnect
     * @return {void}
     * @description
     * This will disconnect the client from the server
     **/
    SocketConnection.prototype.disconnect = function () {
        this.socket.disconnect();
    };
    /**
     * @method heartbeater
     * @return {void}
     * @description
     * This will keep the connection as active, even when users are not sending
     * data, this avoids disconnection because of a connection not being used.
     **/
    SocketConnection.prototype.heartbeater = function () {
        var _this = this;
        var heartbeater = setInterval(function () {
            if (_this.isConnected()) {
                _this.socket.emit('lb-ping');
            }
            else {
                _this.socket.removeAllListeners('lb-pong');
                clearInterval(heartbeater);
            }
        }, 15000);
        this.socket.on('lb-pong', function (data) { return console.info('Heartbeat: ', data); });
    };
    SocketConnection = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__socket_driver__["a" /* SocketDriver */])),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Inject */])(__WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* NgZone */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__socket_driver__["a" /* SocketDriver */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* NgZone */]])
    ], SocketConnection);
    return SocketConnection;
}());



/***/ }),

/***/ "../../../../../src/sdk/sockets/socket.driver.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SocketDriver; });
/* tslint:disable */
/**
 * @module SocketDriver
 * @author Jonathan Casarrubias <t: johncasarrubias, gh: mean-expert-official>
 * @license MIT
 * @description
 * The SocketDriver class is used for dependency injection swapping.
 * It will be provided using factory method from different sources.
 **/
var SocketDriver = /** @class */ (function () {
    function SocketDriver() {
    }
    SocketDriver.prototype.connect = function (url, options) { };
    return SocketDriver;
}());



/***/ }),

/***/ "../../../../../src/sdk/storage/cookie.browser.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CookieBrowser; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/* tslint:disable */

/**
* @author Jonathan Casarrubias <twitter:@johncasarrubias> <github:@mean-expert-official>
* @module CookieBrowser
* @license MIT
* @description
* This module handle cookies, it will be provided using DI Swapping according the
* SDK Socket Driver Available currently supporting Angular 2 for web and NativeScript 2.
**/
var CookieBrowser = /** @class */ (function () {
    function CookieBrowser() {
        /**
         * @type {CookieInterface}
         **/
        this.cookies = {};
    }
    /**
     * @method get
     * @param {string} key Cookie key name
     * @return {any}
     * @description
     * The getter will return any type of data persisted in cookies.
     **/
    CookieBrowser.prototype.get = function (key) {
        if (!this.cookies[key]) {
            var cookie = window.document
                .cookie.split('; ')
                .filter(function (item) { return item.split('=')[0] === key; }).pop();
            if (!cookie) {
                return null;
            }
            this.cookies[key] = this.parse(cookie.split('=').slice(1).join('='));
        }
        return this.cookies[key];
    };
    /**
     * @method set
     * @param {string} key Cookie key name
     * @param {any} value Any value
     * @param {Date=} expires The date of expiration (Optional)
     * @return {void}
     * @description
     * The setter will return any type of data persisted in cookies.
     **/
    CookieBrowser.prototype.set = function (key, value, expires) {
        this.cookies[key] = value;
        var cookie = key + "=" + value + "; path=/" + (expires ? "; expires=" + expires.toUTCString() : '');
        window.document.cookie = cookie;
    };
    /**
     * @method remove
     * @param {string} key Cookie key name
     * @return {void}
     * @description
     * This method will remove a cookie from the client.
     **/
    CookieBrowser.prototype.remove = function (key) {
        document.cookie = key + '=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
        delete this.cookies[key];
    };
    /**
     * @method parse
     * @param {any} value Input data expected to be JSON
     * @return {void}
     * @description
     * This method will parse the string as JSON if possible, otherwise will
     * return the value itself.
     **/
    CookieBrowser.prototype.parse = function (value) {
        try {
            return JSON.parse(value);
        }
        catch (e) {
            return value;
        }
    };
    CookieBrowser = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])()
    ], CookieBrowser);
    return CookieBrowser;
}());



/***/ }),

/***/ "../../../../../src/sdk/storage/storage.browser.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StorageBrowser; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/* tslint:disable */

/**
* @author Jonathan Casarrubias <twitter:@johncasarrubias> <github:@mean-expert-official>
* @module StorageBrowser
* @license MIT
* @description
* This module handle localStorage, it will be provided using DI Swapping according the
* SDK Socket Driver Available currently supporting Angular 2 for web and NativeScript 2.
**/
var StorageBrowser = /** @class */ (function () {
    function StorageBrowser() {
    }
    /**
     * @method get
     * @param {string} key Storage key name
     * @return {any}
     * @description
     * The getter will return any type of data persisted in localStorage.
     **/
    StorageBrowser.prototype.get = function (key) {
        var data = localStorage.getItem(key);
        return this.parse(data);
    };
    /**
     * @method set
     * @param {string} key Storage key name
     * @param {any} value Any value
     * @return {void}
     * @description
     * The setter will return any type of data persisted in localStorage.
     **/
    StorageBrowser.prototype.set = function (key, value, expires) {
        localStorage.setItem(key, typeof value === 'object' ? JSON.stringify(value) : value);
    };
    /**
     * @method remove
     * @param {string} key Storage key name
     * @return {void}
     * @description
     * This method will remove a localStorage item from the client.
     **/
    StorageBrowser.prototype.remove = function (key) {
        if (localStorage[key]) {
            localStorage.removeItem(key);
        }
        else {
            console.log('Trying to remove unexisting key: ', key);
        }
    };
    /**
     * @method parse
     * @param {any} value Input data expected to be JSON
     * @return {void}
     * @description
     * This method will parse the string as JSON if possible, otherwise will
     * return the value itself.
     **/
    StorageBrowser.prototype.parse = function (value) {
        try {
            return JSON.parse(value);
        }
        catch (e) {
            return value;
        }
    };
    StorageBrowser = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])()
    ], StorageBrowser);
    return StorageBrowser;
}());



/***/ }),

/***/ "../../../../../src/sdk/storage/storage.swaps.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export BaseStorage */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InternalStorage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return SDKStorage; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/* tslint:disable */
/**
 * @module Storage
 * @author Jonathan Casarrubias <t: johncasarrubias, gh: mean-expert-official>
 * @license MIT
 * @description
 * The InternalStorage class is used for dependency injection swapping.
 * It will be provided using factory method from different sources.
 **/
var BaseStorage = /** @class */ (function () {
    function BaseStorage() {
    }
    /**
     * @method get
     * @param {string} key Storage key name
     * @return {any}
     * @description
     * The getter will return any type of data persisted in storage.
     **/
    BaseStorage.prototype.get = function (key) { };
    /**
     * @method set
     * @param {string} key Storage key name
     * @param {any} value Any value
     * @return {void}
     * @description
     * The setter will return any type of data persisted in localStorage.
     **/
    BaseStorage.prototype.set = function (key, value, expires) { };
    /**
     * @method remove
     * @param {string} key Storage key name
     * @return {void}
     * @description
     * This method will remove a localStorage item from the client.
     **/
    BaseStorage.prototype.remove = function (key) { };
    return BaseStorage;
}());

/**
 * @module InternalStorage
 * @author Jonathan Casarrubias <t: johncasarrubias, gh: mean-expert-official>
 * @license MIT
 * @description
 * The InternalStorage class is used for dependency injection swapping.
 * It will be provided using factory method from different sources.
 * This is mainly required because Angular Universal integration.
 * It does inject a CookieStorage instead of LocalStorage.
 **/
var InternalStorage = /** @class */ (function (_super) {
    __extends(InternalStorage, _super);
    function InternalStorage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return InternalStorage;
}(BaseStorage));

/**
 * @module SDKStorage
 * @author Jonathan Casarrubias <t: johncasarrubias, gh: mean-expert-official>
 * @license MIT
 * @description
 * The SDKStorage class is used for dependency injection swapping.
 * It will be provided using factory method according the right environment.
 * This is created for public usage, to allow persisting custom data
 * Into the local storage API.
 **/
var SDKStorage = /** @class */ (function (_super) {
    __extends(SDKStorage, _super);
    function SDKStorage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return SDKStorage;
}(BaseStorage));



/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ }),

/***/ 1:
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map