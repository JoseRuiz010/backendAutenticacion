const modelRol = require('../models/Roles');


const createRoles = async () => {
    try {
        const contadorRoles = modelRol.count()
                console.log(contadorRoles);
        if (contadorRoles > 0) return;


        const value = await Promise.all(
            [
                new modelRol({ name: 'user' }).save(),
                new modelRol({ name: 'moderador' }).save(),
                new modelRol({ name: 'admin' }).save()
            ]
        )
        console.log(value);

    } catch (error) {
        console.error(error);

    }


}


module.exports = { createRoles }