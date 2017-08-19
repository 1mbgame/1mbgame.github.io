webpackJsonp([0],{

/***/ 119:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 119;

/***/ }),

/***/ 161:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/api-test/api-test.module": [
		162
	],
	"../pages/first/first.module": [
		166
	],
	"../pages/home/home.module": [
		165
	],
	"../pages/my-encryption/my-encryption.module": [
		163
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
module.exports = webpackAsyncContext;
webpackAsyncContext.id = 161;

/***/ }),

/***/ 162:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiTestPageModule", function() { return ApiTestPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__api_test__ = __webpack_require__(53);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ApiTestPageModule = (function () {
    function ApiTestPageModule() {
    }
    return ApiTestPageModule;
}());
ApiTestPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__api_test__["a" /* ApiTestPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__api_test__["a" /* ApiTestPage */]),
        ],
    })
], ApiTestPageModule);

//# sourceMappingURL=api-test.module.js.map

/***/ }),

/***/ 163:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyEncryptionPageModule", function() { return MyEncryptionPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__my_encryption__ = __webpack_require__(55);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MyEncryptionPageModule = (function () {
    function MyEncryptionPageModule() {
    }
    return MyEncryptionPageModule;
}());
MyEncryptionPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__my_encryption__["a" /* MyEncryptionPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__my_encryption__["a" /* MyEncryptionPage */]),
        ],
    })
], MyEncryptionPageModule);

//# sourceMappingURL=my-encryption.module.js.map

/***/ }),

/***/ 164:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UtilitiesService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UtilitiesService = (function () {
    function UtilitiesService() {
    }
    /**
     * mysqlDatetimeToJavascriptDateObject
     */
    UtilitiesService.prototype.mysqlDatetimeToJavascriptDateObject = function (mySQLDatetime) {
        //let mySQLDate: string = '2015-04-29 10:29:08';
        return new Date(Date.parse(mySQLDatetime.replace('-', '/')));
    };
    /**
     * hexToDec
     */
    UtilitiesService.prototype.hexToDec = function (hexString) {
        var num = 0;
        for (var index = 0; index < hexString.length; index++) {
            var hexdigit = parseInt(hexString[index], 16);
            num = (num << 4) | hexdigit;
        }
        return num;
    };
    /**
     * randomString
     */
    UtilitiesService.prototype.randomString = function (length) {
        if (length === void 0) { length = 18; }
        var text = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        for (var i = 0; i < length; i++)
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        return text;
    };
    return UtilitiesService;
}());
UtilitiesService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], UtilitiesService);

//# sourceMappingURL=utilities.service.js.map

/***/ }),

/***/ 165:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home__ = __webpack_require__(56);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var HomePageModule = (function () {
    function HomePageModule() {
    }
    return HomePageModule;
}());
HomePageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */]),
        ],
    })
], HomePageModule);

//# sourceMappingURL=home.module.js.map

/***/ }),

/***/ 166:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FirstPageModule", function() { return FirstPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__first__ = __webpack_require__(87);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var FirstPageModule = (function () {
    function FirstPageModule() {
    }
    return FirstPageModule;
}());
FirstPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__first__["a" /* FirstPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__first__["a" /* FirstPage */]),
        ],
    })
], FirstPageModule);

//# sourceMappingURL=first.module.js.map

/***/ }),

/***/ 209:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyLogService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MyLogService = (function () {
    function MyLogService() {
        if (Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* isDevMode */])()) {
            this._isProductionMode = false;
        }
    }
    /**
     * log
     */
    MyLogService.prototype.log = function (message) {
        if (this._isProductionMode == false) {
            console.log(message);
        }
    };
    return MyLogService;
}());
MyLogService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], MyLogService);

//# sourceMappingURL=mylog.service.js.map

/***/ }),

/***/ 210:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DateConverterService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_moment__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DateConverterService = (function () {
    function DateConverterService() {
    }
    DateConverterService.prototype.jsdateObjectToMoment = function (jsDateObject) {
        return __WEBPACK_IMPORTED_MODULE_1_moment__(jsDateObject);
    };
    DateConverterService.prototype.mysqlDateTimeToMomentObj = function (mysqlDatetime) {
        return __WEBPACK_IMPORTED_MODULE_1_moment__(mysqlDatetime, 'YYYY-MM-DD HH:mm:ss');
    };
    DateConverterService.prototype.mysqlCurrentDatetimeString = function () {
        // yyyy-mm-dd h:i:s
        return __WEBPACK_IMPORTED_MODULE_1_moment__().format('YYYY-MM-DD HH:mm:ss');
    };
    DateConverterService.prototype.mysqlDatetimeToJSDateObject = function (mysqlDatetime) {
        return new Date(Date.parse(mysqlDatetime.replace('-', '/')));
    };
    /**
     *
     * @param mysqlDatetime YYYY-MM-DD HH:mm:ss
     * @param mysqlTime HH:mm:ss
     */
    DateConverterService.prototype.mysqlTimeToJSDateObj = function (mysqlDatetime, mysqlTime) {
        var aryTime = mysqlTime.split(':');
        var currentDate = __WEBPACK_IMPORTED_MODULE_1_moment__(mysqlDatetime, 'YYYY-MM-DD HH:mm:ss');
        currentDate.hour(parseInt(aryTime[0]));
        currentDate.minute(parseInt(aryTime[1]));
        currentDate.second(parseInt(aryTime[2]));
        return currentDate.toDate();
    };
    return DateConverterService;
}());
DateConverterService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], DateConverterService);

//# sourceMappingURL=DateConverter.service.js.map

/***/ }),

/***/ 327:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GoogleFCMService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_fcm__ = __webpack_require__(326);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__simpleORM_simpleORM_service__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__autheticate_service__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_TableNameService_service__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__restful_web_service_web_service__ = __webpack_require__(41);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








//declare var FCMPlugin: any;
//import { FirebaseApp } from "angularfire2";
//import * as firebase from 'firebase';
var GoogleFCMService = (function () {
    //private messagingFirebase: firebase.messaging.Messaging;
    function GoogleFCMService(fcm, simpleORMService, authService, tableNameService, toastCtrl, webService, platform, alertCtrl) {
        this.fcm = fcm;
        this.simpleORMService = simpleORMService;
        this.authService = authService;
        this.tableNameService = tableNameService;
        this.toastCtrl = toastCtrl;
        this.webService = webService;
        this.platform = platform;
        this.alertCtrl = alertCtrl;
        this.url = 'https://gcm-http.googleapis.com/gcm/send';
        this.apiKey = 'AAAAV0SiReI:APA91bEvwog-EzEVqWIiy2QRnpbTIIGDuL31BeujrBqiPteGFXUgm9fldb_nzmpmJDemVbSE2C-uCX1jkhWt52YGoK9ULG_qAi3WtumwB8l7ULEnbOO2krOnrxx8ImgA1QZfdbTDYzJi';
        this.subcribeFCM();
    }
    /**
     * subcribe FCM
     */
    GoogleFCMService.prototype.subcribeFCM = function () {
        //this.showAlert('subcribe to FCM');
        if (this.platform.is('core') == true) {
            console.log('this is core');
            //this.desktopFirebaseConfiguration();
        }
        else {
            console.log('this is Not core : ' + this.platform.platforms());
            try {
                this.mobileFirebaseConfiguration();
            }
            catch (error) {
                console.log(error);
            }
        }
    };
    GoogleFCMService.prototype.showNotification = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            //duration: 2000,
            position: 'top',
            showCloseButton: true,
            closeButtonText: 'Ok'
        });
        toast.present();
    };
    GoogleFCMService.prototype.mobileFirebaseConfiguration = function () {
        var _this = this;
        this.fcm.getToken().then(function (token) {
            console.log('Get Token : ' + token);
            _this.registerToken(token);
        });
        this.fcm.onNotification().subscribe(function (data) {
            console.log('PN Message');
            console.log(data);
            if (data.wasTapped) {
                console.log("Received in background");
            }
            else {
                console.log("Received in foreground");
                _this.showNotification(data.message);
            }
            ;
        });
        this.fcm.onTokenRefresh().subscribe(function (token) {
            console.log('Refresh Token : ' + token);
            _this.registerToken(token);
        });
    };
    /*
    private desktopFirebaseConfiguration() {
        // if using desktop broswer
        let config = {
            apiKey: "AIzaSyBD_qGhFrGYKXPYtvpXGfJkKHLNFjsCkTQ",
            authDomain: "linkdelicacy.firebaseapp.com",
            databaseURL: "https://linkdelicacy.firebaseio.com",
            projectId: "linkdelicacy",
            storageBucket: "linkdelicacy.appspot.com",
            messagingSenderId: "374813640162"
        };
        
        let firebaseApp = firebase.initializeApp(config);
        
        this.messagingFirebase = firebase.messaging();
        this.webAppRequestPermission();
        this.webAppGetToken();
        this.webAppOnTokenRefresh();
        
        
    }

    public webAppGetToken() {
        // Get Instance ID token. Initially this makes a network call, once retrieved
        // subsequent calls to getToken will return from cache.
        
        this.messagingFirebase.getToken()
            .then(function (currentToken) {
                if (currentToken) {
                    console.log('currentToken:' + currentToken);
                    //this.registerToken(currentToken);
                } else {
                    // Show permission request.
                    console.log('No Instance ID token available. Request permission to generate one.');
                }
            }).catch(function (err) {
                console.log('An error occurred while retrieving token. ', err);
            });
    }

    private webAppRequestPermission() {
        this.messagingFirebase.requestPermission()
            .then(function () {
                console.log('Notification permission granted.');
                this.webAppGetToken();
            })
            .catch(function (err) {
                console.log('Unable to get permission to notify.', err);
            });
    }

    private webAppOnTokenRefresh() {
        // Callback fired if Instance ID token is updated.
        this.messagingFirebase.onTokenRefresh(function () {
            this.messagingFirebase.getToken(this)
                .then(function (refreshedToken) {
                    console.log('Token refreshed:' + refreshedToken);
                    this.registerToken(refreshedToken);
                })
                .catch(function (err) {
                    console.log('Unable to retrieve refreshed token ', err);
                });
        });
    }

    private webReceiveMessage(){
        this.messagingFirebase.onMessage(function(payload) {
            console.log("Message received. ", payload);
            // ...
        });

      
    }
*/
    GoogleFCMService.prototype.registerToken = function (token) {
        var data = {
            'fcm_token': token
        };
        this.simpleORMService.table(this.tableNameService.user)
            .where('id', '=', this.authService.user.id)
            .update(data).subscribe();
    };
    /**
     * sendPNMessage
     */
    GoogleFCMService.prototype.sendSinglePNMessage = function (toRegToken, title, notificationMessage, backendData) {
        if (this.platform.is('core') == true) {
            console.log('this is window');
        }
        else {
            console.log(this.platform.platforms());
        }
        var httpBody = {
            "registration_ids": [toRegToken],
            //"to": toRegToken, //Topic or single device
            //"registration_ids":['HSDYE123YYSD','JHYAY665J8G5$',...], // multiple devices
            "notification": {
                "title": title,
                "body": notificationMessage,
                "sound": "default",
                "click_action": "FCM_PLUGIN_ACTIVITY",
                "icon": "fcm_push_icon" //White icon Android resource
            },
            "data": backendData,
            "priority": "high",
            "content_available": true
        };
        var headers = {
            'Content-Type': 'application/json',
            'Authorization': "key=" + this.apiKey
        };
        return this.webService.httpJsonRequest(this.url, httpBody, 'POST', headers);
    };
    GoogleFCMService.prototype.showAlert = function (msg) {
        var alert = this.alertCtrl.create({
            title: 'PN Alert',
            subTitle: msg,
            buttons: ['OK']
        });
        alert.present();
    };
    return GoogleFCMService;
}());
GoogleFCMService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_native_fcm__["a" /* FCM */],
        __WEBPACK_IMPORTED_MODULE_2__simpleORM_simpleORM_service__["a" /* SimpleORMService */],
        __WEBPACK_IMPORTED_MODULE_3__autheticate_service__["a" /* AuthService */],
        __WEBPACK_IMPORTED_MODULE_4__models_TableNameService_service__["a" /* TableNameService */],
        __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["l" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_6__restful_web_service_web_service__["a" /* WebService */],
        __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["k" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["b" /* AlertController */]])
], GoogleFCMService);

//# sourceMappingURL=googleFCM.service.js.map

/***/ }),

/***/ 328:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(329);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(347);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 347:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(392);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_list_list__ = __webpack_require__(401);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_splash_screen__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__shared_simpleORM_simpleORM_service__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__shared_autheticate_service__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__shared_utilities_service__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__shared_mylog_service__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__shared_restful_web_service_web_service__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__shared_myEncryption_service__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__shared_AppConfig_service__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__shared_paginate_paginator_service__ = __webpack_require__(402);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__shared_sort_service__ = __webpack_require__(403);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__models_TableNameService_service__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_login_login__ = __webpack_require__(404);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__shared_DateConverter_service__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__ionic_native_fcm__ = __webpack_require__(326);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__shared_googleFCM_service__ = __webpack_require__(327);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__shared_libraries_push_notification_service__ = __webpack_require__(409);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_first_first__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_api_test_api_test__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_home_home__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_my_encryption_my_encryption__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_my_encryption_my_encryption_module__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pages_home_home_module__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__pages_api_test_api_test_module__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__pages_first_first_module__ = __webpack_require__(166);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};































var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */],
            __WEBPACK_IMPORTED_MODULE_18__pages_login_login__["a" /* LoginPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_http__["c" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                links: [
                    { loadChildren: '../pages/api-test/api-test.module#ApiTestPageModule', name: 'ApiTestPage', segment: 'api-test', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/my-encryption/my-encryption.module#MyEncryptionPageModule', name: 'MyEncryptionPage', segment: 'my-encryption', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/home/home.module#HomePageModule', name: 'HomePage', segment: 'home', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/first/first.module#FirstPageModule', name: 'FirstPage', segment: 'first', priority: 'low', defaultHistory: [] }
                ]
            }),
            __WEBPACK_IMPORTED_MODULE_27__pages_my_encryption_my_encryption_module__["MyEncryptionPageModule"],
            __WEBPACK_IMPORTED_MODULE_28__pages_home_home_module__["HomePageModule"],
            __WEBPACK_IMPORTED_MODULE_29__pages_api_test_api_test_module__["ApiTestPageModule"],
            __WEBPACK_IMPORTED_MODULE_27__pages_my_encryption_my_encryption_module__["MyEncryptionPageModule"],
            __WEBPACK_IMPORTED_MODULE_30__pages_first_first_module__["FirstPageModule"]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */],
            __WEBPACK_IMPORTED_MODULE_18__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_25__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_24__pages_api_test_api_test__["a" /* ApiTestPage */],
            __WEBPACK_IMPORTED_MODULE_26__pages_my_encryption_my_encryption__["a" /* MyEncryptionPage */],
            __WEBPACK_IMPORTED_MODULE_23__pages_first_first__["a" /* FirstPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_splash_screen__["a" /* SplashScreen */],
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicErrorHandler */] },
            __WEBPACK_IMPORTED_MODULE_8__shared_simpleORM_simpleORM_service__["a" /* SimpleORMService */],
            __WEBPACK_IMPORTED_MODULE_9__shared_autheticate_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_10__shared_utilities_service__["a" /* UtilitiesService */],
            __WEBPACK_IMPORTED_MODULE_11__shared_mylog_service__["a" /* MyLogService */],
            __WEBPACK_IMPORTED_MODULE_12__shared_restful_web_service_web_service__["a" /* WebService */],
            __WEBPACK_IMPORTED_MODULE_13__shared_myEncryption_service__["a" /* MyEncryptionService */],
            __WEBPACK_IMPORTED_MODULE_17__models_TableNameService_service__["a" /* TableNameService */],
            __WEBPACK_IMPORTED_MODULE_14__shared_AppConfig_service__["a" /* AppConfigService */],
            __WEBPACK_IMPORTED_MODULE_15__shared_paginate_paginator_service__["a" /* PaginatorService */],
            __WEBPACK_IMPORTED_MODULE_16__shared_sort_service__["a" /* SortService */],
            __WEBPACK_IMPORTED_MODULE_19__shared_DateConverter_service__["a" /* DateConverterService */],
            __WEBPACK_IMPORTED_MODULE_20__ionic_native_fcm__["a" /* FCM */],
            __WEBPACK_IMPORTED_MODULE_21__shared_googleFCM_service__["a" /* GoogleFCMService */],
            __WEBPACK_IMPORTED_MODULE_22__shared_libraries_push_notification_service__["a" /* PushNotificationService */]
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 392:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_autheticate_service__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_first_first__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_api_test_api_test__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_my_encryption_my_encryption__ = __webpack_require__(55);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen, authService) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.authService = authService;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_first_first__["a" /* FirstPage */];
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [];
        this.initPages();
    }
    MyApp.prototype.initPages = function () {
        if (this.authService.updateSideBar == false && this.pages.length > 0) {
            return;
        }
        this.authService.updateSideBar = false;
        if (this.authService.user != null) {
            if (this.authService.user.role == 'admin') {
                // set our app's pages
                this.pages = [];
            }
            else if (this.authService.user.role == 'user') {
                this.pages = [];
            }
        }
        else {
            this.pages = [
                //{ title: 'Logout', component: LogoutPage }
                { title: 'Home', component: __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */] },
                { title: 'Api Test', component: __WEBPACK_IMPORTED_MODULE_6__pages_api_test_api_test__["a" /* ApiTestPage */] },
                { title: 'My Encryption', component: __WEBPACK_IMPORTED_MODULE_8__pages_my_encryption_my_encryption__["a" /* MyEncryptionPage */] }
            ];
        }
    };
    MyApp.prototype.ngDoCheck = function () {
        this.initPages();
        //this.isAuthenticated = this.authService.isAuthenticate;
    };
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    /**
     * getUserHandPhone
     */
    MyApp.prototype.getUserHandPhone = function () {
        if (this.authService.user == null) {
            return '';
        }
        else {
            return this.authService.user.contact;
        }
    };
    MyApp.prototype.getUsername = function () {
        if (this.authService.user == null) {
            return '';
        }
        else {
            return this.authService.user.username;
        }
    };
    return MyApp;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Nav */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Nav */])
], MyApp.prototype, "nav", void 0);
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Users/andy/Desktop/ionic/mytool/src/app/app.html"*/'<ion-menu [content]="content">\n    <ion-header>\n        <ion-toolbar color="dark" class="text-center">\n            <ion-title>My Tool</ion-title>\n        </ion-toolbar>\n    </ion-header>\n\n    <ion-content>\n        <ion-card>\n            <ion-card-content>\n                <ion-card-title class="text-center">\n                    {{ getUserHandPhone() }}\n                </ion-card-title>\n                <p class="text-center">\n                    {{ getUsername() }}\n                </p>\n            </ion-card-content>\n        </ion-card>\n\n\n\n        <ion-list>\n            <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        {{p.title}}\n      </button>\n        </ion-list>\n    </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"/Users/andy/Desktop/ionic/mytool/src/app/app.html"*/
    })
    //sudo ionic cordova build ios --prod --aot --minifyjs
    ,
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
        __WEBPACK_IMPORTED_MODULE_4__shared_autheticate_service__["a" /* AuthService */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 40:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppConfigService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppConfigService = (function () {
    function AppConfigService() {
        this.production_url = "https://api.foodqr.com/";
        this.development_url = "https://andy.api.foodqr.com/";
        this.version = '1.00';
        this.copyRight = 'Andy';
        this.appName = 'FoodQR';
        this.apiKey = 'CEelQ1pvH+cUbn69Qlo0Aiqy3R392zR7p9kJFL4Xuyo0';
    }
    Object.defineProperty(AppConfigService.prototype, "url", {
        get: function () {
            if (Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* isDevMode */])()) {
                return this.development_url;
            }
            else {
                return this.production_url;
            }
        },
        enumerable: true,
        configurable: true
    });
    return AppConfigService;
}());
AppConfigService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], AppConfigService);

//# sourceMappingURL=AppConfig.service.js.map

/***/ }),

/***/ 401:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ListPage = ListPage_1 = (function () {
    function ListPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        // If we navigated to this page, we will have an item available as a nav param
        this.selectedItem = navParams.get('item');
        // Let's populate this page with some filler content for funzies
        this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
            'american-football', 'boat', 'bluetooth', 'build'];
        this.items = [];
        for (var i = 1; i < 11; i++) {
            this.items.push({
                title: 'Item ' + i,
                note: 'This is item #' + i,
                icon: this.icons[Math.floor(Math.random() * this.icons.length)]
            });
        }
    }
    ListPage.prototype.itemTapped = function (event, item) {
        // That's right, we're pushing to ourselves!
        this.navCtrl.push(ListPage_1, {
            item: item
        });
    };
    return ListPage;
}());
ListPage = ListPage_1 = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-list',template:/*ion-inline-start:"/Users/andy/Desktop/ionic/mytool/src/pages/list/list.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>List</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <button ion-item *ngFor="let item of items" (click)="itemTapped($event, item)">\n      <ion-icon [name]="item.icon" item-left></ion-icon>\n      {{item.title}}\n      <div class="item-note" item-right>\n        {{item.note}}\n      </div>\n    </button>\n  </ion-list>\n  <div *ngIf="selectedItem" padding>\n    You navigated here from <b>{{selectedItem.title}}</b>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/andy/Desktop/ionic/mytool/src/pages/list/list.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
], ListPage);

var ListPage_1;
//# sourceMappingURL=list.js.map

/***/ }),

/***/ 402:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaginatorService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PaginatorService = (function () {
    function PaginatorService() {
    }
    PaginatorService.prototype.init = function (paginateData) {
        this.paginateData = paginateData;
        this.total = this.paginateData.total;
        this.totalPages = this.paginateData.total;
        this.perPage = this.paginateData.per_page;
        this.currentPage = this.paginateData.current_page;
        this.firstPage = this.currentPage;
        this.lastPage = this.paginateData.last_page;
        this.from = this.paginateData.from;
        this.to = this.paginateData.to;
        this.tableData = this.paginateData.data;
    };
    PaginatorService.prototype.initPaginator = function (paginateData) {
        this.init(paginateData);
        this.totalPages = Math.ceil(this.total / this.perPage);
        if (this.totalPages <= 10) {
            // less than 10 total pages so show all
            this.firstPage = 1;
            this.lastPage = this.totalPages;
            this.hasMore = false;
        }
        else {
            // more than 10 total pages so calculate start and end pages
            this.hasMore = true;
            if (this.currentPage <= 6) {
                this.firstPage = 1;
                this.lastPage = 10;
            }
            else if (this.currentPage + 4 >= this.totalPages) {
                this.firstPage = this.totalPages - 9;
                this.lastPage = this.totalPages;
                this.hasMore = false;
            }
            else {
                this.firstPage = this.currentPage - 5;
                this.lastPage = this.currentPage + 4;
            }
        }
        // calculate start and end item indexes
        var startIndex = (this.currentPage - 1) * this.perPage;
        var endIndex = Math.min(startIndex + this.perPage - 1, this.totalPages - 1);
        // create an array of pages to ng-repeat in the pager control
        var i = this.firstPage;
        var count = this.lastPage;
        this.pageNumbers = [];
        while (i <= count) {
            this.pageNumbers.push(i);
            i++;
        }
        //let pages = _.range(startPage, endPage + 1);
    };
    return PaginatorService;
}());
PaginatorService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], PaginatorService);

//# sourceMappingURL=paginator.service.js.map

/***/ }),

/***/ 403:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SortService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SortService = (function () {
    function SortService() {
    }
    SortService.prototype.numericSort = function (arrayValues) {
        var results = arrayValues.sort(function (a, b) {
            return a - b;
        });
        return results;
    };
    SortService.prototype.numericReverseSort = function (arrayValues) {
        var results = arrayValues.sort(function (a, b) {
            return b - a;
        });
        return results;
    };
    SortService.prototype.objectSort = function (objects, targetVariable) {
        var results = objects.sort(function (a, b) {
            if (a[targetVariable] < b[targetVariable])
                return -1;
            if (a[targetVariable] > b[targetVariable])
                return 1;
        });
        return results;
    };
    SortService.prototype.objectReverseSort = function (objects, targetVariable) {
        var results = objects.sort(function (a, b) {
            if (a[targetVariable] < b[targetVariable])
                return 1;
            if (a[targetVariable] > b[targetVariable])
                return -1;
        });
        return results;
    };
    return SortService;
}());
SortService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], SortService);

//# sourceMappingURL=sort.service.js.map

/***/ }),

/***/ 404:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_shared_restful_web_service_web_service__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_shared_AppConfig_service__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_shared_autheticate_service__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_shared_mylog_service__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_models_TableNameService_service__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_shared_restful_web_service_MyHttpResponse__ = __webpack_require__(405);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ts_md5_dist_md5__ = __webpack_require__(406);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ts_md5_dist_md5___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_ts_md5_dist_md5__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









/**
 * Generated class for the LoginPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var LoginPage = (function () {
    function LoginPage(navCtrl, navParams, webService, appConfigService, authServicec, myLogService, tableNameService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.webService = webService;
        this.appConfigService = appConfigService;
        this.authServicec = authServicec;
        this.myLogService = myLogService;
        this.tableNameService = tableNameService;
        this.username = '';
        this.password = '';
        this.errorMessage = '';
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
        this.myLogService.log('Login ngOnInit');
        if (this.authServicec.isAuthenticate == true) {
            this.myLogService.log('redirect to HomePage');
            //this.navCtrl.setRoot(HomePage);
        }
    };
    LoginPage.prototype.ionViewWillEnter = function () {
        this.username = localStorage.getItem('username');
        this.password = localStorage.getItem('password');
    };
    LoginPage.prototype.onLoginClicked = function () {
        var _this = this;
        if (this.password == null || this.password == '') {
            this.errorMessage = 'The password can\'t be empty';
            return;
        }
        if (this.username == null || this.username == '') {
            this.errorMessage = 'The username can\'t be empty';
            return;
        }
        localStorage.setItem('username', this.username);
        //localStorage.setItem('password',this.password);
        var url = this.appConfigService.url + '/api/login';
        var parameters = {
            'username': this.username,
            'password': __WEBPACK_IMPORTED_MODULE_8_ts_md5_dist_md5__["Md5"].hashStr(this.password)
        };
        this.webService.httpJsonPost(url, parameters)
            .subscribe(function (responseData) {
            _this.myLogService.log('==== response data ======');
            _this.myLogService.log(responseData);
            _this.responseHandle(responseData);
        }, function (error) {
            _this.errorMessage = 'Connection Failed';
        });
    };
    LoginPage.prototype.responseHandle = function (jsonObject) {
        var myHttpResponse = new __WEBPACK_IMPORTED_MODULE_7__app_shared_restful_web_service_MyHttpResponse__["a" /* MyHttpResponse */](jsonObject);
        if (myHttpResponse.hasError == true) {
            this.errorMessage = myHttpResponse.message;
        }
        else {
            this.authServicec.isAuthenticate = true;
            this.errorMessage = '';
            var userData = myHttpResponse.data.user;
            var user = userData;
            this.authServicec.user = user;
            this.authServicec.token = myHttpResponse.data.token;
            console.log(this.authServicec);
            this.authServicec.updateSideBar = true;
            localStorage.setItem(this.tableNameService.user, JSON.stringify(user));
            //this.navCtrl.push();
            //this.navCtrl.setRoot(HomePage);
        }
    };
    /**
     * onRegisterClicked
     */
    LoginPage.prototype.onRegisterClicked = function () {
        //this.navCtrl.push(RegisterPage);
    };
    return LoginPage;
}());
LoginPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-login',template:/*ion-inline-start:"/Users/andy/Desktop/ionic/mytool/src/pages/login/login.html"*/'<ion-header>\n    <ion-toolbar color="primary" text-center>\n        <ion-title>Link Delicacy</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n\n\n<ion-content class="my-background" padding>\n\n    <ion-card class="my-login-panel">\n        <ion-card-header text-center class="my-login-form-header">\n            Login\n        </ion-card-header>\n        <ion-card-content class="my-login-form-content">\n            <ion-list text-center class="my-login-form">\n\n\n                <ion-item class="my-login-form">\n                    <ion-label fixed>Username</ion-label>\n                    <ion-input type="text" [(ngModel)]="username" required></ion-input>\n\n                </ion-item>\n\n                <ion-item class="my-login-form">\n                    <ion-label fixed>Password</ion-label>\n                    <ion-input type="password" [(ngModel)]="password" required></ion-input>\n                </ion-item>\n                <ion-item class="my-error-message">\n                    <ion-label>{{ errorMessage }}</ion-label>\n                </ion-item>\n\n            </ion-list>\n        </ion-card-content>\n\n    </ion-card>\n\n    <div text-center>\n        <h3>\n\n        </h3>\n        <h1>\n            <button ion-button block outline color="light" (click)="onRegisterClicked()">Register</button>\n        </h1>\n        <h1>\n            <button type="submit" block outline ion-button color="light" (click)="onLoginClicked()">Login</button>\n        </h1>\n\n\n    </div>\n\n</ion-content>\n\n<ion-footer>\n    <ion-toolbar>\n        <ion-label>Copyright© 2017 Cyberoid. All Rights Reserved. {{ this.appConfigService.version }}</ion-label>\n    </ion-toolbar>\n</ion-footer>'/*ion-inline-end:"/Users/andy/Desktop/ionic/mytool/src/pages/login/login.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__app_shared_restful_web_service_web_service__["a" /* WebService */],
        __WEBPACK_IMPORTED_MODULE_3__app_shared_AppConfig_service__["a" /* AppConfigService */],
        __WEBPACK_IMPORTED_MODULE_4__app_shared_autheticate_service__["a" /* AuthService */],
        __WEBPACK_IMPORTED_MODULE_5__app_shared_mylog_service__["a" /* MyLogService */],
        __WEBPACK_IMPORTED_MODULE_6__app_models_TableNameService_service__["a" /* TableNameService */]])
], LoginPage);

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 405:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyHttpResponse; });
var MyHttpResponse = (function () {
    function MyHttpResponse(jsonObject) {
        this._hasError = jsonObject.hasError;
        this._message = jsonObject.message;
        this._hasData = jsonObject.hasData;
        this._data = jsonObject.data;
    }
    Object.defineProperty(MyHttpResponse.prototype, "hasError", {
        get: function () {
            return this._hasError;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MyHttpResponse.prototype, "message", {
        get: function () {
            return this._message;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MyHttpResponse.prototype, "hasData", {
        get: function () {
            return this._hasData;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MyHttpResponse.prototype, "data", {
        get: function () {
            return this._data;
        },
        enumerable: true,
        configurable: true
    });
    return MyHttpResponse;
}());

//# sourceMappingURL=MyHttpResponse.js.map

/***/ }),

/***/ 408:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 211,
	"./af.js": 211,
	"./ar": 212,
	"./ar-dz": 213,
	"./ar-dz.js": 213,
	"./ar-kw": 214,
	"./ar-kw.js": 214,
	"./ar-ly": 215,
	"./ar-ly.js": 215,
	"./ar-ma": 216,
	"./ar-ma.js": 216,
	"./ar-sa": 217,
	"./ar-sa.js": 217,
	"./ar-tn": 218,
	"./ar-tn.js": 218,
	"./ar.js": 212,
	"./az": 219,
	"./az.js": 219,
	"./be": 220,
	"./be.js": 220,
	"./bg": 221,
	"./bg.js": 221,
	"./bn": 222,
	"./bn.js": 222,
	"./bo": 223,
	"./bo.js": 223,
	"./br": 224,
	"./br.js": 224,
	"./bs": 225,
	"./bs.js": 225,
	"./ca": 226,
	"./ca.js": 226,
	"./cs": 227,
	"./cs.js": 227,
	"./cv": 228,
	"./cv.js": 228,
	"./cy": 229,
	"./cy.js": 229,
	"./da": 230,
	"./da.js": 230,
	"./de": 231,
	"./de-at": 232,
	"./de-at.js": 232,
	"./de-ch": 233,
	"./de-ch.js": 233,
	"./de.js": 231,
	"./dv": 234,
	"./dv.js": 234,
	"./el": 235,
	"./el.js": 235,
	"./en-au": 236,
	"./en-au.js": 236,
	"./en-ca": 237,
	"./en-ca.js": 237,
	"./en-gb": 238,
	"./en-gb.js": 238,
	"./en-ie": 239,
	"./en-ie.js": 239,
	"./en-nz": 240,
	"./en-nz.js": 240,
	"./eo": 241,
	"./eo.js": 241,
	"./es": 242,
	"./es-do": 243,
	"./es-do.js": 243,
	"./es.js": 242,
	"./et": 244,
	"./et.js": 244,
	"./eu": 245,
	"./eu.js": 245,
	"./fa": 246,
	"./fa.js": 246,
	"./fi": 247,
	"./fi.js": 247,
	"./fo": 248,
	"./fo.js": 248,
	"./fr": 249,
	"./fr-ca": 250,
	"./fr-ca.js": 250,
	"./fr-ch": 251,
	"./fr-ch.js": 251,
	"./fr.js": 249,
	"./fy": 252,
	"./fy.js": 252,
	"./gd": 253,
	"./gd.js": 253,
	"./gl": 254,
	"./gl.js": 254,
	"./gom-latn": 255,
	"./gom-latn.js": 255,
	"./he": 256,
	"./he.js": 256,
	"./hi": 257,
	"./hi.js": 257,
	"./hr": 258,
	"./hr.js": 258,
	"./hu": 259,
	"./hu.js": 259,
	"./hy-am": 260,
	"./hy-am.js": 260,
	"./id": 261,
	"./id.js": 261,
	"./is": 262,
	"./is.js": 262,
	"./it": 263,
	"./it.js": 263,
	"./ja": 264,
	"./ja.js": 264,
	"./jv": 265,
	"./jv.js": 265,
	"./ka": 266,
	"./ka.js": 266,
	"./kk": 267,
	"./kk.js": 267,
	"./km": 268,
	"./km.js": 268,
	"./kn": 269,
	"./kn.js": 269,
	"./ko": 270,
	"./ko.js": 270,
	"./ky": 271,
	"./ky.js": 271,
	"./lb": 272,
	"./lb.js": 272,
	"./lo": 273,
	"./lo.js": 273,
	"./lt": 274,
	"./lt.js": 274,
	"./lv": 275,
	"./lv.js": 275,
	"./me": 276,
	"./me.js": 276,
	"./mi": 277,
	"./mi.js": 277,
	"./mk": 278,
	"./mk.js": 278,
	"./ml": 279,
	"./ml.js": 279,
	"./mr": 280,
	"./mr.js": 280,
	"./ms": 281,
	"./ms-my": 282,
	"./ms-my.js": 282,
	"./ms.js": 281,
	"./my": 283,
	"./my.js": 283,
	"./nb": 284,
	"./nb.js": 284,
	"./ne": 285,
	"./ne.js": 285,
	"./nl": 286,
	"./nl-be": 287,
	"./nl-be.js": 287,
	"./nl.js": 286,
	"./nn": 288,
	"./nn.js": 288,
	"./pa-in": 289,
	"./pa-in.js": 289,
	"./pl": 290,
	"./pl.js": 290,
	"./pt": 291,
	"./pt-br": 292,
	"./pt-br.js": 292,
	"./pt.js": 291,
	"./ro": 293,
	"./ro.js": 293,
	"./ru": 294,
	"./ru.js": 294,
	"./sd": 295,
	"./sd.js": 295,
	"./se": 296,
	"./se.js": 296,
	"./si": 297,
	"./si.js": 297,
	"./sk": 298,
	"./sk.js": 298,
	"./sl": 299,
	"./sl.js": 299,
	"./sq": 300,
	"./sq.js": 300,
	"./sr": 301,
	"./sr-cyrl": 302,
	"./sr-cyrl.js": 302,
	"./sr.js": 301,
	"./ss": 303,
	"./ss.js": 303,
	"./sv": 304,
	"./sv.js": 304,
	"./sw": 305,
	"./sw.js": 305,
	"./ta": 306,
	"./ta.js": 306,
	"./te": 307,
	"./te.js": 307,
	"./tet": 308,
	"./tet.js": 308,
	"./th": 309,
	"./th.js": 309,
	"./tl-ph": 310,
	"./tl-ph.js": 310,
	"./tlh": 311,
	"./tlh.js": 311,
	"./tr": 312,
	"./tr.js": 312,
	"./tzl": 313,
	"./tzl.js": 313,
	"./tzm": 314,
	"./tzm-latn": 315,
	"./tzm-latn.js": 315,
	"./tzm.js": 314,
	"./uk": 316,
	"./uk.js": 316,
	"./ur": 317,
	"./ur.js": 317,
	"./uz": 318,
	"./uz-latn": 319,
	"./uz-latn.js": 319,
	"./uz.js": 318,
	"./vi": 320,
	"./vi.js": 320,
	"./x-pseudo": 321,
	"./x-pseudo.js": 321,
	"./yo": 322,
	"./yo.js": 322,
	"./zh-cn": 323,
	"./zh-cn.js": 323,
	"./zh-hk": 324,
	"./zh-hk.js": 324,
	"./zh-tw": 325,
	"./zh-tw.js": 325
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 408;

/***/ }),

/***/ 409:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PushNotificationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_NotificationModel__ = __webpack_require__(410);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__DateConverter_service__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__simpleORM_simpleORM_service__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_TableNameService_service__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__googleFCM_service__ = __webpack_require__(327);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__AppConfig_service__ = __webpack_require__(40);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var PushNotificationService = (function () {
    function PushNotificationService(dateConverterService, tableNameService, simpleORMService, googleFCMService, appConfigService) {
        this.dateConverterService = dateConverterService;
        this.tableNameService = tableNameService;
        this.simpleORMService = simpleORMService;
        this.googleFCMService = googleFCMService;
        this.appConfigService = appConfigService;
    }
    PushNotificationService.prototype.savePNMessage = function (message, sendTo, sendFrom) {
        var notificationModel = new __WEBPACK_IMPORTED_MODULE_1__models_NotificationModel__["a" /* NotificationModel */]();
        notificationModel.message = message;
        notificationModel.created_at = this.dateConverterService.mysqlCurrentDatetimeString();
        notificationModel.send_from = sendFrom;
        notificationModel.send_to = sendTo;
        notificationModel.updated_at = notificationModel.created_at;
        this.simpleORMService.table(this.tableNameService.notification)
            .insert(notificationModel).subscribe();
    };
    PushNotificationService.prototype.sendPNMessage = function (notificationMessage, sendTo) {
        var _this = this;
        this.simpleORMService.table(this.tableNameService.user)
            .where('id', '=', sendTo)
            .first().subscribe(function (result) {
            var storeUser = result;
            _this.googleFCMService.sendSinglePNMessage(storeUser.fcm_token, _this.appConfigService.appName, notificationMessage, {
                "message": notificationMessage
            }).subscribe(function (result) {
                console.log(result);
                var googlePnResponse = result;
                if (googlePnResponse.success == 0) {
                    // handle this error in future
                }
            }, function (error) {
                console.log(error);
            });
        });
    };
    return PushNotificationService;
}());
PushNotificationService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__DateConverter_service__["a" /* DateConverterService */],
        __WEBPACK_IMPORTED_MODULE_4__models_TableNameService_service__["a" /* TableNameService */],
        __WEBPACK_IMPORTED_MODULE_3__simpleORM_simpleORM_service__["a" /* SimpleORMService */],
        __WEBPACK_IMPORTED_MODULE_5__googleFCM_service__["a" /* GoogleFCMService */],
        __WEBPACK_IMPORTED_MODULE_6__AppConfig_service__["a" /* AppConfigService */]])
], PushNotificationService);

//# sourceMappingURL=push-notification.service.js.map

/***/ }),

/***/ 41:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WebService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__(370);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(372);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_toPromise__ = __webpack_require__(373);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_toPromise__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var WebService = (function () {
    function WebService(http) {
        this.http = http;
        this.url = '';
        this.token = '';
    }
    WebService.prototype.httpJsonRequest = function (url, jsonObject, method, headers) {
        if (headers === void 0) { headers = null; }
        if (headers == null) {
            headers = {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            };
        }
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({
            method: method,
            headers: headers,
            body: JSON.stringify(jsonObject)
        });
        return this.http.request(url, options)
            .map(this.extractData)
            .catch(this.handleError);
    };
    WebService.prototype.httpPlainTextGet = function (url, parameters) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'text/plain' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.get(url + '?' + parameters.toString(), options)
            .map(this.extractData)
            .catch(this.handleError);
    };
    WebService.prototype.httpPlainTextPost = function (url, parameters) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'text/plain' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post(url, parameters, options)
            .map(this.extractData)
            .catch(this.handleError);
    };
    WebService.prototype.httpJsonPost = function (url, anyObject) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post(url, JSON.stringify(anyObject), options)
            .map(this.extractData)
            .catch(this.handleError);
    };
    WebService.prototype.laravelJsonPost = function (url, anyObject) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/json',
            //'Authorization': 'Bearer ' + this.token,
            'Accept': 'application/json',
        });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post(url, JSON.stringify(anyObject), options)
            .map(this.extractData)
            .catch(this.handleError);
    };
    WebService.prototype.extractData = function (res) {
        try {
            var body = res.json();
            return body || res.text();
        }
        catch (error) {
            var body = res.text();
            return body || {};
        }
    };
    WebService.prototype.handleError = function (error) {
        console.log(error);
        // In a real world app, we might use a remote logging infrastructure
        var errMsg;
        if (error instanceof __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* Response */]) {
            var body = error.json() || '';
            var err = body.error || JSON.stringify(body);
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        //console.error(errMsg);
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(errMsg);
    };
    return WebService;
}());
WebService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
], WebService);

//# sourceMappingURL=web.service.js.map

/***/ }),

/***/ 410:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationModel; });
/*
 *
 * (c) Andy Ng Kei Hang <andyngkh86@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */
var NotificationModel = (function () {
    function NotificationModel() {
        this.id = 0;
        this.message = '';
        this.send_to = 0;
        this.send_from = 0;
        this.created_at = '';
        this.updated_at = '';
    }
    return NotificationModel;
}());

//# sourceMappingURL=NotificationModel.js.map

/***/ }),

/***/ 42:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SimpleORMService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__restful_web_service_web_service__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__myEncryption_service__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__AppConfig_service__ = __webpack_require__(40);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SimpleORMService = (function () {
    function SimpleORMService(webService, myEncryptionService, AppConfigService) {
        this.webService = webService;
        this.myEncryptionService = myEncryptionService;
        this.AppConfigService = AppConfigService;
        this.myEncryptionService.key = 18;
        this.init();
    }
    /**
     * init
    */
    SimpleORMService.prototype.init = function () {
        this.jsonObject = {};
        this.jsonObject['connection'] = 'mysql'; // default
    };
    /**
     * Database
     */
    SimpleORMService.prototype.database = function (database) {
        this.jsonObject['database'] = database;
        return this;
    };
    /**
     * connection
     */
    SimpleORMService.prototype.connection = function (connection) {
        this.jsonObject['connection'] = connection;
        return this;
    };
    /**
     * table
    */
    SimpleORMService.prototype.table = function (tableName) {
        var databaseValue = this.jsonObject['database'];
        this.init();
        this.jsonObject['table'] = tableName;
        return this;
    };
    /**
     * select
     */
    SimpleORMService.prototype.select = function () {
        var value = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            value[_i] = arguments[_i];
        }
        this.jsonObject['select'] = value;
        return this;
    };
    /**
     * where
    */
    SimpleORMService.prototype.where = function (field, operator, value) {
        if (operator === void 0) { operator = '='; }
        if (this.jsonObject.hasOwnProperty('where') == false) {
            this.jsonObject['where'] = [];
        }
        var total = this.jsonObject['where'].length;
        this.jsonObject['where'][total] = {};
        this.jsonObject['where'][total]['field'] = field;
        this.jsonObject['where'][total]['operator'] = operator;
        this.jsonObject['where'][total]['value'] = value;
        return this;
    };
    /**
     * orWhere
     */
    SimpleORMService.prototype.orWhere = function (field, operator, value) {
        if (operator === void 0) { operator = '='; }
        if (this.jsonObject.hasOwnProperty('orWhere') == false) {
            this.jsonObject['orWhere'] = [];
        }
        var total = this.jsonObject['orWhere'].length;
        this.jsonObject['orWhere'][total] = {};
        this.jsonObject['orWhere'][total]['field'] = field;
        this.jsonObject['orWhere'][total]['operator'] = operator;
        this.jsonObject['orWhere'][total]['value'] = value;
        return this;
    };
    /**
     * whereIn
     */
    SimpleORMService.prototype.whereIn = function (field, values) {
        if (this.jsonObject.hasOwnProperty('whereIn') == false) {
            this.jsonObject['whereIn'] = [];
        }
        var total = this.jsonObject['whereIn'].length;
        this.jsonObject['whereIn'][total] = {};
        this.jsonObject['whereIn'][total]['field'] = field;
        this.jsonObject['whereIn'][total]['value'] = values;
        return this;
    };
    /**
     * whereNotIn
     */
    SimpleORMService.prototype.whereNotIn = function (field, values) {
        if (this.jsonObject.hasOwnProperty('whereNotIn') == false) {
            this.jsonObject['whereNotIn'] = [];
        }
        var total = this.jsonObject['whereNotIn'].length;
        this.jsonObject['whereNotIn'][total] = {};
        this.jsonObject['whereNotIn'][total]['field'] = field;
        this.jsonObject['whereNotIn'][total]['value'] = values;
        return this;
    };
    /**
     * whereBetween
     */
    SimpleORMService.prototype.whereBetween = function (field, values) {
        if (this.jsonObject.hasOwnProperty('whereBetween') == false) {
            this.jsonObject['whereBetween'] = [];
        }
        var total = this.jsonObject['whereBetween'].length;
        this.jsonObject['whereBetween'][total] = {};
        this.jsonObject['whereBetween'][total]['field'] = field;
        this.jsonObject['whereBetween'][total]['value'] = values;
        return this;
    };
    /**
     * whereNotBetween
     */
    SimpleORMService.prototype.whereNotBetween = function (field, values) {
        if (this.jsonObject.hasOwnProperty('whereNotBetween') == false) {
            this.jsonObject['whereNotBetween'] = [];
        }
        var total = this.jsonObject['whereNotBetween'].length;
        this.jsonObject['whereNotBetween'][total] = {};
        this.jsonObject['whereNotBetween'][total]['field'] = field;
        this.jsonObject['whereNotBetween'][total]['value'] = values;
        return this;
    };
    /**
     * whereNull
     */
    SimpleORMService.prototype.whereNull = function (field) {
        if (this.jsonObject.hasOwnProperty('whereNull') == false) {
            this.jsonObject['whereNull'] = [];
        }
        var total = this.jsonObject['whereNull'].length;
        this.jsonObject['whereNull'][total] = {};
        this.jsonObject['whereNull'][total]['field'] = field;
        return this;
    };
    /**
     * whereNotNull
     */
    SimpleORMService.prototype.whereNotNull = function (field) {
        if (this.jsonObject.hasOwnProperty('whereNotNull') == false) {
            this.jsonObject['whereNotNull'] = [];
        }
        var total = this.jsonObject['whereNotNull'].length;
        this.jsonObject['whereNotNull'][total] = {};
        this.jsonObject['whereNotNull'][total]['field'] = field;
        return this;
    };
    /**
     * whereDate
     */
    SimpleORMService.prototype.whereDate = function (field, value) {
        if (this.jsonObject.hasOwnProperty('whereDate') == false) {
            this.jsonObject['whereDate'] = [];
        }
        var total = this.jsonObject['whereDate'].length;
        this.jsonObject['whereDate'][total] = {};
        this.jsonObject['whereDate'][total]['field'] = field;
        this.jsonObject['whereDate'][total]['value'] = value;
        return this;
    };
    /**
     * whereMonth
     */
    SimpleORMService.prototype.whereMonth = function (field, value) {
        if (this.jsonObject.hasOwnProperty('whereMonth') == false) {
            this.jsonObject['whereMonth'] = [];
        }
        var total = this.jsonObject['whereMonth'].length;
        this.jsonObject['whereMonth'][total] = {};
        this.jsonObject['whereMonth'][total]['field'] = field;
        this.jsonObject['whereMonth'][total]['value'] = value;
        return this;
    };
    /**
     *
     * @param field
     * @param value
     *
     *
     */
    SimpleORMService.prototype.whereDay = function (field, value) {
        if (this.jsonObject.hasOwnProperty('whereDay') == false) {
            this.jsonObject['whereDay'] = [];
        }
        var total = this.jsonObject['whereDay'].length;
        this.jsonObject['whereDay'][total] = {};
        this.jsonObject['whereDay'][total]['field'] = field;
        this.jsonObject['whereDay'][total]['value'] = value;
        return this;
    };
    /**
     * whereYear
     */
    SimpleORMService.prototype.whereYear = function (field, value) {
        if (this.jsonObject.hasOwnProperty('whereYear') == false) {
            this.jsonObject['whereYear'] = [];
        }
        var total = this.jsonObject['whereYear'].length;
        this.jsonObject['whereYear'][total] = {};
        this.jsonObject['whereYear'][total]['field'] = field;
        this.jsonObject['whereYear'][total]['value'] = value;
        return this;
    };
    /**
     * whereColumn
     */
    SimpleORMService.prototype.whereColumn = function (field, operator, value) {
        if (this.jsonObject.hasOwnProperty('whereColumn') == false) {
            this.jsonObject['whereColumn'] = [];
        }
        var total = this.jsonObject['whereColumn'].length;
        this.jsonObject['whereColumn'][total] = {};
        this.jsonObject['whereColumn'][total]['field'] = field;
        this.jsonObject['whereColumn'][total]['operator'] = field;
        this.jsonObject['whereColumn'][total]['value'] = value;
        return this;
    };
    /**
     * orderBy
     *
     * @param value
     * @desc
     *
     * value = 'asc' or 'desc'
     *
     */
    SimpleORMService.prototype.orderBy = function (field, value) {
        if (this.jsonObject.hasOwnProperty('orderBy') == false) {
            this.jsonObject['orderBy'] = [];
        }
        var total = this.jsonObject['orderBy'].length;
        this.jsonObject['orderBy'][total] = {};
        this.jsonObject['orderBy'][total]['field'] = field;
        this.jsonObject['orderBy'][total]['value'] = value;
        return this;
    };
    /**
     * latest
     */
    SimpleORMService.prototype.latest = function () {
        this.jsonObject['latest'] = '';
        return this;
    };
    /**
     *
     */
    SimpleORMService.prototype.inRandomOrder = function () {
        this.jsonObject['inRandomOrder'] = '';
        return this;
    };
    /**
     * groupBy
     */
    SimpleORMService.prototype.groupBy = function (value) {
        this.jsonObject['groupBy'] = value;
        return this;
    };
    /**
     * having
     */
    SimpleORMService.prototype.having = function (field, operator, value) {
        if (this.jsonObject.hasOwnProperty('having') == false) {
            this.jsonObject['having'] = [];
        }
        var total = this.jsonObject['having'].length;
        this.jsonObject['having'][total] = {};
        this.jsonObject['having'][total]['field'] = field;
        this.jsonObject['having'][total]['operator'] = field;
        this.jsonObject['having'][total]['value'] = value;
        return this;
    };
    /**
     * offset
     */
    SimpleORMService.prototype.offset = function (value) {
        this.jsonObject['offset'] = value;
    };
    /**
     * limit
     */
    SimpleORMService.prototype.limit = function (value) {
        this.jsonObject['limit'] = value;
    };
    /**
     * skip
     */
    SimpleORMService.prototype.skip = function (value) {
        this.jsonObject['skip'] = value;
        return this;
    };
    /**
     * take
     */
    SimpleORMService.prototype.take = function (field) {
        this.jsonObject['take'] = field;
        return this;
    };
    /**
     * insert
     */
    SimpleORMService.prototype.insert = function (obj) {
        this.jsonObject['insert'] = JSON.stringify(obj);
        return this.responseData();
    };
    /**
     * insertGetId
     */
    SimpleORMService.prototype.insertGetId = function (obj) {
        this.jsonObject['insertGetId'] = JSON.stringify(obj);
        return this.responseData();
    };
    /**
     * update
     */
    SimpleORMService.prototype.update = function (obj) {
        this.jsonObject['update'] = JSON.stringify(obj);
        return this.responseData();
    };
    /**
     * delete
     */
    SimpleORMService.prototype.delete = function () {
        this.jsonObject['delete'] = '';
        return this.responseData();
    };
    /**
     * Join
     */
    SimpleORMService.prototype.join = function (joinTable, tableField, operator, joinTableField) {
        if (this.jsonObject.hasOwnProperty('join') == false) {
            this.jsonObject['join'] = [];
        }
        var total = this.jsonObject['join'].length;
        this.jsonObject['join'][total] = {};
        this.jsonObject['join'][total]['joinTable'] = joinTable;
        this.jsonObject['join'][total]['tableField'] = tableField;
        this.jsonObject['join'][total]['operator'] = operator;
        this.jsonObject['join'][total]['joinTableField'] = joinTableField;
        return this;
    };
    /**
     * leftJoin
     */
    SimpleORMService.prototype.leftJoin = function (joinTable, tableField, operator, joinTableField) {
        if (this.jsonObject.hasOwnProperty('leftJoin') == false) {
            this.jsonObject['leftJoin'] = [];
        }
        var total = this.jsonObject['leftJoin'].length;
        this.jsonObject['leftJoin'][total] = {};
        this.jsonObject['leftJoin'][total]['joinTable'] = joinTable;
        this.jsonObject['leftJoin'][total]['tableField'] = tableField;
        this.jsonObject['leftJoin'][total]['operator'] = operator;
        this.jsonObject['leftJoin'][total]['joinTableField'] = joinTableField;
        return this;
    };
    /**
     * crossJoin
     */
    SimpleORMService.prototype.crossJoin = function (crossJoinTable) {
        this.jsonObject['crossJoin'] = crossJoinTable;
        return this;
    };
    /**
     * sum column name
     */
    SimpleORMService.prototype.sum = function (field) {
        this.jsonObject['sum'] = field;
        return this.responseData();
    };
    /**
     * max
     */
    SimpleORMService.prototype.max = function (field) {
        this.jsonObject['max'] = field;
        return this;
    };
    /**
     * avg
     * @example
     * simpleORMService.database('testDatabase').
     * table('product').
     * where('location_code','=','M008').
     * sum('price');
     */
    SimpleORMService.prototype.avg = function (field) {
        this.jsonObject['avg'] = field;
        return this.responseData();
    };
    /**
     * count
     */
    SimpleORMService.prototype.count = function () {
        this.jsonObject['count'] = '';
        return this.responseData();
    };
    /**
     * first
     */
    SimpleORMService.prototype.first = function () {
        this.jsonObject['first'] = '';
        return this.responseData();
    };
    SimpleORMService.prototype.get = function () {
        this.jsonObject['get'] = '';
        return this.responseData();
    };
    /**
     * paginate
     */
    SimpleORMService.prototype.paginate = function (perPage, columns, pageName, page) {
        this.jsonObject['paginate'] = {};
        this.jsonObject['paginate']['perPage'] = perPage;
        this.jsonObject['paginate']['columns'] = columns;
        this.jsonObject['paginate']['pageName'] = pageName;
        this.jsonObject['paginate']['page'] = page;
        return this.responseData();
    };
    SimpleORMService.prototype.responseData = function () {
        /*
        let encodedText = this.myEncryptionService.encode(this.getSqlQueryString());
        let parameters = {
            "data" : encodedText
        };
        console.log('encoded Text : '+ encodedText);
        */
        this.jsonObject['apiKey'] = this.AppConfigService.apiKey;
        var newObject = this.jsonObject;
        var url = this.AppConfigService.url;
        return this.webService.httpJsonRequest(url, newObject, 'POST', []);
        //return this.webService.laravelJsonPost(url + '/api/simple-orm', newObject);
    };
    /**
     * sql query string
     */
    SimpleORMService.prototype.getSqlQueryString = function () {
        return JSON.stringify(this.jsonObject);
    };
    return SimpleORMService;
}());
SimpleORMService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__restful_web_service_web_service__["a" /* WebService */],
        __WEBPACK_IMPORTED_MODULE_2__myEncryption_service__["a" /* MyEncryptionService */],
        __WEBPACK_IMPORTED_MODULE_3__AppConfig_service__["a" /* AppConfigService */]])
], SimpleORMService);

//# sourceMappingURL=simpleORM.service.js.map

/***/ }),

/***/ 43:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_TableNameService_service__ = __webpack_require__(44);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthService = (function () {
    function AuthService(tableNameService) {
        this.tableNameService = tableNameService;
        this._user = null;
        this._isAuthenticate = false;
        this._token = '';
        this._updateSideBar = false;
    }
    /**
     * init
     */
    AuthService.prototype.init = function () {
        this._user = null;
        this._isAuthenticate = false;
        this._token = '';
        this._updateSideBar = false;
    };
    Object.defineProperty(AuthService.prototype, "isAuthenticate", {
        get: function () {
            var isAuthenticate = localStorage.getItem('isAuthenticate');
            if (isAuthenticate != null) {
                return isAuthenticate == 'true' ? true : false;
            }
            else {
                return this._isAuthenticate;
            }
        },
        set: function (value) {
            localStorage.setItem('isAuthenticate', value ? 'true' : 'false');
            this._isAuthenticate = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AuthService.prototype, "user", {
        get: function () {
            if (this._user != null) {
                return this._user;
            }
            else {
                this._user = JSON.parse(localStorage.getItem(this.tableNameService.user));
                return this._user;
            }
        },
        set: function (value) {
            localStorage.setItem(this.tableNameService.user, JSON.stringify(value));
            this._user = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AuthService.prototype, "token", {
        get: function () {
            if (this._token == '') {
                this._token = localStorage.getItem('token');
                return this._token;
            }
            else {
                return this._token;
            }
        },
        set: function (value) {
            localStorage.setItem('token', value);
            this._token = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AuthService.prototype, "updateSideBar", {
        get: function () {
            return this._updateSideBar;
        },
        set: function (value) {
            this._updateSideBar = value;
        },
        enumerable: true,
        configurable: true
    });
    return AuthService;
}());
AuthService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__models_TableNameService_service__["a" /* TableNameService */]])
], AuthService);

//# sourceMappingURL=autheticate.service.js.map

/***/ }),

/***/ 44:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TableNameService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/*
 *
 * (c) Andy Ng Kei Hang <andyngkh86@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TableNameService = (function () {
    function TableNameService() {
        this.company = 'company';
        this.company_has_user = 'company_has_user';
        this.food = 'food';
        this.food_order = 'food_order';
        this.food_order_item = 'food_order_item';
        this.notification = 'notification';
        this.stall = 'stall';
        this.user = 'user';
    }
    return TableNameService;
}());
TableNameService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], TableNameService);

//# sourceMappingURL=TableNameService.service.js.map

/***/ }),

/***/ 53:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiTestPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_shared_AppConfig_service__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_shared_restful_web_service_web_service__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_shared_simpleORM_simpleORM_service__ = __webpack_require__(42);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the ApiTestPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var ApiTestPage = (function () {
    function ApiTestPage(navCtrl, navParams, actionSheetCtrl, appConfigService, webService, simpleORMService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.actionSheetCtrl = actionSheetCtrl;
        this.appConfigService = appConfigService;
        this.webService = webService;
        this.simpleORMService = simpleORMService;
    }
    ApiTestPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ApiTestPage');
        this.apiUrl = localStorage.getItem('ApiTestPage.apiUrl');
        this.httpMethod = localStorage.getItem('ApiTestPage.httpMethod');
        this.bodyText = localStorage.getItem('ApiTestPage.bodyText');
        this.requestValue = localStorage.getItem('ApiTestPage.requestValue');
        console.log(parseFloat("55.5550").toFixed(2));
        this.totalSuccessRequest = 0;
        this.totalFailureRequest = 0;
        this.successResponse = '';
        this.bodyTextJsonPretty = '';
        this.totalTimeUsed = 0;
        this.requestPerTime = 0;
        this.timePerRequest = 0;
        if (this.apiUrl == null) {
            this.apiUrl = this.appConfigService.url;
            localStorage.setItem('ApiTestPage.apiUrl', this.apiUrl);
        }
        if (this.requestValue == null) {
            this.requestValue = '10';
            localStorage.setItem('ApiTestPage.requestValue', '10');
        }
        if (this.httpMethod == null) {
            this.httpMethod = 'POST';
            localStorage.setItem('ApiTestPage.httpMethod', this.httpMethod);
        }
        //========= Display the simple ORM json string =======
        this.simpleOrm = this.simpleORMService
            .table('company')
            .select('location', 'name', 'created_at', 'id', 'updated_at')
            .where('name', '=', 'Cyeroid Food')
            .where('location', '=', 'Toa Payoh')
            .getSqlQueryString();
        console.log('Simple ORM : ' + this.simpleOrm);
    };
    ApiTestPage.prototype.beautifyJson = function () {
        console.log('Beautify JSON');
        this.bodyText = JSON.stringify(JSON.parse(this.bodyText), null, 4);
    };
    ApiTestPage.prototype.returnJson = function (text) {
        return JSON.stringify(JSON.parse(text), null, 4);
    };
    ApiTestPage.prototype.showSubmitMethod = function () {
        var _this = this;
        var actionSheet = this.actionSheetCtrl.create({
            title: 'Choose the Http Method',
            buttons: [
                {
                    text: 'POST',
                    handler: function () {
                        _this.httpMethod = 'POST';
                    }
                }, {
                    text: 'GET',
                    handler: function () {
                        _this.httpMethod = 'GET';
                    }
                }, {
                    text: 'UPDATE',
                    handler: function () {
                        _this.httpMethod = 'UPDATE';
                    }
                }, {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                }
            ]
        });
        actionSheet.present();
    };
    ApiTestPage.prototype.submitRequest = function () {
        var _this = this;
        this.totalFailureRequest = 0;
        this.totalSuccessRequest = 0;
        localStorage.setItem('ApiTestPage.apiUrl', this.apiUrl);
        localStorage.setItem('ApiTestPage.requestValue', this.requestValue);
        localStorage.setItem('ApiTestPage.httpMethod', this.httpMethod);
        localStorage.setItem('ApiTestPage.bodyText', this.bodyText);
        var totalRequest = parseInt(this.requestValue);
        var startTime = (new Date()).getTime();
        var totalSuccessCount = 0;
        var totalFailureCount = 0;
        for (var index = 0; index < totalRequest; index++) {
            this.webService.httpJsonRequest(this.apiUrl, JSON.parse(this.bodyText), this.httpMethod, []).subscribe(function (data) {
                totalSuccessCount += 1;
                if ((totalSuccessCount + totalFailureCount) == totalRequest) {
                    _this.totalSuccessRequest = totalSuccessCount;
                    var endTime = (new Date()).getTime();
                    try {
                        _this.successResponse = JSON.stringify(data, null, 4);
                    }
                    catch (error) {
                        console.log('successResponse : ' + _this.successResponse);
                    }
                    _this.totalTimeUsed = (endTime - startTime) / 1000;
                    _this.timePerRequest = parseFloat((_this.totalTimeUsed / totalRequest).toFixed(6));
                    _this.requestPerTime = parseFloat((totalRequest / _this.totalTimeUsed).toFixed(0));
                }
            }, function () {
                totalFailureCount += 1;
                if ((totalSuccessCount + totalFailureCount) == totalRequest) {
                    _this.totalFailureRequest = totalFailureCount;
                }
            });
        }
    };
    return ApiTestPage;
}());
ApiTestPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-api-test',template:/*ion-inline-start:"/Users/andy/Desktop/ionic/mytool/src/pages/api-test/api-test.html"*/'<!--\n  Generated template for the ApiTestPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-navbar>\n        <ion-title>ApiTest</ion-title>\n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n\n    <ion-row>\n        <ion-col>\n            <ion-item>\n                <ion-label fixed>Username</ion-label>\n                <ion-input block type="text" [(ngModel)]="apiUrl" value="{{ apiUrl }}"></ion-input>\n            </ion-item>\n        </ion-col>\n    </ion-row>\n\n    <ion-row>\n        <ion-col col-3>\n            Http Method\n        </ion-col>\n        <ion-col col-3>\n            <button (click)="showSubmitMethod()" ion-button small icon-left>\n            <ion-icon name="add-circle" ></ion-icon>\n            {{ httpMethod }}\n            </button>\n        </ion-col>\n        <ion-col col-2>\n            Total Req.\n        </ion-col>\n        <ion-col col-2>\n            <input type="tel" [(ngModel)]="requestValue" value="{{ requestValue }}">\n        </ion-col>\n\n    </ion-row>\n    <ion-row>\n        <ion-col col-3>\n            Body Text\n        </ion-col>\n        <ion-col>\n        </ion-col>\n    </ion-row>\n    <textarea rows="8" cols="60" type="textarea" (blur)="beautifyJson()" [(ngModel)]="bodyText"></textarea>\n\n    <ion-row>\n        <ion-col col-3>\n            Total Success :\n        </ion-col>\n        <ion-col>\n            {{ totalSuccessRequest }}\n        </ion-col>\n        <ion-col col-3>\n            Total Failure :\n        </ion-col>\n        <ion-col>\n            {{ totalFailureRequest }}\n        </ion-col>\n\n    </ion-row>\n    <ion-row>\n        <ion-col col-3>\n            Total Time :\n        </ion-col>\n        <ion-col>\n            {{ totalTimeUsed }}\n        </ion-col>\n        <ion-col col-3>\n            Time/Request:\n        </ion-col>\n        <ion-col>\n            {{ timePerRequest }}\n        </ion-col>\n    </ion-row>\n    <ion-row>\n        <ion-col col-3>\n\n        </ion-col>\n        <ion-col>\n\n        </ion-col>\n        <ion-col col-3>\n            Requests/Second\n        </ion-col>\n        <ion-col>\n            {{ requestPerTime }}\n        </ion-col>\n    </ion-row>\n\n    <ion-row>\n        <ion-col col-1>\n        </ion-col>\n        <ion-col>\n            <button (click)="submitRequest()" ion-button block small icon-left>\n            <ion-icon name="add-circle" ></ion-icon>\n            Submit\n            </button>\n        </ion-col>\n        <ion-col col-1>\n        </ion-col>\n    </ion-row>\n    <br>\n\n\n\n    <pre>\n        {{successResponse}}\n    </pre>\n\n\n</ion-content>'/*ion-inline-end:"/Users/andy/Desktop/ionic/mytool/src/pages/api-test/api-test.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
        __WEBPACK_IMPORTED_MODULE_2__app_shared_AppConfig_service__["a" /* AppConfigService */],
        __WEBPACK_IMPORTED_MODULE_3__app_shared_restful_web_service_web_service__["a" /* WebService */],
        __WEBPACK_IMPORTED_MODULE_4__app_shared_simpleORM_simpleORM_service__["a" /* SimpleORMService */]])
], ApiTestPage);

//# sourceMappingURL=api-test.js.map

/***/ }),

/***/ 55:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyEncryptionPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_shared_utilities_service__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_shared_myEncryption_service__ = __webpack_require__(86);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the MyEncryptionPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var MyEncryptionPage = (function () {
    function MyEncryptionPage(navCtrl, navParams, utilitiesService, myEncryptionService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.utilitiesService = utilitiesService;
        this.myEncryptionService = myEncryptionService;
        this.inputText = localStorage.getItem('MyEncryptionPage.inputText');
        this.outputText = localStorage.getItem('MyEncryptionPage.outputText');
        this.keyInput = localStorage.getItem('MyEncryptionPage.keyInput');
    }
    MyEncryptionPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MyEncryptionPage');
    };
    MyEncryptionPage.prototype.hexToDec = function (value) {
        this.decValue = this.utilitiesService.hexToDec(value);
    };
    MyEncryptionPage.prototype.decToHex = function (value) {
        this.hexValue = parseInt(value).toString(16);
    };
    MyEncryptionPage.prototype.encode = function () {
        this.outputText = this.myEncryptionService.encode(this.inputText);
        localStorage.setItem('MyEncryptionPage.inputText', this.inputText);
        localStorage.setItem('MyEncryptionPage.outputText', this.outputText);
        localStorage.setItem('MyEncryptionPage.keyInput', this.keyInput);
    };
    MyEncryptionPage.prototype.decode = function () {
        this.outputText = this.myEncryptionService.decode(this.inputText);
        localStorage.setItem('MyEncryptionPage.inputText', this.inputText);
        localStorage.setItem('MyEncryptionPage.outputText', this.outputText);
        localStorage.setItem('MyEncryptionPage.keyInput', this.keyInput);
    };
    MyEncryptionPage.prototype.updateKey = function () {
        this.myEncryptionService.key = parseInt(this.keyInput);
        localStorage.setItem('MyEncryptionPage.keyInput', this.keyInput);
    };
    return MyEncryptionPage;
}());
MyEncryptionPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-my-encryption',template:/*ion-inline-start:"/Users/andy/Desktop/ionic/mytool/src/pages/my-encryption/my-encryption.html"*/'<!--\n  Generated template for the MyEncryptionPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-navbar>\n        <ion-title>myEncryption</ion-title>\n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <ion-row>\n        <ion-col>\n            <ion-item>\n                <ion-label>HexToDec</ion-label>\n                <ion-input #hexInput type="text" (keyup)="hexToDec(hexInput.value)"></ion-input>\n            </ion-item>\n        </ion-col>\n        <ion-col col-3>\n            <ion-item>\n                <ion-label> {{ decValue }}</ion-label>\n            </ion-item>\n        </ion-col>\n    </ion-row>\n    <ion-row>\n        <ion-col>\n            <ion-item>\n                <ion-label>DecToHex</ion-label>\n                <ion-input #decInput type="text" (keyup)="decToHex(decInput.value)"></ion-input>\n            </ion-item>\n        </ion-col>\n        <ion-col col-3>\n            <ion-item>\n                <ion-label>{{ hexValue }}</ion-label>\n            </ion-item>\n        </ion-col>\n    </ion-row>\n    <ion-row>\n        <ion-col>\n            <ion-item>\n                <ion-label>Key</ion-label>\n                <ion-input type="text" (keyup)="updateKey()" [(ngModel)]="keyInput"></ion-input>\n            </ion-item>\n        </ion-col>\n    </ion-row>\n\n\n    Input<br>\n    <textarea rows="8" cols="60" type="textarea" [(ngModel)]="inputText"></textarea>\n    <ion-row>\n        <ion-col>\n            <button (click)="encode()" ion-button block small icon-left>\n               <ion-icon name="add-circle" ></ion-icon>\n               Encode\n           </button>\n\n        </ion-col>\n        <ion-col>\n            <button (click)="decode()" ion-button block small icon-left>\n               <ion-icon name="add-circle" ></ion-icon>\n               Decode\n           </button>\n        </ion-col>\n    </ion-row>\n    <textarea rows="8" cols="60" type="textarea" [(ngModel)]="outputText"></textarea>\n\n\n\n</ion-content>'/*ion-inline-end:"/Users/andy/Desktop/ionic/mytool/src/pages/my-encryption/my-encryption.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__app_shared_utilities_service__["a" /* UtilitiesService */],
        __WEBPACK_IMPORTED_MODULE_3__app_shared_myEncryption_service__["a" /* MyEncryptionService */]])
], MyEncryptionPage);

//# sourceMappingURL=my-encryption.js.map

/***/ }),

/***/ 56:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__api_test_api_test__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__my_encryption_my_encryption__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(54);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the HomePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var HomePage = (function () {
    function HomePage(navCtrl, navParams, http) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
    }
    HomePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad HomePage');
        var headers = {
            'Content-Type': 'text/plain',
        };
        var options = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["d" /* RequestOptions */]({
            method: 'POST',
            headers: headers,
            body: 'String Text'
        });
        this.http.request('http://api.cyberoid.com', options).subscribe(function (results) {
            // Successful result
            console.log(results);
        }, function (error) {
            // Failure result
            console.log('Error Http');
            console.log(error);
        });
    };
    HomePage.prototype.showAPIPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__api_test_api_test__["a" /* ApiTestPage */]);
    };
    HomePage.prototype.showMyEncrytion = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__my_encryption_my_encryption__["a" /* MyEncryptionPage */]);
    };
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"/Users/andy/Desktop/ionic/mytool/src/pages/home/home.html"*/'<!--\n  Generated template for the HomePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-navbar>\n        <ion-title>home</ion-title>\n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n    <ion-row>\n        <ion-col>\n            <button (click)="showAPIPage()" ion-button block small icon-left>\n            <ion-icon name="add-circle" ></ion-icon>\n            API Test\n            </button>\n        </ion-col>\n        <ion-col>\n            <button (click)="showMyEncrytion()" ion-button block small icon-left>\n            <ion-icon name="add-circle" ></ion-icon>\n            My Encryption\n            </button>\n        </ion-col>\n        <ion-col>\n\n        </ion-col>\n    </ion-row>\n\n\n\n</ion-content>'/*ion-inline-end:"/Users/andy/Desktop/ionic/mytool/src/pages/home/home.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* Http */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 86:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyEncryptionService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MyEncryptionService = (function () {
    function MyEncryptionService() {
        this.key = 18;
    }
    /*
                hex	    dec
        MAX	    FFFFFE	16,777,214
        MIN	    100001	1048577
        
        maximum characters is 15,728,637
    */
    /**
    // format : RRRRRRHHHHHHJJJJJJJJJJJJJJRRRRRR
    // R : random charaters
    // H : sum of the string (R and J) and convert to Hex
    // J : jSon data encoded with base64
     */
    MyEncryptionService.prototype.encode = function (jsonString) {
        var randomString1 = this.randomString(this.key);
        var randomString2 = this.randomString(this.key);
        var base64text = btoa(jsonString);
        var intSumOfText = this.sumOfText(randomString1) + this.sumOfText(base64text) + this.sumOfText(randomString2);
        var intHex = intSumOfText + 1048577.0;
        var charHex = intHex.toString(16);
        return randomString1 + charHex + base64text + randomString2;
    };
    MyEncryptionService.prototype.decode = function (encodedText) {
        var encodedTextLength = encodedText.length;
        var keyLength = this.key * 2 + 6;
        if (encodedTextLength < keyLength) {
            return '';
        }
        var removeRandomString1 = encodedText.substr(this.key);
        var removeHexString = removeRandomString1.substr(6);
        var totalLength = removeHexString.length;
        var base64text = removeHexString.substr(0, totalLength - this.key);
        var randomString1 = encodedText.substr(0, this.key);
        var randomString2 = encodedText.substr(encodedText.length - this.key);
        var charHex = removeRandomString1.substr(0, 6);
        var intTotalHexNumber = this.hexToDec(charHex) - 1048577.0;
        var intCheckSum = this.sumOfText(randomString1) + this.sumOfText(base64text) + this.sumOfText(randomString2);
        if (intTotalHexNumber != intCheckSum) {
            return '';
        }
        return atob(base64text);
    };
    /**
    * hexToDec
    */
    MyEncryptionService.prototype.hexToDec = function (hexString) {
        var num = 0;
        for (var index = 0; index < hexString.length; index++) {
            var hexdigit = parseInt(hexString[index], 16);
            num = (num << 4) | hexdigit;
        }
        return num;
    };
    /**
     * sumOfText
     */
    MyEncryptionService.prototype.sumOfText = function (text) {
        var length = text.length;
        var sum = 0;
        for (var i = 0; i < length; i++) {
            var num = text.charCodeAt(i);
            sum += num;
        }
        return sum;
    };
    /**
     * randomString
     */
    MyEncryptionService.prototype.randomString = function (length) {
        if (length === void 0) { length = 18; }
        var text = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        for (var i = 0; i < length; i++)
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        return text;
    };
    return MyEncryptionService;
}());
MyEncryptionService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], MyEncryptionService);

//# sourceMappingURL=myEncryption.service.js.map

/***/ }),

/***/ 87:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FirstPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_shared_autheticate_service__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_shared_simpleORM_simpleORM_service__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home__ = __webpack_require__(56);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the FirstPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var FirstPage = (function () {
    function FirstPage(navCtrl, navParams, authService, simpleORMService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.authService = authService;
        this.simpleORMService = simpleORMService;
    }
    FirstPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad FirstPage');
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */]);
    };
    return FirstPage;
}());
FirstPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-first',template:/*ion-inline-start:"/Users/andy/Desktop/ionic/mytool/src/pages/first/first.html"*/'<!--\n  Generated template for the FirstPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n\n\n</ion-header>\n\n\n<ion-content class="my-background" padding>\n\n</ion-content>'/*ion-inline-end:"/Users/andy/Desktop/ionic/mytool/src/pages/first/first.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__app_shared_autheticate_service__["a" /* AuthService */],
        __WEBPACK_IMPORTED_MODULE_3__app_shared_simpleORM_simpleORM_service__["a" /* SimpleORMService */]])
], FirstPage);

//# sourceMappingURL=first.js.map

/***/ })

},[328]);
//# sourceMappingURL=main.js.map