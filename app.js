
var routes = require("");
var classes = require("");

var app = Express();

app.use(BodyParser.json());
app.use(BodyParser.urlencoded({ extended: true }));

var server = app.listen(3000, () => {
    console.log("Listening at :" + server.address().port + "...");
});
