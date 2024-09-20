const checkRoleMiddleware = (roles) => (req, res, next) => {
  const userRole = req.user.role;
  console.log(req.user);
  

  if (!roles.includes(userRole)) {
    return res.status(403).json({ message: "Access denied" });
  }
  next();
}

export default checkRoleMiddleware;