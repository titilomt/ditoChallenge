const nodeRoutes = require("./events_routes");

module.exports = (app, db) => {
  nodeRoutes(app, db);
  // Other route groups could go here, in the future
};
