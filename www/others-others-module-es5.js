function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["others-others-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/others/others.page.html":
  /*!*******************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/others/others.page.html ***!
    \*******************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppOthersOthersPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n    <ion-back-button defaultHref=\"/\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Other Info</ion-title>\n    </ion-toolbar>\n    </ion-header>\n\n<ion-content>\n\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/others/others-routing.module.ts":
  /*!*************************************************!*\
    !*** ./src/app/others/others-routing.module.ts ***!
    \*************************************************/

  /*! exports provided: OthersPageRoutingModule */

  /***/
  function srcAppOthersOthersRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OthersPageRoutingModule", function () {
      return OthersPageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _others_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./others.page */
    "./src/app/others/others.page.ts");

    var routes = [{
      path: '',
      component: _others_page__WEBPACK_IMPORTED_MODULE_3__["OthersPage"]
    }];

    var OthersPageRoutingModule = function OthersPageRoutingModule() {
      _classCallCheck(this, OthersPageRoutingModule);
    };

    OthersPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], OthersPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/others/others.module.ts":
  /*!*****************************************!*\
    !*** ./src/app/others/others.module.ts ***!
    \*****************************************/

  /*! exports provided: OthersPageModule */

  /***/
  function srcAppOthersOthersModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OthersPageModule", function () {
      return OthersPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _others_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./others-routing.module */
    "./src/app/others/others-routing.module.ts");
    /* harmony import */


    var _others_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./others.page */
    "./src/app/others/others.page.ts");

    var OthersPageModule = function OthersPageModule() {
      _classCallCheck(this, OthersPageModule);
    };

    OthersPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _others_routing_module__WEBPACK_IMPORTED_MODULE_5__["OthersPageRoutingModule"]],
      declarations: [_others_page__WEBPACK_IMPORTED_MODULE_6__["OthersPage"]]
    })], OthersPageModule);
    /***/
  },

  /***/
  "./src/app/others/others.page.scss":
  /*!*****************************************!*\
    !*** ./src/app/others/others.page.scss ***!
    \*****************************************/

  /*! exports provided: default */

  /***/
  function srcAppOthersOthersPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL290aGVycy9vdGhlcnMucGFnZS5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/others/others.page.ts":
  /*!***************************************!*\
    !*** ./src/app/others/others.page.ts ***!
    \***************************************/

  /*! exports provided: OthersPage */

  /***/
  function srcAppOthersOthersPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OthersPage", function () {
      return OthersPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var OthersPage = /*#__PURE__*/function () {
      function OthersPage() {
        _classCallCheck(this, OthersPage);
      }

      _createClass(OthersPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return OthersPage;
    }();

    OthersPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-others',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./others.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/others/others.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./others.page.scss */
      "./src/app/others/others.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], OthersPage);
    /***/
  }
}]);
//# sourceMappingURL=others-others-module-es5.js.map