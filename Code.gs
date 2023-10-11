function doGet(e) {
  let htmlTemplate = HtmlService.createTemplateFromFile("index");
  return htmlTemplate.evaluate().
    setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL).
    setTitle("Welcome to _qrCode_demo");
} // end of doGet(e)
