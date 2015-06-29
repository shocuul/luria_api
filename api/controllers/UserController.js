/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	create:function(req,res){
		if(req.body.password !== req.body.confirmPassword){
			return res.json(401,{err:'La contraseña no councide'});
		}
		User.create(req.body).exec(function(err, user){
			if(err){
				return res.json(err.status,{err:err});
			}
			if(user){
				res.json(200,{user:user,token:jwToken.issue({id: user.id})});
			}
		});
	}
};
