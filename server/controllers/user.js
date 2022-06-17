const { User } = require("../models");
class UserController {
  static async login(req, res, next) {
    try {
      const { username, password } = req.body;
      if (!username || !password) {
        throw { message: "Please fill all the fields" };
      }
      const doLogin = await User.findOne({
        where: { username },
      });
      if (!doLogin) {
        throw { message: "Username does not exist" };
      } else {
        if (doLogin.password !== password) {
          throw { message: "Password is incorrect" };
        } else {
          return res
            .status(200)
            .json({
              userid: doLogin.id,
              username: doLogin.username,
              role: doLogin.role,
            });
        }
      }
    } catch (error) {
        console.log(`masuk error`);
      res.status(500).json({ error });
    }
  }
}
module.exports = UserController;
