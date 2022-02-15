const express = require("express");
const app = express();
app.use(express.static(__dirname + "/public"));

app.get("/", (req, res) => {
	res.sendFile(`${__dirname}/public/index.html`);
});
const PORT = process.env.PORT || 8080;
app.listen(PORT, (err) => {
	console.log(`Listening to the server at port number ${PORT}`);
});
