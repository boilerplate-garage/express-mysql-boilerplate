var rootController = require('./controllers/root.js');

module.exports = {
  setup: function(app) {
    app.get('/', rootController.rootGetAction);
  }
};
