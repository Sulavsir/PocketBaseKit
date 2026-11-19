function requireAdmin(e) {
  if (!e.auth) {
    throw new UnauthorizedError("Authentication required");
  }

  if (e.auth.getString("role") !== "admin") {
    throw new ForbiddenError("You don't have permission");
  }

  return e.next();
}

module.exports = {
  requireAdmin,
};
