(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./node_modules/@ionic/core/dist/esm/framework-delegate-d1eb6504.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/framework-delegate-d1eb6504.js ***!
  \**************************************************************************/
/*! exports provided: a, d */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return attachComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return detachComponent; });
const attachComponent = async (delegate, container, component, cssClasses, componentProps) => {
    if (delegate) {
        return delegate.attachViewToDom(container, component, componentProps, cssClasses);
    }
    if (typeof component !== 'string' && !(component instanceof HTMLElement)) {
        throw new Error('framework delegate is missing');
    }
    const el = (typeof component === 'string')
        ? container.ownerDocument && container.ownerDocument.createElement(component)
        : component;
    if (cssClasses) {
        cssClasses.forEach(c => el.classList.add(c));
    }
    if (componentProps) {
        Object.assign(el, componentProps);
    }
    container.appendChild(el);
    if (el.componentOnReady) {
        await el.componentOnReady();
    }
    return el;
};
const detachComponent = (delegate, element) => {
    if (element) {
        if (delegate) {
            const container = element.parentElement;
            return delegate.removeViewFromDom(container, element);
        }
        element.remove();
    }
    return Promise.resolve();
};




/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm/haptic-ccbda579.js":
/*!**************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/haptic-ccbda579.js ***!
  \**************************************************************/
/*! exports provided: a, b, c, h */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return hapticSelectionStart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return hapticSelectionChanged; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return hapticSelectionEnd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return hapticSelection; });
/**
 * Check to see if the Haptic Plugin is available
 * @return Returns `true` or false if the plugin is available
 */
/**
 * Trigger a selection changed haptic event. Good for one-time events
 * (not for gestures)
 */
const hapticSelection = () => {
    const engine = window.TapticEngine;
    if (engine) {
        engine.selection();
    }
};
/**
 * Tell the haptic engine that a gesture for a selection change is starting.
 */
const hapticSelectionStart = () => {
    const engine = window.TapticEngine;
    if (engine) {
        engine.gestureSelectionStart();
    }
};
/**
 * Tell the haptic engine that a selection changed during a gesture.
 */
const hapticSelectionChanged = () => {
    const engine = window.TapticEngine;
    if (engine) {
        engine.gestureSelectionChanged();
    }
};
/**
 * Tell the haptic engine we are done with a gesture. This needs to be
 * called lest resources are not properly recycled.
 */
const hapticSelectionEnd = () => {
    const engine = window.TapticEngine;
    if (engine) {
        engine.gestureSelectionEnd();
    }
};




/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm/spinner-configs-c78e170e.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/spinner-configs-c78e170e.js ***!
  \***********************************************************************/
/*! exports provided: S */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "S", function() { return SPINNERS; });
const spinners = {
    'bubbles': {
        dur: 1000,
        circles: 9,
        fn: (dur, index, total) => {
            const animationDelay = `${(dur * index / total) - dur}ms`;
            const angle = 2 * Math.PI * index / total;
            return {
                r: 5,
                style: {
                    'top': `${9 * Math.sin(angle)}px`,
                    'left': `${9 * Math.cos(angle)}px`,
                    'animation-delay': animationDelay,
                }
            };
        }
    },
    'circles': {
        dur: 1000,
        circles: 8,
        fn: (dur, index, total) => {
            const step = index / total;
            const animationDelay = `${(dur * step) - dur}ms`;
            const angle = 2 * Math.PI * step;
            return {
                r: 5,
                style: {
                    'top': `${9 * Math.sin(angle)}px`,
                    'left': `${9 * Math.cos(angle)}px`,
                    'animation-delay': animationDelay,
                }
            };
        }
    },
    'circular': {
        dur: 1400,
        elmDuration: true,
        circles: 1,
        fn: () => {
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
        fn: () => {
            return {
                r: 26,
                style: {}
            };
        }
    },
    'dots': {
        dur: 750,
        circles: 3,
        fn: (_, index) => {
            const animationDelay = -(110 * index) + 'ms';
            return {
                r: 6,
                style: {
                    'left': `${9 - (9 * index)}px`,
                    'animation-delay': animationDelay,
                }
            };
        }
    },
    'lines': {
        dur: 1000,
        lines: 12,
        fn: (dur, index, total) => {
            const transform = `rotate(${30 * index + (index < 6 ? 180 : -180)}deg)`;
            const animationDelay = `${(dur * index / total) - dur}ms`;
            return {
                y1: 17,
                y2: 29,
                style: {
                    'transform': transform,
                    'animation-delay': animationDelay,
                }
            };
        }
    },
    'lines-small': {
        dur: 1000,
        lines: 12,
        fn: (dur, index, total) => {
            const transform = `rotate(${30 * index + (index < 6 ? 180 : -180)}deg)`;
            const animationDelay = `${(dur * index / total) - dur}ms`;
            return {
                y1: 12,
                y2: 20,
                style: {
                    'transform': transform,
                    'animation-delay': animationDelay,
                }
            };
        }
    }
};
const SPINNERS = spinners;




/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm/theme-c2dc54d9.js":
/*!*************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/theme-c2dc54d9.js ***!
  \*************************************************************/
/*! exports provided: c, g, h, o */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return createColorClasses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return getClassMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return hostContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return openURL; });
const hostContext = (selector, el) => {
    return el.closest(selector) !== null;
};
/**
 * Create the mode and color classes for the component based on the classes passed in
 */
const createColorClasses = (color) => {
    return (typeof color === 'string' && color.length > 0) ? {
        'ion-color': true,
        [`ion-color-${color}`]: true
    } : undefined;
};
const getClassList = (classes) => {
    if (classes !== undefined) {
        const array = Array.isArray(classes) ? classes : classes.split(' ');
        return array
            .filter(c => c != null)
            .map(c => c.trim())
            .filter(c => c !== '');
    }
    return [];
};
const getClassMap = (classes) => {
    const map = {};
    getClassList(classes).forEach(c => map[c] = true);
    return map;
};
const SCHEME = /^[a-z][a-z0-9+\-.]*:/;
const openURL = async (url, ev, direction) => {
    if (url != null && url[0] !== '#' && !SCHEME.test(url)) {
        const router = document.querySelector('ion-router');
        if (router) {
            if (ev != null) {
                ev.preventDefault();
            }
            return router.push(url, direction);
        }
    }
    return false;
};




/***/ }),

/***/ "./src/app/services/student.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/student.service.ts ***!
  \*********************************************/
/*! exports provided: StudentService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentService", function() { return StudentService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/fesm2015/angular-fire-firestore.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/storage */ "./node_modules/@angular/fire/fesm2015/angular-fire-storage.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/fesm2015/angular-fire-auth.js");








//import { AngularFireAuthGuard} from '@angular/fire/auth-guard';

let StudentService = class StudentService {
    constructor(storage, afs, afAuth) {
        this.storage = storage;
        this.afs = afs;
        this.afAuth = afAuth;
        // Current Logged in User
        this.currentUser = null;
        // Get a refence to the students collection
        this.studentCollection = this.afs.collection('students-3');
        // Could do this also to filter data based on the CreatedBy ID
        //this.studentCollection = this.afs.collection<Student>('students-3', ref => ref.where("createdBy", "==", `${this.currentUser.uid}`));
        // Get a refernce to a snapshot of the student collection data, i.e an observable that
        // provides the actual array of students when subscribed to (emits the values!)
        this.students = this.studentCollection.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(actions => {
            return actions.map(a => {
                const data = a.payload.doc.data();
                const studentID = a.payload.doc.id;
                // Use spread operator (...) to include studentID
                // in the returned data object
                return Object.assign({ studentID }, data);
            });
        }));
        // Check Login Status
        this.afAuth.onAuthStateChanged(user => {
            console.log("user changed:", user);
            this.currentUser = user;
        });
    }
    // Get all students from service
    getStudents() {
        return this.students;
    }
    // This studentID refers to the id in Firebase, needed to update or delete
    getStudent(studentID) {
        return this.studentCollection.doc(studentID).valueChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(student => {
            student.studentID = studentID;
            return student;
        }));
    }
    // addStudent(student: Student): Promise<DocumentReference> {
    //   return this.studentCollection.add(student);
    // }
    addStudent(student) {
        // Name for image captured. This uses template literals to embed the date 
        // and use the text and append it to Dummy. Ensure to use ` instead of '
        // to ensure it works. We will also add the imageFilename for deletion purposes
        let imageFilename = `${new Date().getTime()}-ProfilePic.png`;
        //let storageRef: AngularFireStorageReference = this.storage.ref(`/students/${imageFilename}`);
        let storageRef = firebase_app__WEBPACK_IMPORTED_MODULE_4__["storage"]().ref(`/students/${imageFilename}`);
        console.log("StorageRef" + storageRef);
        console.log("ImageFileName" + imageFilename);
        // Upload the raw base64 encoded string to storage using putString
        const storageObs = Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["from"])(storageRef.putString(student.imageURL, "base64", { contentType: 'image/png' }));
        // Generate a URL for storing in the FireStore. This is used to display the image going forward
        // This code creates an Observable which is then converted into a promise in order to extract
        // the URL and then store it in the Firsestore imageURL field.
        return storageObs.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(obj => {
            console.log("Got File Download URL Promise");
            return obj.ref.getDownloadURL();
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(url => {
            console.log("Got File Download URL");
            // Update student object with url, timetamp, imagefilename (for deletion) and creator (for filtering from DB, not done yet)
            student.imageURL = url;
            student.createdAt = firebase_app__WEBPACK_IMPORTED_MODULE_4__["firestore"].FieldValue.serverTimestamp();
            student.imageFilename = imageFilename;
            student.createdBy = this.currentUser.uid;
            return this.studentCollection.add(student);
        }));
    }
    // updateStudent(student: Student): Promise<void> {
    //   return this.studentCollection.doc(student.studentID).update({ firstName: student.firstName, lastName: student.lastName, moduleNo1: student.moduleNo1, moduleNo2: student.moduleNo2, courseID: student.courseID });
    // }
    updateStudent(student) {
        // Name for New updated image captured. This uses template literals to embed the date 
        // and use the text and append it to Dummy. Ensure to use ` instead of '
        // to ensure it works
        let imageFilename = `${new Date().getTime()}-UpdatedProfilePic.png`;
        // Get a storage reference for the new file that will be uploaded in place of
        // the existing one. We will replace the old one and delete it
        let storageRef = firebase_app__WEBPACK_IMPORTED_MODULE_4__["storage"]().ref(`/students/${imageFilename}`);
        // Delete old file from File Storage
        this.deleteFile(student.imageFilename);
        // Generate a URL for storing in the FireStore. This is used to display the image going forward
        // This code creates an Observable which is then converted into a promise in order to extract
        // the URL and then store it in the Firsestore imageURL field. 
        const storageObs = Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["from"])(storageRef.putString(student.imageURL, "base64", { contentType: 'image/png' }));
        return storageObs.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(obj => {
            console.log("Got File Download URL Promise");
            return obj.ref.getDownloadURL();
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(url => {
            console.log("Got File Download URL");
            student.imageURL = url;
            student.createdAt = firebase_app__WEBPACK_IMPORTED_MODULE_4__["firestore"].FieldValue.serverTimestamp();
            student.imageFilename = imageFilename;
            return this.studentCollection.doc(student.studentID).update(student);
        }));
    }
    deleteStudent(student) {
        // Delete the file in Firebase Storage First
        this.deleteFile(student.imageFilename);
        // Delete record from Firebase Firestore using studentID
        return this.studentCollection.doc(student.studentID).delete();
    }
    // Method for deleting a file from Firebase File Storage using
    // the fileName from the FireStore record
    deleteFile(fileName) {
        // Get a reference to file stored in the Firebase Storage bucket 
        //let storageRef = firebase.storage().ref().child(`students/${fileName}`);
        let storageRef = firebase_app__WEBPACK_IMPORTED_MODULE_4__["storage"]().ref(`/students/${fileName}`);
        // Delete the file
        storageRef.delete().then(() => {
            // File deleted successfully
            console.log("File deleted successfully");
        }).catch((error) => {
            // Uh-oh, an error occurred!
            console.log("Error: File NOT deleted");
        });
    }
    // Sign-in method
    signIn({ email, password }) {
        return this.afAuth.signInWithEmailAndPassword(email, password);
    }
    // Sign-out method
    signOut() {
        return this.afAuth.signOut();
    }
    // Signup for a new accounnt using Angular Fire Auth
    signUp({ email, password }) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            // Create a user using username and passsord
            const credential = yield this.afAuth.createUserWithEmailAndPassword(email, password);
            // Collect user ID for storage
            const uid = credential.user.uid;
            // Store is Firsetore
            return this.afs.doc(`users/${uid}`).set({ uid, email: credential.user.email });
        });
    }
};
StudentService.ctorParameters = () => [
    { type: _angular_fire_storage__WEBPACK_IMPORTED_MODULE_5__["AngularFireStorage"] },
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"] },
    { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_7__["AngularFireAuth"] }
];
StudentService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_storage__WEBPACK_IMPORTED_MODULE_5__["AngularFireStorage"], _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"], _angular_fire_auth__WEBPACK_IMPORTED_MODULE_7__["AngularFireAuth"]])
], StudentService);



/***/ })

}]);
//# sourceMappingURL=common-es2015.js.map