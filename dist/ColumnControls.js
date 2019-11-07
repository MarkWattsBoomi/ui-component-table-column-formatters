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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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


/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMDZjYmUwYTYwZjJkYWY5ZGFlNWIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiUmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJSZWFjdERPTVwiIiwid2VicGFjazovLy8uL3NyYy9pbmRleC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL0VsYXBzZWRUaW1lRnJpZW5kbHkudHN4Iiwid2VicGFjazovLy8uL3NyYy9FbGFwc2VkVGltZUxpdmVMb25nLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvRWxhcHNlZFRpbWVMaXZlU2hvcnQudHN4Iiwid2VicGFjazovLy8uL3NyYy9EYXRlVGltZUhlbHBlcnMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0VsYXBzZWRUaW1lLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvRGF0ZURETU1NWVkudHN4Iiwid2VicGFjazovLy8uL3NyYy9EYXRlVGltZURETU1NWVlISE1NLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvQm9vbGVhbkljb24udHN4Iiwid2VicGFjazovLy8uL3NyYy9TdGF0dXNJY29uLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvTG9va3VwVmFsdWUudHN4Iiwid2VicGFjazovLy8uL3NyYy9FcG9jaERhdGVERE1NTVlZLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvRXBvY2hEYXRlVGltZURETU1NWVlISE1NLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvUGVyY2VudFByb2dyZXNzQmFyLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvSHlwZXJsaW5rLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvVGh1bWJuYWlsLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvRG9sbGFyVmFsdWUudHN4Iiwid2VicGFjazovLy8uL3NyYy9UYWJsZVJvd1N0eWxlci50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7O0FDN0RBLHVCOzs7Ozs7QUNBQSwwQjs7Ozs7Ozs7Ozs7O0FDQUEsaUNBQXNDO0FBQ3RDLGlDQUFzQztBQUN0QyxpQ0FBdUM7QUFDdkMsaUNBQThCO0FBQzlCLGlDQUE4QjtBQUM5QixpQ0FBc0M7QUFDdEMsa0NBQThCO0FBQzlCLGtDQUE2QjtBQUM3QixrQ0FBOEI7QUFDOUIsa0NBQW1DO0FBQ25DLGtDQUEyQztBQUMzQyxrQ0FBcUM7QUFDckMsa0NBQTRCO0FBQzVCLGtDQUE0QjtBQUM1QixrQ0FBOEI7QUFDOUIsa0NBQWlDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2JqQyxtQ0FBK0I7QUFFL0I7SUFBa0MsdUNBQXlCO0lBRXZELDZCQUFZLEtBQVc7ZUFFbkIsa0JBQU0sS0FBSyxDQUFDO0lBQ2hCLENBQUM7SUFFRCwrQ0FBaUIsR0FBakI7UUFFSSxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDdkIsQ0FBQztJQUVKLG9DQUFNLEdBQU47UUFHTyxJQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxFQUMxQjtZQUNJLElBQUksRUFBRSxHQUFHLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDO1lBQzFDLElBQUksT0FBTyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDbkMsT0FBTyxrQ0FBTyxPQUFPLENBQVEsQ0FBQztTQUNqQzthQUVEO1lBQ0ksT0FBTyxJQUFJLENBQUM7U0FDZjtJQUNMLENBQUM7SUFFRCx5Q0FBVyxHQUFYLFVBQWEsUUFBZTtRQUUxQixJQUFNLGFBQWEsR0FBRyxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxFQUFFLEdBQUcsQ0FBQyxRQUFRLENBQUMsaUJBQWlCLEVBQUUsR0FBRSxFQUFFLEdBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUM5RixJQUFJLFVBQVUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxJQUFJLEVBQUUsQ0FBQyxDQUFDLE9BQU8sRUFBRSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLE9BQU8sRUFBRSxHQUFHLElBQUksQ0FBQyxDQUFDO1FBQzlGLElBQUksVUFBVSxJQUFJLENBQUMsRUFDbkI7WUFDRSxJQUFJLEtBQUssR0FBUyxFQUFFLENBQUM7WUFDckIsS0FBSyxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUMsQ0FBQztZQUM1QyxVQUFVLElBQUksS0FBSyxDQUFDLElBQUksR0FBRyxLQUFLLENBQUM7WUFDakMsS0FBSyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsQ0FBQztZQUM1QyxVQUFVLElBQUksS0FBSyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7WUFDakMsS0FBSyxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsR0FBRyxFQUFFLENBQUMsQ0FBQztZQUM1QyxVQUFVLElBQUksS0FBSyxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUM7WUFDakMsS0FBSyxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1lBRXZDLElBQUksTUFBTSxHQUFHLEVBQUUsQ0FBQztZQUNoQixJQUFHLEtBQUssQ0FBQyxJQUFJLEdBQUcsQ0FBQyxFQUNqQjtnQkFDSSxNQUFNLElBQUksS0FBSyxDQUFDLElBQUksR0FBRyxPQUFPLENBQUM7YUFDbEM7WUFFRCxJQUFHLEtBQUssQ0FBQyxLQUFLLEdBQUcsQ0FBQyxFQUNsQjtnQkFDRSxJQUFHLE1BQU0sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUNwQjtvQkFDRSxNQUFNLElBQUksSUFBSSxDQUFDO2lCQUNoQjtnQkFDQyxNQUFNLElBQUksS0FBSyxDQUFDLEtBQUssR0FBRyxRQUFRLENBQUM7YUFDcEM7WUFFRCxJQUFHLEtBQUssQ0FBQyxPQUFPLEdBQUcsQ0FBQyxFQUNwQjtnQkFDRSxJQUFHLE1BQU0sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUNwQjtvQkFDRSxNQUFNLElBQUksSUFBSSxDQUFDO2lCQUNoQjtnQkFDQyxNQUFNLElBQUksS0FBSyxDQUFDLE9BQU8sR0FBRyxVQUFVLENBQUM7YUFDeEM7WUFFRCxJQUFHLEtBQUssQ0FBQyxPQUFPLEdBQUcsQ0FBQyxFQUNwQjtnQkFDRSxJQUFHLE1BQU0sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUNwQjtvQkFDRSxNQUFNLElBQUksSUFBSSxDQUFDO2lCQUNoQjtnQkFDQyxNQUFNLElBQUksS0FBSyxDQUFDLE9BQU8sR0FBRyxVQUFVLENBQUM7YUFDeEM7WUFFRCxPQUFPLE1BQU0sQ0FBQztTQUNmO2FBRUQ7WUFDRSxPQUFPLEVBQUUsQ0FBQztTQUNYO0lBQ0gsQ0FBQztJQUNMLDBCQUFDO0FBQUQsQ0FBQyxDQWxGaUMsS0FBSyxDQUFDLFNBQVMsR0FrRmhEO0FBRUQsT0FBTyxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMscUJBQXFCLEVBQUUsbUJBQW1CLENBQUMsQ0FBQztBQUV2RSxrQkFBZSxtQkFBbUIsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4Rm5DLG1DQUErQjtBQUUvQjtJQUFrQyx1Q0FBeUI7SUFLekQsNkJBQVksS0FBVztRQUF2QixZQUVJLGtCQUFNLEtBQUssQ0FBQyxTQUNmO1FBTEQsYUFBTyxHQUFHLENBQUMsQ0FBQyxDQUFDOztJQUtiLENBQUM7SUFFRCwrQ0FBaUIsR0FBakI7UUFFSSxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDbkIsSUFBSSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ3hFLENBQUM7SUFFRCxrREFBb0IsR0FBcEI7UUFFRSxJQUFHLElBQUksQ0FBQyxPQUFPLElBQUksQ0FBQyxFQUNwQjtZQUNFLGFBQWEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDNUIsSUFBSSxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUMsQ0FBQztTQUNuQjtJQUNILENBQUM7SUFFRCx3Q0FBVSxHQUFWO1FBRUUsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ3JCLENBQUM7SUFFRixvQ0FBTSxHQUFOO1FBR08sSUFBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksRUFDMUI7WUFDSSxJQUFJLEVBQUUsR0FBRyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQztZQUMxQyxJQUFJLE9BQU8sR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQ25DLE9BQU8sa0NBQU8sT0FBTyxDQUFRLENBQUM7U0FDakM7YUFFRDtZQUNJLE9BQU8sSUFBSSxDQUFDO1NBQ2Y7SUFDUCxDQUFDO0lBRUQseUNBQVcsR0FBWCxVQUFhLFFBQWU7UUFFMUIsSUFBTSxhQUFhLEdBQUcsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sRUFBRSxHQUFHLENBQUMsUUFBUSxDQUFDLGlCQUFpQixFQUFFLEdBQUUsRUFBRSxHQUFFLElBQUksQ0FBQyxDQUFDLENBQUM7UUFDOUYsSUFBSSxVQUFVLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksSUFBSSxFQUFFLENBQUMsQ0FBQyxPQUFPLEVBQUUsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxPQUFPLEVBQUUsR0FBRyxJQUFJLENBQUMsQ0FBQztRQUM5RixJQUFJLFVBQVUsSUFBSSxDQUFDLEVBQ25CO1lBQ0UsSUFBSSxLQUFLLEdBQVMsRUFBRSxDQUFDO1lBQ3JCLEtBQUssQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDLENBQUM7WUFDNUMsVUFBVSxJQUFJLEtBQUssQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFDO1lBQ2pDLEtBQUssQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLENBQUM7WUFDNUMsVUFBVSxJQUFJLEtBQUssQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO1lBQ2pDLEtBQUssQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLEdBQUcsRUFBRSxDQUFDLENBQUM7WUFDNUMsVUFBVSxJQUFJLEtBQUssQ0FBQyxPQUFPLEdBQUcsRUFBRSxDQUFDO1lBQ2pDLEtBQUssQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsQ0FBQztZQUV2QyxJQUFJLE1BQU0sR0FBRyxFQUFFLENBQUM7WUFDaEIsSUFBRyxLQUFLLENBQUMsSUFBSSxHQUFHLENBQUMsRUFDakI7Z0JBQ0ksTUFBTSxJQUFJLEtBQUssQ0FBQyxJQUFJLEdBQUcsT0FBTyxDQUFDO2FBQ2xDO1lBRUQsSUFBRyxLQUFLLENBQUMsS0FBSyxHQUFHLENBQUMsRUFDbEI7Z0JBQ0UsSUFBRyxNQUFNLENBQUMsTUFBTSxHQUFHLENBQUMsRUFDcEI7b0JBQ0UsTUFBTSxJQUFJLElBQUksQ0FBQztpQkFDaEI7Z0JBQ0MsTUFBTSxJQUFJLEtBQUssQ0FBQyxLQUFLLEdBQUcsUUFBUSxDQUFDO2FBQ3BDO1lBRUQsSUFBRyxLQUFLLENBQUMsT0FBTyxHQUFHLENBQUMsRUFDcEI7Z0JBQ0UsSUFBRyxNQUFNLENBQUMsTUFBTSxHQUFHLENBQUMsRUFDcEI7b0JBQ0UsTUFBTSxJQUFJLElBQUksQ0FBQztpQkFDaEI7Z0JBQ0MsTUFBTSxJQUFJLEtBQUssQ0FBQyxPQUFPLEdBQUcsVUFBVSxDQUFDO2FBQ3hDO1lBRUQsSUFBRyxLQUFLLENBQUMsT0FBTyxHQUFHLENBQUMsRUFDcEI7Z0JBQ0UsSUFBRyxNQUFNLENBQUMsTUFBTSxHQUFHLENBQUMsRUFDcEI7b0JBQ0UsTUFBTSxJQUFJLElBQUksQ0FBQztpQkFDaEI7Z0JBQ0MsTUFBTSxJQUFJLEtBQUssQ0FBQyxPQUFPLEdBQUcsVUFBVSxDQUFDO2FBQ3hDO1lBRUQsT0FBTyxNQUFNLENBQUM7U0FDZjthQUVEO1lBQ0UsT0FBTyxFQUFFLENBQUM7U0FDWDtJQUNILENBQUM7SUFDSCwwQkFBQztBQUFELENBQUMsQ0FwR2lDLEtBQUssQ0FBQyxTQUFTLEdBb0doRDtBQUVELE9BQU8sQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLHFCQUFxQixFQUFFLG1CQUFtQixDQUFDLENBQUM7QUFFdkUsa0JBQWUsbUJBQW1CLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMUduQyxtQ0FBK0I7QUFDL0IsK0NBQTBEO0FBRTFEO0lBQW1DLHdDQUF5QjtJQUsxRCw4QkFBWSxLQUFXO1FBQXZCLFlBRUksa0JBQU0sS0FBSyxDQUFDLFNBQ2Y7UUFMRCxhQUFPLEdBQUcsQ0FBQyxDQUFDLENBQUM7O0lBS2IsQ0FBQztJQUVELGdEQUFpQixHQUFqQjtRQUVJLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNuQixJQUFJLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDeEUsQ0FBQztJQUVELG1EQUFvQixHQUFwQjtRQUVFLElBQUcsSUFBSSxDQUFDLE9BQU8sSUFBSSxDQUFDLEVBQ3BCO1lBQ0UsYUFBYSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUM1QixJQUFJLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQyxDQUFDO1NBQ25CO0lBQ0gsQ0FBQztJQUVELHlDQUFVLEdBQVY7UUFFRSxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDckIsQ0FBQztJQUVGLHFDQUFNLEdBQU47UUFHTyxJQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxFQUMxQjtZQUNJLElBQUksRUFBRSxHQUFHLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDO1lBQzFDLElBQUksT0FBTyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDbkMsT0FBTyxrQ0FBTyxPQUFPLENBQVEsQ0FBQztTQUNqQzthQUVEO1lBQ0ksT0FBTyxJQUFJLENBQUM7U0FDZjtJQUNQLENBQUM7SUFFRCwwQ0FBVyxHQUFYLFVBQWEsUUFBZTtRQUcxQixJQUFNLE9BQU8sR0FBYyw2QkFBVyxDQUFDLFVBQVUsQ0FBQyxRQUFRLEVBQUUsSUFBSSxJQUFJLEVBQUUsQ0FBQyxDQUFDO1FBRXRFLElBQUksTUFBTSxHQUFHLEVBQUUsQ0FBQztRQUNoQixJQUFHLE9BQU8sQ0FBQyxJQUFJLEdBQUcsQ0FBQyxFQUNuQjtZQUNJLE1BQU0sSUFBSSxPQUFPLENBQUMsSUFBSSxHQUFHLEdBQUcsQ0FBQztTQUNoQztRQUVELElBQUcsT0FBTyxDQUFDLEtBQUssR0FBRyxDQUFDLEVBQ3BCO1lBQ0UsSUFBRyxNQUFNLENBQUMsTUFBTSxHQUFHLENBQUMsRUFDcEI7Z0JBQ0UsTUFBTSxJQUFJLEdBQUcsQ0FBQzthQUNmO1lBQ0MsTUFBTSxJQUFJLE9BQU8sQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFDO1NBQ2pDO1FBRUQsSUFBRyxPQUFPLENBQUMsT0FBTyxHQUFHLENBQUMsRUFDdEI7WUFDRSxJQUFHLE1BQU0sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUNwQjtnQkFDRSxNQUFNLElBQUksR0FBRyxDQUFDO2FBQ2Y7WUFDQyxNQUFNLElBQUksT0FBTyxDQUFDLE9BQU8sR0FBRyxHQUFHLENBQUM7U0FDbkM7UUFFRCxJQUFHLE9BQU8sQ0FBQyxPQUFPLEdBQUcsQ0FBQyxFQUN0QjtZQUNFLElBQUcsTUFBTSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQ3BCO2dCQUNFLE1BQU0sSUFBSSxHQUFHLENBQUM7YUFDZjtZQUNDLE1BQU0sSUFBSSxPQUFPLENBQUMsT0FBTyxHQUFHLEdBQUcsQ0FBQztTQUNuQztRQUVELE9BQU8sTUFBTSxDQUFDO0lBQ2xCLENBQUM7SUFDSCwyQkFBQztBQUFELENBQUMsQ0FyRmtDLEtBQUssQ0FBQyxTQUFTLEdBcUZqRDtBQUVELE9BQU8sQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLHNCQUFzQixFQUFFLG9CQUFvQixDQUFDLENBQUM7QUFFekUsa0JBQWUsb0JBQW9CLENBQUM7Ozs7Ozs7Ozs7QUN0RnBDO0lBQUE7SUFnQ0EsQ0FBQztJQTlCVSxzQkFBVSxHQUFqQixVQUFrQixRQUFlLEVBQUUsU0FBZ0I7UUFFL0MsSUFBSSxPQUFPLEdBQWM7WUFDckIsSUFBSSxFQUFFLENBQUM7WUFDUCxLQUFLLEVBQUUsQ0FBQztZQUNSLE9BQU8sRUFBRSxDQUFDO1lBQ1YsT0FBTyxFQUFFLENBQUM7U0FDYixDQUFDO1FBRUYsSUFBTSxhQUFhLEdBQUcsUUFBUSxDQUFDLGlCQUFpQixFQUFFLEdBQUcsS0FBSyxDQUFDO1FBQzNELElBQU0sT0FBTyxHQUFVLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLEVBQUUsR0FBRyxhQUFhLENBQUMsQ0FBQztRQUVwRSwwQkFBMEI7UUFDMUIsSUFBTSxZQUFZLEdBQUcsU0FBUyxDQUFDLGlCQUFpQixFQUFFLEdBQUcsS0FBSyxDQUFDO1FBQzNELElBQU0sTUFBTSxHQUFVLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLEVBQUUsR0FBRyxZQUFZLENBQUMsQ0FBQztRQUVuRSxJQUFJLFVBQVUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxPQUFPLEVBQUUsR0FBRyxRQUFRLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQztRQUd0RSxPQUFPLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxHQUFHLFFBQVEsQ0FBQyxDQUFDO1FBQ2pELFVBQVUsSUFBSSxPQUFPLENBQUMsSUFBSSxHQUFHLFFBQVEsQ0FBQztRQUN0QyxPQUFPLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxHQUFHLE9BQU8sQ0FBQyxDQUFDO1FBQ2pELFVBQVUsSUFBSSxPQUFPLENBQUMsS0FBSyxHQUFHLE9BQU8sQ0FBQztRQUN0QyxPQUFPLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQyxDQUFDO1FBQ2pELFVBQVUsSUFBSSxPQUFPLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztRQUN0QyxPQUFPLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxDQUFDO1FBRWhELE9BQU8sT0FBTztJQUNsQixDQUFDO0lBRUwsa0JBQUM7QUFBRCxDQUFDO0FBaENZLGtDQUFXOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ054QixtQ0FBK0I7QUFFL0I7SUFBMEIsK0JBQXlCO0lBRS9DLHFCQUFZLEtBQVc7ZUFFbkIsa0JBQU0sS0FBSyxDQUFDO0lBQ2hCLENBQUM7SUFFRCx1Q0FBaUIsR0FBakI7UUFFSSxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDdkIsQ0FBQztJQUVKLDRCQUFNLEdBQU47UUFHTyxJQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxFQUMxQjtZQUNJLElBQUksRUFBRSxHQUFHLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDO1lBQzFDLElBQUksT0FBTyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDbkMsT0FBTyxrQ0FBTyxPQUFPLENBQVEsQ0FBQztTQUNqQzthQUVEO1lBQ0ksT0FBTyxJQUFJLENBQUM7U0FDZjtJQUNQLENBQUM7SUFFRCxpQ0FBVyxHQUFYLFVBQWEsUUFBZTtRQUUxQixJQUFJLFVBQVUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxJQUFJLEVBQUUsQ0FBQyxDQUFDLE9BQU8sRUFBRSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLE9BQU8sRUFBRSxHQUFHLElBQUksQ0FBQyxDQUFDO1FBQ3pGLElBQUksVUFBVSxJQUFJLENBQUMsRUFDbkI7WUFDRSxJQUFJLEtBQUssR0FBUyxFQUFFLENBQUM7WUFDckIsS0FBSyxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUMsQ0FBQztZQUM1QyxVQUFVLElBQUksS0FBSyxDQUFDLElBQUksR0FBRyxLQUFLLENBQUM7WUFDakMsS0FBSyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsQ0FBQztZQUM1QyxVQUFVLElBQUksS0FBSyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7WUFDakMsS0FBSyxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsR0FBRyxFQUFFLENBQUMsQ0FBQztZQUM1QyxVQUFVLElBQUksS0FBSyxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUM7WUFDakMsS0FBSyxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1lBRXZDLElBQUksTUFBTSxHQUFHLEVBQUUsQ0FBQztZQUNoQixJQUFHLEtBQUssQ0FBQyxJQUFJLEdBQUcsQ0FBQyxFQUNqQjtnQkFDSSxNQUFNLElBQUksS0FBSyxDQUFDLElBQUksR0FBRyxPQUFPLENBQUM7YUFDbEM7WUFFRCxJQUFHLEtBQUssQ0FBQyxLQUFLLEdBQUcsQ0FBQyxFQUNsQjtnQkFDRSxJQUFHLE1BQU0sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUNwQjtvQkFDRSxNQUFNLElBQUksSUFBSSxDQUFDO2lCQUNoQjtnQkFDQyxNQUFNLElBQUksS0FBSyxDQUFDLEtBQUssR0FBRyxRQUFRLENBQUM7YUFDcEM7WUFFRCxJQUFHLEtBQUssQ0FBQyxPQUFPLEdBQUcsQ0FBQyxFQUNwQjtnQkFDRSxJQUFHLE1BQU0sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUNwQjtvQkFDRSxNQUFNLElBQUksSUFBSSxDQUFDO2lCQUNoQjtnQkFDQyxNQUFNLElBQUksS0FBSyxDQUFDLE9BQU8sR0FBRyxVQUFVLENBQUM7YUFDeEM7WUFFRCxJQUFHLEtBQUssQ0FBQyxPQUFPLEdBQUcsQ0FBQyxFQUNwQjtnQkFDRSxJQUFHLE1BQU0sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUNwQjtvQkFDRSxNQUFNLElBQUksSUFBSSxDQUFDO2lCQUNoQjtnQkFDQyxNQUFNLElBQUksS0FBSyxDQUFDLE9BQU8sR0FBRyxVQUFVLENBQUM7YUFDeEM7WUFFRCxPQUFPLE1BQU0sQ0FBQztTQUNmO2FBRUQ7WUFDRSxPQUFPLEVBQUUsQ0FBQztTQUNYO0lBQ0gsQ0FBQztJQUNILGtCQUFDO0FBQUQsQ0FBQyxDQWpGeUIsS0FBSyxDQUFDLFNBQVMsR0FpRnhDO0FBRUQsT0FBTyxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsYUFBYSxFQUFFLFdBQVcsQ0FBQyxDQUFDO0FBRXZELGtCQUFlLFdBQVcsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2RjNCLG1DQUErQjtBQUUvQjtJQUEwQiwrQkFBeUI7SUFFL0MscUJBQVksS0FBVztlQUVuQixrQkFBTSxLQUFLLENBQUM7SUFDaEIsQ0FBQztJQUVELHVDQUFpQixHQUFqQjtRQUVJLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUN2QixDQUFDO0lBRUosNEJBQU0sR0FBTjtRQUdPLElBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLEVBQzFCO1lBQ0ksc0RBQXNEO1lBQ3RELElBQUksRUFBRSxHQUFHLElBQUksSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLEVBQUU7Z0JBQ3RDLElBQUksRUFBRSxTQUFTO2dCQUNmLEtBQUssRUFBRSxNQUFNO2dCQUNiLEdBQUcsRUFBRSxTQUFTO2FBQ2pCLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDO1lBRTdDLE9BQU8sa0NBQU8sRUFBRSxDQUFRLENBQUM7U0FDNUI7YUFFRDtZQUNJLE9BQU8sSUFBSSxDQUFDO1NBQ2Y7SUFDTCxDQUFDO0lBQ0wsa0JBQUM7QUFBRCxDQUFDLENBL0J5QixLQUFLLENBQUMsU0FBUyxHQStCeEM7QUFFRCxPQUFPLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxhQUFhLEVBQUUsV0FBVyxDQUFDLENBQUM7QUFFdkQsa0JBQWUsV0FBVyxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3JDM0IsbUNBQStCO0FBRS9CO0lBQWtDLHVDQUF5QjtJQUV2RCw2QkFBWSxLQUFXO2VBRW5CLGtCQUFNLEtBQUssQ0FBQztJQUNoQixDQUFDO0lBRUQsK0NBQWlCLEdBQWpCO1FBRUksSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ3ZCLENBQUM7SUFFSixvQ0FBTSxHQUFOO1FBR08sSUFBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksRUFDMUI7WUFDSSxzREFBc0Q7WUFDdEQsSUFBSSxFQUFFLEdBQUcsSUFBSSxJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sRUFBRTtnQkFDdEMsSUFBSSxFQUFFLFNBQVM7Z0JBQ2YsS0FBSyxFQUFFLE1BQU07Z0JBQ2IsR0FBRyxFQUFFLFNBQVM7Z0JBQ2QsSUFBSSxFQUFFLFNBQVM7Z0JBQ2YsTUFBTSxFQUFFLFNBQVM7YUFDcEIsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUM7WUFFN0MsT0FBTyxrQ0FBTyxFQUFFLENBQVEsQ0FBQztTQUM1QjthQUVEO1lBQ0ksT0FBTyxJQUFJLENBQUM7U0FDZjtJQUNMLENBQUM7SUFDTCwwQkFBQztBQUFELENBQUMsQ0FqQ2lDLEtBQUssQ0FBQyxTQUFTLEdBaUNoRDtBQUVELE9BQU8sQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLHFCQUFxQixFQUFFLG1CQUFtQixDQUFDLENBQUM7QUFFdkUsa0JBQWUsbUJBQW1CLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdkNuQyxtQ0FBK0I7QUFFL0I7SUFBMEIsK0JBQXlCO0lBRS9DLHFCQUFZLEtBQVc7ZUFFbkIsa0JBQU0sS0FBSyxDQUFDO0lBQ2hCLENBQUM7SUFFRCx1Q0FBaUIsR0FBakI7UUFFSSxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDdkIsQ0FBQztJQUVKLDRCQUFNLEdBQU47UUFFRyxJQUFJLFNBQVMsR0FBUyxzQkFBc0IsQ0FBQztRQUN6QyxJQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxLQUFLLE1BQU0sRUFDckM7WUFDSSxTQUFTLElBQUksSUFBSSxDQUFDO1NBQ3JCO2FBRUQ7WUFDSSxTQUFTLElBQUksUUFBUSxDQUFDO1NBQ3pCO1FBRUQsT0FBTyw4QkFBTSxTQUFTLEVBQUUsU0FBUyxHQUFTLENBQUM7SUFDL0MsQ0FBQztJQUNMLGtCQUFDO0FBQUQsQ0FBQyxDQTFCeUIsS0FBSyxDQUFDLFNBQVMsR0EwQnhDO0FBRUQsT0FBTyxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsYUFBYSxFQUFFLFdBQVcsQ0FBQyxDQUFDO0FBRXZELGtCQUFlLFdBQVcsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoQzNCLG1DQUErQjtBQUUvQjtJQUF5Qiw4QkFBeUI7SUFFOUMsb0JBQVksS0FBVztlQUVuQixrQkFBTSxLQUFLLENBQUM7SUFDaEIsQ0FBQztJQUVELHNDQUFpQixHQUFqQjtRQUVJLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUN2QixDQUFDO0lBRUosMkJBQU0sR0FBTjtRQUVPLElBQUksU0FBUyxHQUFTLHNCQUFzQixDQUFDO1FBQzdDLElBQUksT0FBTyxHQUFZLEVBQUUsQ0FBQztRQUMxQixJQUFJLE1BQVcsQ0FBQztRQUNoQixRQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLFdBQVcsRUFBRSxFQUM1QztZQUNJLEtBQUssR0FBRztnQkFDSixNQUFNLEdBQUMsQ0FDSCw4QkFDSSxTQUFTLEVBQUUsK0JBQStCLEVBQzFDLEtBQUssRUFBRSxRQUFRLEdBQ2pCLENBQ0wsQ0FBQztZQUVOLEtBQUssR0FBRztnQkFDSixNQUFNLEdBQUMsQ0FDSCw4QkFDSSxTQUFTLEVBQUUsd0JBQXdCLEVBQ25DLEtBQUssRUFBRSxVQUFVLEdBQ25CLENBQ0wsQ0FBQztnQkFDRixNQUFNO1lBRVYsS0FBSyxHQUFHO2dCQUNKLE1BQU0sR0FBQyxDQUNILDhCQUNJLFNBQVMsRUFBRSwyQkFBMkIsRUFDdEMsS0FBSyxFQUFFLFFBQVEsR0FDakIsQ0FDTCxDQUFDO2dCQUNGLE1BQU07WUFFVixLQUFLLFVBQVU7Z0JBQ1gsTUFBTSxHQUFDLENBQ0gsNkJBQ0ksU0FBUyxFQUFDLFdBQVcsRUFDckIsR0FBRyxFQUFDLG9RQUFvUSxFQUN4USxLQUFLLEVBQUMsVUFBVSxHQUNsQixDQUFDLENBQUM7Z0JBQ0osTUFBTTtZQUVkLEtBQUssT0FBTztnQkFDUixNQUFNLEdBQUMsQ0FDSCw2QkFDSSxTQUFTLEVBQUMsV0FBVyxFQUNyQixHQUFHLEVBQUMsZ1BBQWdQLEVBQ3BQLEtBQUssRUFBQyxVQUFVLEdBQ2xCLENBQUMsQ0FBQztnQkFDSixNQUFNO1lBRWQ7Z0JBQ0ksTUFBTSxHQUFDLENBQ0gsOEJBQ0ksU0FBUyxFQUFFLHVDQUF1QyxFQUNsRCxLQUFLLEVBQUUsU0FBUyxHQUNsQixDQUNMLENBQUM7Z0JBQ0YsTUFBTTtTQUNiO1FBR0QsT0FBTyxNQUFNLENBQUM7UUFBQSxDQUFDO0lBQ25CLENBQUM7SUFDTCxpQkFBQztBQUFELENBQUMsQ0E1RXdCLEtBQUssQ0FBQyxTQUFTLEdBNEV2QztBQUVELE9BQU8sQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLFlBQVksRUFBRSxVQUFVLENBQUMsQ0FBQztBQUVyRCxrQkFBZSxVQUFVLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEYxQixtQ0FBK0I7QUFDL0Isc0NBQXNDO0FBR3RDLDZDQUE2QztBQUM3QyxFQUFFO0FBQ0Y7SUFBMEIsK0JBQXlCO0lBRS9DLGVBQWU7SUFDZixpQkFBaUI7SUFDakIscUJBQVksS0FBVztlQUVuQixrQkFBTSxLQUFLLENBQUM7UUFDWixpQ0FBaUM7SUFDckMsQ0FBQztJQUVELHVDQUFpQixHQUFqQjtRQUVJLHNDQUFzQztRQUN0QyxzRUFBc0U7UUFDdEUsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ25CLDZEQUE2RDtJQUNqRSxDQUFDO0lBRUQsdUNBQWlCLEdBQWpCLFVBQWtCLFVBQWdCLEVBQUUsZUFBd0IsRUFBRyxRQUFpQjtRQUU1RSxLQUFJLElBQUksR0FBRyxJQUFJLFVBQVUsRUFDekI7WUFDSSxJQUFHLEdBQUcsS0FBSyxlQUFlLEdBQUcsR0FBRyxHQUFHLFFBQVEsRUFDM0M7Z0JBQ0ksT0FBTyxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUM7YUFDMUI7U0FDSjtRQUNELE9BQU8sSUFBSSxDQUFDO0lBQ2hCLENBQUM7SUFFRCxzQ0FBZ0IsR0FBaEIsVUFBaUIsSUFBVSxFQUFHLFlBQXFCLEVBQUcsZUFBd0IsRUFBRSxHQUFZO1FBRXhGLElBQUksR0FBRyxHQUFZLEVBQUUsQ0FBQztRQUN0QixJQUFJLEdBQUcsR0FBYSxLQUFLO1FBRXpCLEtBQUksSUFBSSxJQUFJLEdBQUcsQ0FBQyxFQUFHLElBQUksR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFHLElBQUksRUFBRyxFQUMvQztZQUNJLEdBQUcsR0FBQyxFQUFFLENBQUM7WUFDUCxJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7WUFFdEIsS0FBSSxJQUFJLElBQUksR0FBRyxDQUFDLEVBQUcsSUFBSSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxFQUFHLElBQUksRUFBRSxFQUN6RDtnQkFDSSxJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNqQyxJQUFHLElBQUksQ0FBQyxhQUFhLEtBQUssZUFBZSxFQUN6QztvQkFDSSxHQUFHLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQztpQkFDM0I7Z0JBQ0QsSUFBRyxJQUFJLENBQUMsYUFBYSxLQUFLLFlBQVksRUFDdEM7b0JBQ0ksSUFBRyxJQUFJLENBQUMsWUFBWSxLQUFHLEdBQUcsRUFDMUI7d0JBQ0ksR0FBRyxHQUFDLElBQUksQ0FBQztxQkFDWjtpQkFDSjthQUNKO1lBQ0QsSUFBRyxHQUFHLEtBQUcsSUFBSSxFQUNiO2dCQUNJLE9BQU8sR0FBRyxDQUFDO2FBQ2Q7U0FFSjtRQUVELE9BQU8sRUFBRSxDQUFDO0lBQ2QsQ0FBQztJQUVKLDRCQUFNLEdBQU47UUFFTyxJQUFJLEVBQUUsR0FBRyxRQUFRLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3BDLElBQUksS0FBSyxHQUFZLEVBQUUsQ0FBQztRQUN4QixJQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxJQUFJLEVBQUUsRUFDaEM7WUFDSSx5R0FBeUc7WUFDekcsSUFBSSxTQUFTLEdBQUcsRUFBRSxDQUFDO1lBQ25CLElBQUksTUFBTSxHQUFpQixFQUFFLENBQUMsYUFBYSxDQUFDO1lBQzVDLE9BQU0sQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLFNBQVMsSUFBSSxDQUFDLEVBQ3JFO2dCQUNJLE1BQU0sR0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDO2dCQUM1QixTQUFTLEVBQUUsQ0FBQzthQUNmO1lBRUQsSUFBRyxTQUFTLElBQUUsQ0FBQyxFQUNmO2dCQUNJLE9BQU8sRUFBRSxDQUFDO2FBQ2I7WUFDRCxJQUFJLFdBQVcsR0FBRyxNQUFNLENBQUMsVUFBVSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQyxLQUFLLENBQUM7WUFDN0QsSUFBSSxLQUFLLEdBQUcsT0FBTyxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsV0FBVyxFQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7WUFFdkUsSUFBSSxVQUFVLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUM7WUFFdkMsSUFBSSxpQkFBaUIsR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUMsS0FBSyxDQUFDLFVBQVUsRUFBRSxxQkFBcUIsRUFBRSxVQUFVLENBQUMsQ0FBQztZQUNwRyxJQUFJLGVBQWUsR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUMsS0FBSyxDQUFDLFVBQVUsRUFBRSx3QkFBd0IsRUFBRSxVQUFVLENBQUMsQ0FBQztZQUNyRyxJQUFJLG1CQUFtQixHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxLQUFLLENBQUMsVUFBVSxFQUFFLDJCQUEyQixFQUFFLFVBQVUsQ0FBQyxDQUFDO1lBRzVHLElBQUcsaUJBQWlCLEVBQ3BCO2dCQUNJLElBQUksSUFBSSxHQUFHLE9BQU8sQ0FBQyxLQUFLLENBQUMsa0JBQWtCLENBQUMsaUJBQWlCLEVBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUM7Z0JBQ3BGLElBQUcsSUFBSSxFQUNQO29CQUNJLEtBQUssR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxlQUFlLEVBQUUsbUJBQW1CLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsQ0FBQztpQkFDakg7YUFDSjtTQUNKO1FBQ0csT0FBTyxrQ0FBTyxLQUFLLENBQVEsQ0FBQztJQUNwQyxDQUFDO0lBQ0wsa0JBQUM7QUFBRCxDQUFDLENBekd5QixLQUFLLENBQUMsU0FBUyxHQXlHeEM7QUFFRCxPQUFPLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxhQUFhLEVBQUUsV0FBVyxDQUFDLENBQUM7QUFFdkQsa0JBQWUsV0FBVyxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25IM0IsbUNBQStCO0FBRS9CO0lBQStCLG9DQUF5QjtJQUVwRCwwQkFBWSxLQUFXO2VBRW5CLGtCQUFNLEtBQUssQ0FBQztJQUNoQixDQUFDO0lBRUQsNENBQWlCLEdBQWpCO1FBRUksSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ3ZCLENBQUM7SUFFSixpQ0FBTSxHQUFOO1FBR08sSUFBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksRUFDMUI7WUFDSSxJQUFJLE1BQU0sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQztZQUNyQyxJQUFJLE9BQU8sR0FBVyxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLENBQUM7WUFFL0Qsc0NBQXNDO1lBQ3RDLElBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBRSxDQUFDLEVBQ3pCO2dCQUNJLE9BQU8sR0FBRyxPQUFPLEdBQUcsSUFBSSxDQUFDO2FBQzVCO1lBRUQsSUFBSSxFQUFFLEdBQVUsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7WUFFbEMsc0RBQXNEO1lBQ3RELElBQUksRUFBRSxHQUFHLElBQUksSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLEVBQUU7Z0JBQ3RDLElBQUksRUFBRSxTQUFTO2dCQUNmLEtBQUssRUFBRSxNQUFNO2dCQUNiLEdBQUcsRUFBRSxTQUFTO2FBQ2pCLENBQUMsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUM7WUFFZCxPQUFPLGtDQUFPLEVBQUUsQ0FBUSxDQUFDO1NBQzVCO2FBRUQ7WUFDSSxPQUFPLElBQUksQ0FBQztTQUNmO0lBQ0wsQ0FBQztJQUNMLHVCQUFDO0FBQUQsQ0FBQyxDQTFDOEIsS0FBSyxDQUFDLFNBQVMsR0EwQzdDO0FBRUQsT0FBTyxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsa0JBQWtCLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQztBQUVqRSxrQkFBZSxnQkFBZ0IsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoRGhDLG1DQUErQjtBQUUvQjtJQUF1Qyw0Q0FBeUI7SUFFNUQsa0NBQVksS0FBVztlQUVuQixrQkFBTSxLQUFLLENBQUM7SUFDaEIsQ0FBQztJQUVELG9EQUFpQixHQUFqQjtRQUVJLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUN2QixDQUFDO0lBRUoseUNBQU0sR0FBTjtRQUdPLElBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLEVBQzFCO1lBQ0ksSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUM7WUFDckMsSUFBSSxPQUFPLEdBQVcsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxDQUFDO1lBRS9ELHNDQUFzQztZQUN0QyxJQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUUsQ0FBQyxFQUN6QjtnQkFDSSxPQUFPLEdBQUcsT0FBTyxHQUFHLElBQUksQ0FBQzthQUM1QjtZQUVELElBQUksRUFBRSxHQUFVLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQ2xDLHNEQUFzRDtZQUN0RCxJQUFJLEVBQUUsR0FBRyxJQUFJLElBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxFQUFFO2dCQUN0QyxJQUFJLEVBQUUsU0FBUztnQkFDZixLQUFLLEVBQUUsTUFBTTtnQkFDYixHQUFHLEVBQUUsU0FBUztnQkFDZCxJQUFJLEVBQUUsU0FBUztnQkFDZixNQUFNLEVBQUUsU0FBUzthQUNwQixDQUFDLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBRWQsT0FBTyxrQ0FBTyxFQUFFLENBQVEsQ0FBQztTQUM1QjthQUVEO1lBQ0ksT0FBTyxJQUFJLENBQUM7U0FDZjtJQUNMLENBQUM7SUFDTCwrQkFBQztBQUFELENBQUMsQ0EzQ3NDLEtBQUssQ0FBQyxTQUFTLEdBMkNyRDtBQUVELE9BQU8sQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLDBCQUEwQixFQUFFLHdCQUF3QixDQUFDLENBQUM7QUFFakYsa0JBQWUsd0JBQXdCLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakR4QyxtQ0FBK0I7QUFFL0I7SUFBaUMsc0NBQXlCO0lBRXRELDRCQUFZLEtBQVc7ZUFFbkIsa0JBQU0sS0FBSyxDQUFDO0lBQ2hCLENBQUM7SUFFRCw4Q0FBaUIsR0FBakI7UUFFSSxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDdkIsQ0FBQztJQUVKLG1DQUFNLEdBQU47UUFFTyxJQUFJLFNBQVMsR0FBUyxzQkFBc0IsQ0FBQztRQUM3QyxJQUFJLE9BQU8sR0FBWSxFQUFFLENBQUM7UUFFMUIsSUFBSSxLQUFLLEdBQUcsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ25ELElBQUksWUFBWSxHQUFHLEtBQUssR0FBRyxHQUFHLENBQUM7UUFFL0IsSUFBSSxPQUFPLEdBQVksS0FBSyxHQUFHLEdBQUcsQ0FBQztRQUVuQyxJQUFJLFVBQVUsR0FBeUI7WUFDL0IsTUFBTSxFQUFHLG1CQUFtQjtZQUM1QixZQUFZLEVBQUMsS0FBSztZQUNsQixlQUFlLEVBQUMsU0FBUztZQUN6QixNQUFNLEVBQUMsTUFBTTtZQUNiLFNBQVMsRUFBRSxhQUFhO1lBQ3hCLFFBQVEsRUFBRyxVQUF3QjtZQUNuQyxPQUFPLEVBQUUsTUFBTTtZQUNmLFlBQVksRUFBRSxRQUFRO1lBQ3RCLE1BQU0sRUFBRSxjQUFjO1NBQ3pCLENBQUM7UUFFTixJQUFJLFFBQVEsR0FBeUI7WUFDakMsTUFBTSxFQUFFLE1BQU07WUFDZCxZQUFZLEVBQUMsS0FBSztZQUNsQixlQUFlLEVBQUMsU0FBUztZQUN6QixLQUFLLEVBQUUsWUFBWTtZQUNuQixTQUFTLEVBQUcsUUFBUTtZQUNwQixNQUFNLEVBQUUsTUFBTTtTQUNiLENBQUM7UUFFTixJQUFJLFlBQVksR0FBeUI7WUFDckMsVUFBVSxFQUFHLFFBQVE7WUFDckIsS0FBSyxFQUFHLFNBQVM7WUFDakIsUUFBUSxFQUFHLE1BQU07WUFDakIsS0FBSyxFQUFHLE1BQU07WUFDZCxTQUFTLEVBQUcsUUFBUTtZQUNwQixRQUFRLEVBQUcsVUFBd0I7WUFDbkMsTUFBTSxFQUFFLE1BQU07WUFDZCxhQUFhLEVBQUUsUUFBUTtZQUN2QixVQUFVLEVBQUUsTUFBTTtZQUNsQixZQUFZLEVBQUUsWUFBWTtZQUMxQixJQUFJLEVBQUUsQ0FBQztTQUNOLENBQUM7UUFFTixJQUFJLEdBQUcsR0FBRyxHQUFHLENBQUM7UUFDZCxJQUFJLEdBQUcsR0FBRyxDQUFDLENBQUM7UUFDWixJQUFJLEdBQUcsR0FBRyxFQUFFLENBQUM7UUFFYixPQUFRLDZCQUFLLEtBQUssRUFBRSxVQUFVO1lBQ2xCLDZCQUFLLElBQUksRUFBQyxhQUFhLG1CQUFnQixHQUFHLG1CQUFpQixHQUFHLG1CQUFpQixHQUFHLEVBQUUsS0FBSyxFQUFFLFFBQVE7Z0JBQy9GLDhCQUFNLEtBQUssRUFBRSxZQUFZLElBQUcsWUFBWSxDQUFRLENBQzlDLENBQ0o7SUFFbEIsQ0FBQztJQUNMLHlCQUFDO0FBQUQsQ0FBQyxDQXBFZ0MsS0FBSyxDQUFDLFNBQVMsR0FvRS9DO0FBRUQscUZBQXFGO0FBRXJGLE9BQU8sQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLG9CQUFvQixFQUFFLGtCQUFrQixDQUFDLENBQUM7QUFFckUsa0JBQWUsa0JBQWtCLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNUVsQyxtQ0FBK0I7QUFFL0I7SUFBd0IsNkJBQXlCO0lBRTdDLG1CQUFZLEtBQVc7ZUFFbkIsa0JBQU0sS0FBSyxDQUFDO0lBQ2hCLENBQUM7SUFFRCxxQ0FBaUIsR0FBakI7UUFFSSxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDdkIsQ0FBQztJQUVKLDBCQUFNLEdBQU47UUFFTyxJQUFJLE9BQU8sR0FBWSxFQUFFLENBQUM7UUFFMUIsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLElBQUksRUFBRSxDQUFDO1FBQzFDLElBQUksWUFBWSxHQUFHLEtBQUssR0FBRyxHQUFHLENBQUM7UUFFL0IsSUFBSSxPQUFPLEdBQVksS0FBSyxHQUFHLEdBQUcsQ0FBQztRQUVuQyxJQUFJLFNBQVMsR0FBRztZQUNSLGFBQWEsRUFBRyxRQUFRO1lBQ3hCLE9BQU8sRUFBRyxTQUFTO1lBQ25CLFdBQVcsRUFBRyxNQUFNO1lBQ3BCLE9BQU8sRUFBRyxNQUFNO1lBQ2hCLFlBQVksRUFBRyxRQUFRO1lBQ3ZCLFVBQVUsRUFBRyxVQUF3QjtZQUNyQyxRQUFRLEVBQUUsTUFBTTtZQUNoQixnQkFBZ0IsRUFBRSxRQUFRO1lBQzFCLGFBQWEsRUFBRSxNQUFNO1lBQ3JCLGdCQUFnQixFQUFFLFlBQVk7U0FFakMsQ0FBQztRQUVOLElBQUksR0FBRyxHQUFHLEdBQUcsQ0FBQztRQUNkLElBQUksR0FBRyxHQUFHLENBQUMsQ0FBQztRQUNaLElBQUksR0FBRyxHQUFHLEVBQUUsQ0FBQztRQUViLE9BQVE7WUFDSSwyQkFBRyxJQUFJLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBQyxRQUFRLElBQUUsS0FBSyxDQUFLLENBQ3pDO0lBQ2xCLENBQUM7SUFDTCxnQkFBQztBQUFELENBQUMsQ0EzQ3VCLEtBQUssQ0FBQyxTQUFTLEdBMkN0QztBQUVELHFGQUFxRjtBQUVyRixPQUFPLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxXQUFXLEVBQUUsU0FBUyxDQUFDLENBQUM7QUFFbkQsa0JBQWUsU0FBUyxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25EekIsbUNBQStCO0FBQy9CLHNDQUFzQztBQUV0QztJQUF3Qiw2QkFBeUI7SUFFN0MsbUJBQVksS0FBVztlQUVuQixrQkFBTSxLQUFLLENBQUM7SUFDaEIsQ0FBQztJQUVELHFDQUFpQixHQUFqQjtRQUVJLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUN2QixDQUFDO0lBRUosMEJBQU0sR0FBTjtRQUdPLElBQUksRUFBRSxHQUFHLFFBQVEsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDcEMsSUFBSSxZQUFxQixDQUFDO1FBQzFCLElBQUksS0FBYyxDQUFDO1FBQ25CLElBQUcsRUFBRSxFQUNMO1lBQ0ksSUFBSSxNQUFNLEdBQWlCLEVBQUUsQ0FBQyxhQUFhLENBQUM7WUFDNUMsSUFBSSxTQUFTLEdBQUcsRUFBRSxDQUFDO1lBQ25CLE9BQU0sQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLFNBQVMsSUFBSSxDQUFDLEVBQ3JFO2dCQUNJLE1BQU0sR0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDO2dCQUM1QixTQUFTLEVBQUUsQ0FBQzthQUNmO1lBRUQsSUFBRyxTQUFTLElBQUUsQ0FBQyxFQUNmO2dCQUNJLE9BQU8sRUFBRSxDQUFDO2FBQ2I7WUFFRCxJQUFJLFdBQVcsR0FBRyxNQUFNLENBQUMsVUFBVSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQyxLQUFLLENBQUM7WUFDN0QsSUFBSSxLQUFLLEdBQUcsT0FBTyxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsV0FBVyxFQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7WUFFdkUsSUFBSSxVQUFVLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUM7WUFFdkMsWUFBWSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxJQUFJLEVBQUUsQ0FBQztZQUU3QyxLQUFLLEdBQUcsS0FBSyxDQUFDLFVBQVUsQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLEVBQUUsQ0FBQztTQUN4RDtRQUVELElBQUksVUFBVSxHQUF5QjtZQUNuQyxTQUFTLEVBQUUsYUFBYTtZQUN4QixRQUFRLEVBQUcsVUFBd0I7WUFDbkMsT0FBTyxFQUFFLE1BQU07WUFDZixZQUFZLEVBQUUsUUFBUTtZQUN0QixNQUFNLEVBQUUsY0FBYztTQUN6QixDQUFDO1FBRUYsSUFBRyxZQUFZLEVBQ2Y7WUFDSSxJQUFJLEdBQUcsR0FBQyxFQUFFLENBQUM7WUFDWCxPQUFPLENBQ0gsNkJBQUssS0FBSyxFQUFFLFVBQVU7Z0JBQ2xCLDZCQUFLLEdBQUcsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsRUFBQyxVQUFVLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRSxNQUFNLEVBQUMsR0FBRyxDQUN2RixDQUNMLENBQUM7U0FDVDthQUVEO1lBQ0ksT0FBTyxDQUNQLGdDQUFXLENBQ1YsQ0FBQztTQUNMO0lBQ0wsQ0FBQztJQUNMLGdCQUFDO0FBQUQsQ0FBQyxDQW5FdUIsS0FBSyxDQUFDLFNBQVMsR0FtRXRDO0FBRUQsT0FBTyxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsV0FBVyxFQUFFLFNBQVMsQ0FBQyxDQUFDO0FBRW5ELGtCQUFlLFNBQVMsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxRXpCLG1DQUErQjtBQUUvQjtJQUEwQiwrQkFBeUI7SUFFL0MscUJBQVksS0FBVztlQUVuQixrQkFBTSxLQUFLLENBQUM7SUFDaEIsQ0FBQztJQUVELHVDQUFpQixHQUFqQjtRQUVJLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUN2QixDQUFDO0lBRUosNEJBQU0sR0FBTjtRQUVPLElBQU0sS0FBSyxHQUFXLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDO1FBQzlDLElBQU0sT0FBTyxHQUFXLEdBQUcsR0FBRyxLQUFLLENBQUM7UUFDcEMsT0FBTyxrQ0FBTyxPQUFPLENBQVEsQ0FBQztJQUNsQyxDQUFDO0lBQ0wsa0JBQUM7QUFBRCxDQUFDLENBbEJ5QixLQUFLLENBQUMsU0FBUyxHQWtCeEM7QUFFRCxPQUFPLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxhQUFhLEVBQUUsV0FBVyxDQUFDLENBQUM7QUFFdkQsa0JBQWUsV0FBVyxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hCM0IsbUNBQStCO0FBQy9CLHNDQUFzQztBQUV0QztJQUE2QixrQ0FBeUI7SUFFbEQsd0JBQVksS0FBVztRQUF2QixZQUVJLGtCQUFNLEtBQUssQ0FBQyxTQUlmO1FBSEcsS0FBSSxDQUFDLHFCQUFxQixHQUFHLEtBQUksQ0FBQyxxQkFBcUIsQ0FBQyxJQUFJLENBQUMsS0FBSSxDQUFDLENBQUM7UUFDbkUsS0FBSSxDQUFDLHlCQUF5QixHQUFHLEtBQUksQ0FBQyx5QkFBeUIsQ0FBQyxJQUFJLENBQUMsS0FBSSxDQUFDLENBQUM7UUFDM0UsS0FBSSxDQUFDLG1CQUFtQixHQUFHLEtBQUksQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsS0FBSSxDQUFDLENBQUM7O0lBQ25FLENBQUM7SUFFRCwwQ0FBaUIsR0FBakI7UUFFSSxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDdkIsQ0FBQztJQUVELDBDQUFpQixHQUFqQixVQUFrQixVQUFnQixFQUFFLGFBQXNCO1FBRXRELEtBQUksSUFBSSxHQUFHLElBQUksVUFBVSxFQUN6QjtZQUNJLElBQUcsR0FBRyxLQUFLLGFBQWEsRUFDeEI7Z0JBQ0ksT0FBTyxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUM7YUFDMUI7U0FDSjtRQUNELE9BQU8sSUFBSSxDQUFDO0lBQ2hCLENBQUM7SUFFSiwrQkFBTSxHQUFOO1FBRU8sSUFBSSxFQUFFLEdBQUcsUUFBUSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNwQyxJQUFNLEtBQUssR0FBUSxJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQztRQUMzQyxJQUFHLEVBQUUsRUFBRTtZQUNILElBQU0sWUFBWSxHQUFnQixJQUFJLENBQUMscUJBQXFCLEVBQUUsQ0FBQztZQUMvRCxJQUFNLFVBQVUsR0FBZ0IsSUFBSSxDQUFDLG1CQUFtQixFQUFFLENBQUM7WUFFM0QsSUFBTSxnQkFBZ0IsR0FBVyxJQUFJLENBQUMseUJBQXlCLENBQUMsWUFBWSxDQUFDLENBQUM7WUFDOUUsSUFBTSxLQUFLLEdBQUcsT0FBTyxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsZ0JBQWdCLEVBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUU5RSxJQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUMsS0FBSyxDQUFDLFVBQVUsRUFBRSxXQUFXLENBQUMsQ0FBQztZQUNyRSxJQUFNLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBRWhDLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7WUFFbEIsSUFBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUU7Z0JBQ1osVUFBVSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7YUFDekM7U0FFSjtRQUVELE9BQU8sa0NBQU8sS0FBSyxDQUFRLENBQUM7SUFDaEMsQ0FBQztJQUVELDhDQUFxQixHQUFyQjtRQUVJLElBQUksRUFBRSxHQUFHLFFBQVEsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDcEMsSUFBSSxTQUFTLEdBQUcsRUFBRSxDQUFDO1FBQ25CLElBQUksTUFBTSxHQUFpQixFQUFFLENBQUMsYUFBYSxDQUFDO1FBQzVDLE9BQU0sQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLFNBQVMsSUFBSSxDQUFDLEVBQ3JFO1lBQ0ksTUFBTSxHQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUM7WUFDNUIsU0FBUyxFQUFFLENBQUM7U0FDZjtRQUVELElBQUcsU0FBUyxJQUFFLENBQUMsRUFDZjtZQUNJLE9BQU8sU0FBUyxDQUFDO1NBQ3BCO1FBRUQsT0FBTyxNQUFNLENBQUM7SUFFbEIsQ0FBQztJQUVELDRDQUFtQixHQUFuQjtRQUVJLElBQUksRUFBRSxHQUFHLFFBQVEsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDcEMsSUFBSSxTQUFTLEdBQUcsRUFBRSxDQUFDO1FBQ25CLElBQUksTUFBTSxHQUFpQixFQUFFLENBQUMsYUFBYSxDQUFDO1FBQzVDLE9BQU8sTUFBTSxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUUsS0FBSSxJQUFJLElBQUksU0FBUyxJQUFJLENBQUMsRUFDN0Q7WUFDSSxNQUFNLEdBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQztZQUM1QixTQUFTLEVBQUUsQ0FBQztTQUNmO1FBRUQsSUFBRyxTQUFTLElBQUUsQ0FBQyxFQUNmO1lBQ0ksT0FBTyxTQUFTLENBQUM7U0FDcEI7UUFFRCxPQUFPLE1BQU0sQ0FBQztJQUVsQixDQUFDO0lBRUQsa0RBQXlCLEdBQXpCLFVBQTBCLEtBQWtCO1FBRXhDLElBQUksV0FBVyxHQUFXLEtBQUssQ0FBQyxVQUFVLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDLEtBQUssQ0FBQztRQUVwRSxPQUFPLFdBQVcsQ0FBQztJQUN2QixDQUFDO0lBQ0wscUJBQUM7QUFBRCxDQUFDLENBbEc0QixLQUFLLENBQUMsU0FBUyxHQWtHM0M7QUFFRCxPQUFPLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxnQkFBZ0IsRUFBRSxjQUFjLENBQUMsQ0FBQztBQUU3RCxrQkFBZSxjQUFjLENBQUMiLCJmaWxlIjoiQ29sdW1uQ29udHJvbHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAyKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCAwNmNiZTBhNjBmMmRhZjlkYWU1YiIsIm1vZHVsZS5leHBvcnRzID0gUmVhY3Q7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJSZWFjdFwiXG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gUmVhY3RET007XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJSZWFjdERPTVwiXG4vLyBtb2R1bGUgaWQgPSAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydCAqIGZyb20gJy4vRWxhcHNlZFRpbWVGcmllbmRseSc7XG5leHBvcnQgKiBmcm9tICcuL0VsYXBzZWRUaW1lTGl2ZUxvbmcnO1xuZXhwb3J0ICogZnJvbSAnLi9FbGFwc2VkVGltZUxpdmVTaG9ydCc7XG5leHBvcnQgKiBmcm9tICcuL0VsYXBzZWRUaW1lJztcbmV4cG9ydCAqIGZyb20gJy4vRGF0ZURETU1NWVknO1xuZXhwb3J0ICogZnJvbSAnLi9EYXRlVGltZURETU1NWVlISE1NJztcbmV4cG9ydCAqIGZyb20gJy4vQm9vbGVhbkljb24nO1xuZXhwb3J0ICogZnJvbSAnLi9TdGF0dXNJY29uJztcbmV4cG9ydCAqIGZyb20gJy4vTG9va3VwVmFsdWUnO1xuZXhwb3J0ICogZnJvbSAnLi9FcG9jaERhdGVERE1NTVlZJztcbmV4cG9ydCAqIGZyb20gJy4vRXBvY2hEYXRlVGltZURETU1NWVlISE1NJztcbmV4cG9ydCAqIGZyb20gJy4vUGVyY2VudFByb2dyZXNzQmFyJztcbmV4cG9ydCAqIGZyb20gJy4vSHlwZXJsaW5rJztcbmV4cG9ydCAqIGZyb20gJy4vVGh1bWJuYWlsJztcbmV4cG9ydCAqIGZyb20gJy4vRG9sbGFyVmFsdWUnO1xuZXhwb3J0ICogZnJvbSAnLi9UYWJsZVJvd1N0eWxlcic7XG5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9pbmRleC50c3giLCJkZWNsYXJlIHZhciBtYW55d2hvOiBhbnk7XHJcblxyXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5jbGFzcyBFbGFwc2VkVGltZUZyaWVuZGx5IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PGFueSwgYW55PiBcclxueyAgIFxyXG4gICAgY29uc3RydWN0b3IocHJvcHMgOiBhbnkpXHJcblx0e1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgIH1cclxuXHJcbiAgICBjb21wb25lbnREaWRNb3VudCgpIFxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuZm9yY2VVcGRhdGUoKTtcclxuICAgIH1cclxuXHJcblx0cmVuZGVyKClcclxuXHR7XHJcblx0ICAgXHJcbiAgICAgICAgaWYodGhpcy5wcm9wcy5jb250ZW50VmFsdWUpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB2YXIgZHQgPSBuZXcgRGF0ZSh0aGlzLnByb3BzLmNvbnRlbnRWYWx1ZSlcclxuICAgICAgICAgICAgdmFyIGVsYXBzZWQgPSB0aGlzLmVsYXBzZWRUaW1lKGR0KTtcclxuICAgICAgICAgICAgcmV0dXJuIDxzcGFuPntlbGFwc2VkfTwvc3Bhbj47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2VcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBlbGFwc2VkVGltZSAoZnJvbURhdGUgOiBEYXRlKSBcclxuICAgIHtcclxuICAgICAgY29uc3QgY29ycmVjdGVkRGF0ZSA9IG5ldyBEYXRlKGZyb21EYXRlLmdldFRpbWUoKSArIChmcm9tRGF0ZS5nZXRUaW1lem9uZU9mZnNldCgpICo2MCAqMTAwMCkpO1xyXG4gICAgICB2YXIgblRvdGFsRGlmZiA9IE1hdGgucm91bmQoKG5ldyBEYXRlKCkpLmdldFRpbWUoKSAvIDEwMDApIC0gKGNvcnJlY3RlZERhdGUuZ2V0VGltZSgpIC8gMTAwMCk7XHJcbiAgICAgIGlmIChuVG90YWxEaWZmID49IDApIFxyXG4gICAgICB7XHJcbiAgICAgICAgdmFyIG9EaWZmIDogYW55ID0ge307XHJcbiAgICAgICAgb0RpZmYuZGF5cyA9IE1hdGguZmxvb3IoblRvdGFsRGlmZiAvIDg2NDAwKTtcclxuICAgICAgICBuVG90YWxEaWZmIC09IG9EaWZmLmRheXMgKiA4NjQwMDtcclxuICAgICAgICBvRGlmZi5ob3VycyA9IE1hdGguZmxvb3IoblRvdGFsRGlmZiAvIDM2MDApO1xyXG4gICAgICAgIG5Ub3RhbERpZmYgLT0gb0RpZmYuaG91cnMgKiAzNjAwO1xyXG4gICAgICAgIG9EaWZmLm1pbnV0ZXMgPSBNYXRoLmZsb29yKG5Ub3RhbERpZmYgLyA2MCk7XHJcbiAgICAgICAgblRvdGFsRGlmZiAtPSBvRGlmZi5taW51dGVzICogNjA7XHJcbiAgICAgICAgb0RpZmYuc2Vjb25kcyA9IE1hdGguZmxvb3IoblRvdGFsRGlmZik7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdmFyIHJlc3VsdCA9IFwiXCI7XHJcbiAgICAgICAgaWYob0RpZmYuZGF5cyA+IDApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXN1bHQgKz0gb0RpZmYuZGF5cyArIFwiIGRheXNcIjtcclxuICAgICAgICB9XHJcbiAgXHJcbiAgICAgICAgaWYob0RpZmYuaG91cnMgPiAwKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGlmKHJlc3VsdC5sZW5ndGggPiAwKVxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICByZXN1bHQgKz0gXCIsIFwiO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXN1bHQgKz0gb0RpZmYuaG91cnMgKyBcIiBob3Vyc1wiO1xyXG4gICAgICAgIH1cclxuICBcclxuICAgICAgICBpZihvRGlmZi5taW51dGVzID4gMClcclxuICAgICAgICB7XHJcbiAgICAgICAgICBpZihyZXN1bHQubGVuZ3RoID4gMClcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgcmVzdWx0ICs9IFwiLCBcIjtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmVzdWx0ICs9IG9EaWZmLm1pbnV0ZXMgKyBcIiBtaW51dGVzXCI7XHJcbiAgICAgICAgfVxyXG4gIFxyXG4gICAgICAgIGlmKG9EaWZmLnNlY29uZHMgPiAwKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGlmKHJlc3VsdC5sZW5ndGggPiAwKVxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICByZXN1bHQgKz0gXCIsIFwiO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXN1bHQgKz0gb0RpZmYuc2Vjb25kcyArIFwiIHNlY29uZHNcIjtcclxuICAgICAgICB9XHJcbiAgXHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgICAgfSBcclxuICAgICAgZWxzZSBcclxuICAgICAge1xyXG4gICAgICAgIHJldHVybiBcIlwiO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbm1hbnl3aG8uY29tcG9uZW50LnJlZ2lzdGVyKCdFbGFwc2VkVGltZUZyaWVuZGx5JywgRWxhcHNlZFRpbWVGcmllbmRseSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBFbGFwc2VkVGltZUZyaWVuZGx5O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9FbGFwc2VkVGltZUZyaWVuZGx5LnRzeCIsImRlY2xhcmUgdmFyIG1hbnl3aG86IGFueTtcclxuXHJcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbmNsYXNzIEVsYXBzZWRUaW1lTGl2ZUxvbmcgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8YW55LCBhbnk+IFxyXG57ICAgXHJcblxyXG4gIHRpbWVySUQgPSAtMTtcclxuXHJcbiAgY29uc3RydWN0b3IocHJvcHMgOiBhbnkpXHJcbiAge1xyXG4gICAgICBzdXBlcihwcm9wcyk7XHJcbiAgfVxyXG5cclxuICBjb21wb25lbnREaWRNb3VudCgpIFxyXG4gIHtcclxuICAgICAgdGhpcy5mb3JjZVVwZGF0ZSgpO1xyXG4gICAgICB0aGlzLnRpbWVySUQgPSB3aW5kb3cuc2V0SW50ZXJ2YWwodGhpcy50aW1lckV2ZW50LmJpbmQodGhpcyksIDEwMDApO1xyXG4gIH1cclxuXHJcbiAgY29tcG9uZW50V2lsbFVubW91bnQoKVxyXG4gIHtcclxuICAgIGlmKHRoaXMudGltZXJJRCA+PSAwKVxyXG4gICAge1xyXG4gICAgICBjbGVhckludGVydmFsKHRoaXMudGltZXJJRCk7XHJcbiAgICAgIHRoaXMudGltZXJJRCA9IC0xO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgdGltZXJFdmVudCgpXHJcbiAge1xyXG4gICAgdGhpcy5mb3JjZVVwZGF0ZSgpO1xyXG4gIH1cclxuXHJcblx0cmVuZGVyKClcclxuXHR7XHJcblx0ICAgXHJcbiAgICAgICAgaWYodGhpcy5wcm9wcy5jb250ZW50VmFsdWUpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB2YXIgZHQgPSBuZXcgRGF0ZSh0aGlzLnByb3BzLmNvbnRlbnRWYWx1ZSlcclxuICAgICAgICAgICAgdmFyIGVsYXBzZWQgPSB0aGlzLmVsYXBzZWRUaW1lKGR0KTtcclxuICAgICAgICAgICAgcmV0dXJuIDxzcGFuPntlbGFwc2VkfTwvc3Bhbj47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2VcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuICB9XHJcblxyXG4gIGVsYXBzZWRUaW1lIChmcm9tRGF0ZSA6IERhdGUpIFxyXG4gIHtcclxuICAgIGNvbnN0IGNvcnJlY3RlZERhdGUgPSBuZXcgRGF0ZShmcm9tRGF0ZS5nZXRUaW1lKCkgKyAoZnJvbURhdGUuZ2V0VGltZXpvbmVPZmZzZXQoKSAqNjAgKjEwMDApKTtcclxuICAgIHZhciBuVG90YWxEaWZmID0gTWF0aC5yb3VuZCgobmV3IERhdGUoKSkuZ2V0VGltZSgpIC8gMTAwMCkgLSAoY29ycmVjdGVkRGF0ZS5nZXRUaW1lKCkgLyAxMDAwKTtcclxuICAgIGlmIChuVG90YWxEaWZmID49IDApIFxyXG4gICAge1xyXG4gICAgICB2YXIgb0RpZmYgOiBhbnkgPSB7fTtcclxuICAgICAgb0RpZmYuZGF5cyA9IE1hdGguZmxvb3IoblRvdGFsRGlmZiAvIDg2NDAwKTtcclxuICAgICAgblRvdGFsRGlmZiAtPSBvRGlmZi5kYXlzICogODY0MDA7XHJcbiAgICAgIG9EaWZmLmhvdXJzID0gTWF0aC5mbG9vcihuVG90YWxEaWZmIC8gMzYwMCk7XHJcbiAgICAgIG5Ub3RhbERpZmYgLT0gb0RpZmYuaG91cnMgKiAzNjAwO1xyXG4gICAgICBvRGlmZi5taW51dGVzID0gTWF0aC5mbG9vcihuVG90YWxEaWZmIC8gNjApO1xyXG4gICAgICBuVG90YWxEaWZmIC09IG9EaWZmLm1pbnV0ZXMgKiA2MDtcclxuICAgICAgb0RpZmYuc2Vjb25kcyA9IE1hdGguZmxvb3IoblRvdGFsRGlmZik7XHJcbiAgICAgIFxyXG4gICAgICB2YXIgcmVzdWx0ID0gXCJcIjtcclxuICAgICAgaWYob0RpZmYuZGF5cyA+IDApXHJcbiAgICAgIHtcclxuICAgICAgICAgIHJlc3VsdCArPSBvRGlmZi5kYXlzICsgXCIgZGF5c1wiO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZihvRGlmZi5ob3VycyA+IDApXHJcbiAgICAgIHtcclxuICAgICAgICBpZihyZXN1bHQubGVuZ3RoID4gMClcclxuICAgICAgICB7XHJcbiAgICAgICAgICByZXN1bHQgKz0gXCIsIFwiO1xyXG4gICAgICAgIH1cclxuICAgICAgICAgIHJlc3VsdCArPSBvRGlmZi5ob3VycyArIFwiIGhvdXJzXCI7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmKG9EaWZmLm1pbnV0ZXMgPiAwKVxyXG4gICAgICB7XHJcbiAgICAgICAgaWYocmVzdWx0Lmxlbmd0aCA+IDApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgcmVzdWx0ICs9IFwiLCBcIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgICByZXN1bHQgKz0gb0RpZmYubWludXRlcyArIFwiIG1pbnV0ZXNcIjtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYob0RpZmYuc2Vjb25kcyA+IDApXHJcbiAgICAgIHtcclxuICAgICAgICBpZihyZXN1bHQubGVuZ3RoID4gMClcclxuICAgICAgICB7XHJcbiAgICAgICAgICByZXN1bHQgKz0gXCIsIFwiO1xyXG4gICAgICAgIH1cclxuICAgICAgICAgIHJlc3VsdCArPSBvRGlmZi5zZWNvbmRzICsgXCIgc2Vjb25kc1wiO1xyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfSBcclxuICAgIGVsc2UgXHJcbiAgICB7XHJcbiAgICAgIHJldHVybiBcIlwiO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxubWFueXdoby5jb21wb25lbnQucmVnaXN0ZXIoJ0VsYXBzZWRUaW1lTGl2ZUxvbmcnLCBFbGFwc2VkVGltZUxpdmVMb25nKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEVsYXBzZWRUaW1lTGl2ZUxvbmc7XHJcblxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvRWxhcHNlZFRpbWVMaXZlTG9uZy50c3giLCJkZWNsYXJlIHZhciBtYW55d2hvOiBhbnk7XHJcblxyXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IFRpbWVIZWxwZXJzLCBpRWxhcHNlZCB9IGZyb20gJy4vRGF0ZVRpbWVIZWxwZXJzJztcclxuXHJcbmNsYXNzIEVsYXBzZWRUaW1lTGl2ZVNob3J0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PGFueSwgYW55PiBcclxueyAgIFxyXG5cclxuICB0aW1lcklEID0gLTE7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByb3BzIDogYW55KVxyXG4gIHtcclxuICAgICAgc3VwZXIocHJvcHMpO1xyXG4gIH1cclxuXHJcbiAgY29tcG9uZW50RGlkTW91bnQoKSBcclxuICB7XHJcbiAgICAgIHRoaXMuZm9yY2VVcGRhdGUoKTtcclxuICAgICAgdGhpcy50aW1lcklEID0gd2luZG93LnNldEludGVydmFsKHRoaXMudGltZXJFdmVudC5iaW5kKHRoaXMpLCAxMDAwKTtcclxuICB9XHJcblxyXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KClcclxuICB7XHJcbiAgICBpZih0aGlzLnRpbWVySUQgPj0gMClcclxuICAgIHtcclxuICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLnRpbWVySUQpO1xyXG4gICAgICB0aGlzLnRpbWVySUQgPSAtMTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHRpbWVyRXZlbnQoKVxyXG4gIHtcclxuICAgIHRoaXMuZm9yY2VVcGRhdGUoKTtcclxuICB9XHJcblxyXG5cdHJlbmRlcigpXHJcblx0e1xyXG5cdCAgIFxyXG4gICAgICAgIGlmKHRoaXMucHJvcHMuY29udGVudFZhbHVlKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdmFyIGR0ID0gbmV3IERhdGUodGhpcy5wcm9wcy5jb250ZW50VmFsdWUpXHJcbiAgICAgICAgICAgIHZhciBlbGFwc2VkID0gdGhpcy5lbGFwc2VkVGltZShkdCk7XHJcbiAgICAgICAgICAgIHJldHVybiA8c3Bhbj57ZWxhcHNlZH08L3NwYW4+O1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcbiAgfVxyXG5cclxuICBlbGFwc2VkVGltZSAoZnJvbURhdGUgOiBEYXRlKSBcclxuICB7XHJcblxyXG4gICAgY29uc3QgZWxhcHNlZCA6IGlFbGFwc2VkID0gVGltZUhlbHBlcnMuZ2V0RWxhcHNlZChmcm9tRGF0ZSwgbmV3IERhdGUoKSk7XHJcbiAgICAgICAgICBcclxuICAgICAgdmFyIHJlc3VsdCA9IFwiXCI7XHJcbiAgICAgIGlmKGVsYXBzZWQuZGF5cyA+IDApXHJcbiAgICAgIHtcclxuICAgICAgICAgIHJlc3VsdCArPSBlbGFwc2VkLmRheXMgKyBcImRcIjtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYoZWxhcHNlZC5ob3VycyA+IDApXHJcbiAgICAgIHtcclxuICAgICAgICBpZihyZXN1bHQubGVuZ3RoID4gMClcclxuICAgICAgICB7XHJcbiAgICAgICAgICByZXN1bHQgKz0gXCIvXCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICAgcmVzdWx0ICs9IGVsYXBzZWQuaG91cnMgKyBcImhcIjtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYoZWxhcHNlZC5taW51dGVzID4gMClcclxuICAgICAge1xyXG4gICAgICAgIGlmKHJlc3VsdC5sZW5ndGggPiAwKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgIHJlc3VsdCArPSBcIi9cIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgICByZXN1bHQgKz0gZWxhcHNlZC5taW51dGVzICsgXCJtXCI7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmKGVsYXBzZWQuc2Vjb25kcyA+IDApXHJcbiAgICAgIHtcclxuICAgICAgICBpZihyZXN1bHQubGVuZ3RoID4gMClcclxuICAgICAgICB7XHJcbiAgICAgICAgICByZXN1bHQgKz0gXCIvXCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICAgcmVzdWx0ICs9IGVsYXBzZWQuc2Vjb25kcyArIFwic1wiO1xyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4gcmVzdWx0O1xyXG4gIH1cclxufVxyXG5cclxubWFueXdoby5jb21wb25lbnQucmVnaXN0ZXIoJ0VsYXBzZWRUaW1lTGl2ZVNob3J0JywgRWxhcHNlZFRpbWVMaXZlU2hvcnQpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRWxhcHNlZFRpbWVMaXZlU2hvcnQ7XHJcblxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvRWxhcHNlZFRpbWVMaXZlU2hvcnQudHN4IiwiZXhwb3J0IGludGVyZmFjZSBpRWxhcHNlZFxyXG57XHJcbiAgICBkYXlzIDogbnVtYmVyLFxyXG4gICAgaG91cnMgOiBudW1iZXIsXHJcbiAgICBtaW51dGVzOiBudW1iZXIsXHJcbiAgICBzZWNvbmRzOiBudW1iZXJcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFRpbWVIZWxwZXJzXHJcbntcclxuICAgIHN0YXRpYyBnZXRFbGFwc2VkKGZyb21EYXRlIDogRGF0ZSwgbG9jYWxEYXRlIDogRGF0ZSkgOiBpRWxhcHNlZFxyXG4gICAge1xyXG4gICAgICAgIGxldCBlbGFwc2VkIDogaUVsYXBzZWQgPSB7XHJcbiAgICAgICAgICAgIGRheXM6IDAsXHJcbiAgICAgICAgICAgIGhvdXJzOiAwLFxyXG4gICAgICAgICAgICBtaW51dGVzOiAwLFxyXG4gICAgICAgICAgICBzZWNvbmRzOiAwXHJcbiAgICAgICAgfTtcclxuICAgICAgICBcclxuICAgICAgICBjb25zdCBmcm9tVVRDT2Zmc2V0ID0gZnJvbURhdGUuZ2V0VGltZXpvbmVPZmZzZXQoKSAqIDYwMDAwO1xyXG4gICAgICAgIGNvbnN0IGZyb21VVEMgOiBEYXRlID0gbmV3IERhdGUoZnJvbURhdGUuZ2V0VGltZSgpIC0gZnJvbVVUQ09mZnNldCk7XHJcbiAgICBcclxuICAgICAgICAvL2NvbnZlcnQgbG9jYWxEYXRlIHRvIFVUQ1xyXG4gICAgICAgIGNvbnN0IG5vd1VUQ09mZnNldCA9IGxvY2FsRGF0ZS5nZXRUaW1lem9uZU9mZnNldCgpICogNjAwMDA7XHJcbiAgICAgICAgY29uc3Qgbm93VVRDIDogRGF0ZSA9IG5ldyBEYXRlKGxvY2FsRGF0ZS5nZXRUaW1lKCkgLSBub3dVVENPZmZzZXQpO1xyXG4gICAgXHJcbiAgICAgICAgbGV0IGRpZmZNaWxsaXMgPSBNYXRoLnJvdW5kKGxvY2FsRGF0ZS5nZXRUaW1lKCkgLSBmcm9tRGF0ZS5nZXRUaW1lKCkpO1xyXG5cclxuICAgICAgICBcclxuICAgICAgICBlbGFwc2VkLmRheXMgPSBNYXRoLmZsb29yKGRpZmZNaWxsaXMgLyA4NjQwMDAwMCk7XHJcbiAgICAgICAgZGlmZk1pbGxpcyAtPSBlbGFwc2VkLmRheXMgKiA4NjQwMDAwMDtcclxuICAgICAgICBlbGFwc2VkLmhvdXJzID0gTWF0aC5mbG9vcihkaWZmTWlsbGlzIC8gMzYwMDAwMCk7XHJcbiAgICAgICAgZGlmZk1pbGxpcyAtPSBlbGFwc2VkLmhvdXJzICogMzYwMDAwMDtcclxuICAgICAgICBlbGFwc2VkLm1pbnV0ZXMgPSBNYXRoLmZsb29yKGRpZmZNaWxsaXMgLyA2MDAwMCk7XHJcbiAgICAgICAgZGlmZk1pbGxpcyAtPSBlbGFwc2VkLm1pbnV0ZXMgKiA2MDAwMDtcclxuICAgICAgICBlbGFwc2VkLnNlY29uZHMgPSBNYXRoLmZsb29yKGRpZmZNaWxsaXMgLyAxMDAwKTtcclxuICAgICAgXHJcbiAgICAgICAgcmV0dXJuIGVsYXBzZWRcclxuICAgIH1cclxuXHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL0RhdGVUaW1lSGVscGVycy50cyIsImRlY2xhcmUgdmFyIG1hbnl3aG86IGFueTtcclxuXHJcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbmNsYXNzIEVsYXBzZWRUaW1lIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PGFueSwgYW55PiBcclxueyAgIFxyXG4gICAgY29uc3RydWN0b3IocHJvcHMgOiBhbnkpXHJcblx0e1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgIH1cclxuXHJcbiAgICBjb21wb25lbnREaWRNb3VudCgpIFxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuZm9yY2VVcGRhdGUoKTtcclxuICAgIH1cclxuXHJcblx0cmVuZGVyKClcclxuXHR7XHJcblx0ICAgXHJcbiAgICAgICAgaWYodGhpcy5wcm9wcy5jb250ZW50VmFsdWUpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB2YXIgZHQgPSBuZXcgRGF0ZSh0aGlzLnByb3BzLmNvbnRlbnRWYWx1ZSlcclxuICAgICAgICAgICAgdmFyIGVsYXBzZWQgPSB0aGlzLmVsYXBzZWRUaW1lKGR0KTtcclxuICAgICAgICAgICAgcmV0dXJuIDxzcGFuPntlbGFwc2VkfTwvc3Bhbj47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2VcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuICB9XHJcblxyXG4gIGVsYXBzZWRUaW1lIChmcm9tRGF0ZSA6IERhdGUpIFxyXG4gIHtcclxuICAgIHZhciBuVG90YWxEaWZmID0gTWF0aC5yb3VuZCgobmV3IERhdGUoKSkuZ2V0VGltZSgpIC8gMTAwMCkgLSAoZnJvbURhdGUuZ2V0VGltZSgpIC8gMTAwMCk7XHJcbiAgICBpZiAoblRvdGFsRGlmZiA+PSAwKSBcclxuICAgIHtcclxuICAgICAgdmFyIG9EaWZmIDogYW55ID0ge307XHJcbiAgICAgIG9EaWZmLmRheXMgPSBNYXRoLmZsb29yKG5Ub3RhbERpZmYgLyA4NjQwMCk7XHJcbiAgICAgIG5Ub3RhbERpZmYgLT0gb0RpZmYuZGF5cyAqIDg2NDAwO1xyXG4gICAgICBvRGlmZi5ob3VycyA9IE1hdGguZmxvb3IoblRvdGFsRGlmZiAvIDM2MDApO1xyXG4gICAgICBuVG90YWxEaWZmIC09IG9EaWZmLmhvdXJzICogMzYwMDtcclxuICAgICAgb0RpZmYubWludXRlcyA9IE1hdGguZmxvb3IoblRvdGFsRGlmZiAvIDYwKTtcclxuICAgICAgblRvdGFsRGlmZiAtPSBvRGlmZi5taW51dGVzICogNjA7XHJcbiAgICAgIG9EaWZmLnNlY29uZHMgPSBNYXRoLmZsb29yKG5Ub3RhbERpZmYpO1xyXG4gICAgICBcclxuICAgICAgdmFyIHJlc3VsdCA9IFwiXCI7XHJcbiAgICAgIGlmKG9EaWZmLmRheXMgPiAwKVxyXG4gICAgICB7XHJcbiAgICAgICAgICByZXN1bHQgKz0gb0RpZmYuZGF5cyArIFwiIGRheXNcIjtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYob0RpZmYuaG91cnMgPiAwKVxyXG4gICAgICB7XHJcbiAgICAgICAgaWYocmVzdWx0Lmxlbmd0aCA+IDApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgcmVzdWx0ICs9IFwiLCBcIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgICByZXN1bHQgKz0gb0RpZmYuaG91cnMgKyBcIiBob3Vyc1wiO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZihvRGlmZi5taW51dGVzID4gMClcclxuICAgICAge1xyXG4gICAgICAgIGlmKHJlc3VsdC5sZW5ndGggPiAwKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgIHJlc3VsdCArPSBcIiwgXCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICAgcmVzdWx0ICs9IG9EaWZmLm1pbnV0ZXMgKyBcIiBtaW51dGVzXCI7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmKG9EaWZmLnNlY29uZHMgPiAwKVxyXG4gICAgICB7XHJcbiAgICAgICAgaWYocmVzdWx0Lmxlbmd0aCA+IDApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgcmVzdWx0ICs9IFwiLCBcIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgICByZXN1bHQgKz0gb0RpZmYuc2Vjb25kcyArIFwiIHNlY29uZHNcIjtcclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH0gXHJcbiAgICBlbHNlIFxyXG4gICAge1xyXG4gICAgICByZXR1cm4gXCJcIjtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbm1hbnl3aG8uY29tcG9uZW50LnJlZ2lzdGVyKCdFbGFwc2VkVGltZScsIEVsYXBzZWRUaW1lKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEVsYXBzZWRUaW1lO1xyXG5cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL0VsYXBzZWRUaW1lLnRzeCIsImRlY2xhcmUgdmFyIG1hbnl3aG86IGFueTtcclxuXHJcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbmNsYXNzIERhdGVERE1NTVlZIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PGFueSwgYW55PiBcclxueyAgIFxyXG4gICAgY29uc3RydWN0b3IocHJvcHMgOiBhbnkpXHJcblx0e1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgIH1cclxuXHJcbiAgICBjb21wb25lbnREaWRNb3VudCgpIFxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuZm9yY2VVcGRhdGUoKTtcclxuICAgIH1cclxuXHJcblx0cmVuZGVyKClcclxuXHR7XHJcblx0ICAgXHJcbiAgICAgICAgaWYodGhpcy5wcm9wcy5jb250ZW50VmFsdWUpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICAvL2Zvcm1hdCB0aGUgZGF0ZSB1c2luZyBSZWFjdCBmb3JtYXR0ZXIgaW50byBkdCBzdHJpbmdcclxuICAgICAgICAgICAgdmFyIGR0ID0gbmV3IEludGwuRGF0ZVRpbWVGb3JtYXQoJ2VuLUdCJywgeyAgIFxyXG4gICAgICAgICAgICAgICAgeWVhcjogJ251bWVyaWMnLCBcclxuICAgICAgICAgICAgICAgIG1vbnRoOiAnbG9uZycsIFxyXG4gICAgICAgICAgICAgICAgZGF5OiAnMi1kaWdpdCcgXHJcbiAgICAgICAgICAgIH0pLmZvcm1hdChuZXcgRGF0ZSh0aGlzLnByb3BzLmNvbnRlbnRWYWx1ZSkpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgcmV0dXJuIDxzcGFuPntkdH08L3NwYW4+O1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbm1hbnl3aG8uY29tcG9uZW50LnJlZ2lzdGVyKCdEYXRlRERNTU1ZWScsIERhdGVERE1NTVlZKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IERhdGVERE1NTVlZO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9EYXRlRERNTU1ZWS50c3giLCJkZWNsYXJlIHZhciBtYW55d2hvOiBhbnk7XHJcblxyXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5jbGFzcyBEYXRlVGltZURETU1NWVlISE1NIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PGFueSwgYW55PiBcclxueyAgIFxyXG4gICAgY29uc3RydWN0b3IocHJvcHMgOiBhbnkpXHJcblx0e1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgIH1cclxuXHJcbiAgICBjb21wb25lbnREaWRNb3VudCgpIFxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuZm9yY2VVcGRhdGUoKTtcclxuICAgIH1cclxuXHJcblx0cmVuZGVyKClcclxuXHR7XHJcblx0ICAgXHJcbiAgICAgICAgaWYodGhpcy5wcm9wcy5jb250ZW50VmFsdWUpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICAvL2Zvcm1hdCB0aGUgZGF0ZSB1c2luZyBSZWFjdCBmb3JtYXR0ZXIgaW50byBkdCBzdHJpbmdcclxuICAgICAgICAgICAgdmFyIGR0ID0gbmV3IEludGwuRGF0ZVRpbWVGb3JtYXQoJ2VuLUdCJywgeyAgIFxyXG4gICAgICAgICAgICAgICAgeWVhcjogJ251bWVyaWMnLCBcclxuICAgICAgICAgICAgICAgIG1vbnRoOiAnbG9uZycsIFxyXG4gICAgICAgICAgICAgICAgZGF5OiAnMi1kaWdpdCcsXHJcbiAgICAgICAgICAgICAgICBob3VyOiAnMi1kaWdpdCcsXHJcbiAgICAgICAgICAgICAgICBtaW51dGU6ICcyLWRpZ2l0J1xyXG4gICAgICAgICAgICB9KS5mb3JtYXQobmV3IERhdGUodGhpcy5wcm9wcy5jb250ZW50VmFsdWUpKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHJldHVybiA8c3Bhbj57ZHR9PC9zcGFuPjtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5tYW55d2hvLmNvbXBvbmVudC5yZWdpc3RlcignRGF0ZVRpbWVERE1NTVlZSEhNTScsIERhdGVUaW1lRERNTU1ZWUhITU0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRGF0ZVRpbWVERE1NTVlZSEhNTTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvRGF0ZVRpbWVERE1NTVlZSEhNTS50c3giLCJkZWNsYXJlIHZhciBtYW55d2hvOiBhbnk7XHJcblxyXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5jbGFzcyBCb29sZWFuSWNvbiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxhbnksIGFueT4gXHJcbnsgICBcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzIDogYW55KVxyXG5cdHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICB9XHJcblxyXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSBcclxuICAgIHtcclxuICAgICAgICB0aGlzLmZvcmNlVXBkYXRlKCk7XHJcbiAgICB9XHJcblxyXG5cdHJlbmRlcigpXHJcblx0e1xyXG5cdCAgIHZhciBjbGFzc05hbWUgOiBhbnkgPSBcImdseXBoaWNvbiBnbHlwaGljb24tXCI7XHJcbiAgICAgICAgaWYodGhpcy5wcm9wcy5jb250ZW50VmFsdWUgPT09IFwidHJ1ZVwiKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgY2xhc3NOYW1lICs9IFwib2tcIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgY2xhc3NOYW1lICs9IFwicmVtb3ZlXCI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gPHNwYW4gY2xhc3NOYW1lPXtjbGFzc05hbWV9Pjwvc3Bhbj47XHJcbiAgICB9XHJcbn1cclxuXHJcbm1hbnl3aG8uY29tcG9uZW50LnJlZ2lzdGVyKCdCb29sZWFuSWNvbicsIEJvb2xlYW5JY29uKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJvb2xlYW5JY29uO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9Cb29sZWFuSWNvbi50c3giLCJkZWNsYXJlIHZhciBtYW55d2hvOiBhbnk7XHJcblxyXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5jbGFzcyBTdGF0dXNJY29uIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PGFueSwgYW55PiBcclxueyAgIFxyXG4gICAgY29uc3RydWN0b3IocHJvcHMgOiBhbnkpXHJcblx0e1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgIH1cclxuXHJcbiAgICBjb21wb25lbnREaWRNb3VudCgpIFxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuZm9yY2VVcGRhdGUoKTtcclxuICAgIH1cclxuXHJcblx0cmVuZGVyKClcclxuXHR7XHJcbiAgICAgICAgdmFyIGNsYXNzTmFtZSA6IGFueSA9IFwiZ2x5cGhpY29uIGdseXBoaWNvbi1cIjtcclxuICAgICAgICB2YXIgdG9vbHRpcCA6IHN0cmluZyA9IFwiXCI7XHJcbiAgICAgICAgbGV0IHJlc3VsdDogYW55O1xyXG4gICAgICAgIHN3aXRjaCh0aGlzLnByb3BzLmNvbnRlbnRWYWx1ZS50b0xvd2VyQ2FzZSgpKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgY2FzZSBcInNcIjpcclxuICAgICAgICAgICAgICAgIHJlc3VsdD0oXHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17XCJnbHlwaGljb24gZ2x5cGhpY29uLWhvdXJnbGFzc1wifSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9e1wiU3RhZ2VkXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICk7XHJcblxyXG4gICAgICAgICAgICBjYXNlIFwiY1wiOlxyXG4gICAgICAgICAgICAgICAgcmVzdWx0PShcclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcImdseXBoaWNvbiBnbHlwaGljb24tb2tcIn0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPXtcIkNvbXBsZXRlXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGNhc2UgXCJhXCI6XHJcbiAgICAgICAgICAgICAgICByZXN1bHQ9KFxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1wiZ2x5cGhpY29uIGdseXBoaWNvbi1mbGFzaFwifSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9e1wiQWN0aXZlXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGNhc2UgXCJjb21wbGV0ZVwiOiBcclxuICAgICAgICAgICAgICAgIHJlc3VsdD0oXHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGNmLWltYWdlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3JjPVwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFBb0FBQUFLQ0FZQUFBQ05Ncys5QUFBQWQwbEVRVlI0Mm1OZ2dBS2xNSVlHcFZDRy95Z1lLTWFBREdBU0JrVXMvMTNtY0lFeGlBMFRSekhKYVFZblZndzNHY1RReTJQK2J6K0pBeXNHeVlGTkJSSFdYZXg0TVZ5aGVUTXJYZ3hYcUpuSytOKzRtaGtyQnNsQkZFSTlvMS9NaEJXakJCTXNHTlRpR2Y3cjVES0NNWWlORWp6RUJqZ0FVOHFLN1N1MW5Zd0FBQUFBU1VWT1JLNUNZSUk9XCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiQ29tcGxldGVcIlxyXG4gICAgICAgICAgICAgICAgICAgIC8+KTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGNhc2UgXCJlcnJvclwiOiBcclxuICAgICAgICAgICAgICAgIHJlc3VsdD0oXHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGNmLWltYWdlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3JjPVwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFBb0FBQUFLQ0FZQUFBQ05Ncys5QUFBQVowbEVRVlI0Mm1OZ2dJSUNHWW1HelZ3TS81RXhTSXdCR2NBa1hpbHpvR0NZT0lwSnp4VFpzV0s0eVNER1l3VjJ2QmhzS29pNEo4Y0d4dWdBSmc1WGVFdUdGWXpSQVV3Y3J2Q3FKQ3RlREZZSTg4eDVjUmFzR0NXWVlNRndSSWdKQmFNRUQ3RUJEZ0NRaXJERlNCTmtKQUFBQUFCSlJVNUVya0pnZ2c9PVwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIkNvbXBsZXRlXCJcclxuICAgICAgICAgICAgICAgICAgICAvPik7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgcmVzdWx0PShcclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcImdseXBoaWNvbiBnbHlwaGljb24tb3B0aW9uLWhvcml6b250YWxcIn0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPXtcIk5vdCBTZXRcIn1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgIHJldHVybiByZXN1bHQ7O1xyXG4gICAgfVxyXG59XHJcblxyXG5tYW55d2hvLmNvbXBvbmVudC5yZWdpc3RlcignU3RhdHVzSWNvbicsIFN0YXR1c0ljb24pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU3RhdHVzSWNvbjtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvU3RhdHVzSWNvbi50c3giLCJkZWNsYXJlIHZhciBtYW55d2hvOiBhbnk7XHJcblxyXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCAqIGFzIFJlYWN0RG9tIGZyb20gJ3JlYWN0LWRvbSc7XHJcblxyXG5cclxuLy90aGUgY29udGVudFZhbHVlIHdpbGwgaGF2ZSB0aGUgbG9va3VwIHZhbHVlXHJcbi8vXHJcbmNsYXNzIExvb2t1cFZhbHVlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PGFueSwgYW55PiBcclxueyAgXHJcbiAgICAvL215UmVmIDogYW55OyBcclxuICAgIC8vcGFyZW50SWQgOiBhbnk7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcyA6IGFueSlcclxuXHR7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgICAgIC8vdGhpcy5teVJlZiA9IFJlYWN0LmNyZWF0ZVJlZigpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbXBvbmVudERpZE1vdW50KCkgXHJcbiAgICB7XHJcbiAgICAgICAgLy92YXIgbWUgPSBSZWFjdERvbS5maW5kRE9NTm9kZSh0aGlzKTtcclxuICAgICAgICAvL3ZhciBwYXJlbnRUYWJsZSA9ICQodGhpcy5teVJlZi5jdXJyZW50KS5jbG9zZXN0KCd0YWJsZScpLmF0dHIoJ2lkJyk7XHJcbiAgICAgICAgdGhpcy5mb3JjZVVwZGF0ZSgpO1xyXG4gICAgICAgIC8vdGhpcy5wYXJlbnRJZCA9ICQodGhpcy5yZWZzLm1lKS5jbG9zZXN0KCd0YWJsZScpLmF0dHIoJ2lkJylcclxuICAgIH1cclxuXHJcbiAgICBnZXRBdHRyaWJ1dGVWYWx1ZShhdHRyaWJ1dGVzIDogYW55LCBhdHRyaWJ1dGVQcmVmaXggOiBzdHJpbmcsICBjb2x1bW5JZCA6IHN0cmluZylcclxuICAgIHtcclxuICAgICAgICBmb3IodmFyIGtleSBpbiBhdHRyaWJ1dGVzKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWYoa2V5ID09PSBhdHRyaWJ1dGVQcmVmaXggKyBcIl9cIiArIGNvbHVtbklkKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gYXR0cmlidXRlc1trZXldO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFZhbHVlRnJvbUxpc3QobGlzdCA6IGFueSAsIGtleUF0dHJpYnV0ZSA6IHN0cmluZyAsIHJlc3VsdEF0dHJpYnV0ZSA6IHN0cmluZywga2V5IDogc3RyaW5nKVxyXG4gICAge1xyXG4gICAgICAgIHZhciB2YWwgOiBzdHJpbmcgPSBcIlwiO1xyXG4gICAgICAgIHZhciBoaXQgOiBib29sZWFuID0gZmFsc2VcclxuXHJcbiAgICAgICAgZm9yKHZhciBpUG9zID0gMCA7IGlQb3MgPCBsaXN0Lmxlbmd0aCA7IGlQb3MgKyspXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB2YWw9XCJcIjtcclxuICAgICAgICAgICAgdmFyIGl0ZW0gPSBsaXN0W2lQb3NdO1xyXG5cclxuICAgICAgICAgICAgZm9yKHZhciBwUG9zID0gMCA7IHBQb3MgPCBpdGVtLnByb3BlcnRpZXMubGVuZ3RoIDsgcFBvcysrKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB2YXIgcHJvcCA9IGl0ZW0ucHJvcGVydGllc1twUG9zXTtcclxuICAgICAgICAgICAgICAgIGlmKHByb3AuZGV2ZWxvcGVyTmFtZSA9PT0gcmVzdWx0QXR0cmlidXRlKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhbCA9IHByb3AuY29udGVudFZhbHVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYocHJvcC5kZXZlbG9wZXJOYW1lID09PSBrZXlBdHRyaWJ1dGUpXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYocHJvcC5jb250ZW50VmFsdWU9PT1rZXkpXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoaXQ9dHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYoaGl0PT09dHJ1ZSlcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHZhbDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBcIlwiO1xyXG4gICAgfVxyXG5cclxuXHRyZW5kZXIoKVxyXG5cdHtcclxuICAgICAgICB2YXIgbWUgPSBSZWFjdERvbS5maW5kRE9NTm9kZSh0aGlzKTtcclxuICAgICAgICB2YXIgbGFiZWwgOiBzdHJpbmcgPSBcIlwiO1xyXG4gICAgICAgIGlmKHRoaXMucHJvcHMuY29udGVudFZhbHVlICYmIG1lKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgLy9pdGVyYXRlIHVwIGxvb2tpbmcgZm9yIHRoZSBlbGVtZW50IHdpdGggY2xhc3MgLnRhYmxlLWNvbnRhaW5lciwgaXQgd2lsbCBoYXZlIHRoZSB0YWJsZSdzIGlkIHZhbHVlIG9uIGl0XHJcbiAgICAgICAgICAgIHZhciBtYXhMZXZlbHMgPSAxMDtcclxuICAgICAgICAgICAgdmFyIHBhcmVudCA6IEhUTUxFbGVtZW50ID0gbWUucGFyZW50RWxlbWVudDtcclxuICAgICAgICAgICAgd2hpbGUoIXBhcmVudC5jbGFzc0xpc3QuY29udGFpbnMoXCJ0YWJsZS1jb250YWluZXJcIikgfHwgbWF4TGV2ZWxzID09IDApXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHBhcmVudD1wYXJlbnQucGFyZW50RWxlbWVudDtcclxuICAgICAgICAgICAgICAgIG1heExldmVscy0tO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZihtYXhMZXZlbHM9PTApXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBcIlwiO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHZhciBjb21wb25lbnRJZCA9IHBhcmVudC5hdHRyaWJ1dGVzLmdldE5hbWVkSXRlbSgnaWQnKS52YWx1ZTtcclxuICAgICAgICAgICAgdmFyIHRhYmxlID0gbWFueXdoby5tb2RlbC5nZXRDb21wb25lbnQoY29tcG9uZW50SWQsdGhpcy5wcm9wcy5mbG93S2V5KTtcclxuXHJcbiAgICAgICAgICAgIHZhciBwcm9wZXJ0eUlkID0gdGhpcy5wcm9wcy5wcm9wZXJ0eUlkO1xyXG5cclxuICAgICAgICAgICAgdmFyIGxpc3RDb21wb25lbnROYW1lID0gdGhpcy5nZXRBdHRyaWJ1dGVWYWx1ZSh0YWJsZS5hdHRyaWJ1dGVzLCBcIkxvb2t1cExpc3RDb21wb25lbnRcIiwgcHJvcGVydHlJZCk7XHJcbiAgICAgICAgICAgIHZhciBsaXN0S2V5QXRyaWJ1dGUgPSB0aGlzLmdldEF0dHJpYnV0ZVZhbHVlKHRhYmxlLmF0dHJpYnV0ZXMsIFwiTG9va3VwTGlzdEtleUF0dHJpYnV0ZVwiLCBwcm9wZXJ0eUlkKTtcclxuICAgICAgICAgICAgdmFyIGxpc3RSZXN1bHRBdHRyaWJ1dGUgPSB0aGlzLmdldEF0dHJpYnV0ZVZhbHVlKHRhYmxlLmF0dHJpYnV0ZXMsIFwiTG9va3VwTGlzdFJlc3VsdEF0dHJpYnV0ZVwiLCBwcm9wZXJ0eUlkKTtcclxuXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBpZihsaXN0Q29tcG9uZW50TmFtZSlcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdmFyIGxpc3QgPSBtYW55d2hvLm1vZGVsLmdldENvbXBvbmVudEJ5TmFtZShsaXN0Q29tcG9uZW50TmFtZSwgICB0aGlzLnByb3BzLmZsb3dLZXkpXHJcbiAgICAgICAgICAgICAgICBpZihsaXN0KVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsID0gdGhpcy5nZXRWYWx1ZUZyb21MaXN0KGxpc3Qub2JqZWN0RGF0YSwgbGlzdEtleUF0cmlidXRlLCBsaXN0UmVzdWx0QXR0cmlidXRlLCB0aGlzLnByb3BzLmNvbnRlbnRWYWx1ZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiA8c3Bhbj57bGFiZWx9PC9zcGFuPjtcclxuICAgIH1cclxufVxyXG5cclxubWFueXdoby5jb21wb25lbnQucmVnaXN0ZXIoJ0xvb2t1cFZhbHVlJywgTG9va3VwVmFsdWUpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTG9va3VwVmFsdWU7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL0xvb2t1cFZhbHVlLnRzeCIsImRlY2xhcmUgdmFyIG1hbnl3aG86IGFueTtcclxuXHJcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbmNsYXNzIEVwb2NoRGF0ZURETU1NWVkgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8YW55LCBhbnk+IFxyXG57ICAgXHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcyA6IGFueSlcclxuXHR7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbXBvbmVudERpZE1vdW50KCkgXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5mb3JjZVVwZGF0ZSgpO1xyXG4gICAgfVxyXG5cclxuXHRyZW5kZXIoKVxyXG5cdHtcclxuXHQgICBcclxuICAgICAgICBpZih0aGlzLnByb3BzLmNvbnRlbnRWYWx1ZSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHZhciBzZWN2YWwgPSB0aGlzLnByb3BzLmNvbnRlbnRWYWx1ZTtcclxuICAgICAgICAgICAgdmFyIHNlY29uZHMgOiBudW1iZXI9IE51bWJlci5wYXJzZUludCh0aGlzLnByb3BzLmNvbnRlbnRWYWx1ZSk7XHJcblxyXG4gICAgICAgICAgICAvL2hhbmRsZSBqYXZhIGVwb2NoIHdpdGggZGVjaW1hbCBwb2ludFxyXG4gICAgICAgICAgICBpZihzZWN2YWwuaW5kZXhPZihcIi5cIik+PTApXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHNlY29uZHMgPSBzZWNvbmRzICogMTAwMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgdmFyIGVkIDogRGF0ZSA9IG5ldyBEYXRlKHNlY29uZHMpO1xyXG5cclxuICAgICAgICAgICAgLy9mb3JtYXQgdGhlIGRhdGUgdXNpbmcgUmVhY3QgZm9ybWF0dGVyIGludG8gZHQgc3RyaW5nXHJcbiAgICAgICAgICAgIHZhciBkdCA9IG5ldyBJbnRsLkRhdGVUaW1lRm9ybWF0KCdlbi1HQicsIHsgICBcclxuICAgICAgICAgICAgICAgIHllYXI6ICdudW1lcmljJywgXHJcbiAgICAgICAgICAgICAgICBtb250aDogJ2xvbmcnLCBcclxuICAgICAgICAgICAgICAgIGRheTogJzItZGlnaXQnXHJcbiAgICAgICAgICAgIH0pLmZvcm1hdChlZCk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICByZXR1cm4gPHNwYW4+e2R0fTwvc3Bhbj47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2VcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxubWFueXdoby5jb21wb25lbnQucmVnaXN0ZXIoJ0Vwb2NoRGF0ZURETU1NWVknLCBFcG9jaERhdGVERE1NTVlZKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEVwb2NoRGF0ZURETU1NWVk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL0Vwb2NoRGF0ZURETU1NWVkudHN4IiwiZGVjbGFyZSB2YXIgbWFueXdobzogYW55O1xyXG5cclxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuY2xhc3MgRXBvY2hEYXRlVGltZURETU1NWVlISE1NIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PGFueSwgYW55PiBcclxueyAgIFxyXG4gICAgY29uc3RydWN0b3IocHJvcHMgOiBhbnkpXHJcblx0e1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgIH1cclxuXHJcbiAgICBjb21wb25lbnREaWRNb3VudCgpIFxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuZm9yY2VVcGRhdGUoKTtcclxuICAgIH1cclxuXHJcblx0cmVuZGVyKClcclxuXHR7XHJcblx0ICAgXHJcbiAgICAgICAgaWYodGhpcy5wcm9wcy5jb250ZW50VmFsdWUpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB2YXIgc2VjdmFsID0gdGhpcy5wcm9wcy5jb250ZW50VmFsdWU7XHJcbiAgICAgICAgICAgIHZhciBzZWNvbmRzIDogbnVtYmVyPSBOdW1iZXIucGFyc2VJbnQodGhpcy5wcm9wcy5jb250ZW50VmFsdWUpO1xyXG5cclxuICAgICAgICAgICAgLy9oYW5kbGUgamF2YSBlcG9jaCB3aXRoIGRlY2ltYWwgcG9pbnRcclxuICAgICAgICAgICAgaWYoc2VjdmFsLmluZGV4T2YoXCIuXCIpPj0wKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBzZWNvbmRzID0gc2Vjb25kcyAqIDEwMDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHZhciBlZCA6IERhdGUgPSBuZXcgRGF0ZShzZWNvbmRzKTtcclxuICAgICAgICAgICAgLy9mb3JtYXQgdGhlIGRhdGUgdXNpbmcgUmVhY3QgZm9ybWF0dGVyIGludG8gZHQgc3RyaW5nXHJcbiAgICAgICAgICAgIHZhciBkdCA9IG5ldyBJbnRsLkRhdGVUaW1lRm9ybWF0KCdlbi1HQicsIHsgICBcclxuICAgICAgICAgICAgICAgIHllYXI6ICdudW1lcmljJywgXHJcbiAgICAgICAgICAgICAgICBtb250aDogJ2xvbmcnLCBcclxuICAgICAgICAgICAgICAgIGRheTogJzItZGlnaXQnLFxyXG4gICAgICAgICAgICAgICAgaG91cjogJzItZGlnaXQnLFxyXG4gICAgICAgICAgICAgICAgbWludXRlOiAnMi1kaWdpdCdcclxuICAgICAgICAgICAgfSkuZm9ybWF0KGVkKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHJldHVybiA8c3Bhbj57ZHR9PC9zcGFuPjtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5tYW55d2hvLmNvbXBvbmVudC5yZWdpc3RlcignRXBvY2hEYXRlVGltZURETU1NWVlISE1NJywgRXBvY2hEYXRlVGltZURETU1NWVlISE1NKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEVwb2NoRGF0ZVRpbWVERE1NTVlZSEhNTTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvRXBvY2hEYXRlVGltZURETU1NWVlISE1NLnRzeCIsImRlY2xhcmUgdmFyIG1hbnl3aG86IGFueTtcclxuXHJcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbmNsYXNzIFBlcmNlbnRQcm9ncmVzc0JhciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxhbnksIGFueT4gXHJcbnsgICBcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzIDogYW55KVxyXG5cdHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICB9XHJcblxyXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSBcclxuICAgIHtcclxuICAgICAgICB0aGlzLmZvcmNlVXBkYXRlKCk7XHJcbiAgICB9XHJcblxyXG5cdHJlbmRlcigpXHJcblx0e1xyXG4gICAgICAgIHZhciBjbGFzc05hbWUgOiBhbnkgPSBcImdseXBoaWNvbiBnbHlwaGljb24tXCI7XHJcbiAgICAgICAgdmFyIHRvb2x0aXAgOiBzdHJpbmcgPSBcIlwiO1xyXG5cclxuICAgICAgICB2YXIgdmFsdWUgPSBwYXJzZUludCh0aGlzLnByb3BzLmNvbnRlbnRWYWx1ZSkgfHwgMDtcclxuICAgICAgICB2YXIgZGlzcGxheVZhbHVlID0gdmFsdWUgKyBcIiVcIjtcclxuXHJcbiAgICAgICAgdmFyIHRvb2x0aXAgOiBzdHJpbmcgPSB2YWx1ZSArIFwiJVwiO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHZhciBvdXRlclN0eWxlIDogUmVhY3QuQ1NTUHJvcGVydGllcyA9IHtcclxuICAgICAgICAgICAgICAgIGJvcmRlciA6IFwiMnB4IHNvbGlkICNhZGFkYWRcIixcclxuICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czpcIjVweFwiLFxyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOlwiI2UzZTNlM1wiLFxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OlwiMzBweFwiLFxyXG4gICAgICAgICAgICAgICAgYm94U2l6aW5nOiBcImNvbnRlbnQtYm94XCIsXHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbiA6IFwicmVsYXRpdmVcIiBhcyBcInJlbGF0aXZlXCIsXHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBcImdyaWRcIixcclxuICAgICAgICAgICAgICAgIGFsaWduQ29udGVudDogJ21pZGRsZScsXHJcbiAgICAgICAgICAgICAgICBtYXJnaW46ICcwICFpbXBvcnRhbnQnXHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgIHZhciBiYXJTdHlsZSA6IFJlYWN0LkNTU1Byb3BlcnRpZXMgPSB7XHJcbiAgICAgICAgICAgIGJvcmRlcjogXCJub25lXCIsXHJcbiAgICAgICAgICAgIGJvcmRlclJhZGl1czpcIjRweFwiLFxyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6XCIjN0Q5QUNGXCIsXHJcbiAgICAgICAgICAgIHdpZHRoOiBkaXNwbGF5VmFsdWUsXHJcbiAgICAgICAgICAgIHRleHRBbGlnbiA6IFwiY2VudGVyXCIgLFxyXG4gICAgICAgICAgICBoZWlnaHQ6IFwiMTAwJVwiLFxyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICB2YXIgY2FwdGlvblN0eWxlIDogUmVhY3QuQ1NTUHJvcGVydGllcyA9IHtcclxuICAgICAgICAgICAgZm9udEZhbWlseSA6IFwidGFob21hXCIsXHJcbiAgICAgICAgICAgIGNvbG9yIDogXCIjZmZmZmZmXCIsXHJcbiAgICAgICAgICAgIGZvbnRTaXplIDogXCIxMHB0XCIsXHJcbiAgICAgICAgICAgIHdpZHRoIDogXCIxMDAlXCIsXHJcbiAgICAgICAgICAgIHRleHRBbGlnbiA6IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICAgIHBvc2l0aW9uIDogXCJhYnNvbHV0ZVwiIGFzIFwiYWJzb2x1dGVcIixcclxuICAgICAgICAgICAgaGVpZ2h0OiBcIjEwMCVcIixcclxuICAgICAgICAgICAgdmVydGljYWxBbGlnbjogXCJtaWRkbGVcIixcclxuICAgICAgICAgICAgbGluZUhlaWdodDogXCIyMDAlXCIsXHJcbiAgICAgICAgICAgIG1peEJsZW5kTW9kZTogXCJkaWZmZXJlbmNlXCIsXHJcbiAgICAgICAgICAgIGxlZnQ6IDBcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgdmFyIG1heCA9IDEwMDtcclxuICAgICAgICB2YXIgbWluID0gMDtcclxuICAgICAgICB2YXIgcG9zID0gNjA7XHJcblxyXG4gICAgICAgIHJldHVybiAgPGRpdiBzdHlsZT17b3V0ZXJTdHlsZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiByb2xlPVwicHJvZ3Jlc3NiYXJcIiBhcmlhLXZhbHVlbm93PXtwb3N9IGFyaWEtdmFsdWVtaW49e21pbn0gYXJpYS12YWx1ZW1heD17bWF4fSBzdHlsZT17YmFyU3R5bGV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17Y2FwdGlvblN0eWxlfT57ZGlzcGxheVZhbHVlfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gICAgIFxyXG4gICAgICAgICAgICAgICAgPC9kaXY+IFxyXG5cclxuICAgIH1cclxufVxyXG5cclxuLy88VG9vbHRpcCBib3JkZXI9XCIjZmZmZmZmXCIgcmFkaXVzPVwiNVwiIHBsYWNlbWVudD1cInJpZ2h0XCIgY29udGVudD17dG9vbHRpcH0+PC9Ub29sdGlwPlxyXG5cclxubWFueXdoby5jb21wb25lbnQucmVnaXN0ZXIoJ1BlcmNlbnRQcm9ncmVzc0JhcicsIFBlcmNlbnRQcm9ncmVzc0Jhcik7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQZXJjZW50UHJvZ3Jlc3NCYXI7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL1BlcmNlbnRQcm9ncmVzc0Jhci50c3giLCJkZWNsYXJlIHZhciBtYW55d2hvOiBhbnk7XHJcblxyXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5jbGFzcyBIeXBlcmxpbmsgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8YW55LCBhbnk+IFxyXG57ICAgXHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcyA6IGFueSlcclxuXHR7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbXBvbmVudERpZE1vdW50KCkgXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5mb3JjZVVwZGF0ZSgpO1xyXG4gICAgfVxyXG5cclxuXHRyZW5kZXIoKVxyXG5cdHtcclxuICAgICAgICB2YXIgdG9vbHRpcCA6IHN0cmluZyA9IFwiXCI7XHJcblxyXG4gICAgICAgIHZhciB2YWx1ZSA9IHRoaXMucHJvcHMuY29udGVudFZhbHVlIHx8IFwiXCI7XHJcbiAgICAgICAgdmFyIGRpc3BsYXlWYWx1ZSA9IHZhbHVlICsgXCIlXCI7XHJcblxyXG4gICAgICAgIHZhciB0b29sdGlwIDogc3RyaW5nID0gdmFsdWUgKyBcIiVcIjtcclxuICAgICAgICBcclxuICAgICAgICB2YXIgbGlua1N0eWxlID0ge1xyXG4gICAgICAgICAgICAgICAgXCJmb250LWZhbWlseVwiIDogXCJ0YWhvbWFcIixcclxuICAgICAgICAgICAgICAgIFwiY29sb3JcIiA6IFwiI2ZmZmZmZlwiLFxyXG4gICAgICAgICAgICAgICAgXCJmb250LXNpemVcIiA6IFwiMTBwdFwiLFxyXG4gICAgICAgICAgICAgICAgXCJ3aWR0aFwiIDogXCIxMDAlXCIsXHJcbiAgICAgICAgICAgICAgICBcInRleHQtYWxpZ25cIiA6IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICAgICAgICBcInBvc2l0aW9uXCIgOiBcImFic29sdXRlXCIgYXMgXCJhYnNvbHV0ZVwiLFxyXG4gICAgICAgICAgICAgICAgXCJoZWlnaHRcIjogXCIxMDAlXCIsXHJcbiAgICAgICAgICAgICAgICBcInZlcnRpY2FsLWFsaWduXCI6IFwibWlkZGxlXCIsXHJcbiAgICAgICAgICAgICAgICBcImxpbmUtaGVpZ2h0XCI6IFwiMjAwJVwiLFxyXG4gICAgICAgICAgICAgICAgXCJtaXgtYmxlbmQtbW9kZVwiOiBcImRpZmZlcmVuY2VcIixcclxuXHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgIHZhciBtYXggPSAxMDA7XHJcbiAgICAgICAgdmFyIG1pbiA9IDA7XHJcbiAgICAgICAgdmFyIHBvcyA9IDYwO1xyXG5cclxuICAgICAgICByZXR1cm4gIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj17dmFsdWV9IHRhcmdldD1cIl9ibGFua1wiPnt2YWx1ZX08L2E+ICAgIFxyXG4gICAgICAgICAgICAgICAgPC9kaXY+ICBcclxuICAgIH1cclxufVxyXG5cclxuLy88VG9vbHRpcCBib3JkZXI9XCIjZmZmZmZmXCIgcmFkaXVzPVwiNVwiIHBsYWNlbWVudD1cInJpZ2h0XCIgY29udGVudD17dG9vbHRpcH0+PC9Ub29sdGlwPlxyXG5cclxubWFueXdoby5jb21wb25lbnQucmVnaXN0ZXIoJ0h5cGVybGluaycsIEh5cGVybGluayk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIeXBlcmxpbms7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL0h5cGVybGluay50c3giLCJkZWNsYXJlIHZhciBtYW55d2hvOiBhbnk7XHJcblxyXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCAqIGFzIFJlYWN0RG9tIGZyb20gJ3JlYWN0LWRvbSc7XHJcblxyXG5jbGFzcyBUaHVtYm5haWwgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8YW55LCBhbnk+IFxyXG57ICAgXHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcyA6IGFueSlcclxuXHR7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbXBvbmVudERpZE1vdW50KCkgXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5mb3JjZVVwZGF0ZSgpO1xyXG4gICAgfVxyXG5cclxuXHRyZW5kZXIoKVxyXG5cdHtcclxuXHJcbiAgICAgICAgdmFyIG1lID0gUmVhY3REb20uZmluZERPTU5vZGUodGhpcyk7XHJcbiAgICAgICAgdmFyIGNvbnRlbnRWYWx1ZSA6IHN0cmluZztcclxuICAgICAgICB2YXIgd2lkdGggOiBudW1iZXI7XHJcbiAgICAgICAgaWYobWUpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB2YXIgcGFyZW50IDogSFRNTEVsZW1lbnQgPSBtZS5wYXJlbnRFbGVtZW50O1xyXG4gICAgICAgICAgICB2YXIgbWF4TGV2ZWxzID0gMTA7XHJcbiAgICAgICAgICAgIHdoaWxlKCFwYXJlbnQuY2xhc3NMaXN0LmNvbnRhaW5zKFwidGFibGUtY29udGFpbmVyXCIpIHx8IG1heExldmVscyA9PSAwKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBwYXJlbnQ9cGFyZW50LnBhcmVudEVsZW1lbnQ7XHJcbiAgICAgICAgICAgICAgICBtYXhMZXZlbHMtLTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYobWF4TGV2ZWxzPT0wKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJcIjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdmFyIGNvbXBvbmVudElkID0gcGFyZW50LmF0dHJpYnV0ZXMuZ2V0TmFtZWRJdGVtKCdpZCcpLnZhbHVlO1xyXG4gICAgICAgICAgICB2YXIgdGFibGUgPSBtYW55d2hvLm1vZGVsLmdldENvbXBvbmVudChjb21wb25lbnRJZCx0aGlzLnByb3BzLmZsb3dLZXkpO1xyXG5cclxuICAgICAgICAgICAgdmFyIHByb3BlcnR5SWQgPSB0aGlzLnByb3BzLnByb3BlcnR5SWQ7XHJcblxyXG4gICAgICAgICAgICBjb250ZW50VmFsdWUgPSB0aGlzLnByb3BzLmNvbnRlbnRWYWx1ZSB8fCBcIlwiO1xyXG5cclxuICAgICAgICAgICAgd2lkdGggPSB0YWJsZS5hdHRyaWJ1dGVzW1wiaW1hZ2Utc2NhbGVkLXdpZHRoXCJdIHx8IDUwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdmFyIG91dGVyU3R5bGUgOiBSZWFjdC5DU1NQcm9wZXJ0aWVzID0ge1xyXG4gICAgICAgICAgICBib3hTaXppbmc6IFwiY29udGVudC1ib3hcIixcclxuICAgICAgICAgICAgcG9zaXRpb24gOiBcInJlbGF0aXZlXCIgYXMgXCJyZWxhdGl2ZVwiLFxyXG4gICAgICAgICAgICBkaXNwbGF5OiBcImdyaWRcIixcclxuICAgICAgICAgICAgYWxpZ25Db250ZW50OiAnbWlkZGxlJyxcclxuICAgICAgICAgICAgbWFyZ2luOiAnMCAhaW1wb3J0YW50J1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGlmKGNvbnRlbnRWYWx1ZSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGxldCBzcmM9XCJcIjtcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e291dGVyU3R5bGV9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtjb250ZW50VmFsdWV9IHdpZHRoPXt3aWR0aH0gc3R5bGU9e3ttYXJnaW5MZWZ0OiAnYXV0bycsIG1hcmdpblJpZ2h0OiAnYXV0byd9fS8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2VcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXY+PC9kaXY+XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5tYW55d2hvLmNvbXBvbmVudC5yZWdpc3RlcignVGh1bWJuYWlsJywgVGh1bWJuYWlsKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRodW1ibmFpbDtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvVGh1bWJuYWlsLnRzeCIsImRlY2xhcmUgdmFyIG1hbnl3aG86IGFueTtcclxuXHJcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbmNsYXNzIERvbGxhclZhbHVlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PGFueSwgYW55PiBcclxueyAgIFxyXG4gICAgY29uc3RydWN0b3IocHJvcHMgOiBhbnkpXHJcblx0e1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgIH1cclxuXHJcbiAgICBjb21wb25lbnREaWRNb3VudCgpIFxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuZm9yY2VVcGRhdGUoKTtcclxuICAgIH1cclxuXHJcblx0cmVuZGVyKClcclxuXHR7XHJcbiAgICAgICAgY29uc3QgdmFsdWU6IG51bWJlciA9IHRoaXMucHJvcHMuY29udGVudFZhbHVlO1xyXG4gICAgICAgIGNvbnN0IGRpc3BsYXk6IHN0cmluZyA9IFwiJFwiICsgdmFsdWU7XHJcbiAgICAgICAgcmV0dXJuIDxzcGFuPntkaXNwbGF5fTwvc3Bhbj47XHJcbiAgICB9XHJcbn1cclxuXHJcbm1hbnl3aG8uY29tcG9uZW50LnJlZ2lzdGVyKCdEb2xsYXJWYWx1ZScsIERvbGxhclZhbHVlKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IERvbGxhclZhbHVlO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9Eb2xsYXJWYWx1ZS50c3giLCJkZWNsYXJlIHZhciBtYW55d2hvOiBhbnk7XHJcblxyXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCAqIGFzIFJlYWN0RG9tIGZyb20gJ3JlYWN0LWRvbSc7XHJcblxyXG5jbGFzcyBUYWJsZVJvd1N0eWxlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxhbnksIGFueT4gXHJcbnsgICBcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzIDogYW55KVxyXG5cdHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgdGhpcy5nZXRQYXJlbnRUYWJsZUVsZW1lbnQgPSB0aGlzLmdldFBhcmVudFRhYmxlRWxlbWVudC5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMuZ2V0UGFyZW50VGFibGVDb21wb25lbnRJZCA9IHRoaXMuZ2V0UGFyZW50VGFibGVDb21wb25lbnRJZC5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMuZ2V0UGFyZW50Um93RWxlbWVudCA9IHRoaXMuZ2V0UGFyZW50Um93RWxlbWVudC5iaW5kKHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbXBvbmVudERpZE1vdW50KCkgXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5mb3JjZVVwZGF0ZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldEF0dHJpYnV0ZVZhbHVlKGF0dHJpYnV0ZXMgOiBhbnksIGF0dHJpYnV0ZU5hbWUgOiBzdHJpbmcgKSA6IGFueVxyXG4gICAge1xyXG4gICAgICAgIGZvcih2YXIga2V5IGluIGF0dHJpYnV0ZXMpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZihrZXkgPT09IGF0dHJpYnV0ZU5hbWUpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBhdHRyaWJ1dGVzW2tleV07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcblxyXG5cdHJlbmRlcigpXHJcblx0e1xyXG4gICAgICAgIGxldCBtZSA9IFJlYWN0RG9tLmZpbmRET01Ob2RlKHRoaXMpO1xyXG4gICAgICAgIGNvbnN0IHZhbHVlOiBhbnkgPSB0aGlzLnByb3BzLmNvbnRlbnRWYWx1ZTtcclxuICAgICAgICBpZihtZSkge1xyXG4gICAgICAgICAgICBjb25zdCB0YWJsZUVsZW1lbnQ6IEhUTUxFbGVtZW50ID0gdGhpcy5nZXRQYXJlbnRUYWJsZUVsZW1lbnQoKTtcclxuICAgICAgICAgICAgY29uc3Qgcm93RWxlbWVudDogSFRNTEVsZW1lbnQgPSB0aGlzLmdldFBhcmVudFJvd0VsZW1lbnQoKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHRhYmxlQ29tcG9uZW50SWQ6IHN0cmluZyA9IHRoaXMuZ2V0UGFyZW50VGFibGVDb21wb25lbnRJZCh0YWJsZUVsZW1lbnQpO1xyXG4gICAgICAgICAgICBjb25zdCB0YWJsZSA9IG1hbnl3aG8ubW9kZWwuZ2V0Q29tcG9uZW50KHRhYmxlQ29tcG9uZW50SWQsdGhpcy5wcm9wcy5mbG93S2V5KTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGFyZ3N0ciA9IHRoaXMuZ2V0QXR0cmlidXRlVmFsdWUodGFibGUuYXR0cmlidXRlcywgXCJ0cmZDb25maWdcIik7XHJcbiAgICAgICAgICAgIGNvbnN0IGFyZ3MgPSBKU09OLnBhcnNlKGFyZ3N0cik7XHJcblxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhhcmdzKTtcclxuXHJcbiAgICAgICAgICAgIGlmKGFyZ3NbdmFsdWVdKSB7XHJcbiAgICAgICAgICAgICAgICByb3dFbGVtZW50LmNsYXNzTGlzdC5hZGQoYXJnc1t2YWx1ZV0pO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICByZXR1cm4gPHNwYW4+e3ZhbHVlfTwvc3Bhbj47XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0UGFyZW50VGFibGVFbGVtZW50KCkgOiBIVE1MRWxlbWVudCB8IHVuZGVmaW5lZFxyXG4gICAge1xyXG4gICAgICAgIGxldCBtZSA9IFJlYWN0RG9tLmZpbmRET01Ob2RlKHRoaXMpO1xyXG4gICAgICAgIHZhciBtYXhMZXZlbHMgPSAxMDtcclxuICAgICAgICB2YXIgcGFyZW50IDogSFRNTEVsZW1lbnQgPSBtZS5wYXJlbnRFbGVtZW50O1xyXG4gICAgICAgIHdoaWxlKCFwYXJlbnQuY2xhc3NMaXN0LmNvbnRhaW5zKFwidGFibGUtY29udGFpbmVyXCIpIHx8IG1heExldmVscyA9PSAwKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcGFyZW50PXBhcmVudC5wYXJlbnRFbGVtZW50O1xyXG4gICAgICAgICAgICBtYXhMZXZlbHMtLTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmKG1heExldmVscz09MClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHJldHVybiBwYXJlbnQ7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGdldFBhcmVudFJvd0VsZW1lbnQoKSA6IEhUTUxFbGVtZW50IHwgdW5kZWZpbmVkXHJcbiAgICB7XHJcbiAgICAgICAgbGV0IG1lID0gUmVhY3REb20uZmluZERPTU5vZGUodGhpcyk7XHJcbiAgICAgICAgdmFyIG1heExldmVscyA9IDEwO1xyXG4gICAgICAgIHZhciBwYXJlbnQgOiBIVE1MRWxlbWVudCA9IG1lLnBhcmVudEVsZW1lbnQ7XHJcbiAgICAgICAgd2hpbGUoIHBhcmVudC50YWdOYW1lLnRvTG93ZXJDYXNlKCkgIT09XCJ0clwiIHx8IG1heExldmVscyA9PSAwKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcGFyZW50PXBhcmVudC5wYXJlbnRFbGVtZW50O1xyXG4gICAgICAgICAgICBtYXhMZXZlbHMtLTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmKG1heExldmVscz09MClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHJldHVybiBwYXJlbnQ7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGdldFBhcmVudFRhYmxlQ29tcG9uZW50SWQodGFibGU6IEhUTUxFbGVtZW50KSA6IHN0cmluZ1xyXG4gICAge1xyXG4gICAgICAgIHZhciBjb21wb25lbnRJZDogc3RyaW5nID0gdGFibGUuYXR0cmlidXRlcy5nZXROYW1lZEl0ZW0oJ2lkJykudmFsdWU7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcmV0dXJuIGNvbXBvbmVudElkO1xyXG4gICAgfVxyXG59XHJcblxyXG5tYW55d2hvLmNvbXBvbmVudC5yZWdpc3RlcignVGFibGVSb3dTdHlsZXInLCBUYWJsZVJvd1N0eWxlcik7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUYWJsZVJvd1N0eWxlcjtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvVGFibGVSb3dTdHlsZXIudHN4Il0sInNvdXJjZVJvb3QiOiIifQ==