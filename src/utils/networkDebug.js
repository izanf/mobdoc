export default function enableNetworkDebug () {
  global.XMLHttpRequest = global.originalXMLHttpRequest
    ? global.originalXMLHttpRequest
    : global.XMLHttpRequest;
  global.FormData = global.originalFormData
    ? global.originalFormData
    : global.FormData;

  fetch; // eslint-disable-line

  if (window.__FETCH_SUPPORT__) {
    // it's RNDebugger only to have
    window.__FETCH_SUPPORT__.blob = false;
  } else {
    /*
    * Set __FETCH_SUPPORT__ to false is just work for `fetch`.
    * If you're using another way you can just use the native Blob and remove the `else` statement
    */
    global.Blob = global.originalBlob ? global.originalBlob : global.Blob;
    global.FileReader = global.originalFileReader
      ? global.originalFileReader
      : global.FileReader;
  }
}
