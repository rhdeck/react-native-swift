#!/usr/bin/env node
var pbxproj = require('xcode'); 
var fs = require('fs');
var path = require('path'); 
var glob = require('glob');
//Get my directory
var thisPath = process.argv[1];
var thisPath = path.dirname(thisPath); //bin directory
var thisPath = path.dirname(thisPath); //dependency directory
var thisPath = path.dirname(thisPath); // node_modules
var baseName = path.basename(thisPath);
if(!baseName.startsWith("node_modules")) {
  console.log("This is not a dependency: ", thisPath);
  process.exit(); 
}
var thisPath = path.dirname(thisPath); // parent
var iosPath = thisPath + "/ios";
if(!fs.existsSync(iosPath)) {
  console.log("Could not find ios in ", thisPath, iosPath); 
  console.log(fs.readdirSync(thisPath));
  process.exit();
}
xpdir = glob.sync(iosPath +"/*.xcodeproj")[0];
if(xpdir.length === 0) {
  console.log("Could not find xcodeproj directory inside: ", iosPath)
  process.exit();
}
let filename = xpdir + "/project.pbxproj";
let properties = {
  'SWIFT_VERSION': '4.0'
};
if(!fs.existsSync(filename)) {
  console.log("COuld not find pbxproj file:" , filename);
  process.exit(); 
}
const placeholder = "RNPlaceholder.swift"
const placeholderPath = iosPath + "/" + placeholder
if(!fs.existsSync(placeholderPath)) {
  console.log("Writing to ", placeholderPath)
  fs.writeFileSync(placeholderPath, "");
}
var proj = pbxproj.project(filename);
proj.parse(function(err) {
  const fp = proj.getFirstProject();
  let file = proj.addFile(placeholder, null, fp);
  if(!file) {
    console.log("Looks like the file is already here - aborting", placeholder);
    return; 
  }
  file.uuid = this.generateUuid();
  const nts = proj.pbxNativeTargetSection();
  for (var key in nts) {
    if(key.endsWith("_comment")) continue; 
    const target = proj.pbxTargetByName(nts[key].name);
    file.target = key;
    proj.addToPbxBuildFileSection(file);        // PBXBuildFile 
    proj.addToPbxSourcesBuildPhase(file); 
  }
  // process.exit(); 
  for(var key in properties) {
    proj.addBuildProperty(key, properties[key]);
  }
  const out = proj.writeSync();
  fs.writeFileSync(filename, out);
});
