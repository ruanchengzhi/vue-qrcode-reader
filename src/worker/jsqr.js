self.importScripts("https://cdn.jsdelivr.net/npm/jsqr@1.2.0/dist/jsQR.min.js")

self.addEventListener("message", function(event) {
  const imageData = event.data;

  const result = jsQR(imageData.data, imageData.width, imageData.height, {
    inversionAttempts: "dontInvert"
  });

  let content = null;
  let location = null;

  if (result !== null) {
    content = result.data;
    location = result.location;
  }

  const message = { content, location, imageData };

  self.postMessage(message, [imageData.data.buffer]);
});
