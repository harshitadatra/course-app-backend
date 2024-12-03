const express = require('express');
const app = express();
const PORT = 3000;
const { userRouter } = require("./routes/user");
const { courseRouter } = require('./routes/course');
const { adminRouter } = require("./routes/admin")
app.use(express.json());

app.use("/user", userRouter)
app.use("/admin", adminRouter)
app.use("/course", courseRouter)


app.listen(PORT, () => {
    console.log(`app is listening on port ${PORT}`)
})