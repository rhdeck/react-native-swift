#!/usr/bin/env node
var pbxproj = require("xcode");
var fs = require("fs");
var path = require("path");
var glob = require("glob");
//Get my directory
//Work with current dir
var thisPath = process.cwd();
//Look for dependency
var iosPath = path.join(thisPath, "ios");
if (!fs.existsSync(iosPath)) {
  console.log("Could not find ios in ", thisPath, iosPath);
  console.log(fs.readdirSync(thisPath));
  process.exit();
}
const globs = glob.sync(path.join(iosPath, "*.xcodeproj"));
if (!globs || globs.length == 0) {
  console.log("Could not find xcodeproj directory");
  process.exit();
}
const xpdir = globs[0];
if (xpdir.length === 0) {
  console.log("Could not find xcodeproj directory inside: ", iosPath);
  process.exit();
}
let filename = xpdir + "/project.pbxproj";
let properties = {
  SWIFT_VERSION: "4.0"
};
if (!fs.existsSync(filename)) {
  console.log("Could not find pbxproj file:", filename);
  process.exit();
}
const placeholder = "RNPlaceholder.swift";
const placeholderPath = iosPath + "/" + placeholder;
if (!fs.existsSync(placeholderPath)) {
  console.log("Writing to ", placeholderPath);
  fs.writeFileSync(placeholderPath, "");
}
var proj = pbxproj.project(filename);
proj.parseSync();
proj.addSourceFileNew(placeholder);
for (var key in properties) {
  proj.addBuildProperty(key, properties[key]);
}
const out = proj.writeSync();
fs.writeFileSync(filename, out);
