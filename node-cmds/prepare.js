const fs = require('fs');
const ncp = require('ncp').ncp;
const path = require("path");

const sourceFolder = path.resolve(__dirname, '..', 'commands');
const targetFolder = path.resolve(__dirname, '..', 'dist');

if (fs.existsSync(targetFolder)) {

  ncp(sourceFolder, targetFolder, function (err) {
    if (err) {
      return console.error(err);
    }
  });


  const sourceFile = path.resolve(__dirname, '..', 'dist', 'taskpane.html');
  const targetFile = path.resolve(__dirname, '..', 'dist', 'index.html');

  fs.copyFile(sourceFile, targetFile, (err) => {
    if (err) throw err;
  });

  const manifestFile = 'manifest.xml'
  const manifestSourceFile = path.resolve(__dirname, '..', manifestFile);
  const manifestTargetFile = path.resolve(__dirname, '..', 'dist', manifestFile);


  fs.copyFile(manifestSourceFile, manifestTargetFile, () => { });

}
