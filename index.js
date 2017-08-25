const fs = require('fs');
const jsxml = require('node-jsxml');
jsxml.XML.setSettings({ignoreComments : false, ignoreProcessingInstructions : false, createMainDocument: true});

module.exports = function (packagePath, pomPath) {

  let packageContent = fs.readFileSync(packagePath, 'utf8');
  let packageVersion = JSON.parse(packageContent).version;

  console.log('found version ' + packageVersion + ' in package.json');

  let pomContent = fs.readFileSync(pomPath, 'utf8');
  let pom = new jsxml.XML(pomContent);
  let node = pom.child('project').child('version');

  if (node !== '' && node.getValue() !== packageVersion) {
    node.setValue(packageVersion);
    fs.writeFileSync(pomPath, pom.toXMLString());
    console.log('pom.xml updated to version ' + packageVersion);
  } else {
    console.log('pom.xml already has this version set (' + packageVersion + ')');
  }

};
