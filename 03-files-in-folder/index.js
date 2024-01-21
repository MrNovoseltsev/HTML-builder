const fs = require('fs');
const path = require('path');

fs.readdir(path.join(__dirname, '/secret-folder'), (err, files) => { 
  if (err) 
    console.log(err); 
  else {
    //for...of - cycle analog
    files.forEach(file => {
    const filePath = path.join(__dirname, '/secret-folder/', file);
      // access to special method lstat
      fs.lstat(filePath, (err, stats) => {
        if(err)
          return console.log(err);
        if (stats.isFile() == true)
        //access to file details
          console.log(file.split('.').slice(0, 1).join(), ' - ',path.extname(filePath).toString().split('').slice(1).join(''), ' - ', stats.size, ' Bytes');
      });
    })
  }
}); 