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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = React;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(2));
__export(__webpack_require__(3));
__export(__webpack_require__(4));
__export(__webpack_require__(5));
__export(__webpack_require__(6));
__export(__webpack_require__(7));
__export(__webpack_require__(8));
__export(__webpack_require__(9));
__export(__webpack_require__(10));
__export(__webpack_require__(12));
__export(__webpack_require__(13));
__export(__webpack_require__(14));
__export(__webpack_require__(15));


/***/ }),
/* 2 */
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
    return ElapsedTimeFriendly;
}(React.Component));
manywho.component.register('ElapsedTimeFriendly', ElapsedTimeFriendly);
exports.default = ElapsedTimeFriendly;


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
    return ElapsedTimeLiveLong;
}(React.Component));
manywho.component.register('ElapsedTimeLiveLong', ElapsedTimeLiveLong);
exports.default = ElapsedTimeLiveLong;


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
                result += oDiff.days + "d";
            }
            if (oDiff.hours > 0) {
                if (result.length > 0) {
                    result += "/";
                }
                result += oDiff.hours + "h";
            }
            if (oDiff.minutes > 0) {
                if (result.length > 0) {
                    result += "/";
                }
                result += oDiff.minutes + "m";
            }
            if (oDiff.seconds > 0) {
                if (result.length > 0) {
                    result += "/";
                }
                result += oDiff.seconds + "s";
            }
            return result;
        }
        else {
            return "";
        }
    };
    return ElapsedTimeLiveShort;
}(React.Component));
manywho.component.register('ElapsedTimeLiveShort', ElapsedTimeLiveShort);
exports.default = ElapsedTimeLiveShort;


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
/* 6 */
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
        switch (this.props.contentValue.toLowerCase()) {
            case "":
                className += "option-horizontal";
                tooltip = "Not set";
                break;
            case "s":
                className += "hourglass";
                tooltip = "Staged";
                break;
            case "c":
                className += "ok";
                tooltip = "Complete";
                break;
            case "a":
                className += "flash";
                tooltip = "Active";
                break;
        }
        return React.createElement("span", { className: className, title: tooltip });
    };
    return StatusIcon;
}(React.Component));
manywho.component.register('StatusIcon', StatusIcon);
exports.default = StatusIcon;


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
var ReactDom = __webpack_require__(11);
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
/* 11 */
/***/ (function(module, exports) {

module.exports = ReactDOM;

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
            var seconds = Number.parseInt(this.props.contentValue);
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
            var seconds = Number.parseInt(this.props.contentValue);
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
            "border": "2px solid #adadad",
            "border-radius": "5px",
            "background-color": "#e3e3e3",
            "width": "100px",
            "height": "30px",
            "box-sizing": "content-box",
            "position": "relative",
        };
        var barStyle = {
            "border": "none",
            "border-radius": "4px",
            "background-color": "#7D9ACF",
            "width": displayValue,
            "text-align": "centre",
            "height": "100%",
        };
        var captionStyle = {
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


/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgYTI4ZTczNmE0NGYyZmRmZDY2NjgiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiUmVhY3RcIiIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXgudHN4Iiwid2VicGFjazovLy8uL3NyYy9FbGFwc2VkVGltZUZyaWVuZGx5LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvRWxhcHNlZFRpbWVMaXZlTG9uZy50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL0VsYXBzZWRUaW1lTGl2ZVNob3J0LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvRWxhcHNlZFRpbWUudHN4Iiwid2VicGFjazovLy8uL3NyYy9EYXRlRERNTU1ZWS50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL0RhdGVUaW1lRERNTU1ZWUhITU0udHN4Iiwid2VicGFjazovLy8uL3NyYy9Cb29sZWFuSWNvbi50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL1N0YXR1c0ljb24udHN4Iiwid2VicGFjazovLy8uL3NyYy9Mb29rdXBWYWx1ZS50c3giLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiUmVhY3RET01cIiIsIndlYnBhY2s6Ly8vLi9zcmMvRXBvY2hEYXRlRERNTU1ZWS50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL0Vwb2NoRGF0ZVRpbWVERE1NTVlZSEhNTS50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL1BlcmNlbnRQcm9ncmVzc0Jhci50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL0h5cGVybGluay50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFF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LEdBQUcsR0FBRyxDQUFDO1FBRS9CLElBQUksT0FBTyxHQUFZLEtBQUssR0FBRyxHQUFHLENBQUM7UUFFbkMsSUFBSSxTQUFTLEdBQUc7WUFDUixhQUFhLEVBQUcsUUFBUTtZQUN4QixPQUFPLEVBQUcsU0FBUztZQUNuQixXQUFXLEVBQUcsTUFBTTtZQUNwQixPQUFPLEVBQUcsTUFBTTtZQUNoQixZQUFZLEVBQUcsUUFBUTtZQUN2QixVQUFVLEVBQUcsVUFBd0I7WUFDckMsUUFBUSxFQUFFLE1BQU07WUFDaEIsZ0JBQWdCLEVBQUUsUUFBUTtZQUMxQixhQUFhLEVBQUUsTUFBTTtZQUNyQixnQkFBZ0IsRUFBRSxZQUFZO1NBRWpDLENBQUM7UUFFTixJQUFJLEdBQUcsR0FBRyxHQUFHLENBQUM7UUFDZCxJQUFJLEdBQUcsR0FBRyxDQUFDLENBQUM7UUFDWixJQUFJLEdBQUcsR0FBRyxFQUFFLENBQUM7UUFFYixPQUFRO1lBQ0ksMkJBQUcsSUFBSSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUMsUUFBUSxJQUFFLEtBQUssQ0FBSyxDQUN6QztJQUNsQixDQUFDO0lBQ0wsZ0JBQUM7QUFBRCxDQUFDLENBM0N1QixLQUFLLENBQUMsU0FBUyxHQTJDdEM7QUFFRCxxRkFBcUY7QUFFckYsT0FBTyxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsV0FBVyxFQUFFLFNBQVMsQ0FBQyxDQUFDO0FBRW5ELGtCQUFlLFNBQVMsQ0FBQyIsImZpbGUiOiJDb2x1bW5Db250cm9scy5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDEpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIGEyOGU3MzZhNDRmMmZkZmQ2NjY4IiwibW9kdWxlLmV4cG9ydHMgPSBSZWFjdDtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIlJlYWN0XCJcbi8vIG1vZHVsZSBpZCA9IDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0ICogZnJvbSAnLi9FbGFwc2VkVGltZUZyaWVuZGx5JztcbmV4cG9ydCAqIGZyb20gJy4vRWxhcHNlZFRpbWVMaXZlTG9uZyc7XG5leHBvcnQgKiBmcm9tICcuL0VsYXBzZWRUaW1lTGl2ZVNob3J0JztcbmV4cG9ydCAqIGZyb20gJy4vRWxhcHNlZFRpbWUnO1xuZXhwb3J0ICogZnJvbSAnLi9EYXRlRERNTU1ZWSc7XG5leHBvcnQgKiBmcm9tICcuL0RhdGVUaW1lRERNTU1ZWUhITU0nO1xuZXhwb3J0ICogZnJvbSAnLi9Cb29sZWFuSWNvbic7XG5leHBvcnQgKiBmcm9tICcuL1N0YXR1c0ljb24nO1xuZXhwb3J0ICogZnJvbSAnLi9Mb29rdXBWYWx1ZSc7XG5leHBvcnQgKiBmcm9tICcuL0Vwb2NoRGF0ZURETU1NWVknO1xuZXhwb3J0ICogZnJvbSAnLi9FcG9jaERhdGVUaW1lRERNTU1ZWUhITU0nO1xuZXhwb3J0ICogZnJvbSAnLi9QZXJjZW50UHJvZ3Jlc3NCYXInO1xuZXhwb3J0ICogZnJvbSAnLi9IeXBlcmxpbmsnO1xuXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvaW5kZXgudHN4IiwiZGVjbGFyZSB2YXIgbWFueXdobzogYW55O1xyXG5cclxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuY2xhc3MgRWxhcHNlZFRpbWVGcmllbmRseSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxhbnksIGFueT4gXHJcbnsgICBcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzIDogYW55KVxyXG5cdHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICB9XHJcblxyXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSBcclxuICAgIHtcclxuICAgICAgICB0aGlzLmZvcmNlVXBkYXRlKCk7XHJcbiAgICB9XHJcblxyXG5cdHJlbmRlcigpXHJcblx0e1xyXG5cdCAgIFxyXG4gICAgICAgIGlmKHRoaXMucHJvcHMuY29udGVudFZhbHVlKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdmFyIGR0ID0gbmV3IERhdGUodGhpcy5wcm9wcy5jb250ZW50VmFsdWUpXHJcbiAgICAgICAgICAgIHZhciBlbGFwc2VkID0gdGhpcy5lbGFwc2VkVGltZShkdCk7XHJcbiAgICAgICAgICAgIHJldHVybiA8c3Bhbj57ZWxhcHNlZH08L3NwYW4+O1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZWxhcHNlZFRpbWUgKGZyb21EYXRlIDogRGF0ZSkgXHJcbiAgICB7XHJcbiAgICAgIHZhciBuVG90YWxEaWZmID0gTWF0aC5yb3VuZCgobmV3IERhdGUoKSkuZ2V0VGltZSgpIC8gMTAwMCkgLSAoZnJvbURhdGUuZ2V0VGltZSgpIC8gMTAwMCk7XHJcbiAgICAgIGlmIChuVG90YWxEaWZmID49IDApIFxyXG4gICAgICB7XHJcbiAgICAgICAgdmFyIG9EaWZmIDogYW55ID0ge307XHJcbiAgICAgICAgb0RpZmYuZGF5cyA9IE1hdGguZmxvb3IoblRvdGFsRGlmZiAvIDg2NDAwKTtcclxuICAgICAgICBuVG90YWxEaWZmIC09IG9EaWZmLmRheXMgKiA4NjQwMDtcclxuICAgICAgICBvRGlmZi5ob3VycyA9IE1hdGguZmxvb3IoblRvdGFsRGlmZiAvIDM2MDApO1xyXG4gICAgICAgIG5Ub3RhbERpZmYgLT0gb0RpZmYuaG91cnMgKiAzNjAwO1xyXG4gICAgICAgIG9EaWZmLm1pbnV0ZXMgPSBNYXRoLmZsb29yKG5Ub3RhbERpZmYgLyA2MCk7XHJcbiAgICAgICAgblRvdGFsRGlmZiAtPSBvRGlmZi5taW51dGVzICogNjA7XHJcbiAgICAgICAgb0RpZmYuc2Vjb25kcyA9IE1hdGguZmxvb3IoblRvdGFsRGlmZik7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdmFyIHJlc3VsdCA9IFwiXCI7XHJcbiAgICAgICAgaWYob0RpZmYuZGF5cyA+IDApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXN1bHQgKz0gb0RpZmYuZGF5cyArIFwiIGRheXNcIjtcclxuICAgICAgICB9XHJcbiAgXHJcbiAgICAgICAgaWYob0RpZmYuaG91cnMgPiAwKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGlmKHJlc3VsdC5sZW5ndGggPiAwKVxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICByZXN1bHQgKz0gXCIsIFwiO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXN1bHQgKz0gb0RpZmYuaG91cnMgKyBcIiBob3Vyc1wiO1xyXG4gICAgICAgIH1cclxuICBcclxuICAgICAgICBpZihvRGlmZi5taW51dGVzID4gMClcclxuICAgICAgICB7XHJcbiAgICAgICAgICBpZihyZXN1bHQubGVuZ3RoID4gMClcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgcmVzdWx0ICs9IFwiLCBcIjtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmVzdWx0ICs9IG9EaWZmLm1pbnV0ZXMgKyBcIiBtaW51dGVzXCI7XHJcbiAgICAgICAgfVxyXG4gIFxyXG4gICAgICAgIGlmKG9EaWZmLnNlY29uZHMgPiAwKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGlmKHJlc3VsdC5sZW5ndGggPiAwKVxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICByZXN1bHQgKz0gXCIsIFwiO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXN1bHQgKz0gb0RpZmYuc2Vjb25kcyArIFwiIHNlY29uZHNcIjtcclxuICAgICAgICB9XHJcbiAgXHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgICAgfSBcclxuICAgICAgZWxzZSBcclxuICAgICAge1xyXG4gICAgICAgIHJldHVybiBcIlwiO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbm1hbnl3aG8uY29tcG9uZW50LnJlZ2lzdGVyKCdFbGFwc2VkVGltZUZyaWVuZGx5JywgRWxhcHNlZFRpbWVGcmllbmRseSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBFbGFwc2VkVGltZUZyaWVuZGx5O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9FbGFwc2VkVGltZUZyaWVuZGx5LnRzeCIsImRlY2xhcmUgdmFyIG1hbnl3aG86IGFueTtcclxuXHJcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbmNsYXNzIEVsYXBzZWRUaW1lTGl2ZUxvbmcgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8YW55LCBhbnk+IFxyXG57ICAgXHJcblxyXG4gIHRpbWVySUQgPSAtMTtcclxuXHJcbiAgY29uc3RydWN0b3IocHJvcHMgOiBhbnkpXHJcbiAge1xyXG4gICAgICBzdXBlcihwcm9wcyk7XHJcbiAgfVxyXG5cclxuICBjb21wb25lbnREaWRNb3VudCgpIFxyXG4gIHtcclxuICAgICAgdGhpcy5mb3JjZVVwZGF0ZSgpO1xyXG4gICAgICB0aGlzLnRpbWVySUQgPSB3aW5kb3cuc2V0SW50ZXJ2YWwodGhpcy50aW1lckV2ZW50LmJpbmQodGhpcyksIDEwMDApO1xyXG4gIH1cclxuXHJcbiAgY29tcG9uZW50V2lsbFVubW91bnQoKVxyXG4gIHtcclxuICAgIGlmKHRoaXMudGltZXJJRCA+PSAwKVxyXG4gICAge1xyXG4gICAgICBjbGVhckludGVydmFsKHRoaXMudGltZXJJRCk7XHJcbiAgICAgIHRoaXMudGltZXJJRCA9IC0xO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgdGltZXJFdmVudCgpXHJcbiAge1xyXG4gICAgdGhpcy5mb3JjZVVwZGF0ZSgpO1xyXG4gIH1cclxuXHJcblx0cmVuZGVyKClcclxuXHR7XHJcblx0ICAgXHJcbiAgICAgICAgaWYodGhpcy5wcm9wcy5jb250ZW50VmFsdWUpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB2YXIgZHQgPSBuZXcgRGF0ZSh0aGlzLnByb3BzLmNvbnRlbnRWYWx1ZSlcclxuICAgICAgICAgICAgdmFyIGVsYXBzZWQgPSB0aGlzLmVsYXBzZWRUaW1lKGR0KTtcclxuICAgICAgICAgICAgcmV0dXJuIDxzcGFuPntlbGFwc2VkfTwvc3Bhbj47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2VcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuICB9XHJcblxyXG4gIGVsYXBzZWRUaW1lIChmcm9tRGF0ZSA6IERhdGUpIFxyXG4gIHtcclxuICAgIHZhciBuVG90YWxEaWZmID0gTWF0aC5yb3VuZCgobmV3IERhdGUoKSkuZ2V0VGltZSgpIC8gMTAwMCkgLSAoZnJvbURhdGUuZ2V0VGltZSgpIC8gMTAwMCk7XHJcbiAgICBpZiAoblRvdGFsRGlmZiA+PSAwKSBcclxuICAgIHtcclxuICAgICAgdmFyIG9EaWZmIDogYW55ID0ge307XHJcbiAgICAgIG9EaWZmLmRheXMgPSBNYXRoLmZsb29yKG5Ub3RhbERpZmYgLyA4NjQwMCk7XHJcbiAgICAgIG5Ub3RhbERpZmYgLT0gb0RpZmYuZGF5cyAqIDg2NDAwO1xyXG4gICAgICBvRGlmZi5ob3VycyA9IE1hdGguZmxvb3IoblRvdGFsRGlmZiAvIDM2MDApO1xyXG4gICAgICBuVG90YWxEaWZmIC09IG9EaWZmLmhvdXJzICogMzYwMDtcclxuICAgICAgb0RpZmYubWludXRlcyA9IE1hdGguZmxvb3IoblRvdGFsRGlmZiAvIDYwKTtcclxuICAgICAgblRvdGFsRGlmZiAtPSBvRGlmZi5taW51dGVzICogNjA7XHJcbiAgICAgIG9EaWZmLnNlY29uZHMgPSBNYXRoLmZsb29yKG5Ub3RhbERpZmYpO1xyXG4gICAgICBcclxuICAgICAgdmFyIHJlc3VsdCA9IFwiXCI7XHJcbiAgICAgIGlmKG9EaWZmLmRheXMgPiAwKVxyXG4gICAgICB7XHJcbiAgICAgICAgICByZXN1bHQgKz0gb0RpZmYuZGF5cyArIFwiIGRheXNcIjtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYob0RpZmYuaG91cnMgPiAwKVxyXG4gICAgICB7XHJcbiAgICAgICAgaWYocmVzdWx0Lmxlbmd0aCA+IDApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgcmVzdWx0ICs9IFwiLCBcIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgICByZXN1bHQgKz0gb0RpZmYuaG91cnMgKyBcIiBob3Vyc1wiO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZihvRGlmZi5taW51dGVzID4gMClcclxuICAgICAge1xyXG4gICAgICAgIGlmKHJlc3VsdC5sZW5ndGggPiAwKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgIHJlc3VsdCArPSBcIiwgXCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICAgcmVzdWx0ICs9IG9EaWZmLm1pbnV0ZXMgKyBcIiBtaW51dGVzXCI7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmKG9EaWZmLnNlY29uZHMgPiAwKVxyXG4gICAgICB7XHJcbiAgICAgICAgaWYocmVzdWx0Lmxlbmd0aCA+IDApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgcmVzdWx0ICs9IFwiLCBcIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgICByZXN1bHQgKz0gb0RpZmYuc2Vjb25kcyArIFwiIHNlY29uZHNcIjtcclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH0gXHJcbiAgICBlbHNlIFxyXG4gICAge1xyXG4gICAgICByZXR1cm4gXCJcIjtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbm1hbnl3aG8uY29tcG9uZW50LnJlZ2lzdGVyKCdFbGFwc2VkVGltZUxpdmVMb25nJywgRWxhcHNlZFRpbWVMaXZlTG9uZyk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBFbGFwc2VkVGltZUxpdmVMb25nO1xyXG5cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL0VsYXBzZWRUaW1lTGl2ZUxvbmcudHN4IiwiZGVjbGFyZSB2YXIgbWFueXdobzogYW55O1xyXG5cclxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuY2xhc3MgRWxhcHNlZFRpbWVMaXZlU2hvcnQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8YW55LCBhbnk+IFxyXG57ICAgXHJcblxyXG4gIHRpbWVySUQgPSAtMTtcclxuXHJcbiAgY29uc3RydWN0b3IocHJvcHMgOiBhbnkpXHJcbiAge1xyXG4gICAgICBzdXBlcihwcm9wcyk7XHJcbiAgfVxyXG5cclxuICBjb21wb25lbnREaWRNb3VudCgpIFxyXG4gIHtcclxuICAgICAgdGhpcy5mb3JjZVVwZGF0ZSgpO1xyXG4gICAgICB0aGlzLnRpbWVySUQgPSB3aW5kb3cuc2V0SW50ZXJ2YWwodGhpcy50aW1lckV2ZW50LmJpbmQodGhpcyksIDEwMDApO1xyXG4gIH1cclxuXHJcbiAgY29tcG9uZW50V2lsbFVubW91bnQoKVxyXG4gIHtcclxuICAgIGlmKHRoaXMudGltZXJJRCA+PSAwKVxyXG4gICAge1xyXG4gICAgICBjbGVhckludGVydmFsKHRoaXMudGltZXJJRCk7XHJcbiAgICAgIHRoaXMudGltZXJJRCA9IC0xO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgdGltZXJFdmVudCgpXHJcbiAge1xyXG4gICAgdGhpcy5mb3JjZVVwZGF0ZSgpO1xyXG4gIH1cclxuXHJcblx0cmVuZGVyKClcclxuXHR7XHJcblx0ICAgXHJcbiAgICAgICAgaWYodGhpcy5wcm9wcy5jb250ZW50VmFsdWUpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB2YXIgZHQgPSBuZXcgRGF0ZSh0aGlzLnByb3BzLmNvbnRlbnRWYWx1ZSlcclxuICAgICAgICAgICAgdmFyIGVsYXBzZWQgPSB0aGlzLmVsYXBzZWRUaW1lKGR0KTtcclxuICAgICAgICAgICAgcmV0dXJuIDxzcGFuPntlbGFwc2VkfTwvc3Bhbj47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2VcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuICB9XHJcblxyXG4gIGVsYXBzZWRUaW1lIChmcm9tRGF0ZSA6IERhdGUpIFxyXG4gIHtcclxuICAgIHZhciBuVG90YWxEaWZmID0gTWF0aC5yb3VuZCgobmV3IERhdGUoKSkuZ2V0VGltZSgpIC8gMTAwMCkgLSAoZnJvbURhdGUuZ2V0VGltZSgpIC8gMTAwMCk7XHJcbiAgICBpZiAoblRvdGFsRGlmZiA+PSAwKSBcclxuICAgIHtcclxuICAgICAgdmFyIG9EaWZmIDogYW55ID0ge307XHJcbiAgICAgIG9EaWZmLmRheXMgPSBNYXRoLmZsb29yKG5Ub3RhbERpZmYgLyA4NjQwMCk7XHJcbiAgICAgIG5Ub3RhbERpZmYgLT0gb0RpZmYuZGF5cyAqIDg2NDAwO1xyXG4gICAgICBvRGlmZi5ob3VycyA9IE1hdGguZmxvb3IoblRvdGFsRGlmZiAvIDM2MDApO1xyXG4gICAgICBuVG90YWxEaWZmIC09IG9EaWZmLmhvdXJzICogMzYwMDtcclxuICAgICAgb0RpZmYubWludXRlcyA9IE1hdGguZmxvb3IoblRvdGFsRGlmZiAvIDYwKTtcclxuICAgICAgblRvdGFsRGlmZiAtPSBvRGlmZi5taW51dGVzICogNjA7XHJcbiAgICAgIG9EaWZmLnNlY29uZHMgPSBNYXRoLmZsb29yKG5Ub3RhbERpZmYpO1xyXG4gICAgICBcclxuICAgICAgdmFyIHJlc3VsdCA9IFwiXCI7XHJcbiAgICAgIGlmKG9EaWZmLmRheXMgPiAwKVxyXG4gICAgICB7XHJcbiAgICAgICAgICByZXN1bHQgKz0gb0RpZmYuZGF5cyArIFwiZFwiO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZihvRGlmZi5ob3VycyA+IDApXHJcbiAgICAgIHtcclxuICAgICAgICBpZihyZXN1bHQubGVuZ3RoID4gMClcclxuICAgICAgICB7XHJcbiAgICAgICAgICByZXN1bHQgKz0gXCIvXCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICAgcmVzdWx0ICs9IG9EaWZmLmhvdXJzICsgXCJoXCI7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmKG9EaWZmLm1pbnV0ZXMgPiAwKVxyXG4gICAgICB7XHJcbiAgICAgICAgaWYocmVzdWx0Lmxlbmd0aCA+IDApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgcmVzdWx0ICs9IFwiL1wiO1xyXG4gICAgICAgIH1cclxuICAgICAgICAgIHJlc3VsdCArPSBvRGlmZi5taW51dGVzICsgXCJtXCI7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmKG9EaWZmLnNlY29uZHMgPiAwKVxyXG4gICAgICB7XHJcbiAgICAgICAgaWYocmVzdWx0Lmxlbmd0aCA+IDApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgcmVzdWx0ICs9IFwiL1wiO1xyXG4gICAgICAgIH1cclxuICAgICAgICAgIHJlc3VsdCArPSBvRGlmZi5zZWNvbmRzICsgXCJzXCI7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9IFxyXG4gICAgZWxzZSBcclxuICAgIHtcclxuICAgICAgcmV0dXJuIFwiXCI7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5tYW55d2hvLmNvbXBvbmVudC5yZWdpc3RlcignRWxhcHNlZFRpbWVMaXZlU2hvcnQnLCBFbGFwc2VkVGltZUxpdmVTaG9ydCk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBFbGFwc2VkVGltZUxpdmVTaG9ydDtcclxuXHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9FbGFwc2VkVGltZUxpdmVTaG9ydC50c3giLCJkZWNsYXJlIHZhciBtYW55d2hvOiBhbnk7XHJcblxyXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5jbGFzcyBFbGFwc2VkVGltZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxhbnksIGFueT4gXHJcbnsgICBcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzIDogYW55KVxyXG5cdHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICB9XHJcblxyXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSBcclxuICAgIHtcclxuICAgICAgICB0aGlzLmZvcmNlVXBkYXRlKCk7XHJcbiAgICB9XHJcblxyXG5cdHJlbmRlcigpXHJcblx0e1xyXG5cdCAgIFxyXG4gICAgICAgIGlmKHRoaXMucHJvcHMuY29udGVudFZhbHVlKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdmFyIGR0ID0gbmV3IERhdGUodGhpcy5wcm9wcy5jb250ZW50VmFsdWUpXHJcbiAgICAgICAgICAgIHZhciBlbGFwc2VkID0gdGhpcy5lbGFwc2VkVGltZShkdCk7XHJcbiAgICAgICAgICAgIHJldHVybiA8c3Bhbj57ZWxhcHNlZH08L3NwYW4+O1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcbiAgfVxyXG5cclxuICBlbGFwc2VkVGltZSAoZnJvbURhdGUgOiBEYXRlKSBcclxuICB7XHJcbiAgICB2YXIgblRvdGFsRGlmZiA9IE1hdGgucm91bmQoKG5ldyBEYXRlKCkpLmdldFRpbWUoKSAvIDEwMDApIC0gKGZyb21EYXRlLmdldFRpbWUoKSAvIDEwMDApO1xyXG4gICAgaWYgKG5Ub3RhbERpZmYgPj0gMCkgXHJcbiAgICB7XHJcbiAgICAgIHZhciBvRGlmZiA6IGFueSA9IHt9O1xyXG4gICAgICBvRGlmZi5kYXlzID0gTWF0aC5mbG9vcihuVG90YWxEaWZmIC8gODY0MDApO1xyXG4gICAgICBuVG90YWxEaWZmIC09IG9EaWZmLmRheXMgKiA4NjQwMDtcclxuICAgICAgb0RpZmYuaG91cnMgPSBNYXRoLmZsb29yKG5Ub3RhbERpZmYgLyAzNjAwKTtcclxuICAgICAgblRvdGFsRGlmZiAtPSBvRGlmZi5ob3VycyAqIDM2MDA7XHJcbiAgICAgIG9EaWZmLm1pbnV0ZXMgPSBNYXRoLmZsb29yKG5Ub3RhbERpZmYgLyA2MCk7XHJcbiAgICAgIG5Ub3RhbERpZmYgLT0gb0RpZmYubWludXRlcyAqIDYwO1xyXG4gICAgICBvRGlmZi5zZWNvbmRzID0gTWF0aC5mbG9vcihuVG90YWxEaWZmKTtcclxuICAgICAgXHJcbiAgICAgIHZhciByZXN1bHQgPSBcIlwiO1xyXG4gICAgICBpZihvRGlmZi5kYXlzID4gMClcclxuICAgICAge1xyXG4gICAgICAgICAgcmVzdWx0ICs9IG9EaWZmLmRheXMgKyBcIiBkYXlzXCI7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmKG9EaWZmLmhvdXJzID4gMClcclxuICAgICAge1xyXG4gICAgICAgIGlmKHJlc3VsdC5sZW5ndGggPiAwKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgIHJlc3VsdCArPSBcIiwgXCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICAgcmVzdWx0ICs9IG9EaWZmLmhvdXJzICsgXCIgaG91cnNcIjtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYob0RpZmYubWludXRlcyA+IDApXHJcbiAgICAgIHtcclxuICAgICAgICBpZihyZXN1bHQubGVuZ3RoID4gMClcclxuICAgICAgICB7XHJcbiAgICAgICAgICByZXN1bHQgKz0gXCIsIFwiO1xyXG4gICAgICAgIH1cclxuICAgICAgICAgIHJlc3VsdCArPSBvRGlmZi5taW51dGVzICsgXCIgbWludXRlc1wiO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZihvRGlmZi5zZWNvbmRzID4gMClcclxuICAgICAge1xyXG4gICAgICAgIGlmKHJlc3VsdC5sZW5ndGggPiAwKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgIHJlc3VsdCArPSBcIiwgXCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICAgcmVzdWx0ICs9IG9EaWZmLnNlY29uZHMgKyBcIiBzZWNvbmRzXCI7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9IFxyXG4gICAgZWxzZSBcclxuICAgIHtcclxuICAgICAgcmV0dXJuIFwiXCI7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5tYW55d2hvLmNvbXBvbmVudC5yZWdpc3RlcignRWxhcHNlZFRpbWUnLCBFbGFwc2VkVGltZSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBFbGFwc2VkVGltZTtcclxuXHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9FbGFwc2VkVGltZS50c3giLCJkZWNsYXJlIHZhciBtYW55d2hvOiBhbnk7XHJcblxyXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5jbGFzcyBEYXRlRERNTU1ZWSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxhbnksIGFueT4gXHJcbnsgICBcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzIDogYW55KVxyXG5cdHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICB9XHJcblxyXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSBcclxuICAgIHtcclxuICAgICAgICB0aGlzLmZvcmNlVXBkYXRlKCk7XHJcbiAgICB9XHJcblxyXG5cdHJlbmRlcigpXHJcblx0e1xyXG5cdCAgIFxyXG4gICAgICAgIGlmKHRoaXMucHJvcHMuY29udGVudFZhbHVlKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgLy9mb3JtYXQgdGhlIGRhdGUgdXNpbmcgUmVhY3QgZm9ybWF0dGVyIGludG8gZHQgc3RyaW5nXHJcbiAgICAgICAgICAgIHZhciBkdCA9IG5ldyBJbnRsLkRhdGVUaW1lRm9ybWF0KCdlbi1HQicsIHsgICBcclxuICAgICAgICAgICAgICAgIHllYXI6ICdudW1lcmljJywgXHJcbiAgICAgICAgICAgICAgICBtb250aDogJ2xvbmcnLCBcclxuICAgICAgICAgICAgICAgIGRheTogJzItZGlnaXQnIFxyXG4gICAgICAgICAgICB9KS5mb3JtYXQobmV3IERhdGUodGhpcy5wcm9wcy5jb250ZW50VmFsdWUpKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHJldHVybiA8c3Bhbj57ZHR9PC9zcGFuPjtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5tYW55d2hvLmNvbXBvbmVudC5yZWdpc3RlcignRGF0ZURETU1NWVknLCBEYXRlRERNTU1ZWSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBEYXRlRERNTU1ZWTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvRGF0ZURETU1NWVkudHN4IiwiZGVjbGFyZSB2YXIgbWFueXdobzogYW55O1xyXG5cclxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuY2xhc3MgRGF0ZVRpbWVERE1NTVlZSEhNTSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxhbnksIGFueT4gXHJcbnsgICBcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzIDogYW55KVxyXG5cdHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICB9XHJcblxyXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSBcclxuICAgIHtcclxuICAgICAgICB0aGlzLmZvcmNlVXBkYXRlKCk7XHJcbiAgICB9XHJcblxyXG5cdHJlbmRlcigpXHJcblx0e1xyXG5cdCAgIFxyXG4gICAgICAgIGlmKHRoaXMucHJvcHMuY29udGVudFZhbHVlKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgLy9mb3JtYXQgdGhlIGRhdGUgdXNpbmcgUmVhY3QgZm9ybWF0dGVyIGludG8gZHQgc3RyaW5nXHJcbiAgICAgICAgICAgIHZhciBkdCA9IG5ldyBJbnRsLkRhdGVUaW1lRm9ybWF0KCdlbi1HQicsIHsgICBcclxuICAgICAgICAgICAgICAgIHllYXI6ICdudW1lcmljJywgXHJcbiAgICAgICAgICAgICAgICBtb250aDogJ2xvbmcnLCBcclxuICAgICAgICAgICAgICAgIGRheTogJzItZGlnaXQnLFxyXG4gICAgICAgICAgICAgICAgaG91cjogJzItZGlnaXQnLFxyXG4gICAgICAgICAgICAgICAgbWludXRlOiAnMi1kaWdpdCdcclxuICAgICAgICAgICAgfSkuZm9ybWF0KG5ldyBEYXRlKHRoaXMucHJvcHMuY29udGVudFZhbHVlKSk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICByZXR1cm4gPHNwYW4+e2R0fTwvc3Bhbj47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2VcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxubWFueXdoby5jb21wb25lbnQucmVnaXN0ZXIoJ0RhdGVUaW1lRERNTU1ZWUhITU0nLCBEYXRlVGltZURETU1NWVlISE1NKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IERhdGVUaW1lRERNTU1ZWUhITU07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL0RhdGVUaW1lRERNTU1ZWUhITU0udHN4IiwiZGVjbGFyZSB2YXIgbWFueXdobzogYW55O1xyXG5cclxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuY2xhc3MgQm9vbGVhbkljb24gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8YW55LCBhbnk+IFxyXG57ICAgXHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcyA6IGFueSlcclxuXHR7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbXBvbmVudERpZE1vdW50KCkgXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5mb3JjZVVwZGF0ZSgpO1xyXG4gICAgfVxyXG5cclxuXHRyZW5kZXIoKVxyXG5cdHtcclxuXHQgICB2YXIgY2xhc3NOYW1lIDogYW55ID0gXCJnbHlwaGljb24gZ2x5cGhpY29uLVwiO1xyXG4gICAgICAgIGlmKHRoaXMucHJvcHMuY29udGVudFZhbHVlID09PSBcInRydWVcIilcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZSArPSBcIm9rXCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2VcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZSArPSBcInJlbW92ZVwiO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIDxzcGFuIGNsYXNzTmFtZT17Y2xhc3NOYW1lfT48L3NwYW4+O1xyXG4gICAgfVxyXG59XHJcblxyXG5tYW55d2hvLmNvbXBvbmVudC5yZWdpc3RlcignQm9vbGVhbkljb24nLCBCb29sZWFuSWNvbik7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBCb29sZWFuSWNvbjtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvQm9vbGVhbkljb24udHN4IiwiZGVjbGFyZSB2YXIgbWFueXdobzogYW55O1xyXG5cclxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuY2xhc3MgU3RhdHVzSWNvbiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxhbnksIGFueT4gXHJcbnsgICBcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzIDogYW55KVxyXG5cdHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICB9XHJcblxyXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSBcclxuICAgIHtcclxuICAgICAgICB0aGlzLmZvcmNlVXBkYXRlKCk7XHJcbiAgICB9XHJcblxyXG5cdHJlbmRlcigpXHJcblx0e1xyXG4gICAgICAgIHZhciBjbGFzc05hbWUgOiBhbnkgPSBcImdseXBoaWNvbiBnbHlwaGljb24tXCI7XHJcbiAgICAgICAgdmFyIHRvb2x0aXAgOiBzdHJpbmcgPSBcIlwiO1xyXG4gICAgICAgIHN3aXRjaCh0aGlzLnByb3BzLmNvbnRlbnRWYWx1ZS50b0xvd2VyQ2FzZSgpKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgY2FzZSBcIlwiOlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lICs9IFwib3B0aW9uLWhvcml6b250YWxcIjtcclxuICAgICAgICAgICAgICAgIHRvb2x0aXAgPSBcIk5vdCBzZXRcIlxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlIFwic1wiOlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lICs9IFwiaG91cmdsYXNzXCI7XHJcbiAgICAgICAgICAgICAgICB0b29sdGlwID0gXCJTdGFnZWRcIlxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlIFwiY1wiOlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lICs9IFwib2tcIjtcclxuICAgICAgICAgICAgICAgIHRvb2x0aXAgPSBcIkNvbXBsZXRlXCJcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgY2FzZSBcImFcIjpcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZSArPSBcImZsYXNoXCI7XHJcbiAgICAgICAgICAgICAgICB0b29sdGlwID0gXCJBY3RpdmVcIlxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgcmV0dXJuIDxzcGFuIGNsYXNzTmFtZT17Y2xhc3NOYW1lfSB0aXRsZT17dG9vbHRpcH0+PC9zcGFuPjtcclxuICAgIH1cclxufVxyXG5cclxubWFueXdoby5jb21wb25lbnQucmVnaXN0ZXIoJ1N0YXR1c0ljb24nLCBTdGF0dXNJY29uKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFN0YXR1c0ljb247XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL1N0YXR1c0ljb24udHN4IiwiZGVjbGFyZSB2YXIgbWFueXdobzogYW55O1xyXG5cclxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgKiBhcyBSZWFjdERvbSBmcm9tICdyZWFjdC1kb20nO1xyXG5cclxuXHJcbi8vdGhlIGNvbnRlbnRWYWx1ZSB3aWxsIGhhdmUgdGhlIGxvb2t1cCB2YWx1ZVxyXG4vL1xyXG5jbGFzcyBMb29rdXBWYWx1ZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxhbnksIGFueT4gXHJcbnsgIFxyXG4gICAgLy9teVJlZiA6IGFueTsgXHJcbiAgICAvL3BhcmVudElkIDogYW55O1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMgOiBhbnkpXHJcblx0e1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgICAgICAvL3RoaXMubXlSZWYgPSBSZWFjdC5jcmVhdGVSZWYoKTtcclxuICAgIH1cclxuXHJcbiAgICBjb21wb25lbnREaWRNb3VudCgpIFxyXG4gICAge1xyXG4gICAgICAgIC8vdmFyIG1lID0gUmVhY3REb20uZmluZERPTU5vZGUodGhpcyk7XHJcbiAgICAgICAgLy92YXIgcGFyZW50VGFibGUgPSAkKHRoaXMubXlSZWYuY3VycmVudCkuY2xvc2VzdCgndGFibGUnKS5hdHRyKCdpZCcpO1xyXG4gICAgICAgIHRoaXMuZm9yY2VVcGRhdGUoKTtcclxuICAgICAgICAvL3RoaXMucGFyZW50SWQgPSAkKHRoaXMucmVmcy5tZSkuY2xvc2VzdCgndGFibGUnKS5hdHRyKCdpZCcpXHJcbiAgICB9XHJcblxyXG4gICAgZ2V0QXR0cmlidXRlVmFsdWUoYXR0cmlidXRlcyA6IGFueSwgYXR0cmlidXRlUHJlZml4IDogc3RyaW5nLCAgY29sdW1uSWQgOiBzdHJpbmcpXHJcbiAgICB7XHJcbiAgICAgICAgZm9yKHZhciBrZXkgaW4gYXR0cmlidXRlcylcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlmKGtleSA9PT0gYXR0cmlidXRlUHJlZml4ICsgXCJfXCIgKyBjb2x1bW5JZClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGF0dHJpYnV0ZXNba2V5XTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBnZXRWYWx1ZUZyb21MaXN0KGxpc3QgOiBhbnkgLCBrZXlBdHRyaWJ1dGUgOiBzdHJpbmcgLCByZXN1bHRBdHRyaWJ1dGUgOiBzdHJpbmcsIGtleSA6IHN0cmluZylcclxuICAgIHtcclxuICAgICAgICB2YXIgdmFsIDogc3RyaW5nID0gXCJcIjtcclxuICAgICAgICB2YXIgaGl0IDogYm9vbGVhbiA9IGZhbHNlXHJcblxyXG4gICAgICAgIGZvcih2YXIgaVBvcyA9IDAgOyBpUG9zIDwgbGlzdC5sZW5ndGggOyBpUG9zICsrKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdmFsPVwiXCI7XHJcbiAgICAgICAgICAgIHZhciBpdGVtID0gbGlzdFtpUG9zXTtcclxuXHJcbiAgICAgICAgICAgIGZvcih2YXIgcFBvcyA9IDAgOyBwUG9zIDwgaXRlbS5wcm9wZXJ0aWVzLmxlbmd0aCA7IHBQb3MrKylcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdmFyIHByb3AgPSBpdGVtLnByb3BlcnRpZXNbcFBvc107XHJcbiAgICAgICAgICAgICAgICBpZihwcm9wLmRldmVsb3Blck5hbWUgPT09IHJlc3VsdEF0dHJpYnV0ZSlcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB2YWwgPSBwcm9wLmNvbnRlbnRWYWx1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmKHByb3AuZGV2ZWxvcGVyTmFtZSA9PT0ga2V5QXR0cmlidXRlKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKHByb3AuY29udGVudFZhbHVlPT09a2V5KVxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGl0PXRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmKGhpdD09PXRydWUpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB2YWw7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gXCJcIjtcclxuICAgIH1cclxuXHJcblx0cmVuZGVyKClcclxuXHR7XHJcbiAgICAgICAgdmFyIG1lID0gUmVhY3REb20uZmluZERPTU5vZGUodGhpcyk7XHJcbiAgICAgICAgdmFyIGxhYmVsIDogc3RyaW5nID0gXCJcIjtcclxuICAgICAgICBpZih0aGlzLnByb3BzLmNvbnRlbnRWYWx1ZSAmJiBtZSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIC8vaXRlcmF0ZSB1cCBsb29raW5nIGZvciB0aGUgZWxlbWVudCB3aXRoIGNsYXNzIC50YWJsZS1jb250YWluZXIsIGl0IHdpbGwgaGF2ZSB0aGUgdGFibGUncyBpZCB2YWx1ZSBvbiBpdFxyXG4gICAgICAgICAgICB2YXIgbWF4TGV2ZWxzID0gMTA7XHJcbiAgICAgICAgICAgIHZhciBwYXJlbnQgOiBIVE1MRWxlbWVudCA9IG1lLnBhcmVudEVsZW1lbnQ7XHJcbiAgICAgICAgICAgIHdoaWxlKCFwYXJlbnQuY2xhc3NMaXN0LmNvbnRhaW5zKFwidGFibGUtY29udGFpbmVyXCIpIHx8IG1heExldmVscyA9PSAwKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBwYXJlbnQ9cGFyZW50LnBhcmVudEVsZW1lbnQ7XHJcbiAgICAgICAgICAgICAgICBtYXhMZXZlbHMtLTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYobWF4TGV2ZWxzPT0wKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJcIjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB2YXIgY29tcG9uZW50SWQgPSBwYXJlbnQuYXR0cmlidXRlcy5nZXROYW1lZEl0ZW0oJ2lkJykudmFsdWU7XHJcbiAgICAgICAgICAgIHZhciB0YWJsZSA9IG1hbnl3aG8ubW9kZWwuZ2V0Q29tcG9uZW50KGNvbXBvbmVudElkLHRoaXMucHJvcHMuZmxvd0tleSk7XHJcblxyXG4gICAgICAgICAgICB2YXIgcHJvcGVydHlJZCA9IHRoaXMucHJvcHMucHJvcGVydHlJZDtcclxuXHJcbiAgICAgICAgICAgIHZhciBsaXN0Q29tcG9uZW50TmFtZSA9IHRoaXMuZ2V0QXR0cmlidXRlVmFsdWUodGFibGUuYXR0cmlidXRlcywgXCJMb29rdXBMaXN0Q29tcG9uZW50XCIsIHByb3BlcnR5SWQpO1xyXG4gICAgICAgICAgICB2YXIgbGlzdEtleUF0cmlidXRlID0gdGhpcy5nZXRBdHRyaWJ1dGVWYWx1ZSh0YWJsZS5hdHRyaWJ1dGVzLCBcIkxvb2t1cExpc3RLZXlBdHRyaWJ1dGVcIiwgcHJvcGVydHlJZCk7XHJcbiAgICAgICAgICAgIHZhciBsaXN0UmVzdWx0QXR0cmlidXRlID0gdGhpcy5nZXRBdHRyaWJ1dGVWYWx1ZSh0YWJsZS5hdHRyaWJ1dGVzLCBcIkxvb2t1cExpc3RSZXN1bHRBdHRyaWJ1dGVcIiwgcHJvcGVydHlJZCk7XHJcblxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgaWYobGlzdENvbXBvbmVudE5hbWUpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHZhciBsaXN0ID0gbWFueXdoby5tb2RlbC5nZXRDb21wb25lbnRCeU5hbWUobGlzdENvbXBvbmVudE5hbWUsICAgdGhpcy5wcm9wcy5mbG93S2V5KVxyXG4gICAgICAgICAgICAgICAgaWYobGlzdClcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBsYWJlbCA9IHRoaXMuZ2V0VmFsdWVGcm9tTGlzdChsaXN0Lm9iamVjdERhdGEsIGxpc3RLZXlBdHJpYnV0ZSwgbGlzdFJlc3VsdEF0dHJpYnV0ZSwgdGhpcy5wcm9wcy5jb250ZW50VmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gPHNwYW4+e2xhYmVsfTwvc3Bhbj47XHJcbiAgICB9XHJcbn1cclxuXHJcbm1hbnl3aG8uY29tcG9uZW50LnJlZ2lzdGVyKCdMb29rdXBWYWx1ZScsIExvb2t1cFZhbHVlKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IExvb2t1cFZhbHVlO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9Mb29rdXBWYWx1ZS50c3giLCJtb2R1bGUuZXhwb3J0cyA9IFJlYWN0RE9NO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiUmVhY3RET01cIlxuLy8gbW9kdWxlIGlkID0gMTFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZGVjbGFyZSB2YXIgbWFueXdobzogYW55O1xyXG5cclxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuY2xhc3MgRXBvY2hEYXRlRERNTU1ZWSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxhbnksIGFueT4gXHJcbnsgICBcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzIDogYW55KVxyXG5cdHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICB9XHJcblxyXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSBcclxuICAgIHtcclxuICAgICAgICB0aGlzLmZvcmNlVXBkYXRlKCk7XHJcbiAgICB9XHJcblxyXG5cdHJlbmRlcigpXHJcblx0e1xyXG5cdCAgIFxyXG4gICAgICAgIGlmKHRoaXMucHJvcHMuY29udGVudFZhbHVlKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHZhciBzZWNvbmRzIDogbnVtYmVyID0gTnVtYmVyLnBhcnNlSW50KHRoaXMucHJvcHMuY29udGVudFZhbHVlKTtcclxuICAgICAgICAgICAgdmFyIGVkIDogRGF0ZSA9IG5ldyBEYXRlKHNlY29uZHMpO1xyXG5cclxuICAgICAgICAgICAgLy9mb3JtYXQgdGhlIGRhdGUgdXNpbmcgUmVhY3QgZm9ybWF0dGVyIGludG8gZHQgc3RyaW5nXHJcbiAgICAgICAgICAgIHZhciBkdCA9IG5ldyBJbnRsLkRhdGVUaW1lRm9ybWF0KCdlbi1HQicsIHsgICBcclxuICAgICAgICAgICAgICAgIHllYXI6ICdudW1lcmljJywgXHJcbiAgICAgICAgICAgICAgICBtb250aDogJ2xvbmcnLCBcclxuICAgICAgICAgICAgICAgIGRheTogJzItZGlnaXQnXHJcbiAgICAgICAgICAgIH0pLmZvcm1hdChlZCk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICByZXR1cm4gPHNwYW4+e2R0fTwvc3Bhbj47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2VcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxubWFueXdoby5jb21wb25lbnQucmVnaXN0ZXIoJ0Vwb2NoRGF0ZURETU1NWVknLCBFcG9jaERhdGVERE1NTVlZKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEVwb2NoRGF0ZURETU1NWVk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL0Vwb2NoRGF0ZURETU1NWVkudHN4IiwiZGVjbGFyZSB2YXIgbWFueXdobzogYW55O1xyXG5cclxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuY2xhc3MgRXBvY2hEYXRlVGltZURETU1NWVlISE1NIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PGFueSwgYW55PiBcclxueyAgIFxyXG4gICAgY29uc3RydWN0b3IocHJvcHMgOiBhbnkpXHJcblx0e1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgIH1cclxuXHJcbiAgICBjb21wb25lbnREaWRNb3VudCgpIFxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuZm9yY2VVcGRhdGUoKTtcclxuICAgIH1cclxuXHJcblx0cmVuZGVyKClcclxuXHR7XHJcblx0ICAgXHJcbiAgICAgICAgaWYodGhpcy5wcm9wcy5jb250ZW50VmFsdWUpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB2YXIgc2Vjb25kcyA6IG51bWJlciA9IE51bWJlci5wYXJzZUludCh0aGlzLnByb3BzLmNvbnRlbnRWYWx1ZSk7XHJcbiAgICAgICAgICAgIHZhciBlZCA6IERhdGUgPSBuZXcgRGF0ZShzZWNvbmRzKTtcclxuICAgICAgICAgICAgLy9mb3JtYXQgdGhlIGRhdGUgdXNpbmcgUmVhY3QgZm9ybWF0dGVyIGludG8gZHQgc3RyaW5nXHJcbiAgICAgICAgICAgIHZhciBkdCA9IG5ldyBJbnRsLkRhdGVUaW1lRm9ybWF0KCdlbi1HQicsIHsgICBcclxuICAgICAgICAgICAgICAgIHllYXI6ICdudW1lcmljJywgXHJcbiAgICAgICAgICAgICAgICBtb250aDogJ2xvbmcnLCBcclxuICAgICAgICAgICAgICAgIGRheTogJzItZGlnaXQnLFxyXG4gICAgICAgICAgICAgICAgaG91cjogJzItZGlnaXQnLFxyXG4gICAgICAgICAgICAgICAgbWludXRlOiAnMi1kaWdpdCdcclxuICAgICAgICAgICAgfSkuZm9ybWF0KGVkKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHJldHVybiA8c3Bhbj57ZHR9PC9zcGFuPjtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5tYW55d2hvLmNvbXBvbmVudC5yZWdpc3RlcignRXBvY2hEYXRlVGltZURETU1NWVlISE1NJywgRXBvY2hEYXRlVGltZURETU1NWVlISE1NKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEVwb2NoRGF0ZVRpbWVERE1NTVlZSEhNTTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvRXBvY2hEYXRlVGltZURETU1NWVlISE1NLnRzeCIsImRlY2xhcmUgdmFyIG1hbnl3aG86IGFueTtcclxuXHJcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbmNsYXNzIFBlcmNlbnRQcm9ncmVzc0JhciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxhbnksIGFueT4gXHJcbnsgICBcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzIDogYW55KVxyXG5cdHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICB9XHJcblxyXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSBcclxuICAgIHtcclxuICAgICAgICB0aGlzLmZvcmNlVXBkYXRlKCk7XHJcbiAgICB9XHJcblxyXG5cdHJlbmRlcigpXHJcblx0e1xyXG4gICAgICAgIHZhciBjbGFzc05hbWUgOiBhbnkgPSBcImdseXBoaWNvbiBnbHlwaGljb24tXCI7XHJcbiAgICAgICAgdmFyIHRvb2x0aXAgOiBzdHJpbmcgPSBcIlwiO1xyXG5cclxuICAgICAgICB2YXIgdmFsdWUgPSBwYXJzZUludCh0aGlzLnByb3BzLmNvbnRlbnRWYWx1ZSkgfHwgMDtcclxuICAgICAgICB2YXIgZGlzcGxheVZhbHVlID0gdmFsdWUgKyBcIiVcIjtcclxuXHJcbiAgICAgICAgdmFyIHRvb2x0aXAgOiBzdHJpbmcgPSB2YWx1ZSArIFwiJVwiO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHZhciBvdXRlclN0eWxlID0ge1xyXG4gICAgICAgICAgICAgICAgXCJib3JkZXJcIiA6IFwiMnB4IHNvbGlkICNhZGFkYWRcIixcclxuICAgICAgICAgICAgICAgIFwiYm9yZGVyLXJhZGl1c1wiOlwiNXB4XCIsXHJcbiAgICAgICAgICAgICAgICBcImJhY2tncm91bmQtY29sb3JcIjpcIiNlM2UzZTNcIixcclxuICAgICAgICAgICAgICAgIFwid2lkdGhcIjpcIjEwMHB4XCIsXHJcbiAgICAgICAgICAgICAgICBcImhlaWdodFwiOlwiMzBweFwiLFxyXG4gICAgICAgICAgICAgICAgXCJib3gtc2l6aW5nXCI6IFwiY29udGVudC1ib3hcIixcclxuICAgICAgICAgICAgICAgIFwicG9zaXRpb25cIiA6IFwicmVsYXRpdmVcIiBhcyBcInJlbGF0aXZlXCIsXHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgIHZhciBiYXJTdHlsZSA9IHtcclxuICAgICAgICAgICAgXCJib3JkZXJcIiA6IFwibm9uZVwiLFxyXG4gICAgICAgICAgICBcImJvcmRlci1yYWRpdXNcIjpcIjRweFwiLFxyXG4gICAgICAgICAgICBcImJhY2tncm91bmQtY29sb3JcIjpcIiM3RDlBQ0ZcIixcclxuICAgICAgICAgICAgXCJ3aWR0aFwiOiBkaXNwbGF5VmFsdWUsXHJcbiAgICAgICAgICAgIFwidGV4dC1hbGlnblwiIDogXCJjZW50cmVcIixcclxuICAgICAgICAgICAgXCJoZWlnaHRcIjogXCIxMDAlXCIsXHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgIHZhciBjYXB0aW9uU3R5bGUgPSB7XHJcbiAgICAgICAgICAgICAgICBcImZvbnQtZmFtaWx5XCIgOiBcInRhaG9tYVwiLFxyXG4gICAgICAgICAgICAgICAgXCJjb2xvclwiIDogXCIjZmZmZmZmXCIsXHJcbiAgICAgICAgICAgICAgICBcImZvbnQtc2l6ZVwiIDogXCIxMHB0XCIsXHJcbiAgICAgICAgICAgICAgICBcIndpZHRoXCIgOiBcIjEwMCVcIixcclxuICAgICAgICAgICAgICAgIFwidGV4dC1hbGlnblwiIDogXCJjZW50ZXJcIixcclxuICAgICAgICAgICAgICAgIFwicG9zaXRpb25cIiA6IFwiYWJzb2x1dGVcIiBhcyBcImFic29sdXRlXCIsXHJcbiAgICAgICAgICAgICAgICBcImhlaWdodFwiOiBcIjEwMCVcIixcclxuICAgICAgICAgICAgICAgIFwidmVydGljYWwtYWxpZ25cIjogXCJtaWRkbGVcIixcclxuICAgICAgICAgICAgICAgIFwibGluZS1oZWlnaHRcIjogXCIyMDAlXCIsXHJcbiAgICAgICAgICAgICAgICBcIm1peC1ibGVuZC1tb2RlXCI6IFwiZGlmZmVyZW5jZVwiLFxyXG5cclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgdmFyIG1heCA9IDEwMDtcclxuICAgICAgICB2YXIgbWluID0gMDtcclxuICAgICAgICB2YXIgcG9zID0gNjA7XHJcblxyXG4gICAgICAgIHJldHVybiAgPGRpdiBzdHlsZT17b3V0ZXJTdHlsZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiByb2xlPVwicHJvZ3Jlc3NiYXJcIiBhcmlhLXZhbHVlbm93PXtwb3N9IGFyaWEtdmFsdWVtaW49e21pbn0gYXJpYS12YWx1ZW1heD17bWF4fSBzdHlsZT17YmFyU3R5bGV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17Y2FwdGlvblN0eWxlfT57ZGlzcGxheVZhbHVlfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gICAgIFxyXG4gICAgICAgICAgICAgICAgPC9kaXY+IFxyXG5cclxuICAgIH1cclxufVxyXG5cclxuLy88VG9vbHRpcCBib3JkZXI9XCIjZmZmZmZmXCIgcmFkaXVzPVwiNVwiIHBsYWNlbWVudD1cInJpZ2h0XCIgY29udGVudD17dG9vbHRpcH0+PC9Ub29sdGlwPlxyXG5cclxubWFueXdoby5jb21wb25lbnQucmVnaXN0ZXIoJ1BlcmNlbnRQcm9ncmVzc0JhcicsIFBlcmNlbnRQcm9ncmVzc0Jhcik7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQZXJjZW50UHJvZ3Jlc3NCYXI7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL1BlcmNlbnRQcm9ncmVzc0Jhci50c3giLCJkZWNsYXJlIHZhciBtYW55d2hvOiBhbnk7XHJcblxyXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5jbGFzcyBIeXBlcmxpbmsgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8YW55LCBhbnk+IFxyXG57ICAgXHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcyA6IGFueSlcclxuXHR7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbXBvbmVudERpZE1vdW50KCkgXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5mb3JjZVVwZGF0ZSgpO1xyXG4gICAgfVxyXG5cclxuXHRyZW5kZXIoKVxyXG5cdHtcclxuICAgICAgICB2YXIgdG9vbHRpcCA6IHN0cmluZyA9IFwiXCI7XHJcblxyXG4gICAgICAgIHZhciB2YWx1ZSA9IHRoaXMucHJvcHMuY29udGVudFZhbHVlIHx8IFwiXCI7XHJcbiAgICAgICAgdmFyIGRpc3BsYXlWYWx1ZSA9IHZhbHVlICsgXCIlXCI7XHJcblxyXG4gICAgICAgIHZhciB0b29sdGlwIDogc3RyaW5nID0gdmFsdWUgKyBcIiVcIjtcclxuICAgICAgICBcclxuICAgICAgICB2YXIgbGlua1N0eWxlID0ge1xyXG4gICAgICAgICAgICAgICAgXCJmb250LWZhbWlseVwiIDogXCJ0YWhvbWFcIixcclxuICAgICAgICAgICAgICAgIFwiY29sb3JcIiA6IFwiI2ZmZmZmZlwiLFxyXG4gICAgICAgICAgICAgICAgXCJmb250LXNpemVcIiA6IFwiMTBwdFwiLFxyXG4gICAgICAgICAgICAgICAgXCJ3aWR0aFwiIDogXCIxMDAlXCIsXHJcbiAgICAgICAgICAgICAgICBcInRleHQtYWxpZ25cIiA6IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICAgICAgICBcInBvc2l0aW9uXCIgOiBcImFic29sdXRlXCIgYXMgXCJhYnNvbHV0ZVwiLFxyXG4gICAgICAgICAgICAgICAgXCJoZWlnaHRcIjogXCIxMDAlXCIsXHJcbiAgICAgICAgICAgICAgICBcInZlcnRpY2FsLWFsaWduXCI6IFwibWlkZGxlXCIsXHJcbiAgICAgICAgICAgICAgICBcImxpbmUtaGVpZ2h0XCI6IFwiMjAwJVwiLFxyXG4gICAgICAgICAgICAgICAgXCJtaXgtYmxlbmQtbW9kZVwiOiBcImRpZmZlcmVuY2VcIixcclxuXHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgIHZhciBtYXggPSAxMDA7XHJcbiAgICAgICAgdmFyIG1pbiA9IDA7XHJcbiAgICAgICAgdmFyIHBvcyA9IDYwO1xyXG5cclxuICAgICAgICByZXR1cm4gIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj17dmFsdWV9IHRhcmdldD1cIl9ibGFua1wiPnt2YWx1ZX08L2E+ICAgIFxyXG4gICAgICAgICAgICAgICAgPC9kaXY+ICBcclxuICAgIH1cclxufVxyXG5cclxuLy88VG9vbHRpcCBib3JkZXI9XCIjZmZmZmZmXCIgcmFkaXVzPVwiNVwiIHBsYWNlbWVudD1cInJpZ2h0XCIgY29udGVudD17dG9vbHRpcH0+PC9Ub29sdGlwPlxyXG5cclxubWFueXdoby5jb21wb25lbnQucmVnaXN0ZXIoJ0h5cGVybGluaycsIEh5cGVybGluayk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIeXBlcmxpbms7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL0h5cGVybGluay50c3giXSwic291cmNlUm9vdCI6IiJ9