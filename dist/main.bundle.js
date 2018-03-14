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

module.exports = "<busy-indicator></busy-indicator>\r\n<router-outlet></router-outlet>"

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

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__modules_shared_module__ = __webpack_require__("../../../../../src/app/modules/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modules_core_module__ = __webpack_require__("../../../../../src/app/modules/core.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__modules_routes_home_routing_module__ = __webpack_require__("../../../../../src/app/modules/routes/home-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__modules_routes_account_routing_module__ = __webpack_require__("../../../../../src/app/modules/routes/account-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__modules_routes_root_routing_module__ = __webpack_require__("../../../../../src/app/modules/routes/root-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__modules_routes_user_routing_module__ = __webpack_require__("../../../../../src/app/modules/routes/user-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_account_signup_signup_component__ = __webpack_require__("../../../../../src/app/components/account/signup/signup.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_account_signin_signin_component__ = __webpack_require__("../../../../../src/app/components/account/signin/signin.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_account_signout_signout_component__ = __webpack_require__("../../../../../src/app/components/account/signout/signout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_home_homeLayout_component__ = __webpack_require__("../../../../../src/app/components/home/homeLayout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_home_main_main_component__ = __webpack_require__("../../../../../src/app/components/home/main/main.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_home_download_download_component__ = __webpack_require__("../../../../../src/app/components/home/download/download.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_home_about_about_component__ = __webpack_require__("../../../../../src/app/components/home/about/about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_misc_notFound_notFound_component__ = __webpack_require__("../../../../../src/app/components/misc/notFound/notFound.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_user_user_component__ = __webpack_require__("../../../../../src/app/components/user/user.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_account_manage_manage_component__ = __webpack_require__("../../../../../src/app/components/account/manage/manage.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_account_forget_password_forget_password_component__ = __webpack_require__("../../../../../src/app/components/account/forget-password/forget-password.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_home_charts_charts_component__ = __webpack_require__("../../../../../src/app/components/home/charts/charts.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_home_charts_stacked_area_chart_stacked_area_chart_component__ = __webpack_require__("../../../../../src/app/components/home/charts/stacked-area-chart/stacked-area-chart.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_control_busyIndicator_busy_indicator_component__ = __webpack_require__("../../../../../src/app/components/control/busyIndicator/busy-indicator.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__components_account_signup_completed_signup_completed_component__ = __webpack_require__("../../../../../src/app/components/account/signup-completed/signup-completed.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__components_account_activate_activate_component__ = __webpack_require__("../../../../../src/app/components/account/activate/activate.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24_ngx_echarts__ = __webpack_require__("../../../../ngx-echarts/ngx-echarts.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// ** Must ** //

// ** modules ** //






// ** components ** //

















// ** Echarts ** //

var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_23__components_account_activate_activate_component__["a" /* ActivateComponent */],
                __WEBPACK_IMPORTED_MODULE_8__components_account_signup_signup_component__["a" /* SignupComponent */],
                __WEBPACK_IMPORTED_MODULE_22__components_account_signup_completed_signup_completed_component__["a" /* SignupCompletedComponent */],
                __WEBPACK_IMPORTED_MODULE_9__components_account_signin_signin_component__["a" /* SigninComponent */],
                __WEBPACK_IMPORTED_MODULE_10__components_account_signout_signout_component__["a" /* SignoutComponent */],
                __WEBPACK_IMPORTED_MODULE_18__components_account_forget_password_forget_password_component__["a" /* ForgetPasswordComponent */],
                __WEBPACK_IMPORTED_MODULE_19__components_home_charts_charts_component__["a" /* ChartsComponent */],
                __WEBPACK_IMPORTED_MODULE_20__components_home_charts_stacked_area_chart_stacked_area_chart_component__["a" /* StackedAreaChartComponent */],
                __WEBPACK_IMPORTED_MODULE_11__components_home_homeLayout_component__["a" /* HomeLayoutComponent */],
                __WEBPACK_IMPORTED_MODULE_12__components_home_main_main_component__["a" /* HomeMainComponent */],
                __WEBPACK_IMPORTED_MODULE_13__components_home_download_download_component__["a" /* HomeDownloadComponent */],
                __WEBPACK_IMPORTED_MODULE_14__components_home_about_about_component__["a" /* HomeAboutComponent */],
                __WEBPACK_IMPORTED_MODULE_15__components_misc_notFound_notFound_component__["a" /* NotFoundComponent */],
                __WEBPACK_IMPORTED_MODULE_21__components_control_busyIndicator_busy_indicator_component__["a" /* BusyIndicatorComponent */],
                __WEBPACK_IMPORTED_MODULE_16__components_user_user_component__["a" /* UserComponent */],
                __WEBPACK_IMPORTED_MODULE_17__components_account_manage_manage_component__["a" /* ManageComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__modules_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_2__modules_core_module__["a" /* CoreModule */],
                __WEBPACK_IMPORTED_MODULE_3__modules_routes_home_routing_module__["a" /* HomeRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_4__modules_routes_account_routing_module__["a" /* AccountRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_6__modules_routes_user_routing_module__["a" /* UserRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_5__modules_routes_root_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_24_ngx_echarts__["a" /* NgxEchartsModule */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/common/consts.class.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Consts; });
var Consts = (function () {
    function Consts() {
    }
    Consts.AuthBaseUrl = 'http://localhost:9556/';
    return Consts;
}());



/***/ }),

/***/ "../../../../../src/app/common/event.class.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export EventArgs */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataEventArgs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return EventObserver; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return EventSubject; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_util__ = __webpack_require__("../../../../util/util.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_util___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_util__);
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

// ** Event Args ** //
var EventArgs = (function () {
    function EventArgs() {
    }
    return EventArgs;
}());

var DataEventArgs = (function (_super) {
    __extends(DataEventArgs, _super);
    function DataEventArgs(data) {
        var _this = _super.call(this) || this;
        _this.data = data;
        return _this;
    }
    Object.defineProperty(DataEventArgs.prototype, "Data", {
        get: function () {
            return this.data;
        },
        enumerable: true,
        configurable: true
    });
    return DataEventArgs;
}(EventArgs));

var EventObserver = (function () {
    function EventObserver(target, handler) {
        this.target = target;
        this.handler = handler;
    }
    EventObserver.prototype.Update = function (args) {
        this.handler(this.target, args);
    };
    return EventObserver;
}());

var EventSubject = (function () {
    function EventSubject() {
        this.observers = [];
    }
    EventSubject.prototype.Notify = function (args) {
        if (!Object(__WEBPACK_IMPORTED_MODULE_0_util__["isNullOrUndefined"])(this.observers)) {
            this.observers.forEach(function (o) {
                o.Update(args);
            });
        }
    };
    EventSubject.prototype.Attach = function (observer) {
        this.observers.push(observer);
    };
    EventSubject.prototype.Detach = function (observer) {
        var index = this.observers.indexOf(observer);
        if (index >= 0) {
            var temp_1 = [];
            this.observers.forEach(function (o) {
                if (o !== observer) {
                    temp_1.push(o);
                }
            });
            this.observers = temp_1;
        }
    };
    return EventSubject;
}());



/***/ }),

/***/ "../../../../../src/app/common/interface.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export CallbackWrapper */
/* harmony export (immutable) */ __webpack_exports__["a"] = FuncBinder;
var CallbackWrapper = (function () {
    function CallbackWrapper(target, func) {
        this._target = target;
        this._func = func;
    }
    CallbackWrapper.prototype.invoke = function (argArray) {
        this._func.apply(this._target, argArray);
    };
    return CallbackWrapper;
}());

function FuncBinder(target, func) {
    return func.bind(target);
}


/***/ }),

/***/ "../../../../../src/app/common/model.class.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ChangePasswordDto; });
var AccountModel = (function () {
    function AccountModel() {
    }
    return AccountModel;
}());

var ChangePasswordDto = (function () {
    function ChangePasswordDto() {
    }
    return ChangePasswordDto;
}());



/***/ }),

/***/ "../../../../../src/app/common/util.class.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export TypeEx */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return StringX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return HtmlX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Guid; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_util__ = __webpack_require__("../../../../util/util.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_util___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_util__);

var TypeEx = (function () {
    function TypeEx() {
    }
    return TypeEx;
}());

var StringX = (function () {
    function StringX() {
    }
    StringX.IsNullOrWhiteSpace = function (str) {
        if (Object(__WEBPACK_IMPORTED_MODULE_0_util__["isNullOrUndefined"])(str)) {
            return true;
        }
        var trimmed = str.trim();
        if (trimmed === '') {
            return true;
        }
        return false;
    };
    return StringX;
}());

var HtmlX = (function () {
    function HtmlX() {
    }
    HtmlX.TileBody = function () {
        HtmlX.TileBodyToWin();
        window.onresize = function (e) {
            HtmlX.TileBodyToWin();
        };
    };
    HtmlX.TileBodyToWin = function () {
        var h = HtmlX.GetClientHeight();
        var w = HtmlX.GetClientWidth();
        var body = document.getElementsByTagName('body')[0];
        body.style.width = w.toString() + 'px';
        body.style.height = h.toString() + 'px';
    };
    HtmlX.GetClientHeight = function () {
        return document.documentElement.clientHeight;
    };
    HtmlX.GetClientWidth = function () {
        return document.documentElement.clientWidth;
    };
    return HtmlX;
}());

var Guid = (function () {
    function Guid(str) {
        this.str = str || Guid.getNewGUIDString();
    }
    Guid.getNewGUIDString = function () {
        // your favourite guid generation function could go here
        // ex: http://stackoverflow.com/a/8809472/188246
        return Guid.s4() + Guid.s4() + '-' + Guid.s4() + '-' + Guid.s4() + '-' + Guid.s4() + '-' + Guid.s4() + Guid.s4() + Guid.s4();
    };
    Guid.s4 = function () {
        return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
    };
    Guid.prototype.toString = function () {
        return this.str;
    };
    return Guid;
}());



/***/ }),

/***/ "../../../../../src/app/common/validation.class.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = valdiatePassword;
function valdiatePassword(control) {
    var pwd = control.value;
    if (pwd.length < 6) {
        return { 'length': 'password must be longer than 6 characters' };
    }
    return null;
}


/***/ }),

/***/ "../../../../../src/app/components/account/activate/activate.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".activate-div {\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -ms-flex-direction: column;\r\n      flex-direction: column;\r\n  -ms-flex-pack: center;\r\n      justify-content: center;\r\n  -ms-flex-align: center;\r\n      align-items: center;\r\n}\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/account/activate/activate.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"activate-div\">\r\n  <img src='../../../../assets/success_bg.jpg' style=\"width: 100%; max-height: 250px\">\r\n  <h2>{{StatusMessage}}</h2>\r\n  <img *ngIf=\"IsAuthenticated\" src='../../../../assets/operationSuccessImage.png'>\r\n  <button *ngIf=\"IsAuthenticated\" type=\"submit\" mat-raised-button style=\"margin-top:30px\" (click)=\"DoNavigation()\">{{ButtonMessage}}</button>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/account/activate/activate.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActivateComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_status_inspector_service__ = __webpack_require__("../../../../../src/app/services/status-inspector.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common_interface__ = __webpack_require__("../../../../../src/app/common/interface.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__common_util_class__ = __webpack_require__("../../../../../src/app/common/util.class.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ActivateComponent = (function () {
    function ActivateComponent(activateRoute, router, auth, status) {
        this.activateRoute = activateRoute;
        this.router = router;
        this.auth = auth;
        this.status = status;
        this.seconds = 20;
        this.StatusMessage = 'The system is verifying your account. Please wait a moment.';
        this.ButtonMessage = 'Navigate to the home page';
        this.IsAuthenticated = false;
    }
    ActivateComponent.prototype.ngOnInit = function () { this.activate(); };
    ActivateComponent.prototype.activate = function () {
        var _this = this;
        this.activateRoute.queryParams.subscribe(function (queryParams) {
            var token = queryParams.token;
            if (__WEBPACK_IMPORTED_MODULE_5__common_util_class__["c" /* StringX */].IsNullOrWhiteSpace(token)) {
                _this.StatusMessage = 'Invalid link address to activate the account.';
            }
            else {
                _this.status.IsBusy = true;
                _this.auth.activate('auth/activate', token, Object(__WEBPACK_IMPORTED_MODULE_4__common_interface__["a" /* FuncBinder */])(_this, _this.onSuccess), Object(__WEBPACK_IMPORTED_MODULE_4__common_interface__["a" /* FuncBinder */])(_this, _this.onError));
            }
        });
    };
    ActivateComponent.prototype.onSuccess = function (response) {
        this.status.IsBusy = false;
        this.IsAuthenticated = true;
        this.StatusMessage = 'Congratulations, Active your account successfully!';
        this.countDown();
    };
    ActivateComponent.prototype.onError = function (error) {
        this.status.IsBusy = false;
        this.StatusMessage = error;
        this.countDown();
    };
    ActivateComponent.prototype.countDown = function () {
        var _this = this;
        window.setInterval(function () {
            _this.seconds -= 1;
            if (_this.seconds === 0) {
                _this.ButtonMessage = 'Navigate to the home page';
                _this.DoNavigation();
            }
            else {
                if (_this.seconds < 0) {
                    _this.seconds = 10;
                } // reset
                _this.ButtonMessage = "Navigate to the home page (" + _this.seconds + ")";
            }
        }, 1000);
    };
    ActivateComponent.prototype.DoNavigation = function () {
        this.router.navigate(['index']);
    };
    ActivateComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            // tslint:disable-next-line:component-selector
            selector: 'activate',
            template: __webpack_require__("../../../../../src/app/components/account/activate/activate.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/account/activate/activate.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* Auth */],
            __WEBPACK_IMPORTED_MODULE_3__services_status_inspector_service__["a" /* StatusInspector */]])
    ], ActivateComponent);
    return ActivateComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/account/forget-password/forget-password.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".fp-container {\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -ms-flex-direction: column;\r\n      flex-direction: column;\r\n  -ms-flex-align: center;\r\n      align-items: center;\r\n  background-image: url('data:image/jpeg;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAgCAIAAACKIl8oAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAD4gAAA+IARbIpYYAAAQGSURBVEhLTdYJchpLEIThuf8FJQQeJLYB3juEv+5fMeEKol1LVlb2IvByuVy+v7+v1+u6rp+fn5z7/X48Hv9Mk2TP59O6bdvtduMAsJx6Nb7fb1UtYF9fX0qL4Hw+Px4PoKDMPGWM8hyrfgb5er1QKAnBmKSQYxhNsbEFApf1dDqhrrmMUAMVGmR00sGR//n5aQcpg8ElIx8hfxwIUik1ICkFoWTq7vft/f7/dFpfr/+iY20ZLBEJshKh0TyAodo/BoBiN5/P+DJYLpcb3qlG4t7slEoVwhvDuiQZkxYI5Rg5yhxlDt6J03Y9HI6045oMgwKs/RljpBBJJVfKWehXs2pjuFrj5T8eruhXOC5IpUg5hXghrXzGx740kI3dzhPQI2w3wvNZaNdewhDYYCWYWT2Hr7eDkmEL/Y71cDjsh0sRK5zXsibcWau6WMk2qqsB5uEyUqgqr3cBYrhME0NQBBS7cNtc/VjdEKRm1Zx/MFsketMKs1SGk+VY6aJIA0foiAl3jbSj6NnpJzbDQnUZbMmCHNSy0IL0GpMvyYJa9+ZJOBxKkVrBOFZ5yJQtKPaTUuPoYcrWTtYwmFbNYdqrYy3DbCgFOMe79g9rbDcD1AydoBxoJSt/P1ZEQ/y8Q1VJYHkhDH8JjcscptA2dcLJJwGUTPmaYQzed9m9me05cwBsd5FF3S5IxsjX2XUBJdbK5xDYbacARkkSo2E20Rnwh2ompdbtwSloY76IEWm24tKTAx+M5PJIMGjn4GELdWKeHjgN/DluGAqP2nPwrn2ezzehPUdvKkcVxtP1gOfDGd8Bho2vJ2a+GQ5I1iS+881BMfc9Vq/bX7x+vg9Goffuw/eZsHGN1qHanM7I1swg38qcQ6cGFwCYb2fyZdoZjC5XRRw21MJx1nA1S3VpTg2CcMNkGGdsdRqkl6AZUp4ZFgNfrxlDdZOx6xFjn4cwris58hrGLuaXgZJJHHQx1ivDh+TTjmf8gJnjJcABCeNtB3GZLQOQiGYk0Hiw8qluKsygrjONqZAB2tnbDcdOiZIcguc3AbCwGapgMkLt47eRfgFcaGOgnWYbZKp45fkAWBiwvGSzE0eTvJAzfmWao2CsQiySVtaLJCdRVgAZLclqc9oToaV1fKmmpRSfYzVDv7xbjUszLhl+avrOYTBJ3p+AdfzJqMGZzPi9OXRtDUjeCinvPrAI6ZXHYpXHq8VgVHyZ8QMGKkbEAe0BKHNYJVwctqtm8B8fH8aDOShrquXBxrtOONLaIMxrB/xGKrG2wuT5YLaoEQCjEMaq0fr7pWqmWrq04eVoZtAyXSaY0KordVhgUpYmML719z9m+zRGlFCN7eh9JDq+JBgKvKpCvvcq6Yi0r+v6F0Rl5JaALqPJAAAAAElFTkSuQmCC');\r\n  background-repeat: repeat;\r\n  height: 100%;\r\n}\r\n\r\n.fp-box {\r\n  min-width: 800px;\r\n}\r\n\r\n.fp-input {\r\n  min-width: 300px;\r\n  -ms-flex-item-align: start;\r\n      align-self: flex-start;\r\n}\r\n\r\n.fp-item {\r\n  -ms-flex-item-align: start;\r\n      align-self: flex-start;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/account/forget-password/forget-password.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"fp-container\">\r\n\r\n  <div class=\"fp-box\" style=\"margin-top: 50px\">\r\n    <h4>\r\n      I forget my password\r\n    </h4>\r\n    <p>\r\n      To reset your password, enter the email address you use and confirm by your email\r\n      <strong>link</strong>.\r\n    </p>\r\n  </div>\r\n\r\n  <form class=\"fp-box\" #formBody [formGroup]=\"fpForm\" novalidate>\r\n\r\n    <mat-form-field class=\"fp-input\">\r\n      <input name=\"email\" matInput placeholder=\"Email\" formControlName=\"emailCtrl\" required>\r\n      <mat-hint>Please enter your email</mat-hint>\r\n      <mat-error *ngIf=\"fpForm.get('emailCtrl').hasError('required')\">\r\n        email is\r\n        <strong>required</strong>\r\n      </mat-error>\r\n      <mat-error *ngIf=\"!fpForm.get('emailCtrl').hasError('required') && fpForm.get('emailCtrl').hasError('email')\">\r\n        email format is not correct.\r\n      </mat-error>\r\n    </mat-form-field>\r\n\r\n  </form>\r\n\r\n  <div class=\"fp-box\">\r\n    <button mat-raised-button color=\"primary\" style=\"margin-top:30px\">Continue</button>\r\n    <a mat-button routerLink=\"../signin\">Back to Login</a>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/account/forget-password/forget-password.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForgetPasswordComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_status_inspector_service__ = __webpack_require__("../../../../../src/app/services/status-inspector.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common_model_class__ = __webpack_require__("../../../../../src/app/common/model.class.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_snack_tip_service__ = __webpack_require__("../../../../../src/app/services/snack-tip.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__common_interface__ = __webpack_require__("../../../../../src/app/common/interface.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__common_util_class__ = __webpack_require__("../../../../../src/app/common/util.class.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var ForgetPasswordComponent = (function () {
    function ForgetPasswordComponent(fb, auth, snack, status) {
        this.fb = fb;
        this.auth = auth;
        this.snack = snack;
        this.status = status;
        this.hasChecked = false;
        this.fpForm = this.fb.group({
            emailCtrl: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].email]],
        });
        __WEBPACK_IMPORTED_MODULE_7__common_util_class__["b" /* HtmlX */].TileBody();
    }
    ForgetPasswordComponent.prototype.continue = function () {
        if (this.fpForm.get('emailCtrl').errors) {
            this.snack.show('Not input correct email');
            return;
        }
        var model = new __WEBPACK_IMPORTED_MODULE_4__common_model_class__["a" /* AccountModel */]();
        model.Account = this.fpForm.get('emailCtrl').value;
        this.status.IsBusy = true;
        this.auth.signin('auth/forget-password', model, Object(__WEBPACK_IMPORTED_MODULE_6__common_interface__["a" /* FuncBinder */])(this, this.onSuccess), Object(__WEBPACK_IMPORTED_MODULE_6__common_interface__["a" /* FuncBinder */])(this, this.onError));
    };
    ForgetPasswordComponent.prototype.onSuccess = function (response) {
        this.hasChecked = true;
        this.status.IsBusy = false;
    };
    ForgetPasswordComponent.prototype.onError = function (error) {
        this.status.IsBusy = false;
        this.snack.show(error);
    };
    ForgetPasswordComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            // tslint:disable-next-line:component-selector
            selector: 'forget-password',
            template: __webpack_require__("../../../../../src/app/components/account/forget-password/forget-password.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/account/forget-password/forget-password.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* Auth */],
            __WEBPACK_IMPORTED_MODULE_5__services_snack_tip_service__["a" /* MessageSnack */],
            __WEBPACK_IMPORTED_MODULE_2__services_status_inspector_service__["a" /* StatusInspector */]])
    ], ForgetPasswordComponent);
    return ForgetPasswordComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/account/manage/manage.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\n.expansion-item {\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -ms-flex-direction: column;\r\n        flex-direction: column;\r\n    -ms-flex-align: center;\r\n        align-items: center;\r\n    max-width: 200;\r\n}\r\n\r\n.manage-container {\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -ms-flex-direction: row;\r\n        flex-direction: row;\r\n    -ms-flex-align: top;\r\n        align-items: top;\r\n}\r\n\r\n.content-header {\r\n    vertical-align: top\r\n}\r\n\r\n.change-password-form {\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -ms-flex-direction: column;\r\n        flex-direction: column;\r\n    vertical-align: top;\r\n    -ms-flex-align: center;\r\n        align-items: center;\r\n    height: 100%;\r\n  }\r\n\r\n  .change-password-spacer {\r\n    margin-top: 20px;\r\n  }\r\n\r\n  .password-input {\r\n    width: 300px;\r\n  }\r\n\r\n  .change-password-container{\r\n      margin-left: 40px;\r\n  }\r\n\r\n  .highlight-hyperlink{\r\n      color: cornflowerblue;\r\n  }\r\n\r\n  .transparent-div{\r\n      color: transparent;\r\n      border: 1.5px solid transparent;\r\n      background: transparent;\r\n  }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/account/manage/manage.component.html":
/***/ (function(module, exports) {

module.exports = "<home-layout></home-layout>\r\n<div class=\"manage-container\">\r\n    <div>\r\n        <div class=\"transparent-div\"></div>\r\n        <mat-accordion>\r\n            <mat-expansion-panel [expanded]=\"true\">\r\n                <mat-expansion-panel-header>\r\n                    <mat-panel-title>\r\n                        Account management\r\n                    </mat-panel-title>\r\n                </mat-expansion-panel-header>\r\n                <div class=\"expansion-item\">\r\n                    <a class=\"highlight-hyperlink\" mat-button routerLink=\"../change-password\" routerLinkActive=\"active\">Change password</a>\r\n                    <!-- <a mat-button routerLink=\"../../signin\" routerLinkActive=\"active\">Forget password</a> -->\r\n                </div>\r\n            </mat-expansion-panel>\r\n        </mat-accordion>\r\n        <!-- <mat-accordion>\r\n            <mat-expansion-panel>\r\n                <mat-expansion-panel-header>\r\n                    <mat-panel-title>\r\n                        Account management2\r\n                    </mat-panel-title>\r\n                </mat-expansion-panel-header>\r\n                <div class=\"expansion-item\">\r\n                    <a mat-button routerLink=\"../signin\" routerLinkActive=\"active\">Change password2</a>\r\n                    <a mat-button routerLink=\"../signin\" routerLinkActive=\"active\">Forget password2</a>\r\n                </div>\r\n            </mat-expansion-panel>\r\n        </mat-accordion> -->\r\n    </div>\r\n    <div class=\"change-password-container\">\r\n        <div>\r\n            <h1>Change Password</h1>\r\n        </div>\r\n        <div>\r\n            <form #formBody class=\"change-password-form\" [formGroup]=\"changePasswordForm\" novalidate (ngSubmit)=\"changePassword()\" [style.height]=\"\">\r\n                <mat-form-field class=\"password-input\" floatLabel=\"never\" hideRequiredMarker=\"false\">\r\n                    <input name=\"pwd\" type=\"password\" matInput formControlName=\"originalPasswordCtrl\" required>\r\n                    <mat-hint>Please enter your original password</mat-hint>\r\n                    <mat-error *ngIf=\"changePasswordForm.get('originalPasswordCtrl').hasError('length')\">\r\n                        {{changePasswordForm.get('originalPasswordCtrl').getError('length')}}\r\n                    </mat-error>\r\n                </mat-form-field>\r\n                <mat-form-field class=\"password-input\" floatLabel=\"never\" hideRequiredMarker=\"false\">\r\n                    <input name=\"pwd\" type=\"password\" matInput formControlName=\"newPasswordCtrl\" required>\r\n                    <mat-hint>Please enter your new password</mat-hint>\r\n                    <mat-error *ngIf=\"changePasswordForm.get('newPasswordCtrl').hasError('length')\">\r\n                        {{changePasswordForm.get('newPasswordCtrl').getError('length')}}\r\n                    </mat-error>\r\n                </mat-form-field>\r\n                <mat-form-field class=\"password-input\" floatLabel=\"never\" hideRequiredMarker=\"false\">\r\n                    <input name=\"pwd\" type=\"password\" matInput formControlName=\"comfirmNewPasswordCtrl\" required>\r\n                    <mat-hint>Please confirm your new password</mat-hint>\r\n                    <mat-error *ngIf=\"changePasswordForm.get('comfirmNewPasswordCtrl').hasError('length')\">\r\n                        {{changePasswordForm.get('comfirmNewPasswordCtrl').getError('length')}}\r\n                    </mat-error>\r\n                </mat-form-field>\r\n                <div class=\"change-password-spacer\"></div>\r\n                <button type=\"submit\" mat-raised-button>Change Password</button>\r\n            </form>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/account/manage/manage.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ManageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_validation_class__ = __webpack_require__("../../../../../src/app/common/validation.class.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_util_class__ = __webpack_require__("../../../../../src/app/common/util.class.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__common_interface__ = __webpack_require__("../../../../../src/app/common/interface.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_status_inspector_service__ = __webpack_require__("../../../../../src/app/services/status-inspector.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_snack_tip_service__ = __webpack_require__("../../../../../src/app/services/snack-tip.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__common_model_class__ = __webpack_require__("../../../../../src/app/common/model.class.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_account_service__ = __webpack_require__("../../../../../src/app/services/account.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var ManageComponent = (function () {
    function ManageComponent(router, accountService, auth, snack, status, fb) {
        this.router = router;
        this.accountService = accountService;
        this.auth = auth;
        this.snack = snack;
        this.status = status;
        this.fb = fb;
        this.IsAuthenticated = false;
        this.changePasswordForm = this.fb.group({
            originalPasswordCtrl: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__common_validation_class__["a" /* valdiatePassword */]]],
            newPasswordCtrl: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__common_validation_class__["a" /* valdiatePassword */]]],
            comfirmNewPasswordCtrl: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__common_validation_class__["a" /* valdiatePassword */]]]
        });
        this.IsAuthenticated = this.auth.IsAuthenticated;
        __WEBPACK_IMPORTED_MODULE_3__common_util_class__["b" /* HtmlX */].TileBody();
    }
    ManageComponent.prototype.changePassword = function () {
        if (this.changePasswordForm.get('originalPasswordCtrl').errors) {
            this.snack.show('Not input correct the orginal password.');
            return;
        }
        if (__WEBPACK_IMPORTED_MODULE_3__common_util_class__["c" /* StringX */].IsNullOrWhiteSpace(this.accountService.loginAccountName)) {
            this.snack.show('Please login first.');
            return;
        }
        var dto = new __WEBPACK_IMPORTED_MODULE_9__common_model_class__["b" /* ChangePasswordDto */]();
        dto.AccountName = this.accountService.loginAccountName;
        dto.OriginalPassword = this.changePasswordForm.get('originalPasswordCtrl').value;
        dto.NewPassword = this.changePasswordForm.get('newPasswordCtrl').value;
        dto.ConfirmNewPassword = this.changePasswordForm.get('comfirmNewPasswordCtrl').value;
        if (dto.NewPassword !== dto.ConfirmNewPassword) {
            this.snack.show('New passwords are not mismatch.');
            return;
        }
        this.status.IsBusy = true;
        this.auth.changePassword('auth/changepassword', dto, Object(__WEBPACK_IMPORTED_MODULE_6__common_interface__["a" /* FuncBinder */])(this, this.onSuccess), Object(__WEBPACK_IMPORTED_MODULE_6__common_interface__["a" /* FuncBinder */])(this, this.onError));
    };
    ManageComponent.prototype.onSuccess = function (response) {
        this.status.IsBusy = false;
        this.snack.show('Change password successfully!');
    };
    ManageComponent.prototype.onError = function (error) {
        this.status.IsBusy = false;
        this.snack.show(error);
    };
    ManageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            // tslint:disable-next-line:component-selector
            selector: 'manage',
            template: __webpack_require__("../../../../../src/app/components/account/manage/manage.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/account/manage/manage.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_10__services_account_service__["a" /* AccountService */],
            __WEBPACK_IMPORTED_MODULE_5__services_auth_service__["a" /* Auth */],
            __WEBPACK_IMPORTED_MODULE_8__services_snack_tip_service__["a" /* MessageSnack */],
            __WEBPACK_IMPORTED_MODULE_7__services_status_inspector_service__["a" /* StatusInspector */],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */]])
    ], ManageComponent);
    return ManageComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/account/signin/signin.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".signin-form {\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -ms-flex-direction: column;\r\n      flex-direction: column;\r\n  -ms-flex-align: center;\r\n      align-items: center;\r\n  background-image: url('data:image/jpeg;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAgCAIAAACKIl8oAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAD4gAAA+IARbIpYYAAAQGSURBVEhLTdYJchpLEIThuf8FJQQeJLYB3juEv+5fMeEKol1LVlb2IvByuVy+v7+v1+u6rp+fn5z7/X48Hv9Mk2TP59O6bdvtduMAsJx6Nb7fb1UtYF9fX0qL4Hw+Px4PoKDMPGWM8hyrfgb5er1QKAnBmKSQYxhNsbEFApf1dDqhrrmMUAMVGmR00sGR//n5aQcpg8ElIx8hfxwIUik1ICkFoWTq7vft/f7/dFpfr/+iY20ZLBEJshKh0TyAodo/BoBiN5/P+DJYLpcb3qlG4t7slEoVwhvDuiQZkxYI5Rg5yhxlDt6J03Y9HI6045oMgwKs/RljpBBJJVfKWehXs2pjuFrj5T8eruhXOC5IpUg5hXghrXzGx740kI3dzhPQI2w3wvNZaNdewhDYYCWYWT2Hr7eDkmEL/Y71cDjsh0sRK5zXsibcWau6WMk2qqsB5uEyUqgqr3cBYrhME0NQBBS7cNtc/VjdEKRm1Zx/MFsketMKs1SGk+VY6aJIA0foiAl3jbSj6NnpJzbDQnUZbMmCHNSy0IL0GpMvyYJa9+ZJOBxKkVrBOFZ5yJQtKPaTUuPoYcrWTtYwmFbNYdqrYy3DbCgFOMe79g9rbDcD1AydoBxoJSt/P1ZEQ/y8Q1VJYHkhDH8JjcscptA2dcLJJwGUTPmaYQzed9m9me05cwBsd5FF3S5IxsjX2XUBJdbK5xDYbacARkkSo2E20Rnwh2ompdbtwSloY76IEWm24tKTAx+M5PJIMGjn4GELdWKeHjgN/DluGAqP2nPwrn2ezzehPUdvKkcVxtP1gOfDGd8Bho2vJ2a+GQ5I1iS+881BMfc9Vq/bX7x+vg9Goffuw/eZsHGN1qHanM7I1swg38qcQ6cGFwCYb2fyZdoZjC5XRRw21MJx1nA1S3VpTg2CcMNkGGdsdRqkl6AZUp4ZFgNfrxlDdZOx6xFjn4cwris58hrGLuaXgZJJHHQx1ivDh+TTjmf8gJnjJcABCeNtB3GZLQOQiGYk0Hiw8qluKsygrjONqZAB2tnbDcdOiZIcguc3AbCwGapgMkLt47eRfgFcaGOgnWYbZKp45fkAWBiwvGSzE0eTvJAzfmWao2CsQiySVtaLJCdRVgAZLclqc9oToaV1fKmmpRSfYzVDv7xbjUszLhl+avrOYTBJ3p+AdfzJqMGZzPi9OXRtDUjeCinvPrAI6ZXHYpXHq8VgVHyZ8QMGKkbEAe0BKHNYJVwctqtm8B8fH8aDOShrquXBxrtOONLaIMxrB/xGKrG2wuT5YLaoEQCjEMaq0fr7pWqmWrq04eVoZtAyXSaY0KordVhgUpYmML719z9m+zRGlFCN7eh9JDq+JBgKvKpCvvcq6Yi0r+v6F0Rl5JaALqPJAAAAAElFTkSuQmCC');\r\n  background-repeat: repeat;\r\n  height: 100%;\r\n}\r\n\r\n.title-img{\r\n  height: 150px;\r\n  margin-top: 50px;\r\n  margin-bottom: 50px;\r\n}\r\n\r\n.signin-spacer {\r\n  margin-top: 20px;\r\n}\r\n\r\n.signin-input {\r\n  width: 300px;\r\n}\r\n\r\n.signup-link {\r\n  margin-top: 20px;\r\n  font-size: 12px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/account/signin/signin.component.html":
/***/ (function(module, exports) {

module.exports = "<form #formBody class=\"signin-form\" [formGroup]=\"signinForm\" novalidate (ngSubmit)=\"signin()\" [style.height]=\"\">\r\n  <img src=\"../../../../assets/title.png\" class=\"title-img\">\r\n\r\n  <mat-form-field class=\"signin-input\" floatLabel=\"never\" hideRequiredMarker=\"false\">\r\n    <input name=\"email\" matInput placeholder=\"Altoria@hotmail.com\" formControlName=\"emailCtrl\" required>\r\n    <mat-hint>Please enter your email</mat-hint>\r\n    <mat-error *ngIf=\"signinForm.get('emailCtrl').hasError('required')\">\r\n      email is\r\n      <strong>required</strong>\r\n    </mat-error>\r\n    <mat-error *ngIf=\"!signinForm.get('emailCtrl').hasError('required') && signinForm.get('emailCtrl').hasError('email')\">\r\n      email format is not correct.\r\n    </mat-error>\r\n  </mat-form-field>\r\n\r\n  <div class=\"signin-spacer\"></div>\r\n\r\n  <mat-form-field class=\"signin-input\" floatLabel=\"never\" hideRequiredMarker=\"false\">\r\n    <input name=\"pwd\" type=\"password\" matInput formControlName=\"pwdCtrl\" required>\r\n    <mat-hint>Please enter your password</mat-hint>\r\n    <mat-error *ngIf=\"signinForm.get('pwdCtrl').hasError('length')\">\r\n      {{signinForm.get('pwdCtrl').getError('length')}}\r\n    </mat-error>\r\n  </mat-form-field>\r\n\r\n\r\n  <button type=\"submit\" mat-raised-button color=\"primary\" style=\"margin-top:30px\">Login</button>\r\n    <a class=\"signup-link\" href=\"../account/signup\">Create a new account</a>\r\n    <a class=\"signup-link\" href=\"../account/forget-password\">Forget password?</a>\r\n</form>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/account/signin/signin.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SigninComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_status_inspector_service__ = __webpack_require__("../../../../../src/app/services/status-inspector.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_validation_class__ = __webpack_require__("../../../../../src/app/common/validation.class.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__common_model_class__ = __webpack_require__("../../../../../src/app/common/model.class.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_snack_tip_service__ = __webpack_require__("../../../../../src/app/services/snack-tip.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__common_interface__ = __webpack_require__("../../../../../src/app/common/interface.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__common_util_class__ = __webpack_require__("../../../../../src/app/common/util.class.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_account_service__ = __webpack_require__("../../../../../src/app/services/account.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var SigninComponent = (function () {
    function SigninComponent(accountService, route, router, fb, auth, snack, status) {
        this.accountService = accountService;
        this.route = route;
        this.router = router;
        this.fb = fb;
        this.auth = auth;
        this.snack = snack;
        this.status = status;
        this.signinForm = this.fb.group({
            emailCtrl: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].email]],
            pwdCtrl: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__common_validation_class__["a" /* valdiatePassword */]]],
        });
        __WEBPACK_IMPORTED_MODULE_9__common_util_class__["b" /* HtmlX */].TileBody();
    }
    SigninComponent.prototype.signin = function () {
        if (this.signinForm.get('emailCtrl').errors) {
            this.snack.show('Not input correct email');
            return;
        }
        if (this.signinForm.get('pwdCtrl').errors) {
            this.snack.show('Not input correct password');
            return;
        }
        var model = new __WEBPACK_IMPORTED_MODULE_6__common_model_class__["a" /* AccountModel */]();
        model.Account = this.signinForm.get('emailCtrl').value;
        model.Password = this.signinForm.get('pwdCtrl').value;
        this.status.IsBusy = true;
        this.auth.signin('auth/signin', model, Object(__WEBPACK_IMPORTED_MODULE_8__common_interface__["a" /* FuncBinder */])(this, this.onSuccess), Object(__WEBPACK_IMPORTED_MODULE_8__common_interface__["a" /* FuncBinder */])(this, this.onError));
    };
    SigninComponent.prototype.onSuccess = function (response) {
        this.status.IsBusy = false;
        this.accountService.loginAccountName = this.signinForm.get('emailCtrl').value;
        this.router.navigate(['index']);
    };
    SigninComponent.prototype.onError = function (error) {
        this.status.IsBusy = false;
        this.snack.show(error);
    };
    SigninComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            // tslint:disable-next-line:component-selector
            selector: 'sign-in',
            template: __webpack_require__("../../../../../src/app/components/account/signin/signin.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/account/signin/signin.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_10__services_account_service__["a" /* AccountService */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_5__services_auth_service__["a" /* Auth */],
            __WEBPACK_IMPORTED_MODULE_7__services_snack_tip_service__["a" /* MessageSnack */],
            __WEBPACK_IMPORTED_MODULE_2__services_status_inspector_service__["a" /* StatusInspector */]])
    ], SigninComponent);
    return SigninComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/account/signout/signout.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/account/signout/signout.component.html":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "../../../../../src/app/components/account/signout/signout.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignoutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SignoutComponent = (function () {
    function SignoutComponent() {
    }
    SignoutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            // tslint:disable-next-line:component-selector
            selector: 'sign-out',
            template: __webpack_require__("../../../../../src/app/components/account/signout/signout.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/account/signout/signout.component.css")]
        })
    ], SignoutComponent);
    return SignoutComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/account/signup-completed/signup-completed.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".signup-completed-div {\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -ms-flex-direction: column;\r\n        flex-direction: column;\r\n    -ms-flex-pack: center;\r\n        justify-content: center;\r\n    -ms-flex-align: center;\r\n        align-items: center;\r\n  }\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/account/signup-completed/signup-completed.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"signup-completed-div\">\r\n    <img src='../../../../assets/success_bg.jpg' style=\"width: 100%; max-height: 250px\">\r\n    <h2>An verification email is already sent to you!</h2>\r\n    <br>\r\n    <p>\r\n      Please check your email and <strong>activate</strong> your account as soon as possible.\r\n    </p>\r\n    <button type=\"submit\" mat-raised-button style=\"margin-top:30px\" (click)=\"DoNavigation()\">{{message}}</button>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/account/signup-completed/signup-completed.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupCompletedComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SignupCompletedComponent = (function () {
    function SignupCompletedComponent(route, router) {
        this.route = route;
        this.router = router;
        this.intervalId = 0;
        this.seconds = 20;
        this.message = 'Navigate to the home page';
    }
    SignupCompletedComponent.prototype.clearTimer = function () { clearInterval(this.intervalId); };
    SignupCompletedComponent.prototype.ngOnInit = function () { this.countDown(); };
    SignupCompletedComponent.prototype.ngOnDestroy = function () { this.clearTimer(); };
    SignupCompletedComponent.prototype.countDown = function () {
        var _this = this;
        this.clearTimer();
        this.intervalId = window.setInterval(function () {
            _this.seconds -= 1;
            if (_this.seconds === 0) {
                _this.message = 'Navigate to the home page';
                _this.DoNavigation();
            }
            else {
                if (_this.seconds < 0) {
                    _this.seconds = 10;
                } // reset
                _this.message = "Navigate to the home page (" + _this.seconds + ")";
            }
        }, 1000);
    };
    SignupCompletedComponent.prototype.DoNavigation = function () {
        this.router.navigate(['index']);
    };
    SignupCompletedComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            // tslint:disable-next-line:component-selector
            selector: 'signup-completed',
            template: __webpack_require__("../../../../../src/app/components/account/signup-completed/signup-completed.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/account/signup-completed/signup-completed.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], SignupCompletedComponent);
    return SignupCompletedComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/account/signup/signup.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".signup-form {\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -ms-flex-direction: column;\r\n      flex-direction: column;\r\n  -ms-flex-align: center;\r\n      align-items: center;\r\n  background-image: url('data:image/jpeg;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAgCAIAAACKIl8oAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAD4gAAA+IARbIpYYAAAQGSURBVEhLTdYJchpLEIThuf8FJQQeJLYB3juEv+5fMeEKol1LVlb2IvByuVy+v7+v1+u6rp+fn5z7/X48Hv9Mk2TP59O6bdvtduMAsJx6Nb7fb1UtYF9fX0qL4Hw+Px4PoKDMPGWM8hyrfgb5er1QKAnBmKSQYxhNsbEFApf1dDqhrrmMUAMVGmR00sGR//n5aQcpg8ElIx8hfxwIUik1ICkFoWTq7vft/f7/dFpfr/+iY20ZLBEJshKh0TyAodo/BoBiN5/P+DJYLpcb3qlG4t7slEoVwhvDuiQZkxYI5Rg5yhxlDt6J03Y9HI6045oMgwKs/RljpBBJJVfKWehXs2pjuFrj5T8eruhXOC5IpUg5hXghrXzGx740kI3dzhPQI2w3wvNZaNdewhDYYCWYWT2Hr7eDkmEL/Y71cDjsh0sRK5zXsibcWau6WMk2qqsB5uEyUqgqr3cBYrhME0NQBBS7cNtc/VjdEKRm1Zx/MFsketMKs1SGk+VY6aJIA0foiAl3jbSj6NnpJzbDQnUZbMmCHNSy0IL0GpMvyYJa9+ZJOBxKkVrBOFZ5yJQtKPaTUuPoYcrWTtYwmFbNYdqrYy3DbCgFOMe79g9rbDcD1AydoBxoJSt/P1ZEQ/y8Q1VJYHkhDH8JjcscptA2dcLJJwGUTPmaYQzed9m9me05cwBsd5FF3S5IxsjX2XUBJdbK5xDYbacARkkSo2E20Rnwh2ompdbtwSloY76IEWm24tKTAx+M5PJIMGjn4GELdWKeHjgN/DluGAqP2nPwrn2ezzehPUdvKkcVxtP1gOfDGd8Bho2vJ2a+GQ5I1iS+881BMfc9Vq/bX7x+vg9Goffuw/eZsHGN1qHanM7I1swg38qcQ6cGFwCYb2fyZdoZjC5XRRw21MJx1nA1S3VpTg2CcMNkGGdsdRqkl6AZUp4ZFgNfrxlDdZOx6xFjn4cwris58hrGLuaXgZJJHHQx1ivDh+TTjmf8gJnjJcABCeNtB3GZLQOQiGYk0Hiw8qluKsygrjONqZAB2tnbDcdOiZIcguc3AbCwGapgMkLt47eRfgFcaGOgnWYbZKp45fkAWBiwvGSzE0eTvJAzfmWao2CsQiySVtaLJCdRVgAZLclqc9oToaV1fKmmpRSfYzVDv7xbjUszLhl+avrOYTBJ3p+AdfzJqMGZzPi9OXRtDUjeCinvPrAI6ZXHYpXHq8VgVHyZ8QMGKkbEAe0BKHNYJVwctqtm8B8fH8aDOShrquXBxrtOONLaIMxrB/xGKrG2wuT5YLaoEQCjEMaq0fr7pWqmWrq04eVoZtAyXSaY0KordVhgUpYmML719z9m+zRGlFCN7eh9JDq+JBgKvKpCvvcq6Yi0r+v6F0Rl5JaALqPJAAAAAElFTkSuQmCC');\r\n  height: 100%;\r\n}\r\n\r\n.title-img{\r\n  height: 150px;\r\n  margin-top: 50px;\r\n  margin-bottom: 50px;\r\n}\r\n\r\n.signup-input {\r\n  margin-top: 15px;\r\n  width: 300px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/account/signup/signup.component.html":
/***/ (function(module, exports) {

module.exports = "<form class=\"signup-form\" [formGroup]=\"signupForm\" novalidate (ngSubmit)=\"signup()\">\r\n    <img src=\"../../../../assets/title.png\" class=\"title-img\">\r\n    <mat-form-field class=\"signup-input\" floatLabel=\"never\" hideRequiredMarker=\"false\">\r\n        <input name=\"email\" matInput placeholder=\"Altoria@hotmail.com\" formControlName=\"emailCtrl\" required>\r\n        <mat-hint>Please enter your email</mat-hint>\r\n        <mat-error *ngIf=\"signupForm.get('emailCtrl').hasError('required')\">\r\n            email is\r\n            <strong>required</strong>\r\n        </mat-error>\r\n        <mat-error *ngIf=\"!signupForm.get('emailCtrl').hasError('required') && signupForm.get('emailCtrl').hasError('email')\">\r\n            email format is not correct.\r\n        </mat-error>\r\n    </mat-form-field>\r\n\r\n    <mat-form-field class=\"signup-input\" floatLabel=\"never\" hideRequiredMarker=\"false\">\r\n        <input name=\"pwd\" type=\"password\" matInput formControlName=\"pwdCtrl\" required>\r\n        <mat-hint>Please enter your password</mat-hint>\r\n        <mat-error *ngIf=\"signupForm.get('pwdCtrl').hasError('length')\">\r\n            {{signupForm.get('pwdCtrl').getError('length')}}\r\n        </mat-error>\r\n    </mat-form-field>\r\n\r\n    <mat-form-field class=\"signup-input\" floatLabel=\"never\" hideRequiredMarker=\"false\">\r\n        <input name=\"pwd2\" type=\"password\" matInput formControlName=\"pwd2Ctrl\" required>\r\n        <mat-hint>Please confirm your password</mat-hint>\r\n        <mat-error *ngIf=\"signupForm.get('pwd2Ctrl').hasError('length')\">\r\n            {{signupForm.get('pwd2Ctrl').getError('length')}}\r\n        </mat-error>\r\n    </mat-form-field>\r\n\r\n    <mat-form-field class=\"signup-input\" floatLabel=\"never\" hideRequiredMarker=\"false\">\r\n        <input name=\"chaptcha\" type=\"text\" matInput formControlName=\"chaptchaCtrl\" required>\r\n        <span matSuffix>\r\n            <img [hidden]=\"IsChaptchaGot\" src=\"../../../../assets/chaptcha_placeholder.png\">\r\n            <img [hidden]=\"!IsChaptchaGot\" id=\"chaptcha\" (click)=\"getChaptcha()\">\r\n        </span>\r\n        <mat-hint>Please input the chaptcha</mat-hint>\r\n        <mat-error *ngIf=\"signupForm.get('chaptchaCtrl').hasError('required')\">\r\n            chaptcha is\r\n            <strong>required</strong>\r\n        </mat-error>\r\n    </mat-form-field>\r\n\r\n    <button type=\"submit\" mat-button color=\"primary\" style=\"margin-top:30px\">Register</button>\r\n</form>\r\n<div>\r\n    <img id=\"chaptcha\">\r\n    <a href=\"http://localhost:54968/get/File\">This is test</a>\r\n    email Value: {{signupForm.get('emailCtrl').value}}\r\n    <br> control value: {{signupForm.get('emailCtrl').value}}\r\n    <br> status: {{signupForm.get('emailCtrl').status}}\r\n    <br> prisitne: {{signupForm.get('emailCtrl').pristine}}\r\n    <br> untouched {{signupForm.get('emailCtrl').untouched}}\r\n    <br>\r\n    <br> {{password}}\r\n    <br> {{password2}}\r\n    <br>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/account/signup/signup.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_status_inspector_service__ = __webpack_require__("../../../../../src/app/services/status-inspector.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_validation_class__ = __webpack_require__("../../../../../src/app/common/validation.class.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__common_model_class__ = __webpack_require__("../../../../../src/app/common/model.class.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__common_interface__ = __webpack_require__("../../../../../src/app/common/interface.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_snack_tip_service__ = __webpack_require__("../../../../../src/app/services/snack-tip.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__common_util_class__ = __webpack_require__("../../../../../src/app/common/util.class.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_account_service__ = __webpack_require__("../../../../../src/app/services/account.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var SignupComponent = (function () {
    function SignupComponent(accountService, fb, router, auth, snack, status) {
        this.accountService = accountService;
        this.fb = fb;
        this.router = router;
        this.auth = auth;
        this.snack = snack;
        this.status = status;
        this.IsChaptchaGot = false;
        this.signupForm = this.fb.group({
            emailCtrl: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].email]],
            pwdCtrl: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__common_validation_class__["a" /* valdiatePassword */]]],
            pwd2Ctrl: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__common_validation_class__["a" /* valdiatePassword */]]],
            chaptchaCtrl: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required]]
        });
        __WEBPACK_IMPORTED_MODULE_9__common_util_class__["b" /* HtmlX */].TileBody();
        this.getChaptcha();
    }
    SignupComponent.prototype.signup = function () {
        var pwd1 = this.signupForm.get('pwdCtrl').value;
        var pwd2 = this.signupForm.get('pwd2Ctrl').value;
        var chaptcha = this.signupForm.get('chaptchaCtrl').value;
        if (this.signupForm.get('emailCtrl').errors) {
            this.snack.show('Not input correct email');
            return;
        }
        if (this.signupForm.get('chaptchaCtrl').errors) {
            this.snack.show('Chaptcha is required');
            return;
        }
        if (this.signupForm.get('pwdCtrl').errors || this.signupForm.get('pwd2Ctrl').errors) {
            this.snack.show('Not input correct password');
            return;
        }
        if (pwd1 !== pwd2) {
            this.snack.show('The input passwords are Inconsistent!');
            return;
        }
        var model = new __WEBPACK_IMPORTED_MODULE_5__common_model_class__["a" /* AccountModel */]();
        model.Account = this.signupForm.get('emailCtrl').value;
        model.Password = pwd1;
        model.Password2 = pwd2;
        model.Chaptcha = chaptcha;
        this.status.IsBusy = true;
        this.auth.signup('auth/signup', model, Object(__WEBPACK_IMPORTED_MODULE_7__common_interface__["a" /* FuncBinder */])(this, this.onSuccess), Object(__WEBPACK_IMPORTED_MODULE_7__common_interface__["a" /* FuncBinder */])(this, this.onError));
    };
    SignupComponent.prototype.getChaptcha = function () {
        this.auth.getChaptcha('res/captcha/get', Object(__WEBPACK_IMPORTED_MODULE_7__common_interface__["a" /* FuncBinder */])(this, this.onGetCaptchaSuccess), Object(__WEBPACK_IMPORTED_MODULE_7__common_interface__["a" /* FuncBinder */])(this, this.onGetCaptchaError));
    };
    SignupComponent.prototype.onSuccess = function (response) {
        this.status.IsBusy = false;
        this.accountService.loginAccountName = this.signupForm.get('emailCtrl').value;
        this.router.navigate(['account/signup-completed']);
    };
    SignupComponent.prototype.onError = function (error) {
        this.status.IsBusy = false;
        this.snack.show(error);
    };
    SignupComponent.prototype.onGetCaptchaSuccess = function (response) {
        var imgBuffer = response.body.Content;
        var testImg = document.getElementById('chaptcha');
        testImg.src = 'data:image/png;base64,' + imgBuffer;
        this.IsChaptchaGot = true;
    };
    SignupComponent.prototype.onGetCaptchaError = function (error) {
        this.snack.show(error);
        this.IsChaptchaGot = false;
    };
    SignupComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            // tslint:disable-next-line:component-selector
            selector: 'sign-up',
            template: __webpack_require__("../../../../../src/app/components/account/signup/signup.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/account/signup/signup.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_10__services_account_service__["a" /* AccountService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_6__services_auth_service__["a" /* Auth */],
            __WEBPACK_IMPORTED_MODULE_8__services_snack_tip_service__["a" /* MessageSnack */],
            __WEBPACK_IMPORTED_MODULE_2__services_status_inspector_service__["a" /* StatusInspector */]])
    ], SignupComponent);
    return SignupComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/control/busyIndicator/busy-indicator.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".busy-bar {\r\n    position: absolute;\r\n    z-index: 100;\r\n    width: 100%;\r\n}\r\n\r\n.progress-bar {\r\n    height: 2px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/control/busyIndicator/busy-indicator.component.html":
/***/ (function(module, exports) {

module.exports = "<div [hidden]=\"!IsBusy\" class=\"busy-bar\">\r\n    <mat-progress-bar class=\"progress-bar\" mode=\"indeterminate\" ></mat-progress-bar>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/control/busyIndicator/busy-indicator.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BusyIndicatorComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_status_inspector_service__ = __webpack_require__("../../../../../src/app/services/status-inspector.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_event_class__ = __webpack_require__("../../../../../src/app/common/event.class.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BusyIndicatorComponent = (function () {
    function BusyIndicatorComponent(statusInspector) {
        this.statusInspector = statusInspector;
        this.isBusyObserver = new __WEBPACK_IMPORTED_MODULE_2__common_event_class__["b" /* EventObserver */](this, this.OnIsBusyChanged);
        this.statusInspector.IsBusyEventSubject.Attach(this.isBusyObserver);
        this.IsBusy = false;
    }
    BusyIndicatorComponent.prototype.OnIsBusyChanged = function (o, args) {
        if (args !== null) {
            o.IsBusy = args.Data;
        }
    };
    BusyIndicatorComponent.prototype.Cleanup = function () {
        this.statusInspector.IsBusyEventSubject.Detach(this.isBusyObserver);
    };
    BusyIndicatorComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            // tslint:disable-next-line:component-selector
            selector: 'busy-indicator',
            template: __webpack_require__("../../../../../src/app/components/control/busyIndicator/busy-indicator.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/control/busyIndicator/busy-indicator.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_status_inspector_service__["a" /* StatusInspector */]])
    ], BusyIndicatorComponent);
    return BusyIndicatorComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/home/about/about.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/home/about/about.component.html":
/***/ (function(module, exports) {

module.exports = "<div>This is about page</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/home/about/about.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeAboutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var HomeAboutComponent = (function () {
    function HomeAboutComponent() {
    }
    HomeAboutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            // tslint:disable-next-line:component-selector
            selector: 'home-about',
            template: __webpack_require__("../../../../../src/app/components/home/about/about.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/home/about/about.component.css")]
        })
    ], HomeAboutComponent);
    return HomeAboutComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/home/charts/charts.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".left-chart-nav{\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -ms-flex-direction: column;\r\n        flex-direction: column;\r\n    background-color:rgb(41,60,85);\r\n    height: 100%;\r\n}\r\n\r\n.chart-type-item{\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -ms-flex-direction: row;\r\n        flex-direction: row;\r\n    width: 100%;\r\n    height: 55px;\r\n}\r\n\r\n.chart-type-link {\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -ms-flex-direction: row;\r\n        flex-direction: row;\r\n    margin-top: 7px;\r\n}\r\n\r\n.chart-type-image{\r\n    width: 40px;\r\n    height: 40px;\r\n}\r\n\r\n.chart-type-spacer{\r\n    width: 10px;\r\n    height: 40px;\r\n}\r\n\r\n.chart-type-text{\r\n    width: 50px;\r\n    height: 40px;\r\n    font-family: Arial, Helvetica, sans-serif;\r\n    color: aliceblue;\r\n}\r\n\r\n.chart-type-text:active{\r\n    text-decoration: none;\r\n} \r\n\r\n.sidenav-content-container{\r\n    background-color: lightgray;\r\n}\r\n\r\n.chart-detail-content{\r\n    height:1200px;\r\n    margin-left: 20px;\r\n    padding-top: 60px;\r\n}\r\n\r\n.chart-content-spacer{\r\n    margin-top: 20px;\r\n}\r\n\r\n.chart-content-text{\r\n    font-family: Arial, Helvetica, sans-serif;\r\n    font-weight: bold;\r\n    padding-top: 75px;\r\n}\r\n\r\n.chart-title-text{\r\n    font-family: Arial, Helvetica, sans-serif;\r\n}\r\n\r\n.chart-detail-images-container{\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -ms-flex-direction: row;\r\n        flex-direction: row;\r\n}\r\n\r\n.chart-detail-image{\r\n    width: 200px;\r\n    height: 200px;\r\n}\r\n\r\n.fixed-left-side-nav{\r\n    position: fixed;\r\n    left: 0px;\r\n    top: 63px;\r\n    z-index: 1100;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/home/charts/charts.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-sidenav-container>\r\n    <mat-sidenav mode=\"side\" opened=\"true\" class=\"fixed-left-side-nav\">\r\n        <div class=\"left-chart-nav\">\r\n            <div class=\"chart-type-item\">\r\n                <button mat-button>\r\n                    <a href=\"home/charts/#LineCharts\">\r\n                        <div class=\"chart-type-link\">\r\n                            <div>\r\n                                <img src='../../../../assets/LineChartImage.png' class=\"chart-type-image\">\r\n                            </div>\r\n                            <div class=\"chart-type-spacer\"></div>\r\n                            <div class=\"chart-type-text\">Line</div>\r\n                        </div>\r\n                    </a>\r\n                </button>\r\n            </div>\r\n            <div class=\"chart-type-item\">\r\n                <button mat-button>\r\n                    <a href=\"home/charts/#BarCharts\">\r\n                        <div class=\"chart-type-link\">\r\n                            <div>\r\n                                <img src='../../../../assets/BarChartImage.png' class=\"chart-type-image\">\r\n                            </div>\r\n                            <div class=\"chart-type-spacer\"></div>\r\n                            <div class=\"chart-type-text\">Bar</div>\r\n                        </div>\r\n                    </a>\r\n                </button>\r\n            </div>\r\n        </div>\r\n    </mat-sidenav>\r\n    <mat-sidenav-content class=\"sidenav-content-container\">\r\n        <div class=\"chart-detail-content\">\r\n            <div class=\"chart-content-spacer\"></div>\r\n            <a id=\"LineCharts\" class=\"chart-content-text\">Line</a>\r\n            <div class=\"chart-content-spacer\"></div>\r\n            <div class=\"chart-detail-images-container\">\r\n                <div>\r\n                    <a mat-button routerLink=\"../charts/stacked-area-chart\" routerLinkActive=\"active\">\r\n                        <div>\r\n                            <p class=\"chart-title-text\">Stacked Area Chart</p>\r\n                            <img class=\"chart-detail-image\" src='../../../../assets/StackedAreaChart.png'>\r\n                        </div>\r\n                    </a>\r\n                </div>\r\n                <div>\r\n                    <a mat-button routerLink=\"../charts/stacked-area-chart\" routerLinkActive=\"active\">\r\n                        <div>\r\n                            <p class=\"chart-title-text\">Stacked Area Chart2</p>\r\n                            <img class=\"chart-detail-image\" src='../../../../assets/StackedAreaChart.png'>\r\n                        </div>\r\n                    </a>\r\n                </div>\r\n            </div>\r\n            <div class=\"chart-content-spacer\"></div>\r\n            <a id=\"BarCharts\" class=\"chart-content-text\">Bar</a>\r\n            <div class=\"chart-content-spacer\"></div>\r\n            <div>\r\n                <a mat-button routerLink=\"../charts/stacked-area-chart\" routerLinkActive=\"active\">\r\n                    <div>\r\n                        <p class=\"chart-title-text\">Stacked Area Chart3</p>\r\n                        <img class=\"chart-detail-image\" src='../../../../assets/StackedAreaChart.png'>\r\n                    </div>\r\n                </a>\r\n            </div>\r\n        </div>\r\n    </mat-sidenav-content>\r\n</mat-sidenav-container>"

/***/ }),

/***/ "../../../../../src/app/components/home/charts/charts.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChartsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ChartsComponent = (function () {
    function ChartsComponent() {
    }
    ChartsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            // tslint:disable-next-line:component-selector
            selector: 'charts',
            template: __webpack_require__("../../../../../src/app/components/home/charts/charts.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/home/charts/charts.component.css")]
        })
    ], ChartsComponent);
    return ChartsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/home/charts/stacked-area-chart/stacked-area-chart.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".chart-container{\r\n    margin-left: 40px;\r\n}\r\n\r\n.stacked-area-chart {\r\n    width: 800px;\r\n    height: 400px;\r\n}\r\n\r\n.chart-header-container{\r\n    padding-top: 60px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/home/charts/stacked-area-chart/stacked-area-chart.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"chart-container\">\r\n    <div class=\"chart-header-container\">\r\n        <h1>Stacked Area Chart</h1>\r\n    </div>\r\n    <div echarts [options]=\"chartOption\" class=\"stacked-area-chart\"></div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/home/charts/stacked-area-chart/stacked-area-chart.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StackedAreaChartComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_util_class__ = __webpack_require__("../../../../../src/app/common/util.class.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var StackedAreaChartComponent = (function () {
    function StackedAreaChartComponent() {
        this.chartOption = {
            title: {
                text: '堆叠区域图'
            },
            tooltip: {
                trigger: 'axis'
            },
            legend: {
                data: ['邮件营销', '联盟广告', '视频广告', '直接访问', '搜索引擎']
            },
            toolbox: {
                feature: {
                    saveAsImage: {}
                }
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis: [
                {
                    type: 'category',
                    boundaryGap: false,
                    data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
                }
            ],
            yAxis: [
                {
                    type: 'value'
                }
            ],
            series: [
                {
                    name: '邮件营销',
                    type: 'line',
                    stack: '总量',
                    areaStyle: { normal: {} },
                    data: [120, 132, 101, 134, 90, 230, 210]
                },
                {
                    name: '联盟广告',
                    type: 'line',
                    stack: '总量',
                    areaStyle: { normal: {} },
                    data: [220, 182, 191, 234, 290, 330, 310]
                },
                {
                    name: '视频广告',
                    type: 'line',
                    stack: '总量',
                    areaStyle: { normal: {} },
                    data: [150, 232, 201, 154, 190, 330, 410]
                },
                {
                    name: '直接访问',
                    type: 'line',
                    stack: '总量',
                    areaStyle: { normal: {} },
                    data: [320, 332, 301, 334, 390, 330, 320]
                },
                {
                    name: '搜索引擎',
                    type: 'line',
                    stack: '总量',
                    label: {
                        normal: {
                            show: true,
                            position: 'top'
                        }
                    },
                    areaStyle: { normal: {} },
                    data: [820, 932, 901, 934, 1290, 1330, 1320]
                }
            ]
        };
        __WEBPACK_IMPORTED_MODULE_1__common_util_class__["b" /* HtmlX */].TileBody();
    }
    StackedAreaChartComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            // tslint:disable-next-line:component-selector
            selector: 'stacked-area-chart',
            template: __webpack_require__("../../../../../src/app/components/home/charts/stacked-area-chart/stacked-area-chart.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/home/charts/stacked-area-chart/stacked-area-chart.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], StackedAreaChartComponent);
    return StackedAreaChartComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/home/download/download.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/home/download/download.component.html":
/***/ (function(module, exports) {

module.exports = "<div>This is download page</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/home/download/download.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeDownloadComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var HomeDownloadComponent = (function () {
    function HomeDownloadComponent() {
    }
    HomeDownloadComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            // tslint:disable-next-line:component-selector
            selector: 'home-download',
            template: __webpack_require__("../../../../../src/app/components/home/download/download.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/home/download/download.component.css")]
        })
    ], HomeDownloadComponent);
    return HomeDownloadComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/home/homeLayout.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".toolbar {\r\n\r\n}\r\n\r\n.title-img-container {\r\n    width: 100px;\r\n    height: auto;\r\n}\r\n\r\n.title-img {\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\n\r\n.toolbar-item-container {\r\n    height: 100%;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -ms-flex-direction: row;\r\n        flex-direction: row;\r\n    -ms-flex-align: center;\r\n        align-items: center;\r\n    min-width: 100px;\r\n}\r\n\r\n.toolbar-item {\r\n    height: 100%;\r\n}\r\n\r\n.toolbar-spacer {\r\n    -ms-flex: 1 1 auto;\r\n        flex: 1 1 auto;\r\n}\r\n\r\n.toolbar-icon {\r\n    font-size: 24px;\r\n}\r\n\r\n.navbar-fixed-top{\r\n    position: fixed;\r\n    left: 0px;\r\n    right: 0px;\r\n    z-index: 1050;\r\n}\r\n\r\n.dropdown-content a {\r\n    color:black;\r\n    padding:8px 0px 8px 16px;\r\n    text-decoration:none;\r\n    display:block;\r\n    text-align: left;\r\n}\r\n\r\n.dropdown-content a:hover {\r\n    background-color: #fdfdfd\r\n}\r\n\r\n.dropdown:hover .dropdown-content {\r\n    visibility: visible;\r\n    opacity: 1;\r\n    filter:alpha(opacity=100); \r\n}\r\n  \r\n.dropdown {\r\n    display:inline-block;\r\n    height: 100%;\r\n}\r\n\r\n.dropdown-content {\r\n    visibility: hidden;\r\n    opacity: 0;\r\n    filter:alpha(opacity=0);\r\n    transition: opacity 1s;\r\n    position:absolute;\r\n    top:110%;\r\n    background-color:#f9f9f9;\r\n    min-width:120px;\r\n    box-shadow:0px 8px 16px 0px rgba(0,0,0,0.2);\r\n}\r\n\r\n.dropdown-content::after {\r\n    content: \"\";\r\n    position: absolute;\r\n    bottom: 100%;\r\n    left: 40px; \r\n    border-width: 6px;\r\n    border-style: solid;\r\n    border-color: transparent transparent #9c9999 transparent;\r\n}\r\n\r\n.transparent-space{\r\n    height: 6px;\r\n    background: transparent;\r\n    opacity: 0;\r\n    visibility: hidden;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/home/homeLayout.component.html":
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html> <!-- support :hover selector for IE -->\r\n<html>\r\n  <head>\r\n      <meta charset=\"utf-8\"> \r\n      <title>To Be Determined</title> \r\n  </head>\r\n  <body>\r\n    <div class=\"navbar-fixed-top\">\r\n      <mat-toolbar color=\"primary\" [class.mat-elevation-z2]=\"true\">\r\n        <mat-toolbar-row>\r\n          <span class=\"title-img-container\">\r\n            <img src=\"../../../../assets/title.png\" class=\"title-img\">\r\n          </span>\r\n          <span class=\"toolbar-item-container\" style=\"margin-left:50px\">\r\n            <button class=\"toolbar-item\" (click)=\"home()\" mat-button>HOME</button>\r\n          </span>\r\n          <span class=\"toolbar-item-container\" style=\"margin-left:50px\">\r\n              <div class=\"dropdown\">\r\n                  <button class=\"toolbar-item\" (click)=\"navigateToCharts()\" mat-button>CHARTS</button>\r\n                  <div>\r\n                    <div class=\"transparent-space\"></div>\r\n                    <div class=\"dropdown-content\">\r\n                        <a href=\"home/charts\" mat-button>Generator</a>\r\n                        <a href=\"home/charts\" target=\"_blank\" mat-button>Favorite</a>\r\n                    </div>\r\n                  </div>\r\n              </div>\r\n          </span>\r\n          <span class=\"toolbar-spacer\"></span>\r\n          <div>\r\n            <button *ngIf=\"IsAuthenticated\" mat-button (click)='navigateToManagementPage()'>{{loginAccountName}}</button>\r\n          </div>\r\n          <span class=\"toolbar-item-container\">\r\n              <button class=\"toolbar-item\" *ngIf=\"!IsAuthenticated\" mat-button (click)='signin()'>Login</button>\r\n              <button class=\"toolbar-item\" *ngIf=\"IsAuthenticated\" mat-button (click)='signout()'>Logout</button>\r\n          </span>\r\n        </mat-toolbar-row>\r\n      </mat-toolbar>\r\n    </div>\r\n    <router-outlet></router-outlet>\r\n  </body>\r\n</html>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/components/home/homeLayout.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeLayoutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_event_class__ = __webpack_require__("../../../../../src/app/common/event.class.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_account_service__ = __webpack_require__("../../../../../src/app/services/account.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HomeLayoutComponent = (function () {
    function HomeLayoutComponent(route, router, accountService, auth) {
        this.route = route;
        this.router = router;
        this.accountService = accountService;
        this.auth = auth;
        this.IsAuthenticated = false;
        this.loginAccountName = this.accountService.loginAccountName;
        this.authObserver = new __WEBPACK_IMPORTED_MODULE_3__common_event_class__["b" /* EventObserver */](this, this.onAuthenticationChanged);
        this.auth.AuthChangeSubject.Attach(this.authObserver);
        this.IsAuthenticated = this.auth.IsAuthenticated;
        if (this.IsAuthenticated) {
            this.loginAccountName = this.accountService.loginAccountName;
        }
    }
    HomeLayoutComponent.prototype.home = function () {
        this.router.navigate(['index']);
    };
    HomeLayoutComponent.prototype.signin = function () {
        this.router.navigate(['account/signin']);
    };
    HomeLayoutComponent.prototype.signout = function () {
        this.auth.signout();
        this.router.navigate(['home/index']);
    };
    HomeLayoutComponent.prototype.navigateToManagementPage = function () {
        this.router.navigate(['account/manage/change-password']);
    };
    HomeLayoutComponent.prototype.navigateToCharts = function () {
        this.router.navigate(['home/charts']);
    };
    HomeLayoutComponent.prototype.onAuthenticationChanged = function (o, args) {
        if (args !== null) {
            o.IsAuthenticated = args.Data;
        }
    };
    HomeLayoutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            // tslint:disable-next-line:component-selector
            selector: 'home-layout',
            template: __webpack_require__("../../../../../src/app/components/home/homeLayout.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/home/homeLayout.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_4__services_account_service__["a" /* AccountService */],
            __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* Auth */]])
    ], HomeLayoutComponent);
    return HomeLayoutComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/home/main/main.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/home/main/main.component.html":
/***/ (function(module, exports) {

module.exports = "<div>This is main page</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/home/main/main.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeMainComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var HomeMainComponent = (function () {
    function HomeMainComponent() {
    }
    HomeMainComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            // tslint:disable-next-line:component-selector
            selector: 'home-main',
            template: __webpack_require__("../../../../../src/app/components/home/main/main.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/home/main/main.component.css")]
        })
    ], HomeMainComponent);
    return HomeMainComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/misc/notFound/notFound.component.css":
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__("../../../../css-loader/lib/url/escape.js");
exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".content-image {\r\n  background-image: url(" + escape(__webpack_require__("../../../../../src/assets/404.png")) + ");\r\n  height: 100%;\r\n  width: 100%;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/misc/notFound/notFound.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content-image\"></div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/misc/notFound/notFound.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotFoundComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_util_class__ = __webpack_require__("../../../../../src/app/common/util.class.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NotFoundComponent = (function () {
    function NotFoundComponent() {
        __WEBPACK_IMPORTED_MODULE_1__common_util_class__["b" /* HtmlX */].TileBody();
    }
    NotFoundComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            // tslint:disable-next-line:component-selector
            selector: 'not-found',
            template: __webpack_require__("../../../../../src/app/components/misc/notFound/notFound.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/misc/notFound/notFound.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NotFoundComponent);
    return NotFoundComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/user/user.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".profile-imag {\r\n    width: 100%;\r\n    height: 100%;\r\n  }\r\n\r\n.user-profile\r\n{\r\n    -ms-flex-direction: row;\r\n        flex-direction: row\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/user/user.component.html":
/***/ (function(module, exports) {

module.exports = "<div class='user-profile'>\r\n    <div class='user-profile'>\r\n        <img src='../../../assets/title.png' class='profile-image'>\r\n    </div>\r\n    <div class='user-profile'>\r\n        <h2>user name</h2>\r\n    </div>\r\n</div>\r\n<div>\r\n    \r\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/user/user.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var UserComponent = (function () {
    function UserComponent() {
    }
    UserComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            // tslint:disable-next-line:component-selector
            selector: 'user',
            template: __webpack_require__("../../../../../src/app/components/user/user.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/user/user.component.css")]
        })
    ], UserComponent);
    return UserComponent;
}());



/***/ }),

/***/ "../../../../../src/app/modules/core.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoreModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_httpx_service__ = __webpack_require__("../../../../../src/app/services/httpx.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_auth_Interceptor_service__ = __webpack_require__("../../../../../src/app/services/auth-Interceptor.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_status_inspector_service__ = __webpack_require__("../../../../../src/app/services/status-inspector.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_logger_service__ = __webpack_require__("../../../../../src/app/services/logger.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_snack_tip_service__ = __webpack_require__("../../../../../src/app/services/snack-tip.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_session_service__ = __webpack_require__("../../../../../src/app/services/session.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_account_service__ = __webpack_require__("../../../../../src/app/services/account.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


// ** service **








var CoreModule = (function () {
    function CoreModule() {
    }
    CoreModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [],
            exports: [],
            providers: [
                __WEBPACK_IMPORTED_MODULE_9__services_account_service__["a" /* AccountService */],
                __WEBPACK_IMPORTED_MODULE_2__services_httpx_service__["a" /* HttpX */],
                __WEBPACK_IMPORTED_MODULE_5__services_status_inspector_service__["a" /* StatusInspector */],
                __WEBPACK_IMPORTED_MODULE_6__services_logger_service__["a" /* Logger */],
                __WEBPACK_IMPORTED_MODULE_7__services_snack_tip_service__["a" /* MessageSnack */],
                __WEBPACK_IMPORTED_MODULE_8__services_session_service__["a" /* Session */],
                __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* Auth */],
                {
                    provide: __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HTTP_INTERCEPTORS */],
                    useClass: __WEBPACK_IMPORTED_MODULE_4__services_auth_Interceptor_service__["a" /* AuthInterceptor */],
                    multi: true,
                }
            ],
        })
    ], CoreModule);
    return CoreModule;
}());



/***/ }),

/***/ "../../../../../src/app/modules/material.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MaterialModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_cdk_table__ = __webpack_require__("../../../cdk/esm5/table.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MaterialModule = (function () {
    function MaterialModule() {
    }
    MaterialModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_cdk_table__["m" /* CdkTableModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["a" /* MatAutocompleteModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["b" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["c" /* MatButtonToggleModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["d" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["e" /* MatCheckboxModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["f" /* MatChipsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["B" /* MatStepperModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["g" /* MatDatepickerModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["h" /* MatDialogModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["i" /* MatExpansionModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["j" /* MatGridListModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["k" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["l" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["m" /* MatListModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["n" /* MatMenuModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["o" /* MatNativeDateModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["p" /* MatPaginatorModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["q" /* MatProgressBarModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["r" /* MatProgressSpinnerModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["s" /* MatRadioModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["t" /* MatRippleModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["u" /* MatSelectModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["v" /* MatSidenavModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["x" /* MatSliderModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["w" /* MatSlideToggleModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["z" /* MatSnackBarModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["A" /* MatSortModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["C" /* MatTableModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["D" /* MatTabsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["E" /* MatToolbarModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["F" /* MatTooltipModule */],
            ]
        })
    ], MaterialModule);
    return MaterialModule;
}());



/***/ }),

/***/ "../../../../../src/app/modules/routes/account-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_account_signup_signup_component__ = __webpack_require__("../../../../../src/app/components/account/signup/signup.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_account_signin_signin_component__ = __webpack_require__("../../../../../src/app/components/account/signin/signin.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_account_signout_signout_component__ = __webpack_require__("../../../../../src/app/components/account/signout/signout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_account_manage_manage_component__ = __webpack_require__("../../../../../src/app/components/account/manage/manage.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_account_forget_password_forget_password_component__ = __webpack_require__("../../../../../src/app/components/account/forget-password/forget-password.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_account_signup_completed_signup_completed_component__ = __webpack_require__("../../../../../src/app/components/account/signup-completed/signup-completed.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_account_activate_activate_component__ = __webpack_require__("../../../../../src/app/components/account/activate/activate.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









// ** components ** //
// ** router **
var accountRoutes = [
    {
        path: 'account',
        children: [
            {
                path: 'signup',
                component: __WEBPACK_IMPORTED_MODULE_2__components_account_signup_signup_component__["a" /* SignupComponent */]
            },
            {
                path: 'signin',
                component: __WEBPACK_IMPORTED_MODULE_3__components_account_signin_signin_component__["a" /* SigninComponent */]
            },
            {
                path: 'signout',
                component: __WEBPACK_IMPORTED_MODULE_4__components_account_signout_signout_component__["a" /* SignoutComponent */]
            },
            {
                path: 'forget-password',
                component: __WEBPACK_IMPORTED_MODULE_6__components_account_forget_password_forget_password_component__["a" /* ForgetPasswordComponent */]
            },
            {
                path: 'signup-completed',
                component: __WEBPACK_IMPORTED_MODULE_7__components_account_signup_completed_signup_completed_component__["a" /* SignupCompletedComponent */]
            },
            {
                path: 'activate',
                component: __WEBPACK_IMPORTED_MODULE_8__components_account_activate_activate_component__["a" /* ActivateComponent */]
            },
            {
                path: 'manage/change-password',
                component: __WEBPACK_IMPORTED_MODULE_5__components_account_manage_manage_component__["a" /* ManageComponent */]
            }
        ]
    }
];
var AccountRoutingModule = (function () {
    function AccountRoutingModule() {
    }
    AccountRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forChild(accountRoutes)
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]
            ]
        })
    ], AccountRoutingModule);
    return AccountRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/modules/routes/home-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_home_main_main_component__ = __webpack_require__("../../../../../src/app/components/home/main/main.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_home_download_download_component__ = __webpack_require__("../../../../../src/app/components/home/download/download.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_home_about_about_component__ = __webpack_require__("../../../../../src/app/components/home/about/about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_home_homeLayout_component__ = __webpack_require__("../../../../../src/app/components/home/homeLayout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_home_charts_charts_component__ = __webpack_require__("../../../../../src/app/components/home/charts/charts.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_home_charts_stacked_area_chart_stacked_area_chart_component__ = __webpack_require__("../../../../../src/app/components/home/charts/stacked-area-chart/stacked-area-chart.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








// ** components ** //
// ** router **
var homeRoutes = [
    {
        path: 'home',
        component: __WEBPACK_IMPORTED_MODULE_5__components_home_homeLayout_component__["a" /* HomeLayoutComponent */],
        children: [
            {
                path: 'index',
                component: __WEBPACK_IMPORTED_MODULE_2__components_home_main_main_component__["a" /* HomeMainComponent */]
            },
            {
                path: 'download',
                component: __WEBPACK_IMPORTED_MODULE_3__components_home_download_download_component__["a" /* HomeDownloadComponent */]
            },
            {
                path: 'about',
                component: __WEBPACK_IMPORTED_MODULE_4__components_home_about_about_component__["a" /* HomeAboutComponent */]
            },
            {
                path: 'charts',
                component: __WEBPACK_IMPORTED_MODULE_6__components_home_charts_charts_component__["a" /* ChartsComponent */]
            },
            {
                path: 'charts/stacked-area-chart',
                component: __WEBPACK_IMPORTED_MODULE_7__components_home_charts_stacked_area_chart_stacked_area_chart_component__["a" /* StackedAreaChartComponent */]
            },
            {
                path: '',
                redirectTo: 'index',
                pathMatch: 'full'
            }
        ]
    },
];
var HomeRoutingModule = (function () {
    function HomeRoutingModule() {
    }
    HomeRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forChild(homeRoutes)
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]
            ]
        })
    ], HomeRoutingModule);
    return HomeRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/modules/routes/root-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_misc_notFound_notFound_component__ = __webpack_require__("../../../../../src/app/components/misc/notFound/notFound.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



// ** router **
var appRoutes = [
    {
        path: 'index',
        redirectTo: '/home/index',
        pathMatch: 'full'
    },
    {
        path: '',
        redirectTo: '/home/index',
        pathMatch: 'full'
    },
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_2__components_misc_notFound_notFound_component__["a" /* NotFoundComponent */] }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forRoot(appRoutes)
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]
            ]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/modules/routes/user-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_user_user_component__ = __webpack_require__("../../../../../src/app/components/user/user.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var userRoutes = [
    {
        path: 'user',
        children: [
            {
                path: 'index',
                component: __WEBPACK_IMPORTED_MODULE_2__components_user_user_component__["a" /* UserComponent */]
            }
        ]
    }
];
var UserRoutingModule = (function () {
    function UserRoutingModule() {
    }
    UserRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forChild(userRoutes)
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]
            ]
        })
    ], UserRoutingModule);
    return UserRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/modules/shared.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__material_module__ = __webpack_require__("../../../../../src/app/modules/material.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var SharedModule = (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["d" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["i" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["d" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_common_http__["c" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_7__material_module__["a" /* MaterialModule */]
            ]
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ }),

/***/ "../../../../../src/app/services/account.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AccountService = (function () {
    function AccountService() {
        this.loginAccountName = '';
    }
    AccountService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])()
    ], AccountService);
    return AccountService;
}());



/***/ }),

/***/ "../../../../../src/app/services/auth-Interceptor.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthInterceptor; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AuthInterceptor = (function () {
    function AuthInterceptor() {
    }
    AuthInterceptor.prototype.intercept = function (req, next) {
        // Get the auth header from the service.
        // const authHeader = this.auth.getAuthorizationHeader();
        var authHeader = '';
        // Clone the request to add the new header.
        var authReq = req.clone({ headers: req.headers.set('Authorization', authHeader) });
        // Pass on the cloned request instead of the original request.
        return next.handle(authReq);
    };
    AuthInterceptor = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], AuthInterceptor);
    return AuthInterceptor;
}());



/***/ }),

/***/ "../../../../../src/app/services/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Auth; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__httpx_service__ = __webpack_require__("../../../../../src/app/services/httpx.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__status_inspector_service__ = __webpack_require__("../../../../../src/app/services/status-inspector.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__logger_service__ = __webpack_require__("../../../../../src/app/services/logger.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__common_util_class__ = __webpack_require__("../../../../../src/app/common/util.class.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__common_event_class__ = __webpack_require__("../../../../../src/app/common/event.class.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__common_consts_class__ = __webpack_require__("../../../../../src/app/common/consts.class.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__session_service__ = __webpack_require__("../../../../../src/app/services/session.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__account_service__ = __webpack_require__("../../../../../src/app/services/account.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var Auth = (function () {
    function Auth(httpx, statusInpsector, accountService, session, log) {
        this.httpx = httpx;
        this.statusInpsector = statusInpsector;
        this.accountService = accountService;
        this.session = session;
        this.log = log;
        this.url = __WEBPACK_IMPORTED_MODULE_8__common_consts_class__["a" /* Consts */].AuthBaseUrl;
        this._authChangeSubject = new __WEBPACK_IMPORTED_MODULE_7__common_event_class__["c" /* EventSubject */]();
    }
    Object.defineProperty(Auth.prototype, "token", {
        get: function () {
            return this._token;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Auth.prototype, "AuthChangeSubject", {
        get: function () {
            return this._authChangeSubject;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Auth.prototype, "IsAuthenticated", {
        get: function () {
            return !__WEBPACK_IMPORTED_MODULE_5__common_util_class__["c" /* StringX */].IsNullOrWhiteSpace(this.token);
        },
        enumerable: true,
        configurable: true
    });
    Auth.prototype.checkToken = function () {
        return true;
    };
    Auth.prototype.signup = function (uri, body, success, err) {
        var _this = this;
        var route = this.url + uri;
        this.httpx.post(route, body, function (data) {
            if (success) {
                success(data);
            }
            _this._token = data.body.Token;
        }, function (error) {
            if (err) {
                var message = 'Unexpected error';
                if (error instanceof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpErrorResponse */]) {
                    message = error.statusText;
                }
                err(message);
            }
            _this.handleError(error);
        });
    };
    Auth.prototype.signin = function (uri, body, success, err) {
        this.postAuth(uri, body, success, err);
        this.onAuthChanged();
    };
    Auth.prototype.signout = function () {
        this._token = '';
        this.accountService.loginAccountName = '';
        this.onAuthChanged();
    };
    Auth.prototype.changePassword = function (uri, body, success, err) {
        this.postAuth(uri, body, success, err);
    };
    Auth.prototype.getChaptcha = function (uri, success, err) {
        var body = {
            session_id: this.session.Session_Id
        };
        this.postAuth(uri, body, success, err);
    };
    Auth.prototype.forgetPassword = function (uri, body, success, err) {
        this.postAuth(uri, body, success, err);
    };
    Auth.prototype.activate = function (uri, token, success, err) {
        var _this = this;
        var route = this.url + uri + '?token=' + token;
        this.httpx.get(route, function (data) {
            if (success) {
                success(data);
            }
            _this._token = data.Token;
            _this.onAuthChanged();
        }, function (error) {
            if (err) {
                var message = 'Unexpected error';
                if (error instanceof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpErrorResponse */]) {
                    message = error.statusText;
                }
                err(message);
            }
            _this.handleError(error);
        });
    };
    Auth.prototype.onAuthChanged = function () {
        this.AuthChangeSubject.Notify(new __WEBPACK_IMPORTED_MODULE_7__common_event_class__["a" /* DataEventArgs */](this.IsAuthenticated));
    };
    Auth.prototype.handleError = function (err) {
        this.log.Error(err);
        this.statusInpsector.IsBusy = false;
    };
    Auth.prototype.postAuth = function (uri, body, success, err) {
        var _this = this;
        var route = this.url + uri;
        this.httpx.post(route, body, function (data) {
            if (success) {
                success(data);
            }
            _this._token = data.body.Token;
        }, function (error) {
            if (err) {
                var message = 'Unexpected error';
                if (error instanceof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpErrorResponse */]) {
                    message = error.statusText;
                }
                err(message);
            }
            _this.handleError(error);
        });
    };
    Auth = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__httpx_service__["a" /* HttpX */],
            __WEBPACK_IMPORTED_MODULE_3__status_inspector_service__["a" /* StatusInspector */],
            __WEBPACK_IMPORTED_MODULE_10__account_service__["a" /* AccountService */],
            __WEBPACK_IMPORTED_MODULE_9__session_service__["a" /* Session */],
            __WEBPACK_IMPORTED_MODULE_4__logger_service__["a" /* Logger */]])
    ], Auth);
    return Auth;
}());



/***/ }),

/***/ "../../../../../src/app/services/httpx.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HttpX; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_util__ = __webpack_require__("../../../../util/util.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_util___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_util__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__logger_service__ = __webpack_require__("../../../../../src/app/services/logger.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HttpX = (function () {
    function HttpX(http, log) {
        this.http = http;
        this.log = log;
    }
    HttpX.prototype.get = function (url, callback, errCallback) {
        var _this = this;
        this.http.get(url).subscribe(function (data) {
            if (callback) {
                callback(data);
            }
        }, function (err) {
            if (errCallback) {
                errCallback(err);
            }
            if (err.error instanceof Error) {
                // client side or network error occured, handle it accordingly.
            }
            else {
                _this.log.Debug("Backend returned code " + err.status + ", body was: " + err.error);
            }
        });
    };
    HttpX.prototype.getFile = function (url, callback, errCallback) {
        var _this = this;
        this.http.get(url, { responseType: 'text' }).subscribe(function (content) {
            // the data will be the file content other than the file object.
            console.log(content);
            if (callback) {
                callback(content);
            }
        }, function (err) {
            if (errCallback) {
                errCallback(err);
            }
            if (err.error instanceof Error) {
                // client side or network error occured, handle it accordingly.
            }
            else {
                _this.log.Debug("Backend returned code " + err.status + ", body was: " + err.error);
            }
        });
    };
    HttpX.prototype.post = function (url, body, callback, errCallback) {
        var _this = this;
        this.http.post(url, body, { observe: 'response' }).subscribe(function (resp) {
            if (callback) {
                callback(resp);
            }
        }, function (err) {
            if (!Object(__WEBPACK_IMPORTED_MODULE_3_util__["isNullOrUndefined"])(errCallback)) {
                errCallback(err);
            }
            if (err.error instanceof Error) {
                // client side or network error occured, handle it accordingly.
            }
            else {
                // TODO:
                _this.log.Debug("Backend returned code " + err.status + ", body was: " + err.error);
            }
        });
    };
    HttpX = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_4__logger_service__["a" /* Logger */]])
    ], HttpX);
    return HttpX;
}());



/***/ }),

/***/ "../../../../../src/app/services/logger.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Logger; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var Logger = (function () {
    function Logger() {
        this.Level = 0 /* Debug */;
    }
    Logger.prototype.Debug = function (message) {
        if (this.Level <= 0 /* Debug */) {
            console.log(message);
        }
    };
    Logger.prototype.Info = function (message) {
        if (this.Level <= 1 /* Info */) {
            console.log(message);
        }
    };
    Logger.prototype.Error = function (message) {
        if (this.Level <= 2 /* Error */) {
            console.log(message);
        }
    };
    Logger = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])()
    ], Logger);
    return Logger;
}());



/***/ }),

/***/ "../../../../../src/app/services/session.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Session; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_util_class__ = __webpack_require__("../../../../../src/app/common/util.class.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Session = (function () {
    function Session() {
        this._session_id = new __WEBPACK_IMPORTED_MODULE_1__common_util_class__["a" /* Guid */]().toString();
    }
    Object.defineProperty(Session.prototype, "Session_Id", {
        get: function () {
            return this._session_id;
        },
        enumerable: true,
        configurable: true
    });
    Session = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], Session);
    return Session;
}());



/***/ }),

/***/ "../../../../../src/app/services/snack-tip.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessageSnack; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MessageSnack = (function () {
    function MessageSnack(snackBar) {
        this.snackBar = snackBar;
    }
    MessageSnack.prototype.show = function (message, action) {
        if (action === void 0) { action = 'close'; }
        this.snackBar.open(message, action, {
            duration: 2000,
        });
    };
    MessageSnack = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material__["y" /* MatSnackBar */]])
    ], MessageSnack);
    return MessageSnack;
}());



/***/ }),

/***/ "../../../../../src/app/services/status-inspector.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StatusInspector; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_event_class__ = __webpack_require__("../../../../../src/app/common/event.class.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var StatusInspector = (function () {
    function StatusInspector() {
        this.IsBusyEventSubject = new __WEBPACK_IMPORTED_MODULE_1__common_event_class__["c" /* EventSubject */]();
        this.isBusy = false;
    }
    Object.defineProperty(StatusInspector.prototype, "IsBusy", {
        get: function () {
            return this.isBusy;
        },
        set: function (value) {
            if (value !== this.isBusy) {
                this.isBusy = value;
                this.onIsBusyChanged(value);
            }
        },
        enumerable: true,
        configurable: true
    });
    StatusInspector.prototype.onIsBusyChanged = function (isbusy) {
        this.IsBusyEventSubject.Notify(new __WEBPACK_IMPORTED_MODULE_1__common_event_class__["a" /* DataEventArgs */](isbusy));
    };
    StatusInspector = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], StatusInspector);
    return StatusInspector;
}());



/***/ }),

/***/ "../../../../../src/assets/404.png":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "404.2e9bab69495c852d2b7e.png";

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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_17" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map