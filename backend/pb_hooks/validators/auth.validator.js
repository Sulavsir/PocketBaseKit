function validateRegister(data) {
  const body = data || {};
  const errors = [];

  if (typeof body.name !== "string" || !body.name.trim()) {
    errors.push({ field: "name", message: "Name is required" });
  }

  if (
    typeof body.email !== "string" ||
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(body.email)
  ) {
    errors.push({ field: "email", message: "Valid email is required" });
  }

  if (typeof body.password !== "string" || body.password.length < 10) {
    errors.push({
      field: "password",
      message: "Password must contain at least 10 characters",
    });
  }

  if (body.password !== body.passwordConfirm) {
    errors.push({
      field: "passwordConfirm",
      message: "Passwords do not match",
    });
  }

  if (errors.length === 0) {
    body.name = body.name.trim();
    body.email = body.email.trim().toLowerCase();
  }

  return errors;
}

function validateLogin(data) {
  const body = data || {};
  const errors = [];

  if (typeof body.email !== "string" || !body.email.trim()) {
    errors.push({ field: "email", message: "Email is required" });
  }

  if (typeof body.password !== "string" || !body.password) {
    errors.push({ field: "password", message: "Password is required" });
  }

  if (errors.length === 0) {
    body.email = body.email.trim().toLowerCase();
  }

  return errors;
}

module.exports = {
  validateRegister,
  validateLogin,
};
