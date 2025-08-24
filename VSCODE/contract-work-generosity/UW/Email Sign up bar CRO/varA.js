(function () {
  var eh_exp = {
    client: "UW",
    exp: "EmailSignUpBar",
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
          bar: {
            header: "Stay connected with us!",
            ctaCopy: "Subscribe",
            copy: "Get the latest stories of Church Based Bible Translation in your inbox.",
            fieldCopyName: "&#42 Your name",
            fieldCopyMail: "&#42 Your email",
          },
        },
        mainHTML: function () {
          return `
				<div class="eh-email-bar-container">
                    <div class="eh-email-bar">
                        <div class="eh-box-copy">
                        <h4>${this.data.bar.header}</h4>
                        </div>
                        <div class="eh-box-submission">
                        <div class="eh-submission-container">
                            <div class="eh-your-name">
                            <label for="eh-name">${this.data.bar.fieldCopyName}</label>
                            <input
                                type="text"
                                name="cheese"
                                id="eh-name"
                                placeholder="${this.data.bar.fieldCopyName}"
                                minlength="2"
                            />
                            </div>
                            <div class="eh-your-email">
                            <label for="eh-email">${this.data.bar.fieldCopyMail}</label>
                            <input
                                type="email"
                                name="email"
                                id="eh-email"
                                placeholder="${this.data.bar.fieldCopyMail}"
                                required
                                minlength="5"
                            />
                            </div>
                            <div class="eh-submit-button">
                            <button id="eh-btn" type="submit" class="">
                                ${this.data.bar.ctaCopy}
                            </button>
                            </div>
                        </div>
                        <div class="eh-submission-copy">
                            <p class="eh-submission-copy-p">${this.data.bar.copy}</p>
                        </div>
                        </div>
                    </div>
                </div>
		    `;
        },
        mainCSS: function () {
          return `
                .eh-exp[eh_emailsignupbar="varA"] {
                  .eh-email-bar-container{
                    margin: 0 0 2rem 0;
                    width: 100%;
                    max-width: 100%;

                    .eh-email-bar{
                        display: flex;
                        background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)), url(https://lh3.googleusercontent.com/iQUP4Zb0faRJ_H1JidtiaO_UhnFUmF4vwstNMoihiOSt8A7s33Z4A0ZRkRegXtIL7J6ftsArz8gZLzWJ6Ydou3wlIutfWg0Mx7c=w3600);
                        border-radius: 10px;
                        padding: 1rem;

                        .eh-box-copy{
                            width: 22%;
                            display: flex;
                            align-items: center;

                            h4{
                                margin: 0;
                            }
                        }
                        .eh-box-submission{
                            display: flex;
                            flex-direction: column;
                            justify-content: center;
                            width: 78%;

                            .eh-submission-container{
                                display: flex;
                                justify-content: space-between;
                                align-items: center;

                                .eh-your-name{
                                    width: 38%;

                                    label{
                                        display: none;
                                    }
                                    input{
                                        width: 100%;
                                        border: solid 2px rgba(1, 66, 99, 1);
                                        border-radius: 15px;
                                        padding: 9px;
                                    }
                                }
                                .eh-your-email{
                                    width: 38%;

                                    label{
                                        display: none;
                                    }
                                    input{
                                        width: 100%;
                                        border: solid 2px rgba(1, 66, 99, 1);
                                        border-radius: 15px;
                                        padding: 9px;
                                    }
                                }
                                .eh-submit-button{
                                    width: 18%;
                                    
                                    button{
                                        background: rgba(1, 66, 99, 1);
                                        color: #fff;
                                   
                                        width: 90%;
                                        border-radius: 38px;
                                        font-size: 1.1rem;
                                        border: none;
                                        padding: 9px;
                                    }
                                } 
                            }
                            .eh-submission-copy{
                                p.eh-submission-copy-p{
                                    margin: 0.25rem 0 0 0;
                                    color: rgba(1, 66, 99, 1) !important;
                                }
                            }
                        }
                    }
                  }
                }
            `;
        },
        mainJS: function () {
          const insertModal = () => {
            const elBody = document.querySelector("body");
            const elFooter = document.querySelector(
              "footer .footer-widgets > .wp-block-group"
            );
            !elBody.querySelector(".eh-email-bar-container") &&
              elFooter.insertAdjacentHTML("beforebegin", this.mainHTML());
          };

          //   const showModal = () => {
          //     waitForPromise(function () {
          //       return document.querySelector(".eh-modal-overlay.eh-hide");
          //     }).then(function () {
          //       document
          //         .querySelector(".eh-modal-overlay.eh-hide")
          //         .classList.remove("eh-hide");

          //       document.querySelector("body").classList.add("eh-noScroll");
          //     });
          //   };

          //   const hideModal = () => {
          //     waitForPromise(function () {
          //       return document.querySelector(".eh-modal-overlay:not(.eh-hide)");
          //     }).then(function () {
          //       document
          //         .querySelector(".eh-modal-overlay:not(.eh-hide)")
          //         .classList.add("eh-hide");

          //       document.querySelector("body").classList.remove("eh-noScroll");
          //     });
          //   };

          //   const mouseDetectEvent = () => {
          //     const onMouseLeave = (event) => {
          //       if (
          //         !sessionStorage.getItem("eh-modalShown") &&
          //         event.clientY <= 10
          //       ) {
          //         setTimeout(() => {
          //           showModal();

          //           sessionStorage.setItem("eh-modalShown", "true");
          //         }, 1000); // 1 seconds delay
          //       }
          //     };

          //     document.addEventListener("mouseleave", onMouseLeave);
          //   };

          //   const closeModalEvent = () => {
          //     // For modal close
          //     document.querySelector("body").addEventListener("click", (e) => {
          //       if (
          //         e.target === document.querySelector(".eh-modal-overlay") ||
          //         e.target === document.querySelector(".eh-modal-close") ||
          //         e.target === document.querySelector(".eh-modal-close button") ||
          //         e.target === document.querySelector(".el-modal-cta") ||
          //         e.target === document.querySelector(".el-modal-cta a")
          //       ) {
          //         hideModal();
          //       }
          //     });
          //   };

          //   const donateCtaEvent = () => {
          //     waitUntil(
          //       function () {
          //         return document.querySelector(".el-modal-cta a");
          //       },
          //       function () {
          //         const elModalCta = document.querySelector(".el-modal-cta a");

          //         elModalCta.addEventListener("click", () => {
          //           document
          //             .querySelector(
          //               'a.wp-block-button__link.wp-element-button[href*="/give"]'
          //             )
          //             .click();
          //         });
          //       }
          //     );
          //   };

          waitUntil(
            function () {
              return document.querySelector("body");
            },
            function () {
              insertModal();
              //   mouseDetectEvent();
              //   closeModalEvent();
              //   donateCtaEvent();
            }
          );
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
      return ["/give"].some((url) => window.location.pathname.includes(url));
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
      //   let elFlicker = document.getElementById("eh-flicker");
      //   elFlicker && elFlicker.parentNode.removeChild(elFlicker);
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
        // this.injectFlicker(); // Comment out if flicker not needed
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
