const { registerTaskRoutes } = require(`${__hooks}/routes/task.routes.js`);

const { registerAuthRoutes } = require(`${__hooks}/routes/auth.routes.js`);

// const { registerTaskCrons } = require(`${__hooks}/crons/task.cron.js`);

// registerTaskCrons();
registerTaskRoutes();
registerAuthRoutes();
