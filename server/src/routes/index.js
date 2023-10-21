const router = require("express").Router();
const { routerAuth } = require("./Auth.route");
const { routerUsers } = require("./Users.route.js");

router.get('/', (req, res) => {
  res.send('¡Bienvenido a mi API!');
});

router.use("/api/auth", routerAuth);
router.use("/api/users", routerUsers);

module.exports = {
   router
};
