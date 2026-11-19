function findByEmail(app, email) {
  return app.findAuthRecordByEmail("users", email);
}
function create(app, data) {
  try {
    const collection = app.findCollectionByNameOrId("users");
    const record = new Record(collection);

    record.set("name", data.name);
    record.set("email", data.email);
    record.set("password", data.password);
    record.set("passwordConfirm", data.passwordConfirm);

    app.save(record);

    return record;
  } catch (error) {
    console.error("[AUTH REPOSITORY] Registration failed:", error);
    throw error;
  }
}

module.exports = {
  create,
  findByEmail,
};
