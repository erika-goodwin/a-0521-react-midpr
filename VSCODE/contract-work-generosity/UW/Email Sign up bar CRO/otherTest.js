(function waitForSubmitFunction() {
  var postDone = false;
  var ajaxDone = false;
  function tryRedirect() {
    if (postDone && ajaxDone) {
      window.location.href = "https://welcomehallmission.com/welcome";
    }
  }
  (function interceptPost() {
    //console.log("Checking for post submission");
    var originalOpen = XMLHttpRequest.prototype.open;
    var originalSend = XMLHttpRequest.prototype.send;
    XMLHttpRequest.prototype.open = function (method, url) {
      this._isTargetPost =
        method === "POST" &&
        url.includes(
          "https://polo.feathr.co/v1/analytics/update/6680097d182d4e7b419ab7b5"
        );
      return originalOpen.apply(this, arguments);
    };
    XMLHttpRequest.prototype.send = function () {
      //console.log("Checking for submissions if _isTargetPost");
      if (this._isTargetPost) {
        this.addEventListener("load", function () {
          postDone = true;
          tryRedirect();
        });
      }
      return originalSend.apply(this, arguments);
    };
  })();
  (function interceptAjax() {
    //console.log("Checking for get submission");
    var originalAjax = $.ajax;
    $.ajax = function (options) {
      try {
        var formAction = $(".myform").attr("action");
        if (options && options.url === formAction) {
          var originalSuccess = options.success;
          options.success = function (data) {
            if (typeof originalSuccess === "function") {
              originalSuccess(data);
            }
            if (data.result === "success") {
              ajaxDone = true;
              // Implement form tracking logic here?
              tryRedirect();
            }
          };
        }
      } catch (e) {
        console.error("VWO Ajax error", e);
      }
      return originalAjax.call(this, options);
    };
  })();
})();
