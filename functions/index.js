(function(e, a) { for(var i in a) e[i] = a[i]; }(this, /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("firebase-functions");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("mercadopago");

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const functions = __webpack_require__(0);
const admin = __webpack_require__(3);
admin.initializeApp(functions.config().firebase);
const nodeEnv = "development";
const products = __webpack_require__(4);
const checkout = __webpack_require__(6);
exports.updateProducts = products.updateProducts;
exports.doPayment = checkout.doPayment;


/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("firebase-admin");

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const functions = __webpack_require__(0);
const algoliasearch = __webpack_require__(5);
const algolia = algoliasearch(functions.config().algolia.appid, functions.config().algolia.adminkey);
const index = algolia.initIndex('products');
exports.updateProducts = functions.database
    .ref('products/published/{productId}')
    .onWrite((event) => __awaiter(this, void 0, void 0, function* () {
    const productId = event.params.productId;
    const data = event.data.val();
    if (!data) {
        return index.deleteObject(productId, (err) => {
            if (err)
                throw err;
            console.log(productId);
        });
    }
    data.objectID = data.id = productId;
    data.slug = data.title ? slugify(data.title) : null;
    return index.saveObject(data, (err, content) => {
        if (err)
            throw err;
        console.log(data.objectID);
    });
}));
function slugify(string) {
    let specialChars = "!@#$^&%*()+=-[]\/{}|:<>?,.";
    for (var i = 0; i < specialChars.length; i++) {
        string = string.replace(new RegExp("\\" + specialChars[i], 'gi'), '');
    }
    string = string.toLowerCase();
    string = string.replace(/ /g, "-");
    string = string.replace(/á/gi, "a");
    string = string.replace(/é/gi, "e");
    string = string.replace(/í/gi, "i");
    string = string.replace(/ó/gi, "o");
    string = string.replace(/ú/gi, "u");
    string = string.replace(/ñ/gi, "n");
    return string;
}


/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("algoliasearch");

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const functions = __webpack_require__(0);
const customers_1 = __webpack_require__(7);
const payments_1 = __webpack_require__(8);
var MP = __webpack_require__(1);
var mp = new MP(functions.config().mercadopago.access_token);
// const mp = new MP ("TEST-5689156392534944-120613-b9a025a324ea5f042f155bbca6c9d55b__LB_LA__-198376512");
exports.doPayment = functions.database
    .ref('jobs/payments/{paymentId}')
    .onWrite((event) => __awaiter(this, void 0, void 0, function* () {
    const paymentId = event.params.paymentId;
    const data = event.data.val();
    console.log(data);
    console.log(paymentId);
    // console.log(event.data.ref.val();
    if (!data)
        return;
    // return this.mpConfigGet.then(() => {
    // let payment = mp.post ({
    //     "uri": "/v1/payments",
    //     "data": {
    //             "transaction_amount": 100,
    //             "token": "150080348dfd1af1aebd75bb689e6887",
    //             "description": "Title of what you are paying for",
    //             "installments": 1,
    //             "payment_method_id": "visa",
    //             "payer": {
    //                 "email": "test_user_19653727@testuser.com"
    //             }
    //         }
    // });
    //     return payment.then(payment, (err) => {
    //         console.log("payment: " + payment)
    //         console.log("err: " + err)
    //         return payment;
    //     })
    // })
    var payment_data = {
        transaction_amount: 134,
        token: '6ff8544fe8d0125ef328cebeb925498a',
        description: 'Gorgeous Copper Bag',
        installments: 1,
        payment_method_id: 'visa',
        payer: {
            email: 'email@test.com'
        }
    };
    // mp.post ({
    //     "uri": "/v1/payments",
    //     "data": payment_data
    // })
    // .then (payment => {
    //     console.log(payment)
    // })
    // .catch(err => {
    //     console.log('error payment: ' + err)
    // })
    customers_1.getCustomerByID('128416941-naemCyzSUPQBcG')
        .then(exist => {
        if (exist) {
            console.warn('exist');
            // cobrar pabo
            payments_1.createPayment(payment_data)
                .then(payment => {
                console.log('payment:' + payment);
            });
        }
        else {
            console.warn('not exist');
            customers_1.createCustommer({ email: "jlmosconi@gmail.com" })
                .then(create => {
                if (create) {
                    console.log("creado con éxito");
                }
                else {
                    console.log("no creado");
                }
            });
        }
    });
}));


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const functions = __webpack_require__(0);
var MP = __webpack_require__(1);
var mp = new MP(functions.config().mercadopago.access_token);
exports.getCustomerByID = (id) => {
    return new Promise((resolve, reject) => {
        mp.get({
            "uri": "/v1/customers/" + id,
        })
            .then(customer => {
            /*customer exist*/
            console.log(customer);
            resolve(true);
        })
            .catch(err => {
            /*customer not exist*/
            resolve(false);
        });
    });
};
exports.createCustommer = (customerData) => {
    return new Promise((resolve, reject) => {
        mp.get({
            "uri": "/v1/customers/",
            "data": {
                "email": customerData.email
            }
        })
            .then(customer => {
            resolve(true);
        })
            .catch(err => {
            /*customer not exist*/
            resolve(false);
        });
    });
};


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const functions = __webpack_require__(0);
var MP = __webpack_require__(1);
var mp = new MP(functions.config().mercadopago.access_token);
exports.createPayment = (paymentData) => {
    return new Promise((resolve, reject) => {
        mp.post({
            "uri": "/v1/payments",
            "data": paymentData
        })
            .then(payment => {
            console.log('payment service: ' + payment);
            resolve(true);
        })
            .catch(err => {
            console.log('Error Payment: ' + err);
            resolve(false);
        });
    });
};


/***/ })
/******/ ])));