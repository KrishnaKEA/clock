// importing modules
const express = require("express");
const app = express();
// it allows us to use external css and javascript to the html file using express.
app.use(express.static(__dirname + "/public"));

app.get("/", (req, res) => {
	res.sendFile(`${__dirname}/public/index.html`);
});

// line below is required while deploying
const PORT = process.env.PORT || 8080;
app.listen(PORT, (err) => {
	console.log(`Listening to the server at port number ${PORT}`);
});
