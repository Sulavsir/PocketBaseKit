function applyValidator(e, validator) {
  const body = e.requestInfo().body || {};
  const errors = validator(body);

  if (errors.length > 0) {
    const data = {};

    for (let i = 0; i < errors.length; i++) {
      data[errors[i].field] = errors[i].message;
    }

    return e.json(400, {
      data: data,
      message: "Validation failed",
      status: 400,
    });
  }

  e.set("validatedBody", body);

  return e.next();
}

function validateRegisterBody(e) {
  const { validateRegister } = require(`${__hooks}/validators/auth.validator.js`);
  const { applyValidator } = require(`${__hooks}/middlewares/validate.middleware.js`);

  return applyValidator(e, validateRegister);
}

function validateLoginBody(e) {
  const { validateLogin } = require(`${__hooks}/validators/auth.validator.js`);
  const { applyValidator } = require(`${__hooks}/middlewares/validate.middleware.js`);

  return applyValidator(e, validateLogin);
}

function validateCreateTaskBody(e) {
  const { validateCreateTask } = require(`${__hooks}/validators/task.validator.js`);
  const { applyValidator } = require(`${__hooks}/middlewares/validate.middleware.js`);

  return applyValidator(e, validateCreateTask);
}

function validateUpdateTaskBody(e) {
  const { validateUpdateTask } = require(`${__hooks}/validators/task.validator.js`);
  const { applyValidator } = require(`${__hooks}/middlewares/validate.middleware.js`);

  return applyValidator(e, validateUpdateTask);
}

module.exports = {
  applyValidator,
  validateRegisterBody,
  validateLoginBody,
  validateCreateTaskBody,
  validateUpdateTaskBody,
};
