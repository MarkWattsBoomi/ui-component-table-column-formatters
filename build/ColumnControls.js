/******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/BooleanIcon.tsx":
/*!*****************************!*\
  !*** ./src/BooleanIcon.tsx ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(/*! react */ "react");
var BooleanIcon = /** @class */ (function (_super) {
    __extends(BooleanIcon, _super);
    function BooleanIcon(props) {
        return _super.call(this, props) || this;
    }
    BooleanIcon.prototype.componentDidMount = function () {
        this.forceUpdate();
    };
    BooleanIcon.prototype.render = function () {
        var className = "glyphicon glyphicon-";
        if (this.props.contentValue === "true") {
            className += "ok";
        }
        else {
            className += "remove";
        }
        return React.createElement("span", { className: className });
    };
    return BooleanIcon;
}(React.Component));
manywho.component.register('BooleanIcon', BooleanIcon);
exports.default = BooleanIcon;


/***/ }),

/***/ "./src/DateDDMMMYY.tsx":
/*!*****************************!*\
  !*** ./src/DateDDMMMYY.tsx ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(/*! react */ "react");
var DateDDMMMYY = /** @class */ (function (_super) {
    __extends(DateDDMMMYY, _super);
    function DateDDMMMYY(props) {
        return _super.call(this, props) || this;
    }
    DateDDMMMYY.prototype.componentDidMount = function () {
        this.forceUpdate();
    };
    DateDDMMMYY.prototype.render = function () {
        if (this.props.contentValue) {
            //format the date using React formatter into dt string
            var dt = new Intl.DateTimeFormat('en-GB', {
                year: 'numeric',
                month: 'long',
                day: '2-digit'
            }).format(new Date(this.props.contentValue));
            return React.createElement("span", null, dt);
        }
        else {
            return null;
        }
    };
    return DateDDMMMYY;
}(React.Component));
manywho.component.register('DateDDMMMYY', DateDDMMMYY);
exports.default = DateDDMMMYY;


/***/ }),

/***/ "./src/DateLocale.tsx":
/*!****************************!*\
  !*** ./src/DateLocale.tsx ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(/*! react */ "react");
var DateLocale = /** @class */ (function (_super) {
    __extends(DateLocale, _super);
    function DateLocale(props) {
        return _super.call(this, props) || this;
    }
    DateLocale.prototype.componentDidMount = function () {
        this.forceUpdate();
    };
    DateLocale.prototype.render = function () {
        if (this.props.contentValue) {
            //format the date using React formatter into dt string
            var dt = new Date(this.props.contentValue);
            return React.createElement("span", null, dt.toLocaleDateString());
        }
        else {
            return null;
        }
    };
    return DateLocale;
}(React.Component));
exports.default = DateLocale;
manywho.component.register('DateLocale', DateLocale);


/***/ }),

/***/ "./src/DateTimeDDMMMYYHHMM.tsx":
/*!*************************************!*\
  !*** ./src/DateTimeDDMMMYYHHMM.tsx ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(/*! react */ "react");
var DateTimeDDMMMYYHHMM = /** @class */ (function (_super) {
    __extends(DateTimeDDMMMYYHHMM, _super);
    function DateTimeDDMMMYYHHMM(props) {
        return _super.call(this, props) || this;
    }
    DateTimeDDMMMYYHHMM.prototype.componentDidMount = function () {
        this.forceUpdate();
    };
    DateTimeDDMMMYYHHMM.prototype.render = function () {
        if (this.props.contentValue) {
            //format the date using React formatter into dt string
            var dt = new Intl.DateTimeFormat('en-GB', {
                year: 'numeric',
                month: 'long',
                day: '2-digit',
                hour: '2-digit',
                minute: '2-digit'
            }).format(new Date(this.props.contentValue));
            return React.createElement("span", null, dt);
        }
        else {
            return null;
        }
    };
    return DateTimeDDMMMYYHHMM;
}(React.Component));
manywho.component.register('DateTimeDDMMMYYHHMM', DateTimeDDMMMYYHHMM);
exports.default = DateTimeDDMMMYYHHMM;


/***/ }),

/***/ "./src/DateTimeHelpers.ts":
/*!********************************!*\
  !*** ./src/DateTimeHelpers.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var TimeHelpers = /** @class */ (function () {
    function TimeHelpers() {
    }
    TimeHelpers.getElapsed = function (fromDate, localDate) {
        var elapsed = {
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0
        };
        var fromUTCOffset = fromDate.getTimezoneOffset() * 60000;
        var fromUTC = new Date(fromDate.getTime() - fromUTCOffset);
        //convert localDate to UTC
        var nowUTCOffset = localDate.getTimezoneOffset() * 60000;
        var nowUTC = new Date(localDate.getTime() - nowUTCOffset);
        var diffMillis = Math.round(localDate.getTime() - fromDate.getTime());
        elapsed.days = Math.floor(diffMillis / 86400000);
        diffMillis -= elapsed.days * 86400000;
        elapsed.hours = Math.floor(diffMillis / 3600000);
        diffMillis -= elapsed.hours * 3600000;
        elapsed.minutes = Math.floor(diffMillis / 60000);
        diffMillis -= elapsed.minutes * 60000;
        elapsed.seconds = Math.floor(diffMillis / 1000);
        return elapsed;
    };
    return TimeHelpers;
}());
exports.TimeHelpers = TimeHelpers;


/***/ }),

/***/ "./src/DateTimeLocale.tsx":
/*!********************************!*\
  !*** ./src/DateTimeLocale.tsx ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(/*! react */ "react");
var DateTimeLocale = /** @class */ (function (_super) {
    __extends(DateTimeLocale, _super);
    function DateTimeLocale(props) {
        return _super.call(this, props) || this;
    }
    DateTimeLocale.prototype.componentDidMount = function () {
        this.forceUpdate();
    };
    DateTimeLocale.prototype.render = function () {
        if (this.props.contentValue) {
            //format the date using React formatter into dt string
            var dt = new Date(this.props.contentValue);
            return React.createElement("span", null, dt.toLocaleString());
        }
        else {
            return null;
        }
    };
    return DateTimeLocale;
}(React.Component));
exports.default = DateTimeLocale;
manywho.component.register('DateTimeLocale', DateTimeLocale);


/***/ }),

/***/ "./src/DollarValue.tsx":
/*!*****************************!*\
  !*** ./src/DollarValue.tsx ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(/*! react */ "react");
var DollarValue = /** @class */ (function (_super) {
    __extends(DollarValue, _super);
    function DollarValue(props) {
        return _super.call(this, props) || this;
    }
    DollarValue.prototype.componentDidMount = function () {
        this.forceUpdate();
    };
    DollarValue.prototype.render = function () {
        var value = this.props.contentValue;
        var display = "$" + value;
        return React.createElement("span", null, display);
    };
    return DollarValue;
}(React.Component));
manywho.component.register('DollarValue', DollarValue);
exports.default = DollarValue;


/***/ }),

/***/ "./src/ElapsedTime.tsx":
/*!*****************************!*\
  !*** ./src/ElapsedTime.tsx ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(/*! react */ "react");
var ElapsedTime = /** @class */ (function (_super) {
    __extends(ElapsedTime, _super);
    function ElapsedTime(props) {
        return _super.call(this, props) || this;
    }
    ElapsedTime.prototype.componentDidMount = function () {
        this.forceUpdate();
    };
    ElapsedTime.prototype.render = function () {
        if (this.props.contentValue) {
            var dt = new Date(this.props.contentValue);
            var elapsed = this.elapsedTime(dt);
            return React.createElement("span", null, elapsed);
        }
        else {
            return null;
        }
    };
    ElapsedTime.prototype.elapsedTime = function (fromDate) {
        var nTotalDiff = Math.round((new Date()).getTime() / 1000) - (fromDate.getTime() / 1000);
        if (nTotalDiff >= 0) {
            var oDiff = {};
            oDiff.days = Math.floor(nTotalDiff / 86400);
            nTotalDiff -= oDiff.days * 86400;
            oDiff.hours = Math.floor(nTotalDiff / 3600);
            nTotalDiff -= oDiff.hours * 3600;
            oDiff.minutes = Math.floor(nTotalDiff / 60);
            nTotalDiff -= oDiff.minutes * 60;
            oDiff.seconds = Math.floor(nTotalDiff);
            var result = "";
            if (oDiff.days > 0) {
                result += oDiff.days + " days";
            }
            if (oDiff.hours > 0) {
                if (result.length > 0) {
                    result += ", ";
                }
                result += oDiff.hours + " hours";
            }
            if (oDiff.minutes > 0) {
                if (result.length > 0) {
                    result += ", ";
                }
                result += oDiff.minutes + " minutes";
            }
            if (oDiff.seconds > 0) {
                if (result.length > 0) {
                    result += ", ";
                }
                result += oDiff.seconds + " seconds";
            }
            return result;
        }
        else {
            return "";
        }
    };
    return ElapsedTime;
}(React.Component));
manywho.component.register('ElapsedTime', ElapsedTime);
exports.default = ElapsedTime;


/***/ }),

/***/ "./src/ElapsedTimeFriendly.tsx":
/*!*************************************!*\
  !*** ./src/ElapsedTimeFriendly.tsx ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(/*! react */ "react");
var ElapsedTimeFriendly = /** @class */ (function (_super) {
    __extends(ElapsedTimeFriendly, _super);
    function ElapsedTimeFriendly(props) {
        return _super.call(this, props) || this;
    }
    ElapsedTimeFriendly.prototype.componentDidMount = function () {
        this.forceUpdate();
    };
    ElapsedTimeFriendly.prototype.render = function () {
        if (this.props.contentValue) {
            var dt = new Date(this.props.contentValue);
            var elapsed = this.elapsedTime(dt);
            return React.createElement("span", null, elapsed);
        }
        else {
            return null;
        }
    };
    ElapsedTimeFriendly.prototype.elapsedTime = function (fromDate) {
        var correctedDate = new Date(fromDate.getTime() + (fromDate.getTimezoneOffset() * 60 * 1000));
        var nTotalDiff = Math.round((new Date()).getTime() / 1000) - (correctedDate.getTime() / 1000);
        if (nTotalDiff >= 0) {
            var oDiff = {};
            oDiff.days = Math.floor(nTotalDiff / 86400);
            nTotalDiff -= oDiff.days * 86400;
            oDiff.hours = Math.floor(nTotalDiff / 3600);
            nTotalDiff -= oDiff.hours * 3600;
            oDiff.minutes = Math.floor(nTotalDiff / 60);
            nTotalDiff -= oDiff.minutes * 60;
            oDiff.seconds = Math.floor(nTotalDiff);
            var result = "";
            if (oDiff.days > 0) {
                result += oDiff.days + " days";
            }
            if (oDiff.hours > 0) {
                if (result.length > 0) {
                    result += ", ";
                }
                result += oDiff.hours + " hours";
            }
            if (oDiff.minutes > 0) {
                if (result.length > 0) {
                    result += ", ";
                }
                result += oDiff.minutes + " minutes";
            }
            if (oDiff.seconds > 0) {
                if (result.length > 0) {
                    result += ", ";
                }
                result += oDiff.seconds + " seconds";
            }
            return result;
        }
        else {
            return "";
        }
    };
    return ElapsedTimeFriendly;
}(React.Component));
manywho.component.register('ElapsedTimeFriendly', ElapsedTimeFriendly);
exports.default = ElapsedTimeFriendly;


/***/ }),

/***/ "./src/ElapsedTimeLiveLong.tsx":
/*!*************************************!*\
  !*** ./src/ElapsedTimeLiveLong.tsx ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(/*! react */ "react");
var ElapsedTimeLiveLong = /** @class */ (function (_super) {
    __extends(ElapsedTimeLiveLong, _super);
    function ElapsedTimeLiveLong(props) {
        var _this = _super.call(this, props) || this;
        _this.timerID = -1;
        return _this;
    }
    ElapsedTimeLiveLong.prototype.componentDidMount = function () {
        this.forceUpdate();
        this.timerID = window.setInterval(this.timerEvent.bind(this), 1000);
    };
    ElapsedTimeLiveLong.prototype.componentWillUnmount = function () {
        if (this.timerID >= 0) {
            clearInterval(this.timerID);
            this.timerID = -1;
        }
    };
    ElapsedTimeLiveLong.prototype.timerEvent = function () {
        this.forceUpdate();
    };
    ElapsedTimeLiveLong.prototype.render = function () {
        if (this.props.contentValue) {
            var dt = new Date(this.props.contentValue);
            var elapsed = this.elapsedTime(dt);
            return React.createElement("span", null, elapsed);
        }
        else {
            return null;
        }
    };
    ElapsedTimeLiveLong.prototype.elapsedTime = function (fromDate) {
        var correctedDate = new Date(fromDate.getTime() + (fromDate.getTimezoneOffset() * 60 * 1000));
        var nTotalDiff = Math.round((new Date()).getTime() / 1000) - (correctedDate.getTime() / 1000);
        if (nTotalDiff >= 0) {
            var oDiff = {};
            oDiff.days = Math.floor(nTotalDiff / 86400);
            nTotalDiff -= oDiff.days * 86400;
            oDiff.hours = Math.floor(nTotalDiff / 3600);
            nTotalDiff -= oDiff.hours * 3600;
            oDiff.minutes = Math.floor(nTotalDiff / 60);
            nTotalDiff -= oDiff.minutes * 60;
            oDiff.seconds = Math.floor(nTotalDiff);
            var result = "";
            if (oDiff.days > 0) {
                result += oDiff.days + " days";
            }
            if (oDiff.hours > 0) {
                if (result.length > 0) {
                    result += ", ";
                }
                result += oDiff.hours + " hours";
            }
            if (oDiff.minutes > 0) {
                if (result.length > 0) {
                    result += ", ";
                }
                result += oDiff.minutes + " minutes";
            }
            if (oDiff.seconds > 0) {
                if (result.length > 0) {
                    result += ", ";
                }
                result += oDiff.seconds + " seconds";
            }
            return result;
        }
        else {
            return "";
        }
    };
    return ElapsedTimeLiveLong;
}(React.Component));
manywho.component.register('ElapsedTimeLiveLong', ElapsedTimeLiveLong);
exports.default = ElapsedTimeLiveLong;


/***/ }),

/***/ "./src/ElapsedTimeLiveShort.tsx":
/*!**************************************!*\
  !*** ./src/ElapsedTimeLiveShort.tsx ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(/*! react */ "react");
var DateTimeHelpers_1 = __webpack_require__(/*! ./DateTimeHelpers */ "./src/DateTimeHelpers.ts");
var ElapsedTimeLiveShort = /** @class */ (function (_super) {
    __extends(ElapsedTimeLiveShort, _super);
    function ElapsedTimeLiveShort(props) {
        var _this = _super.call(this, props) || this;
        _this.timerID = -1;
        return _this;
    }
    ElapsedTimeLiveShort.prototype.componentDidMount = function () {
        this.forceUpdate();
        this.timerID = window.setInterval(this.timerEvent.bind(this), 1000);
    };
    ElapsedTimeLiveShort.prototype.componentWillUnmount = function () {
        if (this.timerID >= 0) {
            clearInterval(this.timerID);
            this.timerID = -1;
        }
    };
    ElapsedTimeLiveShort.prototype.timerEvent = function () {
        this.forceUpdate();
    };
    ElapsedTimeLiveShort.prototype.render = function () {
        if (this.props.contentValue) {
            var dt = new Date(this.props.contentValue);
            var elapsed = this.elapsedTime(dt);
            return React.createElement("span", null, elapsed);
        }
        else {
            return null;
        }
    };
    ElapsedTimeLiveShort.prototype.elapsedTime = function (fromDate) {
        var elapsed = DateTimeHelpers_1.TimeHelpers.getElapsed(fromDate, new Date());
        var result = "";
        if (elapsed.days > 0) {
            result += elapsed.days + "d";
        }
        if (elapsed.hours > 0) {
            if (result.length > 0) {
                result += "/";
            }
            result += elapsed.hours + "h";
        }
        if (elapsed.minutes > 0) {
            if (result.length > 0) {
                result += "/";
            }
            result += elapsed.minutes + "m";
        }
        if (elapsed.seconds > 0) {
            if (result.length > 0) {
                result += "/";
            }
            result += elapsed.seconds + "s";
        }
        return result;
    };
    return ElapsedTimeLiveShort;
}(React.Component));
manywho.component.register('ElapsedTimeLiveShort', ElapsedTimeLiveShort);
exports.default = ElapsedTimeLiveShort;


/***/ }),

/***/ "./src/EpochDateDDMMMYY.tsx":
/*!**********************************!*\
  !*** ./src/EpochDateDDMMMYY.tsx ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(/*! react */ "react");
var EpochDateDDMMMYY = /** @class */ (function (_super) {
    __extends(EpochDateDDMMMYY, _super);
    function EpochDateDDMMMYY(props) {
        return _super.call(this, props) || this;
    }
    EpochDateDDMMMYY.prototype.componentDidMount = function () {
        this.forceUpdate();
    };
    EpochDateDDMMMYY.prototype.render = function () {
        if (this.props.contentValue) {
            var secval = this.props.contentValue;
            var seconds = Number.parseInt(this.props.contentValue);
            //handle java epoch with decimal point
            if (secval.indexOf(".") >= 0) {
                seconds = seconds * 1000;
            }
            var ed = new Date(seconds);
            //format the date using React formatter into dt string
            var dt = new Intl.DateTimeFormat('en-GB', {
                year: 'numeric',
                month: 'long',
                day: '2-digit'
            }).format(ed);
            return React.createElement("span", null, dt);
        }
        else {
            return null;
        }
    };
    return EpochDateDDMMMYY;
}(React.Component));
manywho.component.register('EpochDateDDMMMYY', EpochDateDDMMMYY);
exports.default = EpochDateDDMMMYY;


/***/ }),

/***/ "./src/EpochDateTimeDDMMMYYHHMM.tsx":
/*!******************************************!*\
  !*** ./src/EpochDateTimeDDMMMYYHHMM.tsx ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(/*! react */ "react");
var EpochDateTimeDDMMMYYHHMM = /** @class */ (function (_super) {
    __extends(EpochDateTimeDDMMMYYHHMM, _super);
    function EpochDateTimeDDMMMYYHHMM(props) {
        return _super.call(this, props) || this;
    }
    EpochDateTimeDDMMMYYHHMM.prototype.componentDidMount = function () {
        this.forceUpdate();
    };
    EpochDateTimeDDMMMYYHHMM.prototype.render = function () {
        if (this.props.contentValue) {
            var secval = this.props.contentValue;
            var seconds = Number.parseInt(this.props.contentValue);
            //handle java epoch with decimal point
            if (secval.indexOf(".") >= 0) {
                seconds = seconds * 1000;
            }
            var ed = new Date(seconds);
            //format the date using React formatter into dt string
            var dt = new Intl.DateTimeFormat('en-GB', {
                year: 'numeric',
                month: 'long',
                day: '2-digit',
                hour: '2-digit',
                minute: '2-digit'
            }).format(ed);
            return React.createElement("span", null, dt);
        }
        else {
            return null;
        }
    };
    return EpochDateTimeDDMMMYYHHMM;
}(React.Component));
manywho.component.register('EpochDateTimeDDMMMYYHHMM', EpochDateTimeDDMMMYYHHMM);
exports.default = EpochDateTimeDDMMMYYHHMM;


/***/ }),

/***/ "./src/HoverBox.tsx":
/*!**************************!*\
  !*** ./src/HoverBox.tsx ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(/*! react */ "react");
var ReactDom = __webpack_require__(/*! react-dom */ "react-dom");
var HoverBox = /** @class */ (function (_super) {
    __extends(HoverBox, _super);
    function HoverBox(props) {
        var _this = _super.call(this, props) || this;
        _this.isOverButton = false;
        _this.isOverDialog = false;
        _this.hoverBoxShown = false; //change to false
        _this.getParentTableElement = _this.getParentTableElement.bind(_this);
        _this.getParentTableComponentId = _this.getParentTableComponentId.bind(_this);
        _this.getParentRowElement = _this.getParentRowElement.bind(_this);
        _this.overButton = _this.overButton.bind(_this);
        _this.outButton = _this.outButton.bind(_this);
        _this.overDialog = _this.overDialog.bind(_this);
        _this.outDialog = _this.outDialog.bind(_this);
        _this.calcShown = _this.calcShown.bind(_this);
        return _this;
    }
    HoverBox.prototype.componentDidMount = function () {
        this.forceUpdate();
    };
    HoverBox.prototype.getAttributeValue = function (attributes, attributeName) {
        for (var key in attributes) {
            if (key === attributeName) {
                return attributes[key];
            }
        }
        return null;
    };
    HoverBox.prototype.overButton = function () {
        if (this.isOverButton === false) {
            this.isOverButton = true;
            this.calcShown();
        }
    };
    HoverBox.prototype.outButton = function (e) {
        //let element = e.toElement || e.relatedTarget;
        //if (element.parentNode == this || element == this) {
        //   return;
        //}
        if (this.isOverButton === true) {
            this.isOverButton = false;
            this.calcShown();
        }
    };
    HoverBox.prototype.overDialog = function () {
        if (this.isOverDialog === false) {
            this.isOverDialog = true;
            this.calcShown();
        }
    };
    HoverBox.prototype.outDialog = function () {
        if (this.isOverDialog === true) {
            this.isOverDialog = false;
            this.calcShown();
        }
    };
    HoverBox.prototype.calcShown = function () {
        if (this.isOverButton === true || this.isOverDialog === true) {
            if (this.hoverBoxShown === false) {
                this.hoverBoxShown = true;
                this.forceUpdate();
            }
        }
        else {
            if (this.hoverBoxShown === true) {
                this.hoverBoxShown = false;
                this.forceUpdate();
            }
        }
    };
    HoverBox.prototype.render = function () {
        var hoverBox;
        var me = ReactDom.findDOMNode(this);
        var icon;
        var position;
        var value = this.props.contentValue;
        if (me) {
            var tableElement = this.getParentTableElement();
            //const rowElement: HTMLElement = this.getParentRowElement();
            var tdElement = this.getParentTDElement();
            //modify td
            tdElement.style.position = "relative";
            tdElement.style.height = "100%";
            tdElement.style.padding = "0px";
            var tableComponentId = this.getParentTableComponentId(tableElement);
            var table = manywho.model.getComponent(tableComponentId, this.props.flowKey);
            icon = this.getAttributeValue(table.attributes, "hoverboxIcon") || "question-sign";
            position = this.getAttributeValue(table.attributes, "hoverboxPosition") || "left";
            var left = void 0;
            var right = void 0;
            var top_1;
            var bottom = void 0;
            switch (position.toLowerCase()) {
                case "left":
                    right = "calc(100% + 5px)";
                    top_1 = "calc(-50%)";
                    break;
                case "lower-left":
                    right = "calc(100% + 5px)";
                    top_1 = "calc(50% + 5px);";
                    break;
                case "upper-left":
                    right = "calc(100% + 5px)";
                    bottom = "calc(50% + 5px)";
                    break;
                case "above":
                    right = "calc(-50%)";
                    bottom = "calc(100% + 5px)";
                    break;
                case "below":
                    right = "calc(-50%)";
                    top_1 = "calc(100% + 5px)";
                    break;
                case "right":
                    left = "calc(100% + 5px)";
                    top_1 = "calc(-50%)";
                    break;
                case "lower-right":
                    left = "calc(100% + 5px)";
                    top_1 = "calc(50% + 5px);";
                    break;
                case "upper-right":
                    left = "calc(100% + 5px)";
                    bottom = "calc(50% + 5px)";
                    break;
            }
            if (this.hoverBoxShown === true) {
                hoverBox = (React.createElement("div", { className: "hoverbox-dialog", style: {
                        display: "flex",
                        position: "absolute",
                        left: left,
                        right: right,
                        top: top_1,
                        bottom: bottom,
                        backgroundColor: "#fefefe",
                        border: "2px solid #000",
                        borderRadius: "5px",
                        padding: "20px",
                        zIndex: 100
                    }, onMouseEnter: this.overDialog, onMouseLeave: this.outDialog, dangerouslySetInnerHTML: { __html: value } }));
            }
        }
        return (React.createElement("div", { className: "hoverbox", style: {
                position: "absolute",
                width: "100%",
                height: "100%",
                display: "flex",
                flexDirection: "row",
                justifyContent: "center"
            }, onMouseLeave: this.outButton },
            React.createElement("div", { className: "hoverbox-button", style: {
                    position: "relative",
                    backgroundColor: "#43c35f",
                    padding: "10px",
                    borderRadius: "50%",
                    display: "flex",
                    margin: "auto"
                }, onMouseEnter: this.overButton },
                hoverBox,
                React.createElement("span", { className: "glyphicon glyphicon-" + icon + " hoverbox-icon", style: {
                        color: "white",
                        marginLeft: "auto",
                        marginRight: "auto",
                        marginTop: "-2px"
                        //pointerEvents: "none"
                    } }))));
    };
    HoverBox.prototype.getParentTableElement = function () {
        var me = ReactDom.findDOMNode(this);
        var maxLevels = 10;
        var parent = me.parentElement;
        while (!parent.classList.contains("table-container") || maxLevels == 0) {
            parent = parent.parentElement;
            maxLevels--;
        }
        if (maxLevels == 0) {
            return undefined;
        }
        return parent;
    };
    HoverBox.prototype.getParentTDElement = function () {
        var me = ReactDom.findDOMNode(this);
        var maxLevels = 10;
        var parent = me.parentElement;
        while (parent.tagName.toLowerCase() !== "td" || maxLevels == 0) {
            parent = parent.parentElement;
            maxLevels--;
        }
        if (maxLevels == 0) {
            return undefined;
        }
        return parent;
    };
    HoverBox.prototype.getParentRowElement = function () {
        var me = ReactDom.findDOMNode(this);
        var maxLevels = 10;
        var parent = me.parentElement;
        while (parent.tagName.toLowerCase() !== "tr" || maxLevels == 0) {
            parent = parent.parentElement;
            maxLevels--;
        }
        if (maxLevels == 0) {
            return undefined;
        }
        return parent;
    };
    HoverBox.prototype.getParentTableComponentId = function (table) {
        var componentId = table.attributes.getNamedItem('id').value;
        return componentId;
    };
    return HoverBox;
}(React.Component));
manywho.component.register('HoverBox', HoverBox);
exports.default = HoverBox;


/***/ }),

/***/ "./src/Hyperlink.tsx":
/*!***************************!*\
  !*** ./src/Hyperlink.tsx ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(/*! react */ "react");
var Hyperlink = /** @class */ (function (_super) {
    __extends(Hyperlink, _super);
    function Hyperlink(props) {
        return _super.call(this, props) || this;
    }
    Hyperlink.prototype.componentDidMount = function () {
        this.forceUpdate();
    };
    Hyperlink.prototype.render = function () {
        var tooltip = "";
        var value = this.props.contentValue || "";
        var displayValue = value + "%";
        var tooltip = value + "%";
        var linkStyle = {
            "font-family": "tahoma",
            "color": "#ffffff",
            "font-size": "10pt",
            "width": "100%",
            "text-align": "center",
            "position": "absolute",
            "height": "100%",
            "vertical-align": "middle",
            "line-height": "200%",
            "mix-blend-mode": "difference",
        };
        var max = 100;
        var min = 0;
        var pos = 60;
        return React.createElement("div", null,
            React.createElement("a", { href: value, target: "_blank" }, value));
    };
    return Hyperlink;
}(React.Component));
//<Tooltip border="#ffffff" radius="5" placement="right" content={tooltip}></Tooltip>
manywho.component.register('Hyperlink', Hyperlink);
exports.default = Hyperlink;


/***/ }),

/***/ "./src/IntActiveInactive.tsx":
/*!***********************************!*\
  !*** ./src/IntActiveInactive.tsx ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(/*! react */ "react");
var IntActiveInactive = /** @class */ (function (_super) {
    __extends(IntActiveInactive, _super);
    function IntActiveInactive(props) {
        return _super.call(this, props) || this;
    }
    IntActiveInactive.prototype.componentDidMount = function () {
        this.forceUpdate();
    };
    IntActiveInactive.prototype.render = function () {
        var className = "glyphicon glyphicon-";
        var tooltip = "";
        var result;
        switch (this.props.contentValue) {
            case "1":
                result = (React.createElement("span", null, "Active"));
                break;
            case "0":
                result = (React.createElement("span", null, "Inactive"));
                break;
            default:
                result = (React.createElement("span", null));
                break;
        }
        return result;
        ;
    };
    return IntActiveInactive;
}(React.Component));
manywho.component.register('IntActiveInactive', IntActiveInactive);
exports.default = IntActiveInactive;


/***/ }),

/***/ "./src/IntYesNo.tsx":
/*!**************************!*\
  !*** ./src/IntYesNo.tsx ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(/*! react */ "react");
var IntYesNo = /** @class */ (function (_super) {
    __extends(IntYesNo, _super);
    function IntYesNo(props) {
        return _super.call(this, props) || this;
    }
    IntYesNo.prototype.componentDidMount = function () {
        this.forceUpdate();
    };
    IntYesNo.prototype.render = function () {
        var className = "glyphicon glyphicon-";
        var tooltip = "";
        var result;
        switch (this.props.contentValue) {
            case "1":
                result = (React.createElement("span", null, "Yes"));
                break;
            case "0":
                result = (React.createElement("span", null, "No"));
                break;
            default:
                result = (React.createElement("span", null));
                break;
        }
        return result;
        ;
    };
    return IntYesNo;
}(React.Component));
manywho.component.register('IntYesNo', IntYesNo);
exports.default = IntYesNo;


/***/ }),

/***/ "./src/LookupValue.tsx":
/*!*****************************!*\
  !*** ./src/LookupValue.tsx ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(/*! react */ "react");
var ReactDom = __webpack_require__(/*! react-dom */ "react-dom");
//the contentValue will have the lookup value
//
var LookupValue = /** @class */ (function (_super) {
    __extends(LookupValue, _super);
    //myRef : any; 
    //parentId : any;
    function LookupValue(props) {
        return _super.call(this, props) || this;
        //this.myRef = React.createRef();
    }
    LookupValue.prototype.componentDidMount = function () {
        //var me = ReactDom.findDOMNode(this);
        //var parentTable = $(this.myRef.current).closest('table').attr('id');
        this.forceUpdate();
        //this.parentId = $(this.refs.me).closest('table').attr('id')
    };
    LookupValue.prototype.getAttributeValue = function (attributes, attributePrefix, columnId) {
        for (var key in attributes) {
            if (key === attributePrefix + "_" + columnId) {
                return attributes[key];
            }
        }
        return null;
    };
    LookupValue.prototype.getValueFromList = function (list, keyAttribute, resultAttribute, key) {
        var val = "";
        var hit = false;
        for (var iPos = 0; iPos < list.length; iPos++) {
            val = "";
            var item = list[iPos];
            for (var pPos = 0; pPos < item.properties.length; pPos++) {
                var prop = item.properties[pPos];
                if (prop.developerName === resultAttribute) {
                    val = prop.contentValue;
                }
                if (prop.developerName === keyAttribute) {
                    if (prop.contentValue === key) {
                        hit = true;
                    }
                }
            }
            if (hit === true) {
                return val;
            }
        }
        return "";
    };
    LookupValue.prototype.render = function () {
        var me = ReactDom.findDOMNode(this);
        var label = "";
        if (this.props.contentValue && me) {
            //iterate up looking for the element with class .table-container, it will have the table's id value on it
            var maxLevels = 10;
            var parent = me.parentElement;
            while (!parent.classList.contains("table-container") || maxLevels == 0) {
                parent = parent.parentElement;
                maxLevels--;
            }
            if (maxLevels == 0) {
                return "";
            }
            var componentId = parent.attributes.getNamedItem('id').value;
            var table = manywho.model.getComponent(componentId, this.props.flowKey);
            var propertyId = this.props.propertyId;
            var listComponentName = this.getAttributeValue(table.attributes, "LookupListComponent", propertyId);
            var listKeyAtribute = this.getAttributeValue(table.attributes, "LookupListKeyAttribute", propertyId);
            var listResultAttribute = this.getAttributeValue(table.attributes, "LookupListResultAttribute", propertyId);
            if (listComponentName) {
                var list = manywho.model.getComponentByName(listComponentName, this.props.flowKey);
                if (list) {
                    label = this.getValueFromList(list.objectData, listKeyAtribute, listResultAttribute, this.props.contentValue);
                }
            }
        }
        return React.createElement("span", null, label);
    };
    return LookupValue;
}(React.Component));
manywho.component.register('LookupValue', LookupValue);
exports.default = LookupValue;


/***/ }),

/***/ "./src/PercentProgressBar.tsx":
/*!************************************!*\
  !*** ./src/PercentProgressBar.tsx ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(/*! react */ "react");
var PercentProgressBar = /** @class */ (function (_super) {
    __extends(PercentProgressBar, _super);
    function PercentProgressBar(props) {
        return _super.call(this, props) || this;
    }
    PercentProgressBar.prototype.componentDidMount = function () {
        this.forceUpdate();
    };
    PercentProgressBar.prototype.render = function () {
        var className = "glyphicon glyphicon-";
        var tooltip = "";
        var value = parseInt(this.props.contentValue) || 0;
        var displayValue = value + "%";
        var tooltip = value + "%";
        var outerStyle = {
            border: "2px solid #adadad",
            borderRadius: "5px",
            backgroundColor: "#e3e3e3",
            height: "30px",
            boxSizing: "content-box",
            position: "relative",
            display: "grid",
            alignContent: 'middle',
            margin: '0 !important'
        };
        var barStyle = {
            border: "none",
            borderRadius: "4px",
            backgroundColor: "#7D9ACF",
            width: displayValue,
            textAlign: "center",
            height: "100%",
        };
        var captionStyle = {
            fontFamily: "tahoma",
            color: "#ffffff",
            fontSize: "10pt",
            width: "100%",
            textAlign: "center",
            position: "absolute",
            height: "100%",
            verticalAlign: "middle",
            lineHeight: "200%",
            mixBlendMode: "difference",
            left: 0
        };
        var max = 100;
        var min = 0;
        var pos = 60;
        return React.createElement("div", { style: outerStyle },
            React.createElement("div", { role: "progressbar", "aria-valuenow": pos, "aria-valuemin": min, "aria-valuemax": max, style: barStyle },
                React.createElement("span", { style: captionStyle }, displayValue)));
    };
    return PercentProgressBar;
}(React.Component));
//<Tooltip border="#ffffff" radius="5" placement="right" content={tooltip}></Tooltip>
manywho.component.register('PercentProgressBar', PercentProgressBar);
exports.default = PercentProgressBar;


/***/ }),

/***/ "./src/Ranking.css":
/*!*************************!*\
  !*** ./src/Ranking.css ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/Ranking.tsx":
/*!*************************!*\
  !*** ./src/Ranking.tsx ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(/*! react */ "react");
var ReactDom = __webpack_require__(/*! react-dom */ "react-dom");
__webpack_require__(/*! ./Ranking.css */ "./src/Ranking.css");
//the contentValue will have the lookup value
//
var Ranking = /** @class */ (function (_super) {
    __extends(Ranking, _super);
    function Ranking(props) {
        return _super.call(this, props) || this;
        //this.myRef = React.createRef();
    }
    Ranking.prototype.componentDidMount = function () {
        this.getTable = this.getTable.bind(this);
        this.voteUp = this.voteUp.bind(this);
        this.voteDown = this.voteDown.bind(this);
        this.getTable();
        this.forceUpdate();
    };
    Ranking.prototype.getTable = function () {
        var maxLevels = 10;
        var me = ReactDom.findDOMNode(this);
        var parent = me.parentElement;
        while (!parent.classList.contains("table-container") || maxLevels == 0) {
            parent = parent.parentElement;
            maxLevels--;
        }
        if (maxLevels == 0) {
            return "";
        }
        var componentId = parent.attributes.getNamedItem('id').value;
        this.table = manywho.model.getComponent(componentId, this.props.flowKey);
    };
    Ranking.prototype.getTableRow = function (rowId) {
        var row;
        var model = manywho.model.getComponent(this.table.id, this.props.flowKey);
        if (model) {
            model.objectData.forEach(function (rw) {
                if (rw.internalId === rowId) {
                    row = rw;
                }
            });
        }
        return row;
    };
    Ranking.prototype.voteUp = function (e) {
        var onVoteUp = this.getAttributeValue(this.table.attributes, "onVoteUp", "");
        if (onVoteUp.length > 0) {
            var outcome = this.getOutcome(onVoteUp);
            if (outcome) {
                var rowState = this.getTableRow(this.props.id);
                var newState = { "objectData": [rowState] };
                manywho.state.setComponent(this.table.id, newState, this.props.flowKey, true);
                manywho.component.onOutcome(outcome, null, this.props.flowKey);
            }
        }
    };
    Ranking.prototype.voteDown = function (e) {
        var onVoteDown = this.getAttributeValue(this.table.attributes, "onVoteUp", "");
        if (onVoteDown.length > 0) {
            var outcome = this.getOutcome(onVoteDown);
            if (outcome) {
                //manywho.component.onOutcome(outcome,null,this.props.flowKey);
                var rowState = this.getTableRow(this.props.id);
            }
        }
    };
    Ranking.prototype.getAttributeValue = function (attributes, attribute, defaultValue) {
        if (attributes[attribute]) {
            return attributes[attribute];
        }
        else {
            return defaultValue;
        }
    };
    Ranking.prototype.getOutcome = function (outcomeName) {
        var outcome;
        var outcomes = manywho.model.getOutcomes(this.table.id, this.props.flowKey);
        outcomes.forEach(function (oc) {
            if (oc.developerName === outcomeName) {
                outcome = oc;
            }
        });
        outcomes = manywho.model.getOutcomes(null, this.props.flowKey);
        outcomes.forEach(function (oc) {
            if (oc.developerName === outcomeName) {
                outcome = oc;
            }
        });
        return outcome;
    };
    Ranking.prototype.render = function () {
        var currentVotes = parseInt(this.props.contentValue);
        return (React.createElement("div", { className: "ranking" },
            React.createElement("span", { className: "ranking-label" }, currentVotes)));
    };
    return Ranking;
}(React.Component));
manywho.component.register('Ranking', Ranking);
exports.default = Ranking;


/***/ }),

/***/ "./src/StatusIcon.tsx":
/*!****************************!*\
  !*** ./src/StatusIcon.tsx ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(/*! react */ "react");
var StatusIcon = /** @class */ (function (_super) {
    __extends(StatusIcon, _super);
    function StatusIcon(props) {
        return _super.call(this, props) || this;
    }
    StatusIcon.prototype.componentDidMount = function () {
        this.forceUpdate();
    };
    StatusIcon.prototype.render = function () {
        var className = "glyphicon glyphicon-";
        var tooltip = "";
        var result;
        switch (this.props.contentValue.toLowerCase()) {
            case "s":
                result = (React.createElement("span", { className: "glyphicon glyphicon-hourglass", title: "Staged" }));
                break;
            case "c":
                result = (React.createElement("span", { className: "glyphicon glyphicon-ok", title: "Complete" }));
                break;
            case "a":
                result = (React.createElement("span", { className: "glyphicon glyphicon-flash", title: "Active" }));
                break;
            case "complete":
                result = (React.createElement("img", { className: "tcf-image", src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAd0lEQVR42mNggAKlMIYGpVCG/ygYKMaADGASBkUs/13mcIExiA0TRzHJaQYnVgw3GcTQy2P+bz+JAysGyYFNBRHWXex4MVyheTMrXgxXqJnK+N+4mhkrBslBFEI9o1/MhBWjBBMsGNTiGf7r5DKCMYiNEjzEBjgAU8qK7Su1nYwAAAAASUVORK5CYII=", title: "Complete" }));
                break;
            case "error":
                result = (React.createElement("img", { className: "tcf-image", src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAZ0lEQVR42mNggIICGYmGzVwM/5ExSIwBGcAkXilzoGCYOIpJzxTZsWK4ySDGYwV2vBhsKoi4J8cGxugAJg5XeEuGFYzRAUwcrvCqJCteDFYI88x5cRasGCWYYMFwRIgJBaMED7EBDgCQirDFSBNkJAAAAABJRU5ErkJggg==", title: "Complete" }));
                break;
            default:
                result = (React.createElement("span", { className: "glyphicon glyphicon-option-horizontal", title: "Not Set" }));
                break;
        }
        return result;
        ;
    };
    return StatusIcon;
}(React.Component));
manywho.component.register('StatusIcon', StatusIcon);
exports.default = StatusIcon;


/***/ }),

/***/ "./src/TableRowStyler.tsx":
/*!********************************!*\
  !*** ./src/TableRowStyler.tsx ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(/*! react */ "react");
var ReactDom = __webpack_require__(/*! react-dom */ "react-dom");
var TableRowStyler = /** @class */ (function (_super) {
    __extends(TableRowStyler, _super);
    function TableRowStyler(props) {
        var _this = _super.call(this, props) || this;
        _this.getParentTableElement = _this.getParentTableElement.bind(_this);
        _this.getParentTableComponentId = _this.getParentTableComponentId.bind(_this);
        _this.getParentRowElement = _this.getParentRowElement.bind(_this);
        return _this;
    }
    TableRowStyler.prototype.componentDidMount = function () {
        this.forceUpdate();
    };
    TableRowStyler.prototype.getAttributeValue = function (attributes, attributeName) {
        for (var key in attributes) {
            if (key === attributeName) {
                return attributes[key];
            }
        }
        return null;
    };
    TableRowStyler.prototype.render = function () {
        var me = ReactDom.findDOMNode(this);
        var value = this.props.contentValue;
        if (me) {
            var tableElement = this.getParentTableElement();
            var rowElement = this.getParentRowElement();
            var tableComponentId = this.getParentTableComponentId(tableElement);
            var table = manywho.model.getComponent(tableComponentId, this.props.flowKey);
            var argstr = this.getAttributeValue(table.attributes, "trfConfig");
            var args = JSON.parse(argstr);
            console.log(args);
            if (args[value]) {
                rowElement.classList.add(args[value]);
            }
        }
        return React.createElement("span", null, value);
    };
    TableRowStyler.prototype.getParentTableElement = function () {
        var me = ReactDom.findDOMNode(this);
        var maxLevels = 10;
        var parent = me.parentElement;
        while (!parent.classList.contains("table-container") || maxLevels == 0) {
            parent = parent.parentElement;
            maxLevels--;
        }
        if (maxLevels == 0) {
            return undefined;
        }
        return parent;
    };
    TableRowStyler.prototype.getParentRowElement = function () {
        var me = ReactDom.findDOMNode(this);
        var maxLevels = 10;
        var parent = me.parentElement;
        while (parent.tagName.toLowerCase() !== "tr" || maxLevels == 0) {
            parent = parent.parentElement;
            maxLevels--;
        }
        if (maxLevels == 0) {
            return undefined;
        }
        return parent;
    };
    TableRowStyler.prototype.getParentTableComponentId = function (table) {
        var componentId = table.attributes.getNamedItem('id').value;
        return componentId;
    };
    return TableRowStyler;
}(React.Component));
manywho.component.register('TableRowStyler', TableRowStyler);
exports.default = TableRowStyler;


/***/ }),

/***/ "./src/Thumbnail.tsx":
/*!***************************!*\
  !*** ./src/Thumbnail.tsx ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(/*! react */ "react");
var ReactDom = __webpack_require__(/*! react-dom */ "react-dom");
var Thumbnail = /** @class */ (function (_super) {
    __extends(Thumbnail, _super);
    function Thumbnail(props) {
        return _super.call(this, props) || this;
    }
    Thumbnail.prototype.componentDidMount = function () {
        this.forceUpdate();
    };
    Thumbnail.prototype.render = function () {
        var me = ReactDom.findDOMNode(this);
        var contentValue;
        var width;
        if (me) {
            var parent = me.parentElement;
            var maxLevels = 10;
            while (!parent.classList.contains("table-container") || maxLevels == 0) {
                parent = parent.parentElement;
                maxLevels--;
            }
            if (maxLevels == 0) {
                return "";
            }
            var componentId = parent.attributes.getNamedItem('id').value;
            var table = manywho.model.getComponent(componentId, this.props.flowKey);
            var propertyId = this.props.propertyId;
            contentValue = this.props.contentValue || "";
            width = table.attributes["image-scaled-width"] || 50;
        }
        var outerStyle = {
            boxSizing: "content-box",
            position: "relative",
            display: "table-cell",
            alignContent: 'middle',
            margin: '0 !important'
        };
        if (contentValue) {
            var src = "";
            return (React.createElement("div", { style: outerStyle },
                React.createElement("img", { src: contentValue, style: { marginLeft: 'auto', marginRight: 'auto', height: '150px', width: "auto" } })));
        }
        else {
            return (React.createElement("div", null));
        }
    };
    return Thumbnail;
}(React.Component));
manywho.component.register('Thumbnail', Thumbnail);
exports.default = Thumbnail;


/***/ }),

/***/ "./src/VoteUp.css":
/*!************************!*\
  !*** ./src/VoteUp.css ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/VoteUp.tsx":
/*!************************!*\
  !*** ./src/VoteUp.tsx ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(/*! react */ "react");
var ReactDom = __webpack_require__(/*! react-dom */ "react-dom");
__webpack_require__(/*! ./VoteUp.css */ "./src/VoteUp.css");
//the contentValue will have the lookup value
//
var VoteUp = /** @class */ (function (_super) {
    __extends(VoteUp, _super);
    function VoteUp(props) {
        return _super.call(this, props) || this;
        //this.myRef = React.createRef();
    }
    VoteUp.prototype.componentDidMount = function () {
        this.getTable = this.getTable.bind(this);
        this.voteUp = this.voteUp.bind(this);
        this.voteDown = this.voteDown.bind(this);
        this.getTable();
        this.forceUpdate();
    };
    VoteUp.prototype.getTable = function () {
        var maxLevels = 10;
        var me = ReactDom.findDOMNode(this);
        var parent = me.parentElement;
        while (!parent.classList.contains("table-container") || maxLevels == 0) {
            parent = parent.parentElement;
            maxLevels--;
        }
        if (maxLevels == 0) {
            return "";
        }
        var componentId = parent.attributes.getNamedItem('id').value;
        this.table = manywho.model.getComponent(componentId, this.props.flowKey);
    };
    VoteUp.prototype.getTableRow = function (rowId) {
        var row;
        var model = manywho.model.getComponent(this.table.id, this.props.flowKey);
        if (model) {
            model.objectData.forEach(function (rw) {
                if (rw.internalId === rowId) {
                    row = rw;
                }
            });
        }
        return row;
    };
    VoteUp.prototype.voteUp = function (e) {
        var onVoteUp = this.getAttributeValue(this.table.attributes, "onVoteUp", "");
        if (onVoteUp.length > 0) {
            var outcome = this.getOutcome(onVoteUp);
            if (outcome) {
                var rowState = this.getTableRow(this.props.id);
                var newState = { "objectData": [rowState] };
                manywho.state.setComponent(this.table.id, newState, this.props.flowKey, true);
                manywho.component.onOutcome(outcome, null, this.props.flowKey);
            }
        }
    };
    VoteUp.prototype.voteDown = function (e) {
        var onVoteDown = this.getAttributeValue(this.table.attributes, "onVoteDown", "");
        if (onVoteDown.length > 0) {
            var outcome = this.getOutcome(onVoteDown);
            if (outcome) {
                var rowState = this.getTableRow(this.props.id);
                var newState = { "objectData": [rowState] };
                manywho.state.setComponent(this.table.id, newState, this.props.flowKey, true);
                manywho.component.onOutcome(outcome, null, this.props.flowKey);
            }
        }
    };
    VoteUp.prototype.getAttributeValue = function (attributes, attribute, defaultValue) {
        if (attributes[attribute]) {
            return attributes[attribute];
        }
        else {
            return defaultValue;
        }
    };
    VoteUp.prototype.getOutcome = function (outcomeName) {
        var outcome;
        var outcomes = manywho.model.getOutcomes(this.table.id, this.props.flowKey);
        outcomes.forEach(function (oc) {
            if (oc.developerName === outcomeName) {
                outcome = oc;
            }
        });
        outcomes = manywho.model.getOutcomes(null, this.props.flowKey);
        outcomes.forEach(function (oc) {
            if (oc.developerName === outcomeName) {
                outcome = oc;
            }
        });
        return outcome;
    };
    VoteUp.prototype.render = function () {
        var currentVotes = parseInt(this.props.contentValue);
        return (React.createElement("div", { className: "voteup" },
            React.createElement("div", { className: "voteup-element" },
                React.createElement("span", { className: "glyphicon glyphicon-triangle-top voteup-button", title: "Vote App Up", onClick: this.voteUp })),
            React.createElement("div", { className: "voteup-element" },
                React.createElement("span", { className: "voteup-label" }, currentVotes)),
            React.createElement("div", { className: "voteup-element" },
                React.createElement("span", { className: "glyphicon glyphicon-triangle-bottom voteup-button", title: "Vote App Down", onClick: this.voteDown }))));
    };
    return VoteUp;
}(React.Component));
manywho.component.register('VoteUp', VoteUp);
exports.default = VoteUp;


/***/ }),

/***/ "./src/index.tsx":
/*!***********************!*\
  !*** ./src/index.tsx ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./ElapsedTimeFriendly */ "./src/ElapsedTimeFriendly.tsx"));
__export(__webpack_require__(/*! ./ElapsedTimeLiveLong */ "./src/ElapsedTimeLiveLong.tsx"));
__export(__webpack_require__(/*! ./ElapsedTimeLiveShort */ "./src/ElapsedTimeLiveShort.tsx"));
__export(__webpack_require__(/*! ./ElapsedTime */ "./src/ElapsedTime.tsx"));
__export(__webpack_require__(/*! ./DateDDMMMYY */ "./src/DateDDMMMYY.tsx"));
__export(__webpack_require__(/*! ./DateTimeDDMMMYYHHMM */ "./src/DateTimeDDMMMYYHHMM.tsx"));
__export(__webpack_require__(/*! ./BooleanIcon */ "./src/BooleanIcon.tsx"));
__export(__webpack_require__(/*! ./StatusIcon */ "./src/StatusIcon.tsx"));
__export(__webpack_require__(/*! ./LookupValue */ "./src/LookupValue.tsx"));
__export(__webpack_require__(/*! ./EpochDateDDMMMYY */ "./src/EpochDateDDMMMYY.tsx"));
__export(__webpack_require__(/*! ./EpochDateTimeDDMMMYYHHMM */ "./src/EpochDateTimeDDMMMYYHHMM.tsx"));
__export(__webpack_require__(/*! ./PercentProgressBar */ "./src/PercentProgressBar.tsx"));
__export(__webpack_require__(/*! ./Hyperlink */ "./src/Hyperlink.tsx"));
__export(__webpack_require__(/*! ./Thumbnail */ "./src/Thumbnail.tsx"));
__export(__webpack_require__(/*! ./DollarValue */ "./src/DollarValue.tsx"));
__export(__webpack_require__(/*! ./TableRowStyler */ "./src/TableRowStyler.tsx"));
__export(__webpack_require__(/*! ./HoverBox */ "./src/HoverBox.tsx"));
__export(__webpack_require__(/*! ./VoteUp */ "./src/VoteUp.tsx"));
__export(__webpack_require__(/*! ./Ranking */ "./src/Ranking.tsx"));
__export(__webpack_require__(/*! ./IntYesNo */ "./src/IntYesNo.tsx"));
__export(__webpack_require__(/*! ./IntActiveInactive */ "./src/IntActiveInactive.tsx"));
__export(__webpack_require__(/*! ./DateLocale */ "./src/DateLocale.tsx"));
__export(__webpack_require__(/*! ./DateTimeLocale */ "./src/DateTimeLocale.tsx"));


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = React;

/***/ }),

/***/ "react-dom":
/*!***************************!*\
  !*** external "ReactDOM" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ReactDOM;

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL0Jvb2xlYW5JY29uLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvRGF0ZURETU1NWVkudHN4Iiwid2VicGFjazovLy8uL3NyYy9EYXRlTG9jYWxlLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvRGF0ZVRpbWVERE1NTVlZSEhNTS50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL0RhdGVUaW1lSGVscGVycy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvRGF0ZVRpbWVMb2NhbGUudHN4Iiwid2VicGFjazovLy8uL3NyYy9Eb2xsYXJWYWx1ZS50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL0VsYXBzZWRUaW1lLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvRWxhcHNlZFRpbWVGcmllbmRseS50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL0VsYXBzZWRUaW1lTGl2ZUxvbmcudHN4Iiwid2VicGFjazovLy8uL3NyYy9FbGFwc2VkVGltZUxpdmVTaG9ydC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL0Vwb2NoRGF0ZURETU1NWVkudHN4Iiwid2VicGFjazovLy8uL3NyYy9FcG9jaERhdGVUaW1lRERNTU1ZWUhITU0udHN4Iiwid2VicGFjazovLy8uL3NyYy9Ib3ZlckJveC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL0h5cGVybGluay50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL0ludEFjdGl2ZUluYWN0aXZlLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvSW50WWVzTm8udHN4Iiwid2VicGFjazovLy8uL3NyYy9Mb29rdXBWYWx1ZS50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL1BlcmNlbnRQcm9ncmVzc0Jhci50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL1JhbmtpbmcuY3NzP2NmZDAiLCJ3ZWJwYWNrOi8vLy4vc3JjL1JhbmtpbmcudHN4Iiwid2VicGFjazovLy8uL3NyYy9TdGF0dXNJY29uLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvVGFibGVSb3dTdHlsZXIudHN4Iiwid2VicGFjazovLy8uL3NyYy9UaHVtYm5haWwudHN4Iiwid2VicGFjazovLy8uL3NyYy9Wb3RlVXAuY3NzP2ZlMDkiLCJ3ZWJwYWNrOi8vLy4vc3JjL1ZvdGVVcC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LnRzeCIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJSZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIlJlYWN0RE9NXCIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hGQSxzREFBK0I7QUFFL0I7SUFBMEIsK0JBQXlCO0lBRS9DLHFCQUFZLEtBQVc7ZUFFbkIsa0JBQU0sS0FBSyxDQUFDO0lBQ2hCLENBQUM7SUFFRCx1Q0FBaUIsR0FBakI7UUFFSSxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDdkIsQ0FBQztJQUVKLDRCQUFNLEdBQU47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QyxTQUFTLEdBaUpuQztBQUVELE9BQU8sQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRSxNQUFNLENBQUMsQ0FBQztBQUU3QyxrQkFBZSxNQUFNLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzdKdEIsNEZBQXNDO0FBQ3RDLDRGQUFzQztBQUN0Qyw4RkFBdUM7QUFDdkMsNEVBQThCO0FBQzlCLDRFQUE4QjtBQUM5Qiw0RkFBc0M7QUFDdEMsNEVBQThCO0FBQzlCLDBFQUE2QjtBQUM3Qiw0RUFBOEI7QUFDOUIsc0ZBQW1DO0FBQ25DLHNHQUEyQztBQUMzQywwRkFBcUM7QUFDckMsd0VBQTRCO0FBQzVCLHdFQUE0QjtBQUM1Qiw0RUFBOEI7QUFDOUIsa0ZBQWlDO0FBQ2pDLHNFQUEyQjtBQUMzQixrRUFBeUI7QUFDekIsb0VBQTBCO0FBQzFCLHNFQUEyQjtBQUMzQix3RkFBb0M7QUFDcEMsMEVBQTZCO0FBQzdCLGtGQUFpQzs7Ozs7Ozs7Ozs7O0FDdEJqQyx1Qjs7Ozs7Ozs7Ozs7QUNBQSwwQiIsImZpbGUiOiJDb2x1bW5Db250cm9scy5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LnRzeFwiKTtcbiIsImRlY2xhcmUgdmFyIG1hbnl3aG86IGFueTtcclxuXHJcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbmNsYXNzIEJvb2xlYW5JY29uIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PGFueSwgYW55PiBcclxueyAgIFxyXG4gICAgY29uc3RydWN0b3IocHJvcHMgOiBhbnkpXHJcblx0e1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgIH1cclxuXHJcbiAgICBjb21wb25lbnREaWRNb3VudCgpIFxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuZm9yY2VVcGRhdGUoKTtcclxuICAgIH1cclxuXHJcblx0cmVuZGVyKClcclxuXHR7XHJcblx0ICAgdmFyIGNsYXNzTmFtZSA6IGFueSA9IFwiZ2x5cGhpY29uIGdseXBoaWNvbi1cIjtcclxuICAgICAgICBpZih0aGlzLnByb3BzLmNvbnRlbnRWYWx1ZSA9PT0gXCJ0cnVlXCIpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBjbGFzc05hbWUgKz0gXCJva1wiO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBjbGFzc05hbWUgKz0gXCJyZW1vdmVcIjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiA8c3BhbiBjbGFzc05hbWU9e2NsYXNzTmFtZX0+PC9zcGFuPjtcclxuICAgIH1cclxufVxyXG5cclxubWFueXdoby5jb21wb25lbnQucmVnaXN0ZXIoJ0Jvb2xlYW5JY29uJywgQm9vbGVhbkljb24pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQm9vbGVhbkljb247IiwiZGVjbGFyZSB2YXIgbWFueXdobzogYW55O1xyXG5cclxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuY2xhc3MgRGF0ZURETU1NWVkgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8YW55LCBhbnk+IFxyXG57ICAgXHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcyA6IGFueSlcclxuXHR7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbXBvbmVudERpZE1vdW50KCkgXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5mb3JjZVVwZGF0ZSgpO1xyXG4gICAgfVxyXG5cclxuXHRyZW5kZXIoKVxyXG5cdHtcclxuXHQgICBcclxuICAgICAgICBpZih0aGlzLnByb3BzLmNvbnRlbnRWYWx1ZSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIC8vZm9ybWF0IHRoZSBkYXRlIHVzaW5nIFJlYWN0IGZvcm1hdHRlciBpbnRvIGR0IHN0cmluZ1xyXG4gICAgICAgICAgICB2YXIgZHQgPSBuZXcgSW50bC5EYXRlVGltZUZvcm1hdCgnZW4tR0InLCB7ICAgXHJcbiAgICAgICAgICAgICAgICB5ZWFyOiAnbnVtZXJpYycsIFxyXG4gICAgICAgICAgICAgICAgbW9udGg6ICdsb25nJywgXHJcbiAgICAgICAgICAgICAgICBkYXk6ICcyLWRpZ2l0JyBcclxuICAgICAgICAgICAgfSkuZm9ybWF0KG5ldyBEYXRlKHRoaXMucHJvcHMuY29udGVudFZhbHVlKSk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICByZXR1cm4gPHNwYW4+e2R0fTwvc3Bhbj47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2VcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxubWFueXdoby5jb21wb25lbnQucmVnaXN0ZXIoJ0RhdGVERE1NTVlZJywgRGF0ZURETU1NWVkpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRGF0ZURETU1NWVk7IiwiZGVjbGFyZSB2YXIgbWFueXdobzogYW55O1xyXG5cclxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGF0ZUxvY2FsZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxhbnksIGFueT4gXHJcbnsgICBcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzIDogYW55KVxyXG5cdHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICB9XHJcblxyXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSBcclxuICAgIHtcclxuICAgICAgICB0aGlzLmZvcmNlVXBkYXRlKCk7XHJcbiAgICB9XHJcblxyXG5cdHJlbmRlcigpXHJcblx0e1xyXG5cdCAgIFxyXG4gICAgICAgIGlmKHRoaXMucHJvcHMuY29udGVudFZhbHVlKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgLy9mb3JtYXQgdGhlIGRhdGUgdXNpbmcgUmVhY3QgZm9ybWF0dGVyIGludG8gZHQgc3RyaW5nXHJcbiAgICAgICAgICAgIHZhciBkdCA9IG5ldyBEYXRlKHRoaXMucHJvcHMuY29udGVudFZhbHVlKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHJldHVybiA8c3Bhbj57ZHQudG9Mb2NhbGVEYXRlU3RyaW5nKCl9PC9zcGFuPjtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5tYW55d2hvLmNvbXBvbmVudC5yZWdpc3RlcignRGF0ZUxvY2FsZScsIERhdGVMb2NhbGUpO1xyXG4iLCJkZWNsYXJlIHZhciBtYW55d2hvOiBhbnk7XHJcblxyXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5jbGFzcyBEYXRlVGltZURETU1NWVlISE1NIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PGFueSwgYW55PiBcclxueyAgIFxyXG4gICAgY29uc3RydWN0b3IocHJvcHMgOiBhbnkpXHJcblx0e1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgIH1cclxuXHJcbiAgICBjb21wb25lbnREaWRNb3VudCgpIFxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuZm9yY2VVcGRhdGUoKTtcclxuICAgIH1cclxuXHJcblx0cmVuZGVyKClcclxuXHR7XHJcblx0ICAgXHJcbiAgICAgICAgaWYodGhpcy5wcm9wcy5jb250ZW50VmFsdWUpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICAvL2Zvcm1hdCB0aGUgZGF0ZSB1c2luZyBSZWFjdCBmb3JtYXR0ZXIgaW50byBkdCBzdHJpbmdcclxuICAgICAgICAgICAgdmFyIGR0ID0gbmV3IEludGwuRGF0ZVRpbWVGb3JtYXQoJ2VuLUdCJywgeyAgIFxyXG4gICAgICAgICAgICAgICAgeWVhcjogJ251bWVyaWMnLCBcclxuICAgICAgICAgICAgICAgIG1vbnRoOiAnbG9uZycsIFxyXG4gICAgICAgICAgICAgICAgZGF5OiAnMi1kaWdpdCcsXHJcbiAgICAgICAgICAgICAgICBob3VyOiAnMi1kaWdpdCcsXHJcbiAgICAgICAgICAgICAgICBtaW51dGU6ICcyLWRpZ2l0J1xyXG4gICAgICAgICAgICB9KS5mb3JtYXQobmV3IERhdGUodGhpcy5wcm9wcy5jb250ZW50VmFsdWUpKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHJldHVybiA8c3Bhbj57ZHR9PC9zcGFuPjtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5tYW55d2hvLmNvbXBvbmVudC5yZWdpc3RlcignRGF0ZVRpbWVERE1NTVlZSEhNTScsIERhdGVUaW1lRERNTU1ZWUhITU0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRGF0ZVRpbWVERE1NTVlZSEhNTTsiLCJleHBvcnQgaW50ZXJmYWNlIGlFbGFwc2VkXHJcbntcclxuICAgIGRheXMgOiBudW1iZXIsXHJcbiAgICBob3VycyA6IG51bWJlcixcclxuICAgIG1pbnV0ZXM6IG51bWJlcixcclxuICAgIHNlY29uZHM6IG51bWJlclxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgVGltZUhlbHBlcnNcclxue1xyXG4gICAgc3RhdGljIGdldEVsYXBzZWQoZnJvbURhdGUgOiBEYXRlLCBsb2NhbERhdGUgOiBEYXRlKSA6IGlFbGFwc2VkXHJcbiAgICB7XHJcbiAgICAgICAgbGV0IGVsYXBzZWQgOiBpRWxhcHNlZCA9IHtcclxuICAgICAgICAgICAgZGF5czogMCxcclxuICAgICAgICAgICAgaG91cnM6IDAsXHJcbiAgICAgICAgICAgIG1pbnV0ZXM6IDAsXHJcbiAgICAgICAgICAgIHNlY29uZHM6IDBcclxuICAgICAgICB9O1xyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnN0IGZyb21VVENPZmZzZXQgPSBmcm9tRGF0ZS5nZXRUaW1lem9uZU9mZnNldCgpICogNjAwMDA7XHJcbiAgICAgICAgY29uc3QgZnJvbVVUQyA6IERhdGUgPSBuZXcgRGF0ZShmcm9tRGF0ZS5nZXRUaW1lKCkgLSBmcm9tVVRDT2Zmc2V0KTtcclxuICAgIFxyXG4gICAgICAgIC8vY29udmVydCBsb2NhbERhdGUgdG8gVVRDXHJcbiAgICAgICAgY29uc3Qgbm93VVRDT2Zmc2V0ID0gbG9jYWxEYXRlLmdldFRpbWV6b25lT2Zmc2V0KCkgKiA2MDAwMDtcclxuICAgICAgICBjb25zdCBub3dVVEMgOiBEYXRlID0gbmV3IERhdGUobG9jYWxEYXRlLmdldFRpbWUoKSAtIG5vd1VUQ09mZnNldCk7XHJcbiAgICBcclxuICAgICAgICBsZXQgZGlmZk1pbGxpcyA9IE1hdGgucm91bmQobG9jYWxEYXRlLmdldFRpbWUoKSAtIGZyb21EYXRlLmdldFRpbWUoKSk7XHJcblxyXG4gICAgICAgIFxyXG4gICAgICAgIGVsYXBzZWQuZGF5cyA9IE1hdGguZmxvb3IoZGlmZk1pbGxpcyAvIDg2NDAwMDAwKTtcclxuICAgICAgICBkaWZmTWlsbGlzIC09IGVsYXBzZWQuZGF5cyAqIDg2NDAwMDAwO1xyXG4gICAgICAgIGVsYXBzZWQuaG91cnMgPSBNYXRoLmZsb29yKGRpZmZNaWxsaXMgLyAzNjAwMDAwKTtcclxuICAgICAgICBkaWZmTWlsbGlzIC09IGVsYXBzZWQuaG91cnMgKiAzNjAwMDAwO1xyXG4gICAgICAgIGVsYXBzZWQubWludXRlcyA9IE1hdGguZmxvb3IoZGlmZk1pbGxpcyAvIDYwMDAwKTtcclxuICAgICAgICBkaWZmTWlsbGlzIC09IGVsYXBzZWQubWludXRlcyAqIDYwMDAwO1xyXG4gICAgICAgIGVsYXBzZWQuc2Vjb25kcyA9IE1hdGguZmxvb3IoZGlmZk1pbGxpcyAvIDEwMDApO1xyXG4gICAgICBcclxuICAgICAgICByZXR1cm4gZWxhcHNlZFxyXG4gICAgfVxyXG5cclxufVxyXG4iLCJkZWNsYXJlIHZhciBtYW55d2hvOiBhbnk7XHJcblxyXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEYXRlVGltZUxvY2FsZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxhbnksIGFueT4gXHJcbnsgICBcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzIDogYW55KVxyXG5cdHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICB9XHJcblxyXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSBcclxuICAgIHtcclxuICAgICAgICB0aGlzLmZvcmNlVXBkYXRlKCk7XHJcbiAgICB9XHJcblxyXG5cdHJlbmRlcigpXHJcblx0e1xyXG5cdCAgIFxyXG4gICAgICAgIGlmKHRoaXMucHJvcHMuY29udGVudFZhbHVlKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgLy9mb3JtYXQgdGhlIGRhdGUgdXNpbmcgUmVhY3QgZm9ybWF0dGVyIGludG8gZHQgc3RyaW5nXHJcbiAgICAgICAgICAgIHZhciBkdCA9IG5ldyBEYXRlKHRoaXMucHJvcHMuY29udGVudFZhbHVlKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHJldHVybiA8c3Bhbj57ZHQudG9Mb2NhbGVTdHJpbmcoKX08L3NwYW4+O1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbm1hbnl3aG8uY29tcG9uZW50LnJlZ2lzdGVyKCdEYXRlVGltZUxvY2FsZScsIERhdGVUaW1lTG9jYWxlKTtcclxuIiwiZGVjbGFyZSB2YXIgbWFueXdobzogYW55O1xyXG5cclxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuY2xhc3MgRG9sbGFyVmFsdWUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8YW55LCBhbnk+IFxyXG57ICAgXHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcyA6IGFueSlcclxuXHR7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbXBvbmVudERpZE1vdW50KCkgXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5mb3JjZVVwZGF0ZSgpO1xyXG4gICAgfVxyXG5cclxuXHRyZW5kZXIoKVxyXG5cdHtcclxuICAgICAgICBjb25zdCB2YWx1ZTogbnVtYmVyID0gdGhpcy5wcm9wcy5jb250ZW50VmFsdWU7XHJcbiAgICAgICAgY29uc3QgZGlzcGxheTogc3RyaW5nID0gXCIkXCIgKyB2YWx1ZTtcclxuICAgICAgICByZXR1cm4gPHNwYW4+e2Rpc3BsYXl9PC9zcGFuPjtcclxuICAgIH1cclxufVxyXG5cclxubWFueXdoby5jb21wb25lbnQucmVnaXN0ZXIoJ0RvbGxhclZhbHVlJywgRG9sbGFyVmFsdWUpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRG9sbGFyVmFsdWU7IiwiZGVjbGFyZSB2YXIgbWFueXdobzogYW55O1xyXG5cclxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuY2xhc3MgRWxhcHNlZFRpbWUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8YW55LCBhbnk+IFxyXG57ICAgXHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcyA6IGFueSlcclxuXHR7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbXBvbmVudERpZE1vdW50KCkgXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5mb3JjZVVwZGF0ZSgpO1xyXG4gICAgfVxyXG5cclxuXHRyZW5kZXIoKVxyXG5cdHtcclxuXHQgICBcclxuICAgICAgICBpZih0aGlzLnByb3BzLmNvbnRlbnRWYWx1ZSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHZhciBkdCA9IG5ldyBEYXRlKHRoaXMucHJvcHMuY29udGVudFZhbHVlKVxyXG4gICAgICAgICAgICB2YXIgZWxhcHNlZCA9IHRoaXMuZWxhcHNlZFRpbWUoZHQpO1xyXG4gICAgICAgICAgICByZXR1cm4gPHNwYW4+e2VsYXBzZWR9PC9zcGFuPjtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG4gIH1cclxuXHJcbiAgZWxhcHNlZFRpbWUgKGZyb21EYXRlIDogRGF0ZSkgXHJcbiAge1xyXG4gICAgdmFyIG5Ub3RhbERpZmYgPSBNYXRoLnJvdW5kKChuZXcgRGF0ZSgpKS5nZXRUaW1lKCkgLyAxMDAwKSAtIChmcm9tRGF0ZS5nZXRUaW1lKCkgLyAxMDAwKTtcclxuICAgIGlmIChuVG90YWxEaWZmID49IDApIFxyXG4gICAge1xyXG4gICAgICB2YXIgb0RpZmYgOiBhbnkgPSB7fTtcclxuICAgICAgb0RpZmYuZGF5cyA9IE1hdGguZmxvb3IoblRvdGFsRGlmZiAvIDg2NDAwKTtcclxuICAgICAgblRvdGFsRGlmZiAtPSBvRGlmZi5kYXlzICogODY0MDA7XHJcbiAgICAgIG9EaWZmLmhvdXJzID0gTWF0aC5mbG9vcihuVG90YWxEaWZmIC8gMzYwMCk7XHJcbiAgICAgIG5Ub3RhbERpZmYgLT0gb0RpZmYuaG91cnMgKiAzNjAwO1xyXG4gICAgICBvRGlmZi5taW51dGVzID0gTWF0aC5mbG9vcihuVG90YWxEaWZmIC8gNjApO1xyXG4gICAgICBuVG90YWxEaWZmIC09IG9EaWZmLm1pbnV0ZXMgKiA2MDtcclxuICAgICAgb0RpZmYuc2Vjb25kcyA9IE1hdGguZmxvb3IoblRvdGFsRGlmZik7XHJcbiAgICAgIFxyXG4gICAgICB2YXIgcmVzdWx0ID0gXCJcIjtcclxuICAgICAgaWYob0RpZmYuZGF5cyA+IDApXHJcbiAgICAgIHtcclxuICAgICAgICAgIHJlc3VsdCArPSBvRGlmZi5kYXlzICsgXCIgZGF5c1wiO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZihvRGlmZi5ob3VycyA+IDApXHJcbiAgICAgIHtcclxuICAgICAgICBpZihyZXN1bHQubGVuZ3RoID4gMClcclxuICAgICAgICB7XHJcbiAgICAgICAgICByZXN1bHQgKz0gXCIsIFwiO1xyXG4gICAgICAgIH1cclxuICAgICAgICAgIHJlc3VsdCArPSBvRGlmZi5ob3VycyArIFwiIGhvdXJzXCI7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmKG9EaWZmLm1pbnV0ZXMgPiAwKVxyXG4gICAgICB7XHJcbiAgICAgICAgaWYocmVzdWx0Lmxlbmd0aCA+IDApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgcmVzdWx0ICs9IFwiLCBcIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgICByZXN1bHQgKz0gb0RpZmYubWludXRlcyArIFwiIG1pbnV0ZXNcIjtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYob0RpZmYuc2Vjb25kcyA+IDApXHJcbiAgICAgIHtcclxuICAgICAgICBpZihyZXN1bHQubGVuZ3RoID4gMClcclxuICAgICAgICB7XHJcbiAgICAgICAgICByZXN1bHQgKz0gXCIsIFwiO1xyXG4gICAgICAgIH1cclxuICAgICAgICAgIHJlc3VsdCArPSBvRGlmZi5zZWNvbmRzICsgXCIgc2Vjb25kc1wiO1xyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfSBcclxuICAgIGVsc2UgXHJcbiAgICB7XHJcbiAgICAgIHJldHVybiBcIlwiO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxubWFueXdoby5jb21wb25lbnQucmVnaXN0ZXIoJ0VsYXBzZWRUaW1lJywgRWxhcHNlZFRpbWUpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRWxhcHNlZFRpbWU7XHJcblxyXG4iLCJkZWNsYXJlIHZhciBtYW55d2hvOiBhbnk7XHJcblxyXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5jbGFzcyBFbGFwc2VkVGltZUZyaWVuZGx5IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PGFueSwgYW55PiBcclxueyAgIFxyXG4gICAgY29uc3RydWN0b3IocHJvcHMgOiBhbnkpXHJcblx0e1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgIH1cclxuXHJcbiAgICBjb21wb25lbnREaWRNb3VudCgpIFxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuZm9yY2VVcGRhdGUoKTtcclxuICAgIH1cclxuXHJcblx0cmVuZGVyKClcclxuXHR7XHJcblx0ICAgXHJcbiAgICAgICAgaWYodGhpcy5wcm9wcy5jb250ZW50VmFsdWUpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB2YXIgZHQgPSBuZXcgRGF0ZSh0aGlzLnByb3BzLmNvbnRlbnRWYWx1ZSlcclxuICAgICAgICAgICAgdmFyIGVsYXBzZWQgPSB0aGlzLmVsYXBzZWRUaW1lKGR0KTtcclxuICAgICAgICAgICAgcmV0dXJuIDxzcGFuPntlbGFwc2VkfTwvc3Bhbj47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2VcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBlbGFwc2VkVGltZSAoZnJvbURhdGUgOiBEYXRlKSBcclxuICAgIHtcclxuICAgICAgY29uc3QgY29ycmVjdGVkRGF0ZSA9IG5ldyBEYXRlKGZyb21EYXRlLmdldFRpbWUoKSArIChmcm9tRGF0ZS5nZXRUaW1lem9uZU9mZnNldCgpICo2MCAqMTAwMCkpO1xyXG4gICAgICB2YXIgblRvdGFsRGlmZiA9IE1hdGgucm91bmQoKG5ldyBEYXRlKCkpLmdldFRpbWUoKSAvIDEwMDApIC0gKGNvcnJlY3RlZERhdGUuZ2V0VGltZSgpIC8gMTAwMCk7XHJcbiAgICAgIGlmIChuVG90YWxEaWZmID49IDApIFxyXG4gICAgICB7XHJcbiAgICAgICAgdmFyIG9EaWZmIDogYW55ID0ge307XHJcbiAgICAgICAgb0RpZmYuZGF5cyA9IE1hdGguZmxvb3IoblRvdGFsRGlmZiAvIDg2NDAwKTtcclxuICAgICAgICBuVG90YWxEaWZmIC09IG9EaWZmLmRheXMgKiA4NjQwMDtcclxuICAgICAgICBvRGlmZi5ob3VycyA9IE1hdGguZmxvb3IoblRvdGFsRGlmZiAvIDM2MDApO1xyXG4gICAgICAgIG5Ub3RhbERpZmYgLT0gb0RpZmYuaG91cnMgKiAzNjAwO1xyXG4gICAgICAgIG9EaWZmLm1pbnV0ZXMgPSBNYXRoLmZsb29yKG5Ub3RhbERpZmYgLyA2MCk7XHJcbiAgICAgICAgblRvdGFsRGlmZiAtPSBvRGlmZi5taW51dGVzICogNjA7XHJcbiAgICAgICAgb0RpZmYuc2Vjb25kcyA9IE1hdGguZmxvb3IoblRvdGFsRGlmZik7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdmFyIHJlc3VsdCA9IFwiXCI7XHJcbiAgICAgICAgaWYob0RpZmYuZGF5cyA+IDApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXN1bHQgKz0gb0RpZmYuZGF5cyArIFwiIGRheXNcIjtcclxuICAgICAgICB9XHJcbiAgXHJcbiAgICAgICAgaWYob0RpZmYuaG91cnMgPiAwKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGlmKHJlc3VsdC5sZW5ndGggPiAwKVxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICByZXN1bHQgKz0gXCIsIFwiO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXN1bHQgKz0gb0RpZmYuaG91cnMgKyBcIiBob3Vyc1wiO1xyXG4gICAgICAgIH1cclxuICBcclxuICAgICAgICBpZihvRGlmZi5taW51dGVzID4gMClcclxuICAgICAgICB7XHJcbiAgICAgICAgICBpZihyZXN1bHQubGVuZ3RoID4gMClcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgcmVzdWx0ICs9IFwiLCBcIjtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmVzdWx0ICs9IG9EaWZmLm1pbnV0ZXMgKyBcIiBtaW51dGVzXCI7XHJcbiAgICAgICAgfVxyXG4gIFxyXG4gICAgICAgIGlmKG9EaWZmLnNlY29uZHMgPiAwKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGlmKHJlc3VsdC5sZW5ndGggPiAwKVxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICByZXN1bHQgKz0gXCIsIFwiO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXN1bHQgKz0gb0RpZmYuc2Vjb25kcyArIFwiIHNlY29uZHNcIjtcclxuICAgICAgICB9XHJcbiAgXHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgICAgfSBcclxuICAgICAgZWxzZSBcclxuICAgICAge1xyXG4gICAgICAgIHJldHVybiBcIlwiO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbm1hbnl3aG8uY29tcG9uZW50LnJlZ2lzdGVyKCdFbGFwc2VkVGltZUZyaWVuZGx5JywgRWxhcHNlZFRpbWVGcmllbmRseSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBFbGFwc2VkVGltZUZyaWVuZGx5OyIsImRlY2xhcmUgdmFyIG1hbnl3aG86IGFueTtcclxuXHJcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbmNsYXNzIEVsYXBzZWRUaW1lTGl2ZUxvbmcgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8YW55LCBhbnk+IFxyXG57ICAgXHJcblxyXG4gIHRpbWVySUQgPSAtMTtcclxuXHJcbiAgY29uc3RydWN0b3IocHJvcHMgOiBhbnkpXHJcbiAge1xyXG4gICAgICBzdXBlcihwcm9wcyk7XHJcbiAgfVxyXG5cclxuICBjb21wb25lbnREaWRNb3VudCgpIFxyXG4gIHtcclxuICAgICAgdGhpcy5mb3JjZVVwZGF0ZSgpO1xyXG4gICAgICB0aGlzLnRpbWVySUQgPSB3aW5kb3cuc2V0SW50ZXJ2YWwodGhpcy50aW1lckV2ZW50LmJpbmQodGhpcyksIDEwMDApO1xyXG4gIH1cclxuXHJcbiAgY29tcG9uZW50V2lsbFVubW91bnQoKVxyXG4gIHtcclxuICAgIGlmKHRoaXMudGltZXJJRCA+PSAwKVxyXG4gICAge1xyXG4gICAgICBjbGVhckludGVydmFsKHRoaXMudGltZXJJRCk7XHJcbiAgICAgIHRoaXMudGltZXJJRCA9IC0xO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgdGltZXJFdmVudCgpXHJcbiAge1xyXG4gICAgdGhpcy5mb3JjZVVwZGF0ZSgpO1xyXG4gIH1cclxuXHJcblx0cmVuZGVyKClcclxuXHR7XHJcblx0ICAgXHJcbiAgICAgICAgaWYodGhpcy5wcm9wcy5jb250ZW50VmFsdWUpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB2YXIgZHQgPSBuZXcgRGF0ZSh0aGlzLnByb3BzLmNvbnRlbnRWYWx1ZSlcclxuICAgICAgICAgICAgdmFyIGVsYXBzZWQgPSB0aGlzLmVsYXBzZWRUaW1lKGR0KTtcclxuICAgICAgICAgICAgcmV0dXJuIDxzcGFuPntlbGFwc2VkfTwvc3Bhbj47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2VcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuICB9XHJcblxyXG4gIGVsYXBzZWRUaW1lIChmcm9tRGF0ZSA6IERhdGUpIFxyXG4gIHtcclxuICAgIGNvbnN0IGNvcnJlY3RlZERhdGUgPSBuZXcgRGF0ZShmcm9tRGF0ZS5nZXRUaW1lKCkgKyAoZnJvbURhdGUuZ2V0VGltZXpvbmVPZmZzZXQoKSAqNjAgKjEwMDApKTtcclxuICAgIHZhciBuVG90YWxEaWZmID0gTWF0aC5yb3VuZCgobmV3IERhdGUoKSkuZ2V0VGltZSgpIC8gMTAwMCkgLSAoY29ycmVjdGVkRGF0ZS5nZXRUaW1lKCkgLyAxMDAwKTtcclxuICAgIGlmIChuVG90YWxEaWZmID49IDApIFxyXG4gICAge1xyXG4gICAgICB2YXIgb0RpZmYgOiBhbnkgPSB7fTtcclxuICAgICAgb0RpZmYuZGF5cyA9IE1hdGguZmxvb3IoblRvdGFsRGlmZiAvIDg2NDAwKTtcclxuICAgICAgblRvdGFsRGlmZiAtPSBvRGlmZi5kYXlzICogODY0MDA7XHJcbiAgICAgIG9EaWZmLmhvdXJzID0gTWF0aC5mbG9vcihuVG90YWxEaWZmIC8gMzYwMCk7XHJcbiAgICAgIG5Ub3RhbERpZmYgLT0gb0RpZmYuaG91cnMgKiAzNjAwO1xyXG4gICAgICBvRGlmZi5taW51dGVzID0gTWF0aC5mbG9vcihuVG90YWxEaWZmIC8gNjApO1xyXG4gICAgICBuVG90YWxEaWZmIC09IG9EaWZmLm1pbnV0ZXMgKiA2MDtcclxuICAgICAgb0RpZmYuc2Vjb25kcyA9IE1hdGguZmxvb3IoblRvdGFsRGlmZik7XHJcbiAgICAgIFxyXG4gICAgICB2YXIgcmVzdWx0ID0gXCJcIjtcclxuICAgICAgaWYob0RpZmYuZGF5cyA+IDApXHJcbiAgICAgIHtcclxuICAgICAgICAgIHJlc3VsdCArPSBvRGlmZi5kYXlzICsgXCIgZGF5c1wiO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZihvRGlmZi5ob3VycyA+IDApXHJcbiAgICAgIHtcclxuICAgICAgICBpZihyZXN1bHQubGVuZ3RoID4gMClcclxuICAgICAgICB7XHJcbiAgICAgICAgICByZXN1bHQgKz0gXCIsIFwiO1xyXG4gICAgICAgIH1cclxuICAgICAgICAgIHJlc3VsdCArPSBvRGlmZi5ob3VycyArIFwiIGhvdXJzXCI7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmKG9EaWZmLm1pbnV0ZXMgPiAwKVxyXG4gICAgICB7XHJcbiAgICAgICAgaWYocmVzdWx0Lmxlbmd0aCA+IDApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgcmVzdWx0ICs9IFwiLCBcIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgICByZXN1bHQgKz0gb0RpZmYubWludXRlcyArIFwiIG1pbnV0ZXNcIjtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYob0RpZmYuc2Vjb25kcyA+IDApXHJcbiAgICAgIHtcclxuICAgICAgICBpZihyZXN1bHQubGVuZ3RoID4gMClcclxuICAgICAgICB7XHJcbiAgICAgICAgICByZXN1bHQgKz0gXCIsIFwiO1xyXG4gICAgICAgIH1cclxuICAgICAgICAgIHJlc3VsdCArPSBvRGlmZi5zZWNvbmRzICsgXCIgc2Vjb25kc1wiO1xyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfSBcclxuICAgIGVsc2UgXHJcbiAgICB7XHJcbiAgICAgIHJldHVybiBcIlwiO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxubWFueXdoby5jb21wb25lbnQucmVnaXN0ZXIoJ0VsYXBzZWRUaW1lTGl2ZUxvbmcnLCBFbGFwc2VkVGltZUxpdmVMb25nKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEVsYXBzZWRUaW1lTGl2ZUxvbmc7XHJcblxyXG4iLCJkZWNsYXJlIHZhciBtYW55d2hvOiBhbnk7XHJcblxyXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IFRpbWVIZWxwZXJzLCBpRWxhcHNlZCB9IGZyb20gJy4vRGF0ZVRpbWVIZWxwZXJzJztcclxuXHJcbmNsYXNzIEVsYXBzZWRUaW1lTGl2ZVNob3J0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PGFueSwgYW55PiBcclxueyAgIFxyXG5cclxuICB0aW1lcklEID0gLTE7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByb3BzIDogYW55KVxyXG4gIHtcclxuICAgICAgc3VwZXIocHJvcHMpO1xyXG4gIH1cclxuXHJcbiAgY29tcG9uZW50RGlkTW91bnQoKSBcclxuICB7XHJcbiAgICAgIHRoaXMuZm9yY2VVcGRhdGUoKTtcclxuICAgICAgdGhpcy50aW1lcklEID0gd2luZG93LnNldEludGVydmFsKHRoaXMudGltZXJFdmVudC5iaW5kKHRoaXMpLCAxMDAwKTtcclxuICB9XHJcblxyXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KClcclxuICB7XHJcbiAgICBpZih0aGlzLnRpbWVySUQgPj0gMClcclxuICAgIHtcclxuICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLnRpbWVySUQpO1xyXG4gICAgICB0aGlzLnRpbWVySUQgPSAtMTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHRpbWVyRXZlbnQoKVxyXG4gIHtcclxuICAgIHRoaXMuZm9yY2VVcGRhdGUoKTtcclxuICB9XHJcblxyXG5cdHJlbmRlcigpXHJcblx0e1xyXG5cdCAgIFxyXG4gICAgICAgIGlmKHRoaXMucHJvcHMuY29udGVudFZhbHVlKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdmFyIGR0ID0gbmV3IERhdGUodGhpcy5wcm9wcy5jb250ZW50VmFsdWUpXHJcbiAgICAgICAgICAgIHZhciBlbGFwc2VkID0gdGhpcy5lbGFwc2VkVGltZShkdCk7XHJcbiAgICAgICAgICAgIHJldHVybiA8c3Bhbj57ZWxhcHNlZH08L3NwYW4+O1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcbiAgfVxyXG5cclxuICBlbGFwc2VkVGltZSAoZnJvbURhdGUgOiBEYXRlKSBcclxuICB7XHJcblxyXG4gICAgY29uc3QgZWxhcHNlZCA6IGlFbGFwc2VkID0gVGltZUhlbHBlcnMuZ2V0RWxhcHNlZChmcm9tRGF0ZSwgbmV3IERhdGUoKSk7XHJcbiAgICAgICAgICBcclxuICAgICAgdmFyIHJlc3VsdCA9IFwiXCI7XHJcbiAgICAgIGlmKGVsYXBzZWQuZGF5cyA+IDApXHJcbiAgICAgIHtcclxuICAgICAgICAgIHJlc3VsdCArPSBlbGFwc2VkLmRheXMgKyBcImRcIjtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYoZWxhcHNlZC5ob3VycyA+IDApXHJcbiAgICAgIHtcclxuICAgICAgICBpZihyZXN1bHQubGVuZ3RoID4gMClcclxuICAgICAgICB7XHJcbiAgICAgICAgICByZXN1bHQgKz0gXCIvXCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICAgcmVzdWx0ICs9IGVsYXBzZWQuaG91cnMgKyBcImhcIjtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYoZWxhcHNlZC5taW51dGVzID4gMClcclxuICAgICAge1xyXG4gICAgICAgIGlmKHJlc3VsdC5sZW5ndGggPiAwKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgIHJlc3VsdCArPSBcIi9cIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgICByZXN1bHQgKz0gZWxhcHNlZC5taW51dGVzICsgXCJtXCI7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmKGVsYXBzZWQuc2Vjb25kcyA+IDApXHJcbiAgICAgIHtcclxuICAgICAgICBpZihyZXN1bHQubGVuZ3RoID4gMClcclxuICAgICAgICB7XHJcbiAgICAgICAgICByZXN1bHQgKz0gXCIvXCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICAgcmVzdWx0ICs9IGVsYXBzZWQuc2Vjb25kcyArIFwic1wiO1xyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4gcmVzdWx0O1xyXG4gIH1cclxufVxyXG5cclxubWFueXdoby5jb21wb25lbnQucmVnaXN0ZXIoJ0VsYXBzZWRUaW1lTGl2ZVNob3J0JywgRWxhcHNlZFRpbWVMaXZlU2hvcnQpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRWxhcHNlZFRpbWVMaXZlU2hvcnQ7XHJcblxyXG4iLCJkZWNsYXJlIHZhciBtYW55d2hvOiBhbnk7XHJcblxyXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5jbGFzcyBFcG9jaERhdGVERE1NTVlZIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PGFueSwgYW55PiBcclxueyAgIFxyXG4gICAgY29uc3RydWN0b3IocHJvcHMgOiBhbnkpXHJcblx0e1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgIH1cclxuXHJcbiAgICBjb21wb25lbnREaWRNb3VudCgpIFxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuZm9yY2VVcGRhdGUoKTtcclxuICAgIH1cclxuXHJcblx0cmVuZGVyKClcclxuXHR7XHJcblx0ICAgXHJcbiAgICAgICAgaWYodGhpcy5wcm9wcy5jb250ZW50VmFsdWUpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB2YXIgc2VjdmFsID0gdGhpcy5wcm9wcy5jb250ZW50VmFsdWU7XHJcbiAgICAgICAgICAgIHZhciBzZWNvbmRzIDogbnVtYmVyPSBOdW1iZXIucGFyc2VJbnQodGhpcy5wcm9wcy5jb250ZW50VmFsdWUpO1xyXG5cclxuICAgICAgICAgICAgLy9oYW5kbGUgamF2YSBlcG9jaCB3aXRoIGRlY2ltYWwgcG9pbnRcclxuICAgICAgICAgICAgaWYoc2VjdmFsLmluZGV4T2YoXCIuXCIpPj0wKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBzZWNvbmRzID0gc2Vjb25kcyAqIDEwMDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHZhciBlZCA6IERhdGUgPSBuZXcgRGF0ZShzZWNvbmRzKTtcclxuXHJcbiAgICAgICAgICAgIC8vZm9ybWF0IHRoZSBkYXRlIHVzaW5nIFJlYWN0IGZvcm1hdHRlciBpbnRvIGR0IHN0cmluZ1xyXG4gICAgICAgICAgICB2YXIgZHQgPSBuZXcgSW50bC5EYXRlVGltZUZvcm1hdCgnZW4tR0InLCB7ICAgXHJcbiAgICAgICAgICAgICAgICB5ZWFyOiAnbnVtZXJpYycsIFxyXG4gICAgICAgICAgICAgICAgbW9udGg6ICdsb25nJywgXHJcbiAgICAgICAgICAgICAgICBkYXk6ICcyLWRpZ2l0J1xyXG4gICAgICAgICAgICB9KS5mb3JtYXQoZWQpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgcmV0dXJuIDxzcGFuPntkdH08L3NwYW4+O1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbm1hbnl3aG8uY29tcG9uZW50LnJlZ2lzdGVyKCdFcG9jaERhdGVERE1NTVlZJywgRXBvY2hEYXRlRERNTU1ZWSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBFcG9jaERhdGVERE1NTVlZOyIsImRlY2xhcmUgdmFyIG1hbnl3aG86IGFueTtcclxuXHJcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbmNsYXNzIEVwb2NoRGF0ZVRpbWVERE1NTVlZSEhNTSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxhbnksIGFueT4gXHJcbnsgICBcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzIDogYW55KVxyXG5cdHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICB9XHJcblxyXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSBcclxuICAgIHtcclxuICAgICAgICB0aGlzLmZvcmNlVXBkYXRlKCk7XHJcbiAgICB9XHJcblxyXG5cdHJlbmRlcigpXHJcblx0e1xyXG5cdCAgIFxyXG4gICAgICAgIGlmKHRoaXMucHJvcHMuY29udGVudFZhbHVlKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdmFyIHNlY3ZhbCA9IHRoaXMucHJvcHMuY29udGVudFZhbHVlO1xyXG4gICAgICAgICAgICB2YXIgc2Vjb25kcyA6IG51bWJlcj0gTnVtYmVyLnBhcnNlSW50KHRoaXMucHJvcHMuY29udGVudFZhbHVlKTtcclxuXHJcbiAgICAgICAgICAgIC8vaGFuZGxlIGphdmEgZXBvY2ggd2l0aCBkZWNpbWFsIHBvaW50XHJcbiAgICAgICAgICAgIGlmKHNlY3ZhbC5pbmRleE9mKFwiLlwiKT49MClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgc2Vjb25kcyA9IHNlY29uZHMgKiAxMDAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB2YXIgZWQgOiBEYXRlID0gbmV3IERhdGUoc2Vjb25kcyk7XHJcbiAgICAgICAgICAgIC8vZm9ybWF0IHRoZSBkYXRlIHVzaW5nIFJlYWN0IGZvcm1hdHRlciBpbnRvIGR0IHN0cmluZ1xyXG4gICAgICAgICAgICB2YXIgZHQgPSBuZXcgSW50bC5EYXRlVGltZUZvcm1hdCgnZW4tR0InLCB7ICAgXHJcbiAgICAgICAgICAgICAgICB5ZWFyOiAnbnVtZXJpYycsIFxyXG4gICAgICAgICAgICAgICAgbW9udGg6ICdsb25nJywgXHJcbiAgICAgICAgICAgICAgICBkYXk6ICcyLWRpZ2l0JyxcclxuICAgICAgICAgICAgICAgIGhvdXI6ICcyLWRpZ2l0JyxcclxuICAgICAgICAgICAgICAgIG1pbnV0ZTogJzItZGlnaXQnXHJcbiAgICAgICAgICAgIH0pLmZvcm1hdChlZCk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICByZXR1cm4gPHNwYW4+e2R0fTwvc3Bhbj47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2VcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxubWFueXdoby5jb21wb25lbnQucmVnaXN0ZXIoJ0Vwb2NoRGF0ZVRpbWVERE1NTVlZSEhNTScsIEVwb2NoRGF0ZVRpbWVERE1NTVlZSEhNTSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBFcG9jaERhdGVUaW1lRERNTU1ZWUhITU07IiwiZGVjbGFyZSB2YXIgbWFueXdobzogYW55O1xyXG5cclxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgKiBhcyBSZWFjdERvbSBmcm9tICdyZWFjdC1kb20nO1xyXG5cclxuY2xhc3MgSG92ZXJCb3ggZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8YW55LCBhbnk+IFxyXG57ICAgXHJcbiAgICBpc092ZXJCdXR0b246IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIGlzT3ZlckRpYWxvZzogYm9vbGVhbj1mYWxzZTtcclxuXHJcbiAgICBob3ZlckJveFNob3duOiBib29sZWFuPWZhbHNlOyAvL2NoYW5nZSB0byBmYWxzZVxyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByb3BzIDogYW55KVxyXG5cdHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgdGhpcy5nZXRQYXJlbnRUYWJsZUVsZW1lbnQgPSB0aGlzLmdldFBhcmVudFRhYmxlRWxlbWVudC5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMuZ2V0UGFyZW50VGFibGVDb21wb25lbnRJZCA9IHRoaXMuZ2V0UGFyZW50VGFibGVDb21wb25lbnRJZC5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMuZ2V0UGFyZW50Um93RWxlbWVudCA9IHRoaXMuZ2V0UGFyZW50Um93RWxlbWVudC5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMub3ZlckJ1dHRvbiA9IHRoaXMub3ZlckJ1dHRvbi5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMub3V0QnV0dG9uID0gdGhpcy5vdXRCdXR0b24uYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLm92ZXJEaWFsb2cgPSB0aGlzLm92ZXJEaWFsb2cuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLm91dERpYWxvZyA9IHRoaXMub3V0RGlhbG9nLmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5jYWxjU2hvd24gPSB0aGlzLmNhbGNTaG93bi5iaW5kKHRoaXMpO1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIGNvbXBvbmVudERpZE1vdW50KCkgXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5mb3JjZVVwZGF0ZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldEF0dHJpYnV0ZVZhbHVlKGF0dHJpYnV0ZXMgOiBhbnksIGF0dHJpYnV0ZU5hbWUgOiBzdHJpbmcgKSA6IGFueVxyXG4gICAge1xyXG4gICAgICAgIGZvcih2YXIga2V5IGluIGF0dHJpYnV0ZXMpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZihrZXkgPT09IGF0dHJpYnV0ZU5hbWUpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBhdHRyaWJ1dGVzW2tleV07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgb3ZlckJ1dHRvbigpIHtcclxuICAgICAgICBpZih0aGlzLmlzT3ZlckJ1dHRvbiA9PT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgdGhpcy5pc092ZXJCdXR0b249dHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5jYWxjU2hvd24oKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb3V0QnV0dG9uKGU6IGFueSkge1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8vbGV0IGVsZW1lbnQgPSBlLnRvRWxlbWVudCB8fCBlLnJlbGF0ZWRUYXJnZXQ7XHJcbiAgICAgICAgLy9pZiAoZWxlbWVudC5wYXJlbnROb2RlID09IHRoaXMgfHwgZWxlbWVudCA9PSB0aGlzKSB7XHJcbiAgICAgICAgLy8gICByZXR1cm47XHJcbiAgICAgICAgLy99XHJcbiAgICAgICAgaWYodGhpcy5pc092ZXJCdXR0b24gPT09IHRydWUpIHtcclxuICAgICAgICAgICAgdGhpcy5pc092ZXJCdXR0b249ZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMuY2FsY1Nob3duKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG92ZXJEaWFsb2coKSB7XHJcbiAgICAgICAgaWYodGhpcy5pc092ZXJEaWFsb2cgPT09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaXNPdmVyRGlhbG9nPXRydWU7XHJcbiAgICAgICAgICAgIHRoaXMuY2FsY1Nob3duKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG91dERpYWxvZygpIHtcclxuICAgICAgICBpZih0aGlzLmlzT3ZlckRpYWxvZyA9PT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICB0aGlzLmlzT3ZlckRpYWxvZz1mYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5jYWxjU2hvd24oKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY2FsY1Nob3duKCkge1xyXG4gICAgICAgIGlmKHRoaXMuaXNPdmVyQnV0dG9uID09PSB0cnVlIHx8IHRoaXMuaXNPdmVyRGlhbG9nID09PSB0cnVlKSB7XHJcbiAgICAgICAgICAgIGlmKHRoaXMuaG92ZXJCb3hTaG93biA9PT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaG92ZXJCb3hTaG93biA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmZvcmNlVXBkYXRlKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGlmKHRoaXMuaG92ZXJCb3hTaG93biA9PT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ob3ZlckJveFNob3duID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmZvcmNlVXBkYXRlKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuXHRyZW5kZXIoKVxyXG5cdHtcclxuICAgICAgICBsZXQgaG92ZXJCb3g6IGFueTtcclxuICAgICAgICBsZXQgbWUgPSBSZWFjdERvbS5maW5kRE9NTm9kZSh0aGlzKTtcclxuICAgICAgICBsZXQgaWNvbjogc3RyaW5nO1xyXG4gICAgICAgIGxldCBwb3NpdGlvbjogc3RyaW5nO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnN0IHZhbHVlOiBhbnkgPSB0aGlzLnByb3BzLmNvbnRlbnRWYWx1ZTtcclxuICAgICAgICBpZihtZSkge1xyXG4gICAgICAgICAgICBjb25zdCB0YWJsZUVsZW1lbnQ6IEhUTUxFbGVtZW50ID0gdGhpcy5nZXRQYXJlbnRUYWJsZUVsZW1lbnQoKTtcclxuICAgICAgICAgICAgLy9jb25zdCByb3dFbGVtZW50OiBIVE1MRWxlbWVudCA9IHRoaXMuZ2V0UGFyZW50Um93RWxlbWVudCgpO1xyXG4gICAgICAgICAgICBjb25zdCB0ZEVsZW1lbnQ6IEhUTUxFbGVtZW50ID0gdGhpcy5nZXRQYXJlbnRUREVsZW1lbnQoKTtcclxuICAgICAgICAgICAgLy9tb2RpZnkgdGRcclxuICAgICAgICAgICAgdGRFbGVtZW50LnN0eWxlLnBvc2l0aW9uPVwicmVsYXRpdmVcIjtcclxuICAgICAgICAgICAgdGRFbGVtZW50LnN0eWxlLmhlaWdodD1cIjEwMCVcIjtcclxuICAgICAgICAgICAgdGRFbGVtZW50LnN0eWxlLnBhZGRpbmc9XCIwcHhcIjtcclxuXHJcblxyXG4gICAgICAgICAgICBjb25zdCB0YWJsZUNvbXBvbmVudElkOiBzdHJpbmcgPSB0aGlzLmdldFBhcmVudFRhYmxlQ29tcG9uZW50SWQodGFibGVFbGVtZW50KTtcclxuICAgICAgICAgICAgY29uc3QgdGFibGUgPSBtYW55d2hvLm1vZGVsLmdldENvbXBvbmVudCh0YWJsZUNvbXBvbmVudElkLHRoaXMucHJvcHMuZmxvd0tleSk7XHJcblxyXG4gICAgICAgICAgICBpY29uID0gdGhpcy5nZXRBdHRyaWJ1dGVWYWx1ZSh0YWJsZS5hdHRyaWJ1dGVzLCBcImhvdmVyYm94SWNvblwiKSB8fCBcInF1ZXN0aW9uLXNpZ25cIjtcclxuICAgICAgICAgICAgcG9zaXRpb24gPSB0aGlzLmdldEF0dHJpYnV0ZVZhbHVlKHRhYmxlLmF0dHJpYnV0ZXMsIFwiaG92ZXJib3hQb3NpdGlvblwiKSB8fCBcImxlZnRcIjtcclxuICAgICAgICAgICAgbGV0IGxlZnQ6IHN0cmluZztcclxuICAgICAgICAgICAgbGV0IHJpZ2h0OiBzdHJpbmc7XHJcbiAgICAgICAgICAgIGxldCB0b3A6IHN0cmluZztcclxuICAgICAgICAgICAgbGV0IGJvdHRvbTogc3RyaW5nO1xyXG5cclxuICAgICAgICAgICAgc3dpdGNoKHBvc2l0aW9uLnRvTG93ZXJDYXNlKCkpIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgXCJsZWZ0XCI6XHJcbiAgICAgICAgICAgICAgICAgICAgcmlnaHQgPSBcImNhbGMoMTAwJSArIDVweClcIjtcclxuICAgICAgICAgICAgICAgICAgICB0b3AgPSBcImNhbGMoLTUwJSlcIjtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGNhc2UgXCJsb3dlci1sZWZ0XCI6XHJcbiAgICAgICAgICAgICAgICAgICAgcmlnaHQgPSBcImNhbGMoMTAwJSArIDVweClcIjtcclxuICAgICAgICAgICAgICAgICAgICB0b3AgPSBcImNhbGMoNTAlICsgNXB4KTtcIjtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgICAgICBjYXNlIFwidXBwZXItbGVmdFwiOlxyXG4gICAgICAgICAgICAgICAgICAgIHJpZ2h0ID0gXCJjYWxjKDEwMCUgKyA1cHgpXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgYm90dG9tID0gXCJjYWxjKDUwJSArIDVweClcIjtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgICAgICBjYXNlIFwiYWJvdmVcIjpcclxuICAgICAgICAgICAgICAgICAgICByaWdodCA9IFwiY2FsYygtNTAlKVwiO1xyXG4gICAgICAgICAgICAgICAgICAgIGJvdHRvbSA9IFwiY2FsYygxMDAlICsgNXB4KVwiO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgICAgIGNhc2UgXCJiZWxvd1wiOlxyXG4gICAgICAgICAgICAgICAgICAgIHJpZ2h0ID0gXCJjYWxjKC01MCUpXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9wID0gXCJjYWxjKDEwMCUgKyA1cHgpXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICAgICAgY2FzZSBcInJpZ2h0XCI6XHJcbiAgICAgICAgICAgICAgICAgICAgbGVmdCA9IFwiY2FsYygxMDAlICsgNXB4KVwiO1xyXG4gICAgICAgICAgICAgICAgICAgIHRvcCA9IFwiY2FsYygtNTAlKVwiO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgY2FzZSBcImxvd2VyLXJpZ2h0XCI6XHJcbiAgICAgICAgICAgICAgICAgICAgbGVmdCA9IFwiY2FsYygxMDAlICsgNXB4KVwiO1xyXG4gICAgICAgICAgICAgICAgICAgIHRvcCA9IFwiY2FsYyg1MCUgKyA1cHgpO1wiO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgICAgIGNhc2UgXCJ1cHBlci1yaWdodFwiOlxyXG4gICAgICAgICAgICAgICAgICAgIGxlZnQgPSBcImNhbGMoMTAwJSArIDVweClcIjtcclxuICAgICAgICAgICAgICAgICAgICBib3R0b20gPSBcImNhbGMoNTAlICsgNXB4KVwiO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZih0aGlzLmhvdmVyQm94U2hvd249PT10cnVlKSB7XHJcbiAgICAgICAgICAgICAgICBob3ZlckJveCA9IChcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImhvdmVyYm94LWRpYWxvZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZWZ0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmlnaHQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3AsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3R0b20sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiI2ZlZmVmZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiBcIjJweCBzb2xpZCAjMDAwXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IFwiNXB4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiBcIjIwcHhcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHpJbmRleDogMTAwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uTW91c2VFbnRlcj17dGhpcy5vdmVyRGlhbG9nfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbk1vdXNlTGVhdmU9e3RoaXMub3V0RGlhbG9nfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYW5nZXJvdXNseVNldElubmVySFRNTD17e19faHRtbDogdmFsdWV9fVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJob3ZlcmJveFwiXHJcbiAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogXCIxMDAlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZmxleERpcmVjdGlvbjogXCJyb3dcIixcclxuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIlxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgIG9uTW91c2VMZWF2ZT17dGhpcy5vdXRCdXR0b259XHJcbiAgICAgICAgICAgID4gICAgICAgICBcclxuICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJob3ZlcmJveC1idXR0b25cIlxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBcInJlbGF0aXZlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjNDNjMzVmXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IFwiMTBweFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IFwiNTAlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IFwiYXV0b1wiXHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICBvbk1vdXNlRW50ZXI9e3RoaXMub3ZlckJ1dHRvbn1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICB7aG92ZXJCb3h9XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW5cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcImdseXBoaWNvbiBnbHlwaGljb24tXCIgKyBpY29uICsgXCIgaG92ZXJib3gtaWNvblwifSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBcIndoaXRlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5MZWZ0OiBcImF1dG9cIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpblJpZ2h0OiBcImF1dG9cIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpblRvcDogXCItMnB4XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vcG9pbnRlckV2ZW50czogXCJub25lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLy9vbk1vdXNlRW50ZXI9e3RoaXMuc2hvd0hvdmVyQm94fVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRQYXJlbnRUYWJsZUVsZW1lbnQoKSA6IEhUTUxFbGVtZW50IHwgdW5kZWZpbmVkXHJcbiAgICB7XHJcbiAgICAgICAgbGV0IG1lID0gUmVhY3REb20uZmluZERPTU5vZGUodGhpcyk7XHJcbiAgICAgICAgdmFyIG1heExldmVscyA9IDEwO1xyXG4gICAgICAgIHZhciBwYXJlbnQgOiBIVE1MRWxlbWVudCA9IG1lLnBhcmVudEVsZW1lbnQ7XHJcbiAgICAgICAgd2hpbGUoIXBhcmVudC5jbGFzc0xpc3QuY29udGFpbnMoXCJ0YWJsZS1jb250YWluZXJcIikgfHwgbWF4TGV2ZWxzID09IDApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBwYXJlbnQ9cGFyZW50LnBhcmVudEVsZW1lbnQ7XHJcbiAgICAgICAgICAgIG1heExldmVscy0tO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYobWF4TGV2ZWxzPT0wKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcmV0dXJuIHBhcmVudDtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgZ2V0UGFyZW50VERFbGVtZW50KCkgOiBIVE1MRWxlbWVudCB8IHVuZGVmaW5lZFxyXG4gICAge1xyXG4gICAgICAgIGxldCBtZSA9IFJlYWN0RG9tLmZpbmRET01Ob2RlKHRoaXMpO1xyXG4gICAgICAgIHZhciBtYXhMZXZlbHMgPSAxMDtcclxuICAgICAgICB2YXIgcGFyZW50IDogSFRNTEVsZW1lbnQgPSBtZS5wYXJlbnRFbGVtZW50O1xyXG4gICAgICAgIHdoaWxlKCBwYXJlbnQudGFnTmFtZS50b0xvd2VyQ2FzZSgpICE9PVwidGRcIiB8fCBtYXhMZXZlbHMgPT0gMClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHBhcmVudD1wYXJlbnQucGFyZW50RWxlbWVudDtcclxuICAgICAgICAgICAgbWF4TGV2ZWxzLS07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZihtYXhMZXZlbHM9PTApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICByZXR1cm4gcGFyZW50O1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBnZXRQYXJlbnRSb3dFbGVtZW50KCkgOiBIVE1MRWxlbWVudCB8IHVuZGVmaW5lZFxyXG4gICAge1xyXG4gICAgICAgIGxldCBtZSA9IFJlYWN0RG9tLmZpbmRET01Ob2RlKHRoaXMpO1xyXG4gICAgICAgIHZhciBtYXhMZXZlbHMgPSAxMDtcclxuICAgICAgICB2YXIgcGFyZW50IDogSFRNTEVsZW1lbnQgPSBtZS5wYXJlbnRFbGVtZW50O1xyXG4gICAgICAgIHdoaWxlKCBwYXJlbnQudGFnTmFtZS50b0xvd2VyQ2FzZSgpICE9PVwidHJcIiB8fCBtYXhMZXZlbHMgPT0gMClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHBhcmVudD1wYXJlbnQucGFyZW50RWxlbWVudDtcclxuICAgICAgICAgICAgbWF4TGV2ZWxzLS07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZihtYXhMZXZlbHM9PTApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICByZXR1cm4gcGFyZW50O1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBnZXRQYXJlbnRUYWJsZUNvbXBvbmVudElkKHRhYmxlOiBIVE1MRWxlbWVudCkgOiBzdHJpbmdcclxuICAgIHtcclxuICAgICAgICB2YXIgY29tcG9uZW50SWQ6IHN0cmluZyA9IHRhYmxlLmF0dHJpYnV0ZXMuZ2V0TmFtZWRJdGVtKCdpZCcpLnZhbHVlO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHJldHVybiBjb21wb25lbnRJZDtcclxuICAgIH1cclxufVxyXG5cclxubWFueXdoby5jb21wb25lbnQucmVnaXN0ZXIoJ0hvdmVyQm94JywgSG92ZXJCb3gpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSG92ZXJCb3g7IiwiZGVjbGFyZSB2YXIgbWFueXdobzogYW55O1xyXG5cclxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuY2xhc3MgSHlwZXJsaW5rIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PGFueSwgYW55PiBcclxueyAgIFxyXG4gICAgY29uc3RydWN0b3IocHJvcHMgOiBhbnkpXHJcblx0e1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgIH1cclxuXHJcbiAgICBjb21wb25lbnREaWRNb3VudCgpIFxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuZm9yY2VVcGRhdGUoKTtcclxuICAgIH1cclxuXHJcblx0cmVuZGVyKClcclxuXHR7XHJcbiAgICAgICAgdmFyIHRvb2x0aXAgOiBzdHJpbmcgPSBcIlwiO1xyXG5cclxuICAgICAgICB2YXIgdmFsdWUgPSB0aGlzLnByb3BzLmNvbnRlbnRWYWx1ZSB8fCBcIlwiO1xyXG4gICAgICAgIHZhciBkaXNwbGF5VmFsdWUgPSB2YWx1ZSArIFwiJVwiO1xyXG5cclxuICAgICAgICB2YXIgdG9vbHRpcCA6IHN0cmluZyA9IHZhbHVlICsgXCIlXCI7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdmFyIGxpbmtTdHlsZSA9IHtcclxuICAgICAgICAgICAgICAgIFwiZm9udC1mYW1pbHlcIiA6IFwidGFob21hXCIsXHJcbiAgICAgICAgICAgICAgICBcImNvbG9yXCIgOiBcIiNmZmZmZmZcIixcclxuICAgICAgICAgICAgICAgIFwiZm9udC1zaXplXCIgOiBcIjEwcHRcIixcclxuICAgICAgICAgICAgICAgIFwid2lkdGhcIiA6IFwiMTAwJVwiLFxyXG4gICAgICAgICAgICAgICAgXCJ0ZXh0LWFsaWduXCIgOiBcImNlbnRlclwiLFxyXG4gICAgICAgICAgICAgICAgXCJwb3NpdGlvblwiIDogXCJhYnNvbHV0ZVwiIGFzIFwiYWJzb2x1dGVcIixcclxuICAgICAgICAgICAgICAgIFwiaGVpZ2h0XCI6IFwiMTAwJVwiLFxyXG4gICAgICAgICAgICAgICAgXCJ2ZXJ0aWNhbC1hbGlnblwiOiBcIm1pZGRsZVwiLFxyXG4gICAgICAgICAgICAgICAgXCJsaW5lLWhlaWdodFwiOiBcIjIwMCVcIixcclxuICAgICAgICAgICAgICAgIFwibWl4LWJsZW5kLW1vZGVcIjogXCJkaWZmZXJlbmNlXCIsXHJcblxyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICB2YXIgbWF4ID0gMTAwO1xyXG4gICAgICAgIHZhciBtaW4gPSAwO1xyXG4gICAgICAgIHZhciBwb3MgPSA2MDtcclxuXHJcbiAgICAgICAgcmV0dXJuICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9e3ZhbHVlfSB0YXJnZXQ9XCJfYmxhbmtcIj57dmFsdWV9PC9hPiAgICBcclxuICAgICAgICAgICAgICAgIDwvZGl2PiAgXHJcbiAgICB9XHJcbn1cclxuXHJcbi8vPFRvb2x0aXAgYm9yZGVyPVwiI2ZmZmZmZlwiIHJhZGl1cz1cIjVcIiBwbGFjZW1lbnQ9XCJyaWdodFwiIGNvbnRlbnQ9e3Rvb2x0aXB9PjwvVG9vbHRpcD5cclxuXHJcbm1hbnl3aG8uY29tcG9uZW50LnJlZ2lzdGVyKCdIeXBlcmxpbmsnLCBIeXBlcmxpbmspO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSHlwZXJsaW5rOyIsImRlY2xhcmUgdmFyIG1hbnl3aG86IGFueTtcclxuXHJcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbmNsYXNzIEludEFjdGl2ZUluYWN0aXZlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PGFueSwgYW55PiBcclxueyAgIFxyXG4gICAgY29uc3RydWN0b3IocHJvcHMgOiBhbnkpXHJcblx0e1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgIH1cclxuXHJcbiAgICBjb21wb25lbnREaWRNb3VudCgpIFxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuZm9yY2VVcGRhdGUoKTtcclxuICAgIH1cclxuXHJcblx0cmVuZGVyKClcclxuXHR7XHJcbiAgICAgICAgdmFyIGNsYXNzTmFtZSA6IGFueSA9IFwiZ2x5cGhpY29uIGdseXBoaWNvbi1cIjtcclxuICAgICAgICB2YXIgdG9vbHRpcCA6IHN0cmluZyA9IFwiXCI7XHJcbiAgICAgICAgbGV0IHJlc3VsdDogYW55O1xyXG4gICAgICAgIFxyXG4gICAgICAgIHN3aXRjaCh0aGlzLnByb3BzLmNvbnRlbnRWYWx1ZSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGNhc2UgXCIxXCI6XHJcbiAgICAgICAgICAgICAgICByZXN1bHQ9KFxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPkFjdGl2ZTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGNhc2UgXCIwXCI6XHJcbiAgICAgICAgICAgICAgICByZXN1bHQ9KFxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPkluYWN0aXZlPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgcmVzdWx0PShcclxuICAgICAgICAgICAgICAgICAgICA8c3Bhbi8+XHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDs7XHJcbiAgICB9XHJcbn1cclxuXHJcbm1hbnl3aG8uY29tcG9uZW50LnJlZ2lzdGVyKCdJbnRBY3RpdmVJbmFjdGl2ZScsIEludEFjdGl2ZUluYWN0aXZlKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEludEFjdGl2ZUluYWN0aXZlOyIsImRlY2xhcmUgdmFyIG1hbnl3aG86IGFueTtcclxuXHJcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbmNsYXNzIEludFllc05vIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PGFueSwgYW55PiBcclxueyAgIFxyXG4gICAgY29uc3RydWN0b3IocHJvcHMgOiBhbnkpXHJcblx0e1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgIH1cclxuXHJcbiAgICBjb21wb25lbnREaWRNb3VudCgpIFxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuZm9yY2VVcGRhdGUoKTtcclxuICAgIH1cclxuXHJcblx0cmVuZGVyKClcclxuXHR7XHJcbiAgICAgICAgdmFyIGNsYXNzTmFtZSA6IGFueSA9IFwiZ2x5cGhpY29uIGdseXBoaWNvbi1cIjtcclxuICAgICAgICB2YXIgdG9vbHRpcCA6IHN0cmluZyA9IFwiXCI7XHJcbiAgICAgICAgbGV0IHJlc3VsdDogYW55O1xyXG4gICAgICAgIFxyXG4gICAgICAgIHN3aXRjaCh0aGlzLnByb3BzLmNvbnRlbnRWYWx1ZSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGNhc2UgXCIxXCI6XHJcbiAgICAgICAgICAgICAgICByZXN1bHQ9KFxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPlllczwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGNhc2UgXCIwXCI6XHJcbiAgICAgICAgICAgICAgICByZXN1bHQ9KFxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPk5vPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgcmVzdWx0PShcclxuICAgICAgICAgICAgICAgICAgICA8c3Bhbi8+XHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDs7XHJcbiAgICB9XHJcbn1cclxuXHJcbm1hbnl3aG8uY29tcG9uZW50LnJlZ2lzdGVyKCdJbnRZZXNObycsIEludFllc05vKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEludFllc05vOyIsImRlY2xhcmUgdmFyIG1hbnl3aG86IGFueTtcclxuXHJcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0ICogYXMgUmVhY3REb20gZnJvbSAncmVhY3QtZG9tJztcclxuXHJcblxyXG4vL3RoZSBjb250ZW50VmFsdWUgd2lsbCBoYXZlIHRoZSBsb29rdXAgdmFsdWVcclxuLy9cclxuY2xhc3MgTG9va3VwVmFsdWUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8YW55LCBhbnk+IFxyXG57ICBcclxuICAgIC8vbXlSZWYgOiBhbnk7IFxyXG4gICAgLy9wYXJlbnRJZCA6IGFueTtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzIDogYW55KVxyXG5cdHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgLy90aGlzLm15UmVmID0gUmVhY3QuY3JlYXRlUmVmKCk7XHJcbiAgICB9XHJcblxyXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSBcclxuICAgIHtcclxuICAgICAgICAvL3ZhciBtZSA9IFJlYWN0RG9tLmZpbmRET01Ob2RlKHRoaXMpO1xyXG4gICAgICAgIC8vdmFyIHBhcmVudFRhYmxlID0gJCh0aGlzLm15UmVmLmN1cnJlbnQpLmNsb3Nlc3QoJ3RhYmxlJykuYXR0cignaWQnKTtcclxuICAgICAgICB0aGlzLmZvcmNlVXBkYXRlKCk7XHJcbiAgICAgICAgLy90aGlzLnBhcmVudElkID0gJCh0aGlzLnJlZnMubWUpLmNsb3Nlc3QoJ3RhYmxlJykuYXR0cignaWQnKVxyXG4gICAgfVxyXG5cclxuICAgIGdldEF0dHJpYnV0ZVZhbHVlKGF0dHJpYnV0ZXMgOiBhbnksIGF0dHJpYnV0ZVByZWZpeCA6IHN0cmluZywgIGNvbHVtbklkIDogc3RyaW5nKVxyXG4gICAge1xyXG4gICAgICAgIGZvcih2YXIga2V5IGluIGF0dHJpYnV0ZXMpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZihrZXkgPT09IGF0dHJpYnV0ZVByZWZpeCArIFwiX1wiICsgY29sdW1uSWQpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBhdHRyaWJ1dGVzW2tleV07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0VmFsdWVGcm9tTGlzdChsaXN0IDogYW55ICwga2V5QXR0cmlidXRlIDogc3RyaW5nICwgcmVzdWx0QXR0cmlidXRlIDogc3RyaW5nLCBrZXkgOiBzdHJpbmcpXHJcbiAgICB7XHJcbiAgICAgICAgdmFyIHZhbCA6IHN0cmluZyA9IFwiXCI7XHJcbiAgICAgICAgdmFyIGhpdCA6IGJvb2xlYW4gPSBmYWxzZVxyXG5cclxuICAgICAgICBmb3IodmFyIGlQb3MgPSAwIDsgaVBvcyA8IGxpc3QubGVuZ3RoIDsgaVBvcyArKylcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHZhbD1cIlwiO1xyXG4gICAgICAgICAgICB2YXIgaXRlbSA9IGxpc3RbaVBvc107XHJcblxyXG4gICAgICAgICAgICBmb3IodmFyIHBQb3MgPSAwIDsgcFBvcyA8IGl0ZW0ucHJvcGVydGllcy5sZW5ndGggOyBwUG9zKyspXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHZhciBwcm9wID0gaXRlbS5wcm9wZXJ0aWVzW3BQb3NdO1xyXG4gICAgICAgICAgICAgICAgaWYocHJvcC5kZXZlbG9wZXJOYW1lID09PSByZXN1bHRBdHRyaWJ1dGUpXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsID0gcHJvcC5jb250ZW50VmFsdWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZihwcm9wLmRldmVsb3Blck5hbWUgPT09IGtleUF0dHJpYnV0ZSlcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBpZihwcm9wLmNvbnRlbnRWYWx1ZT09PWtleSlcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhpdD10cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZihoaXQ9PT10cnVlKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdmFsO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIFwiXCI7XHJcbiAgICB9XHJcblxyXG5cdHJlbmRlcigpXHJcblx0e1xyXG4gICAgICAgIHZhciBtZSA9IFJlYWN0RG9tLmZpbmRET01Ob2RlKHRoaXMpO1xyXG4gICAgICAgIHZhciBsYWJlbCA6IHN0cmluZyA9IFwiXCI7XHJcbiAgICAgICAgaWYodGhpcy5wcm9wcy5jb250ZW50VmFsdWUgJiYgbWUpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICAvL2l0ZXJhdGUgdXAgbG9va2luZyBmb3IgdGhlIGVsZW1lbnQgd2l0aCBjbGFzcyAudGFibGUtY29udGFpbmVyLCBpdCB3aWxsIGhhdmUgdGhlIHRhYmxlJ3MgaWQgdmFsdWUgb24gaXRcclxuICAgICAgICAgICAgdmFyIG1heExldmVscyA9IDEwO1xyXG4gICAgICAgICAgICB2YXIgcGFyZW50IDogSFRNTEVsZW1lbnQgPSBtZS5wYXJlbnRFbGVtZW50O1xyXG4gICAgICAgICAgICB3aGlsZSghcGFyZW50LmNsYXNzTGlzdC5jb250YWlucyhcInRhYmxlLWNvbnRhaW5lclwiKSB8fCBtYXhMZXZlbHMgPT0gMClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcGFyZW50PXBhcmVudC5wYXJlbnRFbGVtZW50O1xyXG4gICAgICAgICAgICAgICAgbWF4TGV2ZWxzLS07XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmKG1heExldmVscz09MClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiXCI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdmFyIGNvbXBvbmVudElkID0gcGFyZW50LmF0dHJpYnV0ZXMuZ2V0TmFtZWRJdGVtKCdpZCcpLnZhbHVlO1xyXG4gICAgICAgICAgICB2YXIgdGFibGUgPSBtYW55d2hvLm1vZGVsLmdldENvbXBvbmVudChjb21wb25lbnRJZCx0aGlzLnByb3BzLmZsb3dLZXkpO1xyXG5cclxuICAgICAgICAgICAgdmFyIHByb3BlcnR5SWQgPSB0aGlzLnByb3BzLnByb3BlcnR5SWQ7XHJcblxyXG4gICAgICAgICAgICB2YXIgbGlzdENvbXBvbmVudE5hbWUgPSB0aGlzLmdldEF0dHJpYnV0ZVZhbHVlKHRhYmxlLmF0dHJpYnV0ZXMsIFwiTG9va3VwTGlzdENvbXBvbmVudFwiLCBwcm9wZXJ0eUlkKTtcclxuICAgICAgICAgICAgdmFyIGxpc3RLZXlBdHJpYnV0ZSA9IHRoaXMuZ2V0QXR0cmlidXRlVmFsdWUodGFibGUuYXR0cmlidXRlcywgXCJMb29rdXBMaXN0S2V5QXR0cmlidXRlXCIsIHByb3BlcnR5SWQpO1xyXG4gICAgICAgICAgICB2YXIgbGlzdFJlc3VsdEF0dHJpYnV0ZSA9IHRoaXMuZ2V0QXR0cmlidXRlVmFsdWUodGFibGUuYXR0cmlidXRlcywgXCJMb29rdXBMaXN0UmVzdWx0QXR0cmlidXRlXCIsIHByb3BlcnR5SWQpO1xyXG5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGlmKGxpc3RDb21wb25lbnROYW1lKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB2YXIgbGlzdCA9IG1hbnl3aG8ubW9kZWwuZ2V0Q29tcG9uZW50QnlOYW1lKGxpc3RDb21wb25lbnROYW1lLCAgIHRoaXMucHJvcHMuZmxvd0tleSlcclxuICAgICAgICAgICAgICAgIGlmKGxpc3QpXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWwgPSB0aGlzLmdldFZhbHVlRnJvbUxpc3QobGlzdC5vYmplY3REYXRhLCBsaXN0S2V5QXRyaWJ1dGUsIGxpc3RSZXN1bHRBdHRyaWJ1dGUsIHRoaXMucHJvcHMuY29udGVudFZhbHVlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIDxzcGFuPntsYWJlbH08L3NwYW4+O1xyXG4gICAgfVxyXG59XHJcblxyXG5tYW55d2hvLmNvbXBvbmVudC5yZWdpc3RlcignTG9va3VwVmFsdWUnLCBMb29rdXBWYWx1ZSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMb29rdXBWYWx1ZTsiLCJkZWNsYXJlIHZhciBtYW55d2hvOiBhbnk7XHJcblxyXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5jbGFzcyBQZXJjZW50UHJvZ3Jlc3NCYXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8YW55LCBhbnk+IFxyXG57ICAgXHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcyA6IGFueSlcclxuXHR7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbXBvbmVudERpZE1vdW50KCkgXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5mb3JjZVVwZGF0ZSgpO1xyXG4gICAgfVxyXG5cclxuXHRyZW5kZXIoKVxyXG5cdHtcclxuICAgICAgICB2YXIgY2xhc3NOYW1lIDogYW55ID0gXCJnbHlwaGljb24gZ2x5cGhpY29uLVwiO1xyXG4gICAgICAgIHZhciB0b29sdGlwIDogc3RyaW5nID0gXCJcIjtcclxuXHJcbiAgICAgICAgdmFyIHZhbHVlID0gcGFyc2VJbnQodGhpcy5wcm9wcy5jb250ZW50VmFsdWUpIHx8IDA7XHJcbiAgICAgICAgdmFyIGRpc3BsYXlWYWx1ZSA9IHZhbHVlICsgXCIlXCI7XHJcblxyXG4gICAgICAgIHZhciB0b29sdGlwIDogc3RyaW5nID0gdmFsdWUgKyBcIiVcIjtcclxuICAgICAgICBcclxuICAgICAgICB2YXIgb3V0ZXJTdHlsZSA6IFJlYWN0LkNTU1Byb3BlcnRpZXMgPSB7XHJcbiAgICAgICAgICAgICAgICBib3JkZXIgOiBcIjJweCBzb2xpZCAjYWRhZGFkXCIsXHJcbiAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6XCI1cHhcIixcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjpcIiNlM2UzZTNcIixcclxuICAgICAgICAgICAgICAgIGhlaWdodDpcIjMwcHhcIixcclxuICAgICAgICAgICAgICAgIGJveFNpemluZzogXCJjb250ZW50LWJveFwiLFxyXG4gICAgICAgICAgICAgICAgcG9zaXRpb24gOiBcInJlbGF0aXZlXCIgYXMgXCJyZWxhdGl2ZVwiLFxyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogXCJncmlkXCIsXHJcbiAgICAgICAgICAgICAgICBhbGlnbkNvbnRlbnQ6ICdtaWRkbGUnLFxyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAnMCAhaW1wb3J0YW50J1xyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICB2YXIgYmFyU3R5bGUgOiBSZWFjdC5DU1NQcm9wZXJ0aWVzID0ge1xyXG4gICAgICAgICAgICBib3JkZXI6IFwibm9uZVwiLFxyXG4gICAgICAgICAgICBib3JkZXJSYWRpdXM6XCI0cHhcIixcclxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOlwiIzdEOUFDRlwiLFxyXG4gICAgICAgICAgICB3aWR0aDogZGlzcGxheVZhbHVlLFxyXG4gICAgICAgICAgICB0ZXh0QWxpZ24gOiBcImNlbnRlclwiICxcclxuICAgICAgICAgICAgaGVpZ2h0OiBcIjEwMCVcIixcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgdmFyIGNhcHRpb25TdHlsZSA6IFJlYWN0LkNTU1Byb3BlcnRpZXMgPSB7XHJcbiAgICAgICAgICAgIGZvbnRGYW1pbHkgOiBcInRhaG9tYVwiLFxyXG4gICAgICAgICAgICBjb2xvciA6IFwiI2ZmZmZmZlwiLFxyXG4gICAgICAgICAgICBmb250U2l6ZSA6IFwiMTBwdFwiLFxyXG4gICAgICAgICAgICB3aWR0aCA6IFwiMTAwJVwiLFxyXG4gICAgICAgICAgICB0ZXh0QWxpZ24gOiBcImNlbnRlclwiLFxyXG4gICAgICAgICAgICBwb3NpdGlvbiA6IFwiYWJzb2x1dGVcIiBhcyBcImFic29sdXRlXCIsXHJcbiAgICAgICAgICAgIGhlaWdodDogXCIxMDAlXCIsXHJcbiAgICAgICAgICAgIHZlcnRpY2FsQWxpZ246IFwibWlkZGxlXCIsXHJcbiAgICAgICAgICAgIGxpbmVIZWlnaHQ6IFwiMjAwJVwiLFxyXG4gICAgICAgICAgICBtaXhCbGVuZE1vZGU6IFwiZGlmZmVyZW5jZVwiLFxyXG4gICAgICAgICAgICBsZWZ0OiAwXHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgIHZhciBtYXggPSAxMDA7XHJcbiAgICAgICAgdmFyIG1pbiA9IDA7XHJcbiAgICAgICAgdmFyIHBvcyA9IDYwO1xyXG5cclxuICAgICAgICByZXR1cm4gIDxkaXYgc3R5bGU9e291dGVyU3R5bGV9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgcm9sZT1cInByb2dyZXNzYmFyXCIgYXJpYS12YWx1ZW5vdz17cG9zfSBhcmlhLXZhbHVlbWluPXttaW59IGFyaWEtdmFsdWVtYXg9e21heH0gc3R5bGU9e2JhclN0eWxlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e2NhcHRpb25TdHlsZX0+e2Rpc3BsYXlWYWx1ZX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+ICAgICBcclxuICAgICAgICAgICAgICAgIDwvZGl2PiBcclxuXHJcbiAgICB9XHJcbn1cclxuXHJcbi8vPFRvb2x0aXAgYm9yZGVyPVwiI2ZmZmZmZlwiIHJhZGl1cz1cIjVcIiBwbGFjZW1lbnQ9XCJyaWdodFwiIGNvbnRlbnQ9e3Rvb2x0aXB9PjwvVG9vbHRpcD5cclxuXHJcbm1hbnl3aG8uY29tcG9uZW50LnJlZ2lzdGVyKCdQZXJjZW50UHJvZ3Jlc3NCYXInLCBQZXJjZW50UHJvZ3Jlc3NCYXIpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUGVyY2VudFByb2dyZXNzQmFyOyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsImRlY2xhcmUgdmFyIG1hbnl3aG86IGFueTtcclxuXHJcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0ICogYXMgUmVhY3REb20gZnJvbSAncmVhY3QtZG9tJztcclxuaW1wb3J0IFwiLi9SYW5raW5nLmNzc1wiO1xyXG5cclxuLy90aGUgY29udGVudFZhbHVlIHdpbGwgaGF2ZSB0aGUgbG9va3VwIHZhbHVlXHJcbi8vXHJcbmNsYXNzIFJhbmtpbmcgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8YW55LCBhbnk+IFxyXG57ICBcclxuICAgIHRhYmxlOiBhbnk7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJvcHMgOiBhbnkpXHJcblx0e1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgICAgICAvL3RoaXMubXlSZWYgPSBSZWFjdC5jcmVhdGVSZWYoKTtcclxuICAgIH1cclxuXHJcbiAgICBjb21wb25lbnREaWRNb3VudCgpIFxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuZ2V0VGFibGUgPSB0aGlzLmdldFRhYmxlLmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy52b3RlVXAgPSB0aGlzLnZvdGVVcC5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMudm90ZURvd24gPSB0aGlzLnZvdGVEb3duLmJpbmQodGhpcyk7XHJcblxyXG4gICAgICAgIHRoaXMuZ2V0VGFibGUoKTtcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLmZvcmNlVXBkYXRlKCk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGdldFRhYmxlKCkge1xyXG4gICAgICAgIHZhciBtYXhMZXZlbHMgPSAxMDtcclxuICAgICAgICB2YXIgbWUgPSBSZWFjdERvbS5maW5kRE9NTm9kZSh0aGlzKTtcclxuICAgICAgICB2YXIgcGFyZW50IDogSFRNTEVsZW1lbnQgPSBtZS5wYXJlbnRFbGVtZW50O1xyXG4gICAgICAgIHdoaWxlKCFwYXJlbnQuY2xhc3NMaXN0LmNvbnRhaW5zKFwidGFibGUtY29udGFpbmVyXCIpIHx8IG1heExldmVscyA9PSAwKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcGFyZW50PXBhcmVudC5wYXJlbnRFbGVtZW50O1xyXG4gICAgICAgICAgICBtYXhMZXZlbHMtLTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmKG1heExldmVscz09MClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiBcIlwiO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgY29tcG9uZW50SWQgPSBwYXJlbnQuYXR0cmlidXRlcy5nZXROYW1lZEl0ZW0oJ2lkJykudmFsdWU7XHJcbiAgICAgICAgdGhpcy50YWJsZSA9IG1hbnl3aG8ubW9kZWwuZ2V0Q29tcG9uZW50KGNvbXBvbmVudElkLHRoaXMucHJvcHMuZmxvd0tleSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0VGFibGVSb3cocm93SWQ6IHN0cmluZykgOiBhbnkge1xyXG4gICAgICAgIGxldCByb3c6IGFueTtcclxuICAgICAgICBjb25zdCBtb2RlbDogIGFueSA9IG1hbnl3aG8ubW9kZWwuZ2V0Q29tcG9uZW50KHRoaXMudGFibGUuaWQsIHRoaXMucHJvcHMuZmxvd0tleSk7XHJcbiAgICAgICAgaWYobW9kZWwpIHtcclxuICAgICAgICAgICBtb2RlbC5vYmplY3REYXRhLmZvckVhY2goKHJ3OiBhbnkpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmKHJ3LmludGVybmFsSWQgPT09IHJvd0lkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcm93PXJ3XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiByb3c7XHJcbiAgICB9XHJcblxyXG4gICAgdm90ZVVwKGU6IGFueSkge1xyXG4gICAgICAgIGNvbnN0IG9uVm90ZVVwOiBzdHJpbmcgPSB0aGlzLmdldEF0dHJpYnV0ZVZhbHVlKHRoaXMudGFibGUuYXR0cmlidXRlcyxcIm9uVm90ZVVwXCIsXCJcIik7XHJcbiAgICAgICAgaWYob25Wb3RlVXAubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICBjb25zdCBvdXRjb21lOiBhbnkgPSB0aGlzLmdldE91dGNvbWUob25Wb3RlVXApO1xyXG4gICAgICAgICAgICBpZihvdXRjb21lKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCByb3dTdGF0ZTogYW55ID0gdGhpcy5nZXRUYWJsZVJvdyh0aGlzLnByb3BzLmlkKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG5ld1N0YXRlID0geyBcIm9iamVjdERhdGFcIjogW3Jvd1N0YXRlXSB9O1xyXG4gICAgICAgICAgICAgICAgbWFueXdoby5zdGF0ZS5zZXRDb21wb25lbnQodGhpcy50YWJsZS5pZCwgbmV3U3RhdGUsICB0aGlzLnByb3BzLmZsb3dLZXksIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgbWFueXdoby5jb21wb25lbnQub25PdXRjb21lKG91dGNvbWUsbnVsbCx0aGlzLnByb3BzLmZsb3dLZXkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHZvdGVEb3duKGU6IGFueSkge1xyXG4gICAgICAgIGNvbnN0IG9uVm90ZURvd24gPSB0aGlzLmdldEF0dHJpYnV0ZVZhbHVlKHRoaXMudGFibGUuYXR0cmlidXRlcyxcIm9uVm90ZVVwXCIsXCJcIik7XHJcbiAgICAgICAgaWYob25Wb3RlRG93bi5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG91dGNvbWU6IGFueSA9IHRoaXMuZ2V0T3V0Y29tZShvblZvdGVEb3duKTtcclxuICAgICAgICAgICAgaWYob3V0Y29tZSkge1xyXG4gICAgICAgICAgICAgICAgLy9tYW55d2hvLmNvbXBvbmVudC5vbk91dGNvbWUob3V0Y29tZSxudWxsLHRoaXMucHJvcHMuZmxvd0tleSk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCByb3dTdGF0ZTogYW55ID0gdGhpcy5nZXRUYWJsZVJvdyh0aGlzLnByb3BzLmlkKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBnZXRBdHRyaWJ1dGVWYWx1ZShhdHRyaWJ1dGVzIDogYW55LCBhdHRyaWJ1dGUgOiBzdHJpbmcsIGRlZmF1bHRWYWx1ZTogc3RyaW5nKVxyXG4gICAge1xyXG4gICAgICAgIGlmKGF0dHJpYnV0ZXNbYXR0cmlidXRlXSkge1xyXG4gICAgICAgICAgICByZXR1cm4gYXR0cmlidXRlc1thdHRyaWJ1dGVdO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIGRlZmF1bHRWYWx1ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0T3V0Y29tZShvdXRjb21lTmFtZTogc3RyaW5nKSB7XHJcbiAgICAgICAgbGV0IG91dGNvbWU6IGFueTtcclxuICAgICAgICBsZXQgb3V0Y29tZXM6IGFueVtdID0gbWFueXdoby5tb2RlbC5nZXRPdXRjb21lcyh0aGlzLnRhYmxlLmlkLCB0aGlzLnByb3BzLmZsb3dLZXkpO1xyXG4gICAgICAgIG91dGNvbWVzLmZvckVhY2goKG9jOiBhbnkpID0+IHtcclxuICAgICAgICAgICAgaWYob2MuZGV2ZWxvcGVyTmFtZSA9PT0gb3V0Y29tZU5hbWUpIHtcclxuICAgICAgICAgICAgICAgIG91dGNvbWUgPSBvYztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBvdXRjb21lcyA9IG1hbnl3aG8ubW9kZWwuZ2V0T3V0Y29tZXMobnVsbCwgdGhpcy5wcm9wcy5mbG93S2V5KTtcclxuICAgICAgICBvdXRjb21lcy5mb3JFYWNoKChvYzogYW55KSA9PiB7XHJcbiAgICAgICAgICAgIGlmKG9jLmRldmVsb3Blck5hbWUgPT09IG91dGNvbWVOYW1lKSB7XHJcbiAgICAgICAgICAgICAgICBvdXRjb21lID0gb2M7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gb3V0Y29tZTtcclxuICAgIH1cclxuXHJcblx0cmVuZGVyKClcclxuXHR7XHJcbiAgICAgICAgbGV0IGN1cnJlbnRWb3RlczogbnVtYmVyID0gcGFyc2VJbnQodGhpcy5wcm9wcy5jb250ZW50VmFsdWUpO1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInJhbmtpbmdcIlxyXG4gICAgICAgICAgICA+IFxyXG4gICAgICAgICAgICAgICAgPHNwYW4gXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicmFua2luZy1sYWJlbFwiXHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAge2N1cnJlbnRWb3Rlc31cclxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgPC9kaXY+ICAgICAgICAgICBcclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcblxyXG5tYW55d2hvLmNvbXBvbmVudC5yZWdpc3RlcignUmFua2luZycsIFJhbmtpbmcpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmFua2luZzsiLCJkZWNsYXJlIHZhciBtYW55d2hvOiBhbnk7XHJcblxyXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5jbGFzcyBTdGF0dXNJY29uIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PGFueSwgYW55PiBcclxueyAgIFxyXG4gICAgY29uc3RydWN0b3IocHJvcHMgOiBhbnkpXHJcblx0e1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgIH1cclxuXHJcbiAgICBjb21wb25lbnREaWRNb3VudCgpIFxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuZm9yY2VVcGRhdGUoKTtcclxuICAgIH1cclxuXHJcblx0cmVuZGVyKClcclxuXHR7XHJcbiAgICAgICAgdmFyIGNsYXNzTmFtZSA6IGFueSA9IFwiZ2x5cGhpY29uIGdseXBoaWNvbi1cIjtcclxuICAgICAgICB2YXIgdG9vbHRpcCA6IHN0cmluZyA9IFwiXCI7XHJcbiAgICAgICAgbGV0IHJlc3VsdDogYW55O1xyXG4gICAgICAgIFxyXG4gICAgICAgIHN3aXRjaCh0aGlzLnByb3BzLmNvbnRlbnRWYWx1ZS50b0xvd2VyQ2FzZSgpKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgY2FzZSBcInNcIjpcclxuICAgICAgICAgICAgICAgIHJlc3VsdD0oXHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17XCJnbHlwaGljb24gZ2x5cGhpY29uLWhvdXJnbGFzc1wifSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9e1wiU3RhZ2VkXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGNhc2UgXCJjXCI6XHJcbiAgICAgICAgICAgICAgICByZXN1bHQ9KFxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1wiZ2x5cGhpY29uIGdseXBoaWNvbi1va1wifSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9e1wiQ29tcGxldGVcIn1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSBcImFcIjpcclxuICAgICAgICAgICAgICAgIHJlc3VsdD0oXHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17XCJnbHlwaGljb24gZ2x5cGhpY29uLWZsYXNoXCJ9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT17XCJBY3RpdmVcIn1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSBcImNvbXBsZXRlXCI6IFxyXG4gICAgICAgICAgICAgICAgcmVzdWx0PShcclxuICAgICAgICAgICAgICAgICAgICA8aW1nIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0Y2YtaW1hZ2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzcmM9XCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUFvQUFBQUtDQVlBQUFDTk1zKzlBQUFBZDBsRVFWUjQybU5nZ0FLbE1JWUdwVkNHL3lnWUtNYUFER0FTQmtVcy8xM21jSUV4aUEwVFJ6SEphUVluVmd3M0djVFF5MlArYnorSkF5c0d5WUZOQlJIV1hleDRNVnloZVRNclhneFhxSm5LK04rNG1oa3JCc2xCRkVJOW8xL01oQldqQkJNc0dOVGlHZjdyNURLQ01ZaU5FanpFQmpnQVU4cUs3U3Uxbll3QUFBQUFTVVZPUks1Q1lJST1cIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJDb21wbGV0ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgLz4pO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSBcImVycm9yXCI6IFxyXG4gICAgICAgICAgICAgICAgcmVzdWx0PShcclxuICAgICAgICAgICAgICAgICAgICA8aW1nIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0Y2YtaW1hZ2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzcmM9XCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUFvQUFBQUtDQVlBQUFDTk1zKzlBQUFBWjBsRVFWUjQybU5nZ0lJQ0dZbUd6VndNLzVFeFNJd0JHY0FrWGlsem9HQ1lPSXBKenhUWnNXSzR5U0RHWXdWMnZCaHNLb2k0SjhjR3h1Z0FKZzVYZUV1R0ZZelJBVXdjcnZDcUpDdGVERllJODh4NWNSYXNHQ1dZWU1Gd1JJZ0pCYU1FRDdFQkRnQ1FpckRGU0JOa0pBQUFBQUJKUlU1RXJrSmdnZz09XCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiQ29tcGxldGVcIlxyXG4gICAgICAgICAgICAgICAgICAgIC8+KTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICByZXN1bHQ9KFxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1wiZ2x5cGhpY29uIGdseXBoaWNvbi1vcHRpb24taG9yaXpvbnRhbFwifSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9e1wiTm90IFNldFwifVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDs7XHJcbiAgICB9XHJcbn1cclxuXHJcbm1hbnl3aG8uY29tcG9uZW50LnJlZ2lzdGVyKCdTdGF0dXNJY29uJywgU3RhdHVzSWNvbik7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTdGF0dXNJY29uOyIsImRlY2xhcmUgdmFyIG1hbnl3aG86IGFueTtcclxuXHJcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0ICogYXMgUmVhY3REb20gZnJvbSAncmVhY3QtZG9tJztcclxuXHJcbmNsYXNzIFRhYmxlUm93U3R5bGVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PGFueSwgYW55PiBcclxueyAgIFxyXG4gICAgY29uc3RydWN0b3IocHJvcHMgOiBhbnkpXHJcblx0e1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgICAgICB0aGlzLmdldFBhcmVudFRhYmxlRWxlbWVudCA9IHRoaXMuZ2V0UGFyZW50VGFibGVFbGVtZW50LmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5nZXRQYXJlbnRUYWJsZUNvbXBvbmVudElkID0gdGhpcy5nZXRQYXJlbnRUYWJsZUNvbXBvbmVudElkLmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5nZXRQYXJlbnRSb3dFbGVtZW50ID0gdGhpcy5nZXRQYXJlbnRSb3dFbGVtZW50LmJpbmQodGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSBcclxuICAgIHtcclxuICAgICAgICB0aGlzLmZvcmNlVXBkYXRlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0QXR0cmlidXRlVmFsdWUoYXR0cmlidXRlcyA6IGFueSwgYXR0cmlidXRlTmFtZSA6IHN0cmluZyApIDogYW55XHJcbiAgICB7XHJcbiAgICAgICAgZm9yKHZhciBrZXkgaW4gYXR0cmlidXRlcylcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlmKGtleSA9PT0gYXR0cmlidXRlTmFtZSlcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGF0dHJpYnV0ZXNba2V5XTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuXHJcblx0cmVuZGVyKClcclxuXHR7XHJcbiAgICAgICAgbGV0IG1lID0gUmVhY3REb20uZmluZERPTU5vZGUodGhpcyk7XHJcbiAgICAgICAgY29uc3QgdmFsdWU6IGFueSA9IHRoaXMucHJvcHMuY29udGVudFZhbHVlO1xyXG4gICAgICAgIGlmKG1lKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHRhYmxlRWxlbWVudDogSFRNTEVsZW1lbnQgPSB0aGlzLmdldFBhcmVudFRhYmxlRWxlbWVudCgpO1xyXG4gICAgICAgICAgICBjb25zdCByb3dFbGVtZW50OiBIVE1MRWxlbWVudCA9IHRoaXMuZ2V0UGFyZW50Um93RWxlbWVudCgpO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgdGFibGVDb21wb25lbnRJZDogc3RyaW5nID0gdGhpcy5nZXRQYXJlbnRUYWJsZUNvbXBvbmVudElkKHRhYmxlRWxlbWVudCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHRhYmxlID0gbWFueXdoby5tb2RlbC5nZXRDb21wb25lbnQodGFibGVDb21wb25lbnRJZCx0aGlzLnByb3BzLmZsb3dLZXkpO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgYXJnc3RyID0gdGhpcy5nZXRBdHRyaWJ1dGVWYWx1ZSh0YWJsZS5hdHRyaWJ1dGVzLCBcInRyZkNvbmZpZ1wiKTtcclxuICAgICAgICAgICAgY29uc3QgYXJncyA9IEpTT04ucGFyc2UoYXJnc3RyKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGFyZ3MpO1xyXG5cclxuICAgICAgICAgICAgaWYoYXJnc1t2YWx1ZV0pIHtcclxuICAgICAgICAgICAgICAgIHJvd0VsZW1lbnQuY2xhc3NMaXN0LmFkZChhcmdzW3ZhbHVlXSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHJldHVybiA8c3Bhbj57dmFsdWV9PC9zcGFuPjtcclxuICAgIH1cclxuXHJcbiAgICBnZXRQYXJlbnRUYWJsZUVsZW1lbnQoKSA6IEhUTUxFbGVtZW50IHwgdW5kZWZpbmVkXHJcbiAgICB7XHJcbiAgICAgICAgbGV0IG1lID0gUmVhY3REb20uZmluZERPTU5vZGUodGhpcyk7XHJcbiAgICAgICAgdmFyIG1heExldmVscyA9IDEwO1xyXG4gICAgICAgIHZhciBwYXJlbnQgOiBIVE1MRWxlbWVudCA9IG1lLnBhcmVudEVsZW1lbnQ7XHJcbiAgICAgICAgd2hpbGUoIXBhcmVudC5jbGFzc0xpc3QuY29udGFpbnMoXCJ0YWJsZS1jb250YWluZXJcIikgfHwgbWF4TGV2ZWxzID09IDApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBwYXJlbnQ9cGFyZW50LnBhcmVudEVsZW1lbnQ7XHJcbiAgICAgICAgICAgIG1heExldmVscy0tO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYobWF4TGV2ZWxzPT0wKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcmV0dXJuIHBhcmVudDtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgZ2V0UGFyZW50Um93RWxlbWVudCgpIDogSFRNTEVsZW1lbnQgfCB1bmRlZmluZWRcclxuICAgIHtcclxuICAgICAgICBsZXQgbWUgPSBSZWFjdERvbS5maW5kRE9NTm9kZSh0aGlzKTtcclxuICAgICAgICB2YXIgbWF4TGV2ZWxzID0gMTA7XHJcbiAgICAgICAgdmFyIHBhcmVudCA6IEhUTUxFbGVtZW50ID0gbWUucGFyZW50RWxlbWVudDtcclxuICAgICAgICB3aGlsZSggcGFyZW50LnRhZ05hbWUudG9Mb3dlckNhc2UoKSAhPT1cInRyXCIgfHwgbWF4TGV2ZWxzID09IDApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBwYXJlbnQ9cGFyZW50LnBhcmVudEVsZW1lbnQ7XHJcbiAgICAgICAgICAgIG1heExldmVscy0tO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYobWF4TGV2ZWxzPT0wKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcmV0dXJuIHBhcmVudDtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgZ2V0UGFyZW50VGFibGVDb21wb25lbnRJZCh0YWJsZTogSFRNTEVsZW1lbnQpIDogc3RyaW5nXHJcbiAgICB7XHJcbiAgICAgICAgdmFyIGNvbXBvbmVudElkOiBzdHJpbmcgPSB0YWJsZS5hdHRyaWJ1dGVzLmdldE5hbWVkSXRlbSgnaWQnKS52YWx1ZTtcclxuICAgICAgICBcclxuICAgICAgICByZXR1cm4gY29tcG9uZW50SWQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbm1hbnl3aG8uY29tcG9uZW50LnJlZ2lzdGVyKCdUYWJsZVJvd1N0eWxlcicsIFRhYmxlUm93U3R5bGVyKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRhYmxlUm93U3R5bGVyOyIsImRlY2xhcmUgdmFyIG1hbnl3aG86IGFueTtcclxuXHJcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0ICogYXMgUmVhY3REb20gZnJvbSAncmVhY3QtZG9tJztcclxuXHJcbmNsYXNzIFRodW1ibmFpbCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxhbnksIGFueT4gXHJcbnsgICBcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzIDogYW55KVxyXG5cdHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICB9XHJcblxyXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSBcclxuICAgIHtcclxuICAgICAgICB0aGlzLmZvcmNlVXBkYXRlKCk7XHJcbiAgICB9XHJcblxyXG5cdHJlbmRlcigpXHJcblx0e1xyXG5cclxuICAgICAgICB2YXIgbWUgPSBSZWFjdERvbS5maW5kRE9NTm9kZSh0aGlzKTtcclxuICAgICAgICB2YXIgY29udGVudFZhbHVlIDogc3RyaW5nO1xyXG4gICAgICAgIHZhciB3aWR0aCA6IG51bWJlcjtcclxuICAgICAgICBpZihtZSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHZhciBwYXJlbnQgOiBIVE1MRWxlbWVudCA9IG1lLnBhcmVudEVsZW1lbnQ7XHJcbiAgICAgICAgICAgIHZhciBtYXhMZXZlbHMgPSAxMDtcclxuICAgICAgICAgICAgd2hpbGUoIXBhcmVudC5jbGFzc0xpc3QuY29udGFpbnMoXCJ0YWJsZS1jb250YWluZXJcIikgfHwgbWF4TGV2ZWxzID09IDApXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHBhcmVudD1wYXJlbnQucGFyZW50RWxlbWVudDtcclxuICAgICAgICAgICAgICAgIG1heExldmVscy0tO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZihtYXhMZXZlbHM9PTApXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBcIlwiO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB2YXIgY29tcG9uZW50SWQgPSBwYXJlbnQuYXR0cmlidXRlcy5nZXROYW1lZEl0ZW0oJ2lkJykudmFsdWU7XHJcbiAgICAgICAgICAgIHZhciB0YWJsZSA9IG1hbnl3aG8ubW9kZWwuZ2V0Q29tcG9uZW50KGNvbXBvbmVudElkLHRoaXMucHJvcHMuZmxvd0tleSk7XHJcblxyXG4gICAgICAgICAgICB2YXIgcHJvcGVydHlJZCA9IHRoaXMucHJvcHMucHJvcGVydHlJZDtcclxuXHJcbiAgICAgICAgICAgIGNvbnRlbnRWYWx1ZSA9IHRoaXMucHJvcHMuY29udGVudFZhbHVlIHx8IFwiXCI7XHJcblxyXG4gICAgICAgICAgICB3aWR0aCA9IHRhYmxlLmF0dHJpYnV0ZXNbXCJpbWFnZS1zY2FsZWQtd2lkdGhcIl0gfHwgNTA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB2YXIgb3V0ZXJTdHlsZSA6IFJlYWN0LkNTU1Byb3BlcnRpZXMgPSB7XHJcbiAgICAgICAgICAgIGJveFNpemluZzogXCJjb250ZW50LWJveFwiLFxyXG4gICAgICAgICAgICBwb3NpdGlvbiA6IFwicmVsYXRpdmVcIiBhcyBcInJlbGF0aXZlXCIsXHJcbiAgICAgICAgICAgIGRpc3BsYXk6IFwidGFibGUtY2VsbFwiLFxyXG4gICAgICAgICAgICBhbGlnbkNvbnRlbnQ6ICdtaWRkbGUnLFxyXG4gICAgICAgICAgICBtYXJnaW46ICcwICFpbXBvcnRhbnQnICAgICAgICB9O1xyXG5cclxuICAgICAgICBpZihjb250ZW50VmFsdWUpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBsZXQgc3JjPVwiXCI7XHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXtvdXRlclN0eWxlfT5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17Y29udGVudFZhbHVlfSBzdHlsZT17e21hcmdpbkxlZnQ6ICdhdXRvJywgbWFyZ2luUmlnaHQ6ICdhdXRvJywgaGVpZ2h0OiAnMTUwcHgnLCB3aWR0aDogXCJhdXRvXCJ9fS8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2VcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXY+PC9kaXY+XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5tYW55d2hvLmNvbXBvbmVudC5yZWdpc3RlcignVGh1bWJuYWlsJywgVGh1bWJuYWlsKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRodW1ibmFpbDsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJkZWNsYXJlIHZhciBtYW55d2hvOiBhbnk7XHJcblxyXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCAqIGFzIFJlYWN0RG9tIGZyb20gJ3JlYWN0LWRvbSc7XHJcbmltcG9ydCBcIi4vVm90ZVVwLmNzc1wiO1xyXG5cclxuLy90aGUgY29udGVudFZhbHVlIHdpbGwgaGF2ZSB0aGUgbG9va3VwIHZhbHVlXHJcbi8vXHJcbmNsYXNzIFZvdGVVcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxhbnksIGFueT4gXHJcbnsgIFxyXG4gICAgdGFibGU6IGFueTtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcyA6IGFueSlcclxuXHR7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgICAgIC8vdGhpcy5teVJlZiA9IFJlYWN0LmNyZWF0ZVJlZigpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbXBvbmVudERpZE1vdW50KCkgXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5nZXRUYWJsZSA9IHRoaXMuZ2V0VGFibGUuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLnZvdGVVcCA9IHRoaXMudm90ZVVwLmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy52b3RlRG93biA9IHRoaXMudm90ZURvd24uYmluZCh0aGlzKTtcclxuXHJcbiAgICAgICAgdGhpcy5nZXRUYWJsZSgpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMuZm9yY2VVcGRhdGUoKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgZ2V0VGFibGUoKSB7XHJcbiAgICAgICAgdmFyIG1heExldmVscyA9IDEwO1xyXG4gICAgICAgIHZhciBtZSA9IFJlYWN0RG9tLmZpbmRET01Ob2RlKHRoaXMpO1xyXG4gICAgICAgIHZhciBwYXJlbnQgOiBIVE1MRWxlbWVudCA9IG1lLnBhcmVudEVsZW1lbnQ7XHJcbiAgICAgICAgd2hpbGUoIXBhcmVudC5jbGFzc0xpc3QuY29udGFpbnMoXCJ0YWJsZS1jb250YWluZXJcIikgfHwgbWF4TGV2ZWxzID09IDApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBwYXJlbnQ9cGFyZW50LnBhcmVudEVsZW1lbnQ7XHJcbiAgICAgICAgICAgIG1heExldmVscy0tO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYobWF4TGV2ZWxzPT0wKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIFwiXCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBjb21wb25lbnRJZCA9IHBhcmVudC5hdHRyaWJ1dGVzLmdldE5hbWVkSXRlbSgnaWQnKS52YWx1ZTtcclxuICAgICAgICB0aGlzLnRhYmxlID0gbWFueXdoby5tb2RlbC5nZXRDb21wb25lbnQoY29tcG9uZW50SWQsdGhpcy5wcm9wcy5mbG93S2V5KTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRUYWJsZVJvdyhyb3dJZDogc3RyaW5nKSA6IGFueSB7XHJcbiAgICAgICAgbGV0IHJvdzogYW55O1xyXG4gICAgICAgIGNvbnN0IG1vZGVsOiAgYW55ID0gbWFueXdoby5tb2RlbC5nZXRDb21wb25lbnQodGhpcy50YWJsZS5pZCwgdGhpcy5wcm9wcy5mbG93S2V5KTtcclxuICAgICAgICBpZihtb2RlbCkge1xyXG4gICAgICAgICAgIG1vZGVsLm9iamVjdERhdGEuZm9yRWFjaCgocnc6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYocncuaW50ZXJuYWxJZCA9PT0gcm93SWQpIHtcclxuICAgICAgICAgICAgICAgICAgICByb3c9cndcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHJvdztcclxuICAgIH1cclxuXHJcbiAgICB2b3RlVXAoZTogYW55KSB7XHJcbiAgICAgICAgY29uc3Qgb25Wb3RlVXA6IHN0cmluZyA9IHRoaXMuZ2V0QXR0cmlidXRlVmFsdWUodGhpcy50YWJsZS5hdHRyaWJ1dGVzLFwib25Wb3RlVXBcIixcIlwiKTtcclxuICAgICAgICBpZihvblZvdGVVcC5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG91dGNvbWU6IGFueSA9IHRoaXMuZ2V0T3V0Y29tZShvblZvdGVVcCk7XHJcbiAgICAgICAgICAgIGlmKG91dGNvbWUpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHJvd1N0YXRlOiBhbnkgPSB0aGlzLmdldFRhYmxlUm93KHRoaXMucHJvcHMuaWQpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgbmV3U3RhdGUgPSB7IFwib2JqZWN0RGF0YVwiOiBbcm93U3RhdGVdIH07XHJcbiAgICAgICAgICAgICAgICBtYW55d2hvLnN0YXRlLnNldENvbXBvbmVudCh0aGlzLnRhYmxlLmlkLCBuZXdTdGF0ZSwgIHRoaXMucHJvcHMuZmxvd0tleSwgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICBtYW55d2hvLmNvbXBvbmVudC5vbk91dGNvbWUob3V0Y29tZSxudWxsLHRoaXMucHJvcHMuZmxvd0tleSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdm90ZURvd24oZTogYW55KSB7XHJcbiAgICAgICAgY29uc3Qgb25Wb3RlRG93biA9IHRoaXMuZ2V0QXR0cmlidXRlVmFsdWUodGhpcy50YWJsZS5hdHRyaWJ1dGVzLFwib25Wb3RlRG93blwiLFwiXCIpO1xyXG4gICAgICAgIGlmKG9uVm90ZURvd24ubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICBjb25zdCBvdXRjb21lOiBhbnkgPSB0aGlzLmdldE91dGNvbWUob25Wb3RlRG93bik7XHJcbiAgICAgICAgICAgIGlmKG91dGNvbWUpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHJvd1N0YXRlOiBhbnkgPSB0aGlzLmdldFRhYmxlUm93KHRoaXMucHJvcHMuaWQpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgbmV3U3RhdGUgPSB7IFwib2JqZWN0RGF0YVwiOiBbcm93U3RhdGVdIH07XHJcbiAgICAgICAgICAgICAgICBtYW55d2hvLnN0YXRlLnNldENvbXBvbmVudCh0aGlzLnRhYmxlLmlkLCBuZXdTdGF0ZSwgIHRoaXMucHJvcHMuZmxvd0tleSwgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICBtYW55d2hvLmNvbXBvbmVudC5vbk91dGNvbWUob3V0Y29tZSxudWxsLHRoaXMucHJvcHMuZmxvd0tleSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0QXR0cmlidXRlVmFsdWUoYXR0cmlidXRlcyA6IGFueSwgYXR0cmlidXRlIDogc3RyaW5nLCBkZWZhdWx0VmFsdWU6IHN0cmluZylcclxuICAgIHtcclxuICAgICAgICBpZihhdHRyaWJ1dGVzW2F0dHJpYnV0ZV0pIHtcclxuICAgICAgICAgICAgcmV0dXJuIGF0dHJpYnV0ZXNbYXR0cmlidXRlXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBkZWZhdWx0VmFsdWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGdldE91dGNvbWUob3V0Y29tZU5hbWU6IHN0cmluZykge1xyXG4gICAgICAgIGxldCBvdXRjb21lOiBhbnk7XHJcbiAgICAgICAgbGV0IG91dGNvbWVzOiBhbnlbXSA9IG1hbnl3aG8ubW9kZWwuZ2V0T3V0Y29tZXModGhpcy50YWJsZS5pZCwgdGhpcy5wcm9wcy5mbG93S2V5KTtcclxuICAgICAgICBvdXRjb21lcy5mb3JFYWNoKChvYzogYW55KSA9PiB7XHJcbiAgICAgICAgICAgIGlmKG9jLmRldmVsb3Blck5hbWUgPT09IG91dGNvbWVOYW1lKSB7XHJcbiAgICAgICAgICAgICAgICBvdXRjb21lID0gb2M7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgb3V0Y29tZXMgPSBtYW55d2hvLm1vZGVsLmdldE91dGNvbWVzKG51bGwsIHRoaXMucHJvcHMuZmxvd0tleSk7XHJcbiAgICAgICAgb3V0Y29tZXMuZm9yRWFjaCgob2M6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICBpZihvYy5kZXZlbG9wZXJOYW1lID09PSBvdXRjb21lTmFtZSkge1xyXG4gICAgICAgICAgICAgICAgb3V0Y29tZSA9IG9jO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIG91dGNvbWU7XHJcbiAgICB9XHJcblxyXG5cdHJlbmRlcigpXHJcblx0e1xyXG4gICAgICAgIGxldCBjdXJyZW50Vm90ZXM6IG51bWJlciA9IHBhcnNlSW50KHRoaXMucHJvcHMuY29udGVudFZhbHVlKTtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ2b3RldXBcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidm90ZXVwLWVsZW1lbnRcIlxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJnbHlwaGljb24gZ2x5cGhpY29uLXRyaWFuZ2xlLXRvcCB2b3RldXAtYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJWb3RlIEFwcCBVcFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMudm90ZVVwfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ2b3RldXAtZWxlbWVudFwiXHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInZvdGV1cC1sYWJlbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7Y3VycmVudFZvdGVzfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidm90ZXVwLWVsZW1lbnRcIlxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJnbHlwaGljb24gZ2x5cGhpY29uLXRyaWFuZ2xlLWJvdHRvbSB2b3RldXAtYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJWb3RlIEFwcCBEb3duXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy52b3RlRG93bn1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICBcclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcblxyXG5tYW55d2hvLmNvbXBvbmVudC5yZWdpc3RlcignVm90ZVVwJywgVm90ZVVwKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFZvdGVVcDsiLCJleHBvcnQgKiBmcm9tICcuL0VsYXBzZWRUaW1lRnJpZW5kbHknO1xyXG5leHBvcnQgKiBmcm9tICcuL0VsYXBzZWRUaW1lTGl2ZUxvbmcnO1xyXG5leHBvcnQgKiBmcm9tICcuL0VsYXBzZWRUaW1lTGl2ZVNob3J0JztcclxuZXhwb3J0ICogZnJvbSAnLi9FbGFwc2VkVGltZSc7XHJcbmV4cG9ydCAqIGZyb20gJy4vRGF0ZURETU1NWVknO1xyXG5leHBvcnQgKiBmcm9tICcuL0RhdGVUaW1lRERNTU1ZWUhITU0nO1xyXG5leHBvcnQgKiBmcm9tICcuL0Jvb2xlYW5JY29uJztcclxuZXhwb3J0ICogZnJvbSAnLi9TdGF0dXNJY29uJztcclxuZXhwb3J0ICogZnJvbSAnLi9Mb29rdXBWYWx1ZSc7XHJcbmV4cG9ydCAqIGZyb20gJy4vRXBvY2hEYXRlRERNTU1ZWSc7XHJcbmV4cG9ydCAqIGZyb20gJy4vRXBvY2hEYXRlVGltZURETU1NWVlISE1NJztcclxuZXhwb3J0ICogZnJvbSAnLi9QZXJjZW50UHJvZ3Jlc3NCYXInO1xyXG5leHBvcnQgKiBmcm9tICcuL0h5cGVybGluayc7XHJcbmV4cG9ydCAqIGZyb20gJy4vVGh1bWJuYWlsJztcclxuZXhwb3J0ICogZnJvbSAnLi9Eb2xsYXJWYWx1ZSc7XHJcbmV4cG9ydCAqIGZyb20gJy4vVGFibGVSb3dTdHlsZXInO1xyXG5leHBvcnQgKiBmcm9tICcuL0hvdmVyQm94JztcclxuZXhwb3J0ICogZnJvbSAnLi9Wb3RlVXAnO1xyXG5leHBvcnQgKiBmcm9tICcuL1JhbmtpbmcnO1xyXG5leHBvcnQgKiBmcm9tICcuL0ludFllc05vJztcclxuZXhwb3J0ICogZnJvbSAnLi9JbnRBY3RpdmVJbmFjdGl2ZSc7XHJcbmV4cG9ydCAqIGZyb20gJy4vRGF0ZUxvY2FsZSc7XHJcbmV4cG9ydCAqIGZyb20gJy4vRGF0ZVRpbWVMb2NhbGUnO1xyXG5cclxuXHJcbiIsIm1vZHVsZS5leHBvcnRzID0gUmVhY3Q7IiwibW9kdWxlLmV4cG9ydHMgPSBSZWFjdERPTTsiXSwic291cmNlUm9vdCI6IiJ9