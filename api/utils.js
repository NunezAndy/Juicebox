function requireUser(req, res, next) {
  if (!req.user) {
    res.status(401);
    next({
      name: "MissingUserError",
      message: "You must be logged on to continue"
    });
  }

  next();

}

module.exports = {
  requireUser
}