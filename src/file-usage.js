const fs = require('fs');

const filename = 'file.txt';
if (fs.existsSync(filename)) {
    console.log('File already exists !');
} else {
    console.log('File will be created !');
    fs.writeFileSync(filename, "Hi there..");
}


let content = 'Ad some data';

fs.appendFileSync(filename, content);