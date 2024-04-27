const http = require("http");
const url = require("url");

// Create Server of Http
const server = http.createServer((req, res) => {
  // parse URL to the request
  const parseURL = url.parse(req.url, true);

  // extract the operation type and values of a, b, from the URL query parameters
  const { para, query } = parseURL;
  const operation = para.slice(1); // to remove the / before operation 
  const a = parseFloat(query.a);
  const b = parseFloat(query.b);

  // operation type
  let result = 0;
  switch (operation) {
    case "add":
      result = a + b;
      break;
    case "subtract":
      result = a - b;
      break;
    case "multiply":
      result = a * b;
      break;
    case "divide":
      result = a / b;
      break;
    default:
      res.end("error here ");
      break;
  }

  console.log("the Result of operation is ", result);
});

server.listen(3001, () => {
  console.log("Done");
});
//
 


