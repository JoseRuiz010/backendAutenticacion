const modelRol = require("../models/Roles");
const modelUser = require("../models/User");
const jwt = require('jsonwebtoken');
const config = require('../../config');


const singIn = async (req, res) => {
    const { userName, email, password, roles } = req.body

    const userFound = (modelUser.find({ email }))

    const newUser = new modelUser({ userName, email, "password": await modelUser.encryptpassword(password) });


    if (roles.length > 0) {
        console.log(roles);
        const foundRoles = await modelRol.find({ name: { $in: roles } })
        newUser.roles = foundRoles.map(role => role._id)
    } else {
        const rols = await modelRol.findOne({ name: 'user' })
        newUser.roles = [rols._id]
    }
    const saveUser = await newUser.save()

    const token = jwt.sign({ id: saveUser._id, }, config.secret, {
        expiresIn: 86400
    })
    console.log(newUser);
    res.status(200).json({ token })



}
const singUp = async (req, res) => {
    const { email, password } = req.body

    const user = await modelUser.findOne({ email });
    ;

    if (!user) return res.status(400).json({ messaje: 'El usuario no fue encontrado' })
    const compare = await modelUser.comperPassword(password, user.password)
    console.log(compare);

    if (compare) {
        console.log("User found", user);
        const token = jwt.sign({ id: user._id, }, config.secret, {
            expiresIn: 86400
        })
        return res.json({ token })
    }
    res.status(400).json({ messaje: 'El usuario no fue encontrado' })
}

module.exports = { singIn, singUp }