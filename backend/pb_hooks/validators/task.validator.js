function validateCreateTask(body) {
  const errors = [];

  if (typeof body.title !== "string" || !body.title.trim()) {
    errors.push({
      field: "title",
      message: "Title is required",
    });
  }

  if (typeof body.completed !== "boolean") {
    errors.push({
      field: "completed",
      message: "Completed must be a boolean",
    });
  }

  return errors;
}

function validateUpdateTask(data) {
  const errors = [];

  if (Object.keys(data).length === 0) {
    errors.push({
      field: "body",
      message: "At least one field is required",
    });
  }

  if (
    data.title !== undefined &&
    (typeof data.title !== "string" || !data.title.trim())
  ) {
    errors.push({
      field: "title",
      message: "Title must be a non-empty string",
    });
  }

  if (data.completed !== undefined && typeof data.completed !== "boolean") {
    errors.push({
      field: "completed",
      message: "Completed must be a boolean",
    });
  }

  return errors;
}

module.exports = {
  validateCreateTask,
  validateUpdateTask,
};
