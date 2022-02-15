const express = require("express");
const app = express();
app.use(express.static(__dirname + "/public"));

app.get("/", (req, res) => {
	res.sendFile(`${__dirname}/public/index.html`);
});
const port = Process.env.PORT || 3000;
app.listen(port, (err) => {
	console.log("Listening to the server at port number 8081");
});
