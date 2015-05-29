/**
 * GET /
 * Home page.
 */
exports.index = function(req, res) {
  res.render('home', {
    title: 'Home'
  });
};

/**
 * GET /
 * Escape Velocity page.
 */
exports.escapeVelocity = function(req, res) {
  res.render('escape-velocity', {
    title: 'Landing Page'
  });
};
