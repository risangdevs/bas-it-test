const adminAuth = (req, res, next) => {
  // console.log(req.headers);
  if (req.headers.role === "admin") {
    next();
  } else {
    res.status(403).json({ message: "Forbidden" });
  }
};
module.exports = adminAuth;
