require ('./db/dbsetting')
const express=require('express');
const bodyparser=require('body-parser');
const app=express();
const userRoute=require('./router/userRouter')
const postRoute=require('./router/postRouter')
const path = require("path");
const publicdirectory= path.join(__dirname,'public');
app.use(express.static(publicdirectory));

app.use(bodyparser.urlencoded({
    extended:true
}))
app.use(bodyparser.json());
app.use(express.json());

app.use(userRoute);
app.use(postRoute);


app.listen(3030);
