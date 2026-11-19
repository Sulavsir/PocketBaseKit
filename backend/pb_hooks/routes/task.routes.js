const taskController = require(`${__hooks}/controllers/task.controller.js`);

const { validateCreateTaskBody, validateUpdateTaskBody } = require(
  `${__hooks}/middlewares/validate.middleware.js`,
);

function registerTaskRoutes() {
  routerAdd(
    "GET",
    "/api/pocketdb/tasks",
    taskController.getAll,
    $apis.requireAuth("users"),
  );

  routerAdd(
    "GET",
    "/api/pocketdb/tasks/{id}",
    taskController.getById,
    $apis.requireAuth("users"),
  );

  routerAdd(
    "POST",
    "/api/pocketdb/tasks",
    taskController.create,
    $apis.requireAuth("users"),
    validateCreateTaskBody,
  );

  routerAdd(
    "PATCH",
    "/api/pocketdb/tasks/{id}",
    taskController.update,
    $apis.requireAuth("users"),
    validateUpdateTaskBody,
  );

  routerAdd(
    "DELETE",
    "/api/pocketdb/tasks/{id}",
    taskController.deleteById,
    $apis.requireAuth("users"),
  );
}

module.exports = {
  registerTaskRoutes,
};
