var dwv = require("dwv");
var fs = require("fs");

var data = fs.readFileSync("./images/DCM1");
var arrayBuffer = new Uint8Array(data).buffer;
var dicomParser = new dwv.dicom.DicomParser();
dicomParser.parse(arrayBuffer);
var tags = dicomParser.getDicomElements();
console.log(tags.getFromName("PatientName"));
