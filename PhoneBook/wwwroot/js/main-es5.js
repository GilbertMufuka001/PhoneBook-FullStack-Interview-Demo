function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<router-outlet>\r\n</router-outlet>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/entry/entry.component.html":
  /*!**********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/entry/entry.component.html ***!
    \**********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppEntryEntryComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"outerContainer\">\r\n\r\n  <div id=\"divContactDetails\" name=\"divContactDetails\" [hidden]=\"galleryVisible\">\r\n    <div class=\"innerContainer\">\r\n      <div class=\"profilePicContainer\">\r\n        <div class=\"profilePic\" [ngStyle]=\"{'background-image': 'url(' + model.picFullUrl + ')', 'height':'140px', 'width':'140px'}\">\r\n          <button class=\"btn-info btnChangeProfilePic\" (click)=\"changePicture()\">change</button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"centerWhitePanel\">\r\n      <form class=\"col-xs-12 col-md-12 col-lg-12 col-xs-12\" name=\"myForm\" id=\"myForm\">\r\n        <div class=\"row\">\r\n          <div class=\"col-xs-3 col-md-3 col-lg-3 col-xs-3\">\r\n            <label>Firstname</label>\r\n          </div>\r\n          <div class=\"col-xs-9 col-md-9 col-lg-9 col-xs-9\">\r\n            <input id=\"txtName\" name=\"txtName\" type=\"text\" class=\"form-control txtBox\" required [(ngModel)]=\"model.name\" maxlength=\"100\" />\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"row\">\r\n          <div class=\"col-xs-3 col-md-3 col-lg-3 col-xs-3\">\r\n            <label>Surname</label>\r\n          </div>\r\n          <div class=\"col-xs-9 col-md-9 col-lg-9 col-xs-9\">\r\n            <input id=\"txtSurname\" name=\"txtSurname\" type=\"text\" class=\"form-control txtBox\" [(ngModel)]=\"model.surname\" maxlength=\"100\" />\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"row\">\r\n          <div class=\"col-xs-3 col-md-3 col-lg-3 col-xs-3\">\r\n            <label>PhoneNumber</label>\r\n          </div>\r\n          <div class=\"col-xs-9 col-md-9 col-lg-9 col-xs-9\">\r\n            <input id=\"txtPhone\" name=\"txtPhone\" type=\"text\" class=\"form-control txtBox\" [(ngModel)]=\"model.phoneNumber\" maxlength=\"20\" />\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"row\">\r\n          <div class=\"col-xs-3 col-md-3 col-lg-3 col-xs-3\">\r\n            <label>EmailAddress</label>\r\n          </div>\r\n          <div class=\"col-xs-9 col-md-9 col-lg-9 col-xs-9\">\r\n            <input id=\"txtEmail\" name=\"txtEmail\" type=\"text\" class=\"form-control txtBox\" [(ngModel)]=\"model.emailAddress\" maxlength=\"80\" />\r\n          </div>\r\n        </div>\r\n        <br />\r\n        <div class=\"row\">\r\n          <div class=\"col-xs-3 col-md-3 col-lg-3 col-xs-3\">\r\n            <label></label>\r\n          </div>\r\n          <div class=\"col-xs-9 col-md-9 col-lg-9 col-xs-9\">\r\n            <button (click)=\"closeContact()\" class=\"btn btn-danger\">Go Back</button>&nbsp;\r\n            <button (click)=\"saveContact()\" class=\"btn btn-primary\">Save Contact</button>\r\n          </div>\r\n        </div>\r\n      </form>\r\n    </div>\r\n  </div>\r\n\r\n  <div id=\"divGallery\" name=\"divGallery\" [hidden]=\"!galleryVisible\">\r\n    <app-picture-gallery (pictureEvent)=\"processMessage($event)\"> </app-picture-gallery>\r\n  </div>\r\n\r\n\r\n  <h3 style=\"color:red\">{{errorMsg}}</h3>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/page-not-found/page-not-found.component.html":
  /*!****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/page-not-found/page-not-found.component.html ***!
    \****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPageNotFoundPageNotFoundComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<h1 style=\"width:50%; margin-left:25%; margin-right:25%\">Page Not Found!</h1>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/phone-list/phone-list.component.html":
  /*!********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/phone-list/phone-list.component.html ***!
    \********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPhoneListPhoneListComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"viewArea\">\r\n  <div class=\"InnerWhitePanel\" style=\"width:70%;border-style:solid;border-color:gray;border-width:2px;background-color:white;height:98%;margin-left:auto;margin-right:auto;overflow-x:hidden;overflow-y:auto\">\r\n\r\n    <div id=\"divPhoneList\" name=\"divPhoneList\" [hidden]=\"phoneListHidden\" class=\"entriesView\">\r\n      <div class=\"form-group-lg\" style=\"width:90%; margin-left:auto; margin-right:auto; background-color:gray\">\r\n        <h2>My Phone Book &trade;</h2>\r\n      </div>\r\n      <div class=\"form-group-lg\" style=\"width:90%; margin-left:auto; margin-right:auto; background-color:gray\">\r\n        <span style=\"float:left\">\r\n          <select [(ngModel)]=\"selectedList\" (ngModelChange)=\"phoneListChangedHandler($event)\" class=\"listSelector userSelection\">\r\n            <option *ngFor=\"let list of phoneBook\" [ngValue]=\"list\">{{list.name}}</option>\r\n          </select>\r\n        </span>\r\n        <span style=\"padding-left:3px;\">\r\n          <button class=\"btn btn-info topButton\" (click)=\"createNewList()\">New List</button>&nbsp;\r\n          <button class=\"btn btn-primary topButton\" (click)=\"createNewEntry()\">New Entry</button>\r\n        </span>\r\n        <span>\r\n          <input name=\"txtSearch\" id=\"txtSearch\" maxlength=\"80\" class=\"pull-right entrySearch userSelection\" type=\"text\"\r\n                 placeholder=\"enter search text here\" [(ngModel)]=\"searchString\" (ngModelChange)=\"this.userSearchPhrase.next($event)\" />\r\n        </span>\r\n      </div>\r\n      <table class=\"form-group-lg\" style=\"width:90%; margin-left:auto; margin-right:auto;\">\r\n        <tr *ngFor=\"let entry of entryListView\" [hidden]=\"entry.isDeleted\" class=\"phoneEntry\">\r\n          <td class=\"entryStyleW10 entryText\" (click)=\"entryClick(entry)\"><img src=\"{{entry.picFullUrl}}\" class=\"entryImage\" alt=\"entry\" /></td>\r\n          <td class=\"entryStyleW20 entryText\" (click)=\"entryClick(entry)\"><span style=\"margin-left:3px\">{{entry.name}}</span></td>\r\n          <td class=\"entryStyleW20 entryText\" (click)=\"entryClick(entry)\"><span>{{entry.surname}}</span></td>\r\n          <td class=\"entryStyleW30 entryText\" (click)=\"entryClick(entry)\"><span>{{entry.phoneNumber}}</span></td>\r\n          <td class=\"entryStyleW20 entryText\"> <button class=\"btn btn-primary entryButton1\" (click)=\"deleteEntry(entry)\">Delete</button> </td>\r\n        </tr>\r\n      </table>\r\n    </div>\r\n\r\n    <div id=\"divEntry\" name=\"divEntry\" [hidden]=\"!phoneListHidden\">\r\n      <app-entry (childEvent)=\"processMessage($event)\" [model]=\"selectedEntry\"> </app-entry>\r\n    </div>\r\n\r\n    <h3>{{errorMsg}}</h3>\r\n\r\n  </div>\r\n</div>\r\n\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/picture-gallery/picture-gallery.component.html":
  /*!******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/picture-gallery/picture-gallery.component.html ***!
    \******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPictureGalleryPictureGalleryComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"outerPicContainer\">\r\n  <div style=\"width:300px; margin-left:auto;margin-right:auto;\">\r\n    <h2>My Picture Gallery</h2>\r\n    <table class=\"table table-bordered table-responsive table-hover\" style=\"width:100%; margin-top:10px\">\r\n      <tr *ngFor=\"let slot of gallery\" style=\"width:100%\">\r\n        <td *ngFor=\"let picModel of slot.items\" class=\"picItem\" style=\"width:33%;height:80px;\" (click)=\"doSelection(picModel)\">\r\n          <img style=\"width:100%;height:80px\" src=\"{{picModel.picFullUrl}}\" alt=\"my image\" />\r\n        </td>\r\n      </tr>\r\n    </table>\r\n    <div style=\"width:100%\">\r\n      <div style=\"width:92px; margin-left:auto; margin-right:auto\">\r\n        <button (click)=\"closeGallery()\" class=\"btn btn-danger\">Go Back</button>&nbsp;\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n\r\n  <h3 style=\"color:red\">{{errorMsg}}</h3>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0
    
    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.
    
    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : new P(function (resolve) {
            resolve(result.value);
          }).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var m = typeof Symbol === "function" && o[Symbol.iterator],
          i = 0;
      if (m) return m.call(o);
      return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result.default = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        default: mod
      };
    }
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule, routingComponents */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "routingComponents", function () {
      return routingComponents;
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


    var _phone_list_phone_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./phone-list/phone-list.component */
    "./src/app/phone-list/phone-list.component.ts");
    /* harmony import */


    var _entry_entry_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./entry/entry.component */
    "./src/app/entry/entry.component.ts");
    /* harmony import */


    var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./page-not-found/page-not-found.component */
    "./src/app/page-not-found/page-not-found.component.ts");

    var routes = [{
      path: '',
      redirectTo: '/phoneList',
      pathMatch: 'prefix'
    }, {
      path: 'phoneList',
      component: _phone_list_phone_list_component__WEBPACK_IMPORTED_MODULE_3__["PhoneListComponent"]
    }, {
      path: '**',
      component: _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_5__["PageNotFoundComponent"]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    var routingComponents = [_phone_list_phone_list_component__WEBPACK_IMPORTED_MODULE_3__["PhoneListComponent"], _entry_entry_component__WEBPACK_IMPORTED_MODULE_4__["EntryComponent"], _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_5__["PageNotFoundComponent"]];
    /***/
  },

  /***/
  "./src/app/app.component.css":
  /*!***********************************!*\
    !*** ./src/app/app.component.css ***!
    \***********************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'ngPresentation';
    };

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.css */
      "./src/app/app.component.css")).default]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./page-not-found/page-not-found.component */
    "./src/app/page-not-found/page-not-found.component.ts");
    /* harmony import */


    var _phone_book_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./phone-book.service */
    "./src/app/phone-book.service.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _picture_gallery_picture_gallery_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./picture-gallery/picture-gallery.component */
    "./src/app/picture-gallery/picture-gallery.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["routingComponents"], _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_6__["PageNotFoundComponent"], _picture_gallery_picture_gallery_component__WEBPACK_IMPORTED_MODULE_9__["PictureGalleryComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"]],
      providers: [_phone_book_service__WEBPACK_IMPORTED_MODULE_7__["PhoneBookService"]],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/entry/entry.component.css":
  /*!*******************************************!*\
    !*** ./src/app/entry/entry.component.css ***!
    \*******************************************/

  /*! exports provided: default */

  /***/
  function srcAppEntryEntryComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\r\n.outerContainer {\r\n  width:100%;\r\n  background-color:white;\r\n  overflow-x:hidden;\r\n  overflow-y:hidden;\r\n}\r\n\r\n.innerContainer {\r\n  width: 100%;\r\n  background-color: rgba(48,68,100,1);\r\n}\r\n\r\n.profilePicContainer {\r\n  height:150px;\r\n  width:150px;\r\n  text-align:center;\r\n  margin-bottom:5px;\r\n  padding:0px;\r\n  margin-left:auto;\r\n  margin-right:auto;\r\n  overflow-x:hidden;\r\n  overflow-y:hidden;\r\n}\r\n\r\n.profilePic {\r\n  margin: 0px;\r\n  padding: 0px;\r\n  border-radius: 50%;\r\n  border-style: solid;\r\n  border-color: white;\r\n  border-width: 3px;\r\n}\r\n\r\n.btnChangeProfilePic {\r\n  margin-top: 10% !important;\r\n  width: 55px;\r\n  font-size: 12px;\r\n}\r\n\r\n.centerWhitePanel {\r\n  width: 70% !important;\r\n  margin-left: auto !important;\r\n  margin-right: auto !important;\r\n}\r\n\r\n.txtBox {\r\n  width:100%;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZW50cnkvZW50cnkuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7RUFDRSxVQUFVO0VBQ1Ysc0JBQXNCO0VBQ3RCLGlCQUFpQjtFQUNqQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsbUNBQW1DO0FBQ3JDOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFdBQVc7RUFDWCxpQkFBaUI7RUFDakIsaUJBQWlCO0VBQ2pCLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLGlCQUFpQjtFQUNqQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLDBCQUEwQjtFQUMxQixXQUFXO0VBQ1gsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQiw0QkFBNEI7RUFDNUIsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0UsVUFBVTtBQUNaIiwiZmlsZSI6InNyYy9hcHAvZW50cnkvZW50cnkuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4ub3V0ZXJDb250YWluZXIge1xyXG4gIHdpZHRoOjEwMCU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjp3aGl0ZTtcclxuICBvdmVyZmxvdy14OmhpZGRlbjtcclxuICBvdmVyZmxvdy15OmhpZGRlbjtcclxufVxyXG5cclxuLmlubmVyQ29udGFpbmVyIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDQ4LDY4LDEwMCwxKTtcclxufVxyXG5cclxuLnByb2ZpbGVQaWNDb250YWluZXIge1xyXG4gIGhlaWdodDoxNTBweDtcclxuICB3aWR0aDoxNTBweDtcclxuICB0ZXh0LWFsaWduOmNlbnRlcjtcclxuICBtYXJnaW4tYm90dG9tOjVweDtcclxuICBwYWRkaW5nOjBweDtcclxuICBtYXJnaW4tbGVmdDphdXRvO1xyXG4gIG1hcmdpbi1yaWdodDphdXRvO1xyXG4gIG92ZXJmbG93LXg6aGlkZGVuO1xyXG4gIG92ZXJmbG93LXk6aGlkZGVuO1xyXG59XHJcblxyXG4ucHJvZmlsZVBpYyB7XHJcbiAgbWFyZ2luOiAwcHg7XHJcbiAgcGFkZGluZzogMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gIGJvcmRlci1jb2xvcjogd2hpdGU7XHJcbiAgYm9yZGVyLXdpZHRoOiAzcHg7XHJcbn1cclxuXHJcbi5idG5DaGFuZ2VQcm9maWxlUGljIHtcclxuICBtYXJnaW4tdG9wOiAxMCUgIWltcG9ydGFudDtcclxuICB3aWR0aDogNTVweDtcclxuICBmb250LXNpemU6IDEycHg7XHJcbn1cclxuXHJcbi5jZW50ZXJXaGl0ZVBhbmVsIHtcclxuICB3aWR0aDogNzAlICFpbXBvcnRhbnQ7XHJcbiAgbWFyZ2luLWxlZnQ6IGF1dG8gIWltcG9ydGFudDtcclxuICBtYXJnaW4tcmlnaHQ6IGF1dG8gIWltcG9ydGFudDtcclxufVxyXG5cclxuLnR4dEJveCB7XHJcbiAgd2lkdGg6MTAwJTtcclxufVxyXG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/entry/entry.component.ts":
  /*!******************************************!*\
    !*** ./src/app/entry/entry.component.ts ***!
    \******************************************/

  /*! exports provided: EntryComponent */

  /***/
  function srcAppEntryEntryComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EntryComponent", function () {
      return EntryComponent;
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


    var _phone_book_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../phone-book.service */
    "./src/app/phone-book.service.ts");

    var EntryComponent =
    /*#__PURE__*/
    function () {
      function EntryComponent(_phoneBookService) {
        _classCallCheck(this, EntryComponent);

        this._phoneBookService = _phoneBookService;
        this.childEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.listNeedsRefresh = false;
        this.errorMsg = "";
        this.baseUrl = window.location.origin;
        this.picsUrl = this.baseUrl + "/MyImages/";
      }

      _createClass(EntryComponent, [{
        key: "getImageUrl",
        value: function getImageUrl() {
          return "url('" + this.model.picFullUrl + "')";
        }
      }, {
        key: "changePicture",
        value: function changePicture() {
          this.galleryVisible = true;
        }
      }, {
        key: "refreshParent",
        value: function refreshParent() {
          this.listNeedsRefresh = true;
          this.childEvent.emit({
            childActive: false,
            refreshList: this.listNeedsRefresh
          });
        }
      }, {
        key: "isNullOrEmpty",
        value: function isNullOrEmpty(str) {
          if (!str) return false;
          return str.length < 1 ? true : false;
        }
      }, {
        key: "processMessage",
        value: function processMessage(event) {
          if (!event) return;
          this.galleryVisible = false;

          if (event.selectedPic) {
            this.model.picUrl = event.selectedPic;
            this.model.picFullUrl = this.picsUrl + event.selectedPic;
          }
        }
      }, {
        key: "closeContact",
        value: function closeContact() {
          this.model = {};
          this.childEvent.emit({
            childActive: false,
            refreshList: this.listNeedsRefresh
          });
        }
      }, {
        key: "saveContact",
        value: function saveContact() {
          var _this = this;

          if (this.isNullOrEmpty(this.model.name)) {
            alert('Please enter contact name');
            return;
          }

          if (this.isNullOrEmpty(this.model.phoneNumber)) {
            alert('Please enter name contact number');
            return;
          }

          var saveItem;

          if (this._phoneBookService) {
            this._phoneBookService.saveContact(this.model).subscribe(function (data) {
              return saveItem = data;
            }, function (error) {
              return _this.errorMsg;
            }, function () {
              return _this.refreshParent();
            });
          }
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this.model = {};
        }
      }]);

      return EntryComponent;
    }();

    EntryComponent.ctorParameters = function () {
      return [{
        type: _phone_book_service__WEBPACK_IMPORTED_MODULE_2__["PhoneBookService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], EntryComponent.prototype, "model", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], EntryComponent.prototype, "childEvent", void 0);
    EntryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-entry',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./entry.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/entry/entry.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./entry.component.css */
      "./src/app/entry/entry.component.css")).default]
    })], EntryComponent);
    /***/
  },

  /***/
  "./src/app/page-not-found/page-not-found.component.css":
  /*!*************************************************************!*\
    !*** ./src/app/page-not-found/page-not-found.component.css ***!
    \*************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPageNotFoundPageNotFoundComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2Utbm90LWZvdW5kL3BhZ2Utbm90LWZvdW5kLmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/page-not-found/page-not-found.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/page-not-found/page-not-found.component.ts ***!
    \************************************************************/

  /*! exports provided: PageNotFoundComponent */

  /***/
  function srcAppPageNotFoundPageNotFoundComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function () {
      return PageNotFoundComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var PageNotFoundComponent =
    /*#__PURE__*/
    function () {
      function PageNotFoundComponent() {
        _classCallCheck(this, PageNotFoundComponent);
      }

      _createClass(PageNotFoundComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return PageNotFoundComponent;
    }();

    PageNotFoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-page-not-found',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./page-not-found.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/page-not-found/page-not-found.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./page-not-found.component.css */
      "./src/app/page-not-found/page-not-found.component.css")).default]
    })], PageNotFoundComponent);
    /***/
  },

  /***/
  "./src/app/phone-book.service.ts":
  /*!***************************************!*\
    !*** ./src/app/phone-book.service.ts ***!
    \***************************************/

  /*! exports provided: PhoneBookService */

  /***/
  function srcAppPhoneBookServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PhoneBookService", function () {
      return PhoneBookService;
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


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var rxjs_Observable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/Observable */
    "./node_modules/rxjs-compat/_esm2015/Observable.js");
    /* harmony import */


    var rxjs_add_operator_catch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/add/operator/catch */
    "./node_modules/rxjs-compat/_esm2015/add/operator/catch.js");
    /* harmony import */


    var rxjs_add_observable_throw__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! rxjs/add/observable/throw */
    "./node_modules/rxjs-compat/_esm2015/add/observable/throw.js");

    var PhoneBookService =
    /*#__PURE__*/
    function () {
      function PhoneBookService(http) {
        _classCallCheck(this, PhoneBookService);

        this.http = http;
        this.baseUrl = "";
        this.picsUrl = "";
        this.apiUrl = "";
        this.baseUrl = window.location.origin;
        this.picsUrl = this.baseUrl + "/MyImages/";
        this.apiUrl = "http://localhost:5555/api/";
      } // api/Phonebook


      _createClass(PhoneBookService, [{
        key: "getPhoneBook",
        value: function getPhoneBook() {
          var fullUrl = this.apiUrl + "Phonebook";
          return this.http.get(fullUrl).catch(this.errorHandler);
        }
      }, {
        key: "saveContact",
        // api/Phonebook/entry
        value: function saveContact(entry) {
          var fullUrl = this.apiUrl + "Phonebook/entry";
          return this.http.post(fullUrl, entry).catch(this.errorHandler);
        }
      }, {
        key: "deleteContact",
        // api/Phonebook/entry
        value: function deleteContact(entry) {
          var id = entry.id;
          var fullUrl = this.apiUrl + "Phonebook/remove/" + id.toString();
          return this.http.delete(fullUrl).catch(this.errorHandler);
        }
      }, {
        key: "getPicGalleryFiles",
        value: function getPicGalleryFiles() {
          return [{
            id: 1,
            picUrl: "boks.png"
          }, {
            id: 2,
            picUrl: "Unknown.png"
          }, {
            id: 3,
            picUrl: "pic1.png"
          }, {
            id: 4,
            picUrl: "pic2.png"
          }, {
            id: 5,
            picUrl: "pic3.png"
          }, {
            id: 6,
            picUrl: "pic4.png"
          }, {
            id: 7,
            picUrl: "pic5.png"
          }, {
            id: 8,
            picUrl: "pic6.png"
          }, {
            id: 9,
            picUrl: "pic7.png"
          }, {
            id: 10,
            picUrl: "pic8.png"
          }, {
            id: 11,
            picUrl: "pic9.png"
          }, {
            id: 12,
            picUrl: "pic10.png"
          }, {
            id: 13,
            picUrl: "pic11.png"
          }, {
            id: 14,
            picUrl: "pic12.png"
          }, {
            id: 14,
            picUrl: "gilbert.png"
          }, {
            id: 15,
            picUrl: "family.png"
          }, {
            id: 16,
            picUrl: "eagle.png"
          }, {
            id: 17,
            picUrl: "lion.png"
          }];
        }
      }, {
        key: "errorHandler",
        value: function errorHandler(error) {
          return rxjs_Observable__WEBPACK_IMPORTED_MODULE_3__["Observable"].throw(error.message || "Server Error");
        }
      }]);

      return PhoneBookService;
    }();

    PhoneBookService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    PhoneBookService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], PhoneBookService);
    /***/
  },

  /***/
  "./src/app/phone-list/phone-list.component.css":
  /*!*****************************************************!*\
    !*** ./src/app/phone-list/phone-list.component.css ***!
    \*****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPhoneListPhoneListComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "h2 {\r\n  background-color: rgba(48,68,100,1);\r\n  font-weight:bold;\r\n  color: white;\r\n}\r\n\r\n.entryText {\r\n  font-size: 22px;\r\n  color: white;\r\n  text-shadow: 2px 2px 4px #000000;\r\n}\r\n\r\n.entryStyleW10 {\r\n  width: 10%\r\n}\r\n\r\n.entryStyleW20 {\r\n  width:20%\r\n}\r\n\r\n.entryStyleW30 {\r\n  width: 00%\r\n}\r\n\r\n.entryButton1 {\r\n  float:right !important;\r\n  font-size:13px;\r\n  border-radius:4%;\r\n  margin-right:3px;\r\n}\r\n\r\n.entryImage {\r\n  height:32px;\r\n  width:32px;\r\n  border-radius:50%;\r\n  border-style:solid;\r\n  border-color:rgba(52,122,182,1);\r\n  border-width:2px;\r\n}\r\n\r\n.entrySearch {\r\n  float:right;\r\n  height:28px;\r\n  font-size: 18px;\r\n  padding:0px;\r\n  margin-right:0px;\r\n  min-width:80px;\r\n}\r\n\r\n.topButton {\r\n  font-size:12px;\r\n  border-radius:45%;\r\n  height:28px;\r\n}\r\n\r\n.listSelector {\r\n  font-size: 16px;\r\n  height:26px;\r\n  min-width:80px;\r\n}\r\n\r\n.userSelection {\r\n  border-color: rgba(50,122,182,1);\r\n  border-style: solid;\r\n  border-width: 2px;\r\n}\r\n\r\n.phoneEntry {\r\n  height:44px;\r\n  cursor:pointer;\r\n  display: table;\r\n  width:100%;\r\n  border-style:outset;\r\n  border-width:3px;\r\n  border-color:silver;\r\n  background-color:rgba(130,160,200,1);\r\n}\r\n\r\n.viewArea {\r\n  width:100% !important;\r\n  height:700px !important;\r\n  background-color:silver;\r\n  overflow-x:hidden;\r\n  overflow-y:hidden;\r\n}\r\n\r\n.innerWhitePanel {\r\n  border-style:solid;\r\n  border-color:gray;\r\n  border-width:2px;\r\n  background-color: white !important;\r\n  height:98%;\r\n  width:50% !important;\r\n  margin-left:auto !important;\r\n  margin-right:auto !important;\r\n  overflow-x:hidden;\r\n  overflow-y:auto;\r\n}\r\n\r\n.entriesView {\r\n  width:100%;\r\n  margin-top:0px;\r\n  overflow-x:hidden;\r\n  overflow-y:hidden;\r\n}\r\n\r\n.entriesTitle {\r\n  background-color:darkgray;\r\n  width:100%;\r\n  min-height:35px;\r\n}\r\n\r\n.titleinner {\r\n  width:90%;\r\n  margin-left:5%;\r\n  margin-right:5%;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGhvbmUtbGlzdC9waG9uZS1saXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQ0FBbUM7RUFDbkMsZ0JBQWdCO0VBQ2hCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGVBQWU7RUFDZixZQUFZO0VBQ1osZ0NBQWdDO0FBQ2xDOztBQUVBO0VBQ0U7QUFDRjs7QUFFQTtFQUNFO0FBQ0Y7O0FBRUE7RUFDRTtBQUNGOztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsV0FBVztFQUNYLFVBQVU7RUFDVixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLCtCQUErQjtFQUMvQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsV0FBVztFQUNYLGVBQWU7RUFDZixXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGVBQWU7RUFDZixXQUFXO0VBQ1gsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGdDQUFnQztFQUNoQyxtQkFBbUI7RUFDbkIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsV0FBVztFQUNYLGNBQWM7RUFDZCxjQUFjO0VBQ2QsVUFBVTtFQUNWLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLG9DQUFvQztBQUN0Qzs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQix1QkFBdUI7RUFDdkIsdUJBQXVCO0VBQ3ZCLGlCQUFpQjtFQUNqQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixrQ0FBa0M7RUFDbEMsVUFBVTtFQUNWLG9CQUFvQjtFQUNwQiwyQkFBMkI7RUFDM0IsNEJBQTRCO0VBQzVCLGlCQUFpQjtFQUNqQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsVUFBVTtFQUNWLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLFVBQVU7RUFDVixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsU0FBUztFQUNULGNBQWM7RUFDZCxlQUFlO0FBQ2pCIiwiZmlsZSI6InNyYy9hcHAvcGhvbmUtbGlzdC9waG9uZS1saXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoMiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg0OCw2OCwxMDAsMSk7XHJcbiAgZm9udC13ZWlnaHQ6Ym9sZDtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5lbnRyeVRleHQge1xyXG4gIGZvbnQtc2l6ZTogMjJweDtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgdGV4dC1zaGFkb3c6IDJweCAycHggNHB4ICMwMDAwMDA7XHJcbn1cclxuXHJcbi5lbnRyeVN0eWxlVzEwIHtcclxuICB3aWR0aDogMTAlXHJcbn1cclxuXHJcbi5lbnRyeVN0eWxlVzIwIHtcclxuICB3aWR0aDoyMCVcclxufVxyXG5cclxuLmVudHJ5U3R5bGVXMzAge1xyXG4gIHdpZHRoOiAwMCVcclxufVxyXG5cclxuLmVudHJ5QnV0dG9uMSB7XHJcbiAgZmxvYXQ6cmlnaHQgIWltcG9ydGFudDtcclxuICBmb250LXNpemU6MTNweDtcclxuICBib3JkZXItcmFkaXVzOjQlO1xyXG4gIG1hcmdpbi1yaWdodDozcHg7XHJcbn1cclxuXHJcbi5lbnRyeUltYWdlIHtcclxuICBoZWlnaHQ6MzJweDtcclxuICB3aWR0aDozMnB4O1xyXG4gIGJvcmRlci1yYWRpdXM6NTAlO1xyXG4gIGJvcmRlci1zdHlsZTpzb2xpZDtcclxuICBib3JkZXItY29sb3I6cmdiYSg1MiwxMjIsMTgyLDEpO1xyXG4gIGJvcmRlci13aWR0aDoycHg7XHJcbn1cclxuXHJcbi5lbnRyeVNlYXJjaCB7XHJcbiAgZmxvYXQ6cmlnaHQ7XHJcbiAgaGVpZ2h0OjI4cHg7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gIHBhZGRpbmc6MHB4O1xyXG4gIG1hcmdpbi1yaWdodDowcHg7XHJcbiAgbWluLXdpZHRoOjgwcHg7XHJcbn1cclxuXHJcbi50b3BCdXR0b24ge1xyXG4gIGZvbnQtc2l6ZToxMnB4O1xyXG4gIGJvcmRlci1yYWRpdXM6NDUlO1xyXG4gIGhlaWdodDoyOHB4O1xyXG59XHJcblxyXG4ubGlzdFNlbGVjdG9yIHtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgaGVpZ2h0OjI2cHg7XHJcbiAgbWluLXdpZHRoOjgwcHg7XHJcbn1cclxuXHJcbi51c2VyU2VsZWN0aW9uIHtcclxuICBib3JkZXItY29sb3I6IHJnYmEoNTAsMTIyLDE4MiwxKTtcclxuICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gIGJvcmRlci13aWR0aDogMnB4O1xyXG59XHJcblxyXG4ucGhvbmVFbnRyeSB7XHJcbiAgaGVpZ2h0OjQ0cHg7XHJcbiAgY3Vyc29yOnBvaW50ZXI7XHJcbiAgZGlzcGxheTogdGFibGU7XHJcbiAgd2lkdGg6MTAwJTtcclxuICBib3JkZXItc3R5bGU6b3V0c2V0O1xyXG4gIGJvcmRlci13aWR0aDozcHg7XHJcbiAgYm9yZGVyLWNvbG9yOnNpbHZlcjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMTMwLDE2MCwyMDAsMSk7XHJcbn1cclxuXHJcbi52aWV3QXJlYSB7XHJcbiAgd2lkdGg6MTAwJSAhaW1wb3J0YW50O1xyXG4gIGhlaWdodDo3MDBweCAhaW1wb3J0YW50O1xyXG4gIGJhY2tncm91bmQtY29sb3I6c2lsdmVyO1xyXG4gIG92ZXJmbG93LXg6aGlkZGVuO1xyXG4gIG92ZXJmbG93LXk6aGlkZGVuO1xyXG59XHJcblxyXG4uaW5uZXJXaGl0ZVBhbmVsIHtcclxuICBib3JkZXItc3R5bGU6c29saWQ7XHJcbiAgYm9yZGVyLWNvbG9yOmdyYXk7XHJcbiAgYm9yZGVyLXdpZHRoOjJweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xyXG4gIGhlaWdodDo5OCU7XHJcbiAgd2lkdGg6NTAlICFpbXBvcnRhbnQ7XHJcbiAgbWFyZ2luLWxlZnQ6YXV0byAhaW1wb3J0YW50O1xyXG4gIG1hcmdpbi1yaWdodDphdXRvICFpbXBvcnRhbnQ7XHJcbiAgb3ZlcmZsb3cteDpoaWRkZW47XHJcbiAgb3ZlcmZsb3cteTphdXRvO1xyXG59XHJcblxyXG4uZW50cmllc1ZpZXcge1xyXG4gIHdpZHRoOjEwMCU7XHJcbiAgbWFyZ2luLXRvcDowcHg7XHJcbiAgb3ZlcmZsb3cteDpoaWRkZW47XHJcbiAgb3ZlcmZsb3cteTpoaWRkZW47XHJcbn1cclxuXHJcbi5lbnRyaWVzVGl0bGUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ZGFya2dyYXk7XHJcbiAgd2lkdGg6MTAwJTtcclxuICBtaW4taGVpZ2h0OjM1cHg7XHJcbn1cclxuXHJcbi50aXRsZWlubmVyIHtcclxuICB3aWR0aDo5MCU7XHJcbiAgbWFyZ2luLWxlZnQ6NSU7XHJcbiAgbWFyZ2luLXJpZ2h0OjUlO1xyXG59XHJcbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/phone-list/phone-list.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/phone-list/phone-list.component.ts ***!
    \****************************************************/

  /*! exports provided: PhoneListComponent */

  /***/
  function srcAppPhoneListPhoneListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PhoneListComponent", function () {
      return PhoneListComponent;
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


    var _phone_book_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../phone-book.service */
    "./src/app/phone-book.service.ts");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var PhoneListComponent =
    /*#__PURE__*/
    function () {
      function PhoneListComponent(_phoneBookService) {
        var _this2 = this;

        _classCallCheck(this, PhoneListComponent);

        this._phoneBookService = _phoneBookService;
        this.searchString = "";
        this.phoneBook = [];
        this.phoneListHidden = false;
        this.baseUrl = "";
        this.picsUrl = "";
        this.errorMsg = "";
        this.userSearchPhrase = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.entryListView = [];
        this.baseUrl = window.location.origin;
        this.picsUrl = this.baseUrl + "/MyImages/";
        this.userSearchPhrase.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["debounceTime"])(400), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["distinctUntilChanged"])()).subscribe(function (value) {
          _this2.filterEntries(value);
        });
      }

      _createClass(PhoneListComponent, [{
        key: "createNewList",
        value: function createNewList() {}
      }, {
        key: "entryClick",
        value: function entryClick(selected) {
          this.selectedEntry = selected;
          this.phoneListHidden = true;
        }
      }, {
        key: "createNewEntry",
        value: function createNewEntry() {
          if (this.selectedList) {
            this.selectedEntry = {
              PicUrl: 'Unknown.png',
              picFullUrl: this.picsUrl + 'Unknown.png',
              phoneBookId: this.selectedList.id
            };
            this.phoneListHidden = true;
          }
        }
      }, {
        key: "deleteEntry",
        value: function deleteEntry(entry) {
          var _this3 = this;

          entry.IsDeleted = true;
          var rm;

          if (this._phoneBookService) {
            this._phoneBookService.deleteContact(entry).subscribe(function (data) {
              return rm = data;
            }, function (error) {
              return _this3.errorMsg;
            }, function () {
              return _this3.refreshList();
            });
          }
        }
      }, {
        key: "processMessage",
        value: function processMessage(event) {
          if (!event) return;
          this.phoneListHidden = event.childActive;
          if (event.refreshList) this.refreshList();
        }
      }, {
        key: "refreshList",
        value: function refreshList() {
          var prevListId = 0;
          if (this.selectedList) prevListId = this.selectedList.id;
          this.getPhoneBook(prevListId);
        }
      }, {
        key: "findListById",
        value: function findListById(id) {
          var result = null;
          this.phoneBook.forEach(function (x) {
            if (x.id == id) result = x;
          });
          return result;
        }
      }, {
        key: "filterEntries",
        value: function filterEntries(searchPhrase) {
          if (!this.selectedList) return false;
          if (!this.selectedList.entries) return false;
          var reset = false;
          if (!searchPhrase) reset = true;
          if (searchPhrase.length < 1) reset = true;

          if (reset) {
            this.entryListView = this.selectedList.entries;
          } else {
            this.entryListView = this.selectedList.entries.filter(function (e) {
              return e.name.toLowerCase().trim().indexOf(searchPhrase.toLowerCase().trim()) >= 0;
            });
          }
        }
      }, {
        key: "phoneListChangedHandler",
        value: function phoneListChangedHandler(newList) {
          if (newList) this.entryListView = newList.entries;
        }
      }, {
        key: "loadCompleteHandler",
        value: function loadCompleteHandler(initialListToDisplay) {
          var _this4 = this;

          if (this.phoneBook) {
            if (this.phoneBook.length) {
              this.phoneBook.forEach(function (pb) {
                if (pb.entries) {
                  pb.entries.forEach(function (e) {
                    return e.picFullUrl = _this4.picsUrl + e.picUrl;
                  });
                } else {
                  pb.entries = [];
                }
              });
              this.selectedList = initialListToDisplay ? this.findListById(initialListToDisplay) : this.phoneBook[0];
              if (this.selectedList) this.entryListView = this.selectedList.entries;
            }
          }
        }
      }, {
        key: "getPhoneBook",
        value: function getPhoneBook(initialListToDisplay) {
          var _this5 = this;

          this.phoneBook = [];
          this.entryListView = [];

          if (this._phoneBookService) {
            this._phoneBookService.getPhoneBook().subscribe(function (data) {
              return _this5.phoneBook = data;
            }, function (error) {
              return _this5.errorMsg;
            }, function () {
              return _this5.loadCompleteHandler(initialListToDisplay);
            });
          }
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getPhoneBook(0);
        }
      }]);

      return PhoneListComponent;
    }();

    PhoneListComponent.ctorParameters = function () {
      return [{
        type: _phone_book_service__WEBPACK_IMPORTED_MODULE_2__["PhoneBookService"]
      }];
    };

    PhoneListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-phone-list',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./phone-list.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/phone-list/phone-list.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./phone-list.component.css */
      "./src/app/phone-list/phone-list.component.css")).default]
    })], PhoneListComponent);
    /***/
  },

  /***/
  "./src/app/picture-gallery/picture-gallery.component.css":
  /*!***************************************************************!*\
    !*** ./src/app/picture-gallery/picture-gallery.component.css ***!
    \***************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPictureGalleryPictureGalleryComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\r\n.outerPicContainer {\r\n  width: 100%;\r\n  background-color: white;\r\n  overflow-x: hidden;\r\n  overflow-y: hidden;\r\n}\r\n.centerPicPanel {\r\n  width: 40% !important;\r\n  margin-left: auto !important;\r\n  margin-right: auto !important;\r\n}\r\n.picItem {\r\n  border-style: outset;\r\n  border-width: 2px;\r\n  border-color: silver;\r\n  cursor:pointer;\r\n}\r\n.picItem:hover {\r\n    border-color: blue;\r\n  }\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGljdHVyZS1nYWxsZXJ5L3BpY3R1cmUtZ2FsbGVyeS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtFQUNFLFdBQVc7RUFDWCx1QkFBdUI7RUFDdkIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UscUJBQXFCO0VBQ3JCLDRCQUE0QjtFQUM1Qiw2QkFBNkI7QUFDL0I7QUFFQTtFQUNFLG9CQUFvQjtFQUNwQixpQkFBaUI7RUFDakIsb0JBQW9CO0VBQ3BCLGNBQWM7QUFDaEI7QUFFRTtJQUNFLGtCQUFrQjtFQUNwQiIsImZpbGUiOiJzcmMvYXBwL3BpY3R1cmUtZ2FsbGVyeS9waWN0dXJlLWdhbGxlcnkuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4ub3V0ZXJQaWNDb250YWluZXIge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcclxuICBvdmVyZmxvdy15OiBoaWRkZW47XHJcbn1cclxuLmNlbnRlclBpY1BhbmVsIHtcclxuICB3aWR0aDogNDAlICFpbXBvcnRhbnQ7XHJcbiAgbWFyZ2luLWxlZnQ6IGF1dG8gIWltcG9ydGFudDtcclxuICBtYXJnaW4tcmlnaHQ6IGF1dG8gIWltcG9ydGFudDtcclxufVxyXG5cclxuLnBpY0l0ZW0ge1xyXG4gIGJvcmRlci1zdHlsZTogb3V0c2V0O1xyXG4gIGJvcmRlci13aWR0aDogMnB4O1xyXG4gIGJvcmRlci1jb2xvcjogc2lsdmVyO1xyXG4gIGN1cnNvcjpwb2ludGVyO1xyXG59XHJcblxyXG4gIC5waWNJdGVtOmhvdmVyIHtcclxuICAgIGJvcmRlci1jb2xvcjogYmx1ZTtcclxuICB9XHJcbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/picture-gallery/picture-gallery.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/picture-gallery/picture-gallery.component.ts ***!
    \**************************************************************/

  /*! exports provided: PictureGalleryComponent */

  /***/
  function srcAppPictureGalleryPictureGalleryComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PictureGalleryComponent", function () {
      return PictureGalleryComponent;
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


    var _phone_book_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../phone-book.service */
    "./src/app/phone-book.service.ts");

    var picSlot =
    /*#__PURE__*/
    function () {
      _createClass(picSlot, [{
        key: "addItem",
        value: function addItem(obj) {
          this.items.push(obj);
          if (this.items.length >= 3) this.isFull = true;
        }
      }]);

      function picSlot() {
        _classCallCheck(this, picSlot);

        this.isFull = false;
        this.items = [];
      }

      return picSlot;
    }();

    var PictureGalleryComponent =
    /*#__PURE__*/
    function () {
      function PictureGalleryComponent(_phoneBookService) {
        _classCallCheck(this, PictureGalleryComponent);

        this._phoneBookService = _phoneBookService;
        this.pictureEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.gallery = [];
        this.galleryList = [];
        this.errorMsg = [];
        this.baseUrl = window.location.origin;
        this.picsUrl = this.baseUrl + "/MyImages/";
      }

      _createClass(PictureGalleryComponent, [{
        key: "doSelection",
        value: function doSelection(chosenPicUrl) {
          this.pictureEvent.emit({
            childActive: false,
            selectedPic: chosenPicUrl.picUrl
          });
        }
      }, {
        key: "loadCompleteHandler",
        value: function loadCompleteHandler() {
          var _this6 = this;

          this.gallery = [];
          var currentSlot = new picSlot();
          this.galleryList.forEach(function (picModel) {
            picModel.picFullUrl = _this6.picsUrl + picModel.picUrl;

            if (currentSlot.isFull) {
              _this6.gallery.push(currentSlot);

              currentSlot = new picSlot();
            }

            currentSlot.addItem(picModel);
          });
          this.gallery.push(currentSlot);
        }
      }, {
        key: "closeGallery",
        value: function closeGallery() {
          this.pictureEvent.emit({
            childActive: false,
            selectedPic: ""
          });
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          if (this._phoneBookService) {
            this.galleryList = this._phoneBookService.getPicGalleryFiles();
            this.loadCompleteHandler();
          }
        }
      }]);

      return PictureGalleryComponent;
    }();

    PictureGalleryComponent.ctorParameters = function () {
      return [{
        type: _phone_book_service__WEBPACK_IMPORTED_MODULE_2__["PhoneBookService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], PictureGalleryComponent.prototype, "pictureEvent", void 0);
    PictureGalleryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-picture-gallery',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./picture-gallery.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/picture-gallery/picture-gallery.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./picture-gallery.component.css */
      "./src/app/picture-gallery/picture-gallery.component.css")).default]
    })], PictureGalleryComponent);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"]).catch(function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Demos\PhoneBook\PhoneBook\ngPresentation\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map