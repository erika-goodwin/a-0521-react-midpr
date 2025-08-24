fetch(
  "https://api.leadpages.io/integration/v1/forms/eMyhisU6rGHTisoHwGoe6Z/submissions?skip_redirect=true",
  {
    headers: {
      accept: "*/*",
      "accept-language": "en-US,en;q=0.9",
      "content-type": "application/x-www-form-urlencoded",
      "sec-ch-ua":
        '"Not;A=Brand";v="99", "Google Chrome";v="139", "Chromium";v="139"',
      "sec-ch-ua-mobile": "?0",
      "sec-ch-ua-platform": '"macOS"',
      "sec-fetch-dest": "empty",
      "sec-fetch-mode": "cors",
      "sec-fetch-site": "cross-site",
      "x-submission-id": "303ff93c-c643-4cd7-825b-8a0b1c7e0422",
    },
    referrer: "https://connect.unfoldingword.us/",
    body: "6f58bcafa2e5d174ed1b3658e41839b0=test&fbd8c6d6368cb3f0177e0e4b743b6ce7=testest&7ea30f8c5cf5d951189f340c1d0c682c=test%40gmail.com&lp_spam_t=86746",
    method: "POST",
    mode: "cors",
    credentials: "omit",
  }
)
  .then((response) => response.json())
  .then((data) => console.log(">>>> data", data));



  