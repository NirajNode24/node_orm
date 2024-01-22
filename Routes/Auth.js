const express = require('express')
const { generateToken } = require('../utils/utils');
const { Login_Admin } = require("../Controllers/admin")
const { Login_User } = require("../Controllers/user")
const authRouter = express.Router()

authRouter.post('/su-login', async (req, res) => {
    try {
        const { email, password } = req.body;
        const userDetails = await Login_Admin(email, password);
        const token = generateToken(userDetails.id);
        res.json({ user: userDetails, token, success: true, message: "Login successful" });
    } catch (error) {
        res.status(401).json({ error: `Invalid credentials ${error}` });
    }
})

authRouter.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        const userDetails = await Login_User(email, password);
        const token = generateToken(userDetails.id);
        res.json({ user: userDetails, token, success: true, message: "Login successful" });
    } catch (error) {
        res.status(401).json({ error: `Invalid credentials ${error}` });
    }
})


module.exports = authRouter;