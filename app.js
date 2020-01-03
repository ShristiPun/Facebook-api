require ('./db/dbsetting')
const express=require('express');
const bodyparser=require('body-parser');
const app=express();
const favouriteRoute=require('./routers/favouriteRoute')
app.use(bodyparser.urlencoded({
    extended:true
}))
app.use(bodyparser.json());
app.use(express.json());

app.use(accommodationRoute);


app.listen(3000);
