function registerTaskCrons() {
  cronAdd("cleanup-completed-tasks", "0 0 * * *", () => {
    try {
      const thirtyDaysAgo = new Date(
        Date.now() - 30 * 24 * 60 * 60 * 1000,
      ).toISOString();

      const completedTasks = $app.findRecordsByFilter(
        "tasks",
        "status = 'completed' && updated < {:date}",
        "updated",
        500,
        0,
        {
          date: thirtyDaysAgo,
        },
      );

      completedTasks.forEach((task) => {
        $app.delete(task);
      });

      console.log(`[CRON] Deleted ${completedTasks.length} completed tasks`);
    } catch (error) {
      console.log("[CRON] Cleanup failed:", error);
    }
  });
}

module.exports = { registerTaskCrons };
