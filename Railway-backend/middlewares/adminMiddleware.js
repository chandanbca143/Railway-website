const adminMiddleware = (req, res, next) => {
  const token = req.headers.authorization;

  if (token === "Bearer admin123") {
    next();
  } else {
    res.status(403).json({ message: "Access denied. Admins only." });
  }
};

module.exports = adminMiddleware;
