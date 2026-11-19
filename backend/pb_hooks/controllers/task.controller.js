function getAll(e) {
  const taskService = require(`${__hooks}/services/task.service.js`);
  const userId = e.auth.id;

  const tasks = taskService.getAll(e.app, userId);

  return e.json(200, {
    success: true,
    data: tasks,
  });
}

function getById(e) {
  const taskService = require(`${__hooks}/services/task.service.js`);
  const id = e.request.pathValue("id");

  const task = taskService.getById(e.app, id, e.auth.id);

  return e.json(200, {
    success: true,
    data: task,
  });
}

function create(e) {
  const taskService = require(`${__hooks}/services/task.service.js`);
  const data = e.get("validatedBody");

  const task = taskService.create(e.app, data, e.auth.id);

  return e.json(201, {
    success: true,
    message: "Task created successfully",
    data: task,
  });
}

function update(e) {
  const taskService = require(`${__hooks}/services/task.service.js`);
  const id = e.request.pathValue("id");
  const data = e.get("validatedBody");

  const task = taskService.update(e.app, id, data, e.auth.id);

  return e.json(200, {
    success: true,
    message: "Task updated successfully",
    data: task,
  });
}

function deleteById(e) {
  const taskService = require(`${__hooks}/services/task.service.js`);
  const id = e.request.pathValue("id");

  taskService.deleteById(e.app, id, e.auth.id);

  return e.noContent(204);
}

module.exports = {
  getAll,
  getById,
  create,
  update,
  deleteById,
};
