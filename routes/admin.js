const { Router } = require('express');
const adminRouter = Router();

adminRouter.post("/signup", (req, res) => {
    res.status(200).json({ message: "signup route" })
})
adminRouter.post("/sigin", (req, res) => {
    res.status(200).json({ message: "signin route" });
})
adminRouter.post("/course", (req, res) => {
    res.status(200).json({ message: "course post route" })
})
adminRouter.put("/course", (req, res) => {
    res.status(200).json({ message: "course put route" })
})
adminRouter.get("/course/bulk", (req, res) => {
    res.status(200).json({ message: "course bulk" })
})


module.exports = {
    adminRouter: adminRouter

}