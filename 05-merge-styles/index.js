const fs = require("fs");
const path = require('path');
const sourceFilePath = path.join(__dirname, '/styles/');
const targetFilePath = path.join(__dirname, '/project-dist/bundle.css');

function bundleCreate() {
  fs.readdir(sourceFilePath, (err, files) => { 
    if (err) {
      console.log(err); 
      return;
    }
    else {
      //for...of - cycle analog
      files.forEach(file => {
        // console.log(filePath);
        const currentFilePath = path.join(sourceFilePath, file);
  
        if(path.extname(currentFilePath).toString() === '.css') {
          // console.log(currentFilePath);
          const readableStream = fs.createReadStream(currentFilePath);
          readableStream.on("data", (chunk) => {
            // console.log(chunk);
            fs.appendFile(targetFilePath, chunk, (err) => {
              if(err) {
                console.log(err);
              }
            });
          });
        }
      })
    }
  });
}

fs.access(targetFilePath, (err) => {
  //if bundle.css doesn't exist create it
  if(err) {
    bundleCreate();
    return;
  }
  //if bundle.css extist update it
  fs.unlink(targetFilePath, (err) => {
    if(err) {
      console.log(err);
      return;
    }
      bundleCreate();
  });
}) 

