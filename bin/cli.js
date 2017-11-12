#!/usr/bin/env node
let program = require("commander");
const makeNewProject = require("../lib/makeNewProject");
var cmdValue, envValue;
program
  .command("init <projectname> [projectpath]").description("Initialize a new swift-based native component project")
  .action(function(projectname, projectpath) {
     if(!projectpath) projectpath = "./" + projectname
     makeNewProject(projectname, projectpath); 
   })
program
  .command("*")
  .action(function(){
     program.help(); 
  })
program
  .parse(process.argv)
