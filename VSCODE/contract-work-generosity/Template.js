(function () {
  var eh_exp = {
    client: "",
    exp: "",
    var: "",
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
        mainHTML: function () {
          return `
						<a class="eh-continue-cta" href="${this.data.cta.href}">${this.data.cta.name}</a>
					`;
        },
        mainCSS: function () {
          return `
						.eh-exp[EH_${this.exp}] {
							background-color: white;
						}
					`;
        },
        mainJS: function () {
          console.log("main JS block >>>>", this.mainHTML());
          // document.querySelectorAll('body').forEach(elBody => {
          // 	!elBody.querySelectorAll('.wf-continue-cta').length && elBody.insertAdjacentHTML('beforeend', this.mainHTML());
          // })

          waitUntil(
            function () {
              return document.querySelectorAll("body").length;
            },
            function () {
              console.log("Has body using waitUntil >>>>>>>");
            }
          );

          waitForPromise(function () {
            return document.querySelectorAll("body").length;
          }).then(function () {
            console.log("Has body using waitForPromise >>>>>>>");
          });
        },
      };

      !document.querySelectorAll(`.eh-${this.exp}-css`).length &&
        document.head.insertAdjacentHTML(
          "beforeend",
          `<style class="eh-${this.exp}-css">${scope.mainCSS()}</style>`
        );

      waitForPromise(function () {
        return document.querySelectorAll("body div").length;
      }).then(function () {
        scope.mainJS();
      });
    },
    isTargetUrls: function () {
      return [""].some((url) => window.location.pathname.includes(url));
    },
    injectFlicker: function () {
      var css = "body { opacity: 0 !important; }";
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
