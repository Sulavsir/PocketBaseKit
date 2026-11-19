const taskRepository = require(`${__hooks}/repositories/task.repository.js`);

function getAll(app, userId) {
  return taskRepository.findAllByUser(app, userId);
}

function getById(app, id, userId) {
  const task = taskRepository.findById(app, id);

  if (
    task.collection().fields.getByName("user") &&
    task.getString("user") !== userId
  ) {
    throw new ForbiddenError("You cannot access this task");
  }

  return task;
}

function create(app, data, userId) {
  return taskRepository.create(app, {
    ...data,
    user: userId,
  });
}

function update(app, id, data, userId) {
  const task = getById(app, id, userId);

  return taskRepository.update(app, task, data);
}

function deleteById(app, id, userId) {
  const task = getById(app, id, userId);

  taskRepository.deleteRecord(app, task);

  return true;
}

module.exports = {
  getAll,
  getById,
  create,
  update,
  deleteById,
};
