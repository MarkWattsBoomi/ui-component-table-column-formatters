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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNDVmNjkxOTBlZTkzODNmMWRmYzMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiUmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJSZWFjdERPTVwiIiwid2VicGFjazovLy8uL3NyYy9pbmRleC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL0VsYXBzZWRUaW1lRnJpZW5kbHkudHN4Iiwid2VicGFjazovLy8uL3NyYy9FbGFwc2VkVGltZUxpdmVMb25nLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvRWxhcHNlZFRpbWVMaXZlU2hvcnQudHN4Iiwid2VicGFjazovLy8uL3NyYy9EYXRlVGltZUhlbHBlcnMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0VsYXBzZWRUaW1lLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvRGF0ZURETU1NWVkudHN4Iiwid2VicGFjazovLy8uL3NyYy9EYXRlVGltZURETU1NWVlISE1NLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvQm9vbGVhbkljb24udHN4Iiwid2VicGFjazovLy8uL3NyYy9TdGF0dXNJY29uLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvTG9va3VwVmFsdWUudHN4Iiwid2VicGFjazovLy8uL3NyYy9FcG9jaERhdGVERE1NTVlZLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvRXBvY2hEYXRlVGltZURETU1NWVlISE1NLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvUGVyY2VudFByb2dyZXNzQmFyLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvSHlwZXJsaW5rLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvVGh1bWJuYWlsLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvRG9sbGFyVmFsdWUudHN4Iiwid2VicGFjazovLy8uL3NyYy9UYWJsZVJvd1N0eWxlci50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL0hvdmVyQm94LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtB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VSxFQUFFLFFBQVEsQ0FBQyxDQUFDO0FBRWpELGtCQUFlLFFBQVEsQ0FBQyIsImZpbGUiOiJDb2x1bW5Db250cm9scy5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDIpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDQ1ZjY5MTkwZWU5MzgzZjFkZmMzIiwibW9kdWxlLmV4cG9ydHMgPSBSZWFjdDtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIlJlYWN0XCJcbi8vIG1vZHVsZSBpZCA9IDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBSZWFjdERPTTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIlJlYWN0RE9NXCJcbi8vIG1vZHVsZSBpZCA9IDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0ICogZnJvbSAnLi9FbGFwc2VkVGltZUZyaWVuZGx5JztcbmV4cG9ydCAqIGZyb20gJy4vRWxhcHNlZFRpbWVMaXZlTG9uZyc7XG5leHBvcnQgKiBmcm9tICcuL0VsYXBzZWRUaW1lTGl2ZVNob3J0JztcbmV4cG9ydCAqIGZyb20gJy4vRWxhcHNlZFRpbWUnO1xuZXhwb3J0ICogZnJvbSAnLi9EYXRlRERNTU1ZWSc7XG5leHBvcnQgKiBmcm9tICcuL0RhdGVUaW1lRERNTU1ZWUhITU0nO1xuZXhwb3J0ICogZnJvbSAnLi9Cb29sZWFuSWNvbic7XG5leHBvcnQgKiBmcm9tICcuL1N0YXR1c0ljb24nO1xuZXhwb3J0ICogZnJvbSAnLi9Mb29rdXBWYWx1ZSc7XG5leHBvcnQgKiBmcm9tICcuL0Vwb2NoRGF0ZURETU1NWVknO1xuZXhwb3J0ICogZnJvbSAnLi9FcG9jaERhdGVUaW1lRERNTU1ZWUhITU0nO1xuZXhwb3J0ICogZnJvbSAnLi9QZXJjZW50UHJvZ3Jlc3NCYXInO1xuZXhwb3J0ICogZnJvbSAnLi9IeXBlcmxpbmsnO1xuZXhwb3J0ICogZnJvbSAnLi9UaHVtYm5haWwnO1xuZXhwb3J0ICogZnJvbSAnLi9Eb2xsYXJWYWx1ZSc7XG5leHBvcnQgKiBmcm9tICcuL1RhYmxlUm93U3R5bGVyJztcbmV4cG9ydCAqIGZyb20gJy4vSG92ZXJCb3gnO1xuXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvaW5kZXgudHN4IiwiZGVjbGFyZSB2YXIgbWFueXdobzogYW55O1xyXG5cclxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuY2xhc3MgRWxhcHNlZFRpbWVGcmllbmRseSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxhbnksIGFueT4gXHJcbnsgICBcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzIDogYW55KVxyXG5cdHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICB9XHJcblxyXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSBcclxuICAgIHtcclxuICAgICAgICB0aGlzLmZvcmNlVXBkYXRlKCk7XHJcbiAgICB9XHJcblxyXG5cdHJlbmRlcigpXHJcblx0e1xyXG5cdCAgIFxyXG4gICAgICAgIGlmKHRoaXMucHJvcHMuY29udGVudFZhbHVlKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdmFyIGR0ID0gbmV3IERhdGUodGhpcy5wcm9wcy5jb250ZW50VmFsdWUpXHJcbiAgICAgICAgICAgIHZhciBlbGFwc2VkID0gdGhpcy5lbGFwc2VkVGltZShkdCk7XHJcbiAgICAgICAgICAgIHJldHVybiA8c3Bhbj57ZWxhcHNlZH08L3NwYW4+O1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZWxhcHNlZFRpbWUgKGZyb21EYXRlIDogRGF0ZSkgXHJcbiAgICB7XHJcbiAgICAgIGNvbnN0IGNvcnJlY3RlZERhdGUgPSBuZXcgRGF0ZShmcm9tRGF0ZS5nZXRUaW1lKCkgKyAoZnJvbURhdGUuZ2V0VGltZXpvbmVPZmZzZXQoKSAqNjAgKjEwMDApKTtcclxuICAgICAgdmFyIG5Ub3RhbERpZmYgPSBNYXRoLnJvdW5kKChuZXcgRGF0ZSgpKS5nZXRUaW1lKCkgLyAxMDAwKSAtIChjb3JyZWN0ZWREYXRlLmdldFRpbWUoKSAvIDEwMDApO1xyXG4gICAgICBpZiAoblRvdGFsRGlmZiA+PSAwKSBcclxuICAgICAge1xyXG4gICAgICAgIHZhciBvRGlmZiA6IGFueSA9IHt9O1xyXG4gICAgICAgIG9EaWZmLmRheXMgPSBNYXRoLmZsb29yKG5Ub3RhbERpZmYgLyA4NjQwMCk7XHJcbiAgICAgICAgblRvdGFsRGlmZiAtPSBvRGlmZi5kYXlzICogODY0MDA7XHJcbiAgICAgICAgb0RpZmYuaG91cnMgPSBNYXRoLmZsb29yKG5Ub3RhbERpZmYgLyAzNjAwKTtcclxuICAgICAgICBuVG90YWxEaWZmIC09IG9EaWZmLmhvdXJzICogMzYwMDtcclxuICAgICAgICBvRGlmZi5taW51dGVzID0gTWF0aC5mbG9vcihuVG90YWxEaWZmIC8gNjApO1xyXG4gICAgICAgIG5Ub3RhbERpZmYgLT0gb0RpZmYubWludXRlcyAqIDYwO1xyXG4gICAgICAgIG9EaWZmLnNlY29uZHMgPSBNYXRoLmZsb29yKG5Ub3RhbERpZmYpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHZhciByZXN1bHQgPSBcIlwiO1xyXG4gICAgICAgIGlmKG9EaWZmLmRheXMgPiAwKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmVzdWx0ICs9IG9EaWZmLmRheXMgKyBcIiBkYXlzXCI7XHJcbiAgICAgICAgfVxyXG4gIFxyXG4gICAgICAgIGlmKG9EaWZmLmhvdXJzID4gMClcclxuICAgICAgICB7XHJcbiAgICAgICAgICBpZihyZXN1bHQubGVuZ3RoID4gMClcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgcmVzdWx0ICs9IFwiLCBcIjtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmVzdWx0ICs9IG9EaWZmLmhvdXJzICsgXCIgaG91cnNcIjtcclxuICAgICAgICB9XHJcbiAgXHJcbiAgICAgICAgaWYob0RpZmYubWludXRlcyA+IDApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgaWYocmVzdWx0Lmxlbmd0aCA+IDApXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIHJlc3VsdCArPSBcIiwgXCI7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJlc3VsdCArPSBvRGlmZi5taW51dGVzICsgXCIgbWludXRlc1wiO1xyXG4gICAgICAgIH1cclxuICBcclxuICAgICAgICBpZihvRGlmZi5zZWNvbmRzID4gMClcclxuICAgICAgICB7XHJcbiAgICAgICAgICBpZihyZXN1bHQubGVuZ3RoID4gMClcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgcmVzdWx0ICs9IFwiLCBcIjtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmVzdWx0ICs9IG9EaWZmLnNlY29uZHMgKyBcIiBzZWNvbmRzXCI7XHJcbiAgICAgICAgfVxyXG4gIFxyXG4gICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICAgIH0gXHJcbiAgICAgIGVsc2UgXHJcbiAgICAgIHtcclxuICAgICAgICByZXR1cm4gXCJcIjtcclxuICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5tYW55d2hvLmNvbXBvbmVudC5yZWdpc3RlcignRWxhcHNlZFRpbWVGcmllbmRseScsIEVsYXBzZWRUaW1lRnJpZW5kbHkpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRWxhcHNlZFRpbWVGcmllbmRseTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvRWxhcHNlZFRpbWVGcmllbmRseS50c3giLCJkZWNsYXJlIHZhciBtYW55d2hvOiBhbnk7XHJcblxyXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5jbGFzcyBFbGFwc2VkVGltZUxpdmVMb25nIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PGFueSwgYW55PiBcclxueyAgIFxyXG5cclxuICB0aW1lcklEID0gLTE7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByb3BzIDogYW55KVxyXG4gIHtcclxuICAgICAgc3VwZXIocHJvcHMpO1xyXG4gIH1cclxuXHJcbiAgY29tcG9uZW50RGlkTW91bnQoKSBcclxuICB7XHJcbiAgICAgIHRoaXMuZm9yY2VVcGRhdGUoKTtcclxuICAgICAgdGhpcy50aW1lcklEID0gd2luZG93LnNldEludGVydmFsKHRoaXMudGltZXJFdmVudC5iaW5kKHRoaXMpLCAxMDAwKTtcclxuICB9XHJcblxyXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KClcclxuICB7XHJcbiAgICBpZih0aGlzLnRpbWVySUQgPj0gMClcclxuICAgIHtcclxuICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLnRpbWVySUQpO1xyXG4gICAgICB0aGlzLnRpbWVySUQgPSAtMTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHRpbWVyRXZlbnQoKVxyXG4gIHtcclxuICAgIHRoaXMuZm9yY2VVcGRhdGUoKTtcclxuICB9XHJcblxyXG5cdHJlbmRlcigpXHJcblx0e1xyXG5cdCAgIFxyXG4gICAgICAgIGlmKHRoaXMucHJvcHMuY29udGVudFZhbHVlKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdmFyIGR0ID0gbmV3IERhdGUodGhpcy5wcm9wcy5jb250ZW50VmFsdWUpXHJcbiAgICAgICAgICAgIHZhciBlbGFwc2VkID0gdGhpcy5lbGFwc2VkVGltZShkdCk7XHJcbiAgICAgICAgICAgIHJldHVybiA8c3Bhbj57ZWxhcHNlZH08L3NwYW4+O1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcbiAgfVxyXG5cclxuICBlbGFwc2VkVGltZSAoZnJvbURhdGUgOiBEYXRlKSBcclxuICB7XHJcbiAgICBjb25zdCBjb3JyZWN0ZWREYXRlID0gbmV3IERhdGUoZnJvbURhdGUuZ2V0VGltZSgpICsgKGZyb21EYXRlLmdldFRpbWV6b25lT2Zmc2V0KCkgKjYwICoxMDAwKSk7XHJcbiAgICB2YXIgblRvdGFsRGlmZiA9IE1hdGgucm91bmQoKG5ldyBEYXRlKCkpLmdldFRpbWUoKSAvIDEwMDApIC0gKGNvcnJlY3RlZERhdGUuZ2V0VGltZSgpIC8gMTAwMCk7XHJcbiAgICBpZiAoblRvdGFsRGlmZiA+PSAwKSBcclxuICAgIHtcclxuICAgICAgdmFyIG9EaWZmIDogYW55ID0ge307XHJcbiAgICAgIG9EaWZmLmRheXMgPSBNYXRoLmZsb29yKG5Ub3RhbERpZmYgLyA4NjQwMCk7XHJcbiAgICAgIG5Ub3RhbERpZmYgLT0gb0RpZmYuZGF5cyAqIDg2NDAwO1xyXG4gICAgICBvRGlmZi5ob3VycyA9IE1hdGguZmxvb3IoblRvdGFsRGlmZiAvIDM2MDApO1xyXG4gICAgICBuVG90YWxEaWZmIC09IG9EaWZmLmhvdXJzICogMzYwMDtcclxuICAgICAgb0RpZmYubWludXRlcyA9IE1hdGguZmxvb3IoblRvdGFsRGlmZiAvIDYwKTtcclxuICAgICAgblRvdGFsRGlmZiAtPSBvRGlmZi5taW51dGVzICogNjA7XHJcbiAgICAgIG9EaWZmLnNlY29uZHMgPSBNYXRoLmZsb29yKG5Ub3RhbERpZmYpO1xyXG4gICAgICBcclxuICAgICAgdmFyIHJlc3VsdCA9IFwiXCI7XHJcbiAgICAgIGlmKG9EaWZmLmRheXMgPiAwKVxyXG4gICAgICB7XHJcbiAgICAgICAgICByZXN1bHQgKz0gb0RpZmYuZGF5cyArIFwiIGRheXNcIjtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYob0RpZmYuaG91cnMgPiAwKVxyXG4gICAgICB7XHJcbiAgICAgICAgaWYocmVzdWx0Lmxlbmd0aCA+IDApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgcmVzdWx0ICs9IFwiLCBcIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgICByZXN1bHQgKz0gb0RpZmYuaG91cnMgKyBcIiBob3Vyc1wiO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZihvRGlmZi5taW51dGVzID4gMClcclxuICAgICAge1xyXG4gICAgICAgIGlmKHJlc3VsdC5sZW5ndGggPiAwKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgIHJlc3VsdCArPSBcIiwgXCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICAgcmVzdWx0ICs9IG9EaWZmLm1pbnV0ZXMgKyBcIiBtaW51dGVzXCI7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmKG9EaWZmLnNlY29uZHMgPiAwKVxyXG4gICAgICB7XHJcbiAgICAgICAgaWYocmVzdWx0Lmxlbmd0aCA+IDApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgcmVzdWx0ICs9IFwiLCBcIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgICByZXN1bHQgKz0gb0RpZmYuc2Vjb25kcyArIFwiIHNlY29uZHNcIjtcclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH0gXHJcbiAgICBlbHNlIFxyXG4gICAge1xyXG4gICAgICByZXR1cm4gXCJcIjtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbm1hbnl3aG8uY29tcG9uZW50LnJlZ2lzdGVyKCdFbGFwc2VkVGltZUxpdmVMb25nJywgRWxhcHNlZFRpbWVMaXZlTG9uZyk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBFbGFwc2VkVGltZUxpdmVMb25nO1xyXG5cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL0VsYXBzZWRUaW1lTGl2ZUxvbmcudHN4IiwiZGVjbGFyZSB2YXIgbWFueXdobzogYW55O1xyXG5cclxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBUaW1lSGVscGVycywgaUVsYXBzZWQgfSBmcm9tICcuL0RhdGVUaW1lSGVscGVycyc7XHJcblxyXG5jbGFzcyBFbGFwc2VkVGltZUxpdmVTaG9ydCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxhbnksIGFueT4gXHJcbnsgICBcclxuXHJcbiAgdGltZXJJRCA9IC0xO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcm9wcyA6IGFueSlcclxuICB7XHJcbiAgICAgIHN1cGVyKHByb3BzKTtcclxuICB9XHJcblxyXG4gIGNvbXBvbmVudERpZE1vdW50KCkgXHJcbiAge1xyXG4gICAgICB0aGlzLmZvcmNlVXBkYXRlKCk7XHJcbiAgICAgIHRoaXMudGltZXJJRCA9IHdpbmRvdy5zZXRJbnRlcnZhbCh0aGlzLnRpbWVyRXZlbnQuYmluZCh0aGlzKSwgMTAwMCk7XHJcbiAgfVxyXG5cclxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpXHJcbiAge1xyXG4gICAgaWYodGhpcy50aW1lcklEID49IDApXHJcbiAgICB7XHJcbiAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy50aW1lcklEKTtcclxuICAgICAgdGhpcy50aW1lcklEID0gLTE7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB0aW1lckV2ZW50KClcclxuICB7XHJcbiAgICB0aGlzLmZvcmNlVXBkYXRlKCk7XHJcbiAgfVxyXG5cclxuXHRyZW5kZXIoKVxyXG5cdHtcclxuXHQgICBcclxuICAgICAgICBpZih0aGlzLnByb3BzLmNvbnRlbnRWYWx1ZSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHZhciBkdCA9IG5ldyBEYXRlKHRoaXMucHJvcHMuY29udGVudFZhbHVlKVxyXG4gICAgICAgICAgICB2YXIgZWxhcHNlZCA9IHRoaXMuZWxhcHNlZFRpbWUoZHQpO1xyXG4gICAgICAgICAgICByZXR1cm4gPHNwYW4+e2VsYXBzZWR9PC9zcGFuPjtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG4gIH1cclxuXHJcbiAgZWxhcHNlZFRpbWUgKGZyb21EYXRlIDogRGF0ZSkgXHJcbiAge1xyXG5cclxuICAgIGNvbnN0IGVsYXBzZWQgOiBpRWxhcHNlZCA9IFRpbWVIZWxwZXJzLmdldEVsYXBzZWQoZnJvbURhdGUsIG5ldyBEYXRlKCkpO1xyXG4gICAgICAgICAgXHJcbiAgICAgIHZhciByZXN1bHQgPSBcIlwiO1xyXG4gICAgICBpZihlbGFwc2VkLmRheXMgPiAwKVxyXG4gICAgICB7XHJcbiAgICAgICAgICByZXN1bHQgKz0gZWxhcHNlZC5kYXlzICsgXCJkXCI7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmKGVsYXBzZWQuaG91cnMgPiAwKVxyXG4gICAgICB7XHJcbiAgICAgICAgaWYocmVzdWx0Lmxlbmd0aCA+IDApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgcmVzdWx0ICs9IFwiL1wiO1xyXG4gICAgICAgIH1cclxuICAgICAgICAgIHJlc3VsdCArPSBlbGFwc2VkLmhvdXJzICsgXCJoXCI7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmKGVsYXBzZWQubWludXRlcyA+IDApXHJcbiAgICAgIHtcclxuICAgICAgICBpZihyZXN1bHQubGVuZ3RoID4gMClcclxuICAgICAgICB7XHJcbiAgICAgICAgICByZXN1bHQgKz0gXCIvXCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICAgcmVzdWx0ICs9IGVsYXBzZWQubWludXRlcyArIFwibVwiO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZihlbGFwc2VkLnNlY29uZHMgPiAwKVxyXG4gICAgICB7XHJcbiAgICAgICAgaWYocmVzdWx0Lmxlbmd0aCA+IDApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgcmVzdWx0ICs9IFwiL1wiO1xyXG4gICAgICAgIH1cclxuICAgICAgICAgIHJlc3VsdCArPSBlbGFwc2VkLnNlY29uZHMgKyBcInNcIjtcclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICB9XHJcbn1cclxuXHJcbm1hbnl3aG8uY29tcG9uZW50LnJlZ2lzdGVyKCdFbGFwc2VkVGltZUxpdmVTaG9ydCcsIEVsYXBzZWRUaW1lTGl2ZVNob3J0KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEVsYXBzZWRUaW1lTGl2ZVNob3J0O1xyXG5cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL0VsYXBzZWRUaW1lTGl2ZVNob3J0LnRzeCIsImV4cG9ydCBpbnRlcmZhY2UgaUVsYXBzZWRcclxue1xyXG4gICAgZGF5cyA6IG51bWJlcixcclxuICAgIGhvdXJzIDogbnVtYmVyLFxyXG4gICAgbWludXRlczogbnVtYmVyLFxyXG4gICAgc2Vjb25kczogbnVtYmVyXHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBUaW1lSGVscGVyc1xyXG57XHJcbiAgICBzdGF0aWMgZ2V0RWxhcHNlZChmcm9tRGF0ZSA6IERhdGUsIGxvY2FsRGF0ZSA6IERhdGUpIDogaUVsYXBzZWRcclxuICAgIHtcclxuICAgICAgICBsZXQgZWxhcHNlZCA6IGlFbGFwc2VkID0ge1xyXG4gICAgICAgICAgICBkYXlzOiAwLFxyXG4gICAgICAgICAgICBob3VyczogMCxcclxuICAgICAgICAgICAgbWludXRlczogMCxcclxuICAgICAgICAgICAgc2Vjb25kczogMFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgXHJcbiAgICAgICAgY29uc3QgZnJvbVVUQ09mZnNldCA9IGZyb21EYXRlLmdldFRpbWV6b25lT2Zmc2V0KCkgKiA2MDAwMDtcclxuICAgICAgICBjb25zdCBmcm9tVVRDIDogRGF0ZSA9IG5ldyBEYXRlKGZyb21EYXRlLmdldFRpbWUoKSAtIGZyb21VVENPZmZzZXQpO1xyXG4gICAgXHJcbiAgICAgICAgLy9jb252ZXJ0IGxvY2FsRGF0ZSB0byBVVENcclxuICAgICAgICBjb25zdCBub3dVVENPZmZzZXQgPSBsb2NhbERhdGUuZ2V0VGltZXpvbmVPZmZzZXQoKSAqIDYwMDAwO1xyXG4gICAgICAgIGNvbnN0IG5vd1VUQyA6IERhdGUgPSBuZXcgRGF0ZShsb2NhbERhdGUuZ2V0VGltZSgpIC0gbm93VVRDT2Zmc2V0KTtcclxuICAgIFxyXG4gICAgICAgIGxldCBkaWZmTWlsbGlzID0gTWF0aC5yb3VuZChsb2NhbERhdGUuZ2V0VGltZSgpIC0gZnJvbURhdGUuZ2V0VGltZSgpKTtcclxuXHJcbiAgICAgICAgXHJcbiAgICAgICAgZWxhcHNlZC5kYXlzID0gTWF0aC5mbG9vcihkaWZmTWlsbGlzIC8gODY0MDAwMDApO1xyXG4gICAgICAgIGRpZmZNaWxsaXMgLT0gZWxhcHNlZC5kYXlzICogODY0MDAwMDA7XHJcbiAgICAgICAgZWxhcHNlZC5ob3VycyA9IE1hdGguZmxvb3IoZGlmZk1pbGxpcyAvIDM2MDAwMDApO1xyXG4gICAgICAgIGRpZmZNaWxsaXMgLT0gZWxhcHNlZC5ob3VycyAqIDM2MDAwMDA7XHJcbiAgICAgICAgZWxhcHNlZC5taW51dGVzID0gTWF0aC5mbG9vcihkaWZmTWlsbGlzIC8gNjAwMDApO1xyXG4gICAgICAgIGRpZmZNaWxsaXMgLT0gZWxhcHNlZC5taW51dGVzICogNjAwMDA7XHJcbiAgICAgICAgZWxhcHNlZC5zZWNvbmRzID0gTWF0aC5mbG9vcihkaWZmTWlsbGlzIC8gMTAwMCk7XHJcbiAgICAgIFxyXG4gICAgICAgIHJldHVybiBlbGFwc2VkXHJcbiAgICB9XHJcblxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9EYXRlVGltZUhlbHBlcnMudHMiLCJkZWNsYXJlIHZhciBtYW55d2hvOiBhbnk7XHJcblxyXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5jbGFzcyBFbGFwc2VkVGltZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxhbnksIGFueT4gXHJcbnsgICBcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzIDogYW55KVxyXG5cdHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICB9XHJcblxyXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSBcclxuICAgIHtcclxuICAgICAgICB0aGlzLmZvcmNlVXBkYXRlKCk7XHJcbiAgICB9XHJcblxyXG5cdHJlbmRlcigpXHJcblx0e1xyXG5cdCAgIFxyXG4gICAgICAgIGlmKHRoaXMucHJvcHMuY29udGVudFZhbHVlKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdmFyIGR0ID0gbmV3IERhdGUodGhpcy5wcm9wcy5jb250ZW50VmFsdWUpXHJcbiAgICAgICAgICAgIHZhciBlbGFwc2VkID0gdGhpcy5lbGFwc2VkVGltZShkdCk7XHJcbiAgICAgICAgICAgIHJldHVybiA8c3Bhbj57ZWxhcHNlZH08L3NwYW4+O1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcbiAgfVxyXG5cclxuICBlbGFwc2VkVGltZSAoZnJvbURhdGUgOiBEYXRlKSBcclxuICB7XHJcbiAgICB2YXIgblRvdGFsRGlmZiA9IE1hdGgucm91bmQoKG5ldyBEYXRlKCkpLmdldFRpbWUoKSAvIDEwMDApIC0gKGZyb21EYXRlLmdldFRpbWUoKSAvIDEwMDApO1xyXG4gICAgaWYgKG5Ub3RhbERpZmYgPj0gMCkgXHJcbiAgICB7XHJcbiAgICAgIHZhciBvRGlmZiA6IGFueSA9IHt9O1xyXG4gICAgICBvRGlmZi5kYXlzID0gTWF0aC5mbG9vcihuVG90YWxEaWZmIC8gODY0MDApO1xyXG4gICAgICBuVG90YWxEaWZmIC09IG9EaWZmLmRheXMgKiA4NjQwMDtcclxuICAgICAgb0RpZmYuaG91cnMgPSBNYXRoLmZsb29yKG5Ub3RhbERpZmYgLyAzNjAwKTtcclxuICAgICAgblRvdGFsRGlmZiAtPSBvRGlmZi5ob3VycyAqIDM2MDA7XHJcbiAgICAgIG9EaWZmLm1pbnV0ZXMgPSBNYXRoLmZsb29yKG5Ub3RhbERpZmYgLyA2MCk7XHJcbiAgICAgIG5Ub3RhbERpZmYgLT0gb0RpZmYubWludXRlcyAqIDYwO1xyXG4gICAgICBvRGlmZi5zZWNvbmRzID0gTWF0aC5mbG9vcihuVG90YWxEaWZmKTtcclxuICAgICAgXHJcbiAgICAgIHZhciByZXN1bHQgPSBcIlwiO1xyXG4gICAgICBpZihvRGlmZi5kYXlzID4gMClcclxuICAgICAge1xyXG4gICAgICAgICAgcmVzdWx0ICs9IG9EaWZmLmRheXMgKyBcIiBkYXlzXCI7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmKG9EaWZmLmhvdXJzID4gMClcclxuICAgICAge1xyXG4gICAgICAgIGlmKHJlc3VsdC5sZW5ndGggPiAwKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgIHJlc3VsdCArPSBcIiwgXCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICAgcmVzdWx0ICs9IG9EaWZmLmhvdXJzICsgXCIgaG91cnNcIjtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYob0RpZmYubWludXRlcyA+IDApXHJcbiAgICAgIHtcclxuICAgICAgICBpZihyZXN1bHQubGVuZ3RoID4gMClcclxuICAgICAgICB7XHJcbiAgICAgICAgICByZXN1bHQgKz0gXCIsIFwiO1xyXG4gICAgICAgIH1cclxuICAgICAgICAgIHJlc3VsdCArPSBvRGlmZi5taW51dGVzICsgXCIgbWludXRlc1wiO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZihvRGlmZi5zZWNvbmRzID4gMClcclxuICAgICAge1xyXG4gICAgICAgIGlmKHJlc3VsdC5sZW5ndGggPiAwKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgIHJlc3VsdCArPSBcIiwgXCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICAgcmVzdWx0ICs9IG9EaWZmLnNlY29uZHMgKyBcIiBzZWNvbmRzXCI7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9IFxyXG4gICAgZWxzZSBcclxuICAgIHtcclxuICAgICAgcmV0dXJuIFwiXCI7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5tYW55d2hvLmNvbXBvbmVudC5yZWdpc3RlcignRWxhcHNlZFRpbWUnLCBFbGFwc2VkVGltZSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBFbGFwc2VkVGltZTtcclxuXHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9FbGFwc2VkVGltZS50c3giLCJkZWNsYXJlIHZhciBtYW55d2hvOiBhbnk7XHJcblxyXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5jbGFzcyBEYXRlRERNTU1ZWSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxhbnksIGFueT4gXHJcbnsgICBcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzIDogYW55KVxyXG5cdHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICB9XHJcblxyXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSBcclxuICAgIHtcclxuICAgICAgICB0aGlzLmZvcmNlVXBkYXRlKCk7XHJcbiAgICB9XHJcblxyXG5cdHJlbmRlcigpXHJcblx0e1xyXG5cdCAgIFxyXG4gICAgICAgIGlmKHRoaXMucHJvcHMuY29udGVudFZhbHVlKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgLy9mb3JtYXQgdGhlIGRhdGUgdXNpbmcgUmVhY3QgZm9ybWF0dGVyIGludG8gZHQgc3RyaW5nXHJcbiAgICAgICAgICAgIHZhciBkdCA9IG5ldyBJbnRsLkRhdGVUaW1lRm9ybWF0KCdlbi1HQicsIHsgICBcclxuICAgICAgICAgICAgICAgIHllYXI6ICdudW1lcmljJywgXHJcbiAgICAgICAgICAgICAgICBtb250aDogJ2xvbmcnLCBcclxuICAgICAgICAgICAgICAgIGRheTogJzItZGlnaXQnIFxyXG4gICAgICAgICAgICB9KS5mb3JtYXQobmV3IERhdGUodGhpcy5wcm9wcy5jb250ZW50VmFsdWUpKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHJldHVybiA8c3Bhbj57ZHR9PC9zcGFuPjtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5tYW55d2hvLmNvbXBvbmVudC5yZWdpc3RlcignRGF0ZURETU1NWVknLCBEYXRlRERNTU1ZWSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBEYXRlRERNTU1ZWTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvRGF0ZURETU1NWVkudHN4IiwiZGVjbGFyZSB2YXIgbWFueXdobzogYW55O1xyXG5cclxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuY2xhc3MgRGF0ZVRpbWVERE1NTVlZSEhNTSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxhbnksIGFueT4gXHJcbnsgICBcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzIDogYW55KVxyXG5cdHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICB9XHJcblxyXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSBcclxuICAgIHtcclxuICAgICAgICB0aGlzLmZvcmNlVXBkYXRlKCk7XHJcbiAgICB9XHJcblxyXG5cdHJlbmRlcigpXHJcblx0e1xyXG5cdCAgIFxyXG4gICAgICAgIGlmKHRoaXMucHJvcHMuY29udGVudFZhbHVlKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgLy9mb3JtYXQgdGhlIGRhdGUgdXNpbmcgUmVhY3QgZm9ybWF0dGVyIGludG8gZHQgc3RyaW5nXHJcbiAgICAgICAgICAgIHZhciBkdCA9IG5ldyBJbnRsLkRhdGVUaW1lRm9ybWF0KCdlbi1HQicsIHsgICBcclxuICAgICAgICAgICAgICAgIHllYXI6ICdudW1lcmljJywgXHJcbiAgICAgICAgICAgICAgICBtb250aDogJ2xvbmcnLCBcclxuICAgICAgICAgICAgICAgIGRheTogJzItZGlnaXQnLFxyXG4gICAgICAgICAgICAgICAgaG91cjogJzItZGlnaXQnLFxyXG4gICAgICAgICAgICAgICAgbWludXRlOiAnMi1kaWdpdCdcclxuICAgICAgICAgICAgfSkuZm9ybWF0KG5ldyBEYXRlKHRoaXMucHJvcHMuY29udGVudFZhbHVlKSk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICByZXR1cm4gPHNwYW4+e2R0fTwvc3Bhbj47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2VcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxubWFueXdoby5jb21wb25lbnQucmVnaXN0ZXIoJ0RhdGVUaW1lRERNTU1ZWUhITU0nLCBEYXRlVGltZURETU1NWVlISE1NKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IERhdGVUaW1lRERNTU1ZWUhITU07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL0RhdGVUaW1lRERNTU1ZWUhITU0udHN4IiwiZGVjbGFyZSB2YXIgbWFueXdobzogYW55O1xyXG5cclxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuY2xhc3MgQm9vbGVhbkljb24gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8YW55LCBhbnk+IFxyXG57ICAgXHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcyA6IGFueSlcclxuXHR7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbXBvbmVudERpZE1vdW50KCkgXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5mb3JjZVVwZGF0ZSgpO1xyXG4gICAgfVxyXG5cclxuXHRyZW5kZXIoKVxyXG5cdHtcclxuXHQgICB2YXIgY2xhc3NOYW1lIDogYW55ID0gXCJnbHlwaGljb24gZ2x5cGhpY29uLVwiO1xyXG4gICAgICAgIGlmKHRoaXMucHJvcHMuY29udGVudFZhbHVlID09PSBcInRydWVcIilcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZSArPSBcIm9rXCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2VcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZSArPSBcInJlbW92ZVwiO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIDxzcGFuIGNsYXNzTmFtZT17Y2xhc3NOYW1lfT48L3NwYW4+O1xyXG4gICAgfVxyXG59XHJcblxyXG5tYW55d2hvLmNvbXBvbmVudC5yZWdpc3RlcignQm9vbGVhbkljb24nLCBCb29sZWFuSWNvbik7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBCb29sZWFuSWNvbjtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvQm9vbGVhbkljb24udHN4IiwiZGVjbGFyZSB2YXIgbWFueXdobzogYW55O1xyXG5cclxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuY2xhc3MgU3RhdHVzSWNvbiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxhbnksIGFueT4gXHJcbnsgICBcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzIDogYW55KVxyXG5cdHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICB9XHJcblxyXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSBcclxuICAgIHtcclxuICAgICAgICB0aGlzLmZvcmNlVXBkYXRlKCk7XHJcbiAgICB9XHJcblxyXG5cdHJlbmRlcigpXHJcblx0e1xyXG4gICAgICAgIHZhciBjbGFzc05hbWUgOiBhbnkgPSBcImdseXBoaWNvbiBnbHlwaGljb24tXCI7XHJcbiAgICAgICAgdmFyIHRvb2x0aXAgOiBzdHJpbmcgPSBcIlwiO1xyXG4gICAgICAgIGxldCByZXN1bHQ6IGFueTtcclxuICAgICAgICBzd2l0Y2godGhpcy5wcm9wcy5jb250ZW50VmFsdWUudG9Mb3dlckNhc2UoKSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGNhc2UgXCJzXCI6XHJcbiAgICAgICAgICAgICAgICByZXN1bHQ9KFxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1wiZ2x5cGhpY29uIGdseXBoaWNvbi1ob3VyZ2xhc3NcIn0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPXtcIlN0YWdlZFwifVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICApO1xyXG5cclxuICAgICAgICAgICAgY2FzZSBcImNcIjpcclxuICAgICAgICAgICAgICAgIHJlc3VsdD0oXHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17XCJnbHlwaGljb24gZ2x5cGhpY29uLW9rXCJ9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT17XCJDb21wbGV0ZVwifVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlIFwiYVwiOlxyXG4gICAgICAgICAgICAgICAgcmVzdWx0PShcclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcImdseXBoaWNvbiBnbHlwaGljb24tZmxhc2hcIn0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPXtcIkFjdGl2ZVwifVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlIFwiY29tcGxldGVcIjogXHJcbiAgICAgICAgICAgICAgICByZXN1bHQ9KFxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWcgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRjZi1pbWFnZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNyYz1cImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQW9BQUFBS0NBWUFBQUNOTXMrOUFBQUFkMGxFUVZSNDJtTmdnQUtsTUlZR3BWQ0cveWdZS01hQURHQVNCa1VzLzEzbWNJRXhpQTBUUnpISmFRWW5WZ3czR2NUUXkyUCtieitKQXlzR3lZRk5CUkhXWGV4NE1WeWhlVE1yWGd4WHFKbksrTis0bWhrckJzbEJGRUk5bzEvTWhCV2pCQk1zR05UaUdmN3I1REtDTVlpTkVqekVCamdBVThxSzdTdTFuWXdBQUFBQVNVVk9SSzVDWUlJPVwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIkNvbXBsZXRlXCJcclxuICAgICAgICAgICAgICAgICAgICAvPik7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlIFwiZXJyb3JcIjogXHJcbiAgICAgICAgICAgICAgICByZXN1bHQ9KFxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWcgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRjZi1pbWFnZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNyYz1cImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQW9BQUFBS0NBWUFBQUNOTXMrOUFBQUFaMGxFUVZSNDJtTmdnSUlDR1ltR3pWd00vNUV4U0l3QkdjQWtYaWx6b0dDWU9JcEp6eFRac1dLNHlTREdZd1YydkJoc0tvaTRKOGNHeHVnQUpnNVhlRXVHRll6UkFVd2NydkNxSkN0ZURGWUk4OHg1Y1Jhc0dDV1lZTUZ3UklnSkJhTUVEN0VCRGdDUWlyREZTQk5rSkFBQUFBQkpSVTVFcmtKZ2dnPT1cIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJDb21wbGV0ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgLz4pO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIHJlc3VsdD0oXHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17XCJnbHlwaGljb24gZ2x5cGhpY29uLW9wdGlvbi1ob3Jpem9udGFsXCJ9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT17XCJOb3QgU2V0XCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICByZXR1cm4gcmVzdWx0OztcclxuICAgIH1cclxufVxyXG5cclxubWFueXdoby5jb21wb25lbnQucmVnaXN0ZXIoJ1N0YXR1c0ljb24nLCBTdGF0dXNJY29uKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFN0YXR1c0ljb247XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL1N0YXR1c0ljb24udHN4IiwiZGVjbGFyZSB2YXIgbWFueXdobzogYW55O1xyXG5cclxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgKiBhcyBSZWFjdERvbSBmcm9tICdyZWFjdC1kb20nO1xyXG5cclxuXHJcbi8vdGhlIGNvbnRlbnRWYWx1ZSB3aWxsIGhhdmUgdGhlIGxvb2t1cCB2YWx1ZVxyXG4vL1xyXG5jbGFzcyBMb29rdXBWYWx1ZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxhbnksIGFueT4gXHJcbnsgIFxyXG4gICAgLy9teVJlZiA6IGFueTsgXHJcbiAgICAvL3BhcmVudElkIDogYW55O1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMgOiBhbnkpXHJcblx0e1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgICAgICAvL3RoaXMubXlSZWYgPSBSZWFjdC5jcmVhdGVSZWYoKTtcclxuICAgIH1cclxuXHJcbiAgICBjb21wb25lbnREaWRNb3VudCgpIFxyXG4gICAge1xyXG4gICAgICAgIC8vdmFyIG1lID0gUmVhY3REb20uZmluZERPTU5vZGUodGhpcyk7XHJcbiAgICAgICAgLy92YXIgcGFyZW50VGFibGUgPSAkKHRoaXMubXlSZWYuY3VycmVudCkuY2xvc2VzdCgndGFibGUnKS5hdHRyKCdpZCcpO1xyXG4gICAgICAgIHRoaXMuZm9yY2VVcGRhdGUoKTtcclxuICAgICAgICAvL3RoaXMucGFyZW50SWQgPSAkKHRoaXMucmVmcy5tZSkuY2xvc2VzdCgndGFibGUnKS5hdHRyKCdpZCcpXHJcbiAgICB9XHJcblxyXG4gICAgZ2V0QXR0cmlidXRlVmFsdWUoYXR0cmlidXRlcyA6IGFueSwgYXR0cmlidXRlUHJlZml4IDogc3RyaW5nLCAgY29sdW1uSWQgOiBzdHJpbmcpXHJcbiAgICB7XHJcbiAgICAgICAgZm9yKHZhciBrZXkgaW4gYXR0cmlidXRlcylcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlmKGtleSA9PT0gYXR0cmlidXRlUHJlZml4ICsgXCJfXCIgKyBjb2x1bW5JZClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGF0dHJpYnV0ZXNba2V5XTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBnZXRWYWx1ZUZyb21MaXN0KGxpc3QgOiBhbnkgLCBrZXlBdHRyaWJ1dGUgOiBzdHJpbmcgLCByZXN1bHRBdHRyaWJ1dGUgOiBzdHJpbmcsIGtleSA6IHN0cmluZylcclxuICAgIHtcclxuICAgICAgICB2YXIgdmFsIDogc3RyaW5nID0gXCJcIjtcclxuICAgICAgICB2YXIgaGl0IDogYm9vbGVhbiA9IGZhbHNlXHJcblxyXG4gICAgICAgIGZvcih2YXIgaVBvcyA9IDAgOyBpUG9zIDwgbGlzdC5sZW5ndGggOyBpUG9zICsrKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdmFsPVwiXCI7XHJcbiAgICAgICAgICAgIHZhciBpdGVtID0gbGlzdFtpUG9zXTtcclxuXHJcbiAgICAgICAgICAgIGZvcih2YXIgcFBvcyA9IDAgOyBwUG9zIDwgaXRlbS5wcm9wZXJ0aWVzLmxlbmd0aCA7IHBQb3MrKylcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdmFyIHByb3AgPSBpdGVtLnByb3BlcnRpZXNbcFBvc107XHJcbiAgICAgICAgICAgICAgICBpZihwcm9wLmRldmVsb3Blck5hbWUgPT09IHJlc3VsdEF0dHJpYnV0ZSlcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB2YWwgPSBwcm9wLmNvbnRlbnRWYWx1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmKHByb3AuZGV2ZWxvcGVyTmFtZSA9PT0ga2V5QXR0cmlidXRlKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKHByb3AuY29udGVudFZhbHVlPT09a2V5KVxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGl0PXRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmKGhpdD09PXRydWUpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB2YWw7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gXCJcIjtcclxuICAgIH1cclxuXHJcblx0cmVuZGVyKClcclxuXHR7XHJcbiAgICAgICAgdmFyIG1lID0gUmVhY3REb20uZmluZERPTU5vZGUodGhpcyk7XHJcbiAgICAgICAgdmFyIGxhYmVsIDogc3RyaW5nID0gXCJcIjtcclxuICAgICAgICBpZih0aGlzLnByb3BzLmNvbnRlbnRWYWx1ZSAmJiBtZSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIC8vaXRlcmF0ZSB1cCBsb29raW5nIGZvciB0aGUgZWxlbWVudCB3aXRoIGNsYXNzIC50YWJsZS1jb250YWluZXIsIGl0IHdpbGwgaGF2ZSB0aGUgdGFibGUncyBpZCB2YWx1ZSBvbiBpdFxyXG4gICAgICAgICAgICB2YXIgbWF4TGV2ZWxzID0gMTA7XHJcbiAgICAgICAgICAgIHZhciBwYXJlbnQgOiBIVE1MRWxlbWVudCA9IG1lLnBhcmVudEVsZW1lbnQ7XHJcbiAgICAgICAgICAgIHdoaWxlKCFwYXJlbnQuY2xhc3NMaXN0LmNvbnRhaW5zKFwidGFibGUtY29udGFpbmVyXCIpIHx8IG1heExldmVscyA9PSAwKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBwYXJlbnQ9cGFyZW50LnBhcmVudEVsZW1lbnQ7XHJcbiAgICAgICAgICAgICAgICBtYXhMZXZlbHMtLTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYobWF4TGV2ZWxzPT0wKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJcIjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB2YXIgY29tcG9uZW50SWQgPSBwYXJlbnQuYXR0cmlidXRlcy5nZXROYW1lZEl0ZW0oJ2lkJykudmFsdWU7XHJcbiAgICAgICAgICAgIHZhciB0YWJsZSA9IG1hbnl3aG8ubW9kZWwuZ2V0Q29tcG9uZW50KGNvbXBvbmVudElkLHRoaXMucHJvcHMuZmxvd0tleSk7XHJcblxyXG4gICAgICAgICAgICB2YXIgcHJvcGVydHlJZCA9IHRoaXMucHJvcHMucHJvcGVydHlJZDtcclxuXHJcbiAgICAgICAgICAgIHZhciBsaXN0Q29tcG9uZW50TmFtZSA9IHRoaXMuZ2V0QXR0cmlidXRlVmFsdWUodGFibGUuYXR0cmlidXRlcywgXCJMb29rdXBMaXN0Q29tcG9uZW50XCIsIHByb3BlcnR5SWQpO1xyXG4gICAgICAgICAgICB2YXIgbGlzdEtleUF0cmlidXRlID0gdGhpcy5nZXRBdHRyaWJ1dGVWYWx1ZSh0YWJsZS5hdHRyaWJ1dGVzLCBcIkxvb2t1cExpc3RLZXlBdHRyaWJ1dGVcIiwgcHJvcGVydHlJZCk7XHJcbiAgICAgICAgICAgIHZhciBsaXN0UmVzdWx0QXR0cmlidXRlID0gdGhpcy5nZXRBdHRyaWJ1dGVWYWx1ZSh0YWJsZS5hdHRyaWJ1dGVzLCBcIkxvb2t1cExpc3RSZXN1bHRBdHRyaWJ1dGVcIiwgcHJvcGVydHlJZCk7XHJcblxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgaWYobGlzdENvbXBvbmVudE5hbWUpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHZhciBsaXN0ID0gbWFueXdoby5tb2RlbC5nZXRDb21wb25lbnRCeU5hbWUobGlzdENvbXBvbmVudE5hbWUsICAgdGhpcy5wcm9wcy5mbG93S2V5KVxyXG4gICAgICAgICAgICAgICAgaWYobGlzdClcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBsYWJlbCA9IHRoaXMuZ2V0VmFsdWVGcm9tTGlzdChsaXN0Lm9iamVjdERhdGEsIGxpc3RLZXlBdHJpYnV0ZSwgbGlzdFJlc3VsdEF0dHJpYnV0ZSwgdGhpcy5wcm9wcy5jb250ZW50VmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gPHNwYW4+e2xhYmVsfTwvc3Bhbj47XHJcbiAgICB9XHJcbn1cclxuXHJcbm1hbnl3aG8uY29tcG9uZW50LnJlZ2lzdGVyKCdMb29rdXBWYWx1ZScsIExvb2t1cFZhbHVlKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IExvb2t1cFZhbHVlO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9Mb29rdXBWYWx1ZS50c3giLCJkZWNsYXJlIHZhciBtYW55d2hvOiBhbnk7XHJcblxyXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5jbGFzcyBFcG9jaERhdGVERE1NTVlZIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PGFueSwgYW55PiBcclxueyAgIFxyXG4gICAgY29uc3RydWN0b3IocHJvcHMgOiBhbnkpXHJcblx0e1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgIH1cclxuXHJcbiAgICBjb21wb25lbnREaWRNb3VudCgpIFxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuZm9yY2VVcGRhdGUoKTtcclxuICAgIH1cclxuXHJcblx0cmVuZGVyKClcclxuXHR7XHJcblx0ICAgXHJcbiAgICAgICAgaWYodGhpcy5wcm9wcy5jb250ZW50VmFsdWUpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB2YXIgc2VjdmFsID0gdGhpcy5wcm9wcy5jb250ZW50VmFsdWU7XHJcbiAgICAgICAgICAgIHZhciBzZWNvbmRzIDogbnVtYmVyPSBOdW1iZXIucGFyc2VJbnQodGhpcy5wcm9wcy5jb250ZW50VmFsdWUpO1xyXG5cclxuICAgICAgICAgICAgLy9oYW5kbGUgamF2YSBlcG9jaCB3aXRoIGRlY2ltYWwgcG9pbnRcclxuICAgICAgICAgICAgaWYoc2VjdmFsLmluZGV4T2YoXCIuXCIpPj0wKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBzZWNvbmRzID0gc2Vjb25kcyAqIDEwMDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHZhciBlZCA6IERhdGUgPSBuZXcgRGF0ZShzZWNvbmRzKTtcclxuXHJcbiAgICAgICAgICAgIC8vZm9ybWF0IHRoZSBkYXRlIHVzaW5nIFJlYWN0IGZvcm1hdHRlciBpbnRvIGR0IHN0cmluZ1xyXG4gICAgICAgICAgICB2YXIgZHQgPSBuZXcgSW50bC5EYXRlVGltZUZvcm1hdCgnZW4tR0InLCB7ICAgXHJcbiAgICAgICAgICAgICAgICB5ZWFyOiAnbnVtZXJpYycsIFxyXG4gICAgICAgICAgICAgICAgbW9udGg6ICdsb25nJywgXHJcbiAgICAgICAgICAgICAgICBkYXk6ICcyLWRpZ2l0J1xyXG4gICAgICAgICAgICB9KS5mb3JtYXQoZWQpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgcmV0dXJuIDxzcGFuPntkdH08L3NwYW4+O1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbm1hbnl3aG8uY29tcG9uZW50LnJlZ2lzdGVyKCdFcG9jaERhdGVERE1NTVlZJywgRXBvY2hEYXRlRERNTU1ZWSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBFcG9jaERhdGVERE1NTVlZO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9FcG9jaERhdGVERE1NTVlZLnRzeCIsImRlY2xhcmUgdmFyIG1hbnl3aG86IGFueTtcclxuXHJcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbmNsYXNzIEVwb2NoRGF0ZVRpbWVERE1NTVlZSEhNTSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxhbnksIGFueT4gXHJcbnsgICBcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzIDogYW55KVxyXG5cdHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICB9XHJcblxyXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSBcclxuICAgIHtcclxuICAgICAgICB0aGlzLmZvcmNlVXBkYXRlKCk7XHJcbiAgICB9XHJcblxyXG5cdHJlbmRlcigpXHJcblx0e1xyXG5cdCAgIFxyXG4gICAgICAgIGlmKHRoaXMucHJvcHMuY29udGVudFZhbHVlKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdmFyIHNlY3ZhbCA9IHRoaXMucHJvcHMuY29udGVudFZhbHVlO1xyXG4gICAgICAgICAgICB2YXIgc2Vjb25kcyA6IG51bWJlcj0gTnVtYmVyLnBhcnNlSW50KHRoaXMucHJvcHMuY29udGVudFZhbHVlKTtcclxuXHJcbiAgICAgICAgICAgIC8vaGFuZGxlIGphdmEgZXBvY2ggd2l0aCBkZWNpbWFsIHBvaW50XHJcbiAgICAgICAgICAgIGlmKHNlY3ZhbC5pbmRleE9mKFwiLlwiKT49MClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgc2Vjb25kcyA9IHNlY29uZHMgKiAxMDAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB2YXIgZWQgOiBEYXRlID0gbmV3IERhdGUoc2Vjb25kcyk7XHJcbiAgICAgICAgICAgIC8vZm9ybWF0IHRoZSBkYXRlIHVzaW5nIFJlYWN0IGZvcm1hdHRlciBpbnRvIGR0IHN0cmluZ1xyXG4gICAgICAgICAgICB2YXIgZHQgPSBuZXcgSW50bC5EYXRlVGltZUZvcm1hdCgnZW4tR0InLCB7ICAgXHJcbiAgICAgICAgICAgICAgICB5ZWFyOiAnbnVtZXJpYycsIFxyXG4gICAgICAgICAgICAgICAgbW9udGg6ICdsb25nJywgXHJcbiAgICAgICAgICAgICAgICBkYXk6ICcyLWRpZ2l0JyxcclxuICAgICAgICAgICAgICAgIGhvdXI6ICcyLWRpZ2l0JyxcclxuICAgICAgICAgICAgICAgIG1pbnV0ZTogJzItZGlnaXQnXHJcbiAgICAgICAgICAgIH0pLmZvcm1hdChlZCk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICByZXR1cm4gPHNwYW4+e2R0fTwvc3Bhbj47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2VcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxubWFueXdoby5jb21wb25lbnQucmVnaXN0ZXIoJ0Vwb2NoRGF0ZVRpbWVERE1NTVlZSEhNTScsIEVwb2NoRGF0ZVRpbWVERE1NTVlZSEhNTSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBFcG9jaERhdGVUaW1lRERNTU1ZWUhITU07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL0Vwb2NoRGF0ZVRpbWVERE1NTVlZSEhNTS50c3giLCJkZWNsYXJlIHZhciBtYW55d2hvOiBhbnk7XHJcblxyXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5jbGFzcyBQZXJjZW50UHJvZ3Jlc3NCYXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8YW55LCBhbnk+IFxyXG57ICAgXHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcyA6IGFueSlcclxuXHR7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbXBvbmVudERpZE1vdW50KCkgXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5mb3JjZVVwZGF0ZSgpO1xyXG4gICAgfVxyXG5cclxuXHRyZW5kZXIoKVxyXG5cdHtcclxuICAgICAgICB2YXIgY2xhc3NOYW1lIDogYW55ID0gXCJnbHlwaGljb24gZ2x5cGhpY29uLVwiO1xyXG4gICAgICAgIHZhciB0b29sdGlwIDogc3RyaW5nID0gXCJcIjtcclxuXHJcbiAgICAgICAgdmFyIHZhbHVlID0gcGFyc2VJbnQodGhpcy5wcm9wcy5jb250ZW50VmFsdWUpIHx8IDA7XHJcbiAgICAgICAgdmFyIGRpc3BsYXlWYWx1ZSA9IHZhbHVlICsgXCIlXCI7XHJcblxyXG4gICAgICAgIHZhciB0b29sdGlwIDogc3RyaW5nID0gdmFsdWUgKyBcIiVcIjtcclxuICAgICAgICBcclxuICAgICAgICB2YXIgb3V0ZXJTdHlsZSA6IFJlYWN0LkNTU1Byb3BlcnRpZXMgPSB7XHJcbiAgICAgICAgICAgICAgICBib3JkZXIgOiBcIjJweCBzb2xpZCAjYWRhZGFkXCIsXHJcbiAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6XCI1cHhcIixcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjpcIiNlM2UzZTNcIixcclxuICAgICAgICAgICAgICAgIGhlaWdodDpcIjMwcHhcIixcclxuICAgICAgICAgICAgICAgIGJveFNpemluZzogXCJjb250ZW50LWJveFwiLFxyXG4gICAgICAgICAgICAgICAgcG9zaXRpb24gOiBcInJlbGF0aXZlXCIgYXMgXCJyZWxhdGl2ZVwiLFxyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogXCJncmlkXCIsXHJcbiAgICAgICAgICAgICAgICBhbGlnbkNvbnRlbnQ6ICdtaWRkbGUnLFxyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAnMCAhaW1wb3J0YW50J1xyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICB2YXIgYmFyU3R5bGUgOiBSZWFjdC5DU1NQcm9wZXJ0aWVzID0ge1xyXG4gICAgICAgICAgICBib3JkZXI6IFwibm9uZVwiLFxyXG4gICAgICAgICAgICBib3JkZXJSYWRpdXM6XCI0cHhcIixcclxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOlwiIzdEOUFDRlwiLFxyXG4gICAgICAgICAgICB3aWR0aDogZGlzcGxheVZhbHVlLFxyXG4gICAgICAgICAgICB0ZXh0QWxpZ24gOiBcImNlbnRlclwiICxcclxuICAgICAgICAgICAgaGVpZ2h0OiBcIjEwMCVcIixcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgdmFyIGNhcHRpb25TdHlsZSA6IFJlYWN0LkNTU1Byb3BlcnRpZXMgPSB7XHJcbiAgICAgICAgICAgIGZvbnRGYW1pbHkgOiBcInRhaG9tYVwiLFxyXG4gICAgICAgICAgICBjb2xvciA6IFwiI2ZmZmZmZlwiLFxyXG4gICAgICAgICAgICBmb250U2l6ZSA6IFwiMTBwdFwiLFxyXG4gICAgICAgICAgICB3aWR0aCA6IFwiMTAwJVwiLFxyXG4gICAgICAgICAgICB0ZXh0QWxpZ24gOiBcImNlbnRlclwiLFxyXG4gICAgICAgICAgICBwb3NpdGlvbiA6IFwiYWJzb2x1dGVcIiBhcyBcImFic29sdXRlXCIsXHJcbiAgICAgICAgICAgIGhlaWdodDogXCIxMDAlXCIsXHJcbiAgICAgICAgICAgIHZlcnRpY2FsQWxpZ246IFwibWlkZGxlXCIsXHJcbiAgICAgICAgICAgIGxpbmVIZWlnaHQ6IFwiMjAwJVwiLFxyXG4gICAgICAgICAgICBtaXhCbGVuZE1vZGU6IFwiZGlmZmVyZW5jZVwiLFxyXG4gICAgICAgICAgICBsZWZ0OiAwXHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgIHZhciBtYXggPSAxMDA7XHJcbiAgICAgICAgdmFyIG1pbiA9IDA7XHJcbiAgICAgICAgdmFyIHBvcyA9IDYwO1xyXG5cclxuICAgICAgICByZXR1cm4gIDxkaXYgc3R5bGU9e291dGVyU3R5bGV9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgcm9sZT1cInByb2dyZXNzYmFyXCIgYXJpYS12YWx1ZW5vdz17cG9zfSBhcmlhLXZhbHVlbWluPXttaW59IGFyaWEtdmFsdWVtYXg9e21heH0gc3R5bGU9e2JhclN0eWxlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e2NhcHRpb25TdHlsZX0+e2Rpc3BsYXlWYWx1ZX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+ICAgICBcclxuICAgICAgICAgICAgICAgIDwvZGl2PiBcclxuXHJcbiAgICB9XHJcbn1cclxuXHJcbi8vPFRvb2x0aXAgYm9yZGVyPVwiI2ZmZmZmZlwiIHJhZGl1cz1cIjVcIiBwbGFjZW1lbnQ9XCJyaWdodFwiIGNvbnRlbnQ9e3Rvb2x0aXB9PjwvVG9vbHRpcD5cclxuXHJcbm1hbnl3aG8uY29tcG9uZW50LnJlZ2lzdGVyKCdQZXJjZW50UHJvZ3Jlc3NCYXInLCBQZXJjZW50UHJvZ3Jlc3NCYXIpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUGVyY2VudFByb2dyZXNzQmFyO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9QZXJjZW50UHJvZ3Jlc3NCYXIudHN4IiwiZGVjbGFyZSB2YXIgbWFueXdobzogYW55O1xyXG5cclxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuY2xhc3MgSHlwZXJsaW5rIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PGFueSwgYW55PiBcclxueyAgIFxyXG4gICAgY29uc3RydWN0b3IocHJvcHMgOiBhbnkpXHJcblx0e1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgIH1cclxuXHJcbiAgICBjb21wb25lbnREaWRNb3VudCgpIFxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuZm9yY2VVcGRhdGUoKTtcclxuICAgIH1cclxuXHJcblx0cmVuZGVyKClcclxuXHR7XHJcbiAgICAgICAgdmFyIHRvb2x0aXAgOiBzdHJpbmcgPSBcIlwiO1xyXG5cclxuICAgICAgICB2YXIgdmFsdWUgPSB0aGlzLnByb3BzLmNvbnRlbnRWYWx1ZSB8fCBcIlwiO1xyXG4gICAgICAgIHZhciBkaXNwbGF5VmFsdWUgPSB2YWx1ZSArIFwiJVwiO1xyXG5cclxuICAgICAgICB2YXIgdG9vbHRpcCA6IHN0cmluZyA9IHZhbHVlICsgXCIlXCI7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdmFyIGxpbmtTdHlsZSA9IHtcclxuICAgICAgICAgICAgICAgIFwiZm9udC1mYW1pbHlcIiA6IFwidGFob21hXCIsXHJcbiAgICAgICAgICAgICAgICBcImNvbG9yXCIgOiBcIiNmZmZmZmZcIixcclxuICAgICAgICAgICAgICAgIFwiZm9udC1zaXplXCIgOiBcIjEwcHRcIixcclxuICAgICAgICAgICAgICAgIFwid2lkdGhcIiA6IFwiMTAwJVwiLFxyXG4gICAgICAgICAgICAgICAgXCJ0ZXh0LWFsaWduXCIgOiBcImNlbnRlclwiLFxyXG4gICAgICAgICAgICAgICAgXCJwb3NpdGlvblwiIDogXCJhYnNvbHV0ZVwiIGFzIFwiYWJzb2x1dGVcIixcclxuICAgICAgICAgICAgICAgIFwiaGVpZ2h0XCI6IFwiMTAwJVwiLFxyXG4gICAgICAgICAgICAgICAgXCJ2ZXJ0aWNhbC1hbGlnblwiOiBcIm1pZGRsZVwiLFxyXG4gICAgICAgICAgICAgICAgXCJsaW5lLWhlaWdodFwiOiBcIjIwMCVcIixcclxuICAgICAgICAgICAgICAgIFwibWl4LWJsZW5kLW1vZGVcIjogXCJkaWZmZXJlbmNlXCIsXHJcblxyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICB2YXIgbWF4ID0gMTAwO1xyXG4gICAgICAgIHZhciBtaW4gPSAwO1xyXG4gICAgICAgIHZhciBwb3MgPSA2MDtcclxuXHJcbiAgICAgICAgcmV0dXJuICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9e3ZhbHVlfSB0YXJnZXQ9XCJfYmxhbmtcIj57dmFsdWV9PC9hPiAgICBcclxuICAgICAgICAgICAgICAgIDwvZGl2PiAgXHJcbiAgICB9XHJcbn1cclxuXHJcbi8vPFRvb2x0aXAgYm9yZGVyPVwiI2ZmZmZmZlwiIHJhZGl1cz1cIjVcIiBwbGFjZW1lbnQ9XCJyaWdodFwiIGNvbnRlbnQ9e3Rvb2x0aXB9PjwvVG9vbHRpcD5cclxuXHJcbm1hbnl3aG8uY29tcG9uZW50LnJlZ2lzdGVyKCdIeXBlcmxpbmsnLCBIeXBlcmxpbmspO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSHlwZXJsaW5rO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9IeXBlcmxpbmsudHN4IiwiZGVjbGFyZSB2YXIgbWFueXdobzogYW55O1xyXG5cclxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgKiBhcyBSZWFjdERvbSBmcm9tICdyZWFjdC1kb20nO1xyXG5cclxuY2xhc3MgVGh1bWJuYWlsIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PGFueSwgYW55PiBcclxueyAgIFxyXG4gICAgY29uc3RydWN0b3IocHJvcHMgOiBhbnkpXHJcblx0e1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgIH1cclxuXHJcbiAgICBjb21wb25lbnREaWRNb3VudCgpIFxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuZm9yY2VVcGRhdGUoKTtcclxuICAgIH1cclxuXHJcblx0cmVuZGVyKClcclxuXHR7XHJcblxyXG4gICAgICAgIHZhciBtZSA9IFJlYWN0RG9tLmZpbmRET01Ob2RlKHRoaXMpO1xyXG4gICAgICAgIHZhciBjb250ZW50VmFsdWUgOiBzdHJpbmc7XHJcbiAgICAgICAgdmFyIHdpZHRoIDogbnVtYmVyO1xyXG4gICAgICAgIGlmKG1lKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdmFyIHBhcmVudCA6IEhUTUxFbGVtZW50ID0gbWUucGFyZW50RWxlbWVudDtcclxuICAgICAgICAgICAgdmFyIG1heExldmVscyA9IDEwO1xyXG4gICAgICAgICAgICB3aGlsZSghcGFyZW50LmNsYXNzTGlzdC5jb250YWlucyhcInRhYmxlLWNvbnRhaW5lclwiKSB8fCBtYXhMZXZlbHMgPT0gMClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcGFyZW50PXBhcmVudC5wYXJlbnRFbGVtZW50O1xyXG4gICAgICAgICAgICAgICAgbWF4TGV2ZWxzLS07XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmKG1heExldmVscz09MClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiXCI7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHZhciBjb21wb25lbnRJZCA9IHBhcmVudC5hdHRyaWJ1dGVzLmdldE5hbWVkSXRlbSgnaWQnKS52YWx1ZTtcclxuICAgICAgICAgICAgdmFyIHRhYmxlID0gbWFueXdoby5tb2RlbC5nZXRDb21wb25lbnQoY29tcG9uZW50SWQsdGhpcy5wcm9wcy5mbG93S2V5KTtcclxuXHJcbiAgICAgICAgICAgIHZhciBwcm9wZXJ0eUlkID0gdGhpcy5wcm9wcy5wcm9wZXJ0eUlkO1xyXG5cclxuICAgICAgICAgICAgY29udGVudFZhbHVlID0gdGhpcy5wcm9wcy5jb250ZW50VmFsdWUgfHwgXCJcIjtcclxuXHJcbiAgICAgICAgICAgIHdpZHRoID0gdGFibGUuYXR0cmlidXRlc1tcImltYWdlLXNjYWxlZC13aWR0aFwiXSB8fCA1MDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZhciBvdXRlclN0eWxlIDogUmVhY3QuQ1NTUHJvcGVydGllcyA9IHtcclxuICAgICAgICAgICAgYm94U2l6aW5nOiBcImNvbnRlbnQtYm94XCIsXHJcbiAgICAgICAgICAgIHBvc2l0aW9uIDogXCJyZWxhdGl2ZVwiIGFzIFwicmVsYXRpdmVcIixcclxuICAgICAgICAgICAgZGlzcGxheTogXCJncmlkXCIsXHJcbiAgICAgICAgICAgIGFsaWduQ29udGVudDogJ21pZGRsZScsXHJcbiAgICAgICAgICAgIG1hcmdpbjogJzAgIWltcG9ydGFudCdcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBpZihjb250ZW50VmFsdWUpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBsZXQgc3JjPVwiXCI7XHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXtvdXRlclN0eWxlfT5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17Y29udGVudFZhbHVlfSB3aWR0aD17d2lkdGh9IHN0eWxlPXt7bWFyZ2luTGVmdDogJ2F1dG8nLCBtYXJnaW5SaWdodDogJ2F1dG8nfX0vPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2PjwvZGl2PlxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxubWFueXdoby5jb21wb25lbnQucmVnaXN0ZXIoJ1RodW1ibmFpbCcsIFRodW1ibmFpbCk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUaHVtYm5haWw7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL1RodW1ibmFpbC50c3giLCJkZWNsYXJlIHZhciBtYW55d2hvOiBhbnk7XHJcblxyXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5jbGFzcyBEb2xsYXJWYWx1ZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxhbnksIGFueT4gXHJcbnsgICBcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzIDogYW55KVxyXG5cdHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICB9XHJcblxyXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSBcclxuICAgIHtcclxuICAgICAgICB0aGlzLmZvcmNlVXBkYXRlKCk7XHJcbiAgICB9XHJcblxyXG5cdHJlbmRlcigpXHJcblx0e1xyXG4gICAgICAgIGNvbnN0IHZhbHVlOiBudW1iZXIgPSB0aGlzLnByb3BzLmNvbnRlbnRWYWx1ZTtcclxuICAgICAgICBjb25zdCBkaXNwbGF5OiBzdHJpbmcgPSBcIiRcIiArIHZhbHVlO1xyXG4gICAgICAgIHJldHVybiA8c3Bhbj57ZGlzcGxheX08L3NwYW4+O1xyXG4gICAgfVxyXG59XHJcblxyXG5tYW55d2hvLmNvbXBvbmVudC5yZWdpc3RlcignRG9sbGFyVmFsdWUnLCBEb2xsYXJWYWx1ZSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBEb2xsYXJWYWx1ZTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvRG9sbGFyVmFsdWUudHN4IiwiZGVjbGFyZSB2YXIgbWFueXdobzogYW55O1xyXG5cclxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgKiBhcyBSZWFjdERvbSBmcm9tICdyZWFjdC1kb20nO1xyXG5cclxuY2xhc3MgVGFibGVSb3dTdHlsZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8YW55LCBhbnk+IFxyXG57ICAgXHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcyA6IGFueSlcclxuXHR7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgICAgIHRoaXMuZ2V0UGFyZW50VGFibGVFbGVtZW50ID0gdGhpcy5nZXRQYXJlbnRUYWJsZUVsZW1lbnQuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLmdldFBhcmVudFRhYmxlQ29tcG9uZW50SWQgPSB0aGlzLmdldFBhcmVudFRhYmxlQ29tcG9uZW50SWQuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLmdldFBhcmVudFJvd0VsZW1lbnQgPSB0aGlzLmdldFBhcmVudFJvd0VsZW1lbnQuYmluZCh0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBjb21wb25lbnREaWRNb3VudCgpIFxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuZm9yY2VVcGRhdGUoKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRBdHRyaWJ1dGVWYWx1ZShhdHRyaWJ1dGVzIDogYW55LCBhdHRyaWJ1dGVOYW1lIDogc3RyaW5nICkgOiBhbnlcclxuICAgIHtcclxuICAgICAgICBmb3IodmFyIGtleSBpbiBhdHRyaWJ1dGVzKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWYoa2V5ID09PSBhdHRyaWJ1dGVOYW1lKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gYXR0cmlidXRlc1trZXldO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG5cclxuXHRyZW5kZXIoKVxyXG5cdHtcclxuICAgICAgICBsZXQgbWUgPSBSZWFjdERvbS5maW5kRE9NTm9kZSh0aGlzKTtcclxuICAgICAgICBjb25zdCB2YWx1ZTogYW55ID0gdGhpcy5wcm9wcy5jb250ZW50VmFsdWU7XHJcbiAgICAgICAgaWYobWUpIHtcclxuICAgICAgICAgICAgY29uc3QgdGFibGVFbGVtZW50OiBIVE1MRWxlbWVudCA9IHRoaXMuZ2V0UGFyZW50VGFibGVFbGVtZW50KCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHJvd0VsZW1lbnQ6IEhUTUxFbGVtZW50ID0gdGhpcy5nZXRQYXJlbnRSb3dFbGVtZW50KCk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCB0YWJsZUNvbXBvbmVudElkOiBzdHJpbmcgPSB0aGlzLmdldFBhcmVudFRhYmxlQ29tcG9uZW50SWQodGFibGVFbGVtZW50KTtcclxuICAgICAgICAgICAgY29uc3QgdGFibGUgPSBtYW55d2hvLm1vZGVsLmdldENvbXBvbmVudCh0YWJsZUNvbXBvbmVudElkLHRoaXMucHJvcHMuZmxvd0tleSk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBhcmdzdHIgPSB0aGlzLmdldEF0dHJpYnV0ZVZhbHVlKHRhYmxlLmF0dHJpYnV0ZXMsIFwidHJmQ29uZmlnXCIpO1xyXG4gICAgICAgICAgICBjb25zdCBhcmdzID0gSlNPTi5wYXJzZShhcmdzdHIpO1xyXG5cclxuICAgICAgICAgICAgY29uc29sZS5sb2coYXJncyk7XHJcblxyXG4gICAgICAgICAgICBpZihhcmdzW3ZhbHVlXSkge1xyXG4gICAgICAgICAgICAgICAgcm93RWxlbWVudC5jbGFzc0xpc3QuYWRkKGFyZ3NbdmFsdWVdKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcmV0dXJuIDxzcGFuPnt2YWx1ZX08L3NwYW4+O1xyXG4gICAgfVxyXG5cclxuICAgIGdldFBhcmVudFRhYmxlRWxlbWVudCgpIDogSFRNTEVsZW1lbnQgfCB1bmRlZmluZWRcclxuICAgIHtcclxuICAgICAgICBsZXQgbWUgPSBSZWFjdERvbS5maW5kRE9NTm9kZSh0aGlzKTtcclxuICAgICAgICB2YXIgbWF4TGV2ZWxzID0gMTA7XHJcbiAgICAgICAgdmFyIHBhcmVudCA6IEhUTUxFbGVtZW50ID0gbWUucGFyZW50RWxlbWVudDtcclxuICAgICAgICB3aGlsZSghcGFyZW50LmNsYXNzTGlzdC5jb250YWlucyhcInRhYmxlLWNvbnRhaW5lclwiKSB8fCBtYXhMZXZlbHMgPT0gMClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHBhcmVudD1wYXJlbnQucGFyZW50RWxlbWVudDtcclxuICAgICAgICAgICAgbWF4TGV2ZWxzLS07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZihtYXhMZXZlbHM9PTApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICByZXR1cm4gcGFyZW50O1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBnZXRQYXJlbnRSb3dFbGVtZW50KCkgOiBIVE1MRWxlbWVudCB8IHVuZGVmaW5lZFxyXG4gICAge1xyXG4gICAgICAgIGxldCBtZSA9IFJlYWN0RG9tLmZpbmRET01Ob2RlKHRoaXMpO1xyXG4gICAgICAgIHZhciBtYXhMZXZlbHMgPSAxMDtcclxuICAgICAgICB2YXIgcGFyZW50IDogSFRNTEVsZW1lbnQgPSBtZS5wYXJlbnRFbGVtZW50O1xyXG4gICAgICAgIHdoaWxlKCBwYXJlbnQudGFnTmFtZS50b0xvd2VyQ2FzZSgpICE9PVwidHJcIiB8fCBtYXhMZXZlbHMgPT0gMClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHBhcmVudD1wYXJlbnQucGFyZW50RWxlbWVudDtcclxuICAgICAgICAgICAgbWF4TGV2ZWxzLS07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZihtYXhMZXZlbHM9PTApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICByZXR1cm4gcGFyZW50O1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBnZXRQYXJlbnRUYWJsZUNvbXBvbmVudElkKHRhYmxlOiBIVE1MRWxlbWVudCkgOiBzdHJpbmdcclxuICAgIHtcclxuICAgICAgICB2YXIgY29tcG9uZW50SWQ6IHN0cmluZyA9IHRhYmxlLmF0dHJpYnV0ZXMuZ2V0TmFtZWRJdGVtKCdpZCcpLnZhbHVlO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHJldHVybiBjb21wb25lbnRJZDtcclxuICAgIH1cclxufVxyXG5cclxubWFueXdoby5jb21wb25lbnQucmVnaXN0ZXIoJ1RhYmxlUm93U3R5bGVyJywgVGFibGVSb3dTdHlsZXIpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgVGFibGVSb3dTdHlsZXI7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL1RhYmxlUm93U3R5bGVyLnRzeCIsImRlY2xhcmUgdmFyIG1hbnl3aG86IGFueTtcclxuXHJcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0ICogYXMgUmVhY3REb20gZnJvbSAncmVhY3QtZG9tJztcclxuXHJcbmNsYXNzIEhvdmVyQm94IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PGFueSwgYW55PiBcclxueyAgIFxyXG4gICAgaXNPdmVyQnV0dG9uOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBpc092ZXJEaWFsb2c6IGJvb2xlYW49ZmFsc2U7XHJcblxyXG4gICAgaG92ZXJCb3hTaG93bjogYm9vbGVhbj1mYWxzZTsgLy9jaGFuZ2UgdG8gZmFsc2VcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcyA6IGFueSlcclxuXHR7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgICAgIHRoaXMuZ2V0UGFyZW50VGFibGVFbGVtZW50ID0gdGhpcy5nZXRQYXJlbnRUYWJsZUVsZW1lbnQuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLmdldFBhcmVudFRhYmxlQ29tcG9uZW50SWQgPSB0aGlzLmdldFBhcmVudFRhYmxlQ29tcG9uZW50SWQuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLmdldFBhcmVudFJvd0VsZW1lbnQgPSB0aGlzLmdldFBhcmVudFJvd0VsZW1lbnQuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLm92ZXJCdXR0b24gPSB0aGlzLm92ZXJCdXR0b24uYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLm91dEJ1dHRvbiA9IHRoaXMub3V0QnV0dG9uLmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5vdmVyRGlhbG9nID0gdGhpcy5vdmVyRGlhbG9nLmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5vdXREaWFsb2cgPSB0aGlzLm91dERpYWxvZy5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMuY2FsY1Nob3duID0gdGhpcy5jYWxjU2hvd24uYmluZCh0aGlzKTtcclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBjb21wb25lbnREaWRNb3VudCgpIFxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuZm9yY2VVcGRhdGUoKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRBdHRyaWJ1dGVWYWx1ZShhdHRyaWJ1dGVzIDogYW55LCBhdHRyaWJ1dGVOYW1lIDogc3RyaW5nICkgOiBhbnlcclxuICAgIHtcclxuICAgICAgICBmb3IodmFyIGtleSBpbiBhdHRyaWJ1dGVzKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWYoa2V5ID09PSBhdHRyaWJ1dGVOYW1lKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gYXR0cmlidXRlc1trZXldO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIG92ZXJCdXR0b24oKSB7XHJcbiAgICAgICAgaWYodGhpcy5pc092ZXJCdXR0b24gPT09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaXNPdmVyQnV0dG9uPXRydWU7XHJcbiAgICAgICAgICAgIHRoaXMuY2FsY1Nob3duKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG91dEJ1dHRvbihlOiBhbnkpIHtcclxuICAgICAgICBcclxuICAgICAgICAvL2xldCBlbGVtZW50ID0gZS50b0VsZW1lbnQgfHwgZS5yZWxhdGVkVGFyZ2V0O1xyXG4gICAgICAgIC8vaWYgKGVsZW1lbnQucGFyZW50Tm9kZSA9PSB0aGlzIHx8IGVsZW1lbnQgPT0gdGhpcykge1xyXG4gICAgICAgIC8vICAgcmV0dXJuO1xyXG4gICAgICAgIC8vfVxyXG4gICAgICAgIGlmKHRoaXMuaXNPdmVyQnV0dG9uID09PSB0cnVlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaXNPdmVyQnV0dG9uPWZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLmNhbGNTaG93bigpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvdmVyRGlhbG9nKCkge1xyXG4gICAgICAgIGlmKHRoaXMuaXNPdmVyRGlhbG9nID09PSBmYWxzZSkge1xyXG4gICAgICAgICAgICB0aGlzLmlzT3ZlckRpYWxvZz10cnVlO1xyXG4gICAgICAgICAgICB0aGlzLmNhbGNTaG93bigpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvdXREaWFsb2coKSB7XHJcbiAgICAgICAgaWYodGhpcy5pc092ZXJEaWFsb2cgPT09IHRydWUpIHtcclxuICAgICAgICAgICAgdGhpcy5pc092ZXJEaWFsb2c9ZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMuY2FsY1Nob3duKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNhbGNTaG93bigpIHtcclxuICAgICAgICBpZih0aGlzLmlzT3ZlckJ1dHRvbiA9PT0gdHJ1ZSB8fCB0aGlzLmlzT3ZlckRpYWxvZyA9PT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICBpZih0aGlzLmhvdmVyQm94U2hvd24gPT09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmhvdmVyQm94U2hvd24gPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5mb3JjZVVwZGF0ZSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBpZih0aGlzLmhvdmVyQm94U2hvd24gPT09IHRydWUpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaG92ZXJCb3hTaG93biA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5mb3JjZVVwZGF0ZSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcblx0cmVuZGVyKClcclxuXHR7XHJcbiAgICAgICAgbGV0IGhvdmVyQm94OiBhbnk7XHJcbiAgICAgICAgbGV0IG1lID0gUmVhY3REb20uZmluZERPTU5vZGUodGhpcyk7XHJcbiAgICAgICAgbGV0IGljb246IHN0cmluZztcclxuICAgICAgICBsZXQgcG9zaXRpb246IHN0cmluZztcclxuICAgICAgICBcclxuICAgICAgICBjb25zdCB2YWx1ZTogYW55ID0gdGhpcy5wcm9wcy5jb250ZW50VmFsdWU7XHJcbiAgICAgICAgaWYobWUpIHtcclxuICAgICAgICAgICAgY29uc3QgdGFibGVFbGVtZW50OiBIVE1MRWxlbWVudCA9IHRoaXMuZ2V0UGFyZW50VGFibGVFbGVtZW50KCk7XHJcbiAgICAgICAgICAgIC8vY29uc3Qgcm93RWxlbWVudDogSFRNTEVsZW1lbnQgPSB0aGlzLmdldFBhcmVudFJvd0VsZW1lbnQoKTtcclxuICAgICAgICAgICAgY29uc3QgdGRFbGVtZW50OiBIVE1MRWxlbWVudCA9IHRoaXMuZ2V0UGFyZW50VERFbGVtZW50KCk7XHJcbiAgICAgICAgICAgIC8vbW9kaWZ5IHRkXHJcbiAgICAgICAgICAgIHRkRWxlbWVudC5zdHlsZS5wb3NpdGlvbj1cInJlbGF0aXZlXCI7XHJcbiAgICAgICAgICAgIHRkRWxlbWVudC5zdHlsZS5oZWlnaHQ9XCIxMDAlXCI7XHJcbiAgICAgICAgICAgIHRkRWxlbWVudC5zdHlsZS5wYWRkaW5nPVwiMHB4XCI7XHJcblxyXG5cclxuICAgICAgICAgICAgY29uc3QgdGFibGVDb21wb25lbnRJZDogc3RyaW5nID0gdGhpcy5nZXRQYXJlbnRUYWJsZUNvbXBvbmVudElkKHRhYmxlRWxlbWVudCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHRhYmxlID0gbWFueXdoby5tb2RlbC5nZXRDb21wb25lbnQodGFibGVDb21wb25lbnRJZCx0aGlzLnByb3BzLmZsb3dLZXkpO1xyXG5cclxuICAgICAgICAgICAgaWNvbiA9IHRoaXMuZ2V0QXR0cmlidXRlVmFsdWUodGFibGUuYXR0cmlidXRlcywgXCJob3ZlcmJveEljb25cIikgfHwgXCJxdWVzdGlvbi1zaWduXCI7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uID0gdGhpcy5nZXRBdHRyaWJ1dGVWYWx1ZSh0YWJsZS5hdHRyaWJ1dGVzLCBcImhvdmVyYm94UG9zaXRpb25cIikgfHwgXCJsZWZ0XCI7XHJcbiAgICAgICAgICAgIGxldCBsZWZ0OiBzdHJpbmc7XHJcbiAgICAgICAgICAgIGxldCByaWdodDogc3RyaW5nO1xyXG4gICAgICAgICAgICBsZXQgdG9wOiBzdHJpbmc7XHJcbiAgICAgICAgICAgIGxldCBib3R0b206IHN0cmluZztcclxuXHJcbiAgICAgICAgICAgIHN3aXRjaChwb3NpdGlvbi50b0xvd2VyQ2FzZSgpKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFwibGVmdFwiOlxyXG4gICAgICAgICAgICAgICAgICAgIHJpZ2h0ID0gXCJjYWxjKDEwMCUgKyA1cHgpXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9wID0gXCJjYWxjKC01MCUpXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBjYXNlIFwibG93ZXItbGVmdFwiOlxyXG4gICAgICAgICAgICAgICAgICAgIHJpZ2h0ID0gXCJjYWxjKDEwMCUgKyA1cHgpXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9wID0gXCJjYWxjKDUwJSArIDVweCk7XCI7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICAgICAgY2FzZSBcInVwcGVyLWxlZnRcIjpcclxuICAgICAgICAgICAgICAgICAgICByaWdodCA9IFwiY2FsYygxMDAlICsgNXB4KVwiO1xyXG4gICAgICAgICAgICAgICAgICAgIGJvdHRvbSA9IFwiY2FsYyg1MCUgKyA1cHgpXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICAgICAgY2FzZSBcImFib3ZlXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgcmlnaHQgPSBcImNhbGMoLTUwJSlcIjtcclxuICAgICAgICAgICAgICAgICAgICBib3R0b20gPSBcImNhbGMoMTAwJSArIDVweClcIjtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgICAgICBjYXNlIFwiYmVsb3dcIjpcclxuICAgICAgICAgICAgICAgICAgICByaWdodCA9IFwiY2FsYygtNTAlKVwiO1xyXG4gICAgICAgICAgICAgICAgICAgIHRvcCA9IFwiY2FsYygxMDAlICsgNXB4KVwiO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgICAgIGNhc2UgXCJyaWdodFwiOlxyXG4gICAgICAgICAgICAgICAgICAgIGxlZnQgPSBcImNhbGMoMTAwJSArIDVweClcIjtcclxuICAgICAgICAgICAgICAgICAgICB0b3AgPSBcImNhbGMoLTUwJSlcIjtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGNhc2UgXCJsb3dlci1yaWdodFwiOlxyXG4gICAgICAgICAgICAgICAgICAgIGxlZnQgPSBcImNhbGMoMTAwJSArIDVweClcIjtcclxuICAgICAgICAgICAgICAgICAgICB0b3AgPSBcImNhbGMoNTAlICsgNXB4KTtcIjtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgICAgICBjYXNlIFwidXBwZXItcmlnaHRcIjpcclxuICAgICAgICAgICAgICAgICAgICBsZWZ0ID0gXCJjYWxjKDEwMCUgKyA1cHgpXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgYm90dG9tID0gXCJjYWxjKDUwJSArIDVweClcIjtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYodGhpcy5ob3ZlckJveFNob3duPT09dHJ1ZSkge1xyXG4gICAgICAgICAgICAgICAgaG92ZXJCb3ggPSAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJob3ZlcmJveC1kaWFsb2dcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVmdCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJpZ2h0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9wLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm90dG9tLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcIiNmZWZlZmVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogXCIycHggc29saWQgIzAwMFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiBcIjVweFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogXCIyMHB4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB6SW5kZXg6IDEwMFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbk1vdXNlRW50ZXI9e3RoaXMub3ZlckRpYWxvZ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25Nb3VzZUxlYXZlPXt0aGlzLm91dERpYWxvZ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tfX2h0bWw6IHZhbHVlfX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaG92ZXJib3hcIlxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IFwiMTAwJVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGZsZXhEaXJlY3Rpb246IFwicm93XCIsXHJcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCJcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICBvbk1vdXNlTGVhdmU9e3RoaXMub3V0QnV0dG9ufVxyXG4gICAgICAgICAgICA+ICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaG92ZXJib3gtYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiIzQzYzM1ZlwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiBcIjEwcHhcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiBcIjUwJVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiBcImF1dG9cIlxyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgb25Nb3VzZUVudGVyPXt0aGlzLm92ZXJCdXR0b259XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAge2hvdmVyQm94fVxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17XCJnbHlwaGljb24gZ2x5cGhpY29uLVwiICsgaWNvbiArIFwiIGhvdmVyYm94LWljb25cIn0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogXCJ3aGl0ZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luTGVmdDogXCJhdXRvXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5SaWdodDogXCJhdXRvXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5Ub3A6IFwiLTJweFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL3BvaW50ZXJFdmVudHM6IFwibm9uZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vb25Nb3VzZUVudGVyPXt0aGlzLnNob3dIb3ZlckJveH1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0UGFyZW50VGFibGVFbGVtZW50KCkgOiBIVE1MRWxlbWVudCB8IHVuZGVmaW5lZFxyXG4gICAge1xyXG4gICAgICAgIGxldCBtZSA9IFJlYWN0RG9tLmZpbmRET01Ob2RlKHRoaXMpO1xyXG4gICAgICAgIHZhciBtYXhMZXZlbHMgPSAxMDtcclxuICAgICAgICB2YXIgcGFyZW50IDogSFRNTEVsZW1lbnQgPSBtZS5wYXJlbnRFbGVtZW50O1xyXG4gICAgICAgIHdoaWxlKCFwYXJlbnQuY2xhc3NMaXN0LmNvbnRhaW5zKFwidGFibGUtY29udGFpbmVyXCIpIHx8IG1heExldmVscyA9PSAwKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcGFyZW50PXBhcmVudC5wYXJlbnRFbGVtZW50O1xyXG4gICAgICAgICAgICBtYXhMZXZlbHMtLTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmKG1heExldmVscz09MClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHJldHVybiBwYXJlbnQ7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGdldFBhcmVudFRERWxlbWVudCgpIDogSFRNTEVsZW1lbnQgfCB1bmRlZmluZWRcclxuICAgIHtcclxuICAgICAgICBsZXQgbWUgPSBSZWFjdERvbS5maW5kRE9NTm9kZSh0aGlzKTtcclxuICAgICAgICB2YXIgbWF4TGV2ZWxzID0gMTA7XHJcbiAgICAgICAgdmFyIHBhcmVudCA6IEhUTUxFbGVtZW50ID0gbWUucGFyZW50RWxlbWVudDtcclxuICAgICAgICB3aGlsZSggcGFyZW50LnRhZ05hbWUudG9Mb3dlckNhc2UoKSAhPT1cInRkXCIgfHwgbWF4TGV2ZWxzID09IDApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBwYXJlbnQ9cGFyZW50LnBhcmVudEVsZW1lbnQ7XHJcbiAgICAgICAgICAgIG1heExldmVscy0tO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYobWF4TGV2ZWxzPT0wKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcmV0dXJuIHBhcmVudDtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgZ2V0UGFyZW50Um93RWxlbWVudCgpIDogSFRNTEVsZW1lbnQgfCB1bmRlZmluZWRcclxuICAgIHtcclxuICAgICAgICBsZXQgbWUgPSBSZWFjdERvbS5maW5kRE9NTm9kZSh0aGlzKTtcclxuICAgICAgICB2YXIgbWF4TGV2ZWxzID0gMTA7XHJcbiAgICAgICAgdmFyIHBhcmVudCA6IEhUTUxFbGVtZW50ID0gbWUucGFyZW50RWxlbWVudDtcclxuICAgICAgICB3aGlsZSggcGFyZW50LnRhZ05hbWUudG9Mb3dlckNhc2UoKSAhPT1cInRyXCIgfHwgbWF4TGV2ZWxzID09IDApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBwYXJlbnQ9cGFyZW50LnBhcmVudEVsZW1lbnQ7XHJcbiAgICAgICAgICAgIG1heExldmVscy0tO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYobWF4TGV2ZWxzPT0wKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcmV0dXJuIHBhcmVudDtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgZ2V0UGFyZW50VGFibGVDb21wb25lbnRJZCh0YWJsZTogSFRNTEVsZW1lbnQpIDogc3RyaW5nXHJcbiAgICB7XHJcbiAgICAgICAgdmFyIGNvbXBvbmVudElkOiBzdHJpbmcgPSB0YWJsZS5hdHRyaWJ1dGVzLmdldE5hbWVkSXRlbSgnaWQnKS52YWx1ZTtcclxuICAgICAgICBcclxuICAgICAgICByZXR1cm4gY29tcG9uZW50SWQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbm1hbnl3aG8uY29tcG9uZW50LnJlZ2lzdGVyKCdIb3ZlckJveCcsIEhvdmVyQm94KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhvdmVyQm94O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9Ib3ZlckJveC50c3giXSwic291cmNlUm9vdCI6IiJ9