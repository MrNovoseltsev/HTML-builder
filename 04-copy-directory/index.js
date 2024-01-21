const fs = require('fs');
const path = require('path');
const targetFolderPath = path.join(__dirname, 'files-copy');
const sourceFolderPath = path.join(__dirname, 'files');

fs.mkdir(targetFolderPath, (err) => {
  if(err) {
    return console.log(err);
  }
});

fs.readdir(sourceFolderPath, (err, files) => { 
  if (err) 
    console.log(err); 
  else {
    files.forEach((file) => {
      fs.copyFile(path.join(sourceFolderPath, file), path.join(targetFolderPath, file), (err) => {
        if (err) {
          console.log(err);
        }
      })
    })
  }
});