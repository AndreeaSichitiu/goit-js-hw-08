function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o=/^\s+|\s+$/g,r=/^[-+]0x[0-9a-f]+$/i,i=/^0b[01]+$/i,a=/^0o[0-7]+$/i,u=parseInt,f="object"==typeof n&&n&&n.Object===Object&&n,l="object"==typeof self&&self&&self.Object===Object&&self,c=f||l||Function("return this")(),s=Object.prototype.toString,d=Math.max,m=Math.min,v=function(){return c.Date.now()};function g(e,t,n){var o,r,i,a,u,f,l=0,c=!1,s=!1,g=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function y(t){var n=o,i=r;return o=r=void 0,l=t,a=e.apply(i,n)}function T(e){return l=e,u=setTimeout(S,t),c?y(e):a}function j(e){var n=e-f;return void 0===f||n>=t||n<0||s&&e-l>=i}function S(){var e=v();if(j(e))return h(e);u=setTimeout(S,function(e){var n=t-(e-f);return s?m(n,i-(e-l)):n}(e))}function h(e){return u=void 0,g&&o?y(e):(o=r=void 0,a)}function w(){var e=v(),n=j(e);if(o=arguments,r=this,f=e,n){if(void 0===u)return T(f);if(s)return u=setTimeout(S,t),y(f)}return void 0===u&&(u=setTimeout(S,t)),a}return t=b(t)||0,p(n)&&(c=!!n.leading,i=(s="maxWait"in n)?d(b(n.maxWait)||0,t):i,g="trailing"in n?!!n.trailing:g),w.cancel=function(){void 0!==u&&clearTimeout(u),l=0,o=f=r=u=void 0},w.flush=function(){return void 0===u?a:h(v())},w}function p(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function b(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==s.call(e)}(e))return NaN;if(p(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=p(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(o,"");var n=i.test(e);return n||a.test(e)?u(e.slice(2),n?2:8):r.test(e)?NaN:+e}t=function(e,t,n){var o=!0,r=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return p(n)&&(o="leading"in n?!!n.leading:o,r="trailing"in n?!!n.trailing:r),g(e,t,{leading:o,maxWait:t,trailing:r})};const y=document.querySelector(".feedback-form"),T=document.querySelector('label [name="email"]'),j=document.querySelector('label [name="message"]');y.addEventListener("input",e(t)((function(){const e=T.value,t=j.value,n={email:e,message:t};console.log(n);const o=JSON.stringify(n);localStorage.setItem("feedback-form-state",o)}),500)),y.addEventListener("submit",(function(e){e.preventDefault();const{elements:{email:t,message:n}}=e.currentTarget;if(""===t.value||""===n.value)return alert("Toate radurile trebuie completate!");console.log(`Email: ${t.value}, Message: ${n.value}`),e.currentTarget.reset(),localStorage.removeItem("feedback-form-state")})),function(){let e=JSON.parse(localStorage.getItem("feedback-form-state"));e&&(T.value=e.email,j.value=e.message)}();
//# sourceMappingURL=03-feedback.ff8665df.js.map