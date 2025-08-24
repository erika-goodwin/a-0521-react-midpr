(function () {
  var eh_exp = {
    client: "WHM",
    exp: "HeaderCta",
    var: "varA",
    waitUntil: function (predicate, success, error, waitTime = 10000) {
      let int = setInterval(function () {
        if (predicate()) {
          clearInterval(int);
          int = null;
          success();
        }
      }, 500);
      setTimeout(function () {
        if (int !== null) {
          clearInterval(int);
          if (typeof error === "function") {
            error();
          }
        }
      }, waitTime);
    },
    waitForPromise: function (predicate, waitTime = 500) {
      return new Promise(function waitToResolve(resolve) {
        if (predicate()) {
          resolve();
        } else {
          setTimeout(function () {
            waitToResolve(resolve);
          }, waitTime);
        }
      });
    },
    build: function () {
      var { waitUntil, waitForPromise } = this;
      var scope = {
        data: {
          cta: {
            name: "Continue",
            href: "/",
          },
        },
        mainJS: function () {
          /* PASTE */

          vwo_$(".nav-item.hide-below-md").after(
            '<li class="nav-item hide-below-md" vwo-element-id="1705954976434"><meta charset="utf-8"><meta http-equiv="X-UA-Compatible" content="IE=edge"><title>Donate button</title><style>*,::after,::before {box-sizing: border-box}* {min-width: 0}html {font-family: "IBM Plex Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";/*!rtl:prepend:"IBM Plex Sans Arabic", */-webkit-text-size-adjust: 100%;-webkit-tap-highlight-color: transparent;-webkit-font-smoothing: antialiased;-moz-osx-font-smoothing: grayscale;text-rendering: optimizeLegibility}body {font-family: "IBM Plex Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";/*!rtl:prepend:"IBM Plex Sans Arabic", */text-align: left;font-weight: 400;color: #212830;background-color: rgba(0, 0, 0, 0);margin: 0;overscroll-behavior-y: none}form {margin: 0}button,input,optgroup,select,textarea {font-family: inherit}.focus-outline:focus {outline-width: 0}.js-focus-visible .focus-outline[data-focus-visible-added]:focus {outline-width: initial}[v-cloak] {display: none}body {font-size: 16px;line-height: 1.2}.button {position: relative;display: table;table-layout: fixed;padding: 4px 1.5em 4px 1em;text-align: center;color: #fff;background-color: #2797ff;font-size: 16px;line-height: 1.25;font-weight: 600;border-radius: 6px;cursor: pointer;overflow: hidden}.button-icon-wrapper {display: table-cell;vertical-align: middle;transform: rotate(.1deg)}.button-icon {position: relative;z-index: 2}.button-icon svg {display: block;width: 1em;height: 1em;position: relative;z-index: 2}.button-ripple {position: absolute;top: 50%;left: 50%;/*!rtl:ignore;*/transform: translate(-50%, -50%);opacity: 0;border-radius: 50%;z-index: 1;background-color: rgba(255, 255, 255, .15);width: 240px;height: 240px}.button-hover-bg {position: absolute;top: 0;left: 0;width: 100%;height: 100%;opacity: 0;border-radius: 6px;z-index: 0}.button-label-wrapper {display: table-cell;vertical-align: middle}.button-label {position: relative;z-index: 2;padding-left: 12px;white-space: nowrap}.button:hover {cursor: pointer}.button:hover .button-hover-bg {opacity: .1}</style><style>/* ibm-plex-sans-300 - vietnamese_latin-ext_latin_greek_cyrillic-ext_cyrillic */@font-face {font-family: \'IBM Plex Sans\';font-style: normal;font-weight: 300;font-display: swap;src: url(https://static.fundraiseup.com/_/packages/common-fonts/ibm-plex-sans/ibm-plex-sans-v8-vietnamese_latin-ext_latin_greek_cyrillic-ext_cyrillic-300.e0e2d0f2f458.woff2) format(\'woff2\');}/* ibm-plex-sans-regular - vietnamese_latin-ext_latin_greek_cyrillic-ext_cyrillic */@font-face {font-family: \'IBM Plex Sans\';font-style: normal;font-weight: 400;font-display: swap;src: url(https://static.fundraiseup.com/_/packages/common-fonts/ibm-plex-sans/ibm-plex-sans-v8-vietnamese_latin-ext_latin_greek_cyrillic-ext_cyrillic-regular.c9e466876957.woff2) format(\'woff2\');}/* ibm-plex-sans-500 - vietnamese_latin-ext_latin_greek_cyrillic-ext_cyrillic */@font-face {font-family: \'IBM Plex Sans\';font-style: normal;font-weight: 500;font-display: swap;src: url(https://static.fundraiseup.com/_/packages/common-fonts/ibm-plex-sans/ibm-plex-sans-v8-vietnamese_latin-ext_latin_greek_cyrillic-ext_cyrillic-500.cc65a7d46bec.woff2) format(\'woff2\');}/* ibm-plex-sans-600 - vietnamese_latin-ext_latin_greek_cyrillic-ext_cyrillic */@font-face {font-family: \'IBM Plex Sans\';font-style: normal;font-weight: 600;font-display: swap;src: url(https://static.fundraiseup.com/_/packages/common-fonts/ibm-plex-sans/ibm-plex-sans-v8-vietnamese_latin-ext_latin_greek_cyrillic-ext_cyrillic-600.643ad5d92cd7.woff2) format(\'woff2\');}/* ibm-plex-sans-700 - vietnamese_latin-ext_latin_greek_cyrillic-ext_cyrillic */@font-face {font-family: \'IBM Plex Sans\';font-style: normal;font-weight: 700;font-display: swap;src: url(https://static.fundraiseup.com/_/packages/common-fonts/ibm-plex-sans/ibm-plex-sans-v8-vietnamese_latin-ext_latin_greek_cyrillic-ext_cyrillic-700.d6502c623b1b.woff2) format(\'woff2\');}/* ibm-plex-sans-arabic-300 - latin_arabic */@font-face {font-family: \'IBM Plex Sans Arabic\';font-style: normal;font-weight: 300;font-display: swap;src: url(https://static.fundraiseup.com/_/packages/common-fonts/ibm-plex-sans-arabic/ibm-plex-sans-arabic-v7-latin_arabic-300.1cd3c34a8f73.woff2) format(\'woff2\');}/* ibm-plex-sans-arabic-regular - latin_arabic */@font-face {font-family: \'IBM Plex Sans Arabic\';font-style: normal;font-weight: 400;font-display: swap;src: url(https://static.fundraiseup.com/_/packages/common-fonts/ibm-plex-sans-arabic/ibm-plex-sans-arabic-v7-latin_arabic-regular.6b4fec9e65f4.woff2) format(\'woff2\');}/* ibm-plex-sans-arabic-500 - latin_arabic */@font-face {font-family: \'IBM Plex Sans Arabic\';font-style: normal;font-weight: 500;font-display: swap;src: url(https://static.fundraiseup.com/_/packages/common-fonts/ibm-plex-sans-arabic/ibm-plex-sans-arabic-v7-latin_arabic-500.3522bc8d5142.woff2) format(\'woff2\');}/* ibm-plex-sans-arabic-600 - latin_arabic */@font-face {font-family: \'IBM Plex Sans Arabic\';font-style: normal;font-weight: 600;font-display: swap;src: url(https://static.fundraiseup.com/_/packages/common-fonts/ibm-plex-sans-arabic/ibm-plex-sans-arabic-v7-latin_arabic-600.dcdc0ca48997.woff2) format(\'woff2\');}/* ibm-plex-sans-arabic-700 - latin_arabic */@font-face {font-family: \'IBM Plex Sans Arabic\';font-style: normal;font-weight: 700;font-display: swap;src: url(https://static.fundraiseup.com/_/packages/common-fonts/ibm-plex-sans-arabic/ibm-plex-sans-arabic-v7-latin_arabic-700.b4b8862fb297.woff2) format(\'woff2\');}</style><a href="https://ambuwgzv.donorsupport.co/-/XEYQXCYU" style="text-decoration: none;color: inherit;outline: 0;cursor: auto;" class="_vwo_coal_1705939977291_0"><div class="button focus-outline" style="font-size: 16px; height: 48px; color: rgb(255, 255, 255); background-color: #781D7E; border: 0px solid rgb(0, 0, 0); box-shadow: none; border-radius: 4px; margin: 3px 4px 5px;"><div class="button-hover-bg  _vwo_coal_1705939413790_0" style="border-radius: 4px; background-color: RGB(255, 255, 255); display: block !important; visibility: visible !important; opacity: 0.1 !important;"></div><div class="button-label-wrapper"><div dir="auto" data-qa="donate-button-label" class="button-label">Give Monthly</div></div></div></a></li>'
          );
        },
      };

      waitForPromise(function () {
        return !document.querySelector('li[vwo-element-id="1705954976434"]');
      }).then(function () {
        scope.mainJS();
      });
    },
    isTargetUrls: function () {
      return ["/"].some((url) =>
        window.location.pathname.includes(url)
      );
    },
    injectFlicker: function () {
      var css = "header { opacity: 0 !important; }";
      var head = document.head || document.getElementsByTagName("head")[0];
      var style = document.createElement("style");
      style.type = "text/css";
      style.id = "eh-flicker";
      style.appendChild(document.createTextNode(css));
      head.appendChild(style);
      setTimeout(function () {
        let elFlicker = document.getElementById("eh-flicker");
        elFlicker && elFlicker.parentNode.removeChild(elFlicker);
      }, 5000);
    },
    manipulateDOM: function () {
      window.EH = window.EH || {};
      window.EH[this.exp] = this.var;
      document.body.classList.add("eh-exp");
      document.body.setAttribute(`EH_${this.exp}`, this.var);
      this.build();

      // Flicker removal
      let elFlicker = document.getElementById("eh-flicker");
      elFlicker && elFlicker.parentNode.removeChild(elFlicker);
    },
    revealExperiment: function () {
      setTimeout(() => {
        let elFlicker = document.getElementById("eh-flicker");
        elFlicker && elFlicker.parentNode.removeChild(elFlicker);
      }, 500);
    },
    init: function () {
      if (!this.isTargetUrls()) {
        delete window.EH[this.exp];
        document.body.removeAttribute(`EH_${this.exp}`);
      } else {
        this.injectFlicker(); // Comment out if flicker not needed
        this.manipulateDOM();
        this.revealExperiment();
      }
    },
  };
  eh_exp.waitUntil(
    function () {
      return document.querySelector("body");
    },
    function () {
      eh_exp.init();
    }
  );
})();
