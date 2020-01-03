require ('./db/dbsetting')
const express=require('express');
const bodyparser=require('body-parser');
const app=express();
const userRoute=require('./router/userRouter')
app.use(bodyparser.urlencoded({
    extended:true
}))
app.use(bodyparser.json());
app.use(express.json());

app.use(userRoute);


app.listen(3000);
