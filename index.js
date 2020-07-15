const express = require("express");
const path = require("path");
const logger = require("./middleware/logger");
const exphbs = require("express-handlebars")
const app = express();
const members = require("./Members")

app.engine('handlebars', exphbs({defaultLayout : 'main'}));
app.set('view engine', 'handlebars');

app.use(logger);
app.use(express.json())
app.use(express.urlencoded({extended : false}))
//app.use(express.static(path.join(__dirname , "public")));

app.get("/",(req,res) => res.render('index',{
    title : "okey",
    members
}));
///routes/api/members
app.use("/api/members",require("./routes/api/members"));

const PORT = process.env.PORT || 5000 ;


app.listen(PORT,() => console.log(`http://localhost:${PORT}`))


