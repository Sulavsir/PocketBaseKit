const userRepository = require(`${__hooks}/repositories/user.repository.js`);


function register(app, data) {
  return userRepository.create(app, data);
}

function login(app, data) {
  let user;

  try {
    user = userRepository.findByEmail(app, data.email);
  } catch (error) {
    throw new BadRequestError("Invalid email or password");
  }

  if (!user.validatePassword(data.password)) {
    throw new BadRequestError("Invalid email or password");
  }

  const isActiveField = user.collection().fields.getByName("isActive");

  if (isActiveField && !user.getBool("isActive")) {
    throw new ForbiddenError("Your account is disabled");
  }

  return user;
}

module.exports = {
  register,
  login,
};
