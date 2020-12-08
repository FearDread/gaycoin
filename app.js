

var BodyParser = require ("body-parser"); 
var Express = require ("express");

var app = Express();

app.use(BodyParser.json());
app.use(BodyParser.urlencoded({ extended: true }));

var server = app.listen(3000, () => {
    console.log("Listening at :" + server.address().port + "...");
});
