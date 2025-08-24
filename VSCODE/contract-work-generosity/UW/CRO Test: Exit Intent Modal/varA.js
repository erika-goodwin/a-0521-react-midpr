(function () {
  var eh_exp = {
    client: "UW",
    exp: "ExitIntentModal",
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
            header:
              "Before you go, a gift of any amount equips church leaders around the world.",
            copy: "Give Now",
          },
        },
        mainHTML: function () {
          return `
				<div class="eh-modal-overlay eh-hide">
                    <div class="eh-modal-container">
                        <div class="eh-modal-close">
                            <button class="eh-close-btn" aria-label="Close"></button>
                        </div>
                        <div class="eh-modal-content">
                            <h2>${this.data.cta.header}</h2>
                            <div class="el-modal-cta">
                                <a
                                href="javascript:void(0);"
                                class="box-button elementor-button elementor-size-xl el-box-button"
                                >${this.data.cta.copy}</a
                                >
                            </div>
                        </div>
                    </div>
                </div>
		    `;
        },
        mainCSS: function () {
          return `
                .eh-exp[eh_exitintentmodal="varA"] {
                    position: relative;

                    &.eh-noScroll{
                      overflow: hidden;
                    }

                    .eh-hide{
                        display: none;
                    }

                    .eh-modal-overlay{
                        position: fixed;
                        background: rgba(57, 58, 63, 0.85);
                        top: 0;
                        left: 0;
                        right: 0;
                        bottom: 0;
                        z-index: 999;

                        .eh-modal-container{
                            background: white;
                            max-width: 440px;
                            width: 70%;
                            border-radius: 32px;
                            padding: 2rem;

                            position: absolute;
                            top: 50%;
                            left: 50%;
                            transform: translate(-50%, -50%);

                            .eh-modal-close{
                                position: fixed;
                                right: 0;
                                top: 0;   

                                .eh-close-btn {
                                    position: absolute;
                                    top: 10px;
                                    right: 10px;
                                    width: 30px;
                                    height: 30px;
                                    background: transparent;
                                    border: none;
                                    cursor: pointer;

                                    &:hover {
                                      box-shadow: none;
                                    }
                                }

                                .eh-close-btn::before,
                                .eh-close-btn::after {
                                    content: '';
                                    position: absolute;
                                    top: 50%;
                                    left: 50%;
                                    width: 20px;
                                    height: 2px;
                                    background-color: black;
                                    transform-origin: center;
                                    transform: translate(-50%, -50%);
                                }

                                .eh-close-btn::before {
                                    transform: translate(-50%, -50%) rotate(45deg);
                                }

                                .eh-close-btn::after {
                                    transform: translate(-50%, -50%) rotate(-45deg);
                                }
                            }

                            .eh-modal-content{
                                display: flex;
                                flex-direction: column;
                                align-items: center;
                                justify-content: space-between;

                                h2{
                                    text-align: center;
                                    margin-bottom: 1rem;
                                    border-radius: 18px;

                                    font-size: 1.5rem;
                                    font-weight: 700; 
                                    color: #000;
                                }

                                .el-modal-cta{
                                  display: flex;

                                    a.el-box-button{
                                        background: #f7bb17;;
                                        color: #fff;
                                        text-decoration: none;
                                        // border: solid 3px #000;
                                        border-radius: 3px;
                                        font-weight: 500;
                                        letter-spacing: 1px;
                                        line-height: inherit;
                                        padding-top: 12px;
                                        padding-right: 24px;
                                        padding-bottom: 12px;
                                        padding-left: 24px;
                                        text-transform: uppercase;
                                        padding: 1rem 2rem;

                                        @media screen and (max-width: 896px) {
                                            // font-size: 1.5rem;
                                            padding: 0.8rem 1rem;
                                        }   
                                            
                                        &:hover{
                                          top: -2px;
                                          box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.24);
                                          cursor: pointer;
                                        }
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
            !elBody.querySelector(".eh-modal-overlay") &&
              elBody.insertAdjacentHTML("beforeend", this.mainHTML());
          };

          const showModal = () => {
            waitForPromise(function () {
              return document.querySelector(".eh-modal-overlay.eh-hide");
            }).then(function () {
              document
                .querySelector(".eh-modal-overlay.eh-hide")
                .classList.remove("eh-hide");

              document.querySelector("body").classList.add("eh-noScroll");
            });
          };

          const hideModal = () => {
            waitForPromise(function () {
              return document.querySelector(".eh-modal-overlay:not(.eh-hide)");
            }).then(function () {
              document
                .querySelector(".eh-modal-overlay:not(.eh-hide)")
                .classList.add("eh-hide");

              document.querySelector("body").classList.remove("eh-noScroll");
            });
          };

          const mouseDetectEvent = () => {
            const onMouseLeave = (event) => {
              if (
                !sessionStorage.getItem("eh-modalShown") &&
                event.clientY <= 10
              ) {
                setTimeout(() => {
                  showModal();

                  sessionStorage.setItem("eh-modalShown", "true");
                }, 1000); // 1 seconds delay
              }
            };

            document.addEventListener("mouseleave", onMouseLeave);
          };

          const closeModalEvent = () => {
            // For modal close
            document.querySelector("body").addEventListener("click", (e) => {
              if (
                e.target === document.querySelector(".eh-modal-overlay") ||
                e.target === document.querySelector(".eh-modal-close") ||
                e.target === document.querySelector(".eh-modal-close button") ||
                e.target === document.querySelector(".el-modal-cta") ||
                e.target === document.querySelector(".el-modal-cta a")
              ) {
                hideModal();
              }
            });
          };

          const donateCtaEvent = () => {
            waitUntil(
              function () {
                return document.querySelector(".el-modal-cta a");
              },
              function () {
                const elModalCta = document.querySelector(".el-modal-cta a");

                elModalCta.addEventListener("click", () => {
                  document
                    .querySelector(
                      'a.wp-block-button__link.wp-element-button[href*="/give"]'
                    )
                    .click();
                });
              }
            );
          };

          waitUntil(
            function () {
              return document.querySelector("body");
            },
            function () {
              insertModal();
              mouseDetectEvent();
              closeModalEvent();
              donateCtaEvent();
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
      return ["/sweet-publishing", "/give"].some((url) =>
        window.location.pathname.includes(url)
      );
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
