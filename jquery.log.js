$(function () {

  var logWindow, code, codeBuffer;
  function console_init() {
    logWindow = window.open("", "", "Width=600,Height=200");
    logWindow.focus();

    var css = '<style>*{padding:0;margin:0;font:12px/1 "andale mono",courier,monospace;}li{background:#efefef;padding:4px10px;border-bottom:1pxsolid#ccc;}</style>';
    $('head', logWindow.document).append(css);
    $('body', logWindow.document).append('<ul></ul>');
  }

  // konami code - up up down down left right left right b a
  code = String.fromCharCode(38, 38, 40, 40, 37, 39, 37, 39, 66, 65);
  codeBuffer = "";

  $(document).keyup(function (e) {
    codeBuffer += String.fromCharCode(e.which);

    if (code.substring(0, codeBuffer.length) == codeBuffer) {
      if (code.length == codeBuffer.length) {

        if (typeof console === "undefined") {
          console = {};
        }

        console.log = function log (string) {
          $('ul', logWindow.document).append('<li>'+string+'</li>');
          logWindow.scrollTo(0,logWindow.document.body.scrollHeight);
        }

        console_init();
        codeBuffer = "";
      }
    } else {
      codeBuffer = "";
    }
  });
});