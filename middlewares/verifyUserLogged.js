function admin(req, res, next){
    let user = req.session.userLogged;
        if (user){
                next();       
        }else{
                const error = new Error ('Usuario nao tem privilegios')
        error.status = "401"
        throw error;
            }
}         

module.exports = admin;