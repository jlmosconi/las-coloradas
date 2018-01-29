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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("firebase-functions");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("firebase-admin");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("mercadopago");

/***/ }),
/* 3 */
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
exports.getDetail = (id) => {
    return new Promise((resolve, reject) => {
        index.getObject(id, (err, content) => {
            if (err) {
                console.error(err);
                reject();
            }
            resolve(content);
        });
    });
};
exports.getProductsById = (ids) => {
    return new Promise((resolve, reject) => {
        let promises = [];
        if (ids)
            ids.map(id => promises.push(this.getDetail(id)));
        if (promises.length) {
            Promise.all(promises)
                .then(results => resolve(results))
                .catch(err => reject(err));
        }
        else {
            resolve();
        }
    });
};
exports.calculateTotal = (cart) => {
    return new Promise((resolve, reject) => {
        let keys = cart ? Object.keys(cart) : null;
        if (keys) {
            let total = 0;
            this.getProductsById(keys)
                .then(products => {
                keys.map((key, i) => {
                    let product = products[i];
                    if (product.id == key)
                        total += cart[key] * product.price;
                });
                resolve(total);
            });
        }
        else {
            resolve();
        }
    });
};


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const functions = __webpack_require__(0);
const admin = __webpack_require__(1);
admin.initializeApp(functions.config().firebase);
const nodeEnv = "development";
const products = __webpack_require__(3);
const checkout = __webpack_require__(6);
exports.updateProducts = products.updateProducts;
exports.doPayment = checkout.doPayment;


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
const service_1 = __webpack_require__(9);
const index_1 = __webpack_require__(3);
const service_2 = __webpack_require__(10);
const service_3 = __webpack_require__(11);
var MP = __webpack_require__(2);
var mp = new MP(functions.config().mercadopago.access_token);
exports.doPayment = functions.database
    .ref('jobs/payments/{paymentId}')
    .onCreate((event) => __awaiter(this, void 0, void 0, function* () {
    const paymentId = event.params.paymentId;
    const data = event.data.val();
    console.log('data: ' + data);
    console.log('paymentId ' + paymentId);
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
        transaction_amount: null,
        token: data.checkout && data.checkout.payment_data ? data.checkout.payment_data.token : null,
        description: 'Compra en Las Coloradas.',
        installments: 1,
        payment_method_id: data.checkout && data.checkout.payment_data ? data.checkout.payment_data.payment_method_id : null,
        payer: {
            "email": null,
        }
    };
    console.log('ACAAA: ' + payment_data);
    index_1.calculateTotal(data.checkout.cart)
        .then((transaction_amount) => {
        console.log('total: ' + transaction_amount);
        payment_data.transaction_amount = transaction_amount;
        service_1.getUserByID(data.userID)
            .then((user) => {
            console.log(user);
            payment_data.payer.email = user.email;
            console.log('payment_data: ' + payment_data);
            customers_1.getCustomerByID(user.customerID)
                .then(exist => {
                if (exist) {
                    console.log('exist');
                    // Si existe el usuario, cobrar pago.
                    payments_1.createPayment(payment_data)
                        .then(payment => {
                        console.log('payment:' + payment);
                        // Mensaje de pago en algún lado, jijiji.
                        // updateo usuario con id del pago y detalles del mismo.
                        service_1.setUserPaymentID(user.uid, paymentId);
                        service_2.savePayment(payment, user.uid, paymentId);
                        //remove payment from jobs
                        service_3.removePaymentFromJobs(paymentId);
                    })
                        .catch(err => {
                        //mensaje de error
                        service_3.removePaymentFromJobs(paymentId);
                        service_1.setUserCheckoutStatus(user.uid, false, err.message);
                    });
                }
                else {
                    console.log('not exist');
                    // El usuario no existe, lo creo.
                    customers_1.createCustommer(user.email)
                        .then((customer) => {
                        if (customer) {
                            console.log("creado con éxito " + customer.response);
                            //Usuario creado con éxito, updateo usuario con id de customer.
                            service_1.setUserCustomerID(user.uid, customer.response.id);
                            //cobro pago.
                            payments_1.createPayment(payment_data)
                                .then(payment => {
                                console.log('payment:' + payment);
                                //mensaje de pago en algún lado, jijiji.
                            });
                        }
                        else {
                            console.log("no creado");
                        }
                    });
                }
            });
        });
    });
}));


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const functions = __webpack_require__(0);
var MP = __webpack_require__(2);
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
exports.createCustommer = (email) => {
    return new Promise((resolve, reject) => {
        mp.post({
            "uri": "/v1/customers/",
            "data": {
                "email": email
            }
        })
            .then(customer => {
            resolve(customer);
        })
            .catch(err => {
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
var MP = __webpack_require__(2);
var mp = new MP(functions.config().mercadopago.access_token);
exports.createPayment = (paymentData) => {
    return new Promise((resolve, reject) => {
        mp.post({
            "uri": "/v1/payments",
            "data": paymentData
        })
            .then(payment => {
            console.log('payment service: ' + payment.response);
            resolve(payment.response);
        })
            .catch(err => {
            console.log('Error Payment: ' + err);
            reject(err);
        });
    });
};


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const admin = __webpack_require__(1);
exports.getUserByID = (userID) => {
    return new Promise((resolve, reject) => {
        admin.database().ref('users/' + userID)
            .once('value')
            .then(snapshot => {
            resolve(snapshot.val());
        });
    });
};
exports.setUserCustomerID = (userID, customerID) => {
    return new Promise((resolve, reject) => {
        console.log('customerID ' + customerID);
        admin.database().ref('users/' + userID + '/customerID').set(customerID)
            .then(snapshot => {
            resolve(true);
        });
    });
};
exports.setUserPaymentID = (userID, paymentID) => {
    return new Promise((resolve, reject) => {
        admin.database().ref('users/' + userID + '/payments/' + paymentID).set(true)
            .then(snapshot => {
            resolve(true);
        });
    });
};
exports.setUserCheckoutStatus = (userID, success, msj) => {
    return new Promise((resolve, reject) => {
        admin.database().ref('users/' + userID + '/checkout/status').set({
            seccess: success,
            msj: msj
        })
            .then(snapshot => {
            resolve(true);
        });
    });
};


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const admin = __webpack_require__(1);
exports.savePayment = (payment, userID, paymentID) => {
    return new Promise((resolve, reject) => {
        admin.database().ref('payments/' + userID + '/' + paymentID).set(payment)
            .then(snapshot => {
            resolve(true);
        });
    });
};


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const admin = __webpack_require__(1);
exports.removePaymentFromJobs = (paymentID) => {
    return new Promise((resolve, reject) => {
        admin.database().ref('jobs/payments/' + paymentID).set(null)
            .then(snapshot => {
            resolve(true);
        });
    });
};


/***/ })
/******/ ])));