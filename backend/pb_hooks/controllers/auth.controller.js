function register(e) {
  const authService = require(`${__hooks}/services/auth.service.js`);

  try {
    const data = e.get("validatedBody");
    const user = authService.register(e.app, data);

    return e.json(201, {
      data: {
        id: user.id,
        name: user.get("name"),
        email: user.email(),
      },
      message: "Registration successful.",
      status: 201,
    });
  } catch (error) {
    return e.json(400, {
      data: {},
      message: (error && error.message) || "Registration failed.",
      status: 400,
    });
  }
}

function login(e) {
  const authService = require(`${__hooks}/services/auth.service.js`);
  const data = e.get("validatedBody");
  const user = authService.login(e.app, data);

  return $apis.recordAuthResponse(e, user);
}

function profile(e) {
  const user = e.auth;

  return e.json(200, {
    success: true,
    data: {
      id: user.id,
      name: user.getString("name"),
      email: user.email(),
      role: user.getString("role"),
    },
  });
}

module.exports = {
  register,
  login,
  profile,
};
