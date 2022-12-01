!function(t){var e={};function n(o){if(e[o])return e[o].exports;var r=e[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(o,r,function(e){return t[e]}.bind(null,r));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=2)}([function(t,e){t.exports=React},function(t,e){t.exports=ReactDOM},function(t,e,n){"use strict";function o(t){for(var n in t)e.hasOwnProperty(n)||(e[n]=t[n])}Object.defineProperty(e,"__esModule",{value:!0}),o(n(3)),o(n(4)),o(n(5)),o(n(7)),o(n(8)),o(n(9)),o(n(10)),o(n(11)),o(n(12)),o(n(13)),o(n(14)),o(n(15)),o(n(16)),o(n(17)),o(n(18)),o(n(19)),o(n(20)),o(n(21)),o(n(22)),o(n(23)),o(n(25)),o(n(27)),o(n(28)),o(n(29)),o(n(30)),o(n(31))},function(t,e,n){"use strict";var o,r=this&&this.__extends||(o=function(t,e){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}o(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)});Object.defineProperty(e,"__esModule",{value:!0});var i=n(0),a=function(t){function e(e){return t.call(this,e)||this}return r(e,t),e.prototype.componentDidMount=function(){this.forceUpdate()},e.prototype.render=function(){if(this.props.contentValue){var t=new Date(this.props.contentValue),e=this.elapsedTime(t);return i.createElement("span",null,e)}return null},e.prototype.elapsedTime=function(t){var e=new Date(t.getTime()+60*t.getTimezoneOffset()*1e3),n=Math.round((new Date).getTime()/1e3)-e.getTime()/1e3;if(n>=0){var o={};o.days=Math.floor(n/86400),n-=86400*o.days,o.hours=Math.floor(n/3600),n-=3600*o.hours,o.minutes=Math.floor(n/60),n-=60*o.minutes,o.seconds=Math.floor(n);var r="";return o.days>0&&(r+=o.days+" days"),o.hours>0&&(r.length>0&&(r+=", "),r+=o.hours+" hours"),o.minutes>0&&(r.length>0&&(r+=", "),r+=o.minutes+" minutes"),o.seconds>0&&(r.length>0&&(r+=", "),r+=o.seconds+" seconds"),r}return""},e}(i.Component);manywho.component.register("ElapsedTimeFriendly",a),e.default=a},function(t,e,n){"use strict";var o,r=this&&this.__extends||(o=function(t,e){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}o(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)});Object.defineProperty(e,"__esModule",{value:!0});var i=n(0),a=function(t){function e(e){var n=t.call(this,e)||this;return n.timerID=-1,n}return r(e,t),e.prototype.componentDidMount=function(){this.forceUpdate(),this.timerID=window.setInterval(this.timerEvent.bind(this),1e3)},e.prototype.componentWillUnmount=function(){this.timerID>=0&&(clearInterval(this.timerID),this.timerID=-1)},e.prototype.timerEvent=function(){this.forceUpdate()},e.prototype.render=function(){if(this.props.contentValue){var t=new Date(this.props.contentValue),e=this.elapsedTime(t);return i.createElement("span",null,e)}return null},e.prototype.elapsedTime=function(t){var e=new Date(t.getTime()+60*t.getTimezoneOffset()*1e3),n=Math.round((new Date).getTime()/1e3)-e.getTime()/1e3;if(n>=0){var o={};o.days=Math.floor(n/86400),n-=86400*o.days,o.hours=Math.floor(n/3600),n-=3600*o.hours,o.minutes=Math.floor(n/60),n-=60*o.minutes,o.seconds=Math.floor(n);var r="";return o.days>0&&(r+=o.days+" days"),o.hours>0&&(r.length>0&&(r+=", "),r+=o.hours+" hours"),o.minutes>0&&(r.length>0&&(r+=", "),r+=o.minutes+" minutes"),o.seconds>0&&(r.length>0&&(r+=", "),r+=o.seconds+" seconds"),r}return""},e}(i.Component);manywho.component.register("ElapsedTimeLiveLong",a),e.default=a},function(t,e,n){"use strict";var o,r=this&&this.__extends||(o=function(t,e){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}o(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)});Object.defineProperty(e,"__esModule",{value:!0});var i=n(0),a=n(6),s=function(t){function e(e){var n=t.call(this,e)||this;return n.timerID=-1,n}return r(e,t),e.prototype.componentDidMount=function(){this.forceUpdate(),this.timerID=window.setInterval(this.timerEvent.bind(this),1e3)},e.prototype.componentWillUnmount=function(){this.timerID>=0&&(clearInterval(this.timerID),this.timerID=-1)},e.prototype.timerEvent=function(){this.forceUpdate()},e.prototype.render=function(){if(this.props.contentValue){var t=new Date(this.props.contentValue),e=this.elapsedTime(t);return i.createElement("span",null,e)}return null},e.prototype.elapsedTime=function(t){var e=a.TimeHelpers.getElapsed(t,new Date),n="";return e.days>0&&(n+=e.days+"d"),e.hours>0&&(n.length>0&&(n+="/"),n+=e.hours+"h"),e.minutes>0&&(n.length>0&&(n+="/"),n+=e.minutes+"m"),e.seconds>0&&(n.length>0&&(n+="/"),n+=e.seconds+"s"),n},e}(i.Component);manywho.component.register("ElapsedTimeLiveShort",s),e.default=s},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=function(){function t(){}return t.getElapsed=function(t,e){var n={days:0,hours:0,minutes:0,seconds:0},o=6e4*t.getTimezoneOffset(),r=(new Date(t.getTime()-o),6e4*e.getTimezoneOffset()),i=(new Date(e.getTime()-r),Math.round(e.getTime()-t.getTime()));return n.days=Math.floor(i/864e5),i-=864e5*n.days,n.hours=Math.floor(i/36e5),i-=36e5*n.hours,n.minutes=Math.floor(i/6e4),i-=6e4*n.minutes,n.seconds=Math.floor(i/1e3),n},t}();e.TimeHelpers=o},function(t,e,n){"use strict";var o,r=this&&this.__extends||(o=function(t,e){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}o(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)});Object.defineProperty(e,"__esModule",{value:!0});var i=n(0),a=function(t){function e(e){return t.call(this,e)||this}return r(e,t),e.prototype.componentDidMount=function(){this.forceUpdate()},e.prototype.render=function(){if(this.props.contentValue){var t=new Date(this.props.contentValue),e=this.elapsedTime(t);return i.createElement("span",null,e)}return null},e.prototype.elapsedTime=function(t){var e=Math.round((new Date).getTime()/1e3)-t.getTime()/1e3;if(e>=0){var n={};n.days=Math.floor(e/86400),e-=86400*n.days,n.hours=Math.floor(e/3600),e-=3600*n.hours,n.minutes=Math.floor(e/60),e-=60*n.minutes,n.seconds=Math.floor(e);var o="";return n.days>0&&(o+=n.days+" days"),n.hours>0&&(o.length>0&&(o+=", "),o+=n.hours+" hours"),n.minutes>0&&(o.length>0&&(o+=", "),o+=n.minutes+" minutes"),n.seconds>0&&(o.length>0&&(o+=", "),o+=n.seconds+" seconds"),o}return""},e}(i.Component);manywho.component.register("ElapsedTime",a),e.default=a},function(t,e,n){"use strict";var o,r=this&&this.__extends||(o=function(t,e){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}o(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)});Object.defineProperty(e,"__esModule",{value:!0});var i=n(0),a=function(t){function e(e){return t.call(this,e)||this}return r(e,t),e.prototype.componentDidMount=function(){this.forceUpdate()},e.prototype.render=function(){if(this.props.contentValue){var t=new Intl.DateTimeFormat("en-GB",{year:"numeric",month:"long",day:"2-digit"}).format(new Date(this.props.contentValue));return i.createElement("span",null,t)}return null},e}(i.Component);manywho.component.register("DateDDMMMYY",a),e.default=a},function(t,e,n){"use strict";var o,r=this&&this.__extends||(o=function(t,e){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}o(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)});Object.defineProperty(e,"__esModule",{value:!0});var i=n(0),a=function(t){function e(e){return t.call(this,e)||this}return r(e,t),e.prototype.componentDidMount=function(){this.forceUpdate()},e.prototype.render=function(){if(this.props.contentValue){for(var t=new Intl.DateTimeFormat("en-GB",{year:"numeric",month:"2-digit",day:"2-digit"}).format(new Date(this.props.contentValue));t.indexOf("/")>=0;)t=t.replace("/","-");return i.createElement("span",null,t)}return null},e}(i.Component);manywho.component.register("DateDashedDDMMYYYY",a),e.default=a},function(t,e,n){"use strict";var o,r=this&&this.__extends||(o=function(t,e){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}o(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)});Object.defineProperty(e,"__esModule",{value:!0});var i=n(0),a=function(t){function e(e){return t.call(this,e)||this}return r(e,t),e.prototype.componentDidMount=function(){this.forceUpdate()},e.prototype.render=function(){if(this.props.contentValue){for(var t=new Intl.DateTimeFormat("en-GB",{year:"numeric",month:"long",day:"2-digit"}).format(new Date(this.props.contentValue));t.indexOf(" ")>=0;)t=t.replace(" ","-");return i.createElement("span",null,t)}return null},e}(i.Component);manywho.component.register("DateDashedDDMMMYYYY",a),e.default=a},function(t,e,n){"use strict";var o,r=this&&this.__extends||(o=function(t,e){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}o(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)});Object.defineProperty(e,"__esModule",{value:!0});var i=n(0),a=function(t){function e(e){return t.call(this,e)||this}return r(e,t),e.prototype.componentDidMount=function(){this.forceUpdate()},e.prototype.render=function(){if(this.props.contentValue){var t=new Intl.DateTimeFormat("en-GB",{year:"numeric",month:"long",day:"2-digit",hour:"2-digit",minute:"2-digit"}).format(new Date(this.props.contentValue));return i.createElement("span",null,t)}return null},e}(i.Component);manywho.component.register("DateTimeDDMMMYYHHMM",a),e.default=a},function(t,e,n){"use strict";var o,r=this&&this.__extends||(o=function(t,e){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}o(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)});Object.defineProperty(e,"__esModule",{value:!0});var i=n(0),a=function(t){function e(e){return t.call(this,e)||this}return r(e,t),e.prototype.componentDidMount=function(){this.forceUpdate()},e.prototype.render=function(){var t="glyphicon glyphicon-";return"true"===this.props.contentValue?t+="ok":t+="remove",i.createElement("span",{className:t})},e}(i.Component);manywho.component.register("BooleanIcon",a),e.default=a},function(t,e,n){"use strict";var o,r=this&&this.__extends||(o=function(t,e){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}o(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)});Object.defineProperty(e,"__esModule",{value:!0});var i=n(0),a=function(t){function e(e){return t.call(this,e)||this}return r(e,t),e.prototype.componentDidMount=function(){this.forceUpdate()},e.prototype.render=function(){var t;switch(this.props.contentValue.toLowerCase()){case"s":t=i.createElement("span",{className:"glyphicon glyphicon-hourglass",title:"Staged"});break;case"c":t=i.createElement("span",{className:"glyphicon glyphicon-ok",title:"Complete"});break;case"a":t=i.createElement("span",{className:"glyphicon glyphicon-flash",title:"Active"});break;case"complete":t=i.createElement("img",{className:"tcf-image",src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAd0lEQVR42mNggAKlMIYGpVCG/ygYKMaADGASBkUs/13mcIExiA0TRzHJaQYnVgw3GcTQy2P+bz+JAysGyYFNBRHWXex4MVyheTMrXgxXqJnK+N+4mhkrBslBFEI9o1/MhBWjBBMsGNTiGf7r5DKCMYiNEjzEBjgAU8qK7Su1nYwAAAAASUVORK5CYII=",title:"Complete"});break;case"error":t=i.createElement("img",{className:"tcf-image",src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAZ0lEQVR42mNggIICGYmGzVwM/5ExSIwBGcAkXilzoGCYOIpJzxTZsWK4ySDGYwV2vBhsKoi4J8cGxugAJg5XeEuGFYzRAUwcrvCqJCteDFYI88x5cRasGCWYYMFwRIgJBaMED7EBDgCQirDFSBNkJAAAAABJRU5ErkJggg==",title:"Complete"});break;default:t=i.createElement("span",{className:"glyphicon glyphicon-option-horizontal",title:"Not Set"})}return t},e}(i.Component);manywho.component.register("StatusIcon",a),e.default=a},function(t,e,n){"use strict";var o,r=this&&this.__extends||(o=function(t,e){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}o(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)});Object.defineProperty(e,"__esModule",{value:!0});var i=n(0),a=n(1),s=function(t){function e(e){return t.call(this,e)||this}return r(e,t),e.prototype.componentDidMount=function(){this.forceUpdate()},e.prototype.getAttributeValue=function(t,e,n){for(var o in t)if(o===e+"_"+n)return t[o];return null},e.prototype.getValueFromList=function(t,e,n,o){for(var r="",i=!1,a=0;a<t.length;a++){r="";for(var s=t[a],u=0;u<s.properties.length;u++){var c=s.properties[u];c.developerName===n&&(r=c.contentValue),c.developerName===e&&c.contentValue===o&&(i=!0)}if(!0===i)return r}return""},e.prototype.render=function(){var t=a.findDOMNode(this),e="";if(this.props.contentValue&&t){for(var n=10,o=t.parentElement;!o.classList.contains("table-container")||0==n;)o=o.parentElement,n--;if(0==n)return"";var r=o.attributes.getNamedItem("id").value,s=manywho.model.getComponent(r,this.props.flowKey),u=this.props.propertyId,c=this.getAttributeValue(s.attributes,"LookupListComponent",u),p=this.getAttributeValue(s.attributes,"LookupListKeyAttribute",u),l=this.getAttributeValue(s.attributes,"LookupListResultAttribute",u);if(c){var f=manywho.model.getComponentByName(c,this.props.flowKey);f&&(e=this.getValueFromList(f.objectData,p,l,this.props.contentValue))}}return i.createElement("span",null,e)},e}(i.Component);manywho.component.register("LookupValue",s),e.default=s},function(t,e,n){"use strict";var o,r=this&&this.__extends||(o=function(t,e){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}o(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)});Object.defineProperty(e,"__esModule",{value:!0});var i=n(0),a=function(t){function e(e){return t.call(this,e)||this}return r(e,t),e.prototype.componentDidMount=function(){this.forceUpdate()},e.prototype.render=function(){if(this.props.contentValue){var t=this.props.contentValue,e=Number.parseInt(this.props.contentValue);t.indexOf(".")>=0&&(e*=1e3);var n=new Date(e),o=new Intl.DateTimeFormat("en-GB",{year:"numeric",month:"long",day:"2-digit"}).format(n);return i.createElement("span",null,o)}return null},e}(i.Component);manywho.component.register("EpochDateDDMMMYY",a),e.default=a},function(t,e,n){"use strict";var o,r=this&&this.__extends||(o=function(t,e){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}o(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)});Object.defineProperty(e,"__esModule",{value:!0});var i=n(0),a=function(t){function e(e){return t.call(this,e)||this}return r(e,t),e.prototype.componentDidMount=function(){this.forceUpdate()},e.prototype.render=function(){if(this.props.contentValue){var t=this.props.contentValue,e=Number.parseInt(this.props.contentValue);t.indexOf(".")>=0&&(e*=1e3);var n=new Date(e),o=new Intl.DateTimeFormat("en-GB",{year:"numeric",month:"long",day:"2-digit",hour:"2-digit",minute:"2-digit"}).format(n);return i.createElement("span",null,o)}return null},e}(i.Component);manywho.component.register("EpochDateTimeDDMMMYYHHMM",a),e.default=a},function(t,e,n){"use strict";var o,r=this&&this.__extends||(o=function(t,e){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}o(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)});Object.defineProperty(e,"__esModule",{value:!0});var i=n(0),a=function(t){function e(e){return t.call(this,e)||this}return r(e,t),e.prototype.componentDidMount=function(){this.forceUpdate()},e.prototype.render=function(){var t=parseInt(this.props.contentValue)||0,e=t+"%",n={border:"none",borderRadius:"4px",backgroundColor:"#7D9ACF",width:e,textAlign:"center",height:"100%"};return i.createElement("div",{style:{border:"2px solid #adadad",borderRadius:"5px",backgroundColor:"#e3e3e3",height:"30px",boxSizing:"content-box",position:"relative",display:"grid",alignContent:"middle",margin:"0 !important"}},i.createElement("div",{role:"progressbar","aria-valuenow":60,"aria-valuemin":0,"aria-valuemax":100,style:n},i.createElement("span",{style:{fontFamily:"tahoma",color:"#ffffff",fontSize:"10pt",width:"100%",textAlign:"center",position:"absolute",height:"100%",verticalAlign:"middle",lineHeight:"200%",mixBlendMode:"difference",left:0}},e)))},e}(i.Component);manywho.component.register("PercentProgressBar",a),e.default=a},function(t,e,n){"use strict";var o,r=this&&this.__extends||(o=function(t,e){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}o(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)});Object.defineProperty(e,"__esModule",{value:!0});var i=n(0),a=function(t){function e(e){return t.call(this,e)||this}return r(e,t),e.prototype.componentDidMount=function(){this.forceUpdate()},e.prototype.render=function(){var t=this.props.contentValue||"";return i.createElement("div",null,i.createElement("a",{href:t,target:"_blank"},t))},e}(i.Component);manywho.component.register("Hyperlink",a),e.default=a},function(t,e,n){"use strict";var o,r=this&&this.__extends||(o=function(t,e){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}o(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)});Object.defineProperty(e,"__esModule",{value:!0});var i=n(0),a=n(1),s=function(t){function e(e){return t.call(this,e)||this}return r(e,t),e.prototype.componentDidMount=function(){this.forceUpdate()},e.prototype.render=function(){var t,e=a.findDOMNode(this);if(e){for(var n=e.parentElement,o=10;!n.classList.contains("table-container")||0==o;)n=n.parentElement,o--;if(0==o)return"";var r=n.attributes.getNamedItem("id").value,s=manywho.model.getComponent(r,this.props.flowKey);this.props.propertyId;t=this.props.contentValue||"",s.attributes["image-scaled-width"]||50}if(t){return i.createElement("div",{style:{boxSizing:"content-box",position:"relative",display:"table-cell",alignContent:"middle",margin:"0 !important"}},i.createElement("img",{src:t,style:{marginLeft:"auto",marginRight:"auto",height:"150px",width:"auto"}}))}return i.createElement("div",null)},e}(i.Component);manywho.component.register("Thumbnail",s),e.default=s},function(t,e,n){"use strict";var o,r=this&&this.__extends||(o=function(t,e){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}o(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)});Object.defineProperty(e,"__esModule",{value:!0});var i=n(0),a=function(t){function e(e){return t.call(this,e)||this}return r(e,t),e.prototype.componentDidMount=function(){this.forceUpdate()},e.prototype.render=function(){var t="$"+this.props.contentValue;return i.createElement("span",null,t)},e}(i.Component);manywho.component.register("DollarValue",a),e.default=a},function(t,e,n){"use strict";var o,r=this&&this.__extends||(o=function(t,e){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}o(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)});Object.defineProperty(e,"__esModule",{value:!0});var i=n(0),a=n(1),s=function(t){function e(e){var n=t.call(this,e)||this;return n.getParentTableElement=n.getParentTableElement.bind(n),n.getParentTableComponentId=n.getParentTableComponentId.bind(n),n.getParentRowElement=n.getParentRowElement.bind(n),n}return r(e,t),e.prototype.componentDidMount=function(){this.forceUpdate()},e.prototype.getAttributeValue=function(t,e){for(var n in t)if(n===e)return t[n];return null},e.prototype.render=function(){var t=a.findDOMNode(this),e=this.props.contentValue;if(t){var n=this.getParentTableElement(),o=this.getParentRowElement(),r=this.getParentTableComponentId(n),s=manywho.model.getComponent(r,this.props.flowKey),u=this.getAttributeValue(s.attributes,"trfConfig"),c=JSON.parse(u);console.log(c),c[e]&&o.classList.add(c[e])}return i.createElement("span",null,e)},e.prototype.getParentTableElement=function(){for(var t=10,e=a.findDOMNode(this).parentElement;!e.classList.contains("table-container")||0==t;)e=e.parentElement,t--;if(0!=t)return e},e.prototype.getParentRowElement=function(){for(var t=10,e=a.findDOMNode(this).parentElement;"tr"!==e.tagName.toLowerCase()||0==t;)e=e.parentElement,t--;if(0!=t)return e},e.prototype.getParentTableComponentId=function(t){return t.attributes.getNamedItem("id").value},e}(i.Component);manywho.component.register("TableRowStyler",s),e.default=s},function(t,e,n){"use strict";var o,r=this&&this.__extends||(o=function(t,e){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}o(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)});Object.defineProperty(e,"__esModule",{value:!0});var i=n(0),a=n(1),s=function(t){function e(e){var n=t.call(this,e)||this;return n.isOverButton=!1,n.isOverDialog=!1,n.hoverBoxShown=!1,n.getParentTableElement=n.getParentTableElement.bind(n),n.getParentTableComponentId=n.getParentTableComponentId.bind(n),n.getParentRowElement=n.getParentRowElement.bind(n),n.overButton=n.overButton.bind(n),n.outButton=n.outButton.bind(n),n.overDialog=n.overDialog.bind(n),n.outDialog=n.outDialog.bind(n),n.calcShown=n.calcShown.bind(n),n}return r(e,t),e.prototype.componentDidMount=function(){this.forceUpdate()},e.prototype.getAttributeValue=function(t,e){for(var n in t)if(n===e)return t[n];return null},e.prototype.overButton=function(){!1===this.isOverButton&&(this.isOverButton=!0,this.calcShown())},e.prototype.outButton=function(t){!0===this.isOverButton&&(this.isOverButton=!1,this.calcShown())},e.prototype.overDialog=function(){!1===this.isOverDialog&&(this.isOverDialog=!0,this.calcShown())},e.prototype.outDialog=function(){!0===this.isOverDialog&&(this.isOverDialog=!1,this.calcShown())},e.prototype.calcShown=function(){!0===this.isOverButton||!0===this.isOverDialog?!1===this.hoverBoxShown&&(this.hoverBoxShown=!0,this.forceUpdate()):!0===this.hoverBoxShown&&(this.hoverBoxShown=!1,this.forceUpdate())},e.prototype.render=function(){var t,e,n=a.findDOMNode(this),o=this.props.contentValue;if(n){var r=this.getParentTableElement(),s=this.getParentTDElement();s.style.position="relative",s.style.height="100%",s.style.padding="0px";var u=this.getParentTableComponentId(r),c=manywho.model.getComponent(u,this.props.flowKey);e=this.getAttributeValue(c.attributes,"hoverboxIcon")||"question-sign";var p,l=void 0,f=void 0,h=void 0;switch((this.getAttributeValue(c.attributes,"hoverboxPosition")||"left").toLowerCase()){case"left":f="calc(100% + 5px)",p="calc(-50%)";break;case"lower-left":f="calc(100% + 5px)",p="calc(50% + 5px);";break;case"upper-left":f="calc(100% + 5px)",h="calc(50% + 5px)";break;case"above":f="calc(-50%)",h="calc(100% + 5px)";break;case"below":f="calc(-50%)",p="calc(100% + 5px)";break;case"right":l="calc(100% + 5px)",p="calc(-50%)";break;case"lower-right":l="calc(100% + 5px)",p="calc(50% + 5px);";break;case"upper-right":l="calc(100% + 5px)",h="calc(50% + 5px)"}!0===this.hoverBoxShown&&(t=i.createElement("div",{className:"hoverbox-dialog",style:{display:"flex",position:"absolute",left:l,right:f,top:p,bottom:h,backgroundColor:"#fefefe",border:"2px solid #000",borderRadius:"5px",padding:"20px",zIndex:100},onMouseEnter:this.overDialog,onMouseLeave:this.outDialog,dangerouslySetInnerHTML:{__html:o}}))}return i.createElement("div",{className:"hoverbox",style:{position:"absolute",width:"100%",height:"100%",display:"flex",flexDirection:"row",justifyContent:"center"},onMouseLeave:this.outButton},i.createElement("div",{className:"hoverbox-button",style:{position:"relative",backgroundColor:"#43c35f",padding:"10px",borderRadius:"50%",display:"flex",margin:"auto"},onMouseEnter:this.overButton},t,i.createElement("span",{className:"glyphicon glyphicon-"+e+" hoverbox-icon",style:{color:"white",marginLeft:"auto",marginRight:"auto",marginTop:"-2px"}})))},e.prototype.getParentTableElement=function(){for(var t=10,e=a.findDOMNode(this).parentElement;!e.classList.contains("table-container")||0==t;)e=e.parentElement,t--;if(0!=t)return e},e.prototype.getParentTDElement=function(){for(var t=10,e=a.findDOMNode(this).parentElement;"td"!==e.tagName.toLowerCase()||0==t;)e=e.parentElement,t--;if(0!=t)return e},e.prototype.getParentRowElement=function(){for(var t=10,e=a.findDOMNode(this).parentElement;"tr"!==e.tagName.toLowerCase()||0==t;)e=e.parentElement,t--;if(0!=t)return e},e.prototype.getParentTableComponentId=function(t){return t.attributes.getNamedItem("id").value},e}(i.Component);manywho.component.register("HoverBox",s),e.default=s},function(t,e,n){"use strict";var o,r=this&&this.__extends||(o=function(t,e){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}o(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)});Object.defineProperty(e,"__esModule",{value:!0});var i=n(0),a=n(1);n(24);var s=function(t){function e(e){return t.call(this,e)||this}return r(e,t),e.prototype.componentDidMount=function(){this.getTable=this.getTable.bind(this),this.voteUp=this.voteUp.bind(this),this.voteDown=this.voteDown.bind(this),this.getTable(),this.forceUpdate()},e.prototype.getTable=function(){for(var t=10,e=a.findDOMNode(this).parentElement;!e.classList.contains("table-container")||0==t;)e=e.parentElement,t--;if(0==t)return"";var n=e.attributes.getNamedItem("id").value;this.table=manywho.model.getComponent(n,this.props.flowKey)},e.prototype.getTableRow=function(t){var e,n=manywho.model.getComponent(this.table.id,this.props.flowKey);return n&&n.objectData.forEach((function(n){n.internalId===t&&(e=n)})),e},e.prototype.voteUp=function(t){var e=this.getAttributeValue(this.table.attributes,"onVoteUp","");if(e.length>0){var n=this.getOutcome(e);if(n){var o={objectData:[this.getTableRow(this.props.id)]};manywho.state.setComponent(this.table.id,o,this.props.flowKey,!0),manywho.component.onOutcome(n,null,this.props.flowKey)}}},e.prototype.voteDown=function(t){var e=this.getAttributeValue(this.table.attributes,"onVoteDown","");if(e.length>0){var n=this.getOutcome(e);if(n){var o={objectData:[this.getTableRow(this.props.id)]};manywho.state.setComponent(this.table.id,o,this.props.flowKey,!0),manywho.component.onOutcome(n,null,this.props.flowKey)}}},e.prototype.getAttributeValue=function(t,e,n){return t[e]?t[e]:n},e.prototype.getOutcome=function(t){var e,n=manywho.model.getOutcomes(this.table.id,this.props.flowKey);return n.forEach((function(n){n.developerName===t&&(e=n)})),(n=manywho.model.getOutcomes(null,this.props.flowKey)).forEach((function(n){n.developerName===t&&(e=n)})),e},e.prototype.render=function(){var t=parseInt(this.props.contentValue);return i.createElement("div",{className:"voteup"},i.createElement("div",{className:"voteup-element"},i.createElement("span",{className:"glyphicon glyphicon-triangle-top voteup-button",title:"Vote App Up",onClick:this.voteUp})),i.createElement("div",{className:"voteup-element"},i.createElement("span",{className:"voteup-label"},t)),i.createElement("div",{className:"voteup-element"},i.createElement("span",{className:"glyphicon glyphicon-triangle-bottom voteup-button",title:"Vote App Down",onClick:this.voteDown})))},e}(i.Component);manywho.component.register("VoteUp",s),e.default=s},function(t,e,n){},function(t,e,n){"use strict";var o,r=this&&this.__extends||(o=function(t,e){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}o(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)});Object.defineProperty(e,"__esModule",{value:!0});var i=n(0),a=n(1);n(26);var s=function(t){function e(e){return t.call(this,e)||this}return r(e,t),e.prototype.componentDidMount=function(){this.getTable=this.getTable.bind(this),this.voteUp=this.voteUp.bind(this),this.voteDown=this.voteDown.bind(this),this.getTable(),this.forceUpdate()},e.prototype.getTable=function(){for(var t=10,e=a.findDOMNode(this).parentElement;!e.classList.contains("table-container")||0==t;)e=e.parentElement,t--;if(0==t)return"";var n=e.attributes.getNamedItem("id").value;this.table=manywho.model.getComponent(n,this.props.flowKey)},e.prototype.getTableRow=function(t){var e,n=manywho.model.getComponent(this.table.id,this.props.flowKey);return n&&n.objectData.forEach((function(n){n.internalId===t&&(e=n)})),e},e.prototype.voteUp=function(t){var e=this.getAttributeValue(this.table.attributes,"onVoteUp","");if(e.length>0){var n=this.getOutcome(e);if(n){var o={objectData:[this.getTableRow(this.props.id)]};manywho.state.setComponent(this.table.id,o,this.props.flowKey,!0),manywho.component.onOutcome(n,null,this.props.flowKey)}}},e.prototype.voteDown=function(t){var e=this.getAttributeValue(this.table.attributes,"onVoteUp","");if(e.length>0&&this.getOutcome(e))this.getTableRow(this.props.id)},e.prototype.getAttributeValue=function(t,e,n){return t[e]?t[e]:n},e.prototype.getOutcome=function(t){var e,n=manywho.model.getOutcomes(this.table.id,this.props.flowKey);return n.forEach((function(n){n.developerName===t&&(e=n)})),(n=manywho.model.getOutcomes(null,this.props.flowKey)).forEach((function(n){n.developerName===t&&(e=n)})),e},e.prototype.render=function(){var t=parseInt(this.props.contentValue);return i.createElement("div",{className:"ranking"},i.createElement("span",{className:"ranking-label"},t))},e}(i.Component);manywho.component.register("Ranking",s),e.default=s},function(t,e,n){},function(t,e,n){"use strict";var o,r=this&&this.__extends||(o=function(t,e){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}o(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)});Object.defineProperty(e,"__esModule",{value:!0});var i=n(0),a=function(t){function e(e){return t.call(this,e)||this}return r(e,t),e.prototype.componentDidMount=function(){this.forceUpdate()},e.prototype.render=function(){var t;switch(this.props.contentValue){case"1":t=i.createElement("span",null,"Yes");break;case"0":t=i.createElement("span",null,"No");break;default:t=i.createElement("span",null)}return t},e}(i.Component);manywho.component.register("IntYesNo",a),e.default=a},function(t,e,n){"use strict";var o,r=this&&this.__extends||(o=function(t,e){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}o(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)});Object.defineProperty(e,"__esModule",{value:!0});var i=n(0),a=function(t){function e(e){return t.call(this,e)||this}return r(e,t),e.prototype.componentDidMount=function(){this.forceUpdate()},e.prototype.render=function(){var t;switch(this.props.contentValue){case"1":t=i.createElement("span",null,"Active");break;case"0":t=i.createElement("span",null,"Inactive");break;default:t=i.createElement("span",null)}return t},e}(i.Component);manywho.component.register("IntActiveInactive",a),e.default=a},function(t,e,n){"use strict";var o,r=this&&this.__extends||(o=function(t,e){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}o(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)});Object.defineProperty(e,"__esModule",{value:!0});var i=n(0),a=function(t){function e(e){return t.call(this,e)||this}return r(e,t),e.prototype.componentDidMount=function(){this.forceUpdate()},e.prototype.render=function(){if(this.props.contentValue){var t=new Date(this.props.contentValue);return i.createElement("span",null,t.toLocaleDateString())}return null},e}(i.Component);e.default=a,manywho.component.register("DateLocale",a)},function(t,e,n){"use strict";var o,r=this&&this.__extends||(o=function(t,e){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}o(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)});Object.defineProperty(e,"__esModule",{value:!0});var i=n(0),a=function(t){function e(e){return t.call(this,e)||this}return r(e,t),e.prototype.componentDidMount=function(){this.forceUpdate()},e.prototype.render=function(){if(this.props.contentValue){var t=new Date(this.props.contentValue);return i.createElement("span",null,t.toLocaleString())}return null},e}(i.Component);e.default=a,manywho.component.register("DateTimeLocale",a)},function(t,e,n){"use strict";var o,r=this&&this.__extends||(o=function(t,e){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}o(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)});Object.defineProperty(e,"__esModule",{value:!0});var i=n(0),a=function(t){function e(e){return t.call(this,e)||this}return r(e,t),e.prototype.componentDidMount=function(){this.forceUpdate()},e.prototype.render=function(){var t=this.props.contentValue||0,e=(Math.round(100*t)/100).toFixed(2);return i.createElement("div",null,e)},e}(i.Component);e.default=a,manywho.component.register("TwoDecimal",a)}]);