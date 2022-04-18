function e(e,t){if(t.length<e)throw new TypeError(e+" argument"+(e>1?"s":"")+" required, but only "+t.length+" present")}function t(t){e(1,arguments);var n=Object.prototype.toString.call(t);return t instanceof Date||"object"==typeof t&&"[object Date]"===n?new Date(t.getTime()):"number"==typeof t||"[object Number]"===n?new Date(t):("string"!=typeof t&&"[object String]"!==n||"undefined"==typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule"),console.warn((new Error).stack)),new Date(NaN))}function n(n,r){e(2,arguments);var a=t(n),u=t(r),o=a.getTime()-u.getTime();return o<0?-1:o>0?1:o}function r(n,r){e(2,arguments);var a=t(n),u=t(r);return a.getFullYear()-u.getFullYear()}function a(a,u){e(2,arguments);var o=t(a),s=t(u),i=n(o,s),c=Math.abs(r(o,s));o.setFullYear(1584),s.setFullYear(1584);var l=n(o,s)===-i,g=i*(c-Number(l));return 0===g?0:g}function u(n,r){e(2,arguments);var a=t(n),u=t(r),o=a.getFullYear()-u.getFullYear(),s=a.getMonth()-u.getMonth();return 12*o+s}function o(n){e(1,arguments);var r=t(n);return r.setHours(23,59,59,999),r}function s(n){e(1,arguments);var r=t(n),a=r.getMonth();return r.setFullYear(r.getFullYear(),a+1,0),r.setHours(23,59,59,999),r}function i(n){e(1,arguments);var r=t(n);return o(r).getTime()===s(r).getTime()}function c(r,a){e(2,arguments);var o,s=t(r),c=t(a),l=n(s,c),g=Math.abs(u(s,c));if(g<1)o=0;else{1===s.getMonth()&&s.getDate()>27&&s.setDate(30),s.setMonth(s.getMonth()-l*g);var f=n(s,c)===-l;i(t(r))&&1===g&&1===n(r,c)&&(f=!1),o=l*(g-Number(f))}return 0===o?0:o}function l(e){var t=new Date(Date.UTC(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),e.getMinutes(),e.getSeconds(),e.getMilliseconds()));return t.setUTCFullYear(e.getFullYear()),e.getTime()-t.getTime()}function g(n){e(1,arguments);var r=t(n);return r.setHours(0,0,0,0),r}function f(t,n){e(2,arguments);var r=g(t),a=g(n),u=r.getTime()-l(r),o=a.getTime()-l(a);return Math.round((u-o)/864e5)}function h(e,t){var n=e.getFullYear()-t.getFullYear()||e.getMonth()-t.getMonth()||e.getDate()-t.getDate()||e.getHours()-t.getHours()||e.getMinutes()-t.getMinutes()||e.getSeconds()-t.getSeconds()||e.getMilliseconds()-t.getMilliseconds();return n<0?-1:n>0?1:n}function v(n,r){e(2,arguments);var a=t(n),u=t(r),o=h(a,u),s=Math.abs(f(a,u));a.setDate(a.getDate()-o*s);var i=Number(h(a,u)===-o),c=o*(s-i);return 0===c?0:c}Math.pow(10,8);function m(n,r){return e(2,arguments),t(n).getTime()-t(r).getTime()}var d={ceil:Math.ceil,round:Math.round,floor:Math.floor,trunc:function(e){return e<0?Math.ceil(e):Math.floor(e)}};function M(e){return e?d[e]:d.trunc}function D(t,n,r){e(2,arguments);var a=m(t,n)/36e5;return M(null==r?void 0:r.roundingMethod)(a)}function b(t,n,r){e(2,arguments);var a=m(t,n)/6e4;return M(null==r?void 0:r.roundingMethod)(a)}function y(t,n,r){e(2,arguments);var a=m(t,n)/1e3;return M(null==r?void 0:r.roundingMethod)(a)}function N(t){return e(1,arguments),t instanceof Date||"object"==typeof t&&"[object Date]"===Object.prototype.toString.call(t)}function w(n){if(e(1,arguments),!N(n)&&"number"!=typeof n)return!1;var r=t(n);return!isNaN(Number(r))}function T(e){if(null===e||!0===e||!1===e)return NaN;var t=Number(e);return isNaN(t)?t:t<0?Math.ceil(t):Math.floor(t)}function p(n,r){e(2,arguments);var a=t(n),u=T(r);return isNaN(u)?new Date(NaN):u?(a.setDate(a.getDate()+u),a):a}function F(t,n){e(2,arguments);var r=T(n);return p(t,-r)}function Y(n,r){e(2,arguments);var a=t(n),u=T(r);if(isNaN(u))return new Date(NaN);if(!u)return a;var o=a.getDate(),s=new Date(a.getTime());s.setMonth(a.getMonth()+u+1,0);var i=s.getDate();return o>=i?s:(a.setFullYear(s.getFullYear(),s.getMonth(),o),a)}function S(t,n){e(2,arguments);var r=T(n);return Y(t,-r)}function j(t,n){if(e(2,arguments),!n||"object"!=typeof n)return new Date(NaN);var r=n.years?T(n.years):0,a=n.months?T(n.months):0,u=n.weeks?T(n.weeks):0,o=n.days?T(n.days):0,s=n.hours?T(n.hours):0,i=n.minutes?T(n.minutes):0,c=n.seconds?T(n.seconds):0,l=S(t,a+12*r),g=F(l,o+7*u),f=i+60*s,h=c+60*f,v=1e3*h,m=new Date(g.getTime()-v);return m}var U={FORM:document.querySelector(".main__form"),INPUT:document.querySelector(".main__input"),OUTPUT:document.querySelector(".main__output")};U.FORM.addEventListener("submit",(function(r){r.preventDefault();const u=function(r){var u=r.start,o=r.end;e(1,arguments);var s=t(u),i=t(o);if(!w(s))throw new RangeError("Start Date is invalid");if(!w(i))throw new RangeError("End Date is invalid");var l={years:0,months:0,days:0,hours:0,minutes:0,seconds:0},g=n(s,i);l.years=Math.abs(a(s,i));var f=j(s,{years:g*l.years});l.months=Math.abs(c(f,i));var h=j(f,{months:g*l.months});l.days=Math.abs(v(h,i));var m=j(h,{days:g*l.days});l.hours=Math.abs(D(m,i));var d=j(m,{hours:g*l.hours});l.minutes=Math.abs(b(d,i));var M=j(d,{minutes:g*l.minutes});return l.seconds=Math.abs(y(M,i)),l}({start:new Date(U.INPUT.value),end:new Date});!function(e){U.OUTPUT.value=`years: ${e.years},months: ${e.months},hours: ${e.hours},minutes: ${e.minutes}`}(u)}));
//# sourceMappingURL=index.45d351fa.js.map
