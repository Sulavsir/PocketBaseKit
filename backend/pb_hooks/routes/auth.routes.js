const authController = require(`${__hooks}/controllers/auth.controller.js`);

const { requireAdmin } = require(`${__hooks}/middlewares/role.middleware.js`);

const { validateRegisterBody, validateLoginBody } = require(
  `${__hooks}/middlewares/validate.middleware.js`,
);

function registerAuthRoutes() {
  routerAdd(
    "GET",
    "/api/pocketdb/admin/dashboard",
    (e) => {
      return e.json(200, {
        message: "Welcome Admin",
      });
    },
    $apis.requireAuth("users"),
    requireAdmin,
  );

  routerAdd(
    "POST",
    "/api/pocketdb/auth/register",
    authController.register,
    $apis.requireGuestOnly(),
    validateRegisterBody,
  );

  routerAdd(
    "POST",
    "/api/pocketdb/auth/login",
    authController.login,
    $apis.requireGuestOnly(),
    validateLoginBody,
  );

  routerAdd(
    "GET",
    "/api/pocketdb/auth/profile",
    authController.profile,
    $apis.requireAuth("users"),
  );
}

module.exports = {
  registerAuthRoutes,
};
