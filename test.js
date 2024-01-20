// const { stdin, stdout, stderr } = process;

// stdout.write("Hola! Como te llama?\n");
// stdin.on("data", (data) => {
//     const stringData = data.toString();
//     stdout.write("Que tal ");
//     stdout.write(stringData.toUpperCase().split('').reverse().join(''));
//     process.exit();
// });

// process.on("exit", () => stdout.write("\nAdios!"));


// process.on("exit", (code) => {
//     if (code === 0) {
//       stdout.write("Everything is ok");
//     } else {
//       stderr.write(`Something went wrong. The program exited with code ${code}`);
//     }
//   });

// const flag = process.argv[2].toString();

// if (flag == "-d") {
//     console.log(__dirname);
// }
// if (flag == "-f") {
//     console.log(__filename);
// }

// const http = require("http");

// const PORT = 3000;

// const requestHandler = (request, response) => {
//   const { method, url } = request;
//   console.log(`Received ${method} request to ${url}`);
//   response.write("Hello Node.js");
//   response.end("Bye!");
// };

// const server = http.createServer(requestHandler);

// server.listen(PORT, "localhost", () => {
//   console.log(`Server is running on port ${PORT}`);
// });

const fs = require("fs");
const readableStream = fs.createReadStream("text.txt", "utf-8");
const writableStream = fs.createWriteStream("destination.txt");

readableStream.on("data", (chunk) => writableStream.write(chunk));

// let data = '';


// readableStream.on("data", (chunk) => data += chunk);
// readableStream.on("end", () => console.log(data.length));
// readableStream.on("error", (error) => console.log("Error", error.message));