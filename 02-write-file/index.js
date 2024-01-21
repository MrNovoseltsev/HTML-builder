const { stdin, stdout, stderr } = process;
const fs = require("fs");
const output = fs.createWriteStream("02-write-file/output.txt");
const prompt = "Hola! Que tal?\n";

output.write(prompt);
stdout.write(prompt);
stdin.on("data", (data) => {
  output.write(data);
  //Remove new line after stop-word
  const stopWord = data.toString().replace(/\n/g, '');
  if(stopWord == 'exit') {
    console.log('Hasta luego!');
    process.exit();
  }
});

process.on("SIGINT", () => {
  console.log('\nHasta luego!');
  process.exit();
});

