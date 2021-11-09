function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-student-login-student-login-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/student-login/student-login.page.html":
  /*!***************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/student-login/student-login.page.html ***!
    \***************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesStudentLoginStudentLoginPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"dark\">\n    <ion-buttons slot=\"start\">\n      <!-- <ion-back-button defaultHref=\"/\"></ion-back-button> -->\n    </ion-buttons>\n    <ion-title>Sign in</ion-title>\n  </ion-toolbar>\n</ion-header>\n \n<ion-content class=\"ion-padding\">\n \n  <form [formGroup]=\"credentialForm\">\n    <ion-item>\n      <ion-input placeholder=\"Email address\" \n      formControlName=\"email\" autofocus=\"true\" clearInput=\"true\"></ion-input>\n    </ion-item>\n \n    <div *ngIf=\"(email.dirty || email.touched) && email.errors\" class=\"errors\">\n      <span *ngIf=\"email.errors?.required\">Email is required</span>\n      <span *ngIf=\"email.errors?.email\">Email is invalid</span>\n    </div>\n \n    <ion-item>\n      <ion-input placeholder=\"Password\" type=\"password\" \n      formControlName=\"password\" clearInput=\"true\"></ion-input>\n    </ion-item>\n    <div *ngIf=\"(password.dirty || password.touched) && password.errors\" class=\"errors\">\n      <span *ngIf=\"password.errors?.required\">Password is required</span>\n      <span *ngIf=\"password.errors?.minlength\">Password needs to be 6 characters</span>\n    </div>\n  </form>\n \n  <ion-button (click)=\"signUp()\" expand=\"full\">Sign up</ion-button>\n  <ion-button (click)=\"signIn()\" expand=\"full\" color=\"secondary\">Sign in</ion-button>\n \n</ion-content>";
    /***/
  },

  /***/
  "./src/app/pages/student-login/student-login-routing.module.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/pages/student-login/student-login-routing.module.ts ***!
    \*********************************************************************/

  /*! exports provided: StudentLoginPageRoutingModule */

  /***/
  function srcAppPagesStudentLoginStudentLoginRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StudentLoginPageRoutingModule", function () {
      return StudentLoginPageRoutingModule;
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


    var _student_login_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./student-login.page */
    "./src/app/pages/student-login/student-login.page.ts");

    var routes = [{
      path: '',
      component: _student_login_page__WEBPACK_IMPORTED_MODULE_3__["StudentLoginPage"]
    }];

    var StudentLoginPageRoutingModule = function StudentLoginPageRoutingModule() {
      _classCallCheck(this, StudentLoginPageRoutingModule);
    };

    StudentLoginPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], StudentLoginPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/student-login/student-login.module.ts":
  /*!*************************************************************!*\
    !*** ./src/app/pages/student-login/student-login.module.ts ***!
    \*************************************************************/

  /*! exports provided: StudentLoginPageModule */

  /***/
  function srcAppPagesStudentLoginStudentLoginModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StudentLoginPageModule", function () {
      return StudentLoginPageModule;
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


    var _student_login_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./student-login-routing.module */
    "./src/app/pages/student-login/student-login-routing.module.ts");
    /* harmony import */


    var _student_login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./student-login.page */
    "./src/app/pages/student-login/student-login.page.ts"); // Required for Login Form to work


    var StudentLoginPageModule = function StudentLoginPageModule() {
      _classCallCheck(this, StudentLoginPageModule);
    };

    StudentLoginPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _student_login_routing_module__WEBPACK_IMPORTED_MODULE_5__["StudentLoginPageRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]],
      declarations: [_student_login_page__WEBPACK_IMPORTED_MODULE_6__["StudentLoginPage"]]
    })], StudentLoginPageModule);
    /***/
  },

  /***/
  "./src/app/pages/student-login/student-login.page.scss":
  /*!*************************************************************!*\
    !*** ./src/app/pages/student-login/student-login.page.scss ***!
    \*************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesStudentLoginStudentLoginPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3N0dWRlbnQtbG9naW4vc3R1ZGVudC1sb2dpbi5wYWdlLnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/pages/student-login/student-login.page.ts":
  /*!***********************************************************!*\
    !*** ./src/app/pages/student-login/student-login.page.ts ***!
    \***********************************************************/

  /*! exports provided: StudentLoginPage */

  /***/
  function srcAppPagesStudentLoginStudentLoginPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StudentLoginPage", function () {
      return StudentLoginPage;
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


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _services_student_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../services/student.service */
    "./src/app/services/student.service.ts");

    var StudentLoginPage = /*#__PURE__*/function () {
      function StudentLoginPage(fb, router, alertController, loadingController, loginService) {
        _classCallCheck(this, StudentLoginPage);

        this.fb = fb;
        this.router = router;
        this.alertController = alertController;
        this.loadingController = loadingController;
        this.loginService = loginService;
      }

      _createClass(StudentLoginPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.credentialForm = this.fb.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6)]]
          });
        }
      }, {
        key: "signUp",
        value: function signUp() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var _this = this;

            var loading;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return this.loadingController.create();

                  case 2:
                    loading = _context2.sent;
                    _context2.next = 5;
                    return loading.present();

                  case 5:
                    this.loginService.signUp(this.credentialForm.value).then(function (user) {
                      loading.dismiss();

                      _this.router.navigateByUrl('/', {
                        replaceUrl: true
                      });
                    }, function (err) {
                      return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                        var alert;
                        return regeneratorRuntime.wrap(function _callee$(_context) {
                          while (1) {
                            switch (_context.prev = _context.next) {
                              case 0:
                                loading.dismiss();
                                _context.next = 3;
                                return this.alertController.create({
                                  header: 'Sign up failed',
                                  message: err.message,
                                  buttons: ['OK']
                                });

                              case 3:
                                alert = _context.sent;
                                _context.next = 6;
                                return alert.present();

                              case 6:
                              case "end":
                                return _context.stop();
                            }
                          }
                        }, _callee, this);
                      }));
                    });

                  case 6:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "signIn",
        value: function signIn() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
            var _this2 = this;

            var loading;
            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    _context4.next = 2;
                    return this.loadingController.create();

                  case 2:
                    loading = _context4.sent;
                    _context4.next = 5;
                    return loading.present();

                  case 5:
                    this.loginService.signIn(this.credentialForm.value).then(function (res) {
                      loading.dismiss();

                      _this2.router.navigateByUrl('/', {
                        replaceUrl: true
                      });
                    }, function (err) {
                      return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this2, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
                        var alert;
                        return regeneratorRuntime.wrap(function _callee3$(_context3) {
                          while (1) {
                            switch (_context3.prev = _context3.next) {
                              case 0:
                                loading.dismiss();
                                _context3.next = 3;
                                return this.alertController.create({
                                  header: ':(',
                                  message: err.message,
                                  buttons: ['OK']
                                });

                              case 3:
                                alert = _context3.sent;
                                _context3.next = 6;
                                return alert.present();

                              case 6:
                              case "end":
                                return _context3.stop();
                            }
                          }
                        }, _callee3, this);
                      }));
                    });

                  case 6:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4, this);
          }));
        } // Easy access for form fields

      }, {
        key: "email",
        get: function get() {
          return this.credentialForm.get('email');
        }
      }, {
        key: "password",
        get: function get() {
          return this.credentialForm.get('password');
        }
      }]);

      return StudentLoginPage;
    }();

    StudentLoginPage.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"]
      }, {
        type: _services_student_service__WEBPACK_IMPORTED_MODULE_5__["StudentService"]
      }];
    };

    StudentLoginPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-student-login',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./student-login.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/student-login/student-login.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./student-login.page.scss */
      "./src/app/pages/student-login/student-login.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"], _services_student_service__WEBPACK_IMPORTED_MODULE_5__["StudentService"]])], StudentLoginPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-student-login-student-login-module-es5.js.map