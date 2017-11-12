const copyProjectTemplateAndReplace = require("./copyProjectTemplateAndReplace")
function makeNewProject(projectname, projectpath) {
  console.log("Creating project " + projectname + " at path " + projectpath + "\n\n"); 
  //Open path to templates
  //Walk tree - copying as I go
  //look for files with the "rnswifttemplate" name, and replace with the projectname
  const sourcePath = __dirname + "/../templates/demo/"
  console.log("Copying from sourcePath: " + sourcePath); 
  console.log("Using project name of " + projectname); 
  copyProjectTemplateAndReplace(sourcePath, projectpath, projectname);
}
module.exports = makeNewProject
