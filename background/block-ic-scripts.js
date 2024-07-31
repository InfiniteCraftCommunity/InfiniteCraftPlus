browser.webRequest.onBeforeRequest.addListener(
  (data) => {
    return { cancel: data.originUrl.startsWith("https://neal.fun/infinite-craft") };
  }, {
    types: ["script"],
    urls: ["*://neal.fun/_nuxt/*"]
  }, [
    "blocking"
  ]
);
