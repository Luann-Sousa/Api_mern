const express = require("express");
const cookierParser = require("cookie-parser");
const cors = require('cors');
const path = ("path");
const routes = require("./routes");

require("./database");

const app = express();
const port = process.env.PORT || 3333
;



app.use(express.json());

app.use(routes);



app.listen(port, function(){
    console.log(`Server is runing ! ${port}`);
});