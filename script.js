var editor = ace.edit("editor");
editor.setTheme("ace/theme/monokai");
var JavaScriptMode = ace.require("ace/mode/javascript").Mode;
editor.session.setMode(new JavaScriptMode());