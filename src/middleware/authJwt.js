const jwt = require('jsonwebtoken');
const { secret } = require('../../config');
const modelUser = require('../models/User');

const verificarToken = async (req, res, next) => {
    try {

        const token = req.headers["x-access-token"];
        console.log(token);

        if (!token) return res.status(403).json({ messaje: "No token provider" })
        const decoder = jwt.verify(token, secret);
        console.log(decoder);
        if (!await modelUser.findById(decoder.id)) return res.status(404).json({ messaje: " user not found" })
        next()
    } catch (error) {
        return res.status(401).json({ messaje: " no autorizado" })
    }
}


module.exports = {
    verificarToken
}