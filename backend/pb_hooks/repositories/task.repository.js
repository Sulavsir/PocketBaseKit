function findAllByUser(app, userId) {
  const collection = app.findCollectionByNameOrId("tasks");

  if (!collection.fields.getByName("user")) {
    return app.findRecordsByFilter("tasks", "", "-created", 100, 0);
  }

  return app.findRecordsByFilter(
    "tasks",
    "user = {:userId}",
    "-created",
    100,
    0,
    { userId },
  );
}

function findById(app, id) {
  return app.findRecordById("tasks", id);
}

function create(app, data) {
  const collection = app.findCollectionByNameOrId("tasks");

  const record = new Record(collection);

  record.load(data);

  app.save(record);

  return record;
}

function update(app, record, data) {
  record.load(data);

  app.save(record);

  return record;
}

function deleteRecord(app, record) {
  app.delete(record);
}

module.exports = {
  findAllByUser,
  findById,
  create,
  update,
  deleteRecord,
};
