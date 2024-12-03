const express = require('express');
const app = express();
const PORT = 3000;
const {userRouter} = require("./routes/user")
app.use(express.json());

 app.use("/user",userRouter);


app.listen(PORT, () => {
    console.log(`app is listening on port ${PORT}`)
})