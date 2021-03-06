function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-student-list-student-list-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/student-list/student-list.page.html":
  /*!*************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/student-list/student-list.page.html ***!
    \*************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesStudentListStudentListPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-title>My Students</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"signOut()\">\n        <ion-icon slot=\"icon-only\" name=\"log-out\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n <!-- Create a Floating Action Button for creating students using a router link to /student page -->\n<ion-content>\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\n    <ion-fab-button routerLink=\"/student\">\n      <ion-icon name=\"add\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n <!-- Lists students and create a routerLink to student/:studentID, passing the current student object along \n to the student details page where it will be needed to read the details from the collection-->\n  <ion-list>\n    <ion-item button *ngFor=\"let student of (students | async)\" [routerLink]=\"['/student', student.studentID]\">\n      {{ student.firstName }} {{ student.lastName }}\n    </ion-item>\n  </ion-list>\n  <ion-button (click)=\"signIn()\" expand=\"full\" color=\"secondary\">Sign in</ion-button>\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/pages/student-list/student-list-routing.module.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/pages/student-list/student-list-routing.module.ts ***!
    \*******************************************************************/

  /*! exports provided: StudentListPageRoutingModule */

  /***/
  function srcAppPagesStudentListStudentListRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StudentListPageRoutingModule", function () {
      return StudentListPageRoutingModule;
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


    var _student_list_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./student-list.page */
    "./src/app/pages/student-list/student-list.page.ts");

    var routes = [{
      path: '',
      component: _student_list_page__WEBPACK_IMPORTED_MODULE_3__["StudentListPage"]
    }];

    var StudentListPageRoutingModule = function StudentListPageRoutingModule() {
      _classCallCheck(this, StudentListPageRoutingModule);
    };

    StudentListPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], StudentListPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/student-list/student-list.module.ts":
  /*!***********************************************************!*\
    !*** ./src/app/pages/student-list/student-list.module.ts ***!
    \***********************************************************/

  /*! exports provided: StudentListPageModule */

  /***/
  function srcAppPagesStudentListStudentListModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StudentListPageModule", function () {
      return StudentListPageModule;
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


    var _student_list_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./student-list-routing.module */
    "./src/app/pages/student-list/student-list-routing.module.ts");
    /* harmony import */


    var _student_list_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./student-list.page */
    "./src/app/pages/student-list/student-list.page.ts");

    var StudentListPageModule = function StudentListPageModule() {
      _classCallCheck(this, StudentListPageModule);
    };

    StudentListPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _student_list_routing_module__WEBPACK_IMPORTED_MODULE_5__["StudentListPageRoutingModule"]],
      declarations: [_student_list_page__WEBPACK_IMPORTED_MODULE_6__["StudentListPage"]]
    })], StudentListPageModule);
    /***/
  },

  /***/
  "./src/app/pages/student-list/student-list.page.scss":
  /*!***********************************************************!*\
    !*** ./src/app/pages/student-list/student-list.page.scss ***!
    \***********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesStudentListStudentListPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3N0dWRlbnQtbGlzdC9zdHVkZW50LWxpc3QucGFnZS5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/pages/student-list/student-list.page.ts":
  /*!*********************************************************!*\
    !*** ./src/app/pages/student-list/student-list.page.ts ***!
    \*********************************************************/

  /*! exports provided: StudentListPage */

  /***/
  function srcAppPagesStudentListStudentListPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StudentListPage", function () {
      return StudentListPage;
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


    var _services_student_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../services/student.service */
    "./src/app/services/student.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var StudentListPage = /*#__PURE__*/function () {
      // Inject the StudentService into the Constructor
      function StudentListPage(studentService, router) {
        _classCallCheck(this, StudentListPage);

        this.studentService = studentService;
        this.router = router;
      }

      _createClass(StudentListPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          // Call the getStudents() function in the StudentService and
          // assign the Observable to the students property
          this.students = this.studentService.getStudents();
        } // Call studentservice signout function

      }, {
        key: "signOut",
        value: function signOut() {
          this.studentService.signOut();
        }
      }, {
        key: "gotoOthers",
        value: function gotoOthers() {
          this.router.navigateByUrl('/others');
        }
      }]);

      return StudentListPage;
    }();

    StudentListPage.ctorParameters = function () {
      return [{
        type: _services_student_service__WEBPACK_IMPORTED_MODULE_2__["StudentService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }];
    };

    StudentListPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-student-list',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./student-list.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/student-list/student-list.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./student-list.page.scss */
      "./src/app/pages/student-list/student-list.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_student_service__WEBPACK_IMPORTED_MODULE_2__["StudentService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])], StudentListPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-student-list-student-list-module-es5.js.map