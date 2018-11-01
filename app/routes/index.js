const nodeRoutes = require("./node_routes");

module.exports = (app, db) => {
  nodeRoutes(app, db);
  // Other route groups could go here, in the future
};
