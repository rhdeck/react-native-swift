const copyProjectTemplateAndReplace = require("./copyProjectTemplateAndReplace")
function makeNewProject(projectname, projectpath, sourcePath = null) {
  console.log("Creating project " + projectname + " at path " + projectpath); 
  //Open path to templates
  //Walk tree - copying as I go
  //look for files with the "rnswifttemplate" name, and replace with the projectname
  if(!sourcePath) sourcePath = __dirname + "/../templates/demo/"
  console.log("Copying from sourcePath: " + sourcePath); 
  copyProjectTemplateAndReplace(sourcePath, projectpath, projectname);
  console.log("Done. Created project " + projectname + " at " + projectpath); 
}
module.exports = makeNewProject
