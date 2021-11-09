function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"], {
  /***/
  "./node_modules/@ionic/core/dist/esm/framework-delegate-d1eb6504.js":
  /*!**************************************************************************!*\
    !*** ./node_modules/@ionic/core/dist/esm/framework-delegate-d1eb6504.js ***!
    \**************************************************************************/

  /*! exports provided: a, d */

  /***/
  function node_modulesIonicCoreDistEsmFrameworkDelegateD1eb6504Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "a", function () {
      return attachComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "d", function () {
      return detachComponent;
    });

    var attachComponent = /*#__PURE__*/function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(delegate, container, component, cssClasses, componentProps) {
        var el;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!delegate) {
                  _context.next = 2;
                  break;
                }

                return _context.abrupt("return", delegate.attachViewToDom(container, component, componentProps, cssClasses));

              case 2:
                if (!(typeof component !== 'string' && !(component instanceof HTMLElement))) {
                  _context.next = 4;
                  break;
                }

                throw new Error('framework delegate is missing');

              case 4:
                el = typeof component === 'string' ? container.ownerDocument && container.ownerDocument.createElement(component) : component;

                if (cssClasses) {
                  cssClasses.forEach(function (c) {
                    return el.classList.add(c);
                  });
                }

                if (componentProps) {
                  Object.assign(el, componentProps);
                }

                container.appendChild(el);

                if (!el.componentOnReady) {
                  _context.next = 11;
                  break;
                }

                _context.next = 11;
                return el.componentOnReady();

              case 11:
                return _context.abrupt("return", el);

              case 12:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function attachComponent(_x, _x2, _x3, _x4, _x5) {
        return _ref.apply(this, arguments);
      };
    }();

    var detachComponent = function detachComponent(delegate, element) {
      if (element) {
        if (delegate) {
          var container = element.parentElement;
          return delegate.removeViewFromDom(container, element);
        }

        element.remove();
      }

      return Promise.resolve();
    };
    /***/

  },

  /***/
  "./node_modules/@ionic/core/dist/esm/haptic-ccbda579.js":
  /*!**************************************************************!*\
    !*** ./node_modules/@ionic/core/dist/esm/haptic-ccbda579.js ***!
    \**************************************************************/

  /*! exports provided: a, b, c, h */

  /***/
  function node_modulesIonicCoreDistEsmHapticCcbda579Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "a", function () {
      return hapticSelectionStart;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "b", function () {
      return hapticSelectionChanged;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "c", function () {
      return hapticSelectionEnd;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "h", function () {
      return hapticSelection;
    });
    /**
     * Check to see if the Haptic Plugin is available
     * @return Returns `true` or false if the plugin is available
     */

    /**
     * Trigger a selection changed haptic event. Good for one-time events
     * (not for gestures)
     */


    var hapticSelection = function hapticSelection() {
      var engine = window.TapticEngine;

      if (engine) {
        engine.selection();
      }
    };
    /**
     * Tell the haptic engine that a gesture for a selection change is starting.
     */


    var hapticSelectionStart = function hapticSelectionStart() {
      var engine = window.TapticEngine;

      if (engine) {
        engine.gestureSelectionStart();
      }
    };
    /**
     * Tell the haptic engine that a selection changed during a gesture.
     */


    var hapticSelectionChanged = function hapticSelectionChanged() {
      var engine = window.TapticEngine;

      if (engine) {
        engine.gestureSelectionChanged();
      }
    };
    /**
     * Tell the haptic engine we are done with a gesture. This needs to be
     * called lest resources are not properly recycled.
     */


    var hapticSelectionEnd = function hapticSelectionEnd() {
      var engine = window.TapticEngine;

      if (engine) {
        engine.gestureSelectionEnd();
      }
    };
    /***/

  },

  /***/
  "./node_modules/@ionic/core/dist/esm/spinner-configs-c78e170e.js":
  /*!***********************************************************************!*\
    !*** ./node_modules/@ionic/core/dist/esm/spinner-configs-c78e170e.js ***!
    \***********************************************************************/

  /*! exports provided: S */

  /***/
  function node_modulesIonicCoreDistEsmSpinnerConfigsC78e170eJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "S", function () {
      return SPINNERS;
    });

    var spinners = {
      'bubbles': {
        dur: 1000,
        circles: 9,
        fn: function fn(dur, index, total) {
          var animationDelay = "".concat(dur * index / total - dur, "ms");
          var angle = 2 * Math.PI * index / total;
          return {
            r: 5,
            style: {
              'top': "".concat(9 * Math.sin(angle), "px"),
              'left': "".concat(9 * Math.cos(angle), "px"),
              'animation-delay': animationDelay
            }
          };
        }
      },
      'circles': {
        dur: 1000,
        circles: 8,
        fn: function fn(dur, index, total) {
          var step = index / total;
          var animationDelay = "".concat(dur * step - dur, "ms");
          var angle = 2 * Math.PI * step;
          return {
            r: 5,
            style: {
              'top': "".concat(9 * Math.sin(angle), "px"),
              'left': "".concat(9 * Math.cos(angle), "px"),
              'animation-delay': animationDelay
            }
          };
        }
      },
      'circular': {
        dur: 1400,
        elmDuration: true,
        circles: 1,
        fn: function fn() {
          return {
            r: 20,
            cx: 48,
            cy: 48,
            fill: 'none',
            viewBox: '24 24 48 48',
            transform: 'translate(0,0)',
            style: {}
          };
        }
      },
      'crescent': {
        dur: 750,
        circles: 1,
        fn: function fn() {
          return {
            r: 26,
            style: {}
          };
        }
      },
      'dots': {
        dur: 750,
        circles: 3,
        fn: function fn(_, index) {
          var animationDelay = -(110 * index) + 'ms';
          return {
            r: 6,
            style: {
              'left': "".concat(9 - 9 * index, "px"),
              'animation-delay': animationDelay
            }
          };
        }
      },
      'lines': {
        dur: 1000,
        lines: 12,
        fn: function fn(dur, index, total) {
          var transform = "rotate(".concat(30 * index + (index < 6 ? 180 : -180), "deg)");
          var animationDelay = "".concat(dur * index / total - dur, "ms");
          return {
            y1: 17,
            y2: 29,
            style: {
              'transform': transform,
              'animation-delay': animationDelay
            }
          };
        }
      },
      'lines-small': {
        dur: 1000,
        lines: 12,
        fn: function fn(dur, index, total) {
          var transform = "rotate(".concat(30 * index + (index < 6 ? 180 : -180), "deg)");
          var animationDelay = "".concat(dur * index / total - dur, "ms");
          return {
            y1: 12,
            y2: 20,
            style: {
              'transform': transform,
              'animation-delay': animationDelay
            }
          };
        }
      }
    };
    var SPINNERS = spinners;
    /***/
  },

  /***/
  "./node_modules/@ionic/core/dist/esm/theme-c2dc54d9.js":
  /*!*************************************************************!*\
    !*** ./node_modules/@ionic/core/dist/esm/theme-c2dc54d9.js ***!
    \*************************************************************/

  /*! exports provided: c, g, h, o */

  /***/
  function node_modulesIonicCoreDistEsmThemeC2dc54d9Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "c", function () {
      return createColorClasses;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "g", function () {
      return getClassMap;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "h", function () {
      return hostContext;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "o", function () {
      return openURL;
    });

    var hostContext = function hostContext(selector, el) {
      return el.closest(selector) !== null;
    };
    /**
     * Create the mode and color classes for the component based on the classes passed in
     */


    var createColorClasses = function createColorClasses(color) {
      return typeof color === 'string' && color.length > 0 ? _defineProperty({
        'ion-color': true
      }, "ion-color-".concat(color), true) : undefined;
    };

    var getClassList = function getClassList(classes) {
      if (classes !== undefined) {
        var array = Array.isArray(classes) ? classes : classes.split(' ');
        return array.filter(function (c) {
          return c != null;
        }).map(function (c) {
          return c.trim();
        }).filter(function (c) {
          return c !== '';
        });
      }

      return [];
    };

    var getClassMap = function getClassMap(classes) {
      var map = {};
      getClassList(classes).forEach(function (c) {
        return map[c] = true;
      });
      return map;
    };

    var SCHEME = /^[a-z][a-z0-9+\-.]*:/;

    var openURL = /*#__PURE__*/function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(url, ev, direction) {
        var router;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (!(url != null && url[0] !== '#' && !SCHEME.test(url))) {
                  _context2.next = 5;
                  break;
                }

                router = document.querySelector('ion-router');

                if (!router) {
                  _context2.next = 5;
                  break;
                }

                if (ev != null) {
                  ev.preventDefault();
                }

                return _context2.abrupt("return", router.push(url, direction));

              case 5:
                return _context2.abrupt("return", false);

              case 6:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      return function openURL(_x6, _x7, _x8) {
        return _ref3.apply(this, arguments);
      };
    }();
    /***/

  },

  /***/
  "./src/app/services/student.service.ts":
  /*!*********************************************!*\
    !*** ./src/app/services/student.service.ts ***!
    \*********************************************/

  /*! exports provided: StudentService */

  /***/
  function srcAppServicesStudentServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StudentService", function () {
      return StudentService;
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


    var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/fire/firestore */
    "./node_modules/@angular/fire/fesm2015/angular-fire-firestore.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var firebase_app__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! firebase/app */
    "./node_modules/firebase/app/dist/index.cjs.js");
    /* harmony import */


    var firebase_app__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_4__);
    /* harmony import */


    var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/fire/storage */
    "./node_modules/@angular/fire/fesm2015/angular-fire-storage.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/fire/auth */
    "./node_modules/@angular/fire/fesm2015/angular-fire-auth.js"); //import { AngularFireAuthGuard} from '@angular/fire/auth-guard';


    var StudentService = /*#__PURE__*/function () {
      function StudentService(storage, afs, afAuth) {
        var _this = this;

        _classCallCheck(this, StudentService);

        this.storage = storage;
        this.afs = afs;
        this.afAuth = afAuth; // Current Logged in User

        this.currentUser = null; // Get a refence to the students collection

        this.studentCollection = this.afs.collection('students-3'); // Could do this also to filter data based on the CreatedBy ID
        //this.studentCollection = this.afs.collection<Student>('students-3', ref => ref.where("createdBy", "==", `${this.currentUser.uid}`));
        // Get a refernce to a snapshot of the student collection data, i.e an observable that
        // provides the actual array of students when subscribed to (emits the values!)

        this.students = this.studentCollection.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (actions) {
          return actions.map(function (a) {
            var data = a.payload.doc.data();
            var studentID = a.payload.doc.id; // Use spread operator (...) to include studentID
            // in the returned data object

            return Object.assign({
              studentID: studentID
            }, data);
          });
        })); // Check Login Status

        this.afAuth.onAuthStateChanged(function (user) {
          console.log("user changed:", user);
          _this.currentUser = user;
        });
      } // Get all students from service


      _createClass(StudentService, [{
        key: "getStudents",
        value: function getStudents() {
          return this.students;
        } // This studentID refers to the id in Firebase, needed to update or delete

      }, {
        key: "getStudent",
        value: function getStudent(studentID) {
          return this.studentCollection.doc(studentID).valueChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (student) {
            student.studentID = studentID;
            return student;
          }));
        } // addStudent(student: Student): Promise<DocumentReference> {
        //   return this.studentCollection.add(student);
        // }

      }, {
        key: "addStudent",
        value: function addStudent(student) {
          var _this2 = this;

          // Name for image captured. This uses template literals to embed the date 
          // and use the text and append it to Dummy. Ensure to use ` instead of '
          // to ensure it works. We will also add the imageFilename for deletion purposes
          var imageFilename = "".concat(new Date().getTime(), "-ProfilePic.png"); //let storageRef: AngularFireStorageReference = this.storage.ref(`/students/${imageFilename}`);

          var storageRef = firebase_app__WEBPACK_IMPORTED_MODULE_4__["storage"]().ref("/students/".concat(imageFilename));
          console.log("StorageRef" + storageRef);
          console.log("ImageFileName" + imageFilename); // Upload the raw base64 encoded string to storage using putString

          var storageObs = Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["from"])(storageRef.putString(student.imageURL, "base64", {
            contentType: 'image/png'
          })); // Generate a URL for storing in the FireStore. This is used to display the image going forward
          // This code creates an Observable which is then converted into a promise in order to extract
          // the URL and then store it in the Firsestore imageURL field.

          return storageObs.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (obj) {
            console.log("Got File Download URL Promise");
            return obj.ref.getDownloadURL();
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (url) {
            console.log("Got File Download URL"); // Update student object with url, timetamp, imagefilename (for deletion) and creator (for filtering from DB, not done yet)

            student.imageURL = url;
            student.createdAt = firebase_app__WEBPACK_IMPORTED_MODULE_4__["firestore"].FieldValue.serverTimestamp();
            student.imageFilename = imageFilename;
            student.createdBy = _this2.currentUser.uid;
            return _this2.studentCollection.add(student);
          }));
        } // updateStudent(student: Student): Promise<void> {
        //   return this.studentCollection.doc(student.studentID).update({ firstName: student.firstName, lastName: student.lastName, moduleNo1: student.moduleNo1, moduleNo2: student.moduleNo2, courseID: student.courseID });
        // }

      }, {
        key: "updateStudent",
        value: function updateStudent(student) {
          var _this3 = this;

          // Name for New updated image captured. This uses template literals to embed the date 
          // and use the text and append it to Dummy. Ensure to use ` instead of '
          // to ensure it works
          var imageFilename = "".concat(new Date().getTime(), "-UpdatedProfilePic.png"); // Get a storage reference for the new file that will be uploaded in place of
          // the existing one. We will replace the old one and delete it

          var storageRef = firebase_app__WEBPACK_IMPORTED_MODULE_4__["storage"]().ref("/students/".concat(imageFilename)); // Delete old file from File Storage

          this.deleteFile(student.imageFilename); // Generate a URL for storing in the FireStore. This is used to display the image going forward
          // This code creates an Observable which is then converted into a promise in order to extract
          // the URL and then store it in the Firsestore imageURL field. 

          var storageObs = Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["from"])(storageRef.putString(student.imageURL, "base64", {
            contentType: 'image/png'
          }));
          return storageObs.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (obj) {
            console.log("Got File Download URL Promise");
            return obj.ref.getDownloadURL();
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (url) {
            console.log("Got File Download URL");
            student.imageURL = url;
            student.createdAt = firebase_app__WEBPACK_IMPORTED_MODULE_4__["firestore"].FieldValue.serverTimestamp();
            student.imageFilename = imageFilename;
            return _this3.studentCollection.doc(student.studentID).update(student);
          }));
        }
      }, {
        key: "deleteStudent",
        value: function deleteStudent(student) {
          // Delete the file in Firebase Storage First
          this.deleteFile(student.imageFilename); // Delete record from Firebase Firestore using studentID

          return this.studentCollection.doc(student.studentID)["delete"]();
        } // Method for deleting a file from Firebase File Storage using
        // the fileName from the FireStore record

      }, {
        key: "deleteFile",
        value: function deleteFile(fileName) {
          // Get a reference to file stored in the Firebase Storage bucket 
          //let storageRef = firebase.storage().ref().child(`students/${fileName}`);
          var storageRef = firebase_app__WEBPACK_IMPORTED_MODULE_4__["storage"]().ref("/students/".concat(fileName)); // Delete the file

          storageRef["delete"]().then(function () {
            // File deleted successfully
            console.log("File deleted successfully");
          })["catch"](function (error) {
            // Uh-oh, an error occurred!
            console.log("Error: File NOT deleted");
          });
        } // Sign-in method

      }, {
        key: "signIn",
        value: function signIn(_ref4) {
          var email = _ref4.email,
              password = _ref4.password;
          return this.afAuth.signInWithEmailAndPassword(email, password);
        } // Sign-out method

      }, {
        key: "signOut",
        value: function signOut() {
          return this.afAuth.signOut();
        } // Signup for a new accounnt using Angular Fire Auth

      }, {
        key: "signUp",
        value: function signUp(_ref5) {
          var email = _ref5.email,
              password = _ref5.password;
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
            var credential, uid;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    _context3.next = 2;
                    return this.afAuth.createUserWithEmailAndPassword(email, password);

                  case 2:
                    credential = _context3.sent;
                    // Collect user ID for storage
                    uid = credential.user.uid; // Store is Firsetore

                    return _context3.abrupt("return", this.afs.doc("users/".concat(uid)).set({
                      uid: uid,
                      email: credential.user.email
                    }));

                  case 5:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        }
      }]);

      return StudentService;
    }();

    StudentService.ctorParameters = function () {
      return [{
        type: _angular_fire_storage__WEBPACK_IMPORTED_MODULE_5__["AngularFireStorage"]
      }, {
        type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]
      }, {
        type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_7__["AngularFireAuth"]
      }];
    };

    StudentService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_storage__WEBPACK_IMPORTED_MODULE_5__["AngularFireStorage"], _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"], _angular_fire_auth__WEBPACK_IMPORTED_MODULE_7__["AngularFireAuth"]])], StudentService);
    /***/
  }
}]);
//# sourceMappingURL=common-es5.js.map