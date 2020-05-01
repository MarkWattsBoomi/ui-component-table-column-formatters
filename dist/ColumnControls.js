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

module.exports = React;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = ReactDOM;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(3));
__export(__webpack_require__(4));
__export(__webpack_require__(5));
__export(__webpack_require__(7));
__export(__webpack_require__(8));
__export(__webpack_require__(9));
__export(__webpack_require__(10));
__export(__webpack_require__(11));
__export(__webpack_require__(12));
__export(__webpack_require__(13));
__export(__webpack_require__(14));
__export(__webpack_require__(15));
__export(__webpack_require__(16));
__export(__webpack_require__(17));
__export(__webpack_require__(18));
__export(__webpack_require__(19));
__export(__webpack_require__(20));


/***/ }),
/* 3 */
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
var React = __webpack_require__(0);
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
/* 4 */
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
var React = __webpack_require__(0);
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
/* 5 */
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
var React = __webpack_require__(0);
var DateTimeHelpers_1 = __webpack_require__(6);
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
/* 6 */
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
/* 7 */
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
var React = __webpack_require__(0);
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
/* 8 */
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
var React = __webpack_require__(0);
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
/* 9 */
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
var React = __webpack_require__(0);
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
/* 10 */
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
var React = __webpack_require__(0);
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
/* 11 */
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
var React = __webpack_require__(0);
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
/* 12 */
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
var React = __webpack_require__(0);
var ReactDom = __webpack_require__(1);
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
/* 13 */
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
var React = __webpack_require__(0);
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
/* 14 */
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
var React = __webpack_require__(0);
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
/* 15 */
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
var React = __webpack_require__(0);
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
/* 16 */
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
var React = __webpack_require__(0);
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
/* 17 */
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
var React = __webpack_require__(0);
var ReactDom = __webpack_require__(1);
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
            display: "grid",
            alignContent: 'middle',
            margin: '0 !important'
        };
        if (contentValue) {
            var src = "";
            return (React.createElement("div", { style: outerStyle },
                React.createElement("img", { src: contentValue, width: width, style: { marginLeft: 'auto', marginRight: 'auto' } })));
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
/* 18 */
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
var React = __webpack_require__(0);
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
/* 19 */
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
var React = __webpack_require__(0);
var ReactDom = __webpack_require__(1);
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
/* 20 */
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
var React = __webpack_require__(0);
var ReactDom = __webpack_require__(1);
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


/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNTZmYmEyYzY4MDYyM2MxMGYxYmIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiUmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJSZWFjdERPTVwiIiwid2VicGFjazovLy8uL3NyYy9pbmRleC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL0VsYXBzZWRUaW1lRnJpZW5kbHkudHN4Iiwid2VicGFjazovLy8uL3NyYy9FbGFwc2VkVGltZUxpdmVMb25nLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvRWxhcHNlZFRpbWVMaXZlU2hvcnQudHN4Iiwid2VicGFjazovLy8uL3NyYy9EYXRlVGltZUhlbHBlcnMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0VsYXBzZWRUaW1lLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvRGF0ZURETU1NWVkudHN4Iiwid2VicGFjazovLy8uL3NyYy9EYXRlVGltZURETU1NWVlISE1NLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvQm9vbGVhbkljb24udHN4Iiwid2VicGFjazovLy8uL3NyYy9TdGF0dXNJY29uLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvTG9va3VwVmFsdWUudHN4Iiwid2VicGFjazovLy8uL3NyYy9FcG9jaERhdGVERE1NTVlZLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvRXBvY2hEYXRlVGltZURETU1NWVlISE1NLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvUGVyY2VudFByb2dyZXNzQmFyLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvSHlwZXJsaW5rLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvVGh1bWJuYWlsLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvRG9sbGFyVmFsdWUudHN4Iiwid2VicGFjazovLy8uL3NyYy9UYWJsZVJvd1N0eWxlci50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL0hvdmVyQm94LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtR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QVEsQ0FBQyxVQUFVLEVBQUUsUUFBUSxDQUFDLENBQUM7QUFFakQsa0JBQWUsUUFBUSxDQUFDIiwiZmlsZSI6IkNvbHVtbkNvbnRyb2xzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMik7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgNTZmYmEyYzY4MDYyM2MxMGYxYmIiLCJtb2R1bGUuZXhwb3J0cyA9IFJlYWN0O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiUmVhY3RcIlxuLy8gbW9kdWxlIGlkID0gMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFJlYWN0RE9NO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiUmVhY3RET01cIlxuLy8gbW9kdWxlIGlkID0gMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnQgKiBmcm9tICcuL0VsYXBzZWRUaW1lRnJpZW5kbHknO1xyXG5leHBvcnQgKiBmcm9tICcuL0VsYXBzZWRUaW1lTGl2ZUxvbmcnO1xyXG5leHBvcnQgKiBmcm9tICcuL0VsYXBzZWRUaW1lTGl2ZVNob3J0JztcclxuZXhwb3J0ICogZnJvbSAnLi9FbGFwc2VkVGltZSc7XHJcbmV4cG9ydCAqIGZyb20gJy4vRGF0ZURETU1NWVknO1xyXG5leHBvcnQgKiBmcm9tICcuL0RhdGVUaW1lRERNTU1ZWUhITU0nO1xyXG5leHBvcnQgKiBmcm9tICcuL0Jvb2xlYW5JY29uJztcclxuZXhwb3J0ICogZnJvbSAnLi9TdGF0dXNJY29uJztcclxuZXhwb3J0ICogZnJvbSAnLi9Mb29rdXBWYWx1ZSc7XHJcbmV4cG9ydCAqIGZyb20gJy4vRXBvY2hEYXRlRERNTU1ZWSc7XHJcbmV4cG9ydCAqIGZyb20gJy4vRXBvY2hEYXRlVGltZURETU1NWVlISE1NJztcclxuZXhwb3J0ICogZnJvbSAnLi9QZXJjZW50UHJvZ3Jlc3NCYXInO1xyXG5leHBvcnQgKiBmcm9tICcuL0h5cGVybGluayc7XHJcbmV4cG9ydCAqIGZyb20gJy4vVGh1bWJuYWlsJztcclxuZXhwb3J0ICogZnJvbSAnLi9Eb2xsYXJWYWx1ZSc7XHJcbmV4cG9ydCAqIGZyb20gJy4vVGFibGVSb3dTdHlsZXInO1xyXG5leHBvcnQgKiBmcm9tICcuL0hvdmVyQm94JztcclxuXHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9pbmRleC50c3giLCJkZWNsYXJlIHZhciBtYW55d2hvOiBhbnk7XHJcblxyXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5jbGFzcyBFbGFwc2VkVGltZUZyaWVuZGx5IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PGFueSwgYW55PiBcclxueyAgIFxyXG4gICAgY29uc3RydWN0b3IocHJvcHMgOiBhbnkpXHJcblx0e1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgIH1cclxuXHJcbiAgICBjb21wb25lbnREaWRNb3VudCgpIFxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuZm9yY2VVcGRhdGUoKTtcclxuICAgIH1cclxuXHJcblx0cmVuZGVyKClcclxuXHR7XHJcblx0ICAgXHJcbiAgICAgICAgaWYodGhpcy5wcm9wcy5jb250ZW50VmFsdWUpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB2YXIgZHQgPSBuZXcgRGF0ZSh0aGlzLnByb3BzLmNvbnRlbnRWYWx1ZSlcclxuICAgICAgICAgICAgdmFyIGVsYXBzZWQgPSB0aGlzLmVsYXBzZWRUaW1lKGR0KTtcclxuICAgICAgICAgICAgcmV0dXJuIDxzcGFuPntlbGFwc2VkfTwvc3Bhbj47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2VcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBlbGFwc2VkVGltZSAoZnJvbURhdGUgOiBEYXRlKSBcclxuICAgIHtcclxuICAgICAgY29uc3QgY29ycmVjdGVkRGF0ZSA9IG5ldyBEYXRlKGZyb21EYXRlLmdldFRpbWUoKSArIChmcm9tRGF0ZS5nZXRUaW1lem9uZU9mZnNldCgpICo2MCAqMTAwMCkpO1xyXG4gICAgICB2YXIgblRvdGFsRGlmZiA9IE1hdGgucm91bmQoKG5ldyBEYXRlKCkpLmdldFRpbWUoKSAvIDEwMDApIC0gKGNvcnJlY3RlZERhdGUuZ2V0VGltZSgpIC8gMTAwMCk7XHJcbiAgICAgIGlmIChuVG90YWxEaWZmID49IDApIFxyXG4gICAgICB7XHJcbiAgICAgICAgdmFyIG9EaWZmIDogYW55ID0ge307XHJcbiAgICAgICAgb0RpZmYuZGF5cyA9IE1hdGguZmxvb3IoblRvdGFsRGlmZiAvIDg2NDAwKTtcclxuICAgICAgICBuVG90YWxEaWZmIC09IG9EaWZmLmRheXMgKiA4NjQwMDtcclxuICAgICAgICBvRGlmZi5ob3VycyA9IE1hdGguZmxvb3IoblRvdGFsRGlmZiAvIDM2MDApO1xyXG4gICAgICAgIG5Ub3RhbERpZmYgLT0gb0RpZmYuaG91cnMgKiAzNjAwO1xyXG4gICAgICAgIG9EaWZmLm1pbnV0ZXMgPSBNYXRoLmZsb29yKG5Ub3RhbERpZmYgLyA2MCk7XHJcbiAgICAgICAgblRvdGFsRGlmZiAtPSBvRGlmZi5taW51dGVzICogNjA7XHJcbiAgICAgICAgb0RpZmYuc2Vjb25kcyA9IE1hdGguZmxvb3IoblRvdGFsRGlmZik7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdmFyIHJlc3VsdCA9IFwiXCI7XHJcbiAgICAgICAgaWYob0RpZmYuZGF5cyA+IDApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXN1bHQgKz0gb0RpZmYuZGF5cyArIFwiIGRheXNcIjtcclxuICAgICAgICB9XHJcbiAgXHJcbiAgICAgICAgaWYob0RpZmYuaG91cnMgPiAwKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGlmKHJlc3VsdC5sZW5ndGggPiAwKVxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICByZXN1bHQgKz0gXCIsIFwiO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXN1bHQgKz0gb0RpZmYuaG91cnMgKyBcIiBob3Vyc1wiO1xyXG4gICAgICAgIH1cclxuICBcclxuICAgICAgICBpZihvRGlmZi5taW51dGVzID4gMClcclxuICAgICAgICB7XHJcbiAgICAgICAgICBpZihyZXN1bHQubGVuZ3RoID4gMClcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgcmVzdWx0ICs9IFwiLCBcIjtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmVzdWx0ICs9IG9EaWZmLm1pbnV0ZXMgKyBcIiBtaW51dGVzXCI7XHJcbiAgICAgICAgfVxyXG4gIFxyXG4gICAgICAgIGlmKG9EaWZmLnNlY29uZHMgPiAwKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGlmKHJlc3VsdC5sZW5ndGggPiAwKVxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICByZXN1bHQgKz0gXCIsIFwiO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXN1bHQgKz0gb0RpZmYuc2Vjb25kcyArIFwiIHNlY29uZHNcIjtcclxuICAgICAgICB9XHJcbiAgXHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgICAgfSBcclxuICAgICAgZWxzZSBcclxuICAgICAge1xyXG4gICAgICAgIHJldHVybiBcIlwiO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbm1hbnl3aG8uY29tcG9uZW50LnJlZ2lzdGVyKCdFbGFwc2VkVGltZUZyaWVuZGx5JywgRWxhcHNlZFRpbWVGcmllbmRseSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBFbGFwc2VkVGltZUZyaWVuZGx5O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9FbGFwc2VkVGltZUZyaWVuZGx5LnRzeCIsImRlY2xhcmUgdmFyIG1hbnl3aG86IGFueTtcclxuXHJcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbmNsYXNzIEVsYXBzZWRUaW1lTGl2ZUxvbmcgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8YW55LCBhbnk+IFxyXG57ICAgXHJcblxyXG4gIHRpbWVySUQgPSAtMTtcclxuXHJcbiAgY29uc3RydWN0b3IocHJvcHMgOiBhbnkpXHJcbiAge1xyXG4gICAgICBzdXBlcihwcm9wcyk7XHJcbiAgfVxyXG5cclxuICBjb21wb25lbnREaWRNb3VudCgpIFxyXG4gIHtcclxuICAgICAgdGhpcy5mb3JjZVVwZGF0ZSgpO1xyXG4gICAgICB0aGlzLnRpbWVySUQgPSB3aW5kb3cuc2V0SW50ZXJ2YWwodGhpcy50aW1lckV2ZW50LmJpbmQodGhpcyksIDEwMDApO1xyXG4gIH1cclxuXHJcbiAgY29tcG9uZW50V2lsbFVubW91bnQoKVxyXG4gIHtcclxuICAgIGlmKHRoaXMudGltZXJJRCA+PSAwKVxyXG4gICAge1xyXG4gICAgICBjbGVhckludGVydmFsKHRoaXMudGltZXJJRCk7XHJcbiAgICAgIHRoaXMudGltZXJJRCA9IC0xO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgdGltZXJFdmVudCgpXHJcbiAge1xyXG4gICAgdGhpcy5mb3JjZVVwZGF0ZSgpO1xyXG4gIH1cclxuXHJcblx0cmVuZGVyKClcclxuXHR7XHJcblx0ICAgXHJcbiAgICAgICAgaWYodGhpcy5wcm9wcy5jb250ZW50VmFsdWUpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB2YXIgZHQgPSBuZXcgRGF0ZSh0aGlzLnByb3BzLmNvbnRlbnRWYWx1ZSlcclxuICAgICAgICAgICAgdmFyIGVsYXBzZWQgPSB0aGlzLmVsYXBzZWRUaW1lKGR0KTtcclxuICAgICAgICAgICAgcmV0dXJuIDxzcGFuPntlbGFwc2VkfTwvc3Bhbj47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2VcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuICB9XHJcblxyXG4gIGVsYXBzZWRUaW1lIChmcm9tRGF0ZSA6IERhdGUpIFxyXG4gIHtcclxuICAgIGNvbnN0IGNvcnJlY3RlZERhdGUgPSBuZXcgRGF0ZShmcm9tRGF0ZS5nZXRUaW1lKCkgKyAoZnJvbURhdGUuZ2V0VGltZXpvbmVPZmZzZXQoKSAqNjAgKjEwMDApKTtcclxuICAgIHZhciBuVG90YWxEaWZmID0gTWF0aC5yb3VuZCgobmV3IERhdGUoKSkuZ2V0VGltZSgpIC8gMTAwMCkgLSAoY29ycmVjdGVkRGF0ZS5nZXRUaW1lKCkgLyAxMDAwKTtcclxuICAgIGlmIChuVG90YWxEaWZmID49IDApIFxyXG4gICAge1xyXG4gICAgICB2YXIgb0RpZmYgOiBhbnkgPSB7fTtcclxuICAgICAgb0RpZmYuZGF5cyA9IE1hdGguZmxvb3IoblRvdGFsRGlmZiAvIDg2NDAwKTtcclxuICAgICAgblRvdGFsRGlmZiAtPSBvRGlmZi5kYXlzICogODY0MDA7XHJcbiAgICAgIG9EaWZmLmhvdXJzID0gTWF0aC5mbG9vcihuVG90YWxEaWZmIC8gMzYwMCk7XHJcbiAgICAgIG5Ub3RhbERpZmYgLT0gb0RpZmYuaG91cnMgKiAzNjAwO1xyXG4gICAgICBvRGlmZi5taW51dGVzID0gTWF0aC5mbG9vcihuVG90YWxEaWZmIC8gNjApO1xyXG4gICAgICBuVG90YWxEaWZmIC09IG9EaWZmLm1pbnV0ZXMgKiA2MDtcclxuICAgICAgb0RpZmYuc2Vjb25kcyA9IE1hdGguZmxvb3IoblRvdGFsRGlmZik7XHJcbiAgICAgIFxyXG4gICAgICB2YXIgcmVzdWx0ID0gXCJcIjtcclxuICAgICAgaWYob0RpZmYuZGF5cyA+IDApXHJcbiAgICAgIHtcclxuICAgICAgICAgIHJlc3VsdCArPSBvRGlmZi5kYXlzICsgXCIgZGF5c1wiO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZihvRGlmZi5ob3VycyA+IDApXHJcbiAgICAgIHtcclxuICAgICAgICBpZihyZXN1bHQubGVuZ3RoID4gMClcclxuICAgICAgICB7XHJcbiAgICAgICAgICByZXN1bHQgKz0gXCIsIFwiO1xyXG4gICAgICAgIH1cclxuICAgICAgICAgIHJlc3VsdCArPSBvRGlmZi5ob3VycyArIFwiIGhvdXJzXCI7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmKG9EaWZmLm1pbnV0ZXMgPiAwKVxyXG4gICAgICB7XHJcbiAgICAgICAgaWYocmVzdWx0Lmxlbmd0aCA+IDApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgcmVzdWx0ICs9IFwiLCBcIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgICByZXN1bHQgKz0gb0RpZmYubWludXRlcyArIFwiIG1pbnV0ZXNcIjtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYob0RpZmYuc2Vjb25kcyA+IDApXHJcbiAgICAgIHtcclxuICAgICAgICBpZihyZXN1bHQubGVuZ3RoID4gMClcclxuICAgICAgICB7XHJcbiAgICAgICAgICByZXN1bHQgKz0gXCIsIFwiO1xyXG4gICAgICAgIH1cclxuICAgICAgICAgIHJlc3VsdCArPSBvRGlmZi5zZWNvbmRzICsgXCIgc2Vjb25kc1wiO1xyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfSBcclxuICAgIGVsc2UgXHJcbiAgICB7XHJcbiAgICAgIHJldHVybiBcIlwiO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxubWFueXdoby5jb21wb25lbnQucmVnaXN0ZXIoJ0VsYXBzZWRUaW1lTGl2ZUxvbmcnLCBFbGFwc2VkVGltZUxpdmVMb25nKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEVsYXBzZWRUaW1lTGl2ZUxvbmc7XHJcblxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvRWxhcHNlZFRpbWVMaXZlTG9uZy50c3giLCJkZWNsYXJlIHZhciBtYW55d2hvOiBhbnk7XHJcblxyXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IFRpbWVIZWxwZXJzLCBpRWxhcHNlZCB9IGZyb20gJy4vRGF0ZVRpbWVIZWxwZXJzJztcclxuXHJcbmNsYXNzIEVsYXBzZWRUaW1lTGl2ZVNob3J0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PGFueSwgYW55PiBcclxueyAgIFxyXG5cclxuICB0aW1lcklEID0gLTE7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByb3BzIDogYW55KVxyXG4gIHtcclxuICAgICAgc3VwZXIocHJvcHMpO1xyXG4gIH1cclxuXHJcbiAgY29tcG9uZW50RGlkTW91bnQoKSBcclxuICB7XHJcbiAgICAgIHRoaXMuZm9yY2VVcGRhdGUoKTtcclxuICAgICAgdGhpcy50aW1lcklEID0gd2luZG93LnNldEludGVydmFsKHRoaXMudGltZXJFdmVudC5iaW5kKHRoaXMpLCAxMDAwKTtcclxuICB9XHJcblxyXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KClcclxuICB7XHJcbiAgICBpZih0aGlzLnRpbWVySUQgPj0gMClcclxuICAgIHtcclxuICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLnRpbWVySUQpO1xyXG4gICAgICB0aGlzLnRpbWVySUQgPSAtMTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHRpbWVyRXZlbnQoKVxyXG4gIHtcclxuICAgIHRoaXMuZm9yY2VVcGRhdGUoKTtcclxuICB9XHJcblxyXG5cdHJlbmRlcigpXHJcblx0e1xyXG5cdCAgIFxyXG4gICAgICAgIGlmKHRoaXMucHJvcHMuY29udGVudFZhbHVlKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdmFyIGR0ID0gbmV3IERhdGUodGhpcy5wcm9wcy5jb250ZW50VmFsdWUpXHJcbiAgICAgICAgICAgIHZhciBlbGFwc2VkID0gdGhpcy5lbGFwc2VkVGltZShkdCk7XHJcbiAgICAgICAgICAgIHJldHVybiA8c3Bhbj57ZWxhcHNlZH08L3NwYW4+O1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcbiAgfVxyXG5cclxuICBlbGFwc2VkVGltZSAoZnJvbURhdGUgOiBEYXRlKSBcclxuICB7XHJcblxyXG4gICAgY29uc3QgZWxhcHNlZCA6IGlFbGFwc2VkID0gVGltZUhlbHBlcnMuZ2V0RWxhcHNlZChmcm9tRGF0ZSwgbmV3IERhdGUoKSk7XHJcbiAgICAgICAgICBcclxuICAgICAgdmFyIHJlc3VsdCA9IFwiXCI7XHJcbiAgICAgIGlmKGVsYXBzZWQuZGF5cyA+IDApXHJcbiAgICAgIHtcclxuICAgICAgICAgIHJlc3VsdCArPSBlbGFwc2VkLmRheXMgKyBcImRcIjtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYoZWxhcHNlZC5ob3VycyA+IDApXHJcbiAgICAgIHtcclxuICAgICAgICBpZihyZXN1bHQubGVuZ3RoID4gMClcclxuICAgICAgICB7XHJcbiAgICAgICAgICByZXN1bHQgKz0gXCIvXCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICAgcmVzdWx0ICs9IGVsYXBzZWQuaG91cnMgKyBcImhcIjtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYoZWxhcHNlZC5taW51dGVzID4gMClcclxuICAgICAge1xyXG4gICAgICAgIGlmKHJlc3VsdC5sZW5ndGggPiAwKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgIHJlc3VsdCArPSBcIi9cIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgICByZXN1bHQgKz0gZWxhcHNlZC5taW51dGVzICsgXCJtXCI7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmKGVsYXBzZWQuc2Vjb25kcyA+IDApXHJcbiAgICAgIHtcclxuICAgICAgICBpZihyZXN1bHQubGVuZ3RoID4gMClcclxuICAgICAgICB7XHJcbiAgICAgICAgICByZXN1bHQgKz0gXCIvXCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICAgcmVzdWx0ICs9IGVsYXBzZWQuc2Vjb25kcyArIFwic1wiO1xyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4gcmVzdWx0O1xyXG4gIH1cclxufVxyXG5cclxubWFueXdoby5jb21wb25lbnQucmVnaXN0ZXIoJ0VsYXBzZWRUaW1lTGl2ZVNob3J0JywgRWxhcHNlZFRpbWVMaXZlU2hvcnQpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRWxhcHNlZFRpbWVMaXZlU2hvcnQ7XHJcblxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvRWxhcHNlZFRpbWVMaXZlU2hvcnQudHN4IiwiZXhwb3J0IGludGVyZmFjZSBpRWxhcHNlZFxyXG57XHJcbiAgICBkYXlzIDogbnVtYmVyLFxyXG4gICAgaG91cnMgOiBudW1iZXIsXHJcbiAgICBtaW51dGVzOiBudW1iZXIsXHJcbiAgICBzZWNvbmRzOiBudW1iZXJcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFRpbWVIZWxwZXJzXHJcbntcclxuICAgIHN0YXRpYyBnZXRFbGFwc2VkKGZyb21EYXRlIDogRGF0ZSwgbG9jYWxEYXRlIDogRGF0ZSkgOiBpRWxhcHNlZFxyXG4gICAge1xyXG4gICAgICAgIGxldCBlbGFwc2VkIDogaUVsYXBzZWQgPSB7XHJcbiAgICAgICAgICAgIGRheXM6IDAsXHJcbiAgICAgICAgICAgIGhvdXJzOiAwLFxyXG4gICAgICAgICAgICBtaW51dGVzOiAwLFxyXG4gICAgICAgICAgICBzZWNvbmRzOiAwXHJcbiAgICAgICAgfTtcclxuICAgICAgICBcclxuICAgICAgICBjb25zdCBmcm9tVVRDT2Zmc2V0ID0gZnJvbURhdGUuZ2V0VGltZXpvbmVPZmZzZXQoKSAqIDYwMDAwO1xyXG4gICAgICAgIGNvbnN0IGZyb21VVEMgOiBEYXRlID0gbmV3IERhdGUoZnJvbURhdGUuZ2V0VGltZSgpIC0gZnJvbVVUQ09mZnNldCk7XHJcbiAgICBcclxuICAgICAgICAvL2NvbnZlcnQgbG9jYWxEYXRlIHRvIFVUQ1xyXG4gICAgICAgIGNvbnN0IG5vd1VUQ09mZnNldCA9IGxvY2FsRGF0ZS5nZXRUaW1lem9uZU9mZnNldCgpICogNjAwMDA7XHJcbiAgICAgICAgY29uc3Qgbm93VVRDIDogRGF0ZSA9IG5ldyBEYXRlKGxvY2FsRGF0ZS5nZXRUaW1lKCkgLSBub3dVVENPZmZzZXQpO1xyXG4gICAgXHJcbiAgICAgICAgbGV0IGRpZmZNaWxsaXMgPSBNYXRoLnJvdW5kKGxvY2FsRGF0ZS5nZXRUaW1lKCkgLSBmcm9tRGF0ZS5nZXRUaW1lKCkpO1xyXG5cclxuICAgICAgICBcclxuICAgICAgICBlbGFwc2VkLmRheXMgPSBNYXRoLmZsb29yKGRpZmZNaWxsaXMgLyA4NjQwMDAwMCk7XHJcbiAgICAgICAgZGlmZk1pbGxpcyAtPSBlbGFwc2VkLmRheXMgKiA4NjQwMDAwMDtcclxuICAgICAgICBlbGFwc2VkLmhvdXJzID0gTWF0aC5mbG9vcihkaWZmTWlsbGlzIC8gMzYwMDAwMCk7XHJcbiAgICAgICAgZGlmZk1pbGxpcyAtPSBlbGFwc2VkLmhvdXJzICogMzYwMDAwMDtcclxuICAgICAgICBlbGFwc2VkLm1pbnV0ZXMgPSBNYXRoLmZsb29yKGRpZmZNaWxsaXMgLyA2MDAwMCk7XHJcbiAgICAgICAgZGlmZk1pbGxpcyAtPSBlbGFwc2VkLm1pbnV0ZXMgKiA2MDAwMDtcclxuICAgICAgICBlbGFwc2VkLnNlY29uZHMgPSBNYXRoLmZsb29yKGRpZmZNaWxsaXMgLyAxMDAwKTtcclxuICAgICAgXHJcbiAgICAgICAgcmV0dXJuIGVsYXBzZWRcclxuICAgIH1cclxuXHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL0RhdGVUaW1lSGVscGVycy50cyIsImRlY2xhcmUgdmFyIG1hbnl3aG86IGFueTtcclxuXHJcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbmNsYXNzIEVsYXBzZWRUaW1lIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PGFueSwgYW55PiBcclxueyAgIFxyXG4gICAgY29uc3RydWN0b3IocHJvcHMgOiBhbnkpXHJcblx0e1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgIH1cclxuXHJcbiAgICBjb21wb25lbnREaWRNb3VudCgpIFxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuZm9yY2VVcGRhdGUoKTtcclxuICAgIH1cclxuXHJcblx0cmVuZGVyKClcclxuXHR7XHJcblx0ICAgXHJcbiAgICAgICAgaWYodGhpcy5wcm9wcy5jb250ZW50VmFsdWUpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB2YXIgZHQgPSBuZXcgRGF0ZSh0aGlzLnByb3BzLmNvbnRlbnRWYWx1ZSlcclxuICAgICAgICAgICAgdmFyIGVsYXBzZWQgPSB0aGlzLmVsYXBzZWRUaW1lKGR0KTtcclxuICAgICAgICAgICAgcmV0dXJuIDxzcGFuPntlbGFwc2VkfTwvc3Bhbj47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2VcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuICB9XHJcblxyXG4gIGVsYXBzZWRUaW1lIChmcm9tRGF0ZSA6IERhdGUpIFxyXG4gIHtcclxuICAgIHZhciBuVG90YWxEaWZmID0gTWF0aC5yb3VuZCgobmV3IERhdGUoKSkuZ2V0VGltZSgpIC8gMTAwMCkgLSAoZnJvbURhdGUuZ2V0VGltZSgpIC8gMTAwMCk7XHJcbiAgICBpZiAoblRvdGFsRGlmZiA+PSAwKSBcclxuICAgIHtcclxuICAgICAgdmFyIG9EaWZmIDogYW55ID0ge307XHJcbiAgICAgIG9EaWZmLmRheXMgPSBNYXRoLmZsb29yKG5Ub3RhbERpZmYgLyA4NjQwMCk7XHJcbiAgICAgIG5Ub3RhbERpZmYgLT0gb0RpZmYuZGF5cyAqIDg2NDAwO1xyXG4gICAgICBvRGlmZi5ob3VycyA9IE1hdGguZmxvb3IoblRvdGFsRGlmZiAvIDM2MDApO1xyXG4gICAgICBuVG90YWxEaWZmIC09IG9EaWZmLmhvdXJzICogMzYwMDtcclxuICAgICAgb0RpZmYubWludXRlcyA9IE1hdGguZmxvb3IoblRvdGFsRGlmZiAvIDYwKTtcclxuICAgICAgblRvdGFsRGlmZiAtPSBvRGlmZi5taW51dGVzICogNjA7XHJcbiAgICAgIG9EaWZmLnNlY29uZHMgPSBNYXRoLmZsb29yKG5Ub3RhbERpZmYpO1xyXG4gICAgICBcclxuICAgICAgdmFyIHJlc3VsdCA9IFwiXCI7XHJcbiAgICAgIGlmKG9EaWZmLmRheXMgPiAwKVxyXG4gICAgICB7XHJcbiAgICAgICAgICByZXN1bHQgKz0gb0RpZmYuZGF5cyArIFwiIGRheXNcIjtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYob0RpZmYuaG91cnMgPiAwKVxyXG4gICAgICB7XHJcbiAgICAgICAgaWYocmVzdWx0Lmxlbmd0aCA+IDApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgcmVzdWx0ICs9IFwiLCBcIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgICByZXN1bHQgKz0gb0RpZmYuaG91cnMgKyBcIiBob3Vyc1wiO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZihvRGlmZi5taW51dGVzID4gMClcclxuICAgICAge1xyXG4gICAgICAgIGlmKHJlc3VsdC5sZW5ndGggPiAwKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgIHJlc3VsdCArPSBcIiwgXCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICAgcmVzdWx0ICs9IG9EaWZmLm1pbnV0ZXMgKyBcIiBtaW51dGVzXCI7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmKG9EaWZmLnNlY29uZHMgPiAwKVxyXG4gICAgICB7XHJcbiAgICAgICAgaWYocmVzdWx0Lmxlbmd0aCA+IDApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgcmVzdWx0ICs9IFwiLCBcIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgICByZXN1bHQgKz0gb0RpZmYuc2Vjb25kcyArIFwiIHNlY29uZHNcIjtcclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH0gXHJcbiAgICBlbHNlIFxyXG4gICAge1xyXG4gICAgICByZXR1cm4gXCJcIjtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbm1hbnl3aG8uY29tcG9uZW50LnJlZ2lzdGVyKCdFbGFwc2VkVGltZScsIEVsYXBzZWRUaW1lKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEVsYXBzZWRUaW1lO1xyXG5cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL0VsYXBzZWRUaW1lLnRzeCIsImRlY2xhcmUgdmFyIG1hbnl3aG86IGFueTtcclxuXHJcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbmNsYXNzIERhdGVERE1NTVlZIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PGFueSwgYW55PiBcclxueyAgIFxyXG4gICAgY29uc3RydWN0b3IocHJvcHMgOiBhbnkpXHJcblx0e1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgIH1cclxuXHJcbiAgICBjb21wb25lbnREaWRNb3VudCgpIFxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuZm9yY2VVcGRhdGUoKTtcclxuICAgIH1cclxuXHJcblx0cmVuZGVyKClcclxuXHR7XHJcblx0ICAgXHJcbiAgICAgICAgaWYodGhpcy5wcm9wcy5jb250ZW50VmFsdWUpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICAvL2Zvcm1hdCB0aGUgZGF0ZSB1c2luZyBSZWFjdCBmb3JtYXR0ZXIgaW50byBkdCBzdHJpbmdcclxuICAgICAgICAgICAgdmFyIGR0ID0gbmV3IEludGwuRGF0ZVRpbWVGb3JtYXQoJ2VuLUdCJywgeyAgIFxyXG4gICAgICAgICAgICAgICAgeWVhcjogJ251bWVyaWMnLCBcclxuICAgICAgICAgICAgICAgIG1vbnRoOiAnbG9uZycsIFxyXG4gICAgICAgICAgICAgICAgZGF5OiAnMi1kaWdpdCcgXHJcbiAgICAgICAgICAgIH0pLmZvcm1hdChuZXcgRGF0ZSh0aGlzLnByb3BzLmNvbnRlbnRWYWx1ZSkpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgcmV0dXJuIDxzcGFuPntkdH08L3NwYW4+O1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbm1hbnl3aG8uY29tcG9uZW50LnJlZ2lzdGVyKCdEYXRlRERNTU1ZWScsIERhdGVERE1NTVlZKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IERhdGVERE1NTVlZO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9EYXRlRERNTU1ZWS50c3giLCJkZWNsYXJlIHZhciBtYW55d2hvOiBhbnk7XHJcblxyXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5jbGFzcyBEYXRlVGltZURETU1NWVlISE1NIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PGFueSwgYW55PiBcclxueyAgIFxyXG4gICAgY29uc3RydWN0b3IocHJvcHMgOiBhbnkpXHJcblx0e1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgIH1cclxuXHJcbiAgICBjb21wb25lbnREaWRNb3VudCgpIFxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuZm9yY2VVcGRhdGUoKTtcclxuICAgIH1cclxuXHJcblx0cmVuZGVyKClcclxuXHR7XHJcblx0ICAgXHJcbiAgICAgICAgaWYodGhpcy5wcm9wcy5jb250ZW50VmFsdWUpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICAvL2Zvcm1hdCB0aGUgZGF0ZSB1c2luZyBSZWFjdCBmb3JtYXR0ZXIgaW50byBkdCBzdHJpbmdcclxuICAgICAgICAgICAgdmFyIGR0ID0gbmV3IEludGwuRGF0ZVRpbWVGb3JtYXQoJ2VuLUdCJywgeyAgIFxyXG4gICAgICAgICAgICAgICAgeWVhcjogJ251bWVyaWMnLCBcclxuICAgICAgICAgICAgICAgIG1vbnRoOiAnbG9uZycsIFxyXG4gICAgICAgICAgICAgICAgZGF5OiAnMi1kaWdpdCcsXHJcbiAgICAgICAgICAgICAgICBob3VyOiAnMi1kaWdpdCcsXHJcbiAgICAgICAgICAgICAgICBtaW51dGU6ICcyLWRpZ2l0J1xyXG4gICAgICAgICAgICB9KS5mb3JtYXQobmV3IERhdGUodGhpcy5wcm9wcy5jb250ZW50VmFsdWUpKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHJldHVybiA8c3Bhbj57ZHR9PC9zcGFuPjtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5tYW55d2hvLmNvbXBvbmVudC5yZWdpc3RlcignRGF0ZVRpbWVERE1NTVlZSEhNTScsIERhdGVUaW1lRERNTU1ZWUhITU0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRGF0ZVRpbWVERE1NTVlZSEhNTTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvRGF0ZVRpbWVERE1NTVlZSEhNTS50c3giLCJkZWNsYXJlIHZhciBtYW55d2hvOiBhbnk7XHJcblxyXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5jbGFzcyBCb29sZWFuSWNvbiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxhbnksIGFueT4gXHJcbnsgICBcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzIDogYW55KVxyXG5cdHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICB9XHJcblxyXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSBcclxuICAgIHtcclxuICAgICAgICB0aGlzLmZvcmNlVXBkYXRlKCk7XHJcbiAgICB9XHJcblxyXG5cdHJlbmRlcigpXHJcblx0e1xyXG5cdCAgIHZhciBjbGFzc05hbWUgOiBhbnkgPSBcImdseXBoaWNvbiBnbHlwaGljb24tXCI7XHJcbiAgICAgICAgaWYodGhpcy5wcm9wcy5jb250ZW50VmFsdWUgPT09IFwidHJ1ZVwiKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgY2xhc3NOYW1lICs9IFwib2tcIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgY2xhc3NOYW1lICs9IFwicmVtb3ZlXCI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gPHNwYW4gY2xhc3NOYW1lPXtjbGFzc05hbWV9Pjwvc3Bhbj47XHJcbiAgICB9XHJcbn1cclxuXHJcbm1hbnl3aG8uY29tcG9uZW50LnJlZ2lzdGVyKCdCb29sZWFuSWNvbicsIEJvb2xlYW5JY29uKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJvb2xlYW5JY29uO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9Cb29sZWFuSWNvbi50c3giLCJkZWNsYXJlIHZhciBtYW55d2hvOiBhbnk7XHJcblxyXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5jbGFzcyBTdGF0dXNJY29uIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PGFueSwgYW55PiBcclxueyAgIFxyXG4gICAgY29uc3RydWN0b3IocHJvcHMgOiBhbnkpXHJcblx0e1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgIH1cclxuXHJcbiAgICBjb21wb25lbnREaWRNb3VudCgpIFxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuZm9yY2VVcGRhdGUoKTtcclxuICAgIH1cclxuXHJcblx0cmVuZGVyKClcclxuXHR7XHJcbiAgICAgICAgdmFyIGNsYXNzTmFtZSA6IGFueSA9IFwiZ2x5cGhpY29uIGdseXBoaWNvbi1cIjtcclxuICAgICAgICB2YXIgdG9vbHRpcCA6IHN0cmluZyA9IFwiXCI7XHJcbiAgICAgICAgbGV0IHJlc3VsdDogYW55O1xyXG4gICAgICAgIFxyXG4gICAgICAgIHN3aXRjaCh0aGlzLnByb3BzLmNvbnRlbnRWYWx1ZS50b0xvd2VyQ2FzZSgpKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgY2FzZSBcInNcIjpcclxuICAgICAgICAgICAgICAgIHJlc3VsdD0oXHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17XCJnbHlwaGljb24gZ2x5cGhpY29uLWhvdXJnbGFzc1wifSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9e1wiU3RhZ2VkXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGNhc2UgXCJjXCI6XHJcbiAgICAgICAgICAgICAgICByZXN1bHQ9KFxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1wiZ2x5cGhpY29uIGdseXBoaWNvbi1va1wifSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9e1wiQ29tcGxldGVcIn1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSBcImFcIjpcclxuICAgICAgICAgICAgICAgIHJlc3VsdD0oXHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17XCJnbHlwaGljb24gZ2x5cGhpY29uLWZsYXNoXCJ9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT17XCJBY3RpdmVcIn1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSBcImNvbXBsZXRlXCI6IFxyXG4gICAgICAgICAgICAgICAgcmVzdWx0PShcclxuICAgICAgICAgICAgICAgICAgICA8aW1nIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0Y2YtaW1hZ2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzcmM9XCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUFvQUFBQUtDQVlBQUFDTk1zKzlBQUFBZDBsRVFWUjQybU5nZ0FLbE1JWUdwVkNHL3lnWUtNYUFER0FTQmtVcy8xM21jSUV4aUEwVFJ6SEphUVluVmd3M0djVFF5MlArYnorSkF5c0d5WUZOQlJIV1hleDRNVnloZVRNclhneFhxSm5LK04rNG1oa3JCc2xCRkVJOW8xL01oQldqQkJNc0dOVGlHZjdyNURLQ01ZaU5FanpFQmpnQVU4cUs3U3Uxbll3QUFBQUFTVVZPUks1Q1lJST1cIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJDb21wbGV0ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgLz4pO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSBcImVycm9yXCI6IFxyXG4gICAgICAgICAgICAgICAgcmVzdWx0PShcclxuICAgICAgICAgICAgICAgICAgICA8aW1nIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0Y2YtaW1hZ2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzcmM9XCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUFvQUFBQUtDQVlBQUFDTk1zKzlBQUFBWjBsRVFWUjQybU5nZ0lJQ0dZbUd6VndNLzVFeFNJd0JHY0FrWGlsem9HQ1lPSXBKenhUWnNXSzR5U0RHWXdWMnZCaHNLb2k0SjhjR3h1Z0FKZzVYZUV1R0ZZelJBVXdjcnZDcUpDdGVERllJODh4NWNSYXNHQ1dZWU1Gd1JJZ0pCYU1FRDdFQkRnQ1FpckRGU0JOa0pBQUFBQUJKUlU1RXJrSmdnZz09XCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiQ29tcGxldGVcIlxyXG4gICAgICAgICAgICAgICAgICAgIC8+KTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICByZXN1bHQ9KFxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1wiZ2x5cGhpY29uIGdseXBoaWNvbi1vcHRpb24taG9yaXpvbnRhbFwifSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9e1wiTm90IFNldFwifVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDs7XHJcbiAgICB9XHJcbn1cclxuXHJcbm1hbnl3aG8uY29tcG9uZW50LnJlZ2lzdGVyKCdTdGF0dXNJY29uJywgU3RhdHVzSWNvbik7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTdGF0dXNJY29uO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9TdGF0dXNJY29uLnRzeCIsImRlY2xhcmUgdmFyIG1hbnl3aG86IGFueTtcclxuXHJcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0ICogYXMgUmVhY3REb20gZnJvbSAncmVhY3QtZG9tJztcclxuXHJcblxyXG4vL3RoZSBjb250ZW50VmFsdWUgd2lsbCBoYXZlIHRoZSBsb29rdXAgdmFsdWVcclxuLy9cclxuY2xhc3MgTG9va3VwVmFsdWUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8YW55LCBhbnk+IFxyXG57ICBcclxuICAgIC8vbXlSZWYgOiBhbnk7IFxyXG4gICAgLy9wYXJlbnRJZCA6IGFueTtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzIDogYW55KVxyXG5cdHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgLy90aGlzLm15UmVmID0gUmVhY3QuY3JlYXRlUmVmKCk7XHJcbiAgICB9XHJcblxyXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSBcclxuICAgIHtcclxuICAgICAgICAvL3ZhciBtZSA9IFJlYWN0RG9tLmZpbmRET01Ob2RlKHRoaXMpO1xyXG4gICAgICAgIC8vdmFyIHBhcmVudFRhYmxlID0gJCh0aGlzLm15UmVmLmN1cnJlbnQpLmNsb3Nlc3QoJ3RhYmxlJykuYXR0cignaWQnKTtcclxuICAgICAgICB0aGlzLmZvcmNlVXBkYXRlKCk7XHJcbiAgICAgICAgLy90aGlzLnBhcmVudElkID0gJCh0aGlzLnJlZnMubWUpLmNsb3Nlc3QoJ3RhYmxlJykuYXR0cignaWQnKVxyXG4gICAgfVxyXG5cclxuICAgIGdldEF0dHJpYnV0ZVZhbHVlKGF0dHJpYnV0ZXMgOiBhbnksIGF0dHJpYnV0ZVByZWZpeCA6IHN0cmluZywgIGNvbHVtbklkIDogc3RyaW5nKVxyXG4gICAge1xyXG4gICAgICAgIGZvcih2YXIga2V5IGluIGF0dHJpYnV0ZXMpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZihrZXkgPT09IGF0dHJpYnV0ZVByZWZpeCArIFwiX1wiICsgY29sdW1uSWQpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBhdHRyaWJ1dGVzW2tleV07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0VmFsdWVGcm9tTGlzdChsaXN0IDogYW55ICwga2V5QXR0cmlidXRlIDogc3RyaW5nICwgcmVzdWx0QXR0cmlidXRlIDogc3RyaW5nLCBrZXkgOiBzdHJpbmcpXHJcbiAgICB7XHJcbiAgICAgICAgdmFyIHZhbCA6IHN0cmluZyA9IFwiXCI7XHJcbiAgICAgICAgdmFyIGhpdCA6IGJvb2xlYW4gPSBmYWxzZVxyXG5cclxuICAgICAgICBmb3IodmFyIGlQb3MgPSAwIDsgaVBvcyA8IGxpc3QubGVuZ3RoIDsgaVBvcyArKylcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHZhbD1cIlwiO1xyXG4gICAgICAgICAgICB2YXIgaXRlbSA9IGxpc3RbaVBvc107XHJcblxyXG4gICAgICAgICAgICBmb3IodmFyIHBQb3MgPSAwIDsgcFBvcyA8IGl0ZW0ucHJvcGVydGllcy5sZW5ndGggOyBwUG9zKyspXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHZhciBwcm9wID0gaXRlbS5wcm9wZXJ0aWVzW3BQb3NdO1xyXG4gICAgICAgICAgICAgICAgaWYocHJvcC5kZXZlbG9wZXJOYW1lID09PSByZXN1bHRBdHRyaWJ1dGUpXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsID0gcHJvcC5jb250ZW50VmFsdWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZihwcm9wLmRldmVsb3Blck5hbWUgPT09IGtleUF0dHJpYnV0ZSlcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBpZihwcm9wLmNvbnRlbnRWYWx1ZT09PWtleSlcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhpdD10cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZihoaXQ9PT10cnVlKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdmFsO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIFwiXCI7XHJcbiAgICB9XHJcblxyXG5cdHJlbmRlcigpXHJcblx0e1xyXG4gICAgICAgIHZhciBtZSA9IFJlYWN0RG9tLmZpbmRET01Ob2RlKHRoaXMpO1xyXG4gICAgICAgIHZhciBsYWJlbCA6IHN0cmluZyA9IFwiXCI7XHJcbiAgICAgICAgaWYodGhpcy5wcm9wcy5jb250ZW50VmFsdWUgJiYgbWUpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICAvL2l0ZXJhdGUgdXAgbG9va2luZyBmb3IgdGhlIGVsZW1lbnQgd2l0aCBjbGFzcyAudGFibGUtY29udGFpbmVyLCBpdCB3aWxsIGhhdmUgdGhlIHRhYmxlJ3MgaWQgdmFsdWUgb24gaXRcclxuICAgICAgICAgICAgdmFyIG1heExldmVscyA9IDEwO1xyXG4gICAgICAgICAgICB2YXIgcGFyZW50IDogSFRNTEVsZW1lbnQgPSBtZS5wYXJlbnRFbGVtZW50O1xyXG4gICAgICAgICAgICB3aGlsZSghcGFyZW50LmNsYXNzTGlzdC5jb250YWlucyhcInRhYmxlLWNvbnRhaW5lclwiKSB8fCBtYXhMZXZlbHMgPT0gMClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcGFyZW50PXBhcmVudC5wYXJlbnRFbGVtZW50O1xyXG4gICAgICAgICAgICAgICAgbWF4TGV2ZWxzLS07XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmKG1heExldmVscz09MClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiXCI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdmFyIGNvbXBvbmVudElkID0gcGFyZW50LmF0dHJpYnV0ZXMuZ2V0TmFtZWRJdGVtKCdpZCcpLnZhbHVlO1xyXG4gICAgICAgICAgICB2YXIgdGFibGUgPSBtYW55d2hvLm1vZGVsLmdldENvbXBvbmVudChjb21wb25lbnRJZCx0aGlzLnByb3BzLmZsb3dLZXkpO1xyXG5cclxuICAgICAgICAgICAgdmFyIHByb3BlcnR5SWQgPSB0aGlzLnByb3BzLnByb3BlcnR5SWQ7XHJcblxyXG4gICAgICAgICAgICB2YXIgbGlzdENvbXBvbmVudE5hbWUgPSB0aGlzLmdldEF0dHJpYnV0ZVZhbHVlKHRhYmxlLmF0dHJpYnV0ZXMsIFwiTG9va3VwTGlzdENvbXBvbmVudFwiLCBwcm9wZXJ0eUlkKTtcclxuICAgICAgICAgICAgdmFyIGxpc3RLZXlBdHJpYnV0ZSA9IHRoaXMuZ2V0QXR0cmlidXRlVmFsdWUodGFibGUuYXR0cmlidXRlcywgXCJMb29rdXBMaXN0S2V5QXR0cmlidXRlXCIsIHByb3BlcnR5SWQpO1xyXG4gICAgICAgICAgICB2YXIgbGlzdFJlc3VsdEF0dHJpYnV0ZSA9IHRoaXMuZ2V0QXR0cmlidXRlVmFsdWUodGFibGUuYXR0cmlidXRlcywgXCJMb29rdXBMaXN0UmVzdWx0QXR0cmlidXRlXCIsIHByb3BlcnR5SWQpO1xyXG5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGlmKGxpc3RDb21wb25lbnROYW1lKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB2YXIgbGlzdCA9IG1hbnl3aG8ubW9kZWwuZ2V0Q29tcG9uZW50QnlOYW1lKGxpc3RDb21wb25lbnROYW1lLCAgIHRoaXMucHJvcHMuZmxvd0tleSlcclxuICAgICAgICAgICAgICAgIGlmKGxpc3QpXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWwgPSB0aGlzLmdldFZhbHVlRnJvbUxpc3QobGlzdC5vYmplY3REYXRhLCBsaXN0S2V5QXRyaWJ1dGUsIGxpc3RSZXN1bHRBdHRyaWJ1dGUsIHRoaXMucHJvcHMuY29udGVudFZhbHVlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIDxzcGFuPntsYWJlbH08L3NwYW4+O1xyXG4gICAgfVxyXG59XHJcblxyXG5tYW55d2hvLmNvbXBvbmVudC5yZWdpc3RlcignTG9va3VwVmFsdWUnLCBMb29rdXBWYWx1ZSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMb29rdXBWYWx1ZTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvTG9va3VwVmFsdWUudHN4IiwiZGVjbGFyZSB2YXIgbWFueXdobzogYW55O1xyXG5cclxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuY2xhc3MgRXBvY2hEYXRlRERNTU1ZWSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxhbnksIGFueT4gXHJcbnsgICBcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzIDogYW55KVxyXG5cdHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICB9XHJcblxyXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSBcclxuICAgIHtcclxuICAgICAgICB0aGlzLmZvcmNlVXBkYXRlKCk7XHJcbiAgICB9XHJcblxyXG5cdHJlbmRlcigpXHJcblx0e1xyXG5cdCAgIFxyXG4gICAgICAgIGlmKHRoaXMucHJvcHMuY29udGVudFZhbHVlKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdmFyIHNlY3ZhbCA9IHRoaXMucHJvcHMuY29udGVudFZhbHVlO1xyXG4gICAgICAgICAgICB2YXIgc2Vjb25kcyA6IG51bWJlcj0gTnVtYmVyLnBhcnNlSW50KHRoaXMucHJvcHMuY29udGVudFZhbHVlKTtcclxuXHJcbiAgICAgICAgICAgIC8vaGFuZGxlIGphdmEgZXBvY2ggd2l0aCBkZWNpbWFsIHBvaW50XHJcbiAgICAgICAgICAgIGlmKHNlY3ZhbC5pbmRleE9mKFwiLlwiKT49MClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgc2Vjb25kcyA9IHNlY29uZHMgKiAxMDAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB2YXIgZWQgOiBEYXRlID0gbmV3IERhdGUoc2Vjb25kcyk7XHJcblxyXG4gICAgICAgICAgICAvL2Zvcm1hdCB0aGUgZGF0ZSB1c2luZyBSZWFjdCBmb3JtYXR0ZXIgaW50byBkdCBzdHJpbmdcclxuICAgICAgICAgICAgdmFyIGR0ID0gbmV3IEludGwuRGF0ZVRpbWVGb3JtYXQoJ2VuLUdCJywgeyAgIFxyXG4gICAgICAgICAgICAgICAgeWVhcjogJ251bWVyaWMnLCBcclxuICAgICAgICAgICAgICAgIG1vbnRoOiAnbG9uZycsIFxyXG4gICAgICAgICAgICAgICAgZGF5OiAnMi1kaWdpdCdcclxuICAgICAgICAgICAgfSkuZm9ybWF0KGVkKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHJldHVybiA8c3Bhbj57ZHR9PC9zcGFuPjtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5tYW55d2hvLmNvbXBvbmVudC5yZWdpc3RlcignRXBvY2hEYXRlRERNTU1ZWScsIEVwb2NoRGF0ZURETU1NWVkpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRXBvY2hEYXRlRERNTU1ZWTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvRXBvY2hEYXRlRERNTU1ZWS50c3giLCJkZWNsYXJlIHZhciBtYW55d2hvOiBhbnk7XHJcblxyXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5jbGFzcyBFcG9jaERhdGVUaW1lRERNTU1ZWUhITU0gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8YW55LCBhbnk+IFxyXG57ICAgXHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcyA6IGFueSlcclxuXHR7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbXBvbmVudERpZE1vdW50KCkgXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5mb3JjZVVwZGF0ZSgpO1xyXG4gICAgfVxyXG5cclxuXHRyZW5kZXIoKVxyXG5cdHtcclxuXHQgICBcclxuICAgICAgICBpZih0aGlzLnByb3BzLmNvbnRlbnRWYWx1ZSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHZhciBzZWN2YWwgPSB0aGlzLnByb3BzLmNvbnRlbnRWYWx1ZTtcclxuICAgICAgICAgICAgdmFyIHNlY29uZHMgOiBudW1iZXI9IE51bWJlci5wYXJzZUludCh0aGlzLnByb3BzLmNvbnRlbnRWYWx1ZSk7XHJcblxyXG4gICAgICAgICAgICAvL2hhbmRsZSBqYXZhIGVwb2NoIHdpdGggZGVjaW1hbCBwb2ludFxyXG4gICAgICAgICAgICBpZihzZWN2YWwuaW5kZXhPZihcIi5cIik+PTApXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHNlY29uZHMgPSBzZWNvbmRzICogMTAwMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgdmFyIGVkIDogRGF0ZSA9IG5ldyBEYXRlKHNlY29uZHMpO1xyXG4gICAgICAgICAgICAvL2Zvcm1hdCB0aGUgZGF0ZSB1c2luZyBSZWFjdCBmb3JtYXR0ZXIgaW50byBkdCBzdHJpbmdcclxuICAgICAgICAgICAgdmFyIGR0ID0gbmV3IEludGwuRGF0ZVRpbWVGb3JtYXQoJ2VuLUdCJywgeyAgIFxyXG4gICAgICAgICAgICAgICAgeWVhcjogJ251bWVyaWMnLCBcclxuICAgICAgICAgICAgICAgIG1vbnRoOiAnbG9uZycsIFxyXG4gICAgICAgICAgICAgICAgZGF5OiAnMi1kaWdpdCcsXHJcbiAgICAgICAgICAgICAgICBob3VyOiAnMi1kaWdpdCcsXHJcbiAgICAgICAgICAgICAgICBtaW51dGU6ICcyLWRpZ2l0J1xyXG4gICAgICAgICAgICB9KS5mb3JtYXQoZWQpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgcmV0dXJuIDxzcGFuPntkdH08L3NwYW4+O1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbm1hbnl3aG8uY29tcG9uZW50LnJlZ2lzdGVyKCdFcG9jaERhdGVUaW1lRERNTU1ZWUhITU0nLCBFcG9jaERhdGVUaW1lRERNTU1ZWUhITU0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRXBvY2hEYXRlVGltZURETU1NWVlISE1NO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9FcG9jaERhdGVUaW1lRERNTU1ZWUhITU0udHN4IiwiZGVjbGFyZSB2YXIgbWFueXdobzogYW55O1xyXG5cclxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuY2xhc3MgUGVyY2VudFByb2dyZXNzQmFyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PGFueSwgYW55PiBcclxueyAgIFxyXG4gICAgY29uc3RydWN0b3IocHJvcHMgOiBhbnkpXHJcblx0e1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgIH1cclxuXHJcbiAgICBjb21wb25lbnREaWRNb3VudCgpIFxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuZm9yY2VVcGRhdGUoKTtcclxuICAgIH1cclxuXHJcblx0cmVuZGVyKClcclxuXHR7XHJcbiAgICAgICAgdmFyIGNsYXNzTmFtZSA6IGFueSA9IFwiZ2x5cGhpY29uIGdseXBoaWNvbi1cIjtcclxuICAgICAgICB2YXIgdG9vbHRpcCA6IHN0cmluZyA9IFwiXCI7XHJcblxyXG4gICAgICAgIHZhciB2YWx1ZSA9IHBhcnNlSW50KHRoaXMucHJvcHMuY29udGVudFZhbHVlKSB8fCAwO1xyXG4gICAgICAgIHZhciBkaXNwbGF5VmFsdWUgPSB2YWx1ZSArIFwiJVwiO1xyXG5cclxuICAgICAgICB2YXIgdG9vbHRpcCA6IHN0cmluZyA9IHZhbHVlICsgXCIlXCI7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdmFyIG91dGVyU3R5bGUgOiBSZWFjdC5DU1NQcm9wZXJ0aWVzID0ge1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyIDogXCIycHggc29saWQgI2FkYWRhZFwiLFxyXG4gICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOlwiNXB4XCIsXHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6XCIjZTNlM2UzXCIsXHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6XCIzMHB4XCIsXHJcbiAgICAgICAgICAgICAgICBib3hTaXppbmc6IFwiY29udGVudC1ib3hcIixcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uIDogXCJyZWxhdGl2ZVwiIGFzIFwicmVsYXRpdmVcIixcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IFwiZ3JpZFwiLFxyXG4gICAgICAgICAgICAgICAgYWxpZ25Db250ZW50OiAnbWlkZGxlJyxcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogJzAgIWltcG9ydGFudCdcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgdmFyIGJhclN0eWxlIDogUmVhY3QuQ1NTUHJvcGVydGllcyA9IHtcclxuICAgICAgICAgICAgYm9yZGVyOiBcIm5vbmVcIixcclxuICAgICAgICAgICAgYm9yZGVyUmFkaXVzOlwiNHB4XCIsXHJcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjpcIiM3RDlBQ0ZcIixcclxuICAgICAgICAgICAgd2lkdGg6IGRpc3BsYXlWYWx1ZSxcclxuICAgICAgICAgICAgdGV4dEFsaWduIDogXCJjZW50ZXJcIiAsXHJcbiAgICAgICAgICAgIGhlaWdodDogXCIxMDAlXCIsXHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgIHZhciBjYXB0aW9uU3R5bGUgOiBSZWFjdC5DU1NQcm9wZXJ0aWVzID0ge1xyXG4gICAgICAgICAgICBmb250RmFtaWx5IDogXCJ0YWhvbWFcIixcclxuICAgICAgICAgICAgY29sb3IgOiBcIiNmZmZmZmZcIixcclxuICAgICAgICAgICAgZm9udFNpemUgOiBcIjEwcHRcIixcclxuICAgICAgICAgICAgd2lkdGggOiBcIjEwMCVcIixcclxuICAgICAgICAgICAgdGV4dEFsaWduIDogXCJjZW50ZXJcIixcclxuICAgICAgICAgICAgcG9zaXRpb24gOiBcImFic29sdXRlXCIgYXMgXCJhYnNvbHV0ZVwiLFxyXG4gICAgICAgICAgICBoZWlnaHQ6IFwiMTAwJVwiLFxyXG4gICAgICAgICAgICB2ZXJ0aWNhbEFsaWduOiBcIm1pZGRsZVwiLFxyXG4gICAgICAgICAgICBsaW5lSGVpZ2h0OiBcIjIwMCVcIixcclxuICAgICAgICAgICAgbWl4QmxlbmRNb2RlOiBcImRpZmZlcmVuY2VcIixcclxuICAgICAgICAgICAgbGVmdDogMFxyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICB2YXIgbWF4ID0gMTAwO1xyXG4gICAgICAgIHZhciBtaW4gPSAwO1xyXG4gICAgICAgIHZhciBwb3MgPSA2MDtcclxuXHJcbiAgICAgICAgcmV0dXJuICA8ZGl2IHN0eWxlPXtvdXRlclN0eWxlfT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHJvbGU9XCJwcm9ncmVzc2JhclwiIGFyaWEtdmFsdWVub3c9e3Bvc30gYXJpYS12YWx1ZW1pbj17bWlufSBhcmlhLXZhbHVlbWF4PXttYXh9IHN0eWxlPXtiYXJTdHlsZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXtjYXB0aW9uU3R5bGV9PntkaXNwbGF5VmFsdWV9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PiAgICAgXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj4gXHJcblxyXG4gICAgfVxyXG59XHJcblxyXG4vLzxUb29sdGlwIGJvcmRlcj1cIiNmZmZmZmZcIiByYWRpdXM9XCI1XCIgcGxhY2VtZW50PVwicmlnaHRcIiBjb250ZW50PXt0b29sdGlwfT48L1Rvb2x0aXA+XHJcblxyXG5tYW55d2hvLmNvbXBvbmVudC5yZWdpc3RlcignUGVyY2VudFByb2dyZXNzQmFyJywgUGVyY2VudFByb2dyZXNzQmFyKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBlcmNlbnRQcm9ncmVzc0JhcjtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvUGVyY2VudFByb2dyZXNzQmFyLnRzeCIsImRlY2xhcmUgdmFyIG1hbnl3aG86IGFueTtcclxuXHJcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbmNsYXNzIEh5cGVybGluayBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxhbnksIGFueT4gXHJcbnsgICBcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzIDogYW55KVxyXG5cdHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICB9XHJcblxyXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSBcclxuICAgIHtcclxuICAgICAgICB0aGlzLmZvcmNlVXBkYXRlKCk7XHJcbiAgICB9XHJcblxyXG5cdHJlbmRlcigpXHJcblx0e1xyXG4gICAgICAgIHZhciB0b29sdGlwIDogc3RyaW5nID0gXCJcIjtcclxuXHJcbiAgICAgICAgdmFyIHZhbHVlID0gdGhpcy5wcm9wcy5jb250ZW50VmFsdWUgfHwgXCJcIjtcclxuICAgICAgICB2YXIgZGlzcGxheVZhbHVlID0gdmFsdWUgKyBcIiVcIjtcclxuXHJcbiAgICAgICAgdmFyIHRvb2x0aXAgOiBzdHJpbmcgPSB2YWx1ZSArIFwiJVwiO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHZhciBsaW5rU3R5bGUgPSB7XHJcbiAgICAgICAgICAgICAgICBcImZvbnQtZmFtaWx5XCIgOiBcInRhaG9tYVwiLFxyXG4gICAgICAgICAgICAgICAgXCJjb2xvclwiIDogXCIjZmZmZmZmXCIsXHJcbiAgICAgICAgICAgICAgICBcImZvbnQtc2l6ZVwiIDogXCIxMHB0XCIsXHJcbiAgICAgICAgICAgICAgICBcIndpZHRoXCIgOiBcIjEwMCVcIixcclxuICAgICAgICAgICAgICAgIFwidGV4dC1hbGlnblwiIDogXCJjZW50ZXJcIixcclxuICAgICAgICAgICAgICAgIFwicG9zaXRpb25cIiA6IFwiYWJzb2x1dGVcIiBhcyBcImFic29sdXRlXCIsXHJcbiAgICAgICAgICAgICAgICBcImhlaWdodFwiOiBcIjEwMCVcIixcclxuICAgICAgICAgICAgICAgIFwidmVydGljYWwtYWxpZ25cIjogXCJtaWRkbGVcIixcclxuICAgICAgICAgICAgICAgIFwibGluZS1oZWlnaHRcIjogXCIyMDAlXCIsXHJcbiAgICAgICAgICAgICAgICBcIm1peC1ibGVuZC1tb2RlXCI6IFwiZGlmZmVyZW5jZVwiLFxyXG5cclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgdmFyIG1heCA9IDEwMDtcclxuICAgICAgICB2YXIgbWluID0gMDtcclxuICAgICAgICB2YXIgcG9zID0gNjA7XHJcblxyXG4gICAgICAgIHJldHVybiAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8YSBocmVmPXt2YWx1ZX0gdGFyZ2V0PVwiX2JsYW5rXCI+e3ZhbHVlfTwvYT4gICAgXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj4gIFxyXG4gICAgfVxyXG59XHJcblxyXG4vLzxUb29sdGlwIGJvcmRlcj1cIiNmZmZmZmZcIiByYWRpdXM9XCI1XCIgcGxhY2VtZW50PVwicmlnaHRcIiBjb250ZW50PXt0b29sdGlwfT48L1Rvb2x0aXA+XHJcblxyXG5tYW55d2hvLmNvbXBvbmVudC5yZWdpc3RlcignSHlwZXJsaW5rJywgSHlwZXJsaW5rKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEh5cGVybGluaztcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvSHlwZXJsaW5rLnRzeCIsImRlY2xhcmUgdmFyIG1hbnl3aG86IGFueTtcclxuXHJcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0ICogYXMgUmVhY3REb20gZnJvbSAncmVhY3QtZG9tJztcclxuXHJcbmNsYXNzIFRodW1ibmFpbCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxhbnksIGFueT4gXHJcbnsgICBcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzIDogYW55KVxyXG5cdHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICB9XHJcblxyXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSBcclxuICAgIHtcclxuICAgICAgICB0aGlzLmZvcmNlVXBkYXRlKCk7XHJcbiAgICB9XHJcblxyXG5cdHJlbmRlcigpXHJcblx0e1xyXG5cclxuICAgICAgICB2YXIgbWUgPSBSZWFjdERvbS5maW5kRE9NTm9kZSh0aGlzKTtcclxuICAgICAgICB2YXIgY29udGVudFZhbHVlIDogc3RyaW5nO1xyXG4gICAgICAgIHZhciB3aWR0aCA6IG51bWJlcjtcclxuICAgICAgICBpZihtZSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHZhciBwYXJlbnQgOiBIVE1MRWxlbWVudCA9IG1lLnBhcmVudEVsZW1lbnQ7XHJcbiAgICAgICAgICAgIHZhciBtYXhMZXZlbHMgPSAxMDtcclxuICAgICAgICAgICAgd2hpbGUoIXBhcmVudC5jbGFzc0xpc3QuY29udGFpbnMoXCJ0YWJsZS1jb250YWluZXJcIikgfHwgbWF4TGV2ZWxzID09IDApXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHBhcmVudD1wYXJlbnQucGFyZW50RWxlbWVudDtcclxuICAgICAgICAgICAgICAgIG1heExldmVscy0tO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZihtYXhMZXZlbHM9PTApXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBcIlwiO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB2YXIgY29tcG9uZW50SWQgPSBwYXJlbnQuYXR0cmlidXRlcy5nZXROYW1lZEl0ZW0oJ2lkJykudmFsdWU7XHJcbiAgICAgICAgICAgIHZhciB0YWJsZSA9IG1hbnl3aG8ubW9kZWwuZ2V0Q29tcG9uZW50KGNvbXBvbmVudElkLHRoaXMucHJvcHMuZmxvd0tleSk7XHJcblxyXG4gICAgICAgICAgICB2YXIgcHJvcGVydHlJZCA9IHRoaXMucHJvcHMucHJvcGVydHlJZDtcclxuXHJcbiAgICAgICAgICAgIGNvbnRlbnRWYWx1ZSA9IHRoaXMucHJvcHMuY29udGVudFZhbHVlIHx8IFwiXCI7XHJcblxyXG4gICAgICAgICAgICB3aWR0aCA9IHRhYmxlLmF0dHJpYnV0ZXNbXCJpbWFnZS1zY2FsZWQtd2lkdGhcIl0gfHwgNTA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB2YXIgb3V0ZXJTdHlsZSA6IFJlYWN0LkNTU1Byb3BlcnRpZXMgPSB7XHJcbiAgICAgICAgICAgIGJveFNpemluZzogXCJjb250ZW50LWJveFwiLFxyXG4gICAgICAgICAgICBwb3NpdGlvbiA6IFwicmVsYXRpdmVcIiBhcyBcInJlbGF0aXZlXCIsXHJcbiAgICAgICAgICAgIGRpc3BsYXk6IFwiZ3JpZFwiLFxyXG4gICAgICAgICAgICBhbGlnbkNvbnRlbnQ6ICdtaWRkbGUnLFxyXG4gICAgICAgICAgICBtYXJnaW46ICcwICFpbXBvcnRhbnQnXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgaWYoY29udGVudFZhbHVlKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGV0IHNyYz1cIlwiO1xyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17b3V0ZXJTdHlsZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2NvbnRlbnRWYWx1ZX0gd2lkdGg9e3dpZHRofSBzdHlsZT17e21hcmdpbkxlZnQ6ICdhdXRvJywgbWFyZ2luUmlnaHQ6ICdhdXRvJ319Lz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdj48L2Rpdj5cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbm1hbnl3aG8uY29tcG9uZW50LnJlZ2lzdGVyKCdUaHVtYm5haWwnLCBUaHVtYm5haWwpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgVGh1bWJuYWlsO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9UaHVtYm5haWwudHN4IiwiZGVjbGFyZSB2YXIgbWFueXdobzogYW55O1xyXG5cclxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuY2xhc3MgRG9sbGFyVmFsdWUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8YW55LCBhbnk+IFxyXG57ICAgXHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcyA6IGFueSlcclxuXHR7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbXBvbmVudERpZE1vdW50KCkgXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5mb3JjZVVwZGF0ZSgpO1xyXG4gICAgfVxyXG5cclxuXHRyZW5kZXIoKVxyXG5cdHtcclxuICAgICAgICBjb25zdCB2YWx1ZTogbnVtYmVyID0gdGhpcy5wcm9wcy5jb250ZW50VmFsdWU7XHJcbiAgICAgICAgY29uc3QgZGlzcGxheTogc3RyaW5nID0gXCIkXCIgKyB2YWx1ZTtcclxuICAgICAgICByZXR1cm4gPHNwYW4+e2Rpc3BsYXl9PC9zcGFuPjtcclxuICAgIH1cclxufVxyXG5cclxubWFueXdoby5jb21wb25lbnQucmVnaXN0ZXIoJ0RvbGxhclZhbHVlJywgRG9sbGFyVmFsdWUpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRG9sbGFyVmFsdWU7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL0RvbGxhclZhbHVlLnRzeCIsImRlY2xhcmUgdmFyIG1hbnl3aG86IGFueTtcclxuXHJcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0ICogYXMgUmVhY3REb20gZnJvbSAncmVhY3QtZG9tJztcclxuXHJcbmNsYXNzIFRhYmxlUm93U3R5bGVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PGFueSwgYW55PiBcclxueyAgIFxyXG4gICAgY29uc3RydWN0b3IocHJvcHMgOiBhbnkpXHJcblx0e1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgICAgICB0aGlzLmdldFBhcmVudFRhYmxlRWxlbWVudCA9IHRoaXMuZ2V0UGFyZW50VGFibGVFbGVtZW50LmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5nZXRQYXJlbnRUYWJsZUNvbXBvbmVudElkID0gdGhpcy5nZXRQYXJlbnRUYWJsZUNvbXBvbmVudElkLmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5nZXRQYXJlbnRSb3dFbGVtZW50ID0gdGhpcy5nZXRQYXJlbnRSb3dFbGVtZW50LmJpbmQodGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSBcclxuICAgIHtcclxuICAgICAgICB0aGlzLmZvcmNlVXBkYXRlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0QXR0cmlidXRlVmFsdWUoYXR0cmlidXRlcyA6IGFueSwgYXR0cmlidXRlTmFtZSA6IHN0cmluZyApIDogYW55XHJcbiAgICB7XHJcbiAgICAgICAgZm9yKHZhciBrZXkgaW4gYXR0cmlidXRlcylcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlmKGtleSA9PT0gYXR0cmlidXRlTmFtZSlcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGF0dHJpYnV0ZXNba2V5XTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuXHJcblx0cmVuZGVyKClcclxuXHR7XHJcbiAgICAgICAgbGV0IG1lID0gUmVhY3REb20uZmluZERPTU5vZGUodGhpcyk7XHJcbiAgICAgICAgY29uc3QgdmFsdWU6IGFueSA9IHRoaXMucHJvcHMuY29udGVudFZhbHVlO1xyXG4gICAgICAgIGlmKG1lKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHRhYmxlRWxlbWVudDogSFRNTEVsZW1lbnQgPSB0aGlzLmdldFBhcmVudFRhYmxlRWxlbWVudCgpO1xyXG4gICAgICAgICAgICBjb25zdCByb3dFbGVtZW50OiBIVE1MRWxlbWVudCA9IHRoaXMuZ2V0UGFyZW50Um93RWxlbWVudCgpO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgdGFibGVDb21wb25lbnRJZDogc3RyaW5nID0gdGhpcy5nZXRQYXJlbnRUYWJsZUNvbXBvbmVudElkKHRhYmxlRWxlbWVudCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHRhYmxlID0gbWFueXdoby5tb2RlbC5nZXRDb21wb25lbnQodGFibGVDb21wb25lbnRJZCx0aGlzLnByb3BzLmZsb3dLZXkpO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgYXJnc3RyID0gdGhpcy5nZXRBdHRyaWJ1dGVWYWx1ZSh0YWJsZS5hdHRyaWJ1dGVzLCBcInRyZkNvbmZpZ1wiKTtcclxuICAgICAgICAgICAgY29uc3QgYXJncyA9IEpTT04ucGFyc2UoYXJnc3RyKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGFyZ3MpO1xyXG5cclxuICAgICAgICAgICAgaWYoYXJnc1t2YWx1ZV0pIHtcclxuICAgICAgICAgICAgICAgIHJvd0VsZW1lbnQuY2xhc3NMaXN0LmFkZChhcmdzW3ZhbHVlXSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHJldHVybiA8c3Bhbj57dmFsdWV9PC9zcGFuPjtcclxuICAgIH1cclxuXHJcbiAgICBnZXRQYXJlbnRUYWJsZUVsZW1lbnQoKSA6IEhUTUxFbGVtZW50IHwgdW5kZWZpbmVkXHJcbiAgICB7XHJcbiAgICAgICAgbGV0IG1lID0gUmVhY3REb20uZmluZERPTU5vZGUodGhpcyk7XHJcbiAgICAgICAgdmFyIG1heExldmVscyA9IDEwO1xyXG4gICAgICAgIHZhciBwYXJlbnQgOiBIVE1MRWxlbWVudCA9IG1lLnBhcmVudEVsZW1lbnQ7XHJcbiAgICAgICAgd2hpbGUoIXBhcmVudC5jbGFzc0xpc3QuY29udGFpbnMoXCJ0YWJsZS1jb250YWluZXJcIikgfHwgbWF4TGV2ZWxzID09IDApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBwYXJlbnQ9cGFyZW50LnBhcmVudEVsZW1lbnQ7XHJcbiAgICAgICAgICAgIG1heExldmVscy0tO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYobWF4TGV2ZWxzPT0wKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcmV0dXJuIHBhcmVudDtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgZ2V0UGFyZW50Um93RWxlbWVudCgpIDogSFRNTEVsZW1lbnQgfCB1bmRlZmluZWRcclxuICAgIHtcclxuICAgICAgICBsZXQgbWUgPSBSZWFjdERvbS5maW5kRE9NTm9kZSh0aGlzKTtcclxuICAgICAgICB2YXIgbWF4TGV2ZWxzID0gMTA7XHJcbiAgICAgICAgdmFyIHBhcmVudCA6IEhUTUxFbGVtZW50ID0gbWUucGFyZW50RWxlbWVudDtcclxuICAgICAgICB3aGlsZSggcGFyZW50LnRhZ05hbWUudG9Mb3dlckNhc2UoKSAhPT1cInRyXCIgfHwgbWF4TGV2ZWxzID09IDApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBwYXJlbnQ9cGFyZW50LnBhcmVudEVsZW1lbnQ7XHJcbiAgICAgICAgICAgIG1heExldmVscy0tO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYobWF4TGV2ZWxzPT0wKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcmV0dXJuIHBhcmVudDtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgZ2V0UGFyZW50VGFibGVDb21wb25lbnRJZCh0YWJsZTogSFRNTEVsZW1lbnQpIDogc3RyaW5nXHJcbiAgICB7XHJcbiAgICAgICAgdmFyIGNvbXBvbmVudElkOiBzdHJpbmcgPSB0YWJsZS5hdHRyaWJ1dGVzLmdldE5hbWVkSXRlbSgnaWQnKS52YWx1ZTtcclxuICAgICAgICBcclxuICAgICAgICByZXR1cm4gY29tcG9uZW50SWQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbm1hbnl3aG8uY29tcG9uZW50LnJlZ2lzdGVyKCdUYWJsZVJvd1N0eWxlcicsIFRhYmxlUm93U3R5bGVyKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRhYmxlUm93U3R5bGVyO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9UYWJsZVJvd1N0eWxlci50c3giLCJkZWNsYXJlIHZhciBtYW55d2hvOiBhbnk7XHJcblxyXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCAqIGFzIFJlYWN0RG9tIGZyb20gJ3JlYWN0LWRvbSc7XHJcblxyXG5jbGFzcyBIb3ZlckJveCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxhbnksIGFueT4gXHJcbnsgICBcclxuICAgIGlzT3ZlckJ1dHRvbjogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgaXNPdmVyRGlhbG9nOiBib29sZWFuPWZhbHNlO1xyXG5cclxuICAgIGhvdmVyQm94U2hvd246IGJvb2xlYW49ZmFsc2U7IC8vY2hhbmdlIHRvIGZhbHNlXHJcblxyXG4gICAgY29uc3RydWN0b3IocHJvcHMgOiBhbnkpXHJcblx0e1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgICAgICB0aGlzLmdldFBhcmVudFRhYmxlRWxlbWVudCA9IHRoaXMuZ2V0UGFyZW50VGFibGVFbGVtZW50LmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5nZXRQYXJlbnRUYWJsZUNvbXBvbmVudElkID0gdGhpcy5nZXRQYXJlbnRUYWJsZUNvbXBvbmVudElkLmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5nZXRQYXJlbnRSb3dFbGVtZW50ID0gdGhpcy5nZXRQYXJlbnRSb3dFbGVtZW50LmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5vdmVyQnV0dG9uID0gdGhpcy5vdmVyQnV0dG9uLmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5vdXRCdXR0b24gPSB0aGlzLm91dEJ1dHRvbi5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMub3ZlckRpYWxvZyA9IHRoaXMub3ZlckRpYWxvZy5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMub3V0RGlhbG9nID0gdGhpcy5vdXREaWFsb2cuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLmNhbGNTaG93biA9IHRoaXMuY2FsY1Nob3duLmJpbmQodGhpcyk7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSBcclxuICAgIHtcclxuICAgICAgICB0aGlzLmZvcmNlVXBkYXRlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0QXR0cmlidXRlVmFsdWUoYXR0cmlidXRlcyA6IGFueSwgYXR0cmlidXRlTmFtZSA6IHN0cmluZyApIDogYW55XHJcbiAgICB7XHJcbiAgICAgICAgZm9yKHZhciBrZXkgaW4gYXR0cmlidXRlcylcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlmKGtleSA9PT0gYXR0cmlidXRlTmFtZSlcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGF0dHJpYnV0ZXNba2V5XTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBvdmVyQnV0dG9uKCkge1xyXG4gICAgICAgIGlmKHRoaXMuaXNPdmVyQnV0dG9uID09PSBmYWxzZSkge1xyXG4gICAgICAgICAgICB0aGlzLmlzT3ZlckJ1dHRvbj10cnVlO1xyXG4gICAgICAgICAgICB0aGlzLmNhbGNTaG93bigpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvdXRCdXR0b24oZTogYW55KSB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy9sZXQgZWxlbWVudCA9IGUudG9FbGVtZW50IHx8IGUucmVsYXRlZFRhcmdldDtcclxuICAgICAgICAvL2lmIChlbGVtZW50LnBhcmVudE5vZGUgPT0gdGhpcyB8fCBlbGVtZW50ID09IHRoaXMpIHtcclxuICAgICAgICAvLyAgIHJldHVybjtcclxuICAgICAgICAvL31cclxuICAgICAgICBpZih0aGlzLmlzT3ZlckJ1dHRvbiA9PT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICB0aGlzLmlzT3ZlckJ1dHRvbj1mYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5jYWxjU2hvd24oKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb3ZlckRpYWxvZygpIHtcclxuICAgICAgICBpZih0aGlzLmlzT3ZlckRpYWxvZyA9PT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgdGhpcy5pc092ZXJEaWFsb2c9dHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5jYWxjU2hvd24oKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb3V0RGlhbG9nKCkge1xyXG4gICAgICAgIGlmKHRoaXMuaXNPdmVyRGlhbG9nID09PSB0cnVlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaXNPdmVyRGlhbG9nPWZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLmNhbGNTaG93bigpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjYWxjU2hvd24oKSB7XHJcbiAgICAgICAgaWYodGhpcy5pc092ZXJCdXR0b24gPT09IHRydWUgfHwgdGhpcy5pc092ZXJEaWFsb2cgPT09IHRydWUpIHtcclxuICAgICAgICAgICAgaWYodGhpcy5ob3ZlckJveFNob3duID09PSBmYWxzZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ob3ZlckJveFNob3duID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZm9yY2VVcGRhdGUoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgaWYodGhpcy5ob3ZlckJveFNob3duID09PSB0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmhvdmVyQm94U2hvd24gPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZm9yY2VVcGRhdGUoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG5cdHJlbmRlcigpXHJcblx0e1xyXG4gICAgICAgIGxldCBob3ZlckJveDogYW55O1xyXG4gICAgICAgIGxldCBtZSA9IFJlYWN0RG9tLmZpbmRET01Ob2RlKHRoaXMpO1xyXG4gICAgICAgIGxldCBpY29uOiBzdHJpbmc7XHJcbiAgICAgICAgbGV0IHBvc2l0aW9uOiBzdHJpbmc7XHJcbiAgICAgICAgXHJcbiAgICAgICAgY29uc3QgdmFsdWU6IGFueSA9IHRoaXMucHJvcHMuY29udGVudFZhbHVlO1xyXG4gICAgICAgIGlmKG1lKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHRhYmxlRWxlbWVudDogSFRNTEVsZW1lbnQgPSB0aGlzLmdldFBhcmVudFRhYmxlRWxlbWVudCgpO1xyXG4gICAgICAgICAgICAvL2NvbnN0IHJvd0VsZW1lbnQ6IEhUTUxFbGVtZW50ID0gdGhpcy5nZXRQYXJlbnRSb3dFbGVtZW50KCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHRkRWxlbWVudDogSFRNTEVsZW1lbnQgPSB0aGlzLmdldFBhcmVudFRERWxlbWVudCgpO1xyXG4gICAgICAgICAgICAvL21vZGlmeSB0ZFxyXG4gICAgICAgICAgICB0ZEVsZW1lbnQuc3R5bGUucG9zaXRpb249XCJyZWxhdGl2ZVwiO1xyXG4gICAgICAgICAgICB0ZEVsZW1lbnQuc3R5bGUuaGVpZ2h0PVwiMTAwJVwiO1xyXG4gICAgICAgICAgICB0ZEVsZW1lbnQuc3R5bGUucGFkZGluZz1cIjBweFwiO1xyXG5cclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHRhYmxlQ29tcG9uZW50SWQ6IHN0cmluZyA9IHRoaXMuZ2V0UGFyZW50VGFibGVDb21wb25lbnRJZCh0YWJsZUVsZW1lbnQpO1xyXG4gICAgICAgICAgICBjb25zdCB0YWJsZSA9IG1hbnl3aG8ubW9kZWwuZ2V0Q29tcG9uZW50KHRhYmxlQ29tcG9uZW50SWQsdGhpcy5wcm9wcy5mbG93S2V5KTtcclxuXHJcbiAgICAgICAgICAgIGljb24gPSB0aGlzLmdldEF0dHJpYnV0ZVZhbHVlKHRhYmxlLmF0dHJpYnV0ZXMsIFwiaG92ZXJib3hJY29uXCIpIHx8IFwicXVlc3Rpb24tc2lnblwiO1xyXG4gICAgICAgICAgICBwb3NpdGlvbiA9IHRoaXMuZ2V0QXR0cmlidXRlVmFsdWUodGFibGUuYXR0cmlidXRlcywgXCJob3ZlcmJveFBvc2l0aW9uXCIpIHx8IFwibGVmdFwiO1xyXG4gICAgICAgICAgICBsZXQgbGVmdDogc3RyaW5nO1xyXG4gICAgICAgICAgICBsZXQgcmlnaHQ6IHN0cmluZztcclxuICAgICAgICAgICAgbGV0IHRvcDogc3RyaW5nO1xyXG4gICAgICAgICAgICBsZXQgYm90dG9tOiBzdHJpbmc7XHJcblxyXG4gICAgICAgICAgICBzd2l0Y2gocG9zaXRpb24udG9Mb3dlckNhc2UoKSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSBcImxlZnRcIjpcclxuICAgICAgICAgICAgICAgICAgICByaWdodCA9IFwiY2FsYygxMDAlICsgNXB4KVwiO1xyXG4gICAgICAgICAgICAgICAgICAgIHRvcCA9IFwiY2FsYygtNTAlKVwiO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgY2FzZSBcImxvd2VyLWxlZnRcIjpcclxuICAgICAgICAgICAgICAgICAgICByaWdodCA9IFwiY2FsYygxMDAlICsgNXB4KVwiO1xyXG4gICAgICAgICAgICAgICAgICAgIHRvcCA9IFwiY2FsYyg1MCUgKyA1cHgpO1wiO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgICAgIGNhc2UgXCJ1cHBlci1sZWZ0XCI6XHJcbiAgICAgICAgICAgICAgICAgICAgcmlnaHQgPSBcImNhbGMoMTAwJSArIDVweClcIjtcclxuICAgICAgICAgICAgICAgICAgICBib3R0b20gPSBcImNhbGMoNTAlICsgNXB4KVwiO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgICAgIGNhc2UgXCJhYm92ZVwiOlxyXG4gICAgICAgICAgICAgICAgICAgIHJpZ2h0ID0gXCJjYWxjKC01MCUpXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgYm90dG9tID0gXCJjYWxjKDEwMCUgKyA1cHgpXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICAgICAgY2FzZSBcImJlbG93XCI6XHJcbiAgICAgICAgICAgICAgICAgICAgcmlnaHQgPSBcImNhbGMoLTUwJSlcIjtcclxuICAgICAgICAgICAgICAgICAgICB0b3AgPSBcImNhbGMoMTAwJSArIDVweClcIjtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgICAgICBjYXNlIFwicmlnaHRcIjpcclxuICAgICAgICAgICAgICAgICAgICBsZWZ0ID0gXCJjYWxjKDEwMCUgKyA1cHgpXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9wID0gXCJjYWxjKC01MCUpXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBjYXNlIFwibG93ZXItcmlnaHRcIjpcclxuICAgICAgICAgICAgICAgICAgICBsZWZ0ID0gXCJjYWxjKDEwMCUgKyA1cHgpXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9wID0gXCJjYWxjKDUwJSArIDVweCk7XCI7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICAgICAgY2FzZSBcInVwcGVyLXJpZ2h0XCI6XHJcbiAgICAgICAgICAgICAgICAgICAgbGVmdCA9IFwiY2FsYygxMDAlICsgNXB4KVwiO1xyXG4gICAgICAgICAgICAgICAgICAgIGJvdHRvbSA9IFwiY2FsYyg1MCUgKyA1cHgpXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmKHRoaXMuaG92ZXJCb3hTaG93bj09PXRydWUpIHtcclxuICAgICAgICAgICAgICAgIGhvdmVyQm94ID0gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaG92ZXJib3gtZGlhbG9nXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByaWdodCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvcCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvdHRvbSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjZmVmZWZlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IFwiMnB4IHNvbGlkICMwMDBcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogXCI1cHhcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IFwiMjBweFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgekluZGV4OiAxMDBcclxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25Nb3VzZUVudGVyPXt0aGlzLm92ZXJEaWFsb2d9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uTW91c2VMZWF2ZT17dGhpcy5vdXREaWFsb2d9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7X19odG1sOiB2YWx1ZX19XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImhvdmVyYm94XCJcclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBcIjEwMCVcIixcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgICAgICAgICAgICAgICAgICBmbGV4RGlyZWN0aW9uOiBcInJvd1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgb25Nb3VzZUxlYXZlPXt0aGlzLm91dEJ1dHRvbn1cclxuICAgICAgICAgICAgPiAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImhvdmVyYm94LWJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IFwicmVsYXRpdmVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcIiM0M2MzNWZcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogXCIxMHB4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogXCI1MCVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogXCJhdXRvXCJcclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgIG9uTW91c2VFbnRlcj17dGhpcy5vdmVyQnV0dG9ufVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIHtob3ZlckJveH1cclxuICAgICAgICAgICAgICAgICAgICA8c3BhblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1wiZ2x5cGhpY29uIGdseXBoaWNvbi1cIiArIGljb24gKyBcIiBob3ZlcmJveC1pY29uXCJ9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IFwid2hpdGVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbkxlZnQ6IFwiYXV0b1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luUmlnaHQ6IFwiYXV0b1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luVG9wOiBcIi0ycHhcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9wb2ludGVyRXZlbnRzOiBcIm5vbmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvL29uTW91c2VFbnRlcj17dGhpcy5zaG93SG92ZXJCb3h9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFBhcmVudFRhYmxlRWxlbWVudCgpIDogSFRNTEVsZW1lbnQgfCB1bmRlZmluZWRcclxuICAgIHtcclxuICAgICAgICBsZXQgbWUgPSBSZWFjdERvbS5maW5kRE9NTm9kZSh0aGlzKTtcclxuICAgICAgICB2YXIgbWF4TGV2ZWxzID0gMTA7XHJcbiAgICAgICAgdmFyIHBhcmVudCA6IEhUTUxFbGVtZW50ID0gbWUucGFyZW50RWxlbWVudDtcclxuICAgICAgICB3aGlsZSghcGFyZW50LmNsYXNzTGlzdC5jb250YWlucyhcInRhYmxlLWNvbnRhaW5lclwiKSB8fCBtYXhMZXZlbHMgPT0gMClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHBhcmVudD1wYXJlbnQucGFyZW50RWxlbWVudDtcclxuICAgICAgICAgICAgbWF4TGV2ZWxzLS07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZihtYXhMZXZlbHM9PTApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICByZXR1cm4gcGFyZW50O1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBnZXRQYXJlbnRUREVsZW1lbnQoKSA6IEhUTUxFbGVtZW50IHwgdW5kZWZpbmVkXHJcbiAgICB7XHJcbiAgICAgICAgbGV0IG1lID0gUmVhY3REb20uZmluZERPTU5vZGUodGhpcyk7XHJcbiAgICAgICAgdmFyIG1heExldmVscyA9IDEwO1xyXG4gICAgICAgIHZhciBwYXJlbnQgOiBIVE1MRWxlbWVudCA9IG1lLnBhcmVudEVsZW1lbnQ7XHJcbiAgICAgICAgd2hpbGUoIHBhcmVudC50YWdOYW1lLnRvTG93ZXJDYXNlKCkgIT09XCJ0ZFwiIHx8IG1heExldmVscyA9PSAwKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcGFyZW50PXBhcmVudC5wYXJlbnRFbGVtZW50O1xyXG4gICAgICAgICAgICBtYXhMZXZlbHMtLTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmKG1heExldmVscz09MClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHJldHVybiBwYXJlbnQ7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGdldFBhcmVudFJvd0VsZW1lbnQoKSA6IEhUTUxFbGVtZW50IHwgdW5kZWZpbmVkXHJcbiAgICB7XHJcbiAgICAgICAgbGV0IG1lID0gUmVhY3REb20uZmluZERPTU5vZGUodGhpcyk7XHJcbiAgICAgICAgdmFyIG1heExldmVscyA9IDEwO1xyXG4gICAgICAgIHZhciBwYXJlbnQgOiBIVE1MRWxlbWVudCA9IG1lLnBhcmVudEVsZW1lbnQ7XHJcbiAgICAgICAgd2hpbGUoIHBhcmVudC50YWdOYW1lLnRvTG93ZXJDYXNlKCkgIT09XCJ0clwiIHx8IG1heExldmVscyA9PSAwKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcGFyZW50PXBhcmVudC5wYXJlbnRFbGVtZW50O1xyXG4gICAgICAgICAgICBtYXhMZXZlbHMtLTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmKG1heExldmVscz09MClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHJldHVybiBwYXJlbnQ7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGdldFBhcmVudFRhYmxlQ29tcG9uZW50SWQodGFibGU6IEhUTUxFbGVtZW50KSA6IHN0cmluZ1xyXG4gICAge1xyXG4gICAgICAgIHZhciBjb21wb25lbnRJZDogc3RyaW5nID0gdGFibGUuYXR0cmlidXRlcy5nZXROYW1lZEl0ZW0oJ2lkJykudmFsdWU7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcmV0dXJuIGNvbXBvbmVudElkO1xyXG4gICAgfVxyXG59XHJcblxyXG5tYW55d2hvLmNvbXBvbmVudC5yZWdpc3RlcignSG92ZXJCb3gnLCBIb3ZlckJveCk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIb3ZlckJveDtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvSG92ZXJCb3gudHN4Il0sInNvdXJjZVJvb3QiOiIifQ==